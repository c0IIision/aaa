import {
    w as Ma,
    _ as Te
} from "../chunks/preload-helper-d3f18431.js";
import {
    S as $e,
    i as xe,
    s as ea,
    e as P,
    k as ae,
    t as O,
    L as Ee,
    c as B,
    a as R,
    m as re,
    h as G,
    d as p,
    M as ke,
    b as _,
    G as He,
    Q as f,
    f as ue,
    _ as fa,
    g as W,
    H as g,
    I as ye,
    j as de,
    P as Ca,
    E as he,
    l as De,
    $ as za,
    v as aa,
    K as fe,
    a0 as oa,
    n as Se,
    o as le,
    p as Re,
    q as x,
    J as Ve,
    w as Le,
    x as Qe,
    y as Ue,
    B as Ne,
    a1 as ma,
    a2 as ha,
    a3 as ga,
    N as qa,
    a4 as Ta,
    V as La
} from "../chunks/index-b1ca86f9.js";
import {
    aB as c,
    aC as u,
    aD as We,
    ay as ia,
    ax as ca,
    aF as da,
    a_ as Qa,
    aH as Ua,
    aM as Ze,
    a$ as te,
    c as Ie,
    b0 as je,
    aG as me,
    aK as ze,
    aJ as qe,
    b1 as Na,
    b2 as Ja,
    aN as Pa,
    b3 as Xe,
    aQ as Me,
    b4 as na,
    az as pa,
    b5 as _a,
    b6 as Aa,
    aT as Ye,
    aU as Ke,
    b7 as Fa,
    aR as Ya,
    aS as Oa,
    aZ as Ga,
    aO as Ka,
    b8 as Ha,
    aA as Wa,
    s as Za,
    b9 as ja,
    ba as ee
} from "../chunks/PurchaseCoinsStore-9a29c75c.js";
const Xa = !0,
    ve = Ma([]);
var $a = "/_app/immutable/assets/coin-ea77525e.mp3",
    xa = "/_app/immutable/assets/modal-44a0ed08.mp3";

function ba(a, e, r) {
    const t = a.slice();
    return t[15] = e[r], t
}

function er(a) {
    let e, r = me(c[a[0].cardID].rare) + "",
        t;
    return {
        c() {
            e = P("span"), t = O(r), this.h()
        },
        l(l) {
            e = B(l, "SPAN", {
                class: !0
            });
            var s = R(e);
            t = G(s, r), s.forEach(p), this.h()
        },
        h() {
            _(e, "class", "rarity-tag bg-blue-600 svelte-1hhqzie")
        },
        m(l, s) {
            W(l, e, s), g(e, t)
        },
        p(l, s) {
            s & 1 && r !== (r = me(c[l[0].cardID].rare) + "") && de(t, r)
        },
        d(l) {
            l && p(e)
        }
    }
}

function ar(a) {
    let e, r = me(c[a[0].cardID].rare) + "",
        t;
    return {
        c() {
            e = P("span"), t = O(r), this.h()
        },
        l(l) {
            e = B(l, "SPAN", {
                class: !0
            });
            var s = R(e);
            t = G(s, r), s.forEach(p), this.h()
        },
        h() {
            _(e, "class", "rarity-tag bg-violet-500 svelte-1hhqzie")
        },
        m(l, s) {
            W(l, e, s), g(e, t)
        },
        p(l, s) {
            s & 1 && r !== (r = me(c[l[0].cardID].rare) + "") && de(t, r)
        },
        d(l) {
            l && p(e)
        }
    }
}

function rr(a) {
    let e, r = me(c[a[0].cardID].rare) + "",
        t;
    return {
        c() {
            e = P("span"), t = O(r), this.h()
        },
        l(l) {
            e = B(l, "SPAN", {
                class: !0
            });
            var s = R(e);
            t = G(s, r), s.forEach(p), this.h()
        },
        h() {
            _(e, "class", "rarity-tag bg-cyan-500 svelte-1hhqzie")
        },
        m(l, s) {
            W(l, e, s), g(e, t)
        },
        p(l, s) {
            s & 1 && r !== (r = me(c[l[0].cardID].rare) + "") && de(t, r)
        },
        d(l) {
            l && p(e)
        }
    }
}

function tr(a) {
    let e, r = me(c[a[0].cardID].rare) + "",
        t;
    return {
        c() {
            e = P("span"), t = O(r), this.h()
        },
        l(l) {
            e = B(l, "SPAN", {
                class: !0
            });
            var s = R(e);
            t = G(s, r), s.forEach(p), this.h()
        },
        h() {
            _(e, "class", "rarity-tag bg-rose-500 svelte-1hhqzie")
        },
        m(l, s) {
            W(l, e, s), g(e, t)
        },
        p(l, s) {
            s & 1 && r !== (r = me(c[l[0].cardID].rare) + "") && de(t, r)
        },
        d(l) {
            l && p(e)
        }
    }
}

function lr(a) {
    let e, r = me(c[a[0].cardID].rare) + "",
        t;
    return {
        c() {
            e = P("span"), t = O(r), this.h()
        },
        l(l) {
            e = B(l, "SPAN", {
                class: !0
            });
            var s = R(e);
            t = G(s, r), s.forEach(p), this.h()
        },
        h() {
            _(e, "class", "rarity-tag bg-amber-600 svelte-1hhqzie")
        },
        m(l, s) {
            W(l, e, s), g(e, t)
        },
        p(l, s) {
            s & 1 && r !== (r = me(c[l[0].cardID].rare) + "") && de(t, r)
        },
        d(l) {
            l && p(e)
        }
    }
}

function sr(a) {
    let e, r = me(c[a[0].cardID].rare) + "",
        t;
    return {
        c() {
            e = P("span"), t = O(r), this.h()
        },
        l(l) {
            e = B(l, "SPAN", {
                class: !0
            });
            var s = R(e);
            t = G(s, r), s.forEach(p), this.h()
        },
        h() {
            _(e, "class", "rarity-tag bg-yellow-300 svelte-1hhqzie")
        },
        m(l, s) {
            W(l, e, s), g(e, t)
        },
        p(l, s) {
            s & 1 && r !== (r = me(c[l[0].cardID].rare) + "") && de(t, r)
        },
        d(l) {
            l && p(e)
        }
    }
}

function nr(a) {
    let e, r = me(c[a[0].cardID].rare) + "",
        t;
    return {
        c() {
            e = P("span"), t = O(r), this.h()
        },
        l(l) {
            e = B(l, "SPAN", {
                class: !0
            });
            var s = R(e);
            t = G(s, r), s.forEach(p), this.h()
        },
        h() {
            _(e, "class", "rarity-tag bg-emerald-400 svelte-1hhqzie")
        },
        m(l, s) {
            W(l, e, s), g(e, t)
        },
        p(l, s) {
            s & 1 && r !== (r = me(c[l[0].cardID].rare) + "") && de(t, r)
        },
        d(l) {
            l && p(e)
        }
    }
}

function va(a) {
    let e, r, t, l, s, n, o = (a[3] * a[1]).toString() + "",
        d, v, m, L, M, Q, h, V, S, F, y, U, K, Z, ce, J, se = c[a[0].cardID].name + "",
        ne, C, N, k, D, z = We(a[0]) + "",
        T, A, E, j;

    function pe(i, b) {
        if (c[i[0].cardID].rare == u.Common) return nr;
        if (c[i[0].cardID].rare == u.Uncommon) return sr;
        if (c[i[0].cardID].rare == u.Rare) return lr;
        if (c[i[0].cardID].rare == u.SuperRare) return tr;
        if (c[i[0].cardID].rare == u.Epic) return rr;
        if (c[i[0].cardID].rare == u.Legendary) return ar;
        if (c[i[0].cardID].rare == u.Mythical) return er
    }
    let _e = pe(a),
        X = _e && _e(a);
    return {
        c() {
            e = P("div"), r = P("div"), t = P("div"), l = P("img"), n = ae(), d = O(o), v = ae(), m = P("div"), L = O("x"), M = O(a[1]), Q = ae(), h = P("div"), V = P("img"), y = ae(), U = P("div"), K = Ee("svg"), Z = Ee("path"), ce = ae(), J = P("div"), ne = O(se), C = ae(), X && X.c(), N = ae(), k = P("div"), D = O("\u2022 Daily Yield: "), T = O(z), this.h()
        },
        l(i) {
            e = B(i, "DIV", {
                style: !0,
                class: !0
            });
            var b = R(e);
            r = B(b, "DIV", {
                class: !0
            });
            var Ce = R(r);
            t = B(Ce, "DIV", {
                class: !0
            });
            var Pe = R(t);
            l = B(Pe, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), n = re(Pe), d = G(Pe, o), Pe.forEach(p), v = re(Ce), m = B(Ce, "DIV", {
                style: !0,
                class: !0
            });
            var I = R(m);
            L = G(I, "x"), M = G(I, a[1]), I.forEach(p), Ce.forEach(p), Q = re(b), h = B(b, "DIV", {
                class: !0
            });
            var q = R(h);
            V = B(q, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), q.forEach(p), y = re(b), U = B(b, "DIV", {
                class: !0
            });
            var w = R(U);
            K = ke(w, "svg", {
                width: !0,
                height: !0,
                viewBox: !0,
                class: !0
            });
            var Y = R(K);
            Z = ke(Y, "path", {
                fill: !0,
                d: !0
            }), R(Z).forEach(p), Y.forEach(p), ce = re(w), J = B(w, "DIV", {
                class: !0
            });
            var oe = R(J);
            ne = G(oe, se), oe.forEach(p), C = re(w), X && X.l(w), N = re(w), k = B(w, "DIV", {
                class: !0
            });
            var H = R(k);
            D = G(H, "\u2022 Daily Yield: "), T = G(H, z), H.forEach(p), w.forEach(p), b.forEach(p), this.h()
        },
        h() {
            _(l, "class", "h-5 mx-1"), He(l.src, s = "https://firebasestorage.googleapis.com/v0/b/project-zoo-c893d.appspot.com/o/coins%2FCoinCrop2.png?alt=media") || _(l, "src", s), _(l, "alt", "Zoo Coin"), _(t, "class", "absolute top-2 right-2 pr-2 hidden svelte-1hhqzie"), f(t, "collectable", a[3] >= 1 && !a[5]), ue(m, "top", "-1px"), ue(m, "left", "-1px"), _(m, "class", "absolute text-black font-semibold text-sm rounded-br-xl py-1 px-2 border svelte-1hhqzie"), f(m, "hidden", a[15] > 1 || a[1] == 1), f(m, "bg-emerald-300", c[a[0].cardID].rare == u.Common), f(m, "bg-yellow-300", c[a[0].cardID].rare == u.Uncommon), f(m, "bg-amber-500", c[a[0].cardID].rare == u.Rare), f(m, "bg-rose-500", c[a[0].cardID].rare == u.SuperRare), f(m, "bg-cyan-300", c[a[0].cardID].rare == u.Epic), f(m, "bg-violet-300", c[a[0].cardID].rare == u.Legendary), f(m, "bg-blue-300", c[a[0].cardID].rare == u.Mythical), f(m, "border-emerald-300", c[a[0].cardID].rare == u.Common && a[3] >= 1 && !a[5]), f(m, "border-yellow-300", c[a[0].cardID].rare == u.Uncommon && a[3] >= 1 && !a[5]), f(m, "border-amber-500", c[a[0].cardID].rare == u.Rare && a[3] >= 1 && !a[5]), f(m, "border-rose-500", c[a[0].cardID].rare == u.SuperRare && a[3] >= 1 && !a[5]), f(m, "border-cyan-400", c[a[0].cardID].rare == u.Epic && a[3] >= 1 && !a[5]), f(m, "border-violet-500", c[a[0].cardID].rare == u.Legendary && a[3] >= 1 && !a[5]), f(m, "border-blue-500", c[a[0].cardID].rare == u.Mythical && a[3] >= 1 && !a[5]), f(m, "border-neutral-500", a[3] < 1 || a[5]), _(r, "class", "relative svelte-1hhqzie"), _(V, "class", "w-full card-image"), He(V.src, S = Da() ? c[a[0].cardID].image2 : c[a[0].cardID].image) || _(V, "src", S), _(V, "alt", F = c[a[0].cardID].name), _(h, "class", "sm:h-48 svelte-1hhqzie"), _(Z, "fill", "currentColor"), _(Z, "d", "M11 17h2v-6h-2Zm1-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"), _(K, "width", "20"), _(K, "height", "20"), _(K, "viewBox", "0 0 24 24"), _(K, "class", "absolute top-5 right-4"), _(J, "class", "text-xl font-bold mb-2 svelte-1hhqzie"), _(k, "class", "mt-2 text-xs sm:text-base svelte-1hhqzie"), _(U, "class", "w-full p-4 cursor-pointer relative svelte-1hhqzie"), ue(e, "--x", (a[15] == 2 ? 0 : .5) + "rem"), ue(e, "--y", "-" + (a[15] == 2 ? 0 : .5) + "rem"), ue(e, "--scale", a[15] == 2 ? 1.055 : 1.06), ue(e, "--rotate", (a[15] - 1) * 1 + "deg"), ue(e, "--opacity", a[15] == 2 ? a[1] > 2 ? .75 : .5 : a[1] > 2 ? .5 : 0), ue(e, "z-index", a[15] == 1 ? 3 : 3 - a[15]), _(e, "class", A = fa(a[15] == 1 ? a[1] > 1 ? "first" : "listing" : a[1] > 1 ? "dup" : "opacity-0") + " svelte-1hhqzie"), f(e, "top-0", a[15] < 3), f(e, "left-0", a[15] < 3), f(e, "absolute", a[15] < 3), f(e, "bg-emerald-300", c[a[0].cardID].rare == u.Common), f(e, "bg-yellow-300", c[a[0].cardID].rare == u.Uncommon), f(e, "bg-amber-500", c[a[0].cardID].rare == u.Rare), f(e, "bg-rose-500", c[a[0].cardID].rare == u.SuperRare), f(e, "bg-cyan-400", c[a[0].cardID].rare == u.Epic), f(e, "bg-violet-500", c[a[0].cardID].rare == u.Legendary), f(e, "bg-blue-500", c[a[0].cardID].rare == u.Mythical), f(e, "gold-glow", a[3] >= 1 && !a[5] && a[15] == 1), f(e, "shadow-emerald-300", c[a[0].cardID].rare == u.Common), f(e, "shadow-yellow-300", c[a[0].cardID].rare == u.Uncommon), f(e, "shadow-amber-500", c[a[0].cardID].rare == u.Rare), f(e, "shadow-rose-500", c[a[0].cardID].rare == u.SuperRare), f(e, "shadow-cyan-400", c[a[0].cardID].rare == u.Epic), f(e, "shadow-violet-500", c[a[0].cardID].rare == u.Legendary), f(e, "shadow-blue-500", c[a[0].cardID].rare == u.Mythical), f(e, "border-emerald-300", c[a[0].cardID].rare == u.Common && a[3] >= 1 && !a[5]), f(e, "border-yellow-300", c[a[0].cardID].rare == u.Uncommon && a[3] >= 1 && !a[5]), f(e, "border-amber-500", c[a[0].cardID].rare == u.Rare && a[3] >= 1 && !a[5]), f(e, "border-rose-500", c[a[0].cardID].rare == u.SuperRare && a[3] >= 1 && !a[5]), f(e, "border-cyan-400", c[a[0].cardID].rare == u.Epic && a[3] >= 1 && !a[5]), f(e, "border-violet-500", c[a[0].cardID].rare == u.Legendary && a[3] >= 1 && !a[5]), f(e, "border-blue-500", c[a[0].cardID].rare == u.Mythical && a[3] >= 1 && !a[5]), f(e, "border-neutral-500", a[3] < 1 || a[5])
        },
        m(i, b) {
            W(i, e, b), g(e, r), g(r, t), g(t, l), g(t, n), g(t, d), g(r, v), g(r, m), g(m, L), g(m, M), a[9](r), g(e, Q), g(e, h), g(h, V), g(e, y), g(e, U), g(U, K), g(K, Z), g(U, ce), g(U, J), g(J, ne), g(U, C), X && X.m(U, null), g(U, N), g(U, k), g(k, D), g(k, T), E || (j = [ye(U, "click", a[6]), ye(e, "click", a[8])], E = !0)
        },
        p(i, b) {
            b & 10 && o !== (o = (i[3] * i[1]).toString() + "") && de(d, o), b & 40 && f(t, "collectable", i[3] >= 1 && !i[5]), b & 2 && de(M, i[1]), b & 2 && f(m, "hidden", i[15] > 1 || i[1] == 1), b & 1 && f(m, "bg-emerald-300", c[i[0].cardID].rare == u.Common), b & 1 && f(m, "bg-yellow-300", c[i[0].cardID].rare == u.Uncommon), b & 1 && f(m, "bg-amber-500", c[i[0].cardID].rare == u.Rare), b & 1 && f(m, "bg-rose-500", c[i[0].cardID].rare == u.SuperRare), b & 1 && f(m, "bg-cyan-300", c[i[0].cardID].rare == u.Epic), b & 1 && f(m, "bg-violet-300", c[i[0].cardID].rare == u.Legendary), b & 1 && f(m, "bg-blue-300", c[i[0].cardID].rare == u.Mythical), b & 41 && f(m, "border-emerald-300", c[i[0].cardID].rare == u.Common && i[3] >= 1 && !i[5]), b & 41 && f(m, "border-yellow-300", c[i[0].cardID].rare == u.Uncommon && i[3] >= 1 && !i[5]), b & 41 && f(m, "border-amber-500", c[i[0].cardID].rare == u.Rare && i[3] >= 1 && !i[5]), b & 41 && f(m, "border-rose-500", c[i[0].cardID].rare == u.SuperRare && i[3] >= 1 && !i[5]), b & 41 && f(m, "border-cyan-400", c[i[0].cardID].rare == u.Epic && i[3] >= 1 && !i[5]), b & 41 && f(m, "border-violet-500", c[i[0].cardID].rare == u.Legendary && i[3] >= 1 && !i[5]), b & 41 && f(m, "border-blue-500", c[i[0].cardID].rare == u.Mythical && i[3] >= 1 && !i[5]), b & 40 && f(m, "border-neutral-500", i[3] < 1 || i[5]), b & 1 && !He(V.src, S = Da() ? c[i[0].cardID].image2 : c[i[0].cardID].image) && _(V, "src", S), b & 1 && F !== (F = c[i[0].cardID].name) && _(V, "alt", F), b & 1 && se !== (se = c[i[0].cardID].name + "") && de(ne, se), _e === (_e = pe(i)) && X ? X.p(i, b) : (X && X.d(1), X = _e && _e(i), X && (X.c(), X.m(U, N))), b & 1 && z !== (z = We(i[0]) + "") && de(T, z), b & 2 && ue(e, "--opacity", i[15] == 2 ? i[1] > 2 ? .75 : .5 : i[1] > 2 ? .5 : 0), b & 2 && A !== (A = fa(i[15] == 1 ? i[1] > 1 ? "first" : "listing" : i[1] > 1 ? "dup" : "opacity-0") + " svelte-1hhqzie") && _(e, "class", A), b & 2 && f(e, "top-0", i[15] < 3), b & 2 && f(e, "left-0", i[15] < 3), b & 2 && f(e, "absolute", i[15] < 3), b & 3 && f(e, "bg-emerald-300", c[i[0].cardID].rare == u.Common), b & 3 && f(e, "bg-yellow-300", c[i[0].cardID].rare == u.Uncommon), b & 3 && f(e, "bg-amber-500", c[i[0].cardID].rare == u.Rare), b & 3 && f(e, "bg-rose-500", c[i[0].cardID].rare == u.SuperRare), b & 3 && f(e, "bg-cyan-400", c[i[0].cardID].rare == u.Epic), b & 3 && f(e, "bg-violet-500", c[i[0].cardID].rare == u.Legendary), b & 3 && f(e, "bg-blue-500", c[i[0].cardID].rare == u.Mythical), b & 42 && f(e, "gold-glow", i[3] >= 1 && !i[5] && i[15] == 1), b & 3 && f(e, "shadow-emerald-300", c[i[0].cardID].rare == u.Common), b & 3 && f(e, "shadow-yellow-300", c[i[0].cardID].rare == u.Uncommon), b & 3 && f(e, "shadow-amber-500", c[i[0].cardID].rare == u.Rare), b & 3 && f(e, "shadow-rose-500", c[i[0].cardID].rare == u.SuperRare), b & 3 && f(e, "shadow-cyan-400", c[i[0].cardID].rare == u.Epic), b & 3 && f(e, "shadow-violet-500", c[i[0].cardID].rare == u.Legendary), b & 3 && f(e, "shadow-blue-500", c[i[0].cardID].rare == u.Mythical), b & 43 && f(e, "border-emerald-300", c[i[0].cardID].rare == u.Common && i[3] >= 1 && !i[5]), b & 43 && f(e, "border-yellow-300", c[i[0].cardID].rare == u.Uncommon && i[3] >= 1 && !i[5]), b & 43 && f(e, "border-amber-500", c[i[0].cardID].rare == u.Rare && i[3] >= 1 && !i[5]), b & 43 && f(e, "border-rose-500", c[i[0].cardID].rare == u.SuperRare && i[3] >= 1 && !i[5]), b & 43 && f(e, "border-cyan-400", c[i[0].cardID].rare == u.Epic && i[3] >= 1 && !i[5]), b & 43 && f(e, "border-violet-500", c[i[0].cardID].rare == u.Legendary && i[3] >= 1 && !i[5]), b & 43 && f(e, "border-blue-500", c[i[0].cardID].rare == u.Mythical && i[3] >= 1 && !i[5]), b & 42 && f(e, "border-neutral-500", i[3] < 1 || i[5])
        },
        d(i) {
            i && p(e), a[9](null), X && X.d(), E = !1, Ca(j)
        }
    }
}

function Ia(a) {
    let e, r, t, l, s;
    return {
        c() {
            e = P("button"), r = Ee("svg"), t = Ee("path"), this.h()
        },
        l(n) {
            e = B(n, "BUTTON", {
                class: !0
            });
            var o = R(e);
            r = ke(o, "svg", {
                width: !0,
                height: !0,
                viewBox: !0
            });
            var d = R(r);
            t = ke(d, "path", {
                fill: !0,
                d: !0
            }), R(t).forEach(p), d.forEach(p), o.forEach(p), this.h()
        },
        h() {
            _(t, "fill", "currentColor"), _(t, "d", "M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"), _(r, "width", "16"), _(r, "height", "16"), _(r, "viewBox", "0 0 24 24"), _(e, "class", "close z-30 svelte-1hhqzie")
        },
        m(n, o) {
            W(n, e, o), g(e, r), g(r, t), l || (s = ye(e, "click", a[7]), l = !0)
        },
        p: he,
        d(n) {
            n && p(e), l = !1, s()
        }
    }
}

function or(a) {
    let e, r, t = [1, 2, 3],
        l = [];
    for (let n = 0; n < 3; n += 1) l[n] = va(ba(a, t, n));
    let s = a[2] && Ia(a);
    return {
        c() {
            for (let n = 0; n < 3; n += 1) l[n].c();
            e = ae(), s && s.c(), r = De()
        },
        l(n) {
            for (let o = 0; o < 3; o += 1) l[o].l(n);
            e = re(n), s && s.l(n), r = De()
        },
        m(n, o) {
            for (let d = 0; d < 3; d += 1) l[d].m(n, o);
            W(n, e, o), s && s.m(n, o), W(n, r, o)
        },
        p(n, [o]) {
            if (o & 379) {
                t = [1, 2, 3];
                let d;
                for (d = 0; d < 3; d += 1) {
                    const v = ba(n, t, d);
                    l[d] ? l[d].p(v, o) : (l[d] = va(v), l[d].c(), l[d].m(e.parentNode, e))
                }
                for (; d < 3; d += 1) l[d].d(1)
            }
            n[2] ? s ? s.p(n, o) : (s = Ia(n), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null)
        },
        i: he,
        o: he,
        d(n) {
            za(l, n), n && p(e), s && s.d(n), n && p(r)
        }
    }
}

function Da() {
    var a = document.createElement("canvas");
    return a.getContext && a.getContext("2d") ? a.toDataURL("image/webp").indexOf("data:image/webp") == 0 : !1
}

function ir(a, e, r) {
    let t = !1;
    ia.subscribe(y => {
        t = y
    });

    function l() {
        if (!t && Xa) {
            const y = new Audio(xa);
            y.volume = .25, y.play()
        }
        Qa(n, s)
    }
    let {
        count: s = 1
    } = e, {
        cardInfo: n = null
    } = e, {
        writableParent: o = null
    } = e, d = 0;

    function v() {
        if (!t) {
            const y = new Audio(Ua);
            y.volume = .2, y.play()
        }
        o.set(null)
    }

    function m() {
        r(3, d = Ze(n))
    }
    let L = "",
        M, Q = !1,
        h, V;
    aa(async () => {
        {
            setInterval(m, 1e3), h = (await Te(() => import("../chunks/fireBaseSingle-4aa0a3c9.js"), ["chunks/fireBaseSingle-4aa0a3c9.js", "chunks/PurchaseCoinsStore-9a29c75c.js", "assets/PurchaseCoinsStore-ac31c26e.css", "chunks/preload-helper-d3f18431.js", "chunks/index-b1ca86f9.js"])).default, V = (await Te(() => import("../chunks/myfireStoreSingle-51336883.js"), ["chunks/myfireStoreSingle-51336883.js", "chunks/fireBaseSingle-4aa0a3c9.js", "chunks/PurchaseCoinsStore-9a29c75c.js", "assets/PurchaseCoinsStore-ac31c26e.css", "chunks/preload-helper-d3f18431.js", "chunks/index-b1ca86f9.js"])).default;
            const y = ca(h);
            da(y, U => {
                U ? L = U.uid : L = ""
            })
        }
    });
    async function S() {
        var k;
        r(5, Q = !0), console.log("try get yield");
        let y = Ze(n) * s;
        if (y <= 0) return;
        if (!t) {
            let D = y / 2 < 4 ? y / 2 : 4;
            for (let z = 0; z < D; z++) {
                let T = new Audio($a);
                T.volume = .1, setTimeout(() => {
                    T.play()
                }, z * 40 + 480)
            }
        }
        let U = M.getBoundingClientRect().top,
            K = M.getBoundingClientRect().right;
        M.getBoundingClientRect().width, M.getBoundingClientRect().height;
        let Z = y < 13 ? y : 13,
            ce = ["r", "e", "a", "l", "l", "y", "f", "u", "n", "g", "a", "m", "e"];
        for (let D = 0; D < Z; D++) {
            let z = document.createElement("div");
            z.style.setProperty("--delay", ` ${D/50}s`), z.style.right = window.innerWidth - K + "px", z.style.top = U + "px", Z == 13 && (z.innerText = ce[D]), z.classList.add("coin"), document.body.appendChild(z), setTimeout(() => {
                document.body.removeChild(z)
            }, 1e3)
        }
        y > We(n) * s && (y = We(n) * s);
        let J = !0,
            se = new Date;
        const ne = te(V, "player_zoo", L, "animals2", (k = n.id) == null ? void 0 : k.toString()),
            C = te(V, "player_zoo", L, "currency", "coins");
        let N = fe(Ie);
        try {
            const D = await je(V, async z => {
                const T = N + y;
                return await z.update(C, {
                    coins: T
                }), await z.update(ne, {
                    born: se.toISOString()
                }), N = T, T
            });
            console.log("Coins increased to ", D)
        } catch (D) {
            J = !1, console.error(D)
        }!J || (r(0, n.createTime = se, n), Ie.set(N), m(), r(5, Q = !1))
    }

    function F(y) {
        oa[y ? "unshift" : "push"](() => {
            M = y, r(4, M)
        })
    }
    return a.$$set = y => {
        "count" in y && r(1, s = y.count), "cardInfo" in y && r(0, n = y.cardInfo), "writableParent" in y && r(2, o = y.writableParent)
    }, [n, s, o, d, M, Q, l, v, S, F]
}
class ua extends $e {
    constructor(e) {
        super(), xe(this, e, ir, or, ea, {
            count: 999,
            cardInfo: 0,
            writableParent: 2
        })
    }
}
var cr = "/_app/immutable/assets/tada-42947e28.mp3",
    dr = "/_app/immutable/assets/mythical-fe483549.mp3";

function wa(a) {
    let e, r, t, l, s, n, o, d, v, m, L, M, Q, h, V, S, F, y, U, K, Z;
    const ce = [fr, ur],
        J = [];

    function se(k, D) {
        return k[0] ? 0 : 1
    }
    o = se(a), d = J[o] = ce[o](a);
    const ne = [hr, mr],
        C = [];

    function N(k, D) {
        return k[1] ? 0 : 1
    }
    return h = N(a), V = C[h] = ne[h](a), {
        c() {
            e = P("div"), r = P("div"), t = O("These animals will soon become parents!"), l = ae(), s = P("div"), n = P("div"), d.c(), v = ae(), m = P("div"), L = O("\u{1F49E}"), M = ae(), Q = P("div"), V.c(), S = ae(), F = P("button"), y = O("BREED"), this.h()
        },
        l(k) {
            e = B(k, "DIV", {
                class: !0
            });
            var D = R(e);
            r = B(D, "DIV", {
                class: !0
            });
            var z = R(r);
            t = G(z, "These animals will soon become parents!"), z.forEach(p), l = re(D), s = B(D, "DIV", {
                class: !0
            });
            var T = R(s);
            n = B(T, "DIV", {
                class: !0
            });
            var A = R(n);
            d.l(A), A.forEach(p), v = re(T), m = B(T, "DIV", {
                class: !0,
                style: !0
            });
            var E = R(m);
            L = G(E, "\u{1F49E}"), E.forEach(p), M = re(T), Q = B(T, "DIV", {
                class: !0
            });
            var j = R(Q);
            V.l(j), j.forEach(p), T.forEach(p), S = re(D), F = B(D, "BUTTON", {
                class: !0
            });
            var pe = R(F);
            y = G(pe, "BREED"), pe.forEach(p), D.forEach(p), this.h()
        },
        h() {
            _(r, "class", "w-full text-center my-5 text-stone-100"), _(n, "class", "h-fit w-42 sm:w-48 relative"), _(m, "class", "px-4 -mx-12 sm:mx-0 text-white text-7xl"), ue(m, "z-index", "2"), _(Q, "class", "h-fit w-42 sm:w-48 relative"), _(s, "class", "w-full h-fit text-center flex items-center justify-center"), _(F, "class", "text-center mx-auto breed-btn block m-2 px-1 rounded-sm svelte-1cub4m9"), _(e, "class", "breading-div h-fit pb-8 svelte-1cub4m9")
        },
        m(k, D) {
            W(k, e, D), g(e, r), g(r, t), g(e, l), g(e, s), g(s, n), J[o].m(n, null), g(s, v), g(s, m), g(m, L), g(s, M), g(s, Q), C[h].m(Q, null), g(e, S), g(e, F), g(F, y), U = !0, K || (Z = ye(F, "click", a[2]), K = !0)
        },
        p(k, D) {
            let z = o;
            o = se(k), o === z ? J[o].p(k, D) : (Se(), le(J[z], 1, 1, () => {
                J[z] = null
            }), Re(), d = J[o], d ? d.p(k, D) : (d = J[o] = ce[o](k), d.c()), x(d, 1), d.m(n, null));
            let T = h;
            h = N(k), h === T ? C[h].p(k, D) : (Se(), le(C[T], 1, 1, () => {
                C[T] = null
            }), Re(), V = C[h], V ? V.p(k, D) : (V = C[h] = ne[h](k), V.c()), x(V, 1), V.m(Q, null))
        },
        i(k) {
            U || (x(d), x(V), U = !0)
        },
        o(k) {
            le(d), le(V), U = !1
        },
        d(k) {
            k && p(e), J[o].d(), C[h].d(), K = !1, Z()
        }
    }
}

function ur(a) {
    let e, r;
    return {
        c() {
            e = P("div"), r = O("Pick Parent"), this.h()
        },
        l(t) {
            e = B(t, "DIV", {
                class: !0
            });
            var l = R(e);
            r = G(l, "Pick Parent"), l.forEach(p), this.h()
        },
        h() {
            _(e, "class", "w-full pick-div svelte-1cub4m9")
        },
        m(t, l) {
            W(t, e, l), g(e, r)
        },
        p: he,
        i: he,
        o: he,
        d(t) {
            t && p(e)
        }
    }
}

function fr(a) {
    let e, r;
    return e = new ua({
        props: {
            cardInfo: a[0],
            writableParent: qe
        }
    }), {
        c() {
            Le(e.$$.fragment)
        },
        l(t) {
            Qe(e.$$.fragment, t)
        },
        m(t, l) {
            Ue(e, t, l), r = !0
        },
        p(t, l) {
            const s = {};
            l & 1 && (s.cardInfo = t[0]), e.$set(s)
        },
        i(t) {
            r || (x(e.$$.fragment, t), r = !0)
        },
        o(t) {
            le(e.$$.fragment, t), r = !1
        },
        d(t) {
            Ne(e, t)
        }
    }
}

function mr(a) {
    let e, r;
    return {
        c() {
            e = P("div"), r = O("Pick Parent"), this.h()
        },
        l(t) {
            e = B(t, "DIV", {
                class: !0
            });
            var l = R(e);
            r = G(l, "Pick Parent"), l.forEach(p), this.h()
        },
        h() {
            _(e, "class", "w-full pick-div svelte-1cub4m9")
        },
        m(t, l) {
            W(t, e, l), g(e, r)
        },
        p: he,
        i: he,
        o: he,
        d(t) {
            t && p(e)
        }
    }
}

function hr(a) {
    let e, r;
    return e = new ua({
        props: {
            cardInfo: a[1],
            writableParent: ze
        }
    }), {
        c() {
            Le(e.$$.fragment)
        },
        l(t) {
            Qe(e.$$.fragment, t)
        },
        m(t, l) {
            Ue(e, t, l), r = !0
        },
        p(t, l) {
            const s = {};
            l & 2 && (s.cardInfo = t[1]), e.$set(s)
        },
        i(t) {
            r || (x(e.$$.fragment, t), r = !0)
        },
        o(t) {
            le(e.$$.fragment, t), r = !1
        },
        d(t) {
            Ne(e, t)
        }
    }
}

function gr(a) {
    let e, r, t = (a[0] || a[1]) && wa(a);
    return {
        c() {
            t && t.c(), e = De()
        },
        l(l) {
            t && t.l(l), e = De()
        },
        m(l, s) {
            t && t.m(l, s), W(l, e, s), r = !0
        },
        p(l, [s]) {
            l[0] || l[1] ? t ? (t.p(l, s), s & 3 && x(t, 1)) : (t = wa(l), t.c(), x(t, 1), t.m(e.parentNode, e)) : t && (Se(), le(t, 1, 1, () => {
                t = null
            }), Re())
        },
        i(l) {
            r || (x(t), r = !0)
        },
        o(l) {
            le(t), r = !1
        },
        d(l) {
            t && t.d(l), l && p(e)
        }
    }
}

function pr(a, e, r) {
    let t, l;
    Ve(a, ze, h => r(3, t = h)), Ve(a, qe, h => r(4, l = h));
    let s = !1;
    ia.subscribe(h => {
        s = h
    });
    let {
        parent1card: n = null
    } = e, {
        parent2card: o = null
    } = e;

    function d() {
        r(0, n = fe(qe))
    }

    function v() {
        r(1, o = fe(ze))
    }
    let m = "",
        L, M;
    aa(async () => {
        L = (await Te(() => import("../chunks/fireBaseSingle-4aa0a3c9.js"), ["chunks/fireBaseSingle-4aa0a3c9.js", "chunks/PurchaseCoinsStore-9a29c75c.js", "assets/PurchaseCoinsStore-ac31c26e.css", "chunks/preload-helper-d3f18431.js", "chunks/index-b1ca86f9.js"])).default, M = (await Te(() => import("../chunks/myfireStoreSingle-51336883.js"), ["chunks/myfireStoreSingle-51336883.js", "chunks/fireBaseSingle-4aa0a3c9.js", "chunks/PurchaseCoinsStore-9a29c75c.js", "assets/PurchaseCoinsStore-ac31c26e.css", "chunks/preload-helper-d3f18431.js", "chunks/index-b1ca86f9.js"])).default;
        const h = ca(L);
        da(h, V => {
            m = V.uid
        })
    });
    async function Q() {
        var se, ne;
        if (!Na(n.cardID, o.cardID) || (n.num <= 0, o.num <= 0)) return;
        let h = Ja(n.cardID, o.cardID);
        if (h === 0) return;
        let V = new Date;
        const S = te(M, "player_zoo", m, "animals2", (se = n.id) == null ? void 0 : se.toString()),
            F = te(M, "player_zoo", m, "currency", "coins"),
            y = te(M, "player_zoo", m, "animals2", (ne = o.id) == null ? void 0 : ne.toString());
        console.log(n.id), console.log(o.id);
        let U = fe(Ie),
            K = !1;
        try {
            const C = await je(M, async N => {
                const k = await N.get(te(M, "player_zoo", m, "animals2", h.toString()));
                if (k.exists()) {
                    const z = await N.set(te(M, "player_zoo", m, "animals2", h.toString()), {
                        id: h,
                        born: k.data().born,
                        num: k.data().num + 1
                    })
                } else {
                    const z = await N.set(te(M, "player_zoo", m, "animals2", h.toString()), {
                        id: h,
                        born: V.toISOString(),
                        num: 1
                    })
                }
                const D = U + Ze(n) + Ze(o);
                return await N.update(F, {
                    coins: D
                }), await N.update(S, {
                    num: n.num - 1
                }), await N.update(y, {
                    num: o.num - 1
                }), U = D, D
            });
            K = !0, console.log("Population increased to ", C)
        } catch (C) {
            console.error(C), K = !1
        }
        if (!K) return;
        Ie.set(U);
        let Z = fe(ve);
        const ce = {
            cardID: h,
            createTime: V,
            id: h,
            num: 1
        };
        let J = !1;
        if (Z.forEach(async C => {
                C.cardID == h && (C.num = C.num + 1, J = !0)
            }), J || Z.push(ce), ve.set(Z), J = !1, Z.forEach(async C => {
                C.cardID == n.cardID && (C.num = C.num - 1, J = !0)
            }), J = !1, Z.forEach(async C => {
                C.cardID == o.cardID && (C.num = C.num - 1, J = !0)
            }), ve.set(Z), qe.set(null), ze.set(null), Pa.set(ce), !s) {
            let C = c[h].rare,
                N = new Audio(C == u.Mythical || C == u.Legendary ? dr : cr);
            N.preservesPitch = !(C == u.Mythical || C == u.Legendary), N.playbackRate = C == u.Mythical || C == u.Legendary ? .75 : 2, N.volume = C == u.Mythical || C == u.Legendary ? .35 : .05, N.play()
        }
    }
    return a.$$set = h => {
        "parent1card" in h && r(0, n = h.parent1card), "parent2card" in h && r(1, o = h.parent2card)
    }, a.$$.update = () => {
        a.$$.dirty & 16 && d(), a.$$.dirty & 8 && v()
    }, [n, o, Q, t, l]
}
class _r extends $e {
    constructor(e) {
        super(), xe(this, e, pr, gr, ea, {
            parent1card: 0,
            parent2card: 1
        })
    }
}

function Ar(a) {
    let e, r, t, l, s, n, o, d, v, m = a[1](Xe(a[0])) + "",
        L, M;
    return {
        c() {
            e = P("div"), r = P("div"), t = P("img"), s = ae(), n = P("div"), o = O("Egg"), d = ae(), v = P("span"), L = O(m), M = O(" Coins"), this.h()
        },
        l(Q) {
            e = B(Q, "DIV", {
                class: !0
            });
            var h = R(e);
            r = B(h, "DIV", {
                class: !0
            });
            var V = R(r);
            t = B(V, "IMG", {
                class: !0,
                src: !0,
                alt: !0
            }), V.forEach(p), s = re(h), n = B(h, "DIV", {
                class: !0
            });
            var S = R(n);
            o = G(S, "Egg"), S.forEach(p), d = re(h), v = B(h, "SPAN", {
                class: !0,
                style: !0
            });
            var F = R(v);
            L = G(F, m), M = G(F, " Coins"), F.forEach(p), h.forEach(p), this.h()
        },
        h() {
            _(t, "class", "w-full"), He(t.src, l = "https://firebasestorage.googleapis.com/v0/b/project-zoo-c893d.appspot.com/o/eggs%2FEgg.png?alt=media") || _(t, "src", l), _(t, "alt", "egg"), _(r, "class", "sm:h-48"), _(n, "class", "text-xl font-bold text-center w-full p-4"), _(v, "class", "text-center w-full p-2 text-black font-bold bg-yellow-400 rounded-full mx-auto"), ue(v, "user-select", "none"), _(e, "class", "w-full h-full listing relative text-white text-center pb-8  svelte-het8dc")
        },
        m(Q, h) {
            W(Q, e, h), g(e, r), g(r, t), g(e, s), g(e, n), g(n, o), g(e, d), g(e, v), g(v, L), g(v, M)
        },
        p(Q, [h]) {
            h & 1 && m !== (m = Q[1](Xe(Q[0])) + "") && de(L, m)
        },
        i: he,
        o: he,
        d(Q) {
            Q && p(e)
        }
    }
}

function br(a, e, r) {
    let t;
    Ve(a, Me, d => r(2, t = d));
    let {
        numEggsLocal: l = null
    } = e;

    function s() {
        r(0, l = fe(Me))
    }
    let n = "en-US";
    aa(() => {
        n = navigator.languages[0] || navigator.language
    });

    function o(d) {
        return Intl.NumberFormat(n, {
            notation: "compact",
            maximumFractionDigits: 1
        }).format(d)
    }
    return a.$$set = d => {
        "numEggsLocal" in d && r(0, l = d.numEggsLocal)
    }, a.$$.update = () => {
        a.$$.dirty & 4 && s()
    }, [l, o, t]
}
class Ba extends $e {
    constructor(e) {
        super(), xe(this, e, br, Ar, ea, {
            numEggsLocal: 0
        })
    }
}
var vr = "data:audio/mpeg;base64,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",
    Ir = "/_app/immutable/assets/super-6d48c8d4.mp3",
    Dr = "/_app/immutable/assets/rare-70c774f2.mp3",
    wr = "/_app/immutable/assets/epic-c634d6b6.mp3";
const {
    Map: yr
} = La;

function ya(a, e, r) {
    const t = a.slice();
    return t[41] = e[r], t[43] = r, t
}

function Vr(a) {
    let e, r, t, l, s, n, o, d, v, m, L, M, Q, h, V, S, F, y = [],
        U = new yr,
        K, Z, ce;

    function J(A) {
        a[16](A)
    }

    function se(A) {
        a[17](A)
    }
    let ne = {};
    a[0] !== void 0 && (ne.parent1card = a[0]), a[1] !== void 0 && (ne.parent2card = a[1]), e = new _r({
        props: ne
    }), oa.push(() => ma(e, "parent1card", J)), oa.push(() => ma(e, "parent2card", se));

    function C(A, E) {
        return A[2] ? Sr : kr
    }
    let N = C(a),
        k = N(a),
        D = !a[5] && Va(a),
        z = a[3];
    const T = A => A[41].data.id;
    for (let A = 0; A < z.length; A += 1) {
        let E = ya(a, z, A),
            j = T(E);
        U.set(j, y[A] = ka(j, E))
    }
    return {
        c() {
            Le(e.$$.fragment), l = ae(), s = P("div"), k.c(), n = ae(), o = P("input"), d = ae(), v = P("button"), m = Ee("svg"), L = Ee("g"), M = Ee("path"), Q = ae(), h = O(a[4]), V = ae(), S = P("div"), D && D.c(), F = ae();
            for (let A = 0; A < y.length; A += 1) y[A].c();
            this.h()
        },
        l(A) {
            Qe(e.$$.fragment, A), l = re(A), s = B(A, "DIV", {
                class: !0,
                style: !0
            });
            var E = R(s);
            k.l(E), n = re(E), o = B(E, "INPUT", {
                class: !0,
                placeholder: !0
            }), d = re(E), v = B(E, "BUTTON", {
                class: !0
            });
            var j = R(v);
            m = ke(j, "svg", {
                class: !0,
                width: !0,
                height: !0,
                viewBox: !0
            });
            var pe = R(m);
            L = ke(pe, "g", {
                fill: !0
            });
            var _e = R(L);
            M = ke(_e, "path", {
                d: !0
            }), R(M).forEach(p), _e.forEach(p), pe.forEach(p), Q = re(j), h = G(j, a[4]), j.forEach(p), E.forEach(p), V = re(A), S = B(A, "DIV", {
                class: !0,
                style: !0
            });
            var X = R(S);
            D && D.l(X), F = re(X);
            for (let i = 0; i < y.length; i += 1) y[i].l(X);
            X.forEach(p), this.h()
        },
        h() {
            _(o, "class", "rounded-lg w-24 sm:w-auto p-1 px-2"), _(o, "placeholder", "search"), _(M, "d", "M4.293 6.293a1 1 0 0 0 1.414 1.414L7 6.414V14a1 1 0 1 0 2 0V6.414l1.293 1.293a1 1 0 1 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3zm8 11.414a1 1 0 0 1 1.414-1.414L15 17.586V10a1 1 0 1 1 2 0v7.586l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3z"), _(L, "fill", "currentColor"), _(m, "class", "mr-2 sort-icon svelte-syafkp"), _(m, "width", "24"), _(m, "height", "24"), _(m, "viewBox", "0 0 24 24"), _(v, "class", "ml-auto sm:ml-0 sort-button bg-yellow-500 text-black font-bold whitespace-nowrap svelte-syafkp"), _(s, "class", "flex flex-wrap items-center p-4 justify-between"), ue(s, "gap", "1rem"), _(S, "class", "sm:grid sm:gap-1 sm:mx-2 mx-1 mb-3 flex justify-center flex-wrap"), ue(S, "grid-template-columns", "repeat(auto-fit, minmax(210px, max-content))"), ue(S, "justify-content", "center"), ue(S, "padding", "initial")
        },
        m(A, E) {
            Ue(e, A, E), W(A, l, E), W(A, s, E), k.m(s, null), g(s, n), g(s, o), ha(o, a[2]), g(s, d), g(s, v), g(v, m), g(m, L), g(L, M), g(v, Q), g(v, h), W(A, V, E), W(A, S, E), D && D.m(S, null), g(S, F);
            for (let j = 0; j < y.length; j += 1) y[j].m(S, null);
            K = !0, Z || (ce = [ye(o, "input", a[18]), ye(v, "click", a[19])], Z = !0)
        },
        p(A, E) {
            const j = {};
            !r && E[0] & 1 && (r = !0, j.parent1card = A[0], ga(() => r = !1)), !t && E[0] & 2 && (t = !0, j.parent2card = A[1], ga(() => t = !1)), e.$set(j), N === (N = C(A)) && k ? k.p(A, E) : (k.d(1), k = N(A), k && (k.c(), k.m(s, n))), E[0] & 4 && o.value !== A[2] && ha(o, A[2]), (!K || E[0] & 16) && de(h, A[4]), A[5] ? D && (Se(), le(D, 1, 1, () => {
                D = null
            }), Re()) : D ? (D.p(A, E), E[0] & 32 && x(D, 1)) : (D = Va(A), D.c(), x(D, 1), D.m(S, F)), E[0] & 40 && (z = A[3], Se(), y = qa(y, E, T, 1, A, z, U, S, Ta, ka, null, ya), Re())
        },
        i(A) {
            if (!K) {
                x(e.$$.fragment, A), x(D);
                for (let E = 0; E < z.length; E += 1) x(y[E]);
                K = !0
            }
        },
        o(A) {
            le(e.$$.fragment, A), le(D);
            for (let E = 0; E < y.length; E += 1) le(y[E]);
            K = !1
        },
        d(A) {
            Ne(e, A), A && p(l), A && p(s), k.d(), A && p(V), A && p(S), D && D.d();
            for (let E = 0; E < y.length; E += 1) y[E].d();
            Z = !1, Ca(ce)
        }
    }
}

function Er(a) {
    let e, r, t, l, s, n;
    return t = new Ba({}), {
        c() {
            e = P("div"), r = P("div"), Le(t.$$.fragment), this.h()
        },
        l(o) {
            e = B(o, "DIV", {
                class: !0
            });
            var d = R(e);
            r = B(d, "DIV", {
                class: !0
            });
            var v = R(r);
            Qe(t.$$.fragment, v), v.forEach(p), d.forEach(p), this.h()
        },
        h() {
            _(r, "class", "w-42 m-2 relative"), _(e, "class", "flex flex-wrap p-2")
        },
        m(o, d) {
            W(o, e, d), g(e, r), Ue(t, r, null), l = !0, s || (n = ye(r, "click", a[7]), s = !0)
        },
        p: he,
        i(o) {
            l || (x(t.$$.fragment, o), l = !0)
        },
        o(o) {
            le(t.$$.fragment, o), l = !1
        },
        d(o) {
            o && p(e), Ne(t), s = !1, n()
        }
    }
}

function kr(a) {
    let e, r, t = a[3].length + "",
        l, s;
    return {
        c() {
            e = P("h1"), r = O("Animals: "), l = O(t), s = O(" / 153"), this.h()
        },
        l(n) {
            e = B(n, "H1", {
                class: !0
            });
            var o = R(e);
            r = G(o, "Animals: "), l = G(o, t), s = G(o, " / 153"), o.forEach(p), this.h()
        },
        h() {
            _(e, "class", "text-yellow-500 font-medium text-sm sm:text-base sm:mr-auto whitespace-nowrap")
        },
        m(n, o) {
            W(n, e, o), g(e, r), g(e, l), g(e, s)
        },
        p(n, o) {
            o[0] & 8 && t !== (t = n[3].length + "") && de(l, t)
        },
        d(n) {
            n && p(e)
        }
    }
}

function Sr(a) {
    let e, r = a[3].length + "",
        t, l, s = a[3].length > 1 ? "s" : "",
        n, o;
    return {
        c() {
            e = P("h1"), t = O(r), l = O(" animal"), n = O(s), o = O(" found"), this.h()
        },
        l(d) {
            e = B(d, "H1", {
                class: !0
            });
            var v = R(e);
            t = G(v, r), l = G(v, " animal"), n = G(v, s), o = G(v, " found"), v.forEach(p), this.h()
        },
        h() {
            _(e, "class", "text-stone-400 font-medium text-sm sm:text-base ml-auto whitespace-nowrap")
        },
        m(d, v) {
            W(d, e, v), g(e, t), g(e, l), g(e, n), g(e, o)
        },
        p(d, v) {
            v[0] & 8 && r !== (r = d[3].length + "") && de(t, r), v[0] & 8 && s !== (s = d[3].length > 1 ? "s" : "") && de(n, s)
        },
        d(d) {
            d && p(e)
        }
    }
}

function Va(a) {
    let e, r, t, l, s;
    return r = new Ba({}), {
        c() {
            e = P("div"), Le(r.$$.fragment), this.h()
        },
        l(n) {
            e = B(n, "DIV", {
                class: !0
            });
            var o = R(e);
            Qe(r.$$.fragment, o), o.forEach(p), this.h()
        },
        h() {
            _(e, "class", "w-[44%] sm:w-48 m-2 relative")
        },
        m(n, o) {
            W(n, e, o), Ue(r, e, null), t = !0, l || (s = ye(e, "click", a[20]), l = !0)
        },
        p: he,
        i(n) {
            t || (x(r.$$.fragment, n), t = !0)
        },
        o(n) {
            le(r.$$.fragment, n), t = !1
        },
        d(n) {
            n && p(e), Ne(r), l = !1, s()
        }
    }
}

function Ea(a) {
    let e, r, t, l;
    return r = new ua({
        props: {
            cardInfo: a[41].data,
            count: a[41].data.num
        }
    }), {
        c() {
            e = P("div"), Le(r.$$.fragment), t = ae(), this.h()
        },
        l(s) {
            e = B(s, "DIV", {
                class: !0
            });
            var n = R(e);
            Qe(r.$$.fragment, n), t = re(n), n.forEach(p), this.h()
        },
        h() {
            _(e, "class", "h-fit w-[44%] sm:w-48 m-2 relative")
        },
        m(s, n) {
            W(s, e, n), Ue(r, e, null), g(e, t), l = !0
        },
        p(s, n) {
            const o = {};
            n[0] & 8 && (o.cardInfo = s[41].data), n[0] & 8 && (o.count = s[41].data.num), r.$set(o)
        },
        i(s) {
            l || (x(r.$$.fragment, s), l = !0)
        },
        o(s) {
            le(r.$$.fragment, s), l = !1
        },
        d(s) {
            s && p(e), Ne(r)
        }
    }
}

function ka(a, e) {
    let r, t = (e[5] ? Sa(e[41].data) : !0) && e[41].data.num !== 0,
        l, s, n = t && Ea(e);
    return {
        key: a,
        first: null,
        c() {
            r = De(), n && n.c(), l = De(), this.h()
        },
        l(o) {
            r = De(), n && n.l(o), l = De(), this.h()
        },
        h() {
            this.first = r
        },
        m(o, d) {
            W(o, r, d), n && n.m(o, d), W(o, l, d), s = !0
        },
        p(o, d) {
            e = o, d[0] & 40 && (t = (e[5] ? Sa(e[41].data) : !0) && e[41].data.num !== 0), t ? n ? (n.p(e, d), d[0] & 40 && x(n, 1)) : (n = Ea(e), n.c(), x(n, 1), n.m(l.parentNode, l)) : n && (Se(), le(n, 1, 1, () => {
                n = null
            }), Re())
        },
        i(o) {
            s || (x(n), s = !0)
        },
        o(o) {
            le(n), s = !1
        },
        d(o) {
            o && p(r), n && n.d(o), o && p(l)
        }
    }
}

function Rr(a) {
    let e, r, t, l;
    const s = [Er, Vr],
        n = [];

    function o(d, v) {
        return d[6].isLoggedIn ? 1 : 0
    }
    return e = o(a), r = n[e] = s[e](a), {
        c() {
            r.c(), t = De()
        },
        l(d) {
            r.l(d), t = De()
        },
        m(d, v) {
            n[e].m(d, v), W(d, t, v), l = !0
        },
        p(d, v) {
            let m = e;
            e = o(d), e === m ? n[e].p(d, v) : (Se(), le(n[m], 1, 1, () => {
                n[m] = null
            }), Re(), r = n[e], r ? r.p(d, v) : (r = n[e] = s[e](d), r.c()), x(r, 1), r.m(t.parentNode, t))
        },
        i(d) {
            l || (x(r), l = !0)
        },
        o(d) {
            le(r), l = !1
        },
        d(d) {
            n[e].d(d), d && p(t)
        }
    }
}

function Sa(a) {
    return a.cardID && (a.cardID <= 16 || a.cardID === 137)
}

function Ra(a, e) {
    return a = Math.ceil(a), e = Math.floor(e), Math.floor(Math.random() * (e - a) + a)
}

function Oe(a) {
    return Math.floor(Math.random() * a.length)
}

function Cr(a, e, r) {
    let t, l, s, n, o;
    Ve(a, ze, I => r(13, l = I)), Ve(a, qe, I => r(14, s = I)), Ve(a, ve, I => r(15, n = I)), Ve(a, pa, I => r(6, o = I));
    let d, v, m = !1;
    ia.subscribe(I => {
        m = I
    });
    let {
        parent1card: L = null
    } = e, {
        parent2card: M = null
    } = e, Q, h, V = 1;
    na.subscribe(I => {
        r(12, V = I)
    }), aa(async () => {
        Q = (await Te(() => import("../chunks/fireBaseSingle-4aa0a3c9.js"), ["chunks/fireBaseSingle-4aa0a3c9.js", "chunks/PurchaseCoinsStore-9a29c75c.js", "assets/PurchaseCoinsStore-ac31c26e.css", "chunks/preload-helper-d3f18431.js", "chunks/index-b1ca86f9.js"])).default, h = (await Te(() => import("../chunks/myfireStoreSingle-51336883.js"), ["chunks/myfireStoreSingle-51336883.js", "chunks/fireBaseSingle-4aa0a3c9.js", "chunks/PurchaseCoinsStore-9a29c75c.js", "assets/PurchaseCoinsStore-ac31c26e.css", "chunks/preload-helper-d3f18431.js", "chunks/index-b1ca86f9.js"])).default;
        const I = ca(Q);
        da(I, async q => {
            let w;
            w = q, pa.set({
                isLoggedIn: w !== null,
                user: w,
                firebaseController: !0
            }), q && (S = q.uid, y(), U(), await _e())
        }), localStorage.getItem("sort") ? na.set(parseInt(localStorage.getItem("sort"))) : na.set(1)
    });
    let S = "",
        F;
    async function y() {
        let I = te(h, "player_zoo", S, "currency", "coins");
        const q = await _a(I);
        q.exists() ? (F = q.data(), Ie.set(F.coins), Me.set(F.eggs), console.log("Document data:", q.data())) : (console.log("No such document!"), Aa(te(h, "player_zoo", S, "currency", "coins"), {
            coins: 46,
            eggs: 0
        }), Ie.set(46), Me.set(0))
    }
    async function U() {
        const I = te(h, "player_zoo", S, "version", "version"),
            q = await _a(I);
        q.exists() ? (console.log("Document data:", q.data()), K()) : (console.log("No such document!"), Z())
    }
    async function K() {
        const I = Ye(h, "player_zoo", S, "animals2"),
            q = await Ke(I);
        if (q.empty) console.log("querySnapshot.empty");
        else {
            let w = fe(ve);
            q.forEach(Y => {
                let oe = Y.id,
                    H = Y.data(),
                    $ = {
                        cardID: H.id,
                        createTime: new Date(H.born),
                        id: oe,
                        num: H.num
                    };
                w.push($)
            }), ve.set(w)
        }
    }
    async function Z() {
        const I = Ye(h, "player_zoo", S, "animals"),
            q = await Ke(I);
        if (q.empty) J(), console.log("querySnapshot.empty");
        else {
            let w = [];
            q.forEach(Y => {
                let oe = Y.id,
                    H = Y.data(),
                    $ = {
                        cardID: H.id,
                        createTime: new Date(H.born),
                        id: oe
                    };
                w.push($)
            }), ce(w)
        }
    }
    async function ce(I) {
        var Y, oe;
        let q = new Map;
        for (const H of I)
            if (!q.has(H.cardID)) q.set(H.cardID, {
                id: H.cardID,
                born: (oe = H.createTime) == null ? void 0 : oe.setDate(((Y = H.createTime) == null ? void 0 : Y.getDate()) - 1),
                num: 1
            });
            else {
                let $ = q.get(H.cardID);
                $.num = $.num + 1, console.log("ateohusnthunt"), console.log($)
            } const w = Fa(h);
        q.forEach((H, $) => {
            const Je = te(h, "player_zoo", S, "animals2", $.toString());
            w.set(Je, H)
        }), await w.commit().then(() => {
            J()
        })
    }
    async function J() {
        const I = Ye(h, "player_zoo", S, "version");
        await Aa(te(I, "version"), {
            animalsDB: "2"
        }), K()
    }

    function se() {
        Wa.set(!0)
    }

    function ne() {
        switch (Ra(1, 5)) {
            case 1:
                return ee.Frog;
            case 2:
                return ee.Penguin;
            case 3:
                return ee.Turtle;
            case 4:
                return ee.Elk
        }
    }

    function C() {
        let I = [ee.Bear, ee.Orca, ee.Snake, ee.Zebra],
            q = [ee.Lion, ee.Panda, ee.Fox, ee.Giraffe],
            w = [ee.Frog, ee.Penguin, ee.Turtle, ee.Elk, ee.Pig],
            Y = [ee.Shark, ee.Rhino],
            oe = [ee.Pug, ee.Duck],
            H = Ra(1, 101);
        return H < 55 ? I[Oe(I)] : H < 86 ? q[Oe(q)] : H < 98.5 ? w[Oe(w)] : H < 99.5 ? Y[Oe(Y)] : oe[Oe(oe)]
    }
    async function N() {
        let I = !0,
            q = !1,
            w = C(),
            Y = ne(),
            oe = new Date;
        const H = te(h, "player_zoo", S, "currency", "coins");
        let $ = fe(Ie),
            Je = fe(Me);
        try {
            const Ae = await je(h, async be => {
                const ge = await be.get(H);
                if (!ge.exists()) throw "Document does not exist!";
                const ie = ge.data().eggs;
                if (ge.data().coins < Xe(ie)) return Promise.reject("Sorry! Not enough coins");
                ie == 6 && Y && (w = Y, q = !0);
                const we = await be.get(te(h, "player_zoo", S, "animals2", w.toString()));
                if (we.exists()) {
                    const ra = await be.set(te(h, "player_zoo", S, "animals2", w.toString()), {
                        id: w,
                        born: we.data().born,
                        num: we.data().num + 1
                    })
                } else {
                    const ra = await be.set(te(h, "player_zoo", S, "animals2", w.toString()), {
                        id: w,
                        born: oe.toISOString(),
                        num: 1
                    })
                }
                q && Y && (w = Y);
                const Be = ge.data().coins - Xe(ie),
                    Fe = ge.data().eggs + 1;
                return be.update(H, {
                    coins: Be,
                    eggs: Fe
                }), $ = Be, Je = Fe, Be
            });
            console.log("Population increased to ", Ae)
        } catch (Ae) {
            console.error(Ae), Ae === "Sorry! Not enough coins" && Za.set(!0), I = !1
        }
        if (I) {
            let Ae = fe(ve);
            const be = {
                cardID: w,
                createTime: oe,
                id: w,
                num: 1
            };
            let ge = !1;
            if (Ae.forEach(async ie => {
                    ie.cardID == w && (ie.num = ie.num + 1, ge = !0)
                }), ge || Ae.push(be), ve.set(Ae), !m) {
                let ie = c[w].rare;
                const we = new Audio(ie == u.Epic ? wr : ie == u.SuperRare ? Ir : ie == u.Rare ? Dr : vr);
                we.volume = ie == u.Epic ? .25 : ie == u.SuperRare ? .2 : ie == u.Rare ? .1 : .05, we.play()
            }
            Pa.set(be), Ie.set($), Me.set(Je)
        }
    }

    function k() {
        r(10, L = fe(qe))
    }

    function D() {
        r(11, M = fe(ze))
    }
    let z = [];
    ve.set([]), z = fe(ve);
    let T = [],
        A = "By Rarity Descending",
        E;

    function j() {
        z = fe(ve), r(3, T = []);
        const I = [];
        z.forEach(w => I.push(w));
        let q = -1;
        L && (q = I.indexOf(L, 0), q > -1 && I.splice(q, 1)), M && (q = I.indexOf(M, 0), q > -1 && I.splice(q, 1));
        for (let w = 0; w < I.length; w++) I[w].cardID && (E ? c[I[w].cardID].name.toLowerCase().includes(E.toLowerCase()) && r(3, T = [...T, {
            data: I[w]
        }]) : r(3, T = [...T, {
            data: I[w]
        }]));
        V === 0 ? (T.sort((w, Y) => c[w.data.cardID].rare > c[Y.data.cardID].rare ? 1 : -1), r(4, A = "By Rarity Ascending")) : V === 1 ? (T.sort((w, Y) => c[w.data.cardID].rare > c[Y.data.cardID].rare ? -1 : 1), r(4, A = "By Rarity Descending")) : V === 2 ? (T.sort((w, Y) => c[w.data.cardID].name > c[Y.data.cardID].name ? 1 : -1), r(4, A = "By Name Ascending")) : V === 3 && (T.sort((w, Y) => c[w.data.cardID].name > c[Y.data.cardID].name ? -1 : 1), r(4, A = "By Name Descending"))
    }

    function pe() {
        V < 3 ? r(12, V++, V) : r(12, V = 0), localStorage.setItem("sort", `${V}`)
    }
    async function _e() {
        const I = Ye(h, "customers", S, "payments"),
            q = Ya(I, Oa("status", "in", ["trialing", "succeeded"])),
            w = Ye(h, "player_zoo", S, "purchases"),
            Y = await Ke(w);
        let oe = [];
        Y.forEach(async $ => {
            console.log("payments received id", $.id, " => ", $.data()), oe.push($.id)
        }), (await Ke(q)).forEach(async $ => {
            const {
                products: Je,
                items: Ae
            } = $.data(), be = Ae[0].price.product, ge = ja(be), ie = $.data().id;
            if (console.log("payments", $.id, " => ", $.data()), console.log("Look here"), console.log(Ae[0].price.product), !oe.includes(ie) && ge) {
                console.log("unreceived"), Ga.set(ge);
                let we = !1,
                    Be = fe(Ie);
                const Fe = te(h, "player_zoo", S, "currency", "coins"),
                    ra = te(w, ie);
                console.log($.id);
                try {
                    const ta = await je(h, async la => {
                        const Ge = await la.get(Fe);
                        if (!Ge.exists()) throw "Document does not exist!";
                        let sa = Ge.data().coins + Ka(ge, Ge.data().eggs);
                        return Ha.set(Ge.data().eggs), await la.update(Fe, {
                            coins: sa
                        }), await la.set(ra, {
                            received: be
                        }), Be = sa, sa
                    });
                    we = !0, console.log("Population increased to ", ta)
                } catch (ta) {
                    console.error(ta)
                }
                Ie.set(Be)
            }
        })
    }

    function X(I) {
        d = I, r(0, d)
    }

    function i(I) {
        v = I, r(1, v)
    }

    function b() {
        E = this.value, r(2, E)
    }
    const Ce = () => pe(),
        Pe = () => N();
    return a.$$set = I => {
        "parent1card" in I && r(10, L = I.parent1card), "parent2card" in I && r(11, M = I.parent2card)
    }, a.$$.update = () => {
        a.$$.dirty[0] & 3 && r(5, t = Boolean(d || v)), a.$$.dirty[0] & 16384 && k(), a.$$.dirty[0] & 16384 && D(), a.$$.dirty[0] & 61444 && j()
    }, [d, v, E, T, A, t, o, se, N, pe, L, M, V, l, s, n, X, i, b, Ce, Pe]
}
class zr extends $e {
    constructor(e) {
        super(), xe(this, e, Cr, Rr, ea, {
            parent1card: 10,
            parent2card: 11
        }, null, [-1, -1])
    }
}
export {
    zr as
    default
};
