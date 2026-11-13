// Multiplicity of the trivial representation in Wedge^3(W), where
// W = H^1(C) = V + dual(V) and V = H^0(C, Omega^1).
// If it is 0, Laga-Shnidman's criterion (A) applies.

// <chi, 1> = 1/|G| * sum_i |C_i| chi(g_i)
function TrivMult(chi, G)
    cc := Classes(G);
    s  := &+[ cc[i][2] * chi[i] : i in [1..#cc] ];
    return s / #G;
end function;

function Wedge3(chi, pm)
    return [ (chi[i]^3 - 3*chi[pm(i,2)]*chi[i] + 2*chi[pm(i,3)]) / 6
             : i in [1..#chi] ];
end function;

// ---- input: any group, and the constituents of chi(V) found by CharacterOfV.m
G     := /* your group, e.g. SmallGroup(192, 194) */;
parts := /* sequence of indices, e.g. [5, 8, 17] */;

CT := CharacterTable(G);
pm := PowerMap(G);

X  := &+[ CT[i] : i in parts ];
W  := X + ComplexConjugate(X);
W3 := Wedge3(W, pm);

mult := TrivMult(W3, G);
printf "Multiplicity of trivial rep in Wedge^3(W): %o\n", mult;
