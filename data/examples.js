// All the examples and references. This is the only file to edit when adding an example.
//
// Each example:
//   id          short name used in the page address (example.html?id=...); never change it once published
//   type        "curve" or "family"
//   name, equation (TeX) or description (plain text), field    shown on the example's own page
//   genus
//   gap         GAP id of the automorphism group, as [order, number], e.g. [48, 33]
//   signature   orders of the branch points of C -> C/Aut(C), e.g. [2, 3, 12]
//   group       symbol of the group in TeX, e.g. "C_9" (C_n = cyclic). Leave it out to show the GAP id instead
//   status      where the Ceresa cycle is torsion: "chow", "griffiths" or "conditional"
//   conjecture  only for "conditional": the conjecture it depends on
//   criterion   short name of the criterion that decides it
//   parent      when the example is obtained from another one: { "id": "fricke-macbeath", "relation": "Quotient of" }.
//               The "Decided by" column then links to that example
//   nonhyp      { proved: true, how: "why the curve is not hyperelliptic" }
//   locus       for a family: { group, statement, source } saying exactly which members are torsion (or that none are)
//   verified    what was recomputed on this site
//   proof, methods, computation, credit, year, notes, references     shown on the example's own page
//   seed        true = not yet checked against the references; delete once checked
//
// The label is built automatically as genus.groupidentifier.signature, e.g. 3.48-33.2-3-12.
// When two examples would get the same label, the letters .a, .b, ... are added, in the order of this file.
// To override it for one example, add  "label": "..."  to that example.
//
// TeX goes between $...$ and every backslash is doubled: "$\\mathbb{Z}/9$".
// {{id|text}} makes "text" open the definition "id" from data/knowls.js.

window.CERESA_EXAMPLES = {
  "updated": "2026-11-13",
  "examples": [
    {
      "id": "beauville-picard",
      "type": "curve",
      "name": "Beauville's {{picard-curve|Picard curve}}",
      "equation": "y^3 = x^4 + x",
      "genus": 3,
      "field": "$\\mathbb{Q}$",
      "gap": [
        9,
        1
      ],
      "signature": [
        3,
        9,
        9
      ],
      "group": "C_9",
      "status": "chow",
      "criterion": "Laga–Shnidman (A)",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic."
      },
      "proof": "Beauville showed that the image under the complex {{abel-jacobi|Abel–Jacobi map}} is torsion, and Beauville–Schoen proved that the cycle is torsion modulo {{algebraic-equivalence|algebraic equivalence}}. Torsion in the {{chow-group|Chow group}} follows from Laga–Shnidman's criterion (A), since $H^3(J)^{\\mathrm{Aut}(C)} = 0$.",
      "methods": [
        "Invariants of $\\mathrm{Aut}(C)$ on $H^3(J)$",
        "Abel–Jacobi map"
      ],
      "credit": "A. Beauville; A. Beauville and C. Schoen; J. Laga and A. Shnidman",
      "year": "2021–2024",
      "notes": "The first known non-hyperelliptic curve with torsion Ceresa cycle.",
      "references": [
        "Bea21",
        "BS23",
        "LiSh22",
        "LS24"
      ],
      "seed": true,
      "verified": "Recomputed on this site with ceresa_check.py: $G=C_9$, signature $(3,9,9)$: $A=0$, and non-hyperelliptic."
    },
    {
      "id": "picard-48",
      "type": "curve",
      "name": "The curve $y^4 = x^3 - 1$",
      "equation": "y^4 = x^3 - 1",
      "genus": 3,
      "field": "$\\mathbb{Q}$",
      "gap": [
        48,
        33
      ],
      "signature": [
        2,
        3,
        12
      ],
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic. See also [QZ24, Lemma 3.1.1]."
      },
      "proof": "The invariants $\\bigl(H^1(C)^{\\otimes 3}\\bigr)^{\\mathrm{Aut}(C)}$ vanish, by a character-table computation. The Qiu–Zhang criterion then gives vanishing of the {{modified-diagonal|modified diagonal cycle}}, which is equivalent to vanishing of the Ceresa cycle.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Character tables"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "notes": "Also given by $y^3 = x^4 + 1$; this is the cyclic Fermat quotient $D^{12}$ of [LiSh22], who proved torsion in the Griffiths group. By [LS24, Example 3.1] it is the only non-hyperelliptic curve of genus 3 to which the Qiu–Zhang criterion applies.",
      "references": [
        "QZ24",
        "LiSh22",
        "LS24"
      ],
      "seed": true,
      "verified": "Recomputed on this site with ceresa_check.py: already the subgroup $C_{12}$ with signature $(3,4,12)$ gives $A=0$, and non-hyperelliptic."
    },
    {
      "id": "fm-quotient",
      "type": "curve",
      "name": "Genus 3 quotient of the Fricke–Macbeath curve",
      "description": "Quotient of the Fricke–Macbeath curve by an involution",
      "genus": 3,
      "field": "number field",
      "gap": null,
      "signature": [],
      "status": "chow",
      "criterion": "Quotient of the Fricke–Macbeath curve",
      "nonhyp": {
        "proved": true,
        "how": "Shown by Top–Verschoor, as cited in [QZ24, Cor. 3.3.2]."
      },
      "proof": "The {{modified-diagonal|modified diagonal cycle}} of the Fricke–Macbeath curve vanishes, and vanishing passes to the quotient by pushforward. The quotient does not satisfy the Qiu–Zhang criterion itself: its invariants $\\bigl((H^1)^{\\otimes 3}\\bigr)^{\\mathrm{Aut}}$ are non-zero.",
      "methods": [
        "Pushforward along a quotient map"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "notes": "An example where the cycle vanishes although the criterion does not apply. [QZ24, Cor. 3.3.2, Lemma 3.3.3]",
      "references": [
        "QZ24",
        "TV18"
      ],
      "seed": true,
      "parent": {
        "id": "fricke-macbeath",
        "relation": "Quotient of"
      }
    },
    {
      "id": "picard-family",
      "type": "family",
      "name": "{{picard-curve|Picard curves}}",
      "equation": "y^3 = x^4 + a x^2 + b x + c",
      "genus": 3,
      "field": "any, characteristic $\\neq 3$",
      "gap": [
        3,
        1
      ],
      "signature": [
        3,
        3,
        3,
        3,
        3
      ],
      "group": "C_3",
      "status": "griffiths",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic."
      },
      "proof": "Criterion (B) applies because $H^0(J,\\Omega^3_J)^{\\mathrm{Aut}(C)} = 0$, and the case of the {{hodge-conjecture|Hodge conjecture}} it needs was proved by Schoen, so the result is unconditional. For a general Picard curve the cycle is not torsion in the {{chow-group|Chow group}}.",
      "methods": [
        "Invariant holomorphic 3-forms on $J$",
        "A known case of the Hodge conjecture"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2024",
      "references": [
        "LS24"
      ],
      "seed": true,
      "notes": "The group and signature are those of the general member. The torsion locus in the Chow group has infinitely many components [LS24].",
      "locus": {
        "group": "Chow group",
        "statement": "For $C_f\\colon y^3 = f(x) = x^4+ax^2+bx+c$, the Ceresa cycle is torsion in the Chow group if and only if the point $$P_f = \\bigl(a^2+12c,\\ 72ac-2a^3-27b^2\\bigr)$$ is a torsion point of the elliptic curve $E_f\\colon y^2 = 4x^3 - 27\\,\\mathrm{disc}(f)$.",
        "source": "[LS24, Theorem C]"
      },
      "verified": "Recomputed on this site with ceresa_check.py: $G=C_3$, signature $(3,3,3,3,3)$: $A=2$ and $B=0$, so (B) applies and (A) does not."
    },
    {
      "id": "bielliptic-picard",
      "type": "family",
      "name": "{{bielliptic|Bielliptic}} Picard curves",
      "equation": "y^3 = x^4 + 2t\\,x^2 + 1",
      "genus": 3,
      "field": "any, characteristic $\\neq 2, 3$",
      "gap": [
        6,
        2
      ],
      "signature": [
        2,
        3,
        3,
        6
      ],
      "group": "C_6",
      "status": "griffiths",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic."
      },
      "proof": "These are Picard curves, so the cycle is torsion in the {{griffiths-group|Griffiths group}}. In the {{chow-group|Chow group}}, the motive that controls the cycle is the $\\mathfrak{h}^1$ of an elliptic curve, which turns the question into one about a point.",
      "methods": [
        "Bielliptic cover",
        "Chow motives",
        "Points on an elliptic curve"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2023",
      "references": [
        "LS23",
        "LS24"
      ],
      "seed": true,
      "notes": "The group and signature are those of the general member. There are infinitely many members with torsion Ceresa cycle, of unbounded order.",
      "locus": {
        "group": "Chow group",
        "statement": "The Ceresa cycle of $C_t\\colon y^3 = x^4+2tx^2+1$ is torsion in the Chow group if and only if $$Q_t = \\bigl(\\sqrt[3]{t^2-1},\\ t\\bigr)$$ is a torsion point of the elliptic curve $y^2 = x^3+1$.",
        "source": "[LS23, Theorem 1.1]"
      },
      "verified": "Recomputed on this site with ceresa_check.py: $G=C_6$, signature $(2,3,3,6)$: $A=2$ and $B=0$."
    },
    {
      "id": "shimura-quartics",
      "type": "family",
      "name": "{{plane-quartic|Plane quartics}} from {{shimura-curve|Shimura curves}}",
      "description": "Five explicit Shimura curves of genus 3",
      "genus": 3,
      "field": "number fields",
      "gap": [
        1,
        1
      ],
      "signature": [],
      "group": "C_1",
      "status": "chow",
      "criterion": "Qiu–Zhang (Shimura curves)",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic."
      },
      "proof": "Vanishing of the {{modified-diagonal|modified diagonal cycle}} for Shimura curves, tied to the vanishing of invariant trilinear forms on automorphic representations.",
      "methods": [
        "Shimura curves",
        "Automorphic representations"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2023",
      "notes": "These curves have trivial automorphism group, so automorphisms are not the only reason for vanishing.",
      "references": [
        "QZ23"
      ],
      "seed": true
    },
    {
      "id": "bring",
      "type": "curve",
      "name": "Bring's curve",
      "equation": "\\textstyle\\sum x_i = \\sum x_i^2 = \\sum x_i^3 = 0 \\ \\subset \\mathbb{P}^4",
      "genus": 4,
      "field": "$\\mathbb{Q}$",
      "gap": [
        120,
        34
      ],
      "signature": [
        2,
        4,
        5
      ],
      "group": "S_5",
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "[QZ24, Lemma 3.1.1] together with Klein's classification."
      },
      "proof": "$H^1(C)$ is twice a single irreducible representation of $S_5 \\cong \\mathrm{PGL}_2(\\mathbb{F}_5)$, and its triple tensor power has no invariants. The Qiu–Zhang criterion gives vanishing of the {{modified-diagonal|modified diagonal cycle}}.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Representations of $\\mathrm{PGL}_2(\\mathbb{F}_q)$"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "notes": "This is the largest automorphism group in genus 4.",
      "references": [
        "QZ24"
      ],
      "seed": true,
      "verified": "Recomputed on this site with ceresa_check.py: $G=S_5$, signature $(2,4,5)$: $A=0$, and non-hyperelliptic."
    },
    {
      "id": "trigonal-72",
      "type": "curve",
      "name": "A cyclic trigonal curve of genus 4",
      "equation": "y^3 = (x^3 - 1)^2 (x^3 + 1)",
      "genus": 4,
      "field": "$\\mathbb{Q}$",
      "gap": [
        72,
        40
      ],
      "signature": [
        2,
        4,
        6
      ],
      "group": "S_3 \\wr C_2",
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "Stated in [QZ24, §4]. Add the argument here."
      },
      "proof": "The invariants $\\bigl(H^1(C)^{\\otimes 3}\\bigr)^{\\mathrm{Aut}(C)}$ vanish, by a character-table computation, so the Qiu–Zhang criterion applies.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Character tables"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "notes": "[QZ24, §4.1.3]",
      "references": [
        "QZ24"
      ],
      "seed": true
    },
    {
      "id": "family-g4",
      "type": "family",
      "name": "A one-parameter family with $S_3 \\times S_3$ symmetry",
      "genus": 4,
      "field": "number fields",
      "gap": [
        36,
        10
      ],
      "signature": [
        2,
        2,
        2,
        3
      ],
      "group": "S_3^2",
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "Checked on this site: an automorphism acts on $H^0(C,\\Omega^1)$ with eigenvalues that do not form a geometric progression, which cannot happen on a hyperelliptic curve."
      },
      "proof": "$H^1(C)$ decomposes explicitly under $S_3 \\times S_3$, and its triple tensor power has no invariants, with no computer calculation needed. The Qiu–Zhang criterion applies to every member.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Hurwitz spaces"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "notes": "The equation is the model given in [Shn]. Equations are not computed in [QZ24, §4.2.1].",
      "references": [
        "QZ24",
        "Shn"
      ],
      "seed": true,
      "equation": "y^3 = (x^3+t)^2\\,(t x^3 - 1)",
      "verified": "Recomputed on this site with ceresa_check.py: $G=S_3\\times S_3$, signature $(2,2,2,3)$: $A=0$, and non-hyperelliptic."
    },
    {
      "id": "wiman-160",
      "type": "curve",
      "name": "Wiman's curve with 160 automorphisms",
      "description": "Equation in [QZ24, §4.1.4]",
      "genus": 5,
      "field": "number field",
      "gap": [
        160,
        234
      ],
      "signature": [
        2,
        4,
        5
      ],
      "group": "C_2^4 \\rtimes D_5",
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "$|\\mathrm{Aut}(C)| = 160 > \\max\\{8(g+1),\\, 120\\} = 120$, so $C$ is not hyperelliptic by [QZ24, Lemma 3.1.1]."
      },
      "proof": "The invariants $\\bigl(H^1(C)^{\\otimes 3}\\bigr)^{\\mathrm{Aut}(C)}$ vanish, by a character-table computation, so the Qiu–Zhang criterion applies.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Character tables"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "references": [
        "QZ24"
      ],
      "seed": true
    },
    {
      "id": "wiman-96",
      "type": "curve",
      "name": "Wiman's curve with 96 automorphisms",
      "description": "Equation in [QZ24, §4.1.5]",
      "genus": 5,
      "field": "number field",
      "gap": [
        96,
        195
      ],
      "signature": [
        2,
        4,
        6
      ],
      "group": "\\mathrm{GL}_2(\\mathbb{Z}/4)",
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "Stated in [QZ24, §4]. Add the argument here."
      },
      "proof": "The invariants $\\bigl(H^1(C)^{\\otimes 3}\\bigr)^{\\mathrm{Aut}(C)}$ vanish, by a character-table computation, so the Qiu–Zhang criterion applies.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Character tables"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "references": [
        "QZ24"
      ],
      "seed": true
    },
    {
      "id": "family-g5",
      "type": "family",
      "name": "A one-parameter family of genus 5",
      "description": "Curves with a $(\\mathbb{Z}/2)^2 \\wr \\mathbb{Z}/2$-action of signature $(2,2,2,4)$",
      "genus": 5,
      "field": "number fields",
      "gap": [
        32,
        27
      ],
      "signature": [
        2,
        2,
        2,
        4
      ],
      "group": "C_2^2 \\wr C_2",
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "Stated in [QZ24, §4]. Add the argument here."
      },
      "proof": "The Qiu–Zhang criterion applies to every member of the family. The paper lists the group and signature; add the verification here.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Hurwitz spaces"
      ],
      "credit": "C. Qiu and W. Zhang",
      "year": "2022",
      "notes": "Equations are not known. [QZ24, §4.2.2]",
      "references": [
        "QZ24"
      ],
      "seed": true
    },
    {
      "id": "fricke-macbeath",
      "type": "curve",
      "name": "Fricke–Macbeath curve",
      "description": "The unique Hurwitz curve of genus 7",
      "genus": 7,
      "field": "$\\mathbb{Q}$",
      "gap": [
        504,
        156
      ],
      "signature": [
        2,
        3,
        7
      ],
      "group": "\\mathrm{PSL}_2(\\mathbb{F}_8)",
      "status": "chow",
      "criterion": "Qiu–Zhang",
      "nonhyp": {
        "proved": true,
        "how": "$|\\mathrm{Aut}(C)| = 504 > \\max\\{8(g+1),\\,120\\} = 120$, so $C$ is not hyperelliptic by [QZ24, Lemma 3.1.1]. Also, {{hurwitz-curve|Hurwitz curves}} are never hyperelliptic [QZ24, Cor. 3.1.2]."
      },
      "proof": "$H^1(C)$ is twice a cuspidal representation of $\\mathrm{PGL}_2(\\mathbb{F}_8)$, and its triple tensor power has no invariants (also found by Bisogno–Li–Litt–Srinivasan). The Qiu–Zhang criterion gives vanishing of the {{modified-diagonal|modified diagonal cycle}}.",
      "methods": [
        "Invariant trilinear forms on $H^1(C)$",
        "Representations of $\\mathrm{PGL}_2(\\mathbb{F}_q)$"
      ],
      "credit": "C. Qiu and W. Zhang; D. Bisogno, W. Li, D. Litt and P. Srinivasan",
      "year": "2020–2022",
      "notes": "Among Hurwitz curves with automorphism group $\\mathrm{PSL}_2(\\mathbb{F}_q)$, this is the only one satisfying the criterion. [QZ24, Thm 3.4.1]",
      "references": [
        "QZ24",
        "BLLS"
      ],
      "seed": true,
      "computation": "In Magma's generators of $G = \\mathrm{SL}_2(\\mathbb{F}_8)$, take $a_0 = G_1 G_2 G_1 G_2^{-1}$ and $a_1 = G_1 G_2 G_1^{-1}$. Then $\\chi_V = \\chi_2$."
    },
    {
      "id": "genus9-cyclic-quartic",
      "type": "curve",
      "name": "A cyclic fourfold cover of genus 9",
      "equation": "y^4 = \\bigl(x^4 + 2\\sqrt{-3}\\,x^2 + 1\\bigr)\\,\\bigl(x(x^4-1)\\bigr)^2",
      "genus": 9,
      "field": "$\\mathbb{Q}(\\sqrt{-3})$",
      "gap": [
        192,
        194
      ],
      "signature": [
        2,
        3,
        12
      ],
      "status": "chow",
      "criterion": "Laga–Shnidman (A)",
      "nonhyp": {
        "proved": true,
        "how": "$|\\mathrm{Aut}(C)| = 192 > \\max\\{8(g+1),\\, 120\\} = 120$, so $C$ is not hyperelliptic by [QZ24, Lemma 3.1.1]."
      },
      "proof": "The character of $G = \\mathrm{Aut}(C)$ on $V = H^0(C,\\Omega^1)$ is found by the Chevalley–Weil formula, and for $W = V \\oplus V^\\vee$ the trivial representation does not occur in $\\bigwedge^3 W$. So $H^3(J)^{G} = 0$ and Laga–Shnidman's criterion (A) applies. The curve was found by running the criterion over a database of curves with non-trivial automorphism group, of genus up to 48.",
      "methods": [
        "Chevalley–Weil formula",
        "Invariants of $\\mathrm{Aut}(C)$ on $\\bigwedge^3 H^1(C)$",
        "Database search"
      ],
      "credit": "",
      "year": "",
      "notes": "The curve is the normalisation of the affine plane curve above. It has the highest genus among the known examples.",
      "references": [
        "LS24",
        "QZ24"
      ],
      "seed": true,
      "computation": "In Magma's generators of $G = [192,194]$, take $a_0 = G_1 G_4$, $a_1 = G_2$ and $a_\\infty = G_1 G_2^2 G_4$. Then $\\chi_V = \\chi_5 + \\chi_8 + \\chi_{17}$.",
      "verified": "Recomputed on this site with ceresa_check.py: the subgroup $C_4\\times A_4$ with signature $(3,4,12)$ gives $B=0$ but $A=4$, so the full group $[192,194]$ is needed for criterion (A). The full group was not recomputed here."
    },
    {
      "id": "picard-torsion-family",
      "type": "family",
      "name": "A family of Picard curves over $\\mathbb{Q}$ with torsion Ceresa cycle",
      "equation": "y^3 = x^4 - 12x^2 + t\\,x - 12",
      "genus": 3,
      "field": "$\\mathbb{Q}$",
      "gap": [
        3,
        1
      ],
      "signature": [
        3,
        3,
        3,
        3,
        3
      ],
      "group": "C_3",
      "status": "chow",
      "criterion": "Laga–Shnidman, Theorem C",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic."
      },
      "proof": "By Theorem C of Laga–Shnidman, the Ceresa cycle of a Picard curve is torsion exactly when the point $P_f$ is torsion on $E_f$. For this family $P_f$ is torsion for every $t$.",
      "methods": [
        "Points on an elliptic curve",
        "Invariants of binary quartics"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2024",
      "verified": "Checked on this site: here $a=c=-12$ and $b=t$, so $P_f = (0,\\ 13824-27t^2)$. A point with $x=0$ on $y^2=4x^3+k$ is a 3-torsion point.",
      "parent": {
        "id": "picard-family",
        "relation": "Members of"
      },
      "notes": "Gives infinitely many plane quartics over $\\mathbb{Q}$ with torsion Ceresa cycle. More such families are in [LS24, Prop. 4.19].",
      "references": [
        "LS24"
      ],
      "seed": true
    },
    {
      "id": "bielliptic-t3",
      "type": "curve",
      "name": "The bielliptic Picard curve with $t=3$",
      "equation": "y^3 = x^4 + 6x^2 + 1",
      "genus": 3,
      "field": "$\\mathbb{Q}$",
      "gap": [
        6,
        2
      ],
      "signature": [
        2,
        3,
        3,
        6
      ],
      "group": "C_6",
      "status": "chow",
      "criterion": "Laga–Shnidman, bielliptic criterion",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic."
      },
      "proof": "For $t=3$ the point $Q_t = (\\sqrt[3]{t^2-1},\\,t) = (2,3)$ on $y^2=x^3+1$ is torsion, so the Ceresa cycle is torsion by the criterion for bielliptic Picard curves.",
      "methods": [
        "Points on an elliptic curve"
      ],
      "credit": "J. Laga and A. Shnidman; noted by J. Ellenberg, A. Logan and P. Srinivasan",
      "year": "2023–2024",
      "verified": "Checked on this site: $(2,3)$ has order 6 on $y^2=x^3+1$, whose rational torsion is $\\{\\infty,(0,\\pm1),(-1,0),(2,\\pm3)\\}$. So over $\\mathbb{Q}$ the only torsion members are $t=0$ (the curve $y^3=x^4+1$) and $t=\\pm3$.",
      "parent": {
        "id": "bielliptic-picard",
        "relation": "Member of"
      },
      "references": [
        "LS23",
        "ELS24"
      ],
      "seed": true
    },
    {
      "id": "ls-trivial-aut",
      "type": "family",
      "name": "A family of plane quartics with trivial automorphism group",
      "equation": "y^4 = xy^3 + u\\,x^3 + 3y^2 - 2u\\,x - u\\,y - 1",
      "genus": 3,
      "field": "$\\mathbb{Q}(u)$",
      "gap": [
        1,
        1
      ],
      "signature": [],
      "group": "C_1",
      "status": "conditional",
      "conjecture": "Hodge conjecture",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "A smooth plane quartic is canonically embedded, so it is not hyperelliptic."
      },
      "proof": "Laga–Shnidman show that the Ceresa cycle is torsion modulo {{algebraic-equivalence|algebraic equivalence}}, assuming the {{hodge-conjecture|Hodge conjecture}}, although the general member has no automorphisms.",
      "methods": [
        "Criterion (B) applied through a cover"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2024",
      "notes": "Here $u = (t-1)/(t+1)$. A genus 4 analogue is mentioned in [LS24].",
      "references": [
        "LS24"
      ],
      "seed": true
    },
    {
      "id": "lefschetz-15",
      "type": "curve",
      "name": "The curve $y^3 = x^5 + 1$",
      "equation": "y^3 = x^5 + 1",
      "genus": 4,
      "field": "$\\mathbb{Q}$",
      "gap": [
        15,
        1
      ],
      "signature": [
        3,
        5,
        15
      ],
      "group": "C_{15}",
      "status": "chow",
      "criterion": "Laga–Shnidman (A)",
      "nonhyp": {
        "proved": true,
        "how": "It is the cyclic Fermat quotient $C^{15}_{1,5}$, which is not hyperelliptic by [LiSh22, Prop. 2.1]. Checked on this site: an automorphism acts on $H^0(C,\\Omega^1)$ with eigenvalues that do not form a geometric progression, which cannot happen on a hyperelliptic curve."
      },
      "proof": "$H^3(J)^{\\mathrm{Aut}(C)} = 0$, so criterion (A) applies [LS24, Example 3.2]. Earlier, Lilienfeldt–Shnidman had shown that the image under the {{abel-jacobi|Abel–Jacobi map}} is torsion.",
      "methods": [
        "Invariants of $\\mathrm{Aut}(C)$ on $H^3(J)$",
        "Cyclic Fermat quotients"
      ],
      "credit": "D. Lilienfeldt and A. Shnidman; J. Laga and A. Shnidman",
      "year": "2021–2024",
      "verified": "Recomputed on this site with ceresa_check.py: $G=C_{15}$, signature $(3,5,15)$: $A=0$ for all eight refined passports, and non-hyperelliptic.",
      "notes": "Called $D^{15}$ in [LiSh22].",
      "references": [
        "LS24",
        "LiSh22"
      ],
      "seed": true
    },
    {
      "id": "ls-trigonal-g4",
      "type": "family",
      "name": "A three-parameter family of cyclic trigonal curves",
      "equation": "y^3 = x^2(x-1)^2\\,(x^3+ax^2+bx+c)",
      "genus": 4,
      "field": "any, characteristic 0",
      "gap": [
        3,
        1
      ],
      "signature": [
        3,
        3,
        3,
        3,
        3,
        3
      ],
      "group": "C_3",
      "status": "conditional",
      "conjecture": "Hodge conjecture",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "Checked on this site: an automorphism acts on $H^0(C,\\Omega^1)$ with eigenvalues that do not form a geometric progression, which cannot happen on a hyperelliptic curve."
      },
      "proof": "$H^0(J,\\Omega^3_J)^{\\mathrm{Aut}(C)}=0$ for the general member, so criterion (B) applies. The case of the {{hodge-conjecture|Hodge conjecture}} needed is for $J\\times A$, of dimension 8 [LS24, Example 3.5].",
      "methods": [
        "Invariant holomorphic 3-forms on $J$"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2024",
      "verified": "Recomputed on this site with ceresa_check.py: $G=C_3$ with six branch points has two refined passports. One has $B=0$ (this family) and the other $B=1$; both have $A=8$.",
      "references": [
        "LS24"
      ],
      "seed": true
    },
    {
      "id": "ls-d5",
      "type": "family",
      "name": "A one-parameter family with $D_5$ symmetry",
      "equation": "y^5 = \\frac{x+1}{x-1}\\Bigl(\\frac{x+t}{x-t}\\Bigr)^{2}",
      "genus": 4,
      "field": "any, characteristic 0",
      "gap": [
        10,
        1
      ],
      "signature": [
        2,
        2,
        5,
        5
      ],
      "group": "D_5",
      "status": "griffiths",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "[LS24] check by specialising that the general member is not hyperelliptic."
      },
      "proof": "Criterion (B) applies, and the case of the {{hodge-conjecture|Hodge conjecture}} it needs, for products of abelian surfaces, is known. So the result is unconditional [LS24, Example 3.8].",
      "methods": [
        "Invariant holomorphic 3-forms on $J$"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2024",
      "verified": "Recomputed on this site with ceresa_check.py: $G=D_5$, signature $(2,2,5,5)$: $B=0$ and $A=4$.",
      "notes": "The group and signature were read off from the equation on this site ($y\\mapsto\\zeta_5y$ and $(x,y)\\mapsto(-x,1/y)$); check that this is the full automorphism group.",
      "references": [
        "LS24"
      ],
      "seed": true
    },
    {
      "id": "humbert",
      "type": "family",
      "name": "Humbert curves",
      "equation": "\\textstyle\\sum_{i=0}^{4} x_i^2 = \\sum_{i=0}^{4} a_i x_i^2 = \\sum_{i=0}^{4} a_i^2 x_i^2 = 0 \\ \\subset \\mathbb{P}^4",
      "genus": 5,
      "field": "any, characteristic $\\neq 2$",
      "gap": [
        16,
        14
      ],
      "signature": [
        2,
        2,
        2,
        2,
        2
      ],
      "group": "C_2^4",
      "status": "chow",
      "criterion": "Laterveer",
      "nonhyp": {
        "proved": true,
        "how": "Stated in [Lat23]. Checked on this site: an automorphism acts on $H^0(C,\\Omega^1)$ with eigenvalues that do not form a geometric progression, which cannot happen on a hyperelliptic curve."
      },
      "proof": "Laterveer shows that the tautological ring of a Humbert curve injects into cohomology. So these curves have a multiplicative Chow–Künneth decomposition, and their Ceresa cycle is torsion.",
      "methods": [
        "Tautological ring",
        "Multiplicative Chow–Künneth decomposition"
      ],
      "credit": "R. Laterveer",
      "year": "2022",
      "verified": "Recomputed on this site with ceresa_check.py: $G=C_2^4$, signature $(2,2,2,2,2)$: $A=0$, so criterion (A) also applies, and non-hyperelliptic.",
      "notes": "A two-dimensional family. The equation is the usual model as an intersection of three diagonal quadrics; check it against [Lat23].",
      "references": [
        "Lat23"
      ],
      "seed": true
    },
    {
      "id": "ls-d12",
      "type": "family",
      "name": "A one-parameter family with $D_{12}$ symmetry",
      "equation": "y^{12} = \\Bigl(\\frac{x+1}{x-1}\\Bigr)^{3}\\Bigl(\\frac{x+t}{x-t}\\Bigr)^{4}",
      "genus": 6,
      "field": "any, characteristic 0",
      "gap": [
        24,
        6
      ],
      "signature": [
        2,
        2,
        3,
        4
      ],
      "group": "D_{12}",
      "status": "conditional",
      "conjecture": "Hodge conjecture",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "Checked on this site: an automorphism acts on $H^0(C,\\Omega^1)$ with eigenvalues that do not form a geometric progression, which cannot happen on a hyperelliptic curve."
      },
      "locus": {
        "group": "Chow group",
        "statement": "The Ceresa cycle of $C_t$ is not torsion in the Chow group for any $t \\neq 0, \\pm1$.",
        "source": "[BDDS26, Theorem 3]"
      },
      "proof": "The family satisfies the hypothesis of criterion (B) [LS24, Example 3.9], so the cycle is torsion in the {{griffiths-group|Griffiths group}} assuming the {{hodge-conjecture|Hodge conjecture}}.",
      "methods": [
        "Invariant holomorphic 3-forms on $J$",
        "Relative canonical shadow"
      ],
      "credit": "J. Laga and A. Shnidman; T. Bhatnagar, S. Devadas, T. D'Nelly-Warady and P. Srinivasan",
      "year": "2024–2026",
      "verified": "Recomputed on this site with ceresa_check.py: $G=D_{12}$, signature $(2,2,3,4)$: $B=0$ and $A=4$, and non-hyperelliptic.",
      "notes": "[LS24] say that the examples 3.9 and 3.10 are conditional on the Hodge conjecture only in some cases; check which. Signature computed on this site.",
      "references": [
        "LS24",
        "BDDS26"
      ],
      "seed": true
    },
    {
      "id": "ls-d9",
      "type": "family",
      "name": "A one-parameter family with $D_9$ symmetry",
      "equation": "y^{9} = \\frac{x+1}{x-1}\\Bigl(\\frac{x+t}{x-t}\\Bigr)^{3}",
      "genus": 6,
      "field": "any, characteristic 0",
      "gap": [
        18,
        1
      ],
      "signature": [
        2,
        2,
        3,
        9
      ],
      "group": "D_9",
      "status": "conditional",
      "conjecture": "Hodge conjecture",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "Checked on this site: an automorphism acts on $H^0(C,\\Omega^1)$ with eigenvalues that do not form a geometric progression, which cannot happen on a hyperelliptic curve."
      },
      "proof": "The family satisfies the hypothesis of criterion (B) [LS24, Example 3.10].",
      "methods": [
        "Invariant holomorphic 3-forms on $J$"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2024",
      "verified": "Recomputed on this site with ceresa_check.py: $G=D_9$, signature $(2,2,3,9)$: $B=0$ and $A=6$, and non-hyperelliptic.",
      "notes": "[LS24] say that the examples 3.9 and 3.10 are conditional on the Hodge conjecture only in some cases; check which. Signature computed on this site.",
      "references": [
        "LS24"
      ],
      "seed": true
    },
    {
      "id": "ls-d15",
      "type": "family",
      "name": "A one-parameter family with $D_{15}$ symmetry",
      "equation": "y^{15} = \\Bigl(\\frac{x+1}{x-1}\\Bigr)^{3}\\Bigl(\\frac{x+t}{x-t}\\Bigr)^{5}",
      "genus": 8,
      "field": "any, characteristic 0",
      "gap": [
        30,
        3
      ],
      "signature": [
        2,
        2,
        3,
        5
      ],
      "group": "D_{15}",
      "status": "conditional",
      "conjecture": "Hodge conjecture",
      "criterion": "Laga–Shnidman (B)",
      "nonhyp": {
        "proved": true,
        "how": "Checked on this site: an automorphism acts on $H^0(C,\\Omega^1)$ with eigenvalues that do not form a geometric progression, which cannot happen on a hyperelliptic curve."
      },
      "proof": "The family satisfies the hypothesis of criterion (B) [LS24, Example 3.10].",
      "methods": [
        "Invariant holomorphic 3-forms on $J$"
      ],
      "credit": "J. Laga and A. Shnidman",
      "year": "2024",
      "verified": "Recomputed on this site with ceresa_check.py: $G=D_{15}$, signature $(2,2,3,5)$: $B=0$ and $A=8$, and non-hyperelliptic.",
      "notes": "[LS24] say that the examples 3.9 and 3.10 are conditional on the Hodge conjecture only in some cases; check which. Signature computed on this site.",
      "references": [
        "LS24"
      ],
      "seed": true
    }
  ],
  "references": {
    "BDDS26": {
      "text": "T. Bhatnagar, S. Devadas, T. D'Nelly-Warady and P. Srinivasan, Covers of curves, Ceresa cycles, and unlikely intersections.",
      "url": "https://arxiv.org/abs/2603.01445"
    },
    "Bea21": {
      "text": "A. Beauville, A non-hyperelliptic curve with torsion Ceresa class, C. R. Math. Acad. Sci. Paris 359 (2021)."
    },
    "BLLS": {
      "text": "D. Bisogno, W. Li, D. Litt and P. Srinivasan, Group-theoretic Johnson classes and a non-hyperelliptic curve with torsion Ceresa class."
    },
    "BS23": {
      "text": "A. Beauville and C. Schoen, A non-hyperelliptic curve with torsion Ceresa cycle modulo algebraic equivalence, IMRN (2023)."
    },
    "ELS24": {
      "text": "J. Ellenberg, A. Logan and P. Srinivasan, Certifying nontriviality of Ceresa classes of curves.",
      "url": "https://arxiv.org/abs/2412.02015"
    },
    "Lat23": {
      "text": "R. Laterveer, On the tautological ring of Humbert curves, Manuscripta Math. 172 (2023).",
      "url": "https://arxiv.org/abs/2211.15291"
    },
    "LiSh22": {
      "text": "D. T.-B. G. Lilienfeldt and A. Shnidman, Experiments with Ceresa classes of cyclic Fermat quotients.",
      "url": "https://arxiv.org/abs/2112.00520"
    },
    "LS23": {
      "text": "J. Laga and A. Shnidman, Ceresa cycles of bielliptic Picard curves.",
      "url": "https://arxiv.org/abs/2312.12965"
    },
    "LS24": {
      "text": "J. Laga and A. Shnidman, Vanishing criteria for Ceresa cycles, Compositio Math. 161 (2025).",
      "url": "https://arxiv.org/abs/2406.03891"
    },
    "QZ23": {
      "text": "C. Qiu and W. Zhang, Vanishing results for the modified diagonal cycles II: Shimura curves.",
      "url": "https://arxiv.org/abs/2310.19707"
    },
    "QZ24": {
      "text": "C. Qiu and W. Zhang, Vanishing results in Chow groups for the modified diagonal cycles, Tunisian J. Math. 6 (2024).",
      "url": "https://arxiv.org/abs/2209.09736"
    },
    "Shn": {
      "text": "A. Shnidman, VaNTAGe seminar slides.",
      "url": "https://math.mit.edu/~drew/vantage/ShnidmanSlides.pdf"
    },
    "TV18": {
      "text": "J. Top and C. Verschoor, Counting points on the Fricke–Macbeath curve over finite fields, J. Théor. Nombres Bordeaux 30 (2018)."
    }
  }
};
