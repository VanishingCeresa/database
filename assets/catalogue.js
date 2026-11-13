// Builds the records (home page) and the catalogue list from data/examples.js.
//
//   <div id="records"></div>     number of examples, highest genus, counts by kind
//   <div id="catalogue"></div>   search, filters and the list
//
// A page shows a subset when its <body> has data-status="chow|griffiths|conditional"
// and/or data-genus="3". To make a page for genus 4: copy genus3.html, change the 3s.

const STATUS_PAGE = { chow: "chow.html", griffiths: "griffiths.html", conditional: "conditional.html" };
const GENUS_PAGE = { 3: "genus3.html" };   // add  4: "genus4.html"  once that page exists

const stripKnowls = s => String(s ?? "").replace(/\{\{[\w-]+\|?([^}]*)\}\}/g, "$1");
const plainText = s => stripKnowls(s).replace(/[$\\{}]/g, "").toLowerCase();
const genusOf = r => Number(r.genus);
const DASH = '<span class="muted" title="not recorded">–</span>';

function renderRecords(el, all) {
  const n = v => all.filter(r => r.status === v).length;
  const top = Math.max(...all.map(genusOf).filter(g => !isNaN(g)));
  const holder = all.find(r => genusOf(r) === top);
  const byGenus = [...new Set(all.map(genusOf))].filter(g => !isNaN(g)).sort((a, b) => a - b);
  // One line per record: [label, number, colour class, link]
  const line = ([label, num, cls, href]) => {
    const inner = `<span class="rl">${label}</span><span class="rn ${cls}">${num}</span>`;
    return `<li>${href ? `<a href="${href}">${inner}</a>` : `<span>${inner}</span>`}</li>`;
  };
  const left = [
    ["Examples", all.length, "", "index.html"],
    ["Highest genus", top, "", `example.html?id=${encodeURIComponent(holder.id)}`],
    ["Chow group", n("chow"), "chow", STATUS_PAGE.chow],
    ["Griffiths group", n("griffiths"), "griffiths", STATUS_PAGE.griffiths],
    ["Conditional", n("conditional"), "conditional", STATUS_PAGE.conditional],
    ["With a criterion", all.filter(r => r.locus).length, "", "locus.html"],
  ];
  const right = byGenus.map(g => [`Genus ${g}`, all.filter(r => genusOf(r) === g).length, "", GENUS_PAGE[g] || ""]);
  el.innerHTML = `<div class="recs"><ul>${left.map(line).join("")}</ul><ul>${right.map(line).join("")}</ul></div>`;
}

// Signature written as in the LMFDB: [quotient genus; orders of the branch points].
function signatureHTML(r) {
  if (!r.gap) return DASH;
  const sig = r.signature || [];
  return sig.length ? `$[0;\\,${sig.join(",")}]$` : `$[${escapeHTML(r.genus)};\\,-]$`;
}
document.addEventListener("DOMContentLoaded", async () => {
  const root = document.getElementById("catalogue");
  const records = document.getElementById("records");
  if (!root && !records) return;

  let data;
  try { data = await loadExamples(); }
  catch (e) { (root || records).innerHTML = `<p class="notice">${escapeHTML(e.message)}</p>`; typeset(); return; }
  const all = data.examples.slice().sort(compareExamples);
  if (records) renderRecords(records, all);
  if (!root) { typeset(document.querySelector("main")); return; }

  const fixedStatus = document.body.dataset.status || "";
  const fixedGenus = document.body.dataset.genus || "";
  const fixedLocus = document.body.dataset.locus || "";
  const rows = all.filter(r => (!fixedStatus || r.status === fixedStatus) && (!fixedGenus || String(genusOf(r)) === fixedGenus)
    && (!fixedLocus || r.locus));
  const genera = [...new Set(rows.map(genusOf))].sort((a, b) => a - b);
  const chip = (group, value, label, on) =>
    `<button type="button" class="chip${on ? " on" : ""}" data-${group}="${value}" aria-pressed="${on ? "true" : "false"}">${label}</button>`;

  root.innerHTML = `
    <div class="controls">
      <input type="search" id="q" placeholder="Search label, group, name, method" aria-label="Search the catalogue">
      ${fixedGenus || genera.length < 2 ? "" : `<select id="genus" aria-label="Genus">
        <option value="">All genera</option>${genera.map(g => `<option value="${g}">Genus ${g}</option>`).join("")}</select>`}
      <div class="filter" data-filter="type" role="group" aria-label="Curves or families">
        ${chip("type", "", "All", true)}${chip("type", "curve", "Curves")}${chip("type", "family", "Families")}</div>
    </div>
    <div class="summary">
      <span id="count"></span>
      <span class="muted">Click a column header to sort, and a row to open the example.</span>
      <a href="#" id="download">Download the data (JSON)</a>
    </div>
    <div class="table-wrap">
      <table id="tbl">
        <thead><tr>
          <th data-key="label">Label <span class="arrow"></span></th>
          <th data-key="genus" class="num">Genus <span class="arrow"></span></th>
          <th data-key="group">$\\mathrm{Aut}(C)$ <span class="arrow"></span></th>
          <th data-key="order" class="num">Order <span class="arrow"></span></th>
          <th class="nosort">Signature</th>
          <th data-key="status">Torsion in <span class="arrow"></span></th>
          <th class="nosort ctr" title="Proved non-hyperelliptic">Non-hyp.</th>
          <th data-key="criterion">Decided by <span class="arrow"></span></th>
        </tr></thead>
        <tbody></tbody>
      </table>
    </div>`;
  const tbody = root.querySelector("tbody");
  const state = { key: "label", dir: 1, genus: "", type: "" };
  const orderOf = r => (r.gap ? r.gap[0] : Infinity);

  function render() {
    const q = document.getElementById("q").value.trim().toLowerCase();
    let out = rows.filter(r =>
      (!state.genus || String(genusOf(r)) === state.genus) && (!state.type || r.type === state.type) &&
      (!q || [labelOf(r), r.name, r.equation, r.description, r.group, r.gap && `[${r.gap}]`, r.proof, r.criterion, r.credit,
              r.conjecture, ...(r.methods || [])].some(f => plainText(f).includes(q))));
    out = out.slice().sort((a, b) => {
      const tie = compareExamples(a, b);
      if (state.key === "label") return tie * state.dir;
      if (state.key === "genus") return (genusOf(a) - genusOf(b) || tie) * state.dir;
      if (state.key === "order") {            // examples with no recorded group always sort last
        if (!a.gap || !b.gap) return a.gap ? -1 : b.gap ? 1 : tie;
        return (a.gap[0] - b.gap[0] || tie) * state.dir;
      }
      return (plainText(a[state.key]).localeCompare(plainText(b[state.key])) || tie) * state.dir;
    });
    tbody.innerHTML = out.map(r => `
      <tr class="row" data-href="example.html?id=${encodeURIComponent(r.id)}" title="${escapeAttr(plainText(r.name).replace(/^./, c => c.toUpperCase()))}">
        <td><a class="label" href="example.html?id=${encodeURIComponent(r.id)}">${escapeHTML(labelOf(r))}</a>${r.type === "family" ? '<span class="tag">family</span>' : ""}</td>
        <td class="num">${escapeHTML(r.genus)}</td>
        <td>${r.group || r.gap ? groupHTML(r) : DASH}</td>
        <td class="num">${r.gap ? r.gap[0] : DASH}</td>
        <td>${signatureHTML(r)}</td>
        <td>${statusHTML(r.status, r.conjecture)}${r.locus ? `<a class="tag" href="example.html?id=${encodeURIComponent(r.id)}#locus" title="${escapeAttr("There is a criterion for the " + r.locus.group)}">criterion</a>` : ""}</td>
        <td class="ctr">${r.nonhyp?.proved ? `<span class="tick" title="${escapeAttr("Proved non-hyperelliptic. " + plainText(r.nonhyp.how))}">✓</span>` : DASH}</td>
        <td>${decidedHTML(r, all)}</td>
      </tr>`).join("") || `<tr><td colspan="8" class="muted">No examples here yet. <a href="submit.html">Submit one</a>.</td></tr>`;
    document.getElementById("count").textContent = `Showing ${out.length} of ${rows.length} example${rows.length === 1 ? "" : "s"}`;
    root.querySelectorAll("th[data-key] .arrow").forEach(a => a.textContent = "");
    root.querySelector(`th[data-key="${state.key}"] .arrow`).textContent = state.dir > 0 ? "▲" : "▼";
    typeset(tbody);
  }

  // Filter chips
  root.querySelectorAll(".filter").forEach(box => box.addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    const group = box.dataset.filter;
    state[group] = b.dataset[group];
    box.querySelectorAll(".chip").forEach(c => { const on = c === b; c.classList.toggle("on", on); c.setAttribute("aria-pressed", String(on)); });
    render();
  }));
  // The whole row opens the example's page.
  tbody.addEventListener("click", e => {
    if (e.target.closest("a, button")) return;
    const tr = e.target.closest("tr.row");
    if (tr) location.href = tr.dataset.href;
  });
  root.querySelectorAll("th[data-key]").forEach(th => th.addEventListener("click", () => {
    const k = th.dataset.key;
    state.dir = state.key === k ? -state.dir : 1; state.key = k; render();
  }));
  document.getElementById("q").addEventListener("input", render);
  document.getElementById("genus")?.addEventListener("change", e => { state.genus = e.target.value; render(); });
  // Download everything as a JSON file.
  document.getElementById("download").addEventListener("click", e => {
    e.preventDefault();
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "ceresa-examples.json" });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  typeset(document.querySelector("main"));
  render();
});
