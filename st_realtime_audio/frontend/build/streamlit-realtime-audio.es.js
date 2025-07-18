import Ie, { useState as Ss, useRef as Rn, useCallback as Jt, useEffect as oi } from "react";
import _c from "react-dom";
function vc(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var pi = { exports: {} }, xn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Is;
function wc() {
  if (Is) return xn;
  Is = 1;
  var n = Ie, t = Symbol.for("react.element"), e = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, d) {
    var h, f = {}, m = null, _ = null;
    d !== void 0 && (m = "" + d), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (_ = c.ref);
    for (h in c) r.call(c, h) && !s.hasOwnProperty(h) && (f[h] = c[h]);
    if (a && a.defaultProps) for (h in c = a.defaultProps, c) f[h] === void 0 && (f[h] = c[h]);
    return { $$typeof: t, type: a, key: m, ref: _, props: f, _owner: i.current };
  }
  return xn.Fragment = e, xn.jsx = o, xn.jsxs = o, xn;
}
var Mn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var As;
function Sc() {
  return As || (As = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ie, t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), C = Symbol.iterator, ft = "@@iterator";
    function pt(l) {
      if (l === null || typeof l != "object")
        return null;
      var p = C && l[C] || l[ft];
      return typeof p == "function" ? p : null;
    }
    var G = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function nt(l) {
      {
        for (var p = arguments.length, b = new Array(p > 1 ? p - 1 : 0), S = 1; S < p; S++)
          b[S - 1] = arguments[S];
        ct("error", l, b);
      }
    }
    function ct(l, p, b) {
      {
        var S = G.ReactDebugCurrentFrame, Y = S.getStackAddendum();
        Y !== "" && (p += "%s", b = b.concat([Y]));
        var X = b.map(function(V) {
          return String(V);
        });
        X.unshift("Warning: " + p), Function.prototype.apply.call(console[l], console, X);
      }
    }
    var U = !1, g = !1, Wt = !1, Ke = !1, Me = !1, Ge;
    Ge = Symbol.for("react.module.reference");
    function In(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === r || l === s || Me || l === i || l === d || l === h || Ke || l === _ || U || g || Wt || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === f || l.$$typeof === o || l.$$typeof === a || l.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === Ge || l.getModuleId !== void 0));
    }
    function An(l, p, b) {
      var S = l.displayName;
      if (S)
        return S;
      var Y = p.displayName || p.name || "";
      return Y !== "" ? b + "(" + Y + ")" : b;
    }
    function ce(l) {
      return l.displayName || "Context";
    }
    function y(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && nt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case r:
          return "Fragment";
        case e:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case a:
            var p = l;
            return ce(p) + ".Consumer";
          case o:
            var b = l;
            return ce(b._context) + ".Provider";
          case c:
            return An(l, l.render, "ForwardRef");
          case f:
            var S = l.displayName || null;
            return S !== null ? S : y(l.type) || "Memo";
          case m: {
            var Y = l, X = Y._payload, V = Y._init;
            try {
              return y(V(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var v = Object.assign, rt = 0, Ht, Ne, Ce, vt, Bn, tr, er;
    function nr() {
    }
    nr.__reactDisabledLog = !0;
    function Xr() {
      {
        if (rt === 0) {
          Ht = console.log, Ne = console.info, Ce = console.warn, vt = console.error, Bn = console.group, tr = console.groupCollapsed, er = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: nr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        rt++;
      }
    }
    function Qr() {
      {
        if (rt--, rt === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: v({}, l, {
              value: Ht
            }),
            info: v({}, l, {
              value: Ne
            }),
            warn: v({}, l, {
              value: Ce
            }),
            error: v({}, l, {
              value: vt
            }),
            group: v({}, l, {
              value: Bn
            }),
            groupCollapsed: v({}, l, {
              value: tr
            }),
            groupEnd: v({}, l, {
              value: er
            })
          });
        }
        rt < 0 && nt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var On = G.ReactCurrentDispatcher, Fn;
    function Ze(l, p, b) {
      {
        if (Fn === void 0)
          try {
            throw Error();
          } catch (Y) {
            var S = Y.stack.trim().match(/\n( *(at )?)/);
            Fn = S && S[1] || "";
          }
        return `
` + Fn + l;
      }
    }
    var Dn = !1, Xe;
    {
      var ti = typeof WeakMap == "function" ? WeakMap : Map;
      Xe = new ti();
    }
    function w(l, p) {
      if (!l || Dn)
        return "";
      {
        var b = Xe.get(l);
        if (b !== void 0)
          return b;
      }
      var S;
      Dn = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = On.current, On.current = null, Xr();
      try {
        if (p) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (wt) {
              S = wt;
            }
            Reflect.construct(l, [], V);
          } else {
            try {
              V.call();
            } catch (wt) {
              S = wt;
            }
            l.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (wt) {
            S = wt;
          }
          l();
        }
      } catch (wt) {
        if (wt && S && typeof wt.stack == "string") {
          for (var L = wt.stack.split(`
`), mt = S.stack.split(`
`), at = L.length - 1, lt = mt.length - 1; at >= 1 && lt >= 0 && L[at] !== mt[lt]; )
            lt--;
          for (; at >= 1 && lt >= 0; at--, lt--)
            if (L[at] !== mt[lt]) {
              if (at !== 1 || lt !== 1)
                do
                  if (at--, lt--, lt < 0 || L[at] !== mt[lt]) {
                    var Ct = `
` + L[at].replace(" at new ", " at ");
                    return l.displayName && Ct.includes("<anonymous>") && (Ct = Ct.replace("<anonymous>", l.displayName)), typeof l == "function" && Xe.set(l, Ct), Ct;
                  }
                while (at >= 1 && lt >= 0);
              break;
            }
        }
      } finally {
        Dn = !1, On.current = X, Qr(), Error.prepareStackTrace = Y;
      }
      var en = l ? l.displayName || l.name : "", Ue = en ? Ze(en) : "";
      return typeof l == "function" && Xe.set(l, Ue), Ue;
    }
    function Tn(l, p, b) {
      return w(l, !1);
    }
    function Qe(l) {
      var p = l.prototype;
      return !!(p && p.isReactComponent);
    }
    function Le(l, p, b) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return w(l, Qe(l));
      if (typeof l == "string")
        return Ze(l);
      switch (l) {
        case d:
          return Ze("Suspense");
        case h:
          return Ze("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case c:
            return Tn(l.render);
          case f:
            return Le(l.type, p, b);
          case m: {
            var S = l, Y = S._payload, X = S._init;
            try {
              return Le(X(Y), p, b);
            } catch {
            }
          }
        }
      return "";
    }
    var En = Object.prototype.hasOwnProperty, cs = {}, ls = G.ReactDebugCurrentFrame;
    function rr(l) {
      if (l) {
        var p = l._owner, b = Le(l.type, l._source, p ? p.type : null);
        ls.setExtraStackFrame(b);
      } else
        ls.setExtraStackFrame(null);
    }
    function Za(l, p, b, S, Y) {
      {
        var X = Function.call.bind(En);
        for (var V in l)
          if (X(l, V)) {
            var L = void 0;
            try {
              if (typeof l[V] != "function") {
                var mt = Error((S || "React class") + ": " + b + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw mt.name = "Invariant Violation", mt;
              }
              L = l[V](p, V, S, b, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (at) {
              L = at;
            }
            L && !(L instanceof Error) && (rr(Y), nt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", b, V, typeof L), rr(null)), L instanceof Error && !(L.message in cs) && (cs[L.message] = !0, rr(Y), nt("Failed %s type: %s", b, L.message), rr(null));
          }
      }
    }
    var Xa = Array.isArray;
    function ei(l) {
      return Xa(l);
    }
    function Qa(l) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, b = p && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return b;
      }
    }
    function tc(l) {
      try {
        return us(l), !1;
      } catch {
        return !0;
      }
    }
    function us(l) {
      return "" + l;
    }
    function ds(l) {
      if (tc(l))
        return nt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qa(l)), us(l);
    }
    var hs = G.ReactCurrentOwner, ec = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fs, ps;
    function nc(l) {
      if (En.call(l, "ref")) {
        var p = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function rc(l) {
      if (En.call(l, "key")) {
        var p = Object.getOwnPropertyDescriptor(l, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function ic(l, p) {
      typeof l.ref == "string" && hs.current;
    }
    function sc(l, p) {
      {
        var b = function() {
          fs || (fs = !0, nt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: b,
          configurable: !0
        });
      }
    }
    function oc(l, p) {
      {
        var b = function() {
          ps || (ps = !0, nt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        b.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: b,
          configurable: !0
        });
      }
    }
    var ac = function(l, p, b, S, Y, X, V) {
      var L = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: l,
        key: p,
        ref: b,
        props: V,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return L._store = {}, Object.defineProperty(L._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(L, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(L, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(L.props), Object.freeze(L)), L;
    };
    function cc(l, p, b, S, Y) {
      {
        var X, V = {}, L = null, mt = null;
        b !== void 0 && (ds(b), L = "" + b), rc(p) && (ds(p.key), L = "" + p.key), nc(p) && (mt = p.ref, ic(p, Y));
        for (X in p)
          En.call(p, X) && !ec.hasOwnProperty(X) && (V[X] = p[X]);
        if (l && l.defaultProps) {
          var at = l.defaultProps;
          for (X in at)
            V[X] === void 0 && (V[X] = at[X]);
        }
        if (L || mt) {
          var lt = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          L && sc(V, lt), mt && oc(V, lt);
        }
        return ac(l, L, mt, Y, S, hs.current, V);
      }
    }
    var ni = G.ReactCurrentOwner, ys = G.ReactDebugCurrentFrame;
    function tn(l) {
      if (l) {
        var p = l._owner, b = Le(l.type, l._source, p ? p.type : null);
        ys.setExtraStackFrame(b);
      } else
        ys.setExtraStackFrame(null);
    }
    var ri;
    ri = !1;
    function ii(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }
    function ms() {
      {
        if (ni.current) {
          var l = y(ni.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function lc(l) {
      return "";
    }
    var gs = {};
    function uc(l) {
      {
        var p = ms();
        if (!p) {
          var b = typeof l == "string" ? l : l.displayName || l.name;
          b && (p = `

Check the top-level render call using <` + b + ">.");
        }
        return p;
      }
    }
    function bs(l, p) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var b = uc(p);
        if (gs[b])
          return;
        gs[b] = !0;
        var S = "";
        l && l._owner && l._owner !== ni.current && (S = " It was passed a child from " + y(l._owner.type) + "."), tn(l), nt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', b, S), tn(null);
      }
    }
    function _s(l, p) {
      {
        if (typeof l != "object")
          return;
        if (ei(l))
          for (var b = 0; b < l.length; b++) {
            var S = l[b];
            ii(S) && bs(S, p);
          }
        else if (ii(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var Y = pt(l);
          if (typeof Y == "function" && Y !== l.entries)
            for (var X = Y.call(l), V; !(V = X.next()).done; )
              ii(V.value) && bs(V.value, p);
        }
      }
    }
    function dc(l) {
      {
        var p = l.type;
        if (p == null || typeof p == "string")
          return;
        var b;
        if (typeof p == "function")
          b = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === f))
          b = p.propTypes;
        else
          return;
        if (b) {
          var S = y(p);
          Za(b, l.props, "prop", S, l);
        } else if (p.PropTypes !== void 0 && !ri) {
          ri = !0;
          var Y = y(p);
          nt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && nt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hc(l) {
      {
        for (var p = Object.keys(l.props), b = 0; b < p.length; b++) {
          var S = p[b];
          if (S !== "children" && S !== "key") {
            tn(l), nt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), tn(null);
            break;
          }
        }
        l.ref !== null && (tn(l), nt("Invalid attribute `ref` supplied to `React.Fragment`."), tn(null));
      }
    }
    var vs = {};
    function ws(l, p, b, S, Y, X) {
      {
        var V = In(l);
        if (!V) {
          var L = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var mt = lc();
          mt ? L += mt : L += ms();
          var at;
          l === null ? at = "null" : ei(l) ? at = "array" : l !== void 0 && l.$$typeof === t ? (at = "<" + (y(l.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : at = typeof l, nt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", at, L);
        }
        var lt = cc(l, p, b, Y, X);
        if (lt == null)
          return lt;
        if (V) {
          var Ct = p.children;
          if (Ct !== void 0)
            if (S)
              if (ei(Ct)) {
                for (var en = 0; en < Ct.length; en++)
                  _s(Ct[en], l);
                Object.freeze && Object.freeze(Ct);
              } else
                nt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _s(Ct, l);
        }
        if (En.call(p, "key")) {
          var Ue = y(l), wt = Object.keys(p).filter(function(bc) {
            return bc !== "key";
          }), si = wt.length > 0 ? "{key: someKey, " + wt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vs[Ue + si]) {
            var gc = wt.length > 0 ? "{" + wt.join(": ..., ") + ": ...}" : "{}";
            nt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, si, Ue, gc, Ue), vs[Ue + si] = !0;
          }
        }
        return l === r ? hc(lt) : dc(lt), lt;
      }
    }
    function fc(l, p, b) {
      return ws(l, p, b, !0);
    }
    function pc(l, p, b) {
      return ws(l, p, b, !1);
    }
    var yc = pc, mc = fc;
    Mn.Fragment = r, Mn.jsx = yc, Mn.jsxs = mc;
  }()), Mn;
}
process.env.NODE_ENV === "production" ? pi.exports = wc() : pi.exports = Sc();
var P = pi.exports, yi, ir = _c;
if (process.env.NODE_ENV === "production")
  yi = ir.createRoot, ir.hydrateRoot;
else {
  var Bs = ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  yi = function(n, t) {
    Bs.usingClientEntryPoint = !0;
    try {
      return ir.createRoot(n, t);
    } finally {
      Bs.usingClientEntryPoint = !1;
    }
  };
}
var mi = { exports: {} }, W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Os;
function Ic() {
  if (Os) return W;
  Os = 1;
  var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, _ = n ? Symbol.for("react.memo") : 60115, C = n ? Symbol.for("react.lazy") : 60116, ft = n ? Symbol.for("react.block") : 60121, pt = n ? Symbol.for("react.fundamental") : 60117, G = n ? Symbol.for("react.responder") : 60118, nt = n ? Symbol.for("react.scope") : 60119;
  function ct(g) {
    if (typeof g == "object" && g !== null) {
      var Wt = g.$$typeof;
      switch (Wt) {
        case t:
          switch (g = g.type, g) {
            case c:
            case d:
            case r:
            case s:
            case i:
            case f:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case a:
                case h:
                case C:
                case _:
                case o:
                  return g;
                default:
                  return Wt;
              }
          }
        case e:
          return Wt;
      }
    }
  }
  function U(g) {
    return ct(g) === d;
  }
  return W.AsyncMode = c, W.ConcurrentMode = d, W.ContextConsumer = a, W.ContextProvider = o, W.Element = t, W.ForwardRef = h, W.Fragment = r, W.Lazy = C, W.Memo = _, W.Portal = e, W.Profiler = s, W.StrictMode = i, W.Suspense = f, W.isAsyncMode = function(g) {
    return U(g) || ct(g) === c;
  }, W.isConcurrentMode = U, W.isContextConsumer = function(g) {
    return ct(g) === a;
  }, W.isContextProvider = function(g) {
    return ct(g) === o;
  }, W.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, W.isForwardRef = function(g) {
    return ct(g) === h;
  }, W.isFragment = function(g) {
    return ct(g) === r;
  }, W.isLazy = function(g) {
    return ct(g) === C;
  }, W.isMemo = function(g) {
    return ct(g) === _;
  }, W.isPortal = function(g) {
    return ct(g) === e;
  }, W.isProfiler = function(g) {
    return ct(g) === s;
  }, W.isStrictMode = function(g) {
    return ct(g) === i;
  }, W.isSuspense = function(g) {
    return ct(g) === f;
  }, W.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === d || g === s || g === i || g === f || g === m || typeof g == "object" && g !== null && (g.$$typeof === C || g.$$typeof === _ || g.$$typeof === o || g.$$typeof === a || g.$$typeof === h || g.$$typeof === pt || g.$$typeof === G || g.$$typeof === nt || g.$$typeof === ft);
  }, W.typeOf = ct, W;
}
var H = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fs;
function Ac() {
  return Fs || (Fs = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, t = n ? Symbol.for("react.element") : 60103, e = n ? Symbol.for("react.portal") : 60106, r = n ? Symbol.for("react.fragment") : 60107, i = n ? Symbol.for("react.strict_mode") : 60108, s = n ? Symbol.for("react.profiler") : 60114, o = n ? Symbol.for("react.provider") : 60109, a = n ? Symbol.for("react.context") : 60110, c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111, h = n ? Symbol.for("react.forward_ref") : 60112, f = n ? Symbol.for("react.suspense") : 60113, m = n ? Symbol.for("react.suspense_list") : 60120, _ = n ? Symbol.for("react.memo") : 60115, C = n ? Symbol.for("react.lazy") : 60116, ft = n ? Symbol.for("react.block") : 60121, pt = n ? Symbol.for("react.fundamental") : 60117, G = n ? Symbol.for("react.responder") : 60118, nt = n ? Symbol.for("react.scope") : 60119;
    function ct(w) {
      return typeof w == "string" || typeof w == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      w === r || w === d || w === s || w === i || w === f || w === m || typeof w == "object" && w !== null && (w.$$typeof === C || w.$$typeof === _ || w.$$typeof === o || w.$$typeof === a || w.$$typeof === h || w.$$typeof === pt || w.$$typeof === G || w.$$typeof === nt || w.$$typeof === ft);
    }
    function U(w) {
      if (typeof w == "object" && w !== null) {
        var Tn = w.$$typeof;
        switch (Tn) {
          case t:
            var Qe = w.type;
            switch (Qe) {
              case c:
              case d:
              case r:
              case s:
              case i:
              case f:
                return Qe;
              default:
                var Le = Qe && Qe.$$typeof;
                switch (Le) {
                  case a:
                  case h:
                  case C:
                  case _:
                  case o:
                    return Le;
                  default:
                    return Tn;
                }
            }
          case e:
            return Tn;
        }
      }
    }
    var g = c, Wt = d, Ke = a, Me = o, Ge = t, In = h, An = r, ce = C, y = _, v = e, rt = s, Ht = i, Ne = f, Ce = !1;
    function vt(w) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Bn(w) || U(w) === c;
    }
    function Bn(w) {
      return U(w) === d;
    }
    function tr(w) {
      return U(w) === a;
    }
    function er(w) {
      return U(w) === o;
    }
    function nr(w) {
      return typeof w == "object" && w !== null && w.$$typeof === t;
    }
    function Xr(w) {
      return U(w) === h;
    }
    function Qr(w) {
      return U(w) === r;
    }
    function On(w) {
      return U(w) === C;
    }
    function Fn(w) {
      return U(w) === _;
    }
    function Ze(w) {
      return U(w) === e;
    }
    function Dn(w) {
      return U(w) === s;
    }
    function Xe(w) {
      return U(w) === i;
    }
    function ti(w) {
      return U(w) === f;
    }
    H.AsyncMode = g, H.ConcurrentMode = Wt, H.ContextConsumer = Ke, H.ContextProvider = Me, H.Element = Ge, H.ForwardRef = In, H.Fragment = An, H.Lazy = ce, H.Memo = y, H.Portal = v, H.Profiler = rt, H.StrictMode = Ht, H.Suspense = Ne, H.isAsyncMode = vt, H.isConcurrentMode = Bn, H.isContextConsumer = tr, H.isContextProvider = er, H.isElement = nr, H.isForwardRef = Xr, H.isFragment = Qr, H.isLazy = On, H.isMemo = Fn, H.isPortal = Ze, H.isProfiler = Dn, H.isStrictMode = Xe, H.isSuspense = ti, H.isValidElementType = ct, H.typeOf = U;
  }()), H;
}
process.env.NODE_ENV === "production" ? mi.exports = Ic() : mi.exports = Ac();
var Bc = mi.exports, Ri = Bc, Oc = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Fc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Dc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, no = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, xi = {};
xi[Ri.ForwardRef] = Dc;
xi[Ri.Memo] = no;
function Ds(n) {
  return Ri.isMemo(n) ? no : xi[n.$$typeof] || Oc;
}
var Tc = Object.defineProperty, Ec = Object.getOwnPropertyNames, Ts = Object.getOwnPropertySymbols, Rc = Object.getOwnPropertyDescriptor, xc = Object.getPrototypeOf, Es = Object.prototype;
function ro(n, t, e) {
  if (typeof t != "string") {
    if (Es) {
      var r = xc(t);
      r && r !== Es && ro(n, r, e);
    }
    var i = Ec(t);
    Ts && (i = i.concat(Ts(t)));
    for (var s = Ds(n), o = Ds(t), a = 0; a < i.length; ++a) {
      var c = i[a];
      if (!Fc[c] && !(e && e[c]) && !(o && o[c]) && !(s && s[c])) {
        var d = Rc(t, c);
        try {
          Tc(n, c, d);
        } catch {
        }
      }
    }
  }
  return n;
}
var Mc = ro;
const Nc = /* @__PURE__ */ vc(Mc);
function I(n, t, e, r) {
  function i(s) {
    return s instanceof e ? s : new e(function(o) {
      o(s);
    });
  }
  return new (e || (e = Promise))(function(s, o) {
    function a(h) {
      try {
        d(r.next(h));
      } catch (f) {
        o(f);
      }
    }
    function c(h) {
      try {
        d(r.throw(h));
      } catch (f) {
        o(f);
      }
    }
    function d(h) {
      h.done ? s(h.value) : i(h.value).then(a, c);
    }
    d((r = r.apply(n, t || [])).next());
  });
}
function Rs(n) {
  var t = typeof Symbol == "function" && Symbol.iterator, e = t && n[t], r = 0;
  if (e) return e.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function M(n) {
  return this instanceof M ? (this.v = n, this) : new M(n);
}
function re(n, t, e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = e.apply(n, t || []), i, s = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), a("next"), a("throw"), a("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(_) {
    return function(C) {
      return Promise.resolve(C).then(_, f);
    };
  }
  function a(_, C) {
    r[_] && (i[_] = function(ft) {
      return new Promise(function(pt, G) {
        s.push([_, ft, pt, G]) > 1 || c(_, ft);
      });
    }, C && (i[_] = C(i[_])));
  }
  function c(_, C) {
    try {
      d(r[_](C));
    } catch (ft) {
      m(s[0][3], ft);
    }
  }
  function d(_) {
    _.value instanceof M ? Promise.resolve(_.value.v).then(h, f) : m(s[0][2], _);
  }
  function h(_) {
    c("next", _);
  }
  function f(_) {
    c("throw", _);
  }
  function m(_, C) {
    _(C), s.shift(), s.length && c(s[0][0], s[0][1]);
  }
}
function hr(n) {
  var t, e;
  return t = {}, r("next"), r("throw", function(i) {
    throw i;
  }), r("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function r(i, s) {
    t[i] = n[i] ? function(o) {
      return (e = !e) ? { value: M(n[i](o)), done: !1 } : s ? s(o) : o;
    } : s;
  }
}
function We(n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = n[Symbol.asyncIterator], e;
  return t ? t.call(n) : (n = typeof Rs == "function" ? Rs(n) : n[Symbol.iterator](), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
    return this;
  }, e);
  function r(s) {
    e[s] = n[s] && function(o) {
      return new Promise(function(a, c) {
        o = n[s](o), i(a, c, o.done, o.value);
      });
    };
  }
  function i(s, o, a, c) {
    Promise.resolve(c).then(function(d) {
      s({ value: d, done: a });
    }, o);
  }
}
const Cc = new TextDecoder("utf-8"), gi = (n) => Cc.decode(n), Lc = new TextEncoder(), Mi = (n) => Lc.encode(n), [Jd, Uc] = (() => {
  const n = () => {
    throw new Error("BigInt is not available in this environment");
  };
  function t() {
    throw n();
  }
  return t.asIntN = () => {
    throw n();
  }, t.asUintN = () => {
    throw n();
  }, typeof BigInt < "u" ? [BigInt, !0] : [t, !1];
})(), [Jn, qd] = (() => {
  const n = () => {
    throw new Error("BigInt64Array is not available in this environment");
  };
  class t {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw n();
    }
    static from() {
      throw n();
    }
    constructor() {
      throw n();
    }
  }
  return typeof BigInt64Array < "u" ? [BigInt64Array, !0] : [t, !1];
})(), [qn, Kd] = (() => {
  const n = () => {
    throw new Error("BigUint64Array is not available in this environment");
  };
  class t {
    static get BYTES_PER_ELEMENT() {
      return 8;
    }
    static of() {
      throw n();
    }
    static from() {
      throw n();
    }
    constructor() {
      throw n();
    }
  }
  return typeof BigUint64Array < "u" ? [BigUint64Array, !0] : [t, !1];
})(), Pc = (n) => typeof n == "number", io = (n) => typeof n == "boolean", dt = (n) => typeof n == "function", Ft = (n) => n != null && Object(n) === n, Ae = (n) => Ft(n) && dt(n.then), Kn = (n) => Ft(n) && dt(n[Symbol.iterator]), wn = (n) => Ft(n) && dt(n[Symbol.asyncIterator]), bi = (n) => Ft(n) && Ft(n.schema), so = (n) => Ft(n) && "done" in n && "value" in n, oo = (n) => Ft(n) && dt(n.stat) && Pc(n.fd), ao = (n) => Ft(n) && Ni(n.body), qr = (n) => "_getDOMStream" in n && "_getNodeStream" in n, kc = (n) => Ft(n) && dt(n.abort) && dt(n.getWriter) && !qr(n), Ni = (n) => Ft(n) && dt(n.cancel) && dt(n.getReader) && !qr(n), jc = (n) => Ft(n) && dt(n.end) && dt(n.write) && io(n.writable) && !qr(n), co = (n) => Ft(n) && dt(n.read) && dt(n.pipe) && io(n.readable) && !qr(n), Vc = (n) => Ft(n) && dt(n.clear) && dt(n.bytes) && dt(n.position) && dt(n.setPosition) && dt(n.capacity) && dt(n.getBufferIdentifier) && dt(n.createLong), Ci = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : ArrayBuffer;
function $c(n) {
  const t = n[0] ? [n[0]] : [];
  let e, r, i, s;
  for (let o, a, c = 0, d = 0, h = n.length; ++c < h; ) {
    if (o = t[d], a = n[c], !o || !a || o.buffer !== a.buffer || a.byteOffset < o.byteOffset) {
      a && (t[++d] = a);
      continue;
    }
    if ({ byteOffset: e, byteLength: i } = o, { byteOffset: r, byteLength: s } = a, e + i < r || r + s < e) {
      a && (t[++d] = a);
      continue;
    }
    t[d] = new Uint8Array(o.buffer, e, r - e + s);
  }
  return t;
}
function xs(n, t, e = 0, r = t.byteLength) {
  const i = n.byteLength, s = new Uint8Array(n.buffer, n.byteOffset, i), o = new Uint8Array(t.buffer, t.byteOffset, Math.min(r, i));
  return s.set(o, e), n;
}
function se(n, t) {
  const e = $c(n), r = e.reduce((h, f) => h + f.byteLength, 0);
  let i, s, o, a = 0, c = -1;
  const d = Math.min(t || Number.POSITIVE_INFINITY, r);
  for (const h = e.length; ++c < h; ) {
    if (i = e[c], s = i.subarray(0, Math.min(i.length, d - a)), d <= a + s.length) {
      s.length < i.length ? e[c] = i.subarray(s.length) : s.length === i.length && c++, o ? xs(o, s, a) : o = s;
      break;
    }
    xs(o || (o = new Uint8Array(d)), s, a), a += s.length;
  }
  return [o || new Uint8Array(0), e.slice(c), r - (o ? o.byteLength : 0)];
}
function Q(n, t) {
  let e = so(t) ? t.value : t;
  return e instanceof n ? n === Uint8Array ? new n(e.buffer, e.byteOffset, e.byteLength) : e : e ? (typeof e == "string" && (e = Mi(e)), e instanceof ArrayBuffer ? new n(e) : e instanceof Ci ? new n(e) : Vc(e) ? Q(n, e.bytes()) : ArrayBuffer.isView(e) ? e.byteLength <= 0 ? new n(0) : new n(e.buffer, e.byteOffset, e.byteLength / n.BYTES_PER_ELEMENT) : n.from(e)) : new n(0);
}
const Nn = (n) => Q(Int32Array, n), $ = (n) => Q(Uint8Array, n), _i = (n) => (n.next(), n);
function* zc(n, t) {
  const e = function* (i) {
    yield i;
  }, r = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Ci ? e(t) : Kn(t) ? t : e(t);
  return yield* _i(function* (i) {
    let s = null;
    do
      s = i.next(yield Q(n, s));
    while (!s.done);
  }(r[Symbol.iterator]())), new n();
}
const Yc = (n) => zc(Uint8Array, n);
function lo(n, t) {
  return re(this, arguments, function* () {
    if (Ae(t))
      return yield M(yield M(yield* hr(We(lo(n, yield M(t))))));
    const r = function(o) {
      return re(this, arguments, function* () {
        yield yield M(yield M(o));
      });
    }, i = function(o) {
      return re(this, arguments, function* () {
        yield M(yield* hr(We(_i(function* (a) {
          let c = null;
          do
            c = a.next(yield c == null ? void 0 : c.value);
          while (!c.done);
        }(o[Symbol.iterator]())))));
      });
    }, s = typeof t == "string" || ArrayBuffer.isView(t) || t instanceof ArrayBuffer || t instanceof Ci ? r(t) : Kn(t) ? i(t) : wn(t) ? t : r(t);
    return yield M(
      // otherwise if AsyncIterable, use it
      yield* hr(We(_i(function(o) {
        return re(this, arguments, function* () {
          let a = null;
          do
            a = yield M(o.next(yield yield M(Q(n, a))));
          while (!a.done);
        });
      }(s[Symbol.asyncIterator]()))))
    ), yield M(new n());
  });
}
const Wc = (n) => lo(Uint8Array, n);
function Li(n, t, e) {
  if (n !== 0) {
    e = e.slice(0, t + 1);
    for (let r = -1; ++r <= t; )
      e[r] += n;
  }
  return e;
}
function Hc(n, t) {
  let e = 0;
  const r = n.length;
  if (r !== t.length)
    return !1;
  if (r > 0)
    do
      if (n[e] !== t[e])
        return !1;
    while (++e < r);
  return !0;
}
const Ut = {
  fromIterable(n) {
    return sr(Jc(n));
  },
  fromAsyncIterable(n) {
    return sr(qc(n));
  },
  fromDOMStream(n) {
    return sr(Kc(n));
  },
  fromNodeStream(n) {
    return sr(Zc(n));
  },
  // @ts-ignore
  toDOMStream(n, t) {
    throw new Error('"toDOMStream" not available in this environment');
  },
  // @ts-ignore
  toNodeStream(n, t) {
    throw new Error('"toNodeStream" not available in this environment');
  }
}, sr = (n) => (n.next(), n);
function* Jc(n) {
  let t, e = !1, r = [], i, s, o, a = 0;
  function c() {
    return s === "peek" ? se(r, o)[0] : ([i, r, a] = se(r, o), i);
  }
  ({ cmd: s, size: o } = yield null);
  const d = Yc(n)[Symbol.iterator]();
  try {
    do
      if ({ done: t, value: i } = Number.isNaN(o - a) ? d.next() : d.next(o - a), !t && i.byteLength > 0 && (r.push(i), a += i.byteLength), t || o <= a)
        do
          ({ cmd: s, size: o } = yield c());
        while (o < a);
    while (!t);
  } catch (h) {
    (e = !0) && typeof d.throw == "function" && d.throw(h);
  } finally {
    e === !1 && typeof d.return == "function" && d.return(null);
  }
  return null;
}
function qc(n) {
  return re(this, arguments, function* () {
    let e, r = !1, i = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? se(i, a)[0] : ([s, i, c] = se(i, a), s);
    }
    ({ cmd: o, size: a } = yield yield M(null));
    const h = Wc(n)[Symbol.asyncIterator]();
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield M(h.next()) : yield M(h.next(a - c)), !e && s.byteLength > 0 && (i.push(s), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield M(d()));
          while (a < c);
      while (!e);
    } catch (f) {
      (r = !0) && typeof h.throw == "function" && (yield M(h.throw(f)));
    } finally {
      r === !1 && typeof h.return == "function" && (yield M(h.return(new Uint8Array(0))));
    }
    return yield M(null);
  });
}
function Kc(n) {
  return re(this, arguments, function* () {
    let e = !1, r = !1, i = [], s, o, a, c = 0;
    function d() {
      return o === "peek" ? se(i, a)[0] : ([s, i, c] = se(i, a), s);
    }
    ({ cmd: o, size: a } = yield yield M(null));
    const h = new Gc(n);
    try {
      do
        if ({ done: e, value: s } = Number.isNaN(a - c) ? yield M(h.read()) : yield M(h.read(a - c)), !e && s.byteLength > 0 && (i.push($(s)), c += s.byteLength), e || a <= c)
          do
            ({ cmd: o, size: a } = yield yield M(d()));
          while (a < c);
      while (!e);
    } catch (f) {
      (r = !0) && (yield M(h.cancel(f)));
    } finally {
      r === !1 ? yield M(h.cancel()) : n.locked && h.releaseLock();
    }
    return yield M(null);
  });
}
class Gc {
  constructor(t) {
    this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch(() => {
    });
  }
  get closed() {
    return this.reader ? this.reader.closed.catch(() => {
    }) : Promise.resolve();
  }
  releaseLock() {
    this.reader && this.reader.releaseLock(), this.reader = null;
  }
  cancel(t) {
    return I(this, void 0, void 0, function* () {
      const { reader: e, source: r } = this;
      e && (yield e.cancel(t).catch(() => {
      })), r && r.locked && this.releaseLock();
    });
  }
  read(t) {
    return I(this, void 0, void 0, function* () {
      if (t === 0)
        return { done: this.reader == null, value: new Uint8Array(0) };
      const e = yield this.reader.read();
      return !e.done && (e.value = $(e)), e;
    });
  }
}
const ai = (n, t) => {
  const e = (i) => r([t, i]);
  let r;
  return [t, e, new Promise((i) => (r = i) && n.once(t, e))];
};
function Zc(n) {
  return re(this, arguments, function* () {
    const e = [];
    let r = "error", i = !1, s = null, o, a, c = 0, d = [], h;
    function f() {
      return o === "peek" ? se(d, a)[0] : ([h, d, c] = se(d, a), h);
    }
    if ({ cmd: o, size: a } = yield yield M(null), n.isTTY)
      return yield yield M(new Uint8Array(0)), yield M(null);
    try {
      e[0] = ai(n, "end"), e[1] = ai(n, "error");
      do {
        if (e[2] = ai(n, "readable"), [r, s] = yield M(Promise.race(e.map((_) => _[2]))), r === "error")
          break;
        if ((i = r === "end") || (Number.isFinite(a - c) ? (h = $(n.read(a - c)), h.byteLength < a - c && (h = $(n.read()))) : h = $(n.read()), h.byteLength > 0 && (d.push(h), c += h.byteLength)), i || a <= c)
          do
            ({ cmd: o, size: a } = yield yield M(f()));
          while (a < c);
      } while (!i);
    } finally {
      yield M(m(e, r === "error" ? s : null));
    }
    return yield M(null);
    function m(_, C) {
      return h = d = null, new Promise((ft, pt) => {
        for (const [G, nt] of _)
          n.off(G, nt);
        try {
          const G = n.destroy;
          G && G.call(n, C), C = void 0;
        } catch (G) {
          C = G || C;
        } finally {
          C != null ? pt(C) : ft();
        }
      });
    }
  });
}
var xt;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(xt || (xt = {}));
var Mt;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(Mt || (Mt = {}));
var Ot;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(Ot || (Ot = {}));
var ge;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(ge || (ge = {}));
var z;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(z || (z = {}));
var Be;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Be || (Be = {}));
var J;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(J || (J = {}));
var u;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.Float = 3] = "Float", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct = 13] = "Struct", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Dictionary = -1] = "Dictionary", n[n.Int8 = -2] = "Int8", n[n.Int16 = -3] = "Int16", n[n.Int32 = -4] = "Int32", n[n.Int64 = -5] = "Int64", n[n.Uint8 = -6] = "Uint8", n[n.Uint16 = -7] = "Uint16", n[n.Uint32 = -8] = "Uint32", n[n.Uint64 = -9] = "Uint64", n[n.Float16 = -10] = "Float16", n[n.Float32 = -11] = "Float32", n[n.Float64 = -12] = "Float64", n[n.DateDay = -13] = "DateDay", n[n.DateMillisecond = -14] = "DateMillisecond", n[n.TimestampSecond = -15] = "TimestampSecond", n[n.TimestampMillisecond = -16] = "TimestampMillisecond", n[n.TimestampMicrosecond = -17] = "TimestampMicrosecond", n[n.TimestampNanosecond = -18] = "TimestampNanosecond", n[n.TimeSecond = -19] = "TimeSecond", n[n.TimeMillisecond = -20] = "TimeMillisecond", n[n.TimeMicrosecond = -21] = "TimeMicrosecond", n[n.TimeNanosecond = -22] = "TimeNanosecond", n[n.DenseUnion = -23] = "DenseUnion", n[n.SparseUnion = -24] = "SparseUnion", n[n.IntervalDayTime = -25] = "IntervalDayTime", n[n.IntervalYearMonth = -26] = "IntervalYearMonth";
})(u || (u = {}));
var ue;
(function(n) {
  n[n.OFFSET = 0] = "OFFSET", n[n.DATA = 1] = "DATA", n[n.VALIDITY = 2] = "VALIDITY", n[n.TYPE = 3] = "TYPE";
})(ue || (ue = {}));
const Xc = void 0;
function jn(n) {
  if (n === null)
    return "null";
  if (n === Xc)
    return "undefined";
  switch (typeof n) {
    case "number":
      return `${n}`;
    case "bigint":
      return `${n}`;
    case "string":
      return `"${n}"`;
  }
  return typeof n[Symbol.toPrimitive] == "function" ? n[Symbol.toPrimitive]("string") : ArrayBuffer.isView(n) ? n instanceof Jn || n instanceof qn ? `[${[...n].map((t) => jn(t))}]` : `[${n}]` : ArrayBuffer.isView(n) ? `[${n}]` : JSON.stringify(n, (t, e) => typeof e == "bigint" ? `${e}` : e);
}
const Qc = Symbol.for("isArrowBigNum");
function Yt(n, ...t) {
  return t.length === 0 ? Object.setPrototypeOf(Q(this.TypedArray, n), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(n, ...t), this.constructor.prototype);
}
Yt.prototype[Qc] = !0;
Yt.prototype.toJSON = function() {
  return `"${He(this)}"`;
};
Yt.prototype.valueOf = function() {
  return uo(this);
};
Yt.prototype.toString = function() {
  return He(this);
};
Yt.prototype[Symbol.toPrimitive] = function(n = "default") {
  switch (n) {
    case "number":
      return uo(this);
    case "string":
      return He(this);
    case "default":
      return vi(this);
  }
  return He(this);
};
function ln(...n) {
  return Yt.apply(this, n);
}
function un(...n) {
  return Yt.apply(this, n);
}
function Vn(...n) {
  return Yt.apply(this, n);
}
Object.setPrototypeOf(ln.prototype, Object.create(Int32Array.prototype));
Object.setPrototypeOf(un.prototype, Object.create(Uint32Array.prototype));
Object.setPrototypeOf(Vn.prototype, Object.create(Uint32Array.prototype));
Object.assign(ln.prototype, Yt.prototype, { constructor: ln, signed: !0, TypedArray: Int32Array, BigIntArray: Jn });
Object.assign(un.prototype, Yt.prototype, { constructor: un, signed: !1, TypedArray: Uint32Array, BigIntArray: qn });
Object.assign(Vn.prototype, Yt.prototype, { constructor: Vn, signed: !0, TypedArray: Uint32Array, BigIntArray: qn });
function uo(n) {
  const { buffer: t, byteOffset: e, length: r, signed: i } = n, s = new qn(t, e, r), o = i && s[s.length - 1] & BigInt(1) << BigInt(63);
  let a = BigInt(o ? 1 : 0), c = BigInt(0);
  if (o) {
    for (const d of s)
      a += ~d * (BigInt(1) << BigInt(32) * c++);
    a *= BigInt(-1);
  } else
    for (const d of s)
      a += d * (BigInt(1) << BigInt(32) * c++);
  return a;
}
let He, vi;
Uc ? (vi = (n) => n.byteLength === 8 ? new n.BigIntArray(n.buffer, n.byteOffset, 1)[0] : ci(n), He = (n) => n.byteLength === 8 ? `${new n.BigIntArray(n.buffer, n.byteOffset, 1)[0]}` : ci(n)) : (He = ci, vi = He);
function ci(n) {
  let t = "";
  const e = new Uint32Array(2);
  let r = new Uint16Array(n.buffer, n.byteOffset, n.byteLength / 2);
  const i = new Uint32Array((r = new Uint16Array(r).reverse()).buffer);
  let s = -1;
  const o = r.length - 1;
  do {
    for (e[0] = r[s = 0]; s < o; )
      r[s++] = e[1] = e[0] / 10, e[0] = (e[0] - e[1] * 10 << 16) + r[s];
    r[s] = e[1] = e[0] / 10, e[0] = e[0] - e[1] * 10, t = `${e[0]}${t}`;
  } while (i[0] || i[1] || i[2] || i[3]);
  return t ?? "0";
}
class Ui {
  /** @nocollapse */
  static new(t, e) {
    switch (e) {
      case !0:
        return new ln(t);
      case !1:
        return new un(t);
    }
    switch (t.constructor) {
      case Int8Array:
      case Int16Array:
      case Int32Array:
      case Jn:
        return new ln(t);
    }
    return t.byteLength === 16 ? new Vn(t) : new un(t);
  }
  /** @nocollapse */
  static signed(t) {
    return new ln(t);
  }
  /** @nocollapse */
  static unsigned(t) {
    return new un(t);
  }
  /** @nocollapse */
  static decimal(t) {
    return new Vn(t);
  }
  constructor(t, e) {
    return Ui.new(t, e);
  }
}
var ho, fo, po, yo, mo, go, bo, _o, vo, wo, So, Io, Ao, Bo, Oo, Fo, Do, To, Eo;
class A {
  /** @nocollapse */
  static isNull(t) {
    return (t == null ? void 0 : t.typeId) === u.Null;
  }
  /** @nocollapse */
  static isInt(t) {
    return (t == null ? void 0 : t.typeId) === u.Int;
  }
  /** @nocollapse */
  static isFloat(t) {
    return (t == null ? void 0 : t.typeId) === u.Float;
  }
  /** @nocollapse */
  static isBinary(t) {
    return (t == null ? void 0 : t.typeId) === u.Binary;
  }
  /** @nocollapse */
  static isUtf8(t) {
    return (t == null ? void 0 : t.typeId) === u.Utf8;
  }
  /** @nocollapse */
  static isBool(t) {
    return (t == null ? void 0 : t.typeId) === u.Bool;
  }
  /** @nocollapse */
  static isDecimal(t) {
    return (t == null ? void 0 : t.typeId) === u.Decimal;
  }
  /** @nocollapse */
  static isDate(t) {
    return (t == null ? void 0 : t.typeId) === u.Date;
  }
  /** @nocollapse */
  static isTime(t) {
    return (t == null ? void 0 : t.typeId) === u.Time;
  }
  /** @nocollapse */
  static isTimestamp(t) {
    return (t == null ? void 0 : t.typeId) === u.Timestamp;
  }
  /** @nocollapse */
  static isInterval(t) {
    return (t == null ? void 0 : t.typeId) === u.Interval;
  }
  /** @nocollapse */
  static isList(t) {
    return (t == null ? void 0 : t.typeId) === u.List;
  }
  /** @nocollapse */
  static isStruct(t) {
    return (t == null ? void 0 : t.typeId) === u.Struct;
  }
  /** @nocollapse */
  static isUnion(t) {
    return (t == null ? void 0 : t.typeId) === u.Union;
  }
  /** @nocollapse */
  static isFixedSizeBinary(t) {
    return (t == null ? void 0 : t.typeId) === u.FixedSizeBinary;
  }
  /** @nocollapse */
  static isFixedSizeList(t) {
    return (t == null ? void 0 : t.typeId) === u.FixedSizeList;
  }
  /** @nocollapse */
  static isMap(t) {
    return (t == null ? void 0 : t.typeId) === u.Map;
  }
  /** @nocollapse */
  static isDictionary(t) {
    return (t == null ? void 0 : t.typeId) === u.Dictionary;
  }
  /** @nocollapse */
  static isDenseUnion(t) {
    return A.isUnion(t) && t.mode === Mt.Dense;
  }
  /** @nocollapse */
  static isSparseUnion(t) {
    return A.isUnion(t) && t.mode === Mt.Sparse;
  }
  get typeId() {
    return u.NONE;
  }
}
ho = Symbol.toStringTag;
A[ho] = ((n) => (n.children = null, n.ArrayType = Array, n[Symbol.toStringTag] = "DataType"))(A.prototype);
let Oe = class extends A {
  toString() {
    return "Null";
  }
  get typeId() {
    return u.Null;
  }
};
fo = Symbol.toStringTag;
Oe[fo] = ((n) => n[Symbol.toStringTag] = "Null")(Oe.prototype);
class Fe extends A {
  constructor(t, e) {
    super(), this.isSigned = t, this.bitWidth = e;
  }
  get typeId() {
    return u.Int;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 8:
        return this.isSigned ? Int8Array : Uint8Array;
      case 16:
        return this.isSigned ? Int16Array : Uint16Array;
      case 32:
        return this.isSigned ? Int32Array : Uint32Array;
      case 64:
        return this.isSigned ? Jn : qn;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`;
  }
}
po = Symbol.toStringTag;
Fe[po] = ((n) => (n.isSigned = null, n.bitWidth = null, n[Symbol.toStringTag] = "Int"))(Fe.prototype);
class $n extends Fe {
  constructor() {
    super(!0, 32);
  }
  get ArrayType() {
    return Int32Array;
  }
}
Object.defineProperty($n.prototype, "ArrayType", { value: Int32Array });
class zn extends A {
  constructor(t) {
    super(), this.precision = t;
  }
  get typeId() {
    return u.Float;
  }
  get ArrayType() {
    switch (this.precision) {
      case Ot.HALF:
        return Uint16Array;
      case Ot.SINGLE:
        return Float32Array;
      case Ot.DOUBLE:
        return Float64Array;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
  toString() {
    return `Float${this.precision << 5 || 16}`;
  }
}
yo = Symbol.toStringTag;
zn[yo] = ((n) => (n.precision = null, n[Symbol.toStringTag] = "Float"))(zn.prototype);
let _r = class extends A {
  constructor() {
    super();
  }
  get typeId() {
    return u.Binary;
  }
  toString() {
    return "Binary";
  }
};
mo = Symbol.toStringTag;
_r[mo] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Binary"))(_r.prototype);
let vr = class extends A {
  constructor() {
    super();
  }
  get typeId() {
    return u.Utf8;
  }
  toString() {
    return "Utf8";
  }
};
go = Symbol.toStringTag;
vr[go] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Utf8"))(vr.prototype);
let wr = class extends A {
  constructor() {
    super();
  }
  get typeId() {
    return u.Bool;
  }
  toString() {
    return "Bool";
  }
};
bo = Symbol.toStringTag;
wr[bo] = ((n) => (n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "Bool"))(wr.prototype);
let Sr = class extends A {
  constructor(t, e, r = 128) {
    super(), this.scale = t, this.precision = e, this.bitWidth = r;
  }
  get typeId() {
    return u.Decimal;
  }
  toString() {
    return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`;
  }
};
_o = Symbol.toStringTag;
Sr[_o] = ((n) => (n.scale = null, n.precision = null, n.ArrayType = Uint32Array, n[Symbol.toStringTag] = "Decimal"))(Sr.prototype);
class Ir extends A {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Date;
  }
  toString() {
    return `Date${(this.unit + 1) * 32}<${ge[this.unit]}>`;
  }
}
vo = Symbol.toStringTag;
Ir[vo] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Date"))(Ir.prototype);
class Yn extends A {
  constructor(t, e) {
    super(), this.unit = t, this.bitWidth = e;
  }
  get typeId() {
    return u.Time;
  }
  toString() {
    return `Time${this.bitWidth}<${z[this.unit]}>`;
  }
  get ArrayType() {
    switch (this.bitWidth) {
      case 32:
        return Int32Array;
      case 64:
        return Jn;
    }
    throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
  }
}
wo = Symbol.toStringTag;
Yn[wo] = ((n) => (n.unit = null, n.bitWidth = null, n[Symbol.toStringTag] = "Time"))(Yn.prototype);
class Ar extends A {
  constructor(t, e) {
    super(), this.unit = t, this.timezone = e;
  }
  get typeId() {
    return u.Timestamp;
  }
  toString() {
    return `Timestamp<${z[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`;
  }
}
So = Symbol.toStringTag;
Ar[So] = ((n) => (n.unit = null, n.timezone = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Timestamp"))(Ar.prototype);
class Br extends A {
  constructor(t) {
    super(), this.unit = t;
  }
  get typeId() {
    return u.Interval;
  }
  toString() {
    return `Interval<${Be[this.unit]}>`;
  }
}
Io = Symbol.toStringTag;
Br[Io] = ((n) => (n.unit = null, n.ArrayType = Int32Array, n[Symbol.toStringTag] = "Interval"))(Br.prototype);
let Or = class extends A {
  constructor(t) {
    super(), this.children = [t];
  }
  get typeId() {
    return u.List;
  }
  toString() {
    return `List<${this.valueType}>`;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
};
Ao = Symbol.toStringTag;
Or[Ao] = ((n) => (n.children = null, n[Symbol.toStringTag] = "List"))(Or.prototype);
class bt extends A {
  constructor(t) {
    super(), this.children = t;
  }
  get typeId() {
    return u.Struct;
  }
  toString() {
    return `Struct<{${this.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
Bo = Symbol.toStringTag;
bt[Bo] = ((n) => (n.children = null, n[Symbol.toStringTag] = "Struct"))(bt.prototype);
class Fr extends A {
  constructor(t, e, r) {
    super(), this.mode = t, this.children = r, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce((i, s, o) => (i[s] = o) && i || i, /* @__PURE__ */ Object.create(null));
  }
  get typeId() {
    return u.Union;
  }
  toString() {
    return `${this[Symbol.toStringTag]}<${this.children.map((t) => `${t.type}`).join(" | ")}>`;
  }
}
Oo = Symbol.toStringTag;
Fr[Oo] = ((n) => (n.mode = null, n.typeIds = null, n.children = null, n.typeIdToChildIndex = null, n.ArrayType = Int8Array, n[Symbol.toStringTag] = "Union"))(Fr.prototype);
let Dr = class extends A {
  constructor(t) {
    super(), this.byteWidth = t;
  }
  get typeId() {
    return u.FixedSizeBinary;
  }
  toString() {
    return `FixedSizeBinary[${this.byteWidth}]`;
  }
};
Fo = Symbol.toStringTag;
Dr[Fo] = ((n) => (n.byteWidth = null, n.ArrayType = Uint8Array, n[Symbol.toStringTag] = "FixedSizeBinary"))(Dr.prototype);
let Tr = class extends A {
  constructor(t, e) {
    super(), this.listSize = t, this.children = [e];
  }
  get typeId() {
    return u.FixedSizeList;
  }
  get valueType() {
    return this.children[0].type;
  }
  get valueField() {
    return this.children[0];
  }
  get ArrayType() {
    return this.valueType.ArrayType;
  }
  toString() {
    return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
  }
};
Do = Symbol.toStringTag;
Tr[Do] = ((n) => (n.children = null, n.listSize = null, n[Symbol.toStringTag] = "FixedSizeList"))(Tr.prototype);
class Er extends A {
  constructor(t, e = !1) {
    super(), this.children = [t], this.keysSorted = e;
  }
  get typeId() {
    return u.Map;
  }
  get keyType() {
    return this.children[0].type.children[0].type;
  }
  get valueType() {
    return this.children[0].type.children[1].type;
  }
  get childType() {
    return this.children[0].type;
  }
  toString() {
    return `Map<{${this.children[0].type.children.map((t) => `${t.name}:${t.type}`).join(", ")}}>`;
  }
}
To = Symbol.toStringTag;
Er[To] = ((n) => (n.children = null, n.keysSorted = null, n[Symbol.toStringTag] = "Map_"))(Er.prototype);
const tl = /* @__PURE__ */ ((n) => () => ++n)(-1);
class pn extends A {
  constructor(t, e, r, i) {
    super(), this.indices = e, this.dictionary = t, this.isOrdered = i || !1, this.id = r == null ? tl() : typeof r == "number" ? r : r.low;
  }
  get typeId() {
    return u.Dictionary;
  }
  get children() {
    return this.dictionary.children;
  }
  get valueType() {
    return this.dictionary;
  }
  get ArrayType() {
    return this.dictionary.ArrayType;
  }
  toString() {
    return `Dictionary<${this.indices}, ${this.dictionary}>`;
  }
}
Eo = Symbol.toStringTag;
pn[Eo] = ((n) => (n.id = null, n.indices = null, n.isOrdered = null, n.dictionary = null, n[Symbol.toStringTag] = "Dictionary"))(pn.prototype);
function de(n) {
  const t = n;
  switch (n.typeId) {
    case u.Decimal:
      return n.bitWidth / 32;
    case u.Timestamp:
      return 2;
    case u.Date:
      return 1 + t.unit;
    case u.Interval:
      return 1 + t.unit;
    case u.FixedSizeList:
      return t.listSize;
    case u.FixedSizeBinary:
      return t.byteWidth;
    default:
      return 1;
  }
}
class j {
  visitMany(t, ...e) {
    return t.map((r, i) => this.visit(r, ...e.map((s) => s[i])));
  }
  visit(...t) {
    return this.getVisitFn(t[0], !1).apply(this, t);
  }
  getVisitFn(t, e = !0) {
    return el(this, t, e);
  }
  getVisitFnByTypeId(t, e = !0) {
    return rn(this, t, e);
  }
  visitNull(t, ...e) {
    return null;
  }
  visitBool(t, ...e) {
    return null;
  }
  visitInt(t, ...e) {
    return null;
  }
  visitFloat(t, ...e) {
    return null;
  }
  visitUtf8(t, ...e) {
    return null;
  }
  visitBinary(t, ...e) {
    return null;
  }
  visitFixedSizeBinary(t, ...e) {
    return null;
  }
  visitDate(t, ...e) {
    return null;
  }
  visitTimestamp(t, ...e) {
    return null;
  }
  visitTime(t, ...e) {
    return null;
  }
  visitDecimal(t, ...e) {
    return null;
  }
  visitList(t, ...e) {
    return null;
  }
  visitStruct(t, ...e) {
    return null;
  }
  visitUnion(t, ...e) {
    return null;
  }
  visitDictionary(t, ...e) {
    return null;
  }
  visitInterval(t, ...e) {
    return null;
  }
  visitFixedSizeList(t, ...e) {
    return null;
  }
  visitMap(t, ...e) {
    return null;
  }
}
function el(n, t, e = !0) {
  return typeof t == "number" ? rn(n, t, e) : typeof t == "string" && t in u ? rn(n, u[t], e) : t && t instanceof A ? rn(n, Ms(t), e) : t != null && t.type && t.type instanceof A ? rn(n, Ms(t.type), e) : rn(n, u.NONE, e);
}
function rn(n, t, e = !0) {
  let r = null;
  switch (t) {
    case u.Null:
      r = n.visitNull;
      break;
    case u.Bool:
      r = n.visitBool;
      break;
    case u.Int:
      r = n.visitInt;
      break;
    case u.Int8:
      r = n.visitInt8 || n.visitInt;
      break;
    case u.Int16:
      r = n.visitInt16 || n.visitInt;
      break;
    case u.Int32:
      r = n.visitInt32 || n.visitInt;
      break;
    case u.Int64:
      r = n.visitInt64 || n.visitInt;
      break;
    case u.Uint8:
      r = n.visitUint8 || n.visitInt;
      break;
    case u.Uint16:
      r = n.visitUint16 || n.visitInt;
      break;
    case u.Uint32:
      r = n.visitUint32 || n.visitInt;
      break;
    case u.Uint64:
      r = n.visitUint64 || n.visitInt;
      break;
    case u.Float:
      r = n.visitFloat;
      break;
    case u.Float16:
      r = n.visitFloat16 || n.visitFloat;
      break;
    case u.Float32:
      r = n.visitFloat32 || n.visitFloat;
      break;
    case u.Float64:
      r = n.visitFloat64 || n.visitFloat;
      break;
    case u.Utf8:
      r = n.visitUtf8;
      break;
    case u.Binary:
      r = n.visitBinary;
      break;
    case u.FixedSizeBinary:
      r = n.visitFixedSizeBinary;
      break;
    case u.Date:
      r = n.visitDate;
      break;
    case u.DateDay:
      r = n.visitDateDay || n.visitDate;
      break;
    case u.DateMillisecond:
      r = n.visitDateMillisecond || n.visitDate;
      break;
    case u.Timestamp:
      r = n.visitTimestamp;
      break;
    case u.TimestampSecond:
      r = n.visitTimestampSecond || n.visitTimestamp;
      break;
    case u.TimestampMillisecond:
      r = n.visitTimestampMillisecond || n.visitTimestamp;
      break;
    case u.TimestampMicrosecond:
      r = n.visitTimestampMicrosecond || n.visitTimestamp;
      break;
    case u.TimestampNanosecond:
      r = n.visitTimestampNanosecond || n.visitTimestamp;
      break;
    case u.Time:
      r = n.visitTime;
      break;
    case u.TimeSecond:
      r = n.visitTimeSecond || n.visitTime;
      break;
    case u.TimeMillisecond:
      r = n.visitTimeMillisecond || n.visitTime;
      break;
    case u.TimeMicrosecond:
      r = n.visitTimeMicrosecond || n.visitTime;
      break;
    case u.TimeNanosecond:
      r = n.visitTimeNanosecond || n.visitTime;
      break;
    case u.Decimal:
      r = n.visitDecimal;
      break;
    case u.List:
      r = n.visitList;
      break;
    case u.Struct:
      r = n.visitStruct;
      break;
    case u.Union:
      r = n.visitUnion;
      break;
    case u.DenseUnion:
      r = n.visitDenseUnion || n.visitUnion;
      break;
    case u.SparseUnion:
      r = n.visitSparseUnion || n.visitUnion;
      break;
    case u.Dictionary:
      r = n.visitDictionary;
      break;
    case u.Interval:
      r = n.visitInterval;
      break;
    case u.IntervalDayTime:
      r = n.visitIntervalDayTime || n.visitInterval;
      break;
    case u.IntervalYearMonth:
      r = n.visitIntervalYearMonth || n.visitInterval;
      break;
    case u.FixedSizeList:
      r = n.visitFixedSizeList;
      break;
    case u.Map:
      r = n.visitMap;
      break;
  }
  if (typeof r == "function")
    return r;
  if (!e)
    return () => null;
  throw new Error(`Unrecognized type '${u[t]}'`);
}
function Ms(n) {
  switch (n.typeId) {
    case u.Null:
      return u.Null;
    case u.Int: {
      const { bitWidth: t, isSigned: e } = n;
      switch (t) {
        case 8:
          return e ? u.Int8 : u.Uint8;
        case 16:
          return e ? u.Int16 : u.Uint16;
        case 32:
          return e ? u.Int32 : u.Uint32;
        case 64:
          return e ? u.Int64 : u.Uint64;
      }
      return u.Int;
    }
    case u.Float:
      switch (n.precision) {
        case Ot.HALF:
          return u.Float16;
        case Ot.SINGLE:
          return u.Float32;
        case Ot.DOUBLE:
          return u.Float64;
      }
      return u.Float;
    case u.Binary:
      return u.Binary;
    case u.Utf8:
      return u.Utf8;
    case u.Bool:
      return u.Bool;
    case u.Decimal:
      return u.Decimal;
    case u.Time:
      switch (n.unit) {
        case z.SECOND:
          return u.TimeSecond;
        case z.MILLISECOND:
          return u.TimeMillisecond;
        case z.MICROSECOND:
          return u.TimeMicrosecond;
        case z.NANOSECOND:
          return u.TimeNanosecond;
      }
      return u.Time;
    case u.Timestamp:
      switch (n.unit) {
        case z.SECOND:
          return u.TimestampSecond;
        case z.MILLISECOND:
          return u.TimestampMillisecond;
        case z.MICROSECOND:
          return u.TimestampMicrosecond;
        case z.NANOSECOND:
          return u.TimestampNanosecond;
      }
      return u.Timestamp;
    case u.Date:
      switch (n.unit) {
        case ge.DAY:
          return u.DateDay;
        case ge.MILLISECOND:
          return u.DateMillisecond;
      }
      return u.Date;
    case u.Interval:
      switch (n.unit) {
        case Be.DAY_TIME:
          return u.IntervalDayTime;
        case Be.YEAR_MONTH:
          return u.IntervalYearMonth;
      }
      return u.Interval;
    case u.Map:
      return u.Map;
    case u.List:
      return u.List;
    case u.Struct:
      return u.Struct;
    case u.Union:
      switch (n.mode) {
        case Mt.Dense:
          return u.DenseUnion;
        case Mt.Sparse:
          return u.SparseUnion;
      }
      return u.Union;
    case u.FixedSizeBinary:
      return u.FixedSizeBinary;
    case u.FixedSizeList:
      return u.FixedSizeList;
    case u.Dictionary:
      return u.Dictionary;
  }
  throw new Error(`Unrecognized type '${u[n.typeId]}'`);
}
j.prototype.visitInt8 = null;
j.prototype.visitInt16 = null;
j.prototype.visitInt32 = null;
j.prototype.visitInt64 = null;
j.prototype.visitUint8 = null;
j.prototype.visitUint16 = null;
j.prototype.visitUint32 = null;
j.prototype.visitUint64 = null;
j.prototype.visitFloat16 = null;
j.prototype.visitFloat32 = null;
j.prototype.visitFloat64 = null;
j.prototype.visitDateDay = null;
j.prototype.visitDateMillisecond = null;
j.prototype.visitTimestampSecond = null;
j.prototype.visitTimestampMillisecond = null;
j.prototype.visitTimestampMicrosecond = null;
j.prototype.visitTimestampNanosecond = null;
j.prototype.visitTimeSecond = null;
j.prototype.visitTimeMillisecond = null;
j.prototype.visitTimeMicrosecond = null;
j.prototype.visitTimeNanosecond = null;
j.prototype.visitDenseUnion = null;
j.prototype.visitSparseUnion = null;
j.prototype.visitIntervalDayTime = null;
j.prototype.visitIntervalYearMonth = null;
const Ro = new Float64Array(1), nn = new Uint32Array(Ro.buffer);
function xo(n) {
  const t = (n & 31744) >> 10, e = (n & 1023) / 1024, r = Math.pow(-1, (n & 32768) >> 15);
  switch (t) {
    case 31:
      return r * (e ? Number.NaN : 1 / 0);
    case 0:
      return r * (e ? 6103515625e-14 * e : 0);
  }
  return r * Math.pow(2, t - 15) * (1 + e);
}
function nl(n) {
  if (n !== n)
    return 32256;
  Ro[0] = n;
  const t = (nn[1] & 2147483648) >> 16 & 65535;
  let e = nn[1] & 2146435072, r = 0;
  return e >= 1089470464 ? nn[0] > 0 ? e = 31744 : (e = (e & 2080374784) >> 16, r = (nn[1] & 1048575) >> 10) : e <= 1056964608 ? (r = 1048576 + (nn[1] & 1048575), r = 1048576 + (r << (e >> 20) - 998) >> 21, e = 0) : (e = e - 1056964608 >> 10, r = (nn[1] & 1048575) + 512 >> 10), t | e | r & 65535;
}
class T extends j {
}
function x(n) {
  return (t, e, r) => {
    if (t.setValid(e, r != null))
      return n(t, e, r);
  };
}
const rl = (n, t, e) => {
  n[t] = Math.trunc(e / 864e5);
}, Pi = (n, t, e) => {
  n[t] = Math.trunc(e % 4294967296), n[t + 1] = Math.trunc(e / 4294967296);
}, il = (n, t, e) => {
  n[t] = Math.trunc(e * 1e3 % 4294967296), n[t + 1] = Math.trunc(e * 1e3 / 4294967296);
}, sl = (n, t, e) => {
  n[t] = Math.trunc(e * 1e6 % 4294967296), n[t + 1] = Math.trunc(e * 1e6 / 4294967296);
}, Mo = (n, t, e, r) => {
  if (e + 1 < t.length) {
    const { [e]: i, [e + 1]: s } = t;
    n.set(r.subarray(0, s - i), i);
  }
}, ol = ({ offset: n, values: t }, e, r) => {
  const i = n + e;
  r ? t[i >> 3] |= 1 << i % 8 : t[i >> 3] &= ~(1 << i % 8);
}, be = ({ values: n }, t, e) => {
  n[t] = e;
}, ki = ({ values: n }, t, e) => {
  n[t] = e;
}, No = ({ values: n }, t, e) => {
  n[t] = nl(e);
}, al = (n, t, e) => {
  switch (n.type.precision) {
    case Ot.HALF:
      return No(n, t, e);
    case Ot.SINGLE:
    case Ot.DOUBLE:
      return ki(n, t, e);
  }
}, Co = ({ values: n }, t, e) => {
  rl(n, t, e.valueOf());
}, Lo = ({ values: n }, t, e) => {
  Pi(n, t * 2, e.valueOf());
}, cl = ({ stride: n, values: t }, e, r) => {
  t.set(r.subarray(0, n), n * e);
}, ll = ({ values: n, valueOffsets: t }, e, r) => Mo(n, t, e, r), ul = ({ values: n, valueOffsets: t }, e, r) => {
  Mo(n, t, e, Mi(r));
}, dl = (n, t, e) => {
  n.type.unit === ge.DAY ? Co(n, t, e) : Lo(n, t, e);
}, Uo = ({ values: n }, t, e) => Pi(n, t * 2, e / 1e3), Po = ({ values: n }, t, e) => Pi(n, t * 2, e), ko = ({ values: n }, t, e) => il(n, t * 2, e), jo = ({ values: n }, t, e) => sl(n, t * 2, e), hl = (n, t, e) => {
  switch (n.type.unit) {
    case z.SECOND:
      return Uo(n, t, e);
    case z.MILLISECOND:
      return Po(n, t, e);
    case z.MICROSECOND:
      return ko(n, t, e);
    case z.NANOSECOND:
      return jo(n, t, e);
  }
}, Vo = ({ values: n }, t, e) => {
  n[t] = e;
}, $o = ({ values: n }, t, e) => {
  n[t] = e;
}, zo = ({ values: n }, t, e) => {
  n[t] = e;
}, Yo = ({ values: n }, t, e) => {
  n[t] = e;
}, fl = (n, t, e) => {
  switch (n.type.unit) {
    case z.SECOND:
      return Vo(n, t, e);
    case z.MILLISECOND:
      return $o(n, t, e);
    case z.MICROSECOND:
      return zo(n, t, e);
    case z.NANOSECOND:
      return Yo(n, t, e);
  }
}, pl = ({ values: n, stride: t }, e, r) => {
  n.set(r.subarray(0, t), t * e);
}, yl = (n, t, e) => {
  const r = n.children[0], i = n.valueOffsets, s = jt.getVisitFn(r);
  if (Array.isArray(e))
    for (let o = -1, a = i[t], c = i[t + 1]; a < c; )
      s(r, a++, e[++o]);
  else
    for (let o = -1, a = i[t], c = i[t + 1]; a < c; )
      s(r, a++, e.get(++o));
}, ml = (n, t, e) => {
  const r = n.children[0], { valueOffsets: i } = n, s = jt.getVisitFn(r);
  let { [t]: o, [t + 1]: a } = i;
  const c = e instanceof Map ? e.entries() : Object.entries(e);
  for (const d of c)
    if (s(r, o, d), ++o >= a)
      break;
}, gl = (n, t) => (e, r, i, s) => r && e(r, n, t[s]), bl = (n, t) => (e, r, i, s) => r && e(r, n, t.get(s)), _l = (n, t) => (e, r, i, s) => r && e(r, n, t.get(i.name)), vl = (n, t) => (e, r, i, s) => r && e(r, n, t[i.name]), wl = (n, t, e) => {
  const r = n.type.children.map((s) => jt.getVisitFn(s.type)), i = e instanceof Map ? _l(t, e) : e instanceof q ? bl(t, e) : Array.isArray(e) ? gl(t, e) : vl(t, e);
  n.type.children.forEach((s, o) => i(r[o], n.children[o], s, o));
}, Sl = (n, t, e) => {
  n.type.mode === Mt.Dense ? Wo(n, t, e) : Ho(n, t, e);
}, Wo = (n, t, e) => {
  const r = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[r];
  jt.visit(i, n.valueOffsets[t], e);
}, Ho = (n, t, e) => {
  const r = n.type.typeIdToChildIndex[n.typeIds[t]], i = n.children[r];
  jt.visit(i, t, e);
}, Il = (n, t, e) => {
  var r;
  (r = n.dictionary) === null || r === void 0 || r.set(n.values[t], e);
}, Al = (n, t, e) => {
  n.type.unit === Be.DAY_TIME ? Jo(n, t, e) : qo(n, t, e);
}, Jo = ({ values: n }, t, e) => {
  n.set(e.subarray(0, 2), 2 * t);
}, qo = ({ values: n }, t, e) => {
  n[t] = e[0] * 12 + e[1] % 12;
}, Bl = (n, t, e) => {
  const { stride: r } = n, i = n.children[0], s = jt.getVisitFn(i);
  if (Array.isArray(e))
    for (let o = -1, a = t * r; ++o < r; )
      s(i, a + o, e[o]);
  else
    for (let o = -1, a = t * r; ++o < r; )
      s(i, a + o, e.get(o));
};
T.prototype.visitBool = x(ol);
T.prototype.visitInt = x(be);
T.prototype.visitInt8 = x(be);
T.prototype.visitInt16 = x(be);
T.prototype.visitInt32 = x(be);
T.prototype.visitInt64 = x(be);
T.prototype.visitUint8 = x(be);
T.prototype.visitUint16 = x(be);
T.prototype.visitUint32 = x(be);
T.prototype.visitUint64 = x(be);
T.prototype.visitFloat = x(al);
T.prototype.visitFloat16 = x(No);
T.prototype.visitFloat32 = x(ki);
T.prototype.visitFloat64 = x(ki);
T.prototype.visitUtf8 = x(ul);
T.prototype.visitBinary = x(ll);
T.prototype.visitFixedSizeBinary = x(cl);
T.prototype.visitDate = x(dl);
T.prototype.visitDateDay = x(Co);
T.prototype.visitDateMillisecond = x(Lo);
T.prototype.visitTimestamp = x(hl);
T.prototype.visitTimestampSecond = x(Uo);
T.prototype.visitTimestampMillisecond = x(Po);
T.prototype.visitTimestampMicrosecond = x(ko);
T.prototype.visitTimestampNanosecond = x(jo);
T.prototype.visitTime = x(fl);
T.prototype.visitTimeSecond = x(Vo);
T.prototype.visitTimeMillisecond = x($o);
T.prototype.visitTimeMicrosecond = x(zo);
T.prototype.visitTimeNanosecond = x(Yo);
T.prototype.visitDecimal = x(pl);
T.prototype.visitList = x(yl);
T.prototype.visitStruct = x(wl);
T.prototype.visitUnion = x(Sl);
T.prototype.visitDenseUnion = x(Wo);
T.prototype.visitSparseUnion = x(Ho);
T.prototype.visitDictionary = x(Il);
T.prototype.visitInterval = x(Al);
T.prototype.visitIntervalDayTime = x(Jo);
T.prototype.visitIntervalYearMonth = x(qo);
T.prototype.visitFixedSizeList = x(Bl);
T.prototype.visitMap = x(ml);
const jt = new T(), Vt = Symbol.for("parent"), dn = Symbol.for("rowIndex");
class ji {
  constructor(t, e) {
    return this[Vt] = t, this[dn] = e, new Proxy(this, new Fl());
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[dn], e = this[Vt], r = e.type.children, i = {};
    for (let s = -1, o = r.length; ++s < o; )
      i[r[s].name] = Dt.visit(e.children[s], t);
    return i;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${jn(t)}: ${jn(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
  [Symbol.iterator]() {
    return new Ol(this[Vt], this[dn]);
  }
}
class Ol {
  constructor(t, e) {
    this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.childIndex;
    return t < this.numChildren ? (this.childIndex = t + 1, {
      done: !1,
      value: [
        this.childFields[t].name,
        Dt.visit(this.children[t], this.rowIndex)
      ]
    }) : { done: !0, value: null };
  }
}
Object.defineProperties(ji.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Vt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [dn]: { writable: !0, enumerable: !1, configurable: !1, value: -1 }
});
class Fl {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[Vt].type.children.map((e) => e.name);
  }
  has(t, e) {
    return t[Vt].type.children.findIndex((r) => r.name === e) !== -1;
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Vt].type.children.findIndex((r) => r.name === e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const r = t[Vt].type.children.findIndex((i) => i.name === e);
    if (r !== -1) {
      const i = Dt.visit(t[Vt].children[r], t[dn]);
      return Reflect.set(t, e, i), i;
    }
  }
  set(t, e, r) {
    const i = t[Vt].type.children.findIndex((s) => s.name === e);
    return i !== -1 ? (jt.visit(t[Vt].children[i], t[dn], r), Reflect.set(t, e, r)) : Reflect.has(t, e) || typeof e == "symbol" ? Reflect.set(t, e, r) : !1;
  }
}
class B extends j {
}
function E(n) {
  return (t, e) => t.getValid(e) ? n(t, e) : null;
}
const Dl = (n, t) => 864e5 * n[t], Vi = (n, t) => 4294967296 * n[t + 1] + (n[t] >>> 0), Tl = (n, t) => 4294967296 * (n[t + 1] / 1e3) + (n[t] >>> 0) / 1e3, El = (n, t) => 4294967296 * (n[t + 1] / 1e6) + (n[t] >>> 0) / 1e6, Ko = (n) => new Date(n), Rl = (n, t) => Ko(Dl(n, t)), xl = (n, t) => Ko(Vi(n, t)), Ml = (n, t) => null, Go = (n, t, e) => {
  if (e + 1 >= t.length)
    return null;
  const r = t[e], i = t[e + 1];
  return n.subarray(r, i);
}, Nl = ({ offset: n, values: t }, e) => {
  const r = n + e;
  return (t[r >> 3] & 1 << r % 8) !== 0;
}, Zo = ({ values: n }, t) => Rl(n, t), Xo = ({ values: n }, t) => xl(n, t * 2), Ee = ({ stride: n, values: t }, e) => t[n * e], Cl = ({ stride: n, values: t }, e) => xo(t[n * e]), Qo = ({ values: n }, t) => n[t], Ll = ({ stride: n, values: t }, e) => t.subarray(n * e, n * (e + 1)), Ul = ({ values: n, valueOffsets: t }, e) => Go(n, t, e), Pl = ({ values: n, valueOffsets: t }, e) => {
  const r = Go(n, t, e);
  return r !== null ? gi(r) : null;
}, kl = ({ values: n }, t) => n[t], jl = ({ type: n, values: t }, e) => n.precision !== Ot.HALF ? t[e] : xo(t[e]), Vl = (n, t) => n.type.unit === ge.DAY ? Zo(n, t) : Xo(n, t), ta = ({ values: n }, t) => 1e3 * Vi(n, t * 2), ea = ({ values: n }, t) => Vi(n, t * 2), na = ({ values: n }, t) => Tl(n, t * 2), ra = ({ values: n }, t) => El(n, t * 2), $l = (n, t) => {
  switch (n.type.unit) {
    case z.SECOND:
      return ta(n, t);
    case z.MILLISECOND:
      return ea(n, t);
    case z.MICROSECOND:
      return na(n, t);
    case z.NANOSECOND:
      return ra(n, t);
  }
}, ia = ({ values: n }, t) => n[t], sa = ({ values: n }, t) => n[t], oa = ({ values: n }, t) => n[t], aa = ({ values: n }, t) => n[t], zl = (n, t) => {
  switch (n.type.unit) {
    case z.SECOND:
      return ia(n, t);
    case z.MILLISECOND:
      return sa(n, t);
    case z.MICROSECOND:
      return oa(n, t);
    case z.NANOSECOND:
      return aa(n, t);
  }
}, Yl = ({ values: n, stride: t }, e) => Ui.decimal(n.subarray(t * e, t * (e + 1))), Wl = (n, t) => {
  const { valueOffsets: e, stride: r, children: i } = n, { [t * r]: s, [t * r + 1]: o } = e, c = i[0].slice(s, o - s);
  return new q([c]);
}, Hl = (n, t) => {
  const { valueOffsets: e, children: r } = n, { [t]: i, [t + 1]: s } = e, o = r[0];
  return new $i(o.slice(i, s - i));
}, Jl = (n, t) => new ji(n, t), ql = (n, t) => n.type.mode === Mt.Dense ? ca(n, t) : la(n, t), ca = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], r = n.children[e];
  return Dt.visit(r, n.valueOffsets[t]);
}, la = (n, t) => {
  const e = n.type.typeIdToChildIndex[n.typeIds[t]], r = n.children[e];
  return Dt.visit(r, t);
}, Kl = (n, t) => {
  var e;
  return (e = n.dictionary) === null || e === void 0 ? void 0 : e.get(n.values[t]);
}, Gl = (n, t) => n.type.unit === Be.DAY_TIME ? ua(n, t) : da(n, t), ua = ({ values: n }, t) => n.subarray(2 * t, 2 * (t + 1)), da = ({ values: n }, t) => {
  const e = n[t], r = new Int32Array(2);
  return r[0] = Math.trunc(e / 12), r[1] = Math.trunc(e % 12), r;
}, Zl = (n, t) => {
  const { stride: e, children: r } = n, s = r[0].slice(t * e, e);
  return new q([s]);
};
B.prototype.visitNull = E(Ml);
B.prototype.visitBool = E(Nl);
B.prototype.visitInt = E(kl);
B.prototype.visitInt8 = E(Ee);
B.prototype.visitInt16 = E(Ee);
B.prototype.visitInt32 = E(Ee);
B.prototype.visitInt64 = E(Qo);
B.prototype.visitUint8 = E(Ee);
B.prototype.visitUint16 = E(Ee);
B.prototype.visitUint32 = E(Ee);
B.prototype.visitUint64 = E(Qo);
B.prototype.visitFloat = E(jl);
B.prototype.visitFloat16 = E(Cl);
B.prototype.visitFloat32 = E(Ee);
B.prototype.visitFloat64 = E(Ee);
B.prototype.visitUtf8 = E(Pl);
B.prototype.visitBinary = E(Ul);
B.prototype.visitFixedSizeBinary = E(Ll);
B.prototype.visitDate = E(Vl);
B.prototype.visitDateDay = E(Zo);
B.prototype.visitDateMillisecond = E(Xo);
B.prototype.visitTimestamp = E($l);
B.prototype.visitTimestampSecond = E(ta);
B.prototype.visitTimestampMillisecond = E(ea);
B.prototype.visitTimestampMicrosecond = E(na);
B.prototype.visitTimestampNanosecond = E(ra);
B.prototype.visitTime = E(zl);
B.prototype.visitTimeSecond = E(ia);
B.prototype.visitTimeMillisecond = E(sa);
B.prototype.visitTimeMicrosecond = E(oa);
B.prototype.visitTimeNanosecond = E(aa);
B.prototype.visitDecimal = E(Yl);
B.prototype.visitList = E(Wl);
B.prototype.visitStruct = E(Jl);
B.prototype.visitUnion = E(ql);
B.prototype.visitDenseUnion = E(ca);
B.prototype.visitSparseUnion = E(la);
B.prototype.visitDictionary = E(Kl);
B.prototype.visitInterval = E(Gl);
B.prototype.visitIntervalDayTime = E(ua);
B.prototype.visitIntervalYearMonth = E(da);
B.prototype.visitFixedSizeList = E(Zl);
B.prototype.visitMap = E(Hl);
const Dt = new B(), Zt = Symbol.for("keys"), hn = Symbol.for("vals");
class $i {
  constructor(t) {
    return this[Zt] = new q([t.children[0]]).memoize(), this[hn] = t.children[1], new Proxy(this, new Ql());
  }
  [Symbol.iterator]() {
    return new Xl(this[Zt], this[hn]);
  }
  get size() {
    return this[Zt].length;
  }
  toArray() {
    return Object.values(this.toJSON());
  }
  toJSON() {
    const t = this[Zt], e = this[hn], r = {};
    for (let i = -1, s = t.length; ++i < s; )
      r[t.get(i)] = Dt.visit(e, i);
    return r;
  }
  toString() {
    return `{${[...this].map(([t, e]) => `${jn(t)}: ${jn(e)}`).join(", ")}}`;
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.toString();
  }
}
class Xl {
  constructor(t, e) {
    this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length;
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    const t = this.keyIndex;
    return t === this.numKeys ? { done: !0, value: null } : (this.keyIndex++, {
      done: !1,
      value: [
        this.keys.get(t),
        Dt.visit(this.vals, t)
      ]
    });
  }
}
class Ql {
  isExtensible() {
    return !1;
  }
  deleteProperty() {
    return !1;
  }
  preventExtensions() {
    return !0;
  }
  ownKeys(t) {
    return t[Zt].toArray().map(String);
  }
  has(t, e) {
    return t[Zt].includes(e);
  }
  getOwnPropertyDescriptor(t, e) {
    if (t[Zt].indexOf(e) !== -1)
      return { writable: !0, enumerable: !0, configurable: !0 };
  }
  get(t, e) {
    if (Reflect.has(t, e))
      return t[e];
    const r = t[Zt].indexOf(e);
    if (r !== -1) {
      const i = Dt.visit(Reflect.get(t, hn), r);
      return Reflect.set(t, e, i), i;
    }
  }
  set(t, e, r) {
    const i = t[Zt].indexOf(e);
    return i !== -1 ? (jt.visit(Reflect.get(t, hn), i, r), Reflect.set(t, e, r)) : Reflect.has(t, e) ? Reflect.set(t, e, r) : !1;
  }
}
Object.defineProperties($i.prototype, {
  [Symbol.toStringTag]: { enumerable: !1, configurable: !1, value: "Row" },
  [Zt]: { writable: !0, enumerable: !1, configurable: !1, value: null },
  [hn]: { writable: !0, enumerable: !1, configurable: !1, value: null }
});
let Ns;
function ha(n, t, e, r) {
  const { length: i = 0 } = n;
  let s = typeof t != "number" ? 0 : t, o = typeof e != "number" ? i : e;
  return s < 0 && (s = (s % i + i) % i), o < 0 && (o = (o % i + i) % i), o < s && (Ns = s, s = o, o = Ns), o > i && (o = i), r ? r(n, s, o) : [s, o];
}
const Cs = (n) => n !== n;
function Sn(n) {
  if (typeof n !== "object" || n === null)
    return Cs(n) ? Cs : (e) => e === n;
  if (n instanceof Date) {
    const e = n.valueOf();
    return (r) => r instanceof Date ? r.valueOf() === e : !1;
  }
  return ArrayBuffer.isView(n) ? (e) => e ? Hc(n, e) : !1 : n instanceof Map ? eu(n) : Array.isArray(n) ? tu(n) : n instanceof q ? nu(n) : ru(n, !0);
}
function tu(n) {
  const t = [];
  for (let e = -1, r = n.length; ++e < r; )
    t[e] = Sn(n[e]);
  return Kr(t);
}
function eu(n) {
  let t = -1;
  const e = [];
  for (const r of n.values())
    e[++t] = Sn(r);
  return Kr(e);
}
function nu(n) {
  const t = [];
  for (let e = -1, r = n.length; ++e < r; )
    t[e] = Sn(n.get(e));
  return Kr(t);
}
function ru(n, t = !1) {
  const e = Object.keys(n);
  if (!t && e.length === 0)
    return () => !1;
  const r = [];
  for (let i = -1, s = e.length; ++i < s; )
    r[i] = Sn(n[e[i]]);
  return Kr(r, e);
}
function Kr(n, t) {
  return (e) => {
    if (!e || typeof e != "object")
      return !1;
    switch (e.constructor) {
      case Array:
        return iu(n, e);
      case Map:
        return Ls(n, e, e.keys());
      case $i:
      case ji:
      case Object:
      case void 0:
        return Ls(n, e, t || Object.keys(e));
    }
    return e instanceof q ? su(n, e) : !1;
  };
}
function iu(n, t) {
  const e = n.length;
  if (t.length !== e)
    return !1;
  for (let r = -1; ++r < e; )
    if (!n[r](t[r]))
      return !1;
  return !0;
}
function su(n, t) {
  const e = n.length;
  if (t.length !== e)
    return !1;
  for (let r = -1; ++r < e; )
    if (!n[r](t.get(r)))
      return !1;
  return !0;
}
function Ls(n, t, e) {
  const r = e[Symbol.iterator](), i = t instanceof Map ? t.keys() : Object.keys(t)[Symbol.iterator](), s = t instanceof Map ? t.values() : Object.values(t)[Symbol.iterator]();
  let o = 0;
  const a = n.length;
  let c = s.next(), d = r.next(), h = i.next();
  for (; o < a && !d.done && !h.done && !c.done && !(d.value !== h.value || !n[o](c.value)); ++o, d = r.next(), h = i.next(), c = s.next())
    ;
  return o === a && d.done && h.done && c.done ? !0 : (r.return && r.return(), i.return && i.return(), s.return && s.return(), !1);
}
function fa(n, t, e, r) {
  return (e & 1 << r) !== 0;
}
function ou(n, t, e, r) {
  return (e & 1 << r) >> r;
}
function zi(n, t, e) {
  const r = e.byteLength + 7 & -8;
  if (n > 0 || e.byteLength < r) {
    const i = new Uint8Array(r);
    return i.set(n % 8 === 0 ? e.subarray(n >> 3) : (
      // Otherwise iterate each bit from the offset and return a new one
      Rr(new Yi(e, n, t, null, fa)).subarray(0, r)
    )), i;
  }
  return e;
}
function Rr(n) {
  const t = [];
  let e = 0, r = 0, i = 0;
  for (const o of n)
    o && (i |= 1 << r), ++r === 8 && (t[e++] = i, i = r = 0);
  (e === 0 || r > 0) && (t[e++] = i);
  const s = new Uint8Array(t.length + 7 & -8);
  return s.set(t), s;
}
class Yi {
  constructor(t, e, r, i, s) {
    this.bytes = t, this.length = r, this.context = i, this.get = s, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0;
  }
  next() {
    return this.index < this.length ? (this.bit === 8 && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {
      value: this.get(this.context, this.index++, this.byte, this.bit++)
    }) : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function wi(n, t, e) {
  if (e - t <= 0)
    return 0;
  if (e - t < 8) {
    let s = 0;
    for (const o of new Yi(n, t, e - t, n, ou))
      s += o;
    return s;
  }
  const r = e >> 3 << 3, i = t + (t % 8 === 0 ? 0 : 8 - t % 8);
  return (
    // Get the popcnt of bits between the left hand side, and the next highest multiple of 8
    wi(n, t, i) + // Get the popcnt of bits between the right hand side, and the next lowest multiple of 8
    wi(n, r, e) + // Get the popcnt of all bits between the left and right hand sides' multiples of 8
    au(n, i >> 3, r - i >> 3)
  );
}
function au(n, t, e) {
  let r = 0, i = Math.trunc(t);
  const s = new DataView(n.buffer, n.byteOffset, n.byteLength), o = e === void 0 ? n.byteLength : i + e;
  for (; o - i >= 4; )
    r += li(s.getUint32(i)), i += 4;
  for (; o - i >= 2; )
    r += li(s.getUint16(i)), i += 2;
  for (; o - i >= 1; )
    r += li(s.getUint8(i)), i += 1;
  return r;
}
function li(n) {
  let t = Math.trunc(n);
  return t = t - (t >>> 1 & 1431655765), t = (t & 858993459) + (t >>> 2 & 858993459), (t + (t >>> 4) & 252645135) * 16843009 >>> 24;
}
const cu = -1;
class et {
  constructor(t, e, r, i, s, o = [], a) {
    this.type = t, this.children = o, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(r || 0, 0)), this._nullCount = Math.floor(Math.max(i || 0, -1));
    let c;
    s instanceof et ? (this.stride = s.stride, this.values = s.values, this.typeIds = s.typeIds, this.nullBitmap = s.nullBitmap, this.valueOffsets = s.valueOffsets) : (this.stride = de(t), s && ((c = s[0]) && (this.valueOffsets = c), (c = s[1]) && (this.values = c), (c = s[2]) && (this.nullBitmap = c), (c = s[3]) && (this.typeIds = c))), this.nullable = this._nullCount !== 0 && this.nullBitmap && this.nullBitmap.byteLength > 0;
  }
  get typeId() {
    return this.type.typeId;
  }
  get ArrayType() {
    return this.type.ArrayType;
  }
  get buffers() {
    return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds];
  }
  get byteLength() {
    let t = 0;
    const { valueOffsets: e, values: r, nullBitmap: i, typeIds: s } = this;
    return e && (t += e.byteLength), r && (t += r.byteLength), i && (t += i.byteLength), s && (t += s.byteLength), this.children.reduce((o, a) => o + a.byteLength, t);
  }
  get nullCount() {
    let t = this._nullCount, e;
    return t <= cu && (e = this.nullBitmap) && (this._nullCount = t = this.length - wi(e, this.offset, this.offset + this.length)), t;
  }
  getValid(t) {
    if (this.nullable && this.nullCount > 0) {
      const e = this.offset + t;
      return (this.nullBitmap[e >> 3] & 1 << e % 8) !== 0;
    }
    return !0;
  }
  setValid(t, e) {
    if (!this.nullable)
      return e;
    if (!this.nullBitmap || this.nullBitmap.byteLength <= t >> 3) {
      const { nullBitmap: c } = this._changeLengthAndBackfillNullBitmap(this.length);
      Object.assign(this, { nullBitmap: c, _nullCount: 0 });
    }
    const { nullBitmap: r, offset: i } = this, s = i + t >> 3, o = (i + t) % 8, a = r[s] >> o & 1;
    return e ? a === 0 && (r[s] |= 1 << o, this._nullCount = this.nullCount + 1) : a === 1 && (r[s] &= ~(1 << o), this._nullCount = this.nullCount - 1), e;
  }
  clone(t = this.type, e = this.offset, r = this.length, i = this._nullCount, s = this, o = this.children) {
    return new et(t, e, r, i, s, o, this.dictionary);
  }
  slice(t, e) {
    const { stride: r, typeId: i, children: s } = this, o = +(this._nullCount === 0) - 1, a = i === 16 ? r : 1, c = this._sliceBuffers(t, e, r, i);
    return this.clone(
      this.type,
      this.offset + t,
      e,
      o,
      c,
      // Don't slice children if we have value offsets (the variable-width types)
      s.length === 0 || this.valueOffsets ? s : this._sliceChildren(s, a * t, a * e)
    );
  }
  _changeLengthAndBackfillNullBitmap(t) {
    if (this.typeId === u.Null)
      return this.clone(this.type, 0, t, 0);
    const { length: e, nullCount: r } = this, i = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
    i[e >> 3] = (1 << e - (e & -8)) - 1, r > 0 && i.set(zi(this.offset, e, this.nullBitmap), 0);
    const s = this.buffers;
    return s[ue.VALIDITY] = i, this.clone(this.type, 0, t, r + (t - e), s);
  }
  _sliceBuffers(t, e, r, i) {
    let s;
    const { buffers: o } = this;
    return (s = o[ue.TYPE]) && (o[ue.TYPE] = s.subarray(t, t + e)), (s = o[ue.OFFSET]) && (o[ue.OFFSET] = s.subarray(t, t + e + 1)) || // Otherwise if no offsets, slice the data buffer. Don't slice the data vector for Booleans, since the offset goes by bits not bytes
    (s = o[ue.DATA]) && (o[ue.DATA] = i === 6 ? s : s.subarray(r * t, r * (t + e))), o;
  }
  _sliceChildren(t, e, r) {
    return t.map((i) => i.slice(e, r));
  }
}
et.prototype.children = Object.freeze([]);
class Un extends j {
  visit(t) {
    return this.getVisitFn(t.type).call(this, t);
  }
  visitNull(t) {
    const { ["type"]: e, ["offset"]: r = 0, ["length"]: i = 0 } = t;
    return new et(e, r, i, 0);
  }
  visitBool(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length >> 3, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitInt(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitFloat(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length, ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitUtf8(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.data), s = $(t.nullBitmap), o = Nn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, a, c, [o, i, s]);
  }
  visitBinary(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.data), s = $(t.nullBitmap), o = Nn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, a, c, [o, i, s]);
  }
  visitFixedSizeBinary(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length / de(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitDate(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length / de(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitTimestamp(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length / de(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitTime(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length / de(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitDecimal(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length / de(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitList(t) {
    const { ["type"]: e, ["offset"]: r = 0, ["child"]: i } = t, s = $(t.nullBitmap), o = Nn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, a, c, [o, void 0, s], [i]);
  }
  visitStruct(t) {
    const { ["type"]: e, ["offset"]: r = 0, ["children"]: i = [] } = t, s = $(t.nullBitmap), { length: o = i.reduce((c, { length: d }) => Math.max(c, d), 0), nullCount: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, void 0, s], i);
  }
  visitUnion(t) {
    const { ["type"]: e, ["offset"]: r = 0, ["children"]: i = [] } = t, s = $(t.nullBitmap), o = Q(e.ArrayType, t.typeIds), { ["length"]: a = o.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    if (A.isSparseUnion(e))
      return new et(e, r, a, c, [void 0, void 0, s, o], i);
    const d = Nn(t.valueOffsets);
    return new et(e, r, a, c, [d, void 0, s, o], i);
  }
  visitDictionary(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.indices.ArrayType, t.data), { ["dictionary"]: o = new q([new Un().visit({ type: e.dictionary })]) } = t, { ["length"]: a = s.length, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, a, c, [void 0, s, i], [], o);
  }
  visitInterval(t) {
    const { ["type"]: e, ["offset"]: r = 0 } = t, i = $(t.nullBitmap), s = Q(e.ArrayType, t.data), { ["length"]: o = s.length / de(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, s, i]);
  }
  visitFixedSizeList(t) {
    const { ["type"]: e, ["offset"]: r = 0, ["child"]: i = new Un().visit({ type: e.valueType }) } = t, s = $(t.nullBitmap), { ["length"]: o = i.length / de(e), ["nullCount"]: a = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, o, a, [void 0, void 0, s], [i]);
  }
  visitMap(t) {
    const { ["type"]: e, ["offset"]: r = 0, ["child"]: i = new Un().visit({ type: e.childType }) } = t, s = $(t.nullBitmap), o = Nn(t.valueOffsets), { ["length"]: a = o.length - 1, ["nullCount"]: c = t.nullBitmap ? -1 : 0 } = t;
    return new et(e, r, a, c, [o, void 0, s], [i]);
  }
}
function k(n) {
  return new Un().visit(n);
}
class Us {
  constructor(t = 0, e) {
    this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0);
  }
  next() {
    for (; this.chunkIndex < this.numChunks; ) {
      const t = this.chunkIterator.next();
      if (!t.done)
        return t;
      ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex));
    }
    return { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
function pa(n) {
  return n.reduce((t, e) => t + e.nullCount, 0);
}
function ya(n) {
  return n.reduce((t, e, r) => (t[r + 1] = t[r] + e.length, t), new Uint32Array(n.length + 1));
}
function ma(n, t, e, r) {
  const i = [];
  for (let s = -1, o = n.length; ++s < o; ) {
    const a = n[s], c = t[s], { length: d } = a;
    if (c >= r)
      break;
    if (e >= c + d)
      continue;
    if (c >= e && c + d <= r) {
      i.push(a);
      continue;
    }
    const h = Math.max(0, e - c), f = Math.min(r - c, d);
    i.push(a.slice(h, f - h));
  }
  return i.length === 0 && i.push(n[0].slice(0, 0)), i;
}
function Wi(n, t, e, r) {
  let i = 0, s = 0, o = t.length - 1;
  do {
    if (i >= o - 1)
      return e < t[o] ? r(n, i, e - t[i]) : null;
    s = i + Math.trunc((o - i) * 0.5), e < t[s] ? o = s : i = s;
  } while (i < o);
}
function Hi(n, t) {
  return n.getValid(t);
}
function fn(n) {
  function t(e, r, i) {
    return n(e[r], i);
  }
  return function(e) {
    const r = this.data;
    return Wi(r, this._offsets, e, t);
  };
}
function ga(n) {
  let t;
  function e(r, i, s) {
    return n(r[i], s, t);
  }
  return function(r, i) {
    const s = this.data;
    t = i;
    const o = Wi(s, this._offsets, r, e);
    return t = void 0, o;
  };
}
function ba(n) {
  let t;
  function e(r, i, s) {
    let o = s, a = 0, c = 0;
    for (let d = i - 1, h = r.length; ++d < h; ) {
      const f = r[d];
      if (~(a = n(f, t, o)))
        return c + a;
      o = 0, c += f.length;
    }
    return -1;
  }
  return function(r, i) {
    t = r;
    const s = this.data, o = typeof i != "number" ? e(s, 0, 0) : Wi(s, this._offsets, i, e);
    return t = void 0, o;
  };
}
class O extends j {
}
function lu(n, t) {
  return t === null && n.length > 0 ? 0 : -1;
}
function uu(n, t) {
  const { nullBitmap: e } = n;
  if (!e || n.nullCount <= 0)
    return -1;
  let r = 0;
  for (const i of new Yi(e, n.offset + (t || 0), n.length, e, fa)) {
    if (!i)
      return r;
    ++r;
  }
  return -1;
}
function N(n, t, e) {
  if (t === void 0)
    return -1;
  if (t === null)
    return uu(n, e);
  const r = Dt.getVisitFn(n), i = Sn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (i(r(n, s)))
      return s;
  return -1;
}
function _a(n, t, e) {
  const r = Dt.getVisitFn(n), i = Sn(t);
  for (let s = (e || 0) - 1, o = n.length; ++s < o; )
    if (i(r(n, s)))
      return s;
  return -1;
}
O.prototype.visitNull = lu;
O.prototype.visitBool = N;
O.prototype.visitInt = N;
O.prototype.visitInt8 = N;
O.prototype.visitInt16 = N;
O.prototype.visitInt32 = N;
O.prototype.visitInt64 = N;
O.prototype.visitUint8 = N;
O.prototype.visitUint16 = N;
O.prototype.visitUint32 = N;
O.prototype.visitUint64 = N;
O.prototype.visitFloat = N;
O.prototype.visitFloat16 = N;
O.prototype.visitFloat32 = N;
O.prototype.visitFloat64 = N;
O.prototype.visitUtf8 = N;
O.prototype.visitBinary = N;
O.prototype.visitFixedSizeBinary = N;
O.prototype.visitDate = N;
O.prototype.visitDateDay = N;
O.prototype.visitDateMillisecond = N;
O.prototype.visitTimestamp = N;
O.prototype.visitTimestampSecond = N;
O.prototype.visitTimestampMillisecond = N;
O.prototype.visitTimestampMicrosecond = N;
O.prototype.visitTimestampNanosecond = N;
O.prototype.visitTime = N;
O.prototype.visitTimeSecond = N;
O.prototype.visitTimeMillisecond = N;
O.prototype.visitTimeMicrosecond = N;
O.prototype.visitTimeNanosecond = N;
O.prototype.visitDecimal = N;
O.prototype.visitList = N;
O.prototype.visitStruct = N;
O.prototype.visitUnion = N;
O.prototype.visitDenseUnion = _a;
O.prototype.visitSparseUnion = _a;
O.prototype.visitDictionary = N;
O.prototype.visitInterval = N;
O.prototype.visitIntervalDayTime = N;
O.prototype.visitIntervalYearMonth = N;
O.prototype.visitFixedSizeList = N;
O.prototype.visitMap = N;
const xr = new O();
class F extends j {
}
function R(n) {
  const { type: t } = n;
  if (n.nullCount === 0 && n.stride === 1 && (t.typeId === u.Timestamp || t instanceof Fe && t.bitWidth !== 64 || t instanceof Yn && t.bitWidth !== 64 || t instanceof zn && t.precision !== Ot.HALF))
    return new Us(n.data.length, (r) => {
      const i = n.data[r];
      return i.values.subarray(0, i.length)[Symbol.iterator]();
    });
  let e = 0;
  return new Us(n.data.length, (r) => {
    const s = n.data[r].length, o = n.slice(e, e + s);
    return e += s, new du(o);
  });
}
class du {
  constructor(t) {
    this.vector = t, this.index = 0;
  }
  next() {
    return this.index < this.vector.length ? {
      value: this.vector.get(this.index++)
    } : { done: !0, value: null };
  }
  [Symbol.iterator]() {
    return this;
  }
}
F.prototype.visitNull = R;
F.prototype.visitBool = R;
F.prototype.visitInt = R;
F.prototype.visitInt8 = R;
F.prototype.visitInt16 = R;
F.prototype.visitInt32 = R;
F.prototype.visitInt64 = R;
F.prototype.visitUint8 = R;
F.prototype.visitUint16 = R;
F.prototype.visitUint32 = R;
F.prototype.visitUint64 = R;
F.prototype.visitFloat = R;
F.prototype.visitFloat16 = R;
F.prototype.visitFloat32 = R;
F.prototype.visitFloat64 = R;
F.prototype.visitUtf8 = R;
F.prototype.visitBinary = R;
F.prototype.visitFixedSizeBinary = R;
F.prototype.visitDate = R;
F.prototype.visitDateDay = R;
F.prototype.visitDateMillisecond = R;
F.prototype.visitTimestamp = R;
F.prototype.visitTimestampSecond = R;
F.prototype.visitTimestampMillisecond = R;
F.prototype.visitTimestampMicrosecond = R;
F.prototype.visitTimestampNanosecond = R;
F.prototype.visitTime = R;
F.prototype.visitTimeSecond = R;
F.prototype.visitTimeMillisecond = R;
F.prototype.visitTimeMicrosecond = R;
F.prototype.visitTimeNanosecond = R;
F.prototype.visitDecimal = R;
F.prototype.visitList = R;
F.prototype.visitStruct = R;
F.prototype.visitUnion = R;
F.prototype.visitDenseUnion = R;
F.prototype.visitSparseUnion = R;
F.prototype.visitDictionary = R;
F.prototype.visitInterval = R;
F.prototype.visitIntervalDayTime = R;
F.prototype.visitIntervalYearMonth = R;
F.prototype.visitFixedSizeList = R;
F.prototype.visitMap = R;
const Ji = new F(), hu = (n, t) => n + t;
class Re extends j {
  visitNull(t, e) {
    return 0;
  }
  visitInt(t, e) {
    return t.type.bitWidth / 8;
  }
  visitFloat(t, e) {
    return t.type.ArrayType.BYTES_PER_ELEMENT;
  }
  visitBool(t, e) {
    return 1 / 8;
  }
  visitDecimal(t, e) {
    return t.type.bitWidth / 8;
  }
  visitDate(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitTime(t, e) {
    return t.type.bitWidth / 8;
  }
  visitTimestamp(t, e) {
    return t.type.unit === z.SECOND ? 4 : 8;
  }
  visitInterval(t, e) {
    return (t.type.unit + 1) * 4;
  }
  visitStruct(t, e) {
    return t.children.reduce((r, i) => r + oe.visit(i, e), 0);
  }
  visitFixedSizeBinary(t, e) {
    return t.type.byteWidth;
  }
  visitMap(t, e) {
    return 8 + t.children.reduce((r, i) => r + oe.visit(i, e), 0);
  }
  visitDictionary(t, e) {
    var r;
    return t.type.indices.bitWidth / 8 + (((r = t.dictionary) === null || r === void 0 ? void 0 : r.getByteLength(t.values[e])) || 0);
  }
}
const fu = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), pu = ({ valueOffsets: n }, t) => 8 + (n[t + 1] - n[t]), yu = ({ valueOffsets: n, stride: t, children: e }, r) => {
  const i = e[0], { [r * t]: s } = n, { [r * t + 1]: o } = n, a = oe.getVisitFn(i.type), c = i.slice(s, o - s);
  let d = 8;
  for (let h = -1, f = o - s; ++h < f; )
    d += a(c, h);
  return d;
}, mu = ({ stride: n, children: t }, e) => {
  const r = t[0], i = r.slice(e * n, n), s = oe.getVisitFn(r.type);
  let o = 0;
  for (let a = -1, c = i.length; ++a < c; )
    o += s(i, a);
  return o;
}, gu = (n, t) => n.type.mode === Mt.Dense ? va(n, t) : wa(n, t), va = ({ type: n, children: t, typeIds: e, valueOffsets: r }, i) => {
  const s = n.typeIdToChildIndex[e[i]];
  return 8 + oe.visit(t[s], r[i]);
}, wa = ({ children: n }, t) => 4 + oe.visitMany(n, n.map(() => t)).reduce(hu, 0);
Re.prototype.visitUtf8 = fu;
Re.prototype.visitBinary = pu;
Re.prototype.visitList = yu;
Re.prototype.visitFixedSizeList = mu;
Re.prototype.visitUnion = gu;
Re.prototype.visitDenseUnion = va;
Re.prototype.visitSparseUnion = wa;
const oe = new Re();
var Sa;
const Ia = {}, Aa = {};
class q {
  constructor(t) {
    var e, r, i;
    const s = t[0] instanceof q ? t.flatMap((a) => a.data) : t;
    if (s.length === 0 || s.some((a) => !(a instanceof et)))
      throw new TypeError("Vector constructor expects an Array of Data instances.");
    const o = (e = s[0]) === null || e === void 0 ? void 0 : e.type;
    switch (s.length) {
      case 0:
        this._offsets = [0];
        break;
      case 1: {
        const { get: a, set: c, indexOf: d, byteLength: h } = Ia[o.typeId], f = s[0];
        this.isValid = (m) => Hi(f, m), this.get = (m) => a(f, m), this.set = (m, _) => c(f, m, _), this.indexOf = (m) => d(f, m), this.getByteLength = (m) => h(f, m), this._offsets = [0, f.length];
        break;
      }
      default:
        Object.setPrototypeOf(this, Aa[o.typeId]), this._offsets = ya(s);
        break;
    }
    this.data = s, this.type = o, this.stride = de(o), this.numChildren = (i = (r = o.children) === null || r === void 0 ? void 0 : r.length) !== null && i !== void 0 ? i : 0, this.length = this._offsets[this._offsets.length - 1];
  }
  /**
   * The aggregate size (in bytes) of this Vector's buffers and/or child Vectors.
   */
  get byteLength() {
    return this._byteLength === -1 && (this._byteLength = this.data.reduce((t, e) => t + e.byteLength, 0)), this._byteLength;
  }
  /**
   * The number of null elements in this Vector.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = pa(this.data)), this._nullCount;
  }
  /**
   * The Array or TypedAray constructor used for the JS representation
   *  of the element's values in {@link Vector.prototype.toArray `toArray()`}.
   */
  get ArrayType() {
    return this.type.ArrayType;
  }
  /**
   * The name that should be printed when the Vector is logged in a message.
   */
  get [Symbol.toStringTag]() {
    return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
  }
  /**
   * The name of this Vector.
   */
  get VectorName() {
    return `${u[this.type.typeId]}Vector`;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Set an element value by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  includes(t, e) {
    return this.indexOf(t, e) > 0;
  }
  /**
   * Get the size in bytes of an element by index.
   * @param index The index at which to get the byteLength.
   */
  // @ts-ignore
  getByteLength(t) {
    return 0;
  }
  /**
   * Iterator for the Vector's elements.
   */
  [Symbol.iterator]() {
    return Ji.visit(this);
  }
  /**
   * Combines two or more Vectors of the same type.
   * @param others Additional Vectors to add to the end of this Vector.
   */
  concat(...t) {
    return new q(this.data.concat(t.flatMap((e) => e.data).flat(Number.POSITIVE_INFINITY)));
  }
  /**
   * Return a zero-copy sub-section of this Vector.
   * @param start The beginning of the specified portion of the Vector.
   * @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    return new q(ha(this, t, e, ({ data: r, _offsets: i }, s, o) => ma(r, i, s, o)));
  }
  toJSON() {
    return [...this];
  }
  /**
   * Return a JavaScript Array or TypedArray of the Vector's elements.
   *
   * @note If this Vector contains a single Data chunk and the Vector's type is a
   *  primitive numeric type corresponding to one of the JavaScript TypedArrays, this
   *  method returns a zero-copy slice of the underlying TypedArray values. If there's
   *  more than one chunk, the resulting TypedArray will be a copy of the data from each
   *  chunk's underlying TypedArray values.
   *
   * @returns An Array or TypedArray of the Vector's elements, based on the Vector's DataType.
   */
  toArray() {
    const { type: t, data: e, length: r, stride: i, ArrayType: s } = this;
    switch (t.typeId) {
      case u.Int:
      case u.Float:
      case u.Decimal:
      case u.Time:
      case u.Timestamp:
        switch (e.length) {
          case 0:
            return new s();
          case 1:
            return e[0].values.subarray(0, r * i);
          default:
            return e.reduce((o, { values: a, length: c }) => (o.array.set(a.subarray(0, c * i), o.offset), o.offset += c * i, o), { array: new s(r * i), offset: 0 }).array;
        }
    }
    return [...this];
  }
  /**
   * Returns a string representation of the Vector.
   *
   * @returns A string representation of the Vector.
   */
  toString() {
    return `[${[...this].join(",")}]`;
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.type.children) === null || e === void 0 ? void 0 : e.findIndex((r) => r.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.numChildren ? new q(this.data.map(({ children: e }) => e[t])) : null;
  }
  get isMemoized() {
    return A.isDictionary(this.type) ? this.data[0].dictionary.isMemoized : !1;
  }
  /**
   * Adds memoization to the Vector's {@link get} method. For dictionary
   * vectors, this method return a vector that memoizes only the dictionary
   * values.
   *
   * Memoization is very useful when decoding a value is expensive such as
   * Uft8. The memoization creates a cache of the size of the Vector and
   * therfore increases memory usage.
   *
   * @returns A new vector that memoizes calls to {@link get}.
   */
  memoize() {
    if (A.isDictionary(this.type)) {
      const t = new Mr(this.data[0].dictionary), e = this.data.map((r) => {
        const i = r.clone();
        return i.dictionary = t, i;
      });
      return new q(e);
    }
    return new Mr(this);
  }
  /**
   * Returns a vector without memoization of the {@link get} method. If this
   * vector is not memoized, this method returns this vector.
   *
   * @returns A a vector without memoization.
   */
  unmemoize() {
    if (A.isDictionary(this.type) && this.isMemoized) {
      const t = this.data[0].dictionary.unmemoize(), e = this.data.map((r) => {
        const i = r.clone();
        return i.dictionary = t, i;
      });
      return new q(e);
    }
    return this;
  }
}
Sa = Symbol.toStringTag;
q[Sa] = ((n) => {
  n.type = A.prototype, n.data = [], n.length = 0, n.stride = 1, n.numChildren = 0, n._nullCount = -1, n._byteLength = -1, n._offsets = new Uint32Array([0]), n[Symbol.isConcatSpreadable] = !0;
  const t = Object.keys(u).map((e) => u[e]).filter((e) => typeof e == "number" && e !== u.NONE);
  for (const e of t) {
    const r = Dt.getVisitFnByTypeId(e), i = jt.getVisitFnByTypeId(e), s = xr.getVisitFnByTypeId(e), o = oe.getVisitFnByTypeId(e);
    Ia[e] = { get: r, set: i, indexOf: s, byteLength: o }, Aa[e] = Object.create(n, {
      isValid: { value: fn(Hi) },
      get: { value: fn(Dt.getVisitFnByTypeId(e)) },
      set: { value: ga(jt.getVisitFnByTypeId(e)) },
      indexOf: { value: ba(xr.getVisitFnByTypeId(e)) },
      getByteLength: { value: fn(oe.getVisitFnByTypeId(e)) }
    });
  }
  return "Vector";
})(q.prototype);
class Mr extends q {
  constructor(t) {
    super(t.data);
    const e = this.get, r = this.set, i = this.slice, s = new Array(this.length);
    Object.defineProperty(this, "get", {
      value(o) {
        const a = s[o];
        if (a !== void 0)
          return a;
        const c = e.call(this, o);
        return s[o] = c, c;
      }
    }), Object.defineProperty(this, "set", {
      value(o, a) {
        r.call(this, o, a), s[o] = a;
      }
    }), Object.defineProperty(this, "slice", {
      value: (o, a) => new Mr(i.call(this, o, a))
    }), Object.defineProperty(this, "isMemoized", { value: !0 }), Object.defineProperty(this, "unmemoize", {
      value: () => new q(this.data)
    }), Object.defineProperty(this, "memoize", {
      value: () => this
    });
  }
}
class Si {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * Index to the start of the RecordBlock (note this is past the Message header)
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * Length of the metadata
   */
  metaDataLength() {
    return this.bb.readInt32(this.bb_pos + 8);
  }
  /**
   * Length of the data (this is aligned so there can be a gap between this and
   * the metadata).
   */
  bodyLength() {
    return this.bb.readInt64(this.bb_pos + 16);
  }
  static sizeOf() {
    return 24;
  }
  static createBlock(t, e, r, i) {
    return t.prep(8, 24), t.writeInt64(i), t.pad(4), t.writeInt32(r), t.writeInt64(e), t.offset();
  }
}
const ui = 2, Xt = 4, fe = 4, tt = 4, we = new Int32Array(2), Ps = new Float32Array(we.buffer), ks = new Float64Array(we.buffer), or = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
let ye = class Ii {
  constructor(t, e) {
    this.low = t | 0, this.high = e | 0;
  }
  static create(t, e) {
    return t == 0 && e == 0 ? Ii.ZERO : new Ii(t, e);
  }
  toFloat64() {
    return (this.low >>> 0) + this.high * 4294967296;
  }
  equals(t) {
    return this.low == t.low && this.high == t.high;
  }
};
ye.ZERO = new ye(0, 0);
var Ai;
(function(n) {
  n[n.UTF8_BYTES = 1] = "UTF8_BYTES", n[n.UTF16_STRING = 2] = "UTF16_STRING";
})(Ai || (Ai = {}));
let yn = class Ba {
  /**
   * Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
   */
  constructor(t) {
    this.bytes_ = t, this.position_ = 0;
  }
  /**
   * Create and allocate a new ByteBuffer with a given size.
   */
  static allocate(t) {
    return new Ba(new Uint8Array(t));
  }
  clear() {
    this.position_ = 0;
  }
  /**
   * Get the underlying `Uint8Array`.
   */
  bytes() {
    return this.bytes_;
  }
  /**
   * Get the buffer's position.
   */
  position() {
    return this.position_;
  }
  /**
   * Set the buffer's position.
   */
  setPosition(t) {
    this.position_ = t;
  }
  /**
   * Get the buffer's capacity.
   */
  capacity() {
    return this.bytes_.length;
  }
  readInt8(t) {
    return this.readUint8(t) << 24 >> 24;
  }
  readUint8(t) {
    return this.bytes_[t];
  }
  readInt16(t) {
    return this.readUint16(t) << 16 >> 16;
  }
  readUint16(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8;
  }
  readInt32(t) {
    return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24;
  }
  readUint32(t) {
    return this.readInt32(t) >>> 0;
  }
  readInt64(t) {
    return new ye(this.readInt32(t), this.readInt32(t + 4));
  }
  readUint64(t) {
    return new ye(this.readUint32(t), this.readUint32(t + 4));
  }
  readFloat32(t) {
    return we[0] = this.readInt32(t), Ps[0];
  }
  readFloat64(t) {
    return we[or ? 0 : 1] = this.readInt32(t), we[or ? 1 : 0] = this.readInt32(t + 4), ks[0];
  }
  writeInt8(t, e) {
    this.bytes_[t] = e;
  }
  writeUint8(t, e) {
    this.bytes_[t] = e;
  }
  writeInt16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeUint16(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8;
  }
  writeInt32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeUint32(t, e) {
    this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24;
  }
  writeInt64(t, e) {
    this.writeInt32(t, e.low), this.writeInt32(t + 4, e.high);
  }
  writeUint64(t, e) {
    this.writeUint32(t, e.low), this.writeUint32(t + 4, e.high);
  }
  writeFloat32(t, e) {
    Ps[0] = e, this.writeInt32(t, we[0]);
  }
  writeFloat64(t, e) {
    ks[0] = e, this.writeInt32(t, we[or ? 0 : 1]), this.writeInt32(t + 4, we[or ? 1 : 0]);
  }
  /**
   * Return the file identifier.   Behavior is undefined for FlatBuffers whose
   * schema does not include a file_identifier (likely points at padding or the
   * start of a the root vtable).
   */
  getBufferIdentifier() {
    if (this.bytes_.length < this.position_ + Xt + fe)
      throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
    let t = "";
    for (let e = 0; e < fe; e++)
      t += String.fromCharCode(this.readInt8(this.position_ + Xt + e));
    return t;
  }
  /**
   * Look up a field in the vtable, return an offset into the object, or 0 if the
   * field is not present.
   */
  __offset(t, e) {
    const r = t - this.readInt32(t);
    return e < this.readInt16(r) ? this.readInt16(r + e) : 0;
  }
  /**
   * Initialize any Table-derived type to point to the union at the given offset.
   */
  __union(t, e) {
    return t.bb_pos = e + this.readInt32(e), t.bb = this, t;
  }
  /**
   * Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
   * This allocates a new string and converts to wide chars upon each access.
   *
   * To avoid the conversion to UTF-16, pass Encoding.UTF8_BYTES as
   * the "optionalEncoding" argument. This is useful for avoiding conversion to
   * and from UTF-16 when the data will just be packaged back up in another
   * FlatBuffer later on.
   *
   * @param offset
   * @param opt_encoding Defaults to UTF16_STRING
   */
  __string(t, e) {
    t += this.readInt32(t);
    const r = this.readInt32(t);
    let i = "", s = 0;
    if (t += Xt, e === Ai.UTF8_BYTES)
      return this.bytes_.subarray(t, t + r);
    for (; s < r; ) {
      let o;
      const a = this.readUint8(t + s++);
      if (a < 192)
        o = a;
      else {
        const c = this.readUint8(t + s++);
        if (a < 224)
          o = (a & 31) << 6 | c & 63;
        else {
          const d = this.readUint8(t + s++);
          if (a < 240)
            o = (a & 15) << 12 | (c & 63) << 6 | d & 63;
          else {
            const h = this.readUint8(t + s++);
            o = (a & 7) << 18 | (c & 63) << 12 | (d & 63) << 6 | h & 63;
          }
        }
      }
      o < 65536 ? i += String.fromCharCode(o) : (o -= 65536, i += String.fromCharCode((o >> 10) + 55296, (o & 1023) + 56320));
    }
    return i;
  }
  /**
   * Handle unions that can contain string as its member, if a Table-derived type then initialize it,
   * if a string then return a new one
   *
   * WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
   * makes the behaviour of __union_with_string different compared to __union
   */
  __union_with_string(t, e) {
    return typeof t == "string" ? this.__string(e) : this.__union(t, e);
  }
  /**
   * Retrieve the relative offset stored at "offset"
   */
  __indirect(t) {
    return t + this.readInt32(t);
  }
  /**
   * Get the start of data of a vector whose offset is stored at "offset" in this object.
   */
  __vector(t) {
    return t + this.readInt32(t) + Xt;
  }
  /**
   * Get the length of a vector whose offset is stored at "offset" in this object.
   */
  __vector_len(t) {
    return this.readInt32(t + this.readInt32(t));
  }
  __has_identifier(t) {
    if (t.length != fe)
      throw new Error("FlatBuffers: file identifier must be length " + fe);
    for (let e = 0; e < fe; e++)
      if (t.charCodeAt(e) != this.readInt8(this.position() + Xt + e))
        return !1;
    return !0;
  }
  /**
   * A helper function to avoid generated code depending on this file directly.
   */
  createLong(t, e) {
    return ye.create(t, e);
  }
  /**
   * A helper function for generating list for obj api
   */
  createScalarList(t, e) {
    const r = [];
    for (let i = 0; i < e; ++i)
      t(i) !== null && r.push(t(i));
    return r;
  }
  /**
   * A helper function for generating list for obj api
   * @param listAccessor function that accepts an index and return data at that index
   * @param listLength listLength
   * @param res result list
   */
  createObjList(t, e) {
    const r = [];
    for (let i = 0; i < e; ++i) {
      const s = t(i);
      s !== null && r.push(s.unpack());
    }
    return r;
  }
}, Oa = class Fa {
  /**
   * Create a FlatBufferBuilder.
   */
  constructor(t) {
    this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
    let e;
    t ? e = t : e = 1024, this.bb = yn.allocate(e), this.space = e;
  }
  clear() {
    this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null;
  }
  /**
   * In order to save space, fields that are set to their default value
   * don't get serialized into the buffer. Forcing defaults provides a
   * way to manually disable this optimization.
   *
   * @param forceDefaults true always serializes default values
   */
  forceDefaults(t) {
    this.force_defaults = t;
  }
  /**
   * Get the ByteBuffer representing the FlatBuffer. Only call this after you've
   * called finish(). The actual data starts at the ByteBuffer's current position,
   * not necessarily at 0.
   */
  dataBuffer() {
    return this.bb;
  }
  /**
   * Get the bytes representing the FlatBuffer. Only call this after you've
   * called finish().
   */
  asUint8Array() {
    return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
  }
  /**
   * Prepare to write an element of `size` after `additional_bytes` have been
   * written, e.g. if you write a string, you need to align such the int length
   * field is aligned to 4 bytes, and the string data follows it directly. If all
   * you need to do is alignment, `additional_bytes` will be 0.
   *
   * @param size This is the of the new element to write
   * @param additional_bytes The padding size
   */
  prep(t, e) {
    t > this.minalign && (this.minalign = t);
    const r = ~(this.bb.capacity() - this.space + e) + 1 & t - 1;
    for (; this.space < r + t + e; ) {
      const i = this.bb.capacity();
      this.bb = Fa.growByteBuffer(this.bb), this.space += this.bb.capacity() - i;
    }
    this.pad(r);
  }
  pad(t) {
    for (let e = 0; e < t; e++)
      this.bb.writeInt8(--this.space, 0);
  }
  writeInt8(t) {
    this.bb.writeInt8(this.space -= 1, t);
  }
  writeInt16(t) {
    this.bb.writeInt16(this.space -= 2, t);
  }
  writeInt32(t) {
    this.bb.writeInt32(this.space -= 4, t);
  }
  writeInt64(t) {
    this.bb.writeInt64(this.space -= 8, t);
  }
  writeFloat32(t) {
    this.bb.writeFloat32(this.space -= 4, t);
  }
  writeFloat64(t) {
    this.bb.writeFloat64(this.space -= 8, t);
  }
  /**
   * Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int8` to add the the buffer.
   */
  addInt8(t) {
    this.prep(1, 0), this.writeInt8(t);
  }
  /**
   * Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int16` to add the the buffer.
   */
  addInt16(t) {
    this.prep(2, 0), this.writeInt16(t);
  }
  /**
   * Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int32` to add the the buffer.
   */
  addInt32(t) {
    this.prep(4, 0), this.writeInt32(t);
  }
  /**
   * Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `int64` to add the the buffer.
   */
  addInt64(t) {
    this.prep(8, 0), this.writeInt64(t);
  }
  /**
   * Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float32` to add the the buffer.
   */
  addFloat32(t) {
    this.prep(4, 0), this.writeFloat32(t);
  }
  /**
   * Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
   * @param value The `float64` to add the the buffer.
   */
  addFloat64(t) {
    this.prep(8, 0), this.writeFloat64(t);
  }
  addFieldInt8(t, e, r) {
    (this.force_defaults || e != r) && (this.addInt8(e), this.slot(t));
  }
  addFieldInt16(t, e, r) {
    (this.force_defaults || e != r) && (this.addInt16(e), this.slot(t));
  }
  addFieldInt32(t, e, r) {
    (this.force_defaults || e != r) && (this.addInt32(e), this.slot(t));
  }
  addFieldInt64(t, e, r) {
    (this.force_defaults || !e.equals(r)) && (this.addInt64(e), this.slot(t));
  }
  addFieldFloat32(t, e, r) {
    (this.force_defaults || e != r) && (this.addFloat32(e), this.slot(t));
  }
  addFieldFloat64(t, e, r) {
    (this.force_defaults || e != r) && (this.addFloat64(e), this.slot(t));
  }
  addFieldOffset(t, e, r) {
    (this.force_defaults || e != r) && (this.addOffset(e), this.slot(t));
  }
  /**
   * Structs are stored inline, so nothing additional is being added. `d` is always 0.
   */
  addFieldStruct(t, e, r) {
    e != r && (this.nested(e), this.slot(t));
  }
  /**
   * Structures are always stored inline, they need to be created right
   * where they're used.  You'll get this assertion failure if you
   * created it elsewhere.
   */
  nested(t) {
    if (t != this.offset())
      throw new Error("FlatBuffers: struct must be serialized inline.");
  }
  /**
   * Should not be creating any other object, string or vector
   * while an object is being constructed
   */
  notNested() {
    if (this.isNested)
      throw new Error("FlatBuffers: object serialization must not be nested.");
  }
  /**
   * Set the current vtable at `voffset` to the current location in the buffer.
   */
  slot(t) {
    this.vtable !== null && (this.vtable[t] = this.offset());
  }
  /**
   * @returns Offset relative to the end of the buffer.
   */
  offset() {
    return this.bb.capacity() - this.space;
  }
  /**
   * Doubles the size of the backing ByteBuffer and copies the old data towards
   * the end of the new buffer (since we build the buffer backwards).
   *
   * @param bb The current buffer with the existing data
   * @returns A new byte buffer with the old data copied
   * to it. The data is located at the end of the buffer.
   *
   * uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
   * it a uint8Array we need to suppress the type check:
   * @suppress {checkTypes}
   */
  static growByteBuffer(t) {
    const e = t.capacity();
    if (e & 3221225472)
      throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
    const r = e << 1, i = yn.allocate(r);
    return i.setPosition(r - e), i.bytes().set(t.bytes(), r - e), i;
  }
  /**
   * Adds on offset, relative to where it will be written.
   *
   * @param offset The offset to add.
   */
  addOffset(t) {
    this.prep(Xt, 0), this.writeInt32(this.offset() - t + Xt);
  }
  /**
   * Start encoding a new object in the buffer.  Users will not usually need to
   * call this directly. The FlatBuffers compiler will generate helper methods
   * that call this method internally.
   */
  startObject(t) {
    this.notNested(), this.vtable == null && (this.vtable = []), this.vtable_in_use = t;
    for (let e = 0; e < t; e++)
      this.vtable[e] = 0;
    this.isNested = !0, this.object_start = this.offset();
  }
  /**
   * Finish off writing the object that is under construction.
   *
   * @returns The offset to the object inside `dataBuffer`
   */
  endObject() {
    if (this.vtable == null || !this.isNested)
      throw new Error("FlatBuffers: endObject called without startObject");
    this.addInt32(0);
    const t = this.offset();
    let e = this.vtable_in_use - 1;
    for (; e >= 0 && this.vtable[e] == 0; e--)
      ;
    const r = e + 1;
    for (; e >= 0; e--)
      this.addInt16(this.vtable[e] != 0 ? t - this.vtable[e] : 0);
    const i = 2;
    this.addInt16(t - this.object_start);
    const s = (r + i) * ui;
    this.addInt16(s);
    let o = 0;
    const a = this.space;
    t: for (e = 0; e < this.vtables.length; e++) {
      const c = this.bb.capacity() - this.vtables[e];
      if (s == this.bb.readInt16(c)) {
        for (let d = ui; d < s; d += ui)
          if (this.bb.readInt16(a + d) != this.bb.readInt16(c + d))
            continue t;
        o = this.vtables[e];
        break;
      }
    }
    return o ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, o - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t;
  }
  /**
   * Finalize a buffer, poiting to the given `root_table`.
   */
  finish(t, e, r) {
    const i = r ? tt : 0;
    if (e) {
      const s = e;
      if (this.prep(this.minalign, Xt + fe + i), s.length != fe)
        throw new Error("FlatBuffers: file identifier must be length " + fe);
      for (let o = fe - 1; o >= 0; o--)
        this.writeInt8(s.charCodeAt(o));
    }
    this.prep(this.minalign, Xt + i), this.addOffset(t), i && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space);
  }
  /**
   * Finalize a size prefixed buffer, pointing to the given `root_table`.
   */
  finishSizePrefixed(t, e) {
    this.finish(t, e, !0);
  }
  /**
   * This checks a required field has been set in a given table that has
   * just been constructed.
   */
  requiredField(t, e) {
    const r = this.bb.capacity() - t, i = r - this.bb.readInt32(r);
    if (!(this.bb.readInt16(i + e) != 0))
      throw new Error("FlatBuffers: field " + e + " must be set");
  }
  /**
   * Start a new array/vector of objects.  Users usually will not call
   * this directly. The FlatBuffers compiler will create a start/end
   * method for vector types in generated code.
   *
   * @param elem_size The size of each element in the array
   * @param num_elems The number of elements in the array
   * @param alignment The alignment of the array
   */
  startVector(t, e, r) {
    this.notNested(), this.vector_num_elems = e, this.prep(Xt, t * e), this.prep(r, t * e);
  }
  /**
   * Finish off the creation of an array and all its elements. The array must be
   * created with `startVector`.
   *
   * @returns The offset at which the newly created array
   * starts.
   */
  endVector() {
    return this.writeInt32(this.vector_num_elems), this.offset();
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If the string passed has
   * already been seen, we return the offset of the already written string
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createSharedString(t) {
    if (!t)
      return 0;
    if (this.string_maps || (this.string_maps = /* @__PURE__ */ new Map()), this.string_maps.has(t))
      return this.string_maps.get(t);
    const e = this.createString(t);
    return this.string_maps.set(t, e), e;
  }
  /**
   * Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
   * instead of a string, it is assumed to contain valid UTF-8 encoded data.
   *
   * @param s The string to encode
   * @return The offset in the buffer where the encoded string starts
   */
  createString(t) {
    if (!t)
      return 0;
    let e;
    if (t instanceof Uint8Array)
      e = t;
    else {
      e = [];
      let r = 0;
      for (; r < t.length; ) {
        let i;
        const s = t.charCodeAt(r++);
        if (s < 55296 || s >= 56320)
          i = s;
        else {
          const o = t.charCodeAt(r++);
          i = (s << 10) + o + -56613888;
        }
        i < 128 ? e.push(i) : (i < 2048 ? e.push(i >> 6 & 31 | 192) : (i < 65536 ? e.push(i >> 12 & 15 | 224) : e.push(i >> 18 & 7 | 240, i >> 12 & 63 | 128), e.push(i >> 6 & 63 | 128)), e.push(i & 63 | 128));
      }
    }
    this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length);
    for (let r = 0, i = this.space, s = this.bb.bytes(); r < e.length; r++)
      s[i++] = e[r];
    return this.endVector();
  }
  /**
   * A helper function to avoid generated code depending on this file directly.
   */
  createLong(t, e) {
    return ye.create(t, e);
  }
  /**
   * A helper function to pack an object
   *
   * @returns offset of obj
   */
  createObjectOffset(t) {
    return t === null ? 0 : typeof t == "string" ? this.createString(t) : t.pack(this);
  }
  /**
   * A helper function to pack a list of object
   *
   * @returns list of offsets of each non null object
   */
  createObjectOffsetList(t) {
    const e = [];
    for (let r = 0; r < t.length; ++r) {
      const i = t[r];
      if (i !== null)
        e.push(this.createObjectOffset(i));
      else
        throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
    }
    return e;
  }
  createStructOffsetList(t, e) {
    return e(this, t.length), this.createObjectOffsetList(t), this.endVector();
  }
};
class ht {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsKeyValue(t, e) {
    return (e || new ht()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsKeyValue(t, e) {
    return t.setPosition(t.position() + tt), (e || new ht()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  key(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  value(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startKeyValue(t) {
    t.startObject(2);
  }
  static addKey(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addValue(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endKeyValue(t) {
    return t.endObject();
  }
  static createKeyValue(t, e, r) {
    return ht.startKeyValue(t), ht.addKey(t, e), ht.addValue(t, r), ht.endKeyValue(t);
  }
}
var mn;
(function(n) {
  n[n.V1 = 0] = "V1", n[n.V2 = 1] = "V2", n[n.V3 = 2] = "V3", n[n.V4 = 3] = "V4", n[n.V5 = 4] = "V5";
})(mn || (mn = {}));
var gn;
(function(n) {
  n[n.Little = 0] = "Little", n[n.Big = 1] = "Big";
})(gn || (gn = {}));
var Nr;
(function(n) {
  n[n.DenseArray = 0] = "DenseArray";
})(Nr || (Nr = {}));
class Rt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInt(t, e) {
    return (e || new Rt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInt(t, e) {
    return t.setPosition(t.position() + tt), (e || new Rt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  isSigned() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startInt(t) {
    t.startObject(2);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addIsSigned(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static endInt(t) {
    return t.endObject();
  }
  static createInt(t, e, r) {
    return Rt.startInt(t), Rt.addBitWidth(t, e), Rt.addIsSigned(t, r), Rt.endInt(t);
  }
}
class pe {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryEncoding(t, e) {
    return (e || new pe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryEncoding(t, e) {
    return t.setPosition(t.position() + tt), (e || new pe()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * The known dictionary id in the application where this data is used. In
   * the file or streaming formats, the dictionary ids are found in the
   * DictionaryBatch messages
   */
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  /**
   * The dictionary indices are constrained to be non-negative integers. If
   * this field is null, the indices must be signed int32. To maximize
   * cross-language compatibility and performance, implementations are
   * recommended to prefer signed integer types over unsigned integer types
   * and to avoid uint64 indices unless they are required by an application.
   */
  indexType(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Rt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * By default, dictionaries are not ordered, or the order does not have
   * semantic meaning. In some statistical, applications, dictionary-encoding
   * is used to represent ordered categorical data, and we provide a way to
   * preserve that metadata here
   */
  isOrdered() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  dictionaryKind() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt16(this.bb_pos + t) : Nr.DenseArray;
  }
  static startDictionaryEncoding(t) {
    t.startObject(4);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, t.createLong(0, 0));
  }
  static addIndexType(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsOrdered(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static addDictionaryKind(t, e) {
    t.addFieldInt16(3, e, Nr.DenseArray);
  }
  static endDictionaryEncoding(t) {
    return t.endObject();
  }
}
class ke {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBinary(t, e) {
    return (e || new ke()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBinary(t, e) {
    return t.setPosition(t.position() + tt), (e || new ke()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBinary(t) {
    t.startObject(0);
  }
  static endBinary(t) {
    return t.endObject();
  }
  static createBinary(t) {
    return ke.startBinary(t), ke.endBinary(t);
  }
}
class je {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBool(t, e) {
    return (e || new je()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBool(t, e) {
    return t.setPosition(t.position() + tt), (e || new je()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startBool(t) {
    t.startObject(0);
  }
  static endBool(t) {
    return t.endObject();
  }
  static createBool(t) {
    return je.startBool(t), je.endBool(t);
  }
}
var Cr;
(function(n) {
  n[n.DAY = 0] = "DAY", n[n.MILLISECOND = 1] = "MILLISECOND";
})(Cr || (Cr = {}));
let fr = class sn {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDate(t, e) {
    return (e || new sn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDate(t, e) {
    return t.setPosition(t.position() + tt), (e || new sn()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Cr.MILLISECOND;
  }
  static startDate(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Cr.MILLISECOND);
  }
  static endDate(t) {
    return t.endObject();
  }
  static createDate(t, e) {
    return sn.startDate(t), sn.addUnit(t, e), sn.endDate(t);
  }
};
class It {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDecimal(t, e) {
    return (e || new It()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDecimal(t, e) {
    return t.setPosition(t.position() + tt), (e || new It()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Total number of decimal digits
   */
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of digits after the decimal point "."
   */
  scale() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  /**
   * Number of bits per value. The only accepted widths are 128 and 256.
   * We use bitWidth for consistency with Int::bitWidth.
   */
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readInt32(this.bb_pos + t) : 128;
  }
  static startDecimal(t) {
    t.startObject(3);
  }
  static addPrecision(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static addScale(t, e) {
    t.addFieldInt32(1, e, 0);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(2, e, 128);
  }
  static endDecimal(t) {
    return t.endObject();
  }
  static createDecimal(t, e, r, i) {
    return It.startDecimal(t), It.addPrecision(t, e), It.addScale(t, r), It.addBitWidth(t, i), It.endDecimal(t);
  }
}
var bn;
(function(n) {
  n[n.SECOND = 0] = "SECOND", n[n.MILLISECOND = 1] = "MILLISECOND", n[n.MICROSECOND = 2] = "MICROSECOND", n[n.NANOSECOND = 3] = "NANOSECOND";
})(bn || (bn = {}));
class Qt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeBinary(t, e) {
    return (e || new Qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeBinary(t, e) {
    return t.setPosition(t.position() + tt), (e || new Qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of bytes per value
   */
  byteWidth() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeBinary(t) {
    t.startObject(1);
  }
  static addByteWidth(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeBinary(t) {
    return t.endObject();
  }
  static createFixedSizeBinary(t, e) {
    return Qt.startFixedSizeBinary(t), Qt.addByteWidth(t, e), Qt.endFixedSizeBinary(t);
  }
}
class te {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFixedSizeList(t, e) {
    return (e || new te()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFixedSizeList(t, e) {
    return t.setPosition(t.position() + tt), (e || new te()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Number of list items per value
   */
  listSize() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt32(this.bb_pos + t) : 0;
  }
  static startFixedSizeList(t) {
    t.startObject(1);
  }
  static addListSize(t, e) {
    t.addFieldInt32(0, e, 0);
  }
  static endFixedSizeList(t) {
    return t.endObject();
  }
  static createFixedSizeList(t, e) {
    return te.startFixedSizeList(t), te.addListSize(t, e), te.endFixedSizeList(t);
  }
}
var Lr;
(function(n) {
  n[n.HALF = 0] = "HALF", n[n.SINGLE = 1] = "SINGLE", n[n.DOUBLE = 2] = "DOUBLE";
})(Lr || (Lr = {}));
class ee {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFloatingPoint(t, e) {
    return (e || new ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFloatingPoint(t, e) {
    return t.setPosition(t.position() + tt), (e || new ee()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  precision() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Lr.HALF;
  }
  static startFloatingPoint(t) {
    t.startObject(1);
  }
  static addPrecision(t, e) {
    t.addFieldInt16(0, e, Lr.HALF);
  }
  static endFloatingPoint(t) {
    return t.endObject();
  }
  static createFloatingPoint(t, e) {
    return ee.startFloatingPoint(t), ee.addPrecision(t, e), ee.endFloatingPoint(t);
  }
}
var Ur;
(function(n) {
  n[n.YEAR_MONTH = 0] = "YEAR_MONTH", n[n.DAY_TIME = 1] = "DAY_TIME", n[n.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO";
})(Ur || (Ur = {}));
class ne {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsInterval(t, e) {
    return (e || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsInterval(t, e) {
    return t.setPosition(t.position() + tt), (e || new ne()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Ur.YEAR_MONTH;
  }
  static startInterval(t) {
    t.startObject(1);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, Ur.YEAR_MONTH);
  }
  static endInterval(t) {
    return t.endObject();
  }
  static createInterval(t, e) {
    return ne.startInterval(t), ne.addUnit(t, e), ne.endInterval(t);
  }
}
class Ve {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsList(t, e) {
    return (e || new Ve()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsList(t, e) {
    return t.setPosition(t.position() + tt), (e || new Ve()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startList(t) {
    t.startObject(0);
  }
  static endList(t) {
    return t.endObject();
  }
  static createList(t) {
    return Ve.startList(t), Ve.endList(t);
  }
}
let pr = class on {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMap(t, e) {
    return (e || new on()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMap(t, e) {
    return t.setPosition(t.position() + tt), (e || new on()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Set to true if the keys within each value are sorted
   */
  keysSorted() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startMap(t) {
    t.startObject(1);
  }
  static addKeysSorted(t, e) {
    t.addFieldInt8(0, +e, 0);
  }
  static endMap(t) {
    return t.endObject();
  }
  static createMap(t, e) {
    return on.startMap(t), on.addKeysSorted(t, e), on.endMap(t);
  }
};
class $e {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsNull(t, e) {
    return (e || new $e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsNull(t, e) {
    return t.setPosition(t.position() + tt), (e || new $e()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startNull(t) {
    t.startObject(0);
  }
  static endNull(t) {
    return t.endObject();
  }
  static createNull(t) {
    return $e.startNull(t), $e.endNull(t);
  }
}
class ze {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsStruct_(t, e) {
    return (e || new ze()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsStruct_(t, e) {
    return t.setPosition(t.position() + tt), (e || new ze()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startStruct_(t) {
    t.startObject(0);
  }
  static endStruct_(t) {
    return t.endObject();
  }
  static createStruct_(t) {
    return ze.startStruct_(t), ze.endStruct_(t);
  }
}
class Pt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTime(t, e) {
    return (e || new Pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTime(t, e) {
    return t.setPosition(t.position() + tt), (e || new Pt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : bn.MILLISECOND;
  }
  bitWidth() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt32(this.bb_pos + t) : 32;
  }
  static startTime(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, bn.MILLISECOND);
  }
  static addBitWidth(t, e) {
    t.addFieldInt32(1, e, 32);
  }
  static endTime(t) {
    return t.endObject();
  }
  static createTime(t, e, r) {
    return Pt.startTime(t), Pt.addUnit(t, e), Pt.addBitWidth(t, r), Pt.endTime(t);
  }
}
class kt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsTimestamp(t, e) {
    return (e || new kt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsTimestamp(t, e) {
    return t.setPosition(t.position() + tt), (e || new kt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  unit() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : bn.SECOND;
  }
  timezone(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  static startTimestamp(t) {
    t.startObject(2);
  }
  static addUnit(t, e) {
    t.addFieldInt16(0, e, bn.SECOND);
  }
  static addTimezone(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static endTimestamp(t) {
    return t.endObject();
  }
  static createTimestamp(t, e, r) {
    return kt.startTimestamp(t), kt.addUnit(t, e), kt.addTimezone(t, r), kt.endTimestamp(t);
  }
}
var Pr;
(function(n) {
  n[n.Sparse = 0] = "Sparse", n[n.Dense = 1] = "Dense";
})(Pr || (Pr = {}));
class At {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUnion(t, e) {
    return (e || new At()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUnion(t, e) {
    return t.setPosition(t.position() + tt), (e || new At()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  mode() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : Pr.Sparse;
  }
  typeIds(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + t * 4) : 0;
  }
  typeIdsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  typeIdsArray() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null;
  }
  static startUnion(t) {
    t.startObject(2);
  }
  static addMode(t, e) {
    t.addFieldInt16(0, e, Pr.Sparse);
  }
  static addTypeIds(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createTypeIdsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let r = e.length - 1; r >= 0; r--)
      t.addInt32(e[r]);
    return t.endVector();
  }
  static startTypeIdsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endUnion(t) {
    return t.endObject();
  }
  static createUnion(t, e, r) {
    return At.startUnion(t), At.addMode(t, e), At.addTypeIds(t, r), At.endUnion(t);
  }
}
class Ye {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsUtf8(t, e) {
    return (e || new Ye()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsUtf8(t, e) {
    return t.setPosition(t.position() + tt), (e || new Ye()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static startUtf8(t) {
    t.startObject(0);
  }
  static endUtf8(t) {
    return t.endObject();
  }
  static createUtf8(t) {
    return Ye.startUtf8(t), Ye.endUtf8(t);
  }
}
var st;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Null = 1] = "Null", n[n.Int = 2] = "Int", n[n.FloatingPoint = 3] = "FloatingPoint", n[n.Binary = 4] = "Binary", n[n.Utf8 = 5] = "Utf8", n[n.Bool = 6] = "Bool", n[n.Decimal = 7] = "Decimal", n[n.Date = 8] = "Date", n[n.Time = 9] = "Time", n[n.Timestamp = 10] = "Timestamp", n[n.Interval = 11] = "Interval", n[n.List = 12] = "List", n[n.Struct_ = 13] = "Struct_", n[n.Union = 14] = "Union", n[n.FixedSizeBinary = 15] = "FixedSizeBinary", n[n.FixedSizeList = 16] = "FixedSizeList", n[n.Map = 17] = "Map", n[n.Duration = 18] = "Duration", n[n.LargeBinary = 19] = "LargeBinary", n[n.LargeUtf8 = 20] = "LargeUtf8", n[n.LargeList = 21] = "LargeList";
})(st || (st = {}));
let Lt = class yr {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsField(t, e) {
    return (e || new yr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsField(t, e) {
    return t.setPosition(t.position() + tt), (e || new yr()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  name(t) {
    const e = this.bb.__offset(this.bb_pos, 4);
    return e ? this.bb.__string(this.bb_pos + e, t) : null;
  }
  /**
   * Whether or not this field can contain nulls. Should be true in general.
   */
  nullable() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  typeType() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.readUint8(this.bb_pos + t) : st.NONE;
  }
  /**
   * This is the type of the decoded value if the field is dictionary encoded.
   */
  // @ts-ignore
  type(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  /**
   * Present only if the field is dictionary encoded.
   */
  dictionary(t) {
    const e = this.bb.__offset(this.bb_pos, 12);
    return e ? (t || new pe()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * children apply only to nested data types like Struct, List and Union. For
   * primitive types children will have length 0.
   */
  children(t, e) {
    const r = this.bb.__offset(this.bb_pos, 14);
    return r ? (e || new yr()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
  }
  childrenLength() {
    const t = this.bb.__offset(this.bb_pos, 14);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const r = this.bb.__offset(this.bb_pos, 16);
    return r ? (e || new ht()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 16);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startField(t) {
    t.startObject(7);
  }
  static addName(t, e) {
    t.addFieldOffset(0, e, 0);
  }
  static addNullable(t, e) {
    t.addFieldInt8(1, +e, 0);
  }
  static addTypeType(t, e) {
    t.addFieldInt8(2, e, st.NONE);
  }
  static addType(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static addDictionary(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static addChildren(t, e) {
    t.addFieldOffset(5, e, 0);
  }
  static createChildrenVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let r = e.length - 1; r >= 0; r--)
      t.addOffset(e[r]);
    return t.endVector();
  }
  static startChildrenVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(6, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let r = e.length - 1; r >= 0; r--)
      t.addOffset(e[r]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endField(t) {
    return t.endObject();
  }
}, Kt = class le {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsSchema(t, e) {
    return (e || new le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsSchema(t, e) {
    return t.setPosition(t.position() + tt), (e || new le()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * endianness of the buffer
   * it is Little Endian by default
   * if endianness doesn't match the underlying system then the vectors need to be converted
   */
  endianness() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : gn.Little;
  }
  fields(t, e) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (e || new Lt()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
  }
  fieldsLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  customMetadata(t, e) {
    const r = this.bb.__offset(this.bb_pos, 8);
    return r ? (e || new ht()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Features used in the stream/file.
   */
  features(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + t * 8) : this.bb.createLong(0, 0);
  }
  featuresLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startSchema(t) {
    t.startObject(4);
  }
  static addEndianness(t, e) {
    t.addFieldInt16(0, e, gn.Little);
  }
  static addFields(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static createFieldsVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let r = e.length - 1; r >= 0; r--)
      t.addOffset(e[r]);
    return t.endVector();
  }
  static startFieldsVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let r = e.length - 1; r >= 0; r--)
      t.addOffset(e[r]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static addFeatures(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static createFeaturesVector(t, e) {
    t.startVector(8, e.length, 8);
    for (let r = e.length - 1; r >= 0; r--)
      t.addInt64(e[r]);
    return t.endVector();
  }
  static startFeaturesVector(t, e) {
    t.startVector(8, e, 8);
  }
  static endSchema(t) {
    return t.endObject();
  }
  static finishSchemaBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedSchemaBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createSchema(t, e, r, i, s) {
    return le.startSchema(t), le.addEndianness(t, e), le.addFields(t, r), le.addCustomMetadata(t, i), le.addFeatures(t, s), le.endSchema(t);
  }
};
class Et {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsFooter(t, e) {
    return (e || new Et()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsFooter(t, e) {
    return t.setPosition(t.position() + tt), (e || new Et()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : mn.V1;
  }
  schema(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new Kt()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  dictionaries(t, e) {
    const r = this.bb.__offset(this.bb_pos, 8);
    return r ? (e || new Si()).__init(this.bb.__vector(this.bb_pos + r) + t * 24, this.bb) : null;
  }
  dictionariesLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  recordBatches(t, e) {
    const r = this.bb.__offset(this.bb_pos, 10);
    return r ? (e || new Si()).__init(this.bb.__vector(this.bb_pos + r) + t * 24, this.bb) : null;
  }
  recordBatchesLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * User-defined metadata
   */
  customMetadata(t, e) {
    const r = this.bb.__offset(this.bb_pos, 12);
    return r ? (e || new ht()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startFooter(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, mn.V1);
  }
  static addSchema(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addDictionaries(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startDictionariesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addRecordBatches(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static startRecordBatchesVector(t, e) {
    t.startVector(24, e, 8);
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let r = e.length - 1; r >= 0; r--)
      t.addOffset(e[r]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endFooter(t) {
    return t.endObject();
  }
  static finishFooterBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedFooterBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
}
class K {
  constructor(t = [], e, r) {
    this.fields = t || [], this.metadata = e || /* @__PURE__ */ new Map(), r || (r = Bi(t)), this.dictionaries = r;
  }
  get [Symbol.toStringTag]() {
    return "Schema";
  }
  get names() {
    return this.fields.map((t) => t.name);
  }
  toString() {
    return `Schema<{ ${this.fields.map((t, e) => `${e}: ${t}`).join(", ")} }>`;
  }
  /**
   * Construct a new Schema containing only specified fields.
   *
   * @param fieldNames Names of fields to keep.
   * @returns A new Schema of fields matching the specified names.
   */
  select(t) {
    const e = new Set(t), r = this.fields.filter((i) => e.has(i.name));
    return new K(r, this.metadata);
  }
  /**
   * Construct a new Schema containing only fields at the specified indices.
   *
   * @param fieldIndices Indices of fields to keep.
   * @returns A new Schema of fields at the specified indices.
   */
  selectAt(t) {
    const e = t.map((r) => this.fields[r]).filter(Boolean);
    return new K(e, this.metadata);
  }
  assign(...t) {
    const e = t[0] instanceof K ? t[0] : Array.isArray(t[0]) ? new K(t[0]) : new K(t), r = [...this.fields], i = ar(ar(/* @__PURE__ */ new Map(), this.metadata), e.metadata), s = e.fields.filter((a) => {
      const c = r.findIndex((d) => d.name === a.name);
      return ~c ? (r[c] = a.clone({
        metadata: ar(ar(/* @__PURE__ */ new Map(), r[c].metadata), a.metadata)
      })) && !1 : !0;
    }), o = Bi(s, /* @__PURE__ */ new Map());
    return new K([...r, ...s], i, new Map([...this.dictionaries, ...o]));
  }
}
K.prototype.fields = null;
K.prototype.metadata = null;
K.prototype.dictionaries = null;
class it {
  constructor(t, e, r = !1, i) {
    this.name = t, this.type = e, this.nullable = r, this.metadata = i || /* @__PURE__ */ new Map();
  }
  /** @nocollapse */
  static new(...t) {
    let [e, r, i, s] = t;
    return t[0] && typeof t[0] == "object" && ({ name: e } = t[0], r === void 0 && (r = t[0].type), i === void 0 && (i = t[0].nullable), s === void 0 && (s = t[0].metadata)), new it(`${e}`, r, i, s);
  }
  get typeId() {
    return this.type.typeId;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    return `${this.name}: ${this.type}`;
  }
  clone(...t) {
    let [e, r, i, s] = t;
    return !t[0] || typeof t[0] != "object" ? [e = this.name, r = this.type, i = this.nullable, s = this.metadata] = t : { name: e = this.name, type: r = this.type, nullable: i = this.nullable, metadata: s = this.metadata } = t[0], it.new(e, r, i, s);
  }
}
it.prototype.type = null;
it.prototype.name = null;
it.prototype.nullable = null;
it.prototype.metadata = null;
function ar(n, t) {
  return new Map([...n || /* @__PURE__ */ new Map(), ...t || /* @__PURE__ */ new Map()]);
}
function Bi(n, t = /* @__PURE__ */ new Map()) {
  for (let e = -1, r = n.length; ++e < r; ) {
    const s = n[e].type;
    if (A.isDictionary(s)) {
      if (!t.has(s.id))
        t.set(s.id, s.dictionary);
      else if (t.get(s.id) !== s.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    s.children && s.children.length > 0 && Bi(s.children, t);
  }
  return t;
}
var js = ye, bu = Oa, _u = yn;
class Wn {
  constructor(t, e = xt.V4, r, i) {
    this.schema = t, this.version = e, r && (this._recordBatches = r), i && (this._dictionaryBatches = i);
  }
  /** @nocollapse */
  static decode(t) {
    t = new _u($(t));
    const e = Et.getRootAsFooter(t), r = K.decode(e.schema());
    return new vu(r, e);
  }
  /** @nocollapse */
  static encode(t) {
    const e = new bu(), r = K.encode(e, t.schema);
    Et.startRecordBatchesVector(e, t.numRecordBatches);
    for (const o of [...t.recordBatches()].slice().reverse())
      De.encode(e, o);
    const i = e.endVector();
    Et.startDictionariesVector(e, t.numDictionaries);
    for (const o of [...t.dictionaryBatches()].slice().reverse())
      De.encode(e, o);
    const s = e.endVector();
    return Et.startFooter(e), Et.addSchema(e, r), Et.addVersion(e, xt.V4), Et.addRecordBatches(e, i), Et.addDictionaries(e, s), Et.finishFooterBuffer(e, Et.endFooter(e)), e.asUint8Array();
  }
  get numRecordBatches() {
    return this._recordBatches.length;
  }
  get numDictionaries() {
    return this._dictionaryBatches.length;
  }
  *recordBatches() {
    for (let t, e = -1, r = this.numRecordBatches; ++e < r; )
      (t = this.getRecordBatch(e)) && (yield t);
  }
  *dictionaryBatches() {
    for (let t, e = -1, r = this.numDictionaries; ++e < r; )
      (t = this.getDictionaryBatch(e)) && (yield t);
  }
  getRecordBatch(t) {
    return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null;
  }
  getDictionaryBatch(t) {
    return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null;
  }
}
class vu extends Wn {
  constructor(t, e) {
    super(t, e.version()), this._footer = e;
  }
  get numRecordBatches() {
    return this._footer.recordBatchesLength();
  }
  get numDictionaries() {
    return this._footer.dictionariesLength();
  }
  getRecordBatch(t) {
    if (t >= 0 && t < this.numRecordBatches) {
      const e = this._footer.recordBatches(t);
      if (e)
        return De.decode(e);
    }
    return null;
  }
  getDictionaryBatch(t) {
    if (t >= 0 && t < this.numDictionaries) {
      const e = this._footer.dictionaries(t);
      if (e)
        return De.decode(e);
    }
    return null;
  }
}
class De {
  constructor(t, e, r) {
    this.metaDataLength = t, this.offset = typeof r == "number" ? r : r.low, this.bodyLength = typeof e == "number" ? e : e.low;
  }
  /** @nocollapse */
  static decode(t) {
    return new De(t.metaDataLength(), t.bodyLength(), t.offset());
  }
  /** @nocollapse */
  static encode(t, e) {
    const { metaDataLength: r } = e, i = new js(e.offset, 0), s = new js(e.bodyLength, 0);
    return Si.createBlock(t, i, r, s);
  }
}
const ot = Object.freeze({ done: !0, value: void 0 });
class Vs {
  constructor(t) {
    this._json = t;
  }
  get schema() {
    return this._json.schema;
  }
  get batches() {
    return this._json.batches || [];
  }
  get dictionaries() {
    return this._json.dictionaries || [];
  }
}
class qi {
  tee() {
    return this._getDOMStream().tee();
  }
  pipe(t, e) {
    return this._getNodeStream().pipe(t, e);
  }
  pipeTo(t, e) {
    return this._getDOMStream().pipeTo(t, e);
  }
  pipeThrough(t, e) {
    return this._getDOMStream().pipeThrough(t, e);
  }
  _getDOMStream() {
    return this._DOMStream || (this._DOMStream = this.toDOMStream());
  }
  _getNodeStream() {
    return this._nodeStream || (this._nodeStream = this.toNodeStream());
  }
}
class wu extends qi {
  constructor() {
    super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t) => this._closedPromiseResolve = t);
  }
  get closed() {
    return this._closedPromise;
  }
  cancel(t) {
    return I(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  write(t) {
    this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({ done: !1, value: t }));
  }
  abort(t) {
    this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = { error: t } : this.resolvers.shift().reject({ done: !0, value: t }));
  }
  close() {
    if (this._closedPromiseResolve) {
      const { resolvers: t } = this;
      for (; t.length > 0; )
        t.shift().resolve(ot);
      this._closedPromiseResolve(), this._closedPromiseResolve = void 0;
    }
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  toDOMStream(t) {
    return Ut.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  toNodeStream(t) {
    return Ut.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t);
  }
  throw(t) {
    return I(this, void 0, void 0, function* () {
      return yield this.abort(t), ot;
    });
  }
  return(t) {
    return I(this, void 0, void 0, function* () {
      return yield this.close(), ot;
    });
  }
  read(t) {
    return I(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return I(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(...t) {
    return this._values.length > 0 ? Promise.resolve({ done: !1, value: this._values.shift() }) : this._error ? Promise.reject({ done: !0, value: this._error.error }) : this._closedPromiseResolve ? new Promise((e, r) => {
      this.resolvers.push({ resolve: e, reject: r });
    }) : Promise.resolve(ot);
  }
  _ensureOpen() {
    if (this._closedPromiseResolve)
      return !0;
    throw new Error("AsyncQueue is closed");
  }
}
class mr extends wu {
  write(t) {
    if ((t = $(t)).byteLength > 0)
      return super.write(t);
  }
  toString(t = !1) {
    return t ? gi(this.toUint8Array(!0)) : this.toUint8Array(!1).then(gi);
  }
  toUint8Array(t = !1) {
    return t ? se(this._values)[0] : I(this, void 0, void 0, function* () {
      var e, r;
      const i = [];
      let s = 0;
      try {
        for (var o = We(this), a; a = yield o.next(), !a.done; ) {
          const c = a.value;
          i.push(c), s += c.byteLength;
        }
      } catch (c) {
        e = { error: c };
      } finally {
        try {
          a && !a.done && (r = o.return) && (yield r.call(o));
        } finally {
          if (e) throw e.error;
        }
      }
      return se(i, s)[0];
    });
  }
}
class kr {
  constructor(t) {
    t && (this.source = new Su(Ut.fromIterable(t)));
  }
  [Symbol.iterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class _n {
  constructor(t) {
    t instanceof _n ? this.source = t.source : t instanceof mr ? this.source = new Pe(Ut.fromAsyncIterable(t)) : co(t) ? this.source = new Pe(Ut.fromNodeStream(t)) : Ni(t) ? this.source = new Pe(Ut.fromDOMStream(t)) : ao(t) ? this.source = new Pe(Ut.fromDOMStream(t.body)) : Kn(t) ? this.source = new Pe(Ut.fromIterable(t)) : Ae(t) ? this.source = new Pe(Ut.fromAsyncIterable(t)) : wn(t) && (this.source = new Pe(Ut.fromAsyncIterable(t)));
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next(t) {
    return this.source.next(t);
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  get closed() {
    return this.source.closed;
  }
  cancel(t) {
    return this.source.cancel(t);
  }
  peek(t) {
    return this.source.peek(t);
  }
  read(t) {
    return this.source.read(t);
  }
}
class Su {
  constructor(t) {
    this.source = t;
  }
  cancel(t) {
    this.return(t);
  }
  peek(t) {
    return this.next(t, "peek").value;
  }
  read(t) {
    return this.next(t, "read").value;
  }
  next(t, e = "read") {
    return this.source.next({ cmd: e, size: t });
  }
  throw(t) {
    return Object.create(this.source.throw && this.source.throw(t) || ot);
  }
  return(t) {
    return Object.create(this.source.return && this.source.return(t) || ot);
  }
}
class Pe {
  constructor(t) {
    this.source = t, this._closedPromise = new Promise((e) => this._closedPromiseResolve = e);
  }
  cancel(t) {
    return I(this, void 0, void 0, function* () {
      yield this.return(t);
    });
  }
  get closed() {
    return this._closedPromise;
  }
  read(t) {
    return I(this, void 0, void 0, function* () {
      return (yield this.next(t, "read")).value;
    });
  }
  peek(t) {
    return I(this, void 0, void 0, function* () {
      return (yield this.next(t, "peek")).value;
    });
  }
  next(t, e = "read") {
    return I(this, void 0, void 0, function* () {
      return yield this.source.next({ cmd: e, size: t });
    });
  }
  throw(t) {
    return I(this, void 0, void 0, function* () {
      const e = this.source.throw && (yield this.source.throw(t)) || ot;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
  return(t) {
    return I(this, void 0, void 0, function* () {
      const e = this.source.return && (yield this.source.return(t)) || ot;
      return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e);
    });
  }
}
class $s extends kr {
  constructor(t, e) {
    super(), this.position = 0, this.buffer = $(t), this.size = typeof e > "u" ? this.buffer.byteLength : e;
  }
  readInt32(t) {
    const { buffer: e, byteOffset: r } = this.readAt(t, 4);
    return new DataView(e, r).getInt32(0, !0);
  }
  seek(t) {
    return this.position = Math.min(t, this.size), t < this.size;
  }
  read(t) {
    const { buffer: e, size: r, position: i } = this;
    return e && i < r ? (typeof t != "number" && (t = Number.POSITIVE_INFINITY), this.position = Math.min(r, i + Math.min(r - i, t)), e.subarray(i, this.position)) : null;
  }
  readAt(t, e) {
    const r = this.buffer, i = Math.min(this.size, t + e);
    return r ? r.subarray(t, i) : new Uint8Array(e);
  }
  close() {
    this.buffer && (this.buffer = null);
  }
  throw(t) {
    return this.close(), { done: !0, value: t };
  }
  return(t) {
    return this.close(), { done: !0, value: t };
  }
}
class jr extends _n {
  constructor(t, e) {
    super(), this.position = 0, this._handle = t, typeof e == "number" ? this.size = e : this._pending = I(this, void 0, void 0, function* () {
      this.size = (yield t.stat()).size, delete this._pending;
    });
  }
  readInt32(t) {
    return I(this, void 0, void 0, function* () {
      const { buffer: e, byteOffset: r } = yield this.readAt(t, 4);
      return new DataView(e, r).getInt32(0, !0);
    });
  }
  seek(t) {
    return I(this, void 0, void 0, function* () {
      return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size;
    });
  }
  read(t) {
    return I(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: e, size: r, position: i } = this;
      if (e && i < r) {
        typeof t != "number" && (t = Number.POSITIVE_INFINITY);
        let s = i, o = 0, a = 0;
        const c = Math.min(r, s + Math.min(r - s, t)), d = new Uint8Array(Math.max(0, (this.position = c) - s));
        for (; (s += a) < c && (o += a) < d.byteLength; )
          ({ bytesRead: a } = yield e.read(d, o, d.byteLength - o, s));
        return d;
      }
      return null;
    });
  }
  readAt(t, e) {
    return I(this, void 0, void 0, function* () {
      this._pending && (yield this._pending);
      const { _handle: r, size: i } = this;
      if (r && t + e < i) {
        const s = Math.min(i, t + e), o = new Uint8Array(s - t);
        return (yield r.read(o, 0, e, t)).buffer;
      }
      return new Uint8Array(e);
    });
  }
  close() {
    return I(this, void 0, void 0, function* () {
      const t = this._handle;
      this._handle = null, t && (yield t.close());
    });
  }
  throw(t) {
    return I(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
  return(t) {
    return I(this, void 0, void 0, function* () {
      return yield this.close(), { done: !0, value: t };
    });
  }
}
const Iu = 65536;
function cn(n) {
  return n < 0 && (n = 4294967295 + n + 1), `0x${n.toString(16)}`;
}
const vn = 8, Ki = [
  1,
  10,
  100,
  1e3,
  1e4,
  1e5,
  1e6,
  1e7,
  1e8
];
class Da {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return this.buffer[1];
  }
  low() {
    return this.buffer[0];
  }
  _times(t) {
    const e = new Uint32Array([
      this.buffer[1] >>> 16,
      this.buffer[1] & 65535,
      this.buffer[0] >>> 16,
      this.buffer[0] & 65535
    ]), r = new Uint32Array([
      t.buffer[1] >>> 16,
      t.buffer[1] & 65535,
      t.buffer[0] >>> 16,
      t.buffer[0] & 65535
    ]);
    let i = e[3] * r[3];
    this.buffer[0] = i & 65535;
    let s = i >>> 16;
    return i = e[2] * r[3], s += i, i = e[3] * r[2] >>> 0, s += i, this.buffer[0] += s << 16, this.buffer[1] = s >>> 0 < i ? Iu : 0, this.buffer[1] += s >>> 16, this.buffer[1] += e[1] * r[3] + e[2] * r[2] + e[3] * r[1], this.buffer[1] += e[0] * r[3] + e[1] * r[2] + e[2] * r[1] + e[3] * r[0] << 16, this;
  }
  _plus(t) {
    const e = this.buffer[0] + t.buffer[0] >>> 0;
    this.buffer[1] += t.buffer[1], e < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = e;
  }
  lessThan(t) {
    return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0];
  }
  equals(t) {
    return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0];
  }
  greaterThan(t) {
    return t.lessThan(this);
  }
  hex() {
    return `${cn(this.buffer[1])} ${cn(this.buffer[0])}`;
  }
}
class Z extends Da {
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return Z.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return Z.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const r = t.length, i = new Z(e);
    for (let s = 0; s < r; ) {
      const o = vn < r - s ? vn : r - s, a = new Z(new Uint32Array([Number.parseInt(t.slice(s, s + o), 10), 0])), c = new Z(new Uint32Array([Ki[o], 0]));
      i.times(c), i.plus(a), s += o;
    }
    return i;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let r = -1, i = t.length; ++r < i; )
      Z.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 2 * r * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new Z(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Z(new Uint32Array(t.buffer)).plus(e);
  }
}
class St extends Da {
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[0] == 0 && ++this.buffer[1], this;
  }
  times(t) {
    return this._times(t), this;
  }
  plus(t) {
    return this._plus(t), this;
  }
  lessThan(t) {
    const e = this.buffer[1] << 0, r = t.buffer[1] << 0;
    return e < r || e === r && this.buffer[0] < t.buffer[0];
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(2)) {
    return St.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(2)) {
    return St.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(2)) {
    const r = t.startsWith("-"), i = t.length, s = new St(e);
    for (let o = r ? 1 : 0; o < i; ) {
      const a = vn < i - o ? vn : i - o, c = new St(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0])), d = new St(new Uint32Array([Ki[a], 0]));
      s.times(d), s.plus(c), o += a;
    }
    return r ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 2);
    for (let r = -1, i = t.length; ++r < i; )
      St.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 2 * r * 4, 2));
    return e;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new St(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new St(new Uint32Array(t.buffer)).plus(e);
  }
}
class Gt {
  constructor(t) {
    this.buffer = t;
  }
  high() {
    return new St(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
  }
  low() {
    return new St(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
  }
  negate() {
    return this.buffer[0] = ~this.buffer[0] + 1, this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], this.buffer[0] == 0 && ++this.buffer[1], this.buffer[1] == 0 && ++this.buffer[2], this.buffer[2] == 0 && ++this.buffer[3], this;
  }
  times(t) {
    const e = new Z(new Uint32Array([this.buffer[3], 0])), r = new Z(new Uint32Array([this.buffer[2], 0])), i = new Z(new Uint32Array([this.buffer[1], 0])), s = new Z(new Uint32Array([this.buffer[0], 0])), o = new Z(new Uint32Array([t.buffer[3], 0])), a = new Z(new Uint32Array([t.buffer[2], 0])), c = new Z(new Uint32Array([t.buffer[1], 0])), d = new Z(new Uint32Array([t.buffer[0], 0]));
    let h = Z.multiply(s, d);
    this.buffer[0] = h.low();
    const f = new Z(new Uint32Array([h.high(), 0]));
    return h = Z.multiply(i, d), f.plus(h), h = Z.multiply(s, c), f.plus(h), this.buffer[1] = f.low(), this.buffer[3] = f.lessThan(h) ? 1 : 0, this.buffer[2] = f.high(), new Z(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(Z.multiply(r, d)).plus(Z.multiply(i, c)).plus(Z.multiply(s, a)), this.buffer[3] += Z.multiply(e, d).plus(Z.multiply(r, c)).plus(Z.multiply(i, a)).plus(Z.multiply(s, o)).low(), this;
  }
  plus(t) {
    const e = new Uint32Array(4);
    return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this;
  }
  hex() {
    return `${cn(this.buffer[3])} ${cn(this.buffer[2])} ${cn(this.buffer[1])} ${cn(this.buffer[0])}`;
  }
  /** @nocollapse */
  static multiply(t, e) {
    return new Gt(new Uint32Array(t.buffer)).times(e);
  }
  /** @nocollapse */
  static add(t, e) {
    return new Gt(new Uint32Array(t.buffer)).plus(e);
  }
  /** @nocollapse */
  static from(t, e = new Uint32Array(4)) {
    return Gt.fromString(typeof t == "string" ? t : t.toString(), e);
  }
  /** @nocollapse */
  static fromNumber(t, e = new Uint32Array(4)) {
    return Gt.fromString(t.toString(), e);
  }
  /** @nocollapse */
  static fromString(t, e = new Uint32Array(4)) {
    const r = t.startsWith("-"), i = t.length, s = new Gt(e);
    for (let o = r ? 1 : 0; o < i; ) {
      const a = vn < i - o ? vn : i - o, c = new Gt(new Uint32Array([Number.parseInt(t.slice(o, o + a), 10), 0, 0, 0])), d = new Gt(new Uint32Array([Ki[a], 0, 0, 0]));
      s.times(d), s.plus(c), o += a;
    }
    return r ? s.negate() : s;
  }
  /** @nocollapse */
  static convertArray(t) {
    const e = new Uint32Array(t.length * 4);
    for (let r = -1, i = t.length; ++r < i; )
      Gt.from(t[r], new Uint32Array(e.buffer, e.byteOffset + 4 * 4 * r, 4));
    return e;
  }
}
class Ta extends j {
  constructor(t, e, r, i) {
    super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = r, this.dictionaries = i;
  }
  visit(t) {
    return super.visit(t instanceof it ? t.type : t);
  }
  visitNull(t, { length: e } = this.nextFieldNode()) {
    return k({ type: t, length: e });
  }
  visitBool(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitInt(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitFloat(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitUtf8(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitBinary(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), valueOffsets: this.readOffsets(t), data: this.readData(t) });
  }
  visitFixedSizeBinary(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitDate(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitTimestamp(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitTime(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitDecimal(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitList(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  visitStruct(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), children: this.visitMany(t.children) });
  }
  visitUnion(t) {
    return t.mode === Mt.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t);
  }
  visitDenseUnion(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), typeIds: this.readTypeIds(t), valueOffsets: this.readOffsets(t), children: this.visitMany(t.children) });
  }
  visitSparseUnion(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), typeIds: this.readTypeIds(t), children: this.visitMany(t.children) });
  }
  visitDictionary(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t.indices), dictionary: this.readDictionary(t) });
  }
  visitInterval(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), data: this.readData(t) });
  }
  visitFixedSizeList(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), child: this.visit(t.children[0]) });
  }
  visitMap(t, { length: e, nullCount: r } = this.nextFieldNode()) {
    return k({ type: t, length: e, nullCount: r, nullBitmap: this.readNullBitmap(t, r), valueOffsets: this.readOffsets(t), child: this.visit(t.children[0]) });
  }
  nextFieldNode() {
    return this.nodes[++this.nodesIndex];
  }
  nextBufferRange() {
    return this.buffers[++this.buffersIndex];
  }
  readNullBitmap(t, e, r = this.nextBufferRange()) {
    return e > 0 && this.readData(t, r) || new Uint8Array(0);
  }
  readOffsets(t, e) {
    return this.readData(t, e);
  }
  readTypeIds(t, e) {
    return this.readData(t, e);
  }
  readData(t, { length: e, offset: r } = this.nextBufferRange()) {
    return this.bytes.subarray(r, r + e);
  }
  readDictionary(t) {
    return this.dictionaries.get(t.id);
  }
}
class Au extends Ta {
  constructor(t, e, r, i) {
    super(new Uint8Array(0), e, r, i), this.sources = t;
  }
  readNullBitmap(t, e, { offset: r } = this.nextBufferRange()) {
    return e <= 0 ? new Uint8Array(0) : Rr(this.sources[r]);
  }
  readOffsets(t, { offset: e } = this.nextBufferRange()) {
    return Q(Uint8Array, Q(Int32Array, this.sources[e]));
  }
  readTypeIds(t, { offset: e } = this.nextBufferRange()) {
    return Q(Uint8Array, Q(t.ArrayType, this.sources[e]));
  }
  readData(t, { offset: e } = this.nextBufferRange()) {
    const { sources: r } = this;
    return A.isTimestamp(t) || (A.isInt(t) || A.isTime(t)) && t.bitWidth === 64 || A.isDate(t) && t.unit === ge.MILLISECOND ? Q(Uint8Array, St.convertArray(r[e])) : A.isDecimal(t) ? Q(Uint8Array, Gt.convertArray(r[e])) : A.isBinary(t) || A.isFixedSizeBinary(t) ? Bu(r[e]) : A.isBool(t) ? Rr(r[e]) : A.isUtf8(t) ? Mi(r[e].join("")) : Q(Uint8Array, Q(t.ArrayType, r[e].map((i) => +i)));
  }
}
function Bu(n) {
  const t = n.join(""), e = new Uint8Array(t.length / 2);
  for (let r = 0; r < t.length; r += 2)
    e[r >> 1] = Number.parseInt(t.slice(r, r + 2), 16);
  return e;
}
class D extends j {
  compareSchemas(t, e) {
    return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields);
  }
  compareManyFields(t, e) {
    return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every((r, i) => this.compareFields(r, e[i]));
  }
  compareFields(t, e) {
    return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type);
  }
}
function Tt(n, t) {
  return t instanceof n.constructor;
}
function Gn(n, t) {
  return n === t || Tt(n, t);
}
function _e(n, t) {
  return n === t || Tt(n, t) && n.bitWidth === t.bitWidth && n.isSigned === t.isSigned;
}
function Gr(n, t) {
  return n === t || Tt(n, t) && n.precision === t.precision;
}
function Ou(n, t) {
  return n === t || Tt(n, t) && n.byteWidth === t.byteWidth;
}
function Gi(n, t) {
  return n === t || Tt(n, t) && n.unit === t.unit;
}
function Zn(n, t) {
  return n === t || Tt(n, t) && n.unit === t.unit && n.timezone === t.timezone;
}
function Xn(n, t) {
  return n === t || Tt(n, t) && n.unit === t.unit && n.bitWidth === t.bitWidth;
}
function Fu(n, t) {
  return n === t || Tt(n, t) && n.children.length === t.children.length && Te.compareManyFields(n.children, t.children);
}
function Du(n, t) {
  return n === t || Tt(n, t) && n.children.length === t.children.length && Te.compareManyFields(n.children, t.children);
}
function Zi(n, t) {
  return n === t || Tt(n, t) && n.mode === t.mode && n.typeIds.every((e, r) => e === t.typeIds[r]) && Te.compareManyFields(n.children, t.children);
}
function Tu(n, t) {
  return n === t || Tt(n, t) && n.id === t.id && n.isOrdered === t.isOrdered && Te.visit(n.indices, t.indices) && Te.visit(n.dictionary, t.dictionary);
}
function Xi(n, t) {
  return n === t || Tt(n, t) && n.unit === t.unit;
}
function Eu(n, t) {
  return n === t || Tt(n, t) && n.listSize === t.listSize && n.children.length === t.children.length && Te.compareManyFields(n.children, t.children);
}
function Ru(n, t) {
  return n === t || Tt(n, t) && n.keysSorted === t.keysSorted && n.children.length === t.children.length && Te.compareManyFields(n.children, t.children);
}
D.prototype.visitNull = Gn;
D.prototype.visitBool = Gn;
D.prototype.visitInt = _e;
D.prototype.visitInt8 = _e;
D.prototype.visitInt16 = _e;
D.prototype.visitInt32 = _e;
D.prototype.visitInt64 = _e;
D.prototype.visitUint8 = _e;
D.prototype.visitUint16 = _e;
D.prototype.visitUint32 = _e;
D.prototype.visitUint64 = _e;
D.prototype.visitFloat = Gr;
D.prototype.visitFloat16 = Gr;
D.prototype.visitFloat32 = Gr;
D.prototype.visitFloat64 = Gr;
D.prototype.visitUtf8 = Gn;
D.prototype.visitBinary = Gn;
D.prototype.visitFixedSizeBinary = Ou;
D.prototype.visitDate = Gi;
D.prototype.visitDateDay = Gi;
D.prototype.visitDateMillisecond = Gi;
D.prototype.visitTimestamp = Zn;
D.prototype.visitTimestampSecond = Zn;
D.prototype.visitTimestampMillisecond = Zn;
D.prototype.visitTimestampMicrosecond = Zn;
D.prototype.visitTimestampNanosecond = Zn;
D.prototype.visitTime = Xn;
D.prototype.visitTimeSecond = Xn;
D.prototype.visitTimeMillisecond = Xn;
D.prototype.visitTimeMicrosecond = Xn;
D.prototype.visitTimeNanosecond = Xn;
D.prototype.visitDecimal = Gn;
D.prototype.visitList = Fu;
D.prototype.visitStruct = Du;
D.prototype.visitUnion = Zi;
D.prototype.visitDenseUnion = Zi;
D.prototype.visitSparseUnion = Zi;
D.prototype.visitDictionary = Tu;
D.prototype.visitInterval = Xi;
D.prototype.visitIntervalDayTime = Xi;
D.prototype.visitIntervalYearMonth = Xi;
D.prototype.visitFixedSizeList = Eu;
D.prototype.visitMap = Ru;
const Te = new D();
function Oi(n, t) {
  return Te.compareSchemas(n, t);
}
function di(n, t) {
  return xu(n, t.map((e) => e.data.concat()));
}
function xu(n, t) {
  const e = [...n.fields], r = [], i = { numBatches: t.reduce((f, m) => Math.max(f, m.length), 0) };
  let s = 0, o = 0, a = -1;
  const c = t.length;
  let d, h = [];
  for (; i.numBatches-- > 0; ) {
    for (o = Number.POSITIVE_INFINITY, a = -1; ++a < c; )
      h[a] = d = t[a].shift(), o = Math.min(o, d ? d.length : o);
    Number.isFinite(o) && (h = Mu(e, o, h, t, i), o > 0 && (r[s++] = k({
      type: new bt(e),
      length: o,
      nullCount: 0,
      children: h.slice()
    })));
  }
  return [
    n = n.assign(e),
    r.map((f) => new Bt(n, f))
  ];
}
function Mu(n, t, e, r, i) {
  var s;
  const o = (t + 63 & -64) >> 3;
  for (let a = -1, c = r.length; ++a < c; ) {
    const d = e[a], h = d == null ? void 0 : d.length;
    if (h >= t)
      h === t ? e[a] = d : (e[a] = d.slice(0, t), i.numBatches = Math.max(i.numBatches, r[a].unshift(d.slice(t, h - t))));
    else {
      const f = n[a];
      n[a] = f.clone({ nullable: !0 }), e[a] = (s = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(t)) !== null && s !== void 0 ? s : k({
        type: f.type,
        length: t,
        nullCount: t,
        nullBitmap: new Uint8Array(o)
      });
    }
  }
  return e;
}
var Ea;
class gt {
  constructor(...t) {
    var e, r;
    if (t.length === 0)
      return this.batches = [], this.schema = new K([]), this._offsets = [0], this;
    let i, s;
    t[0] instanceof K && (i = t.shift()), t[t.length - 1] instanceof Uint32Array && (s = t.pop());
    const o = (c) => {
      if (c) {
        if (c instanceof Bt)
          return [c];
        if (c instanceof gt)
          return c.batches;
        if (c instanceof et) {
          if (c.type instanceof bt)
            return [new Bt(new K(c.type.children), c)];
        } else {
          if (Array.isArray(c))
            return c.flatMap((d) => o(d));
          if (typeof c[Symbol.iterator] == "function")
            return [...c].flatMap((d) => o(d));
          if (typeof c == "object") {
            const d = Object.keys(c), h = d.map((_) => new q([c[_]])), f = new K(d.map((_, C) => new it(String(_), h[C].type))), [, m] = di(f, h);
            return m.length === 0 ? [new Bt(c)] : m;
          }
        }
      }
      return [];
    }, a = t.flatMap((c) => o(c));
    if (i = (r = i ?? ((e = a[0]) === null || e === void 0 ? void 0 : e.schema)) !== null && r !== void 0 ? r : new K([]), !(i instanceof K))
      throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
    for (const c of a) {
      if (!(c instanceof Bt))
        throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
      if (!Oi(i, c.schema))
        throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
    }
    this.schema = i, this.batches = a, this._offsets = s ?? ya(this.data);
  }
  /**
   * The contiguous {@link RecordBatch `RecordBatch`} chunks of the Table rows.
   */
  get data() {
    return this.batches.map(({ data: t }) => t);
  }
  /**
   * The number of columns in this Table.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this Table.
   */
  get numRows() {
    return this.data.reduce((t, e) => t + e.length, 0);
  }
  /**
   * The number of null rows in this Table.
   */
  get nullCount() {
    return this._nullCount === -1 && (this._nullCount = pa(this.data)), this._nullCount;
  }
  /**
   * Check whether an element is null.
   *
   * @param index The index at which to read the validity bitmap.
   */
  // @ts-ignore
  isValid(t) {
    return !1;
  }
  /**
   * Get an element value by position.
   *
   * @param index The index of the element to read.
   */
  // @ts-ignore
  get(t) {
    return null;
  }
  /**
   * Set an element value by position.
   *
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  // @ts-ignore
  set(t, e) {
  }
  /**
   * Retrieve the index of the first occurrence of a value in an Vector.
   *
   * @param element The value to locate in the Vector.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  // @ts-ignore
  indexOf(t, e) {
    return -1;
  }
  /**
   * Get the size in bytes of an element by index.
   * @param index The index at which to get the byteLength.
   */
  // @ts-ignore
  getByteLength(t) {
    return 0;
  }
  /**
   * Iterator for rows in this Table.
   */
  [Symbol.iterator]() {
    return this.batches.length > 0 ? Ji.visit(new q(this.data)) : new Array(0)[Symbol.iterator]();
  }
  /**
   * Return a JavaScript Array of the Table rows.
   *
   * @returns An Array of Table rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Returns a string representation of the Table rows.
   *
   * @returns A string representation of the Table rows.
   */
  toString() {
    return `[
  ${this.toArray().join(`,
  `)}
]`;
  }
  /**
   * Combines two or more Tables of the same schema.
   *
   * @param others Additional Tables to add to the end of this Tables.
   */
  concat(...t) {
    const e = this.schema, r = this.data.concat(t.flatMap(({ data: i }) => i));
    return new gt(e, r.map((i) => new Bt(e, i)));
  }
  /**
   * Return a zero-copy sub-section of this Table.
   *
   * @param begin The beginning of the specified portion of the Table.
   * @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const r = this.schema;
    [t, e] = ha({ length: this.numRows }, t, e);
    const i = ma(this.data, this._offsets, t, e);
    return new gt(r, i.map((s) => new Bt(r, s)));
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   *
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    return this.getChildAt(this.schema.fields.findIndex((e) => e.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   *
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    if (t > -1 && t < this.schema.fields.length) {
      const e = this.data.map((r) => r.children[t]);
      if (e.length === 0) {
        const { type: r } = this.schema.fields[t], i = k({ type: r, length: 0, nullCount: 0 });
        e.push(i._changeLengthAndBackfillNullBitmap(this.numRows));
      }
      return new q(e);
    }
    return null;
  }
  /**
   * Sets a child Vector by name.
   *
   * @param name The name of the child to overwrite.
   * @returns A new Table with the supplied child for the specified name.
   */
  setChild(t, e) {
    var r;
    return this.setChildAt((r = this.schema.fields) === null || r === void 0 ? void 0 : r.findIndex((i) => i.name === t), e);
  }
  setChildAt(t, e) {
    let r = this.schema, i = [...this.batches];
    if (t > -1 && t < this.numCols) {
      e || (e = new q([k({ type: new Oe(), length: this.numRows })]));
      const s = r.fields.slice(), o = s[t].clone({ type: e.type }), a = this.schema.fields.map((c, d) => this.getChildAt(d));
      [s[t], a[t]] = [o, e], [r, i] = di(r, a);
    }
    return new gt(r, i);
  }
  /**
   * Construct a new Table containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new Table of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.fields.reduce((r, i, s) => r.set(i.name, s), /* @__PURE__ */ new Map());
    return this.selectAt(t.map((r) => e.get(r)).filter((r) => r > -1));
  }
  /**
   * Construct a new Table containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new Table of columns at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), r = this.batches.map((i) => i.selectAt(t));
    return new gt(e, r);
  }
  assign(t) {
    const e = this.schema.fields, [r, i] = t.schema.fields.reduce((a, c, d) => {
      const [h, f] = a, m = e.findIndex((_) => _.name === c.name);
      return ~m ? f[m] = d : h.push(d), a;
    }, [[], []]), s = this.schema.assign(t.schema), o = [
      ...e.map((a, c) => [c, i[c]]).map(([a, c]) => c === void 0 ? this.getChildAt(a) : t.getChildAt(c)),
      ...r.map((a) => t.getChildAt(a))
    ].filter(Boolean);
    return new gt(...di(s, o));
  }
}
Ea = Symbol.toStringTag;
gt[Ea] = ((n) => (n.schema = null, n.batches = [], n._offsets = new Uint32Array([0]), n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, n.isValid = fn(Hi), n.get = fn(Dt.getVisitFn(u.Struct)), n.set = ga(jt.getVisitFn(u.Struct)), n.indexOf = ba(xr.getVisitFn(u.Struct)), n.getByteLength = fn(oe.getVisitFn(u.Struct)), "Table"))(gt.prototype);
var Ra;
let Bt = class Cn {
  constructor(...t) {
    switch (t.length) {
      case 2: {
        if ([this.schema] = t, !(this.schema instanceof K))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        if ([
          ,
          this.data = k({
            nullCount: 0,
            type: new bt(this.schema.fields),
            children: this.schema.fields.map((e) => k({ type: e.type, nullCount: 0 }))
          })
        ] = t, !(this.data instanceof et))
          throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
        [this.schema, this.data] = zs(this.schema, this.data.children);
        break;
      }
      case 1: {
        const [e] = t, { fields: r, children: i, length: s } = Object.keys(e).reduce((c, d, h) => (c.children[h] = e[d], c.length = Math.max(c.length, e[d].length), c.fields[h] = it.new({ name: d, type: e[d].type, nullable: !0 }), c), {
          length: 0,
          fields: new Array(),
          children: new Array()
        }), o = new K(r), a = k({ type: new bt(r), length: s, children: i, nullCount: 0 });
        [this.schema, this.data] = zs(o, a.children, s);
        break;
      }
      default:
        throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
    }
  }
  get dictionaries() {
    return this._dictionaries || (this._dictionaries = xa(this.schema.fields, this.data.children));
  }
  /**
   * The number of columns in this RecordBatch.
   */
  get numCols() {
    return this.schema.fields.length;
  }
  /**
   * The number of rows in this RecordBatch.
   */
  get numRows() {
    return this.data.length;
  }
  /**
   * The number of null rows in this RecordBatch.
   */
  get nullCount() {
    return this.data.nullCount;
  }
  /**
   * Check whether an element is null.
   * @param index The index at which to read the validity bitmap.
   */
  isValid(t) {
    return this.data.getValid(t);
  }
  /**
   * Get a row by position.
   * @param index The index of the element to read.
   */
  get(t) {
    return Dt.visit(this.data, t);
  }
  /**
   * Set a row by position.
   * @param index The index of the element to write.
   * @param value The value to set.
   */
  set(t, e) {
    return jt.visit(this.data, t, e);
  }
  /**
   * Retrieve the index of the first occurrence of a row in an RecordBatch.
   * @param element The row to locate in the RecordBatch.
   * @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
   */
  indexOf(t, e) {
    return xr.visit(this.data, t, e);
  }
  /**
   * Get the size (in bytes) of a row by index.
   * @param index The row index for which to compute the byteLength.
   */
  getByteLength(t) {
    return oe.visit(this.data, t);
  }
  /**
   * Iterator for rows in this RecordBatch.
   */
  [Symbol.iterator]() {
    return Ji.visit(new q([this.data]));
  }
  /**
   * Return a JavaScript Array of the RecordBatch rows.
   * @returns An Array of RecordBatch rows.
   */
  toArray() {
    return [...this];
  }
  /**
   * Combines two or more RecordBatch of the same schema.
   * @param others Additional RecordBatch to add to the end of this RecordBatch.
   */
  concat(...t) {
    return new gt(this.schema, [this, ...t]);
  }
  /**
   * Return a zero-copy sub-section of this RecordBatch.
   * @param start The beginning of the specified portion of the RecordBatch.
   * @param end The end of the specified portion of the RecordBatch. This is exclusive of the element at the index 'end'.
   */
  slice(t, e) {
    const [r] = new q([this.data]).slice(t, e).data;
    return new Cn(this.schema, r);
  }
  /**
   * Returns a child Vector by name, or null if this Vector has no child with the given name.
   * @param name The name of the child to retrieve.
   */
  getChild(t) {
    var e;
    return this.getChildAt((e = this.schema.fields) === null || e === void 0 ? void 0 : e.findIndex((r) => r.name === t));
  }
  /**
   * Returns a child Vector by index, or null if this Vector has no child at the supplied index.
   * @param index The index of the child to retrieve.
   */
  getChildAt(t) {
    return t > -1 && t < this.schema.fields.length ? new q([this.data.children[t]]) : null;
  }
  /**
   * Sets a child Vector by name.
   * @param name The name of the child to overwrite.
   * @returns A new RecordBatch with the new child for the specified name.
   */
  setChild(t, e) {
    var r;
    return this.setChildAt((r = this.schema.fields) === null || r === void 0 ? void 0 : r.findIndex((i) => i.name === t), e);
  }
  setChildAt(t, e) {
    let r = this.schema, i = this.data;
    if (t > -1 && t < this.numCols) {
      e || (e = new q([k({ type: new Oe(), length: this.numRows })]));
      const s = r.fields.slice(), o = i.children.slice(), a = s[t].clone({ type: e.type });
      [s[t], o[t]] = [a, e.data[0]], r = new K(s, new Map(this.schema.metadata)), i = k({ type: new bt(s), children: o });
    }
    return new Cn(r, i);
  }
  /**
   * Construct a new RecordBatch containing only specified columns.
   *
   * @param columnNames Names of columns to keep.
   * @returns A new RecordBatch of columns matching the specified names.
   */
  select(t) {
    const e = this.schema.select(t), r = new bt(e.fields), i = [];
    for (const s of t) {
      const o = this.schema.fields.findIndex((a) => a.name === s);
      ~o && (i[o] = this.data.children[o]);
    }
    return new Cn(e, k({ type: r, length: this.numRows, children: i }));
  }
  /**
   * Construct a new RecordBatch containing only columns at the specified indices.
   *
   * @param columnIndices Indices of columns to keep.
   * @returns A new RecordBatch of columns matching at the specified indices.
   */
  selectAt(t) {
    const e = this.schema.selectAt(t), r = t.map((s) => this.data.children[s]).filter(Boolean), i = k({ type: new bt(e.fields), length: this.numRows, children: r });
    return new Cn(e, i);
  }
};
Ra = Symbol.toStringTag;
Bt[Ra] = ((n) => (n._nullCount = -1, n[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(Bt.prototype);
function zs(n, t, e = t.reduce((r, i) => Math.max(r, i.length), 0)) {
  var r;
  const i = [...n.fields], s = [...t], o = (e + 63 & -64) >> 3;
  for (const [a, c] of n.fields.entries()) {
    const d = t[a];
    (!d || d.length !== e) && (i[a] = c.clone({ nullable: !0 }), s[a] = (r = d == null ? void 0 : d._changeLengthAndBackfillNullBitmap(e)) !== null && r !== void 0 ? r : k({
      type: c.type,
      length: e,
      nullCount: e,
      nullBitmap: new Uint8Array(o)
    }));
  }
  return [
    n.assign(i),
    k({ type: new bt(i), length: e, children: s })
  ];
}
function xa(n, t, e = /* @__PURE__ */ new Map()) {
  for (let r = -1, i = n.length; ++r < i; ) {
    const o = n[r].type, a = t[r];
    if (A.isDictionary(o)) {
      if (!e.has(o.id))
        a.dictionary && e.set(o.id, a.dictionary);
      else if (e.get(o.id) !== a.dictionary)
        throw new Error("Cannot create Schema containing two different dictionaries with the same Id");
    }
    o.children && o.children.length > 0 && xa(o.children, a.children, e);
  }
  return e;
}
class Qi extends Bt {
  constructor(t) {
    const e = t.fields.map((i) => k({ type: i.type })), r = k({ type: new bt(t.fields), nullCount: 0, children: e });
    super(t, r);
  }
}
var Vr;
(function(n) {
  n[n.BUFFER = 0] = "BUFFER";
})(Vr || (Vr = {}));
var $r;
(function(n) {
  n[n.LZ4_FRAME = 0] = "LZ4_FRAME", n[n.ZSTD = 1] = "ZSTD";
})($r || ($r = {}));
class Se {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsBodyCompression(t, e) {
    return (e || new Se()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsBodyCompression(t, e) {
    return t.setPosition(t.position() + tt), (e || new Se()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * Compressor library.
   * For LZ4_FRAME, each compressed buffer must consist of a single frame.
   */
  codec() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt8(this.bb_pos + t) : $r.LZ4_FRAME;
  }
  /**
   * Indicates the way the record batch body was compressed
   */
  method() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readInt8(this.bb_pos + t) : Vr.BUFFER;
  }
  static startBodyCompression(t) {
    t.startObject(2);
  }
  static addCodec(t, e) {
    t.addFieldInt8(0, e, $r.LZ4_FRAME);
  }
  static addMethod(t, e) {
    t.addFieldInt8(1, e, Vr.BUFFER);
  }
  static endBodyCompression(t) {
    return t.endObject();
  }
  static createBodyCompression(t, e, r) {
    return Se.startBodyCompression(t), Se.addCodec(t, e), Se.addMethod(t, r), Se.endBodyCompression(t);
  }
}
class Ma {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The relative offset into the shared memory page where the bytes for this
   * buffer starts
   */
  offset() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The absolute length (in bytes) of the memory buffer. The memory is found
   * from offset (inclusive) to offset + length (non-inclusive). When building
   * messages using the encapsulated IPC message, padding bytes may be written
   * after a buffer, but such padding bytes do not need to be accounted for in
   * the size here.
   */
  length() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createBuffer(t, e, r) {
    return t.prep(8, 16), t.writeInt64(r), t.writeInt64(e), t.offset();
  }
}
let Na = class {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  /**
   * The number of value slots in the Arrow array at this level of a nested
   * tree
   */
  length() {
    return this.bb.readInt64(this.bb_pos);
  }
  /**
   * The number of observed nulls. Fields with null_count == 0 may choose not
   * to write their physical validity bitmap out as a materialized buffer,
   * instead setting the length of the bitmap buffer to 0.
   */
  nullCount() {
    return this.bb.readInt64(this.bb_pos + 8);
  }
  static sizeOf() {
    return 16;
  }
  static createFieldNode(t, e, r) {
    return t.prep(8, 16), t.writeInt64(r), t.writeInt64(e), t.offset();
  }
}, he = class Fi {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsRecordBatch(t, e) {
    return (e || new Fi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsRecordBatch(t, e) {
    return t.setPosition(t.position() + tt), (e || new Fi()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  /**
   * number of records / rows. The arrays in the batch should all have this
   * length
   */
  length() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  /**
   * Nodes correspond to the pre-ordered flattened logical schema
   */
  nodes(t, e) {
    const r = this.bb.__offset(this.bb_pos, 6);
    return r ? (e || new Na()).__init(this.bb.__vector(this.bb_pos + r) + t * 16, this.bb) : null;
  }
  nodesLength() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Buffers correspond to the pre-ordered flattened buffer tree
   *
   * The number of buffers appended to this list depends on the schema. For
   * example, most primitive arrays will have 2 buffers, 1 for the validity
   * bitmap and 1 for the values. For struct arrays, there will only be a
   * single buffer for the validity (nulls) bitmap
   */
  buffers(t, e) {
    const r = this.bb.__offset(this.bb_pos, 8);
    return r ? (e || new Ma()).__init(this.bb.__vector(this.bb_pos + r) + t * 16, this.bb) : null;
  }
  buffersLength() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  /**
   * Optional compression of the message body
   */
  compression(t) {
    const e = this.bb.__offset(this.bb_pos, 10);
    return e ? (t || new Se()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  static startRecordBatch(t) {
    t.startObject(4);
  }
  static addLength(t, e) {
    t.addFieldInt64(0, e, t.createLong(0, 0));
  }
  static addNodes(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static startNodesVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addBuffers(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static startBuffersVector(t, e) {
    t.startVector(16, e, 8);
  }
  static addCompression(t, e) {
    t.addFieldOffset(3, e, 0);
  }
  static endRecordBatch(t) {
    return t.endObject();
  }
}, an = class Di {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsDictionaryBatch(t, e) {
    return (e || new Di()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsDictionaryBatch(t, e) {
    return t.setPosition(t.position() + tt), (e || new Di()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  id() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  data(t) {
    const e = this.bb.__offset(this.bb_pos, 6);
    return e ? (t || new he()).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null;
  }
  /**
   * If isDelta is true the values in the dictionary are to be appended to a
   * dictionary with the indicated id. If isDelta is false this dictionary
   * should replace the existing dictionary.
   */
  isDelta() {
    const t = this.bb.__offset(this.bb_pos, 8);
    return t ? !!this.bb.readInt8(this.bb_pos + t) : !1;
  }
  static startDictionaryBatch(t) {
    t.startObject(3);
  }
  static addId(t, e) {
    t.addFieldInt64(0, e, t.createLong(0, 0));
  }
  static addData(t, e) {
    t.addFieldOffset(1, e, 0);
  }
  static addIsDelta(t, e) {
    t.addFieldInt8(2, +e, 0);
  }
  static endDictionaryBatch(t) {
    return t.endObject();
  }
};
var zr;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.Schema = 1] = "Schema", n[n.DictionaryBatch = 2] = "DictionaryBatch", n[n.RecordBatch = 3] = "RecordBatch", n[n.Tensor = 4] = "Tensor", n[n.SparseTensor = 5] = "SparseTensor";
})(zr || (zr = {}));
let ve = class qt {
  constructor() {
    this.bb = null, this.bb_pos = 0;
  }
  __init(t, e) {
    return this.bb_pos = t, this.bb = e, this;
  }
  static getRootAsMessage(t, e) {
    return (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  static getSizePrefixedRootAsMessage(t, e) {
    return t.setPosition(t.position() + tt), (e || new qt()).__init(t.readInt32(t.position()) + t.position(), t);
  }
  version() {
    const t = this.bb.__offset(this.bb_pos, 4);
    return t ? this.bb.readInt16(this.bb_pos + t) : mn.V1;
  }
  headerType() {
    const t = this.bb.__offset(this.bb_pos, 6);
    return t ? this.bb.readUint8(this.bb_pos + t) : zr.NONE;
  }
  // @ts-ignore
  header(t) {
    const e = this.bb.__offset(this.bb_pos, 8);
    return e ? this.bb.__union(t, this.bb_pos + e) : null;
  }
  bodyLength() {
    const t = this.bb.__offset(this.bb_pos, 10);
    return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0);
  }
  customMetadata(t, e) {
    const r = this.bb.__offset(this.bb_pos, 12);
    return r ? (e || new ht()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + r) + t * 4), this.bb) : null;
  }
  customMetadataLength() {
    const t = this.bb.__offset(this.bb_pos, 12);
    return t ? this.bb.__vector_len(this.bb_pos + t) : 0;
  }
  static startMessage(t) {
    t.startObject(5);
  }
  static addVersion(t, e) {
    t.addFieldInt16(0, e, mn.V1);
  }
  static addHeaderType(t, e) {
    t.addFieldInt8(1, e, zr.NONE);
  }
  static addHeader(t, e) {
    t.addFieldOffset(2, e, 0);
  }
  static addBodyLength(t, e) {
    t.addFieldInt64(3, e, t.createLong(0, 0));
  }
  static addCustomMetadata(t, e) {
    t.addFieldOffset(4, e, 0);
  }
  static createCustomMetadataVector(t, e) {
    t.startVector(4, e.length, 4);
    for (let r = e.length - 1; r >= 0; r--)
      t.addOffset(e[r]);
    return t.endVector();
  }
  static startCustomMetadataVector(t, e) {
    t.startVector(4, e, 4);
  }
  static endMessage(t) {
    return t.endObject();
  }
  static finishMessageBuffer(t, e) {
    t.finish(e);
  }
  static finishSizePrefixedMessageBuffer(t, e) {
    t.finish(e, void 0, !0);
  }
  static createMessage(t, e, r, i, s, o) {
    return qt.startMessage(t), qt.addVersion(t, e), qt.addHeaderType(t, r), qt.addHeader(t, i), qt.addBodyLength(t, s), qt.addCustomMetadata(t, o), qt.endMessage(t);
  }
};
var Nu = ye;
class Cu extends j {
  visit(t, e) {
    return t == null || e == null ? void 0 : super.visit(t, e);
  }
  visitNull(t, e) {
    return $e.startNull(e), $e.endNull(e);
  }
  visitInt(t, e) {
    return Rt.startInt(e), Rt.addBitWidth(e, t.bitWidth), Rt.addIsSigned(e, t.isSigned), Rt.endInt(e);
  }
  visitFloat(t, e) {
    return ee.startFloatingPoint(e), ee.addPrecision(e, t.precision), ee.endFloatingPoint(e);
  }
  visitBinary(t, e) {
    return ke.startBinary(e), ke.endBinary(e);
  }
  visitBool(t, e) {
    return je.startBool(e), je.endBool(e);
  }
  visitUtf8(t, e) {
    return Ye.startUtf8(e), Ye.endUtf8(e);
  }
  visitDecimal(t, e) {
    return It.startDecimal(e), It.addScale(e, t.scale), It.addPrecision(e, t.precision), It.addBitWidth(e, t.bitWidth), It.endDecimal(e);
  }
  visitDate(t, e) {
    return fr.startDate(e), fr.addUnit(e, t.unit), fr.endDate(e);
  }
  visitTime(t, e) {
    return Pt.startTime(e), Pt.addUnit(e, t.unit), Pt.addBitWidth(e, t.bitWidth), Pt.endTime(e);
  }
  visitTimestamp(t, e) {
    const r = t.timezone && e.createString(t.timezone) || void 0;
    return kt.startTimestamp(e), kt.addUnit(e, t.unit), r !== void 0 && kt.addTimezone(e, r), kt.endTimestamp(e);
  }
  visitInterval(t, e) {
    return ne.startInterval(e), ne.addUnit(e, t.unit), ne.endInterval(e);
  }
  visitList(t, e) {
    return Ve.startList(e), Ve.endList(e);
  }
  visitStruct(t, e) {
    return ze.startStruct_(e), ze.endStruct_(e);
  }
  visitUnion(t, e) {
    At.startTypeIdsVector(e, t.typeIds.length);
    const r = At.createTypeIdsVector(e, t.typeIds);
    return At.startUnion(e), At.addMode(e, t.mode), At.addTypeIds(e, r), At.endUnion(e);
  }
  visitDictionary(t, e) {
    const r = this.visit(t.indices, e);
    return pe.startDictionaryEncoding(e), pe.addId(e, new Nu(t.id, 0)), pe.addIsOrdered(e, t.isOrdered), r !== void 0 && pe.addIndexType(e, r), pe.endDictionaryEncoding(e);
  }
  visitFixedSizeBinary(t, e) {
    return Qt.startFixedSizeBinary(e), Qt.addByteWidth(e, t.byteWidth), Qt.endFixedSizeBinary(e);
  }
  visitFixedSizeList(t, e) {
    return te.startFixedSizeList(e), te.addListSize(e, t.listSize), te.endFixedSizeList(e);
  }
  visitMap(t, e) {
    return pr.startMap(e), pr.addKeysSorted(e, t.keysSorted), pr.endMap(e);
  }
}
const hi = new Cu();
function Lu(n, t = /* @__PURE__ */ new Map()) {
  return new K(Pu(n, t), gr(n.customMetadata), t);
}
function Ca(n) {
  return new Nt(n.count, La(n.columns), Ua(n.columns));
}
function Uu(n) {
  return new ae(Ca(n.data), n.id, n.isDelta);
}
function Pu(n, t) {
  return (n.fields || []).filter(Boolean).map((e) => it.fromJSON(e, t));
}
function Ys(n, t) {
  return (n.children || []).filter(Boolean).map((e) => it.fromJSON(e, t));
}
function La(n) {
  return (n || []).reduce((t, e) => [
    ...t,
    new qe(e.count, ku(e.VALIDITY)),
    ...La(e.children)
  ], []);
}
function Ua(n, t = []) {
  for (let e = -1, r = (n || []).length; ++e < r; ) {
    const i = n[e];
    i.VALIDITY && t.push(new ie(t.length, i.VALIDITY.length)), i.TYPE && t.push(new ie(t.length, i.TYPE.length)), i.OFFSET && t.push(new ie(t.length, i.OFFSET.length)), i.DATA && t.push(new ie(t.length, i.DATA.length)), t = Ua(i.children, t);
  }
  return t;
}
function ku(n) {
  return (n || []).reduce((t, e) => t + +(e === 0), 0);
}
function ju(n, t) {
  let e, r, i, s, o, a;
  return !t || !(s = n.dictionary) ? (o = Hs(n, Ys(n, t)), i = new it(n.name, o, n.nullable, gr(n.customMetadata))) : t.has(e = s.id) ? (r = (r = s.indexType) ? Ws(r) : new $n(), a = new pn(t.get(e), r, e, s.isOrdered), i = new it(n.name, a, n.nullable, gr(n.customMetadata))) : (r = (r = s.indexType) ? Ws(r) : new $n(), t.set(e, o = Hs(n, Ys(n, t))), a = new pn(o, r, e, s.isOrdered), i = new it(n.name, a, n.nullable, gr(n.customMetadata))), i || null;
}
function gr(n) {
  return new Map(Object.entries(n || {}));
}
function Ws(n) {
  return new Fe(n.isSigned, n.bitWidth);
}
function Hs(n, t) {
  const e = n.type.name;
  switch (e) {
    case "NONE":
      return new Oe();
    case "null":
      return new Oe();
    case "binary":
      return new _r();
    case "utf8":
      return new vr();
    case "bool":
      return new wr();
    case "list":
      return new Or((t || [])[0]);
    case "struct":
      return new bt(t || []);
    case "struct_":
      return new bt(t || []);
  }
  switch (e) {
    case "int": {
      const r = n.type;
      return new Fe(r.isSigned, r.bitWidth);
    }
    case "floatingpoint": {
      const r = n.type;
      return new zn(Ot[r.precision]);
    }
    case "decimal": {
      const r = n.type;
      return new Sr(r.scale, r.precision, r.bitWidth);
    }
    case "date": {
      const r = n.type;
      return new Ir(ge[r.unit]);
    }
    case "time": {
      const r = n.type;
      return new Yn(z[r.unit], r.bitWidth);
    }
    case "timestamp": {
      const r = n.type;
      return new Ar(z[r.unit], r.timezone);
    }
    case "interval": {
      const r = n.type;
      return new Br(Be[r.unit]);
    }
    case "union": {
      const r = n.type;
      return new Fr(Mt[r.mode], r.typeIds || [], t || []);
    }
    case "fixedsizebinary": {
      const r = n.type;
      return new Dr(r.byteWidth);
    }
    case "fixedsizelist": {
      const r = n.type;
      return new Tr(r.listSize, (t || [])[0]);
    }
    case "map": {
      const r = n.type;
      return new Er((t || [])[0], r.keysSorted);
    }
  }
  throw new Error(`Unrecognized type: "${e}"`);
}
var Je = ye, Vu = Oa, $u = yn;
class _t {
  constructor(t, e, r, i) {
    this._version = e, this._headerType = r, this.body = new Uint8Array(0), i && (this._createHeader = () => i), this._bodyLength = typeof t == "number" ? t : t.low;
  }
  /** @nocollapse */
  static fromJSON(t, e) {
    const r = new _t(0, xt.V4, e);
    return r._createHeader = zu(t, e), r;
  }
  /** @nocollapse */
  static decode(t) {
    t = new $u($(t));
    const e = ve.getRootAsMessage(t), r = e.bodyLength(), i = e.version(), s = e.headerType(), o = new _t(r, i, s);
    return o._createHeader = Yu(e, s), o;
  }
  /** @nocollapse */
  static encode(t) {
    const e = new Vu();
    let r = -1;
    return t.isSchema() ? r = K.encode(e, t.header()) : t.isRecordBatch() ? r = Nt.encode(e, t.header()) : t.isDictionaryBatch() && (r = ae.encode(e, t.header())), ve.startMessage(e), ve.addVersion(e, xt.V4), ve.addHeader(e, r), ve.addHeaderType(e, t.headerType), ve.addBodyLength(e, new Je(t.bodyLength, 0)), ve.finishMessageBuffer(e, ve.endMessage(e)), e.asUint8Array();
  }
  /** @nocollapse */
  static from(t, e = 0) {
    if (t instanceof K)
      return new _t(0, xt.V4, J.Schema, t);
    if (t instanceof Nt)
      return new _t(e, xt.V4, J.RecordBatch, t);
    if (t instanceof ae)
      return new _t(e, xt.V4, J.DictionaryBatch, t);
    throw new Error(`Unrecognized Message header: ${t}`);
  }
  get type() {
    return this.headerType;
  }
  get version() {
    return this._version;
  }
  get headerType() {
    return this._headerType;
  }
  get bodyLength() {
    return this._bodyLength;
  }
  header() {
    return this._createHeader();
  }
  isSchema() {
    return this.headerType === J.Schema;
  }
  isRecordBatch() {
    return this.headerType === J.RecordBatch;
  }
  isDictionaryBatch() {
    return this.headerType === J.DictionaryBatch;
  }
}
class Nt {
  constructor(t, e, r) {
    this._nodes = e, this._buffers = r, this._length = typeof t == "number" ? t : t.low;
  }
  get nodes() {
    return this._nodes;
  }
  get length() {
    return this._length;
  }
  get buffers() {
    return this._buffers;
  }
}
class ae {
  constructor(t, e, r = !1) {
    this._data = t, this._isDelta = r, this._id = typeof e == "number" ? e : e.low;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get isDelta() {
    return this._isDelta;
  }
  get length() {
    return this.data.length;
  }
  get nodes() {
    return this.data.nodes;
  }
  get buffers() {
    return this.data.buffers;
  }
}
class ie {
  constructor(t, e) {
    this.offset = typeof t == "number" ? t : t.low, this.length = typeof e == "number" ? e : e.low;
  }
}
class qe {
  constructor(t, e) {
    this.length = typeof t == "number" ? t : t.low, this.nullCount = typeof e == "number" ? e : e.low;
  }
}
function zu(n, t) {
  return () => {
    switch (t) {
      case J.Schema:
        return K.fromJSON(n);
      case J.RecordBatch:
        return Nt.fromJSON(n);
      case J.DictionaryBatch:
        return ae.fromJSON(n);
    }
    throw new Error(`Unrecognized Message type: { name: ${J[t]}, type: ${t} }`);
  };
}
function Yu(n, t) {
  return () => {
    switch (t) {
      case J.Schema:
        return K.decode(n.header(new Kt()));
      case J.RecordBatch:
        return Nt.decode(n.header(new he()), n.version());
      case J.DictionaryBatch:
        return ae.decode(n.header(new an()), n.version());
    }
    throw new Error(`Unrecognized Message type: { name: ${J[t]}, type: ${t} }`);
  };
}
it.encode = ed;
it.decode = Qu;
it.fromJSON = ju;
K.encode = td;
K.decode = Wu;
K.fromJSON = Lu;
Nt.encode = nd;
Nt.decode = Hu;
Nt.fromJSON = Ca;
ae.encode = rd;
ae.decode = Ju;
ae.fromJSON = Uu;
qe.encode = id;
qe.decode = Ku;
ie.encode = sd;
ie.decode = qu;
function Wu(n, t = /* @__PURE__ */ new Map()) {
  const e = Xu(n, t);
  return new K(e, br(n), t);
}
function Hu(n, t = xt.V4) {
  if (n.compression() !== null)
    throw new Error("Record batch compression not implemented");
  return new Nt(n.length(), Gu(n), Zu(n, t));
}
function Ju(n, t = xt.V4) {
  return new ae(Nt.decode(n.data(), t), n.id(), n.isDelta());
}
function qu(n) {
  return new ie(n.offset(), n.length());
}
function Ku(n) {
  return new qe(n.length(), n.nullCount());
}
function Gu(n) {
  const t = [];
  for (let e, r = -1, i = -1, s = n.nodesLength(); ++r < s; )
    (e = n.nodes(r)) && (t[++i] = qe.decode(e));
  return t;
}
function Zu(n, t) {
  const e = [];
  for (let r, i = -1, s = -1, o = n.buffersLength(); ++i < o; )
    (r = n.buffers(i)) && (t < xt.V4 && (r.bb_pos += 8 * (i + 1)), e[++s] = ie.decode(r));
  return e;
}
function Xu(n, t) {
  const e = [];
  for (let r, i = -1, s = -1, o = n.fieldsLength(); ++i < o; )
    (r = n.fields(i)) && (e[++s] = it.decode(r, t));
  return e;
}
function Js(n, t) {
  const e = [];
  for (let r, i = -1, s = -1, o = n.childrenLength(); ++i < o; )
    (r = n.children(i)) && (e[++s] = it.decode(r, t));
  return e;
}
function Qu(n, t) {
  let e, r, i, s, o, a;
  return !t || !(a = n.dictionary()) ? (i = Ks(n, Js(n, t)), r = new it(n.name(), i, n.nullable(), br(n))) : t.has(e = a.id().low) ? (s = (s = a.indexType()) ? qs(s) : new $n(), o = new pn(t.get(e), s, e, a.isOrdered()), r = new it(n.name(), o, n.nullable(), br(n))) : (s = (s = a.indexType()) ? qs(s) : new $n(), t.set(e, i = Ks(n, Js(n, t))), o = new pn(i, s, e, a.isOrdered()), r = new it(n.name(), o, n.nullable(), br(n))), r || null;
}
function br(n) {
  const t = /* @__PURE__ */ new Map();
  if (n)
    for (let e, r, i = -1, s = Math.trunc(n.customMetadataLength()); ++i < s; )
      (e = n.customMetadata(i)) && (r = e.key()) != null && t.set(r, e.value());
  return t;
}
function qs(n) {
  return new Fe(n.isSigned(), n.bitWidth());
}
function Ks(n, t) {
  const e = n.typeType();
  switch (e) {
    case st.NONE:
      return new Oe();
    case st.Null:
      return new Oe();
    case st.Binary:
      return new _r();
    case st.Utf8:
      return new vr();
    case st.Bool:
      return new wr();
    case st.List:
      return new Or((t || [])[0]);
    case st.Struct_:
      return new bt(t || []);
  }
  switch (e) {
    case st.Int: {
      const r = n.type(new Rt());
      return new Fe(r.isSigned(), r.bitWidth());
    }
    case st.FloatingPoint: {
      const r = n.type(new ee());
      return new zn(r.precision());
    }
    case st.Decimal: {
      const r = n.type(new It());
      return new Sr(r.scale(), r.precision(), r.bitWidth());
    }
    case st.Date: {
      const r = n.type(new fr());
      return new Ir(r.unit());
    }
    case st.Time: {
      const r = n.type(new Pt());
      return new Yn(r.unit(), r.bitWidth());
    }
    case st.Timestamp: {
      const r = n.type(new kt());
      return new Ar(r.unit(), r.timezone());
    }
    case st.Interval: {
      const r = n.type(new ne());
      return new Br(r.unit());
    }
    case st.Union: {
      const r = n.type(new At());
      return new Fr(r.mode(), r.typeIdsArray() || [], t || []);
    }
    case st.FixedSizeBinary: {
      const r = n.type(new Qt());
      return new Dr(r.byteWidth());
    }
    case st.FixedSizeList: {
      const r = n.type(new te());
      return new Tr(r.listSize(), (t || [])[0]);
    }
    case st.Map: {
      const r = n.type(new pr());
      return new Er((t || [])[0], r.keysSorted());
    }
  }
  throw new Error(`Unrecognized type: "${st[e]}" (${e})`);
}
function td(n, t) {
  const e = t.fields.map((s) => it.encode(n, s));
  Kt.startFieldsVector(n, e.length);
  const r = Kt.createFieldsVector(n, e), i = t.metadata && t.metadata.size > 0 ? Kt.createCustomMetadataVector(n, [...t.metadata].map(([s, o]) => {
    const a = n.createString(`${s}`), c = n.createString(`${o}`);
    return ht.startKeyValue(n), ht.addKey(n, a), ht.addValue(n, c), ht.endKeyValue(n);
  })) : -1;
  return Kt.startSchema(n), Kt.addFields(n, r), Kt.addEndianness(n, od ? gn.Little : gn.Big), i !== -1 && Kt.addCustomMetadata(n, i), Kt.endSchema(n);
}
function ed(n, t) {
  let e = -1, r = -1, i = -1;
  const s = t.type;
  let o = t.typeId;
  A.isDictionary(s) ? (o = s.dictionary.typeId, i = hi.visit(s, n), r = hi.visit(s.dictionary, n)) : r = hi.visit(s, n);
  const a = (s.children || []).map((h) => it.encode(n, h)), c = Lt.createChildrenVector(n, a), d = t.metadata && t.metadata.size > 0 ? Lt.createCustomMetadataVector(n, [...t.metadata].map(([h, f]) => {
    const m = n.createString(`${h}`), _ = n.createString(`${f}`);
    return ht.startKeyValue(n), ht.addKey(n, m), ht.addValue(n, _), ht.endKeyValue(n);
  })) : -1;
  return t.name && (e = n.createString(t.name)), Lt.startField(n), Lt.addType(n, r), Lt.addTypeType(n, o), Lt.addChildren(n, c), Lt.addNullable(n, !!t.nullable), e !== -1 && Lt.addName(n, e), i !== -1 && Lt.addDictionary(n, i), d !== -1 && Lt.addCustomMetadata(n, d), Lt.endField(n);
}
function nd(n, t) {
  const e = t.nodes || [], r = t.buffers || [];
  he.startNodesVector(n, e.length);
  for (const o of e.slice().reverse())
    qe.encode(n, o);
  const i = n.endVector();
  he.startBuffersVector(n, r.length);
  for (const o of r.slice().reverse())
    ie.encode(n, o);
  const s = n.endVector();
  return he.startRecordBatch(n), he.addLength(n, new Je(t.length, 0)), he.addNodes(n, i), he.addBuffers(n, s), he.endRecordBatch(n);
}
function rd(n, t) {
  const e = Nt.encode(n, t.data);
  return an.startDictionaryBatch(n), an.addId(n, new Je(t.id, 0)), an.addIsDelta(n, t.isDelta), an.addData(n, e), an.endDictionaryBatch(n);
}
function id(n, t) {
  return Na.createFieldNode(n, new Je(t.length, 0), new Je(t.nullCount, 0));
}
function sd(n, t) {
  return Ma.createBuffer(n, new Je(t.offset, 0), new Je(t.length, 0));
}
const od = (() => {
  const n = new ArrayBuffer(2);
  return new DataView(n).setInt16(
    0,
    256,
    !0
    /* littleEndian */
  ), new Int16Array(n)[0] === 256;
})(), ts = (n) => `Expected ${J[n]} Message in stream, but was null or length 0.`, es = (n) => `Header pointer of flatbuffer-encoded ${J[n]} Message is null or length 0.`, Pa = (n, t) => `Expected to read ${n} metadata bytes, but only read ${t}.`, ka = (n, t) => `Expected to read ${n} bytes for message body, but only read ${t}.`;
class ja {
  constructor(t) {
    this.source = t instanceof kr ? t : new kr(t);
  }
  [Symbol.iterator]() {
    return this;
  }
  next() {
    let t;
    return (t = this.readMetadataLength()).done || t.value === -1 && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? ot : t;
  }
  throw(t) {
    return this.source.throw(t);
  }
  return(t) {
    return this.source.return(t);
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(ts(t));
    return e.value;
  }
  readMessageBody(t) {
    if (t <= 0)
      return new Uint8Array(0);
    const e = $(this.source.read(t));
    if (e.byteLength < t)
      throw new Error(ka(t, e.byteLength));
    return (
      /* 1. */
      e.byteOffset % 8 === 0 && /* 2. */
      e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
    );
  }
  readSchema(t = !1) {
    const e = J.Schema, r = this.readMessage(e), i = r == null ? void 0 : r.header();
    if (t && !i)
      throw new Error(es(e));
    return i;
  }
  readMetadataLength() {
    const t = this.source.read(Zr), e = t && new yn(t), r = (e == null ? void 0 : e.readInt32(0)) || 0;
    return { done: r === 0, value: r };
  }
  readMetadata(t) {
    const e = this.source.read(t);
    if (!e)
      return ot;
    if (e.byteLength < t)
      throw new Error(Pa(t, e.byteLength));
    return { done: !1, value: _t.decode(e) };
  }
}
class ad {
  constructor(t, e) {
    this.source = t instanceof _n ? t : oo(t) ? new jr(t, e) : new _n(t);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  next() {
    return I(this, void 0, void 0, function* () {
      let t;
      return (t = yield this.readMetadataLength()).done || t.value === -1 && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? ot : t;
    });
  }
  throw(t) {
    return I(this, void 0, void 0, function* () {
      return yield this.source.throw(t);
    });
  }
  return(t) {
    return I(this, void 0, void 0, function* () {
      return yield this.source.return(t);
    });
  }
  readMessage(t) {
    return I(this, void 0, void 0, function* () {
      let e;
      if ((e = yield this.next()).done)
        return null;
      if (t != null && e.value.headerType !== t)
        throw new Error(ts(t));
      return e.value;
    });
  }
  readMessageBody(t) {
    return I(this, void 0, void 0, function* () {
      if (t <= 0)
        return new Uint8Array(0);
      const e = $(yield this.source.read(t));
      if (e.byteLength < t)
        throw new Error(ka(t, e.byteLength));
      return (
        /* 1. */
        e.byteOffset % 8 === 0 && /* 2. */
        e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
      );
    });
  }
  readSchema(t = !1) {
    return I(this, void 0, void 0, function* () {
      const e = J.Schema, r = yield this.readMessage(e), i = r == null ? void 0 : r.header();
      if (t && !i)
        throw new Error(es(e));
      return i;
    });
  }
  readMetadataLength() {
    return I(this, void 0, void 0, function* () {
      const t = yield this.source.read(Zr), e = t && new yn(t), r = (e == null ? void 0 : e.readInt32(0)) || 0;
      return { done: r === 0, value: r };
    });
  }
  readMetadata(t) {
    return I(this, void 0, void 0, function* () {
      const e = yield this.source.read(t);
      if (!e)
        return ot;
      if (e.byteLength < t)
        throw new Error(Pa(t, e.byteLength));
      return { done: !1, value: _t.decode(e) };
    });
  }
}
class cd extends ja {
  constructor(t) {
    super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof Vs ? t : new Vs(t);
  }
  next() {
    const { _json: t } = this;
    if (!this._schema)
      return this._schema = !0, { done: !1, value: _t.fromJSON(t.schema, J.Schema) };
    if (this._dictionaryIndex < t.dictionaries.length) {
      const e = t.dictionaries[this._dictionaryIndex++];
      return this._body = e.data.columns, { done: !1, value: _t.fromJSON(e, J.DictionaryBatch) };
    }
    if (this._batchIndex < t.batches.length) {
      const e = t.batches[this._batchIndex++];
      return this._body = e.columns, { done: !1, value: _t.fromJSON(e, J.RecordBatch) };
    }
    return this._body = [], ot;
  }
  readMessageBody(t) {
    return e(this._body);
    function e(r) {
      return (r || []).reduce((i, s) => [
        ...i,
        ...s.VALIDITY && [s.VALIDITY] || [],
        ...s.TYPE && [s.TYPE] || [],
        ...s.OFFSET && [s.OFFSET] || [],
        ...s.DATA && [s.DATA] || [],
        ...e(s.children)
      ], []);
    }
  }
  readMessage(t) {
    let e;
    if ((e = this.next()).done)
      return null;
    if (t != null && e.value.headerType !== t)
      throw new Error(ts(t));
    return e.value;
  }
  readSchema() {
    const t = J.Schema, e = this.readMessage(t), r = e == null ? void 0 : e.header();
    if (!e || !r)
      throw new Error(es(t));
    return r;
  }
}
const Zr = 4, Ti = "ARROW1", Hn = new Uint8Array(Ti.length);
for (let n = 0; n < Ti.length; n += 1)
  Hn[n] = Ti.codePointAt(n);
function ns(n, t = 0) {
  for (let e = -1, r = Hn.length; ++e < r; )
    if (Hn[e] !== n[t + e])
      return !1;
  return !0;
}
const Qn = Hn.length, Va = Qn + Zr, ld = Qn * 2 + Zr;
class me extends qi {
  constructor(t) {
    super(), this._impl = t;
  }
  get closed() {
    return this._impl.closed;
  }
  get schema() {
    return this._impl.schema;
  }
  get autoDestroy() {
    return this._impl.autoDestroy;
  }
  get dictionaries() {
    return this._impl.dictionaries;
  }
  get numDictionaries() {
    return this._impl.numDictionaries;
  }
  get numRecordBatches() {
    return this._impl.numRecordBatches;
  }
  get footer() {
    return this._impl.isFile() ? this._impl.footer : null;
  }
  isSync() {
    return this._impl.isSync();
  }
  isAsync() {
    return this._impl.isAsync();
  }
  isFile() {
    return this._impl.isFile();
  }
  isStream() {
    return this._impl.isStream();
  }
  next() {
    return this._impl.next();
  }
  throw(t) {
    return this._impl.throw(t);
  }
  return(t) {
    return this._impl.return(t);
  }
  cancel() {
    return this._impl.cancel();
  }
  reset(t) {
    return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this;
  }
  open(t) {
    const e = this._impl.open(t);
    return Ae(e) ? e.then(() => this) : this;
  }
  readRecordBatch(t) {
    return this._impl.isFile() ? this._impl.readRecordBatch(t) : null;
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
  toDOMStream() {
    return Ut.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
  }
  toNodeStream() {
    return Ut.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: !0 });
  }
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  /** @nocollapse */
  static from(t) {
    return t instanceof me ? t : bi(t) ? fd(t) : oo(t) ? md(t) : Ae(t) ? I(this, void 0, void 0, function* () {
      return yield me.from(yield t);
    }) : ao(t) || Ni(t) || co(t) || wn(t) ? yd(new _n(t)) : pd(new kr(t));
  }
  /** @nocollapse */
  static readAll(t) {
    return t instanceof me ? t.isSync() ? Gs(t) : Zs(t) : bi(t) || ArrayBuffer.isView(t) || Kn(t) || so(t) ? Gs(t) : Zs(t);
  }
}
class Yr extends me {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    return [...this];
  }
  [Symbol.iterator]() {
    return this._impl[Symbol.iterator]();
  }
  [Symbol.asyncIterator]() {
    return re(this, arguments, function* () {
      yield M(yield* hr(We(this[Symbol.iterator]())));
    });
  }
}
class Wr extends me {
  constructor(t) {
    super(t), this._impl = t;
  }
  readAll() {
    var t, e;
    return I(this, void 0, void 0, function* () {
      const r = new Array();
      try {
        for (var i = We(this), s; s = yield i.next(), !s.done; ) {
          const o = s.value;
          r.push(o);
        }
      } catch (o) {
        t = { error: o };
      } finally {
        try {
          s && !s.done && (e = i.return) && (yield e.call(i));
        } finally {
          if (t) throw t.error;
        }
      }
      return r;
    });
  }
  [Symbol.iterator]() {
    throw new Error("AsyncRecordBatchStreamReader is not Iterable");
  }
  [Symbol.asyncIterator]() {
    return this._impl[Symbol.asyncIterator]();
  }
}
class $a extends Yr {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class ud extends Wr {
  constructor(t) {
    super(t), this._impl = t;
  }
}
class za {
  constructor(t = /* @__PURE__ */ new Map()) {
    this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t;
  }
  get numDictionaries() {
    return this._dictionaryIndex;
  }
  get numRecordBatches() {
    return this._recordBatchIndex;
  }
  isSync() {
    return !1;
  }
  isAsync() {
    return !1;
  }
  isFile() {
    return !1;
  }
  isStream() {
    return !1;
  }
  reset(t) {
    return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = /* @__PURE__ */ new Map(), this;
  }
  _loadRecordBatch(t, e) {
    const r = this._loadVectors(t, e, this.schema.fields), i = k({ type: new bt(this.schema.fields), length: t.length, children: r });
    return new Bt(this.schema, i);
  }
  _loadDictionaryBatch(t, e) {
    const { id: r, isDelta: i } = t, { dictionaries: s, schema: o } = this, a = s.get(r);
    if (i || !a) {
      const c = o.dictionaries.get(r), d = this._loadVectors(t.data, e, [c]);
      return (a && i ? a.concat(new q(d)) : new q(d)).memoize();
    }
    return a.memoize();
  }
  _loadVectors(t, e, r) {
    return new Ta(e, t.nodes, t.buffers, this.dictionaries).visitMany(r);
  }
}
class Hr extends za {
  constructor(t, e) {
    super(e), this._reader = bi(t) ? new cd(this._handle = t) : new ja(this._handle = t);
  }
  isSync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.iterator]() {
    return this;
  }
  cancel() {
    !this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
  }
  open(t) {
    return this.closed || (this.autoDestroy = Wa(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this;
  }
  throw(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : ot;
  }
  return(t) {
    return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : ot;
  }
  next() {
    if (this.closed)
      return ot;
    let t;
    const { _reader: e } = this;
    for (; t = this._readNextMessageAndValidate(); )
      if (t.isSchema())
        this.reset(t.header());
      else if (t.isRecordBatch()) {
        this._recordBatchIndex++;
        const r = t.header(), i = e.readMessageBody(t.bodyLength);
        return { done: !1, value: this._loadRecordBatch(r, i) };
      } else if (t.isDictionaryBatch()) {
        this._dictionaryIndex++;
        const r = t.header(), i = e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(r, i);
        this.dictionaries.set(r.id, s);
      }
    return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Qi(this.schema) }) : this.return();
  }
  _readNextMessageAndValidate(t) {
    return this._reader.readMessage(t);
  }
}
class Jr extends za {
  constructor(t, e) {
    super(e), this._reader = new ad(this._handle = t);
  }
  isAsync() {
    return !0;
  }
  isStream() {
    return !0;
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  cancel() {
    return I(this, void 0, void 0, function* () {
      !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null);
    });
  }
  open(t) {
    return I(this, void 0, void 0, function* () {
      return this.closed || (this.autoDestroy = Wa(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this;
    });
  }
  throw(t) {
    return I(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : ot;
    });
  }
  return(t) {
    return I(this, void 0, void 0, function* () {
      return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : ot;
    });
  }
  next() {
    return I(this, void 0, void 0, function* () {
      if (this.closed)
        return ot;
      let t;
      const { _reader: e } = this;
      for (; t = yield this._readNextMessageAndValidate(); )
        if (t.isSchema())
          yield this.reset(t.header());
        else if (t.isRecordBatch()) {
          this._recordBatchIndex++;
          const r = t.header(), i = yield e.readMessageBody(t.bodyLength);
          return { done: !1, value: this._loadRecordBatch(r, i) };
        } else if (t.isDictionaryBatch()) {
          this._dictionaryIndex++;
          const r = t.header(), i = yield e.readMessageBody(t.bodyLength), s = this._loadDictionaryBatch(r, i);
          this.dictionaries.set(r.id, s);
        }
      return this.schema && this._recordBatchIndex === 0 ? (this._recordBatchIndex++, { done: !1, value: new Qi(this.schema) }) : yield this.return();
    });
  }
  _readNextMessageAndValidate(t) {
    return I(this, void 0, void 0, function* () {
      return yield this._reader.readMessage(t);
    });
  }
}
class Ya extends Hr {
  constructor(t, e) {
    super(t instanceof $s ? t : new $s(t), e);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isSync() {
    return !0;
  }
  isFile() {
    return !0;
  }
  open(t) {
    if (!this.closed && !this._footer) {
      this.schema = (this._footer = this._readFooter()).schema;
      for (const e of this._footer.dictionaryBatches())
        e && this._readDictionaryBatch(this._dictionaryIndex++);
    }
    return super.open(t);
  }
  readRecordBatch(t) {
    var e;
    if (this.closed)
      return null;
    this._footer || this.open();
    const r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
    if (r && this._handle.seek(r.offset)) {
      const i = this._reader.readMessage(J.RecordBatch);
      if (i != null && i.isRecordBatch()) {
        const s = i.header(), o = this._reader.readMessageBody(i.bodyLength);
        return this._loadRecordBatch(s, o);
      }
    }
    return null;
  }
  _readDictionaryBatch(t) {
    var e;
    const r = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
    if (r && this._handle.seek(r.offset)) {
      const i = this._reader.readMessage(J.DictionaryBatch);
      if (i != null && i.isDictionaryBatch()) {
        const s = i.header(), o = this._reader.readMessageBody(i.bodyLength), a = this._loadDictionaryBatch(s, o);
        this.dictionaries.set(s.id, a);
      }
    }
  }
  _readFooter() {
    const { _handle: t } = this, e = t.size - Va, r = t.readInt32(e), i = t.readAt(e - r, r);
    return Wn.decode(i);
  }
  _readNextMessageAndValidate(t) {
    var e;
    if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
      const r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(this._recordBatchIndex);
      if (r && this._handle.seek(r.offset))
        return this._reader.readMessage(t);
    }
    return null;
  }
}
class dd extends Jr {
  constructor(t, ...e) {
    const r = typeof e[0] != "number" ? e.shift() : void 0, i = e[0] instanceof Map ? e.shift() : void 0;
    super(t instanceof jr ? t : new jr(t, r), i);
  }
  get footer() {
    return this._footer;
  }
  get numDictionaries() {
    return this._footer ? this._footer.numDictionaries : 0;
  }
  get numRecordBatches() {
    return this._footer ? this._footer.numRecordBatches : 0;
  }
  isFile() {
    return !0;
  }
  isAsync() {
    return !0;
  }
  open(t) {
    const e = Object.create(null, {
      open: { get: () => super.open }
    });
    return I(this, void 0, void 0, function* () {
      if (!this.closed && !this._footer) {
        this.schema = (this._footer = yield this._readFooter()).schema;
        for (const r of this._footer.dictionaryBatches())
          r && (yield this._readDictionaryBatch(this._dictionaryIndex++));
      }
      return yield e.open.call(this, t);
    });
  }
  readRecordBatch(t) {
    var e;
    return I(this, void 0, void 0, function* () {
      if (this.closed)
        return null;
      this._footer || (yield this.open());
      const r = (e = this._footer) === null || e === void 0 ? void 0 : e.getRecordBatch(t);
      if (r && (yield this._handle.seek(r.offset))) {
        const i = yield this._reader.readMessage(J.RecordBatch);
        if (i != null && i.isRecordBatch()) {
          const s = i.header(), o = yield this._reader.readMessageBody(i.bodyLength);
          return this._loadRecordBatch(s, o);
        }
      }
      return null;
    });
  }
  _readDictionaryBatch(t) {
    var e;
    return I(this, void 0, void 0, function* () {
      const r = (e = this._footer) === null || e === void 0 ? void 0 : e.getDictionaryBatch(t);
      if (r && (yield this._handle.seek(r.offset))) {
        const i = yield this._reader.readMessage(J.DictionaryBatch);
        if (i != null && i.isDictionaryBatch()) {
          const s = i.header(), o = yield this._reader.readMessageBody(i.bodyLength), a = this._loadDictionaryBatch(s, o);
          this.dictionaries.set(s.id, a);
        }
      }
    });
  }
  _readFooter() {
    return I(this, void 0, void 0, function* () {
      const { _handle: t } = this;
      t._pending && (yield t._pending);
      const e = t.size - Va, r = yield t.readInt32(e), i = yield t.readAt(e - r, r);
      return Wn.decode(i);
    });
  }
  _readNextMessageAndValidate(t) {
    return I(this, void 0, void 0, function* () {
      if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
        const e = this._footer.getRecordBatch(this._recordBatchIndex);
        if (e && (yield this._handle.seek(e.offset)))
          return yield this._reader.readMessage(t);
      }
      return null;
    });
  }
}
class hd extends Hr {
  constructor(t, e) {
    super(t, e);
  }
  _loadVectors(t, e, r) {
    return new Au(e, t.nodes, t.buffers, this.dictionaries).visitMany(r);
  }
}
function Wa(n, t) {
  return t && typeof t.autoDestroy == "boolean" ? t.autoDestroy : n.autoDestroy;
}
function* Gs(n) {
  const t = me.from(n);
  try {
    if (!t.open({ autoDestroy: !1 }).closed)
      do
        yield t;
      while (!t.reset().open().closed);
  } finally {
    t.cancel();
  }
}
function Zs(n) {
  return re(this, arguments, function* () {
    const e = yield M(me.from(n));
    try {
      if (!(yield M(e.open({ autoDestroy: !1 }))).closed)
        do
          yield yield M(e);
        while (!(yield M(e.reset().open())).closed);
    } finally {
      yield M(e.cancel());
    }
  });
}
function fd(n) {
  return new Yr(new hd(n));
}
function pd(n) {
  const t = n.peek(Qn + 7 & -8);
  return t && t.byteLength >= 4 ? ns(t) ? new $a(new Ya(n.read())) : new Yr(new Hr(n)) : new Yr(new Hr(function* () {
  }()));
}
function yd(n) {
  return I(this, void 0, void 0, function* () {
    const t = yield n.peek(Qn + 7 & -8);
    return t && t.byteLength >= 4 ? ns(t) ? new $a(new Ya(yield n.read())) : new Wr(new Jr(n)) : new Wr(new Jr(function() {
      return re(this, arguments, function* () {
      });
    }()));
  });
}
function md(n) {
  return I(this, void 0, void 0, function* () {
    const { size: t } = yield n.stat(), e = new jr(n, t);
    return t >= ld && ns(yield e.readAt(0, Qn + 7 & -8)) ? new ud(new dd(e)) : new Wr(new Jr(e));
  });
}
class ut extends j {
  constructor() {
    super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = [];
  }
  /** @nocollapse */
  static assemble(...t) {
    const e = (i) => i.flatMap((s) => Array.isArray(s) ? e(s) : s instanceof Bt ? s.data.children : s.data), r = new ut();
    return r.visitMany(e(t)), r;
  }
  visit(t) {
    if (t instanceof q)
      return this.visitMany(t.data), this;
    const { type: e } = t;
    if (!A.isDictionary(e)) {
      const { length: r, nullCount: i } = t;
      if (r > 2147483647)
        throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
      A.isNull(e) || zt.call(this, i <= 0 ? new Uint8Array(0) : zi(t.offset, r, t.nullBitmap)), this.nodes.push(new qe(r, i));
    }
    return super.visit(t);
  }
  visitNull(t) {
    return this;
  }
  visitDictionary(t) {
    return this.visit(t.clone(t.type.indices));
  }
  get nodes() {
    return this._nodes;
  }
  get buffers() {
    return this._buffers;
  }
  get byteLength() {
    return this._byteLength;
  }
  get bufferRegions() {
    return this._bufferRegions;
  }
}
function zt(n) {
  const t = n.byteLength + 7 & -8;
  return this.buffers.push(n), this.bufferRegions.push(new ie(this._byteLength, t)), this._byteLength += t, this;
}
function gd(n) {
  const { type: t, length: e, typeIds: r, valueOffsets: i } = n;
  if (zt.call(this, r), t.mode === Mt.Sparse)
    return Ei.call(this, n);
  if (t.mode === Mt.Dense) {
    if (n.offset <= 0)
      return zt.call(this, i), Ei.call(this, n);
    {
      const s = r.reduce((h, f) => Math.max(h, f), r[0]), o = new Int32Array(s + 1), a = new Int32Array(s + 1).fill(-1), c = new Int32Array(e), d = Li(-i[0], e, i);
      for (let h, f, m = -1; ++m < e; )
        (f = a[h = r[m]]) === -1 && (f = a[h] = d[h]), c[m] = d[m] - f, ++o[h];
      zt.call(this, c);
      for (let h, f = -1, m = t.children.length; ++f < m; )
        if (h = n.children[f]) {
          const _ = t.typeIds[f], C = Math.min(e, o[_]);
          this.visit(h.slice(a[_], C));
        }
    }
  }
  return this;
}
function bd(n) {
  let t;
  return n.nullCount >= n.length ? zt.call(this, new Uint8Array(0)) : (t = n.values) instanceof Uint8Array ? zt.call(this, zi(n.offset, n.length, t)) : zt.call(this, Rr(n.values));
}
function xe(n) {
  return zt.call(this, n.values.subarray(0, n.length * n.stride));
}
function Ha(n) {
  const { length: t, values: e, valueOffsets: r } = n, i = r[0], s = r[t], o = Math.min(s - i, e.byteLength - i);
  return zt.call(this, Li(-r[0], t, r)), zt.call(this, e.subarray(i, i + o)), this;
}
function rs(n) {
  const { length: t, valueOffsets: e } = n;
  return e && zt.call(this, Li(e[0], t, e)), this.visit(n.children[0]);
}
function Ei(n) {
  return this.visitMany(n.type.children.map((t, e) => n.children[e]).filter(Boolean))[0];
}
ut.prototype.visitBool = bd;
ut.prototype.visitInt = xe;
ut.prototype.visitFloat = xe;
ut.prototype.visitUtf8 = Ha;
ut.prototype.visitBinary = Ha;
ut.prototype.visitFixedSizeBinary = xe;
ut.prototype.visitDate = xe;
ut.prototype.visitTimestamp = xe;
ut.prototype.visitTime = xe;
ut.prototype.visitDecimal = xe;
ut.prototype.visitList = rs;
ut.prototype.visitStruct = Ei;
ut.prototype.visitUnion = gd;
ut.prototype.visitInterval = xe;
ut.prototype.visitFixedSizeList = rs;
ut.prototype.visitMap = rs;
class Ja extends qi {
  constructor(t) {
    super(), this._position = 0, this._started = !1, this._sink = new mr(), this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), Ft(t) || (t = { autoDestroy: !0, writeLegacyIpcFormat: !1 }), this._autoDestroy = typeof t.autoDestroy == "boolean" ? t.autoDestroy : !0, this._writeLegacyIpcFormat = typeof t.writeLegacyIpcFormat == "boolean" ? t.writeLegacyIpcFormat : !1;
  }
  /** @nocollapse */
  // @ts-ignore
  static throughNode(t) {
    throw new Error('"throughNode" not available in this environment');
  }
  /** @nocollapse */
  static throughDOM(t, e) {
    throw new Error('"throughDOM" not available in this environment');
  }
  toString(t = !1) {
    return this._sink.toString(t);
  }
  toUint8Array(t = !1) {
    return this._sink.toUint8Array(t);
  }
  writeAll(t) {
    return Ae(t) ? t.then((e) => this.writeAll(e)) : wn(t) ? as(this, t) : os(this, t);
  }
  get closed() {
    return this._sink.closed;
  }
  [Symbol.asyncIterator]() {
    return this._sink[Symbol.asyncIterator]();
  }
  toDOMStream(t) {
    return this._sink.toDOMStream(t);
  }
  toNodeStream(t) {
    return this._sink.toNodeStream(t);
  }
  close() {
    return this.reset()._sink.close();
  }
  abort(t) {
    return this.reset()._sink.abort(t);
  }
  finish() {
    return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this;
  }
  reset(t = this._sink, e = null) {
    return t === this._sink || t instanceof mr ? this._sink = t : (this._sink = new mr(), t && kc(t) ? this.toDOMStream({ type: "bytes" }).pipeTo(t) : t && jc(t) && this.toNodeStream({ objectMode: !1 }).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map(), (!e || !Oi(e, this._schema)) && (e == null ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this;
  }
  write(t) {
    let e = null;
    if (this._sink) {
      if (t == null)
        return this.finish() && void 0;
      if (t instanceof gt && !(e = t.schema))
        return this.finish() && void 0;
      if (t instanceof Bt && !(e = t.schema))
        return this.finish() && void 0;
    } else throw new Error("RecordBatchWriter is closed");
    if (e && !Oi(e, this._schema)) {
      if (this._started && this._autoDestroy)
        return this.close();
      this.reset(this._sink, e);
    }
    t instanceof Bt ? t instanceof Qi || this._writeRecordBatch(t) : t instanceof gt ? this.writeAll(t.batches) : Kn(t) && this.writeAll(t);
  }
  _writeMessage(t, e = 8) {
    const r = e - 1, i = _t.encode(t), s = i.byteLength, o = this._writeLegacyIpcFormat ? 4 : 8, a = s + o + r & ~r, c = a - s - o;
    return t.headerType === J.RecordBatch ? this._recordBatchBlocks.push(new De(a, t.bodyLength, this._position)) : t.headerType === J.DictionaryBatch && this._dictionaryBlocks.push(new De(a, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(a - o)), s > 0 && this._write(i), this._writePadding(c);
  }
  _write(t) {
    if (this._started) {
      const e = $(t);
      e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength);
    }
    return this;
  }
  _writeSchema(t) {
    return this._writeMessage(_t.from(t));
  }
  // @ts-ignore
  _writeFooter(t) {
    return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
  }
  _writeMagic() {
    return this._write(Hn);
  }
  _writePadding(t) {
    return t > 0 ? this._write(new Uint8Array(t)) : this;
  }
  _writeRecordBatch(t) {
    const { byteLength: e, nodes: r, bufferRegions: i, buffers: s } = ut.assemble(t), o = new Nt(t.numRows, r, i), a = _t.from(o, e);
    return this._writeDictionaries(t)._writeMessage(a)._writeBodyBuffers(s);
  }
  _writeDictionaryBatch(t, e, r = !1) {
    this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
    const { byteLength: i, nodes: s, bufferRegions: o, buffers: a } = ut.assemble(new q([t])), c = new Nt(t.length, s, o), d = new ae(c, e, r), h = _t.from(d, i);
    return this._writeMessage(h)._writeBodyBuffers(a);
  }
  _writeBodyBuffers(t) {
    let e, r, i;
    for (let s = -1, o = t.length; ++s < o; )
      (e = t[s]) && (r = e.byteLength) > 0 && (this._write(e), (i = (r + 7 & -8) - r) > 0 && this._writePadding(i));
    return this;
  }
  _writeDictionaries(t) {
    for (let [e, r] of t.dictionaries) {
      let i = this._dictionaryDeltaOffsets.get(e) || 0;
      if (i === 0 || (r = r == null ? void 0 : r.slice(i)).length > 0)
        for (const s of r.data)
          this._writeDictionaryBatch(s, e, i > 0), i += s.length;
    }
    return this;
  }
}
class is extends Ja {
  /** @nocollapse */
  static writeAll(t, e) {
    const r = new is(e);
    return Ae(t) ? t.then((i) => r.writeAll(i)) : wn(t) ? as(r, t) : os(r, t);
  }
}
class ss extends Ja {
  /** @nocollapse */
  static writeAll(t) {
    const e = new ss();
    return Ae(t) ? t.then((r) => e.writeAll(r)) : wn(t) ? as(e, t) : os(e, t);
  }
  constructor() {
    super(), this._autoDestroy = !0;
  }
  // @ts-ignore
  _writeSchema(t) {
    return this._writeMagic()._writePadding(2);
  }
  _writeFooter(t) {
    const e = Wn.encode(new Wn(t, xt.V4, this._recordBatchBlocks, this._dictionaryBlocks));
    return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic();
  }
}
function os(n, t) {
  let e = t;
  t instanceof gt && (e = t.batches, n.reset(void 0, t.schema));
  for (const r of e)
    n.write(r);
  return n.finish();
}
function as(n, t) {
  var e, r, i, s;
  return I(this, void 0, void 0, function* () {
    try {
      for (e = We(t); r = yield e.next(), !r.done; ) {
        const o = r.value;
        n.write(o);
      }
    } catch (o) {
      i = { error: o };
    } finally {
      try {
        r && !r.done && (s = e.return) && (yield s.call(e));
      } finally {
        if (i) throw i.error;
      }
    }
    return n.finish();
  });
}
function Ln(n) {
  const t = me.from(n);
  return Ae(t) ? t.then((e) => Ln(e)) : t.isAsync() ? t.readAll().then((e) => new gt(e)) : new gt(t.readAll());
}
function fi(n, t = "stream") {
  return (t === "stream" ? is : ss).writeAll(n).toUint8Array(!0);
}
var Xs = (
  /** @class */
  function() {
    function n(t, e, r, i) {
      var s = this;
      this.getCell = function(o, a) {
        var c = o < s.headerRows && a < s.headerColumns, d = o >= s.headerRows && a < s.headerColumns, h = o < s.headerRows && a >= s.headerColumns;
        if (c) {
          var f = ["blank"];
          return a > 0 && f.push("level" + o), {
            type: "blank",
            classNames: f.join(" "),
            content: ""
          };
        } else if (h) {
          var m = a - s.headerColumns, f = [
            "col_heading",
            "level" + o,
            "col" + m
          ];
          return {
            type: "columns",
            classNames: f.join(" "),
            content: s.getContent(s.columnsTable, m, o)
          };
        } else if (d) {
          var _ = o - s.headerRows, f = [
            "row_heading",
            "level" + a,
            "row" + _
          ];
          return {
            type: "index",
            id: "T_".concat(s.uuid, "level").concat(a, "_row").concat(_),
            classNames: f.join(" "),
            content: s.getContent(s.indexTable, _, a)
          };
        } else {
          var _ = o - s.headerRows, m = a - s.headerColumns, f = [
            "data",
            "row" + _,
            "col" + m
          ], C = s.styler ? s.getContent(s.styler.displayValuesTable, _, m) : s.getContent(s.dataTable, _, m);
          return {
            type: "data",
            id: "T_".concat(s.uuid, "row").concat(_, "_col").concat(m),
            classNames: f.join(" "),
            content: C
          };
        }
      }, this.getContent = function(o, a, c) {
        var d = o.getChildAt(c);
        if (d === null)
          return "";
        var h = s.getColumnTypeId(o, c);
        switch (h) {
          case u.Timestamp:
            return s.nanosToDate(d.get(a));
          default:
            return d.get(a);
        }
      }, this.dataTable = Ln(t), this.indexTable = Ln(e), this.columnsTable = Ln(r), this.styler = i ? {
        caption: i.caption,
        displayValuesTable: Ln(i.displayValues),
        styles: i.styles,
        uuid: i.uuid
      } : void 0;
    }
    return Object.defineProperty(n.prototype, "rows", {
      get: function() {
        return this.indexTable.numRows + this.columnsTable.numCols;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "columns", {
      get: function() {
        return this.indexTable.numCols + this.columnsTable.numRows;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "headerRows", {
      get: function() {
        return this.rows - this.dataRows;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "headerColumns", {
      get: function() {
        return this.columns - this.dataColumns;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "dataRows", {
      get: function() {
        return this.dataTable.numRows;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "dataColumns", {
      get: function() {
        return this.dataTable.numCols;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "uuid", {
      get: function() {
        return this.styler && this.styler.uuid;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "caption", {
      get: function() {
        return this.styler && this.styler.caption;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "styles", {
      get: function() {
        return this.styler && this.styler.styles;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "table", {
      get: function() {
        return this.dataTable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "index", {
      get: function() {
        return this.indexTable;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n.prototype, "columnTable", {
      get: function() {
        return this.columnsTable;
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.serialize = function() {
      return {
        data: fi(this.dataTable),
        index: fi(this.indexTable),
        columns: fi(this.columnsTable)
      };
    }, n.prototype.getColumnTypeId = function(t, e) {
      return t.schema.fields[e].type.typeId;
    }, n.prototype.nanosToDate = function(t) {
      return new Date(t / 1e6);
    }, n;
  }()
), Pn = function() {
  return Pn = Object.assign || function(n) {
    for (var t, e = 1, r = arguments.length; e < r; e++) {
      t = arguments[e];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
    }
    return n;
  }, Pn.apply(this, arguments);
}, kn;
(function(n) {
  n.COMPONENT_READY = "streamlit:componentReady", n.SET_COMPONENT_VALUE = "streamlit:setComponentValue", n.SET_FRAME_HEIGHT = "streamlit:setFrameHeight";
})(kn || (kn = {}));
var $t = (
  /** @class */
  function() {
    function n() {
    }
    return n.API_VERSION = 1, n.RENDER_EVENT = "streamlit:render", n.events = new EventTarget(), n.registeredMessageListener = !1, n.setComponentReady = function() {
      n.registeredMessageListener || (window.addEventListener("message", n.onMessageEvent), n.registeredMessageListener = !0), n.sendBackMsg(kn.COMPONENT_READY, {
        apiVersion: n.API_VERSION
      });
    }, n.setFrameHeight = function(t) {
      t === void 0 && (t = document.body.scrollHeight), t !== n.lastFrameHeight && (n.lastFrameHeight = t, n.sendBackMsg(kn.SET_FRAME_HEIGHT, { height: t }));
    }, n.setComponentValue = function(t) {
      var e;
      t instanceof Xs ? (e = "dataframe", t = t.serialize()) : vd(t) ? (e = "bytes", t = new Uint8Array(t.buffer)) : t instanceof ArrayBuffer ? (e = "bytes", t = new Uint8Array(t)) : e = "json", n.sendBackMsg(kn.SET_COMPONENT_VALUE, {
        value: t,
        dataType: e
      });
    }, n.onMessageEvent = function(t) {
      var e = t.data.type;
      switch (e) {
        case n.RENDER_EVENT:
          n.onRenderMessage(t.data);
          break;
      }
    }, n.onRenderMessage = function(t) {
      var e = t.args;
      e == null && (console.error("Got null args in onRenderMessage. This should never happen"), e = {});
      var r = t.dfs && t.dfs.length > 0 ? n.argsDataframeToObject(t.dfs) : {};
      e = Pn(Pn({}, e), r);
      var i = !!t.disabled, s = t.theme;
      s && _d(s);
      var o = { disabled: i, args: e, theme: s }, a = new CustomEvent(n.RENDER_EVENT, {
        detail: o
      });
      n.events.dispatchEvent(a);
    }, n.argsDataframeToObject = function(t) {
      var e = t.map(function(r) {
        var i = r.key, s = r.value;
        return [i, n.toArrowTable(s)];
      });
      return Object.fromEntries(e);
    }, n.toArrowTable = function(t) {
      var e, r = (e = t.data, e.data), i = e.index, s = e.columns, o = e.styler;
      return new Xs(r, i, s, o);
    }, n.sendBackMsg = function(t, e) {
      window.parent.postMessage(Pn({ isStreamlitMessage: !0, type: t }, e), "*");
    }, n;
  }()
), _d = function(n) {
  var t = document.createElement("style");
  document.head.appendChild(t), t.innerHTML = `
    :root {
      --primary-color: `.concat(n.primaryColor, `;
      --background-color: `).concat(n.backgroundColor, `;
      --secondary-background-color: `).concat(n.secondaryBackgroundColor, `;
      --text-color: `).concat(n.textColor, `;
      --font: `).concat(n.font, `;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }
  `);
};
function vd(n) {
  var t = !1;
  try {
    t = n instanceof BigInt64Array || n instanceof BigUint64Array;
  } catch {
  }
  return n instanceof Int8Array || n instanceof Uint8Array || n instanceof Uint8ClampedArray || n instanceof Int16Array || n instanceof Uint16Array || n instanceof Int32Array || n instanceof Uint32Array || n instanceof Float32Array || n instanceof Float64Array || t;
}
var qa = /* @__PURE__ */ function() {
  var n = function(t, e) {
    return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (r[s] = i[s]);
    }, n(t, e);
  };
  return function(t, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    n(t, e);
    function r() {
      this.constructor = t;
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
  };
}();
(function(n) {
  qa(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    $t.setFrameHeight();
  }, t.prototype.componentDidUpdate = function() {
    $t.setFrameHeight();
  }, t;
})(Ie.PureComponent);
function Ka(n) {
  var t = (
    /** @class */
    function(e) {
      qa(r, e);
      function r(i) {
        var s = e.call(this, i) || this;
        return s.componentDidMount = function() {
          $t.events.addEventListener($t.RENDER_EVENT, s.onRenderEvent), $t.setComponentReady();
        }, s.componentDidUpdate = function() {
          s.state.componentError != null && $t.setFrameHeight();
        }, s.componentWillUnmount = function() {
          $t.events.removeEventListener($t.RENDER_EVENT, s.onRenderEvent);
        }, s.onRenderEvent = function(o) {
          s.setState({ renderData: o.detail });
        }, s.state = {
          renderData: void 0,
          componentError: void 0
        }, s;
      }
      return r.prototype.render = function() {
        return this.state.componentError != null ? Ie.createElement(
          "div",
          null,
          Ie.createElement("h1", null, "Component Error"),
          Ie.createElement("span", null, this.state.componentError.message)
        ) : this.state.renderData == null ? null : Ie.createElement(n, { width: window.innerWidth, disabled: this.state.renderData.disabled, args: this.state.renderData.args, theme: this.state.renderData.theme });
      }, r.getDerivedStateFromError = function(i) {
        return { componentError: i };
      }, r;
    }(Ie.PureComponent)
  );
  return Nc(t, n);
}
function wd() {
  const n = {
    iceServers: [
      { urls: "stun:stun.l.google.com:19302" }
    ]
  };
  return new RTCPeerConnection(n);
}
async function Sd() {
  try {
    const n = {
      audio: {
        echoCancellation: !0,
        noiseSuppression: !0,
        autoGainControl: !0,
        sampleRate: 24e3
      },
      video: !1
    }, t = await navigator.mediaDevices.getUserMedia(n);
    if (!t.getAudioTracks().length)
      throw new Error("No audio tracks found in stream");
    return t;
  } catch (n) {
    throw console.error("Failed to access microphone:", n), n;
  }
}
async function Id(n, t) {
  try {
    const e = await n.createOffer();
    await n.setLocalDescription(e);
    const r = await fetch("https://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${t.apiKey}`,
        "Content-Type": "application/sdp"
      },
      body: e.sdp
    });
    if (!r.ok) {
      const o = await r.text();
      throw new Error(`OpenAI API error: ${r.status} - ${o}`);
    }
    const s = {
      type: "answer",
      sdp: await r.text()
    };
    await n.setRemoteDescription(s);
  } catch (e) {
    throw console.error("Failed to establish OpenAI connection:", e), e;
  }
}
function Ad(n, t = 1e4) {
  return new Promise((e, r) => {
    const i = setTimeout(() => {
      r(new Error(`Connection timeout after ${t}ms. Current state: ${n.connectionState}`));
    }, t), s = () => {
      n.connectionState === "connected" ? (clearTimeout(i), e()) : (n.connectionState === "failed" || n.connectionState === "closed") && (clearTimeout(i), r(new Error(`Connection failed. State: ${n.connectionState}`)));
    };
    n.addEventListener("connectionstatechange", s), s();
  });
}
function Bd(n) {
  return n.createDataChannel("oai-events", {
    ordered: !0
  });
}
function Od(n, t = 5e3) {
  return new Promise((e, r) => {
    if (n.readyState === "open") {
      e();
      return;
    }
    const i = setTimeout(() => {
      r(new Error(`Data channel timeout after ${t}ms. State: ${n.readyState}`));
    }, t), s = () => {
      clearTimeout(i), n.removeEventListener("open", s), e();
    }, o = () => {
      clearTimeout(i), n.removeEventListener("error", o), r(new Error("Data channel error"));
    };
    n.addEventListener("open", s), n.addEventListener("error", o);
  });
}
function Qs(n, t = "unknown") {
  return n instanceof Error ? n.name === "NotAllowedError" || n.message.includes("permission") ? {
    type: "permission",
    message: "Microphone permission denied. Please allow microphone access and try again.",
    details: n
  } : n.name === "NotFoundError" || n.message.includes("device") ? {
    type: "device",
    message: "No microphone device found. Please check your audio devices.",
    details: n
  } : n.message.includes("network") || n.message.includes("connection") ? {
    type: "connection",
    message: "Network connection error. Please check your internet connection.",
    details: n
  } : n.message.includes("API") || n.message.includes("401") || n.message.includes("403") ? {
    type: "api",
    message: "OpenAI API error. Please check your API key and try again.",
    details: n
  } : {
    type: t,
    message: n.message,
    details: n
  } : {
    type: t,
    message: "An unknown error occurred",
    details: n
  };
}
function Fd(n, t, e) {
  try {
    e && e.getTracks().forEach((r) => {
      r.stop();
    }), t && t.readyState === "open" && t.close(), n && n.connectionState !== "closed" && n.close();
  } catch (r) {
    console.error("Error during cleanup:", r);
  }
}
let cr;
const Dd = new Uint8Array(16);
function Td() {
  if (!cr && (cr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !cr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return cr(Dd);
}
const yt = [];
for (let n = 0; n < 256; ++n)
  yt.push((n + 256).toString(16).slice(1));
function Ed(n, t = 0) {
  return yt[n[t + 0]] + yt[n[t + 1]] + yt[n[t + 2]] + yt[n[t + 3]] + "-" + yt[n[t + 4]] + yt[n[t + 5]] + "-" + yt[n[t + 6]] + yt[n[t + 7]] + "-" + yt[n[t + 8]] + yt[n[t + 9]] + "-" + yt[n[t + 10]] + yt[n[t + 11]] + yt[n[t + 12]] + yt[n[t + 13]] + yt[n[t + 14]] + yt[n[t + 15]];
}
const Rd = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), to = {
  randomUUID: Rd
};
function lr(n, t, e) {
  if (to.randomUUID && !n)
    return to.randomUUID();
  n = n || {};
  const r = n.random || (n.rng || Td)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Ed(r);
}
function xd(n) {
  return {
    type: "session.update",
    session: {
      instructions: n.instructions,
      voice: n.voice,
      input_audio_transcription: {
        model: "whisper-1"
      },
      turn_detection: {
        type: "server_vad",
        threshold: n.turnDetectionThreshold,
        prefix_padding_ms: 300,
        silence_duration_ms: 200,
        create_response: !0,
        // Re-enable response creation
        interrupt_response: !0
      },
      temperature: n.temperature
    }
  };
}
function Md(n) {
  return {
    type: "response.create",
    response: {
      modalities: ["text", "audio"],
      instructions: n || "Say a brief friendly greeting to start the conversation."
    }
  };
}
function eo() {
  return {
    type: "response.cancel"
  };
}
function ur(n, t) {
  if (!n) {
    console.warn("Data channel is null, cannot send event:", t.type);
    return;
  }
  if (n.readyState === "open")
    try {
      const e = JSON.stringify(t);
      console.log("Sending event:", t.type, t), n.send(e);
    } catch (e) {
      console.error("Failed to send event:", t.type, e);
    }
  else
    console.warn(`Data channel not open (state: ${n.readyState}), cannot send event:`, t.type);
}
function Nd(n) {
  try {
    const t = JSON.parse(n);
    return console.log("Received event:", t.type, t), t;
  } catch (t) {
    return console.error("Failed to parse event:", t, n), null;
  }
}
let Cd = 0;
function dr() {
  return Cd++;
}
function Ld(n, t) {
  const e = [...t];
  switch (n.type) {
    case "input_audio_buffer.speech_started": {
      if (e.findIndex(
        (i) => i.type === "user" && i.status === "in_progress"
      ) === -1) {
        const i = {
          id: n.item_id || lr(),
          type: "user",
          content: "",
          timestamp: Date.now(),
          sequence: dr(),
          status: "in_progress"
        };
        console.log(
          `[Transcript] Placeholder user message created: sequence=${i.sequence}`
        ), e.push(i);
      }
      break;
    }
    case "conversation.item.input_audio_transcription.completed": {
      const r = e.findIndex(
        (i) => i.id === n.item_id || i.type === "user" && i.status === "in_progress"
      );
      if (r >= 0)
        e[r] = {
          ...e[r],
          content: n.transcript || e[r].content,
          status: "completed"
        }, console.log(
          `[Transcript] Updated user placeholder: sequence=${e[r].sequence}, content="${n.transcript}"`
        );
      else {
        const i = {
          id: n.item_id || lr(),
          type: "user",
          content: n.transcript || "",
          timestamp: Date.now(),
          sequence: dr(),
          status: "completed"
        };
        console.log(
          `[Transcript] User message (no placeholder): sequence=${i.sequence}, content="${i.content}"`
        ), e.push(i);
      }
      break;
    }
    case "response.audio_transcript.delta": {
      const r = n.response_id || lr(), i = e.findIndex((s) => s.id === r);
      if (i >= 0)
        e[i] = {
          ...e[i],
          content: e[i].content + (n.delta || ""),
          status: "in_progress"
        };
      else {
        const s = {
          id: r,
          type: "assistant",
          content: n.delta || "",
          timestamp: Date.now(),
          sequence: dr(),
          status: "in_progress"
        };
        console.log(`[Transcript] Assistant message: sequence=${s.sequence}, content="${s.content}"`), e.push(s);
      }
      break;
    }
    case "response.audio_transcript.done": {
      const r = n.response_id || lr(), i = e.findIndex((s) => s.id === r);
      if (i >= 0)
        e[i] = {
          ...e[i],
          content: n.transcript || e[i].content,
          status: "completed"
        };
      else {
        const s = {
          id: r,
          type: "assistant",
          content: n.transcript || "",
          timestamp: Date.now(),
          sequence: dr(),
          status: "completed"
        };
        console.log(`[Transcript] Assistant message completed: sequence=${s.sequence}, content="${s.content}"`), e.push(s);
      }
      break;
    }
    default:
      return t;
  }
  return e;
}
function Ud(n) {
  switch (n.type) {
    case "session.created":
      return "connected";
    case "input_audio_buffer.speech_started":
      return "recording";
    case "input_audio_buffer.speech_stopped":
      return "connected";
    case "response.audio_transcript.delta":
    case "response.audio.delta":
      return "speaking";
    case "response.done":
      return "connected";
    case "error":
      return "error";
    default:
      return null;
  }
}
function Pd(n) {
  var t;
  return n.type === "session.created" && ((t = n.session) != null && t.id) ? n.session.id : null;
}
function kd(n) {
  return n.type === "error" || n.error && n.error.type || n.type.includes("error");
}
function jd(n) {
  const t = Ga(n);
  return t.includes("Cancellation failed") || t.includes("no active response") || t.includes("cancellation");
}
function Ga(n) {
  var t;
  return (t = n.error) != null && t.message ? n.error.message : n.message ? n.message : `Unknown error: ${n.type}`;
}
function Vd(n, t, e, r, i) {
  let s = [], o = !1;
  return {
    handleEvent: (a) => {
      if (console.log(`[Event] Processing event: ${a.type}`, a), kd(a)) {
        const m = Ga(a);
        if (jd(a)) {
          console.log("Ignoring cancellation error:", m);
          return;
        }
        r(m), t("error");
        return;
      }
      const c = Pd(a);
      c && e(c);
      const d = Ud(a);
      d && t(d);
      const h = o;
      a.type === "response.audio_transcript.delta" || a.type === "response.audio.delta" ? o = !0 : (a.type === "response.done" || a.type === "response.audio_transcript.done") && (o = !1), h !== o && i(o);
      const f = Ld(a, s);
      f !== s && (console.log("[Transcript] Updated transcript:", f.map((m) => ({
        type: m.type,
        sequence: m.sequence,
        content: m.content.substring(0, 50) + "..."
      }))), s = f, n(f));
    },
    clearTranscript: () => {
      s = [], n(s);
    }
  };
}
const $d = ({ args: n, disabled: t }) => {
  const {
    prompt: e = "",
    apiKey: r = "",
    voice: i = "alloy",
    instructions: s = "You are a helpful AI assistant.",
    autoStart: o = !1,
    temperature: a = 0.8,
    turnDetectionThreshold: c = 0.5,
    showTranscript: d = !1,
    title: h = "Real-time Audio Conversation"
  } = n, [f, m] = Ss({
    status: "idle",
    isRecording: !1,
    isPaused: !1,
    transcript: [],
    error: null,
    sessionId: null,
    connectionState: "new"
  }), [_, C] = Ss(!1), ft = Rn(null), pt = Rn(null), G = Rn(null), nt = Rn(null), ct = Rn(Vd(
    (y) => {
      m((v) => ({ ...v, transcript: y })), U((v) => ({ ...v, transcript: y }));
    },
    (y) => {
      m((v) => ({ ...v, status: y })), U((v) => ({ ...v, status: y }));
    },
    (y) => {
      m((v) => ({ ...v, sessionId: y })), U((v) => ({ ...v, session_id: y }));
    },
    (y) => {
      m((v) => ({ ...v, error: y, status: "error" })), U((v) => ({ ...v, error: y, status: "error" }));
    },
    (y) => {
      C(y);
    }
  )), U = Jt((y) => {
    m((v) => {
      const rt = y(v);
      return $t.setComponentValue({
        transcript: rt.transcript || v.transcript,
        status: rt.status || v.status,
        error: rt.error ?? v.error,
        session_id: rt.sessionId || rt.session_id || v.sessionId,
        connection_state: rt.connectionState || v.connectionState,
        is_recording: rt.isRecording ?? v.isRecording,
        is_paused: rt.isPaused ?? v.isPaused
      }), rt;
    });
  }, []);
  oi(() => {
    const rt = 220 + (d ? 200 : 0);
    $t.setFrameHeight(rt), $t.setComponentReady();
  }, [d]);
  const g = Jt(() => {
    if (ft.current) {
      const y = ft.current.connectionState;
      m((v) => ({ ...v, connectionState: y })), U((v) => ({ ...v, connection_state: y }));
    }
  }, [U]), Wt = Jt((y) => {
    console.log("Received remote track:", y.track.kind), y.track.kind === "audio" && nt.current && (nt.current.srcObject = y.streams[0]);
  }, []), Ke = Jt((y) => {
    const v = Nd(y.data);
    v && ct.current.handleEvent(v);
  }, []), Me = Jt(async () => {
    if (!r) {
      const y = Qs(new Error("API key is required"), "api");
      m((v) => ({ ...v, error: y.message, status: "error" }));
      return;
    }
    try {
      m((vt) => ({ ...vt, status: "connecting", error: null })), U((vt) => ({ ...vt, status: "connecting", error: null })), console.log("Requesting microphone access...");
      const y = await Sd();
      G.current = y, console.log("Creating peer connection...");
      const v = wd();
      ft.current = v, v.addEventListener("connectionstatechange", g), v.addEventListener("track", Wt);
      const rt = y.getAudioTracks()[0];
      v.addTrack(rt, y), console.log("Creating data channel...");
      const Ht = Bd(v);
      pt.current = Ht, Ht.addEventListener("message", Ke), console.log("Establishing connection with OpenAI...");
      const Ne = {
        apiKey: r,
        voice: i,
        instructions: s,
        temperature: a,
        turnDetectionThreshold: c
      };
      await Id(v, Ne), console.log("Waiting for connection..."), await Ad(v), console.log("Waiting for data channel..."), await Od(Ht), console.log("Connection established!");
      const Ce = xd(Ne);
      if (ur(Ht, Ce), e) {
        const vt = Md(e);
        ur(Ht, vt);
      }
      m((vt) => ({ ...vt, status: "connected" })), U((vt) => ({ ...vt, status: "connected" }));
    } catch (y) {
      console.error("Failed to start conversation:", y);
      const v = Qs(y);
      m((rt) => ({
        ...rt,
        error: v.message,
        status: "error"
      })), U((rt) => ({
        ...rt,
        error: v.message,
        status: "error"
      })), ce();
    }
  }, [
    r,
    i,
    s,
    a,
    c,
    e,
    g,
    Wt,
    Ke,
    U
  ]);
  Jt(() => {
    if (console.log("Stopping conversation..."), pt.current && _) {
      const y = eo();
      ur(pt.current, y);
    }
    G.current && f.isPaused && G.current.getTracks().forEach((y) => {
      y.enabled = !0;
    }), ce(), m((y) => ({
      ...y,
      status: "idle",
      isRecording: !1,
      isPaused: !1,
      connectionState: "closed"
    })), C(!1), U((y) => ({
      ...y,
      status: "idle",
      is_recording: !1,
      is_paused: !1,
      connection_state: "closed"
    }));
  }, [U, _, f.isPaused]);
  const Ge = Jt(() => {
    if (console.log("Pausing conversation..."), pt.current && _) {
      const y = eo();
      ur(pt.current, y);
    }
    G.current && G.current.getTracks().forEach((y) => {
      y.enabled = !1;
    }), m((y) => ({ ...y, isPaused: !0, isRecording: !1 })), U((y) => ({ ...y, is_paused: !0, is_recording: !1 }));
  }, [U, _]), In = Jt(() => {
    console.log("Resuming conversation..."), G.current && G.current.getTracks().forEach((y) => {
      y.enabled = !0;
    }), m((y) => ({ ...y, isPaused: !1 })), U((y) => ({ ...y, is_paused: !1 }));
  }, [U]), An = Jt(() => {
    ct.current.clearTranscript();
  }, []), ce = Jt(() => {
    Fd(
      ft.current,
      pt.current,
      G.current
    ), ft.current = null, pt.current = null, G.current = null, C(!1);
  }, []);
  return oi(() => ce, [ce]), oi(() => {
    o && r && f.status === "idle" && Me();
  }, [o, r, f.status, Me]), /* @__PURE__ */ P.jsxs("div", { style: { padding: "20px", fontFamily: "sans-serif" }, children: [
    /* @__PURE__ */ P.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      padding: "10px",
      backgroundColor: "#f0f2f6",
      borderRadius: "8px"
    }, children: [
      /* @__PURE__ */ P.jsxs("div", { children: [
        /* @__PURE__ */ P.jsx("h3", { style: { margin: 0, color: "#262730" }, children: h }),
        /* @__PURE__ */ P.jsxs("p", { style: { margin: "5px 0 0 0", color: "#666", fontSize: "14px" }, children: [
          "Status: ",
          /* @__PURE__ */ P.jsx("strong", { children: f.status })
        ] })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { style: { display: "flex", gap: "10px" }, children: [
        f.status === "idle" && /* @__PURE__ */ P.jsx(
          "button",
          {
            onClick: Me,
            disabled: t || !r,
            style: {
              padding: "12px 20px",
              backgroundColor: "#FF4B4B",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: t || !r ? "not-allowed" : "pointer",
              opacity: t || !r ? 0.5 : 1,
              fontSize: "14px",
              fontWeight: "500"
            },
            children: "Start Conversation"
          }
        ),
        f.status !== "idle" && f.status !== "error" && /* @__PURE__ */ P.jsx(P.Fragment, { children: f.isPaused ? /* @__PURE__ */ P.jsx(
          "button",
          {
            onClick: In,
            disabled: t,
            style: {
              padding: "12px 20px",
              backgroundColor: "#00D4AA",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: t ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: "500"
            },
            children: "Resume"
          }
        ) : /* @__PURE__ */ P.jsx(
          "button",
          {
            onClick: Ge,
            disabled: t,
            style: {
              padding: "12px 20px",
              backgroundColor: "#FFA500",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: t ? "not-allowed" : "pointer",
              fontSize: "14px",
              fontWeight: "500"
            },
            children: "Pause"
          }
        ) })
      ] })
    ] }),
    f.error && /* @__PURE__ */ P.jsxs("div", { style: {
      padding: "10px",
      backgroundColor: "#FFE6E6",
      border: "1px solid #FF4B4B",
      borderRadius: "4px",
      marginBottom: "20px",
      color: "#D63031"
    }, children: [
      /* @__PURE__ */ P.jsx("strong", { children: "Error:" }),
      " ",
      f.error
    ] }),
    /* @__PURE__ */ P.jsxs("div", { style: {
      display: "flex",
      gap: "20px",
      marginBottom: "20px",
      fontSize: "14px"
    }, children: [
      /* @__PURE__ */ P.jsxs("div", { children: [
        "Connection: ",
        /* @__PURE__ */ P.jsx("span", { style: {
          color: f.connectionState === "connected" ? "#00D4AA" : "#666"
        }, children: f.connectionState })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { children: [
        "Recording: ",
        /* @__PURE__ */ P.jsx("span", { style: {
          color: f.isRecording ? "#FF4B4B" : "#666"
        }, children: f.isRecording ? "Yes" : "No" })
      ] }),
      /* @__PURE__ */ P.jsxs("div", { children: [
        "Paused: ",
        /* @__PURE__ */ P.jsx("span", { style: {
          color: f.isPaused ? "#FFA500" : "#666"
        }, children: f.isPaused ? "Yes" : "No" })
      ] })
    ] }),
    d && /* @__PURE__ */ P.jsxs("div", { style: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      minHeight: "200px",
      maxHeight: "300px",
      overflowY: "auto",
      backgroundColor: "#fafafa"
    }, children: [
      /* @__PURE__ */ P.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px"
      }, children: [
        /* @__PURE__ */ P.jsx("h4", { style: { margin: 0, color: "#262730" }, children: "Conversation Transcript" }),
        f.transcript.length > 0 && /* @__PURE__ */ P.jsx(
          "button",
          {
            onClick: An,
            style: {
              padding: "6px 12px",
              fontSize: "13px",
              backgroundColor: "#666",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "500"
            },
            children: "Clear"
          }
        )
      ] }),
      f.transcript.length === 0 ? /* @__PURE__ */ P.jsx("p", { style: { color: "#666", fontStyle: "italic" }, children: "No conversation yet. Start a conversation to see the transcript here." }) : /* @__PURE__ */ P.jsx("div", { children: f.transcript.sort((y, v) => (y.sequence || 0) - (v.sequence || 0)).map((y) => (console.log(`[Display] ${y.type} message: sequence=${y.sequence}, content="${y.content}"`), /* @__PURE__ */ P.jsxs(
        "div",
        {
          style: {
            marginBottom: "10px",
            padding: "8px",
            borderRadius: "4px",
            backgroundColor: y.type === "user" ? "#E3F2FD" : "#F3E5F5",
            borderLeft: `3px solid ${y.type === "user" ? "#2196F3" : "#9C27B0"}`
          },
          children: [
            /* @__PURE__ */ P.jsxs("div", { style: {
              fontSize: "12px",
              color: "#666",
              marginBottom: "4px",
              display: "flex",
              justifyContent: "space-between"
            }, children: [
              /* @__PURE__ */ P.jsx("span", { children: y.type === "user" ? "You" : "AI Assistant" }),
              /* @__PURE__ */ P.jsxs("span", { children: [
                y.status === "in_progress" && "⏳ ",
                new Date(y.timestamp).toLocaleTimeString()
              ] })
            ] }),
            /* @__PURE__ */ P.jsx("div", { style: { color: "#262730" }, children: y.content || (y.status === "in_progress" ? "Speaking..." : "") })
          ]
        },
        y.id
      ))) })
    ] }),
    /* @__PURE__ */ P.jsx(
      "audio",
      {
        ref: nt,
        autoPlay: !0,
        style: { display: "none" }
      }
    ),
    /* @__PURE__ */ P.jsx("div", { style: {
      marginTop: "15px",
      fontSize: "12px",
      color: "#666",
      fontStyle: "italic"
    }, children: "💡 Make sure to allow microphone access when prompted. Speak naturally and wait for the AI to respond." })
  ] });
}, zd = Ka($d), Yd = Ka(zd);
if (typeof window < "u") {
  const n = document.getElementById("root");
  n && yi(n).render(/* @__PURE__ */ P.jsx(Yd, {}));
}
export {
  Yd as default
};
