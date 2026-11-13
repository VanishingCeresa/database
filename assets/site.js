// ---------------------------------------------------------------------------
// Site configuration: change REPO to your GitHub "owner/repository".
// ---------------------------------------------------------------------------
const SITE = {
  title: "Vanishing locus of the Ceresa cycle",
  REPO: "your-username/ceresa-vanishing",
  EMAIL: "vanishing_ceresa@proton.me",
};

// ---------------------------------------------------------------------------
// Toolbar. Each entry is one item; "items" is its drop-down list, and every
// line in a list opens its own page. To add a line: create the page (copy an
// existing one, e.g. genus3.html) and add ["my-page.html", "Label"].
// ---------------------------------------------------------------------------
const NAV = [
  { label: "Catalogue", href: "index.html", section: "catalogue", items: [
      ["index.html", "All examples"],
      ["genus3.html", "Genus 3"],
      ["chow.html", "Chow group"],
      ["griffiths.html", "Griffiths group"],
      ["conditional.html", "Conditional"],
      ["locus.html", "Families with a criterion"],
  ]},
  { label: "Vanishing criteria", href: "criteria.html", section: "criteria", items: [
      ["non-hyperelliptic.html", "Testing non-hyperellipticity"],
      ["criteria.html", "LS and QZ vanishing criteria"],
      ["implementation.html", "Implementation"],
  ]},
  { label: "Open questions", href: "questions.html", section: "questions" },
  { label: "Submit an example", href: "submit.html", section: "submit" },
  { label: "About", href: "about.html", section: "about", items: [
      ["about.html", "About"],
      ["conventions.html", "Conventions"],
      ["references.html", "References"],
  ]},
];

// Where the Ceresa cycle of an example is torsion ("status" in data/examples.js).
const STATUS = {
  chow:        { label: "Chow group",      long: "Torsion in the Chow group (so also in the Griffiths group)" },
  griffiths:   { label: "Griffiths group", long: "Torsion in the Griffiths group" },
  conditional: { label: "Conditional",     long: "Torsion assuming a conjecture" },
};

function statusHTML(value, extra) {
  const s = STATUS[value];
  if (!s) return "";
  return `<span class="pill ${value}" title="${escapeAttr(s.long + (extra ? ": " + extra : ""))}">${s.label}</span>`;
}

function escapeHTML(s) {
  return String(s ?? "").replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
}
function escapeAttr(s) { return escapeHTML(s).replace(/"/g, "&quot;"); }

function issueURL(template, title) {
  const q = new URLSearchParams();
  if (template) q.set("template", template);
  if (title) q.set("title", title);
  return `https://github.com/${SITE.REPO}/issues/new?${q}`;
}

// Shared toolbar and footer
function renderChrome() {
  const section = document.body.dataset.section || "catalogue";
  const here = location.pathname.split("/").pop() || "index.html";
  const nav = NAV.map((it, i) => {
    const active = it.section === section ? " active" : "";
    if (!it.items) return `<div class="nav-item${active}"><a class="nav-btn" href="${it.href}">${it.label}</a></div>`;
    const list = it.items.map(([href, label]) =>
      `<li><a href="${href}"${href === here ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");
    return `<div class="nav-item${active}">
      <button class="nav-btn" aria-expanded="false" aria-controls="menu-${i}">${it.label}<span class="caret"></span></button>
      <ul class="nav-menu" id="menu-${i}">${list}</ul></div>`;
  }).join("");
  const header = document.querySelector("header.site");
  if (header) {
    header.innerHTML = `<div class="inner"><a class="brand" href="index.html">${SITE.title}</a><nav>${nav}</nav></div>`;
    const closeAll = except => header.querySelectorAll(".nav-item.open").forEach(el => {
      if (el !== except) { el.classList.remove("open"); el.querySelector(".nav-btn").setAttribute("aria-expanded", "false"); }
    });
    header.addEventListener("click", e => {
      const btn = e.target.closest("button.nav-btn");
      if (btn) {
        const item = btn.parentElement;
        closeAll(item);
        btn.setAttribute("aria-expanded", String(item.classList.toggle("open")));
      } else if (e.target.closest(".nav-menu a")) closeAll();
    });
    document.addEventListener("click", e => { if (!e.target.closest(".nav-item")) closeAll(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeAll(); });
  }
  const footer = document.querySelector("footer");
  if (footer) footer.innerHTML =
    `<a href="submit.html">Submit an example</a><a href="mailto:${SITE.EMAIL}">${SITE.EMAIL}</a><a href="https://github.com/${SITE.REPO}">Source on GitHub</a>`;
  document.querySelectorAll("a[data-issue]").forEach(a => { a.href = issueURL(a.dataset.issue, a.dataset.title); });
}

function typeset(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el || document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "\\[", right: "\\]", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
    });
  }
}

// The data lives in data/examples.js (loaded by a <script> tag), so the site
// also works when you open the files directly, without a server.
function loadExamples() {
  if (window.CERESA_EXAMPLES && !window.CERESA_EXAMPLES._labelled) {
    assignLabels(window.CERESA_EXAMPLES.examples);
    Object.defineProperty(window.CERESA_EXAMPLES, "_labelled", { value: true });
  }
  return window.CERESA_EXAMPLES
    ? Promise.resolve(window.CERESA_EXAMPLES)
    : Promise.reject(new Error("Could not load data/examples.js. Check the file for a typo (a missing comma or quote)."));
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  if (!document.body.dataset.deferMath) typeset();
});

// ---------------------------------------------------------------------------
// Labels and groups.
//   label            = genus.groupidentifier.signature      e.g. 3.48-33.2-3-12
//   group identifier = GAP id [N,i] written N-i
// An entry may set "label" itself; otherwise it is built from genus, gap, signature.
// ---------------------------------------------------------------------------
function baseLabel(r) {
  if (!r.gap) return `${r.genus}.?`;
  const sig = (r.signature || []).join("-");
  return `${r.genus}.${r.gap[0]}-${r.gap[1]}${sig ? "." + sig : ""}`;
}
// Examples that would share a label get .a, .b, ... in the order of the data file.
function assignLabels(examples) {
  const count = {}, seen = {};
  examples.forEach(r => { const b = baseLabel(r); count[b] = (count[b] || 0) + 1; });
  examples.forEach(r => {
    const b = baseLabel(r);
    if (count[b] > 1) { seen[b] = (seen[b] || 0) + 1; r._label = `${b}.${String.fromCharCode(96 + seen[b])}`; }
    else r._label = b;
  });
}
function labelOf(r) { return r.label || r._label || baseLabel(r); }
// Group column: the symbol if there is one (C_n for cyclic groups), otherwise the GAP id.
function groupHTML(r) {
  if (r.group) return `$${r.group}$`;
  if (r.gap) return `[${r.gap[0]},${r.gap[1]}]`;
  return '<span class="muted">not recorded</span>';
}
// Family page on the LMFDB (it exists for quotient genus 0 and small genus).
function lmfdbURL(r) {
  if (!r.gap || !(r.signature || []).length) return "";
  return `https://www.lmfdb.org/HigherGenus/C/Aut/${r.genus}.${r.gap[0]}-${r.gap[1]}.0.${r.signature.join("-")}`;
}
// Order: genus, then group order, then group number, then signature.
function compareExamples(a, b) {
  const key = r => [Number(r.genus) || 0, r.gap ? r.gap[0] : Infinity, r.gap ? r.gap[1] : 0];
  const x = key(a), y = key(b);
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return labelOf(a).localeCompare(labelOf(b), undefined, { numeric: true });
}

// "Decided by" column. When an example is obtained from another one (a quotient, say),
// give it  "parent": { "id": "<id of the other example>", "relation": "Quotient of" }
// and the column shows the relation with a link to that example's label.
function decidedHTML(r, examples) {
  const p = r.parent && examples.find(x => x.id === r.parent.id);
  if (!p) return escapeHTML(r.criterion);
  return `${escapeHTML(r.parent.relation || "From")} <a class="label" href="example.html?id=${encodeURIComponent(p.id)}">${escapeHTML(labelOf(p))}</a>`;
}
