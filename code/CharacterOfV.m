// Character of G on V = H^0(C, Omega^1), by the Chevalley-Weil formula,
// for a Galois cover C -> C/G = P^1 branched at 0, 1, infinity.
//
// inertia = [a_0, a_1, a_inf]: generators of the inertia groups, each chosen so
// that it acts on the cotangent space of C by multiplication by exp(2 pi i / e).

function CharacterOfV(G, inertia)
    Irr := CharacterTable(G);
    triv := Position(Irr, CharacterRing(G)!1);
    n    := #Irr;

    function Ninner(chi, g, e, j)
        z := RootOfUnity(e);
        s := &+[ z^(-j*k) * chi(g^k) : k in [0..e-1] ];   // project onto zeta^j eigenspace
        return Rationals()!(s / e);
    end function;

    mult := [ Integers() | ];
    for i in [1..n] do
        chi := Irr[i];
        cc  := -(Rationals()!Degree(chi));   // -chi(C[G])
        if i eq triv then cc +:= 1; end if;  // +1 (trivial)
        for g in inertia do
            e := Order(g);
            for j in [1..e-1] do
                cc +:= (1 - j/e) * Ninner(chi, g, e, j);
            end for;
        end for;
        error if Denominator(cc) ne 1, "not valid cover data";
        Append(~mult, Integers()!cc);
    end for;
    return &+[ mult[i] * Irr[i] : i in [1..n] ], mult;
end function;

procedure DisplayV(m)
    s := "";
    for i in [1..#m] do
        c := m[i];
        if c eq 0 then continue; end if;
        t := (Abs(c) eq 1) select Sprintf("CT[%o]", i)
                 else Sprintf("%o*CT[%o]", Abs(c), i);
        if s eq "" then
            s := (c lt 0) select "-" cat t else t;
        else
            s := s cat ((c lt 0) select " - " else " + ") cat t;
        end if;
    end for;
    printf "chi(V) = %o\n", (s eq "") select "0" else s;
end procedure;

G     := /* your group, e.g. SmallGroup(192, 194) */;
a_0   := /* generator of G_0, e.g. G.1*G.4 */;
a_1   := /* generator of G_1 */;
a_inf := (a_0*a_1)^-1;
CT    := CharacterTable(G);
Order(a_0), Order(a_1), Order(a_inf);   // (e_0, e_1, e_inf)
sub<G | a_0, a_1, a_inf> eq G;          // generation
chiV, m := CharacterOfV(G, [a_0, a_1, a_inf]);
DisplayV(m);                            // chi(V) as a sum of CT[i]
