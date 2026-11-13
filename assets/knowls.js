// LMFDB-style "knowls": clickable terms that open a definition box inside the page, below the line.
//
// In HTML pages:   <a class="knowl" data-knowl="hyperelliptic">hyperelliptic curves</a>
// In JSON text:    {{hyperelliptic|hyperelliptic curves}}   (or just {{hyperelliptic}})
// Definitions live in data/knowls.js.

function loadKnowls() {
  return Promise.resolve(window.CERESA_KNOWLS || {});
}

// Convert {{id|text}} shorthand into knowl links.
function linkKnowls(s) {
  return String(s ?? "").replace(/\{\{([\w-]+)(?:\|([^}]*))?\}\}/g, (_, id, text) =>
    `<a class="knowl" data-knowl="${id}" href="#" role="button">${text ?? id.replace(/-/g, " ")}</a>`);
}

function closeKnowl(box) {
  // Remove the box (nested boxes inside it go with it) and reset the links that opened them.
  const ids = [box.id, ...[...box.querySelectorAll(".knowl-box")].map(b => b.id)];
  ids.forEach(id => document.querySelector(`.knowl[data-open="${id}"]`)?.removeAttribute("data-open"));
  const row = box.closest("tr.knowl-row");
  (row || box).remove();
}

let knowlCounter = 0;

// Insert the box into the page right after the block that contains the link.
function placeKnowl(box, link) {
  const td = link.closest("td");
  if (td && !link.closest(".knowl-box")) {               // inside a table: add a full-width row below
    const tr = td.parentElement;
    const row = document.createElement("tr");
    row.className = "knowl-row";
    const cell = document.createElement("td");
    cell.colSpan = tr.children.length;
    cell.appendChild(box);
    row.appendChild(cell);
    let after = tr;
    while (after.nextElementSibling?.classList.contains("knowl-row")) after = after.nextElementSibling;
    after.after(row);
    return;
  }
  const parentBody = link.closest(".knowl-body");
  if (parentBody) { parentBody.appendChild(box); return; }   // nested: open inside the parent box
  const li = link.closest("li");
  if (li) { li.appendChild(box); return; }                    // keep lists valid
  const block = link.closest(".facts, .ex-head, .hero") || link.closest("p, dl, h1, h2, h3, .thm, .equation, div") || link.parentElement;
  let after = block;
  while (after.nextElementSibling?.classList.contains("knowl-box")) after = after.nextElementSibling;
  after.after(box);
}

async function openKnowl(link) {
  if (link.dataset.open) {                                    // second click closes it
    const box = document.getElementById(link.dataset.open);
    if (box) closeKnowl(box);
    return;
  }
  const knowls = await loadKnowls();
  const id = link.dataset.knowl;
  const k = knowls[id] || { title: id, content: "<em>No definition yet.</em> Suggest one via the Submit page." };

  const box = document.createElement("div");
  box.className = "knowl-box";
  box.id = `knowl-${++knowlCounter}`;
  box.innerHTML = `
    <div class="knowl-head">
      <span class="knowl-title">${linkKnowls(k.title)}</span>
      <button class="knowl-close" aria-label="Close">×</button>
    </div>
    <div class="knowl-body">${linkKnowls(k.content)}</div>`;
  placeKnowl(box, link);
  link.dataset.open = box.id;
  box.querySelector(".knowl-close").addEventListener("click", () => closeKnowl(box));
  if (typeof typeset === "function") typeset(box);
}

document.addEventListener("click", e => {
  const link = e.target.closest(".knowl");
  if (link) { e.preventDefault(); openKnowl(link); }
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.knowl:not([href])").forEach(a => { a.href = "#"; a.setAttribute("role", "button"); });
  loadKnowls();
});
