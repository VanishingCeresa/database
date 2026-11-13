// Definitions shown in the gray boxes that open when a term is clicked.
// Content is HTML with TeX ($...$, every backslash doubled). {{id|text}} links to another definition.

window.CERESA_KNOWLS = {
  "ceresa-cycle": {
    "title": "Ceresa cycle",
    "content": "For a curve $C$ of genus $g \\ge 2$ with {{jacobian|Jacobian}} $J$ and {{abel-jacobi|Abel–Jacobi map}} $\\iota_e\\colon C \\to J$, the Ceresa cycle is $$\\kappa_{C,e} = [\\iota_e(C)] - (-1)^*[\\iota_e(C)] \\in \\mathrm{CH}_1(J).$$ It is {{homologically-trivial|homologically trivial}}. With $\\mathbb{Q}$-coefficients and $e$ a {{canonical-divisor|canonical}} degree-one class $K_C/(2g-2)$, its class $\\kappa(C)$ does not depend on $e$. Introduced by Ceresa (1983)."
  },
  "hyperelliptic": {
    "title": "Hyperelliptic curve",
    "content": "A curve $C$ of genus $g \\ge 2$ admitting a degree-2 map $C \\to \\mathbb{P}^1$; equivalently, with a model $y^2 = f(x)$, $\\deg f \\in \\{2g+1, 2g+2\\}$ (char $\\neq 2$). The covering involution is the <em>hyperelliptic involution</em>; its $2g+2$ fixed points are the {{weierstrass-point|Weierstrass points}}. Every curve of genus 2 is hyperelliptic. The {{ceresa-cycle|Ceresa cycle}} of a hyperelliptic curve vanishes."
  },
  "weierstrass-point": {
    "title": "Weierstrass point (hyperelliptic case)",
    "content": "On a {{hyperelliptic|hyperelliptic curve}}, the Weierstrass points are the fixed points of the hyperelliptic involution, i.e. the ramification points of $C \\to \\mathbb{P}^1$. Taking one as base point, the involution acts on the {{jacobian|Jacobian}} as $-1$."
  },
  "jacobian": {
    "title": "Jacobian",
    "content": "The Jacobian $J = \\mathrm{Pic}^0(C)$ of a curve $C$ of genus $g$ is a principally polarised abelian variety of dimension $g$ parametrising degree-zero divisor classes on $C$. The curve embeds in $J$ via the {{abel-jacobi|Abel–Jacobi map}}."
  },
  "abel-jacobi": {
    "title": "Abel–Jacobi map",
    "content": "Given a degree-one divisor $e$ on $C$, the map $\\iota_e\\colon C \\to J$, $x \\mapsto [x - e]$. For $g \\ge 1$ it is an embedding. More generally, an <em>Abel–Jacobi map</em> sends homologically trivial cycles to points of an {{intermediate-jacobian|intermediate Jacobian}}."
  },
  "chow-group": {
    "title": "Chow group",
    "content": "$\\mathrm{CH}_k(X)$ is the group of $k$-dimensional algebraic cycles on $X$ modulo {{rational-equivalence|rational equivalence}}. On this site Chow groups are taken with $\\mathbb{Q}$-coefficients, so a class vanishes exactly when the integral class is {{torsion|torsion}}."
  },
  "rational-equivalence": {
    "title": "Rational equivalence",
    "content": "Two cycles are rationally equivalent if their difference is a sum of divisors of rational functions on subvarieties. This is the finest of the standard adequate equivalence relations: rational $\\Rightarrow$ {{algebraic-equivalence|algebraic}} $\\Rightarrow$ homological."
  },
  "algebraic-equivalence": {
    "title": "Algebraic equivalence",
    "content": "Two cycles are algebraically equivalent if they are fibres of a single cycle over a connected parameter variety (or curve). It is coarser than {{rational-equivalence|rational equivalence}} and finer than homological equivalence. Cycles that are homologically trivial modulo algebraic equivalence form the {{griffiths-group|Griffiths group}}."
  },
  "griffiths-group": {
    "title": "Griffiths group",
    "content": "$\\mathrm{Gr}_k(X)$ is the group of {{homologically-trivial|homologically trivial}} $k$-cycles modulo {{algebraic-equivalence|algebraic equivalence}}. Griffiths showed it can be non-zero (even infinitely generated, by Clemens). The image $\\bar\\kappa(C)$ of the {{ceresa-cycle|Ceresa cycle}} lives in $\\mathrm{Gr}_1(J)\\otimes\\mathbb{Q}$."
  },
  "homologically-trivial": {
    "title": "Homologically trivial cycle",
    "content": "A cycle whose class in cohomology (Betti, or ℓ-adic) is zero. The {{ceresa-cycle|Ceresa cycle}} is homologically trivial because $-1$ acts trivially on $H^{2g-2}(J)$."
  },
  "torsion": {
    "title": "Torsion / vanishing",
    "content": "A cycle class is torsion if some non-zero integer multiple of it is zero. After tensoring with $\\mathbb{Q}$, torsion classes become zero, so on this site \"vanishes\" and \"is torsion\" mean the same."
  },
  "modified-diagonal": {
    "title": "Gross–Schoen (modified diagonal) cycle",
    "content": "For a curve $C$ and degree-one class $e$, the modified diagonal $\\Delta_e \\in \\mathrm{CH}^2(C^3)$ is the small diagonal minus the three partial diagonals $\\{(x,x,e)\\}$ etc., plus the three $\\{(x,e,e)\\}$-type curves. With $e = K_C/(2g-2)$, $\\Delta_e = 0$ in $\\mathrm{CH}^2(C^3)\\otimes\\mathbb{Q}$ if and only if the {{ceresa-cycle|Ceresa cycle}} vanishes (S. Zhang)."
  },
  "canonical-divisor": {
    "title": "Canonical divisor",
    "content": "$K_C$ is the divisor class of the sheaf of differentials $\\Omega^1_C$, of degree $2g-2$. The class $\\xi = K_C/(2g-2)$ is the natural degree-one base point for the {{ceresa-cycle|Ceresa cycle}}."
  },
  "automorphism-group": {
    "title": "Automorphism group",
    "content": "$\\mathrm{Aut}(C)$, the group of automorphisms of $C$ over an algebraic closure. For $g \\ge 2$ it is finite, of order at most $84(g-1)$ (Hurwitz bound; see {{hurwitz-curve|Hurwitz curve}}). It acts on $H^1(C)$ and on the cohomology of $J$; the vanishing criteria use the invariants of these actions."
  },
  "picard-curve": {
    "title": "Picard curve",
    "content": "A curve of genus 3 with model $y^3 = f(x)$, $f$ of degree 4 without repeated roots. It is a non-hyperelliptic {{plane-quartic|plane quartic}} with an automorphism $y \\mapsto \\zeta_3 y$ of order 3."
  },
  "bielliptic": {
    "title": "Bielliptic curve",
    "content": "A curve admitting a degree-2 map to an elliptic curve. For {{picard-curve|Picard curves}} $y^3 = x^4 + ax^2 + c$, the involution $x \\mapsto -x$ gives such a map."
  },
  "plane-quartic": {
    "title": "Plane quartic",
    "content": "A smooth curve of degree 4 in $\\mathbb{P}^2$. It has genus 3 and is canonically embedded; every non-hyperelliptic genus-3 curve arises this way."
  },
  "hurwitz-curve": {
    "title": "Hurwitz curve",
    "content": "A curve of genus $g \\ge 2$ whose {{automorphism-group|automorphism group}} attains the Hurwitz bound $84(g-1)$. Examples: the Klein quartic ($g=3$) and the Fricke–Macbeath curve ($g = 7$)."
  },
  "harmonic-volume": {
    "title": "Harmonic volume",
    "content": "An analytic invariant of a compact Riemann surface defined by B. Harris using iterated integrals of harmonic 1-forms. It is related to the Abel–Jacobi image of the {{ceresa-cycle|Ceresa cycle}}; showing it is non-torsion proves $\\bar\\kappa(C) \\neq 0$."
  },
  "intermediate-jacobian": {
    "title": "Intermediate Jacobian",
    "content": "Griffiths' complex torus $J^k(X) = H^{2k-1}(X,\\mathbb{C}) / (F^k + H^{2k-1}(X,\\mathbb{Z}))$. The {{abel-jacobi|Abel–Jacobi map}} sends homologically trivial codimension-$k$ cycles to $J^k(X)$."
  },
  "hodge-conjecture": {
    "title": "Hodge conjecture",
    "content": "For a smooth projective complex variety, every rational cohomology class of Hodge type $(p,p)$ is a $\\mathbb{Q}$-linear combination of classes of algebraic subvarieties. Laga–Shnidman's criterion (B) uses it; Schoen proved the case needed for {{picard-curve|Picard curves}}."
  },
  "very-general": {
    "title": "Very general",
    "content": "A property holds for a very general point of a variety if it holds outside a countable union of proper closed subvarieties (stronger than \"general\", which allows one proper closed subset)."
  },
  "moduli-space": {
    "title": "Moduli space $\\mathcal{M}_g$",
    "content": "The coarse moduli space of smooth projective curves of genus $g$, of dimension $3g - 3$ for $g \\ge 2$. The vanishing loci $V^{\\mathrm{rat}}_g \\subseteq V^{\\mathrm{alg}}_g$ are subsets of $\\mathcal{M}_g$."
  },
  "shimura-curve": {
    "title": "Shimura curve",
    "content": "A curve uniformised by the upper half-plane modulo an arithmetic group coming from a quaternion algebra over a totally real field. Modular curves are the split case."
  }
};
