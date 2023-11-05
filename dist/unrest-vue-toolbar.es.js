import { openBlock as w, createElementBlock as S, createElementVNode as k, Fragment as ee, renderList as ye, createBlock as Ar, resolveDynamicComponent as _r, normalizeClass as F, withCtx as Cr, renderSlot as re, createCommentVNode as Tr, reactive as Nr } from "vue";
const Ur = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [o, n] of e)
    t[o] = n;
  return t;
}, Pr = {
  name: "UnrestToolbar",
  props: {
    storage: Object
  },
  computed: {
    tools() {
      return this.storage.listTools();
    },
    selected_tool() {
      const { tool: r, variant: e } = this.storage.state.selected;
      return e ? this.tools.find((t) => t.slug === r && t.variants.includes(e)) : this.tools.find((t) => t.slug === r);
    }
  }
}, $r = { class: "ur-toolbar" }, Lr = { class: "ur-toolbar__row" }, Dr = { class: "btn-group" }, jr = {
  key: 0,
  class: "ur-toolbar__separator btn -secondary"
}, Br = {
  key: 0,
  class: "ur-toolbar__row btn-group"
}, Ir = ["onClick", "title"];
function kr(r, e, t, o, n, a) {
  var s;
  return w(), S("div", $r, [
    k("div", Lr, [
      k("div", Dr, [
        (w(!0), S(ee, null, ye(a.tools, (i) => (w(), S(ee, {
          key: i.name
        }, [
          i === "separator" ? (w(), S("div", jr)) : (w(), Ar(_r(i.items ? "unrest-dropdown" : "div"), {
            key: 1,
            onClick: i.click,
            items: i.items,
            title: i.name,
            class: F(i.class),
            id: i.id
          }, {
            default: Cr(() => [
              k("i", {
                class: F(i.icon)
              }, null, 2)
            ]),
            _: 2
          }, 1032, ["onClick", "items", "title", "class", "id"]))
        ], 64))), 128)),
        re(r.$slots, "buttons")
      ]),
      re(r.$slots, "right")
    ]),
    (s = a.selected_tool) != null && s.children ? (w(), S("div", Br, [
      (w(!0), S(ee, null, ye(a.selected_tool.children, (i) => (w(), S("div", {
        key: i.slug,
        onClick: i.click,
        class: F(i.class),
        title: i.slug
      }, [
        k("i", {
          class: F(i.icon)
        }, null, 2)
      ], 10, Ir))), 128))
    ])) : Tr("", !0),
    re(r.$slots, "default")
  ]);
}
const Re = /* @__PURE__ */ Ur(Pr, [["render", kr]]);
var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fr = Object.defineProperty, Oe = Object.getOwnPropertySymbols, Mr = Object.prototype.hasOwnProperty, qr = Object.prototype.propertyIsEnumerable, we = (r, e, t) => e in r ? Fr(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t, ge = (r, e) => {
  for (var t in e || (e = {}))
    Mr.call(e, t) && we(r, t, e[t]);
  if (Oe)
    for (var t of Oe(e))
      qr.call(e, t) && we(r, t, e[t]);
  return r;
}, q = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, I = {};
I.get = function(r) {
  if (localStorage)
    try {
      return JSON.parse(localStorage.getItem(r));
    } catch {
      return null;
    }
  else
    return null;
};
I.set = function(r, e) {
  if (localStorage)
    try {
      var t = JSON.stringify(e);
      return localStorage.setItem(r, t), t;
    } catch {
      return null;
    }
  else
    return null;
};
I.remove = function(r) {
  if (localStorage)
    try {
      return localStorage.removeItem(r), !0;
    } catch {
      return null;
    }
  else
    return null;
};
I.clear = function() {
  if (localStorage)
    try {
      return localStorage.clear(), !0;
    } catch {
      return null;
    }
  else
    return null;
};
const Hr = (r = {}) => {
  typeof r == "string" && (r = { LS_KEY: r });
  const { LS_KEY: e, initial: t = {}, ls: o = I } = r, n = Nr(ge(ge({}, t), o.get(e)));
  return { state: n, save: (s) => {
    Object.assign(n, s), o.set(e, n);
  } };
};
var Jr = typeof q == "object" && q && q.Object === Object && q, zr = typeof self == "object" && self && self.Object === Object && self;
Jr || zr || Function("return this")();
var Je = { exports: {} }, ze = function(e, t) {
  return function() {
    for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
      n[a] = arguments[a];
    return e.apply(t, n);
  };
}, Wr = ze, fe = Object.prototype.toString, le = function(r) {
  return function(e) {
    var t = fe.call(e);
    return r[t] || (r[t] = t.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function A(r) {
  return r = r.toLowerCase(), function(t) {
    return le(t) === r;
  };
}
function ce(r) {
  return Array.isArray(r);
}
function W(r) {
  return typeof r > "u";
}
function Vr(r) {
  return r !== null && !W(r) && r.constructor !== null && !W(r.constructor) && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
}
var We = A("ArrayBuffer");
function Gr(r) {
  var e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(r) : e = r && r.buffer && We(r.buffer), e;
}
function Zr(r) {
  return typeof r == "string";
}
function Yr(r) {
  return typeof r == "number";
}
function Ve(r) {
  return r !== null && typeof r == "object";
}
function J(r) {
  if (le(r) !== "object")
    return !1;
  var e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype;
}
var Kr = A("Date"), Xr = A("File"), Qr = A("Blob"), et = A("FileList");
function de(r) {
  return fe.call(r) === "[object Function]";
}
function rt(r) {
  return Ve(r) && de(r.pipe);
}
function tt(r) {
  var e = "[object FormData]";
  return r && (typeof FormData == "function" && r instanceof FormData || fe.call(r) === e || de(r.toString) && r.toString() === e);
}
var nt = A("URLSearchParams");
function ot(r) {
  return r.trim ? r.trim() : r.replace(/^\s+|\s+$/g, "");
}
function at() {
  return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u";
}
function pe(r, e) {
  if (!(r === null || typeof r > "u"))
    if (typeof r != "object" && (r = [r]), ce(r))
      for (var t = 0, o = r.length; t < o; t++)
        e.call(null, r[t], t, r);
    else
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && e.call(null, r[n], n, r);
}
function se() {
  var r = {};
  function e(n, a) {
    J(r[a]) && J(n) ? r[a] = se(r[a], n) : J(n) ? r[a] = se({}, n) : ce(n) ? r[a] = n.slice() : r[a] = n;
  }
  for (var t = 0, o = arguments.length; t < o; t++)
    pe(arguments[t], e);
  return r;
}
function st(r, e, t) {
  return pe(e, function(n, a) {
    t && typeof n == "function" ? r[a] = Wr(n, t) : r[a] = n;
  }), r;
}
function it(r) {
  return r.charCodeAt(0) === 65279 && (r = r.slice(1)), r;
}
function ut(r, e, t, o) {
  r.prototype = Object.create(e.prototype, o), r.prototype.constructor = r, t && Object.assign(r.prototype, t);
}
function ft(r, e, t) {
  var o, n, a, s = {};
  e = e || {};
  do {
    for (o = Object.getOwnPropertyNames(r), n = o.length; n-- > 0; )
      a = o[n], s[a] || (e[a] = r[a], s[a] = !0);
    r = Object.getPrototypeOf(r);
  } while (r && (!t || t(r, e)) && r !== Object.prototype);
  return e;
}
function lt(r, e, t) {
  r = String(r), (t === void 0 || t > r.length) && (t = r.length), t -= e.length;
  var o = r.indexOf(e, t);
  return o !== -1 && o === t;
}
function ct(r) {
  if (!r)
    return null;
  var e = r.length;
  if (W(e))
    return null;
  for (var t = new Array(e); e-- > 0; )
    t[e] = r[e];
  return t;
}
var dt = function(r) {
  return function(e) {
    return r && e instanceof r;
  };
}(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)), v = {
  isArray: ce,
  isArrayBuffer: We,
  isBuffer: Vr,
  isFormData: tt,
  isArrayBufferView: Gr,
  isString: Zr,
  isNumber: Yr,
  isObject: Ve,
  isPlainObject: J,
  isUndefined: W,
  isDate: Kr,
  isFile: Xr,
  isBlob: Qr,
  isFunction: de,
  isStream: rt,
  isURLSearchParams: nt,
  isStandardBrowserEnv: at,
  forEach: pe,
  merge: se,
  extend: st,
  trim: ot,
  stripBOM: it,
  inherits: ut,
  toFlatObject: ft,
  kindOf: le,
  kindOfTest: A,
  endsWith: lt,
  toArray: ct,
  isTypedArray: dt,
  isFileList: et
}, C = v;
function Se(r) {
  return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var Ge = function(e, t, o) {
  if (!t)
    return e;
  var n;
  if (o)
    n = o(t);
  else if (C.isURLSearchParams(t))
    n = t.toString();
  else {
    var a = [];
    C.forEach(t, function(f, c) {
      f === null || typeof f > "u" || (C.isArray(f) ? c = c + "[]" : f = [f], C.forEach(f, function(l) {
        C.isDate(l) ? l = l.toISOString() : C.isObject(l) && (l = JSON.stringify(l)), a.push(Se(c) + "=" + Se(l));
      }));
    }), n = a.join("&");
  }
  if (n) {
    var s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + n;
  }
  return e;
}, pt = v;
function G() {
  this.handlers = [];
}
G.prototype.use = function(e, t, o) {
  return this.handlers.push({
    fulfilled: e,
    rejected: t,
    synchronous: o ? o.synchronous : !1,
    runWhen: o ? o.runWhen : null
  }), this.handlers.length - 1;
};
G.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null);
};
G.prototype.forEach = function(e) {
  pt.forEach(this.handlers, function(o) {
    o !== null && e(o);
  });
};
var ht = G, vt = v, mt = function(e, t) {
  vt.forEach(e, function(n, a) {
    a !== t && a.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[a]);
  });
}, Ze = v;
function U(r, e, t, o, n) {
  Error.call(this), this.message = r, this.name = "AxiosError", e && (this.code = e), t && (this.config = t), o && (this.request = o), n && (this.response = n);
}
Ze.inherits(U, Error, {
  toJSON: function() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var Ye = U.prototype, Ke = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(r) {
  Ke[r] = { value: r };
});
Object.defineProperties(U, Ke);
Object.defineProperty(Ye, "isAxiosError", { value: !0 });
U.from = function(r, e, t, o, n, a) {
  var s = Object.create(Ye);
  return Ze.toFlatObject(r, s, function(f) {
    return f !== Error.prototype;
  }), U.call(s, r.message, e, t, o, n), s.name = r.name, a && Object.assign(s, a), s;
};
var L = U, Xe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, R = v;
function bt(r, e) {
  e = e || new FormData();
  var t = [];
  function o(a) {
    return a === null ? "" : R.isDate(a) ? a.toISOString() : R.isArrayBuffer(a) || R.isTypedArray(a) ? typeof Blob == "function" ? new Blob([a]) : Buffer.from(a) : a;
  }
  function n(a, s) {
    if (R.isPlainObject(a) || R.isArray(a)) {
      if (t.indexOf(a) !== -1)
        throw Error("Circular reference detected in " + s);
      t.push(a), R.forEach(a, function(f, c) {
        if (!R.isUndefined(f)) {
          var u = s ? s + "." + c : c, l;
          if (f && !s && typeof f == "object") {
            if (R.endsWith(c, "{}"))
              f = JSON.stringify(f);
            else if (R.endsWith(c, "[]") && (l = R.toArray(f))) {
              l.forEach(function(m) {
                !R.isUndefined(m) && e.append(u, o(m));
              });
              return;
            }
          }
          n(f, u);
        }
      }), t.pop();
    } else
      e.append(s, o(a));
  }
  return n(r), e;
}
var Qe = bt, te = L, xt = function(e, t, o) {
  var n = o.config.validateStatus;
  !o.status || !n || n(o.status) ? e(o) : t(new te("Request failed with status code " + o.status, [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o));
}, H = v, Et = H.isStandardBrowserEnv() ? function() {
  return {
    write: function(t, o, n, a, s, i) {
      var f = [];
      f.push(t + "=" + encodeURIComponent(o)), H.isNumber(n) && f.push("expires=" + new Date(n).toGMTString()), H.isString(a) && f.push("path=" + a), H.isString(s) && f.push("domain=" + s), i === !0 && f.push("secure"), document.cookie = f.join("; ");
    },
    read: function(t) {
      var o = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return o ? decodeURIComponent(o[3]) : null;
    },
    remove: function(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  };
}() : function() {
  return {
    write: function() {
    },
    read: function() {
      return null;
    },
    remove: function() {
    }
  };
}(), yt = function(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}, Rt = function(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}, Ot = yt, wt = Rt, er = function(e, t) {
  return e && !Ot(t) ? wt(e, t) : t;
}, ne = v, gt = [
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
], St = function(e) {
  var t = {}, o, n, a;
  return e && ne.forEach(e.split(`
`), function(i) {
    if (a = i.indexOf(":"), o = ne.trim(i.substr(0, a)).toLowerCase(), n = ne.trim(i.substr(a + 1)), o) {
      if (t[o] && gt.indexOf(o) >= 0)
        return;
      o === "set-cookie" ? t[o] = (t[o] ? t[o] : []).concat([n]) : t[o] = t[o] ? t[o] + ", " + n : n;
    }
  }), t;
}, Ae = v, At = Ae.isStandardBrowserEnv() ? function() {
  var e = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a"), o;
  function n(a) {
    var s = a;
    return e && (t.setAttribute("href", s), s = t.href), t.setAttribute("href", s), {
      href: t.href,
      protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
      host: t.host,
      search: t.search ? t.search.replace(/^\?/, "") : "",
      hash: t.hash ? t.hash.replace(/^#/, "") : "",
      hostname: t.hostname,
      port: t.port,
      pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
    };
  }
  return o = n(window.location.href), function(s) {
    var i = Ae.isString(s) ? n(s) : s;
    return i.protocol === o.protocol && i.host === o.host;
  };
}() : function() {
  return function() {
    return !0;
  };
}(), ie = L, _t = v;
function rr(r) {
  ie.call(this, r == null ? "canceled" : r, ie.ERR_CANCELED), this.name = "CanceledError";
}
_t.inherits(rr, ie, {
  __CANCEL__: !0
});
var Z = rr, Ct = function(e) {
  var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}, B = v, Tt = xt, Nt = Et, Ut = Ge, Pt = er, $t = St, Lt = At, Dt = Xe, O = L, jt = Z, Bt = Ct, _e = function(e) {
  return new Promise(function(o, n) {
    var a = e.data, s = e.headers, i = e.responseType, f;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(f), e.signal && e.signal.removeEventListener("abort", f);
    }
    B.isFormData(a) && B.isStandardBrowserEnv() && delete s["Content-Type"];
    var u = new XMLHttpRequest();
    if (e.auth) {
      var l = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.Authorization = "Basic " + btoa(l + ":" + m);
    }
    var d = Pt(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), Ut(d, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function _() {
      if (!!u) {
        var x = "getAllResponseHeaders" in u ? $t(u.getAllResponseHeaders()) : null, p = !i || i === "text" || i === "json" ? u.responseText : u.response, y = {
          data: p,
          status: u.status,
          statusText: u.statusText,
          headers: x,
          config: e,
          request: u
        };
        Tt(function(Q) {
          o(Q), c();
        }, function(Q) {
          n(Q), c();
        }, y), u = null;
      }
    }
    if ("onloadend" in u ? u.onloadend = _ : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(_);
    }, u.onabort = function() {
      !u || (n(new O("Request aborted", O.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      n(new O("Network Error", O.ERR_NETWORK, e, u, u)), u = null;
    }, u.ontimeout = function() {
      var p = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded", y = e.transitional || Dt;
      e.timeoutErrorMessage && (p = e.timeoutErrorMessage), n(new O(p, y.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED, e, u)), u = null;
    }, B.isStandardBrowserEnv()) {
      var D = (e.withCredentials || Lt(d)) && e.xsrfCookieName ? Nt.read(e.xsrfCookieName) : void 0;
      D && (s[e.xsrfHeaderName] = D);
    }
    "setRequestHeader" in u && B.forEach(s, function(p, y) {
      typeof a > "u" && y.toLowerCase() === "content-type" ? delete s[y] : u.setRequestHeader(y, p);
    }), B.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", e.onDownloadProgress), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", e.onUploadProgress), (e.cancelToken || e.signal) && (f = function(x) {
      !u || (n(!x || x && x.type ? new jt() : x), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(f), e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f))), a || (a = null);
    var j = Bt(d);
    if (j && ["http", "https", "file"].indexOf(j) === -1) {
      n(new O("Unsupported protocol " + j + ":", O.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(a);
  });
}, It = null, h = v, Ce = mt, Te = L, kt = Xe, Ft = Qe, Mt = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function Ne(r, e) {
  !h.isUndefined(r) && h.isUndefined(r["Content-Type"]) && (r["Content-Type"] = e);
}
function qt() {
  var r;
  return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (r = _e), r;
}
function Ht(r, e, t) {
  if (h.isString(r))
    try {
      return (e || JSON.parse)(r), h.trim(r);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (t || JSON.stringify)(r);
}
var Y = {
  transitional: kt,
  adapter: qt(),
  transformRequest: [function(e, t) {
    if (Ce(t, "Accept"), Ce(t, "Content-Type"), h.isFormData(e) || h.isArrayBuffer(e) || h.isBuffer(e) || h.isStream(e) || h.isFile(e) || h.isBlob(e))
      return e;
    if (h.isArrayBufferView(e))
      return e.buffer;
    if (h.isURLSearchParams(e))
      return Ne(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
    var o = h.isObject(e), n = t && t["Content-Type"], a;
    if ((a = h.isFileList(e)) || o && n === "multipart/form-data") {
      var s = this.env && this.env.FormData;
      return Ft(a ? { "files[]": e } : e, s && new s());
    } else if (o || n === "application/json")
      return Ne(t, "application/json"), Ht(e);
    return e;
  }],
  transformResponse: [function(e) {
    var t = this.transitional || Y.transitional, o = t && t.silentJSONParsing, n = t && t.forcedJSONParsing, a = !o && this.responseType === "json";
    if (a || n && h.isString(e) && e.length)
      try {
        return JSON.parse(e);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? Te.from(s, Te.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    return e;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: It
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*"
    }
  }
};
h.forEach(["delete", "get", "head"], function(e) {
  Y.headers[e] = {};
});
h.forEach(["post", "put", "patch"], function(e) {
  Y.headers[e] = h.merge(Mt);
});
var he = Y, Jt = v, zt = he, Wt = function(e, t, o) {
  var n = this || zt;
  return Jt.forEach(o, function(s) {
    e = s.call(n, e, t);
  }), e;
}, tr = function(e) {
  return !!(e && e.__CANCEL__);
}, Ue = v, oe = Wt, Vt = tr, Gt = he, Zt = Z;
function ae(r) {
  if (r.cancelToken && r.cancelToken.throwIfRequested(), r.signal && r.signal.aborted)
    throw new Zt();
}
var Yt = function(e) {
  ae(e), e.headers = e.headers || {}, e.data = oe.call(e, e.data, e.headers, e.transformRequest), e.headers = Ue.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), Ue.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(n) {
    delete e.headers[n];
  });
  var t = e.adapter || Gt.adapter;
  return t(e).then(function(n) {
    return ae(e), n.data = oe.call(e, n.data, n.headers, e.transformResponse), n;
  }, function(n) {
    return Vt(n) || (ae(e), n && n.response && (n.response.data = oe.call(e, n.response.data, n.response.headers, e.transformResponse))), Promise.reject(n);
  });
}, E = v, nr = function(e, t) {
  t = t || {};
  var o = {};
  function n(u, l) {
    return E.isPlainObject(u) && E.isPlainObject(l) ? E.merge(u, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l;
  }
  function a(u) {
    if (E.isUndefined(t[u])) {
      if (!E.isUndefined(e[u]))
        return n(void 0, e[u]);
    } else
      return n(e[u], t[u]);
  }
  function s(u) {
    if (!E.isUndefined(t[u]))
      return n(void 0, t[u]);
  }
  function i(u) {
    if (E.isUndefined(t[u])) {
      if (!E.isUndefined(e[u]))
        return n(void 0, e[u]);
    } else
      return n(void 0, t[u]);
  }
  function f(u) {
    if (u in t)
      return n(e[u], t[u]);
    if (u in e)
      return n(void 0, e[u]);
  }
  var c = {
    url: s,
    method: s,
    data: s,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: f
  };
  return E.forEach(Object.keys(e).concat(Object.keys(t)), function(l) {
    var m = c[l] || a, d = m(l);
    E.isUndefined(d) && m !== f || (o[l] = d);
  }), o;
}, or = {
  version: "0.27.2"
}, Kt = or.version, g = L, ve = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(r, e) {
  ve[r] = function(o) {
    return typeof o === r || "a" + (e < 1 ? "n " : " ") + r;
  };
});
var Pe = {};
ve.transitional = function(e, t, o) {
  function n(a, s) {
    return "[Axios v" + Kt + "] Transitional option '" + a + "'" + s + (o ? ". " + o : "");
  }
  return function(a, s, i) {
    if (e === !1)
      throw new g(n(s, " has been removed" + (t ? " in " + t : "")), g.ERR_DEPRECATED);
    return t && !Pe[s] && (Pe[s] = !0, console.warn(n(s, " has been deprecated since v" + t + " and will be removed in the near future"))), e ? e(a, s, i) : !0;
  };
};
function Xt(r, e, t) {
  if (typeof r != "object")
    throw new g("options must be an object", g.ERR_BAD_OPTION_VALUE);
  for (var o = Object.keys(r), n = o.length; n-- > 0; ) {
    var a = o[n], s = e[a];
    if (s) {
      var i = r[a], f = i === void 0 || s(i, a, r);
      if (f !== !0)
        throw new g("option " + a + " must be " + f, g.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new g("Unknown option " + a, g.ERR_BAD_OPTION);
  }
}
var Qt = {
  assertOptions: Xt,
  validators: ve
}, ar = v, en = Ge, $e = ht, Le = Yt, K = nr, rn = er, sr = Qt, T = sr.validators;
function P(r) {
  this.defaults = r, this.interceptors = {
    request: new $e(),
    response: new $e()
  };
}
P.prototype.request = function(e, t) {
  typeof e == "string" ? (t = t || {}, t.url = e) : t = e || {}, t = K(this.defaults, t), t.method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
  var o = t.transitional;
  o !== void 0 && sr.assertOptions(o, {
    silentJSONParsing: T.transitional(T.boolean),
    forcedJSONParsing: T.transitional(T.boolean),
    clarifyTimeoutError: T.transitional(T.boolean)
  }, !1);
  var n = [], a = !0;
  this.interceptors.request.forEach(function(d) {
    typeof d.runWhen == "function" && d.runWhen(t) === !1 || (a = a && d.synchronous, n.unshift(d.fulfilled, d.rejected));
  });
  var s = [];
  this.interceptors.response.forEach(function(d) {
    s.push(d.fulfilled, d.rejected);
  });
  var i;
  if (!a) {
    var f = [Le, void 0];
    for (Array.prototype.unshift.apply(f, n), f = f.concat(s), i = Promise.resolve(t); f.length; )
      i = i.then(f.shift(), f.shift());
    return i;
  }
  for (var c = t; n.length; ) {
    var u = n.shift(), l = n.shift();
    try {
      c = u(c);
    } catch (m) {
      l(m);
      break;
    }
  }
  try {
    i = Le(c);
  } catch (m) {
    return Promise.reject(m);
  }
  for (; s.length; )
    i = i.then(s.shift(), s.shift());
  return i;
};
P.prototype.getUri = function(e) {
  e = K(this.defaults, e);
  var t = rn(e.baseURL, e.url);
  return en(t, e.params, e.paramsSerializer);
};
ar.forEach(["delete", "get", "head", "options"], function(e) {
  P.prototype[e] = function(t, o) {
    return this.request(K(o || {}, {
      method: e,
      url: t,
      data: (o || {}).data
    }));
  };
});
ar.forEach(["post", "put", "patch"], function(e) {
  function t(o) {
    return function(a, s, i) {
      return this.request(K(i || {}, {
        method: e,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: s
      }));
    };
  }
  P.prototype[e] = t(), P.prototype[e + "Form"] = t(!0);
});
var tn = P, nn = Z;
function $(r) {
  if (typeof r != "function")
    throw new TypeError("executor must be a function.");
  var e;
  this.promise = new Promise(function(n) {
    e = n;
  });
  var t = this;
  this.promise.then(function(o) {
    if (!!t._listeners) {
      var n, a = t._listeners.length;
      for (n = 0; n < a; n++)
        t._listeners[n](o);
      t._listeners = null;
    }
  }), this.promise.then = function(o) {
    var n, a = new Promise(function(s) {
      t.subscribe(s), n = s;
    }).then(o);
    return a.cancel = function() {
      t.unsubscribe(n);
    }, a;
  }, r(function(n) {
    t.reason || (t.reason = new nn(n), e(t.reason));
  });
}
$.prototype.throwIfRequested = function() {
  if (this.reason)
    throw this.reason;
};
$.prototype.subscribe = function(e) {
  if (this.reason) {
    e(this.reason);
    return;
  }
  this._listeners ? this._listeners.push(e) : this._listeners = [e];
};
$.prototype.unsubscribe = function(e) {
  if (!!this._listeners) {
    var t = this._listeners.indexOf(e);
    t !== -1 && this._listeners.splice(t, 1);
  }
};
$.source = function() {
  var e, t = new $(function(n) {
    e = n;
  });
  return {
    token: t,
    cancel: e
  };
};
var on = $, an = function(e) {
  return function(o) {
    return e.apply(null, o);
  };
}, sn = v, un = function(e) {
  return sn.isObject(e) && e.isAxiosError === !0;
}, De = v, fn = ze, z = tn, ln = nr, cn = he;
function ir(r) {
  var e = new z(r), t = fn(z.prototype.request, e);
  return De.extend(t, z.prototype, e), De.extend(t, e), t.create = function(n) {
    return ir(ln(r, n));
  }, t;
}
var b = ir(cn);
b.Axios = z;
b.CanceledError = Z;
b.CancelToken = on;
b.isCancel = tr;
b.VERSION = or.version;
b.toFormData = Qe;
b.AxiosError = L;
b.Cancel = b.CanceledError;
b.all = function(e) {
  return Promise.all(e);
};
b.spread = an;
b.isAxiosError = un;
Je.exports = b;
Je.exports.default = b;
var dn = 1 / 0, pn = "[object Symbol]", hn = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, vn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, X = "\\ud800-\\udfff", ur = "\\u0300-\\u036f\\ufe20-\\ufe23", fr = "\\u20d0-\\u20f0", lr = "\\u2700-\\u27bf", cr = "a-z\\xdf-\\xf6\\xf8-\\xff", mn = "\\xac\\xb1\\xd7\\xf7", bn = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", xn = "\\u2000-\\u206f", En = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", dr = "A-Z\\xc0-\\xd6\\xd8-\\xde", pr = "\\ufe0e\\ufe0f", hr = mn + bn + xn + En, me = "['\u2019]", yn = "[" + X + "]", je = "[" + hr + "]", V = "[" + ur + fr + "]", vr = "\\d+", Rn = "[" + lr + "]", mr = "[" + cr + "]", br = "[^" + X + hr + vr + lr + cr + dr + "]", ue = "\\ud83c[\\udffb-\\udfff]", On = "(?:" + V + "|" + ue + ")", xr = "[^" + X + "]", be = "(?:\\ud83c[\\udde6-\\uddff]){2}", xe = "[\\ud800-\\udbff][\\udc00-\\udfff]", N = "[" + dr + "]", Er = "\\u200d", Be = "(?:" + mr + "|" + br + ")", wn = "(?:" + N + "|" + br + ")", Ie = "(?:" + me + "(?:d|ll|m|re|s|t|ve))?", ke = "(?:" + me + "(?:D|LL|M|RE|S|T|VE))?", yr = On + "?", Rr = "[" + pr + "]?", gn = "(?:" + Er + "(?:" + [xr, be, xe].join("|") + ")" + Rr + yr + ")*", Or = Rr + yr + gn, Sn = "(?:" + [Rn, be, xe].join("|") + ")" + Or, An = "(?:" + [xr + V + "?", V, be, xe, yn].join("|") + ")", _n = RegExp(me, "g"), Cn = RegExp(V, "g"), Tn = RegExp(ue + "(?=" + ue + ")|" + An + Or, "g"), Nn = RegExp([
  N + "?" + mr + "+" + Ie + "(?=" + [je, N, "$"].join("|") + ")",
  wn + "+" + ke + "(?=" + [je, N + Be, "$"].join("|") + ")",
  N + "?" + Be + "+" + Ie,
  N + "+" + ke,
  vr,
  Sn
].join("|"), "g"), Un = RegExp("[" + Er + X + ur + fr + pr + "]"), Pn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, $n = {
  \u00C0: "A",
  \u00C1: "A",
  \u00C2: "A",
  \u00C3: "A",
  \u00C4: "A",
  \u00C5: "A",
  \u00E0: "a",
  \u00E1: "a",
  \u00E2: "a",
  \u00E3: "a",
  \u00E4: "a",
  \u00E5: "a",
  \u00C7: "C",
  \u00E7: "c",
  \u00D0: "D",
  \u00F0: "d",
  \u00C8: "E",
  \u00C9: "E",
  \u00CA: "E",
  \u00CB: "E",
  \u00E8: "e",
  \u00E9: "e",
  \u00EA: "e",
  \u00EB: "e",
  \u00CC: "I",
  \u00CD: "I",
  \u00CE: "I",
  \u00CF: "I",
  \u00EC: "i",
  \u00ED: "i",
  \u00EE: "i",
  \u00EF: "i",
  \u00D1: "N",
  \u00F1: "n",
  \u00D2: "O",
  \u00D3: "O",
  \u00D4: "O",
  \u00D5: "O",
  \u00D6: "O",
  \u00D8: "O",
  \u00F2: "o",
  \u00F3: "o",
  \u00F4: "o",
  \u00F5: "o",
  \u00F6: "o",
  \u00F8: "o",
  \u00D9: "U",
  \u00DA: "U",
  \u00DB: "U",
  \u00DC: "U",
  \u00F9: "u",
  \u00FA: "u",
  \u00FB: "u",
  \u00FC: "u",
  \u00DD: "Y",
  \u00FD: "y",
  \u00FF: "y",
  \u00C6: "Ae",
  \u00E6: "ae",
  \u00DE: "Th",
  \u00FE: "th",
  \u00DF: "ss",
  \u0100: "A",
  \u0102: "A",
  \u0104: "A",
  \u0101: "a",
  \u0103: "a",
  \u0105: "a",
  \u0106: "C",
  \u0108: "C",
  \u010A: "C",
  \u010C: "C",
  \u0107: "c",
  \u0109: "c",
  \u010B: "c",
  \u010D: "c",
  \u010E: "D",
  \u0110: "D",
  \u010F: "d",
  \u0111: "d",
  \u0112: "E",
  \u0114: "E",
  \u0116: "E",
  \u0118: "E",
  \u011A: "E",
  \u0113: "e",
  \u0115: "e",
  \u0117: "e",
  \u0119: "e",
  \u011B: "e",
  \u011C: "G",
  \u011E: "G",
  \u0120: "G",
  \u0122: "G",
  \u011D: "g",
  \u011F: "g",
  \u0121: "g",
  \u0123: "g",
  \u0124: "H",
  \u0126: "H",
  \u0125: "h",
  \u0127: "h",
  \u0128: "I",
  \u012A: "I",
  \u012C: "I",
  \u012E: "I",
  \u0130: "I",
  \u0129: "i",
  \u012B: "i",
  \u012D: "i",
  \u012F: "i",
  \u0131: "i",
  \u0134: "J",
  \u0135: "j",
  \u0136: "K",
  \u0137: "k",
  \u0138: "k",
  \u0139: "L",
  \u013B: "L",
  \u013D: "L",
  \u013F: "L",
  \u0141: "L",
  \u013A: "l",
  \u013C: "l",
  \u013E: "l",
  \u0140: "l",
  \u0142: "l",
  \u0143: "N",
  \u0145: "N",
  \u0147: "N",
  \u014A: "N",
  \u0144: "n",
  \u0146: "n",
  \u0148: "n",
  \u014B: "n",
  \u014C: "O",
  \u014E: "O",
  \u0150: "O",
  \u014D: "o",
  \u014F: "o",
  \u0151: "o",
  \u0154: "R",
  \u0156: "R",
  \u0158: "R",
  \u0155: "r",
  \u0157: "r",
  \u0159: "r",
  \u015A: "S",
  \u015C: "S",
  \u015E: "S",
  \u0160: "S",
  \u015B: "s",
  \u015D: "s",
  \u015F: "s",
  \u0161: "s",
  \u0162: "T",
  \u0164: "T",
  \u0166: "T",
  \u0163: "t",
  \u0165: "t",
  \u0167: "t",
  \u0168: "U",
  \u016A: "U",
  \u016C: "U",
  \u016E: "U",
  \u0170: "U",
  \u0172: "U",
  \u0169: "u",
  \u016B: "u",
  \u016D: "u",
  \u016F: "u",
  \u0171: "u",
  \u0173: "u",
  \u0174: "W",
  \u0175: "w",
  \u0176: "Y",
  \u0177: "y",
  \u0178: "Y",
  \u0179: "Z",
  \u017B: "Z",
  \u017D: "Z",
  \u017A: "z",
  \u017C: "z",
  \u017E: "z",
  \u0132: "IJ",
  \u0133: "ij",
  \u0152: "Oe",
  \u0153: "oe",
  \u0149: "'n",
  \u017F: "ss"
}, Ln = typeof M == "object" && M && M.Object === Object && M, Dn = typeof self == "object" && self && self.Object === Object && self, jn = Ln || Dn || Function("return this")();
function Bn(r, e, t, o) {
  var n = -1, a = r ? r.length : 0;
  for (o && a && (t = r[++n]); ++n < a; )
    t = e(t, r[n], n, r);
  return t;
}
function In(r) {
  return r.split("");
}
function kn(r) {
  return r.match(hn) || [];
}
function Fn(r) {
  return function(e) {
    return r == null ? void 0 : r[e];
  };
}
var Mn = Fn($n);
function wr(r) {
  return Un.test(r);
}
function qn(r) {
  return Pn.test(r);
}
function Hn(r) {
  return wr(r) ? Jn(r) : In(r);
}
function Jn(r) {
  return r.match(Tn) || [];
}
function zn(r) {
  return r.match(Nn) || [];
}
var Wn = Object.prototype, Vn = Wn.toString, Fe = jn.Symbol, Me = Fe ? Fe.prototype : void 0, qe = Me ? Me.toString : void 0;
function Gn(r, e, t) {
  var o = -1, n = r.length;
  e < 0 && (e = -e > n ? 0 : n + e), t = t > n ? n : t, t < 0 && (t += n), n = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var a = Array(n); ++o < n; )
    a[o] = r[o + e];
  return a;
}
function Zn(r) {
  if (typeof r == "string")
    return r;
  if (eo(r))
    return qe ? qe.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -dn ? "-0" : e;
}
function Yn(r, e, t) {
  var o = r.length;
  return t = t === void 0 ? o : t, !e && t >= o ? r : Gn(r, e, t);
}
function Kn(r) {
  return function(e) {
    e = Ee(e);
    var t = wr(e) ? Hn(e) : void 0, o = t ? t[0] : e.charAt(0), n = t ? Yn(t, 1).join("") : e.slice(1);
    return o[r]() + n;
  };
}
function Xn(r) {
  return function(e) {
    return Bn(oo(ro(e).replace(_n, "")), r, "");
  };
}
function Qn(r) {
  return !!r && typeof r == "object";
}
function eo(r) {
  return typeof r == "symbol" || Qn(r) && Vn.call(r) == pn;
}
function Ee(r) {
  return r == null ? "" : Zn(r);
}
function ro(r) {
  return r = Ee(r), r && r.replace(vn, Mn).replace(Cn, "");
}
var to = Xn(function(r, e, t) {
  return r + (t ? " " : "") + no(e);
}), no = Kn("toUpperCase");
function oo(r, e, t) {
  return r = Ee(r), e = t ? void 0 : e, e === void 0 ? qn(r) ? zn(r) : kn(r) : r.match(e) || [];
}
var ao = to;
const so = (r, e) => `-tool_${r} -variant_${e}`, gr = (r, { tools: e, initial: t = {} }) => {
  t = { selected: {}, ...t };
  const o = Hr({ LS_KEY: r, initial: t }), n = (a) => {
    if (a === "separator")
      return a;
    if (a.getIcon)
      throw "DEPRECATED: Use icon instead of getIcon";
    const { slug: s, name: i, variants: f = [], icon: c = so, items: u } = a, l = (p, y) => {
      typeof a.select == "function" ? a.select(p, y) : a.select === He ? o.save({ [p]: !o.state[p] }) : o.save({ selected: { tool: p, variant: y } });
    }, m = (p, y) => typeof c == "function" ? c(p, y) : c, { tool: d, variant: _ } = o.state.selected, D = !f.length || f.includes(_), j = s === d && D, x = a.select === He && o.state[s];
    return {
      slug: s,
      id: a.id,
      icon: m(d, D ? _ : f[0]),
      name: i || ao(s),
      class: `btn ${j || x ? "-primary" : "-secondary"}`,
      click: () => l(s, f[0]),
      variants: f,
      items: u,
      children: f == null ? void 0 : f.map((p) => ({
        slug: p,
        icon: m(d, p),
        class: ["btn", _ === p ? "-primary" : "-secondary"],
        click: () => l(s, p)
      }))
    };
  };
  return o.listTools = () => (typeof e == "function" ? e(o) : e).map(n), o;
}, He = gr.TOGGLE = "TOGGLE", uo = {
  UnrestToolbar: Re,
  ToolStorage: gr,
  install(r) {
    r.component("UnrestToolbar", Re);
  }
};
export {
  uo as default
};
