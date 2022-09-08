(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a2, prop, b[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b) => __defProps(a2, __getOwnPropDescs(b));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var _n = Object.defineProperty;
  var ss = /* @__PURE__ */ __name((s, n, u) => n in s ? _n(s, n, { enumerable: true, configurable: true, writable: true, value: u }) : s[n] = u, "ss");
  var a = /* @__PURE__ */ __name((s, n) => _n(s, "name", { value: n, configurable: true }), "a");
  var G = /* @__PURE__ */ __name((s, n, u) => (ss(s, typeof n != "symbol" ? n + "" : n, u), u), "G");
  var Nn = (() => {
    for (var s = new Uint8Array(128), n = 0; n < 64; n++)
      s[n < 26 ? n + 65 : n < 52 ? n + 71 : n < 62 ? n - 4 : n * 4 - 205] = n;
    return (u) => {
      for (var c2 = u.length, U = new Uint8Array((c2 - (u[c2 - 1] == "=") - (u[c2 - 2] == "=")) * 3 / 4 | 0), p = 0, S = 0; p < c2; ) {
        var D = s[u.charCodeAt(p++)], R = s[u.charCodeAt(p++)], P = s[u.charCodeAt(p++)], B = s[u.charCodeAt(p++)];
        U[S++] = D << 2 | R >> 4, U[S++] = R << 4 | P >> 2, U[S++] = P << 6 | B;
      }
      return U;
    };
  })();
  function ce(s) {
    return s * Math.PI / 180;
  }
  __name(ce, "ce");
  a(ce, "deg2rad");
  function Mt(s) {
    return s * 180 / Math.PI;
  }
  __name(Mt, "Mt");
  a(Mt, "rad2deg");
  function Y(s, n, u) {
    return n > u ? Y(s, u, n) : Math.min(Math.max(s, n), u);
  }
  __name(Y, "Y");
  a(Y, "clamp");
  function Ve(s, n, u) {
    return s + (n - s) * u;
  }
  __name(Ve, "Ve");
  a(Ve, "lerp");
  function at(s, n, u, c2, U) {
    return c2 + (s - n) / (u - n) * (U - c2);
  }
  __name(at, "at");
  a(at, "map");
  function Gn(s, n, u, c2, U) {
    return Y(at(s, n, u, c2, U), c2, U);
  }
  __name(Gn, "Gn");
  a(Gn, "mapc");
  var _ = /* @__PURE__ */ __name(class {
    constructor(n = 0, u = n) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = n, this.y = u;
    }
    static fromAngle(n) {
      let u = ce(n);
      return new _(Math.cos(u), Math.sin(u));
    }
    clone() {
      return new _(this.x, this.y);
    }
    add(...n) {
      let u = f(...n);
      return new _(this.x + u.x, this.y + u.y);
    }
    sub(...n) {
      let u = f(...n);
      return new _(this.x - u.x, this.y - u.y);
    }
    scale(...n) {
      let u = f(...n);
      return new _(this.x * u.x, this.y * u.y);
    }
    dist(...n) {
      let u = f(...n);
      return Math.sqrt((this.x - u.x) * (this.x - u.x) + (this.y - u.y) * (this.y - u.y));
    }
    len() {
      return this.dist(new _(0, 0));
    }
    unit() {
      return this.scale(1 / this.len());
    }
    normal() {
      return new _(this.y, -this.x);
    }
    dot(n) {
      return this.x * n.x + this.y * n.y;
    }
    angle(...n) {
      let u = f(...n);
      return Mt(Math.atan2(this.y - u.y, this.x - u.x));
    }
    lerp(n, u) {
      return new _(Ve(this.x, n.x, u), Ve(this.y, n.y, u));
    }
    toFixed(n) {
      return new _(Number(this.x.toFixed(n)), Number(this.y.toFixed(n)));
    }
    eq(n) {
      return this.x === n.x && this.y === n.y;
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "_");
  var q = _;
  a(q, "Vec2"), G(q, "LEFT", new _(-1, 0)), G(q, "RIGHT", new _(1, 0)), G(q, "UP", new _(0, -1)), G(q, "DOWN", new _(0, 1));
  function f(...s) {
    if (s.length === 1) {
      if (s[0] instanceof q)
        return f(s[0].x, s[0].y);
      if (Array.isArray(s[0]) && s[0].length === 2)
        return f(...s[0]);
    }
    return new q(...s);
  }
  __name(f, "f");
  a(f, "vec2");
  var _e = /* @__PURE__ */ __name(class {
    constructor(n, u, c2) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "z", 0);
      this.x = n, this.y = u, this.z = c2;
    }
    xy() {
      return f(this.x, this.y);
    }
  }, "_e");
  a(_e, "Vec3");
  var le = a((s, n, u) => new _e(s, n, u), "vec3");
  var oe = /* @__PURE__ */ __name(class {
    constructor(n, u, c2) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = Y(n, 0, 255), this.g = Y(u, 0, 255), this.b = Y(c2, 0, 255);
    }
    static fromArray(n) {
      return new oe(n[0], n[1], n[2]);
    }
    clone() {
      return new oe(this.r, this.g, this.b);
    }
    lighten(n) {
      return new oe(this.r + n, this.g + n, this.b + n);
    }
    darken(n) {
      return this.lighten(-n);
    }
    invert() {
      return new oe(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(n) {
      return new oe(this.r * n.r / 255, this.g * n.g / 255, this.b * n.b / 255);
    }
    eq(n) {
      return this.r === n.r && this.g === n.g && this.b === n.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    static fromHSL(n, u, c2) {
      if (u == 0)
        return T(255 * c2, 255 * c2, 255 * c2);
      let U = a((B, x, g) => (g < 0 && (g += 1), g > 1 && (g -= 1), g < 1 / 6 ? B + (x - B) * 6 * g : g < 1 / 2 ? x : g < 2 / 3 ? B + (x - B) * (2 / 3 - g) * 6 : B), "hue2rgb"), p = c2 < 0.5 ? c2 * (1 + u) : c2 + u - c2 * u, S = 2 * c2 - p, D = U(S, p, n + 1 / 3), R = U(S, p, n), P = U(S, p, n - 1 / 3);
      return new oe(Math.round(D * 255), Math.round(R * 255), Math.round(P * 255));
    }
  }, "oe");
  var v = oe;
  a(v, "Color"), G(v, "RED", T(255, 0, 0)), G(v, "GREEN", T(0, 255, 0)), G(v, "BLUE", T(0, 0, 255)), G(v, "YELLOW", T(255, 255, 0)), G(v, "MAGENTA", T(255, 0, 255)), G(v, "CYAN", T(0, 255, 255)), G(v, "WHITE", T(255, 255, 255)), G(v, "BLACK", T(0, 0, 0));
  function T(...s) {
    if (s.length === 0)
      return new v(255, 255, 255);
    if (s.length === 1) {
      if (s[0] instanceof v)
        return s[0].clone();
      if (Array.isArray(s[0]) && s[0].length === 3)
        return v.fromArray(s[0]);
    }
    return new v(...s);
  }
  __name(T, "T");
  a(T, "rgb");
  var jn = a((s, n, u) => v.fromHSL(s, n, u), "hsl2rgb");
  var I = /* @__PURE__ */ __name(class {
    constructor(n, u, c2, U) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = n, this.y = u, this.w = c2, this.h = U;
    }
    scale(n) {
      return new I(this.x + this.w * n.x, this.y + this.h * n.y, this.w * n.w, this.h * n.h);
    }
    clone() {
      return new I(this.x, this.y, this.w, this.h);
    }
    eq(n) {
      return this.x === n.x && this.y === n.y && this.w === n.w && this.h === n.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "I");
  a(I, "Quad");
  function Xn(s, n, u, c2) {
    return new I(s, n, u, c2);
  }
  __name(Xn, "Xn");
  a(Xn, "quad");
  var M = /* @__PURE__ */ __name(class {
    constructor(n) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      n && (this.m = n);
    }
    clone() {
      return new M(this.m);
    }
    mult(n) {
      let u = [];
      for (let c2 = 0; c2 < 4; c2++)
        for (let U = 0; U < 4; U++)
          u[c2 * 4 + U] = this.m[0 * 4 + U] * n.m[c2 * 4 + 0] + this.m[1 * 4 + U] * n.m[c2 * 4 + 1] + this.m[2 * 4 + U] * n.m[c2 * 4 + 2] + this.m[3 * 4 + U] * n.m[c2 * 4 + 3];
      return new M(u);
    }
    multVec4(n) {
      return { x: n.x * this.m[0] + n.y * this.m[4] + n.z * this.m[8] + n.w * this.m[12], y: n.x * this.m[1] + n.y * this.m[5] + n.z * this.m[9] + n.w * this.m[13], z: n.x * this.m[2] + n.y * this.m[6] + n.z * this.m[10] + n.w * this.m[14], w: n.x * this.m[3] + n.y * this.m[7] + n.z * this.m[11] + n.w * this.m[15] };
    }
    multVec3(n) {
      let u = this.multVec4({ x: n.x, y: n.y, z: n.z, w: 1 });
      return le(u.x, u.y, u.z);
    }
    multVec2(n) {
      return f(n.x * this.m[0] + n.y * this.m[4] + 0 * this.m[8] + 1 * this.m[12], n.x * this.m[1] + n.y * this.m[5] + 0 * this.m[9] + 1 * this.m[13]);
    }
    static translate(n) {
      return new M([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n.x, n.y, 0, 1]);
    }
    static scale(n) {
      return new M([n.x, 0, 0, 0, 0, n.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(n) {
      return n = ce(-n), new M([1, 0, 0, 0, 0, Math.cos(n), -Math.sin(n), 0, 0, Math.sin(n), Math.cos(n), 0, 0, 0, 0, 1]);
    }
    static rotateY(n) {
      return n = ce(-n), new M([Math.cos(n), 0, Math.sin(n), 0, 0, 1, 0, 0, -Math.sin(n), 0, Math.cos(n), 0, 0, 0, 0, 1]);
    }
    static rotateZ(n) {
      return n = ce(-n), new M([Math.cos(n), -Math.sin(n), 0, 0, Math.sin(n), Math.cos(n), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(n) {
      return this.mult(M.translate(n));
    }
    scale(n) {
      return this.mult(M.scale(n));
    }
    rotateX(n) {
      return this.mult(M.rotateX(n));
    }
    rotateY(n) {
      return this.mult(M.rotateY(n));
    }
    rotateZ(n) {
      return this.mult(M.rotateZ(n));
    }
    invert() {
      let n = [], u = this.m[10] * this.m[15] - this.m[14] * this.m[11], c2 = this.m[9] * this.m[15] - this.m[13] * this.m[11], U = this.m[9] * this.m[14] - this.m[13] * this.m[10], p = this.m[8] * this.m[15] - this.m[12] * this.m[11], S = this.m[8] * this.m[14] - this.m[12] * this.m[10], D = this.m[8] * this.m[13] - this.m[12] * this.m[9], R = this.m[6] * this.m[15] - this.m[14] * this.m[7], P = this.m[5] * this.m[15] - this.m[13] * this.m[7], B = this.m[5] * this.m[14] - this.m[13] * this.m[6], x = this.m[4] * this.m[15] - this.m[12] * this.m[7], g = this.m[4] * this.m[14] - this.m[12] * this.m[6], Me = this.m[5] * this.m[15] - this.m[13] * this.m[7], ee = this.m[4] * this.m[13] - this.m[12] * this.m[5], Ye = this.m[6] * this.m[11] - this.m[10] * this.m[7], Ue = this.m[5] * this.m[11] - this.m[9] * this.m[7], be = this.m[5] * this.m[10] - this.m[9] * this.m[6], Ke = this.m[4] * this.m[11] - this.m[8] * this.m[7], He = this.m[4] * this.m[10] - this.m[8] * this.m[6], ye = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      n[0] = this.m[5] * u - this.m[6] * c2 + this.m[7] * U, n[4] = -(this.m[4] * u - this.m[6] * p + this.m[7] * S), n[8] = this.m[4] * c2 - this.m[5] * p + this.m[7] * D, n[12] = -(this.m[4] * U - this.m[5] * S + this.m[6] * D), n[1] = -(this.m[1] * u - this.m[2] * c2 + this.m[3] * U), n[5] = this.m[0] * u - this.m[2] * p + this.m[3] * S, n[9] = -(this.m[0] * c2 - this.m[1] * p + this.m[3] * D), n[13] = this.m[0] * U - this.m[1] * S + this.m[2] * D, n[2] = this.m[1] * R - this.m[2] * P + this.m[3] * B, n[6] = -(this.m[0] * R - this.m[2] * x + this.m[3] * g), n[10] = this.m[0] * Me - this.m[1] * x + this.m[3] * ee, n[14] = -(this.m[0] * B - this.m[1] * g + this.m[2] * ee), n[3] = -(this.m[1] * Ye - this.m[2] * Ue + this.m[3] * be), n[7] = this.m[0] * Ye - this.m[2] * Ke + this.m[3] * He, n[11] = -(this.m[0] * Ue - this.m[1] * Ke + this.m[3] * ye), n[15] = this.m[0] * be - this.m[1] * He + this.m[2] * ye;
      let pt = this.m[0] * n[0] + this.m[1] * n[4] + this.m[2] * n[8] + this.m[3] * n[12];
      for (let ne = 0; ne < 4; ne++)
        for (let xe = 0; xe < 4; xe++)
          n[ne * 4 + xe] *= 1 / pt;
      return new M(n);
    }
    toString() {
      return this.m.toString();
    }
  }, "M");
  a(M, "Mat4");
  function Wt(s, n, u, c2 = Math.sin) {
    return s + (c2(u) + 1) / 2 * (n - s);
  }
  __name(Wt, "Wt");
  a(Wt, "wave");
  var os = 1103515245;
  var as = 12345;
  var kn = 2147483648;
  var Ne = /* @__PURE__ */ __name(class {
    constructor(n) {
      __publicField(this, "seed");
      this.seed = n;
    }
    gen() {
      return this.seed = (os * this.seed + as) % kn, this.seed / kn;
    }
    genNumber(n, u) {
      return n + this.gen() * (u - n);
    }
    genVec2(n, u) {
      return new q(this.genNumber(n.x, u.x), this.genNumber(n.y, u.y));
    }
    genColor(n, u) {
      return new v(this.genNumber(n.r, u.r), this.genNumber(n.g, u.g), this.genNumber(n.b, u.b));
    }
    genAny(...n) {
      if (n.length === 0)
        return this.gen();
      if (n.length === 1) {
        if (typeof n[0] == "number")
          return this.genNumber(0, n[0]);
        if (n[0] instanceof q)
          return this.genVec2(f(0, 0), n[0]);
        if (n[0] instanceof v)
          return this.genColor(T(0, 0, 0), n[0]);
      } else if (n.length === 2) {
        if (typeof n[0] == "number" && typeof n[1] == "number")
          return this.genNumber(n[0], n[1]);
        if (n[0] instanceof q && n[1] instanceof q)
          return this.genVec2(n[0], n[1]);
        if (n[0] instanceof v && n[1] instanceof v)
          return this.genColor(n[0], n[1]);
      }
    }
  }, "Ne");
  a(Ne, "RNG");
  var Lt = new Ne(Date.now());
  function $n(s) {
    return s != null && (Lt.seed = s), Lt.seed;
  }
  __name($n, "$n");
  a($n, "randSeed");
  function Ge(...s) {
    return Lt.genAny(...s);
  }
  __name(Ge, "Ge");
  a(Ge, "rand");
  function qt(...s) {
    return Math.floor(Ge(...s));
  }
  __name(qt, "qt");
  a(qt, "randi");
  function Yn(s) {
    return Ge() <= s;
  }
  __name(Yn, "Yn");
  a(Yn, "chance");
  function Kn(s) {
    return s[qt(s.length)];
  }
  __name(Kn, "Kn");
  a(Kn, "choose");
  function Hn(s, n) {
    return s.p2.x >= n.p1.x && s.p1.x <= n.p2.x && s.p2.y >= n.p1.y && s.p1.y <= n.p2.y;
  }
  __name(Hn, "Hn");
  a(Hn, "testRectRect2");
  function Pt(s, n) {
    return s.p2.x > n.p1.x && s.p1.x < n.p2.x && s.p2.y > n.p1.y && s.p1.y < n.p2.y;
  }
  __name(Pt, "Pt");
  a(Pt, "testRectRect");
  function Ft(s, n) {
    if (s.p1.x === s.p2.x && s.p1.y === s.p2.y || n.p1.x === n.p2.x && n.p1.y === n.p2.y)
      return null;
    let u = (n.p2.y - n.p1.y) * (s.p2.x - s.p1.x) - (n.p2.x - n.p1.x) * (s.p2.y - s.p1.y);
    if (u === 0)
      return null;
    let c2 = ((n.p2.x - n.p1.x) * (s.p1.y - n.p1.y) - (n.p2.y - n.p1.y) * (s.p1.x - n.p1.x)) / u, U = ((s.p2.x - s.p1.x) * (s.p1.y - n.p1.y) - (s.p2.y - s.p1.y) * (s.p1.x - n.p1.x)) / u;
    return c2 < 0 || c2 > 1 || U < 0 || U > 1 ? null : c2;
  }
  __name(Ft, "Ft");
  a(Ft, "testLineLineT");
  function ae(s, n) {
    let u = Ft(s, n);
    return u ? f(s.p1.x + u * (s.p2.x - s.p1.x), s.p1.y + u * (s.p2.y - s.p1.y)) : null;
  }
  __name(ae, "ae");
  a(ae, "testLineLine");
  function ut(s, n) {
    return re(s, n.p1) || re(s, n.p2) ? true : !!ae(n, new ue(s.p1, f(s.p2.x, s.p1.y))) || !!ae(n, new ue(f(s.p2.x, s.p1.y), s.p2)) || !!ae(n, new ue(s.p2, f(s.p1.x, s.p2.y))) || !!ae(n, new ue(f(s.p1.x, s.p2.y), s.p1));
  }
  __name(ut, "ut");
  a(ut, "testRectLine");
  function re(s, n) {
    return n.x > s.p1.x && n.x < s.p2.x && n.y > s.p1.y && n.y < s.p2.y;
  }
  __name(re, "re");
  a(re, "testRectPoint");
  function zn(s, n) {
    let u = Math.max(s.p1.x, Math.min(n.center.x, s.p2.x)), c2 = Math.max(s.p1.y, Math.min(n.center.y, s.p2.y));
    return f(u, c2).dist(n.center) <= n.radius;
  }
  __name(zn, "zn");
  a(zn, "testRectCircle");
  function Qn(s, n) {
    return nr(n, [s.p1, f(s.p2.x, s.p1.y), s.p2, f(s.p1.x, s.p2.y)]);
  }
  __name(Qn, "Qn");
  a(Qn, "testRectPolygon");
  function Jn(s, n) {
    return false;
  }
  __name(Jn, "Jn");
  a(Jn, "testLinePoint");
  function Zn(s, n) {
    return false;
  }
  __name(Zn, "Zn");
  a(Zn, "testLineCircle");
  function Ot(s, n) {
    if (st(n, s.p1) || st(n, s.p2))
      return true;
    for (let u = 0; u < n.length; u++) {
      let c2 = n[u], U = n[(u + 1) % n.length];
      if (ae(s, { p1: c2, p2: U }))
        return true;
    }
    return false;
  }
  __name(Ot, "Ot");
  a(Ot, "testLinePolygon");
  function er(s, n) {
    return s.center.dist(n) < s.radius;
  }
  __name(er, "er");
  a(er, "testCirclePoint");
  function us(s, n) {
    return s.center.dist(n.center) < s.radius + n.radius;
  }
  __name(us, "us");
  a(us, "testCircleCircle");
  function tr(s, n) {
    return false;
  }
  __name(tr, "tr");
  a(tr, "testCirclePolygon");
  function nr(s, n) {
    for (let u = 0; u < s.length; u++) {
      let c2 = { p1: s[u], p2: s[(u + 1) % s.length] };
      if (Ot(c2, n))
        return true;
    }
    return false;
  }
  __name(nr, "nr");
  a(nr, "testPolygonPolygon");
  function st(s, n) {
    let u = false;
    for (let c2 = 0, U = s.length - 1; c2 < s.length; U = c2++)
      s[c2].y > n.y != s[U].y > n.y && n.x < (s[U].x - s[c2].x) * (n.y - s[c2].y) / (s[U].y - s[c2].y) + s[c2].x && (u = !u);
    return u;
  }
  __name(st, "st");
  a(st, "testPolygonPoint");
  function cs(s, n) {
    return s.eq(n);
  }
  __name(cs, "cs");
  a(cs, "testPointPoint");
  function It(s, n) {
    switch (s.shape) {
      case "rect":
        return Pt(n, s);
      case "line":
        return ut(n, s);
      case "circle":
        return zn(n, s);
      case "polygon":
        return Qn(n, s.pts);
      case "point":
        return re(n, s.pt);
    }
    throw new Error(`Unknown area shape: ${s.shape}`);
  }
  __name(It, "It");
  a(It, "testAreaRect");
  function ls(s, n) {
    switch (s.shape) {
      case "rect":
        return ut(s, n);
      case "line":
        return Boolean(ae(s, n));
      case "circle":
        return Zn(n, s);
      case "polygon":
        return Ot(n, s.pts);
      case "point":
        return Jn(n, s.pt);
    }
    throw new Error(`Unknown area shape: ${s.shape}`);
  }
  __name(ls, "ls");
  a(ls, "testAreaLine");
  function ds(s, n) {
    switch (s.shape) {
      case "rect":
        return zn(s, n);
      case "line":
        return Zn(s, n);
      case "circle":
        return us(s, n);
      case "polygon":
        return tr(n, s.pts);
      case "point":
        return er(n, s.pt);
    }
    throw new Error(`Unknown area shape: ${s.shape}`);
  }
  __name(ds, "ds");
  a(ds, "testAreaCircle");
  function hs(s, n) {
    switch (s.shape) {
      case "rect":
        return Qn(s, n);
      case "line":
        return Ot(s, n);
      case "circle":
        return tr(s, n);
      case "polygon":
        return nr(n, s.pts);
      case "point":
        return st(n, s.pt);
    }
    throw new Error(`Unknown area shape: ${s.shape}`);
  }
  __name(hs, "hs");
  a(hs, "testAreaPolygon");
  function Bt(s, n) {
    switch (s.shape) {
      case "rect":
        return re(s, n);
      case "line":
        return Jn(s, n);
      case "circle":
        return er(s, n);
      case "polygon":
        return st(s.pts, n);
      case "point":
        return cs(s.pt, n);
    }
    throw new Error(`Unknown area shape: ${s.shape}`);
  }
  __name(Bt, "Bt");
  a(Bt, "testAreaPoint");
  function rr(s, n) {
    switch (n.shape) {
      case "rect":
        return It(s, n);
      case "line":
        return ls(s, n);
      case "circle":
        return ds(s, n);
      case "polygon":
        return hs(s, n.pts);
      case "point":
        return Bt(s, n.pt);
    }
    throw new Error(`Unknown area shape: ${n.shape}`);
  }
  __name(rr, "rr");
  a(rr, "testAreaArea");
  function ct(s, n) {
    return { p1: f(s.p1.x - n.p2.x, s.p1.y - n.p2.y), p2: f(s.p2.x - n.p1.x, s.p2.y - n.p1.y) };
  }
  __name(ct, "ct");
  a(ct, "minkDiff");
  var ue = /* @__PURE__ */ __name(class {
    constructor(n, u) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = n, this.p2 = u;
    }
  }, "ue");
  a(ue, "Line");
  var ke = /* @__PURE__ */ __name(class {
    constructor(n, u) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = n, this.p2 = u;
    }
  }, "ke");
  a(ke, "Rect");
  var ot = /* @__PURE__ */ __name(class {
    constructor(n, u) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = n, this.radius = u;
    }
  }, "ot");
  a(ot, "Circle");
  var de = /* @__PURE__ */ __name(class extends Map {
    constructor(...n) {
      super(...n);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(n) {
      let u = this.lastID;
      return this.set(u, n), this.lastID++, u;
    }
    pushd(n) {
      let u = this.push(n);
      return () => this.delete(u);
    }
  }, "de");
  a(de, "IDList");
  var Z = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", new de());
    }
    add(n) {
      return this.handlers.pushd(n);
    }
    addOnce(n) {
      let u = this.add((...c2) => {
        n(...c2), u();
      });
      return u;
    }
    trigger(...n) {
      this.handlers.forEach((u) => u(...n));
    }
    numListeners() {
      return this.handlers.size;
    }
  }, "Z");
  a(Z, "Event");
  var he = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", /* @__PURE__ */ new Map());
    }
    on(n, u) {
      return this.handlers.get(n) || this.handlers.set(n, new Z()), this.handlers.get(n).add(u);
    }
    onOnce(n, u) {
      let c2 = this.on(n, (...U) => {
        u(...U), c2();
      });
      return c2;
    }
    trigger(n, ...u) {
      this.handlers.get(n) && this.handlers.get(n).trigger(...u);
    }
    remove(n) {
      this.handlers.delete(n);
    }
    clear() {
      this.handlers = /* @__PURE__ */ new Map();
    }
    numListeners(n) {
      var _a, _b;
      return (_b = (_a = this.handlers.get(n)) == null ? void 0 : _a.numListeners()) != null ? _b : 0;
    }
  }, "he");
  a(he, "EventHandler");
  function Vt(s, n) {
    let u = typeof s, c2 = typeof n;
    if (u !== c2)
      return false;
    if (u === "object" && c2 === "object") {
      let U = Object.keys(s), p = Object.keys(n);
      if (U.length !== p.length)
        return false;
      for (let S of U) {
        let D = s[S], R = n[S];
        if (!(typeof D == "function" && typeof R == "function") && !Vt(D, R))
          return false;
      }
      return true;
    }
    return s === n;
  }
  __name(Vt, "Vt");
  a(Vt, "deepEq");
  function fs(s) {
    let n = window.atob(s), u = n.length, c2 = new Uint8Array(u);
    for (let U = 0; U < u; U++)
      c2[U] = n.charCodeAt(U);
    return c2.buffer;
  }
  __name(fs, "fs");
  a(fs, "base64ToArrayBuffer");
  function ir(s) {
    return fs(s.split(",")[1]);
  }
  __name(ir, "ir");
  a(ir, "dataURLToArrayBuffer");
  function je(s, n) {
    let u = document.createElement("a");
    u.href = n, u.download = s, u.click();
  }
  __name(je, "je");
  a(je, "download");
  function _t(s, n) {
    je(s, "data:text/plain;charset=utf-8," + n);
  }
  __name(_t, "_t");
  a(_t, "downloadText");
  function sr(s, n) {
    _t(s, JSON.stringify(n));
  }
  __name(sr, "sr");
  a(sr, "downloadJSON");
  function Nt(s, n) {
    let u = URL.createObjectURL(n);
    je(s, u), URL.revokeObjectURL(u);
  }
  __name(Nt, "Nt");
  a(Nt, "downloadBlob");
  function kt(s) {
    return s.match(/^data:\w+\/\w+;base64,.+/);
  }
  __name(kt, "kt");
  a(kt, "isDataURL");
  var or = (() => {
    let s = 0;
    return () => s++;
  })();
  var Xe = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(n) {
      this.dts.push(n), this.timer += n, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((u, c2) => u + c2) / this.dts.length)), this.dts = []);
    }
  }, "Xe");
  a(Xe, "FPSCounter");
  var fe = /* @__PURE__ */ __name(class {
    constructor(n, u) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = n, this.action = u;
    }
    tick(n) {
      return this.finished || this.paused ? false : (this.time -= n, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(n) {
      this.time = n, this.finished = false;
    }
  }, "fe");
  a(fe, "Timer");
  var ar = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA1cAAAFyCAMAAAAu4tBuAAAAAXNSR0IArs4c6QAAAE5QTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////kJcbLQAAABl0Uk5TABAgLzBAUF9gb3B/gI+Qn6CvsL/Az9Df77brr10AAEaZSURBVHja7V3ZgqQosxaO2JRJuSS/Dbz/i54LN9QICEytrJwmrma6LAshvtiIpSgyZcqUKVOmTJkyZcqUKVOmTJkyZcqUKYE4y3uQKdPFqDLOfedtyJTpUtLOOSffvgyhlOTv341SiETtXRJWXWaL4J8j45xz7dth5ZxzJsZ+rJJyx/fXcqx2zpkkeD+cFbFnvhPf+W/ZSzzj6mZcuTJ8Ato555xruW/EmvLCM3apyvvhnNOEb8vAgunLOtfzfxpXZbV8PxfsFlyJ2BGMZKv53zrnnGXvw9XDOedM5CHpMrBCW+OafxlXD+dsufwngU0eZlgf+jKaxXHFYyw80wSsKoZGJptW61ZV/BZc0diitCQj9591QiLcx8s095SxT8IVc4vFw0ky5ts59/RBUb+Eq8qHlbN8XTuuLoRef0PL63HFrXPO/SXCr88wgjcmIBhZrUeh1ArqO7+se5AspGYw1hrdVOyduOIrriTlN7jP8tw551RIpH8755xTdYXJJuOcc1bxUtoF1jIIA/a9gSJFxSbiSlMNvMa5mGD5h9VVQDCa9fiIXtgj7qcXRVFI7832m/8KXCnKb3TOOTf4cqkOCCWf/4dWIvpsZGFunXM2qq74X7cjW16LKxn3CTcItNkSBNWVJJn+zv657EyYTha5P4CrhvIbg/MiZUPoYyuzB4Az1f4h5R2AmkTSuIeYGjzAarEeL8IVM3Sfe7QY2wwlSF0xEqxICn88kxiuuEkXuT+Aq47wG8z36Mf/YSRrbfpOBqk/7ukuMR8LD8pC51opFn2or8TVI0XS1XTd9s/Q5DJjnPR1ZAtBOpPoc2dE7i/BlfAFjMDtNfbXgcTjuJLBU5lEkhEbnciuw9UoGmXSNusMpr1xjApGPl2r2EZKNT1qSOcXw9UDYjj9Gbiq/Xte5fzYILS3E6lWDzBaas/k+x5fHVRXfGc4T6dUXYcrSbm62gua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";
  var ur = "data:image/png;base64,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";
  var cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAACAAQMAAADOEv75AAAAAXNSR0IArs4c6QAAAAZQTFRFAAAA////pdmf3QAAAAF0Uk5TAEDm2GYAAASQSURBVDjLVZVNTBtHFMffrk0YHLc21JVQuwrrdQOOFdVwa0NktlYl3FRVCRLnUvWSICJhuKStIoa1CYs5uAdOyELWlqTWumoFB4RItXJIJCMqxe2x4mIKjRGH2imHGkzsvlljKHPY3Z//M+9rnp7hBBrrKYXXWZd7w4THBlR1I5y1dzuM0iMKtaJx/PNiaFNTH6Jy3agUEfTfo6iMJMYUezfR0tMGGiDuLIDD2H6Dwrlpu/n8urDIXg4VaAd90XtPpCbk7y+ubt8bU0g4l4Cj1yurN3fKkfZYlwC145WH2w88RSP2gwBHZWO19yv3M1QCkJ/8pVariXhmIwDU2TDNBwCi82KnvSeGtnkG33xilfsJgBXBSIaI/LlqAnWNRUHuD1jyKNLANRuVb6HiRCuuVy0gy6SbAXVJnbSHgpMXz7IB9hmeCVwuBMIZIFYBVFVpI1JMxG0SqDTqyfExiXh2eEhN2UPe6LgIMkRBVXjVG53Ng8gRUKPSsVdVpfa3/gSYKCZasiScIcRKztywWGAsLhwWE3O7muJNwGxIixFJpVpkVIN1bzJGRJUuKT8i+MW53Ptluqb4NIjsJ9k2dUm5poHiNc+oGoNxv3C4L8wV0HUCLqxXOeHYq8f8axEFIObVJAQxKU8zSCIMukVZpfCPX5Cu+txBkV2e4lUQBqKik0FIkySfqpowlUq4N1xqfO0yDVz0002AWCilyTwrJIIVKIisoq2/CndzC8uRx55PBYDr2sJ7nZt0TcLkuP3k3B6mvSSlNOBHtQXrFawBAy4t3H3Oz+1r7zTyEaD5gj/BQ93sLZsVFadbYTl9xcz0OzHWBlujyaCZHMg2zFQIXvVJklOkdti6wyPc3kNwwXLq5oeYjz/hoW1AzVbgMvhwQ8vQCDYa+4WWAGz6pTpMlSH4aKSlDpETpjiVvnzVEvm3imdkMUhExSrPVFGhsoRAxHgNz8i0rQGoAN8ADnwAJjhqwCv6JThTmnwOMK3VlY547qRqoWh6qMnXlzH7qbkKuqJP5k3AcFCplUzgyqDTBmAKb3+ROS+eLfm/Sp4qjsy5YqllefxwOQ46cBDUMiIMAwFfB+0zoWQq8dopMKUO6HRoADqmSrsYHosgaUKWsAhOlU2Vy5QaSk7dzQ+DfHsA3uze3aKWYYCkmGKwSVkEp0qOsls5VTLAyXUFr4MNB8lUcNA5jMoBZcq7EbqT02JdhCmpj+lhwTXom2cR/Kaplb+EiQJhEXyJHb+vl3GmoLLiveHMGWVFYgrrt8ZKEb5eE7w5bsBmAci4BvHejiAV7BK4lzd0hLGpAbnLsBTXY0zZ4nFUnkJlrwniRmsuwc5UDninEvhghkgI4edNTl64r2CfcWcTSOAdT9FZO5fxi83COPkIRl78NJGH8gxh8OT7dj3Zi9NRR6i8tFd2YKyujOSMcL//j1vzEgK6h0tUbZIGGTQL4HgCTTDITGPBzDtmTnsiQrogcM/sDL7NGse6PrG3GGQpFH1p/GtITa4jlP8OhD/T0vsPWKaVoqHatKPQJNsWzvrQ+mxo8jyF7TuTWKr/ABVF/mebwsnnAAAAAElFTkSuQmCC";
  var lr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAA8AgMAAADTWFpWAAAAAXNSR0IArs4c6QAAAAlQTFRFAAAAAAAA////g93P0gAAAAF0Uk5TAEDm2GYAAANeSURBVDjLjVVLruQoEMQLfAMsuU7DEVgklux1YulxGi84AgftiAS/eeqZUTcl47IJ8hMZpJ1zPgYJyUcnIfrkU4hZ3Dv4b4277s8mWa+0PtvzSbcCbmPRCTjb1Usrj3/2FJ6rrS+gTUDtt+SnpDXtbnlqP2CajvxjgCCw0LZ0io8EXK1253htyQB8OHSPNzwScOshPtHCTlcM6Gy1nVLgkTFkWeP6cOV008L+HKnoBQvMgkv0vsbipgXyIBIYFniwbQb7h5B/jZcJ7A0xMCDJwjue08thwKq72icyrQVcXGDgQsIvhztWXNEtFs3qW5GCQPlDiNG3LBueneoaubxJRaoZy3yzxi3VDtAA+La2U7m4wMGwsKOmCzYaYEtcFOz1D9joEADfCTYmxHAIOESI9L7Ca8CWD6zWvlElzICxQw2NZUZWzcctLpplRyyOuTN7ZwzAuPGAIhkP33T9PsKPv9iVsStPS4LZC4bjZEwiY3ivMxZFuGtHQo5BG5NnG/yBSSFNEAvpcl/9C3d3W3okAUQnQhC5loYV/aIhAmojo/Wpzw03axStiS5u8ySk6NsCyYpqFjB3AmYFGQN3MYb5BABiuB4Yn1ngybIYs44sLPPJg4ynycbk4Y9j7GZFON45Q885WiWGf9YU8Vli9F9xImq0g/fmcMgAMA/IB2fqiGczgFpSlj0AJN6DBWqhqLkYaRJwtltxxlE+xbkGozxYg6hs/O0PLQASFZ1hNhGw19QIxglJ9/gnJS7tiNZEwB6iGGpcERZVzixw0qxvQHrBGKMaeQm6DHlwvFyWPzPp02iGnLzwxo5JHieArUZHtG7rvFFR6uo3AHUouIIGdLmAE45+C3Ue0DprhHw/7QZRl7Iel97oF2svEN6XvXcL9lK9VA/OKJS8Ra8V1N/2Hk4u0ySP7+6GJqlqAlgnkt2nBdkBpiaFMLmtjLSgM4Znd8HUwJ3eZutXwTTJb0Zwn0Y9XZiX/9bkePEXUrUzH/+vI2B8oIYazRL8Mwb0qZ+q3qEnaJKfE2TALPqr6mJ5nKjImm5aAAfkARZe0ULVrdgHwaIYB/Vqu3tFS+kNCxYOLajLuoPsIdqrnzMGAzAGVL9t3T5rjY209pGFAVB/hX6Sl1eTn5blBw8yFfc7m+/4BR+d4KDrSif0AAAAAElFTkSuQmCC";
  var dr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAA2CAMAAABAzG8wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEyUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcPCw4ICA4dFw4eFg4eFxAQEBUsIhUtIhwPDxwQEBw8LR07LR08LSAgICNKOCNLOCRKOCRLOCoXFypZQypaQytZQytaQzAwMDFoTjFoTzFpTzgfHzh3WTh3Wjh4Wjl3WTl3Wjl4Wj+GZUBAQECGZECGZUCHZUYnJ0aVcEeVcE2ke06ke06kfFBQUFQuLlSzhlUuLlWzhlvCkVzCkVzCkmBgYGM2NmPRnWrgqHA+PnBwcHHvs35FRYCAgIxNTY1NTZCQkJtUVJtVVZ+fn6CgoKlcXKldXbdkZL+/v8Vra8VsbNDQ0NNzc9/f3+F7e////ysmAfQAAAAVdFJOUwAQIDBAUGBvcH+AkJ+gr7C/z9Df74JQjt0AAAO5SURBVEjHnVfrQtowFKaADC1qu9I6YSBecIKoOHAD2bhssMpc6zqn010c0/H+r7CcJG2TFAru/LCYnu/kO9ekkUiIxBJyStXSOhJNVeRkPPIIiS8qGMlJWklE50PLQbArKzN5SIuaHiraQjjc3/zZ7lHHtGwHiTXs1XYz7ovUdEc8uLHfsRxRhq1MOIn4U4reMZ0pYpaIyuIk/BMKP7GdELEyUyxIK/PAQU4mWogS+ocz4RALTCLJ749zZ5ghMLteMHQ9VzapG2kuF5h/Dgfe7lbQe6NQ5dJgFbz0rlvOEJnSFTZ9GI/p1w1Ps+ybeGOwtVR3Tnknoh5+mNF5TSJVoRrLzgtwQnINaIQY2kisW2KhzKwcUHIGQyEBSx2k+JpVbNK96P7ZLFk/v9uGh/mKiQIQKAl4/WB8SzTJ8vYDNZAdP8DjnQ1/o34EkQNd/P7WtTAe32EDFsGPvfVror/l+QAEXiICEL/sH19xfA6hcdrwT/Nh7DLAVBBh8CHlRgAiiHfSL8dN14VLEhobZ3D7+j1Zb4JjBiWssgQwJ6RJwqx//4yLxm8fVk4dsqGG8As0AkgOWR0cQQO/sLYEPN7PgV/IwDJNAUhH2MvoTXxB8NSARFLlVnyJVVwf+q1QMgJWiYEEdTSoKUwGu7P7HOZky12lMVhFjyO+b3tHm5ub+61Zk8EkpZhmPXiUtHAdxIDrf+GdIoImcAh2/guPeyEWkdHfWrimdWa2G7VKpVDkRlSbxFCBxgpiLLPdrlUrhVyGnUQ5VgeKS45EVPT46K8OKkUew9eVkAPoZkiCny8r/FgtCQRWUSHDOu9XQDY2jvv9Pb9jfM14wECXxVx8ufr26/f9X5BRnieAGxQPA94AdoFiOPngTl0qZW+eaTwziN+PIP7KnQFU8JRcwuNM5dMIzdgP4EdrfMcNdDpL6DRoCMkZifi8N1qIowZzMibR7wKTHQjOMY+/3+MdIBNugT3UmMbt6aITBH/on+2GHwAQqOWqUCD62xHPnylicvj5eHKsDZkmwwTzX+n2F2v+uQ1vqyKeHqx24A6U79/8vPm0pnP4YS6Ij8Q5lUnHQMl2ryjkwpsQbkeyLpQZvUW5LXjK3zG0WOB6pmK9BjeaM8Jotut0RZYmXG9Vcgq0bWE0o6suWRpU6YzQJl+1JZluV+4GZ7k9qLp00kvStDtywruh54q1rnvDPus2Kjn/a2E6HCpyOXwYzYBjE0vTvxPSSnzOLxV10geGHJfm/1aS4klZUQgXTVtJJWeA/wFPmR833RRQSAAAAABJRU5ErkJggg==";
  var hr = Nn("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var fr = "data:image/png;base64,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";
  var mr = "data:image/png;base64,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";
  var pr = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  var gr = ["left", "middle", "right", "back", "forward"];
  var vs = ["space", "left", "right", "up", "down", "tab", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", "f11", "s"];
  var wr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var Es = " \u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0";
  var Ur = 0;
  var br = 3;
  var Ts = 0;
  var Ss = 3;
  var As = -1200;
  var Rs = 1200;
  var lt = "topleft";
  var yr = 1600;
  var xr = 64;
  var Ds = "apl386o";
  var dt = "sink";
  var vr = 64;
  var ht = 1024;
  var ft = 0.05;
  var Cs = 1;
  var Ar = [{ name: "a_pos", size: 3 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var mt = Ar.reduce((s, n) => s + n.size, 0);
  var Rr = 2048;
  var Er = Rr * 4 * mt;
  var Tr = Rr * 6;
  var Ls = `
attribute vec3 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Ms = `
precision mediump float;

varying vec3 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Gt = `
vec4 vert(vec3 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var jt = `
vec4 frag(vec3 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Ws = /* @__PURE__ */ new Set(["id", "require"]);
  var qs = /* @__PURE__ */ new Set(["add", "load", "update", "draw", "destroy", "inspect"]);
  function Sr(s) {
    return s === "pressed" || s === "rpressed" ? "down" : s === "released" ? "up" : s;
  }
  __name(Sr, "Sr");
  a(Sr, "processButtonState");
  function Ps(s) {
    s.requestFullscreen ? s.requestFullscreen() : s.webkitRequestFullscreen && s.webkitRequestFullscreen();
  }
  __name(Ps, "Ps");
  a(Ps, "enterFullscreen");
  function Fs() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  __name(Fs, "Fs");
  a(Fs, "exitFullscreen");
  function Os() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  __name(Os, "Os");
  a(Os, "getFullscreenElement");
  function $e(s) {
    switch (s) {
      case "topleft":
        return f(-1, -1);
      case "top":
        return f(0, -1);
      case "topright":
        return f(1, -1);
      case "left":
        return f(-1, 0);
      case "center":
        return f(0, 0);
      case "right":
        return f(1, 0);
      case "botleft":
        return f(-1, 1);
      case "bot":
        return f(0, 1);
      case "botright":
        return f(1, 1);
      default:
        return s;
    }
  }
  __name($e, "$e");
  a($e, "originPt");
  function Is(s) {
    switch (s) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Is, "Is");
  a(Is, "alignPt");
  function Xt() {
    return new AudioBuffer({ length: 1, numberOfChannels: 1, sampleRate: 44100 });
  }
  __name(Xt, "Xt");
  a(Xt, "createEmptyAudioBuffer");
  var ho = a((s = {}) => {
    let n = [], u = (() => {
      var _a, _b, _c;
      let e = (_a = s.root) != null ? _a : document.body;
      e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
      let t = (_b = s.canvas) != null ? _b : (() => {
        let h2 = document.createElement("canvas");
        return e.appendChild(h2), h2;
      })(), r = (_c = s.scale) != null ? _c : 1;
      s.width && s.height && !s.stretch && !s.letterbox ? (t.width = s.width * r, t.height = s.height * r) : (t.width = t.parentElement.offsetWidth, t.height = t.parentElement.offsetHeight);
      let o = t.width, d = t.height, i2 = s.pixelDensity || window.devicePixelRatio;
      t.width *= i2, t.height *= i2;
      let l = [`width: ${o}px`, `height: ${d}px`, "outline: none", "cursor: default"];
      return s.crisp && (l.push("image-rendering: pixelated"), l.push("image-rendering: crisp-edges")), t.style = l.join(";"), t.setAttribute("tabindex", "0"), { canvas: t, canvas2: t.cloneNode(), scale: r, pixelDensity: i2, keyStates: {}, mouseStates: {}, charInputted: [], numKeyDown: 0, isMouseMoved: false, isKeyPressed: false, isKeyPressedRepeat: false, isKeyReleased: false, mouseStarted: false, mousePos: f(0, 0), mouseDeltaPos: f(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, numFrames: 0, isTouch: "ontouchstart" in window || navigator.maxTouchPoints > 0, loopID: null, stopped: false, paused: false, fpsCounter: new Xe() };
    })(), c2 = u.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    class U {
      constructor(t, r, o = {}) {
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = c2.createTexture(), n.push(() => this.free()), this.bind(), t && r && c2.texImage2D(c2.TEXTURE_2D, 0, c2.RGBA, t, r, 0, c2.RGBA, c2.UNSIGNED_BYTE, null), this.width = t, this.height = r;
        let d = (() => {
          var _a;
          switch ((_a = o.filter) != null ? _a : s.texFilter) {
            case "linear":
              return c2.LINEAR;
            case "nearest":
              return c2.NEAREST;
            default:
              return c2.NEAREST;
          }
        })(), i2 = (() => {
          switch (o.wrap) {
            case "repeat":
              return c2.REPEAT;
            case "clampToEdge":
              return c2.CLAMP_TO_EDGE;
            default:
              return c2.CLAMP_TO_EDGE;
          }
        })();
        c2.texParameteri(c2.TEXTURE_2D, c2.TEXTURE_MIN_FILTER, d), c2.texParameteri(c2.TEXTURE_2D, c2.TEXTURE_MAG_FILTER, d), c2.texParameteri(c2.TEXTURE_2D, c2.TEXTURE_WRAP_S, i2), c2.texParameteri(c2.TEXTURE_2D, c2.TEXTURE_WRAP_T, i2), this.unbind();
      }
      static fromImage(t, r = {}) {
        let o = new U(0, 0, r);
        return o.bind(), c2.texImage2D(c2.TEXTURE_2D, 0, c2.RGBA, c2.RGBA, c2.UNSIGNED_BYTE, t), o.width = t.width, o.height = t.height, o.unbind(), o;
      }
      update(t, r, o) {
        this.bind(), c2.texSubImage2D(c2.TEXTURE_2D, 0, t, r, c2.RGBA, c2.UNSIGNED_BYTE, o), this.unbind();
      }
      bind() {
        c2.bindTexture(c2.TEXTURE_2D, this.glTex);
      }
      unbind() {
        c2.bindTexture(c2.TEXTURE_2D, null);
      }
      free() {
        c2.deleteTexture(this.glTex);
      }
    }
    __name(U, "U");
    a(U, "Texture");
    let p = (() => {
      let e = gt(Gt, jt), t = U.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1));
      if (s.background) {
        let i2 = v.fromArray(s.background);
        c2.clearColor(i2.r / 255, i2.g / 255, i2.b / 255, 1);
      }
      c2.enable(c2.BLEND), c2.enable(c2.SCISSOR_TEST), c2.blendFuncSeparate(c2.SRC_ALPHA, c2.ONE_MINUS_SRC_ALPHA, c2.ONE, c2.ONE_MINUS_SRC_ALPHA);
      let r = c2.createBuffer();
      c2.bindBuffer(c2.ARRAY_BUFFER, r), c2.bufferData(c2.ARRAY_BUFFER, Er * 4, c2.DYNAMIC_DRAW), Ar.reduce((i2, l, h2) => (c2.vertexAttribPointer(h2, l.size, c2.FLOAT, false, mt * 4, i2), c2.enableVertexAttribArray(h2), i2 + l.size * 4), 0), c2.bindBuffer(c2.ARRAY_BUFFER, null);
      let o = c2.createBuffer();
      c2.bindBuffer(c2.ELEMENT_ARRAY_BUFFER, o), c2.bufferData(c2.ELEMENT_ARRAY_BUFFER, Tr * 4, c2.DYNAMIC_DRAW), c2.bindBuffer(c2.ELEMENT_ARRAY_BUFFER, null);
      let d = U.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, defTex: t, curTex: t, curUniform: {}, vbuf: r, ibuf: o, vqueue: [], iqueue: [], transform: new M(), transformStack: [], bgTex: d, width: s.width, height: s.height, viewport: { x: 0, y: 0, width: c2.drawingBufferWidth, height: c2.drawingBufferHeight } };
    })();
    cn();
    class S {
      constructor(t, r, o = {}) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new I(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        this.tex = t, r && (this.frames = r), this.anims = o;
      }
      static from(t, r = {}) {
        return typeof t == "string" ? S.fromURL(t, r) : Promise.resolve(S.fromImage(t, r));
      }
      static fromImage(t, r = {}) {
        var _a;
        return new S(U.fromImage(t, r), xe(r.sliceX || 1, r.sliceY || 1), (_a = r.anims) != null ? _a : {});
      }
      static fromURL(t, r = {}) {
        return ye(t).then((o) => S.fromImage(o, r));
      }
    }
    __name(S, "S");
    a(S, "SpriteData");
    class D {
      constructor(t) {
        __publicField(this, "buf");
        this.buf = t;
      }
      static fromArrayBuffer(t) {
        return new Promise((r, o) => R.ctx.decodeAudioData(t, r, o)).then((r) => new D(r));
      }
      static fromURL(t) {
        return kt(t) ? D.fromArrayBuffer(ir(t)) : He(t).then((r) => D.fromArrayBuffer(r));
      }
    }
    __name(D, "D");
    a(D, "SoundData");
    let R = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), t = e.createGain();
      t.connect(e.destination);
      let r = new D(Xt());
      return e.decodeAudioData(hr.buffer.slice(0), (o) => {
        r.buf = o;
      }, () => {
        throw new Error("Failed to load burp.");
      }), { ctx: e, masterNode: t, burpSnd: r };
    })();
    class P {
      constructor(t) {
        __publicField(this, "done", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new Z());
        __publicField(this, "onErrorEvents", new Z());
        __publicField(this, "onFinishEvents", new Z());
        t.then((r) => {
          this.data = r, this.onLoadEvents.trigger(r);
        }).catch((r) => {
          if (this.error = r, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(r);
          else
            throw r;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.done = true;
        });
      }
      static loaded(t) {
        let r = new P(Promise.resolve(t));
        return r.data = t, r.done = true, r;
      }
      onLoad(t) {
        return this.onLoadEvents.add(t), this;
      }
      onError(t) {
        return this.onErrorEvents.add(t), this;
      }
      onFinish(t) {
        return this.onFinishEvents.add(t), this;
      }
      then(t) {
        return this.onLoad(t);
      }
      catch(t) {
        return this.onError(t);
      }
      finally(t) {
        return this.onFinish(t);
      }
    }
    __name(P, "P");
    a(P, "Asset");
    class B {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(t, r) {
        let o = t != null ? t : this.lastUID++ + "", d = new P(r);
        return this.assets.set(o, d), d;
      }
      addLoaded(t, r) {
        let o = t != null ? t : this.lastUID++ + "", d = P.loaded(r);
        this.assets.set(o, d);
      }
      get(t) {
        return this.assets.get(t);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let t = 0;
        return this.assets.forEach((r) => {
          r.done && t++;
        }), t / this.assets.size;
      }
    }
    __name(B, "B");
    a(B, "AssetBucket");
    let x = { urlPrefix: "", sprites: new B(), fonts: new B(), bitmapFonts: new B(), sounds: new B(), shaders: new B(), custom: new B(), loaded: false }, g = { ev: new he(), objEvents: new he(), root: St([]), timers: new de(), gravity: yr, scenes: {}, logs: [], cam: { pos: it(), scale: f(1), angle: 0, shake: 0, transform: new M() } };
    function Me(e) {
      return x.custom.add(null, e);
    }
    __name(Me, "Me");
    a(Me, "load");
    function ee() {
      let e = [x.sprites, x.sounds, x.shaders, x.fonts, x.bitmapFonts, x.custom];
      return e.reduce((t, r) => t + r.progress(), 0) / e.length;
    }
    __name(ee, "ee");
    a(ee, "loadProgress");
    function Ye(e) {
      return e !== void 0 && (x.urlPrefix = e), x.urlPrefix;
    }
    __name(Ye, "Ye");
    a(Ye, "loadRoot");
    function Ue(e) {
      let t = x.urlPrefix + e;
      return fetch(t).then((r) => {
        if (!r.ok)
          throw new Error(`Failed to fetch ${t}`);
        return r;
      });
    }
    __name(Ue, "Ue");
    a(Ue, "fetchURL");
    function be(e) {
      return Ue(e).then((t) => t.json());
    }
    __name(be, "be");
    a(be, "fetchJSON");
    function Ke(e) {
      return Ue(e).then((t) => t.text());
    }
    __name(Ke, "Ke");
    a(Ke, "fetchText");
    function He(e) {
      return Ue(e).then((t) => t.arrayBuffer());
    }
    __name(He, "He");
    a(He, "fetchArrayBuffer");
    function ye(e) {
      let t = new Image();
      return t.src = kt(e) ? e : x.urlPrefix + e, t.crossOrigin = "anonymous", new Promise((r, o) => {
        t.onload = () => r(t), t.onerror = () => o(new Error(`Failed to load image from "${e}"`));
      });
    }
    __name(ye, "ye");
    a(ye, "loadImg");
    function pt(e, t) {
      let r = new FontFace(e, typeof t == "string" ? `url(${t})` : t);
      return document.fonts.add(r), x.fonts.add(e, r.load().catch(() => {
        throw new Error(`Failed to load font from "${t}"`);
      }));
    }
    __name(pt, "pt");
    a(pt, "loadFont");
    function ne(e, t, r, o, d = {}) {
      return x.bitmapFonts.add(e, ye(t).then((i2) => {
        var _a;
        return Ir(U.fromImage(i2, d), r, o, (_a = d.chars) != null ? _a : wr);
      }));
    }
    __name(ne, "ne");
    a(ne, "loadBitmapFont");
    function xe(e = 1, t = 1, r = 0, o = 0, d = 1, i2 = 1) {
      let l = [], h2 = d / e, w = i2 / t;
      for (let m = 0; m < t; m++)
        for (let b = 0; b < e; b++)
          l.push(new I(r + b * h2, o + m * w, h2, w));
      return l;
    }
    __name(xe, "xe");
    a(xe, "slice");
    function $t(e, t) {
      return Me(typeof t == "string" ? new Promise((r, o) => {
        be(t).then((d) => {
          $t(e, d).onLoad(r).onError(o);
        });
      }) : S.from(e).then((r) => {
        let o = {};
        for (let d in t) {
          let i2 = r.tex.width, l = r.tex.height, h2 = t[d], w = new S(r.tex, xe(h2.sliceX, h2.sliceY, h2.x / i2, h2.y / l, h2.width / i2, h2.height / l), h2.anims);
          x.sprites.addLoaded(d, w), o[d] = w;
        }
        return o;
      }));
    }
    __name($t, "$t");
    a($t, "loadSpriteAtlas");
    function ve(e, t, r = { sliceX: 1, sliceY: 1, anims: {} }) {
      return x.sprites.add(e, typeof t == "string" ? S.fromURL(t, r) : Promise.resolve(S.fromImage(t, r)));
    }
    __name(ve, "ve");
    a(ve, "loadSprite");
    function Dr(e, t) {
      return x.sprites.add(e, new Promise((r) => __async(this, null, function* () {
        let o = typeof t == "string" ? yield be(t) : t, d = yield Promise.all(o.frames.map(ye)), i2 = document.createElement("canvas");
        i2.width = o.width, i2.height = o.height * o.frames.length;
        let l = i2.getContext("2d");
        d.forEach((w, m) => {
          l.drawImage(w, 0, m * o.height);
        });
        let h2 = yield ve(null, i2, { sliceY: o.frames.length, anims: o.anims });
        r(h2);
      })));
    }
    __name(Dr, "Dr");
    a(Dr, "loadPedit");
    function Cr(e, t, r) {
      return x.sprites.add(e, new Promise((o) => __async(this, null, function* () {
        let d = yield ve(null, t), i2 = typeof r == "string" ? yield be(r) : r, l = i2.meta.size;
        d.frames = i2.frames.map((h2) => new I(h2.frame.x / l.w, h2.frame.y / l.h, h2.frame.w / l.w, h2.frame.h / l.h));
        for (let h2 of i2.meta.frameTags)
          h2.from === h2.to ? d.anims[h2.name] = h2.from : d.anims[h2.name] = { from: h2.from, to: h2.to, speed: 10, loop: true };
        o(d);
      })));
    }
    __name(Cr, "Cr");
    a(Cr, "loadAseprite");
    function Lr(e, t, r, o = false) {
      return x.shaders.add(e, new Promise((d, i2) => {
        let l = a((h2) => h2 ? Ke(h2) : new Promise((w) => w(null)), "resolveUrl");
        if (o)
          Promise.all([l(t), l(r)]).then(([h2, w]) => {
            d(gt(h2, w));
          }).catch(i2);
        else
          try {
            d(gt(t, r));
          } catch (h2) {
            i2(h2);
          }
      }));
    }
    __name(Lr, "Lr");
    a(Lr, "loadShader");
    function Mr(e, t) {
      return x.sounds.add(e, typeof t == "string" ? D.fromURL(t) : D.fromArrayBuffer(t));
    }
    __name(Mr, "Mr");
    a(Mr, "loadSound");
    function Wr(e = "bean") {
      return ve(e, dr);
    }
    __name(Wr, "Wr");
    a(Wr, "loadBean");
    function Yt(e) {
      return x.sprites.get(e);
    }
    __name(Yt, "Yt");
    a(Yt, "getSprite");
    function Kt(e) {
      return x.sounds.get(e);
    }
    __name(Kt, "Kt");
    a(Kt, "getSound");
    function qr(e) {
      return x.fonts.get(e);
    }
    __name(qr, "qr");
    a(qr, "getFont");
    function Ht(e) {
      return x.bitmapFonts.get(e);
    }
    __name(Ht, "Ht");
    a(Ht, "getBitmapFont");
    function zt(e) {
      return x.shaders.get(e);
    }
    __name(zt, "zt");
    a(zt, "getShader");
    function Qt(e) {
      if (typeof e == "string") {
        let t = Yt(e);
        if (t)
          return t;
        if (ee() < 1)
          return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof S)
          return P.loaded(e);
        if (e instanceof P)
          return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    __name(Qt, "Qt");
    a(Qt, "resolveSprite");
    function Pr(e) {
      if (typeof e == "string") {
        let t = Kt(e);
        if (t)
          return t.data ? t.data : t;
        if (ee() < 1)
          return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof D)
          return e;
        if (e instanceof P)
          return e.data ? e.data : e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    __name(Pr, "Pr");
    a(Pr, "resolveSound");
    function Fr(e) {
      if (!e)
        return p.defShader;
      if (typeof e == "string") {
        let t = zt(e);
        if (t)
          return t.data ? t.data : t;
        if (ee() < 1)
          return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof P)
        return e.data ? e.data : e;
      return e;
    }
    __name(Fr, "Fr");
    a(Fr, "resolveShader");
    function Jt(e) {
      var _a;
      if (!e)
        return Jt((_a = s.font) != null ? _a : Ds);
      if (typeof e == "string") {
        let t = Ht(e);
        if (t)
          return t.data ? t.data : t;
        if (document.fonts.check(`${vr}px ${e}`))
          return e;
        if (ee() < 1)
          return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof P)
        return e.data ? e.data : e;
      return e;
    }
    __name(Jt, "Jt");
    a(Jt, "resolveFont");
    function Or(e) {
      return e !== void 0 && (R.masterNode.gain.value = Y(e, Ur, br)), R.masterNode.gain.value;
    }
    __name(Or, "Or");
    a(Or, "volume");
    function We(e, t = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var _a;
      let r = Pr(e);
      if (r instanceof P) {
        let y = We(new D(Xt())), C = a((W) => {
          let Q = We(W, t);
          for (let $ in Q)
            y[$] = Q[$];
        }, "doPlay");
        return r.onLoad(C), y;
      } else if (r === null) {
        let y = We(new D(Xt()));
        return rt(() => {
        }), y;
      }
      let o = R.ctx, d = false, i2 = o.createBufferSource();
      i2.buffer = r.buf, i2.loop = !!t.loop;
      let l = o.createGain();
      i2.connect(l), l.connect(R.masterNode);
      let h2 = (_a = t.seek) != null ? _a : 0;
      i2.start(0, h2);
      let w = o.currentTime - h2, m = null, b = { stop() {
        d || (this.pause(), w = o.currentTime);
      }, play(y) {
        if (!d)
          return;
        let C = i2;
        i2 = o.createBufferSource(), i2.buffer = C.buffer, i2.loop = C.loop, i2.playbackRate.value = C.playbackRate.value, i2.detune && (i2.detune.value = C.detune.value), i2.connect(l);
        let W = y != null ? y : this.time();
        i2.start(0, W), w = o.currentTime - W, d = false, m = null;
      }, pause() {
        d || (i2.stop(), d = true, m = o.currentTime);
      }, isPaused() {
        return d;
      }, isStopped() {
        return d;
      }, speed(y) {
        return y !== void 0 && (i2.playbackRate.value = Y(y, Ts, Ss)), i2.playbackRate.value;
      }, detune(y) {
        return i2.detune ? (y !== void 0 && (i2.detune.value = Y(y, As, Rs)), i2.detune.value) : 0;
      }, volume(y) {
        return y !== void 0 && (l.gain.value = Y(y, Ur, br)), l.gain.value;
      }, loop() {
        i2.loop = true;
      }, unloop() {
        i2.loop = false;
      }, duration() {
        return r.buf.duration;
      }, time() {
        return d ? m - w : o.currentTime - w;
      } };
      return b.speed(t.speed), b.detune(t.detune), b.volume(t.volume), b;
    }
    __name(We, "We");
    a(We, "play");
    function Zt(e) {
      return We(R.burpSnd, e);
    }
    __name(Zt, "Zt");
    a(Zt, "burp");
    function gt(e = Gt, t = jt) {
      let r = Ls.replace("{{user}}", e != null ? e : Gt), o = Ms.replace("{{user}}", t != null ? t : jt), d = c2.createShader(c2.VERTEX_SHADER), i2 = c2.createShader(c2.FRAGMENT_SHADER);
      c2.shaderSource(d, r), c2.shaderSource(i2, o), c2.compileShader(d), c2.compileShader(i2);
      let l = c2.createProgram();
      if (n.push(() => c2.deleteProgram(l)), c2.attachShader(l, d), c2.attachShader(l, i2), c2.bindAttribLocation(l, 0, "a_pos"), c2.bindAttribLocation(l, 1, "a_uv"), c2.bindAttribLocation(l, 2, "a_color"), c2.linkProgram(l), !c2.getProgramParameter(l, c2.LINK_STATUS)) {
        let h2 = a((y) => {
          let C = /^ERROR:\s0:(?<line>\d+):\s(?<msg>.+)/, W = y.match(C);
          return { line: Number(W.groups.line), msg: W.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), w = c2.getShaderInfoLog(d), m = c2.getShaderInfoLog(i2), b = "";
        if (w) {
          let y = h2(w);
          b += `Vertex shader line ${y.line - 14}: ${y.msg}`;
        }
        if (m) {
          let y = h2(m);
          b += `Fragment shader line ${y.line - 14}: ${y.msg}`;
        }
        throw new Error(b);
      }
      return c2.deleteShader(d), c2.deleteShader(i2), { bind() {
        c2.useProgram(l);
      }, unbind() {
        c2.useProgram(null);
      }, free() {
        c2.deleteProgram(l);
      }, send(h2) {
        for (let w in h2) {
          let m = h2[w], b = c2.getUniformLocation(l, w);
          typeof m == "number" ? c2.uniform1f(b, m) : m instanceof M ? c2.uniformMatrix4fv(b, false, new Float32Array(m.m)) : m instanceof v ? c2.uniform4f(b, m.r, m.g, m.b, m.a) : m instanceof _e ? c2.uniform3f(b, m.x, m.y, m.z) : m instanceof q && c2.uniform2f(b, m.x, m.y);
        }
      } };
    }
    __name(gt, "gt");
    a(gt, "makeShader");
    function Ir(e, t, r, o) {
      let d = e.width / t, i2 = {}, l = o.split("").entries();
      for (let [h2, w] of l)
        i2[w] = new I(h2 % d * t, Math.floor(h2 / d) * r, t, r);
      return { tex: e, map: i2, size: r };
    }
    __name(Ir, "Ir");
    a(Ir, "makeFont");
    function wt(e, t, r, o = p.defTex, d = p.defShader, i2 = {}) {
      let l = Fr(d);
      if (!(!l || l instanceof P)) {
        (o !== p.curTex || l !== p.curShader || !Vt(p.curUniform, i2) || p.vqueue.length + e.length * mt > Er || p.iqueue.length + t.length > Tr) && ie();
        for (let h2 of e) {
          let w = r ? p.transform : g.cam.transform.mult(p.transform), m = _r(w.multVec2(h2.pos.xy()));
          p.vqueue.push(m.x, m.y, h2.pos.z, h2.uv.x, h2.uv.y, h2.color.r / 255, h2.color.g / 255, h2.color.b / 255, h2.opacity);
        }
        for (let h2 of t)
          p.iqueue.push(h2 + p.vqueue.length / mt - e.length);
        p.curTex = o, p.curShader = l, p.curUniform = i2;
      }
    }
    __name(wt, "wt");
    a(wt, "drawRaw");
    function ie() {
      !p.curTex || !p.curShader || p.vqueue.length === 0 || p.iqueue.length === 0 || (c2.bindBuffer(c2.ARRAY_BUFFER, p.vbuf), c2.bufferSubData(c2.ARRAY_BUFFER, 0, new Float32Array(p.vqueue)), c2.bindBuffer(c2.ELEMENT_ARRAY_BUFFER, p.ibuf), c2.bufferSubData(c2.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(p.iqueue)), p.curShader.bind(), p.curShader.send(p.curUniform), p.curTex.bind(), c2.drawElements(c2.TRIANGLES, p.iqueue.length, c2.UNSIGNED_SHORT, 0), p.curTex.unbind(), p.curShader.unbind(), c2.bindBuffer(c2.ARRAY_BUFFER, null), c2.bindBuffer(c2.ELEMENT_ARRAY_BUFFER, null), p.vqueue = [], p.iqueue = [], p.drawCalls++);
    }
    __name(ie, "ie");
    a(ie, "flush");
    function Br() {
      c2.clear(c2.COLOR_BUFFER_BIT), s.background || se(() => {
        Te({ width: V(), height: N(), quad: new I(0, 0, V() / xr, N() / xr), tex: p.bgTex, fixed: true });
      }), p.drawCalls = 0, p.transformStack = [], p.transform = new M();
    }
    __name(Br, "Br");
    a(Br, "frameStart");
    function Vr() {
      ie(), p.lastDrawCalls = p.drawCalls;
    }
    __name(Vr, "Vr");
    a(Vr, "frameEnd");
    function _r(e) {
      return f(e.x / V() * 2 - 1, -e.y / N() * 2 + 1);
    }
    __name(_r, "_r");
    a(_r, "screen2ndc");
    function Nr(e) {
      p.transform = e.clone();
    }
    __name(Nr, "Nr");
    a(Nr, "pushMatrix");
    function O(...e) {
      if (e[0] === void 0)
        return;
      let t = f(...e);
      t.x === 0 && t.y === 0 || (p.transform = p.transform.translate(t));
    }
    __name(O, "O");
    a(O, "pushTranslate");
    function ze(...e) {
      if (e[0] === void 0)
        return;
      let t = f(...e);
      t.x === 1 && t.y === 1 || (p.transform = p.transform.scale(t));
    }
    __name(ze, "ze");
    a(ze, "pushScale");
    function kr(e) {
      !e || (p.transform = p.transform.rotateX(e));
    }
    __name(kr, "kr");
    a(kr, "pushRotateX");
    function Gr(e) {
      !e || (p.transform = p.transform.rotateY(e));
    }
    __name(Gr, "Gr");
    a(Gr, "pushRotateY");
    function Ee(e) {
      !e || (p.transform = p.transform.rotateZ(e));
    }
    __name(Ee, "Ee");
    a(Ee, "pushRotateZ");
    let jr = Ee;
    function te() {
      p.transformStack.push(p.transform.clone());
    }
    __name(te, "te");
    a(te, "pushTransform");
    function K() {
      p.transformStack.length > 0 && (p.transform = p.transformStack.pop());
    }
    __name(K, "K");
    a(K, "popTransform");
    function Te(e) {
      var _a;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, r = e.height, d = $e(e.origin || lt).scale(f(t, r).scale(-0.5)), i2 = e.quad || new I(0, 0, 1, 1), l = e.color || T(255, 255, 255), h2 = (_a = e.opacity) != null ? _a : 1;
      te(), O(e.pos), Ee(e.angle), ze(e.scale), O(d), wt([{ pos: le(-t / 2, r / 2, 0), uv: f(e.flipX ? i2.x + i2.w : i2.x, e.flipY ? i2.y : i2.y + i2.h), color: l, opacity: h2 }, { pos: le(-t / 2, -r / 2, 0), uv: f(e.flipX ? i2.x + i2.w : i2.x, e.flipY ? i2.y + i2.h : i2.y), color: l, opacity: h2 }, { pos: le(t / 2, -r / 2, 0), uv: f(e.flipX ? i2.x : i2.x + i2.w, e.flipY ? i2.y + i2.h : i2.y), color: l, opacity: h2 }, { pos: le(t / 2, r / 2, 0), uv: f(e.flipX ? i2.x : i2.x + i2.w, e.flipY ? i2.y : i2.y + i2.h), color: l, opacity: h2 }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), K();
    }
    __name(Te, "Te");
    a(Te, "drawUVQuad");
    function Xr(e) {
      var _a;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let t = (_a = e.quad) != null ? _a : new I(0, 0, 1, 1), r = e.tex.width * t.w, o = e.tex.height * t.h, d = f(1);
      if (e.tiled) {
        let i2 = Math.ceil((e.width || r) / r), l = Math.ceil((e.height || o) / o), w = $e(e.origin || lt).add(f(1, 1)).scale(0.5).scale(i2 * r, l * o);
        for (let m = 0; m < i2; m++)
          for (let b = 0; b < l; b++)
            Te(__spreadProps(__spreadValues({}, e), { pos: (e.pos || f(0)).add(f(r * m, o * b)).sub(w), scale: d.scale(e.scale || f(1)), tex: e.tex, quad: t, width: r, height: o, origin: "topleft" }));
      } else
        e.width && e.height ? (d.x = e.width / r, d.y = e.height / o) : e.width ? (d.x = e.width / r, d.y = d.x) : e.height && (d.y = e.height / o, d.x = d.y), Te(__spreadProps(__spreadValues({}, e), { scale: d.scale(e.scale || f(1)), tex: e.tex, quad: t, width: r, height: o }));
    }
    __name(Xr, "Xr");
    a(Xr, "drawTexture");
    function en(e) {
      var _a, _b;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let t = Qt(e.sprite);
      if (!t || !t.data)
        return;
      let r = t.data.frames[(_a = e.frame) != null ? _a : 0];
      if (!r)
        throw new Error(`Frame not found: ${(_b = e.frame) != null ? _b : 0}`);
      Xr(__spreadProps(__spreadValues({}, e), { tex: t.data.tex, quad: r.scale(e.quad || new I(0, 0, 1, 1)) }));
    }
    __name(en, "en");
    a(en, "drawSprite");
    function qe(e, t, r, o, d, i2 = 1) {
      o = ce(o % 360), d = ce(d % 360), d <= o && (d += Math.PI * 2);
      let l = Math.ceil(Math.max(Math.sqrt(t + r) * 3 * (i2 || 1), 16)), h2 = (d - o) / l, w = [];
      for (let m = o; m < d; m += h2)
        w.push(e.add(t * Math.cos(m), r * Math.sin(m)));
      return w.push(e.add(t * Math.cos(d), r * Math.sin(d))), w;
    }
    __name(qe, "qe");
    a(qe, "getArcPts");
    function j(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, r = e.height, d = $e(e.origin || lt).add(1, 1).scale(f(t, r).scale(-0.5)), i2 = [f(0, 0), f(t, 0), f(t, r), f(0, r)];
      if (e.radius) {
        let l = Math.min(Math.min(t, r) / 2, e.radius);
        i2 = [f(l, 0), f(t - l, 0), ...qe(f(t - l, l), l, l, 270, 360), f(t, l), f(t, r - l), ...qe(f(t - l, r - l), l, l, 0, 90), f(t - l, r), f(l, r), ...qe(f(l, r - l), l, l, 90, 180), f(0, r - l), f(0, l), ...qe(f(l, l), l, l, 180, 270)];
      }
      Se(__spreadValues(__spreadProps(__spreadValues({}, e), { offset: d, pts: i2 }), e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {}));
    }
    __name(j, "j");
    a(j, "drawRect");
    function Pe(e) {
      let { p1: t, p2: r } = e;
      if (!t || !r)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let o = e.width || 1, d = r.sub(t).unit().normal().scale(o * 0.5), i2 = [t.sub(d), t.add(d), r.add(d), r.sub(d)].map((l) => {
        var _a, _b;
        return { pos: le(l.x, l.y, 0), uv: f(0), color: (_a = e.color) != null ? _a : v.WHITE, opacity: (_b = e.opacity) != null ? _b : 1 };
      });
      wt(i2, [0, 1, 3, 1, 2, 3], e.fixed, p.defTex, e.shader, e.uniform);
    }
    __name(Pe, "Pe");
    a(Pe, "drawLine");
    function tn(e) {
      let t = e.pts;
      if (!t)
        throw new Error('drawLines() requires property "pts".');
      if (!(t.length < 2))
        if (e.radius && t.length >= 3) {
          let r = t[0].dist(t[1]);
          for (let d = 1; d < t.length - 1; d++)
            r = Math.min(t[d].dist(t[d + 1]), r);
          let o = Math.min(e.radius, r / 2);
          Pe(__spreadProps(__spreadValues({}, e), { p1: t[0], p2: t[1] }));
          for (let d = 1; d < t.length - 2; d++) {
            let i2 = t[d], l = t[d + 1];
            Pe(__spreadProps(__spreadValues({}, e), { p1: i2, p2: l }));
          }
          Pe(__spreadProps(__spreadValues({}, e), { p1: t[t.length - 2], p2: t[t.length - 1] }));
        } else
          for (let r = 0; r < t.length - 1; r++)
            Pe(__spreadProps(__spreadValues({}, e), { p1: t[r], p2: t[r + 1] }));
    }
    __name(tn, "tn");
    a(tn, "drawLines");
    function nn(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return Se(__spreadProps(__spreadValues({}, e), { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(nn, "nn");
    a(nn, "drawTriangle");
    function Ut(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && rn(__spreadProps(__spreadValues({}, e), { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(Ut, "Ut");
    a(Ut, "drawCircle");
    function rn(e) {
      var _a, _b;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let t = (_a = e.start) != null ? _a : 0, r = (_b = e.end) != null ? _b : 360, o = qe(f(0), e.radiusX, e.radiusY, t, r, e.resolution);
      o.unshift(f(0));
      let d = __spreadValues(__spreadProps(__spreadValues({}, e), { pts: o, radius: 0 }), e.gradient ? { colors: [e.gradient[0], ...Array(o.length - 1).fill(e.gradient[1])] } : {});
      if (r - t >= 360 && e.outline) {
        e.fill !== false && Se(__spreadProps(__spreadValues({}, d), { outline: null })), Se(__spreadProps(__spreadValues({}, d), { pts: o.slice(1), fill: false }));
        return;
      }
      Se(d);
    }
    __name(rn, "rn");
    a(rn, "drawEllipse");
    function Se(e) {
      var _a, _b;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let t = e.pts.length;
      if (!(t < 3)) {
        if (te(), O(e.pos), ze(e.scale), Ee(e.angle), O(e.offset), e.fill !== false) {
          let r = (_a = e.color) != null ? _a : v.WHITE, o = e.pts.map((i2, l) => {
            var _a2, _b2;
            return { pos: le(i2.x, i2.y, 0), uv: f(0, 0), color: e.colors ? (_a2 = e.colors[l]) != null ? _a2 : r : r, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
          }), d = [...Array(t - 2).keys()].map((i2) => [0, i2 + 1, i2 + 2]).flat();
          wt(o, (_b = e.indices) != null ? _b : d, e.fixed, p.defTex, e.shader, e.uniform);
        }
        e.outline && tn({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, uniform: e.uniform, fixed: e.fixed }), K();
      }
    }
    __name(Se, "Se");
    a(Se, "drawPolygon");
    function sn(e, t, r) {
      ie(), c2.clear(c2.STENCIL_BUFFER_BIT), c2.enable(c2.STENCIL_TEST), c2.stencilFunc(c2.NEVER, 1, 255), c2.stencilOp(c2.REPLACE, c2.REPLACE, c2.REPLACE), t(), ie(), c2.stencilFunc(r, 1, 255), c2.stencilOp(c2.KEEP, c2.KEEP, c2.KEEP), e(), ie(), c2.disable(c2.STENCIL_TEST);
    }
    __name(sn, "sn");
    a(sn, "drawStenciled");
    function $r(e, t) {
      sn(e, t, c2.EQUAL);
    }
    __name($r, "$r");
    a($r, "drawMasked");
    function Yr(e, t) {
      sn(e, t, c2.NOTEQUAL);
    }
    __name(Yr, "Yr");
    a(Yr, "drawSubtracted");
    function se(e) {
      ie();
      let t = p.width, r = p.height;
      p.width = p.viewport.width, p.height = p.viewport.height, e(), ie(), p.width = t, p.height = r;
    }
    __name(se, "se");
    a(se, "drawUnscaled");
    function on(e, t) {
      t.pos && (e.pos = e.pos.add(t.pos)), t.scale && (e.scale = e.scale.scale(f(t.scale))), t.angle && (e.angle += t.angle), t.color && (e.color = e.color.mult(t.color)), t.opacity && (e.opacity *= t.opacity);
    }
    __name(on, "on");
    a(on, "applyCharTransform");
    let an = /\[(?<text>[^\]]*)\]\.(?<style>[\w\.]+)+/g;
    function Kr(e) {
      let t = {}, r = e.replace(an, "$1"), o = 0;
      for (let d of e.matchAll(an)) {
        let i2 = d.groups.style.split("."), l = d.index - o;
        for (let h2 = l; h2 < d.index + d.groups.text.length; h2++)
          t[h2] = { localIdx: h2 - l, styles: i2 };
        o += 3 + d.groups.style.length;
      }
      return { charStyleMap: t, text: r };
    }
    __name(Kr, "Kr");
    a(Kr, "compileStyledText");
    let bt = {};
    function me(e) {
      var _a, _b, _c, _d, _e2, _f, _g;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let t = Jt(e.font);
      if (e.text === "" || t instanceof P || !t)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: r, text: o } = Kr(e.text + ""), d = o.split("");
      if (t instanceof FontFace || typeof t == "string") {
        let L = t instanceof FontFace ? t.family : t, E = (_a = bt[L]) != null ? _a : { font: { tex: new U(ht, ht), map: {}, size: vr }, cursor: f(0) };
        bt[L] || (bt[L] = E), t = E.font;
        for (let F of d)
          if (!E.font.map[F]) {
            let J = u.canvas2.getContext("2d");
            J.font = `${t.size}px ${L}`, J.clearRect(0, 0, u.canvas2.width, u.canvas2.height), J.textBaseline = "top", J.textAlign = "left", J.fillStyle = "rgb(255, 255, 255)", J.fillText(F, 0, 0);
            let Be = J.measureText(F), Ce = Math.ceil(Be.width), Le = J.getImageData(0, 0, Ce, t.size);
            if (E.cursor.x + Ce > ht && (E.cursor.x = 0, E.cursor.y += t.size, E.cursor.y > ht))
              throw new Error("Font atlas exceeds character limit");
            t.tex.update(E.cursor.x, E.cursor.y, Le), t.map[F] = new I(E.cursor.x, E.cursor.y, Ce, t.size), E.cursor.x += Ce;
          }
      }
      let i2 = e.size || t.size, l = f((_b = e.scale) != null ? _b : 1).scale(i2 / t.size), h2 = (_c = e.lineSpacing) != null ? _c : 0, w = (_d = e.letterSpacing) != null ? _d : 0, m = 0, b = 0, y = 0, C = [], W = [], Q = 0, $ = null, we = null;
      for (; Q < d.length; ) {
        let L = d[Q];
        if (L === `
`)
          y += i2 + h2, C.push({ width: m - w, chars: W }), $ = null, we = null, m = 0, W = [];
        else {
          let E = t.map[L], F = E.w * l.x;
          E && (e.width && m + F > e.width && (y += i2 + h2, $ != null && (Q -= W.length - $, L = d[Q], E = t.map[L], F = E.w * l.x, W = W.slice(0, $ - 1), m = we), $ = null, we = null, C.push({ width: m - w, chars: W }), m = 0, W = []), W.push({ tex: t.tex, width: E.w, height: E.h, quad: new I((E.x + ft) / t.tex.width, (E.y + ft) / t.tex.height, (E.w - ft * 2) / t.tex.width, (E.h - ft * 2) / t.tex.height), ch: L, pos: f(m, y), opacity: (_e2 = e.opacity) != null ? _e2 : 1, color: (_f = e.color) != null ? _f : v.WHITE, scale: f(l), angle: 0 }), L === " " && ($ = W.length, we = m), m += F, b = Math.max(b, m), m += w);
        }
        Q++;
      }
      C.push({ width: m - w, chars: W }), y += i2, e.width && (b = e.width);
      let De = [];
      for (let L of C) {
        let E = (b - L.width) * Is((_g = e.align) != null ? _g : "left");
        for (let F of L.chars) {
          let J = t.map[F.ch], Be = De.length, Ce = new q(J.w * l.x * 0.5, J.h * l.y * 0.5);
          if (F.pos = F.pos.add(E, 0).add(Ce), e.transform) {
            let Le = typeof e.transform == "function" ? e.transform(Be, F.ch) : e.transform;
            Le && on(F, Le);
          }
          if (r[Be]) {
            let { styles: Le, localIdx: rs } = r[Be];
            for (let is of Le) {
              let Ct = e.styles[is], Vn = typeof Ct == "function" ? Ct(rs, F.ch) : Ct;
              Vn && on(F, Vn);
            }
          }
          De.push(F);
        }
      }
      return { width: b, height: y, chars: De, opt: e };
    }
    __name(me, "me");
    a(me, "formatText");
    function un(e) {
      pe(me(e));
    }
    __name(un, "un");
    a(un, "drawText");
    function pe(e) {
      var _a;
      te(), O(e.opt.pos), Ee(e.opt.angle), O($e((_a = e.opt.origin) != null ? _a : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((t) => {
        Te({ tex: t.tex, width: t.width, height: t.height, pos: t.pos, scale: t.scale, angle: t.angle, color: t.color, opacity: t.opacity, quad: t.quad, origin: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), K();
    }
    __name(pe, "pe");
    a(pe, "drawFormattedText");
    function cn() {
      let e = u.pixelDensity, t = c2.drawingBufferWidth / e, r = c2.drawingBufferHeight / e;
      if (gn()) {
        let o = window.innerWidth, d = window.innerHeight, i2 = o / d, l = t / r;
        if (i2 > l) {
          let h2 = window.innerHeight * l;
          p.viewport = { x: (o - h2) / 2, y: 0, width: h2, height: d };
        } else {
          let h2 = window.innerWidth / l;
          p.viewport = { x: 0, y: (d - h2) / 2, width: o, height: h2 };
        }
        return;
      }
      if (s.letterbox) {
        if (!s.width || !s.height)
          throw new Error("Letterboxing requires width and height defined.");
        let o = t / r, d = s.width / s.height;
        if (o > d) {
          s.stretch || (p.width = r * d, p.height = r);
          let i2 = r * d, l = r, h2 = (t - i2) / 2;
          c2.scissor(h2 * e, 0, i2 * e, l * e), c2.viewport(h2 * e, 0, i2 * e, r * e), p.viewport = { x: h2, y: 0, width: i2, height: r };
        } else {
          s.stretch || (p.width = t, p.height = t / d);
          let i2 = t, l = t / d, h2 = (r - l) / 2;
          c2.scissor(0, h2 * e, i2 * e, l * e), c2.viewport(0, h2 * e, t * e, l * e), p.viewport = { x: 0, y: h2, width: t, height: l };
        }
        return;
      }
      if (s.stretch) {
        if (!s.width || !s.height)
          throw new Error("Stretching requires width and height defined.");
        c2.viewport(0, 0, t * e, r * e), p.viewport = { x: 0, y: 0, width: t, height: r };
        return;
      }
      p.width = t / u.scale, p.height = r / u.scale, c2.viewport(0, 0, t * e, r * e), p.viewport = { x: 0, y: 0, width: t, height: r };
    }
    __name(cn, "cn");
    a(cn, "updateViewport");
    function V() {
      return p.width;
    }
    __name(V, "V");
    a(V, "width");
    function N() {
      return p.height;
    }
    __name(N, "N");
    a(N, "height");
    let k = {}, Fe = {}, ge = {};
    function Qe(e) {
      return f((e.x - p.viewport.x) * V() / p.viewport.width, (e.y - p.viewport.y) * N() / p.viewport.height);
    }
    __name(Qe, "Qe");
    a(Qe, "windowToContent");
    function Hr(e) {
      return f(e.x * p.viewport.width / p.width, e.y * p.viewport.height / p.height);
    }
    __name(Hr, "Hr");
    a(Hr, "contentToView");
    function yt(e, t) {
      let r = Qe(f(e, t));
      u.mouseStarted && (u.mouseDeltaPos = r.sub(u.mousePos)), u.mousePos = r, u.mouseStarted = true, u.isMouseMoved = true;
    }
    __name(yt, "yt");
    a(yt, "setMousePos"), k.mousemove = (e) => {
      yt(e.offsetX, e.offsetY);
    }, k.mousedown = (e) => {
      let t = gr[e.button];
      t && (u.mouseStates[t] = "pressed");
    }, k.mouseup = (e) => {
      let t = gr[e.button];
      t && (u.mouseStates[t] = "released");
    }, k.keydown = (e) => {
      let t = pr[e.key] || e.key.toLowerCase();
      vs.includes(t) && e.preventDefault(), t.length === 1 && u.charInputted.push(e.key), t === "space" && u.charInputted.push(" "), e.repeat ? (u.isKeyPressedRepeat = true, u.keyStates[t] = "rpressed") : (u.isKeyPressed = true, u.keyStates[t] = "pressed"), u.numKeyDown++;
    }, k.keyup = (e) => {
      let t = pr[e.key] || e.key.toLowerCase();
      u.keyStates[t] = "released", u.isKeyReleased = true, u.numKeyDown--;
    }, k.touchstart = (e) => {
      e.preventDefault();
      let t = [...e.changedTouches];
      t.forEach((r) => {
        g.ev.trigger("onTouchStart", Qe(f(r.clientX, r.clientY)), r);
      }), s.touchToMouse !== false && (yt(t[0].clientX, t[0].clientY), u.mouseStates.left = "pressed");
    }, k.touchmove = (e) => {
      e.preventDefault();
      let t = [...e.changedTouches];
      t.forEach((r) => {
        g.ev.trigger("onTouchMove", Qe(f(r.clientX, r.clientY)), r);
      }), s.touchToMouse !== false && yt(t[0].clientX, t[0].clientY);
    }, k.touchend = (e) => {
      [...e.changedTouches].forEach((r) => {
        g.ev.trigger("onTouchEnd", Qe(f(r.clientX, r.clientY)), r);
      }), s.touchToMouse !== false && (u.mouseStates.left = "released");
    }, k.touchcancel = () => {
      s.touchToMouse !== false && (u.mouseStates.left = "released");
    }, k.contextmenu = function(e) {
      e.preventDefault();
    }, Fe.visibilitychange = () => {
      switch (document.visibilityState) {
        case "visible":
          u.skipTime = true, A.paused || R.ctx.resume();
          break;
        case "hidden":
          R.ctx.suspend();
          break;
      }
    }, ge.resize = () => {
    }, ge.error = (e) => In(e.error), ge.unhandledrejection = (e) => In(e.reason);
    for (let e in k)
      u.canvas.addEventListener(e, k[e]);
    for (let e in Fe)
      document.addEventListener(e, Fe[e]);
    for (let e in ge)
      window.addEventListener(e, ge[e]);
    function H() {
      return u.mousePos.clone();
    }
    __name(H, "H");
    a(H, "mousePos");
    function ln() {
      return u.mouseDeltaPos.clone();
    }
    __name(ln, "ln");
    a(ln, "mouseDeltaPos");
    function Je(e = "left") {
      return u.mouseStates[e] === "pressed";
    }
    __name(Je, "Je");
    a(Je, "isMousePressed");
    function xt(e = "left") {
      return u.mouseStates[e] === "pressed" || u.mouseStates[e] === "down";
    }
    __name(xt, "xt");
    a(xt, "isMouseDown");
    function vt(e = "left") {
      return u.mouseStates[e] === "released";
    }
    __name(vt, "vt");
    a(vt, "isMouseReleased");
    function dn() {
      return u.isMouseMoved;
    }
    __name(dn, "dn");
    a(dn, "isMouseMoved");
    function Ze(e) {
      return e === void 0 ? u.isKeyPressed : u.keyStates[e] === "pressed";
    }
    __name(Ze, "Ze");
    a(Ze, "isKeyPressed");
    function hn(e) {
      return e === void 0 ? u.isKeyPressedRepeat : u.keyStates[e] === "pressed" || u.keyStates[e] === "rpressed";
    }
    __name(hn, "hn");
    a(hn, "isKeyPressedRepeat");
    function fn(e) {
      return e === void 0 ? u.numKeyDown > 0 : u.keyStates[e] === "pressed" || u.keyStates[e] === "rpressed" || u.keyStates[e] === "down";
    }
    __name(fn, "fn");
    a(fn, "isKeyDown");
    function Et(e) {
      return e === void 0 ? u.isKeyReleased : u.keyStates[e] === "released";
    }
    __name(Et, "Et");
    a(Et, "isKeyReleased");
    function zr() {
      return [...u.charInputted];
    }
    __name(zr, "zr");
    a(zr, "charInputted");
    function Tt() {
      return u.time;
    }
    __name(Tt, "Tt");
    a(Tt, "time");
    function mn() {
      return u.canvas.toDataURL();
    }
    __name(mn, "mn");
    a(mn, "screenshot");
    function pn(e) {
      return e && (u.canvas.style.cursor = e), u.canvas.style.cursor;
    }
    __name(pn, "pn");
    a(pn, "cursor");
    function Qr(e = true) {
      e ? Ps(u.canvas) : Fs();
    }
    __name(Qr, "Qr");
    a(Qr, "fullscreen");
    function gn() {
      return Boolean(Os());
    }
    __name(gn, "gn");
    a(gn, "isFullscreen");
    let A = { inspect: false, timeScale: 1, showLog: true, fps: () => u.fpsCounter.fps, numFrames: () => u.numFrames, objCount() {
      let e = a((t) => t.children.length + t.children.reduce((r, o) => r + e(o), 0), "count");
      return e(g.root);
    }, stepFrame: Fn, drawCalls: () => p.drawCalls, clearLog: () => g.logs = [], log: (e) => g.logs.unshift(`${s.logTime ? `[${Tt().toFixed(2)}].time ` : ""}[${(e == null ? void 0 : e.toString) ? e.toString() : e}].${e instanceof Error ? "error" : "info"}`), error: (e) => A.log(new Error(e.toString ? e.toString() : e)), curRecording: null, get paused() {
      return u.paused;
    }, set paused(e) {
      u.paused = e, e ? R.ctx.suspend() : R.ctx.resume();
    } };
    function X() {
      return u.dt * A.timeScale;
    }
    __name(X, "X");
    a(X, "dt");
    function Jr(...e) {
      return e.length > 0 && (g.cam.pos = f(...e)), g.cam.pos.clone();
    }
    __name(Jr, "Jr");
    a(Jr, "camPos");
    function Zr(...e) {
      return e.length > 0 && (g.cam.scale = f(...e)), g.cam.scale.clone();
    }
    __name(Zr, "Zr");
    a(Zr, "camScale");
    function ei(e) {
      return e !== void 0 && (g.cam.angle = e), g.cam.angle;
    }
    __name(ei, "ei");
    a(ei, "camRot");
    function ti(e = 12) {
      g.cam.shake = e;
    }
    __name(ti, "ti");
    a(ti, "shake");
    function et(e) {
      return g.cam.transform.multVec2(e);
    }
    __name(et, "et");
    a(et, "toScreen");
    function wn(e) {
      return g.cam.transform.invert().multVec2(e);
    }
    __name(wn, "wn");
    a(wn, "toWorld");
    function St(e) {
      let t = /* @__PURE__ */ new Map(), r = {}, o = new he(), d = { _id: or(), hidden: false, paused: false, children: [], parent: null, add(i2) {
        let l = (() => {
          if (Array.isArray(i2))
            return St(i2);
          if (i2.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return i2;
        })();
        return l.parent = this, l.trigger("add", this), rt(() => l.trigger("load")), this.children.push(l), l;
      }, readd(i2) {
        return this.remove(i2), this.children.push(i2), i2;
      }, remove(i2) {
        let l = this.children.indexOf(i2);
        l !== -1 && (i2.parent = null, i2.trigger("destroy"), this.children.splice(l, 1));
      }, removeAll(i2) {
        this.every(i2, (l) => this.remove(l));
      }, update() {
        this.paused || (this.every((i2) => i2.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (te(), O(this.pos), ze(this.scale), Ee(this.angle), this.every((i2) => i2.draw()), this.trigger("draw"), K());
      }, use(i2) {
        if (!i2)
          return;
        if (typeof i2 == "string")
          return this.use({ id: i2 });
        i2.id && (this.unuse(i2.id), t.set(i2.id, {}));
        let l = i2.id ? t.get(i2.id) : r;
        l.cleanups = [];
        for (let w in i2)
          if (!Ws.has(w)) {
            if (typeof i2[w] == "function") {
              let m = i2[w].bind(this);
              if (qs.has(w)) {
                l.cleanups.push(this.on(w, m)), l[w] = m;
                continue;
              } else
                l[w] = m;
            } else
              l[w] = i2[w];
            this[w] === void 0 && Object.defineProperty(this, w, { get: () => l[w], set: (m) => l[w] = m, configurable: true, enumerable: true });
          }
        let h2 = a(() => {
          if (!!i2.require) {
            for (let w of i2.require)
              if (!this.c(w))
                throw new Error(`Component '${i2.id}' requires component '${w}'`);
          }
        }, "checkDeps");
        this.exists() ? (i2.add && i2.add.call(this), i2.load && rt(() => i2.load.call(this)), h2()) : i2.require && l.cleanups.push(this.on("add", h2));
      }, unuse(i2) {
        if (t.has(i2)) {
          let l = t.get(i2);
          l.cleanups.forEach((h2) => h2());
          for (let h2 in l)
            delete l[h2];
        }
        t.delete(i2);
      }, c(i2) {
        return t.get(i2);
      }, get(i2) {
        return this.children.filter((l) => i2 ? l.is(i2) : true).sort((l, h2) => {
          var _a, _b;
          return ((_a = l.z) != null ? _a : 0) - ((_b = h2.z) != null ? _b : 0);
        });
      }, every(i2, l) {
        if (typeof i2 == "function" && l === void 0)
          return this.get().forEach((h2) => i2(h2));
        if (typeof i2 == "string" || Array.isArray(i2))
          return this.get(i2).forEach((h2) => l(h2));
      }, revery(i2, l) {
        if (typeof i2 == "function" && l === void 0)
          return this.get().reverse().forEach((h2) => i2(h2));
        if (typeof i2 == "string" || Array.isArray(i2))
          return this.get(i2).reverse().forEach((h2) => l(h2));
      }, isAncestorOf(i2) {
        return i2.parent ? i2.parent === this || this.isAncestorOf(i2.parent) : false;
      }, exists() {
        return g.root.isAncestorOf(this);
      }, is(i2) {
        if (i2 === "*")
          return true;
        if (Array.isArray(i2)) {
          for (let l of i2)
            if (!this.c(l))
              return false;
          return true;
        } else
          return this.c(i2) != null;
      }, on(i2, l) {
        return o.on(i2, l.bind(this));
      }, trigger(i2, ...l) {
        o.trigger(i2, ...l), g.objEvents.trigger(i2, this, ...l);
      }, destroy() {
        var _a;
        (_a = this.parent) == null ? void 0 : _a.remove(this);
      }, inspect() {
        let i2 = {};
        for (let [l, h2] of t)
          i2[l] = h2.inspect ? h2.inspect() : null;
        return i2;
      }, onUpdate(i2) {
        return this.on("update", i2);
      }, onDraw(i2) {
        return this.on("draw", i2);
      }, onDestroy(i2) {
        return this.on("destroy", i2);
      }, clearEvents() {
        o.clear();
      } };
      for (let i2 of e)
        d.use(i2);
      return d;
    }
    __name(St, "St");
    a(St, "make");
    function Oe(e, t, r) {
      return g.objEvents[e] || (g.objEvents[e] = new de()), g.objEvents.on(e, (o, ...d) => {
        o.is(t) && r(o, ...d);
      });
    }
    __name(Oe, "Oe");
    a(Oe, "on");
    function tt(e, t) {
      if (typeof e == "function" && t === void 0)
        return g.root.onUpdate(e);
      if (typeof e == "string")
        return Oe("update", e, t);
    }
    __name(tt, "tt");
    a(tt, "onUpdate");
    function ni(e, t) {
      if (typeof e == "function" && t === void 0)
        return g.root.onDraw(e);
      if (typeof e == "string")
        return Oe("draw", e, t);
    }
    __name(ni, "ni");
    a(ni, "onDraw");
    function ri(e, t, r) {
      let o = Oe("collide", e, (l, h2, w) => h2.is(t) && r(l, h2, w)), d = Oe("collide", t, (l, h2, w) => h2.is(e) && r(h2, l, w)), i2 = tt(e, (l) => {
        if (!l.area)
          throw new Error("onCollide() requires the object to have area() component");
        l._checkCollisions(t, (h2) => {
          r(l, h2);
        });
      });
      return () => [o, d, i2].forEach((l) => l());
    }
    __name(ri, "ri");
    a(ri, "onCollide");
    function ii(e, t) {
      return typeof e == "function" ? vn(e) : tt(e, (r) => {
        if (!r.area)
          throw new Error("onClick() requires the object to have area() component");
        r.isClicked() && t(r);
      });
    }
    __name(ii, "ii");
    a(ii, "onClick");
    function si(e, t, r) {
      return tt(e, (o) => {
        if (!o.area)
          throw new Error("onHover() requires the object to have area() component");
        o.isHovering() ? t(o) : r && r(o);
      });
    }
    __name(si, "si");
    a(si, "onHover");
    function Un(e, t) {
      return new Promise((r) => {
        g.timers.push(new fe(e, () => {
          t && t(), r();
        }));
      });
    }
    __name(Un, "Un");
    a(Un, "wait");
    function oi(e, t) {
      let r = false, o = a(() => {
        r || (t(), Un(e, o));
      }, "newF");
      return o(), () => r = true;
    }
    __name(oi, "oi");
    a(oi, "loop");
    function bn(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => bn(o, t));
        return () => r.forEach((o) => o());
      }
      return g.ev.on("input", () => fn(e) && t());
    }
    __name(bn, "bn");
    a(bn, "onKeyDown");
    function z2(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => z2(o, t));
        return () => r.forEach((o) => o());
      } else
        return typeof e == "function" ? g.ev.on("input", () => Ze() && e()) : g.ev.on("input", () => Ze(e) && t());
    }
    __name(z2, "z");
    a(z2, "onKeyPress");
    function yn(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => yn(o, t));
        return () => r.forEach((o) => o());
      } else
        return typeof e == "function" ? g.ev.on("input", () => Ze() && e()) : g.ev.on("input", () => hn(e) && t());
    }
    __name(yn, "yn");
    a(yn, "onKeyPressRepeat");
    function xn(e, t) {
      if (Array.isArray(e)) {
        let r = e.map((o) => xn(o, t));
        return () => r.forEach((o) => o());
      } else
        return typeof e == "function" ? g.ev.on("input", () => Et() && e()) : g.ev.on("input", () => Et(e) && t());
    }
    __name(xn, "xn");
    a(xn, "onKeyRelease");
    function ai(e, t) {
      return typeof e == "function" ? g.ev.on("input", () => xt() && e(H())) : g.ev.on("input", () => xt(e) && t(H()));
    }
    __name(ai, "ai");
    a(ai, "onMouseDown");
    function vn(e, t) {
      return typeof e == "function" ? g.ev.on("input", () => Je() && e(H())) : g.ev.on("input", () => Je(e) && t(H()));
    }
    __name(vn, "vn");
    a(vn, "onMousePress");
    function ui(e, t) {
      return typeof e == "function" ? g.ev.on("input", () => vt() && e(H())) : g.ev.on("input", () => vt(e) && t(H()));
    }
    __name(ui, "ui");
    a(ui, "onMouseRelease");
    function ci(e) {
      return g.ev.on("input", () => dn() && e(H(), ln()));
    }
    __name(ci, "ci");
    a(ci, "onMouseMove");
    function li(e) {
      return g.ev.on("input", () => zr().forEach((t) => e(t)));
    }
    __name(li, "li");
    a(li, "onCharInput");
    function di(e) {
      return g.ev.on("onTouchStart", e);
    }
    __name(di, "di");
    a(di, "onTouchStart");
    function hi(e) {
      return g.ev.on("onTouchMove", e);
    }
    __name(hi, "hi");
    a(hi, "onTouchMove");
    function fi(e) {
      return g.ev.on("onTouchEnd", e);
    }
    __name(fi, "fi");
    a(fi, "onTouchEnd");
    function En() {
      z2("f1", () => {
        A.inspect = !A.inspect;
      }), z2("f2", () => {
        A.clearLog();
      }), z2("f8", () => {
        A.paused = !A.paused;
      }), z2("f7", () => {
        A.timeScale = Ae(Y(A.timeScale - 0.2, 0, 2), 1);
      }), z2("f9", () => {
        A.timeScale = Ae(Y(A.timeScale + 0.2, 0, 2), 1);
      }), z2("f10", () => {
        A.stepFrame();
      }), z2("f5", () => {
        g.ev.onOnce("frameEnd", () => je("kaboom.png", mn()));
      }), z2("f6", () => {
        A.curRecording ? (A.curRecording.download(), A.curRecording = null) : A.curRecording = Wn();
      });
    }
    __name(En, "En");
    a(En, "enterDebugMode");
    function Tn() {
      z2("b", Zt);
    }
    __name(Tn, "Tn");
    a(Tn, "enterBurpMode");
    function Sn(e) {
      return e !== void 0 && (g.gravity = e), g.gravity;
    }
    __name(Sn, "Sn");
    a(Sn, "gravity");
    function An(e, t) {
      return { target: e, displacement: t, isTop: () => t.y > 0, isBottom: () => t.y < 0, isLeft: () => t.x > 0, isRight: () => t.x < 0 };
    }
    __name(An, "An");
    a(An, "makeCollision");
    function At(...e) {
      return { id: "pos", pos: f(...e), moveBy(...t) {
        var _a;
        let r = f(...t), o = r.x, d = r.y, i2 = null;
        if (this.solid && ((_a = this.area) == null ? void 0 : _a.shape) === "rect") {
          let l = this.worldArea();
          g.root.every((h2) => {
            var _a2;
            if (!this.exists() || h2 === this || !h2.solid || ((_a2 = h2.area) == null ? void 0 : _a2.shape) !== "rect")
              return;
            let w = h2.worldArea(), m = ct(w, l);
            if (re(m, f(0))) {
              let L = Math.min(Math.abs(m.p1.x), Math.abs(m.p2.x), Math.abs(m.p1.y), Math.abs(m.p2.y)), E = (() => {
                switch (L) {
                  case Math.abs(m.p1.x):
                    return f(L, 0);
                  case Math.abs(m.p2.x):
                    return f(-L, 0);
                  case Math.abs(m.p1.y):
                    return f(0, L);
                  case Math.abs(m.p2.y):
                    return f(0, -L);
                }
              })();
              this.pos = this.pos.sub(E), l = this.worldArea(), m = ct(w, l);
            }
            let b = { p1: f(0), p2: f(o, d) }, y = 1, C = m.p1, W = f(m.p1.x, m.p2.y), Q = m.p2, $ = f(m.p2.x, m.p1.y), we = 0, De = { right: { p1: C, p2: W }, top: { p1: W, p2: Q }, left: { p1: Q, p2: $ }, bottom: { p1: $, p2: C } };
            for (let L in De) {
              let E = De[L];
              if (o === 0 && E.p1.x === 0 && E.p2.x === 0 || d === 0 && E.p1.y === 0 && E.p2.y === 0) {
                y = 1;
                break;
              }
              let F = Ft(b, E);
              F != null && (we++, F < y && (y = F));
            }
            if (y < 1 && !(y === 0 && we == 1 && !re(m, f(o, d)))) {
              let L = f(-o * (1 - y), -d * (1 - y));
              o *= y, d *= y, i2 = An(h2, L);
            }
          });
        }
        return this.pos.x += o, this.pos.y += d, i2 && (this.trigger("collide", i2.target, i2), i2.target.trigger("collide", this, An(this, i2.displacement.scale(-1)))), i2;
      }, move(...t) {
        return this.moveBy(f(...t).scale(X()));
      }, moveTo(...t) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.moveTo(f(t[0], t[1]), t[2]);
        let r = t[0], o = t[1];
        if (o === void 0) {
          this.pos = f(r);
          return;
        }
        let d = r.sub(this.pos);
        if (d.len() <= o * X()) {
          this.pos = f(r);
          return;
        }
        this.move(d.unit().scale(o));
      }, screenPos() {
        return this.fixed ? this.pos : et(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      } };
    }
    __name(At, "At");
    a(At, "pos");
    function nt(...e) {
      return e.length === 0 ? nt(1) : { id: "scale", scale: f(...e), scaleTo(...t) {
        this.scale = f(...t);
      }, inspect() {
        return typeof this.scale == "number" ? `${Ae(this.scale, 2)}` : `(${Ae(this.scale.x, 2)}, ${Ae(this.scale.y, 2)})`;
      } };
    }
    __name(nt, "nt");
    a(nt, "scale");
    function mi(e) {
      return { id: "rotate", angle: e != null ? e : 0, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(mi, "mi");
    a(mi, "rotate");
    function pi(...e) {
      return { id: "color", color: T(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(pi, "pi");
    a(pi, "color");
    function Ae(e, t) {
      return Number(e.toFixed(t));
    }
    __name(Ae, "Ae");
    a(Ae, "toFixed");
    function gi(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${Ae(this.opacity, 2)}`;
      } };
    }
    __name(gi, "gi");
    a(gi, "opacity");
    function Rt(e) {
      if (!e)
        throw new Error("Please define an origin");
      return { id: "origin", origin: e, inspect() {
        return typeof this.origin == "string" ? this.origin : this.origin.toString();
      } };
    }
    __name(Rt, "Rt");
    a(Rt, "origin");
    function wi(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(wi, "wi");
    a(wi, "z");
    function Ui(e, t) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: t != null ? t : f(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Ui, "Ui");
    a(Ui, "follow");
    function bi(e, t) {
      let r = typeof e == "number" ? q.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(r.scale(t));
      } };
    }
    __name(bi, "bi");
    a(bi, "move");
    function Rn(e = {}) {
      let t = 0, r = false;
      return { id: "outview", require: ["pos", "area"], isOutOfView() {
        var _a;
        let o = f((_a = e.offset) != null ? _a : 0), d = new ke(f(0, 0).sub(o), f(V(), N()).add(o));
        return !It(this.screenArea(), d);
      }, onExitView(o) {
        return this.on("exitView", o);
      }, onEnterView(o) {
        return this.on("enterView", o);
      }, update() {
        if (this.isOutOfView()) {
          if (r || (this.trigger("exitView"), r = true), e.delay && (t += X(), t < e.delay))
            return;
          e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy();
        } else
          r && (this.trigger("enterView"), r = false), t = 0, e.hide && (this.hidden = false), e.pause && (this.paused = false);
      }, inspect() {
        return this.isOutOfView();
      } };
    }
    __name(Rn, "Rn");
    a(Rn, "outview");
    function yi(e = {}) {
      return __spreadProps(__spreadValues({}, Rn({ destroy: true, onExitView: e.onCleanup, offset: e.offset, delay: e.delay })), { id: "cleanup" });
    }
    __name(yi, "yi");
    a(yi, "cleanup");
    function xi(e = {}) {
      var _a, _b;
      let t = {};
      return { id: "area", add() {
        this.area.cursor && this.onHover(() => pn(this.area.cursor));
      }, area: { shape: "rect", offset: (_a = e.offset) != null ? _a : f(0), width: e.width, height: e.height, scale: (_b = e.scale) != null ? _b : f(1), cursor: e.cursor }, isClicked() {
        return Je() && this.isHovering();
      }, isHovering() {
        let r = this.fixed ? H() : wn(H());
        return this.hasPoint(r);
      }, isColliding(r) {
        if (!r.area || !r.exists())
          return false;
        let o = this.worldArea(), d = r.worldArea();
        return rr(o, d);
      }, isTouching(r) {
        if (!r.area || !r.exists())
          return false;
        let o = this.worldArea(), d = r.worldArea();
        return Hn(o, d);
      }, onClick(r) {
        return this.onUpdate(() => {
          this.isClicked() && r();
        });
      }, onHover(r, o) {
        return this.onUpdate(() => {
          this.isHovering() ? r() : o && o();
        });
      }, onCollide(r, o) {
        let d = this.onUpdate(() => this._checkCollisions(r, o)), i2 = this.on("collide", (l, h2) => l.is(r) && o(l, h2));
        return () => [d, i2].forEach((l) => l());
      }, hasPoint(r) {
        return Bt(this.worldArea(), r);
      }, pushOut(r) {
        var _a2;
        if (r === this || ((_a2 = r.area) == null ? void 0 : _a2.shape) !== "rect")
          return null;
        let o = this.worldArea(), d = r.worldArea(), i2 = ct(o, d);
        if (!re(i2, f(0)))
          return null;
        let l = Math.min(Math.abs(i2.p1.x), Math.abs(i2.p2.x), Math.abs(i2.p1.y), Math.abs(i2.p2.y)), h2 = (() => {
          switch (l) {
            case Math.abs(i2.p1.x):
              return f(l, 0);
            case Math.abs(i2.p2.x):
              return f(-l, 0);
            case Math.abs(i2.p1.y):
              return f(0, l);
            case Math.abs(i2.p2.y):
              return f(0, -l);
          }
        })();
        this.pos = this.pos.add(h2);
      }, pushOutAll() {
        g.root.every(this.pushOut);
      }, _checkCollisions(r) {
        g.root.every(r, (o) => {
          this === o || !this.exists() || t[o._id] || this.isColliding(o) && (this.trigger("collide", o, null), t[o._id] = o);
        });
        for (let o in t) {
          let d = t[o];
          this.isColliding(d) || delete t[o];
        }
      }, worldArea() {
        var _a2, _b2, _c, _d;
        let r = (_a2 = this.area.width) != null ? _a2 : this.width, o = (_b2 = this.area.height) != null ? _b2 : this.height;
        if (r == null || o == null)
          throw new Error("Failed to get area dimension");
        let d = f((_c = this.scale) != null ? _c : 1).scale(this.area.scale);
        r *= d.x, o *= d.y;
        let i2 = $e(this.origin || lt), l = ((_d = this.pos) != null ? _d : f(0)).add(this.area.offset).sub(i2.add(1, 1).scale(0.5).scale(r, o));
        return { shape: "rect", p1: l, p2: f(l.x + r, l.y + o) };
      }, screenArea() {
        let r = this.worldArea();
        return this.fixed ? r : { shape: "rect", p1: et(r.p1), p2: et(r.p2) };
      } };
    }
    __name(xi, "xi");
    a(xi, "area");
    function Ie(e) {
      return { color: e.color, opacity: e.opacity, origin: e.origin, outline: e.outline, fixed: e.fixed, shader: e.shader, uniform: e.uniform };
    }
    __name(Ie, "Ie");
    a(Ie, "getRenderProps");
    function Dt(e, t = {}) {
      var _a;
      let r = null, o = null;
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let d = a((i2, l, h2, w) => {
        let m = f(1, 1);
        return h2 && w ? (m.x = h2 / (i2.width * l.w), m.y = w / (i2.height * l.h)) : h2 ? (m.x = h2 / (i2.width * l.w), m.y = m.x) : w && (m.y = w / (i2.height * l.h), m.x = m.y), m;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: t.frame || 0, quad: t.quad || new I(0, 0, 1, 1), animSpeed: (_a = t.animSpeed) != null ? _a : 1, draw() {
        !r || en(__spreadProps(__spreadValues({}, Ie(this)), { sprite: r, frame: this.frame, quad: this.quad, flipX: t.flipX, flipY: t.flipY, tiled: t.tiled, width: t.width, height: t.height }));
      }, update() {
        if (!r) {
          let l = Qt(e);
          if (!l || !l.data)
            return;
          let h2 = l.data.frames[0].clone();
          t.quad && (h2 = h2.scale(t.quad));
          let w = d(l.data.tex, h2, t.width, t.height);
          this.width = l.data.tex.width * h2.w * w.x, this.height = l.data.tex.height * h2.h * w.y, t.anim && this.play(t.anim), r = l.data, this.trigger("spriteLoaded", r);
        }
        if (!o)
          return;
        let i2 = r.anims[o.name];
        if (typeof i2 == "number") {
          this.frame = i2;
          return;
        }
        if (i2.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        o.timer += X() * this.animSpeed, o.timer >= 1 / o.speed && (o.timer = 0, i2.from > i2.to ? (this.frame--, this.frame < i2.to && (o.loop ? this.frame = i2.from : (this.frame++, o.onEnd(), this.stop()))) : (this.frame++, this.frame > i2.to && (o.loop ? this.frame = i2.from : (this.frame--, o.onEnd(), this.stop()))));
      }, play(i2, l = {}) {
        var _a2, _b, _c, _d, _e2, _f, _g;
        if (!r) {
          this.on("spriteLoaded", () => {
            this.play(i2, l);
          });
          return;
        }
        let h2 = r.anims[i2];
        if (!h2)
          throw new Error(`Anim not found: ${i2}`);
        o && this.stop(), o = typeof h2 == "number" ? { name: i2, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: i2, timer: 0, loop: (_b = (_a2 = l.loop) != null ? _a2 : h2.loop) != null ? _b : false, pingpong: (_d = (_c = l.pingpong) != null ? _c : h2.pingpong) != null ? _d : false, speed: (_f = (_e2 = l.speed) != null ? _e2 : h2.speed) != null ? _f : 10, onEnd: (_g = l.onEnd) != null ? _g : () => {
        } }, this.frame = typeof h2 == "number" ? h2 : h2.from, this.trigger("animStart", i2);
      }, stop() {
        if (!o)
          return;
        let i2 = o.name;
        o = null, this.trigger("animEnd", i2);
      }, numFrames() {
        return r ? r.frames.length : 0;
      }, curAnim() {
        return o == null ? void 0 : o.name;
      }, flipX(i2) {
        t.flipX = i2;
      }, flipY(i2) {
        t.flipY = i2;
      }, onAnimEnd(i2, l) {
        return this.on("animEnd", (h2) => {
          h2 === i2 && l();
        });
      }, onAnimStart(i2, l) {
        return this.on("animStart", (h2) => {
          h2 === i2 && l();
        });
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(Dt, "Dt");
    a(Dt, "sprite");
    function vi(e, t = {}) {
      function r(o) {
        var _a, _b;
        let d = me(__spreadProps(__spreadValues({}, Ie(o)), { text: o.text + "", size: o.textSize, font: o.font, width: t.width && o.width, align: o.align, letterSpacing: o.letterSpacing, lineSpacing: o.lineSpacing, transform: o.transform, styles: o.styles }));
        return t.width || (o.width = d.width / (((_a = o.scale) == null ? void 0 : _a.x) || 1)), o.height = d.height / (((_b = o.scale) == null ? void 0 : _b.y) || 1), d;
      }
      __name(r, "r");
      return a(r, "update"), { id: "text", text: e, textSize: t.size, font: t.font, width: t.width, height: 0, align: t.align, lineSpacing: t.lineSpacing, letterSpacing: t.letterSpacing, transform: t.transform, styles: t.styles, load() {
        r(this);
      }, draw() {
        pe(r(this));
      } };
    }
    __name(vi, "vi");
    a(vi, "text");
    function Ei(e, t, r = {}) {
      return { id: "rect", width: e, height: t, radius: r.radius || 0, draw() {
        j(__spreadProps(__spreadValues({}, Ie(this)), { width: this.width, height: this.height, radius: this.radius }));
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Ei, "Ei");
    a(Ei, "rect");
    function Ti(e, t) {
      return { id: "rect", width: e, height: t, draw() {
        Te(__spreadProps(__spreadValues({}, Ie(this)), { width: this.width, height: this.height }));
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Ti, "Ti");
    a(Ti, "uvquad");
    function Si(e) {
      return { id: "circle", radius: e, draw() {
        Ut(__spreadProps(__spreadValues({}, Ie(this)), { radius: this.radius }));
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Si, "Si");
    a(Si, "circle");
    function Ai(e = 1, t = T(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: t } };
    }
    __name(Ai, "Ai");
    a(Ai, "outline");
    function Dn(e, t) {
      let r = new de();
      return e && t && r.pushd(new fe(e, t)), { id: "timer", wait(o, d) {
        return r.pushd(new fe(o, d));
      }, update() {
        r.forEach((o, d) => {
          o.tick(X()) && r.delete(d);
        });
      } };
    }
    __name(Dn, "Dn");
    a(Dn, "timer");
    let Ri = 640, Di = 65536;
    function Ci(e = {}) {
      var _a, _b, _c;
      let t = 0, r = null, o = null, d = true;
      return { id: "body", require: ["pos", "area"], jumpForce: (_a = e.jumpForce) != null ? _a : Ri, weight: (_b = e.weight) != null ? _b : 1, solid: (_c = e.solid) != null ? _c : true, update() {
        var _a2;
        let i2 = false;
        if (r) {
          let l = this.worldArea(), h2 = r.worldArea(), w = l.p2.y, m = h2.p1.y, b = l.p1.x, y = l.p2.x, C = h2.p1.x, W = h2.p2.x;
          !r.exists() || w !== m || y < C || b > W ? (this.trigger("fall", r), r = null, o = null, i2 = true) : o && r.pos && (this.pos = this.pos.add(r.pos.sub(o)), o = r.pos.clone());
        }
        if (!r) {
          let l = this.move(0, t);
          l && (l.isBottom() ? (r = l.target, t = 0, r.pos && (o = r.pos.clone()), i2 || (this.trigger("ground", r), d = true)) : l.isTop() && (t = 0, this.trigger("headbutt", l.target))), t += Sn() * this.weight * X(), t = Math.min(t, (_a2 = e.maxVel) != null ? _a2 : Di);
        }
      }, curPlatform() {
        return r;
      }, isGrounded() {
        return r !== null;
      }, isFalling() {
        return t > 0;
      }, jump(i2) {
        r = null, o = null, t = -i2 || -this.jumpForce;
      }, doubleJump(i2) {
        this.isGrounded() ? this.jump(i2) : d && (d = false, this.jump(i2), this.trigger("doubleJump"));
      }, onGround(i2) {
        return this.on("ground", i2);
      }, onFall(i2) {
        return this.on("fall", i2);
      }, onHeadbutt(i2) {
        return this.on("headbutt", i2);
      }, onDoubleJump(i2) {
        return this.on("doubleJump", i2);
      } };
    }
    __name(Ci, "Ci");
    a(Ci, "body");
    function Li(e, t = {}) {
      return { id: "shader", shader: e, uniform: t };
    }
    __name(Li, "Li");
    a(Li, "shader");
    function Mi() {
      return { id: "solid", require: ["area"], solid: true };
    }
    __name(Mi, "Mi");
    a(Mi, "solid");
    function Wi() {
      return { id: "fixed", fixed: true };
    }
    __name(Wi, "Wi");
    a(Wi, "fixed");
    function Cn() {
      return { id: "stay", stay: true };
    }
    __name(Cn, "Cn");
    a(Cn, "stay");
    function qi(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(t = 1) {
        this.setHP(e - t), this.trigger("hurt");
      }, heal(t = 1) {
        this.setHP(e + t), this.trigger("heal");
      }, hp() {
        return e;
      }, setHP(t) {
        e = t, e <= 0 && this.trigger("death");
      }, onHurt(t) {
        return this.on("hurt", t);
      }, onHeal(t) {
        return this.on("heal", t);
      }, onDeath(t) {
        return this.on("death", t);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(qi, "qi");
    a(qi, "health");
    function Pi(e, t = {}) {
      var _a;
      if (e == null)
        throw new Error("lifespan() requires time");
      let r = 0, o = (_a = t.fade) != null ? _a : 0, d = Math.max(e - o, 0);
      return { id: "lifespan", update() {
        r += X(), r >= d && (this.opacity = at(r, d, e, 1, 0)), r >= e && this.destroy();
      } };
    }
    __name(Pi, "Pi");
    a(Pi, "lifespan");
    function Fi(e, t, r) {
      if (!e)
        throw new Error("state() requires an initial state");
      let o = {};
      function d(w) {
        o[w] || (o[w] = { enter: new Z(), leave: new Z(), update: new Z(), draw: new Z() });
      }
      __name(d, "d");
      a(d, "initStateEvents");
      function i2(w, m, b) {
        return d(m), o[m][w].add(b);
      }
      __name(i2, "i");
      a(i2, "on");
      function l(w, m, ...b) {
        d(m), o[m][w].trigger(...b);
      }
      __name(l, "l");
      a(l, "trigger");
      let h2 = false;
      return { id: "state", state: e, enterState(w, ...m) {
        if (h2 = true, t && !t.includes(w))
          throw new Error(`State not found: ${w}`);
        let b = this.state;
        if (r) {
          if (!(r == null ? void 0 : r[b]))
            return;
          let y = typeof r[b] == "string" ? [r[b]] : r[b];
          if (!y.includes(w))
            throw new Error(`Cannot transition state from "${b}" to "${w}". Available transitions: ${y.map((C) => `"${C}"`).join(", ")}`);
        }
        l("leave", b, ...m), this.state = w, l("enter", w, ...m), l("enter", `${b} -> ${w}`, ...m);
      }, onStateTransition(w, m, b) {
        return i2("enter", `${w} -> ${m}`, b);
      }, onStateEnter(w, m) {
        return i2("enter", w, m);
      }, onStateUpdate(w, m) {
        return i2("update", w, m);
      }, onStateDraw(w, m) {
        return i2("draw", w, m);
      }, onStateLeave(w, m) {
        return i2("leave", w, m);
      }, update() {
        h2 || (l("enter", e), h2 = true), l("update", this.state);
      }, draw() {
        l("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Fi, "Fi");
    a(Fi, "state");
    function rt(e) {
      x.loaded ? e() : g.ev.on("load", e);
    }
    __name(rt, "rt");
    a(rt, "onLoad");
    function Oi(e, t) {
      g.scenes[e] = t;
    }
    __name(Oi, "Oi");
    a(Oi, "scene");
    function Ii(e, ...t) {
      if (!g.scenes[e])
        throw new Error(`Scene not found: ${e}`);
      g.ev.onOnce("frameEnd", () => {
        g.ev = new he(), g.objEvents = new he(), g.root.every((r) => {
          r.stay || g.root.remove(r);
        }), g.root.clearEvents(), g.timers = new de(), g.cam = { pos: it(), scale: f(1), angle: 0, shake: 0, transform: new M() }, g.gravity = yr, g.scenes[e](...t), s.debug !== false && En(), s.burp && Tn();
      });
    }
    __name(Ii, "Ii");
    a(Ii, "go");
    function Bi(e, t) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return t ? (Ln(e, t), t) : null;
      }
    }
    __name(Bi, "Bi");
    a(Bi, "getData");
    function Ln(e, t) {
      window.localStorage[e] = JSON.stringify(t);
    }
    __name(Ln, "Ln");
    a(Ln, "setData");
    function Mn(e) {
      let t = e(Re);
      for (let r in t)
        Re[r] = t[r], s.global !== false && (window[r] = t[r]);
      return Re;
    }
    __name(Mn, "Mn");
    a(Mn, "plug");
    function it() {
      return f(V() / 2, N() / 2);
    }
    __name(it, "it");
    a(it, "center");
    function Vi(e, t) {
      return { id: "grid", gridPos: t.clone(), setGridPos(...r) {
        let o = f(...r);
        this.gridPos = o.clone(), this.pos = f(e.offset().x + this.gridPos.x * e.gridWidth(), e.offset().y + this.gridPos.y * e.gridHeight());
      }, moveLeft() {
        this.setGridPos(this.gridPos.add(f(-1, 0)));
      }, moveRight() {
        this.setGridPos(this.gridPos.add(f(1, 0)));
      }, moveUp() {
        this.setGridPos(this.gridPos.add(f(0, -1)));
      }, moveDown() {
        this.setGridPos(this.gridPos.add(f(0, 1)));
      } };
    }
    __name(Vi, "Vi");
    a(Vi, "grid");
    function _i(e, t) {
      if (!t.width || !t.height)
        throw new Error("Must provide level grid width & height.");
      let r = [], o = f(t.pos || f(0)), d = 0, i2 = { offset() {
        return o.clone();
      }, gridWidth() {
        return t.width;
      }, gridHeight() {
        return t.height;
      }, getPos(...l) {
        let h2 = f(...l);
        return f(o.x + h2.x * t.width, o.y + h2.y * t.height);
      }, spawn(l, ...h2) {
        let w = f(...h2), m = (() => {
          if (t[l]) {
            if (typeof t[l] != "function")
              throw new Error("Level symbol def must be a function returning a component list");
            return t[l](w);
          } else if (t.any)
            return t.any(l, w);
        })();
        if (!m)
          return;
        let b = f(o.x + w.x * t.width, o.y + w.y * t.height);
        for (let C of m)
          if (C.id === "pos") {
            b.x += C.pos.x, b.y += C.pos.y;
            break;
          }
        m.push(At(b)), m.push(Vi(this, w));
        let y = g.root.add(m);
        return r.push(y), y;
      }, width() {
        return d * t.width;
      }, height() {
        return e.length * t.height;
      }, destroy() {
        for (let l of r)
          l.destroy();
      } };
      return e.forEach((l, h2) => {
        let w = l.split("");
        d = Math.max(w.length, d), w.forEach((m, b) => {
          i2.spawn(m, f(b, h2));
        });
      }), i2;
    }
    __name(_i, "_i");
    a(_i, "addLevel");
    function Wn(e) {
      let t = u.canvas.captureStream(e), r = R.ctx.createMediaStreamDestination();
      R.masterNode.connect(r);
      let o = new MediaRecorder(t), d = [];
      return o.ondataavailable = (i2) => {
        i2.data.size > 0 && d.push(i2.data);
      }, o.onerror = () => {
        R.masterNode.disconnect(r), t.getTracks().forEach((i2) => i2.stop());
      }, o.start(), { resume() {
        o.resume();
      }, pause() {
        o.pause();
      }, stop() {
        return o.stop(), R.masterNode.disconnect(r), t.getTracks().forEach((i2) => i2.stop()), new Promise((i2) => {
          o.onstop = () => {
            i2(new Blob(d, { type: "video/mp4" }));
          };
        });
      }, download(i2 = "kaboom.mp4") {
        this.stop().then((l) => Nt(i2, l));
      } };
    }
    __name(Wn, "Wn");
    a(Wn, "record");
    function Ni() {
      return document.activeElement === u.canvas;
    }
    __name(Ni, "Ni");
    a(Ni, "isFocused");
    let qn = g.root.add.bind(g.root), ki = g.root.readd.bind(g.root), Gi = g.root.remove.bind(g.root), ji = g.root.removeAll.bind(g.root), Xi = g.root.get.bind(g.root), $i = g.root.every.bind(g.root), Yi = g.root.revery.bind(g.root);
    function Pn(e = 2, t = 1) {
      let r = 0;
      return { id: "explode", require: ["scale"], update() {
        let o = Math.sin(r * e) * t;
        o < 0 && this.destroy(), this.scale = f(o), r += X();
      } };
    }
    __name(Pn, "Pn");
    a(Pn, "explode");
    let Ki = ve(null, fr), Hi = ve(null, mr);
    function zi(e, t = {}) {
      var _a, _b;
      let r = qn([At(e), Cn()]), o = (t.speed || 1) * 5, d = t.scale || 1;
      r.add([Dt(Hi), nt(0), Rt("center"), Pn(o, d), ...((_a = t.boomComps) != null ? _a : () => [])()]);
      let i2 = r.add([Dt(Ki), nt(0), Rt("center"), Dn(0.4 / o, () => i2.use(Pn(o, d))), ...((_b = t.kaComps) != null ? _b : () => [])()]);
      return i2.onDestroy(() => r.destroy()), r;
    }
    __name(zi, "zi");
    a(zi, "addKaboom");
    function Fn() {
      g.timers.forEach((e, t) => {
        e.time -= X(), e.time <= 0 && (e.action(), g.timers.delete(t));
      }), g.root.update();
    }
    __name(Fn, "Fn");
    a(Fn, "updateFrame");
    function Qi() {
      let e = g.cam, t = q.fromAngle(Ge(0, 360)).scale(e.shake);
      e.shake = Ve(e.shake, 0, 5 * X()), e.transform = new M().translate(it()).scale(e.scale).rotateZ(e.angle).translate(e.pos.scale(-1).add(t)), g.root.draw(), ie();
    }
    __name(Qi, "Qi");
    a(Qi, "drawFrame");
    function Ji() {
      let e = ee();
      se(() => {
        let t = V() / 2, r = 24, o = f(V() / 2, N() / 2).sub(f(t / 2, r / 2));
        j({ pos: f(0), width: V(), height: N(), color: T(0, 0, 0) }), j({ pos: o, width: t, height: r, fill: false, outline: { width: 4 } }), j({ pos: o, width: t * e, height: r });
      }), g.ev.trigger("loading", e);
    }
    __name(Ji, "Ji");
    a(Ji, "drawLoadScreen");
    function On(e, t) {
      se(() => {
        let r = f(8);
        te(), O(e);
        let o = me({ text: t, font: dt, size: 16, pos: r, color: T(255, 255, 255), fixed: true }), d = o.width + r.x * 2, i2 = o.height + r.x * 2;
        e.x + d >= V() && O(f(-d, 0)), e.y + i2 >= N() && O(f(0, -i2)), j({ width: d, height: i2, color: T(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), pe(o), K();
      });
    }
    __name(On, "On");
    a(On, "drawInspectText");
    function Zi() {
      var _a;
      if (A.inspect) {
        let e = null, t = v.fromArray((_a = s.inspectColor) != null ? _a : [0, 0, 255]);
        if (g.root.every((r) => {
          if (!r.area || r.hidden)
            return;
          e || r.isHovering() && (e = r);
          let o = e === r ? 8 : 4, d = r.worldArea(), i2 = d.p2.x - d.p1.x, l = d.p2.y - d.p1.y;
          j({ pos: d.p1, width: i2, height: l, outline: { width: o, color: t }, fill: false, fixed: r.fixed });
        }), e) {
          let r = [], o = e.inspect();
          for (let d in o)
            o[d] ? r.push(`${d}: ${o[d]}`) : r.push(`${d}`);
          On(Hr(H()), r.join(`
`));
        }
        On(f(8), `FPS: ${A.fps()}`);
      }
      A.paused && se(() => {
        te(), O(V(), 0), O(-8, 8);
        let e = 32;
        j({ width: e, height: e, origin: "topright", color: T(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let t = 1; t <= 2; t++)
          j({ width: 4, height: e * 0.6, origin: "center", pos: f(-e / 3 * t, e * 0.5), color: T(255, 255, 255), radius: 2, fixed: true });
        K();
      }), A.timeScale !== 1 && se(() => {
        te(), O(V(), N()), O(-8, -8);
        let e = 8, t = me({ text: A.timeScale.toFixed(1), font: dt, size: 16, color: T(255, 255, 255), pos: f(-e), origin: "botright", fixed: true });
        j({ width: t.width + e * 2 + e * 4, height: t.height + e * 2, origin: "botright", color: T(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let r = 0; r < 2; r++) {
          let o = A.timeScale < 1;
          nn({ p1: f(-t.width - e * (o ? 2 : 3.5), -e), p2: f(-t.width - e * (o ? 2 : 3.5), -e - t.height), p3: f(-t.width - e * (o ? 3.5 : 2), -e - t.height / 2), pos: f(-r * e * 1 + (o ? -e * 0.5 : 0), 0), color: T(255, 255, 255), fixed: true });
        }
        pe(t), K();
      }), A.curRecording && se(() => {
        te(), O(0, N()), O(24, -24), Ut({ radius: 12, color: T(255, 0, 0), opacity: Wt(0, 1, Tt() * 4), fixed: true }), K();
      }), A.showLog && g.logs.length > 0 && se(() => {
        var _a2;
        te(), O(0, N()), O(8, -8);
        let e = 8, t = (_a2 = s.logMax) != null ? _a2 : Cs;
        g.logs.length > t && (g.logs = g.logs.slice(0, t));
        let r = me({ text: g.logs.join(`
`), font: dt, pos: f(e, -e), origin: "botleft", size: 16, width: V() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: T(127, 127, 127) }, info: { color: T(255, 255, 255) }, error: { color: T(255, 0, 127) } } });
        j({ width: r.width + e * 2, height: r.height + e * 2, origin: "botleft", color: T(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), pe(r), K();
      });
    }
    __name(Zi, "Zi");
    a(Zi, "drawDebug"), s.debug !== false && En(), s.burp && Tn();
    function es(e) {
      g.ev.on("loading", e);
    }
    __name(es, "es");
    a(es, "onLoading");
    function ts(e) {
      g.ev.on("error", e);
    }
    __name(ts, "ts");
    a(ts, "onError");
    function In(e) {
      Bn(() => {
        se(() => {
          let o = V(), d = N(), i2 = { size: 24, width: o - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: dt };
          j({ width: o, height: d, color: T(0, 0, 255) });
          let l = me(__spreadProps(__spreadValues({}, i2), { text: e.name, pos: f(32), color: T(255, 128, 0) }));
          pe(l), un(__spreadProps(__spreadValues({}, i2), { text: e.message, pos: f(32, 32 + l.height + 16) })), K(), g.ev.trigger("error", e);
        });
      });
    }
    __name(In, "In");
    a(In, "handleErr");
    function Bn(e) {
      u.loopID !== null && cancelAnimationFrame(u.loopID);
      let t = a((r) => {
        if (u.stopped)
          return;
        if (document.visibilityState !== "visible") {
          u.loopID = requestAnimationFrame(t);
          return;
        }
        let o = r / 1e3, d = o - u.realTime;
        u.realTime = o, u.skipTime || (u.dt = d, u.time += X(), u.fpsCounter.tick(u.dt)), u.skipTime = false, u.numFrames++, Br(), e(), Vr();
        for (let i2 in u.keyStates)
          u.keyStates[i2] = Sr(u.keyStates[i2]);
        for (let i2 in u.mouseStates)
          u.mouseStates[i2] = Sr(u.mouseStates[i2]);
        u.charInputted = [], u.isMouseMoved = false, u.isKeyPressed = false, u.isKeyPressedRepeat = false, u.isKeyReleased = false, u.loopID = requestAnimationFrame(t), g.ev.trigger("frameEnd");
      }, "frame");
      t(0);
    }
    __name(Bn, "Bn");
    a(Bn, "run");
    function ns() {
      g.ev.onOnce("frameEnd", () => {
        u.stopped = true, c2.clear(c2.COLOR_BUFFER_BIT | c2.DEPTH_BUFFER_BIT | c2.STENCIL_BUFFER_BIT);
        let e = c2.getParameter(c2.MAX_TEXTURE_IMAGE_UNITS);
        for (let t = 0; t < e; t++)
          c2.activeTexture(c2.TEXTURE0 + t), c2.bindTexture(c2.TEXTURE_2D, null), c2.bindTexture(c2.TEXTURE_CUBE_MAP, null);
        c2.bindBuffer(c2.ARRAY_BUFFER, null), c2.bindBuffer(c2.ELEMENT_ARRAY_BUFFER, null), c2.bindRenderbuffer(c2.RENDERBUFFER, null), c2.bindFramebuffer(c2.FRAMEBUFFER, null), n.forEach((t) => t()), c2.deleteBuffer(p.vbuf), c2.deleteBuffer(p.ibuf);
        for (let t in k)
          u.canvas.removeEventListener(t, k[t]);
        for (let t in Fe)
          document.removeEventListener(t, Fe[t]);
        for (let t in ge)
          window.removeEventListener(t, ge[t]);
      });
    }
    __name(ns, "ns");
    a(ns, "quit"), ne("apl386", ar, 45, 74), ne("apl386o", ur, 45, 74), ne("sink", cr, 6, 8, { chars: "\u2588\u263A\u263B\u2665\u2666\u2663\u2660\u25CF\u25CB\u25AA\u25A1\u25A0\u25D8\u266A\u266B\u2261\u25BA\u25C4\u2302\xDE\xC0\xDF\xD7\xA5\u2191\u2193\u2192\u2190\u25CC\u25CF\u25BC\u25B2 !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u03A7\u2591\u2592\u2593\u1E00\u1E01\u1E02\u2502\u252C\u2524\u250C\u2510\u1E03\u1E04\u253C\u1E05\u1E06\u1E07\u1E08\u1E09\u1E0A\u1E0B\u1E0C\u2500\u251C\u2534\u2514\u2518\u1E0D\u1E0E\u205E\u1E0F\u1E10\u1E11\u1E12\u1E13\u1E14\u1E15\u1E16\u1E17\u1E18\u2584\u1E19\u1E1A\u1E1B\u1E1C\u2026\u1E1D\u1E1E\u1E1F\u1E20\u1E21\u1E22\u1E23\u1E24\u1E25\u1E26\u258C\u2590\u1E27\u1E28\u1E29\u1E2A\u1E2B\u1E2C\u1E2D\u1E2E\u1E2F\u1E30\u1E31\u1E32\u1E33\u1E34\u1E35\u1E36\u1E37\u1E38\u1E39\u1E3A\u1E3B\u1E3C\u1E3D\u1E3E\u1E3F\u1E40\u1E41\u1E42\u1E43\u1E44\u1E45\u1E46\u1E47\u1E48\u1E49\u1E4A\u1E4B\u1E4C\u1E4D\u1E4E\u1E4F\u1E50\u1E51\u1E52\u1E53\u1E54\u1E55\u1E56\u1E57\u1E58\u1E59\u1E5A\u1E5B\u1E5C\u1E5D\u1E5E\u1E5F\u1E60\u1E61\u1E62\u1E63\u1E64\u1E65\u1E66\u1E67\u1E68\u1E69\u1E6A\u1E6B\u1E6C\u1E6D\u1E6E\u1E6F\u1E70\u1E71\u1E72\u1E73\u1E74\u1E75\u1E76\u1E77\u1E78\u1E79\u1E7A\u1E7B\u1E7C" }), ne("sinko", lr, 8, 10), Bn(() => {
      cn();
      let e = ee();
      x.loaded || e === 1 && (x.loaded = true, g.ev.trigger("load")), !x.loaded && s.loadingScreen !== false ? Ji() : (g.ev.trigger("input"), A.paused || Fn(), Qi(), s.debug !== false && Zi());
    });
    let Re = { loadRoot: Ye, loadProgress: ee, loadSprite: ve, loadSpriteAtlas: $t, loadSound: Mr, loadBitmapFont: ne, loadFont: pt, loadShader: Lr, loadAseprite: Cr, loadPedit: Dr, loadBean: Wr, load: Me, getSprite: Yt, getSound: Kt, getFont: qr, getBitmapFont: Ht, getShader: zt, Asset: P, SpriteData: S, SoundData: D, width: V, height: N, center: it, dt: X, time: Tt, screenshot: mn, record: Wn, isFocused: Ni, cursor: pn, fullscreen: Qr, isFullscreen: gn, onLoad: rt, onLoading: es, onError: ts, isTouch: () => u.isTouch, camPos: Jr, camScale: Zr, camRot: ei, shake: ti, toScreen: et, toWorld: wn, gravity: Sn, add: qn, make: St, destroy: Gi, destroyAll: ji, get: Xi, every: $i, revery: Yi, readd: ki, pos: At, scale: nt, rotate: mi, color: pi, opacity: gi, origin: Rt, area: xi, sprite: Dt, text: vi, rect: Ei, circle: Si, uvquad: Ti, outline: Ai, body: Ci, shader: Li, timer: Dn, solid: Mi, fixed: Wi, stay: Cn, health: qi, lifespan: Pi, z: wi, move: bi, outview: Rn, cleanup: yi, follow: Ui, state: Fi, on: Oe, onUpdate: tt, onDraw: ni, onCollide: ri, onClick: ii, onHover: si, onKeyDown: bn, onKeyPress: z2, onKeyPressRepeat: yn, onKeyRelease: xn, onMouseDown: ai, onMousePress: vn, onMouseRelease: ui, onMouseMove: ci, onCharInput: li, onTouchStart: di, onTouchMove: hi, onTouchEnd: fi, mousePos: H, mouseDeltaPos: ln, isKeyDown: fn, isKeyPressed: Ze, isKeyPressedRepeat: hn, isKeyReleased: Et, isMouseDown: xt, isMousePressed: Je, isMouseReleased: vt, isMouseMoved: dn, loop: oi, wait: Un, play: We, volume: Or, burp: Zt, audioCtx: R.ctx, Timer: fe, Line: ue, Rect: ke, Circle: ot, Vec2: q, Color: v, Mat4: M, Quad: I, RNG: Ne, rand: Ge, randi: qt, randSeed: $n, vec2: f, rgb: T, hsl2rgb: jn, quad: Xn, choose: Kn, chance: Yn, lerp: Ve, map: at, mapc: Gn, wave: Wt, deg2rad: ce, rad2deg: Mt, testLineLine: ae, testRectRect: Pt, testRectLine: ut, testRectPoint: re, drawSprite: en, drawText: un, formatText: me, drawRect: j, drawLine: Pe, drawLines: tn, drawTriangle: nn, drawCircle: Ut, drawEllipse: rn, drawUVQuad: Te, drawPolygon: Se, drawFormattedText: pe, drawMasked: $r, drawSubtracted: Yr, pushTransform: te, popTransform: K, pushTranslate: O, pushScale: ze, pushRotate: jr, pushRotateX: kr, pushRotateY: Gr, pushRotateZ: Ee, pushMatrix: Nr, debug: A, scene: Oi, go: Ii, addLevel: _i, getData: Bi, setData: Ln, download: je, downloadJSON: sr, downloadText: _t, downloadBlob: Nt, plug: Mn, ASCII_CHARS: wr, CP437_CHARS: Es, canvas: u.canvas, addKaboom: zi, LEFT: q.LEFT, RIGHT: q.RIGHT, UP: q.UP, DOWN: q.DOWN, RED: v.RED, GREEN: v.GREEN, BLUE: v.BLUE, YELLOW: v.YELLOW, MAGENTA: v.MAGENTA, CYAN: v.CYAN, WHITE: v.WHITE, BLACK: v.BLACK, quit: ns };
    if (s.plugins && s.plugins.forEach(Mn), s.global !== false)
      for (let e in Re)
        window[e] = Re[e];
    return Re;
  }, "default");

  // code/components.js
  function download(filename, url) {
    const a2 = document.createElement("a");
    a2.href = url;
    a2.download = filename;
    a2.click();
  }
  __name(download, "download");
  function downloader() {
    return {
      id: "downloader",
      requires: ["area"],
      add() {
        this.onClick(() => {
          var temp = onDraw(() => {
            download("juicy_person.png", screenshot());
            temp();
          });
        });
      }
    };
  }
  __name(downloader, "downloader");
  function checkbox(spr, spr2, icon, oncheck, onuncheck, extraT = "unuseful") {
    return {
      id: "checkbox",
      requires: ["area"],
      checked: false,
      add() {
        this.use(sprite(spr));
        this.check = add([
          sprite(spr2),
          origin("center"),
          z(100),
          pos(spr2 === "correct" ? this.pos.add(6, -5) : this.pos.clone()),
          "gui",
          "check",
          extraT,
          {
            checked: false
          }
        ]);
        this.check.hidden = true;
        if (icon)
          add([
            sprite(icon),
            pos(this.pos.add(40, 0)),
            origin("center"),
            "gui"
          ]);
        this.onClick(() => {
          this.checked = !this.checked;
          this.check.checked = this.checked;
          if (this.checked) {
            this.check.hidden = false;
            this.onCheck();
          } else {
            this.check.hidden = true;
            this.onUnCheck();
          }
        });
      },
      onCheck() {
        if (oncheck)
          oncheck();
      },
      onUnCheck() {
        if (onuncheck)
          onuncheck();
      },
      isChecked() {
        return this.checked;
      }
    };
  }
  __name(checkbox, "checkbox");
  function hoverOnce() {
    let hoverStarted = false;
    let hoverEnded = false;
    return {
      id: "hoverOnce",
      require: ["area"],
      update() {
        if (this.isHovering()) {
          if (hoverStarted)
            return;
          hoverStarted = true;
          hoverEnded = false;
          this.trigger("hoverEnter");
        } else {
          if (hoverEnded || !hoverStarted)
            return;
          hoverEnded = true;
          hoverStarted = false;
          this.trigger("hoverExit");
        }
      },
      onHoverOnce(onHover, onHoverExit) {
        this.on("hoverEnter", onHover);
        if (onHoverExit)
          this.on("hoverExit", onHoverExit);
      },
      onHoverEnter(action) {
        return this.on("hoverEnter", action);
      },
      onHoverExit(action) {
        return this.on("hoverExit", action);
      }
    };
  }
  __name(hoverOnce, "hoverOnce");

  // code/easing.js
  var easings = {
    linear: (x) => {
      return x;
    },
    easeInSine: (x) => {
      return 1 - Math.cos(x * Math.PI / 2);
    },
    easeOutSine: (x) => {
      return Math.sin(x * Math.PI / 2);
    },
    easeInOutSine: (x) => {
      return -(Math.cos(Math.PI * x) - 1) / 2;
    },
    easeInQuad: (x) => {
      return x * x;
    },
    easeOutQuad: (x) => {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: (x) => {
      return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: (x) => {
      return x * x * x;
    },
    easeOutCubic: (x) => {
      return 1 - Math.pow(1 - x, 3);
    },
    easeInOutCubic: (x) => {
      return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: (x) => {
      return x * x * x * x;
    },
    easeOutQuart: (x) => {
      return 1 - Math.pow(1 - x, 4);
    },
    easeInOutQuart: (x) => {
      return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: (x) => {
      return x * x * x * x * x;
    },
    easeOutQuint: (x) => {
      return 1 - Math.pow(1 - x, 5);
    },
    easeInOutQuint: (x) => {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    },
    easeInExpo: (x) => {
      return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    },
    easeOutExpo: (x) => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    },
    easeInOutExpo: (x) => {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: (x) => {
      return 1 - Math.sqrt(1 - Math.pow(x, 2));
    },
    easeOutCirc: (x) => {
      return Math.sqrt(1 - Math.pow(x - 1, 2));
    },
    easeInOutCirc: (x) => {
      return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInBack: (x) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: (x) => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    },
    easeInOutBack: (x) => {
      const c1 = 1.70158;
      const c2 = c1 * 1.525;
      return x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: (x) => {
      return 1 - easings.easeOutBounce(1 - x);
    },
    easeOutBounce: (x) => {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
      } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
      }
    },
    easeInOutBounce: (x) => {
      return x < 0.5 ? (1 - easings.easeOutBounce(1 - 2 * x)) / 2 : (1 + easings.easeOutBounce(2 * x - 1)) / 2;
    }
  };
  var tweentypes = {
    FOREVER: (t, st2, tl) => {
      if (t - st2 >= tl) {
        return "FOREVER";
      }
      return "CONTINUE";
    },
    LERPFOREVER: (t, st2, tl) => {
      return "LF";
    },
    PINGPONG: (t, st2, tl) => {
      if (t - st2 >= tl) {
        return "PING";
      }
      return "CONTINUE";
    },
    NORMAL: (t, st2, tl) => {
      if (t - st2 >= tl) {
        return "CALLBACK";
      }
      return "CONTINUE";
    }
  };
  function tween(func, attrs, timeLen, minVal, maxVal, ease, type, onFinish) {
    var minVal = minVal != void 0 ? minVal : func[attrs[0]];
    var ease = ease != void 0 ? ease : easings.linear;
    var type = type != void 0 ? type : tweentypes.NORMAL;
    var stTime = time();
    var onFinish = onFinish != void 0 ? onFinish : "ud";
    var upd = onUpdate(() => {
      switch (type(time(), stTime, timeLen)) {
        case "CALLBACK":
          for (h in attrs) {
            func[attrs[h]] = maxVal;
          }
          upd();
          return onFinish == "ud" ? true : onFinish();
        case "FOREVER":
          stTime = time();
          break;
        case "CONTINUE":
          for (h in attrs) {
            func[attrs[h]] = minVal;
          }
          break;
        case "PING":
          var buffer = minVal;
          minVal = maxVal;
          maxVal = buffer;
          stTime = time();
          break;
        default:
          break;
      }
      for (i in attrs) {
        func[attrs[i]] = lerp(minVal, maxVal, ease((time() - stTime) / timeLen));
      }
    });
  }
  __name(tween, "tween");

  // code/main.js
  var main_default = ho({
    width: 364,
    height: 324,
    letterbox: true,
    stretch: true,
    background: [141, 183, 255],
    touchToMouse: true,
    debug: true,
    font: "juiceisntbelow",
    canvas: document.querySelector("#myGame")
  });
  var hairCount = 35;
  var facesCount = 40;
  var outfitsCount = 35;
  var gameChars = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890\xD1\xF1,.?!+-=_:;/\\\xBF\xA1@#'&*<>[]{}()$%\u20AC~`|";
  var bgs = [
    rgb(141, 183, 255),
    rgb(131, 77, 196),
    rgb(255, 107, 107),
    rgb(181, 255, 141),
    rgb(255, 158, 141),
    rgb(189, 141, 255),
    rgb(189, 141, 255)
  ];
  var rooms = [
    camPos().clone(),
    camPos().clone().add(width(), 0)
  ];
  var layers = {
    belowbody: 1,
    hair: 2,
    body: 3,
    belowface: 4,
    face: 5,
    outfit: 6,
    fronthair: 7
  };
  var bgMusic;
  loadSprite("about", "./sprites/about.png");
  loadSprite("arrow", "./sprites/arrow.png");
  loadSprite("body", "./sprites/body.png");
  loadSprite("button", "./sprites/button.png");
  loadSprite("catwithhotdog", "./sprites/catwithhotdog.png");
  loadSprite("checkbox", "./sprites/checkbox.png");
  loadSprite("correct", "./sprites/correct.png");
  loadSprite("default", "./sprites/default.png");
  loadSprite("download", "./sprites/download.png");
  loadSprite("flush", "./sprites/flush.png");
  loadSprite("flush_icon", "./sprites/flush_icon.png");
  loadSprite("guicheck", "./sprites/guicheck.png");
  loadSprite("incorrect", "./sprites/incorrect.png");
  loadSprite("musiccheck", "./sprites/musiccheck.png");
  loadSprite("neko", "./sprites/neko.png");
  loadSprite("neko_icon", "./sprites/neko_icon.png");
  loadSprite("palette", "./sprites/palette.png");
  loadSprite("pointer", "./sprites/pointer.png");
  loadSprite("random", "./sprites/random.png");
  loadSprite("sorbet", "./sprites/sorbet.png");
  loadSprite("sorbet_icon", "./sprites/sorbet_icon.png");
  loadSprite("title", "./sprites/title.png");
  loadSprite("hair", "./sprites/hair.png", { sliceX: 10, sliceY: 7 });
  loadSprite("faces", "./sprites/faces.png", { sliceX: 7, sliceY: 6 });
  loadSprite("outfits", "./sprites/outfits.png", { sliceX: 5, sliceY: 7 });
  loadSound("chillaxation", "./sounds/chillaxation.mp3");
  loadBitmapFont("juiceisntbelow", "./sprites/thejuiceisntbelow.png", 26, 37, { chars: gameChars });
  var camHelper = add([
    pos(camPos().sub(width(), 0))
  ]);
  camHelper.onUpdate(() => camPos(camHelper.pos));
  onClick("camera_changer", (ch) => {
    tween(camHelper.pos, ["x"], 0.9, camHelper.pos.clone().x, ch.to.x, easings.easeOutBounce);
  });
  onLoad(() => {
    const attr = document.getElementById("myGame").attributes.style.nodeValue;
    document.getElementById("myGame").setAttribute("style", attr.replace("default", "none;"));
  });
  var canvasIsHover = /* @__PURE__ */ __name(() => canvas.parentElement.querySelector(":hover") === canvas, "canvasIsHover");
  var c = add([
    sprite("default"),
    pos(0, 0),
    z(1e3),
    fixed(),
    {
      h: false
    }
  ]);
  c.hidden = true;
  onUpdate(() => {
    const canvasIsHovered = canvasIsHover();
    if (canvasIsHovered !== c.h) {
      if (canvasIsHovered === true)
        c.hidden = false;
      else
        c.hidden = true;
      c.h = canvasIsHover();
    }
    c.pos = mousePos();
  });
  add([
    text("click\n to\nstart"),
    color(74, 48, 82),
    origin("center"),
    pos(center().sub(width(), 0))
  ]);
  var cts = add([
    rect(width(), height()),
    opacity(0),
    pos(-width(), 0),
    area()
  ]);
  cts.onClick(() => {
    bgMusic = play("chillaxation", { volume: 0.05, loop: true });
    tween(camHelper.pos, ["x"], 1, camHelper.pos.clone().x, 184, easings.easeOutBounce);
    cts.destroy();
  });
  var bg = add([
    pos(0, 0),
    rect(width(), height()),
    color(bgs[0]),
    {
      cur: 0
    }
  ]);
  add([
    sprite("title"),
    pos(center().x - 30, 20),
    origin("center"),
    z(50)
  ]);
  var body = add([
    sprite("body"),
    pos(center().x, height()),
    origin("bot"),
    z(layers.body)
  ]);
  var hair = add([
    pos(body.pos.add(0, -193)),
    origin("top"),
    z(layers.hair),
    "hair",
    {
      cur: 0
    }
  ]);
  add([
    pos(body.pos.add(0, -193)),
    origin("top"),
    z(layers.fronthair),
    "fronthair"
  ]);
  var face = add([
    pos(center().x, height() - 86),
    origin("bot"),
    z(layers.face),
    "faces",
    {
      cur: 0
    }
  ]);
  var outfit = add([
    pos(center().x, height()),
    origin("bot"),
    z(layers.outfit),
    "outfits",
    {
      cur: 0
    }
  ]);
  var neko = add([
    pos(body.pos.add(0, -158)),
    sprite("neko"),
    origin("center"),
    z(layers.belowbody),
    "extra"
  ]);
  var sorbet = add([
    pos(body.pos.add(-14, -178)),
    sprite("sorbet"),
    z(layers.belowbody),
    "extra"
  ]);
  var flush = add([
    pos(body.pos.add(0, -118)),
    sprite("flush"),
    origin("center"),
    z(layers.belowface),
    "extra"
  ]);
  every("extra", (obj) => obj.hidden = true);
  add([
    sprite("download"),
    origin("center"),
    pos(25, 146),
    z(50),
    area(),
    hoverOnce(),
    downloader(),
    "bc"
  ]);
  add([
    pos(25, 196),
    z(50),
    area(),
    origin("center"),
    hoverOnce(),
    checkbox("guicheck", "incorrect", "", hideGui, showGui, "nohide", "ahide"),
    "bc"
  ]);
  var changeBG = add([
    sprite("palette"),
    origin("center"),
    pos(306, 23),
    z(50),
    area(),
    {
      change() {
        if (bg.cur >= bgs.length)
          bg.cur = 0;
        bg.color = bgs[bg.cur];
      }
    }
  ]);
  changeBG.onClick(() => {
    bg.cur++;
    changeBG.change();
  });
  var random = add([
    sprite("random"),
    origin("center"),
    pos(25, 296),
    z(50),
    area(),
    hoverOnce(),
    "bc"
  ]);
  random.onClick(randomPart);
  add([
    pos(25, 246),
    z(50),
    area(),
    hoverOnce(),
    origin("center"),
    checkbox("musiccheck", "incorrect", "", () => bgMusic.volume(0), () => bgMusic.volume(0.05), "nohide"),
    "bc"
  ]);
  addLeftButton(body.pos.add(-85, -160), "hair");
  addRightButton(body.pos.add(83, -160), "hair");
  addLeftButton(body.pos.add(-65, -110), "faces");
  addRightButton(body.pos.add(63, -110), "faces");
  addLeftButton(body.pos.add(-70, -28), "outfits");
  addRightButton(body.pos.add(68, -28), "outfits");
  add([
    pos(center().x - 120 - 24.5, 80),
    z(50),
    area(),
    hoverOnce(),
    origin("center"),
    checkbox("checkbox", "correct", "sorbet_icon", () => sorbet.hidden = false, () => sorbet.hidden = true),
    "gui",
    "bc"
  ]);
  add([
    pos(center().x - 24.5, 80),
    z(50),
    area(),
    hoverOnce(),
    origin("center"),
    checkbox("checkbox", "correct", "flush_icon", () => flush.hidden = false, () => flush.hidden = true),
    "gui",
    "bc"
  ]);
  add([
    pos(center().x + 120 - 24.5, 80),
    z(50),
    area(),
    hoverOnce(),
    origin("center"),
    checkbox("checkbox", "correct", "neko_icon", () => neko.hidden = false, () => neko.hidden = true),
    "gui",
    "bc"
  ]);
  onClick("left", (b) => btn(b, true));
  onClick("right", (b) => btn(b, false));
  var about = add([
    pos(width() + 6, 0)
  ]);
  about.add([
    text("the juicy edit", { size: 22 }),
    pos(4, 10),
    color(74, 48, 82)
  ]);
  about.add([
    text("by lajbel", { size: 16 }),
    pos(4, 30),
    color(74, 48, 82)
  ]);
  about.add([
    text("Music", { size: 18 }),
    pos(4, 54),
    color(74, 48, 82)
  ]);
  about.add([
    text("HibbityBibbityBop", { size: 16 }),
    pos(4, 72),
    color(74, 48, 82)
  ]);
  about.add([
    text("Publishing", { size: 18 }),
    pos(4, 96),
    color(74, 48, 82)
  ]);
  about.add([
    text("The Juicy Sorbet", { size: 16 }),
    pos(4, 114),
    color(74, 48, 82)
  ]);
  about.add([
    text("Japanese Translation", { size: 18 }),
    pos(4, 138),
    color(74, 48, 82)
  ]);
  about.add([
    text("Hoshi", { size: 16 }),
    pos(4, 156),
    color(74, 48, 82)
  ]);
  about.add([
    text("you are free to use you creations\nas you want\nthanks for play", { size: 12 }),
    pos(center().x, height() - 40),
    origin("center"),
    color(74, 48, 82)
  ]);
  about.add([
    sprite("catwithhotdog"),
    pos(230, 10)
  ]);
  add([
    sprite("about"),
    origin("botright"),
    pos(width() - 3, height() - 3),
    area(),
    hoverOnce(),
    "camera_changer",
    "bc",
    "gui",
    {
      to: rooms[1]
    }
  ]);
  add([
    sprite("arrow"),
    origin("botleft"),
    pos(width() + 3, height() - 5),
    area(),
    hoverOnce(),
    "camera_changer",
    "bc",
    "gui",
    {
      to: rooms[0]
    }
  ]);
  every("bc", (o) => {
    o.color = rgb(74, 48, 82);
    o.onHoverOnce(() => {
      o.color = rgb(31, 16, 42);
    }, () => {
      o.color = rgb(74, 48, 82);
    });
  });
  onKeyPressRepeat("r", randomPart);
  function addLeftButton(pos2, toChange) {
    addButton(1, pos2, toChange, "left");
  }
  __name(addLeftButton, "addLeftButton");
  function addRightButton(pos2, toChange) {
    addButton(0, pos2, toChange, "right");
  }
  __name(addRightButton, "addRightButton");
  function addButton(number, w, thing, side) {
    const btn2 = add([
      sprite("button", { flipX: number }),
      pos(w),
      origin("center"),
      area(),
      z(10),
      hoverOnce(),
      "btn",
      "gui",
      thing,
      side
    ]);
    btn2.color = rgb(212, 110, 179);
    btn2.onHoverOnce(() => {
      btn2.color = rgb(135, 62, 132);
    }, () => {
      btn2.color = rgb(212, 110, 179);
    });
  }
  __name(addButton, "addButton");
  function randomPart() {
    hair.cur = Math.round((Math.random() * (hairCount - 0) + 0) / 2) * 2;
    face.cur = randi(facesCount);
    outfit.cur = randi(outfitsCount);
    setPart2(hairCount, "hair", "fronthair", true, false);
    setPart(facesCount, "faces", true, false);
    setPart(outfitsCount, "outfits", true, false);
  }
  __name(randomPart, "randomPart");
  function hideGui() {
    every("gui", (g) => {
      if (!g.is("nohide"))
        g.hidden = true;
    });
  }
  __name(hideGui, "hideGui");
  function showGui() {
    every("gui", (g) => {
      if (g.is("ahide")) {
        g.hidden = true;
      } else {
        if (g.is("check")) {
          g.hidden = !g.checked;
        } else {
          g.hidden = false;
        }
      }
    });
  }
  __name(showGui, "showGui");
  function setPart(count, tag, sub, set = true) {
    const obj = get(tag)[0];
    if (set) {
      if (sub)
        obj.cur--;
      else
        obj.cur++;
      if (obj.cur < 0)
        obj.cur = count;
      else if (obj.cur > count)
        obj.cur = 0;
    }
    if (obj.cur === 0)
      obj.unuse("sprite");
    else
      obj.use(sprite(tag, { frame: obj.cur - 1 }));
  }
  __name(setPart, "setPart");
  function setPart2(count, tag, tag2, sub, set = true) {
    const obj = get(tag)[0];
    const obj2 = get(tag2)[0];
    if (set) {
      if (sub)
        obj.cur = obj.cur - 2;
      else
        obj.cur = obj.cur + 2;
      if (obj.cur < 0)
        obj.cur = count * 2;
      else if (obj.cur > count * 2)
        obj.cur = 0;
    }
    if (obj.cur == 0) {
      obj.unuse("sprite");
      obj2.unuse("sprite");
    } else {
      obj.use(sprite(tag, { frame: obj.cur - 2 }));
      obj2.use(sprite(tag, { frame: obj.cur - 1 }));
    }
  }
  __name(setPart2, "setPart2");
  function btn(b, s) {
    if (b.is("hair"))
      setPart2(hairCount, "hair", "fronthair", s);
    else if (b.is("faces"))
      setPart(facesCount, "faces", s);
    else if (b.is("outfits"))
      setPart(outfitsCount, "outfits", s);
  }
  __name(btn, "btn");
  every((o) => {
    if (!o.is("area"))
      return;
    o.on("hoverEnter", () => {
      c.use(sprite("pointer"));
    });
    o.on("hoverExit", () => {
      c.use(sprite("default"));
    });
  });
})();
//# sourceMappingURL=game.js.map
