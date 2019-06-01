module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2oXY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"info":"info"};

/***/ }),

/***/ "3dZY":
/***/ (function(module, exports, __webpack_require__) {

!function (t, n) {
   true ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.dayjs = n();
}(this, function () {
  "use strict";
  var t = "millisecond",
      n = "second",
      e = "minute",
      r = "hour",
      i = "day",
      s = "week",
      u = "month",
      o = "quarter",
      a = "year",
      h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
      f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      c = function c(t, n, e) {
    var r = String(t);return !r || r.length >= n ? t : "" + Array(n + 1 - r.length).join(e) + t;
  },
      d = { s: c, z: function z(t) {
      var n = -t.utcOffset(),
          e = Math.abs(n),
          r = Math.floor(e / 60),
          i = e % 60;return (n <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
    }, m: function m(t, n) {
      var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
          r = t.clone().add(e, u),
          i = n - r < 0,
          s = t.clone().add(e + (i ? -1 : 1), u);return Number(-(e + (n - r) / (i ? r - s : s - r)) || 0);
    }, a: function a(t) {
      return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
    }, p: function p(h) {
      return { M: u, y: a, w: s, d: i, h: r, m: e, s: n, ms: t, Q: o }[h] || String(h || "").toLowerCase().replace(/s$/, "");
    }, u: function u(t) {
      return void 0 === t;
    } },
      $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") },
      l = "en",
      m = {};m[l] = $;var y = function y(t) {
    return t instanceof v;
  },
      M = function M(t, n, e) {
    var r;if (!t) return null;if ("string" == typeof t) m[t] && (r = t), n && (m[t] = n, r = t);else {
      var i = t.name;m[i] = t, r = i;
    }return e || (l = r), r;
  },
      g = function g(t, n, e) {
    if (y(t)) return t.clone();var r = n ? "string" == typeof n ? { format: n, pl: e } : n : {};return r.date = t, new v(r);
  },
      D = d;D.l = M, D.i = y, D.w = function (t, n) {
    return g(t, { locale: n.$L, utc: n.$u });
  };var v = function () {
    function c(t) {
      this.$L = this.$L || M(t.locale, null, !0) || l, this.parse(t);
    }var d = c.prototype;return d.parse = function (t) {
      this.$d = function (t) {
        var n = t.date,
            e = t.utc;if (null === n) return new Date(NaN);if (D.u(n)) return new Date();if (n instanceof Date) return new Date(n);if ("string" == typeof n && !/Z$/i.test(n)) {
          var r = n.match(h);if (r) return e ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
        }return new Date(n);
      }(t), this.init();
    }, d.init = function () {
      var t = this.$d;this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
    }, d.$utils = function () {
      return D;
    }, d.isValid = function () {
      return !("Invalid Date" === this.$d.toString());
    }, d.isSame = function (t, n) {
      var e = g(t);return this.startOf(n) <= e && e <= this.endOf(n);
    }, d.isAfter = function (t, n) {
      return g(t) < this.startOf(n);
    }, d.isBefore = function (t, n) {
      return this.endOf(n) < g(t);
    }, d.$g = function (t, n, e) {
      return D.u(t) ? this[n] : this.set(e, t);
    }, d.year = function (t) {
      return this.$g(t, "$y", a);
    }, d.month = function (t) {
      return this.$g(t, "$M", u);
    }, d.day = function (t) {
      return this.$g(t, "$W", i);
    }, d.date = function (t) {
      return this.$g(t, "$D", "date");
    }, d.hour = function (t) {
      return this.$g(t, "$H", r);
    }, d.minute = function (t) {
      return this.$g(t, "$m", e);
    }, d.second = function (t) {
      return this.$g(t, "$s", n);
    }, d.millisecond = function (n) {
      return this.$g(n, "$ms", t);
    }, d.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }, d.valueOf = function () {
      return this.$d.getTime();
    }, d.startOf = function (t, o) {
      var h = this,
          f = !!D.u(o) || o,
          c = D.p(t),
          d = function d(t, n) {
        var e = D.w(h.$u ? Date.UTC(h.$y, n, t) : new Date(h.$y, n, t), h);return f ? e : e.endOf(i);
      },
          $ = function $(t, n) {
        return D.w(h.toDate()[t].apply(h.toDate(), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), h);
      },
          l = this.$W,
          m = this.$M,
          y = this.$D,
          M = "set" + (this.$u ? "UTC" : "");switch (c) {case a:
          return f ? d(1, 0) : d(31, 11);case u:
          return f ? d(1, m) : d(0, m + 1);case s:
          var g = this.$locale().weekStart || 0,
              v = (l < g ? l + 7 : l) - g;return d(f ? y - v : y + (6 - v), m);case i:case "date":
          return $(M + "Hours", 0);case r:
          return $(M + "Minutes", 1);case e:
          return $(M + "Seconds", 2);case n:
          return $(M + "Milliseconds", 3);default:
          return this.clone();}
    }, d.endOf = function (t) {
      return this.startOf(t, !1);
    }, d.$set = function (s, o) {
      var h,
          f = D.p(s),
          c = "set" + (this.$u ? "UTC" : ""),
          d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[e] = c + "Minutes", h[n] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
          $ = f === i ? this.$D + (o - this.$W) : o;if (f === u || f === a) {
        var l = this.clone().set("date", 1);l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
      } else d && this.$d[d]($);return this.init(), this;
    }, d.set = function (t, n) {
      return this.clone().$set(t, n);
    }, d.get = function (t) {
      return this[D.p(t)]();
    }, d.add = function (t, o) {
      var h,
          f = this;t = Number(t);var c = D.p(o),
          d = function d(n) {
        var e = g(f);return D.w(e.date(e.date() + Math.round(n * t)), f);
      };if (c === u) return this.set(u, this.$M + t);if (c === a) return this.set(a, this.$y + t);if (c === i) return d(1);if (c === s) return d(7);var $ = (h = {}, h[e] = 6e4, h[r] = 36e5, h[n] = 1e3, h)[c] || 1,
          l = this.valueOf() + t * $;return D.w(l, this);
    }, d.subtract = function (t, n) {
      return this.add(-1 * t, n);
    }, d.format = function (t) {
      var n = this;if (!this.isValid()) return "Invalid Date";var e = t || "YYYY-MM-DDTHH:mm:ssZ",
          r = D.z(this),
          i = this.$locale(),
          s = this.$H,
          u = this.$m,
          o = this.$M,
          a = i.weekdays,
          h = i.months,
          c = function c(t, r, i, s) {
        return t && (t[r] || t(n, e)) || i[r].substr(0, s);
      },
          d = function d(t) {
        return D.s(s % 12 || 12, t, "0");
      },
          $ = i.meridiem || function (t, n, e) {
        var r = t < 12 ? "AM" : "PM";return e ? r.toLowerCase() : r;
      },
          l = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: o + 1, MM: D.s(o + 1, 2, "0"), MMM: c(i.monthsShort, o, h, 3), MMMM: h[o] || h(this, e), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: c(i.weekdaysMin, this.$W, a, 2), ddd: c(i.weekdaysShort, this.$W, a, 3), dddd: a[this.$W], H: String(s), HH: D.s(s, 2, "0"), h: d(1), hh: d(2), a: $(s, u, !0), A: $(s, u, !1), m: String(u), mm: D.s(u, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: r };return e.replace(f, function (t, n) {
        return n || l[t] || r.replace(":", "");
      });
    }, d.utcOffset = function () {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, d.diff = function (t, h, f) {
      var c,
          d = D.p(h),
          $ = g(t),
          l = 6e4 * ($.utcOffset() - this.utcOffset()),
          m = this - $,
          y = D.m(this, $);return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[e] = m / 6e4, c[n] = m / 1e3, c)[d] || m, f ? y : D.a(y);
    }, d.daysInMonth = function () {
      return this.endOf(u).$D;
    }, d.$locale = function () {
      return m[this.$L];
    }, d.locale = function (t, n) {
      if (!t) return this.$L;var e = this.clone();return e.$L = M(t, n, !0), e;
    }, d.clone = function () {
      return D.w(this.toDate(), this);
    }, d.toDate = function () {
      return new Date(this.$d);
    }, d.toJSON = function () {
      return this.toISOString();
    }, d.toISOString = function () {
      return this.$d.toISOString();
    }, d.toString = function () {
      return this.$d.toUTCString();
    }, c;
  }();return g.prototype = v.prototype, g.extend = function (t, n) {
    return t(n, v, g), g;
  }, g.locale = M, g.isDayjs = y, g.unix = function (t) {
    return g(1e3 * t);
  }, g.en = m[l], g.Ls = m, g;
});

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var ReactIs = require('react-is');

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "8NLT":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__("jcLW");
} else {
  module.exports = __webpack_require__("9WM/");
}

/***/ }),

/***/ "8RWZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = __webpack_require__("8NLT");

var _debug2 = _interopRequireDefault(_debug);

var _functionNames = __webpack_require__("xuQ8");

var _functionNames2 = _interopRequireDefault(_functionNames);

var _eventNames = __webpack_require__("KyZb");

var _eventNames2 = _interopRequireDefault(_eventNames);

var _FunctionStateMap = __webpack_require__("NeM/");

var _FunctionStateMap2 = _interopRequireDefault(_FunctionStateMap);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/* eslint-disable promise/prefer-await-to-then */

var debug = (0, _debug2.default)('youtube-player');

var YouTubePlayer = {};

/**
 * Construct an object that defines an event handler for all of the YouTube
 * player events. Proxy captured events through an event emitter.
 *
 * @todo Capture event parameters.
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 */
YouTubePlayer.proxyEvents = function (emitter) {
  var events = {};

  var _loop = function _loop(eventName) {
    var onEventName = 'on' + eventName.slice(0, 1).toUpperCase() + eventName.slice(1);

    events[onEventName] = function (event) {
      debug('event "%s"', onEventName, event);

      emitter.trigger(eventName, event);
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var eventName = _step.value;

      _loop(eventName);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return events;
};

/**
 * Delays player API method execution until player state is ready.
 *
 * @todo Proxy all of the methods using Object.keys.
 * @todo See TRICKY below.
 * @param playerAPIReady Promise that resolves when player is ready.
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions.
 * @returns {Object}
 */
YouTubePlayer.promisifyPlayer = function (playerAPIReady) {
  var strictState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var functions = {};

  var _loop2 = function _loop2(functionName) {
    if (strictState && _FunctionStateMap2.default[functionName]) {
      functions[functionName] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return playerAPIReady.then(function (player) {
          var stateInfo = _FunctionStateMap2.default[functionName];
          var playerState = player.getPlayerState();

          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          var value = player[functionName].apply(player, args);

          // TRICKY: For functions like `seekTo`, a change in state must be
          // triggered given that the resulting state could match the initial
          // state.
          if (stateInfo.stateChangeRequired ||

          // eslint-disable-next-line no-extra-parens
          Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
            return new Promise(function (resolve) {
              var onPlayerStateChange = function onPlayerStateChange() {
                var playerStateAfterChange = player.getPlayerState();

                var timeout = void 0;

                if (typeof stateInfo.timeout === 'number') {
                  timeout = setTimeout(function () {
                    player.removeEventListener('onStateChange', onPlayerStateChange);

                    resolve();
                  }, stateInfo.timeout);
                }

                if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                  player.removeEventListener('onStateChange', onPlayerStateChange);

                  clearTimeout(timeout);

                  resolve();
                }
              };

              player.addEventListener('onStateChange', onPlayerStateChange);
            }).then(function () {
              return value;
            });
          }

          return value;
        });
      };
    } else {
      functions[functionName] = function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return playerAPIReady.then(function (player) {
          // eslint-disable-next-line no-warning-comments
          // TODO: Just spread the args into the function once Babel is fixed:
          // https://github.com/babel/babel/issues/4270
          //
          // eslint-disable-next-line prefer-spread
          return player[functionName].apply(player, args);
        });
      };
    }
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var functionName = _step2.value;

      _loop2(functionName);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return functions;
};

exports.default = YouTubePlayer;
module.exports = exports['default'];

/***/ }),

/***/ "9WM/":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__("Axko");
var util = __webpack_require__("Bcfi");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("y5CM");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return (/^debug_/i.test(key)
  );
}).reduce(function (obj, key) {
  // camel-case
  var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function (_, k) {
    return k.toUpperCase();
  });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;else if (/^(no|off|false|disabled)$/i.test(val)) val = false;else if (val === 'null') val = null;else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function () {}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')();
}

var stream = 1 === fd ? process.stdout : 2 === fd ? process.stderr : createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts).split('\n').map(function (str) {
    return str.trim();
  }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function (v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \x1B[3' + c + ';1m' + name + ' ' + '\x1B[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\x1B[3' + c + 'm+' + exports.humanize(this.diff) + '\x1B[0m');
  } else {
    args[0] = new Date().toUTCString() + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream(fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__("vHs2");
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__("QPpz");
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "Axko":
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "Bcfi":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "FYKL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _sister = __webpack_require__("bdTz");

var _sister2 = _interopRequireDefault(_sister);

var _loadYouTubeIframeApi = __webpack_require__("xhtd");

var _loadYouTubeIframeApi2 = _interopRequireDefault(_loadYouTubeIframeApi);

var _YouTubePlayer = __webpack_require__("8RWZ");

var _YouTubePlayer2 = _interopRequireDefault(_YouTubePlayer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 */
var youtubeIframeAPI = void 0;

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param maybeElementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param options See `options` (Ignored when using an existing YT.Player instance).
 * @param strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 */

exports.default = function (maybeElementId) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var strictState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var emitter = (0, _sister2.default)();

  if (!youtubeIframeAPI) {
    youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
  }

  if (options.events) {
    throw new Error('Event handlers cannot be overwritten.');
  }

  if (typeof maybeElementId === 'string' && !document.getElementById(maybeElementId)) {
    throw new Error('Element "' + maybeElementId + '" does not exist.');
  }

  options.events = _YouTubePlayer2.default.proxyEvents(emitter);

  var playerAPIReady = new Promise(function (resolve) {
    if ((typeof maybeElementId === 'undefined' ? 'undefined' : _typeof(maybeElementId)) === 'object' && maybeElementId.playVideo instanceof Function) {
      var player = maybeElementId;

      resolve(player);
    } else {
      // asume maybeElementId can be rendered inside
      // eslint-disable-next-line promise/catch-or-return
      youtubeIframeAPI.then(function (YT) {
        // eslint-disable-line promise/prefer-await-to-then
        var player = new YT.Player(maybeElementId, options);

        emitter.on('ready', function () {
          resolve(player);
        });

        return null;
      });
    }
  });

  var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);

  playerApi.on = emitter.on;
  playerApi.off = emitter.off;

  return playerApi;
};

module.exports = exports['default'];

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.scss
var style = __webpack_require__("yY49");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js


var EMPTY$1 = {};

function preact_router_es_assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var preact_router_es_Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					preact_router_es_assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(preact_min["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(preact_min["Component"]);

var preact_router_es_Link = function Link(props) {
	return Object(preact_min["h"])('a', preact_router_es_assign({ onClick: handleLinkClick }, props));
};

var preact_router_es_Route = function Route(props) {
	return Object(preact_min["h"])(props.component, props);
};

preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
//# sourceMappingURL=preact-router.es.js.map
// EXTERNAL MODULE: ./components/header/style.css
var header_style = __webpack_require__("u3et");
var header_style_default = /*#__PURE__*/__webpack_require__.n(header_style);

// CONCATENATED MODULE: ./components/header/Header.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Header__ref = Object(preact_min["h"])(
  preact_router_es_Link,
  { href: '/week' },
  'Week'
);

var _ref2 = Object(preact_min["h"])(
  preact_router_es_Link,
  { href: '/fortnight' },
  'Fortnight'
);

var Header__ref3 = Object(preact_min["h"])(
  preact_router_es_Link,
  { href: '/month' },
  'Month'
);

var _ref4 = Object(preact_min["h"])(
  preact_router_es_Link,
  { href: '/alltime' },
  'All Time'
);

var Header_Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.reload = function () {
      window.location.href = '/';
    }, _this.onRandom = function () {
      var href = '/random/?r=' + Math.random();
      window.location = href;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Header.prototype.render = function render() {
    return Object(preact_min["h"])(
      'header',
      { className: header_style_default.a.header },
      Object(preact_min["h"])(
        'div',
        { className: 'brand' },
        Object(preact_min["h"])(
          'h1',
          null,
          Object(preact_min["h"])(
            'a',
            { href: '#', onClick: this.reload },
            'Hacker News TV'
          ),
          ' '
        )
      ),
      Object(preact_min["h"])(
        'div',
        { className: header_style_default.a.linksContainer },
        Object(preact_min["h"])(
          'div',
          { className: header_style_default.a.headerLink },
          Header__ref
        ),
        Object(preact_min["h"])(
          'div',
          { className: header_style_default.a.headerLink },
          _ref2
        ),
        Object(preact_min["h"])(
          'div',
          { className: header_style_default.a.headerLink },
          Header__ref3
        ),
        Object(preact_min["h"])(
          'div',
          { className: header_style_default.a.headerLink },
          _ref4
        ),
        Object(preact_min["h"])(
          'div',
          { className: header_style_default.a.headerLink },
          Object(preact_min["h"])(
            preact_router_es_Link,
            { onClick: this.onRandom, href: '#' },
            'I\'m feeling lucky'
          )
        )
      )
    );
  };

  return Header;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/header/index.js

/* harmony default export */ var header = (Header_Header);
// CONCATENATED MODULE: ./services/api.js
var GOOGLE_API_KEY = 'AIzaSyDf6h_YZh_ltaj8u8H4TceEqet68CyCz6k';
var ALGOLIA_URL = 'https://hn.algolia.com/api/v1';

function getVideos(start, end, page) {
  return new Promise(function ($return, $error) {
    var query = 'youtube.com/watch';
    var timeWindow = '';
    if (start && end) {
      timeWindow = '&numericFilters=created_at_i>' + start + ',created_at_i<' + end;
    }
    var url = ALGOLIA_URL + '/search?query=' + query + '&restrictSearchableAttributes=url' + timeWindow + '&hitsPerPage=10&page=' + page;
    return $return(fetch(url));
  });
}

function getVideo(item) {
  return new Promise(function ($return, $error) {
    var url = ALGOLIA_URL + '/items/' + item;
    return $return(fetch(url));
  });
}

function getVideoInfo(id) {
  return new Promise(function ($return, $error) {
    var base = 'https://www.googleapis.com/youtube/v3/videos?id=' + id;
    var content = '&part=contentDetails';
    var key = '&key=' + GOOGLE_API_KEY;
    var url = '' + base + content + key;
    return $return(fetch(url));
  });
}
// EXTERNAL MODULE: ./components/Loader/style.scss
var Loader_style = __webpack_require__("eH4F");
var Loader_style_default = /*#__PURE__*/__webpack_require__.n(Loader_style);

// CONCATENATED MODULE: ./components/Loader/Loader.js


function Loader__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Loader__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Loader__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Loader_Loader = function (_Component) {
  Loader__inherits(Loader, _Component);

  function Loader() {
    Loader__classCallCheck(this, Loader);

    return Loader__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Loader.prototype.render = function render(_ref) {
    var message = _ref.message;

    if (!message) return null;
    return Object(preact_min["h"])(
      'div',
      { className: Loader_style_default.a.loader },
      '\uD83D\uDC0E ',
      message
    );
  };

  return Loader;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/Loader/index.js

/* harmony default export */ var components_Loader = (Loader_Loader);
// EXTERNAL MODULE: ./components/Info/style.scss
var Info_style = __webpack_require__("2oXY");
var Info_style_default = /*#__PURE__*/__webpack_require__.n(Info_style);

// CONCATENATED MODULE: ./components/Info/Info.js


function Info__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Info__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Info__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Info__ref2 = Object(preact_min["h"])(
  'summary',
  null,
  'More Info'
);

var Info_Info = function (_Component) {
  Info__inherits(Info, _Component);

  function Info() {
    Info__classCallCheck(this, Info);

    return Info__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Info.prototype.render = function render(_ref) {
    var message = _ref.message,
        details = _ref.details;

    if (!message) {
      return null;
    }
    return Object(preact_min["h"])(
      'div',
      { className: Info_style_default.a.info },
      Object(preact_min["h"])(
        'div',
        null,
        message
      ),
      details && Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
          'details',
          null,
          Info__ref2,
          Object(preact_min["h"])(
            'code',
            null,
            details
          )
        )
      )
    );
  };

  return Info;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/Info/index.js

/* harmony default export */ var components_Info = (Info_Info);
// EXTERNAL MODULE: ./components/feed/style.scss
var feed_style = __webpack_require__("zeP1");
var feed_style_default = /*#__PURE__*/__webpack_require__.n(feed_style);

// EXTERNAL MODULE: ../node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__("3dZY");
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// EXTERNAL MODULE: ./components/item/style.scss
var item_style = __webpack_require__("gp30");
var item_style_default = /*#__PURE__*/__webpack_require__.n(item_style);

// EXTERNAL MODULE: ../node_modules/react-timeago/lib/index.js
var lib = __webpack_require__("i94E");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ../node_modules/fast-deep-equal/index.js
var fast_deep_equal = __webpack_require__("jIGR");
var fast_deep_equal_default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal);

// EXTERNAL MODULE: ../node_modules/youtube-player/dist/index.js
var dist = __webpack_require__("FYKL");
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// CONCATENATED MODULE: ./components/Youtube.js
var _class, _temp;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function Youtube__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Youtube__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Youtube__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





/**
 * Check whether a `props` change should result in the video being updated.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdateVideo(prevProps, props) {
  // A changing video should always trigger an update
  if (prevProps.videoId !== props.videoId) {
    return true;
  }

  // Otherwise, a change in the start/end time playerVars also requires a player
  // update.
  var prevVars = prevProps.opts.playerVars || {};
  var vars = props.opts.playerVars || {};

  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}

/**
 * Neutralise API options that only require a video update, leaving only options
 * that require a player reset. The results can then be compared to see if a
 * player reset is necessary.
 *
 * @param {Object} opts
 */
function filterResetOptions(opts) {
  return _extends({}, opts, {
    playerVars: _extends({}, opts.playerVars, {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}

/**
 * Check whether a `props` change should result in the player being reset.
 * The player is reset when the `props.opts` change, except if the only change
 * is in the `start` and `end` playerVars, because a video update can deal with
 * those.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldResetPlayer(prevProps, props) {
  return !fast_deep_equal_default()(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}

/**
 * Check whether a props change should result in an id or className update.
 *
 * @param {Object} prevProps
 * @param {Object} props
 */
function shouldUpdatePlayer(prevProps, props) {
  return prevProps.id !== props.id || prevProps.className !== props.className;
}

var Youtube_YouTube = (_temp = _class = function (_React$Component) {
  Youtube__inherits(YouTube, _React$Component);

  function YouTube(props) {
    Youtube__classCallCheck(this, YouTube);

    var _this = Youtube__possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onPlayerReady = function (event) {
      return _this.props.onReady(event);
    };

    _this.onPlayerError = function (event) {
      return _this.props.onError(event);
    };

    _this.onPlayerStateChange = function (event) {
      _this.props.onStateChange(event);
      switch (event.data) {
        case YouTube.PlayerState.ENDED:
          _this.props.onEnd(event);
          break;

        case YouTube.PlayerState.PLAYING:
          _this.props.onPlay(event);
          break;

        case YouTube.PlayerState.PAUSED:
          _this.props.onPause(event);
          break;

        default:
      }
    };

    _this.onPlayerPlaybackRateChange = function (event) {
      return _this.props.onPlaybackRateChange(event);
    };

    _this.onPlayerPlaybackQualityChange = function (event) {
      return _this.props.onPlaybackQualityChange(event);
    };

    _this.createPlayer = function () {
      // do not attempt to create a player server-side, it won't work
      if (typeof document === 'undefined') return;
      // create player
      var playerOpts = _extends({}, _this.props.opts, {
        // preload the `videoId` video if one is already given
        videoId: _this.props.videoId
      });
      _this.internalPlayer = dist_default()(_this.container, playerOpts);
      // attach event handlers
      _this.internalPlayer.on('ready', _this.onPlayerReady);
      _this.internalPlayer.on('error', _this.onPlayerError);
      _this.internalPlayer.on('stateChange', _this.onPlayerStateChange);
      _this.internalPlayer.on('playbackRateChange', _this.onPlayerPlaybackRateChange);
      _this.internalPlayer.on('playbackQualityChange', _this.onPlayerPlaybackQualityChange);
    };

    _this.resetPlayer = function () {
      return _this.internalPlayer.destroy().then(_this.createPlayer);
    };

    _this.updatePlayer = function () {
      _this.internalPlayer.getIframe().then(function (iframe) {
        if (_this.props.id) iframe.setAttribute('id', _this.props.id);else iframe.removeAttribute('id');
        if (_this.props.className) {
          iframe.setAttribute('class', _this.props.className);
        } else iframe.removeAttribute('class');
      });
    };

    _this.updateVideo = function () {
      if (typeof _this.props.videoId === 'undefined' || _this.props.videoId === null) {
        _this.internalPlayer.stopVideo();
        return;
      }

      // set queueing options
      var autoplay = false;
      var opts = {
        videoId: _this.props.videoId
      };
      if ('playerVars' in _this.props.opts) {
        autoplay = _this.props.opts.playerVars.autoplay === 1;
        if ('start' in _this.props.opts.playerVars) {
          opts.startSeconds = _this.props.opts.playerVars.start;
        }
        if ('end' in _this.props.opts.playerVars) {
          opts.endSeconds = _this.props.opts.playerVars.end;
        }
      }

      // if autoplay is enabled loadVideoById
      if (autoplay) {
        _this.internalPlayer.loadVideoById(opts);
        return;
      }
      // default behaviour just cues the video
      _this.internalPlayer.cueVideoById(opts);
    };

    _this.refContainer = function (container) {
      _this.container = container;
    };

    _this.container = null;
    _this.internalPlayer = null;
    return _this;
  }

  /**
   * Expose PlayerState constants for convenience. These constants can also be
   * accessed through the global YT object after the YouTube IFrame API is instantiated.
   * https://developers.google.com/youtube/iframe_api_reference#onStateChange
   */


  YouTube.prototype.componentDidMount = function componentDidMount() {
    this.createPlayer();
  };

  YouTube.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (shouldUpdatePlayer(prevProps, this.props)) {
      this.updatePlayer();
    }

    if (shouldResetPlayer(prevProps, this.props)) {
      this.resetPlayer();
    }

    if (shouldUpdateVideo(prevProps, this.props)) {
      this.updateVideo();
    }
  };

  YouTube.prototype.componentWillUnmount = function componentWillUnmount() {
    /**
     * Note: The `youtube-player` package that is used promisifies all Youtube
     * Player API calls, which introduces a delay of a tick before it actually
     * gets destroyed. Since React attempts to remove the element instantly
     * this method isn't quick enough to reset the container element.
     */
    this.internalPlayer.destroy();
  };

  /**
   * https://developers.google.com/youtube/iframe_api_reference#onReady
   *
   * @param {Object} event
   *   @param {Object} target - player object
   */


  /**
   * https://developers.google.com/youtube/iframe_api_reference#onError
   *
   * @param {Object} event
   *   @param {Integer} data  - error type
   *   @param {Object} target - player object
   */


  /**
   * https://developers.google.com/youtube/iframe_api_reference#onStateChange
   *
   * @param {Object} event
   *   @param {Integer} data  - status change type
   *   @param {Object} target - actual YT player
   */


  /**
   * https://developers.google.com/youtube/iframe_api_reference#onPlaybackRateChange
   *
   * @param {Object} event
   *   @param {Float} data    - playback rate
   *   @param {Object} target - actual YT player
   */


  /**
   * https://developers.google.com/youtube/iframe_api_reference#onPlaybackQualityChange
   *
   * @param {Object} event
   *   @param {String} data   - playback quality
   *   @param {Object} target - actual YT player
   */


  /**
   * Initialize the Youtube Player API on the container and attach event handlers
   */


  /**
   * Shorthand for destroying and then re-creating the Youtube Player
   */


  /**
   * Method to update the id and class of the Youtube Player iframe.
   * React should update this automatically but since the Youtube Player API
   * replaced the DIV that is mounted by React we need to do this manually.
   */


  /**
   * Call Youtube Player API methods to update the currently playing video.
   * Depeding on the `opts.playerVars.autoplay` this function uses one of two
   * Youtube Player API methods to update the video.
   */


  YouTube.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { className: this.props.containerClassName },
      Object(preact_min["h"])('div', {
        id: this.props.id,
        className: this.props.className,
        ref: this.refContainer
      })
    );
  };

  return YouTube;
}(preact_min_default.a.Component), _class.defaultProps = {
  id: null,
  className: null,
  opts: {},
  containerClassName: '',
  onReady: function onReady() {},
  onError: function onError() {},
  onPlay: function onPlay() {},
  onPause: function onPause() {},
  onEnd: function onEnd() {},
  onStateChange: function onStateChange() {},
  onPlaybackRateChange: function onPlaybackRateChange() {},
  onPlaybackQualityChange: function onPlaybackQualityChange() {} }, _class.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
}, _temp);


/* harmony default export */ var Youtube = (Youtube_YouTube);
// CONCATENATED MODULE: ./components/YoutubeThumbnail.js
var YoutubeThumbnail__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var YoutubeThumbnail__class, YoutubeThumbnail__temp;



function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function YoutubeThumbnail__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function YoutubeThumbnail__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function YoutubeThumbnail__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var YoutubeThumbnail_YoutubeThumbnail = (YoutubeThumbnail__temp = YoutubeThumbnail__class = function (_Component) {
  YoutubeThumbnail__inherits(YoutubeThumbnail, _Component);

  function YoutubeThumbnail(props) {
    YoutubeThumbnail__classCallCheck(this, YoutubeThumbnail);

    var _this = YoutubeThumbnail__possibleConstructorReturn(this, _Component.call(this, props));

    _this.getSrc = function () {
      var _this$props = _this.props,
          youtubeId = _this$props.youtubeId,
          index = _this$props.index;

      return 'https://img.youtube.com/vi/' + youtubeId + '/' + index + '.jpg';
    };

    _this.loadImage = function () {
      var _this$props2 = _this.props,
          index = _this$props2.index,
          youtubeId = _this$props2.youtubeId;

      if (!youtubeId) return;
      var src = _this.getSrc();
      var img = new Image(src);
      img.src = src;
      img.onload = function (e) {
        _this.setState({ loading: false });
        // Hack to save round trip https://stackoverflow.com/a/21812607/1376627
        if (img.naturalWidth === 120 && index === 0) {
          return _this.props.onError(e);
        }
        _this.props.onLoad(e);
      };
      img.onerror = function (e) {
        _this.props.onError(e);
        _this.setState({ loading: false });
      };
    };

    _this.state = { loading: true };
    return _this;
  }

  YoutubeThumbnail.prototype.componentDidMount = function componentDidMount() {
    this.loadImage();
  };

  YoutubeThumbnail.prototype.componentDidUpdate = function componentDidUpdate(props) {
    if (this.props.youtubeId !== props.youtubeId) {
      this.loadImage();
    }
  };

  YoutubeThumbnail.prototype.render = function render() {
    var _props = this.props,
        onLoad = _props.onLoad,
        onError = _props.onError,
        youtubeId = _props.youtubeId,
        rest = _objectWithoutProperties(_props, ['onLoad', 'onError', 'youtubeId']);

    if (!youtubeId) return null;
    var src = this.getSrc();
    return Object(preact_min["h"])('img', YoutubeThumbnail__extends({ src: src }, rest));
  };

  return YoutubeThumbnail;
}(preact_min["Component"]), YoutubeThumbnail__class.defaultProps = {
  onError: function onError() {},
  onLoad: function onLoad() {}
}, YoutubeThumbnail__temp);

// CONCATENATED MODULE: ./components/item/item.js
var item__class, item__temp;



function item__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function item__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function item__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var item_Item = (item__temp = item__class = function (_Component) {
  item__inherits(Item, _Component);

  function Item() {
    item__classCallCheck(this, Item);

    var _this = item__possibleConstructorReturn(this, _Component.call(this));

    _this.onImageLoad = function () {
      _this.setState({ thumbnailLoadedSuccessfully: true });
    };

    _this.onImageError = function (e) {
      return _this.props.onError();
    };

    _this.formatDuration = function (duration) {
      if (!duration) return '';
      var out = duration.toString();
      return out.replace('PT', '').toLowerCase();
    };

    _this.state = {
      showPlayer: false,
      imageIndex: 0,
      thumbnailLoadedSuccessfully: false
    };
    return _this;
  }

  Item.prototype.componentDidMount = function componentDidMount() {
    if (this.props.showPlayer) this.setState({ showPlayer: true });
  };

  Item.prototype.componentWillReceiveProps = function componentWillReceiveProps(props) {
    if (props.showPlayer !== this.props.showPlayer && props.showPlayer !== this.state.showPlayer) {
      this.setState({ showPlayer: props.showPlayer });
    }
  };

  Item.prototype.render = function render(_ref) {
    var _this2 = this;

    var item = _ref.item;

    return Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(
        'div',
        {
          id: 'video-container' + item.objectID,
          className: 'video',
          style: {
            position: 'relative',
            paddingBottom: '56.25%' /* 16:9 */
            , paddingTop: 25,
            height: 0,
            background: '#333'
          }
        },
        this.state.showPlayer && this.state.thumbnailLoadedSuccessfully ? Object(preact_min["h"])(Youtube, {
          id: 'player' + item.objectID,
          className: item_style_default.a.iframe,
          videoId: item.youtubeId,
          onReady: this.props.onReady,
          onStateChange: this.props.onStateChange,
          onError: this.props.onError,
          playerVars: {}
        }) : Object(preact_min["h"])(
          'div',
          {
            className: item_style_default.a.iframe,
            style: {
              display: this.state.showPlayer ? 'none' : 'inline-flex'
            },
            onClick: function onClick() {
              _this2.setState({ showPlayer: true });
            }
          },
          Object(preact_min["h"])(YoutubeThumbnail_YoutubeThumbnail, {
            youtubeId: item.youtubeId,
            index: 0,
            onLoad: this.onImageLoad,
            onError: this.onImageError,
            style: { objectFit: 'cover', width: '100%' }
          })
        )
      ),
      Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
          'div',
          null,
          item.points,
          ' points'
        ),
        Object(preact_min["h"])(
          'div',
          null,
          item.title
        ),
        item.contentDetails && Object(preact_min["h"])(
          'div',
          null,
          this.formatDuration(item.contentDetails.duration)
        ),
        Object(preact_min["h"])(
          'a',
          { target: '_blank', href: item.url },
          'Youtube',
          ' '
        ),
        ' ',
        Object(preact_min["h"])(
          'a',
          {
            target: '_blank',
            href: 'https://news.ycombinator.com/item?id=' + item.objectID
          },
          'HN'
        ),
        ' ',
        Object(preact_min["h"])(
          'a',
          { href: '/item/' + item.objectID },
          'Share'
        )
      ),
      Object(preact_min["h"])(lib_default.a, { date: item.created_at }),
      Object(preact_min["h"])(
        'div',
        null,
        dayjs_min_default()(item.created_at).format('ddd DD MMM YYYY')
      ),
      item.children && item.children.length && item.children.map(function (comment) {
        return Object(preact_min["h"])(
          'div',
          { style: { padding: '10px', margin: '10px 0 0 10px' } },
          Object(preact_min["h"])(
            'div',
            null,
            comment.author
          ),
          Object(preact_min["h"])(lib_default.a, { date: comment.created_at }),
          Object(preact_min["h"])('div', {
            style: { background: '#222', padding: '10px' },
            dangerouslySetInnerHTML: { __html: comment.text }
          })
        );
      })
    );
  };

  return Item;
}(preact_min["Component"]), item__class.defaultProps = {
  onError: function onError() {},
  onReady: function onReady() {},
  onStateChange: function onStateChange() {}
}, item__temp);

// CONCATENATED MODULE: ./components/item/index.js

/* harmony default export */ var components_item = (item_Item);
// CONCATENATED MODULE: ./utils/getUrlQueryParameters.js
// Straight from SO 😭
function getUrlQueryParameters(url) {
  var question = url.indexOf('?');
  var hash = url.indexOf('#');
  if (hash == -1 && question == -1) return {};
  if (hash == -1) hash = url.length;
  var query = question == -1 || hash == question + 1 ? url.substring(hash) : url.substring(question + 1, hash);
  var result = {};
  query.split('&').forEach(function (part) {
    if (!part) return;
    part = part.split('+').join(' '); // replace every + with space, regexp-free version
    var eq = part.indexOf('=');
    var key = eq > -1 ? part.substr(0, eq) : part;
    var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : '';
    var from = key.indexOf('[');
    if (from == -1) result[decodeURIComponent(key)] = val;else {
      var to = key.indexOf(']', from);
      var index = decodeURIComponent(key.substring(from + 1, to));
      key = decodeURIComponent(key.substring(0, from));
      if (!result[key]) result[key] = [];
      if (!index) result[key].push(val);else result[key][index] = val;
    }
  });
  return result;
}
// CONCATENATED MODULE: ./components/feed/Feed.js
var Feed__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Feed__class, Feed__temp, Feed__initialiseProps;



function Feed__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Feed__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Feed__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function sumoEmail() {
  if (window.location.href.indexOf('localhost') > -1) return;(function (s, u, m, o, j, v) {
    j = u.createElement(m);
    v = u.getElementsByTagName(m)[0];
    j.async = 1;
    j.src = o;
    j.dataset.sumoSiteId = 'bfde1ff840e98cd64e99636c66731caa78e184c7d4638180c1ff6e406d6ca105';
    v.parentNode.insertBefore(j, v);
  })(window, document, 'script', '//load.sumo.com/');
}

function endOfToday() {
  return dayjs_min_default()().add(1, 'day').hour(0).minute(0).second(0).millisecond(0);
}

var Feed__ref = Object(preact_min["h"])(components_Info, { message: 'No Videos for this period' });

var Feed_Feed = (Feed__temp = Feed__class = function (_Component) {
  Feed__inherits(Feed, _Component);

  function Feed() {
    Feed__classCallCheck(this, Feed);

    var _this = Feed__possibleConstructorReturn(this, _Component.call(this));

    Feed__initialiseProps.call(_this);

    var initialData = typeof window !== 'undefined' && window.__DATA__ || {};
    var videoOrder = initialData.videoOrder || [];
    var videos = initialData.videos || {};
    _this.state = {
      videoOrder: videoOrder,
      loading: null,
      page: 0,
      lastEndPage: 0,
      error: { message: null, details: null },
      videos: videos,
      brokenVideos: {},
      youtubeIDToObjectID: {},
      imageIndex: 0
    };
    _this.currentPlayer = { pauseVideo: function pauseVideo() {} };
    return _this;
  }

  Feed.prototype.componentDidMount = function componentDidMount() {
    return new Promise(function ($return, $error) {
      window.addEventListener('scroll', this.onScroll);
      return Promise.resolve(this.loadPage()).then(function ($await_7) {
        try {
          sumoEmail();
          return $return();
        } catch ($boundEx) {
          return $error($boundEx);
        }
      }, $error);
    }.bind(this));
  };

  Feed.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  };

  Feed.prototype.componentDidUpdate = function componentDidUpdate(prev) {
    return new Promise(function ($return, $error) {
      if (this.props.url !== prev.url) {
        this.resetAndLoadFirstPage();
      }
      return $return();
    }.bind(this));
  };

  Feed.prototype.loadPage = function loadPage() {
    return new Promise(function ($return, $error) {
      if (this.props.path === '/week') {
        return Promise.resolve(this.week()).then(function ($await_8) {
          try {
            return $If_2.call(this);
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }.bind(this), $error);
      } else {
        if (this.props.path === '/fortnight') {
          return Promise.resolve(this.fortnight()).then(function ($await_9) {
            try {
              return $If_3.call(this);
            } catch ($boundEx) {
              return $error($boundEx);
            }
          }.bind(this), $error);
        } else {
          if (this.props.path === '/month') {
            return Promise.resolve(this.month()).then(function ($await_10) {
              try {
                return $If_4.call(this);
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }.bind(this), $error);
          } else {
            if (this.props.path === '/alltime') {
              return Promise.resolve(this.allTime()).then(function ($await_11) {
                try {
                  return $If_5.call(this);
                } catch ($boundEx) {
                  return $error($boundEx);
                }
              }.bind(this), $error);
            } else {
              if (this.props.path === '/random') {
                return Promise.resolve(this.randomFortnight(parseFloat(this.props.matches.r))).then(function ($await_12) {
                  try {
                    return $If_6.call(this);
                  } catch ($boundEx) {
                    return $error($boundEx);
                  }
                }.bind(this), $error);
              } else {
                return Promise.resolve(this.randomFortnight()).then(function ($await_13) {
                  try {
                    return $If_6.call(this);
                  } catch ($boundEx) {
                    return $error($boundEx);
                  }
                }.bind(this), $error);
              }

              function $If_6() {
                return $If_5.call(this);
              }
            }
            function $If_5() {
              return $If_4.call(this);
            }
          }
          function $If_4() {
            return $If_3.call(this);
          }
        }
        function $If_3() {
          return $If_2.call(this);
        }
      }
      function $If_2() {
        return $return();
      }
    }.bind(this));
  };

  Feed.prototype.week = function week() {
    return new Promise(function ($return, $error) {
      var endOfDay = endOfToday();
      return $return(this.doLoadPage(dayjs_min_default()(endOfDay).subtract(1, 'week'), dayjs_min_default()(endOfDay), this.state.page));
    }.bind(this));
  };

  Feed.prototype.allTime = function allTime() {
    return new Promise(function ($return, $error) {
      return $return(this.doLoadPage(undefined, undefined, this.state.page));
    }.bind(this));
  };

  Feed.prototype.fortnight = function fortnight() {
    return new Promise(function ($return, $error) {
      var endOfDay = endOfToday();
      return $return(this.doLoadPage(dayjs_min_default()(endOfDay).subtract(2, 'week'), dayjs_min_default()(endOfDay), this.state.page));
    }.bind(this));
  };

  Feed.prototype.month = function month() {
    return new Promise(function ($return, $error) {
      var endOfDay = endOfToday();
      return $return(this.doLoadPage(dayjs_min_default()(endOfDay).subtract(1, 'month'), dayjs_min_default()(endOfDay), this.state.page));
    }.bind(this));
  };

  Feed.prototype.randomFortnight = function randomFortnight(random) {
    return new Promise(function ($return, $error) {
      random = random || Math.random();
      var FIRST_HN_POST_DATE = '2006-10-09T18:21:51.000Z';
      var totalDaysHNActive = dayjs_min_default()().diff(dayjs_min_default()(FIRST_HN_POST_DATE), 'day');
      var daysAgo = Math.floor(random * (totalDaysHNActive / 15)) * 15;
      var beginNextMonth = dayjs_min_default()().add(1, 'month').date(1);
      var start = dayjs_min_default()(beginNextMonth).subtract(daysAgo + 15, 'day');
      var end = dayjs_min_default()(beginNextMonth).subtract(daysAgo, 'day');
      return $return(this.doLoadPage(start, end, this.state.page));
    }.bind(this));
  };

  Feed.prototype.render = function render() {
    var _this2 = this;

    return Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(
        'div',
        { className: feed_style_default.a.infoContainer },
        Object(preact_min["h"])(components_Loader, { message: this.state.loading }),
        Object(preact_min["h"])(components_Info, {
          message: this.state.error.message,
          details: this.state.error.details
        }),
        !this.state.videoOrder.length && !this.state.loading && Feed__ref,
        Object(preact_min["h"])(
          'div',
          { style: 'text-align: center; padding-top: 10px;' },
          'From ',
          this.state.start && this.state.start,
          ' to',
          ' ',
          this.state.end && this.state.end
        )
      ),
      Object(preact_min["h"])(
        'div',
        { className: feed_style_default.a.searchContainer },
        this.state.videoOrder.map(function (objectID, i) {
          var x = _this2.state.videos[objectID];
          return Object(preact_min["h"])(
            'div',
            { key: x.objectID, style: { marginBottom: '40px' } },
            Object(preact_min["h"])(components_item, {
              showPlayer: i === 0,
              item: x,
              onStateChange: _this2.onStateChange,
              onError: _this2.onError(i, x.objectID),
              onReady: _this2.onReady(i, x.objectID)
            })
          );
        })
      ),
      Object(preact_min["h"])('div', {
        style: 'margin-top: 300px',
        ref: function ref(_ref2) {
          if (_ref2 && _ref2 !== _this2.lastVideoContainerRef) {
            _this2.lastVideoContainerRef = _ref2;
          }
        }
      })
    );
  };

  return Feed;
}(preact_min["Component"]), Feed__initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onScroll = function () {
    if (_this3.lastVideoContainerRef) {
      var isLastVideoInViewport = _this3.lastVideoContainerRef.getBoundingClientRect().y < window.innerHeight;
      if (isLastVideoInViewport && !_this3.state.reachedEndOfPages) {
        _this3.setState({
          page: _this3.state.page + 1,
          prevScrollElementId: _this3.lastVideoContainerRef.id
        }, _this3.loadPage);
      }
    }
  };

  this.onStateChange = function (e) {
    var PLAYING = 1;
    if (e.data === PLAYING) {
      if (_this3.currentPlayer.a !== e.target.a) _this3.currentPlayer.pauseVideo();
      _this3.currentPlayer = e.target;
    }
  };

  this.onReady = function (index, id) {
    return function (e) {
      _this3.currentPlayer.pauseVideo();
      _this3.currentPlayer = e.target.playVideo();
      return _this3.setState({ firstVideoLoaded: true });
    };
  };

  this.onError = function (index, id) {
    return function (e) {
      var _extends2;

      var brokenVideos = Feed__extends({}, _this3.state.brokenVideos, (_extends2 = {}, _extends2[id] = true, _extends2));
      var videoOrder = _this3.state.videoOrder.filter(function (x) {
        return !(x in brokenVideos);
      });
      _this3.setState({ brokenVideos: brokenVideos, videoOrder: videoOrder });
    };
  };

  this.resetAndLoadFirstPage = function () {
    _this3.currentPlayer = { pauseVideo: function pauseVideo() {} };
    _this3.setState({
      page: 0,
      youtubeIDToObjectID: {},
      videoOrder: [],
      lastVideoContainerRef: null
    }, _this3.loadPage);
  };

  this.doLoadPage = function (start, end, page) {
    return new Promise(function ($return, $error) {
      var nullDay = { format: function format() {
          return '';
        }, unix: function unix() {
          return undefined;
        } };
      if (!start) start = nullDay;
      if (!end) end = nullDay;

      var newState = {
        loading: 'Fetching hacker news feed',
        start: start.format('DD MMM YYYY'),
        end: end.format('DD MMM YYYY')
      };
      if (page === 0) {
        newState.videoOrder = [];
        newState.videos = {};
      }
      _this3.setState(newState, function () {
        return new Promise(function ($return, $error) {
          var res, data, _videoOrder, youtubeIDToObjectID, videos, _iterator, _isArray, _i, _ref3, item, youtubeId, videoOrder;

          res = void 0;
          var $Try_1_Post = function () {
            try {
              return Promise.resolve(res.json()).then(function ($await_14) {
                try {

                  data = $await_14;
                  if (!res.ok) {
                    return $return(_this3.setState({
                      loading: null,
                      error: {
                        message: 'Error fetching Hacker News TV Feed',
                        details: JSON.stringify(data, null, 2)
                      }
                    }));
                  }

                  _videoOrder = [];
                  youtubeIDToObjectID = {};
                  videos = {};
                  for (_iterator = data.hits, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                    if (_isArray) {
                      if (_i >= _iterator.length) break;
                      _ref3 = _iterator[_i++];
                    } else {
                      _i = _iterator.next();
                      if (_i.done) break;
                      _ref3 = _i.value;
                    }

                    item = _ref3;

                    youtubeId = getUrlQueryParameters(item.url).v;
                    item.youtubeId = youtubeId;
                    if (!(youtubeId in _this3.state.youtubeIDToObjectID) && !(youtubeId in youtubeIDToObjectID)) {
                      _videoOrder.push(item.objectID);
                      videos[item.objectID] = item;
                      youtubeIDToObjectID[youtubeId] = item.objectID;
                    }
                  }

                  videoOrder = page < 1 ? _videoOrder : _this3.state.videoOrder.concat(_videoOrder);
                  _this3.setState({
                    loading: null,
                    videoOrder: videoOrder,
                    videos: Feed__extends({}, _this3.state.videos, videos),
                    youtubeIDToObjectID: Feed__extends({}, _this3.state.youtubeIDToObjectID, youtubeIDToObjectID),
                    reachedEndOfPages: !data.hits.length
                  }, _this3.onPageLoaded);
                  return Promise.resolve(_this3.getVideoInfo(Object.keys(youtubeIDToObjectID))).then(function ($await_15) {
                    try {
                      return $return();
                    } catch ($boundEx) {
                      return $error($boundEx);
                    }
                  }, $error);
                } catch ($boundEx) {
                  return $error($boundEx);
                }
              }, $error);
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };var $Try_1_Catch = function (e) {
            try {
              return $return(_this3.setState({
                loading: null,
                error: {
                  message: 'Network error fetching HN feed',
                  details: e.toString()
                }
              }));
            } catch ($boundEx) {
              return $error($boundEx);
            }
          };try {
            return Promise.resolve(getVideos(start.unix(), end.unix(), page)).then(function ($await_16) {
              try {
                res = $await_16;
                return $Try_1_Post();
              } catch ($boundEx) {
                return $Try_1_Catch($boundEx);
              }
            }, $Try_1_Catch);
          } catch (e) {
            $Try_1_Catch(e)
          }
        });
      });
      return $return();
    });
  };

  this.getVideoInfo = function (videoIds) {
    return new Promise(function ($return, $error) {
      var res, data, videos;
      return Promise.resolve(getVideoInfo(videoIds.join(','))).then(function ($await_17) {
        try {
          res = $await_17;
          return Promise.resolve(res.json()).then(function ($await_18) {
            try {
              data = $await_18;
              if (res.ok) {
                videos = {};
                data.items.map(function (x) {
                  var video = _this3.state.videos[_this3.state.youtubeIDToObjectID[x.id]];
                  videos[video.objectID] = Feed__extends({}, video, { contentDetails: x.contentDetails });
                });
                _this3.setState({ videos: Feed__extends({}, _this3.state.videos, videos) });
              }
              return $return();
            } catch ($boundEx) {
              return $error($boundEx);
            }
          }, $error);
        } catch ($boundEx) {
          return $error($boundEx);
        }
      }, $error);
    });
  };
}, Feed__temp);

// CONCATENATED MODULE: ./components/feed/index.js

/* harmony default export */ var feed = (Feed_Feed);
// EXTERNAL MODULE: ./routes/home/style.css
var home_style = __webpack_require__("ZAL5");
var home_style_default = /*#__PURE__*/__webpack_require__.n(home_style);

// CONCATENATED MODULE: ./routes/home/Home.js





var Home_Home = function Home(props) {
  return Object(preact_min["h"])(
    'div',
    { className: home_style_default.a.home },
    Object(preact_min["h"])(feed, props)
  );
};

/* harmony default export */ var home_Home = (Home_Home);
// CONCATENATED MODULE: ./routes/home/index.js

/* harmony default export */ var home = (home_Home);
// EXTERNAL MODULE: ../node_modules/@pusher/chatkit-client/dist/web/chatkit.js
var chatkit = __webpack_require__("Ujn/");
var chatkit_default = /*#__PURE__*/__webpack_require__.n(chatkit);

// CONCATENATED MODULE: ./components/DetailsPage.js


function DetailsPage__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DetailsPage__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function DetailsPage__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var DetailsPage_DetailsPage = function (_Component) {
  DetailsPage__inherits(DetailsPage, _Component);

  function DetailsPage() {
    DetailsPage__classCallCheck(this, DetailsPage);

    var _this = DetailsPage__possibleConstructorReturn(this, _Component.call(this));

    _this.loadVideo = function (objectID) {
      return new Promise(function ($return, $error) {
        var res, data;
        return Promise.resolve(getVideo(objectID)).then(function ($await_1) {
          try {
            res = $await_1;
            return Promise.resolve(res.json()).then(function ($await_2) {
              try {
                data = $await_2;
                data.objectID = data.id;
                data.youtubeId = getUrlQueryParameters(data.url).v;
                _this.setState({ item: data });
                return $return();
              } catch ($boundEx) {
                return $error($boundEx);
              }
            }, $error);
          } catch ($boundEx) {
            return $error($boundEx);
          }
        }, $error);
      });
    };

    _this.state = {
      item: {}
    };
    _this.currentPlayer = { pauseVideo: function pauseVideo() {} };
    return _this;
  }

  DetailsPage.prototype.componentDidMount = function componentDidMount() {
    return new Promise(function ($return, $error) {
      console.log(this.props.matches.objectID);
      this.loadVideo(this.props.matches.objectID);
      var tokenProvider = new chatkit_default.a.TokenProvider({
        url: 'https://us-central1-hacker-news-tv.cloudfunctions.net/identify'
        // 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a9652974-4f20-4616-a573-a0a67caa94e9/token',
      });

      var chatManager = new chatkit_default.a.ChatManager({
        instanceLocator: 'v1:us1:a9652974-4f20-4616-a573-a0a67caa94e9',
        userId: 'mfbx',
        tokenProvider: tokenProvider
      });

      chatManager.connect().then(function (currentUser) {
        currentUser.subscribeToRoomMultipart({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: function onMessage(message) {
              console.log('message', message);
              var ul = document.getElementById('message-list');
              var li = document.createElement('li');
              li.appendChild(document.createTextNode(message.senderId + ': ' +
              // We know our message will have a single part with
              // a plain text content because we used
              // sendSimpleMessage. In general we'd have to check
              // the partType here.
              message.parts[0].payload.content));
              ul.appendChild(li);
            }
          }
        });

        var form = document.getElementById('message-form');
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var input = document.getElementById('message-text');
          currentUser.sendSimpleMessage({
            text: input.value,
            roomId: currentUser.rooms[0].id
          });
          input.value = '';
        });
      }).catch(function (error) {
        console.error('error:', error);
      });
      return $return();
    }.bind(this));
  };

  DetailsPage.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      null,
      Object(preact_min["h"])(components_item, { item: this.state.item })
    );
  };

  return DetailsPage;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./routes/DetailsPage.js




/* harmony default export */ var routes_DetailsPage = (function (props) {
  return Object(preact_min["h"])(
    'div',
    null,
    Object(preact_min["h"])(DetailsPage_DetailsPage, props)
  );
});
// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




// import './googleapi'


// Code-splitting is automated for routes



var app__ref = Object(preact_min["h"])(header, null);

var app__ref2 = Object(preact_min["h"])(home, { path: '/' });

var app__ref3 = Object(preact_min["h"])(home, { path: '/week' });

var app__ref4 = Object(preact_min["h"])(home, { path: '/fortnight' });

var _ref5 = Object(preact_min["h"])(home, { path: '/month' });

var _ref6 = Object(preact_min["h"])(home, { path: '/alltime' });

var _ref7 = Object(preact_min["h"])(home, { path: '/random' });

var _ref8 = Object(preact_min["h"])(routes_DetailsPage, { path: '/item/:objectID' });

var _ref9 = Object(preact_min["h"])(home, { 'default': true });

var app_App = function (_Component) {
  app__inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    app__classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
      _this.currentUrl = e.url;
    }, _temp), app__possibleConstructorReturn(_this, _ret);
  }
  /** Gets fired when the route changes.
   *  @param {Object} event       "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url   The newly routed URL
   */


  App.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { id: 'app' },
      app__ref,
      Object(preact_min["h"])(
        preact_router_es_Router,
        { onChange: this.handleRoute },
        app__ref2,
        app__ref3,
        app__ref4,
        _ref5,
        _ref6,
        _ref7,
        _ref8,
        _ref9
      )
    );
  };

  return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    null != e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "KyZb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Events
 * `volumeChange` is not officially supported but seems to work
 * it emits an object: `{volume: 82.6923076923077, muted: false}`
 */
exports.default = ['ready', 'stateChange', 'playbackQualityChange', 'playbackRateChange', 'error', 'apiChange', 'volumeChange'];
module.exports = exports['default'];

/***/ }),

/***/ "NeM/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PlayerStates = __webpack_require__("qesD");

var _PlayerStates2 = _interopRequireDefault(_PlayerStates);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
  pauseVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
    stateChangeRequired: false
  },
  playVideo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
    stateChangeRequired: false
  },
  seekTo: {
    acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
    stateChangeRequired: true,

    // TRICKY: `seekTo` may not cause a state change if no buffering is
    // required.
    timeout: 3000
  }
};
module.exports = exports['default'];

/***/ }),

/***/ "QPpz":
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "Ujn/":
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

!function (e, t) {
   true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Chatkit = t();
}(this, function () {
  "use strict";
  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;var e,
      t,
      n = (function (e, t) {
    var n;"undefined" != typeof self && self, n = function n() {
      return function (e) {
        var t = {};function n(r) {
          if (t[r]) return t[r].exports;var o = t[r] = { i: r, l: !1, exports: {} };return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
        }return n.m = e, n.c = t, n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
        }, n.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e.default;
          } : function () {
            return e;
          };return n.d(t, "a", t), t;
        }, n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 10);
      }([function (e, t, n) {
        function r(e) {
          var t = {};if (!e) return t;for (var n = 0, r = e.split("\r\n"); n < r.length; n++) {
            var o = r[n],
                s = o.indexOf(": ");if (s > 0) {
              var i = o.substring(0, s),
                  u = o.substring(s + 2);t[i] = u;
            }
          }return t;
        }Object.defineProperty(t, "__esModule", { value: !0 }), t.responseToHeadersObject = r;var o = function () {
          function e(e, t, n) {
            this.statusCode = e, this.headers = t, this.info = n;
          }return e.fromXHR = function (t) {
            var n = t.responseText;try {
              n = JSON.parse(t.responseText);
            } catch (e) {}return new e(t.status, r(t.getAllResponseHeaders()), n);
          }, e;
        }();t.ErrorResponse = o;var s = function () {
          return function (e) {
            this.error = e;
          };
        }();t.NetworkError = s;var i = function () {
          return function (e) {
            this.error = e;
          };
        }();t.ProtocolError = i, function (e) {
          e[e.UNSENT = 0] = "UNSENT", e[e.OPENED = 1] = "OPENED", e[e.HEADERS_RECEIVED = 2] = "HEADERS_RECEIVED", e[e.LOADING = 3] = "LOADING", e[e.DONE = 4] = "DONE";
        }(t.XhrReadyState || (t.XhrReadyState = {}));
      }, function (e, t, n) {
        var r;Object.defineProperty(t, "__esModule", { value: !0 }), function (e) {
          e[e.VERBOSE = 1] = "VERBOSE", e[e.DEBUG = 2] = "DEBUG", e[e.INFO = 3] = "INFO", e[e.WARNING = 4] = "WARNING", e[e.ERROR = 5] = "ERROR";
        }(r = t.LogLevel || (t.LogLevel = {}));var o = function () {
          function e(e) {
            void 0 === e && (e = 2), this.threshold = e;var t = Array(),
                n = "--------------------------------------------------------------------------------";window.console.group || (window.console.group = function (e) {
              t.push(e), window.console.log("%c \nBEGIN GROUP: %c", n, e);
            }), window.console.groupEnd || (window.console.groupEnd = function () {
              window.console.log("END GROUP: %c\n%c", t.pop(), n);
            });
          }return e.prototype.verbose = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }this.log(window.console.log, r.VERBOSE, e);
          }, e.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }this.log(window.console.log, r.DEBUG, e);
          }, e.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }this.log(window.console.info, r.INFO, e);
          }, e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }this.log(window.console.warn, r.WARNING, e);
          }, e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }this.log(window.console.error, r.ERROR, e);
          }, e.prototype.log = function (e, t, n) {
            var o = this;if (t >= this.threshold) {
              var s = "Logger." + r[t];n.length > 1 ? (window.console.group(), n.forEach(function (t) {
                o.errorAwareLog(e, t, s);
              }), window.console.groupEnd()) : this.errorAwareLog(e, n[0], s);
            }
          }, e.prototype.errorAwareLog = function (e, t, n) {
            if (null != t && t.info && t.info.error_uri) {
              var r = t.info.error_description;e((r || "An error has occurred") + ". More information can be found at " + t.info.error_uri + ". Error object: ", t);
            } else e(n + ": ", t);
          }, e;
        }();t.ConsoleLogger = o;var s = function () {
          function e() {}return e.prototype.verbose = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
          }, e.prototype.debug = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
          }, e.prototype.info = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
          }, e.prototype.warn = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
          }, e.prototype.error = function () {
            for (var e = [], t = 0; t < arguments.length; t++) {
              e[t] = arguments[t];
            }
          }, e;
        }();t.EmptyLogger = s;
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0);t.createRetryStrategyOptionsOrDefault = function (e) {
          var t = e.initialTimeoutMillis || 1e3,
              n = e.maxTimeoutMillis || 5e3,
              r = -1;return void 0 !== e.limit && null != e.limit && (r = e.limit), { increaseTimeout: void 0 !== e.increaseTimeout ? e.increaseTimeout : function (e) {
              return 2 * e > n ? n : 2 * e;
            }, initialTimeoutMillis: t, limit: r, maxTimeoutMillis: n };
        };var o = function () {
          return function (e) {
            this.waitTimeMillis = e;
          };
        }();t.Retry = o;var s = function () {
          return function (e) {
            this.error = e;
          };
        }();t.DoNotRetry = s;var i = function () {
          function e(e, t, n) {
            this.options = e, this.logger = t, this.retryUnsafeRequests = n, this.currentRetryCount = 0, this.initialTimeoutMillis = e.initialTimeoutMillis, this.maxTimeoutMillis = e.maxTimeoutMillis, this.limit = e.limit, this.increaseTimeoutFunction = e.increaseTimeout, this.currentBackoffMillis = this.initialTimeoutMillis;
          }return e.prototype.attemptRetry = function (e) {
            if (this.logger.verbose(this.constructor.name + ": Error received", e), this.currentRetryCount >= this.limit && this.limit >= 0) return this.logger.verbose(this.constructor.name + ": Retry count is over the maximum limit: " + this.limit), new s(e);if (null == e) return new o(this.calculateMillisToRetry());if (e instanceof r.ErrorResponse && e.headers["Retry-After"]) return this.logger.verbose(this.constructor.name + ": Retry-After header is present, retrying in " + e.headers["Retry-After"]), new o(1e3 * parseInt(e.headers["Retry-After"], 10));if (this.retryUnsafeRequests) return new o(this.calculateMillisToRetry());switch (e.constructor) {case r.ErrorResponse:
                var t = e.statusCode,
                    n = e.headers["Request-Method"];return t >= 500 && t < 600 && ("GET" === (i = (i = n).toUpperCase()) || "HEAD" === i || "OPTIONS" === i || "SUBSCRIBE" === i) ? (this.logger.verbose(this.constructor.name + ": Encountered an error with status code " + t + " and request method " + n + ", will retry"), new o(this.calculateMillisToRetry())) : (this.logger.verbose(this.constructor.name + ": Encountered an error with status code " + t + " and request method " + n + ", will not retry", e), new s(e));case r.NetworkError:
                return this.logger.verbose(this.constructor.name + ": Encountered a network error, will retry", e), new o(this.calculateMillisToRetry());case r.ProtocolError:
                return this.logger.verbose(this.constructor.name + ": Encountered a protocol error, will retry", e), new o(this.calculateMillisToRetry());default:
                return this.logger.verbose(this.constructor.name + ": Encountered an error, will retry", e), new o(this.calculateMillisToRetry());}var i;
          }, e.prototype.calculateMillisToRetry = function () {
            return this.currentBackoffMillis = this.increaseTimeoutFunction(this.currentBackoffMillis), this.logger.verbose(this.constructor.name + ": Retrying in " + this.currentBackoffMillis + "ms"), this.currentBackoffMillis;
          }, e;
        }();t.RetryResolution = i;
      }, function (e, t, n) {
        var r = this && this.__assign || Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            for (var o in t = arguments[n]) {
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
          }return e;
        };Object.defineProperty(t, "__esModule", { value: !0 });var o = n(1),
            s = n(4),
            i = n(5),
            u = n(6),
            a = n(11),
            c = n(12),
            h = n(7),
            l = n(13),
            d = n(14),
            f = n(8),
            p = function () {
          function e(e) {
            this.options = e, this.host = e.host.replace(/(\/)+$/, "");var t = e.logger || new o.ConsoleLogger();this.logger = t, this.websocketTransport = new d.default(this.host, t), this.httpTransport = new l.default(this.host, e.encrypted), this.sdkProduct = e.sdkProduct || "unknown", this.sdkVersion = e.sdkVersion || "unknown", this.sdkPlatform = navigator ? "ReactNative" === navigator.product ? "react-native" : "web" : "node";
          }return e.prototype.request = function (e, t) {
            var n = this;return e.tokenProvider ? e.tokenProvider.fetchToken(t).then(function (t) {
              var n;return void 0 !== e.headers ? e.headers.Authorization = "Bearer " + t : e.headers = ((n = {}).Authorization = "Bearer " + t, n), e;
            }).then(function (e) {
              return n.makeRequest(e);
            }) : this.makeRequest(e);
          }, e.prototype.subscribeResuming = function (e, t, n, o, s, u) {
            var l = c.replaceMissingListenersWithNoOps(n),
                d = a.subscribeStrategyListenersFromSubscriptionListeners(l),
                p = !1;return i.createResumingStrategy(o, h.createTokenProvidingStrategy(f.createTransportStrategy(e, this.websocketTransport, this.logger), this.logger, u), this.logger, s)({ onEnd: d.onEnd, onError: d.onError, onEvent: d.onEvent, onOpen: function onOpen(e) {
                p || (p = !0, d.onOpen(e)), l.onSubscribe();
              }, onRetrying: d.onRetrying }, r({}, t, this.infoHeaders()));
          }, e.prototype.subscribeNonResuming = function (e, t, n, o, s) {
            var i = c.replaceMissingListenersWithNoOps(n),
                l = a.subscribeStrategyListenersFromSubscriptionListeners(i),
                d = !1;return u.createRetryingStrategy(o, h.createTokenProvidingStrategy(f.createTransportStrategy(e, this.websocketTransport, this.logger), this.logger, s), this.logger)({ onEnd: l.onEnd, onError: l.onError, onEvent: l.onEvent, onOpen: function onOpen(e) {
                d || (d = !0, l.onOpen(e)), i.onSubscribe();
              }, onRetrying: l.onRetrying }, r({}, t, this.infoHeaders()));
          }, e.prototype.infoHeaders = function () {
            return { "X-SDK-Language": "javascript", "X-SDK-Platform": this.sdkPlatform, "X-SDK-Product": this.sdkProduct, "X-SDK-Version": this.sdkVersion };
          }, e.prototype.makeRequest = function (e) {
            var t = this;return s.executeNetworkRequest(function () {
              return t.httpTransport.request(r({}, e, { headers: r({}, e.headers, t.infoHeaders()) }));
            }, e).catch(function (e) {
              throw t.logger.error(e), e;
            });
          }, e;
        }();t.BaseClient = p;
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0);function o(e, t, n) {
          return e.onreadystatechange = function () {
            4 === e.readyState && (e.status >= 200 && e.status < 300 ? t(e.response) : 0 !== e.status ? n(r.ErrorResponse.fromXHR(e)) : n(new r.NetworkError("No Connection")));
          }, e;
        }t.executeNetworkRequest = function (e, t) {
          return new Promise(function (n, r) {
            !function (e, t) {
              t.json ? e.send(JSON.stringify(t.json)) : e.send(t.body);
            }(o(e(), n, r), t);
          });
        }, t.sendRawRequest = function (e) {
          return new Promise(function (t, n) {
            var r = o(new window.XMLHttpRequest(), t, n);if (r.withCredentials = Boolean(e.withCredentials), r.open(e.method.toUpperCase(), e.url, !0), e.headers) for (var s in e.headers) {
              e.headers.hasOwnProperty(s) && r.setRequestHeader(s, e.headers[s]);
            }r.send(e.body);
          });
        };
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
            o = n(2);t.createResumingStrategy = function (e, t, n, r) {
          var i = o.createRetryStrategyOptionsOrDefault(e),
              u = new o.RetryResolution(i, n);return function (e, r) {
            return new s(n, r, t, e, u);
          };
        };var s = function () {
          return function (e, t, n, r, o) {
            var s = this;this.unsubscribe = function () {
              s.state.unsubscribe();
            }, this.onTransition = function (e) {
              s.state = e;
            }, this.state = new i(this.onTransition, e, t, n, r, o);
          };
        }(),
            i = function () {
          function e(e, t, n, r, o, s, i) {
            var c = this;this.onTransition = e, this.logger = t, this.headers = n, this.nextSubscribeStrategy = r, this.listeners = o, this.retryResolution = s, this.initialEventId = i;var l = i;t.verbose("ResumingSubscription: transitioning to OpeningSubscriptionState"), l && (n["Last-Event-Id"] = l, t.verbose("ResumingSubscription: initialEventId is " + l)), this.underlyingSubscription = r({ onEnd: function onEnd(n) {
                e(new h(t, o, n));
              }, onError: function onError(i) {
                e(new a(i, e, t, n, o, r, s, l));
              }, onEvent: function onEvent(e) {
                l = e.eventId, o.onEvent(e);
              }, onOpen: function onOpen(n) {
                e(new u(t, n, o, c.underlyingSubscription, e));
              }, onRetrying: o.onRetrying }, n);
          }return e.prototype.unsubscribe = function () {
            this.onTransition(new c(this.logger)), null != this.underlyingSubscription && this.underlyingSubscription.unsubscribe();
          }, e;
        }(),
            u = function () {
          function e(e, t, n, r, o) {
            this.logger = e, this.headers = t, this.listeners = n, this.underlyingSubscription = r, this.onTransition = o, e.verbose("ResumingSubscription: transitioning to OpenSubscriptionState"), n.onOpen(t);
          }return e.prototype.unsubscribe = function () {
            this.onTransition(new c(this.logger)), this.underlyingSubscription.unsubscribe();
          }, e;
        }(),
            a = function () {
          function e(e, t, n, s, i, a, c, d) {
            var f = this;this.onTransition = t, this.logger = n, this.headers = s, this.listeners = i, this.nextSubscribeStrategy = a, this.retryResolution = c, this.timeout = -1, n.verbose("ResumingSubscription: transitioning to ResumingSubscriptionState");var p = function p(e, s) {
              i.onRetrying();var u,
                  a = ((u = e) instanceof r.ErrorResponse && (u.headers["Request-Method"] = "SUBSCRIBE"), c.attemptRetry(u));a instanceof o.Retry ? f.timeout = window.setTimeout(function () {
                g(s);
              }, a.waitTimeMillis) : t(new l(n, i, e));
            },
                g = function g(e) {
              n.verbose("ResumingSubscription: trying to re-establish the subscription"), e && (n.verbose("ResumingSubscription: lastEventId: " + e), s["Last-Event-Id"] = e), f.underlyingSubscription = a({ onEnd: function onEnd(e) {
                  t(new h(n, i, e));
                }, onError: function onError(e) {
                  p(e, d);
                }, onEvent: function onEvent(e) {
                  d = e.eventId, i.onEvent(e);
                }, onOpen: function onOpen(e) {
                  t(new u(n, e, i, f.underlyingSubscription, t));
                }, onRetrying: i.onRetrying }, s);
            };p(e, d);
          }return e.prototype.unsubscribe = function () {
            this.onTransition(new c(this.logger)), window.clearTimeout(this.timeout), null != this.underlyingSubscription && this.underlyingSubscription.unsubscribe();
          }, e;
        }(),
            c = function () {
          function e(e, t) {
            this.logger = e, e.verbose("ResumingSubscription: transitioning to EndingSubscriptionState");
          }return e.prototype.unsubscribe = function () {
            throw new Error("Subscription is already ending");
          }, e;
        }(),
            h = function () {
          function e(e, t, n) {
            this.logger = e, this.listeners = t, e.verbose("ResumingSubscription: transitioning to EndedSubscriptionState"), t.onEnd(n);
          }return e.prototype.unsubscribe = function () {
            throw new Error("Subscription has already ended");
          }, e;
        }(),
            l = function () {
          function e(e, t, n) {
            this.logger = e, this.listeners = t, e.verbose("ResumingSubscription: transitioning to FailedSubscriptionState", n), t.onError(n);
          }return e.prototype.unsubscribe = function () {
            throw new Error("Subscription has already ended");
          }, e;
        }();
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0),
            o = n(2);t.createRetryingStrategy = function (e, t, n) {
          var r = o.createRetryStrategyOptionsOrDefault(e),
              i = new o.RetryResolution(r, n);return function (e, r) {
            return new s(n, r, e, t, i);
          };
        };var s = function () {
          return function (e, t, n, r, o) {
            var s = this;this.unsubscribe = function () {
              s.state.unsubscribe();
            }, this.onTransition = function (e) {
              s.state = e;
            }, this.state = new i(this.onTransition, e, t, n, r, o);
          };
        }(),
            i = function () {
          function e(e, t, n, r, o, s) {
            var i = this;this.logger = t, this.headers = n, this.listeners = r, this.nextSubscribeStrategy = o, this.retryResolution = s, t.verbose("RetryingSubscription: transitioning to OpeningSubscriptionState"), this.underlyingSubscription = o({ onEnd: function onEnd(n) {
                return e(new c(t, r, n));
              }, onError: function onError(i) {
                return e(new u(i, e, t, n, r, o, s));
              }, onEvent: r.onEvent, onOpen: function onOpen(n) {
                return e(new a(t, r, n, i.underlyingSubscription, e));
              }, onRetrying: r.onRetrying }, n);
          }return e.prototype.unsubscribe = function () {
            throw this.underlyingSubscription.unsubscribe(), new Error("Method not implemented.");
          }, e;
        }(),
            u = function () {
          function e(e, t, n, s, i, u, l) {
            var d = this;this.onTransition = t, this.logger = n, this.headers = s, this.listeners = i, this.nextSubscribeStrategy = u, this.retryResolution = l, this.timeout = -1, n.verbose("RetryingSubscription: transitioning to RetryingSubscriptionState");var f = function f(e) {
              i.onRetrying();var s,
                  u = ((s = e) instanceof r.ErrorResponse && (s.headers["Request-Method"] = "SUBSCRIBE"), l.attemptRetry(s));u instanceof o.Retry ? d.timeout = window.setTimeout(function () {
                p();
              }, u.waitTimeMillis) : t(new h(n, i, e));
            },
                p = function p() {
              n.verbose("RetryingSubscription: trying to re-establish the subscription");var e = u({ onEnd: function onEnd(e) {
                  return t(new c(n, i, e));
                }, onError: function onError(e) {
                  return f(e);
                }, onEvent: i.onEvent, onOpen: function onOpen(r) {
                  t(new a(n, i, r, e, t));
                }, onRetrying: i.onRetrying }, s);
            };f(e);
          }return e.prototype.unsubscribe = function () {
            window.clearTimeout(this.timeout), this.onTransition(new c(this.logger, this.listeners));
          }, e;
        }(),
            a = function () {
          function e(e, t, n, r, o) {
            this.logger = e, this.listeners = t, this.headers = n, this.underlyingSubscription = r, this.onTransition = o, e.verbose("RetryingSubscription: transitioning to OpenSubscriptionState"), t.onOpen(n);
          }return e.prototype.unsubscribe = function () {
            this.underlyingSubscription.unsubscribe(), this.onTransition(new c(this.logger, this.listeners));
          }, e;
        }(),
            c = function () {
          function e(e, t, n) {
            this.logger = e, this.listeners = t, e.verbose("RetryingSubscription: transitioning to EndedSubscriptionState"), t.onEnd(n);
          }return e.prototype.unsubscribe = function () {
            throw new Error("Subscription has already ended");
          }, e;
        }(),
            h = function () {
          function e(e, t, n) {
            this.logger = e, this.listeners = t, e.verbose("RetryingSubscription: transitioning to FailedSubscriptionState", n), t.onError(n);
          }return e.prototype.unsubscribe = function () {
            throw new Error("Subscription has already ended");
          }, e;
        }();
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r = n(0);t.createTokenProvidingStrategy = function (e, t, n) {
          return n ? function (r, s) {
            return new o(t, r, s, n, e);
          } : e;
        };var o = function () {
          function e(e, t, n, r, o) {
            var u = this;this.logger = e, this.listeners = t, this.headers = n, this.tokenProvider = r, this.nextSubscribeStrategy = o, this.unsubscribe = function () {
              u.state.unsubscribe(), u.state = new i(u.logger);
            }, this.state = new s(e, n, o), this.subscribe();
          }return e.prototype.subscribe = function () {
            var e = this;this.tokenProvider.fetchToken().then(function (t) {
              var n = _extends({}, e.listeners);e.state.subscribe(t, { onEnd: function onEnd(t) {
                  e.state = new i(e.logger), n.onEnd(t);
                }, onError: function onError(r) {
                  e.isTokenExpiredError(r) ? (e.tokenProvider.clearToken(t), e.subscribe()) : (e.state = new i(e.logger), n.onError(r));
                }, onEvent: e.listeners.onEvent, onOpen: e.listeners.onOpen });
            }).catch(function (t) {
              e.logger.debug("TokenProvidingSubscription: error when fetching token:", t), e.state = new i(e.logger), e.listeners.onError(t);
            });
          }, e.prototype.isTokenExpiredError = function (e) {
            return e instanceof r.ErrorResponse && 401 === e.statusCode && "authentication/expired" === e.info;
          }, e;
        }(),
            s = function () {
          function e(e, t, n) {
            this.logger = e, this.headers = t, this.nextSubscribeStrategy = n, e.verbose("TokenProvidingSubscription: transitioning to ActiveState");
          }return e.prototype.subscribe = function (e, t) {
            var n = this;this.putTokenIntoHeader(e), this.underlyingSubscription = this.nextSubscribeStrategy({ onEnd: function onEnd(e) {
                n.logger.verbose("TokenProvidingSubscription: subscription ended"), t.onEnd(e);
              }, onError: function onError(e) {
                n.logger.verbose("TokenProvidingSubscription: subscription errored:", e), t.onError(e);
              }, onEvent: t.onEvent, onOpen: function onOpen(e) {
                n.logger.verbose("TokenProvidingSubscription: subscription opened"), t.onOpen(e);
              }, onRetrying: t.onRetrying }, this.headers);
          }, e.prototype.unsubscribe = function () {
            null != this.underlyingSubscription && this.underlyingSubscription.unsubscribe();
          }, e.prototype.putTokenIntoHeader = function (e) {
            this.headers.Authorization = "Bearer " + e, this.logger.verbose("TokenProvidingSubscription: token fetched: " + e);
          }, e;
        }(),
            i = function () {
          function e(e) {
            this.logger = e, e.verbose("TokenProvidingSubscription: transitioning to InactiveState");
          }return e.prototype.subscribe = function (e, t) {
            this.logger.verbose("TokenProvidingSubscription: subscribe called in Inactive state; doing nothing");
          }, e.prototype.unsubscribe = function () {
            this.logger.verbose("TokenProvidingSubscription: unsubscribe called in Inactive state; doing nothing");
          }, e;
        }();
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.createTransportStrategy = function (e, t, n) {
          return function (n, r) {
            return t.subscribe(e, n, r);
          };
        };
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.HOST_BASE = "pusherplatform.io";
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r = n(3);t.BaseClient = r.BaseClient;var o = n(9);t.HOST_BASE = o.HOST_BASE;var s = n(15);t.Instance = s.default;var i = n(1);t.ConsoleLogger = i.ConsoleLogger, t.EmptyLogger = i.EmptyLogger;var u = n(0);t.ErrorResponse = u.ErrorResponse, t.NetworkError = u.NetworkError, t.responseToHeadersObject = u.responseToHeadersObject, t.XhrReadyState = u.XhrReadyState;var a = n(4);t.executeNetworkRequest = a.executeNetworkRequest, t.sendRawRequest = a.sendRawRequest;var c = n(5);t.createResumingStrategy = c.createResumingStrategy;var h = n(2);t.createRetryStrategyOptionsOrDefault = h.createRetryStrategyOptionsOrDefault, t.DoNotRetry = h.DoNotRetry, t.Retry = h.Retry, t.RetryResolution = h.RetryResolution;var l = n(6);t.createRetryingStrategy = l.createRetryingStrategy;var d = n(7);t.createTokenProvidingStrategy = d.createTokenProvidingStrategy;var f = n(8);t.createTransportStrategy = f.createTransportStrategy, t.default = { BaseClient: r.BaseClient, ConsoleLogger: i.ConsoleLogger, EmptyLogger: i.EmptyLogger, Instance: s.default };
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.subscribeStrategyListenersFromSubscriptionListeners = function (e) {
          return { onEnd: e.onEnd, onError: e.onError, onEvent: e.onEvent, onOpen: e.onOpen, onRetrying: e.onRetrying };
        };
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 }), t.replaceMissingListenersWithNoOps = function (e) {
          return { onEnd: e.onEnd || function (e) {}, onError: e.onError || function (e) {}, onEvent: e.onEvent || function (e) {}, onOpen: e.onOpen || function (e) {}, onRetrying: e.onRetrying || function () {}, onSubscribe: e.onSubscribe || function () {} };
        };
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r,
            o = n(0);!function (e) {
          e[e.UNOPENED = 0] = "UNOPENED", e[e.OPENING = 1] = "OPENING", e[e.OPEN = 2] = "OPEN", e[e.ENDING = 3] = "ENDING", e[e.ENDED = 4] = "ENDED";
        }(r = t.HttpTransportState || (t.HttpTransportState = {}));var s = function () {
          function e(e, t) {
            var n = this;return this.gotEOS = !1, this.lastNewlineIndex = 0, this.state = r.UNOPENED, this.xhr = e, this.listeners = t, this.xhr.onreadystatechange = function () {
              switch (n.xhr.readyState) {case o.XhrReadyState.UNSENT:case o.XhrReadyState.OPENED:case o.XhrReadyState.HEADERS_RECEIVED:
                  n.assertStateIsIn(r.OPENING);break;case o.XhrReadyState.LOADING:
                  n.onLoading();break;case o.XhrReadyState.DONE:
                  n.onDone();}
            }, this.state = r.OPENING, this.xhr.send(), this;
          }return e.prototype.unsubscribe = function () {
            this.state = r.ENDED, this.xhr.abort(), this.listeners.onEnd && this.listeners.onEnd(null);
          }, e.prototype.onLoading = function () {
            if (this.assertStateIsIn(r.OPENING, r.OPEN, r.ENDING), 200 === this.xhr.status) {
              this.state === r.OPENING && (this.state = r.OPEN, this.listeners.onOpen && this.listeners.onOpen(o.responseToHeadersObject(this.xhr.getAllResponseHeaders()))), this.assertStateIsIn(r.OPEN);var e = this.onChunk();this.assertStateIsIn(r.OPEN, r.ENDING), e && (this.state = r.ENDED, e instanceof o.ErrorResponse && 204 !== e.statusCode && this.listeners.onError && this.listeners.onError(e));
            }
          }, e.prototype.onDone = function () {
            if (200 === this.xhr.status) {
              this.state === r.OPENING && (this.state = r.OPEN, this.listeners.onOpen && this.listeners.onOpen(o.responseToHeadersObject(this.xhr.getAllResponseHeaders()))), this.assertStateIsIn(r.OPEN, r.ENDING);var e = this.onChunk();e ? (this.state = r.ENDED, 204 === e.statusCode ? this.listeners.onEnd && this.listeners.onEnd(null) : this.listeners.onError && this.listeners.onError(e)) : this.state <= r.ENDING ? this.listeners.onError && this.listeners.onError(new Error("HTTP response ended without receiving EOS message")) : this.listeners.onEnd && this.listeners.onEnd(null);
            } else {
              if (this.assertStateIsIn(r.OPENING, r.OPEN, r.ENDED), this.state === r.ENDED) return;0 === this.xhr.status ? this.listeners.onError && this.listeners.onError(new o.NetworkError("Connection lost.")) : this.listeners.onError && this.listeners.onError(o.ErrorResponse.fromXHR(this.xhr));
            }
          }, e.prototype.onChunk = function () {
            this.assertStateIsIn(r.OPEN);var e = this.xhr.responseText,
                t = e.lastIndexOf("\n");if (t > this.lastNewlineIndex) {
              var n = e.slice(this.lastNewlineIndex, t).split("\n");this.lastNewlineIndex = t;for (var o = 0, s = n; o < s.length; o++) {
                var i = s[o];if (0 !== i.length) {
                  var u = JSON.parse(i),
                      a = this.onMessage(u);if (null != a) return a;
                }
              }
            }
          }, e.prototype.assertStateIsIn = function () {
            for (var e = this, t = [], n = 0; n < arguments.length; n++) {
              t[n] = arguments[n];
            }if (!t.some(function (t) {
              return t === e.state;
            })) {
              var o = t.map(function (e) {
                return r[e];
              }).join(", "),
                  s = r[this.state];window.console.warn("Expected this.state to be one of [" + o + "] but it is " + s);
            }
          }, e.prototype.onMessage = function (e) {
            switch (this.assertStateIsIn(r.OPEN), this.verifyMessage(e), e[0]) {case 0:
                return null;case 1:
                return this.onEventMessage(e);case 255:
                return this.onEOSMessage(e);default:
                return new Error("Unknown Message: " + JSON.stringify(e));}
          }, e.prototype.onEventMessage = function (e) {
            if (this.assertStateIsIn(r.OPEN), 4 !== e.length) return new Error("Event message has " + e.length + " elements (expected 4)");e[0];var t = e[1],
                n = e[2],
                o = e[3];return "string" != typeof t ? new Error("Invalid event ID in message: " + JSON.stringify(e)) : "object" != typeof n || Array.isArray(n) ? new Error("Invalid event headers in message: " + JSON.stringify(e)) : (this.listeners.onEvent && this.listeners.onEvent({ body: o, headers: n, eventId: t }), null);
          }, e.prototype.onEOSMessage = function (e) {
            if (this.assertStateIsIn(r.OPEN), 4 !== e.length) return new Error("EOS message has " + e.length + " elements (expected 4)");e[0];var t = e[1],
                n = e[2],
                s = e[3];return "number" != typeof t ? new Error("Invalid EOS Status Code") : "object" != typeof n || Array.isArray(n) ? new Error("Invalid EOS ElementsHeaders") : (this.state = r.ENDING, new o.ErrorResponse(t, n, s));
          }, e.prototype.verifyMessage = function (e) {
            return this.gotEOS ? new Error("Got another message after EOS message") : Array.isArray(e) ? e.length < 1 ? new Error("Message is empty array") : void 0 : new Error("Message is not an array");
          }, e;
        }(),
            i = function () {
          function e(e, t) {
            void 0 === t && (t = !0), this.baseURL = (t ? "https" : "http") + "://" + e;
          }return e.prototype.request = function (e) {
            return this.createXHR(this.baseURL, e);
          }, e.prototype.subscribe = function (e, t, n) {
            var r = { headers: n, method: "SUBSCRIBE", path: e };return new s(this.createXHR(this.baseURL, r), t);
          }, e.prototype.createXHR = function (e, t) {
            var n = new window.XMLHttpRequest(),
                r = e + "/" + t.path.replace(/^\/+/, "");if (n.open(t.method.toUpperCase(), r, !0), n = this.setJSONHeaderIfAppropriate(n, t), t.jwt && n.setRequestHeader("authorization", "Bearer " + t.jwt), t.headers) for (var o in t.headers) {
              t.headers.hasOwnProperty(o) && n.setRequestHeader(o, t.headers[o]);
            }return n;
          }, e.prototype.setJSONHeaderIfAppropriate = function (e, t) {
            return t.json && e.setRequestHeader("content-type", "application/json"), e;
          }, e;
        }();t.default = i;
      }, function (e, t, n) {
        var r = this && this.__assign || Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            for (var o in t = arguments[n]) {
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
          }return e;
        };Object.defineProperty(t, "__esModule", { value: !0 });var o,
            s = n(0);!function (e) {
          e[e.Connecting = 0] = "Connecting", e[e.Open = 1] = "Open", e[e.Closing = 2] = "Closing", e[e.Closed = 3] = "Closed";
        }(o = t.WSReadyState || (t.WSReadyState = {}));var i = function () {
          function e() {
            this.subscriptions = {};
          }return e.prototype.add = function (e, t, n, r) {
            return this.subscriptions[e] = { headers: r, listeners: n, path: t }, e;
          }, e.prototype.has = function (e) {
            return void 0 !== this.subscriptions[e];
          }, e.prototype.isEmpty = function () {
            return 0 === Object.keys(this.subscriptions).length;
          }, e.prototype.remove = function (e) {
            return delete this.subscriptions[e];
          }, e.prototype.get = function (e) {
            return this.subscriptions[e];
          }, e.prototype.getAll = function () {
            return this.subscriptions;
          }, e.prototype.getAllAsArray = function () {
            var e = this;return Object.keys(this.subscriptions).map(function (t) {
              return r({ subID: parseInt(t, 10) }, e.subscriptions[parseInt(t, 10)]);
            });
          }, e.prototype.removeAll = function () {
            this.subscriptions = {};
          }, e;
        }(),
            u = function () {
          function e(e, t) {
            this.wsTransport = e, this.subID = t;
          }return e.prototype.unsubscribe = function () {
            this.wsTransport.unsubscribe(this.subID);
          }, e;
        }(),
            a = function () {
          function e(e, t) {
            this.webSocketPath = "/ws", this.forcedClose = !1, this.closedError = null, this.lastSentPingID = null, this.baseURL = "wss://" + e + this.webSocketPath, this.lastSubscriptionID = 0, this.logger = t, this.subscriptions = new i(), this.pendingSubscriptions = new i(), this.connect();
          }return e.prototype.subscribe = function (e, t, n) {
            this.tryReconnectIfNeeded();var r = this.lastSubscriptionID++;return this.socket.readyState !== o.Open ? (this.pendingSubscriptions.add(r, e, t, n), new u(this, r)) : (this.subscriptions.add(r, e, t, n), this.sendMessage(this.getMessage(100, r, e, n)), new u(this, r));
          }, e.prototype.unsubscribe = function (e) {
            this.sendMessage(this.getMessage(198, e));var t = this.subscriptions.get(e);t.listeners.onEnd && t.listeners.onEnd(null), this.subscriptions.remove(e);
          }, e.prototype.connect = function () {
            var e = this;this.forcedClose = !1, this.closedError = null, this.socket = new window.WebSocket(this.baseURL), this.socket.onopen = function (t) {
              e.pendingSubscriptions.getAllAsArray().forEach(function (t) {
                var n = t.subID,
                    r = t.path,
                    o = t.listeners,
                    s = t.headers;e.subscribePending(r, o, s, n);
              }), e.pendingSubscriptions.removeAll(), e.pingInterval = window.setInterval(function () {
                if (!e.pongTimeout) {
                  var t = new Date().getTime();1e4 > t - e.lastMessageReceivedTimestamp || (e.sendMessage(e.getMessage(16, t)), e.lastSentPingID = t, e.pongTimeout = window.setTimeout(function () {
                    1e4 > new Date().getTime() - e.lastMessageReceivedTimestamp ? e.pongTimeout = null : e.close(new s.NetworkError("Pong response wasn't received within timeout"));
                  }, 1e4));
                }
              }, 3e4);
            }, this.socket.onmessage = function (t) {
              return e.receiveMessage(t);
            }, this.socket.onerror = function (t) {
              e.logger.verbose("WebSocket encountered an error event", t);
            }, this.socket.onclose = function (t) {
              e.logger.verbose("WebSocket encountered a close event", t);var n = e.subscriptions.getAllAsArray().concat(e.pendingSubscriptions.getAllAsArray());e.subscriptions.removeAll(), e.pendingSubscriptions.removeAll(), n.forEach(function (t) {
                t.listeners.onError && t.listeners.onError(e.closedError);
              }), e.tryReconnectIfNeeded();
            };
          }, e.prototype.close = function (e) {
            if (this.socket instanceof window.WebSocket) {
              var t = function t(e) {};null != this.socket.onclose && (t = this.socket.onclose.bind(this)), this.socket.onclose = function () {}, this.socket.onerror = function () {}, this.socket.onmessage = function () {}, this.socket.onopen = function () {}, this.forcedClose = !0, this.closedError = e, this.socket.close(), window.clearTimeout(this.pingInterval), window.clearTimeout(this.pongTimeout), this.pongTimeout = null, this.pingInterval = null, this.lastSentPingID = null, t();
            }
          }, e.prototype.tryReconnectIfNeeded = function () {
            (this.forcedClose || this.socket.readyState === o.Closed) && this.connect();
          }, e.prototype.subscribePending = function (e, t, n, r) {
            void 0 !== r ? (this.subscriptions.add(r, e, t, n), this.sendMessage(this.getMessage(100, r, e, n))) : this.logger.debug("Subscription to path " + e + " has an undefined ID");
          }, e.prototype.getMessage = function (e, t, n, r) {
            return [e, t, n, r];
          }, e.prototype.sendMessage = function (e) {
            this.socket.readyState === o.Open ? this.socket.send(JSON.stringify(e)) : this.logger.warn("Can't send on socket in \"" + o[this.socket.readyState] + '" state');
          }, e.prototype.subscription = function (e) {
            return this.subscriptions.get(e);
          }, e.prototype.receiveMessage = function (e) {
            var t;this.lastMessageReceivedTimestamp = new Date().getTime();try {
              t = JSON.parse(e.data);
            } catch (t) {
              return void this.close(new s.ProtocolError("Message is not valid JSON format. Getting " + e.data));
            }var n = this.validateMessage(t);if (n) this.close(n);else {
              var r = t.shift();switch (r) {case 17:
                  return void this.onPongMessage(t);case 16:
                  return void this.onPingMessage(t);case 99:
                  return void this.onCloseMessage(t);}var o = t.shift(),
                  i = this.subscription(o);if (i) {
                var u = i.listeners;switch (r) {case 101:
                    this.onOpenMessage(t, o, u);break;case 102:
                    this.onEventMessage(t, u);break;case 199:
                    this.onEOSMessage(t, o, u);break;default:
                    this.close(new s.ProtocolError("Received unknown type of message."));}
              } else this.logger.debug("Received message for unknown subscription ID: " + o);
            }
          }, e.prototype.validateMessage = function (e) {
            return Array.isArray(e) ? e.length < 1 ? new s.ProtocolError("Message is empty array: " + JSON.stringify(e)) : null : new s.ProtocolError("Message is expected to be an array. Getting: " + JSON.stringify(e));
          }, e.prototype.onOpenMessage = function (e, t, n) {
            n.onOpen && n.onOpen(e[1]);
          }, e.prototype.onEventMessage = function (e, t) {
            if (3 === e.length) {
              var n = e[0],
                  r = e[1],
                  o = e[2];"string" == typeof n ? "object" != typeof r || Array.isArray(r) ? t.onError && t.onError(new s.ProtocolError("Invalid event headers in message: " + JSON.stringify(e))) : t.onEvent && t.onEvent({ eventId: n, headers: r, body: o }) : t.onError && t.onError(new s.ProtocolError("Invalid event ID in message: " + JSON.stringify(e)));
            } else t.onError && t.onError(new s.ProtocolError("Event message has " + e.length + " elements (expected 4)"));
          }, e.prototype.onEOSMessage = function (e, t, n) {
            if (this.subscriptions.remove(t), 3 === e.length) {
              var r = e[0],
                  o = e[1],
                  i = e[2];"number" == typeof r ? "object" != typeof o || Array.isArray(o) ? n.onError && n.onError(new s.ProtocolError("Invalid EOS ElementsHeaders")) : 204 !== r ? n.onError && n.onError(new s.ErrorResponse(r, o, i)) : n.onEnd && n.onEnd(null) : n.onError && n.onError(new s.ProtocolError("Invalid EOS Status Code"));
            } else n.onError && n.onError(new s.ProtocolError("EOS message has " + e.length + " elements (expected 4)"));
          }, e.prototype.onCloseMessage = function (e) {
            var t = e[0],
                n = e[1],
                r = e[2];if ("number" == typeof t) {
              if ("object" != typeof n || Array.isArray(n)) this.close(new s.ProtocolError("Close message: Invalid EOS ElementsHeaders"));else {
                var o = { error: r.error || "network_error", error_description: r.error_description || "Network error" };this.close(new s.ErrorResponse(t, n, o));
              }
            } else this.close(new s.ProtocolError("Close message: Invalid EOS Status Code"));
          }, e.prototype.onPongMessage = function (e) {
            var t = e[0];this.lastSentPingID !== t && this.close(new s.ProtocolError("Received pong with ID " + t + " but last sent ping ID was " + this.lastSentPingID)), window.clearTimeout(this.pongTimeout), delete this.pongTimeout, this.lastSentPingID = null;
          }, e.prototype.onPingMessage = function (e) {
            var t = e[0];this.sendMessage(this.getMessage(17, t));
          }, e;
        }();t.default = a;
      }, function (e, t, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });var r = n(3),
            o = n(9),
            s = n(1),
            i = function () {
          function e(e) {
            if (!e.locator) throw new Error("Expected `locator` property in Instance options!");var t = e.locator.split(":");if (3 !== t.length) throw new Error("The instance locator supplied is invalid. Did you copy it correctly from the Pusher dashboard?");if (!e.serviceName) throw new Error("Expected `serviceName` property in Instance options!");if (!e.serviceVersion) throw new Error("Expected `serviceVersion` property in Instance options!");this.platformVersion = t[0], this.cluster = t[1], this.id = t[2], this.serviceName = e.serviceName, this.serviceVersion = e.serviceVersion, this.host = e.host || this.cluster + "." + o.HOST_BASE, this.logger = e.logger || new s.ConsoleLogger(), this.client = e.client || new r.BaseClient({ encrypted: e.encrypted, host: this.host, logger: this.logger }), this.tokenProvider = e.tokenProvider;
          }return e.prototype.request = function (e, t) {
            return e.path = this.absPath(e.path), null != e.headers && void 0 !== e.headers || (e.headers = {}), e.tokenProvider = e.tokenProvider || this.tokenProvider, this.client.request(e, t);
          }, e.prototype.subscribeNonResuming = function (e) {
            var t = e.headers || {},
                n = e.retryStrategyOptions || {},
                r = e.tokenProvider || this.tokenProvider;return this.client.subscribeNonResuming(this.absPath(e.path), t, e.listeners, n, r);
          }, e.prototype.subscribeResuming = function (e) {
            var t = e.headers || {},
                n = e.retryStrategyOptions || {},
                r = e.tokenProvider || this.tokenProvider;return this.client.subscribeResuming(this.absPath(e.path), t, e.listeners, n, e.initialEventId, r);
          }, e.prototype.absPath = function (e) {
            return ("/services/" + this.serviceName + "/" + this.serviceVersion + "/" + this.id + "/" + e).replace(/\/+/g, "/").replace(/\/+$/, "");
          }, e;
        }();t.default = i;
      }]);
    }, e.exports = n();
  }(e = { exports: {} }, e.exports), e.exports);(t = n) && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") && t.default;var r = n.BaseClient,
      o = n.HOST_BASE,
      s = n.Instance,
      i = n.sendRawRequest;function u(e) {
    return null != e && "object" == typeof e && !0 === e["@@functional/placeholder"];
  }function a(e) {
    return function t(n) {
      return 0 === arguments.length || u(n) ? t : e.apply(this, arguments);
    };
  }function c(e) {
    return function t(n, r) {
      switch (arguments.length) {case 0:
          return t;case 1:
          return u(n) ? t : a(function (t) {
            return e(n, t);
          });default:
          return u(n) && u(r) ? t : u(n) ? a(function (t) {
            return e(t, r);
          }) : u(r) ? a(function (t) {
            return e(n, t);
          }) : e(n, r);}
    };
  }function h(e, t) {
    var n;e = e || [], t = t || [];var r = e.length,
        o = t.length,
        s = [];for (n = 0; n < r;) {
      s[s.length] = e[n], n += 1;
    }for (n = 0; n < o;) {
      s[s.length] = t[n], n += 1;
    }return s;
  }function l(e, t) {
    switch (e) {case 0:
        return function () {
          return t.apply(this, arguments);
        };case 1:
        return function (e) {
          return t.apply(this, arguments);
        };case 2:
        return function (e, n) {
          return t.apply(this, arguments);
        };case 3:
        return function (e, n, r) {
          return t.apply(this, arguments);
        };case 4:
        return function (e, n, r, o) {
          return t.apply(this, arguments);
        };case 5:
        return function (e, n, r, o, s) {
          return t.apply(this, arguments);
        };case 6:
        return function (e, n, r, o, s, i) {
          return t.apply(this, arguments);
        };case 7:
        return function (e, n, r, o, s, i, u) {
          return t.apply(this, arguments);
        };case 8:
        return function (e, n, r, o, s, i, u, a) {
          return t.apply(this, arguments);
        };case 9:
        return function (e, n, r, o, s, i, u, a, c) {
          return t.apply(this, arguments);
        };case 10:
        return function (e, n, r, o, s, i, u, a, c, h) {
          return t.apply(this, arguments);
        };default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");}
  }function d(e, t, n) {
    return function () {
      for (var r = [], o = 0, s = e, i = 0; i < t.length || o < arguments.length;) {
        var a;i < t.length && (!u(t[i]) || o >= arguments.length) ? a = t[i] : (a = arguments[o], o += 1), r[i] = a, u(a) || (s -= 1), i += 1;
      }return s <= 0 ? n.apply(this, r) : l(s, d(e, r, n));
    };
  }var f = c(function (e, t) {
    return 1 === e ? a(t) : l(e, d(e, [], t));
  });function p(e) {
    return function t(n, r, o) {
      switch (arguments.length) {case 0:
          return t;case 1:
          return u(n) ? t : c(function (t, r) {
            return e(n, t, r);
          });case 2:
          return u(n) && u(r) ? t : u(n) ? c(function (t, n) {
            return e(t, r, n);
          }) : u(r) ? c(function (t, r) {
            return e(n, t, r);
          }) : a(function (t) {
            return e(n, r, t);
          });default:
          return u(n) && u(r) && u(o) ? t : u(n) && u(r) ? c(function (t, n) {
            return e(t, n, o);
          }) : u(n) && u(o) ? c(function (t, n) {
            return e(t, r, n);
          }) : u(r) && u(o) ? c(function (t, r) {
            return e(n, t, r);
          }) : u(n) ? a(function (t) {
            return e(t, r, o);
          }) : u(r) ? a(function (t) {
            return e(n, t, o);
          }) : u(o) ? a(function (t) {
            return e(n, r, t);
          }) : e(n, r, o);}
    };
  }var g = Array.isArray || function (e) {
    return null != e && e.length >= 0 && "[object Array]" === Object.prototype.toString.call(e);
  };function m(e, t, n) {
    return function () {
      if (0 === arguments.length) return n();var r = Array.prototype.slice.call(arguments, 0),
          o = r.pop();if (!g(o)) {
        for (var s = 0; s < e.length;) {
          if ("function" == typeof o[e[s]]) return o[e[s]].apply(o, r);s += 1;
        }if (function (e) {
          return "function" == typeof e["@@transducer/step"];
        }(o)) return t.apply(null, r)(o);
      }return n.apply(this, arguments);
    };
  }var v = { init: function init() {
      return this.xf["@@transducer/init"]();
    }, result: function result(e) {
      return this.xf["@@transducer/result"](e);
    } },
      b = c(function (e, t) {
    return t > e ? t : e;
  });function y(e, t) {
    for (var n = 0, r = t.length, o = Array(r); n < r;) {
      o[n] = e(t[n]), n += 1;
    }return o;
  }function S(e) {
    return "[object String]" === Object.prototype.toString.call(e);
  }var w = a(function (e) {
    return !!g(e) || !!e && "object" == typeof e && !S(e) && (1 === e.nodeType ? !!e.length : 0 === e.length || e.length > 0 && e.hasOwnProperty(0) && e.hasOwnProperty(e.length - 1));
  }),
      I = function () {
    function e(e) {
      this.f = e;
    }return e.prototype["@@transducer/init"] = function () {
      throw new Error("init not implemented on XWrap");
    }, e.prototype["@@transducer/result"] = function (e) {
      return e;
    }, e.prototype["@@transducer/step"] = function (e, t) {
      return this.f(e, t);
    }, e;
  }();function E(e) {
    return new I(e);
  }var R = c(function (e, t) {
    return l(e.length, function () {
      return e.apply(t, arguments);
    });
  });function k(e, t, n) {
    for (var r = n.next(); !r.done;) {
      if ((t = e["@@transducer/step"](t, r.value)) && t["@@transducer/reduced"]) {
        t = t["@@transducer/value"];break;
      }r = n.next();
    }return e["@@transducer/result"](t);
  }function T(e, t, n, r) {
    return e["@@transducer/result"](n[r](R(e["@@transducer/step"], e), t));
  }var O = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";function P(e, t, n) {
    if ("function" == typeof e && (e = E(e)), w(n)) return function (e, t, n) {
      for (var r = 0, o = n.length; r < o;) {
        if ((t = e["@@transducer/step"](t, n[r])) && t["@@transducer/reduced"]) {
          t = t["@@transducer/value"];break;
        }r += 1;
      }return e["@@transducer/result"](t);
    }(e, t, n);if ("function" == typeof n["fantasy-land/reduce"]) return T(e, t, n, "fantasy-land/reduce");if (null != n[O]) return k(e, t, n[O]());if ("function" == typeof n.next) return k(e, t, n);if ("function" == typeof n.reduce) return T(e, t, n, "reduce");throw new TypeError("reduce: list must be array or iterable");
  }var U = function () {
    function e(e, t) {
      this.xf = t, this.f = e;
    }return e.prototype["@@transducer/init"] = v.init, e.prototype["@@transducer/result"] = v.result, e.prototype["@@transducer/step"] = function (e, t) {
      return this.xf["@@transducer/step"](e, this.f(t));
    }, e;
  }(),
      _ = c(function (e, t) {
    return new U(e, t);
  });function N(e, t) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }var C = Object.prototype.toString,
      M = !{ toString: null }.propertyIsEnumerable("toString"),
      A = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
      j = function () {
    return arguments.propertyIsEnumerable("length");
  }(),
      D = function D(e, t) {
    for (var n = 0; n < e.length;) {
      if (e[n] === t) return !0;n += 1;
    }return !1;
  },
      x = a("function" != typeof Object.keys || j ? function (e) {
    if (Object(e) !== e) return [];var t,
        n,
        r = [],
        o = j && function () {
      return "[object Arguments]" === C.call(arguments) ? function (e) {
        return "[object Arguments]" === C.call(e);
      } : function (e) {
        return N("callee", e);
      };
    }(e);for (t in e) {
      !N(t, e) || o && "length" === t || (r[r.length] = t);
    }if (M) for (n = A.length - 1; n >= 0;) {
      N(t = A[n], e) && !D(r, t) && (r[r.length] = t), n -= 1;
    }return r;
  } : function (e) {
    return Object(e) !== e ? [] : Object.keys(e);
  }),
      q = c(m(["fantasy-land/map", "map"], _, function (e, t) {
    switch (Object.prototype.toString.call(t)) {case "[object Function]":
        return f(t.length, function () {
          return e.call(this, t.apply(this, arguments));
        });case "[object Object]":
        return P(function (n, r) {
          return n[r] = e(t[r]), n;
        }, {}, x(t));default:
        return y(e, t);}
  })),
      L = c(function (e, t) {
    for (var n = t, r = 0; r < e.length;) {
      if (null == n) return;n = n[e[r]], r += 1;
    }return n;
  }),
      B = c(function (e, t) {
    return L([e], t);
  }),
      H = p(P),
      V = c(function (e, t) {
    return h(t, [e]);
  }),
      J = a(function (e) {
    for (var t = x(e), n = t.length, r = [], o = 0; o < n;) {
      r[o] = e[t[o]], o += 1;
    }return r;
  });var F = a(function (e) {
    return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
  });function G(e, t) {
    return function () {
      return t.call(this, e.apply(this, arguments));
    };
  }function X(e, t) {
    return function () {
      var n = arguments.length;if (0 === n) return t();var r = arguments[n - 1];return g(r) || "function" != typeof r[e] ? t.apply(this, arguments) : r[e].apply(r, Array.prototype.slice.call(arguments, 0, n - 1));
    };
  }var z = p(X("slice", function (e, t, n) {
    return Array.prototype.slice.call(n, e, t);
  })),
      W = a(X("tail", z(1, 1 / 0)));function K() {
    if (0 === arguments.length) throw new Error("pipe requires at least one argument");return l(arguments[0].length, H(G, arguments[0], W(arguments)));
  }var $ = a(function (e) {
    return S(e) ? e.split("").reverse().join("") : Array.prototype.slice.call(e, 0).reverse();
  });function Y() {
    if (0 === arguments.length) throw new Error("compose requires at least one argument");return K.apply(this, $(arguments));
  }function Z(e) {
    for (var t, n = []; !(t = e.next()).done;) {
      n.push(t.value);
    }return n;
  }function Q(e, t, n) {
    for (var r = 0, o = n.length; r < o;) {
      if (e(t, n[r])) return !0;r += 1;
    }return !1;
  }var ee = c(function (e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  });function te(e, t, n, r) {
    var o = Z(e);function s(e, t) {
      return ne(e, t, n.slice(), r.slice());
    }return !Q(function (e, t) {
      return !Q(s, t, e);
    }, Z(t), o);
  }function ne(e, t, n, r) {
    if (ee(e, t)) return !0;var o,
        s,
        i = F(e);if (i !== F(t)) return !1;if (null == e || null == t) return !1;if ("function" == typeof e["fantasy-land/equals"] || "function" == typeof t["fantasy-land/equals"]) return "function" == typeof e["fantasy-land/equals"] && e["fantasy-land/equals"](t) && "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](e);if ("function" == typeof e.equals || "function" == typeof t.equals) return "function" == typeof e.equals && e.equals(t) && "function" == typeof t.equals && t.equals(e);switch (i) {case "Arguments":case "Array":case "Object":
        if ("function" == typeof e.constructor && "Promise" === (o = e.constructor, null == (s = String(o).match(/^function (\w*)/)) ? "" : s[1])) return e === t;break;case "Boolean":case "Number":case "String":
        if (typeof e != typeof t || !ee(e.valueOf(), t.valueOf())) return !1;break;case "Date":
        if (!ee(e.valueOf(), t.valueOf())) return !1;break;case "Error":
        return e.name === t.name && e.message === t.message;case "RegExp":
        if (e.source !== t.source || e.global !== t.global || e.ignoreCase !== t.ignoreCase || e.multiline !== t.multiline || e.sticky !== t.sticky || e.unicode !== t.unicode) return !1;}for (var u = n.length - 1; u >= 0;) {
      if (n[u] === e) return r[u] === t;u -= 1;
    }switch (i) {case "Map":
        return e.size === t.size && te(e.entries(), t.entries(), n.concat([e]), r.concat([t]));case "Set":
        return e.size === t.size && te(e.values(), t.values(), n.concat([e]), r.concat([t]));case "Arguments":case "Array":case "Object":case "Boolean":case "Number":case "String":case "Date":case "Error":case "RegExp":case "Int8Array":case "Uint8Array":case "Uint8ClampedArray":case "Int16Array":case "Uint16Array":case "Int32Array":case "Uint32Array":case "Float32Array":case "Float64Array":case "ArrayBuffer":
        break;default:
        return !1;}var a = x(e);if (a.length !== x(t).length) return !1;var c = n.concat([e]),
        h = r.concat([t]);for (u = a.length - 1; u >= 0;) {
      var l = a[u];if (!N(l, t) || !ne(t[l], e[l], c, h)) return !1;u -= 1;
    }return !0;
  }var re = c(function (e, t) {
    return ne(e, t, [], []);
  });function oe(e, t) {
    return function (e, t, n) {
      var r, o;if ("function" == typeof e.indexOf) switch (typeof t) {case "number":
          if (0 === t) {
            for (r = 1 / t; n < e.length;) {
              if (0 === (o = e[n]) && 1 / o === r) return n;n += 1;
            }return -1;
          }if (t != t) {
            for (; n < e.length;) {
              if ("number" == typeof (o = e[n]) && o != o) return n;n += 1;
            }return -1;
          }return e.indexOf(t, n);case "string":case "boolean":case "function":case "undefined":
          return e.indexOf(t, n);case "object":
          if (null === t) return e.indexOf(t, n);}for (; n < e.length;) {
        if (re(e[n], t)) return n;n += 1;
      }return -1;
    }(t, e, 0) >= 0;
  }function se(e) {
    return '"' + e.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"';
  }var ie = function ie(e) {
    return (e < 10 ? "0" : "") + e;
  },
      ue = "function" == typeof Date.prototype.toISOString ? function (e) {
    return e.toISOString();
  } : function (e) {
    return e.getUTCFullYear() + "-" + ie(e.getUTCMonth() + 1) + "-" + ie(e.getUTCDate()) + "T" + ie(e.getUTCHours()) + ":" + ie(e.getUTCMinutes()) + ":" + ie(e.getUTCSeconds()) + "." + (e.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };var ae = function () {
    function e(e, t) {
      this.xf = t, this.f = e;
    }return e.prototype["@@transducer/init"] = v.init, e.prototype["@@transducer/result"] = v.result, e.prototype["@@transducer/step"] = function (e, t) {
      return this.f(t) ? this.xf["@@transducer/step"](e, t) : e;
    }, e;
  }(),
      ce = c(m(["filter"], c(function (e, t) {
    return new ae(e, t);
  }), function (e, t) {
    return n = t, "[object Object]" === Object.prototype.toString.call(n) ? P(function (n, r) {
      return e(t[r]) && (n[r] = t[r]), n;
    }, {}, x(t)) : function (e, t) {
      for (var n = 0, r = t.length, o = []; n < r;) {
        e(t[n]) && (o[o.length] = t[n]), n += 1;
      }return o;
    }(e, t);var n;
  })),
      he = c(function (e, t) {
    return ce((n = e, function () {
      return !n.apply(this, arguments);
    }), t);var n;
  });var le = a(function (e) {
    return function e(t, n) {
      var r = function r(_r) {
        var o = n.concat([t]);return oe(_r, o) ? "<Circular>" : e(_r, o);
      },
          o = function o(e, t) {
        return y(function (t) {
          return se(t) + ": " + r(e[t]);
        }, t.slice().sort());
      };switch (Object.prototype.toString.call(t)) {case "[object Arguments]":
          return "(function() { return arguments; }(" + y(r, t).join(", ") + "))";case "[object Array]":
          return "[" + y(r, t).concat(o(t, he(function (e) {
            return (/^\d+$/.test(e)
            );
          }, x(t)))).join(", ") + "]";case "[object Boolean]":
          return "object" == typeof t ? "new Boolean(" + r(t.valueOf()) + ")" : t.toString();case "[object Date]":
          return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : se(ue(t))) + ")";case "[object Null]":
          return "null";case "[object Number]":
          return "object" == typeof t ? "new Number(" + r(t.valueOf()) + ")" : 1 / t == -1 / 0 ? "-0" : t.toString(10);case "[object String]":
          return "object" == typeof t ? "new String(" + r(t.valueOf()) + ")" : se(t);case "[object Undefined]":
          return "undefined";default:
          if ("function" == typeof t.toString) {
            var s = t.toString();if ("[object Object]" !== s) return s;
          }return "{" + o(t, x(t)).join(", ") + "}";}
    }(e, []);
  }),
      de = c(oe),
      fe = c(function (e, t) {
    for (var n = [], r = 0, o = e.length; r < o;) {
      oe(e[r], t) || oe(e[r], n) || (n[n.length] = e[r]), r += 1;
    }return n;
  }),
      pe = c(X("forEach", function (e, t) {
    for (var n = t.length, r = 0; r < n;) {
      e(t[r]), r += 1;
    }return t;
  })),
      ge = c(function (e, t) {
    for (var n = x(t), r = 0; r < n.length;) {
      var o = n[r];e(t[o], o, t), r += 1;
    }return t;
  }),
      me = c(N);function ve(e) {
    return e;
  }var be = a(ve),
      ye = function () {
    function e() {
      this._nativeSet = "function" == typeof Set ? new Set() : null, this._items = {};
    }return e.prototype.add = function (e) {
      return !Se(e, !0, this);
    }, e.prototype.has = function (e) {
      return Se(e, !1, this);
    }, e;
  }();function Se(e, t, n) {
    var r,
        o = typeof e;switch (o) {case "string":case "number":
        return 0 === e && 1 / e == -1 / 0 ? !!n._items["-0"] || (t && (n._items["-0"] = !0), !1) : null !== n._nativeSet ? t ? (r = n._nativeSet.size, n._nativeSet.add(e), n._nativeSet.size === r) : n._nativeSet.has(e) : o in n._items ? e in n._items[o] || (t && (n._items[o][e] = !0), !1) : (t && (n._items[o] = {}, n._items[o][e] = !0), !1);case "boolean":
        if (o in n._items) {
          var s = e ? 1 : 0;return !!n._items[o][s] || (t && (n._items[o][s] = !0), !1);
        }return t && (n._items[o] = e ? [!1, !0] : [!0, !1]), !1;case "function":
        return null !== n._nativeSet ? t ? (r = n._nativeSet.size, n._nativeSet.add(e), n._nativeSet.size === r) : n._nativeSet.has(e) : o in n._items ? !!oe(e, n._items[o]) || (t && n._items[o].push(e), !1) : (t && (n._items[o] = [e]), !1);case "undefined":
        return !!n._items[o] || (t && (n._items[o] = !0), !1);case "object":
        if (null === e) return !!n._items.null || (t && (n._items.null = !0), !1);default:
        return (o = Object.prototype.toString.call(e)) in n._items ? !!oe(e, n._items[o]) || (t && n._items[o].push(e), !1) : (t && (n._items[o] = [e]), !1);}
  }var we = c(function (e, t) {
    for (var n, r, o = new ye(), s = [], i = 0; i < t.length;) {
      n = e(r = t[i]), o.add(n) && s.push(r), i += 1;
    }return s;
  })(be),
      Ie = c(function (e, t) {
    return f(e + 1, function () {
      var n,
          r = arguments[e];if (null != r && (n = r[t], "[object Function]" === Object.prototype.toString.call(n))) return r[t].apply(r, Array.prototype.slice.call(arguments, 0, e));throw new TypeError(le(r) + ' does not have a method named "' + t + '"');
    });
  }),
      Ee = Ie(1, "join");var Re = c(function (e, t) {
    return Array.prototype.slice.call(t, 0).sort(e);
  }),
      ke = Ie(1, "split"),
      Te = a(function (e) {
    var t = [];for (var n in e) {
      N(n, e) && (t[t.length] = [n, e[n]]);
    }return t;
  }),
      Oe = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
      Pe = (String.prototype.trim, "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }),
      Ue = function Ue(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  },
      _e = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  }(),
      Ne = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
    }return e;
  },
      Ce = function Ce(e, t) {
    var n = {};for (var r in e) {
      t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }return n;
  },
      Me = function () {
    return function (e, t) {
      if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, t) {
        var n = [],
            r = !0,
            o = !1,
            s = void 0;try {
          for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0) {}
        } catch (e) {
          o = !0, s = e;
        } finally {
          try {
            !r && u.return && u.return();
          } finally {
            if (o) throw s;
          }
        }return n;
      }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  }(),
      Ae = function Ae(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }return n;
    }return Array.from(e);
  },
      je = K(ce(function (e) {
    return void 0 !== e;
  }), Te, q(function (e) {
    var t = Me(e, 2),
        n = t[0],
        r = t[1];return n + "=" + encodeURIComponent(r);
  }), Ee("&")),
      De = function De(e, t, n) {
    var r = void 0 === n ? "undefined" : Pe(n);if (r !== t) throw new TypeError("expected " + e + " to be of type " + t + " but was of type " + r);
  },
      xe = function xe(e, t, n) {
    if (!Array.isArray(n)) throw new TypeError("expected " + e + " to be an array");n.forEach(function (n, r) {
      return De(e + "[" + r + "]", t, n);
    });
  },
      qe = function qe(e, t, n) {
    De(e, "object", n), ge(function (n, r) {
      return De(e + "." + r, t, n);
    }, n);
  },
      Le = function Le() {
    return Math.floor(Date.now() / 1e3);
  },
      Be = function () {
    function e() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = t.url,
          r = t.queryParams,
          o = t.headers,
          s = t.withCredentials;Ue(this, e), De("url", "string", n), r && De("queryParams", "object", r), o && De("headers", "object", o), this.url = n, this.queryParams = r, this.headers = o, this.withCredentials = s, this.fetchToken = this.fetchToken.bind(this), this.fetchFreshToken = this.fetchFreshToken.bind(this), this.cacheIsStale = this.cacheIsStale.bind(this), this.cache = this.cache.bind(this), this.clearCache = this.clearCache.bind(this), this.setUserId = this.setUserId.bind(this);
    }return _e(e, [{ key: "fetchToken", value: function value() {
        var e = this;return this.cacheIsStale() ? (this.req || this.fetchFreshToken()).then(function (t) {
          var n = t.token,
              r = t.expiresIn;return e.cache(n, r), n;
        }) : Promise.resolve(this.cachedToken);
      } }, { key: "fetchFreshToken", value: function value() {
        var e,
            t,
            n = this;return this.req = i({ method: "POST", url: (e = Ne({ user_id: this.userId }, this.queryParams), t = this.url, t + (de("?", t) ? "&" : "?") + je(e)), body: je({ grant_type: "client_credentials" }), headers: Ne({ "content-type": "application/x-www-form-urlencoded" }, this.headers), withCredentials: this.withCredentials }).then(function (e) {
          var t = JSON.parse(e),
              r = t.access_token,
              o = t.expires_in;return delete n.req, { token: r, expiresIn: o };
        }).catch(function (e) {
          throw delete n.req, e;
        }), this.req;
      } }, { key: "cacheIsStale", value: function value() {
        return !this.cachedToken || Le() > this.cacheExpiresAt;
      } }, { key: "cache", value: function value(e, t) {
        this.cachedToken = e, this.cacheExpiresAt = Le() + t;
      } }, { key: "clearCache", value: function value() {
        this.cachedToken = void 0, this.cacheExpiresAt = void 0;
      } }, { key: "setUserId", value: function value(e) {
        this.clearCache(), this.userId = e;
      } }]), e;
  }(),
      He = function He(e) {
    return { createdAt: e.created_at, createdByUserId: e.created_by_id, id: e.id, isPrivate: e.private, name: e.name, updatedAt: e.updated_at, customData: e.custom_data, deletedAt: e.deleted_at, unreadCount: e.unread_count, lastMessageAt: e.last_message_at };
  },
      Ve = function Ve(e) {
    return { avatarURL: e.avatar_url, createdAt: e.created_at, customData: e.custom_data, id: e.id, name: e.name, updatedAt: e.updated_at };
  },
      Je = function Je(e) {
    var t = { roomId: e.room_id, id: e.id, senderId: e.user_id, createdAt: e.created_at, updatedAt: e.updated_at };return e.parts ? t.parts = e.parts.map(function (e) {
      return Xe(e);
    }) : (t.text = e.text, e.attachment && (t.attachment = Ge(e.attachment))), t;
  },
      Fe = function Fe(e) {
    return { position: e.position, updatedAt: e.updated_at, userId: e.user_id, roomId: e.room_id, type: e.cursor_type };
  },
      Ge = function Ge(e) {
    return { link: e.resource_link, type: e.type, name: e.name };
  },
      Xe = function Xe(e) {
    if (e.content) return { partType: "inline", payload: { type: e.type, content: e.content } };if (e.url) return { partType: "url", payload: { type: e.type, url: e.url } };if (e.attachment) return { partType: "attachment", payload: { type: e.type, name: e.attachment.name, size: e.attachment.size, customData: e.attachment.custom_data, _id: e.attachment.id, _downloadURL: e.attachment.download_url, _expiration: new Date(e.attachment.expiration) } };throw new TypeError("failed to parse message part");
  },
      ze = function () {
    function e(t, n) {
      Ue(this, e), this.avatarURL = t.avatarURL, this.createdAt = t.createdAt, this.customData = t.customData, this.id = t.id, this.name = t.name, this.updatedAt = t.updatedAt, this.presenceStore = n;
    }return _e(e, [{ key: "presence", get: function get() {
        return { state: this.presenceStore[this.id] || "unknown" };
      } }]), e;
  }(),
      We = function () {
    function e(t) {
      var n = t.instance,
          r = t.presenceStore,
          o = t.logger;Ue(this, e), this.instance = n, this.presenceStore = r, this.logger = o, this.reqs = {}, this.onSetHooks = [], this.users = {}, this.set = this.set.bind(this), this.get = this.get.bind(this), this.fetchMissingUsers = this.fetchMissingUsers.bind(this), this.fetchBasicUsers = this.fetchBasicUsers.bind(this), this.snapshot = this.snapshot.bind(this), this.getSync = this.getSync.bind(this), this.decorate = this.decorate.bind(this);
    }return _e(e, [{ key: "set", value: function value(e) {
        return this.users[e.id] = this.decorate(e), this.onSetHooks.forEach(function (t) {
          return t(e.id);
        }), Promise.resolve(this.users[e.id]);
      } }, { key: "get", value: function value(e) {
        var t = this;return this.fetchMissingUsers([e]).then(function () {
          return t.users[e];
        });
      } }, { key: "fetchMissingUsers", value: function value(e) {
        var t = this,
            n = fe(e, Object.values(this.users).map(function (e) {
          return e.id;
        })),
            r = fe(n, Object.keys(this.reqs));return r.length > 0 && this.fetchBasicUsers(r), Promise.all(e.map(function (e) {
          return t.reqs[e];
        }));
      } }, { key: "fetchBasicUsers", value: function value(e) {
        var t,
            n,
            r,
            o,
            s,
            i = this,
            u = this.instance.request({ method: "GET", path: (t = "id", n = e, r = "/users_by_ids", o = de("?", r) ? "" : "?", s = q(function (e) {
            return encodeURIComponent(t) + "=" + encodeURIComponent(e);
          }, n), r + o + Ee("&", s)) }).then(function (t) {
          JSON.parse(t).map(function (e) {
            return Ve(e);
          }).forEach(function (e) {
            return i.set(e);
          }), e.forEach(function (e) {
            delete i.reqs[e];
          });
        }).catch(function (e) {
          throw i.logger.warn("error fetching missing users:", e), e;
        });e.forEach(function (e) {
          i.reqs[e] = u;
        });
      } }, { key: "snapshot", value: function value() {
        return this.users;
      } }, { key: "getSync", value: function value(e) {
        return this.users[e];
      } }, { key: "decorate", value: function value(e) {
        return e ? new ze(e, this.presenceStore) : void 0;
      } }]), e;
  }(),
      Ke = function () {
    function e(t) {
      var n = t.basicRoom,
          r = t.userStore,
          o = t.isSubscribedTo,
          s = t.logger;Ue(this, e), this.createdAt = n.createdAt, this.createdByUserId = n.createdByUserId, this.deletedAt = n.deletedAt, this.id = n.id, this.isPrivate = n.isPrivate, this.name = n.name, this.updatedAt = n.updatedAt, this.customData = n.customData, this.unreadCount = n.unreadCount, this.lastMessageAt = n.lastMessageAt, this.userIds = [], this.userStore = r, this.isSubscribedTo = o, this.logger = s, this.eq = this.eq.bind(this);
    }return _e(e, [{ key: "eq", value: function value(e) {
        return this.createdAt === e.createdAt && this.createdByUserId === e.createdByUserId && this.deletedAt === e.deletedAt && this.id === e.id && this.isPrivate === e.isPrivate && this.name === e.name && this.updatedAt === e.updatedAt && JSON.stringify(this.customData) === JSON.stringify(e.customData);
      } }, { key: "users", get: function get() {
        var e = this;if (!this.isSubscribedTo(this.id)) {
          var t = new Error("Must be subscribed to room " + this.id + " to access users property");throw this.logger.error(t), t;
        }return ce(function (t) {
          return de(t.id, e.userIds);
        }, J(this.userStore.snapshot()));
      } }]), e;
  }(),
      $e = function () {
    function e(t) {
      Ue(this, e), this.instance = t.instance, this.userStore = t.userStore, this.isSubscribedTo = t.isSubscribedTo, this.logger = t.logger, this.rooms = {}, this.setSync = this.setSync.bind(this), this.set = this.set.bind(this), this.get = this.get.bind(this), this.popSync = this.popSync.bind(this), this.pop = this.pop.bind(this), this.addUserToRoom = this.addUserToRoom.bind(this), this.removeUserFromRoom = this.removeUserFromRoom.bind(this), this.updateSync = this.updateSync.bind(this), this.update = this.update.bind(this), this.fetchBasicRoom = this.fetchBasicRoom.bind(this), this.snapshot = this.snapshot.bind(this), this.getSync = this.getSync.bind(this), this.decorate = this.decorate.bind(this);
    }return _e(e, [{ key: "setSync", value: function value(e) {
        return this.rooms[e.id] || (this.rooms[e.id] = this.decorate(e)), this.rooms[e.id];
      } }, { key: "set", value: function value(e) {
        return Promise.resolve(this.setSync(e));
      } }, { key: "get", value: function value(e) {
        var t = this;return Promise.resolve(this.rooms[e]).then(function (n) {
          return n || t.fetchBasicRoom(e).then(function (n) {
            return t.set(e, n);
          });
        });
      } }, { key: "popSync", value: function value(e) {
        var t = this.rooms[e];return delete this.rooms[e], t;
      } }, { key: "pop", value: function value(e) {
        return Promise.resolve(this.popSync(e));
      } }, { key: "addUserToRoom", value: function value(e, t) {
        return Promise.all([this.get(e).then(function (e) {
          return e.userIds = we(V(t, e.userIds)), e;
        }), this.userStore.fetchMissingUsers([t])]).then(function (e) {
          return Me(e, 1)[0];
        });
      } }, { key: "removeUserFromRoom", value: function value(e, t) {
        return this.get(e).then(function (e) {
          return e.userIds = e.userIds.filter(function (e) {
            return e !== t;
          }), e;
        });
      } }, { key: "updateSync", value: function value(e, t) {
        var n = this.getSync(e);for (var r in t) {
          n[r] = t[r];
        }return n;
      } }, { key: "update", value: function value(e, t) {
        var n = this;return Promise.all([this.get(e).then(function () {
          return n.updateSync(e, t);
        }), this.userStore.fetchMissingUsers(t.userIds || [])]).then(function (e) {
          return Me(e, 1)[0];
        });
      } }, { key: "fetchBasicRoom", value: function value(e) {
        var t = this;return this.instance.request({ method: "GET", path: "/rooms/" + encodeURIComponent(e) }).then(K(JSON.parse, He)).catch(function (n) {
          t.logger.warn("error fetching details for room " + e + ":", n);
        });
      } }, { key: "snapshot", value: function value() {
        return this.rooms;
      } }, { key: "getSync", value: function value(e) {
        return this.rooms[e];
      } }, { key: "decorate", value: function value(e) {
        return e ? new Ke({ basicRoom: e, userStore: this.userStore, isSubscribedTo: this.isSubscribedTo, logger: this.logger }) : void 0;
      } }]), e;
  }(),
      Ye = function () {
    function e(t, n, r) {
      Ue(this, e), this.position = t.position, this.updatedAt = t.updatedAt, this.userId = t.userId, this.roomId = t.roomId, this.type = t.type, this.userStore = n, this.roomStore = r;
    }return _e(e, [{ key: "user", get: function get() {
        return this.userStore.getSync(this.userId);
      } }, { key: "room", get: function get() {
        return this.roomStore.getSync(this.roomId);
      } }]), e;
  }(),
      Ze = function () {
    function e(t) {
      var n = t.instance,
          r = t.userStore,
          o = t.roomStore,
          s = t.logger;Ue(this, e), this.instance = n, this.userStore = r, this.roomStore = o, this.logger = s, this.cursors = {}, this.set = this.set.bind(this), this.get = this.get.bind(this), this.getSync = this.getSync.bind(this), this.fetchBasicCursor = this.fetchBasicCursor.bind(this), this.decorate = this.decorate.bind(this);
    }return _e(e, [{ key: "set", value: function value(e) {
        var t = this,
            n = Qe(e.userId, e.roomId);return this.cursors[n] = this.decorate(e), this.userStore.fetchMissingUsers([e.userId]).then(function () {
          return t.cursors[n];
        });
      } }, { key: "get", value: function value(e, t) {
        var n = this,
            r = Qe(e, t);return this.cursors[r] ? Promise.resolve(this.cursors[r]) : this.fetchBasicCursor(e, t).then(function (e) {
          return n.set(e);
        });
      } }, { key: "getSync", value: function value(e, t) {
        return this.cursors[Qe(e, t)];
      } }, { key: "fetchBasicCursor", value: function value(e, t) {
        var n = this;return this.instance.request({ method: "GET", path: "/cursors/0/rooms/" + encodeURIComponent(t) + "/users/" + encodeURIComponent(e) }).then(function (e) {
          var t = JSON.parse(e);if (t) return Fe(t);
        }).catch(function (e) {
          throw n.logger.warn("error fetching cursor:", e), e;
        });
      } }, { key: "decorate", value: function value(e) {
        return e ? new Ye(e, this.userStore, this.roomStore) : void 0;
      } }]), e;
  }(),
      Qe = function Qe(e, t) {
    return encodeURIComponent(e) + "/" + encodeURIComponent(t);
  },
      et = 2e4,
      tt = function () {
    function e(t) {
      var n = t.hooks,
          r = t.instance,
          o = t.logger;Ue(this, e), this.hooks = n, this.instance = r, this.logger = o, this.lastSentRequests = {}, this.timers = {}, this.sendThrottledRequest = this.sendThrottledRequest.bind(this), this.onIsTyping = this.onIsTyping.bind(this), this.onStarted = this.onStarted.bind(this), this.onStopped = this.onStopped.bind(this);
    }return _e(e, [{ key: "sendThrottledRequest", value: function value(e) {
        var t = this,
            n = Date.now(),
            r = this.lastSentRequests[e];return r && n - r < 1e3 ? Promise.resolve() : (this.lastSentRequests[e] = n, this.instance.request({ method: "POST", path: "/rooms/" + encodeURIComponent(e) + "/typing_indicators" }).catch(function (n) {
          throw delete t.typingRequestSent[e], t.logger.warn("Error sending typing indicator in room " + e, n), n;
        }));
      } }, { key: "onIsTyping", value: function value(e, t) {
        var n = this;this.timers[e.id] || (this.timers[e.id] = {}), this.timers[e.id][t.id] ? clearTimeout(this.timers[e.id][t.id]) : this.onStarted(e, t), this.timers[e.id][t.id] = setTimeout(function () {
          n.onStopped(e, t), delete n.timers[e.id][t.id];
        }, 1500);
      } }, { key: "onStarted", value: function value(e, t) {
        this.hooks.global.onUserStartedTyping && this.hooks.global.onUserStartedTyping(e, t), this.hooks.rooms[e.id] && this.hooks.rooms[e.id].onUserStartedTyping && this.hooks.rooms[e.id].onUserStartedTyping(t);
      } }, { key: "onStopped", value: function value(e, t) {
        this.hooks.global.onUserStoppedTyping && this.hooks.global.onUserStoppedTyping(e, t), this.hooks.rooms[e.id] && this.hooks.rooms[e.id].onUserStoppedTyping && this.hooks.rooms[e.id].onUserStoppedTyping(t);
      } }]), e;
  }();function nt(e) {
    var t = e.basicCursors,
        n = e.cursorStore,
        r = e.onNewCursorHook;return Promise.all(t.map(function (e) {
      var t = n.getSync(e.userId, e.roomId);if (!t || t.position !== e.position) return n.set(e).then(function (e) {
        r && r(e);
      });
    }));
  }var rt = function () {
    function e(t) {
      Ue(this, e), this.userId = t.userId, this.hooks = t.hooks, this.instance = t.instance, this.roomStore = t.roomStore, this.cursorStore = t.cursorStore, this.roomSubscriptions = t.roomSubscriptions, this.logger = t.logger, this.connectionTimeout = t.connectionTimeout, this.currentUser = t.currentUser, this.connect = this.connect.bind(this), this.cancel = this.cancel.bind(this), this.onEvent = this.onEvent.bind(this), this.onInitialState = this.onInitialState.bind(this), this.onAddedToRoom = this.onAddedToRoom.bind(this), this.onRemovedFromRoom = this.onRemovedFromRoom.bind(this), this.onRoomUpdated = this.onRoomUpdated.bind(this), this.onRoomDeleted = this.onRoomDeleted.bind(this);
    }return _e(e, [{ key: "connect", value: function value() {
        var e = this;return new Promise(function (t, n) {
          e.timeout = setTimeout(function () {
            n(new Error("user subscription timed out"));
          }, e.connectionTimeout), e.onSubscriptionEstablished = function (n) {
            clearTimeout(e.timeout), t(n);
          }, e.sub = e.instance.subscribeNonResuming({ path: "/users", listeners: { onError: function onError(t) {
                clearTimeout(e.timeout), n(t);
              }, onEvent: e.onEvent } });
        });
      } }, { key: "cancel", value: function value() {
        clearTimeout(this.timeout);try {
          this.sub && this.sub.unsubscribe();
        } catch (e) {
          this.logger.debug("error when cancelling user subscription", e);
        }
      } }, { key: "onEvent", value: function value(e) {
        var t = e.body;switch (t.event_name) {case "initial_state":
            this.onInitialState(t.data);break;case "added_to_room":
            this.onAddedToRoom(t.data);break;case "removed_from_room":
            this.onRemovedFromRoom(t.data);break;case "room_updated":
            this.onRoomUpdated(t.data);break;case "room_deleted":
            this.onRoomDeleted(t.data);break;case "new_cursor":
            this.onNewCursor(t.data);}
      } }, { key: "onInitialState", value: function value(e) {
        var t = e.current_user,
            n = e.rooms,
            r = e.cursors,
            o = Ve(t),
            s = n.map(function (e) {
          return He(e);
        }),
            i = r.map(function (e) {
          return Fe(e);
        });this.established ? function (e) {
          var t = e.basicUser,
              n = e.basicRooms,
              r = e.basicCursors,
              o = e.currentUser,
              s = e.roomStore,
              i = e.cursorStore,
              u = e.hooks;o.setPropertiesFromBasicUser(t);var a = !0,
              c = !1,
              h = void 0;try {
            for (var l, d = n[Symbol.iterator](); !(a = (l = d.next()).done); a = !0) {
              var f = l.value,
                  p = s.getSync(f.id);if (!p) {
                var g = s.setSync(f);u.global.onAddedToRoom && u.global.onAddedToRoom(g);
              }p && !p.eq(f) && (s.updateSync(f.id, f), u.global.onRoomUpdated && u.global.onRoomUpdated(p));
            }
          } catch (e) {
            c = !0, h = e;
          } finally {
            try {
              !a && d.return && d.return();
            } finally {
              if (c) throw h;
            }
          }var m = function m(e) {
            if (!n.some(function (t) {
              return t.id === e;
            })) {
              var t = s.popSync(e);u.global.onRemovedFromRoom && u.global.onRemovedFromRoom(t);
            }
          };for (var v in s.snapshot()) {
            m(v);
          }nt({ basicCursors: r, cursorStore: i, onNewCursorHook: u.global.onNewReadCursor });
        }({ basicUser: o, basicRooms: s, basicCursors: i, currentUser: this.currentUser, roomStore: this.roomStore, cursorStore: this.cursorStore, hooks: this.hooks }) : (this.established = !0, this.onSubscriptionEstablished({ basicUser: o, basicRooms: s, basicCursors: i }));
      } }, { key: "onAddedToRoom", value: function value(e) {
        var t = this,
            n = e.room;this.roomStore.set(He(n)).then(function (e) {
          t.hooks.global.onAddedToRoom && t.hooks.global.onAddedToRoom(e);
        });
      } }, { key: "onRemovedFromRoom", value: function value(e) {
        var t = this,
            n = e.room_id;this.roomStore.pop(n).then(function (e) {
          e && t.hooks.global.onRemovedFromRoom && t.hooks.global.onRemovedFromRoom(e);
        });
      } }, { key: "onRoomUpdated", value: function value(e) {
        var t = this,
            n = e.room,
            r = He(n);this.roomStore.update(r.id, r).then(function (e) {
          t.hooks.global.onRoomUpdated && t.hooks.global.onRoomUpdated(e);
        });
      } }, { key: "onRoomDeleted", value: function value(e) {
        var t = this,
            n = e.room_id;this.roomStore.pop(n).then(function (e) {
          e && t.hooks.global.onRoomDeleted && t.hooks.global.onRoomDeleted(e);
        });
      } }, { key: "onNewCursor", value: function value(e) {
        var t = this;return this.cursorStore.set(Fe(e)).then(function (e) {
          t.hooks.global.onNewReadCursor && 0 === e.type && t.hooks.global.onNewReadCursor(e);
        });
      } }]), e;
  }(),
      ot = function () {
    function e(t) {
      Ue(this, e), this.userId = t.userId, this.instance = t.instance, this.logger = t.logger, this.connectionTimeout = t.connectionTimeout;
    }return _e(e, [{ key: "connect", value: function value() {
        var e = this;return new Promise(function (t, n) {
          e.timeout = setTimeout(function () {
            n(new Error("presence subscription timed out"));
          }, e.connectionTimeout), e.sub = e.instance.subscribeNonResuming({ path: "/users/" + encodeURIComponent(e.userId) + "/register", listeners: { onOpen: function onOpen() {
                clearTimeout(e.timeout), t();
              }, onError: function onError(t) {
                clearTimeout(e.timeout), n(t);
              } } });
        });
      } }, { key: "cancel", value: function value() {
        clearTimeout(this.timeout);try {
          this.sub && this.sub.unsubscribe();
        } catch (e) {
          this.logger.debug("error when cancelling presence subscription", e);
        }
      } }]), e;
  }(),
      st = function () {
    function e(t) {
      Ue(this, e), this.userId = t.userId, this.hooks = t.hooks, this.instance = t.instance, this.userStore = t.userStore, this.roomStore = t.roomStore, this.presenceStore = t.presenceStore, this.logger = t.logger, this.connectionTimeout = t.connectionTimeout, this.connect = this.connect.bind(this), this.cancel = this.cancel.bind(this), this.onEvent = this.onEvent.bind(this), this.onPresenceState = this.onPresenceState.bind(this);
    }return _e(e, [{ key: "connect", value: function value() {
        var e = this;return new Promise(function (t, n) {
          e.timeout = setTimeout(function () {
            n(new Error("user presence subscription timed out"));
          }, e.connectionTimeout), e.onSubscriptionEstablished = function () {
            clearTimeout(e.timeout), t();
          }, e.sub = e.instance.subscribeNonResuming({ path: "/users/" + encodeURIComponent(e.userId), listeners: { onError: function onError(t) {
                clearTimeout(e.timeout), n(t);
              }, onEvent: e.onEvent } });
        });
      } }, { key: "cancel", value: function value() {
        clearTimeout(this.timeout);try {
          this.sub && this.sub.unsubscribe();
        } catch (e) {
          this.logger.debug("error when cancelling user presence subscription", e);
        }
      } }, { key: "onEvent", value: function value(e) {
        var t = e.body;switch (t.event_name) {case "presence_state":
            this.onPresenceState(t.data);}
      } }, { key: "onPresenceState", value: function value(e) {
        var t = this;this.onSubscriptionEstablished();var n = this.presenceStore[this.userId] || "unknown",
            r = function (e) {
          return { state: ["online", "offline"].includes(e.state) ? e.state : "unknown" };
        }(e).state;r !== n && (this.presenceStore[this.userId] = r, this.userStore.get(this.userId).then(function (e) {
          t.hooks.global.onPresenceChanged && t.hooks.global.onPresenceChanged({ current: r, previous: n }, e), Y(pe(function (o) {
            var s = Me(o, 2),
                i = s[0],
                u = s[1];return t.roomStore.get(i).then(function (t) {
              de(e.id, t.userIds) && u.onPresenceChanged({ current: r, previous: n }, e);
            });
          }), ce(function (e) {
            return void 0 !== e[1].onPresenceChanged;
          }), Te)(t.hooks.rooms);
        }));
      } }]), e;
  }(),
      it = function () {
    function e(t) {
      Ue(this, e), this.onNewCursorHook = t.onNewCursorHook, this.roomId = t.roomId, this.cursorStore = t.cursorStore, this.instance = t.instance, this.logger = t.logger, this.connectionTimeout = t.connectionTimeout, this.connect = this.connect.bind(this), this.cancel = this.cancel.bind(this), this.onEvent = this.onEvent.bind(this), this.onInitialState = this.onInitialState.bind(this), this.onNewCursor = this.onNewCursor.bind(this);
    }return _e(e, [{ key: "connect", value: function value() {
        var e = this;return new Promise(function (t, n) {
          e.timeout = setTimeout(function () {
            n(new Error("cursor subscription timed out"));
          }, e.connectionTimeout), e.onSubscriptionEstablished = function (n) {
            clearTimeout(e.timeout), t(n);
          }, e.sub = e.instance.subscribeNonResuming({ path: "/cursors/0/rooms/" + encodeURIComponent(e.roomId), listeners: { onError: function onError(t) {
                clearTimeout(e.timeout), n(t);
              }, onEvent: e.onEvent } });
        });
      } }, { key: "cancel", value: function value() {
        clearTimeout(this.timeout);try {
          this.sub && this.sub.unsubscribe();
        } catch (e) {
          this.logger.debug("error when cancelling cursor subscription", e);
        }
      } }, { key: "onEvent", value: function value(e) {
        var t = e.body;switch (t.event_name) {case "initial_state":
            this.onInitialState(t.data);break;case "new_cursor":
            this.onNewCursor(t.data);}
      } }, { key: "onInitialState", value: function value(e) {
        var t = this,
            n = e.cursors.map(function (e) {
          return Fe(e);
        });this.established ? nt({ basicCursors: n, cursorStore: this.cursorStore, onNewCursorHook: this.onNewCursorHook }) : (this.established = !0, Promise.all(n.map(function (e) {
          return t.cursorStore.set(e);
        })).then(this.onSubscriptionEstablished));
      } }, { key: "onNewCursor", value: function value(e) {
        var t = this;return this.cursorStore.set(Fe(e)).then(function (e) {
          return t.onNewCursorHook(e);
        });
      } }]), e;
  }(),
      ut = function () {
    function e(t, n, r) {
      Ue(this, e), this.type = t.type, this.name = t.name, this.size = t.size, void 0 !== t.customData && (this.customData = t.customData), this._id = t._id, this._downloadURL = t._downloadURL, this._expiration = t._expiration, this._roomId = n, this._instance = r, this.url = this.url.bind(this), this.urlExpiry = this.urlExpiry.bind(this), this._fetchNewDownloadURL = this._fetchNewDownloadURL.bind(this);
    }return _e(e, [{ key: "url", value: function value() {
        return this.urlExpiry().getTime() - Date.now() < 18e5 ? this._fetchNewDownloadURL() : Promise.resolve(this._downloadURL);
      } }, { key: "urlExpiry", value: function value() {
        return this._expiration;
      } }, { key: "_fetchNewDownloadURL", value: function value() {
        var e = this;return this._instance.request({ method: "GET", path: "rooms/" + encodeURIComponent(this._roomId) + "/attachments/" + this._id }).then(function (t) {
          var n = JSON.parse(t),
              r = n.download_url,
              o = n.expiration;return e._downloadURL = r, e._expiration = new Date(o), e._downloadURL;
        });
      } }]), e;
  }(),
      at = function () {
    function e(t, n, r, o) {
      var s = this;Ue(this, e), this.id = t.id, this.senderId = t.senderId, this.roomId = t.roomId, this.createdAt = t.createdAt, this.updatedAt = t.updatedAt, t.parts ? this.parts = t.parts.map(function (e) {
        var t = e.partType,
            n = e.payload;return "attachment" === t ? { partType: t, payload: new ut(n, s.roomId, o) } : { partType: t, payload: n };
      }) : (this.text = t.text, t.attachment && (this.attachment = t.attachment)), this.userStore = n, this.roomStore = r;
    }return _e(e, [{ key: "sender", get: function get() {
        return this.userStore.getSync(this.senderId);
      } }, { key: "room", get: function get() {
        return this.roomStore.getSync(this.roomId);
      } }]), e;
  }(),
      ct = function () {
    function e(t) {
      Ue(this, e), this.roomId = t.roomId, this.messageLimit = t.messageLimit, this.userId = t.userId, this.instance = t.instance, this.userStore = t.userStore, this.roomStore = t.roomStore, this.typingIndicators = t.typingIndicators, this.messageBuffer = [], this.logger = t.logger, this.connectionTimeout = t.connectionTimeout, this.onMessageHook = t.onMessageHook, this.connect = this.connect.bind(this), this.cancel = this.cancel.bind(this), this.onEvent = this.onEvent.bind(this), this.onMessage = this.onMessage.bind(this), this.flushBuffer = this.flushBuffer.bind(this), this.onIsTyping = this.onIsTyping.bind(this);
    }return _e(e, [{ key: "connect", value: function value() {
        var e = this;return new Promise(function (t, n) {
          e.timeout = setTimeout(function () {
            n(new Error("message subscription timed out"));
          }, e.connectionTimeout), e.sub = e.instance.subscribeResuming({ path: "/rooms/" + encodeURIComponent(e.roomId) + "?" + je({ message_limit: e.messageLimit }), listeners: { onOpen: function onOpen() {
                clearTimeout(e.timeout), t();
              }, onError: function onError(t) {
                clearTimeout(e.timeout), n(t);
              }, onEvent: e.onEvent } });
        });
      } }, { key: "cancel", value: function value() {
        clearTimeout(this.timeout);try {
          this.sub && this.sub.unsubscribe();
        } catch (e) {
          this.logger.debug("error when cancelling message subscription", e);
        }
      } }, { key: "onEvent", value: function value(e) {
        var t = e.body;switch (t.event_name) {case "new_message":
            this.onMessage(t.data);break;case "is_typing":
            this.onIsTyping(t.data);}
      } }, { key: "onMessage", value: function value(e) {
        var t = this,
            n = { message: new at(Je(e), this.userStore, this.roomStore, this.instance), ready: !1 };this.messageBuffer.push(n), this.userStore.fetchMissingUsers([n.message.senderId]).catch(function (e) {
          t.logger.error("error fetching missing user information:", e);
        }).then(function () {
          n.ready = !0, t.flushBuffer();
        });
      } }, { key: "flushBuffer", value: function value() {
        for (; this.messageBuffer.length > 0 && this.messageBuffer[0].ready;) {
          this.onMessageHook(this.messageBuffer.shift().message);
        }
      } }, { key: "onIsTyping", value: function value(e) {
        var t = this,
            n = e.user_id;n !== this.userId && Promise.all([this.roomStore.get(this.roomId), this.userStore.get(n)]).then(function (e) {
          var n = Me(e, 2),
              r = n[0],
              o = n[1];return t.typingIndicators.onIsTyping(r, o);
        });
      } }]), e;
  }(),
      ht = function () {
    function e(t) {
      Ue(this, e), this.roomId = t.roomId, this.instance = t.instance, this.userStore = t.userStore, this.roomStore = t.roomStore, this.logger = t.logger, this.connectionTimeout = t.connectionTimeout, this.onUserJoinedRoomHook = t.onUserJoinedRoomHook, this.onUserLeftRoomHook = t.onUserLeftRoomHook, this.connect = this.connect.bind(this), this.cancel = this.cancel.bind(this), this.onEvent = this.onEvent.bind(this), this.onInitialState = this.onInitialState.bind(this), this.onUserJoined = this.onUserJoined.bind(this), this.onUserLeft = this.onUserLeft.bind(this);
    }return _e(e, [{ key: "connect", value: function value() {
        var e = this;return new Promise(function (t, n) {
          e.timeout = setTimeout(function () {
            n(new Error("membership subscription timed out"));
          }, e.connectionTimeout), e.onSubscriptionEstablished = function (n) {
            clearTimeout(e.timeout), t(n);
          }, e.sub = e.instance.subscribeNonResuming({ path: "/rooms/" + encodeURIComponent(e.roomId) + "/memberships", listeners: { onError: function onError(t) {
                clearTimeout(e.timeout), n(t);
              }, onEvent: e.onEvent } });
        });
      } }, { key: "cancel", value: function value() {
        clearTimeout(this.timeout);try {
          this.sub && this.sub.unsubscribe();
        } catch (e) {
          this.logger.debug("error when cancelling membership subscription", e);
        }
      } }, { key: "onEvent", value: function value(e) {
        var t = e.body;switch (t.event_name) {case "initial_state":
            this.onInitialState(t.data);break;case "user_joined":
            this.onUserJoined(t.data);break;case "user_left":
            this.onUserLeft(t.data);}
      } }, { key: "onInitialState", value: function value(e) {
        var t = this,
            n = e.user_ids;this.established ? function (e) {
          var t = e.userIds,
              n = e.roomId,
              r = e.roomStore,
              o = e.userStore,
              s = e.onUserJoinedRoomHook,
              i = e.onUserLeftRoomHook;o.fetchMissingUsers(t).then(function () {
            var e = r.getSync(n);return t.filter(function (t) {
              return !e.userIds.includes(t);
            }).forEach(function (t) {
              return o.get(t).then(function (t) {
                return s(e, t);
              });
            }), e.userIds.filter(function (e) {
              return !t.includes(e);
            }).forEach(function (t) {
              return o.get(t).then(function (t) {
                return i(e, t);
              });
            }), r.update(n, { userIds: t });
          });
        }({ userIds: n, roomId: this.roomId, roomStore: this.roomStore, userStore: this.userStore, onUserJoinedRoomHook: this.onUserJoinedRoomHook, onUserLeftRoomHook: this.onUserLeftRoomHook }) : (this.established = !0, this.roomStore.update(this.roomId, { userIds: n }).then(function () {
          t.onSubscriptionEstablished();
        }));
      } }, { key: "onUserJoined", value: function value(e) {
        var t = this,
            n = e.user_id;this.roomStore.addUserToRoom(this.roomId, n).then(function (e) {
          return t.userStore.get(n).then(function (n) {
            return t.onUserJoinedRoomHook(e, n);
          });
        });
      } }, { key: "onUserLeft", value: function value(e) {
        var t = this,
            n = e.user_id;this.roomStore.removeUserFromRoom(this.roomId, n).then(function (e) {
          return t.userStore.get(n).then(function (n) {
            return t.onUserLeftRoomHook(e, n);
          });
        });
      } }]), e;
  }(),
      lt = function () {
    function e(t) {
      Ue(this, e), this.buffer = [], this.messageSub = new ct({ roomId: t.roomId, messageLimit: t.messageLimit, userId: t.userId, instance: t.serverInstance, userStore: t.userStore, roomStore: t.roomStore, typingIndicators: t.typingIndicators, logger: t.logger, connectionTimeout: t.connectionTimeout, onMessageHook: this.bufferWhileConnecting(function (e) {
          t.hooks.rooms[t.roomId] && t.hooks.rooms[t.roomId].onMessage && t.hooks.rooms[t.roomId].onMessage(e);
        }) }), this.cursorSub = new it({ roomId: t.roomId, cursorStore: t.cursorStore, instance: t.cursorsInstance, logger: t.logger, connectionTimeout: t.connectionTimeout, onNewCursorHook: this.bufferWhileConnecting(function (e) {
          t.hooks.rooms[t.roomId] && t.hooks.rooms[t.roomId].onNewReadCursor && 0 === e.type && e.userId !== t.userId && t.hooks.rooms[t.roomId].onNewReadCursor(e);
        }) }), this.membershipSub = new ht({ roomId: t.roomId, instance: t.serverInstance, userStore: t.userStore, roomStore: t.roomStore, logger: t.logger, connectionTimeout: t.connectionTimeout, onUserJoinedRoomHook: this.bufferWhileConnecting(function (e, n) {
          t.hooks.global.onUserJoinedRoom && t.hooks.global.onUserJoinedRoom(e, n), t.hooks.rooms[e.id] && t.hooks.rooms[e.id].onUserJoined && t.hooks.rooms[e.id].onUserJoined(n);
        }), onUserLeftRoomHook: this.bufferWhileConnecting(function (e, n) {
          t.hooks.global.onUserLeftRoom && t.hooks.global.onUserLeftRoom(e, n), t.hooks.rooms[e.id] && t.hooks.rooms[e.id].onUserLeft && t.hooks.rooms[e.id].onUserLeft(n);
        }) });
    }return _e(e, [{ key: "connect", value: function value() {
        var e = this;return this.cancelled ? Promise.reject(new Error("attempt to connect a cancelled room subscription")) : Promise.all([this.messageSub.connect(), this.cursorSub.connect(), this.membershipSub.connect()]).then(function () {
          return e.flushBuffer();
        });
      } }, { key: "cancel", value: function value() {
        this.cancelled = !0, this.messageSub.cancel(), this.cursorSub.cancel(), this.membershipSub.cancel();
      } }, { key: "bufferWhileConnecting", value: function value(e) {
        var t = this;return function () {
          for (var n = arguments.length, r = Array(n), o = 0; o < n; o++) {
            r[o] = arguments[o];
          }t.connected ? e.apply(void 0, r) : t.buffer.push(e.bind.apply(e, [t].concat(r)));
        };
      } }, { key: "flushBuffer", value: function value() {
        this.connected = !0, this.buffer.forEach(function (e) {
          return e();
        }), delete this.buffer;
      } }]), e;
  }(),
      dt = function () {
    function e(t) {
      var n = this,
          r = t.serverInstanceV2,
          o = t.serverInstanceV4,
          s = t.connectionTimeout,
          i = t.cursorsInstance,
          u = t.filesInstance,
          a = t.hooks,
          c = t.id,
          h = t.presenceInstance;Ue(this, e), this.hooks = { global: a, rooms: {} }, this.id = c, this.encodedId = encodeURIComponent(this.id), this.serverInstanceV2 = r, this.serverInstanceV4 = o, this.filesInstance = u, this.cursorsInstance = i, this.connectionTimeout = s, this.presenceInstance = h, this.logger = o.logger, this.presenceStore = {}, this.userStore = new We({ instance: this.serverInstanceV4, presenceStore: this.presenceStore, logger: this.logger }), this.roomStore = new $e({ instance: this.serverInstanceV4, userStore: this.userStore, isSubscribedTo: function isSubscribedTo(e) {
          return n.isSubscribedTo(e);
        }, logger: this.logger }), this.cursorStore = new Ze({ instance: this.cursorsInstance, userStore: this.userStore, roomStore: this.roomStore, logger: this.logger }), this.typingIndicators = new tt({ hooks: this.hooks, instance: this.serverInstanceV4, logger: this.logger }), this.userStore.onSetHooks.push(function (e) {
        return n.subscribeToUserPresence(e);
      }), this.roomSubscriptions = {}, this.readCursorBuffer = {}, this.userPresenceSubscriptions = {}, this.setReadCursor = this.setReadCursor.bind(this), this.readCursor = this.readCursor.bind(this), this.isTypingIn = this.isTypingIn.bind(this), this.createRoom = this.createRoom.bind(this), this.getJoinableRooms = this.getJoinableRooms.bind(this), this.joinRoom = this.joinRoom.bind(this), this.leaveRoom = this.leaveRoom.bind(this), this.addUserToRoom = this.addUserToRoom.bind(this), this.removeUserFromRoom = this.removeUserFromRoom.bind(this), this.sendMessage = this.sendMessage.bind(this), this.sendSimpleMessage = this.sendSimpleMessage.bind(this), this.sendMultipartMessage = this.sendMultipartMessage.bind(this), this.fetchMessages = this.fetchMessages.bind(this), this.fetchMultipartMessages = this.fetchMultipartMessages.bind(this), this.subscribeToRoom = this.subscribeToRoom.bind(this), this.subscribeToRoomMultipart = this.subscribeToRoomMultipart.bind(this), this.updateRoom = this.updateRoom.bind(this), this.deleteRoom = this.deleteRoom.bind(this), this.setReadCursorRequest = this.setReadCursorRequest.bind(this), this.uploadDataAttachment = this.uploadDataAttachment.bind(this), this.isMemberOf = this.isMemberOf.bind(this), this.isSubscribedTo = this.isSubscribedTo.bind(this), this.decorateMessage = this.decorateMessage.bind(this), this.setPropertiesFromBasicUser = this.setPropertiesFromBasicUser.bind(this), this.establishUserSubscription = this.establishUserSubscription.bind(this), this.establishPresenceSubscription = this.establishPresenceSubscription.bind(this), this.subscribeToUserPresence = this.subscribeToUserPresence.bind(this), this.disconnect = this.disconnect.bind(this), this._uploadAttachment = this._uploadAttachment.bind(this);
    }return _e(e, [{ key: "setReadCursor", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.roomId,
            r = t.position;return De("roomId", "string", n), De("position", "number", r), new Promise(function (t, o) {
          void 0 !== e.readCursorBuffer[n] ? (e.readCursorBuffer[n].position = b(e.readCursorBuffer[n].position, r), e.readCursorBuffer[n].callbacks.push({ resolve: t, reject: o })) : (e.readCursorBuffer[n] = { position: r, callbacks: [{ resolve: t, reject: o }] }, setTimeout(function () {
            e.setReadCursorRequest(Ne({ roomId: n }, e.readCursorBuffer[n])), delete e.readCursorBuffer[n];
          }, 500));
        });
      } }, { key: "readCursor", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.roomId,
            n = e.userId,
            r = void 0 === n ? this.id : n;if (De("roomId", "string", t), De("userId", "string", r), r !== this.id && !this.isSubscribedTo(t)) {
          var o = new Error("Must be subscribed to room " + t + " to access member's read cursors");throw this.logger.error(o), o;
        }return this.cursorStore.getSync(r, t);
      } }, { key: "isTypingIn", value: function value() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).roomId;return De("roomId", "string", e), this.typingIndicators.sendThrottledRequest(e);
      } }, { key: "createRoom", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.name,
            r = t.addUserIds,
            o = t.customData,
            s = Ce(t, ["name", "addUserIds", "customData"]);return n && De("name", "string", n), r && xe("addUserIds", "string", r), o && De("customData", "object", o), this.serverInstanceV4.request({ method: "POST", path: "/rooms", json: { created_by_id: this.id, name: n, private: !!s.private, user_ids: r, custom_data: o } }).then(function (t) {
          return e.roomStore.set(He(JSON.parse(t)));
        }).catch(function (t) {
          throw e.logger.warn("error creating room:", t), t;
        });
      } }, { key: "getJoinableRooms", value: function value() {
        var e = this;return this.serverInstanceV4.request({ method: "GET", path: "/users/" + this.encodedId + "/rooms?joinable=true" }).then(K(JSON.parse, q(He))).catch(function (t) {
          throw e.logger.warn("error getting joinable rooms:", t), t;
        });
      } }, { key: "joinRoom", value: function value() {
        var e = this,
            t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).roomId;return De("roomId", "string", t), this.isMemberOf(t) ? this.roomStore.get(t) : this.serverInstanceV4.request({ method: "POST", path: "/users/" + this.encodedId + "/rooms/" + encodeURIComponent(t) + "/join" }).then(function (t) {
          return e.roomStore.set(He(JSON.parse(t)));
        }).catch(function (n) {
          throw e.logger.warn("error joining room " + t + ":", n), n;
        });
      } }, { key: "leaveRoom", value: function value() {
        var e = this,
            t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).roomId;return De("roomId", "string", t), this.roomStore.get(t).then(function (n) {
          return e.serverInstanceV4.request({ method: "POST", path: "/users/" + e.encodedId + "/rooms/" + encodeURIComponent(t) + "/leave" }).then(function () {
            return n;
          });
        }).catch(function (n) {
          throw e.logger.warn("error leaving room " + t + ":", n), n;
        });
      } }, { key: "addUserToRoom", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.userId,
            r = t.roomId;return De("userId", "string", n), De("roomId", "string", r), this.serverInstanceV4.request({ method: "PUT", path: "/rooms/" + encodeURIComponent(r) + "/users/add", json: { user_ids: [n] } }).then(function () {
          return e.roomStore.addUserToRoom(r, n);
        }).catch(function (t) {
          throw e.logger.warn("error adding user " + n + " to room " + r + ":", t), t;
        });
      } }, { key: "removeUserFromRoom", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.userId,
            r = t.roomId;return De("userId", "string", n), De("roomId", "string", r), this.serverInstanceV4.request({ method: "PUT", path: "/rooms/" + encodeURIComponent(r) + "/users/remove", json: { user_ids: [n] } }).then(function () {
          return e.roomStore.removeUserFromRoom(r, n);
        }).catch(function (t) {
          throw e.logger.warn("error removing user " + n + " from room " + r + ":", t), t;
        });
      } }, { key: "sendMessage", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.text,
            r = t.roomId,
            o = t.attachment;return De("text", "string", n), De("roomId", "string", r), new Promise(function (t, n) {
          void 0 !== o && ft(o) ? t(e.uploadDataAttachment(r, o)) : void 0 !== o && pt(o) ? t({ resource_link: o.link, type: o.type }) : void 0 !== o ? n(new TypeError("attachment was malformed")) : t();
        }).then(function (t) {
          return e.serverInstanceV2.request({ method: "POST", path: "/rooms/" + encodeURIComponent(r) + "/messages", json: { text: n, attachment: t } });
        }).then(K(JSON.parse, B("message_id"))).catch(function (t) {
          throw e.logger.warn("error sending message to room " + r + ":", t), t;
        });
      } }, { key: "sendSimpleMessage", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.roomId,
            n = e.text;return this.sendMultipartMessage({ roomId: t, parts: [{ type: "text/plain", content: n }] });
      } }, { key: "sendMultipartMessage", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.roomId,
            r = t.parts;return De("roomId", "string", n), xe("parts", "object", r), 0 === r.length ? Promise.reject(new TypeError("message must contain at least one part")) : Promise.all(r.map(function (t) {
          return t.type = t.type || t.file && t.file.type, De("part.type", "string", t.type), t.content && De("part.content", "string", t.content), t.url && De("part.url", "string", t.url), t.name && De("part.name", "string", t.name), t.file && De("part.file.size", "number", t.file.size), t.file ? e._uploadAttachment({ roomId: n, part: t }) : t;
        })).then(function (t) {
          return e.serverInstanceV4.request({ method: "POST", path: "/rooms/" + encodeURIComponent(n) + "/messages", json: { parts: t.map(function (e) {
                return { type: e.type, content: e.content, url: e.url, attachment: e.attachment };
              }) } });
        }).then(function (e) {
          return JSON.parse(e).message_id;
        }).catch(function (t) {
          throw e.logger.warn("error sending message to room " + n + ":", t), t;
        });
      } }, { key: "fetchMessages", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.roomId,
            r = t.initialId,
            o = t.limit,
            s = t.direction,
            i = t.serverInstance;return De("roomId", "string", n), r && De("initialId", "number", r), o && De("limit", "number", o), s && function (e, t, n) {
          if (!de(n, t)) throw new TypeError("expected " + e + " to be one of " + t + " but was " + n);
        }("direction", ["older", "newer"], s), (i || this.serverInstanceV2).request({ method: "GET", path: "/rooms/" + encodeURIComponent(n) + "/messages?" + je({ initial_id: r, limit: o, direction: s }) }).then(function (t) {
          var n = JSON.parse(t).map(function (t) {
            return e.decorateMessage(Je(t));
          });return e.userStore.fetchMissingUsers(we(q(B("senderId"), n))).then(function () {
            return Re(function (e, t) {
              return e.id - t.id;
            }, n);
          });
        }).catch(function (t) {
          throw e.logger.warn("error fetching messages from room " + n + ":", t), t;
        });
      } }, { key: "fetchMultipartMessages", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return this.fetchMessages(Ne({}, e, { serverInstance: this.serverInstanceV4 }));
      } }, { key: "subscribeToRoom", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.roomId,
            r = t.hooks,
            o = void 0 === r ? {} : r,
            s = t.messageLimit,
            i = t.serverInstance;De("roomId", "string", n), qe("hooks", "function", o), s && De("messageLimit", "number", s), this.roomSubscriptions[n] && this.roomSubscriptions[n].cancel(), this.hooks.rooms[n] = o;var u = new lt({ serverInstance: i || this.serverInstanceV2, connectionTimeout: this.connectionTimeout, cursorStore: this.cursorStore, cursorsInstance: this.cursorsInstance, hooks: this.hooks, logger: this.logger, messageLimit: s, roomId: n, roomStore: this.roomStore, typingIndicators: this.typingIndicators, userId: this.id, userStore: this.userStore });return this.roomSubscriptions[n] = u, this.joinRoom({ roomId: n }).then(function (e) {
          return u.connect().then(function () {
            return e;
          });
        }).catch(function (t) {
          throw e.logger.warn("error subscribing to room " + n + ":", t), t;
        });
      } }, { key: "subscribeToRoomMultipart", value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return this.subscribeToRoom(Ne({}, e, { serverInstance: this.serverInstanceV4 }));
      } }, { key: "updateRoom", value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.roomId,
            r = t.name,
            o = t.customData,
            s = Ce(t, ["roomId", "name", "customData"]);return De("roomId", "string", n), r && De("name", "string", r), s.private && De("private", "boolean", s.private), o && De("customData", "object", o), this.serverInstanceV4.request({ method: "PUT", path: "/rooms/" + encodeURIComponent(n), json: { name: r, private: s.private, custom_data: o } }).then(function () {}).catch(function (t) {
          throw e.logger.warn("error updating room:", t), t;
        });
      } }, { key: "deleteRoom", value: function value() {
        var e = this,
            t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).roomId;return De("roomId", "string", t), this.serverInstanceV4.request({ method: "DELETE", path: "/rooms/" + encodeURIComponent(t) }).then(function () {}).catch(function (t) {
          throw e.logger.warn("error deleting room:", t), t;
        });
      } }, { key: "setReadCursorRequest", value: function value(e) {
        var t = this,
            n = e.roomId,
            r = e.position,
            o = e.callbacks;return this.cursorsInstance.request({ method: "PUT", path: "/cursors/0/rooms/" + encodeURIComponent(n) + "/users/" + this.encodedId, json: { position: r } }).then(function () {
          return q(function (e) {
            return e.resolve();
          }, o);
        }).catch(function (e) {
          t.logger.warn("error setting cursor:", e), q(function (t) {
            return t.reject(e);
          }, o);
        });
      } }, { key: "uploadDataAttachment", value: function value(e, t) {
        var n = t.file,
            r = t.name,
            o = new FormData();return o.append("file", n, r), this.filesInstance.request({ method: "POST", path: "/rooms/" + encodeURIComponent(e) + "/users/" + this.encodedId + "/files/" + encodeURIComponent(r), body: o }).then(JSON.parse);
      } }, { key: "_uploadAttachment", value: function value(e) {
        var t = e.roomId,
            n = e.part,
            r = n.type,
            o = n.name,
            s = n.customData,
            u = n.file;return this.serverInstanceV4.request({ method: "POST", path: "/rooms/" + encodeURIComponent(t) + "/attachments", json: { content_type: r, content_length: u.size, origin: window && window.location && window.location.origin, name: o || u.name, custom_data: s } }).then(function (e) {
          var t = JSON.parse(e),
              n = t.attachment_id,
              o = t.upload_url;return i({ method: "PUT", url: o, body: u, headers: { "content-type": r } }).then(function () {
            return { type: r, attachment: { id: n } };
          });
        });
      } }, { key: "isMemberOf", value: function value(e) {
        return de(e, q(B("id"), this.rooms));
      } }, { key: "isSubscribedTo", value: function value(e) {
        return me(e, this.roomSubscriptions);
      } }, { key: "decorateMessage", value: function value(e) {
        return new at(e, this.userStore, this.roomStore, this.serverInstanceV4);
      } }, { key: "setPropertiesFromBasicUser", value: function value(e) {
        this.avatarURL = e.avatarURL, this.createdAt = e.createdAt, this.customData = e.customData, this.name = e.name, this.updatedAt = e.updatedAt;
      } }, { key: "establishUserSubscription", value: function value() {
        var e = this;return this.userSubscription = new rt({ hooks: this.hooks, userId: this.id, instance: this.serverInstanceV4, roomStore: this.roomStore, cursorStore: this.cursorStore, typingIndicators: this.typingIndicators, logger: this.logger, connectionTimeout: this.connectionTimeout, currentUser: this }), this.userSubscription.connect().then(function (t) {
          var n = t.basicUser,
              r = t.basicRooms,
              o = t.basicCursors;return e.setPropertiesFromBasicUser(n), Promise.all([].concat(Ae(r.map(function (t) {
            return e.roomStore.set(t);
          })), Ae(o.map(function (t) {
            return e.cursorStore.set(t);
          }))));
        }).catch(function (t) {
          throw e.logger.error("error establishing user subscription:", t), t;
        });
      } }, { key: "establishPresenceSubscription", value: function value() {
        var e = this;return this.presenceSubscription = new ot({ userId: this.id, instance: this.presenceInstance, logger: this.logger, connectionTimeout: this.connectionTimeout }), Promise.all([this.userStore.fetchBasicUsers([this.id]), this.subscribeToUserPresence(this.id), this.presenceSubscription.connect().catch(function (t) {
          throw e.logger.warn("error establishing presence subscription:", t), t;
        })]);
      } }, { key: "subscribeToUserPresence", value: function value(e) {
        if (this.userPresenceSubscriptions[e]) return Promise.resolve();var t = new st({ hooks: this.hooks, userId: e, instance: this.presenceInstance, userStore: this.userStore, roomStore: this.roomStore, presenceStore: this.presenceStore, logger: this.logger, connectionTimeout: this.connectionTimeout });return this.userPresenceSubscriptions[e] = t, t.connect();
      } }, { key: "disconnect", value: function value() {
        this.userSubscription.cancel(), this.presenceSubscription.cancel(), ge(function (e) {
          return e.cancel();
        }, this.roomSubscriptions), ge(function (e) {
          return e.cancel();
        }, this.userPresenceSubscriptions);
      } }, { key: "rooms", get: function get() {
        return J(this.roomStore.snapshot());
      } }, { key: "users", get: function get() {
        return J(this.userStore.snapshot());
      } }]), e;
  }(),
      ft = function ft(e) {
    var t = e.file,
        n = e.name;return void 0 !== t && void 0 !== n && (De("attachment.file", "object", t), De("attachment.name", "string", n), !0);
  },
      pt = function pt(e) {
    var t = e.link,
        n = e.type;return void 0 !== t && void 0 !== n && (De("attachment.link", "string", t), De("attachment.type", "string", n), !0);
  },
      gt = "1.5.0";return { TokenProvider: Be, ChatManager: function () {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.instanceLocator,
            i = t.tokenProvider,
            u = t.userId,
            a = Ce(t, ["instanceLocator", "tokenProvider", "userId"]);Ue(this, e), De("instanceLocator", "string", n), De("tokenProvider", "object", i), De("tokenProvider.fetchToken", "function", i.fetchToken), De("userId", "string", u);var c = ke(":", n)[1];if (void 0 === c) throw new TypeError("expected instanceLocator to be of the format x:y:z, but was " + n);var h = a.baseClient || new r({ host: c + "." + o, logger: a.logger, sdkProduct: "chatkit", sdkVersion: gt });"function" == typeof i.setUserId && i.setUserId(u);var l = { client: h, locator: n, logger: a.logger, tokenProvider: i };this.serverInstanceV2 = new s(Ne({ serviceName: "chatkit", serviceVersion: "v2" }, l)), this.serverInstanceV4 = new s(Ne({ serviceName: "chatkit", serviceVersion: "v4" }, l)), this.filesInstance = new s(Ne({ serviceName: "chatkit_files", serviceVersion: "v1" }, l)), this.cursorsInstance = new s(Ne({ serviceName: "chatkit_cursors", serviceVersion: "v2" }, l)), this.presenceInstance = new s(Ne({ serviceName: "chatkit_presence", serviceVersion: "v2" }, l)), this.userId = u, this.connectionTimeout = a.connectionTimeout || et, this.connect = this.connect.bind(this), this.disconnect = this.disconnect.bind(this);
      }return _e(e, [{ key: "connect", value: function value() {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};qe("hooks", "function", t);var n = new dt({ hooks: t, id: this.userId, serverInstanceV2: this.serverInstanceV2, serverInstanceV4: this.serverInstanceV4, filesInstance: this.filesInstance, cursorsInstance: this.cursorsInstance, presenceInstance: this.presenceInstance, connectionTimeout: this.connectionTimeout });return Promise.all([n.establishUserSubscription(), n.establishPresenceSubscription()]).then(function () {
            return e.currentUser = n, n;
          });
        } }, { key: "disconnect", value: function value() {
          this.currentUser && this.currentUser.disconnect();
        } }]), e;
    }() };
});

/***/ }),

/***/ "X+DE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dateParser;

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _toArray(arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
}

function dateParser(date) {
  var parsed = new Date(date);
  if (!Number.isNaN(parsed.valueOf())) {
    return parsed;
  }

  var parts = String(date).match(/\d+/g);
  if (parts == null || parts.length <= 2) {
    return parsed;
  } else {
    var _parts$map = parts.map(function (x) {
      return parseInt(x);
    }),
        _parts$map2 = _toArray(_parts$map),
        firstP = _parts$map2[0],
        secondP = _parts$map2[1],
        restPs = _parts$map2.slice(2);

    var correctedParts = [firstP, secondP - 1].concat(_toConsumableArray(restPs));
    var isoDate = new Date(Date.UTC.apply(Date, _toConsumableArray(correctedParts)));
    return isoDate;
  }
}

/***/ }),

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home"};

/***/ }),

/***/ "bdTz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Sister;

/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function Sister() {
    var sister = {},
        events = {};

    /**
     * @name handler
     * @function
     * @param {Object} data Event data.
     */

    /**
     * @param {String} name Event name.
     * @param {handler} handler
     * @return {listener}
     */
    sister.on = function (name, handler) {
        var listener = { name: name, handler: handler };
        events[name] = events[name] || [];
        events[name].unshift(listener);
        return listener;
    };

    /**
     * @param {listener}
     */
    sister.off = function (listener) {
        var index = events[listener.name].indexOf(listener);

        if (index !== -1) {
            events[listener.name].splice(index, 1);
        }
    };

    /**
     * @param {String} name Event name.
     * @param {Object} data Event data.
     */
    sister.trigger = function (name, data) {
        var listeners = events[name],
            i;

        if (listeners) {
            i = listeners.length;
            while (i--) {
                listeners[i].handler(data);
            }
        }
    };

    return sister;
};

module.exports = Sister;

/***/ }),

/***/ "eH4F":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"loader":"loader"};

/***/ }),

/***/ "eW0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1_preact__, "createRef")) __webpack_require__.d(__webpack_exports__, "createRef", function() { return __WEBPACK_IMPORTED_MODULE_1_preact__["createRef"]; });





var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "production" !== 'production';
} catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = vnode.attributes == null ? {} : extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(Portal, { vnode: vnode, container: container });
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		this.setState(state, callback);
		for (var i in this.state) {
			if (!(i in state)) {
				delete this.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	hydrate: render$1,
	createClass: createClass,
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	createRef: __WEBPACK_IMPORTED_MODULE_1_preact__["createRef"],
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "gp30":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"iframe":"iframe"};

/***/ }),

/***/ "i94E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__("eW0v");

var React = _interopRequireWildcard(_react);

var _defaultFormatter = __webpack_require__("lTPU");

var _defaultFormatter2 = _interopRequireDefault(_defaultFormatter);

var _dateParser = __webpack_require__("X+DE");

var _dateParser2 = _interopRequireDefault(_dateParser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Component = React.Component;

// Just some simple constants for readability
var MINUTE = 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;
var MONTH = DAY * 30;
var YEAR = DAY * 365;

var TimeAgo = function (_Component) {
  _inherits(TimeAgo, _Component);

  function TimeAgo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TimeAgo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TimeAgo.__proto__ || Object.getPrototypeOf(TimeAgo)).call.apply(_ref, [this].concat(args))), _this), _this.isStillMounted = false, _this.tick = function (refresh) {
      if (!_this.isStillMounted || !_this.props.live) {
        return;
      }

      var then = (0, _dateParser2.default)(_this.props.date).valueOf();
      if (!then) {
        console.warn('[react-timeago] Invalid Date provided');
        return;
      }

      var now = _this.props.now();
      var seconds = Math.round(Math.abs(now - then) / 1000);

      var unboundPeriod = seconds < MINUTE ? 1000 : seconds < HOUR ? 1000 * MINUTE : seconds < DAY ? 1000 * HOUR : 0;
      var period = Math.min(Math.max(unboundPeriod, _this.props.minPeriod * 1000), _this.props.maxPeriod * 1000);

      if (period) {
        if (_this.timeoutId) {
          clearTimeout(_this.timeoutId);
        }
        _this.timeoutId = setTimeout(_this.tick, period);
      }

      if (!refresh) {
        _this.forceUpdate();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimeAgo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.isStillMounted = true;
      if (this.props.live) {
        this.tick(true);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (this.props.live !== lastProps.live || this.props.date !== lastProps.date) {
        if (!this.props.live && this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.tick();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.isStillMounted = false;
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
        this.timeoutId = undefined;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable no-unused-vars */
      var _props = this.props,
          date = _props.date,
          formatter = _props.formatter,
          Komponent = _props.component,
          live = _props.live,
          minPeriod = _props.minPeriod,
          maxPeriod = _props.maxPeriod,
          title = _props.title,
          now = _props.now,
          passDownProps = _objectWithoutProperties(_props, ['date', 'formatter', 'component', 'live', 'minPeriod', 'maxPeriod', 'title', 'now']);
      /* eslint-enable no-unused-vars */

      var then = (0, _dateParser2.default)(date).valueOf();
      if (!then) {
        return null;
      }
      var timeNow = now();
      var seconds = Math.round(Math.abs(timeNow - then) / 1000);
      var suffix = then < timeNow ? 'ago' : 'from now';

      var _ref2 = seconds < MINUTE ? [Math.round(seconds), 'second'] : seconds < HOUR ? [Math.round(seconds / MINUTE), 'minute'] : seconds < DAY ? [Math.round(seconds / HOUR), 'hour'] : seconds < WEEK ? [Math.round(seconds / DAY), 'day'] : seconds < MONTH ? [Math.round(seconds / WEEK), 'week'] : seconds < YEAR ? [Math.round(seconds / MONTH), 'month'] : [Math.round(seconds / YEAR), 'year'],
          _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[0],
          unit = _ref3[1];

      var passDownTitle = typeof title === 'undefined' ? typeof date === 'string' ? date : (0, _dateParser2.default)(date).toISOString().substr(0, 16).replace('T', ' ') : title;

      var spreadProps = Komponent === 'time' ? _extends2({}, passDownProps, {
        dateTime: (0, _dateParser2.default)(date).toISOString()
      }) : passDownProps;

      var nextFormatter = _defaultFormatter2.default.bind(null, value, unit, suffix);

      return React.createElement(Komponent, _extends({}, spreadProps, { title: passDownTitle }), formatter(value, unit, suffix, then, nextFormatter, now));
    }
  }]);

  return TimeAgo;
}(Component);

TimeAgo.displayName = 'TimeAgo';
TimeAgo.defaultProps = {
  live: true,
  component: 'time',
  minPeriod: 0,
  maxPeriod: Infinity,
  formatter: _defaultFormatter2.default,
  now: function now() {
    return Date.now();
  }
};
exports.default = TimeAgo;

/***/ }),

/***/ "jIGR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a),
        arrB = isArray(b),
        i,
        length,
        key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date,
        dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp,
        regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!hasProp.call(b, keys[i])) return false;
    }for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a !== a && b !== b;
};

/***/ }),

/***/ "jcLW":
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__("y5CM");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();

/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance ||
  // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) ||
  // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 ||
  // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit');

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch (e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/***/ }),

/***/ "lTPU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaultFormatter;

var _react = __webpack_require__("eW0v");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function defaultFormatter(value, unit, suffix) {
  if (value !== 1) {
    unit += 's';
  }
  return value + ' ' + unit + ' ' + suffix;
}

/***/ }),

/***/ "o/U+":
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),

/***/ "qesD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  BUFFERING: 3,
  ENDED: 0,
  PAUSED: 2,
  PLAYING: 1,
  UNSTARTED: -1,
  VIDEO_CUED: 5
};
module.exports = exports["default"];

/***/ }),

/***/ "u3et":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header","linksContainer":"linksContainer","headerLink":"headerLink"};

/***/ }),

/***/ "vHs2":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "xhtd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadScript = __webpack_require__("zX5E");

var _loadScript2 = _interopRequireDefault(_loadScript);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (emitter) {
  /**
   * A promise that is resolved when window.onYouTubeIframeAPIReady is called.
   * The promise is resolved with a reference to window.YT object.
   */
  var iframeAPIReady = new Promise(function (resolve) {
    if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
      resolve(window.YT);

      return;
    } else {
      var protocol = window.location.protocol === 'http:' ? 'http:' : 'https:';

      (0, _loadScript2.default)(protocol + '//www.youtube.com/iframe_api', function (error) {
        if (error) {
          emitter.trigger('error', error);
        }
      });
    }

    var previous = window.onYouTubeIframeAPIReady;

    // The API will call this function when page has finished downloading
    // the JavaScript for the player API.
    window.onYouTubeIframeAPIReady = function () {
      if (previous) {
        previous();
      }

      resolve(window.YT);
    };
  });

  return iframeAPIReady;
};

module.exports = exports['default'];

/***/ }),

/***/ "xuQ8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @see https://developers.google.com/youtube/iframe_api_reference#Functions
 */
exports.default = ['cueVideoById', 'loadVideoById', 'cueVideoByUrl', 'loadVideoByUrl', 'playVideo', 'pauseVideo', 'stopVideo', 'getVideoLoadedFraction', 'cuePlaylist', 'loadPlaylist', 'nextVideo', 'previousVideo', 'playVideoAt', 'setShuffle', 'setLoop', 'getPlaylist', 'getPlaylistIndex', 'setOption', 'mute', 'unMute', 'isMuted', 'setVolume', 'getVolume', 'seekTo', 'getPlayerState', 'getPlaybackRate', 'setPlaybackRate', 'getAvailablePlaybackRates', 'getPlaybackQuality', 'setPlaybackQuality', 'getAvailableQualityLevels', 'getCurrentTime', 'getDuration', 'removeEventListener', 'getVideoUrl', 'getVideoEmbedCode', 'getOptions', 'getOption', 'addEventListener', 'destroy', 'setSize', 'getIframe'];
module.exports = exports['default'];

/***/ }),

/***/ "y5CM":
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__("o/U+");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "zX5E":
/***/ (function(module, exports) {


module.exports = function load(src, opts, cb) {
  var head = document.head || document.getElementsByTagName('head')[0];
  var script = document.createElement('script');

  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  opts = opts || {};
  cb = cb || function () {};

  script.type = opts.type || 'text/javascript';
  script.charset = opts.charset || 'utf8';
  script.async = 'async' in opts ? !!opts.async : true;
  script.src = src;

  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }

  if (opts.text) {
    script.text = '' + opts.text;
  }

  var onend = 'onload' in script ? stdOnEnd : ieOnEnd;
  onend(script, cb);

  // some good legacy browsers (firefox) fail the 'in' detection above
  // so as a fallback we always set onload
  // old IE will ignore this and new IE will set onload
  if (!script.onload) {
    stdOnEnd(script, cb);
  }

  head.appendChild(script);
};

function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}

function stdOnEnd(script, cb) {
  script.onload = function () {
    this.onerror = this.onload = null;
    cb(null, script);
  };
  script.onerror = function () {
    // this.onload = null here is necessary
    // because even IE9 works not like others
    this.onerror = this.onload = null;
    cb(new Error('Failed to load ' + this.src), script);
  };
}

function ieOnEnd(script, cb) {
  script.onreadystatechange = function () {
    if (this.readyState != 'complete' && this.readyState != 'loaded') return;
    this.onreadystatechange = null;
    cb(null, script); // there is no way to catch loading errors in IE8
  };
}

/***/ }),

/***/ "zeP1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchContainer":"searchContainer","infoContainer":"infoContainer","searchDisplay":"searchDisplay"};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map