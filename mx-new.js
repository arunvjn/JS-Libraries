(function() {
    var l = void 0,
        m = !0,
        q = null,
        D = !1;
    (function() {
        function Aa() {
            function a() {
                if (!a.sc) la = a.sc = m, ma = D, c.a(F, function(a) {
                    a.gc()
                })
            }

            function b() {
                try {
                    u.documentElement.doScroll("left")
                } catch (d) {
                    setTimeout(b, 1);
                    return
                }
                a()
            }
            if (u.addEventListener) "complete" === u.readyState ? a() : u.addEventListener("DOMContentLoaded", a, D);
            else if (u.attachEvent) {
                u.attachEvent("onreadystatechange", a);
                var d = D;
                try {
                    d = x.frameElement === q
                } catch (f) {}
                u.documentElement.doScroll && d && b()
            }
            c.Ib(x, "load", a, m)
        }

        function Ba() {
            y.init = function(a, b, d) {
                if (d) return y[d] || (y[d] = F[d] = S(a,
                    b, d), y[d].ea()), y[d];
                d = y;
                if (F.mixpanel) d = F.mixpanel;
                else if (a) d = S(a, b, "mixpanel"), d.ea(), F.mixpanel = d;
                y = d;
                1 === ca && (x.mixpanel = y);
                Ca()
            }
        }

        function Ca() {
            c.a(F, function(a, b) {
                "mixpanel" !== b && (y[b] = a)
            });
            y._ = c
        }

        function da(a) {
            a = c.e(a) ? a : c.g(a) ? {} : {
                days: a
            };
            return c.extend({}, Da, a)
        }

        function S(a, b, d) {
            var f, h = "mixpanel" === d ? y : y[d];
            if (h && 0 === ca) f = h;
            else {
                if (h && !c.isArray(h)) {
                    p.error("You have already initialized " + d);
                    return
                }
                f = new e
            }
            f.$a = {};
            f.T(a, b, d);
            f.people = new j;
            f.people.T(f);
            if (!f.c("skip_first_touch_marketing")) {
                var a =
                    c.info.ha(q),
                    g = {},
                    s = D;
                c.a(a, function(a, b) {
                    (g["initial_" + b] = a) && (s = m)
                });
                s && f.people.Z(g)
            }
            J = J || f.c("debug");
            !c.g(h) && c.isArray(h) && (f.wa.call(f.people, h.people), f.wa(h));
            return f
        }

        function e() {}

        function P() {}

        function Ea(a) {
            return a
        }

        function n(a) {
            this.props = {};
            this.qd = D;
            this.name = a.persistence_name ? "mp_" + a.persistence_name : "mp_" + a.token + "_mixpanel";
            var b = a.persistence;
            if ("cookie" !== b && "localStorage" !== b) p.H("Unknown persistence type " + b + "; falling back to cookie"), b = a.persistence = "cookie";
            this.i = "localStorage" ===
                b && c.localStorage.oa() ? c.localStorage : c.cookie;
            this.load();
            this.bc(a);
            this.md(a);
            this.save()
        }

        function j() {}

        function t() {}

        function C(a, b) {
            this.I = b.I;
            this.W = new G(a, {
                I: c.bind(this.h, this),
                i: b.i
            });
            this.A = b.A;
            this.Qc = b.Rc;
            this.fa = b.fa;
            this.$c = b.ad;
            this.C = this.A.batch_size;
            this.la = this.A.batch_flush_interval_ms;
            this.qa = !this.A.batch_autostart;
            this.Ga = 0;
            this.F = {}
        }

        function na(a, b) {
            var d = [];
            c.a(a, function(a) {
                var c = a.id;
                if (c in b) {
                    if (c = b[c], c !== q) a.payload = c, d.push(a)
                } else d.push(a)
            });
            return d
        }

        function oa(a,
            b) {
            var d = [];
            c.a(a, function(a) {
                a.id && !b[a.id] && d.push(a)
            });
            return d
        }

        function G(a, b) {
            b = b || {};
            this.K = a;
            this.i = b.i || window.localStorage;
            this.h = b.I || c.bind(pa.error, pa);
            this.Ra = new qa(a, {
                i: this.i
            });
            this.pa = b.pa || q;
            this.G = []
        }

        function qa(a, b) {
            b = b || {};
            this.K = a;
            this.i = b.i || window.localStorage;
            this.Gb = b.Gb || 100;
            this.Vb = b.Vb || 2E3
        }

        function T() {
            this.Db = "submit"
        }

        function L() {
            this.Db = "click"
        }

        function E() {}

        function ra(a) {
            var b = Fa,
                d = a.split("."),
                d = d[d.length - 1];
            if (4 < d.length || "com" === d || "org" === d) b = Ga;
            return (a = a.match(b)) ?
                a[0] : ""
        }

        function ea(a) {
            var b = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
            return a ? b.substring(0, a) : b
        }

        function U(a, b) {
            if (fa !== q && !b) return fa;
            var d = m;
            try {
                var a = a || window.localStorage,
                    c = "__mplss_" + ea(8);
                a.setItem(c, "xyz");
                "xyz" !== a.getItem(c) && (d = D);
                a.removeItem(c)
            } catch (h) {
                d = D
            }
            return fa = d
        }

        function ga(a) {
            return {
                log: ha(p.log, a),
                error: ha(p.error, a),
                H: ha(p.H, a)
            }
        }

        function ha(a, b) {
            return function() {
                arguments[0] = "[" + b + "] " + arguments[0];
                return a.apply(p, arguments)
            }
        }

        function Ha(a, b) {
            sa(m, a, b)
        }

        function Ia(a, b) {
            sa(D, a, b)
        }

        function Ja(a, b) {
            return "1" === V(b).get(W(a, b))
        }

        function ta(a, b) {
            if (Ka(b)) return p.warn('This browser has "Do Not Track" enabled. This will prevent the Mixpanel SDK from sending any data. To ignore the "Do Not Track" browser setting, initialize the Mixpanel instance with the config "ignore_dnt: true"'), m;
            var d = "0" === V(b).get(W(a, b));
            d && p.warn("You are opted out of Mixpanel tracking. This will prevent the Mixpanel SDK from sending any data.");
            return d
        }

        function M(a) {
            return ia(a, function(a) {
                return this.c(a)
            })
        }

        function H(a) {
            return ia(a, function(a) {
                return this.u(a)
            })
        }

        function N(a) {
            return ia(a, function(a) {
                return this.u(a)
            })
        }

        function La(a, b) {
            b = b || {};
            V(b).remove(W(a, b), !!b.nb, b.lb)
        }

        function V(a) {
            a = a || {};
            return "localStorage" === a.Fb ? c.localStorage : c.cookie
        }

        function W(a, b) {
            b = b || {};
            return (b.Eb || Ma) + a
        }

        function Ka(a) {
            if (a && a.tb) return D;
            var a = a && a.window || x,
                b = a.navigator || {},
                d = D;
            c.a([b.doNotTrack, b.msDoNotTrack, a.doNotTrack], function(a) {
                c.j([m, 1, "1", "yes"],
                    a) && (d = m)
            });
            return d
        }

        function sa(a, b, d) {
            !c.Qa(b) || !b.length ? p.error("gdpr." + (a ? "optIn" : "optOut") + " called with an invalid token") : (d = d || {}, V(d).set(W(b, d), a ? 1 : 0, c.yb(d.mb) ? d.mb : q, !!d.nb, !!d.Pc, !!d.pc, d.lb), d.o && a && d.o(d.ed || "$opt_in", d.fd, {
                send_immediately: m
            }))
        }

        function ia(a, b) {
            return function() {
                var d = D;
                try {
                    var c = b.call(this, "token"),
                        h = b.call(this, "ignore_dnt"),
                        g = b.call(this, "opt_out_tracking_persistence_type"),
                        s = b.call(this, "opt_out_tracking_cookie_prefix"),
                        i = b.call(this, "window");
                    c && (d = ta(c, {
                        tb: h,
                        Fb: g,
                        Eb: s,
                        window: i
                    }))
                } catch (e) {
                    p.error("Unexpected error when checking tracking opt-out status: " + e)
                }
                if (!d) return a.apply(this, arguments);
                d = arguments[arguments.length - 1];
                "function" === typeof d && d(0)
            }
        }
        var J = D,
            x;
        if ("undefined" === typeof window) {
            var B = {
                hostname: ""
            };
            x = {
                navigator: {
                    userAgent: ""
                },
                document: {
                    location: B,
                    referrer: ""
                },
                screen: {
                    width: 0,
                    height: 0
                },
                location: B
            }
        } else x = window;
        debugger;
        var B = Array.prototype,
            ua = Object.prototype,
            K = B.slice,
            Q = ua.toString,
            X = ua.hasOwnProperty,
            z = x.console,
            I = x.navigator,
            u = x.document,
            Y =
            x.opera,
            Z = x.screen,
            A = I.userAgent,
            ja = Function.prototype.bind,
            va = B.forEach,
            wa = B.indexOf,
            xa = B.map,
            B = Array.isArray,
            ka = {},
            c = {
                trim: function(a) {
                    return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                }
            },
            p = {
                log: function() {
                    if (J && !c.g(z) && z) try {
                        z.log.apply(z, arguments)
                    } catch (a) {
                        c.a(arguments, function(a) {
                            z.log(a)
                        })
                    }
                },
                warn: function() {
                    if (J && !c.g(z) && z) {
                        var a = ["Mixpanel warning:"].concat(c.L(arguments));
                        try {
                            z.warn.apply(z, a)
                        } catch (b) {
                            c.a(a, function(a) {
                                z.warn(a)
                            })
                        }
                    }
                },
                error: function() {
                    if (J && !c.g(z) && z) {
                        var a = ["Mixpanel error:"].concat(c.L(arguments));
                        try {
                            z.error.apply(z, a)
                        } catch (b) {
                            c.a(a, function(a) {
                                z.error(a)
                            })
                        }
                    }
                },
                H: function() {
                    if (!c.g(z) && z) {
                        var a = ["Mixpanel error:"].concat(c.L(arguments));
                        try {
                            z.error.apply(z, a)
                        } catch (b) {
                            c.a(a, function(a) {
                                z.error(a)
                            })
                        }
                    }
                }
            };
        c.bind = function(a, b) {
            var d, f;
            if (ja && a.bind === ja) return ja.apply(a, K.call(arguments, 1));
            if (!c.Pa(a)) throw new TypeError;
            d = K.call(arguments, 2);
            return f = function() {
                if (!(this instanceof f)) return a.apply(b, d.concat(K.call(arguments)));
                var c = {};
                c.prototype = a.prototype;
                var g = new c;
                c.prototype = q;
                c =
                    a.apply(g, d.concat(K.call(arguments)));
                return Object(c) === c ? c : g
            }
        };
        c.a = function(a, b, d) {
            if (!(a === q || a === l))
                if (va && a.forEach === va) a.forEach(b, d);
                else if (a.length === +a.length)
                for (var c = 0, h = a.length; c < h && !(c in a && b.call(d, a[c], c, a) === ka); c++);
            else
                for (c in a)
                    if (X.call(a, c) && b.call(d, a[c], c, a) === ka) break
        };
        c.extend = function(a) {
            c.a(K.call(arguments, 1), function(b) {
                for (var d in b) b[d] !== l && (a[d] = b[d])
            });
            return a
        };
        c.isArray = B || function(a) {
            return "[object Array]" === Q.call(a)
        };
        c.Pa = function(a) {
            try {
                return /^\s*\bfunction\b/.test(a)
            } catch (b) {
                return D
            }
        };
        c.Bc = function(a) {
            return !(!a || !X.call(a, "callee"))
        };
        c.L = function(a) {
            return !a ? [] : a.L ? a.L() : c.isArray(a) || c.Bc(a) ? K.call(a) : c.od(a)
        };
        c.map = function(a, b, d) {
            if (xa && a.map === xa) return a.map(b, d);
            var f = [];
            c.a(a, function(a) {
                f.push(b.call(d, a))
            });
            return f
        };
        c.keys = function(a) {
            var b = [];
            if (a === q) return b;
            c.a(a, function(a, c) {
                b[b.length] = c
            });
            return b
        };
        c.od = function(a) {
            var b = [];
            if (a === q) return b;
            c.a(a, function(a) {
                b[b.length] = a
            });
            return b
        };
        c.ub = function(a, b) {
            var d = D;
            if (a === q) return d;
            if (wa && a.indexOf === wa) return -1 !=
                a.indexOf(b);
            c.a(a, function(a) {
                if (d || (d = a === b)) return ka
            });
            return d
        };
        c.j = function(a, b) {
            return -1 !== a.indexOf(b)
        };
        c.wb = function(a, b) {
            a.prototype = new b;
            a.bd = b.prototype
        };
        c.e = function(a) {
            return a === Object(a) && !c.isArray(a)
        };
        c.na = function(a) {
            if (c.e(a)) {
                for (var b in a)
                    if (X.call(a, b)) return D;
                return m
            }
            return D
        };
        c.g = function(a) {
            return a === l
        };
        c.Qa = function(a) {
            return "[object String]" == Q.call(a)
        };
        c.Cc = function(a) {
            return "[object Date]" == Q.call(a)
        };
        c.yb = function(a) {
            return "[object Number]" == Q.call(a)
        };
        c.Dc = function(a) {
            return !!(a &&
                1 === a.nodeType)
        };
        c.Ia = function(a) {
            c.a(a, function(b, d) {
                c.Cc(b) ? a[d] = c.uc(b) : c.e(b) && (a[d] = c.Ia(b))
            });
            return a
        };
        c.timestamp = function() {
            Date.now = Date.now || function() {
                return +new Date
            };
            return Date.now()
        };
        c.uc = function(a) {
            function b(a) {
                return 10 > a ? "0" + a : a
            }
            return a.getUTCFullYear() + "-" + b(a.getUTCMonth() + 1) + "-" + b(a.getUTCDate()) + "T" + b(a.getUTCHours()) + ":" + b(a.getUTCMinutes()) + ":" + b(a.getUTCSeconds())
        };
        c.ra = function(a) {
            var b = {};
            c.a(a, function(a, f) {
                c.Qa(a) && 0 < a.length && (b[f] = a)
            });
            return b
        };
        c.truncate = function(a,
            b) {
            var d;
            "string" === typeof a ? d = a.slice(0, b) : c.isArray(a) ? (d = [], c.a(a, function(a) {
                d.push(c.truncate(a, b))
            })) : c.e(a) ? (d = {}, c.a(a, function(a, h) {
                d[h] = c.truncate(a, b)
            })) : d = a;
            return d
        };
        c.ba = function() {
            return function(a) {
                function b(a, c) {
                    var g = "",
                        s = 0,
                        i = s = "",
                        i = 0,
                        e = g,
                        r = [],
                        o = c[a];
                    o && "object" === typeof o && "function" === typeof o.toJSON && (o = o.toJSON(a));
                    switch (typeof o) {
                        case "string":
                            return d(o);
                        case "number":
                            return isFinite(o) ? "" + o : "null";
                        case "boolean":
                        case "null":
                            return "" + o;
                        case "object":
                            if (!o) return "null";
                            g +=
                                "    ";
                            r = [];
                            if ("[object Array]" === Q.apply(o)) {
                                i = o.length;
                                for (s = 0; s < i; s += 1) r[s] = b(s, o) || "null";
                                return i = 0 === r.length ? "[]" : g ? "[\n" + g + r.join(",\n" + g) + "\n" + e + "]" : "[" + r.join(",") + "]"
                            }
                            for (s in o) X.call(o, s) && (i = b(s, o)) && r.push(d(s) + (g ? ": " : ":") + i);
                            return i = 0 === r.length ? "{}" : g ? "{" + r.join(",") + "" + e + "}" : "{" + r.join(",") + "}"
                    }
                }

                function d(a) {
                    var b = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        d = {
                            "\u0008": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\u000c": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        };
                    b.lastIndex = 0;
                    return b.test(a) ? '"' + a.replace(b, function(a) {
                        var b = d[a];
                        return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + a + '"'
                }
                return b("", {
                    "": a
                })
            }
        }();
        c.O = function() {
            function a() {
                switch (i) {
                    case "t":
                        return h("t"), h("r"), h("u"), h("e"), m;
                    case "f":
                        return h("f"), h("a"), h("l"), h("s"), h("e"), D;
                    case "n":
                        return h("n"), h("u"), h("l"), h("l"), q
                }
                g('Unexpected "' + i + '"')
            }

            function b() {
                for (; i && " " >= i;) h()
            }

            function d() {
                var a, b, d = "",
                    c;
                if ('"' ===
                    i)
                    for (; h();) {
                        if ('"' === i) return h(), d;
                        if ("\\" === i)
                            if (h(), "u" === i) {
                                for (b = c = 0; 4 > b; b += 1) {
                                    a = parseInt(h(), 16);
                                    if (!isFinite(a)) break;
                                    c = 16 * c + a
                                }
                                d += String.fromCharCode(c)
                            } else if ("string" === typeof e[i]) d += e[i];
                        else break;
                        else d += i
                    }
                g("Bad string")
            }

            function c() {
                var a;
                a = "";
                "-" === i && (a = "-", h("-"));
                for (;
                    "0" <= i && "9" >= i;) a += i, h();
                if ("." === i)
                    for (a += "."; h() && "0" <= i && "9" >= i;) a += i;
                if ("e" === i || "E" === i) {
                    a += i;
                    h();
                    if ("-" === i || "+" === i) a += i, h();
                    for (;
                        "0" <= i && "9" >= i;) a += i, h()
                }
                a = +a;
                if (isFinite(a)) return a;
                g("Bad number")
            }

            function h(a) {
                a &&
                    a !== i && g("Expected '" + a + "' instead of '" + i + "'");
                i = r.charAt(s);
                s += 1;
                return i
            }

            function g(a) {
                a = new SyntaxError(a);
                a.pd = s;
                a.text = r;
                throw a;
            }
            var s, i, e = {
                    '"': '"',
                    "\\": "\\",
                    "/": "/",
                    b: "\u0008",
                    f: "\u000c",
                    n: "\n",
                    r: "\r",
                    t: "\t"
                },
                r, o;
            o = function() {
                b();
                switch (i) {
                    case "{":
                        var e;
                        a: {
                            var s, k = {};
                            if ("{" === i) {
                                h("{");
                                b();
                                if ("}" === i) {
                                    h("}");
                                    e = k;
                                    break a
                                }
                                for (; i;) {
                                    s = d();
                                    b();
                                    h(":");
                                    Object.hasOwnProperty.call(k, s) && g('Duplicate key "' + s + '"');
                                    k[s] = o();
                                    b();
                                    if ("}" === i) {
                                        h("}");
                                        e = k;
                                        break a
                                    }
                                    h(",");
                                    b()
                                }
                            }
                            g("Bad object")
                        }
                        return e;
                    case "[":
                        a: {
                            e = [];
                            if ("[" === i) {
                                h("[");
                                b();
                                if ("]" === i) {
                                    h("]");
                                    s = e;
                                    break a
                                }
                                for (; i;) {
                                    e.push(o());
                                    b();
                                    if ("]" === i) {
                                        h("]");
                                        s = e;
                                        break a
                                    }
                                    h(",");
                                    b()
                                }
                            }
                            g("Bad array")
                        }
                        return s;
                    case '"':
                        return d();
                    case "-":
                        return c();
                    default:
                        return "0" <= i && "9" >= i ? c() : a()
                }
            };
            return function(a) {
                r = a;
                s = 0;
                i = " ";
                a = o();
                b();
                i && g("Syntax error");
                return a
            }
        }();
        c.nc = function(a) {
            var b, d, f, h, g = 0,
                e = 0,
                i = "",
                i = [];
            if (!a) return a;
            a = c.nd(a);
            do b = a.charCodeAt(g++), d = a.charCodeAt(g++), f = a.charCodeAt(g++), h = b << 16 | d << 8 | f, b = h >> 18 & 63, d = h >> 12 & 63, f = h >> 6 & 63, h &= 63, i[e++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h); while (g < a.length);
            i = i.join("");
            switch (a.length % 3) {
                case 1:
                    i = i.slice(0, -2) + "==";
                    break;
                case 2:
                    i = i.slice(0, -1) + "="
            }
            return i
        };
        c.nd = function(a) {
            var a = (a + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n"),
                b = "",
                d, c, h = 0,
                g;
            d = c = 0;
            h = a.length;
            for (g = 0; g < h; g++) {
                var e = a.charCodeAt(g),
                    i = q;
                128 > e ? c++ : i = 127 < e && 2048 > e ? String.fromCharCode(e >> 6 | 192, e & 63 | 128) : String.fromCharCode(e >> 12 | 224, e >> 6 & 63 | 128, e & 63 | 128);
                i !== q && (c > d && (b += a.substring(d, c)), b += i, d = c = g + 1)
            }
            c > d && (b += a.substring(d, a.length));
            return b
        };
        c.Za = function() {
            function a() {
                function a(b, d) {
                    var c, f = 0;
                    for (c = 0; c < d.length; c++) f |= g[c] << 8 * c;
                    return b ^ f
                }
                var b, c, g = [],
                    e = 0;
                for (b = 0; b < A.length; b++) c = A.charCodeAt(b), g.unshift(c & 255), 4 <= g.length && (e = a(e, g), g = []);
                0 < g.length && (e = a(e, g));
                return e.toString(16)
            }

            function b() {
                var a = 1 * new Date,
                    b;
                if (x.performance &&
                    x.performance.now) b = x.performance.now();
                else
                    for (b = 0; a == 1 * new Date;) b++;
                return a.toString(16) + Math.floor(b).toString(16)
            }
            return function() {
                var c = (Z.height * Z.width).toString(16);
                return b() + "-" + Math.random().toString(16).replace(".", "") + "-" + a() + "-" + c + "-" + b()
            }
        }();
        var ya = "ahrefsbot,baiduspider,bingbot,bingpreview,facebookexternal,petalbot,pinterest,screaming frog,yahoo! slurp,yandexbot,adsbot-google,apis-google,duplexweb-google,feedfetcher-google,google favicon,google web preview,google-read-aloud,googlebot,googleweblight,mediapartners-google,storebot-google".split(",");
        c.xb = function(a) {
            var b, a = a.toLowerCase();
            for (b = 0; b < ya.length; b++)
                if (-1 !== a.indexOf(ya[b])) return m;
            return D
        };
        c.ec = function(a) {
            var b, d, f, h = [];
            c.g(b) && (b = "&");
            c.a(a, function(a, b) {
                d = encodeURIComponent(a.toString());
                f = encodeURIComponent(b);
                h[h.length] = f + "=" + d
            });
            return h.join(b)
        };
        c.Ma = function(a, b) {
            var b = b.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
                c = RegExp("[\\?&]" + b + "=([^&#]*)").exec(a);
            if (c === q || c && "string" !== typeof c[1] && c[1].length) return "";
            c = c[1];
            try {
                c = decodeURIComponent(c)
            } catch (f) {
                p.error("Skipping decoding for malformed query param: " +
                    c)
            }
            return c.replace(/\+/g, " ")
        };
        c.cookie = {
            get: function(a) {
                for (var a = a + "=", b = u.cookie.split(";"), c = 0; c < b.length; c++) {
                    for (var f = b[c];
                        " " == f.charAt(0);) f = f.substring(1, f.length);
                    if (0 === f.indexOf(a)) return decodeURIComponent(f.substring(a.length, f.length))
                }
                return q
            },
            parse: function(a) {
                var b;
                try {
                    b = c.O(c.cookie.get(a)) || {}
                } catch (d) {}
                return b
            },
            ud: function(a, b, c, f, h, g, e) {
                var i = "",
                    k = "",
                    r = "";
                e ? i = "; domain=" + e : f && (i = (i = ra(u.location.hostname)) ? "; domain=." + i : "");
                c && (k = new Date, k.setTime(k.getTime() + 1E3 * c), k =
                    "; expires=" + k.toGMTString());
                g && (h = m, r = "; SameSite=None");
                h && (r += "; secure");
                u.cookie = a + "=" + encodeURIComponent(b) + k + "; path=/" + i + r
            },
            set: function(a, b, c, f, h, g, e) {
                var i = "",
                    k = "",
                    r = "";
                e ? i = "; domain=" + e : f && (i = (i = ra(u.location.hostname)) ? "; domain=." + i : "");
                c && (k = new Date, k.setTime(k.getTime() + 864E5 * c), k = "; expires=" + k.toGMTString());
                g && (h = m, r = "; SameSite=None");
                h && (r += "; secure");
                a = a + "=" + encodeURIComponent(b) + k + "; path=/" + i + r;
                return u.cookie = a
            },
            remove: function(a, b, d) {
                c.cookie.set(a, "", -1, b, D, D, d)
            }
        };
        var fa =
            q;
        c.localStorage = {
            oa: function(a) {
                (a = U(q, a)) || p.error("localStorage unsupported; falling back to cookie store");
                return a
            },
            error: function(a) {
                p.error("localStorage error: " + a)
            },
            get: function(a) {
                try {
                    return window.localStorage.getItem(a)
                } catch (b) {
                    c.localStorage.error(b)
                }
                return q
            },
            parse: function(a) {
                try {
                    return c.O(c.localStorage.get(a)) || {}
                } catch (b) {}
                return q
            },
            set: function(a, b) {
                try {
                    window.localStorage.setItem(a, b)
                } catch (d) {
                    c.localStorage.error(d)
                }
            },
            remove: function(a) {
                try {
                    window.localStorage.removeItem(a)
                } catch (b) {
                    c.localStorage.error(b)
                }
            }
        };
        c.Ib = function() {
            function a(a, f, h) {
                return function(g) {
                    if (g = g || b(window.event)) {
                        var e = m,
                            i;
                        c.Pa(h) && (i = h(g));
                        g = f.call(a, g);
                        if (D === i || D === g) e = D;
                        return e
                    }
                }
            }

            function b(a) {
                if (a) a.preventDefault = b.preventDefault, a.stopPropagation = b.stopPropagation;
                return a
            }
            b.preventDefault = function() {
                this.returnValue = D
            };
            b.stopPropagation = function() {
                this.cancelBubble = m
            };
            return function(b, c, h, g, e) {
                b ? b.addEventListener && !g ? b.addEventListener(c, h, !!e) : (c = "on" + c, b[c] = a(b, h, b[c])) : p.error("No valid element provided to register_event")
            }
        }();
        var Na = /^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/;
        c.rc = function() {
            function a(a, b) {
                return 0 <= (" " + a.className + " ").replace(d, " ").indexOf(" " + b + " ")
            }

            function b(b) {
                if (!u.getElementsByTagName) return [];
                var b = b.split(" "),
                    d, g, e, i, k, r, o, w = [u];
                for (i = 0; i < b.length; i++)
                    if (d = b[i].replace(/^\s+/, "").replace(/\s+$/, ""), -1 < d.indexOf("#")) {
                        g = d.split("#");
                        d = g[0];
                        w = u.getElementById(g[1]);
                        if (!w || d && w.nodeName.toLowerCase() != d) return [];
                        w = [w]
                    } else if (-1 < d.indexOf(".")) {
                    g = d.split(".");
                    d = g[0];
                    var v = g[1];
                    d || (d = "*");
                    g = [];
                    for (k = e = 0; k < w.length; k++) {
                        o = "*" == d ? w[k].all ? w[k].all : w[k].getElementsByTagName("*") : w[k].getElementsByTagName(d);
                        for (r = 0; r < o.length; r++) g[e++] = o[r]
                    }
                    w = [];
                    for (k = d = 0; k < g.length; k++) g[k].className && c.Qa(g[k].className) && a(g[k], v) && (w[d++] = g[k])
                } else if (g = d.match(Na)) {
                    d = g[1];
                    var j = g[2],
                        v = g[3],
                        n = g[4];
                    d || (d = "*");
                    g = [];
                    for (k = e = 0; k < w.length; k++) {
                        o = "*" == d ? w[k].all ? w[k].all : w[k].getElementsByTagName("*") : w[k].getElementsByTagName(d);
                        for (r = 0; r < o.length; r++) g[e++] = o[r]
                    }
                    w = [];
                    d = 0;
                    switch (v) {
                        case "=":
                            v = function(a) {
                                return a.getAttribute(j) ==
                                    n
                            };
                            break;
                        case "~":
                            v = function(a) {
                                return a.getAttribute(j).match(RegExp("\\b" + n + "\\b"))
                            };
                            break;
                        case "|":
                            v = function(a) {
                                return a.getAttribute(j).match(RegExp("^" + n + "-?"))
                            };
                            break;
                        case "^":
                            v = function(a) {
                                return 0 === a.getAttribute(j).indexOf(n)
                            };
                            break;
                        case "$":
                            v = function(a) {
                                return a.getAttribute(j).lastIndexOf(n) == a.getAttribute(j).length - n.length
                            };
                            break;
                        case "*":
                            v = function(a) {
                                return -1 < a.getAttribute(j).indexOf(n)
                            };
                            break;
                        default:
                            v = function(a) {
                                return a.getAttribute(j)
                            }
                    }
                    w = [];
                    for (k = d = 0; k < g.length; k++) v(g[k]) &&
                        (w[d++] = g[k])
                } else {
                    g = [];
                    for (k = e = 0; k < w.length; k++) {
                        o = w[k].getElementsByTagName(d);
                        for (r = 0; r < o.length; r++) g[e++] = o[r]
                    }
                    w = g
                }
                return w
            }
            var d = /[\t\r\n]/g;
            return function(a) {
                return c.Dc(a) ? [a] : c.e(a) && !c.g(a.length) ? a : b.call(this, a)
            }
        }();
        var Oa = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
            Pa = "dclid,fbclid,gclid,ko_click_id,li_fat_id,msclkid,ttclid,twclid,wbraid".split(",");
        c.info = {
            ha: function(a) {
                var b = "",
                    d = {};
                c.a(Oa, function(f) {
                    b = c.Ma(u.URL, f);
                    b.length ? d[f] = b : a !== l && (d[f] = a)
                });
                return d
            },
            kb: function() {
                var a = "",
                    b = {};
                c.a(Pa, function(d) {
                    a = c.Ma(u.URL, d);
                    a.length && (b[d] = a)
                });
                return b
            },
            Ec: function() {
                return c.extend(c.info.ha(), c.info.kb())
            },
            Nc: function(a) {
                return 0 === a.search("https?://(.*)google.([^/?]*)") ? "google" : 0 === a.search("https?://(.*)bing.com") ? "bing" : 0 === a.search("https?://(.*)yahoo.com") ? "yahoo" : 0 === a.search("https?://(.*)duckduckgo.com") ? "duckduckgo" : q
            },
            Oc: function(a) {
                var b = c.info.Nc(a),
                    d = {};
                if (b !== q) d.$search_engine = b, a = c.Ma(a, "yahoo" != b ? "q" : "p"), a.length && (d.mp_keyword = a);
                return d
            },
            ga: function(a, b, d) {
                return d || c.j(a, " OPR/") ? c.j(a, "Mini") ? "Opera Mini" : "Opera" : /(BlackBerry|PlayBook|BB10)/i.test(a) ? "BlackBerry" : c.j(a, "IEMobile") || c.j(a, "WPDesktop") ? "Internet Explorer Mobile" : c.j(a, "SamsungBrowser/") ? "Samsung Internet" : c.j(a, "Edge") || c.j(a, "Edg/") ? "Microsoft Edge" : c.j(a, "FBIOS") ? "Facebook Mobile" : c.j(a, "Chrome") ? "Chrome" : c.j(a, "CriOS") ? "Chrome iOS" : c.j(a, "UCWEB") || c.j(a, "UCBrowser") ? "UC Browser" : c.j(a, "FxiOS") ? "Firefox iOS" : c.j(b || "", "Apple") ? c.j(a, "Mobile") ? "Mobile Safari" :
                    "Safari" : c.j(a, "Android") ? "Android Mobile" : c.j(a, "Konqueror") ? "Konqueror" : c.j(a, "Firefox") ? "Firefox" : c.j(a, "MSIE") || c.j(a, "Trident/") ? "Internet Explorer" : c.j(a, "Gecko") ? "Mozilla" : ""
            },
            Fa: function(a, b, d) {
                b = {
                    "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                    "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                    Chrome: /Chrome\/(\d+(\.\d+)?)/,
                    "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                    "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                    Safari: /Version\/(\d+(\.\d+)?)/,
                    "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                    Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                    Firefox: /Firefox\/(\d+(\.\d+)?)/,
                    "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                    Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                    BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                    "Android Mobile": /android\s(\d+(\.\d+)?)/,
                    "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                    "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                    Mozilla: /rv:(\d+(\.\d+)?)/
                } [c.info.ga(a, b, d)];
                if (b === l) return q;
                a = a.match(b);
                return !a ? q : parseFloat(a[a.length - 2])
            },
            Cb: function() {
                return /Windows/i.test(A) ? /Phone/.test(A) || /WPDesktop/.test(A) ? "Windows Phone" : "Windows" :
                    /(iPhone|iPad|iPod)/.test(A) ? "iOS" : /Android/.test(A) ? "Android" : /(BlackBerry|PlayBook|BB10)/i.test(A) ? "BlackBerry" : /Mac/i.test(A) ? "Mac OS X" : /Linux/.test(A) ? "Linux" : /CrOS/.test(A) ? "Chrome OS" : ""
            },
            rb: function(a) {
                return /Windows Phone/i.test(a) || /WPDesktop/.test(a) ? "Windows Phone" : /iPad/.test(a) ? "iPad" : /iPod/.test(a) ? "iPod Touch" : /iPhone/.test(a) ? "iPhone" : /(BlackBerry|PlayBook|BB10)/i.test(a) ? "BlackBerry" : /Android/.test(a) ? "Android" : ""
            },
            Hb: function(a) {
                a = a.split("/");
                return 3 <= a.length ? a[2] : ""
            },
            V: function() {
                return c.extend(c.ra({
                    $os: c.info.Cb(),
                    $browser: c.info.ga(A, I.vendor, Y),
                    $referrer: u.referrer,
                    $referring_domain: c.info.Hb(u.referrer),
                    $device: c.info.rb(A)
                }), {
                    $current_url: x.location.href,
                    $browser_version: c.info.Fa(A, I.vendor, Y),
                    $screen_height: Z.height,
                    $screen_width: Z.width,
                    mp_lib: "web",
                    $lib_version: "2.47.0",
                    $insert_id: ea(),
                    time: c.timestamp() / 1E3
                })
            },
            Jc: function() {
                return c.extend(c.ra({
                    $os: c.info.Cb(),
                    $browser: c.info.ga(A, I.vendor, Y)
                }), {
                    $browser_version: c.info.Fa(A, I.vendor, Y)
                })
            },
            Fc: function() {
                return c.ra({
                    current_page_title: u.title,
                    current_domain: x.location.hostname,
                    current_url_path: x.location.pathname,
                    current_url_protocol: x.location.protocol,
                    current_url_search: x.location.search
                })
            }
        };
        var Ga = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i,
            Fa = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
            $ = q,
            aa = q;
        if ("undefined" !== typeof JSON) $ = JSON.stringify, aa = JSON.parse;
        $ = $ || c.ba;
        aa = aa || c.O;
        c.toArray = c.L;
        c.isObject = c.e;
        c.JSONEncode = c.ba;
        c.JSONDecode = c.O;
        c.isBlockedUA = c.xb;
        c.isEmptyObject = c.na;
        c.info = c.info;
        c.info.device = c.info.rb;
        c.info.browser = c.info.ga;
        c.info.browserVersion = c.info.Fa;
        c.info.properties =
            c.info.V;
        E.prototype.ja = function() {};
        E.prototype.Ka = function() {};
        E.prototype.Da = function() {};
        E.prototype.Oa = function(a) {
            this.zb = a;
            return this
        };
        E.prototype.o = function(a, b, d, f) {
            var h = this,
                g = c.rc(a);
            if (0 === g.length) p.error("The DOM query (" + a + ") returned 0 elements");
            else return c.a(g, function(a) {
                c.Ib(a, this.Db, function(a) {
                    var c = {},
                        g = h.ja(d, this),
                        e = h.zb.c("track_links_timeout");
                    h.Ka(a, this, c);
                    window.setTimeout(h.Xb(f, g, c, m), e);
                    h.zb.o(b, g, h.Xb(f, g, c))
                })
            }, this), m
        };
        E.prototype.Xb = function(a, b, c, f) {
            var f =
                f || D,
                h = this;
            return function() {
                if (!c.oc) c.oc = m, a && a(f, b) === D || h.Da(b, c, f)
            }
        };
        E.prototype.ja = function(a, b) {
            return "function" === typeof a ? a(b) : c.extend({}, a)
        };
        c.wb(L, E);
        L.prototype.ja = function(a, b) {
            var c = L.bd.ja.apply(this, arguments);
            if (b.href) c.url = b.href;
            return c
        };
        L.prototype.Ka = function(a, b, c) {
            c.Ab = 2 === a.which || a.metaKey || a.ctrlKey || "_blank" === b.target;
            c.href = b.href;
            c.Ab || a.preventDefault()
        };
        L.prototype.Da = function(a, b) {
            b.Ab || setTimeout(function() {
                window.location = b.href
            }, 0)
        };
        c.wb(T, E);
        T.prototype.Ka =
            function(a, b, c) {
                c.element = b;
                a.preventDefault()
            };
        T.prototype.Da = function(a, b) {
            setTimeout(function() {
                b.element.submit()
            }, 0)
        };
        var Qa = ga("lock");
        qa.prototype.Ya = function(a, b, c) {
            function f() {
                j.setItem(u, "1");
                try {
                    a()
                } finally {
                    j.removeItem(u), j.getItem(p) === k && j.removeItem(p), j.getItem(n) === k && j.removeItem(n)
                }
            }

            function h() {
                j.setItem(n, k);
                e(g, function() {
                    j.getItem(n) === k ? f() : i(function() {
                        j.getItem(p) !== k ? h() : e(function() {
                            return !j.getItem(u)
                        }, f)
                    })
                })
            }

            function g() {
                var a = j.getItem(p);
                if (a && a !== k) return D;
                j.setItem(p,
                    k);
                if (j.getItem(p) === k) return m;
                if (!U(j, m)) throw Error("localStorage support dropped while acquiring lock");
                return D
            }

            function e(a, b) {
                a() ? b() : i(function() {
                    e(a, b)
                })
            }

            function i(a) {
                (new Date).getTime() - r > v ? (Qa.error("Timeout waiting for mutex on " + o + "; clearing lock. [" + k + "]"), j.removeItem(u), j.removeItem(p), h()) : setTimeout(function() {
                    try {
                        a()
                    } catch (c) {
                        b && b(c)
                    }
                }, w * (Math.random() + 0.1))
            }!c && "function" !== typeof b && (c = b, b = q);
            var k = c || (new Date).getTime() + "|" + Math.random(),
                r = (new Date).getTime(),
                o = this.K,
                w =
                this.Gb,
                v = this.Vb,
                j = this.i,
                n = o + ":X",
                p = o + ":Y",
                u = o + ":Z";
            try {
                if (U(j, m)) h();
                else throw Error("localStorage support check failed");
            } catch (t) {
                b && b(t)
            }
        };
        var pa = ga("batch");
        G.prototype.Ja = function(a, b, d) {
            var f = {
                id: ea(),
                flushAfter: (new Date).getTime() + 2 * b,
                payload: a
            };
            this.Ra.Ya(c.bind(function() {
                var b;
                try {
                    var c = this.X();
                    c.push(f);
                    (b = this.Ua(c)) && this.G.push(f)
                } catch (e) {
                    this.h("Error enqueueing item", a), b = D
                }
                d && d(b)
            }, this), c.bind(function(a) {
                this.h("Error acquiring storage lock", a);
                d && d(D)
            }, this), this.pa)
        };
        G.prototype.tc =
            function(a) {
                var b = this.G.slice(0, a);
                if (b.length < a) {
                    var d = this.X();
                    if (d.length) {
                        var f = {};
                        c.a(b, function(a) {
                            f[a.id] = m
                        });
                        for (var h = 0; h < d.length; h++) {
                            var g = d[h];
                            if ((new Date).getTime() > g.flushAfter && !f[g.id] && (g.Hc = m, b.push(g), b.length >= a)) break
                        }
                    }
                }
                return b
            };
        G.prototype.Kc = function(a, b) {
            var d = {};
            c.a(a, function(a) {
                d[a] = m
            });
            this.G = oa(this.G, d);
            var f = c.bind(function() {
                var b;
                try {
                    var c = this.X(),
                        c = oa(c, d);
                    if (b = this.Ua(c))
                        for (var c = this.X(), f = 0; f < c.length; f++) {
                            var e = c[f];
                            if (e.id && d[e.id]) return this.h("Item not removed from storage"),
                                D
                        }
                } catch (k) {
                    this.h("Error removing items", a), b = D
                }
                return b
            }, this);
            this.Ra.Ya(function() {
                var a = f();
                b && b(a)
            }, c.bind(function(a) {
                var c = D;
                this.h("Error acquiring storage lock", a);
                if (!U(this.i, m) && (c = f(), !c)) try {
                    this.i.removeItem(this.K)
                } catch (d) {
                    this.h("Error clearing queue", d)
                }
                b && b(c)
            }, this), this.pa)
        };
        G.prototype.ld = function(a) {
            this.G = na(this.G, a);
            this.Ra.Ya(c.bind(function() {
                try {
                    var b = this.X(),
                        b = na(b, a);
                    this.Ua(b)
                } catch (c) {
                    this.h("Error updating items", a)
                }
            }, this), c.bind(function(a) {
                this.h("Error acquiring storage lock",
                    a)
            }, this), this.pa)
        };
        G.prototype.X = function() {
            var a;
            try {
                if (a = this.i.getItem(this.K)) a = aa(a), c.isArray(a) || (this.h("Invalid storage entry:", a), a = q)
            } catch (b) {
                this.h("Error retrieving queue", b), a = q
            }
            return a || []
        };
        G.prototype.Ua = function(a) {
            try {
                return this.i.setItem(this.K, $(a)), m
            } catch (b) {
                return this.h("Error saving queue", b), D
            }
        };
        G.prototype.clear = function() {
            this.G = [];
            this.i.removeItem(this.K)
        };
        var R = ga("batch");
        C.prototype.Ja = function(a, b) {
            this.W.Ja(a, this.la, b)
        };
        C.prototype.start = function() {
            this.qa =
                D;
            this.Ga = 0;
            this.flush()
        };
        C.prototype.stop = function() {
            this.qa = m;
            if (this.Va) clearTimeout(this.Va), this.Va = q
        };
        C.prototype.clear = function() {
            this.W.clear()
        };
        C.prototype.Lb = function() {
            this.C = this.A.batch_size
        };
        C.prototype.Y = function() {
            this.Mb(this.A.batch_flush_interval_ms)
        };
        C.prototype.Mb = function(a) {
            this.la = a;
            if (!this.qa) this.Va = setTimeout(c.bind(this.flush, this), this.la)
        };
        C.prototype.flush = function(a) {
            try {
                if (this.Kb) R.log("Flush: Request already in progress");
                else {
                    var a = a || {},
                        b = this.A.batch_request_timeout_ms,
                        d = (new Date).getTime(),
                        f = this.C,
                        h = this.W.tc(f),
                        e = [],
                        s = {};
                    c.a(h, function(a) {
                        var b = a.payload;
                        this.fa && !a.Hc && (b = this.fa(b));
                        if (b) {
                            b.event && b.properties && (b.properties = c.extend({}, b.properties, {
                                mp_sent_by_lib_version: "2.47.0"
                            }));
                            var d = m,
                                f = a.id;
                            if (f) {
                                if (5 < (this.F[f] || 0)) this.h("[dupe] item ID sent too many times, not sending", {
                                    item: a,
                                    C: h.length,
                                    dd: this.F[f]
                                }), d = D
                            } else this.h("[dupe] found item with no ID", {
                                item: a
                            });
                            d && e.push(b)
                        }
                        s[a.id] = b
                    }, this);
                    if (1 > e.length) this.Y();
                    else {
                        this.Kb = m;
                        var i = c.bind(function(e) {
                                this.Kb =
                                    D;
                                try {
                                    var g = D;
                                    if (a.$b) this.W.ld(s);
                                    else if (c.e(e) && "timeout" === e.error && (new Date).getTime() - d >= b) this.h("Network timeout; retrying"), this.flush();
                                    else if (c.e(e) && e.N && (500 <= e.N.status || 429 === e.N.status || "timeout" === e.error)) {
                                        var i = 2 * this.la,
                                            k = e.N.responseHeaders;
                                        if (k) {
                                            var j = k["Retry-After"];
                                            j && (i = 1E3 * parseInt(j, 10) || i)
                                        }
                                        i = Math.min(6E5, i);
                                        this.h("Error; retry in " + i + " ms");
                                        this.Mb(i)
                                    } else if (c.e(e) && e.N && 413 === e.N.status)
                                        if (1 < h.length) {
                                            var r = Math.max(1, Math.floor(f / 2));
                                            this.C = Math.min(this.C, r, h.length -
                                                1);
                                            this.h("413 response; reducing batch size to " + this.C);
                                            this.Y()
                                        } else this.h("Single-event request too large; dropping", h), this.Lb(), g = m;
                                    else g = m;
                                    g && (this.W.Kc(c.map(h, function(a) {
                                        return a.id
                                    }), c.bind(function(a) {
                                        a ? (this.Ga = 0, this.flush()) : (this.h("Failed to remove items from queue"), 5 < ++this.Ga ? (this.h("Too many queue failures; disabling batching system."), this.$c()) : this.Y())
                                    }, this)), c.a(h, c.bind(function(a) {
                                        var b = a.id;
                                        b ? (this.F[b] = this.F[b] || 0, this.F[b]++, 5 < this.F[b] && this.h("[dupe] item ID sent too many times", {
                                            item: a,
                                            C: h.length,
                                            dd: this.F[b]
                                        })) : this.h("[dupe] found item with no ID while removing", {
                                            item: a
                                        })
                                    }, this)))
                                } catch (n) {
                                    this.h("Error handling API response", n), this.Y()
                                }
                            }, this),
                            k = {
                                method: "POST",
                                dc: m,
                                zc: m,
                                Wb: b
                            };
                        if (a.$b) k.Wa = "sendBeacon";
                        R.log("MIXPANEL REQUEST:", e);
                        this.Qc(e, k, i)
                    }
                }
            } catch (j) {
                this.h("Error flushing request queue", j), this.Y()
            }
        };
        C.prototype.h = function(a, b) {
            R.error.apply(R.error, arguments);
            if (this.I) try {
                b instanceof Error || (b = Error(a)), this.I(a, b)
            } catch (c) {
                R.error(c)
            }
        };
        var Ma = "__mp_opt_in_out_",
            B = {
                Ob: function(a, b) {
                    var d = {},
                        f = {};
                    c.e(a) ? c.a(a, function(a, b) {
                        this.z(b) || (f[b] = a)
                    }, this) : f[a] = b;
                    d.$set = f;
                    return d
                },
                ac: function(a) {
                    var b = {},
                        d = [];
                    c.isArray(a) || (a = [a]);
                    c.a(a, function(a) {
                        this.z(a) || d.push(a)
                    }, this);
                    b.$unset = d;
                    return b
                },
                Rb: function(a, b) {
                    var d = {},
                        f = {};
                    c.e(a) ? c.a(a, function(a, b) {
                        this.z(b) || (f[b] = a)
                    }, this) : f[a] = b;
                    d.$set_once = f;
                    return d
                },
                Zb: function(a, b) {
                    var d = {},
                        f = {};
                    c.e(a) ? c.a(a, function(a, b) {
                        this.z(b) || (f[b] = c.isArray(a) ? a : [a])
                    }, this) : f[a] = c.isArray(b) ? b : [b];
                    d.$union = f;
                    return d
                },
                mc: function(a,
                    b) {
                    var d = {},
                        f = {};
                    c.e(a) ? c.a(a, function(a, b) {
                        this.z(b) || (f[b] = a)
                    }, this) : f[a] = b;
                    d.$append = f;
                    return d
                },
                Jb: function(a, b) {
                    var d = {},
                        f = {};
                    c.e(a) ? c.a(a, function(a, b) {
                        this.z(b) || (f[b] = a)
                    }, this) : f[a] = b;
                    d.$remove = f;
                    return d
                },
                rd: function() {
                    return {
                        $delete: ""
                    }
                }
            };
        c.extend(t.prototype, B);
        t.prototype.T = function(a, b, c) {
            this.d = a;
            this.za = b;
            this.ya = c
        };
        t.prototype.set = N(function(a, b, d) {
            var f = this.Ob(a, b);
            c.e(a) && (d = b);
            return this.k(f, d)
        });
        t.prototype.Z = N(function(a, b, d) {
            var f = this.Rb(a, b);
            c.e(a) && (d = b);
            return this.k(f,
                d)
        });
        t.prototype.sa = N(function(a, b) {
            return this.k(this.ac(a), b)
        });
        t.prototype.$ = N(function(a, b, d) {
            c.e(a) && (d = b);
            return this.k(this.Zb(a, b), d)
        });
        t.prototype["delete"] = N(function(a) {
            return this.k({
                $delete: ""
            }, a)
        });
        t.prototype.remove = N(function(a, b, c) {
            return this.k(this.Jb(a, b), c)
        });
        t.prototype.k = function(a, b) {
            a.$group_key = this.za;
            a.$group_id = this.ya;
            a.$token = this.u("token");
            return this.d.Ca({
                type: "groups",
                data: c.Ia(a),
                D: this.u("api_host") + "/groups/",
                Ea: this.d.p.yc
            }, b)
        };
        t.prototype.z = function(a) {
            return "$group_key" ===
                a || "$group_id" === a
        };
        t.prototype.u = function(a) {
            return this.d.c(a)
        };
        t.prototype.toString = function() {
            return this.d.toString() + ".group." + this.za + "." + this.ya
        };
        t.prototype.remove = t.prototype.remove;
        t.prototype.set = t.prototype.set;
        t.prototype.set_once = t.prototype.Z;
        t.prototype.union = t.prototype.$;
        t.prototype.unset = t.prototype.sa;
        t.prototype.toString = t.prototype.toString;
        c.extend(j.prototype, B);
        j.prototype.T = function(a) {
            this.d = a
        };
        j.prototype.set = H(function(a, b, d) {
            var f = this.Ob(a, b);
            c.e(a) && (d = b);
            this.u("save_referrer") &&
                this.d.persistence.Xa(document.referrer);
            f.$set = c.extend({}, c.info.Jc(), this.d.persistence.xc(), f.$set);
            return this.k(f, d)
        });
        j.prototype.Z = H(function(a, b, d) {
            var f = this.Rb(a, b);
            c.e(a) && (d = b);
            return this.k(f, d)
        });
        j.prototype.sa = H(function(a, b) {
            return this.k(this.ac(a), b)
        });
        j.prototype.vb = H(function(a, b, d) {
            var f = {},
                e = {};
            c.e(a) ? (c.a(a, function(a, b) {
                this.z(b) || (isNaN(parseFloat(a)) ? p.error("Invalid increment value passed to mixpanel.people.increment - must be a number") : e[b] = a)
            }, this), d = b) : (c.g(b) && (b =
                1), e[a] = b);
            f.$add = e;
            return this.k(f, d)
        });
        j.prototype.append = H(function(a, b, d) {
            c.e(a) && (d = b);
            return this.k(this.mc(a, b), d)
        });
        j.prototype.remove = H(function(a, b, d) {
            c.e(a) && (d = b);
            return this.k(this.Jb(a, b), d)
        });
        j.prototype.$ = H(function(a, b, d) {
            c.e(a) && (d = b);
            return this.k(this.Zb(a, b), d)
        });
        j.prototype.gd = H(function(a, b, d) {
            if (!c.yb(a) && (a = parseFloat(a), isNaN(a))) {
                p.error("Invalid value passed to mixpanel.people.track_charge - must be a number");
                return
            }
            return this.append("$transactions", c.extend({
                    $amount: a
                },
                b), d)
        });
        j.prototype.ib = function(a) {
            return this.set("$transactions", [], a)
        };
        j.prototype.qb = function() {
            if (this.Aa()) return this.k({
                $delete: this.d.J()
            });
            p.error("mixpanel.people.delete_user() requires you to call identify() first")
        };
        j.prototype.toString = function() {
            return this.d.toString() + ".people"
        };
        j.prototype.k = function(a, b) {
            a.$token = this.u("token");
            a.$distinct_id = this.d.J();
            var d = this.d.s("$device_id"),
                f = this.d.s("$user_id"),
                e = this.d.s("$had_persisted_distinct_id");
            d && (a.$device_id = d);
            f && (a.$user_id =
                f);
            e && (a.$had_persisted_distinct_id = e);
            d = c.Ia(a);
            return !this.Aa() ? (this.hc(a), c.g(b) || (this.u("verbose") ? b({
                status: -1,
                error: q
            }) : b(-1)), c.truncate(d, 255)) : this.d.Ca({
                type: "people",
                data: d,
                D: this.u("api_host") + "/engage/",
                Ea: this.d.p.Ic
            }, b)
        };
        j.prototype.u = function(a) {
            return this.d.c(a)
        };
        j.prototype.Aa = function() {
            return this.d.Q.sb === m
        };
        j.prototype.hc = function(a) {
            "$set" in a ? this.d.persistence.q("$set", a) : "$set_once" in a ? this.d.persistence.q("$set_once", a) : "$unset" in a ? this.d.persistence.q("$unset", a) :
                "$add" in a ? this.d.persistence.q("$add", a) : "$append" in a ? this.d.persistence.q("$append", a) : "$remove" in a ? this.d.persistence.q("$remove", a) : "$union" in a ? this.d.persistence.q("$union", a) : p.error("Invalid call to _enqueue():", a)
        };
        j.prototype.R = function(a, b, d, f) {
            var e = this,
                g = c.extend({}, this.d.persistence.da(a)),
                s = g;
            !c.g(g) && c.e(g) && !c.na(g) && (e.d.persistence.v(a, g), f && (s = f(g)), b.call(e, s, function(b, f) {
                0 === b && e.d.persistence.q(a, g);
                c.g(d) || d(b, f)
            }))
        };
        j.prototype.ic = function(a, b, d, f, e, g, s) {
            var i = this,
                k =
                this.d.persistence.da("$append"),
                j = this.d.persistence.da("$remove");
            this.R("$set", this.set, a);
            this.R("$set_once", this.Z, f);
            this.R("$unset", this.sa, g, function(a) {
                return c.keys(a)
            });
            this.R("$add", this.vb, b);
            this.R("$union", this.$, e);
            if (!c.g(k) && c.isArray(k) && k.length) {
                for (var n, a = function(a, b) {
                        0 === a && i.d.persistence.q("$append", n);
                        c.g(d) || d(a, b)
                    }, b = k.length - 1; 0 <= b; b--) n = k.pop(), c.na(n) || i.append(n, a);
                i.d.persistence.save()
            }
            if (!c.g(j) && c.isArray(j) && j.length) {
                for (var w, k = function(a, b) {
                        0 === a && i.d.persistence.q("$remove",
                            w);
                        c.g(s) || s(a, b)
                    }, a = j.length - 1; 0 <= a; a--) w = j.pop(), c.na(w) || i.remove(w, k);
                i.d.persistence.save()
            }
        };
        j.prototype.z = function(a) {
            return "$distinct_id" === a || "$token" === a || "$device_id" === a || "$user_id" === a || "$had_persisted_distinct_id" === a
        };
        j.prototype.set = j.prototype.set;
        j.prototype.set_once = j.prototype.Z;
        j.prototype.unset = j.prototype.sa;
        j.prototype.increment = j.prototype.vb;
        j.prototype.append = j.prototype.append;
        j.prototype.remove = j.prototype.remove;
        j.prototype.union = j.prototype.$;
        j.prototype.track_charge =
            j.prototype.gd;
        j.prototype.clear_charges = j.prototype.ib;
        j.prototype.delete_user = j.prototype.qb;
        j.prototype.toString = j.prototype.toString;
        var Ra = "__mps,__mpso,__mpus,__mpa,__mpap,__mpr,__mpu,$people_distinct_id,__alias,__timers".split(",");
        n.prototype.V = function() {
            var a = {};
            c.a(this.props, function(b, d) {
                c.ub(Ra, d) || (a[d] = b)
            });
            return a
        };
        n.prototype.load = function() {
            if (!this.disabled) {
                var a = this.i.parse(this.name);
                a && (this.props = c.extend({}, a))
            }
        };
        n.prototype.md = function(a) {
            var b = a.upgrade,
                d;
            if (b) d = "mp_super_properties",
                "string" === typeof b && (d = b), b = this.i.parse(d), this.i.remove(d), this.i.remove(d, m), b && (this.props = c.extend(this.props, b.all, b.events));
            if (!a.cookie_name && "mixpanel" !== a.name && (d = "mp_" + a.token + "_" + a.name, b = this.i.parse(d))) this.i.remove(d), this.i.remove(d, m), this.w(b);
            this.i === c.localStorage && (b = c.cookie.parse(this.name), c.cookie.remove(this.name), c.cookie.remove(this.name, m), b && this.w(b))
        };
        n.prototype.save = function() {
            this.disabled || this.i.set(this.name, c.ba(this.props), this.La, this.Ha, this.Nb, this.ob,
                this.ia)
        };
        n.prototype.remove = function() {
            this.i.remove(this.name, D, this.ia);
            this.i.remove(this.name, m, this.ia)
        };
        n.prototype.clear = function() {
            this.remove();
            this.props = {}
        };
        n.prototype.w = function(a, b, d) {
            return c.e(a) ? ("undefined" === typeof b && (b = "None"), this.La = "undefined" === typeof d ? this.pb : d, c.a(a, function(a, c) {
                if (!this.props.hasOwnProperty(c) || this.props[c] === b) this.props[c] = a
            }, this), this.save(), m) : D
        };
        n.prototype.m = function(a, b) {
            return c.e(a) ? (this.La = "undefined" === typeof b ? this.pb : b, c.extend(this.props,
                a), this.save(), m) : D
        };
        n.prototype.aa = function(a) {
            a in this.props && (delete this.props[a], this.save())
        };
        n.prototype.cc = function(a) {
            this.m(c.info.Oc(a))
        };
        n.prototype.Xa = function(a) {
            this.w({
                $initial_referrer: a || "$direct",
                $initial_referring_domain: c.info.Hb(a) || "$direct"
            }, "")
        };
        n.prototype.xc = function() {
            return c.ra({
                $initial_referrer: this.props.$initial_referrer,
                $initial_referring_domain: this.props.$initial_referring_domain
            })
        };
        n.prototype.bc = function(a) {
            this.pb = this.La = a.cookie_expiration;
            this.Qb(a.disable_persistence);
            this.Tc(a.cookie_domain);
            this.Uc(a.cross_site_cookie);
            this.Vc(a.cross_subdomain_cookie);
            this.Yc(a.secure_cookie)
        };
        n.prototype.Qb = function(a) {
            (this.disabled = a) ? this.remove(): this.save()
        };
        n.prototype.Tc = function(a) {
            if (a !== this.ia) this.remove(), this.ia = a, this.save()
        };
        n.prototype.Uc = function(a) {
            if (a !== this.ob) this.ob = a, this.remove(), this.save()
        };
        n.prototype.Vc = function(a) {
            if (a !== this.Ha) this.Ha = a, this.remove(), this.save()
        };
        n.prototype.vc = function() {
            return this.Ha
        };
        n.prototype.Yc = function(a) {
            if (a !== this.Nb) this.Nb =
                a ? m : D, this.remove(), this.save()
        };
        n.prototype.q = function(a, b) {
            var d = this.xa(a),
                f = b[a],
                e = this.B("$set"),
                g = this.B("$set_once"),
                j = this.B("$unset"),
                i = this.B("$add"),
                k = this.B("$union"),
                n = this.B("$remove", []),
                o = this.B("$append", []);
            "__mps" === d ? (c.extend(e, f), this.v("$add", f), this.v("$union", f), this.v("$unset", f)) : "__mpso" === d ? (c.a(f, function(a, b) {
                b in g || (g[b] = a)
            }), this.v("$unset", f)) : "__mpus" === d ? c.a(f, function(a) {
                c.a([e, g, i, k], function(b) {
                    a in b && delete b[a]
                });
                c.a(o, function(b) {
                    a in b && delete b[a]
                });
                j[a] =
                    m
            }) : "__mpa" === d ? (c.a(f, function(a, b) {
                b in e ? e[b] += a : (b in i || (i[b] = 0), i[b] += a)
            }, this), this.v("$unset", f)) : "__mpu" === d ? (c.a(f, function(a, b) {
                c.isArray(a) && (b in k || (k[b] = []), k[b] = k[b].concat(a))
            }), this.v("$unset", f)) : "__mpr" === d ? (n.push(f), this.v("$append", f)) : "__mpap" === d && (o.push(f), this.v("$unset", f));
            p.log("MIXPANEL PEOPLE REQUEST (QUEUED, PENDING IDENTIFY):");
            p.log(b);
            this.save()
        };
        n.prototype.v = function(a, b) {
            var d = this.da(a);
            c.g(d) || (c.a(b, function(b, e) {
                "$append" === a || "$remove" === a ? c.a(d, function(a) {
                    a[e] ===
                        b && delete a[e]
                }) : delete d[e]
            }, this), this.save())
        };
        n.prototype.xa = function(a) {
            if ("$set" === a) return "__mps";
            if ("$set_once" === a) return "__mpso";
            if ("$unset" === a) return "__mpus";
            if ("$add" === a) return "__mpa";
            if ("$append" === a) return "__mpap";
            if ("$remove" === a) return "__mpr";
            if ("$union" === a) return "__mpu";
            p.error("Invalid queue:", a)
        };
        n.prototype.da = function(a) {
            return this.props[this.xa(a)]
        };
        n.prototype.B = function(a, b) {
            var d = this.xa(a),
                b = c.g(b) ? {} : b;
            return this.props[d] || (this.props[d] = b)
        };
        n.prototype.Wc = function(a) {
            var b =
                this.props.__timers || {};
            b[a] = (new Date).getTime();
            this.props.__timers = b;
            this.save()
        };
        n.prototype.Lc = function(a) {
            var b = (this.props.__timers || {})[a];
            c.g(b) || (delete this.props.__timers[a], this.save());
            return b
        };
        var ca, y, O = x.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
            ma = !O && -1 === A.indexOf("MSIE") && -1 === A.indexOf("Mozilla"),
            ba = q;
        I.sendBeacon && (ba = function() {
            return I.sendBeacon.apply(I, arguments)
        });
        var za = {
                api_host: "https://api-js.mixpanel.com",
                api_method: "POST",
                api_transport: "XHR",
                api_payload_format: "base64",
                app_host: "https://mixpanel.com",
                cdn: "https://cdn.mxpnl.com",
                cross_site_cookie: D,
                cross_subdomain_cookie: m,
                error_reporter: P,
                persistence: "cookie",
                persistence_name: "",
                cookie_domain: "",
                cookie_name: "",
                loaded: P,
                track_marketing: m,
                track_pageview: D,
                skip_first_touch_marketing: D,
                store_google: m,
                save_referrer: m,
                test: D,
                verbose: D,
                img: D,
                debug: D,
                track_links_timeout: 300,
                cookie_expiration: 365,
                upgrade: D,
                disable_persistence: D,
                disable_cookie: D,
                secure_cookie: D,
                ip: m,
                opt_out_tracking_by_default: D,
                opt_out_persistence_by_default: D,
                opt_out_tracking_persistence_type: "localStorage",
                opt_out_tracking_cookie_prefix: q,
                property_blacklist: [],
                xhr_headers: {},
                ignore_dnt: D,
                batch_requests: m,
                batch_size: 50,
                batch_flush_interval_ms: 5E3,
                batch_request_timeout_ms: 9E4,
                batch_autostart: m,
                hooks: {}
            },
            la = D;
        e.prototype.Oa = function(a, b, d) {
            if (c.g(d)) this.l("You must name your new library: init(token, config, name)");
            else if ("mixpanel" === d) this.l("You must initialize the main mixpanel object right after you include the Mixpanel js snippet");
            else return a =
                S(a, b, d), y[d] = a, a.ea(), a
        };
        e.prototype.T = function(a, b, d) {
            b = b || {};
            this.__loaded = m;
            this.config = {};
            var e = {};
            "api_payload_format" in b || (b.api_host || za.api_host).match(/\.mixpanel\.com/) && (e.api_payload_format = "json");
            this.Pb(c.extend({}, za, e, b, {
                name: d,
                token: a,
                callback_fn: ("mixpanel" === d ? d : "mixpanel." + d) + "._jsc"
            }));
            this._jsc = P;
            this.ua = [];
            this.va = [];
            this.ta = [];
            this.Q = {
                disable_all_events: D,
                identify_called: D
            };
            this.p = {};
            if (this.P = this.c("batch_requests"))
                if (!c.localStorage.oa(m) || !O) this.P = D, p.log("Turning off Mixpanel request-queueing; needs XHR and localStorage support");
                else if (this.Ac(), ba && x.addEventListener) {
                var h = c.bind(function() {
                    this.p.ka.qa || this.p.ka.flush({
                        $b: m
                    })
                }, this);
                x.addEventListener("pagehide", function(a) {
                    a.persisted && h()
                });
                x.addEventListener("visibilitychange", function() {
                    "hidden" === u.visibilityState && h()
                })
            }
            this.persistence = this.cookie = new n(this.config);
            this.M = {};
            this.jc();
            a = c.Za();
            this.J() || this.w({
                distinct_id: "$device:" + a,
                $device_id: a
            }, "");
            this.c("track_pageview") && this.Yb()
        };
        e.prototype.ea = function() {
            this.c("loaded")(this);
            this.gb()
        };
        e.prototype.gb =
            function() {
                this.persistence.cc(u.referrer);
                this.c("store_google") && this.m(c.info.ha(), {
                    td: D
                });
                this.c("save_referrer") && this.persistence.Xa(u.referrer)
            };
        e.prototype.gc = function() {
            c.a(this.ua, function(a) {
                this.Ba.apply(this, a)
            }, this);
            this.U() || c.a(this.va, function(a) {
                this.k.apply(this, a)
            }, this);
            delete this.ua;
            delete this.va
        };
        e.prototype.Ba = function(a, b) {
            if (this.c("img")) return this.l("You can't use DOM tracking functions with img = true."), D;
            if (!la) return this.ua.push([a, b]), D;
            var c = (new a).Oa(this);
            return c.o.apply(c, b)
        };
        e.prototype.cb = function(a, b) {
            if (c.g(a)) return q;
            if (O) return function(c) {
                a(c, b)
            };
            var d = this._jsc,
                e = "" + Math.floor(1E8 * Math.random()),
                h = this.c("callback_fn") + "[" + e + "]";
            d[e] = function(c) {
                delete d[e];
                a(c, b)
            };
            return h
        };
        e.prototype.k = function(a, b, d, e) {
            var h = m;
            if (ma) return this.va.push(arguments), h;
            var g = {
                    method: this.c("api_method"),
                    Wa: this.c("api_transport"),
                    dc: this.c("verbose")
                },
                j = q;
            if (!e && (c.Pa(d) || "string" === typeof d)) e = d, d = q;
            d = c.extend(g, d || {});
            if (!O) d.method = "GET";
            var g = "POST" ===
                d.method,
                i = ba && g && "sendbeacon" === d.Wa.toLowerCase(),
                k = d.dc;
            b.verbose && (k = m);
            this.c("test") && (b.test = 1);
            k && (b.verbose = 1);
            this.c("img") && (b.img = 1);
            if (!O)
                if (e) b.callback = e;
                else if (k || this.c("test")) b.callback = "(function(){})";
            b.ip = this.c("ip") ? 1 : 0;
            b._ = (new Date).getTime().toString();
            g && (j = "data=" + encodeURIComponent(b.data), delete b.data);
            var a = a + ("?" + c.ec(b)),
                n = this;
            if ("img" in b) j = u.createElement("img"), j.src = a, u.body.appendChild(j);
            else if (i) {
                try {
                    h = ba(a, j)
                } catch (o) {
                    n.l(o), h = D
                }
                try {
                    e && e(h ? 1 : 0)
                } catch (p) {
                    n.l(p)
                }
            } else if (O) try {
                var v =
                    new XMLHttpRequest;
                v.open(d.method, a, m);
                var t = this.c("xhr_headers");
                g && (t["Content-Type"] = "application/x-www-form-urlencoded");
                c.a(t, function(a, b) {
                    v.setRequestHeader(b, a)
                });
                if (d.Wb && "undefined" !== typeof v.timeout) {
                    v.timeout = d.Wb;
                    var x = (new Date).getTime()
                }
                v.withCredentials = m;
                v.onreadystatechange = function() {
                    if (4 === v.readyState)
                        if (200 === v.status) {
                            if (e)
                                if (k) {
                                    var a;
                                    try {
                                        a = c.O(v.responseText)
                                    } catch (b) {
                                        if (n.l(b), d.zc) a = v.responseText;
                                        else return
                                    }
                                    e(a)
                                } else e(Number(v.responseText))
                        } else a = v.timeout && !v.status &&
                            (new Date).getTime() - x >= v.timeout ? "timeout" : "Bad HTTP status: " + v.status + " " + v.statusText, n.l(a), e && (k ? e({
                                status: 0,
                                error: a,
                                N: v
                            }) : e(0))
                };
                v.send(j)
            } catch (y) {
                n.l(y), h = D
            } else j = u.createElement("script"), j.type = "text/javascript", j.async = m, j.defer = m, j.src = a, t = u.getElementsByTagName("script")[0], t.parentNode.insertBefore(j, t);
            return h
        };
        e.prototype.wa = function(a) {
            function b(a, b) {
                c.a(a, function(a) {
                        if (c.isArray(a[0])) {
                            var d = b;
                            c.a(a, function(a) {
                                d = d[a[0]].apply(d, a.slice(1))
                            })
                        } else this[a[0]].apply(this, a.slice(1))
                    },
                    b)
            }
            var d, e = [],
                h = [],
                g = [];
            c.a(a, function(a) {
                a && (d = a[0], c.isArray(d) ? g.push(a) : "function" === typeof a ? a.call(this) : c.isArray(a) && "alias" === d ? e.push(a) : c.isArray(a) && -1 !== d.indexOf("track") && "function" === typeof this[d] ? g.push(a) : h.push(a))
            }, this);
            b(e, this);
            b(h, this);
            b(g, this)
        };
        e.prototype.hb = function() {
            return !!this.p.ka
        };
        e.prototype.Ac = function() {
            var a = this.c("token");
            if (!this.hb()) {
                var b = c.bind(function(b) {
                    return new C("__mpq_" + a + b.Ta, {
                        A: this.config,
                        Rc: c.bind(function(a, c, e) {
                            this.k(this.c("api_host") +
                                b.D, this.ab(a), c, this.cb(e, a))
                        }, this),
                        fa: c.bind(function(a) {
                            return this.fb("before_send_" + b.type, a)
                        }, this),
                        I: this.c("error_reporter"),
                        ad: c.bind(this.Ub, this)
                    })
                }, this);
                this.p = {
                    ka: b({
                        type: "events",
                        D: "/track/",
                        Ta: "_ev"
                    }),
                    Ic: b({
                        type: "people",
                        D: "/engage/",
                        Ta: "_pp"
                    }),
                    yc: b({
                        type: "groups",
                        D: "/groups/",
                        Ta: "_gr"
                    })
                }
            }
            this.c("batch_autostart") && this.Tb()
        };
        e.prototype.Tb = function() {
            if (this.hb()) this.P = m, c.a(this.p, function(a) {
                a.start()
            })
        };
        e.prototype.Ub = function() {
            this.P = D;
            c.a(this.p, function(a) {
                a.stop();
                a.clear()
            })
        };
        e.prototype.push = function(a) {
            this.wa([a])
        };
        e.prototype.disable = function(a) {
            "undefined" === typeof a ? this.Q.qc = m : this.ta = this.ta.concat(a)
        };
        e.prototype.ab = function(a) {
            a = c.ba(a);
            "base64" === this.c("api_payload_format") && (a = c.nc(a));
            return {
                data: a
            }
        };
        e.prototype.Ca = function(a, b) {
            var d = c.truncate(a.data, 255),
                e = a.D,
                h = a.Ea,
                g = a.Zc,
                j = a.Sc || {},
                b = b || P,
                i = m,
                k = c.bind(function() {
                    j.Sb || (d = this.fb("before_send_" + a.type, d));
                    return d ? (p.log("MIXPANEL REQUEST:"), p.log(d), this.k(e, this.ab(d), j, this.cb(b, d))) : q
                }, this);
            this.P &&
                !g ? h.Ja(d, function(a) {
                    a ? b(1, d) : k()
                }) : i = k();
            return i && d
        };
        e.prototype.o = M(function(a, b, d, e) {
            !e && "function" === typeof d && (e = d, d = q);
            var d = d || {},
                h = d.transport;
            if (h) d.Wa = h;
            h = d.send_immediately;
            "function" !== typeof e && (e = P);
            if (c.g(a)) this.l("No event name provided to mixpanel.track");
            else if (this.bb(a)) e(0);
            else {
                b = b || {};
                b.token = this.c("token");
                var g = this.persistence.Lc(a);
                c.g(g) || (b.$duration = parseFloat((((new Date).getTime() - g) / 1E3).toFixed(3)));
                this.gb();
                g = this.c("track_marketing") ? c.info.Ec() : {};
                b = c.extend({},
                    c.info.V(), g, this.persistence.V(), this.M, b);
                g = this.c("property_blacklist");
                c.isArray(g) ? c.a(g, function(a) {
                    delete b[a]
                }) : this.l("Invalid value for property_blacklist config: " + g);
                return this.Ca({
                    type: "events",
                    data: {
                        event: a,
                        properties: b
                    },
                    D: this.c("api_host") + "/track/",
                    Ea: this.p.ka,
                    Zc: h,
                    Sc: d
                }, e)
            }
        });
        e.prototype.Xc = M(function(a, b, d) {
            c.isArray(b) || (b = [b]);
            var e = {};
            e[a] = b;
            this.m(e);
            return this.people.set(a, b, d)
        });
        e.prototype.kc = M(function(a, b, c) {
            var e = this.s(a);
            if (e === l) {
                var h = {};
                h[a] = [b];
                this.m(h)
            } else - 1 ===
                e.indexOf(b) && (e.push(b), this.m(h));
            return this.people.$(a, b, c)
        });
        e.prototype.Mc = M(function(a, b, c) {
            var e = this.s(a);
            if (e !== l) {
                var h = e.indexOf(b); - 1 < h && (e.splice(h, 1), this.m({
                    sd: e
                }));
                0 === e.length && this.aa(a)
            }
            return this.people.remove(a, b, c)
        });
        e.prototype.kd = M(function(a, b, d, e) {
            var h = c.extend({}, b || {});
            c.a(d, function(a, b) {
                a !== q && a !== l && (h[b] = a)
            });
            return this.o(a, h, e)
        });
        e.prototype.fc = function(a, b) {
            return a + "_" + JSON.stringify(b)
        };
        e.prototype.wc = function(a, b) {
            var c = this.fc(a, b),
                e = this.$a[c];
            if (e === l ||
                e.za !== a || e.ya !== b) e = new t, e.T(this, a, b), this.$a[c] = e;
            return e
        };
        e.prototype.Yb = M(function(a, b) {
            "object" !== typeof a && (a = {});
            var b = b || {},
                d = b.event_name || "$mp_web_page_view",
                e = c.extend(c.info.Fc(), c.info.ha(), c.info.kb()),
                e = c.extend({}, e, a);
            return this.o(d, e)
        });
        e.prototype.jd = function() {
            return this.Ba.call(this, L, arguments)
        };
        e.prototype.hd = function() {
            return this.Ba.call(this, T, arguments)
        };
        e.prototype.cd = function(a) {
            c.g(a) ? this.l("No event name provided to mixpanel.time_event") : this.bb(a) || this.persistence.Wc(a)
        };
        var Da = {
            persistent: m
        };
        e.prototype.m = function(a, b) {
            var d = da(b);
            d.persistent ? this.persistence.m(a, d.days) : c.extend(this.M, a)
        };
        e.prototype.w = function(a, b, d) {
            d = da(d);
            d.persistent ? this.persistence.w(a, b, d.days) : ("undefined" === typeof b && (b = "None"), c.a(a, function(a, c) {
                if (!this.M.hasOwnProperty(c) || this.M[c] === b) this.M[c] = a
            }, this))
        };
        e.prototype.aa = function(a, b) {
            b = da(b);
            b.persistent ? this.persistence.aa(a) : delete this.M[a]
        };
        e.prototype.eb = function(a, b) {
            var c = {};
            c[a] = b;
            this.m(c)
        };
        e.prototype.Na = function(a, b,
            c, e, h, g, j, i) {
            var k = this.J();
            if (a && k !== a) {
                if ("string" === typeof a && 0 === a.indexOf("$device:")) return this.l("distinct_id cannot have $device: prefix"), -1;
                this.m({
                    $user_id: a
                })
            }
            this.s("$device_id") || this.w({
                $had_persisted_distinct_id: m,
                $device_id: k
            }, "");
            a !== k && a !== this.s("__alias") && (this.aa("__alias"), this.m({
                distinct_id: a
            }));
            this.Q.sb = m;
            this.people.ic(b, c, e, h, g, j, i);
            a !== k && this.o("$identify", {
                distinct_id: a,
                $anon_distinct_id: k
            }, {
                Sb: m
            })
        };
        e.prototype.reset = function() {
            this.persistence.clear();
            this.Q.sb =
                D;
            var a = c.Za();
            this.w({
                distinct_id: "$device:" + a,
                $device_id: a
            }, "")
        };
        e.prototype.J = function() {
            return this.s("distinct_id")
        };
        e.prototype.lc = function(a, b) {
            if (a === this.s("$people_distinct_id")) return this.l("Attempting to create alias for existing People user - aborting."), -2;
            var d = this;
            c.g(b) && (b = this.J());
            if (a !== b) return this.eb("__alias", a), this.o("$create_alias", {
                alias: a,
                distinct_id: b
            }, {
                Sb: m
            }, function() {
                d.Na(a)
            });
            this.l("alias matches current distinct_id - skipping api call.");
            this.Na(a);
            return -1
        };
        e.prototype.Gc = function(a) {
            this.eb("mp_name_tag", a)
        };
        e.prototype.Pb = function(a) {
            if (c.e(a)) c.extend(this.config, a), a.batch_size && c.a(this.p, function(a) {
                a.Lb()
            }), this.c("persistence_name") || (this.config.persistence_name = this.config.cookie_name), this.c("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie), this.persistence && this.persistence.bc(this.config), J = J || this.c("debug")
        };
        e.prototype.c = function(a) {
            return this.config[a]
        };
        e.prototype.fb = function(a) {
            var b = (this.config.hooks[a] ||
                Ea).apply(this, K.call(arguments, 1));
            "undefined" === typeof b && (this.l(a + " hook did not return a value"), b = q);
            return b
        };
        e.prototype.s = function(a) {
            return this.persistence.props[a]
        };
        e.prototype.toString = function() {
            var a = this.c("name");
            "mixpanel" !== a && (a = "mixpanel." + a);
            return a
        };
        e.prototype.bb = function(a) {
            return c.xb(A) || this.Q.qc || c.ub(this.ta, a)
        };
        e.prototype.jc = function() {
            "localStorage" === this.c("opt_out_tracking_persistence_type") && c.localStorage.oa() && (!this.ma() && this.ma({
                    persistence_type: "cookie"
                }) &&
                this.Bb({
                    enable_persistence: D
                }), !this.U() && this.U({
                    persistence_type: "cookie"
                }) && this.Sa({
                    clear_persistence: D
                }), this.jb({
                    persistence_type: "cookie",
                    enable_persistence: D
                }));
            if (this.U()) this.ca({
                clear_persistence: m
            });
            else if (!this.ma() && (this.c("opt_out_tracking_by_default") || c.cookie.get("mp_optout"))) c.cookie.remove("mp_optout"), this.Sa({
                clear_persistence: this.c("opt_out_persistence_by_default")
            })
        };
        e.prototype.ca = function(a) {
            if (a && a.clear_persistence) a = m;
            else if (a && a.enable_persistence) a = D;
            else return;
            !this.c("disable_persistence") && this.persistence.disabled !== a && this.persistence.Qb(a);
            a && c.a(this.p, function(a) {
                a.clear()
            })
        };
        e.prototype.S = function(a, b) {
            b = c.extend({
                track: c.bind(this.o, this),
                persistence_type: this.c("opt_out_tracking_persistence_type"),
                cookie_prefix: this.c("opt_out_tracking_cookie_prefix"),
                cookie_expiration: this.c("cookie_expiration"),
                cross_site_cookie: this.c("cross_site_cookie"),
                cross_subdomain_cookie: this.c("cross_subdomain_cookie"),
                cookie_domain: this.c("cookie_domain"),
                secure_cookie: this.c("secure_cookie"),
                ignore_dnt: this.c("ignore_dnt")
            }, b);
            c.localStorage.oa() || (b.persistence_type = "cookie");
            return a(this.c("token"), {
                o: b.track,
                ed: b.track_event_name,
                fd: b.track_properties,
                Fb: b.persistence_type,
                Eb: b.cookie_prefix,
                lb: b.cookie_domain,
                mb: b.cookie_expiration,
                pc: b.cross_site_cookie,
                nb: b.cross_subdomain_cookie,
                Pc: b.secure_cookie,
                tb: b.ignore_dnt
            })
        };
        e.prototype.Bb = function(a) {
            a = c.extend({
                enable_persistence: m
            }, a);
            this.S(Ha, a);
            this.ca(a)
        };
        e.prototype.Sa = function(a) {
            a = c.extend({
                    clear_persistence: m,
                    delete_user: m
                },
                a);
            a.delete_user && this.people && this.people.Aa() && (this.people.qb(), this.people.ib());
            this.S(Ia, a);
            this.ca(a)
        };
        e.prototype.ma = function(a) {
            return this.S(Ja, a)
        };
        e.prototype.U = function(a) {
            return this.S(ta, a)
        };
        e.prototype.jb = function(a) {
            a = c.extend({
                enable_persistence: m
            }, a);
            this.S(La, a);
            this.ca(a)
        };
        e.prototype.l = function(a, b) {
            p.error.apply(p.error, arguments);
            try {
                !b && !(a instanceof Error) && (a = Error(a)), this.c("error_reporter")(a, b)
            } catch (c) {
                p.error(c)
            }
        };
        e.prototype.init = e.prototype.Oa;
        e.prototype.reset =
            e.prototype.reset;
        e.prototype.disable = e.prototype.disable;
        e.prototype.time_event = e.prototype.cd;
        e.prototype.track = e.prototype.o;
        e.prototype.track_links = e.prototype.jd;
        e.prototype.track_forms = e.prototype.hd;
        e.prototype.track_pageview = e.prototype.Yb;
        e.prototype.register = e.prototype.m;
        e.prototype.register_once = e.prototype.w;
        e.prototype.unregister = e.prototype.aa;
        e.prototype.identify = e.prototype.Na;
        e.prototype.alias = e.prototype.lc;
        e.prototype.name_tag = e.prototype.Gc;
        e.prototype.set_config = e.prototype.Pb;
        e.prototype.get_config = e.prototype.c;
        e.prototype.get_property = e.prototype.s;
        e.prototype.get_distinct_id = e.prototype.J;
        e.prototype.toString = e.prototype.toString;
        e.prototype.opt_out_tracking = e.prototype.Sa;
        e.prototype.opt_in_tracking = e.prototype.Bb;
        e.prototype.has_opted_out_tracking = e.prototype.U;
        e.prototype.has_opted_in_tracking = e.prototype.ma;
        e.prototype.clear_opt_in_out_tracking = e.prototype.jb;
        e.prototype.get_group = e.prototype.wc;
        e.prototype.set_group = e.prototype.Xc;
        e.prototype.add_group = e.prototype.kc;
        e.prototype.remove_group = e.prototype.Mc;
        e.prototype.track_with_groups = e.prototype.kd;
        e.prototype.start_batch_senders = e.prototype.Tb;
        e.prototype.stop_batch_senders = e.prototype.Ub;
        n.prototype.properties = n.prototype.V;
        n.prototype.update_search_keyword = n.prototype.cc;
        n.prototype.update_referrer_info = n.prototype.Xa;
        n.prototype.get_cross_subdomain = n.prototype.vc;
        n.prototype.clear = n.prototype.clear;
        var F = {};
        (function() {
            ca = 1;
            y = x.mixpanel;
            c.g(y) ? p.H('"mixpanel" object not initialized. Ensure you are using the latest version of the Mixpanel JS Library along with the snippet we provide.') :
                y.__loaded || y.config && y.persistence ? p.H("The Mixpanel library has already been downloaded at least once. Ensure that the Mixpanel code snippet only appears once on the page (and is not double-loaded by a tag manager) in order to avoid errors.") : 1.1 > (y.__SV || 0) ? p.H("Version mismatch; please ensure you're using the latest version of the Mixpanel code snippet.") : (c.a(y._i, function(a) {
                    a && c.isArray(a) && (F[a[a.length - 1]] = S.apply(this, a))
                }), Ba(), y.init(), c.a(F, function(a) {
                    a.ea()
                }), Aa())
        })()
    })();
})();
