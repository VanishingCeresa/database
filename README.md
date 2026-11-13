# Vanishing locus of the Ceresa cycle

A static website (GitHub Pages) recording non-hyperelliptic curves whose Ceresa cycle is torsion:
in the Chow group, in the Griffiths group, or conditionally on a conjecture.

## Files

```
index.html        home page: records (number of examples, highest genus) and the full catalogue
genus3.html       the catalogue, genus 3 only
chow.html, griffiths.html, conditional.html   the catalogue, one kind of example each
locus.html        families with a criterion saying which members are torsion
example.html      the page of one example (example.html?id=<id>)
non-hyperelliptic.html   how to test that a curve is not hyperelliptic
criteria.html     the Laga–Shnidman and Qiu–Zhang criteria
implementation.html   the mathematics and code for applying criterion (A)
code/CharacterOfV.m, code/Wedge3.m   Magma code shown on that page
code/ceresa_check.py   Python code shown on that page (plain Python 3)
questions.html, submit.html, about.html, conventions.html, references.html
data/examples.js  all examples and references: the only file to edit when adding an example
data/knowls.js    definitions shown in the gray boxes
assets/site.js    toolbar and site title (set your repo name here)
assets/catalogue.js   records and table
assets/knowls.js  the definition boxes
assets/style.css  all the styling; colours and roundness are set at the top
.github/ISSUE_TEMPLATE/   forms for submissions, corrections, questions
```

The site works when you double-click `index.html`; no server is needed.
KaTeX (maths and the text font) is included in `assets/katex/`, so the site needs no internet connection.

## Publish on GitHub Pages

1. Create a public repository, e.g. `ceresa-vanishing`.
2. In `assets/site.js`, set `REPO: "your-username/ceresa-vanishing"`. The contact email (`EMAIL`) is set there too.
3. Upload these files, keeping the folders (including `.github/` and `.nojekyll`).
4. Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save.

## Adding an example

Open `data/examples.js` and copy an existing entry. The top of that file explains every field. In short:

```js
{
  "id": "my-curve",            // used in the page address; do not change later
  "type": "curve",
  "name": "My curve",
  "equation": "y^3 = x^4 + 1",
  "genus": 3,
  "field": "ℚ",
  "gap": [48, 33],             // GAP id of the automorphism group
  "signature": [2, 3, 12],
  "group": "C_9",              // symbol in TeX; leave out to show the GAP id
  "status": "chow",            // "chow", "griffiths" or "conditional" (then add "conjecture")
  "criterion": "Qiu–Zhang",
  "nonhyp": { "proved": true, "how": "Smooth plane quartic." },
  "proof": "How it is proved.",
  "methods": ["Method one", "Method two"],
  "credit": "Who did it", "year": "2026",
  "references": ["QZ24"]
}
```

The records on the home page (number of examples, highest genus, counts by kind and by genus) are recounted
from this file every time the page loads.

## Labels

The label is built automatically as `genus.groupidentifier.signature`, for example `3.48-33.2-3-12`
(genus 3, GAP id [48,33], signature (2,3,12)). The rule is `labelOf` at the bottom of `assets/site.js`.
To give one example a different label, add `"label": "..."` to it.

## Toolbar and drop-down lists

The toolbar is `NAV` at the top of `assets/site.js`. Every line of a drop-down list opens its own page.

- New criterion: add a section to `criteria.html`.
- New genus page: copy `genus3.html`, change the 3s, add it to `NAV` and to `GENUS_PAGE` in `assets/catalogue.js`.

## Definitions

Underlined terms open a gray box with a definition. Definitions are in `data/knowls.js`.
In a page: `<a class="knowl" data-knowl="jacobian">Jacobian</a>`. In the data: `{{jacobian|Jacobian}}`.

## Before going live

Entries marked `"seed": true` were compiled quickly from the literature. Check each against its source,
then delete the flag; the pink notice on its page disappears.
