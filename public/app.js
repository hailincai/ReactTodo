webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {"use strict";
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(159);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(160);
	
	var _TodoApp = __webpack_require__(223);
	
	var _TodoApp2 = _interopRequireDefault(_TodoApp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//load foundation-sites
	//style! inject style in html
	//css! load css file
	//require("style!css!foundation-sites/dist/foundation.min.css");
	$(document).foundation();
	
	__webpack_require__(289);
	
	//using createClass method,
	//the method in the component are automatically bound to component itself
	_reactDom2.default.render(_react2.default.createElement(_TodoApp2.default, null), document.getElementById("app"));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _nodeUuid = __webpack_require__(224);
	
	var _nodeUuid2 = _interopRequireDefault(_nodeUuid);
	
	var _TodoList = __webpack_require__(284);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	var _AddTodoForm = __webpack_require__(286);
	
	var _AddTodoForm2 = _interopRequireDefault(_AddTodoForm);
	
	var _TodoSearch = __webpack_require__(287);
	
	var _TodoSearch2 = _interopRequireDefault(_TodoSearch);
	
	var _TodoAPI = __webpack_require__(288);
	
	var _TodoAPI2 = _interopRequireDefault(_TodoAPI);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var TodoApp = _react2.default.createClass({
	  displayName: "TodoApp",
	
	  getInitialState: function getInitialState() {
	    return {
	      todos: _TodoAPI2.default.getTodos(),
	
	      showCompleted: false,
	      searchText: ""
	    };
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    _TodoAPI2.default.setTodos(this.state.todos);
	  },
	
	  render: function render() {
	    var todos = this.state.todos;
	
	
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(_TodoSearch2.default, { onSearch: this.handleSearch }),
	      _react2.default.createElement(_TodoList2.default, _extends({ todos: todos }, this.state, { onToggle: this.handleToggle })),
	      _react2.default.createElement(_AddTodoForm2.default, { onAddTodo: this.handleAddTodo })
	    );
	  },
	
	  handleSearch: function handleSearch(showCompleted, searchText) {
	    this.setState({
	      showCompleted: showCompleted,
	      searchText: searchText.toLowerCase()
	    });
	  },
	
	  handleAddTodo: function handleAddTodo(newTodoText) {
	    this.setState({
	      todos: [].concat(_toConsumableArray(this.state.todos), [{
	        id: (0, _nodeUuid2.default)(),
	        text: newTodoText,
	        completed: false
	      }])
	    });
	  },
	
	  handleToggle: function handleToggle(todoId) {
	    var updatedTodos = this.state.todos.map(function (todo) {
	      if (todo.id === todoId) {
	        todo.completed = !todo.completed;
	      }
	
	      return todo;
	    });
	
	    this.setState({
	      todos: updatedTodos
	    });
	  }
	});
	
	exports.default = TodoApp;

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(Buffer) {//     uuid.js
	//
	//     Copyright (c) 2010-2012 Robert Kieffer
	//     MIT License - http://opensource.org/licenses/mit-license.php
	
	/*global window, require, define */
	(function(_window) {
	  'use strict';
	
	  // Unique ID creation requires a high quality random # generator.  We feature
	  // detect to determine the best RNG source, normalizing to a function that
	  // returns 128-bits of randomness, since that's what's usually required
	  var _rng, _mathRNG, _nodeRNG, _whatwgRNG, _previousRoot;
	
	  function setupBrowser() {
	    // Allow for MSIE11 msCrypto
	    var _crypto = _window.crypto || _window.msCrypto;
	
	    if (!_rng && _crypto && _crypto.getRandomValues) {
	      // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
	      //
	      // Moderately fast, high quality
	      try {
	        var _rnds8 = new Uint8Array(16);
	        _whatwgRNG = _rng = function whatwgRNG() {
	          _crypto.getRandomValues(_rnds8);
	          return _rnds8;
	        };
	        _rng();
	      } catch(e) {}
	    }
	
	    if (!_rng) {
	      // Math.random()-based (RNG)
	      //
	      // If all else fails, use Math.random().  It's fast, but is of unspecified
	      // quality.
	      var  _rnds = new Array(16);
	      _mathRNG = _rng = function() {
	        for (var i = 0, r; i < 16; i++) {
	          if ((i & 0x03) === 0) { r = Math.random() * 0x100000000; }
	          _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
	        }
	
	        return _rnds;
	      };
	      if ('undefined' !== typeof console && console.warn) {
	        console.warn("[SECURITY] node-uuid: crypto not usable, falling back to insecure Math.random()");
	      }
	    }
	  }
	
	  function setupNode() {
	    // Node.js crypto-based RNG - http://nodejs.org/docs/v0.6.2/api/crypto.html
	    //
	    // Moderately fast, high quality
	    if (true) {
	      try {
	        var _rb = __webpack_require__(229).randomBytes;
	        _nodeRNG = _rng = _rb && function() {return _rb(16);};
	        _rng();
	      } catch(e) {}
	    }
	  }
	
	  if (_window) {
	    setupBrowser();
	  } else {
	    setupNode();
	  }
	
	  // Buffer class to use
	  var BufferClass = ('function' === typeof Buffer) ? Buffer : Array;
	
	  // Maps for number <-> hex string conversion
	  var _byteToHex = [];
	  var _hexToByte = {};
	  for (var i = 0; i < 256; i++) {
	    _byteToHex[i] = (i + 0x100).toString(16).substr(1);
	    _hexToByte[_byteToHex[i]] = i;
	  }
	
	  // **`parse()` - Parse a UUID into it's component bytes**
	  function parse(s, buf, offset) {
	    var i = (buf && offset) || 0, ii = 0;
	
	    buf = buf || [];
	    s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
	      if (ii < 16) { // Don't overflow!
	        buf[i + ii++] = _hexToByte[oct];
	      }
	    });
	
	    // Zero out remaining bytes if string was short
	    while (ii < 16) {
	      buf[i + ii++] = 0;
	    }
	
	    return buf;
	  }
	
	  // **`unparse()` - Convert UUID byte array (ala parse()) into a string**
	  function unparse(buf, offset) {
	    var i = offset || 0, bth = _byteToHex;
	    return  bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] + '-' +
	            bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]] +
	            bth[buf[i++]] + bth[buf[i++]];
	  }
	
	  // **`v1()` - Generate time-based UUID**
	  //
	  // Inspired by https://github.com/LiosK/UUID.js
	  // and http://docs.python.org/library/uuid.html
	
	  // random #'s we need to init node and clockseq
	  var _seedBytes = _rng();
	
	  // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
	  var _nodeId = [
	    _seedBytes[0] | 0x01,
	    _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
	  ];
	
	  // Per 4.2.2, randomize (14 bit) clockseq
	  var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;
	
	  // Previous uuid creation time
	  var _lastMSecs = 0, _lastNSecs = 0;
	
	  // See https://github.com/broofa/node-uuid for API details
	  function v1(options, buf, offset) {
	    var i = buf && offset || 0;
	    var b = buf || [];
	
	    options = options || {};
	
	    var clockseq = (options.clockseq != null) ? options.clockseq : _clockseq;
	
	    // UUID timestamps are 100 nano-second units since the Gregorian epoch,
	    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
	    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
	    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
	    var msecs = (options.msecs != null) ? options.msecs : new Date().getTime();
	
	    // Per 4.2.1.2, use count of uuid's generated during the current clock
	    // cycle to simulate higher resolution clock
	    var nsecs = (options.nsecs != null) ? options.nsecs : _lastNSecs + 1;
	
	    // Time since last uuid creation (in msecs)
	    var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;
	
	    // Per 4.2.1.2, Bump clockseq on clock regression
	    if (dt < 0 && options.clockseq == null) {
	      clockseq = clockseq + 1 & 0x3fff;
	    }
	
	    // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
	    // time interval
	    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs == null) {
	      nsecs = 0;
	    }
	
	    // Per 4.2.1.2 Throw error if too many uuids are requested
	    if (nsecs >= 10000) {
	      throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
	    }
	
	    _lastMSecs = msecs;
	    _lastNSecs = nsecs;
	    _clockseq = clockseq;
	
	    // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
	    msecs += 12219292800000;
	
	    // `time_low`
	    var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
	    b[i++] = tl >>> 24 & 0xff;
	    b[i++] = tl >>> 16 & 0xff;
	    b[i++] = tl >>> 8 & 0xff;
	    b[i++] = tl & 0xff;
	
	    // `time_mid`
	    var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
	    b[i++] = tmh >>> 8 & 0xff;
	    b[i++] = tmh & 0xff;
	
	    // `time_high_and_version`
	    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
	    b[i++] = tmh >>> 16 & 0xff;
	
	    // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
	    b[i++] = clockseq >>> 8 | 0x80;
	
	    // `clock_seq_low`
	    b[i++] = clockseq & 0xff;
	
	    // `node`
	    var node = options.node || _nodeId;
	    for (var n = 0; n < 6; n++) {
	      b[i + n] = node[n];
	    }
	
	    return buf ? buf : unparse(b);
	  }
	
	  // **`v4()` - Generate random UUID**
	
	  // See https://github.com/broofa/node-uuid for API details
	  function v4(options, buf, offset) {
	    // Deprecated - 'format' argument, as supported in v1.2
	    var i = buf && offset || 0;
	
	    if (typeof(options) === 'string') {
	      buf = (options === 'binary') ? new BufferClass(16) : null;
	      options = null;
	    }
	    options = options || {};
	
	    var rnds = options.random || (options.rng || _rng)();
	
	    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
	    rnds[6] = (rnds[6] & 0x0f) | 0x40;
	    rnds[8] = (rnds[8] & 0x3f) | 0x80;
	
	    // Copy bytes to buffer, if provided
	    if (buf) {
	      for (var ii = 0; ii < 16; ii++) {
	        buf[i + ii] = rnds[ii];
	      }
	    }
	
	    return buf || unparse(rnds);
	  }
	
	  // Export public API
	  var uuid = v4;
	  uuid.v1 = v1;
	  uuid.v4 = v4;
	  uuid.parse = parse;
	  uuid.unparse = unparse;
	  uuid.BufferClass = BufferClass;
	  uuid._rng = _rng;
	  uuid._mathRNG = _mathRNG;
	  uuid._nodeRNG = _nodeRNG;
	  uuid._whatwgRNG = _whatwgRNG;
	
	  if (('undefined' !== typeof module) && module.exports) {
	    // Publish as node.js module
	    module.exports = uuid;
	  } else if (true) {
	    // Publish as AMD module
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {return uuid;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	
	
	  } else {
	    // Publish as global (in browsers)
	    _previousRoot = _window.uuid;
	
	    // **`noConflict()` - (browser only) to reset global 'uuid' var**
	    uuid.noConflict = function() {
	      _window.uuid = _previousRoot;
	      return uuid;
	    };
	
	    _window.uuid = uuid;
	  }
	})('undefined' !== typeof window ? window : null);
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(226)
	var ieee754 = __webpack_require__(227)
	var isArray = __webpack_require__(228)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()
	
	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }
	
	  return that
	}
	
	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */
	
	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}
	
	Buffer.poolSize = 8192 // not used by this implementation
	
	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}
	
	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }
	
	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }
	
	  return fromObject(that, value)
	}
	
	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}
	
	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}
	
	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}
	
	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}
	
	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }
	
	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }
	
	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)
	
	  var actual = that.write(string, encoding)
	
	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }
	
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer
	
	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }
	
	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }
	
	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }
	
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}
	
	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)
	
	    if (that.length === 0) {
	      return that
	    }
	
	    obj.copy(that, 0, 0, len)
	    return that
	  }
	
	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }
	
	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }
	
	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }
	
	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}
	
	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.
	
	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }
	
	  if (end === undefined || end > this.length) {
	    end = this.length
	  }
	
	  if (end <= 0) {
	    return ''
	  }
	
	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0
	
	  if (end <= start) {
	    return ''
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true
	
	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}
	
	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}
	
	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}
	
	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }
	
	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }
	
	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }
	
	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }
	
	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0
	
	  if (this === target) return 0
	
	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)
	
	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)
	
	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1
	
	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }
	
	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }
	
	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }
	
	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length
	
	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }
	
	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }
	
	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }
	
	  return -1
	}
	
	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}
	
	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }
	
	  return len
	}
	
	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }
	
	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }
	
	  if (end <= start) {
	    return this
	  }
	
	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0
	
	  if (!val) val = 0
	
	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 226 */
/***/ function(module, exports) {

	'use strict'
	
	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray
	
	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
	
	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}
	
	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63
	
	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }
	
	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}
	
	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}
	
	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)
	
	  arr = new Arr(len * 3 / 4 - placeHolders)
	
	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len
	
	  var L = 0
	
	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }
	
	  return arr
	}
	
	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}
	
	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}
	
	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3
	
	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }
	
	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }
	
	  parts.push(output)
	
	  return parts.join('')
	}


/***/ },
/* 227 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 228 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(230)
	
	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}
	
	exports.createHash = __webpack_require__(232)
	
	exports.createHmac = __webpack_require__(244)
	
	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}
	
	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}
	
	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}
	
	var p = __webpack_require__(245)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync
	__webpack_require__(247)(exports, module.exports);
	
	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(231)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(225).Buffer))

/***/ },
/* 231 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(233)
	
	var md5 = toConstructor(__webpack_require__(241))
	var rmd160 = toConstructor(__webpack_require__(243))
	
	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}
	
	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}
	
	var Buffer = __webpack_require__(225).Buffer
	var Hash   = __webpack_require__(234)(Buffer)
	
	exports.sha1 = __webpack_require__(235)(Buffer, Hash)
	exports.sha256 = __webpack_require__(239)(Buffer, Hash)
	exports.sha512 = __webpack_require__(240)(Buffer, Hash)


/***/ },
/* 234 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {
	
	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }
	
	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }
	
	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }
	
	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block
	
	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)
	
	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }
	
	      s += ch
	      f += ch
	
	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s
	
	    return this
	  }
	
	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8
	
	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80
	
	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)
	
	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }
	
	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)
	
	    var hash = this._update(this._block) || this._hash()
	
	    return enc ? hash.toString(enc) : hash
	  }
	
	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }
	
	  return Hash
	}


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */
	
	var inherits = __webpack_require__(236).inherits
	
	module.exports = function (Buffer, Hash) {
	
	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0
	
	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)
	
	  var POOL = []
	
	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()
	
	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)
	
	    this._h = null
	    this.init()
	  }
	
	  inherits(Sha1, Hash)
	
	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0
	
	    Hash.prototype.init.call(this)
	    return this
	  }
	
	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {
	
	    var a, b, c, d, e, _a, _b, _c, _d, _e
	
	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e
	
	    var w = this._w
	
	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)
	
	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )
	
	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }
	
	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }
	
	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }
	
	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }
	
	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }
	
	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }
	
	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }
	
	  return Sha1
	}


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(237);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(238);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 237 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 238 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */
	
	var inherits = __webpack_require__(236).inherits
	
	module.exports = function (Buffer, Hash) {
	
	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]
	
	  var W = new Array(64)
	
	  function Sha256() {
	    this.init()
	
	    this._w = W //new Array(64)
	
	    Hash.call(this, 16*4, 14*4)
	  }
	
	  inherits(Sha256, Hash)
	
	  Sha256.prototype.init = function () {
	
	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0
	
	    this._len = this._s = 0
	
	    return this
	  }
	
	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }
	
	  function R (X, n) {
	    return (X >>> n);
	  }
	
	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }
	
	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }
	
	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }
	
	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }
	
	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }
	
	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }
	
	  Sha256.prototype._update = function(M) {
	
	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2
	
	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0
	
	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]
	
	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w
	
	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }
	
	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0
	
	  };
	
	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)
	
	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)
	
	    return H
	  }
	
	  return Sha256
	
	}


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(236).inherits
	
	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]
	
	  var W = new Array(160)
	
	  function Sha512() {
	    this.init()
	    this._w = W
	
	    Hash.call(this, 128, 112)
	  }
	
	  inherits(Sha512, Hash)
	
	  Sha512.prototype.init = function () {
	
	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0
	
	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0
	
	    this._len = this._s = 0
	
	    return this
	  }
	
	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }
	
	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }
	
	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }
	
	  Sha512.prototype._update = function(M) {
	
	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl
	
	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0
	
	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0
	
	    for (var i = 0; i < 80; i++) {
	      var j = i * 2
	
	      var Wi, Wil
	
	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)
	
	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)
	
	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)
	
	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]
	
	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]
	
	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)
	
	        W[j] = Wi
	        W[j + 1] = Wil
	      }
	
	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)
	
	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)
	
	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]
	
	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)
	
	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)
	
	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)
	
	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }
	
	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0
	
	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }
	
	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)
	
	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }
	
	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)
	
	    return H
	  }
	
	  return Sha512
	
	}


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */
	
	var helpers = __webpack_require__(242);
	
	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;
	
	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;
	
	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;
	
	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
	
	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
	
	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
	
	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);
	
	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);
	
	}
	
	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}
	
	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}
	
	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}
	
	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;
	
	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }
	
	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}
	
	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}
	
	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}
	
	module.exports = { hash: hash };
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160
	
	
	
	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.
	
	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	
	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	
	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/
	
	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];
	
	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];
	
	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};
	
	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};
	
	var processBlock = function (H, M, offset) {
	
	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];
	
	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }
	
	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;
	
	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;
	
	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};
	
	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}
	
	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}
	
	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}
	
	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}
	
	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}
	
	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}
	
	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
	
	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');
	
	  var m = bytesToWords(message);
	
	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;
	
	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );
	
	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }
	
	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];
	
	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }
	
	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}
	
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(232)
	
	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)
	
	module.exports = Hmac
	
	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg
	
	  var blocksize = (alg === 'sha512') ? 128 : 64
	
	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key
	
	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }
	
	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)
	
	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }
	
	  this._hash = createHash(alg).update(ipad)
	}
	
	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}
	
	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(246)
	
	module.exports = function (crypto, exports) {
	  exports = exports || {}
	
	  var exported = pbkdf2Export(crypto)
	
	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync
	
	  return exports
	}


/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }
	
	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')
	
	    setTimeout(function() {
	      var result
	
	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }
	
	      callback(undefined, result)
	    })
	  }
	
	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')
	
	    if (iterations < 0)
	      throw new TypeError('Bad iterations')
	
	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')
	
	    if (keylen < 0)
	      throw new TypeError('Bad key length')
	
	    digest = digest || 'sha1'
	
	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)
	
	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)
	
	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)
	
	      var U = crypto.createHmac(digest, password).update(block1).digest()
	
	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen
	
	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }
	
	      U.copy(T, 0, 0, hLen)
	
	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()
	
	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }
	
	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }
	
	    return DK
	  }
	
	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (crypto, exports) {
	  exports = exports || {};
	  var ciphers = __webpack_require__(248)(crypto);
	  exports.createCipher = ciphers.createCipher;
	  exports.createCipheriv = ciphers.createCipheriv;
	  var deciphers = __webpack_require__(283)(crypto);
	  exports.createDecipher = deciphers.createDecipher;
	  exports.createDecipheriv = deciphers.createDecipheriv;
	  var modes = __webpack_require__(274);
	  function listCiphers () {
	    return Object.keys(modes);
	  }
	  exports.listCiphers = listCiphers;
	};
	


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(249);
	var Transform = __webpack_require__(250);
	var inherits = __webpack_require__(253);
	var modes = __webpack_require__(274);
	var ebtk = __webpack_require__(275);
	var StreamCipher = __webpack_require__(276);
	inherits(Cipher, Transform);
	function Cipher(mode, key, iv) {
	  if (!(this instanceof Cipher)) {
	    return new Cipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	Cipher.prototype._transform = function (data, _, next) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  while ((chunk = this._cache.get())) {
	    thing = this._mode.encrypt(this, chunk);
	    this.push(thing);
	  }
	  next();
	};
	Cipher.prototype._flush = function (next) {
	  var chunk = this._cache.flush();
	  this.push(this._mode.encrypt(this, chunk));
	  this._cipher.scrub();
	  next();
	};
	
	
	function Splitter() {
	   if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};
	
	Splitter.prototype.get = function () {
	  if (this.cache.length > 15) {
	    var out = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    return out;
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  var len = 16 - this.cache.length;
	  var padBuff = new Buffer(len);
	
	  var i = -1;
	  while (++i < len) {
	    padBuff.writeUInt8(len, i);
	  }
	  var out = Buffer.concat([this.cache, padBuff]);
	  return out;
	};
	var modelist = {
	  ECB: __webpack_require__(277),
	  CBC: __webpack_require__(278),
	  CFB: __webpack_require__(280),
	  OFB: __webpack_require__(281),
	  CTR: __webpack_require__(282)
	};
	module.exports = function (crypto) {
	  function createCipheriv(suite, password, iv) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    if (typeof iv === 'string') {
	      iv = new Buffer(iv);
	    }
	    if (typeof password === 'string') {
	      password = new Buffer(password);
	    }
	    if (password.length !== config.key/8) {
	      throw new TypeError('invalid key length ' + password.length);
	    }
	    if (iv.length !== config.iv) {
	      throw new TypeError('invalid iv length ' + iv.length);
	    }
	    if (config.type === 'stream') {
	      return new StreamCipher(modelist[config.mode], password, iv);
	    }
	    return new Cipher(modelist[config.mode], password, iv);
	  }
	  function createCipher (suite, password) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    var keys = ebtk(crypto, password, config.key, config.iv);
	    return createCipheriv(suite, keys.key, keys.iv);
	  }
	  return {
	    createCipher: createCipher,
	    createCipheriv: createCipheriv
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var uint_max = Math.pow(2, 32);
	function fixup_uint32(x) {
	    var ret, x_pos;
	    ret = x > uint_max || x < 0 ? (x_pos = Math.abs(x) % uint_max, x < 0 ? uint_max - x_pos : x_pos) : x;
	    return ret;
	}
	function scrub_vec(v) {
	  var i, _i, _ref;
	  for (i = _i = 0, _ref = v.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
	    v[i] = 0;
	  }
	  return false;
	}
	
	function Global() {
	  var i;
	  this.SBOX = [];
	  this.INV_SBOX = [];
	  this.SUB_MIX = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 4; i = ++_i) {
	      _results.push([]);
	    }
	    return _results;
	  })();
	  this.INV_SUB_MIX = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 4; i = ++_i) {
	      _results.push([]);
	    }
	    return _results;
	  })();
	  this.init();
	  this.RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];
	}
	
	Global.prototype.init = function() {
	  var d, i, sx, t, x, x2, x4, x8, xi, _i;
	  d = (function() {
	    var _i, _results;
	    _results = [];
	    for (i = _i = 0; _i < 256; i = ++_i) {
	      if (i < 128) {
	        _results.push(i << 1);
	      } else {
	        _results.push((i << 1) ^ 0x11b);
	      }
	    }
	    return _results;
	  })();
	  x = 0;
	  xi = 0;
	  for (i = _i = 0; _i < 256; i = ++_i) {
	    sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	    sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	    this.SBOX[x] = sx;
	    this.INV_SBOX[sx] = x;
	    x2 = d[x];
	    x4 = d[x2];
	    x8 = d[x4];
	    t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	    this.SUB_MIX[0][x] = (t << 24) | (t >>> 8);
	    this.SUB_MIX[1][x] = (t << 16) | (t >>> 16);
	    this.SUB_MIX[2][x] = (t << 8) | (t >>> 24);
	    this.SUB_MIX[3][x] = t;
	    t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	    this.INV_SUB_MIX[0][sx] = (t << 24) | (t >>> 8);
	    this.INV_SUB_MIX[1][sx] = (t << 16) | (t >>> 16);
	    this.INV_SUB_MIX[2][sx] = (t << 8) | (t >>> 24);
	    this.INV_SUB_MIX[3][sx] = t;
	    if (x === 0) {
	      x = xi = 1;
	    } else {
	      x = x2 ^ d[d[d[x8 ^ x2]]];
	      xi ^= d[d[xi]];
	    }
	  }
	  return true;
	};
	
	var G = new Global();
	
	
	AES.blockSize = 4 * 4;
	
	AES.prototype.blockSize = AES.blockSize;
	
	AES.keySize = 256 / 8;
	
	AES.prototype.keySize = AES.keySize;
	
	AES.ivSize = AES.blockSize;
	
	AES.prototype.ivSize = AES.ivSize;
	
	 function bufferToArray(buf) {
	  var len = buf.length/4;
	  var out = new Array(len);
	  var i = -1;
	  while (++i < len) {
	    out[i] = buf.readUInt32BE(i * 4);
	  }
	  return out;
	 }
	function AES(key) {
	  this._key = bufferToArray(key);
	  this._doReset();
	}
	
	AES.prototype._doReset = function() {
	  var invKsRow, keySize, keyWords, ksRow, ksRows, t, _i, _j;
	  keyWords = this._key;
	  keySize = keyWords.length;
	  this._nRounds = keySize + 6;
	  ksRows = (this._nRounds + 1) * 4;
	  this._keySchedule = [];
	  for (ksRow = _i = 0; 0 <= ksRows ? _i < ksRows : _i > ksRows; ksRow = 0 <= ksRows ? ++_i : --_i) {
	    this._keySchedule[ksRow] = ksRow < keySize ? keyWords[ksRow] : (t = this._keySchedule[ksRow - 1], (ksRow % keySize) === 0 ? (t = (t << 8) | (t >>> 24), t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff], t ^= G.RCON[(ksRow / keySize) | 0] << 24) : keySize > 6 && ksRow % keySize === 4 ? t = (G.SBOX[t >>> 24] << 24) | (G.SBOX[(t >>> 16) & 0xff] << 16) | (G.SBOX[(t >>> 8) & 0xff] << 8) | G.SBOX[t & 0xff] : void 0, this._keySchedule[ksRow - keySize] ^ t);
	  }
	  this._invKeySchedule = [];
	  for (invKsRow = _j = 0; 0 <= ksRows ? _j < ksRows : _j > ksRows; invKsRow = 0 <= ksRows ? ++_j : --_j) {
	    ksRow = ksRows - invKsRow;
	    t = this._keySchedule[ksRow - (invKsRow % 4 ? 0 : 4)];
	    this._invKeySchedule[invKsRow] = invKsRow < 4 || ksRow <= 4 ? t : G.INV_SUB_MIX[0][G.SBOX[t >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[(t >>> 16) & 0xff]] ^ G.INV_SUB_MIX[2][G.SBOX[(t >>> 8) & 0xff]] ^ G.INV_SUB_MIX[3][G.SBOX[t & 0xff]];
	  }
	  return true;
	};
	
	AES.prototype.encryptBlock = function(M) {
	  M = bufferToArray(new Buffer(M));
	  var out = this._doCryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[1], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[3], 12);
	  return buf;
	};
	
	AES.prototype.decryptBlock = function(M) {
	  M = bufferToArray(new Buffer(M));
	  var temp = [M[3], M[1]];
	  M[1] = temp[0];
	  M[3] = temp[1];
	  var out = this._doCryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX);
	  var buf = new Buffer(16);
	  buf.writeUInt32BE(out[0], 0);
	  buf.writeUInt32BE(out[3], 4);
	  buf.writeUInt32BE(out[2], 8);
	  buf.writeUInt32BE(out[1], 12);
	  return buf;
	};
	
	AES.prototype.scrub = function() {
	  scrub_vec(this._keySchedule);
	  scrub_vec(this._invKeySchedule);
	  scrub_vec(this._key);
	};
	
	AES.prototype._doCryptBlock = function(M, keySchedule, SUB_MIX, SBOX) {
	  var ksRow, round, s0, s1, s2, s3, t0, t1, t2, t3, _i, _ref;
	
	  s0 = M[0] ^ keySchedule[0];
	  s1 = M[1] ^ keySchedule[1];
	  s2 = M[2] ^ keySchedule[2];
	  s3 = M[3] ^ keySchedule[3];
	  ksRow = 4;
	  for (round = _i = 1, _ref = this._nRounds; 1 <= _ref ? _i < _ref : _i > _ref; round = 1 <= _ref ? ++_i : --_i) {
	    t0 = SUB_MIX[0][s0 >>> 24] ^ SUB_MIX[1][(s1 >>> 16) & 0xff] ^ SUB_MIX[2][(s2 >>> 8) & 0xff] ^ SUB_MIX[3][s3 & 0xff] ^ keySchedule[ksRow++];
	    t1 = SUB_MIX[0][s1 >>> 24] ^ SUB_MIX[1][(s2 >>> 16) & 0xff] ^ SUB_MIX[2][(s3 >>> 8) & 0xff] ^ SUB_MIX[3][s0 & 0xff] ^ keySchedule[ksRow++];
	    t2 = SUB_MIX[0][s2 >>> 24] ^ SUB_MIX[1][(s3 >>> 16) & 0xff] ^ SUB_MIX[2][(s0 >>> 8) & 0xff] ^ SUB_MIX[3][s1 & 0xff] ^ keySchedule[ksRow++];
	    t3 = SUB_MIX[0][s3 >>> 24] ^ SUB_MIX[1][(s0 >>> 16) & 0xff] ^ SUB_MIX[2][(s1 >>> 8) & 0xff] ^ SUB_MIX[3][s2 & 0xff] ^ keySchedule[ksRow++];
	    s0 = t0;
	    s1 = t1;
	    s2 = t2;
	    s3 = t3;
	  }
	  t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	  t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	  t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	  t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];
	  return [
	    fixup_uint32(t0),
	    fixup_uint32(t1),
	    fixup_uint32(t2),
	    fixup_uint32(t3)
	  ];
	
	};
	
	
	
	
	  exports.AES = AES;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var Transform = __webpack_require__(251).Transform;
	var inherits = __webpack_require__(253);
	
	module.exports = CipherBase;
	inherits(CipherBase, Transform);
	function CipherBase() {
	  Transform.call(this);
	}
	CipherBase.prototype.update = function (data, inputEnd, outputEnc) {
	  this.write(data, inputEnd);
	  var outData = new Buffer('');
	  var chunk;
	  while ((chunk = this.read())) {
	    outData = Buffer.concat([outData, chunk]);
	  }
	  if (outputEnc) {
	    outData = outData.toString(outputEnc);
	  }
	  return outData;
	};
	CipherBase.prototype.final = function (outputEnc) {
	  this.end();
	  var outData = new Buffer('');
	  var chunk;
	  while ((chunk = this.read())) {
	    outData = Buffer.concat([outData, chunk]);
	  }
	  if (outputEnc) {
	    outData = outData.toString(outputEnc);
	  }
	  return outData;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	module.exports = Stream;
	
	var EE = __webpack_require__(252).EventEmitter;
	var inherits = __webpack_require__(253);
	
	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(254);
	Stream.Writable = __webpack_require__(270);
	Stream.Duplex = __webpack_require__(271);
	Stream.Transform = __webpack_require__(272);
	Stream.PassThrough = __webpack_require__(273);
	
	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;
	
	
	
	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.
	
	function Stream() {
	  EE.call(this);
	}
	
	Stream.prototype.pipe = function(dest, options) {
	  var source = this;
	
	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }
	
	  source.on('data', ondata);
	
	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }
	
	  dest.on('drain', ondrain);
	
	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }
	
	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;
	
	    dest.end();
	  }
	
	
	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;
	
	    if (typeof dest.destroy === 'function') dest.destroy();
	  }
	
	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }
	
	  source.on('error', onerror);
	  dest.on('error', onerror);
	
	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);
	
	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);
	
	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);
	
	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);
	
	    dest.removeListener('close', cleanup);
	  }
	
	  source.on('end', cleanup);
	  source.on('close', cleanup);
	
	  dest.on('close', cleanup);
	
	  dest.emit('pipe', source);
	
	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },
/* 252 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;
	
	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;
	
	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;
	
	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;
	
	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};
	
	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;
	
	  if (!this._events)
	    this._events = {};
	
	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      } else {
	        // At least give some kind of context to the user
	        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
	        err.context = er;
	        throw err;
	      }
	    }
	  }
	
	  handler = this._events[type];
	
	  if (isUndefined(handler))
	    return false;
	
	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }
	
	  return true;
	};
	
	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events)
	    this._events = {};
	
	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);
	
	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];
	
	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }
	
	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.on = EventEmitter.prototype.addListener;
	
	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  var fired = false;
	
	  function g() {
	    this.removeListener(type, g);
	
	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }
	
	  g.listener = listener;
	  this.on(type, g);
	
	  return this;
	};
	
	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;
	
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');
	
	  if (!this._events || !this._events[type])
	    return this;
	
	  list = this._events[type];
	  length = list.length;
	  position = -1;
	
	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }
	
	    if (position < 0)
	      return this;
	
	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }
	
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }
	
	  return this;
	};
	
	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;
	
	  if (!this._events)
	    return this;
	
	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }
	
	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }
	
	  listeners = this._events[type];
	
	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];
	
	  return this;
	};
	
	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};
	
	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];
	
	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};
	
	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	
	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },
/* 253 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var Stream = (function (){
	  try {
	    return __webpack_require__(251); // hack to fix a circular dependency issue when used with browserify
	  } catch(_){}
	}());
	exports = module.exports = __webpack_require__(255);
	exports.Stream = Stream || exports;
	exports.Readable = exports;
	exports.Writable = __webpack_require__(263);
	exports.Duplex = __webpack_require__(262);
	exports.Transform = __webpack_require__(268);
	exports.PassThrough = __webpack_require__(269);
	
	if (!process.browser && process.env.READABLE_STREAM === 'disable' && Stream) {
	  module.exports = Stream;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	module.exports = Readable;
	
	/*<replacement>*/
	var processNextTick = __webpack_require__(256);
	/*</replacement>*/
	
	/*<replacement>*/
	var isArray = __webpack_require__(257);
	/*</replacement>*/
	
	/*<replacement>*/
	var Duplex;
	/*</replacement>*/
	
	Readable.ReadableState = ReadableState;
	
	/*<replacement>*/
	var EE = __webpack_require__(252).EventEmitter;
	
	var EElistenerCount = function (emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(251);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(252).EventEmitter;
	  }
	})();
	/*</replacement>*/
	
	var Buffer = __webpack_require__(225).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(258);
	/*</replacement>*/
	
	/*<replacement>*/
	var util = __webpack_require__(259);
	util.inherits = __webpack_require__(253);
	/*</replacement>*/
	
	/*<replacement>*/
	var debugUtil = __webpack_require__(260);
	var debug = void 0;
	if (debugUtil && debugUtil.debuglog) {
	  debug = debugUtil.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/
	
	var BufferList = __webpack_require__(261);
	var StringDecoder;
	
	util.inherits(Readable, Stream);
	
	function prependListener(emitter, event, fn) {
	  // Sadly this is not cacheable as some libraries bundle their own
	  // event emitter implementation with them.
	  if (typeof emitter.prependListener === 'function') {
	    return emitter.prependListener(event, fn);
	  } else {
	    // This is a hack to make sure that our error handler is attached before any
	    // userland ones.  NEVER DO THIS. This is here only because this code needs
	    // to continue to work with older versions of Node.js that do not include
	    // the prependListener() method. The goal is to eventually remove this hack.
	    if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
	  }
	}
	
	function ReadableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(262);
	
	  options = options || {};
	
	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.readableObjectMode;
	
	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;
	
	  // A linked list is used to store data chunks instead of an array because the
	  // linked list can remove elements from the beginning faster than
	  // array.shift()
	  this.buffer = new BufferList();
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;
	
	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;
	
	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;
	  this.resumeScheduled = false;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;
	
	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;
	
	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;
	
	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder) StringDecoder = __webpack_require__(267).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}
	
	function Readable(options) {
	  Duplex = Duplex || __webpack_require__(262);
	
	  if (!(this instanceof Readable)) return new Readable(options);
	
	  this._readableState = new ReadableState(options, this);
	
	  // legacy
	  this.readable = true;
	
	  if (options && typeof options.read === 'function') this._read = options.read;
	
	  Stream.call(this);
	}
	
	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function (chunk, encoding) {
	  var state = this._readableState;
	
	  if (!state.objectMode && typeof chunk === 'string') {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = bufferShim.from(chunk, encoding);
	      encoding = '';
	    }
	  }
	
	  return readableAddChunk(this, state, chunk, encoding, false);
	};
	
	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function (chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};
	
	Readable.prototype.isPaused = function () {
	  return this._readableState.flowing === false;
	};
	
	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (chunk === null) {
	    state.reading = false;
	    onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var _e = new Error('stream.unshift() after end event');
	      stream.emit('error', _e);
	    } else {
	      var skipAdd;
	      if (state.decoder && !addToFront && !encoding) {
	        chunk = state.decoder.write(chunk);
	        skipAdd = !state.objectMode && chunk.length === 0;
	      }
	
	      if (!addToFront) state.reading = false;
	
	      // Don't add to the buffer if we've decoded to an empty string chunk and
	      // we're not in object mode
	      if (!skipAdd) {
	        // if we want the data now, just emit it.
	        if (state.flowing && state.length === 0 && !state.sync) {
	          stream.emit('data', chunk);
	          stream.read(0);
	        } else {
	          // update the buffer info.
	          state.length += state.objectMode ? 1 : chunk.length;
	          if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
	
	          if (state.needReadable) emitReadable(stream);
	        }
	      }
	
	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }
	
	  return needMoreData(state);
	}
	
	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
	}
	
	// backwards compatibility.
	Readable.prototype.setEncoding = function (enc) {
	  if (!StringDecoder) StringDecoder = __webpack_require__(267).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};
	
	// Don't raise the hwm > 8MB
	var MAX_HWM = 0x800000;
	function computeNewHighWaterMark(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2 to prevent increasing hwm excessively in
	    // tiny amounts
	    n--;
	    n |= n >>> 1;
	    n |= n >>> 2;
	    n |= n >>> 4;
	    n |= n >>> 8;
	    n |= n >>> 16;
	    n++;
	  }
	  return n;
	}
	
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function howMuchToRead(n, state) {
	  if (n <= 0 || state.length === 0 && state.ended) return 0;
	  if (state.objectMode) return 1;
	  if (n !== n) {
	    // Only flow one buffer at a time
	    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
	  }
	  // If we're asking for more than the current hwm, then raise the hwm.
	  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
	  if (n <= state.length) return n;
	  // Don't have enough
	  if (!state.ended) {
	    state.needReadable = true;
	    return 0;
	  }
	  return state.length;
	}
	
	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function (n) {
	  debug('read', n);
	  n = parseInt(n, 10);
	  var state = this._readableState;
	  var nOrig = n;
	
	  if (n !== 0) state.emittedReadable = false;
	
	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
	    return null;
	  }
	
	  n = howMuchToRead(n, state);
	
	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0) endReadable(this);
	    return null;
	  }
	
	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.
	
	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);
	
	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }
	
	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  } else if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0) state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	    // If _read pushed data synchronously, then `reading` will be false,
	    // and we need to re-evaluate how much data we can return to the user.
	    if (!state.reading) n = howMuchToRead(nOrig, state);
	  }
	
	  var ret;
	  if (n > 0) ret = fromList(n, state);else ret = null;
	
	  if (ret === null) {
	    state.needReadable = true;
	    n = 0;
	  } else {
	    state.length -= n;
	  }
	
	  if (state.length === 0) {
	    // If we have nothing in the buffer, then we want to know
	    // as soon as we *do* get something into the buffer.
	    if (!state.ended) state.needReadable = true;
	
	    // If we tried to read() past the EOF, then emit end on the next tick.
	    if (nOrig !== n && state.ended) endReadable(this);
	  }
	
	  if (ret !== null) this.emit('data', ret);
	
	  return ret;
	};
	
	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== null && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}
	
	function onEofChunk(stream, state) {
	  if (state.ended) return;
	  if (state.decoder) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;
	
	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}
	
	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync) processNextTick(emitReadable_, stream);else emitReadable_(stream);
	  }
	}
	
	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}
	
	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    processNextTick(maybeReadMore_, stream, state);
	  }
	}
	
	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;else len = state.length;
	  }
	  state.readingMore = false;
	}
	
	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function (n) {
	  this.emit('error', new Error('_read() is not implemented'));
	};
	
	Readable.prototype.pipe = function (dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;
	
	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
	
	  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
	
	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted) processNextTick(endFn);else src.once('end', endFn);
	
	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }
	
	  function onend() {
	    debug('onend');
	    dest.end();
	  }
	
	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);
	
	  var cleanedUp = false;
	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);
	
	    cleanedUp = true;
	
	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
	  }
	
	  // If the user pushes more data while we're writing to dest then we'll end up
	  // in ondata again. However, we only want to increase awaitDrain once because
	  // dest will only emit one 'drain' event for the multiple writes.
	  // => Introduce a guard on increasing awaitDrain.
	  var increasedAwaitDrain = false;
	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    increasedAwaitDrain = false;
	    var ret = dest.write(chunk);
	    if (false === ret && !increasedAwaitDrain) {
	      // If the user unpiped during `dest.write()`, it is possible
	      // to get stuck in a permanently paused state if that write
	      // also returned false.
	      // => Check whether `dest` is still a piping destination.
	      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
	        debug('false write response, pause', src._readableState.awaitDrain);
	        src._readableState.awaitDrain++;
	        increasedAwaitDrain = true;
	      }
	      src.pause();
	    }
	  }
	
	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
	  }
	
	  // Make sure our error handler is attached before userland ones.
	  prependListener(dest, 'error', onerror);
	
	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);
	
	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }
	
	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);
	
	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }
	
	  return dest;
	};
	
	function pipeOnDrain(src) {
	  return function () {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain) state.awaitDrain--;
	    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}
	
	Readable.prototype.unpipe = function (dest) {
	  var state = this._readableState;
	
	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0) return this;
	
	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes) return this;
	
	    if (!dest) dest = state.pipes;
	
	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest) dest.emit('unpipe', this);
	    return this;
	  }
	
	  // slow case. multiple pipe destinations.
	
	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	
	    for (var i = 0; i < len; i++) {
	      dests[i].emit('unpipe', this);
	    }return this;
	  }
	
	  // try to find the right one.
	  var index = indexOf(state.pipes, dest);
	  if (index === -1) return this;
	
	  state.pipes.splice(index, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1) state.pipes = state.pipes[0];
	
	  dest.emit('unpipe', this);
	
	  return this;
	};
	
	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function (ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);
	
	  if (ev === 'data') {
	    // Start flowing on next tick if stream isn't explicitly paused
	    if (this._readableState.flowing !== false) this.resume();
	  } else if (ev === 'readable') {
	    var state = this._readableState;
	    if (!state.endEmitted && !state.readableListening) {
	      state.readableListening = state.needReadable = true;
	      state.emittedReadable = false;
	      if (!state.reading) {
	        processNextTick(nReadingNextTick, this);
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }
	
	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;
	
	function nReadingNextTick(self) {
	  debug('readable nexttick read 0');
	  self.read(0);
	}
	
	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function () {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    resume(this, state);
	  }
	  return this;
	};
	
	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    processNextTick(resume_, stream, state);
	  }
	}
	
	function resume_(stream, state) {
	  if (!state.reading) {
	    debug('resume read 0');
	    stream.read(0);
	  }
	
	  state.resumeScheduled = false;
	  state.awaitDrain = 0;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading) stream.read(0);
	}
	
	Readable.prototype.pause = function () {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};
	
	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  while (state.flowing && stream.read() !== null) {}
	}
	
	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function (stream) {
	  var state = this._readableState;
	  var paused = false;
	
	  var self = this;
	  stream.on('end', function () {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length) self.push(chunk);
	    }
	
	    self.push(null);
	  });
	
	  stream.on('data', function (chunk) {
	    debug('wrapped data');
	    if (state.decoder) chunk = state.decoder.write(chunk);
	
	    // don't skip over falsy values in objectMode
	    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;
	
	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });
	
	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (this[i] === undefined && typeof stream[i] === 'function') {
	      this[i] = function (method) {
	        return function () {
	          return stream[method].apply(stream, arguments);
	        };
	      }(i);
	    }
	  }
	
	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function (ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });
	
	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function (n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };
	
	  return self;
	};
	
	// exposed for testing purposes only.
	Readable._fromList = fromList;
	
	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromList(n, state) {
	  // nothing buffered
	  if (state.length === 0) return null;
	
	  var ret;
	  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
	    // read it all, truncate the list
	    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
	    state.buffer.clear();
	  } else {
	    // read part of list
	    ret = fromListPartial(n, state.buffer, state.decoder);
	  }
	
	  return ret;
	}
	
	// Extracts only enough buffered data to satisfy the amount requested.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function fromListPartial(n, list, hasStrings) {
	  var ret;
	  if (n < list.head.data.length) {
	    // slice is the same for buffers and strings
	    ret = list.head.data.slice(0, n);
	    list.head.data = list.head.data.slice(n);
	  } else if (n === list.head.data.length) {
	    // first chunk is a perfect match
	    ret = list.shift();
	  } else {
	    // result spans more than one buffer
	    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
	  }
	  return ret;
	}
	
	// Copies a specified amount of characters from the list of buffered data
	// chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBufferString(n, list) {
	  var p = list.head;
	  var c = 1;
	  var ret = p.data;
	  n -= ret.length;
	  while (p = p.next) {
	    var str = p.data;
	    var nb = n > str.length ? str.length : n;
	    if (nb === str.length) ret += str;else ret += str.slice(0, n);
	    n -= nb;
	    if (n === 0) {
	      if (nb === str.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = str.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	// Copies a specified amount of bytes from the list of buffered data chunks.
	// This function is designed to be inlinable, so please take care when making
	// changes to the function body.
	function copyFromBuffer(n, list) {
	  var ret = bufferShim.allocUnsafe(n);
	  var p = list.head;
	  var c = 1;
	  p.data.copy(ret);
	  n -= p.data.length;
	  while (p = p.next) {
	    var buf = p.data;
	    var nb = n > buf.length ? buf.length : n;
	    buf.copy(ret, ret.length - n, 0, nb);
	    n -= nb;
	    if (n === 0) {
	      if (nb === buf.length) {
	        ++c;
	        if (p.next) list.head = p.next;else list.head = list.tail = null;
	      } else {
	        list.head = p;
	        p.data = buf.slice(nb);
	      }
	      break;
	    }
	    ++c;
	  }
	  list.length -= c;
	  return ret;
	}
	
	function endReadable(stream) {
	  var state = stream._readableState;
	
	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');
	
	  if (!state.endEmitted) {
	    state.ended = true;
	    processNextTick(endReadableNT, state, stream);
	  }
	}
	
	function endReadableNT(state, stream) {
	  // Check that we didn't get one last unshift.
	  if (!state.endEmitted && state.length === 0) {
	    state.endEmitted = true;
	    stream.readable = false;
	    stream.emit('end');
	  }
	}
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}
	
	function indexOf(xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	if (!process.version ||
	    process.version.indexOf('v0.') === 0 ||
	    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
	  module.exports = nextTick;
	} else {
	  module.exports = process.nextTick;
	}
	
	function nextTick(fn, arg1, arg2, arg3) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('"callback" argument must be a function');
	  }
	  var len = arguments.length;
	  var args, i;
	  switch (len) {
	  case 0:
	  case 1:
	    return process.nextTick(fn);
	  case 2:
	    return process.nextTick(function afterTickOne() {
	      fn.call(null, arg1);
	    });
	  case 3:
	    return process.nextTick(function afterTickTwo() {
	      fn.call(null, arg1, arg2);
	    });
	  case 4:
	    return process.nextTick(function afterTickThree() {
	      fn.call(null, arg1, arg2, arg3);
	    });
	  default:
	    args = new Array(len - 1);
	    i = 0;
	    while (i < args.length) {
	      args[i++] = arguments[i];
	    }
	    return process.nextTick(function afterTick() {
	      fn.apply(null, args);
	    });
	  }
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 257 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var buffer = __webpack_require__(225);
	var Buffer = buffer.Buffer;
	var SlowBuffer = buffer.SlowBuffer;
	var MAX_LEN = buffer.kMaxLength || 2147483647;
	exports.alloc = function alloc(size, fill, encoding) {
	  if (typeof Buffer.alloc === 'function') {
	    return Buffer.alloc(size, fill, encoding);
	  }
	  if (typeof encoding === 'number') {
	    throw new TypeError('encoding must not be number');
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  var enc = encoding;
	  var _fill = fill;
	  if (_fill === undefined) {
	    enc = undefined;
	    _fill = 0;
	  }
	  var buf = new Buffer(size);
	  if (typeof _fill === 'string') {
	    var fillBuf = new Buffer(_fill, enc);
	    var flen = fillBuf.length;
	    var i = -1;
	    while (++i < size) {
	      buf[i] = fillBuf[i % flen];
	    }
	  } else {
	    buf.fill(_fill);
	  }
	  return buf;
	}
	exports.allocUnsafe = function allocUnsafe(size) {
	  if (typeof Buffer.allocUnsafe === 'function') {
	    return Buffer.allocUnsafe(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size > MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new Buffer(size);
	}
	exports.from = function from(value, encodingOrOffset, length) {
	  if (typeof Buffer.from === 'function' && (!global.Uint8Array || Uint8Array.from !== Buffer.from)) {
	    return Buffer.from(value, encodingOrOffset, length);
	  }
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number');
	  }
	  if (typeof value === 'string') {
	    return new Buffer(value, encodingOrOffset);
	  }
	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    var offset = encodingOrOffset;
	    if (arguments.length === 1) {
	      return new Buffer(value);
	    }
	    if (typeof offset === 'undefined') {
	      offset = 0;
	    }
	    var len = length;
	    if (typeof len === 'undefined') {
	      len = value.byteLength - offset;
	    }
	    if (offset >= value.byteLength) {
	      throw new RangeError('\'offset\' is out of bounds');
	    }
	    if (len > value.byteLength - offset) {
	      throw new RangeError('\'length\' is out of bounds');
	    }
	    return new Buffer(value.slice(offset, offset + len));
	  }
	  if (Buffer.isBuffer(value)) {
	    var out = new Buffer(value.length);
	    value.copy(out, 0, 0, value.length);
	    return out;
	  }
	  if (value) {
	    if (Array.isArray(value) || (typeof ArrayBuffer !== 'undefined' && value.buffer instanceof ArrayBuffer) || 'length' in value) {
	      return new Buffer(value);
	    }
	    if (value.type === 'Buffer' && Array.isArray(value.data)) {
	      return new Buffer(value.data);
	    }
	  }
	
	  throw new TypeError('First argument must be a string, Buffer, ' + 'ArrayBuffer, Array, or array-like object.');
	}
	exports.allocUnsafeSlow = function allocUnsafeSlow(size) {
	  if (typeof Buffer.allocUnsafeSlow === 'function') {
	    return Buffer.allocUnsafeSlow(size);
	  }
	  if (typeof size !== 'number') {
	    throw new TypeError('size must be a number');
	  }
	  if (size >= MAX_LEN) {
	    throw new RangeError('size is too large');
	  }
	  return new SlowBuffer(size);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	
	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = Buffer.isBuffer;
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 260 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Buffer = __webpack_require__(225).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(258);
	/*</replacement>*/
	
	module.exports = BufferList;
	
	function BufferList() {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
	}
	
	BufferList.prototype.push = function (v) {
	  var entry = { data: v, next: null };
	  if (this.length > 0) this.tail.next = entry;else this.head = entry;
	  this.tail = entry;
	  ++this.length;
	};
	
	BufferList.prototype.unshift = function (v) {
	  var entry = { data: v, next: this.head };
	  if (this.length === 0) this.tail = entry;
	  this.head = entry;
	  ++this.length;
	};
	
	BufferList.prototype.shift = function () {
	  if (this.length === 0) return;
	  var ret = this.head.data;
	  if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
	  --this.length;
	  return ret;
	};
	
	BufferList.prototype.clear = function () {
	  this.head = this.tail = null;
	  this.length = 0;
	};
	
	BufferList.prototype.join = function (s) {
	  if (this.length === 0) return '';
	  var p = this.head;
	  var ret = '' + p.data;
	  while (p = p.next) {
	    ret += s + p.data;
	  }return ret;
	};
	
	BufferList.prototype.concat = function (n) {
	  if (this.length === 0) return bufferShim.alloc(0);
	  if (this.length === 1) return this.head.data;
	  var ret = bufferShim.allocUnsafe(n >>> 0);
	  var p = this.head;
	  var i = 0;
	  while (p) {
	    p.data.copy(ret, i);
	    i += p.data.length;
	    p = p.next;
	  }
	  return ret;
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.
	
	'use strict';
	
	/*<replacement>*/
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	};
	/*</replacement>*/
	
	module.exports = Duplex;
	
	/*<replacement>*/
	var processNextTick = __webpack_require__(256);
	/*</replacement>*/
	
	/*<replacement>*/
	var util = __webpack_require__(259);
	util.inherits = __webpack_require__(253);
	/*</replacement>*/
	
	var Readable = __webpack_require__(255);
	var Writable = __webpack_require__(263);
	
	util.inherits(Duplex, Readable);
	
	var keys = objectKeys(Writable.prototype);
	for (var v = 0; v < keys.length; v++) {
	  var method = keys[v];
	  if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
	}
	
	function Duplex(options) {
	  if (!(this instanceof Duplex)) return new Duplex(options);
	
	  Readable.call(this, options);
	  Writable.call(this, options);
	
	  if (options && options.readable === false) this.readable = false;
	
	  if (options && options.writable === false) this.writable = false;
	
	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;
	
	  this.once('end', onend);
	}
	
	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended) return;
	
	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  processNextTick(onEndNT, this);
	}
	
	function onEndNT(self) {
	  self.end();
	}
	
	function forEach(xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// A bit simpler than readable streams.
	// Implement an async ._write(chunk, encoding, cb), and it'll handle all
	// the drain event emission and buffering.
	
	'use strict';
	
	module.exports = Writable;
	
	/*<replacement>*/
	var processNextTick = __webpack_require__(256);
	/*</replacement>*/
	
	/*<replacement>*/
	var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : processNextTick;
	/*</replacement>*/
	
	/*<replacement>*/
	var Duplex;
	/*</replacement>*/
	
	Writable.WritableState = WritableState;
	
	/*<replacement>*/
	var util = __webpack_require__(259);
	util.inherits = __webpack_require__(253);
	/*</replacement>*/
	
	/*<replacement>*/
	var internalUtil = {
	  deprecate: __webpack_require__(266)
	};
	/*</replacement>*/
	
	/*<replacement>*/
	var Stream;
	(function () {
	  try {
	    Stream = __webpack_require__(251);
	  } catch (_) {} finally {
	    if (!Stream) Stream = __webpack_require__(252).EventEmitter;
	  }
	})();
	/*</replacement>*/
	
	var Buffer = __webpack_require__(225).Buffer;
	/*<replacement>*/
	var bufferShim = __webpack_require__(258);
	/*</replacement>*/
	
	util.inherits(Writable, Stream);
	
	function nop() {}
	
	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	  this.next = null;
	}
	
	function WritableState(options, stream) {
	  Duplex = Duplex || __webpack_require__(262);
	
	  options = options || {};
	
	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;
	
	  if (stream instanceof Duplex) this.objectMode = this.objectMode || !!options.writableObjectMode;
	
	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = this.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = hwm || hwm === 0 ? hwm : defaultHwm;
	
	  // cast to ints.
	  this.highWaterMark = ~ ~this.highWaterMark;
	
	  // drain event flag.
	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;
	
	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;
	
	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';
	
	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;
	
	  // a flag to see when we're in the middle of a write.
	  this.writing = false;
	
	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;
	
	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;
	
	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;
	
	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function (er) {
	    onwrite(stream, er);
	  };
	
	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;
	
	  // the amount that is being written when _write is called.
	  this.writelen = 0;
	
	  this.bufferedRequest = null;
	  this.lastBufferedRequest = null;
	
	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;
	
	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;
	
	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	
	  // count buffered requests
	  this.bufferedRequestCount = 0;
	
	  // allocate the first CorkedRequest, there is always
	  // one allocated and free to use, and we maintain at most two
	  this.corkedRequestsFree = new CorkedRequest(this);
	}
	
	WritableState.prototype.getBuffer = function getBuffer() {
	  var current = this.bufferedRequest;
	  var out = [];
	  while (current) {
	    out.push(current);
	    current = current.next;
	  }
	  return out;
	};
	
	(function () {
	  try {
	    Object.defineProperty(WritableState.prototype, 'buffer', {
	      get: internalUtil.deprecate(function () {
	        return this.getBuffer();
	      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.')
	    });
	  } catch (_) {}
	})();
	
	// Test _writableState for inheritance to account for Duplex streams,
	// whose prototype chain only points to Readable.
	var realHasInstance;
	if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
	  realHasInstance = Function.prototype[Symbol.hasInstance];
	  Object.defineProperty(Writable, Symbol.hasInstance, {
	    value: function (object) {
	      if (realHasInstance.call(this, object)) return true;
	
	      return object && object._writableState instanceof WritableState;
	    }
	  });
	} else {
	  realHasInstance = function (object) {
	    return object instanceof this;
	  };
	}
	
	function Writable(options) {
	  Duplex = Duplex || __webpack_require__(262);
	
	  // Writable ctor is applied to Duplexes, too.
	  // `realHasInstance` is necessary because using plain `instanceof`
	  // would return false, as no `_writableState` property is attached.
	
	  // Trying to use the custom `instanceof` for Writable here will also break the
	  // Node.js LazyTransform implementation, which has a non-trivial getter for
	  // `_writableState` that would lead to infinite recursion.
	  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
	    return new Writable(options);
	  }
	
	  this._writableState = new WritableState(options, this);
	
	  // legacy.
	  this.writable = true;
	
	  if (options) {
	    if (typeof options.write === 'function') this._write = options.write;
	
	    if (typeof options.writev === 'function') this._writev = options.writev;
	  }
	
	  Stream.call(this);
	}
	
	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function () {
	  this.emit('error', new Error('Cannot pipe, not readable'));
	};
	
	function writeAfterEnd(stream, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  processNextTick(cb, er);
	}
	
	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  var er = false;
	  // Always throw error if a null is written
	  // if we are not in object mode then throw
	  // if it is not a buffer, string, or undefined.
	  if (chunk === null) {
	    er = new TypeError('May not write null values to stream');
	  } else if (!Buffer.isBuffer(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  if (er) {
	    stream.emit('error', er);
	    processNextTick(cb, er);
	    valid = false;
	  }
	  return valid;
	}
	
	Writable.prototype.write = function (chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;
	
	  if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
	
	  if (typeof cb !== 'function') cb = nop;
	
	  if (state.ended) writeAfterEnd(this, cb);else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }
	
	  return ret;
	};
	
	Writable.prototype.cork = function () {
	  var state = this._writableState;
	
	  state.corked++;
	};
	
	Writable.prototype.uncork = function () {
	  var state = this._writableState;
	
	  if (state.corked) {
	    state.corked--;
	
	    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
	  }
	};
	
	Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
	  // node::ParseEncoding() requires lower case.
	  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
	  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
	  this._writableState.defaultEncoding = encoding;
	  return this;
	};
	
	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
	    chunk = bufferShim.from(chunk, encoding);
	  }
	  return chunk;
	}
	
	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	
	  if (Buffer.isBuffer(chunk)) encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;
	
	  state.length += len;
	
	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret) state.needDrain = true;
	
	  if (state.writing || state.corked) {
	    var last = state.lastBufferedRequest;
	    state.lastBufferedRequest = new WriteReq(chunk, encoding, cb);
	    if (last) {
	      last.next = state.lastBufferedRequest;
	    } else {
	      state.bufferedRequest = state.lastBufferedRequest;
	    }
	    state.bufferedRequestCount += 1;
	  } else {
	    doWrite(stream, state, false, len, chunk, encoding, cb);
	  }
	
	  return ret;
	}
	
	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}
	
	function onwriteError(stream, state, sync, er, cb) {
	  --state.pendingcb;
	  if (sync) processNextTick(cb, er);else cb(er);
	
	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}
	
	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}
	
	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;
	
	  onwriteStateUpdate(state);
	
	  if (er) onwriteError(stream, state, sync, er, cb);else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(state);
	
	    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
	      clearBuffer(stream, state);
	    }
	
	    if (sync) {
	      /*<replacement>*/
	      asyncWrite(afterWrite, stream, state, finished, cb);
	      /*</replacement>*/
	    } else {
	        afterWrite(stream, state, finished, cb);
	      }
	  }
	}
	
	function afterWrite(stream, state, finished, cb) {
	  if (!finished) onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}
	
	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}
	
	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;
	  var entry = state.bufferedRequest;
	
	  if (stream._writev && entry && entry.next) {
	    // Fast case, write everything using _writev()
	    var l = state.bufferedRequestCount;
	    var buffer = new Array(l);
	    var holder = state.corkedRequestsFree;
	    holder.entry = entry;
	
	    var count = 0;
	    while (entry) {
	      buffer[count] = entry;
	      entry = entry.next;
	      count += 1;
	    }
	
	    doWrite(stream, state, true, state.length, buffer, '', holder.finish);
	
	    // doWrite is almost always async, defer these to save a bit of time
	    // as the hot path ends with doWrite
	    state.pendingcb++;
	    state.lastBufferedRequest = null;
	    if (holder.next) {
	      state.corkedRequestsFree = holder.next;
	      holder.next = null;
	    } else {
	      state.corkedRequestsFree = new CorkedRequest(state);
	    }
	  } else {
	    // Slow case, write chunks one-by-one
	    while (entry) {
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;
	
	      doWrite(stream, state, false, len, chunk, encoding, cb);
	      entry = entry.next;
	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        break;
	      }
	    }
	
	    if (entry === null) state.lastBufferedRequest = null;
	  }
	
	  state.bufferedRequestCount = 0;
	  state.bufferedRequest = entry;
	  state.bufferProcessing = false;
	}
	
	Writable.prototype._write = function (chunk, encoding, cb) {
	  cb(new Error('_write() is not implemented'));
	};
	
	Writable.prototype._writev = null;
	
	Writable.prototype.end = function (chunk, encoding, cb) {
	  var state = this._writableState;
	
	  if (typeof chunk === 'function') {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (typeof encoding === 'function') {
	    cb = encoding;
	    encoding = null;
	  }
	
	  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);
	
	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }
	
	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished) endWritable(this, state, cb);
	};
	
	function needFinish(state) {
	  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
	}
	
	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}
	
	function finishMaybe(stream, state) {
	  var need = needFinish(state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else {
	      prefinish(stream, state);
	    }
	  }
	  return need;
	}
	
	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished) processNextTick(cb);else stream.once('finish', cb);
	  }
	  state.ended = true;
	  stream.writable = false;
	}
	
	// It seems a linked list but it is not
	// there will be only 2 of these for each stream
	function CorkedRequest(state) {
	  var _this = this;
	
	  this.next = null;
	  this.entry = null;
	
	  this.finish = function (err) {
	    var entry = _this.entry;
	    _this.entry = null;
	    while (entry) {
	      var cb = entry.callback;
	      state.pendingcb--;
	      cb(err);
	      entry = entry.next;
	    }
	    if (state.corkedRequestsFree) {
	      state.corkedRequestsFree.next = _this;
	    } else {
	      state.corkedRequestsFree = _this;
	    }
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(264).setImmediate))

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(265);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	      // Callback can either be a function or a string
	      if (typeof callback !== "function") {
	        callback = new Function("" + callback);
	      }
	      // Copy function arguments
	      var args = new Array(arguments.length - 1);
	      for (var i = 0; i < args.length; i++) {
	          args[i] = arguments[i + 1];
	      }
	      // Store and register the task
	      var task = { callback: callback, args: args };
	      tasksByHandle[nextHandle] = task;
	      registerImmediate(nextHandle);
	      return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	        case 0:
	            callback();
	            break;
	        case 1:
	            callback(args[0]);
	            break;
	        case 2:
	            callback(args[0], args[1]);
	            break;
	        case 3:
	            callback(args[0], args[1], args[2]);
	            break;
	        default:
	            callback.apply(undefined, args);
	            break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function(handle) {
	            process.nextTick(function () { runIfPresent(handle); });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function() {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function(event) {
	            if (event.source === global &&
	                typeof event.data === "string" &&
	                event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function(event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(5)))

/***/ },
/* 266 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */
	
	module.exports = deprecate;
	
	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */
	
	function deprecate (fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	}
	
	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */
	
	function config (name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var Buffer = __webpack_require__(225).Buffer;
	
	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }
	
	
	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}
	
	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }
	
	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};
	
	
	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;
	
	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;
	
	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }
	
	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);
	
	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
	
	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;
	
	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }
	
	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);
	
	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }
	
	  charStr += buffer.toString(this.encoding, 0, end);
	
	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }
	
	  // or just emit the charStr
	  return charStr;
	};
	
	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;
	
	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];
	
	    // See http://en.wikipedia.org/wiki/UTF-8#Description
	
	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }
	
	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }
	
	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};
	
	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);
	
	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }
	
	  return res;
	};
	
	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}
	
	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}
	
	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.
	
	'use strict';
	
	module.exports = Transform;
	
	var Duplex = __webpack_require__(262);
	
	/*<replacement>*/
	var util = __webpack_require__(259);
	util.inherits = __webpack_require__(253);
	/*</replacement>*/
	
	util.inherits(Transform, Duplex);
	
	function TransformState(stream) {
	  this.afterTransform = function (er, data) {
	    return afterTransform(stream, er, data);
	  };
	
	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	  this.writeencoding = null;
	}
	
	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;
	
	  var cb = ts.writecb;
	
	  if (!cb) return stream.emit('error', new Error('no writecb in Transform class'));
	
	  ts.writechunk = null;
	  ts.writecb = null;
	
	  if (data !== null && data !== undefined) stream.push(data);
	
	  cb(er);
	
	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}
	
	function Transform(options) {
	  if (!(this instanceof Transform)) return new Transform(options);
	
	  Duplex.call(this, options);
	
	  this._transformState = new TransformState(this);
	
	  var stream = this;
	
	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;
	
	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;
	
	  if (options) {
	    if (typeof options.transform === 'function') this._transform = options.transform;
	
	    if (typeof options.flush === 'function') this._flush = options.flush;
	  }
	
	  // When the writable side finishes, then flush out anything remaining.
	  this.once('prefinish', function () {
	    if (typeof this._flush === 'function') this._flush(function (er, data) {
	      done(stream, er, data);
	    });else done(stream);
	  });
	}
	
	Transform.prototype.push = function (chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};
	
	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function (chunk, encoding, cb) {
	  throw new Error('_transform() is not implemented');
	};
	
	Transform.prototype._write = function (chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
	  }
	};
	
	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function (n) {
	  var ts = this._transformState;
	
	  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};
	
	function done(stream, er, data) {
	  if (er) return stream.emit('error', er);
	
	  if (data !== null && data !== undefined) stream.push(data);
	
	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;
	
	  if (ws.length) throw new Error('Calling transform done when ws.length != 0');
	
	  if (ts.transforming) throw new Error('Calling transform done when still transforming');
	
	  return stream.push(null);
	}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.
	
	'use strict';
	
	module.exports = PassThrough;
	
	var Transform = __webpack_require__(268);
	
	/*<replacement>*/
	var util = __webpack_require__(259);
	util.inherits = __webpack_require__(253);
	/*</replacement>*/
	
	util.inherits(PassThrough, Transform);
	
	function PassThrough(options) {
	  if (!(this instanceof PassThrough)) return new PassThrough(options);
	
	  Transform.call(this, options);
	}
	
	PassThrough.prototype._transform = function (chunk, encoding, cb) {
	  cb(null, chunk);
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(263)


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(262)


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(268)


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(269)


/***/ },
/* 274 */
/***/ function(module, exports) {

	exports['aes-128-ecb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-192-ecb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-256-ecb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 0,
	  mode: 'ECB',
	  type: 'block'
	};
	exports['aes-128-cbc'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-192-cbc'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes-256-cbc'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CBC',
	  type: 'block'
	};
	exports['aes128'] = exports['aes-128-cbc'];
	exports['aes192'] = exports['aes-192-cbc'];
	exports['aes256'] = exports['aes-256-cbc'];
	exports['aes-128-cfb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-192-cfb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-256-cfb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CFB',
	  type: 'stream'
	};
	exports['aes-128-ofb'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-192-ofb'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-256-ofb'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'OFB',
	  type: 'stream'
	};
	exports['aes-128-ctr'] = {
	  cipher: 'AES',
	  key: 128,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-192-ctr'] = {
	  cipher: 'AES',
	  key: 192,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};
	exports['aes-256-ctr'] = {
	  cipher: 'AES',
	  key: 256,
	  iv: 16,
	  mode: 'CTR',
	  type: 'stream'
	};

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = function (crypto, password, keyLen, ivLen) {
	  keyLen = keyLen/8;
	  ivLen = ivLen || 0;
	  var ki = 0;
	  var ii = 0;
	  var key = new Buffer(keyLen);
	  var iv = new Buffer(ivLen);
	  var addmd = 0;
	  var md, md_buf;
	  var i;
	  while (true) {
	    md = crypto.createHash('md5');
	    if(addmd++ > 0) {
	       md.update(md_buf);
	    }
	    md.update(password);
	    md_buf = md.digest();
	    i = 0;
	    if(keyLen > 0) {
	      while(true) {
	        if(keyLen === 0) {
	          break;
	        }
	        if(i === md_buf.length) {
	          break;
	        }
	        key[ki++] = md_buf[i];
	        keyLen--;
	        i++;
	       }
	    }
	    if(ivLen > 0 && i !== md_buf.length) {
	      while(true) {
	        if(ivLen === 0) {
	          break;
	        }
	        if(i === md_buf.length) {
	          break;
	        }
	       iv[ii++] = md_buf[i];
	       ivLen--;
	       i++;
	     }
	   }
	   if(keyLen === 0 && ivLen === 0) {
	      break;
	    }
	  }
	  for(i=0;i<md_buf.length;i++) {
	    md_buf[i] = 0;
	  }
	  return {
	    key: key,
	    iv: iv
	  };
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(249);
	var Transform = __webpack_require__(250);
	var inherits = __webpack_require__(253);
	
	inherits(StreamCipher, Transform);
	module.exports = StreamCipher;
	function StreamCipher(mode, key, iv, decrypt) {
	  if (!(this instanceof StreamCipher)) {
	    return new StreamCipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  this._cache = new Buffer('');
	  this._secCache = new Buffer('');
	  this._decrypt = decrypt;
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	StreamCipher.prototype._transform = function (chunk, _, next) {
	  next(null, this._mode.encrypt(this, chunk, this._decrypt));
	};
	StreamCipher.prototype._flush = function (next) {
	  this._cipher.scrub();
	  next();
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 277 */
/***/ function(module, exports) {

	exports.encrypt = function (self, block) {
	  return self._cipher.encryptBlock(block);
	};
	exports.decrypt = function (self, block) {
	  return self._cipher.decryptBlock(block);
	};

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var xor = __webpack_require__(279);
	exports.encrypt = function (self, block) {
	  var data = xor(block, self._prev);
	  self._prev = self._cipher.encryptBlock(data);
	  return self._prev;
	};
	exports.decrypt = function (self, block) {
	  var pad = self._prev;
	  self._prev = block;
	  var out = self._cipher.decryptBlock(block);
	  return xor(out, pad);
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = xor;
	function xor(a, b) {
	  var len = Math.min(a.length, b.length);
	  var out = new Buffer(len);
	  var i = -1;
	  while (++i < len) {
	    out.writeUInt8(a[i] ^ b[i], i);
	  }
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(279);
	exports.encrypt = function (self, data, decrypt) {
	  var out = new Buffer('');
	  var len;
	  while (data.length) {
	    if (self._cache.length === 0) {
	      self._cache = self._cipher.encryptBlock(self._prev);
	      self._prev = new Buffer('');
	    }
	    if (self._cache.length <= data.length) {
	      len = self._cache.length;
	      out = Buffer.concat([out, encryptStart(self, data.slice(0, len), decrypt)]);
	      data = data.slice(len);
	    } else {
	      out = Buffer.concat([out, encryptStart(self, data, decrypt)]);
	      break;
	    }
	  }
	  return out;
	};
	function encryptStart(self, data, decrypt) {
	  var len = data.length;
	  var out = xor(data, self._cache);
	  self._cache = self._cache.slice(len);
	  self._prev = Buffer.concat([self._prev, decrypt?data:out]);
	  return out;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(279);
	function getBlock(self) {
	  self._prev = self._cipher.encryptBlock(self._prev);
	  return self._prev;
	}
	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }
	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var xor = __webpack_require__(279);
	function getBlock(self) {
	  var out = self._cipher.encryptBlock(self._prev);
	  incr32(self._prev);
	  return out;
	}
	exports.encrypt = function (self, chunk) {
	  while (self._cache.length < chunk.length) {
	    self._cache = Buffer.concat([self._cache, getBlock(self)]);
	  }
	  var pad = self._cache.slice(0, chunk.length);
	  self._cache = self._cache.slice(chunk.length);
	  return xor(chunk, pad);
	};
	function incr32(iv) {
	  var len = iv.length;
	  var item;
	  while (len--) {
	    item = iv.readUInt8(len);
	    if (item === 255) {
	      iv.writeUInt8(0, len);
	    } else {
	      item++;
	      iv.writeUInt8(item, len);
	      break;
	    }
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var aes = __webpack_require__(249);
	var Transform = __webpack_require__(250);
	var inherits = __webpack_require__(253);
	var modes = __webpack_require__(274);
	var StreamCipher = __webpack_require__(276);
	var ebtk = __webpack_require__(275);
	
	inherits(Decipher, Transform);
	function Decipher(mode, key, iv) {
	  if (!(this instanceof Decipher)) {
	    return new Decipher(mode, key, iv);
	  }
	  Transform.call(this);
	  this._cache = new Splitter();
	  this._last = void 0;
	  this._cipher = new aes.AES(key);
	  this._prev = new Buffer(iv.length);
	  iv.copy(this._prev);
	  this._mode = mode;
	}
	Decipher.prototype._transform = function (data, _, next) {
	  this._cache.add(data);
	  var chunk;
	  var thing;
	  while ((chunk = this._cache.get())) {
	    thing = this._mode.decrypt(this, chunk);
	    this.push(thing);
	  }
	  next();
	};
	Decipher.prototype._flush = function (next) {
	  var chunk = this._cache.flush();
	  if (!chunk) {
	    return next;
	  }
	
	  this.push(unpad(this._mode.decrypt(this, chunk)));
	
	  next();
	};
	
	function Splitter() {
	   if (!(this instanceof Splitter)) {
	    return new Splitter();
	  }
	  this.cache = new Buffer('');
	}
	Splitter.prototype.add = function (data) {
	  this.cache = Buffer.concat([this.cache, data]);
	};
	
	Splitter.prototype.get = function () {
	  if (this.cache.length > 16) {
	    var out = this.cache.slice(0, 16);
	    this.cache = this.cache.slice(16);
	    return out;
	  }
	  return null;
	};
	Splitter.prototype.flush = function () {
	  if (this.cache.length) {
	    return this.cache;
	  }
	};
	function unpad(last) {
	  var padded = last[15];
	  if (padded === 16) {
	    return;
	  }
	  return last.slice(0, 16 - padded);
	}
	
	var modelist = {
	  ECB: __webpack_require__(277),
	  CBC: __webpack_require__(278),
	  CFB: __webpack_require__(280),
	  OFB: __webpack_require__(281),
	  CTR: __webpack_require__(282)
	};
	
	module.exports = function (crypto) {
	  function createDecipheriv(suite, password, iv) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    if (typeof iv === 'string') {
	      iv = new Buffer(iv);
	    }
	    if (typeof password === 'string') {
	      password = new Buffer(password);
	    }
	    if (password.length !== config.key/8) {
	      throw new TypeError('invalid key length ' + password.length);
	    }
	    if (iv.length !== config.iv) {
	      throw new TypeError('invalid iv length ' + iv.length);
	    }
	    if (config.type === 'stream') {
	      return new StreamCipher(modelist[config.mode], password, iv, true);
	    }
	    return new Decipher(modelist[config.mode], password, iv);
	  }
	
	  function createDecipher (suite, password) {
	    var config = modes[suite];
	    if (!config) {
	      throw new TypeError('invalid suite type');
	    }
	    var keys = ebtk(crypto, password, config.key, config.iv);
	    return createDecipheriv(suite, keys.key, keys.iv);
	  }
	  return {
	    createDecipher: createDecipher,
	    createDecipheriv: createDecipheriv
	  };
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(225).Buffer))

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Todo = __webpack_require__(285);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoList = _react2.default.createClass({
	  displayName: "TodoList",
	
	  render: function render() {
	    var _this = this;
	
	    var todos = this.props.todos;
	
	
	    var renderTodos = function renderTodos() {
	      return todos.map(function (todo) {
	        return _react2.default.createElement(_Todo2.default, _extends({ key: todo.id }, todo, { onToggle: _this.props.onToggle }));
	      });
	    };
	
	    return _react2.default.createElement(
	      "div",
	      null,
	      renderTodos()
	    );
	  }
	});
	
	exports.default = TodoList;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Todo = _react2.default.createClass({
	  displayName: "Todo",
	
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props,
	        id = _props.id,
	        text = _props.text,
	        completed = _props.completed;
	
	
	    return _react2.default.createElement(
	      "div",
	      { onClick: function onClick() {
	          _this.props.onToggle(id);
	        } },
	      _react2.default.createElement("input", { type: "checkbox", defaultChecked: completed }),
	      text
	    );
	  }
	});
	
	exports.default = Todo;

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var AddTodoForm = _react2.default.createClass({
	  displayName: "AddTodoForm",
	
	  propTypes: function propTypes() {
	    return {
	      onAddTodo: _react2.default.PropTypes.func.isRequired
	    };
	  },
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "form",
	        { onSubmit: this.handleSubmit },
	        _react2.default.createElement("input", { ref: "newtodo", type: "text", placeholder: "What do you need to do" }),
	        _react2.default.createElement(
	          "button",
	          { className: "button expanded" },
	          "Add Todo"
	        )
	      )
	    );
	  },
	
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	
	    var newTodoText = this.refs.newtodo.value;
	    if (typeof newTodoText === "string" && newTodoText.length > 0) {
	      this.refs.newtodo.value = "";
	      this.props.onAddTodo(newTodoText);
	    } else {
	      this.refs.newtodo.focus();
	    }
	  }
	});
	
	exports.default = AddTodoForm;

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoSearch = _react2.default.createClass({
	  displayName: "TodoSearch",
	
	  render: function render() {
	    return _react2.default.createElement(
	      "div",
	      null,
	      _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement("input", { type: "search", ref: "searchText", placeholder: "Search todos", onChange: this.handleSearch })
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        _react2.default.createElement(
	          "label",
	          null,
	          _react2.default.createElement("input", { type: "checkbox", ref: "showCompleted", onChange: this.handleSearch }),
	          "Show completed todos"
	        )
	      )
	    );
	  },
	
	  handleSearch: function handleSearch(e) {
	    var showCompleted = this.refs.showCompleted.checked;
	    var searchText = this.refs.searchText.value;
	
	    this.props.onSearch(showCompleted, searchText);
	  }
	});
	
	exports.default = TodoSearch;

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jquery = __webpack_require__(1);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TodoAPI = {
	  setTodos: function setTodos(todos) {
	    if (_jquery2.default.isArray(todos)) {
	      localStorage.setItem("todos", JSON.stringify(todos));
	      return todos;
	    }
	  },
	
	  getTodos: function getTodos() {
	    var stringTodos = localStorage.getItem("todos");
	    var todos = undefined;
	
	    try {
	      todos = JSON.parse(stringTodos);
	    } catch (e) {
	      todos = [];
	    }
	
	    return _jquery2.default.isArray(todos) ? todos : [];
	  }
	};
	
	exports.default = TodoAPI;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(290);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(292)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(291)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/**\n * Foundation for Sites by ZURB\n * Version 6.2.0\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n   * 1. Set default font family to sans-serif.\n   * 2. Prevent iOS and IE text size adjust after device orientation change,\n   *    without disabling user zoom.\n   */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n   * Remove default margin.\n   */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n     ========================================================================== */\n/**\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\n   * and Firefox.\n   * Correct `block` display not defined for `main` in IE 11.\n   */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n   * 1. Correct `inline-block` display not defined in IE 8/9.\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n   */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n   * Address `[hidden]` styling not present in IE 8/9/10.\n   * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n   */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n     ========================================================================== */\n/**\n   * Remove the gray background color from active links in IE 10.\n   */\na {\n  background-color: transparent; }\n\n/**\n   * Improve readability of focused elements when they are also in an\n   * active/hover state.\n   */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n   */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n   */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n   * Address styling not present in Safari and Chrome.\n   */\ndfn {\n  font-style: italic; }\n\n/**\n   * Address variable `h1` font-size and margin within `section` and `article`\n   * contexts in Firefox 4+, Safari, and Chrome.\n   */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n   * Address styling not present in IE 8/9.\n   */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n   * Address inconsistent and variable font size in all browsers.\n   */\nsmall {\n  font-size: 80%; }\n\n/**\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n   */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove border when inside `a` element in IE 8/9/10.\n   */\nimg {\n  border: 0; }\n\n/**\n   * Correct overflow not hidden in IE 9/10/11.\n   */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * Address margin not present in IE 8/9 and Safari.\n   */\nfigure {\n  margin: 1em 40px; }\n\n/**\n   * Address differences between Firefox and other browsers.\n   */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n   * Contain overflow in all browsers.\n   */\npre {\n  overflow: auto; }\n\n/**\n   * Address odd `em`-unit font size rendering in all browsers.\n   */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n     ========================================================================== */\n/**\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\n   * styling of `select`, unless a `border` property is set.\n   */\n/**\n   * 1. Correct color not being inherited.\n   *    Known issue: affects color of disabled elements.\n   * 2. Correct font properties not being inherited.\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\n   */\nbutton {\n  overflow: visible; }\n\n/**\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\n   * All other form control elements do not inherit `text-transform` values.\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n   * Correct `select` style inheritance in Firefox.\n   */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n   *    and `video` controls.\n   * 2. Correct inability to style clickable `input` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    `input` and others.\n   */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n   * Re-set default cursor for disabled elements.\n   */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\n/**\n   * Remove inner padding and border in Firefox 4+.\n   */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n   * the UA stylesheet.\n   */\ninput {\n  line-height: normal; }\n\n/**\n   * It's recommended that you don't attempt to style these elements.\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\n   *\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\n   * 2. Remove excess padding in IE 8/9/10.\n   */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n   * `font-size` values of the `input`, it causes the cursor style of the\n   * decrement button to change from `default` to `text`.\n   */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n   */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and `textfield` appearance).\n   */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n   * Define consistent border, margin, and padding.\n   * [NOTE] We don't enable this ruleset in Foundation, because we want the <fieldset> element to have plain styling.\n   */\n/* fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  } */\n/**\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n   */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Remove default vertical scrollbar in IE 8/9/10/11.\n   */\ntextarea {\n  overflow: auto; }\n\n/**\n   * Don't inherit the `font-weight` (applied by a rule above).\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n   */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n     ========================================================================== */\n/**\n   * Remove most spacing between table cells.\n   */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n.foundation-mq {\n  font-family: \"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0a0a0a;\n  background: #fefefe;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic;\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px;\n  border-radius: 0; }\n\nselect {\n  width: 100%;\n  border-radius: 0; }\n\n#map_canvas img,\n#map_canvas embed,\n#map_canvas object,\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  line-height: 1; }\n\n.is-visible {\n  display: block !important; }\n\n.is-hidden {\n  display: none !important; }\n\n.row {\n  max-width: 75rem;\n  margin-left: auto;\n  margin-right: auto; }\n  .row::before, .row::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .row::after {\n    clear: both; }\n  .row.collapse > .column, .row.collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .row .row {\n    margin-left: -0.625rem;\n    margin-right: -0.625rem; }\n    @media screen and (min-width: 40em) {\n      .row .row {\n        margin-left: -0.9375rem;\n        margin-right: -0.9375rem; } }\n    .row .row.collapse {\n      margin-left: 0;\n      margin-right: 0; }\n  .row.expanded {\n    max-width: none; }\n    .row.expanded .row {\n      margin-left: auto;\n      margin-right: auto; }\n\n.column, .columns {\n  width: 100%;\n  float: left;\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n  @media screen and (min-width: 40em) {\n    .column, .columns {\n      padding-left: 0.9375rem;\n      padding-right: 0.9375rem; } }\n  .column:last-child:not(:first-child), .columns:last-child:not(:first-child) {\n    float: right; }\n  .column.end:last-child:last-child, .end.columns:last-child:last-child {\n    float: left; }\n\n.column.row.row, .row.row.columns {\n  float: none; }\n  .row .column.row.row, .row .row.row.columns {\n    padding-left: 0;\n    padding-right: 0;\n    margin-left: 0;\n    margin-right: 0; }\n\n.small-1 {\n  width: 8.33333%; }\n\n.small-push-1 {\n  position: relative;\n  left: 8.33333%; }\n\n.small-pull-1 {\n  position: relative;\n  left: -8.33333%; }\n\n.small-offset-0 {\n  margin-left: 0%; }\n\n.small-2 {\n  width: 16.66667%; }\n\n.small-push-2 {\n  position: relative;\n  left: 16.66667%; }\n\n.small-pull-2 {\n  position: relative;\n  left: -16.66667%; }\n\n.small-offset-1 {\n  margin-left: 8.33333%; }\n\n.small-3 {\n  width: 25%; }\n\n.small-push-3 {\n  position: relative;\n  left: 25%; }\n\n.small-pull-3 {\n  position: relative;\n  left: -25%; }\n\n.small-offset-2 {\n  margin-left: 16.66667%; }\n\n.small-4 {\n  width: 33.33333%; }\n\n.small-push-4 {\n  position: relative;\n  left: 33.33333%; }\n\n.small-pull-4 {\n  position: relative;\n  left: -33.33333%; }\n\n.small-offset-3 {\n  margin-left: 25%; }\n\n.small-5 {\n  width: 41.66667%; }\n\n.small-push-5 {\n  position: relative;\n  left: 41.66667%; }\n\n.small-pull-5 {\n  position: relative;\n  left: -41.66667%; }\n\n.small-offset-4 {\n  margin-left: 33.33333%; }\n\n.small-6 {\n  width: 50%; }\n\n.small-push-6 {\n  position: relative;\n  left: 50%; }\n\n.small-pull-6 {\n  position: relative;\n  left: -50%; }\n\n.small-offset-5 {\n  margin-left: 41.66667%; }\n\n.small-7 {\n  width: 58.33333%; }\n\n.small-push-7 {\n  position: relative;\n  left: 58.33333%; }\n\n.small-pull-7 {\n  position: relative;\n  left: -58.33333%; }\n\n.small-offset-6 {\n  margin-left: 50%; }\n\n.small-8 {\n  width: 66.66667%; }\n\n.small-push-8 {\n  position: relative;\n  left: 66.66667%; }\n\n.small-pull-8 {\n  position: relative;\n  left: -66.66667%; }\n\n.small-offset-7 {\n  margin-left: 58.33333%; }\n\n.small-9 {\n  width: 75%; }\n\n.small-push-9 {\n  position: relative;\n  left: 75%; }\n\n.small-pull-9 {\n  position: relative;\n  left: -75%; }\n\n.small-offset-8 {\n  margin-left: 66.66667%; }\n\n.small-10 {\n  width: 83.33333%; }\n\n.small-push-10 {\n  position: relative;\n  left: 83.33333%; }\n\n.small-pull-10 {\n  position: relative;\n  left: -83.33333%; }\n\n.small-offset-9 {\n  margin-left: 75%; }\n\n.small-11 {\n  width: 91.66667%; }\n\n.small-push-11 {\n  position: relative;\n  left: 91.66667%; }\n\n.small-pull-11 {\n  position: relative;\n  left: -91.66667%; }\n\n.small-offset-10 {\n  margin-left: 83.33333%; }\n\n.small-12 {\n  width: 100%; }\n\n.small-offset-11 {\n  margin-left: 91.66667%; }\n\n.small-up-1 > .column, .small-up-1 > .columns {\n  width: 100%;\n  float: left; }\n  .small-up-1 > .column:nth-of-type(1n), .small-up-1 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-1 > .column:nth-of-type(1n+1), .small-up-1 > .columns:nth-of-type(1n+1) {\n    clear: both; }\n  .small-up-1 > .column:last-child, .small-up-1 > .columns:last-child {\n    float: left; }\n\n.small-up-2 > .column, .small-up-2 > .columns {\n  width: 50%;\n  float: left; }\n  .small-up-2 > .column:nth-of-type(1n), .small-up-2 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-2 > .column:nth-of-type(2n+1), .small-up-2 > .columns:nth-of-type(2n+1) {\n    clear: both; }\n  .small-up-2 > .column:last-child, .small-up-2 > .columns:last-child {\n    float: left; }\n\n.small-up-3 > .column, .small-up-3 > .columns {\n  width: 33.33333%;\n  float: left; }\n  .small-up-3 > .column:nth-of-type(1n), .small-up-3 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-3 > .column:nth-of-type(3n+1), .small-up-3 > .columns:nth-of-type(3n+1) {\n    clear: both; }\n  .small-up-3 > .column:last-child, .small-up-3 > .columns:last-child {\n    float: left; }\n\n.small-up-4 > .column, .small-up-4 > .columns {\n  width: 25%;\n  float: left; }\n  .small-up-4 > .column:nth-of-type(1n), .small-up-4 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-4 > .column:nth-of-type(4n+1), .small-up-4 > .columns:nth-of-type(4n+1) {\n    clear: both; }\n  .small-up-4 > .column:last-child, .small-up-4 > .columns:last-child {\n    float: left; }\n\n.small-up-5 > .column, .small-up-5 > .columns {\n  width: 20%;\n  float: left; }\n  .small-up-5 > .column:nth-of-type(1n), .small-up-5 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-5 > .column:nth-of-type(5n+1), .small-up-5 > .columns:nth-of-type(5n+1) {\n    clear: both; }\n  .small-up-5 > .column:last-child, .small-up-5 > .columns:last-child {\n    float: left; }\n\n.small-up-6 > .column, .small-up-6 > .columns {\n  width: 16.66667%;\n  float: left; }\n  .small-up-6 > .column:nth-of-type(1n), .small-up-6 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-6 > .column:nth-of-type(6n+1), .small-up-6 > .columns:nth-of-type(6n+1) {\n    clear: both; }\n  .small-up-6 > .column:last-child, .small-up-6 > .columns:last-child {\n    float: left; }\n\n.small-up-7 > .column, .small-up-7 > .columns {\n  width: 14.28571%;\n  float: left; }\n  .small-up-7 > .column:nth-of-type(1n), .small-up-7 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-7 > .column:nth-of-type(7n+1), .small-up-7 > .columns:nth-of-type(7n+1) {\n    clear: both; }\n  .small-up-7 > .column:last-child, .small-up-7 > .columns:last-child {\n    float: left; }\n\n.small-up-8 > .column, .small-up-8 > .columns {\n  width: 12.5%;\n  float: left; }\n  .small-up-8 > .column:nth-of-type(1n), .small-up-8 > .columns:nth-of-type(1n) {\n    clear: none; }\n  .small-up-8 > .column:nth-of-type(8n+1), .small-up-8 > .columns:nth-of-type(8n+1) {\n    clear: both; }\n  .small-up-8 > .column:last-child, .small-up-8 > .columns:last-child {\n    float: left; }\n\n.small-collapse > .column, .small-collapse > .columns {\n  padding-left: 0;\n  padding-right: 0; }\n\n.small-collapse .row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.small-uncollapse > .column, .small-uncollapse > .columns {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem; }\n\n.small-centered {\n  float: none;\n  margin-left: auto;\n  margin-right: auto; }\n\n.small-uncentered,\n.small-push-0,\n.small-pull-0 {\n  position: static;\n  margin-left: 0;\n  margin-right: 0;\n  float: left; }\n\n@media screen and (min-width: 40em) {\n  .medium-1 {\n    width: 8.33333%; }\n  .medium-push-1 {\n    position: relative;\n    left: 8.33333%; }\n  .medium-pull-1 {\n    position: relative;\n    left: -8.33333%; }\n  .medium-offset-0 {\n    margin-left: 0%; }\n  .medium-2 {\n    width: 16.66667%; }\n  .medium-push-2 {\n    position: relative;\n    left: 16.66667%; }\n  .medium-pull-2 {\n    position: relative;\n    left: -16.66667%; }\n  .medium-offset-1 {\n    margin-left: 8.33333%; }\n  .medium-3 {\n    width: 25%; }\n  .medium-push-3 {\n    position: relative;\n    left: 25%; }\n  .medium-pull-3 {\n    position: relative;\n    left: -25%; }\n  .medium-offset-2 {\n    margin-left: 16.66667%; }\n  .medium-4 {\n    width: 33.33333%; }\n  .medium-push-4 {\n    position: relative;\n    left: 33.33333%; }\n  .medium-pull-4 {\n    position: relative;\n    left: -33.33333%; }\n  .medium-offset-3 {\n    margin-left: 25%; }\n  .medium-5 {\n    width: 41.66667%; }\n  .medium-push-5 {\n    position: relative;\n    left: 41.66667%; }\n  .medium-pull-5 {\n    position: relative;\n    left: -41.66667%; }\n  .medium-offset-4 {\n    margin-left: 33.33333%; }\n  .medium-6 {\n    width: 50%; }\n  .medium-push-6 {\n    position: relative;\n    left: 50%; }\n  .medium-pull-6 {\n    position: relative;\n    left: -50%; }\n  .medium-offset-5 {\n    margin-left: 41.66667%; }\n  .medium-7 {\n    width: 58.33333%; }\n  .medium-push-7 {\n    position: relative;\n    left: 58.33333%; }\n  .medium-pull-7 {\n    position: relative;\n    left: -58.33333%; }\n  .medium-offset-6 {\n    margin-left: 50%; }\n  .medium-8 {\n    width: 66.66667%; }\n  .medium-push-8 {\n    position: relative;\n    left: 66.66667%; }\n  .medium-pull-8 {\n    position: relative;\n    left: -66.66667%; }\n  .medium-offset-7 {\n    margin-left: 58.33333%; }\n  .medium-9 {\n    width: 75%; }\n  .medium-push-9 {\n    position: relative;\n    left: 75%; }\n  .medium-pull-9 {\n    position: relative;\n    left: -75%; }\n  .medium-offset-8 {\n    margin-left: 66.66667%; }\n  .medium-10 {\n    width: 83.33333%; }\n  .medium-push-10 {\n    position: relative;\n    left: 83.33333%; }\n  .medium-pull-10 {\n    position: relative;\n    left: -83.33333%; }\n  .medium-offset-9 {\n    margin-left: 75%; }\n  .medium-11 {\n    width: 91.66667%; }\n  .medium-push-11 {\n    position: relative;\n    left: 91.66667%; }\n  .medium-pull-11 {\n    position: relative;\n    left: -91.66667%; }\n  .medium-offset-10 {\n    margin-left: 83.33333%; }\n  .medium-12 {\n    width: 100%; }\n  .medium-offset-11 {\n    margin-left: 91.66667%; }\n  .medium-up-1 > .column, .medium-up-1 > .columns {\n    width: 100%;\n    float: left; }\n    .medium-up-1 > .column:nth-of-type(1n), .medium-up-1 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-1 > .column:nth-of-type(1n+1), .medium-up-1 > .columns:nth-of-type(1n+1) {\n      clear: both; }\n    .medium-up-1 > .column:last-child, .medium-up-1 > .columns:last-child {\n      float: left; }\n  .medium-up-2 > .column, .medium-up-2 > .columns {\n    width: 50%;\n    float: left; }\n    .medium-up-2 > .column:nth-of-type(1n), .medium-up-2 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-2 > .column:nth-of-type(2n+1), .medium-up-2 > .columns:nth-of-type(2n+1) {\n      clear: both; }\n    .medium-up-2 > .column:last-child, .medium-up-2 > .columns:last-child {\n      float: left; }\n  .medium-up-3 > .column, .medium-up-3 > .columns {\n    width: 33.33333%;\n    float: left; }\n    .medium-up-3 > .column:nth-of-type(1n), .medium-up-3 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-3 > .column:nth-of-type(3n+1), .medium-up-3 > .columns:nth-of-type(3n+1) {\n      clear: both; }\n    .medium-up-3 > .column:last-child, .medium-up-3 > .columns:last-child {\n      float: left; }\n  .medium-up-4 > .column, .medium-up-4 > .columns {\n    width: 25%;\n    float: left; }\n    .medium-up-4 > .column:nth-of-type(1n), .medium-up-4 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-4 > .column:nth-of-type(4n+1), .medium-up-4 > .columns:nth-of-type(4n+1) {\n      clear: both; }\n    .medium-up-4 > .column:last-child, .medium-up-4 > .columns:last-child {\n      float: left; }\n  .medium-up-5 > .column, .medium-up-5 > .columns {\n    width: 20%;\n    float: left; }\n    .medium-up-5 > .column:nth-of-type(1n), .medium-up-5 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-5 > .column:nth-of-type(5n+1), .medium-up-5 > .columns:nth-of-type(5n+1) {\n      clear: both; }\n    .medium-up-5 > .column:last-child, .medium-up-5 > .columns:last-child {\n      float: left; }\n  .medium-up-6 > .column, .medium-up-6 > .columns {\n    width: 16.66667%;\n    float: left; }\n    .medium-up-6 > .column:nth-of-type(1n), .medium-up-6 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-6 > .column:nth-of-type(6n+1), .medium-up-6 > .columns:nth-of-type(6n+1) {\n      clear: both; }\n    .medium-up-6 > .column:last-child, .medium-up-6 > .columns:last-child {\n      float: left; }\n  .medium-up-7 > .column, .medium-up-7 > .columns {\n    width: 14.28571%;\n    float: left; }\n    .medium-up-7 > .column:nth-of-type(1n), .medium-up-7 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-7 > .column:nth-of-type(7n+1), .medium-up-7 > .columns:nth-of-type(7n+1) {\n      clear: both; }\n    .medium-up-7 > .column:last-child, .medium-up-7 > .columns:last-child {\n      float: left; }\n  .medium-up-8 > .column, .medium-up-8 > .columns {\n    width: 12.5%;\n    float: left; }\n    .medium-up-8 > .column:nth-of-type(1n), .medium-up-8 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .medium-up-8 > .column:nth-of-type(8n+1), .medium-up-8 > .columns:nth-of-type(8n+1) {\n      clear: both; }\n    .medium-up-8 > .column:last-child, .medium-up-8 > .columns:last-child {\n      float: left; }\n  .medium-collapse > .column, .medium-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .medium-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .medium-uncollapse > .column, .medium-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem; }\n  .medium-centered {\n    float: none;\n    margin-left: auto;\n    margin-right: auto; }\n  .medium-uncentered,\n  .medium-push-0,\n  .medium-pull-0 {\n    position: static;\n    margin-left: 0;\n    margin-right: 0;\n    float: left; } }\n\n@media screen and (min-width: 64em) {\n  .large-1 {\n    width: 8.33333%; }\n  .large-push-1 {\n    position: relative;\n    left: 8.33333%; }\n  .large-pull-1 {\n    position: relative;\n    left: -8.33333%; }\n  .large-offset-0 {\n    margin-left: 0%; }\n  .large-2 {\n    width: 16.66667%; }\n  .large-push-2 {\n    position: relative;\n    left: 16.66667%; }\n  .large-pull-2 {\n    position: relative;\n    left: -16.66667%; }\n  .large-offset-1 {\n    margin-left: 8.33333%; }\n  .large-3 {\n    width: 25%; }\n  .large-push-3 {\n    position: relative;\n    left: 25%; }\n  .large-pull-3 {\n    position: relative;\n    left: -25%; }\n  .large-offset-2 {\n    margin-left: 16.66667%; }\n  .large-4 {\n    width: 33.33333%; }\n  .large-push-4 {\n    position: relative;\n    left: 33.33333%; }\n  .large-pull-4 {\n    position: relative;\n    left: -33.33333%; }\n  .large-offset-3 {\n    margin-left: 25%; }\n  .large-5 {\n    width: 41.66667%; }\n  .large-push-5 {\n    position: relative;\n    left: 41.66667%; }\n  .large-pull-5 {\n    position: relative;\n    left: -41.66667%; }\n  .large-offset-4 {\n    margin-left: 33.33333%; }\n  .large-6 {\n    width: 50%; }\n  .large-push-6 {\n    position: relative;\n    left: 50%; }\n  .large-pull-6 {\n    position: relative;\n    left: -50%; }\n  .large-offset-5 {\n    margin-left: 41.66667%; }\n  .large-7 {\n    width: 58.33333%; }\n  .large-push-7 {\n    position: relative;\n    left: 58.33333%; }\n  .large-pull-7 {\n    position: relative;\n    left: -58.33333%; }\n  .large-offset-6 {\n    margin-left: 50%; }\n  .large-8 {\n    width: 66.66667%; }\n  .large-push-8 {\n    position: relative;\n    left: 66.66667%; }\n  .large-pull-8 {\n    position: relative;\n    left: -66.66667%; }\n  .large-offset-7 {\n    margin-left: 58.33333%; }\n  .large-9 {\n    width: 75%; }\n  .large-push-9 {\n    position: relative;\n    left: 75%; }\n  .large-pull-9 {\n    position: relative;\n    left: -75%; }\n  .large-offset-8 {\n    margin-left: 66.66667%; }\n  .large-10 {\n    width: 83.33333%; }\n  .large-push-10 {\n    position: relative;\n    left: 83.33333%; }\n  .large-pull-10 {\n    position: relative;\n    left: -83.33333%; }\n  .large-offset-9 {\n    margin-left: 75%; }\n  .large-11 {\n    width: 91.66667%; }\n  .large-push-11 {\n    position: relative;\n    left: 91.66667%; }\n  .large-pull-11 {\n    position: relative;\n    left: -91.66667%; }\n  .large-offset-10 {\n    margin-left: 83.33333%; }\n  .large-12 {\n    width: 100%; }\n  .large-offset-11 {\n    margin-left: 91.66667%; }\n  .large-up-1 > .column, .large-up-1 > .columns {\n    width: 100%;\n    float: left; }\n    .large-up-1 > .column:nth-of-type(1n), .large-up-1 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-1 > .column:nth-of-type(1n+1), .large-up-1 > .columns:nth-of-type(1n+1) {\n      clear: both; }\n    .large-up-1 > .column:last-child, .large-up-1 > .columns:last-child {\n      float: left; }\n  .large-up-2 > .column, .large-up-2 > .columns {\n    width: 50%;\n    float: left; }\n    .large-up-2 > .column:nth-of-type(1n), .large-up-2 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-2 > .column:nth-of-type(2n+1), .large-up-2 > .columns:nth-of-type(2n+1) {\n      clear: both; }\n    .large-up-2 > .column:last-child, .large-up-2 > .columns:last-child {\n      float: left; }\n  .large-up-3 > .column, .large-up-3 > .columns {\n    width: 33.33333%;\n    float: left; }\n    .large-up-3 > .column:nth-of-type(1n), .large-up-3 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-3 > .column:nth-of-type(3n+1), .large-up-3 > .columns:nth-of-type(3n+1) {\n      clear: both; }\n    .large-up-3 > .column:last-child, .large-up-3 > .columns:last-child {\n      float: left; }\n  .large-up-4 > .column, .large-up-4 > .columns {\n    width: 25%;\n    float: left; }\n    .large-up-4 > .column:nth-of-type(1n), .large-up-4 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-4 > .column:nth-of-type(4n+1), .large-up-4 > .columns:nth-of-type(4n+1) {\n      clear: both; }\n    .large-up-4 > .column:last-child, .large-up-4 > .columns:last-child {\n      float: left; }\n  .large-up-5 > .column, .large-up-5 > .columns {\n    width: 20%;\n    float: left; }\n    .large-up-5 > .column:nth-of-type(1n), .large-up-5 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-5 > .column:nth-of-type(5n+1), .large-up-5 > .columns:nth-of-type(5n+1) {\n      clear: both; }\n    .large-up-5 > .column:last-child, .large-up-5 > .columns:last-child {\n      float: left; }\n  .large-up-6 > .column, .large-up-6 > .columns {\n    width: 16.66667%;\n    float: left; }\n    .large-up-6 > .column:nth-of-type(1n), .large-up-6 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-6 > .column:nth-of-type(6n+1), .large-up-6 > .columns:nth-of-type(6n+1) {\n      clear: both; }\n    .large-up-6 > .column:last-child, .large-up-6 > .columns:last-child {\n      float: left; }\n  .large-up-7 > .column, .large-up-7 > .columns {\n    width: 14.28571%;\n    float: left; }\n    .large-up-7 > .column:nth-of-type(1n), .large-up-7 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-7 > .column:nth-of-type(7n+1), .large-up-7 > .columns:nth-of-type(7n+1) {\n      clear: both; }\n    .large-up-7 > .column:last-child, .large-up-7 > .columns:last-child {\n      float: left; }\n  .large-up-8 > .column, .large-up-8 > .columns {\n    width: 12.5%;\n    float: left; }\n    .large-up-8 > .column:nth-of-type(1n), .large-up-8 > .columns:nth-of-type(1n) {\n      clear: none; }\n    .large-up-8 > .column:nth-of-type(8n+1), .large-up-8 > .columns:nth-of-type(8n+1) {\n      clear: both; }\n    .large-up-8 > .column:last-child, .large-up-8 > .columns:last-child {\n      float: left; }\n  .large-collapse > .column, .large-collapse > .columns {\n    padding-left: 0;\n    padding-right: 0; }\n  .large-collapse .row {\n    margin-left: 0;\n    margin-right: 0; }\n  .large-uncollapse > .column, .large-uncollapse > .columns {\n    padding-left: 0.9375rem;\n    padding-right: 0.9375rem; }\n  .large-centered {\n    float: none;\n    margin-left: auto;\n    margin-right: auto; }\n  .large-uncentered,\n  .large-push-0,\n  .large-pull-0 {\n    position: static;\n    margin-left: 0;\n    margin-right: 0;\n    float: left; } }\n\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0; }\n\np {\n  font-size: inherit;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n  text-rendering: optimizeLegibility; }\n\nem,\ni {\n  font-style: italic;\n  line-height: inherit; }\n\nstrong,\nb {\n  font-weight: bold;\n  line-height: inherit; }\n\nsmall {\n  font-size: 80%;\n  line-height: inherit; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  font-style: normal;\n  color: inherit;\n  text-rendering: optimizeLegibility;\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  line-height: 1.4; }\n  h1 small,\n  h2 small,\n  h3 small,\n  h4 small,\n  h5 small,\n  h6 small {\n    color: #cacaca;\n    line-height: 0; }\n\nh1 {\n  font-size: 1.5rem; }\n\nh2 {\n  font-size: 1.25rem; }\n\nh3 {\n  font-size: 1.1875rem; }\n\nh4 {\n  font-size: 1.125rem; }\n\nh5 {\n  font-size: 1.0625rem; }\n\nh6 {\n  font-size: 1rem; }\n\n@media screen and (min-width: 40em) {\n  h1 {\n    font-size: 3rem; }\n  h2 {\n    font-size: 2.5rem; }\n  h3 {\n    font-size: 1.9375rem; }\n  h4 {\n    font-size: 1.5625rem; }\n  h5 {\n    font-size: 1.25rem; }\n  h6 {\n    font-size: 1rem; } }\n\na {\n  color: #2199e8;\n  text-decoration: none;\n  line-height: inherit;\n  cursor: pointer; }\n  a:hover, a:focus {\n    color: #1585cf; }\n  a img {\n    border: 0; }\n\nhr {\n  max-width: 75rem;\n  height: 0;\n  border-right: 0;\n  border-top: 0;\n  border-bottom: 1px solid #cacaca;\n  border-left: 0;\n  margin: 1.25rem auto;\n  clear: both; }\n\nul,\nol,\ndl {\n  line-height: 1.6;\n  margin-bottom: 1rem;\n  list-style-position: outside; }\n\nli {\n  font-size: inherit; }\n\nul {\n  list-style-type: disc;\n  margin-left: 1.25rem; }\n\nol {\n  margin-left: 1.25rem; }\n\nul ul, ol ul, ul ol, ol ol {\n  margin-left: 1.25rem;\n  margin-bottom: 0; }\n\ndl {\n  margin-bottom: 1rem; }\n  dl dt {\n    margin-bottom: 0.3rem;\n    font-weight: bold; }\n\nblockquote {\n  margin: 0 0 1rem;\n  padding: 0.5625rem 1.25rem 0 1.1875rem;\n  border-left: 1px solid #cacaca; }\n  blockquote, blockquote p {\n    line-height: 1.6;\n    color: #8a8a8a; }\n\ncite {\n  display: block;\n  font-size: 0.8125rem;\n  color: #8a8a8a; }\n  cite:before {\n    content: '\\2014    '; }\n\nabbr {\n  color: #0a0a0a;\n  cursor: help;\n  border-bottom: 1px dotted #0a0a0a; }\n\ncode {\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace;\n  font-weight: normal;\n  color: #0a0a0a;\n  background-color: #e6e6e6;\n  border: 1px solid #cacaca;\n  padding: 0.125rem 0.3125rem 0.0625rem; }\n\nkbd {\n  padding: 0.125rem 0.25rem 0;\n  margin: 0;\n  background-color: #e6e6e6;\n  color: #0a0a0a;\n  font-family: Consolas, \"Liberation Mono\", Courier, monospace; }\n\n.subheader {\n  margin-top: 0.2rem;\n  margin-bottom: 0.5rem;\n  font-weight: normal;\n  line-height: 1.4;\n  color: #8a8a8a; }\n\n.lead {\n  font-size: 125%;\n  line-height: 1.6; }\n\n.stat {\n  font-size: 2.5rem;\n  line-height: 1; }\n  p + .stat {\n    margin-top: -1rem; }\n\n.no-bullet {\n  margin-left: 0;\n  list-style: none; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n@media screen and (min-width: 40em) {\n  .medium-text-left {\n    text-align: left; }\n  .medium-text-right {\n    text-align: right; }\n  .medium-text-center {\n    text-align: center; }\n  .medium-text-justify {\n    text-align: justify; } }\n\n@media screen and (min-width: 64em) {\n  .large-text-left {\n    text-align: left; }\n  .large-text-right {\n    text-align: right; }\n  .large-text-center {\n    text-align: center; }\n  .large-text-justify {\n    text-align: justify; } }\n\n.show-for-print {\n  display: none !important; }\n\n@media print {\n  * {\n    background: transparent !important;\n    color: black !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  .show-for-print {\n    display: block !important; }\n  .hide-for-print {\n    display: none !important; }\n  table.show-for-print {\n    display: table !important; }\n  thead.show-for-print {\n    display: table-header-group !important; }\n  tbody.show-for-print {\n    display: table-row-group !important; }\n  tr.show-for-print {\n    display: table-row !important; }\n  td.show-for-print {\n    display: table-cell !important; }\n  th.show-for-print {\n    display: table-cell !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  .ir a:after,\n  a[href^='javascript:']:after,\n  a[href^='#']:after {\n    content: ''; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  pre,\n  blockquote {\n    border: 1px solid #8a8a8a;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  @page {\n    margin: 0.5cm; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; } }\n\n[type='text'], [type='password'], [type='date'], [type='datetime'], [type='datetime-local'], [type='month'], [type='week'], [type='email'], [type='number'], [type='search'], [type='tel'], [type='time'], [type='url'], [type='color'],\ntextarea {\n  display: block;\n  box-sizing: border-box;\n  width: 100%;\n  height: 2.4375rem;\n  padding: 0.5rem;\n  border: 1px solid #cacaca;\n  margin: 0 0 1rem;\n  font-family: inherit;\n  font-size: 1rem;\n  color: #0a0a0a;\n  background-color: #fefefe;\n  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);\n  border-radius: 0;\n  transition: box-shadow 0.5s, border-color 0.25s ease-in-out;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n  [type='text']:focus, [type='password']:focus, [type='date']:focus, [type='datetime']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='week']:focus, [type='email']:focus, [type='number']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='url']:focus, [type='color']:focus,\n  textarea:focus {\n    border: 1px solid #8a8a8a;\n    background-color: #fefefe;\n    outline: none;\n    box-shadow: 0 0 5px #cacaca;\n    transition: box-shadow 0.5s, border-color 0.25s ease-in-out; }\n\ntextarea {\n  max-width: 100%; }\n  textarea[rows] {\n    height: auto; }\n\ninput::placeholder,\ntextarea::placeholder {\n  color: #cacaca; }\n\ninput:disabled, input[readonly],\ntextarea:disabled,\ntextarea[readonly] {\n  background-color: #e6e6e6;\n  cursor: default; }\n\n[type='submit'],\n[type='button'] {\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n\ninput[type='search'] {\n  box-sizing: border-box; }\n\n[type='file'],\n[type='checkbox'],\n[type='radio'] {\n  margin: 0 0 1rem; }\n\n[type='checkbox'] + label,\n[type='radio'] + label {\n  display: inline-block;\n  margin-left: 0.5rem;\n  margin-right: 1rem;\n  margin-bottom: 0;\n  vertical-align: baseline; }\n\nlabel > [type='checkbox'],\nlabel > [type='radio'] {\n  margin-right: 0.5rem; }\n\n[type='file'] {\n  width: 100%; }\n\nlabel {\n  display: block;\n  margin: 0;\n  font-size: 0.875rem;\n  font-weight: normal;\n  line-height: 1.8;\n  color: #0a0a0a; }\n  label.middle {\n    margin: 0 0 1rem;\n    padding: 0.5625rem 0; }\n\n.help-text {\n  margin-top: -0.5rem;\n  font-size: 0.8125rem;\n  font-style: italic;\n  color: #0a0a0a; }\n\n.input-group {\n  display: table;\n  width: 100%;\n  margin-bottom: 1rem; }\n  .input-group > :first-child {\n    border-radius: 0 0 0 0; }\n  .input-group > :last-child > * {\n    border-radius: 0 0 0 0; }\n\n.input-group-label, .input-group-field, .input-group-button {\n  margin: 0;\n  display: table-cell;\n  vertical-align: middle; }\n\n.input-group-label {\n  text-align: center;\n  padding: 0 1rem;\n  background: #e6e6e6;\n  color: #0a0a0a;\n  border: 1px solid #cacaca;\n  white-space: nowrap;\n  width: 1%;\n  height: 100%; }\n  .input-group-label:first-child {\n    border-right: 0; }\n  .input-group-label:last-child {\n    border-left: 0; }\n\n.input-group-field {\n  border-radius: 0;\n  height: 2.5rem; }\n\n.input-group-button {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n  height: 100%;\n  width: 1%; }\n  .input-group-button a,\n  .input-group-button input,\n  .input-group-button button {\n    margin: 0; }\n\n.input-group .input-group-button {\n  display: table-cell; }\n\nfieldset {\n  border: 0;\n  padding: 0;\n  margin: 0; }\n\nlegend {\n  margin-bottom: 0.5rem;\n  max-width: 100%; }\n\n.fieldset {\n  border: 1px solid #cacaca;\n  padding: 1.25rem;\n  margin: 1.125rem 0; }\n  .fieldset legend {\n    background: #fefefe;\n    padding: 0 0.1875rem;\n    margin: 0;\n    margin-left: -0.1875rem; }\n\nselect {\n  height: 2.4375rem;\n  padding: 0.5rem;\n  border: 1px solid #cacaca;\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-family: inherit;\n  line-height: normal;\n  color: #0a0a0a;\n  background-color: #fefefe;\n  border-radius: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"32\" height=\"24\" viewBox=\"0 0 32 24\"><polygon points=\"0,0 32,0 16,24\" style=\"fill: rgb%28138, 138, 138%29\"></polygon></svg>');\n  background-size: 9px 6px;\n  background-position: right center;\n  background-origin: content-box;\n  background-repeat: no-repeat; }\n  @media screen and (min-width: 0\\0) {\n    select {\n      background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAYAAACbU/80AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIpJREFUeNrEkckNgDAMBBfRkEt0ObRBBdsGXUDgmQfK4XhH2m8czQAAy27R3tsw4Qfe2x8uOO6oYLb6GlOor3GF+swURAOmUJ+RwtEJs9WvTGEYxBXqI1MQAZhCfUQKRzDMVj+TwrAIV6jvSUEkYAr1LSkcyTBb/V+KYfX7xAeusq3sLDtGH3kEGACPWIflNZfhRQAAAABJRU5ErkJggg==\"); } }\n  select:disabled {\n    background-color: #e6e6e6;\n    cursor: default; }\n  select::-ms-expand {\n    display: none; }\n  select[multiple] {\n    height: auto; }\n\n.is-invalid-input:not(:focus) {\n  background-color: rgba(236, 88, 64, 0.1);\n  border-color: #ec5840; }\n\n.is-invalid-label {\n  color: #ec5840; }\n\n.form-error {\n  display: none;\n  margin-top: -0.5rem;\n  margin-bottom: 1rem;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #ec5840; }\n  .form-error.is-visible {\n    display: block; }\n\n.button {\n  display: inline-block;\n  text-align: center;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-appearance: none;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  border-radius: 0;\n  padding: 0.85em 1em;\n  margin: 0 0 1rem 0;\n  font-size: 0.9rem;\n  background-color: #2199e8;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .button {\n    outline: 0; }\n  .button:hover, .button:focus {\n    background-color: #1583cc;\n    color: #fefefe; }\n  .button.tiny {\n    font-size: 0.6rem; }\n  .button.small {\n    font-size: 0.75rem; }\n  .button.large {\n    font-size: 1.25rem; }\n  .button.expanded {\n    display: block;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .button.primary {\n    background-color: #2199e8;\n    color: #fefefe; }\n    .button.primary:hover, .button.primary:focus {\n      background-color: #147cc0;\n      color: #fefefe; }\n  .button.secondary {\n    background-color: #777;\n    color: #fefefe; }\n    .button.secondary:hover, .button.secondary:focus {\n      background-color: #5f5f5f;\n      color: #fefefe; }\n  .button.success {\n    background-color: #3adb76;\n    color: #fefefe; }\n    .button.success:hover, .button.success:focus {\n      background-color: #22bb5b;\n      color: #fefefe; }\n  .button.warning {\n    background-color: #ffae00;\n    color: #fefefe; }\n    .button.warning:hover, .button.warning:focus {\n      background-color: #cc8b00;\n      color: #fefefe; }\n  .button.alert {\n    background-color: #ec5840;\n    color: #fefefe; }\n    .button.alert:hover, .button.alert:focus {\n      background-color: #da3116;\n      color: #fefefe; }\n  .button.hollow {\n    border: 1px solid #2199e8;\n    color: #2199e8; }\n    .button.hollow, .button.hollow:hover, .button.hollow:focus {\n      background-color: transparent; }\n    .button.hollow:hover, .button.hollow:focus {\n      border-color: #0c4d78;\n      color: #0c4d78; }\n    .button.hollow.primary {\n      border: 1px solid #2199e8;\n      color: #2199e8; }\n      .button.hollow.primary:hover, .button.hollow.primary:focus {\n        border-color: #0c4d78;\n        color: #0c4d78; }\n    .button.hollow.secondary {\n      border: 1px solid #777;\n      color: #777; }\n      .button.hollow.secondary:hover, .button.hollow.secondary:focus {\n        border-color: #3c3c3c;\n        color: #3c3c3c; }\n    .button.hollow.success {\n      border: 1px solid #3adb76;\n      color: #3adb76; }\n      .button.hollow.success:hover, .button.hollow.success:focus {\n        border-color: #157539;\n        color: #157539; }\n    .button.hollow.warning {\n      border: 1px solid #ffae00;\n      color: #ffae00; }\n      .button.hollow.warning:hover, .button.hollow.warning:focus {\n        border-color: #805700;\n        color: #805700; }\n    .button.hollow.alert {\n      border: 1px solid #ec5840;\n      color: #ec5840; }\n      .button.hollow.alert:hover, .button.hollow.alert:focus {\n        border-color: #881f0e;\n        color: #881f0e; }\n  .button.disabled, .button[disabled] {\n    opacity: 0.25;\n    cursor: not-allowed;\n    pointer-events: none; }\n  .button.dropdown::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    border-color: #fefefe transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    position: relative;\n    top: 0.4em;\n    float: right;\n    margin-left: 1em;\n    display: inline-block; }\n  .button.arrow-only::after {\n    margin-left: 0;\n    float: none;\n    top: -0.1em; }\n\n.accordion {\n  list-style-type: none;\n  background: #fefefe;\n  border: 1px solid #e6e6e6;\n  border-bottom: 0;\n  border-radius: 0;\n  margin-left: 0; }\n\n.accordion-title {\n  display: block;\n  padding: 1.25rem 1rem;\n  line-height: 1;\n  font-size: 0.75rem;\n  color: #2199e8;\n  position: relative;\n  border-bottom: 1px solid #e6e6e6; }\n  .accordion-title:hover, .accordion-title:focus {\n    background-color: #e6e6e6; }\n  .accordion-title::before {\n    content: '+';\n    position: absolute;\n    right: 1rem;\n    top: 50%;\n    margin-top: -0.5rem; }\n  .is-active > .accordion-title::before {\n    content: '\\2013'; }\n\n.accordion-content {\n  padding: 1rem;\n  display: none;\n  border-bottom: 1px solid #e6e6e6;\n  background-color: #fefefe; }\n\n.is-accordion-submenu-parent > a {\n  position: relative; }\n  .is-accordion-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 6px;\n    border-color: #2199e8 transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    position: absolute;\n    top: 50%;\n    margin-top: -4px;\n    right: 1rem; }\n\n.is-accordion-submenu-parent[aria-expanded='true'] > a::after {\n  transform-origin: 50% 50%;\n  transform: scaleY(-1); }\n\n.badge {\n  display: inline-block;\n  padding: 0.3em;\n  min-width: 2.1em;\n  font-size: 0.6rem;\n  text-align: center;\n  border-radius: 50%;\n  background: #2199e8;\n  color: #fefefe; }\n  .badge.secondary {\n    background: #777;\n    color: #fefefe; }\n  .badge.success {\n    background: #3adb76;\n    color: #fefefe; }\n  .badge.warning {\n    background: #ffae00;\n    color: #fefefe; }\n  .badge.alert {\n    background: #ec5840;\n    color: #fefefe; }\n\n.breadcrumbs {\n  list-style: none;\n  margin: 0 0 1rem 0; }\n  .breadcrumbs::before, .breadcrumbs::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .breadcrumbs::after {\n    clear: both; }\n  .breadcrumbs li {\n    float: left;\n    color: #0a0a0a;\n    font-size: 0.6875rem;\n    cursor: default;\n    text-transform: uppercase; }\n    .breadcrumbs li:not(:last-child)::after {\n      color: #cacaca;\n      content: \"/\";\n      margin: 0 0.75rem;\n      position: relative;\n      top: 1px;\n      opacity: 1; }\n  .breadcrumbs a {\n    color: #2199e8; }\n    .breadcrumbs a:hover {\n      text-decoration: underline; }\n  .breadcrumbs .disabled {\n    color: #cacaca; }\n\n.button-group {\n  margin-bottom: 1rem;\n  font-size: 0; }\n  .button-group::before, .button-group::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .button-group::after {\n    clear: both; }\n  .button-group .button {\n    margin: 0;\n    font-size: 0.9rem;\n    float: left; }\n    .button-group .button:not(:last-child) {\n      border-right: 1px solid #fefefe; }\n  .button-group.tiny .button {\n    font-size: 0.6rem; }\n  .button-group.small .button {\n    font-size: 0.75rem; }\n  .button-group.large .button {\n    font-size: 1.25rem; }\n  .button-group.expanded {\n    margin-right: -1px; }\n    .button-group.expanded::before, .button-group.expanded::after {\n      display: none; }\n    .button-group.expanded .button:first-child:nth-last-child(2), .button-group.expanded .button:first-child:nth-last-child(2):first-child:nth-last-child(2) ~ .button {\n      display: inline-block;\n      width: calc(50% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(3), .button-group.expanded .button:first-child:nth-last-child(3):first-child:nth-last-child(3) ~ .button {\n      display: inline-block;\n      width: calc(33.33333% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(4), .button-group.expanded .button:first-child:nth-last-child(4):first-child:nth-last-child(4) ~ .button {\n      display: inline-block;\n      width: calc(25% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(5), .button-group.expanded .button:first-child:nth-last-child(5):first-child:nth-last-child(5) ~ .button {\n      display: inline-block;\n      width: calc(20% - 1px);\n      margin-right: 1px; }\n    .button-group.expanded .button:first-child:nth-last-child(6), .button-group.expanded .button:first-child:nth-last-child(6):first-child:nth-last-child(6) ~ .button {\n      display: inline-block;\n      width: calc(16.66667% - 1px);\n      margin-right: 1px; }\n  .button-group.primary .button {\n    background-color: #2199e8;\n    color: #fefefe; }\n    .button-group.primary .button:hover, .button-group.primary .button:focus {\n      background-color: #147cc0;\n      color: #fefefe; }\n  .button-group.secondary .button {\n    background-color: #777;\n    color: #fefefe; }\n    .button-group.secondary .button:hover, .button-group.secondary .button:focus {\n      background-color: #5f5f5f;\n      color: #fefefe; }\n  .button-group.success .button {\n    background-color: #3adb76;\n    color: #fefefe; }\n    .button-group.success .button:hover, .button-group.success .button:focus {\n      background-color: #22bb5b;\n      color: #fefefe; }\n  .button-group.warning .button {\n    background-color: #ffae00;\n    color: #fefefe; }\n    .button-group.warning .button:hover, .button-group.warning .button:focus {\n      background-color: #cc8b00;\n      color: #fefefe; }\n  .button-group.alert .button {\n    background-color: #ec5840;\n    color: #fefefe; }\n    .button-group.alert .button:hover, .button-group.alert .button:focus {\n      background-color: #da3116;\n      color: #fefefe; }\n  .button-group.stacked .button, .button-group.stacked-for-small .button, .button-group.stacked-for-medium .button {\n    width: 100%; }\n    .button-group.stacked .button:not(:last-child), .button-group.stacked-for-small .button:not(:last-child), .button-group.stacked-for-medium .button:not(:last-child) {\n      margin-right: 0; }\n  @media screen and (min-width: 40em) {\n    .button-group.stacked-for-small .button {\n      width: auto; }\n      .button-group.stacked-for-small .button:not(:last-child) {\n        margin-right: 1px; } }\n  @media screen and (min-width: 64em) {\n    .button-group.stacked-for-medium .button {\n      width: auto; }\n      .button-group.stacked-for-medium .button:not(:last-child) {\n        margin-right: 1px; } }\n  @media screen and (max-width: 39.9375em) {\n    .button-group.stacked-for-small.expanded {\n      display: block; }\n      .button-group.stacked-for-small.expanded .button {\n        display: block;\n        margin-right: 0; } }\n\n.callout {\n  margin: 0 0 1rem 0;\n  padding: 1rem;\n  border: 1px solid rgba(10, 10, 10, 0.25);\n  border-radius: 0;\n  position: relative;\n  color: #0a0a0a;\n  background-color: white; }\n  .callout > :first-child {\n    margin-top: 0; }\n  .callout > :last-child {\n    margin-bottom: 0; }\n  .callout.primary {\n    background-color: #def0fc; }\n  .callout.secondary {\n    background-color: #ebebeb; }\n  .callout.success {\n    background-color: #e1faea; }\n  .callout.warning {\n    background-color: #fff3d9; }\n  .callout.alert {\n    background-color: #fce6e2; }\n  .callout.small {\n    padding-top: 0.5rem;\n    padding-right: 0.5rem;\n    padding-bottom: 0.5rem;\n    padding-left: 0.5rem; }\n  .callout.large {\n    padding-top: 3rem;\n    padding-right: 3rem;\n    padding-bottom: 3rem;\n    padding-left: 3rem; }\n\n.close-button {\n  position: absolute;\n  color: #8a8a8a;\n  right: 1rem;\n  top: 0.5rem;\n  font-size: 2em;\n  line-height: 1;\n  cursor: pointer; }\n  [data-whatinput='mouse'] .close-button {\n    outline: 0; }\n  .close-button:hover, .close-button:focus {\n    color: #0a0a0a; }\n\n.menu {\n  margin: 0;\n  list-style-type: none; }\n  .menu > li {\n    display: table-cell;\n    vertical-align: middle; }\n    [data-whatinput='mouse'] .menu > li {\n      outline: 0; }\n  .menu > li > a {\n    display: block;\n    padding: 0.7rem 1rem;\n    line-height: 1; }\n  .menu input,\n  .menu a,\n  .menu button {\n    margin-bottom: 0; }\n  .menu > li > a img,\n  .menu > li > a i {\n    vertical-align: middle; }\n  .menu > li > a i + span,\n  .menu > li > a img + span {\n    vertical-align: middle; }\n  .menu > li > a img,\n  .menu > li > a i {\n    margin-right: 0.25rem;\n    display: inline-block; }\n  .menu > li {\n    display: table-cell; }\n  .menu.vertical > li {\n    display: block; }\n  @media screen and (min-width: 40em) {\n    .menu.medium-horizontal > li {\n      display: table-cell; }\n    .menu.medium-vertical > li {\n      display: block; } }\n  @media screen and (min-width: 64em) {\n    .menu.large-horizontal > li {\n      display: table-cell; }\n    .menu.large-vertical > li {\n      display: block; } }\n  .menu.simple li {\n    line-height: 1;\n    display: inline-block;\n    margin-right: 1rem; }\n  .menu.simple a {\n    padding: 0; }\n  .menu.align-right::before, .menu.align-right::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .menu.align-right::after {\n    clear: both; }\n  .menu.align-right > li {\n    float: right; }\n  .menu.expanded {\n    width: 100%;\n    display: table;\n    table-layout: fixed; }\n    .menu.expanded > li:first-child:last-child {\n      width: 100%; }\n  .menu.icon-top > li > a {\n    text-align: center; }\n    .menu.icon-top > li > a img,\n    .menu.icon-top > li > a i {\n      display: block;\n      margin: 0 auto 0.25rem; }\n  .menu.nested {\n    margin-left: 1rem; }\n  .menu .active > a {\n    color: #fefefe;\n    background: #2199e8; }\n\n.menu-text {\n  font-weight: bold;\n  color: inherit;\n  line-height: 1;\n  padding-top: 0;\n  padding-bottom: 0;\n  padding: 0.7rem 1rem; }\n\n.menu-centered {\n  text-align: center; }\n  .menu-centered > .menu {\n    display: inline-block; }\n\n.no-js [data-responsive-menu] ul {\n  display: none; }\n\n.menu-icon {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  width: 20px;\n  height: 16px; }\n  .menu-icon::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 2px;\n    background: #fefefe;\n    top: 0;\n    left: 0;\n    box-shadow: 0 7px 0 #fefefe, 0 14px 0 #fefefe; }\n  .menu-icon:hover::after {\n    background: #cacaca;\n    box-shadow: 0 7px 0 #cacaca, 0 14px 0 #cacaca; }\n\n.menu-icon.dark {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  width: 20px;\n  height: 16px; }\n  .menu-icon.dark::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 2px;\n    background: #0a0a0a;\n    top: 0;\n    left: 0;\n    box-shadow: 0 7px 0 #0a0a0a, 0 14px 0 #0a0a0a; }\n  .menu-icon.dark:hover::after {\n    background: #8a8a8a;\n    box-shadow: 0 7px 0 #8a8a8a, 0 14px 0 #8a8a8a; }\n\n.is-drilldown {\n  position: relative;\n  overflow: hidden; }\n  .is-drilldown li {\n    display: block !important; }\n\n.is-drilldown-submenu {\n  position: absolute;\n  top: 0;\n  left: 100%;\n  z-index: -1;\n  height: 100%;\n  width: 100%;\n  background: #fefefe;\n  transition: transform 0.15s linear; }\n  .is-drilldown-submenu.is-active {\n    z-index: 1;\n    display: block;\n    transform: translateX(-100%); }\n  .is-drilldown-submenu.is-closing {\n    transform: translateX(100%); }\n\n.is-drilldown-submenu-parent > a {\n  position: relative; }\n  .is-drilldown-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 6px;\n    border-color: transparent transparent transparent #2199e8;\n    border-left-style: solid;\n    border-right-width: 0;\n    position: absolute;\n    top: 50%;\n    margin-top: -6px;\n    right: 1rem; }\n\n.js-drilldown-back > a::before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 6px;\n  border-color: transparent #2199e8 transparent transparent;\n  border-right-style: solid;\n  border-left-width: 0;\n  border-left-width: 0;\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 0.75rem; }\n\n.dropdown-pane {\n  background-color: #fefefe;\n  border: 1px solid #cacaca;\n  border-radius: 0;\n  display: block;\n  font-size: 1rem;\n  padding: 1rem;\n  position: absolute;\n  visibility: hidden;\n  width: 300px;\n  z-index: 10; }\n  .dropdown-pane.is-open {\n    visibility: visible; }\n\n.dropdown-pane.tiny {\n  width: 100px; }\n\n.dropdown-pane.small {\n  width: 200px; }\n\n.dropdown-pane.large {\n  width: 400px; }\n\n.dropdown.menu > li.opens-left > .is-dropdown-submenu {\n  left: auto;\n  right: 0;\n  top: 100%; }\n\n.dropdown.menu > li.opens-right > .is-dropdown-submenu {\n  right: auto;\n  left: 0;\n  top: 100%; }\n\n.dropdown.menu > li.is-dropdown-submenu-parent > a {\n  padding-right: 1.5rem;\n  position: relative; }\n\n.dropdown.menu > li.is-dropdown-submenu-parent > a::after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 5px;\n  border-color: #2199e8 transparent transparent;\n  border-top-style: solid;\n  border-bottom-width: 0;\n  right: 5px;\n  margin-top: -2px; }\n\n[data-whatinput='mouse'] .dropdown.menu a {\n  outline: 0; }\n\n.no-js .dropdown.menu ul {\n  display: none; }\n\n.dropdown.menu.vertical > li .is-dropdown-submenu {\n  top: 0; }\n\n.dropdown.menu.vertical > li.opens-left .is-dropdown-submenu {\n  left: auto;\n  right: 100%; }\n\n.dropdown.menu.vertical > li.opens-right .is-dropdown-submenu {\n  right: auto;\n  left: 100%; }\n\n.dropdown.menu.vertical > li > a::after {\n  right: 14px;\n  margin-top: -3px; }\n\n.dropdown.menu.vertical > li.opens-left > a::after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 5px;\n  border-color: transparent #2199e8 transparent transparent;\n  border-right-style: solid;\n  border-left-width: 0; }\n\n.dropdown.menu.vertical > li.opens-right > a::after {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  border: inset 5px;\n  border-color: transparent transparent transparent #2199e8;\n  border-left-style: solid;\n  border-right-width: 0; }\n\n@media screen and (min-width: 40em) {\n  .dropdown.menu.medium-horizontal > li.opens-left > .is-dropdown-submenu {\n    left: auto;\n    right: 0;\n    top: 100%; }\n  .dropdown.menu.medium-horizontal > li.opens-right > .is-dropdown-submenu {\n    right: auto;\n    left: 0;\n    top: 100%; }\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a {\n    padding-right: 1.5rem;\n    position: relative; }\n  .dropdown.menu.medium-horizontal > li.is-dropdown-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: #2199e8 transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    right: 5px;\n    margin-top: -2px; }\n  .dropdown.menu.medium-vertical > li .is-dropdown-submenu {\n    top: 0; }\n  .dropdown.menu.medium-vertical > li.opens-left .is-dropdown-submenu {\n    left: auto;\n    right: 100%; }\n  .dropdown.menu.medium-vertical > li.opens-right .is-dropdown-submenu {\n    right: auto;\n    left: 100%; }\n  .dropdown.menu.medium-vertical > li > a::after {\n    right: 14px;\n    margin-top: -3px; }\n  .dropdown.menu.medium-vertical > li.opens-left > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent #2199e8 transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0; }\n  .dropdown.menu.medium-vertical > li.opens-right > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent transparent transparent #2199e8;\n    border-left-style: solid;\n    border-right-width: 0; } }\n\n@media screen and (min-width: 64em) {\n  .dropdown.menu.large-horizontal > li.opens-left > .is-dropdown-submenu {\n    left: auto;\n    right: 0;\n    top: 100%; }\n  .dropdown.menu.large-horizontal > li.opens-right > .is-dropdown-submenu {\n    right: auto;\n    left: 0;\n    top: 100%; }\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a {\n    padding-right: 1.5rem;\n    position: relative; }\n  .dropdown.menu.large-horizontal > li.is-dropdown-submenu-parent > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: #2199e8 transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    right: 5px;\n    margin-top: -2px; }\n  .dropdown.menu.large-vertical > li .is-dropdown-submenu {\n    top: 0; }\n  .dropdown.menu.large-vertical > li.opens-left .is-dropdown-submenu {\n    left: auto;\n    right: 100%; }\n  .dropdown.menu.large-vertical > li.opens-right .is-dropdown-submenu {\n    right: auto;\n    left: 100%; }\n  .dropdown.menu.large-vertical > li > a::after {\n    right: 14px;\n    margin-top: -3px; }\n  .dropdown.menu.large-vertical > li.opens-left > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent #2199e8 transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0; }\n  .dropdown.menu.large-vertical > li.opens-right > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent transparent transparent #2199e8;\n    border-left-style: solid;\n    border-right-width: 0; } }\n\n.dropdown.menu.align-right .is-dropdown-submenu.first-sub {\n  top: 100%;\n  left: auto;\n  right: 0; }\n\n.is-dropdown-menu.vertical {\n  width: 100px; }\n  .is-dropdown-menu.vertical.align-right {\n    float: right; }\n\n.is-dropdown-submenu-parent {\n  position: relative; }\n  .is-dropdown-submenu-parent a::after {\n    position: absolute;\n    top: 50%;\n    right: 5px;\n    margin-top: -2px; }\n  .is-dropdown-submenu-parent.opens-inner .is-dropdown-submenu {\n    top: 100%; }\n  .is-dropdown-submenu-parent.opens-left .is-dropdown-submenu {\n    left: auto;\n    right: 0;\n    top: 100%; }\n\n.is-dropdown-submenu {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 100%;\n  min-width: 200px;\n  z-index: 1;\n  background: #fefefe;\n  border: 1px solid #cacaca; }\n  .is-dropdown-submenu .is-dropdown-submenu-parent > a::after {\n    right: 14px;\n    margin-top: -3px; }\n  .is-dropdown-submenu .is-dropdown-submenu-parent.opens-left > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent #2199e8 transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0; }\n  .is-dropdown-submenu .is-dropdown-submenu-parent.opens-right > a::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 5px;\n    border-color: transparent transparent transparent #2199e8;\n    border-left-style: solid;\n    border-right-width: 0; }\n  .is-dropdown-submenu .is-dropdown-submenu {\n    margin-top: -1px; }\n  .is-dropdown-submenu > li {\n    width: 100%; }\n  .is-dropdown-submenu:not(.js-dropdown-nohover) > .is-dropdown-submenu-parent:hover > .is-dropdown-submenu, .is-dropdown-submenu.js-dropdown-active {\n    display: block; }\n\n.flex-video {\n  position: relative;\n  height: 0;\n  padding-bottom: 75%;\n  margin-bottom: 1rem;\n  overflow: hidden; }\n  .flex-video iframe,\n  .flex-video object,\n  .flex-video embed,\n  .flex-video video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .flex-video.widescreen {\n    padding-bottom: 56.25%; }\n  .flex-video.vimeo {\n    padding-top: 0; }\n\n.label {\n  display: inline-block;\n  padding: 0.33333rem 0.5rem;\n  font-size: 0.8rem;\n  line-height: 1;\n  white-space: nowrap;\n  cursor: default;\n  border-radius: 0;\n  background: #2199e8;\n  color: #fefefe; }\n  .label.secondary {\n    background: #777;\n    color: #fefefe; }\n  .label.success {\n    background: #3adb76;\n    color: #fefefe; }\n  .label.warning {\n    background: #ffae00;\n    color: #fefefe; }\n  .label.alert {\n    background: #ec5840;\n    color: #fefefe; }\n\n.media-object {\n  margin-bottom: 1rem;\n  display: block; }\n  .media-object img {\n    max-width: none; }\n  @media screen and (max-width: 39.9375em) {\n    .media-object.stack-for-small .media-object-section {\n      padding: 0;\n      padding-bottom: 1rem;\n      display: block; }\n      .media-object.stack-for-small .media-object-section img {\n        width: 100%; } }\n\n.media-object-section {\n  display: table-cell;\n  vertical-align: top; }\n  .media-object-section:first-child {\n    padding-right: 1rem; }\n  .media-object-section:last-child:not(:nth-child(2)) {\n    padding-left: 1rem; }\n  .media-object-section.middle {\n    vertical-align: middle; }\n  .media-object-section.bottom {\n    vertical-align: bottom; }\n\nhtml,\nbody {\n  height: 100%; }\n\n.off-canvas-wrapper {\n  width: 100%;\n  overflow-x: hidden;\n  position: relative;\n  backface-visibility: hidden;\n  -webkit-overflow-scrolling: auto; }\n\n.off-canvas-wrapper-inner {\n  position: relative;\n  width: 100%;\n  transition: transform 0.5s ease; }\n  .off-canvas-wrapper-inner::before, .off-canvas-wrapper-inner::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .off-canvas-wrapper-inner::after {\n    clear: both; }\n\n.off-canvas-content,\n.off-canvas-content {\n  min-height: 100%;\n  background: #fefefe;\n  transition: transform 0.5s ease;\n  backface-visibility: hidden;\n  z-index: 1;\n  padding-bottom: 0.1px;\n  box-shadow: 0 0 10px rgba(10, 10, 10, 0.5); }\n\n.js-off-canvas-exit {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(254, 254, 254, 0.25);\n  cursor: pointer;\n  transition: background 0.5s ease; }\n\n.off-canvas {\n  position: absolute;\n  background: #e6e6e6;\n  z-index: -1;\n  max-height: 100%;\n  overflow-y: auto;\n  transform: translateX(0); }\n  [data-whatinput='mouse'] .off-canvas {\n    outline: 0; }\n  .off-canvas.position-left {\n    left: -250px;\n    top: 0;\n    width: 250px; }\n    .is-open-left {\n      transform: translateX(250px); }\n  .off-canvas.position-right {\n    right: -250px;\n    top: 0;\n    width: 250px; }\n    .is-open-right {\n      transform: translateX(-250px); }\n\n@media screen and (min-width: 40em) {\n  .position-left.reveal-for-medium {\n    left: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-left.reveal-for-medium ~ .off-canvas-content {\n      margin-left: 250px; }\n  .position-right.reveal-for-medium {\n    right: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-right.reveal-for-medium ~ .off-canvas-content {\n      margin-right: 250px; } }\n\n@media screen and (min-width: 64em) {\n  .position-left.reveal-for-large {\n    left: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-left.reveal-for-large ~ .off-canvas-content {\n      margin-left: 250px; }\n  .position-right.reveal-for-large {\n    right: 0;\n    z-index: auto;\n    position: fixed; }\n    .position-right.reveal-for-large ~ .off-canvas-content {\n      margin-right: 250px; } }\n\n.orbit {\n  position: relative; }\n\n.orbit-container {\n  position: relative;\n  margin: 0;\n  overflow: hidden;\n  list-style: none; }\n\n.orbit-slide {\n  width: 100%;\n  max-height: 100%; }\n  .orbit-slide.no-motionui.is-active {\n    top: 0;\n    left: 0; }\n\n.orbit-figure {\n  margin: 0; }\n\n.orbit-image {\n  margin: 0;\n  width: 100%;\n  max-width: 100%; }\n\n.orbit-caption {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 0;\n  color: #fefefe;\n  background-color: rgba(10, 10, 10, 0.5); }\n\n.orbit-previous, .orbit-next {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 10;\n  padding: 1rem;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .orbit-previous, [data-whatinput='mouse'] .orbit-next {\n    outline: 0; }\n  .orbit-previous:hover, .orbit-next:hover, .orbit-previous:active, .orbit-next:active, .orbit-previous:focus, .orbit-next:focus {\n    background-color: rgba(10, 10, 10, 0.5); }\n\n.orbit-previous {\n  left: 0; }\n\n.orbit-next {\n  left: auto;\n  right: 0; }\n\n.orbit-bullets {\n  position: relative;\n  margin-top: 0.8rem;\n  margin-bottom: 0.8rem;\n  text-align: center; }\n  [data-whatinput='mouse'] .orbit-bullets {\n    outline: 0; }\n  .orbit-bullets button {\n    width: 1.2rem;\n    height: 1.2rem;\n    margin: 0.1rem;\n    background-color: #cacaca;\n    border-radius: 50%; }\n    .orbit-bullets button:hover {\n      background-color: #8a8a8a; }\n    .orbit-bullets button.is-active {\n      background-color: #8a8a8a; }\n\n.pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .pagination::before, .pagination::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .pagination::after {\n    clear: both; }\n  .pagination li {\n    font-size: 0.875rem;\n    margin-right: 0.0625rem;\n    border-radius: 0;\n    display: none; }\n    .pagination li:last-child, .pagination li:first-child {\n      display: inline-block; }\n    @media screen and (min-width: 40em) {\n      .pagination li {\n        display: inline-block; } }\n  .pagination a,\n  .pagination button {\n    color: #0a0a0a;\n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .pagination a:hover,\n    .pagination button:hover {\n      background: #e6e6e6; }\n  .pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; }\n    .pagination .disabled:hover {\n      background: transparent; }\n  .pagination .ellipsis::after {\n    content: '\\2026';\n    padding: 0.1875rem 0.625rem;\n    color: #0a0a0a; }\n\n.pagination-previous a::before,\n.pagination-previous.disabled::before {\n  content: '\\AB';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.pagination-next a::after,\n.pagination-next.disabled::after {\n  content: '\\BB';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.progress {\n  background-color: #cacaca;\n  height: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0; }\n  .progress.primary .progress-meter {\n    background-color: #2199e8; }\n  .progress.secondary .progress-meter {\n    background-color: #777; }\n  .progress.success .progress-meter {\n    background-color: #3adb76; }\n  .progress.warning .progress-meter {\n    background-color: #ffae00; }\n  .progress.alert .progress-meter {\n    background-color: #ec5840; }\n\n.progress-meter {\n  position: relative;\n  display: block;\n  width: 0%;\n  height: 100%;\n  background-color: #2199e8; }\n\n.progress-meter-text {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  margin: 0;\n  font-size: 0.75rem;\n  font-weight: bold;\n  color: #fefefe;\n  white-space: nowrap; }\n\n.slider {\n  position: relative;\n  height: 0.5rem;\n  margin-top: 1.25rem;\n  margin-bottom: 2.25rem;\n  background-color: #e6e6e6;\n  cursor: pointer;\n  user-select: none;\n  touch-action: none; }\n\n.slider-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  max-width: 100%;\n  height: 0.5rem;\n  background-color: #cacaca;\n  transition: all 0.2s ease-in-out; }\n  .slider-fill.is-dragging {\n    transition: all 0s linear; }\n\n.slider-handle {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  display: inline-block;\n  width: 1.4rem;\n  height: 1.4rem;\n  background-color: #2199e8;\n  transition: all 0.2s ease-in-out;\n  touch-action: manipulation;\n  border-radius: 0; }\n  [data-whatinput='mouse'] .slider-handle {\n    outline: 0; }\n  .slider-handle:hover {\n    background-color: #1583cc; }\n  .slider-handle.is-dragging {\n    transition: all 0s linear; }\n\n.slider.disabled,\n.slider[disabled] {\n  opacity: 0.25;\n  cursor: not-allowed; }\n\n.slider.vertical {\n  display: inline-block;\n  width: 0.5rem;\n  height: 12.5rem;\n  margin: 0 1.25rem;\n  transform: scale(1, -1); }\n  .slider.vertical .slider-fill {\n    top: 0;\n    width: 0.5rem;\n    max-height: 100%; }\n  .slider.vertical .slider-handle {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    width: 1.4rem;\n    height: 1.4rem;\n    transform: translateX(-50%); }\n\n.sticky-container {\n  position: relative; }\n\n.sticky {\n  position: absolute;\n  z-index: 0;\n  transform: translate3d(0, 0, 0); }\n\n.sticky.is-stuck {\n  position: fixed;\n  z-index: 5; }\n  .sticky.is-stuck.is-at-top {\n    top: 0; }\n  .sticky.is-stuck.is-at-bottom {\n    bottom: 0; }\n\n.sticky.is-anchored {\n  position: absolute;\n  left: auto;\n  right: auto; }\n  .sticky.is-anchored.is-at-bottom {\n    bottom: 0; }\n\nbody.is-reveal-open {\n  overflow: hidden; }\n\n.reveal-overlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1005;\n  background-color: rgba(10, 10, 10, 0.45);\n  overflow-y: scroll; }\n\n.reveal {\n  display: none;\n  z-index: 1006;\n  padding: 1rem;\n  border: 1px solid #cacaca;\n  background-color: #fefefe;\n  border-radius: 0;\n  position: relative;\n  top: 100px;\n  margin-left: auto;\n  margin-right: auto;\n  overflow-y: auto; }\n  [data-whatinput='mouse'] .reveal {\n    outline: 0; }\n  @media screen and (min-width: 40em) {\n    .reveal {\n      min-height: 0; } }\n  .reveal .column, .reveal .columns,\n  .reveal .columns {\n    min-width: 0; }\n  .reveal > :last-child {\n    margin-bottom: 0; }\n  @media screen and (min-width: 40em) {\n    .reveal {\n      width: 600px;\n      max-width: 75rem; } }\n  @media screen and (min-width: 40em) {\n    .reveal .reveal {\n      left: auto;\n      right: auto;\n      margin: 0 auto; } }\n  .reveal.collapse {\n    padding: 0; }\n  @media screen and (min-width: 40em) {\n    .reveal.tiny {\n      width: 30%;\n      max-width: 75rem; } }\n  @media screen and (min-width: 40em) {\n    .reveal.small {\n      width: 50%;\n      max-width: 75rem; } }\n  @media screen and (min-width: 40em) {\n    .reveal.large {\n      width: 90%;\n      max-width: 75rem; } }\n  .reveal.full {\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    height: 100vh;\n    min-height: 100vh;\n    max-width: none;\n    margin-left: 0;\n    border: 0; }\n  @media screen and (max-width: 39.9375em) {\n    .reveal {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      height: 100vh;\n      min-height: 100vh;\n      max-width: none;\n      margin-left: 0;\n      border: 0; } }\n  .reveal.without-overlay {\n    position: fixed; }\n\n.switch {\n  margin-bottom: 1rem;\n  outline: 0;\n  position: relative;\n  user-select: none;\n  color: #fefefe;\n  font-weight: bold;\n  font-size: 0.875rem; }\n\n.switch-input {\n  opacity: 0;\n  position: absolute; }\n\n.switch-paddle {\n  background: #cacaca;\n  cursor: pointer;\n  display: block;\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n  transition: all 0.25s ease-out;\n  border-radius: 0;\n  color: inherit;\n  font-weight: inherit; }\n  input + .switch-paddle {\n    margin: 0; }\n  .switch-paddle::after {\n    background: #fefefe;\n    content: '';\n    display: block;\n    position: absolute;\n    height: 1.5rem;\n    left: 0.25rem;\n    top: 0.25rem;\n    width: 1.5rem;\n    transition: all 0.25s ease-out;\n    transform: translate3d(0, 0, 0);\n    border-radius: 0; }\n  input:checked ~ .switch-paddle {\n    background: #2199e8; }\n    input:checked ~ .switch-paddle::after {\n      left: 2.25rem; }\n  [data-whatinput='mouse'] input:focus ~ .switch-paddle {\n    outline: 0; }\n\n.switch-active, .switch-inactive {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%); }\n\n.switch-active {\n  left: 8%;\n  display: none; }\n  input:checked + label > .switch-active {\n    display: block; }\n\n.switch-inactive {\n  right: 15%; }\n  input:checked + label > .switch-inactive {\n    display: none; }\n\n.switch.tiny .switch-paddle {\n  width: 3rem;\n  height: 1.5rem;\n  font-size: 0.625rem; }\n\n.switch.tiny .switch-paddle::after {\n  width: 1rem;\n  height: 1rem; }\n\n.switch.tiny input:checked ~ .switch-paddle:after {\n  left: 1.75rem; }\n\n.switch.small .switch-paddle {\n  width: 3.5rem;\n  height: 1.75rem;\n  font-size: 0.75rem; }\n\n.switch.small .switch-paddle::after {\n  width: 1.25rem;\n  height: 1.25rem; }\n\n.switch.small input:checked ~ .switch-paddle:after {\n  left: 2rem; }\n\n.switch.large .switch-paddle {\n  width: 5rem;\n  height: 2.5rem;\n  font-size: 1rem; }\n\n.switch.large .switch-paddle::after {\n  width: 2rem;\n  height: 2rem; }\n\n.switch.large input:checked ~ .switch-paddle:after {\n  left: 2.75rem; }\n\ntable {\n  width: 100%;\n  margin-bottom: 1rem;\n  border-radius: 0; }\n  table thead,\n  table tbody,\n  table tfoot {\n    border: 1px solid #f1f1f1;\n    background-color: #fefefe; }\n  table caption {\n    font-weight: bold;\n    padding: 0.5rem 0.625rem 0.625rem; }\n  table thead,\n  table tfoot {\n    background: #f8f8f8;\n    color: #0a0a0a; }\n    table thead tr,\n    table tfoot tr {\n      background: transparent; }\n    table thead th,\n    table thead td,\n    table tfoot th,\n    table tfoot td {\n      padding: 0.5rem 0.625rem 0.625rem;\n      font-weight: bold;\n      text-align: left; }\n  table tbody tr:nth-child(even) {\n    background-color: #f1f1f1; }\n  table tbody th,\n  table tbody td {\n    padding: 0.5rem 0.625rem 0.625rem; }\n\n@media screen and (max-width: 63.9375em) {\n  table.stack thead {\n    display: none; }\n  table.stack tfoot {\n    display: none; }\n  table.stack tr,\n  table.stack th,\n  table.stack td {\n    display: block; }\n  table.stack td {\n    border-top: 0; } }\n\ntable.scroll {\n  display: block;\n  width: 100%;\n  overflow-x: auto; }\n\ntable.hover tr:hover {\n  background-color: #f9f9f9; }\n\ntable.hover tr:nth-of-type(even):hover {\n  background-color: #ececec; }\n\n.table-scroll {\n  overflow-x: auto; }\n  .table-scroll table {\n    width: auto; }\n\n.tabs {\n  margin: 0;\n  list-style-type: none;\n  background: #fefefe;\n  border: 1px solid #e6e6e6; }\n  .tabs::before, .tabs::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .tabs::after {\n    clear: both; }\n\n.tabs.vertical > li {\n  width: auto;\n  float: none;\n  display: block; }\n\n.tabs.simple > li > a {\n  padding: 0; }\n  .tabs.simple > li > a:hover {\n    background: transparent; }\n\n.tabs.primary {\n  background: #2199e8; }\n  .tabs.primary > li > a {\n    color: #fefefe; }\n    .tabs.primary > li > a:hover, .tabs.primary > li > a:focus {\n      background: #1893e4; }\n\n.tabs-title {\n  float: left; }\n  .tabs-title > a {\n    display: block;\n    padding: 1.25rem 1.5rem;\n    line-height: 1;\n    font-size: 0.75rem; }\n    .tabs-title > a:hover {\n      background: #fefefe; }\n    .tabs-title > a:focus, .tabs-title > a[aria-selected='true'] {\n      background: #e6e6e6; }\n\n.tabs-content {\n  background: #fefefe;\n  transition: all 0.5s ease;\n  border: 1px solid #e6e6e6;\n  border-top: 0; }\n\n.tabs-content.vertical {\n  border: 1px solid #e6e6e6;\n  border-left: 0; }\n\n.tabs-panel {\n  display: none;\n  padding: 1rem; }\n  .tabs-panel.is-active {\n    display: block; }\n\n.thumbnail {\n  border: solid 4px #fefefe;\n  box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);\n  display: inline-block;\n  line-height: 0;\n  max-width: 100%;\n  transition: box-shadow 200ms ease-out;\n  border-radius: 0;\n  margin-bottom: 1rem; }\n  .thumbnail:hover, .thumbnail:focus {\n    box-shadow: 0 0 6px 1px rgba(33, 153, 232, 0.5); }\n\n.title-bar {\n  background: #0a0a0a;\n  color: #fefefe;\n  padding: 0.5rem; }\n  .title-bar::before, .title-bar::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .title-bar::after {\n    clear: both; }\n  .title-bar .menu-icon {\n    margin-left: 0.25rem;\n    margin-right: 0.5rem; }\n\n.title-bar-left {\n  float: left; }\n\n.title-bar-right {\n  float: right;\n  text-align: right; }\n\n.title-bar-title {\n  font-weight: bold;\n  vertical-align: middle;\n  display: inline-block; }\n\n.menu-icon.dark {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  width: 20px;\n  height: 16px; }\n  .menu-icon.dark::after {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 100%;\n    height: 2px;\n    background: #0a0a0a;\n    top: 0;\n    left: 0;\n    box-shadow: 0 7px 0 #0a0a0a, 0 14px 0 #0a0a0a; }\n  .menu-icon.dark:hover::after {\n    background: #8a8a8a;\n    box-shadow: 0 7px 0 #8a8a8a, 0 14px 0 #8a8a8a; }\n\n.has-tip {\n  border-bottom: dotted 1px #8a8a8a;\n  font-weight: bold;\n  position: relative;\n  display: inline-block;\n  cursor: help; }\n\n.tooltip {\n  background-color: #0a0a0a;\n  color: #fefefe;\n  font-size: 80%;\n  padding: 0.75rem;\n  position: absolute;\n  z-index: 10;\n  top: calc(100% + 0.6495rem);\n  max-width: 10rem !important;\n  border-radius: 0; }\n  .tooltip::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: transparent transparent #0a0a0a;\n    border-bottom-style: solid;\n    border-top-width: 0;\n    bottom: 100%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%); }\n  .tooltip.top::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: #0a0a0a transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    top: 100%;\n    bottom: auto; }\n  .tooltip.left::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: transparent transparent transparent #0a0a0a;\n    border-left-style: solid;\n    border-right-width: 0;\n    bottom: auto;\n    left: 100%;\n    top: 50%;\n    transform: translateY(-50%); }\n  .tooltip.right::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.75rem;\n    border-color: transparent #0a0a0a transparent transparent;\n    border-right-style: solid;\n    border-left-width: 0;\n    bottom: auto;\n    left: auto;\n    right: 100%;\n    top: 50%;\n    transform: translateY(-50%); }\n\n.top-bar {\n  padding: 0.5rem; }\n  .top-bar::before, .top-bar::after {\n    content: ' ';\n    display: table;\n    flex-basis: 0;\n    order: 1; }\n  .top-bar::after {\n    clear: both; }\n  .top-bar,\n  .top-bar ul {\n    background-color: #e6e6e6; }\n  .top-bar input {\n    width: 200px;\n    margin-right: 1rem; }\n  .top-bar .input-group-field {\n    width: 100%;\n    margin-right: 0; }\n  .top-bar input.button {\n    width: auto; }\n\n@media screen and (max-width: 39.9375em) {\n  .stacked-for-small .top-bar-left,\n  .stacked-for-small .top-bar-right {\n    width: 100%; } }\n\n@media screen and (max-width: 63.9375em) {\n  .stacked-for-medium .top-bar-left,\n  .stacked-for-medium .top-bar-right {\n    width: 100%; } }\n\n@media screen and (max-width: 74.9375em) {\n  .stacked-for-large .top-bar-left,\n  .stacked-for-large .top-bar-right {\n    width: 100%; } }\n\n.top-bar-left,\n.top-bar-right {\n  width: 100%; }\n\n@media screen and (min-width: 40em) {\n  .top-bar-left,\n  .top-bar-right {\n    width: auto; } }\n\n.top-bar-title {\n  float: left;\n  margin-right: 1rem; }\n\n.top-bar-left {\n  float: left; }\n\n.top-bar-right {\n  float: right; }\n\n.hide {\n  display: none !important; }\n\n.invisible {\n  visibility: hidden; }\n\n@media screen and (max-width: 39.9375em) {\n  .hide-for-small-only {\n    display: none !important; } }\n\n@media screen and (max-width: 0em), screen and (min-width: 40em) {\n  .show-for-small-only {\n    display: none !important; } }\n\n@media screen and (min-width: 40em) {\n  .hide-for-medium {\n    display: none !important; } }\n\n@media screen and (max-width: 39.9375em) {\n  .show-for-medium {\n    display: none !important; } }\n\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  .hide-for-medium-only {\n    display: none !important; } }\n\n@media screen and (max-width: 39.9375em), screen and (min-width: 64em) {\n  .show-for-medium-only {\n    display: none !important; } }\n\n@media screen and (min-width: 64em) {\n  .hide-for-large {\n    display: none !important; } }\n\n@media screen and (max-width: 63.9375em) {\n  .show-for-large {\n    display: none !important; } }\n\n@media screen and (min-width: 64em) and (max-width: 74.9375em) {\n  .hide-for-large-only {\n    display: none !important; } }\n\n@media screen and (max-width: 63.9375em), screen and (min-width: 75em) {\n  .show-for-large-only {\n    display: none !important; } }\n\n.show-for-sr,\n.show-on-focus {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n\n.show-on-focus:active, .show-on-focus:focus {\n  position: static !important;\n  height: auto;\n  width: auto;\n  overflow: visible;\n  clip: auto; }\n\n.show-for-landscape,\n.hide-for-portrait {\n  display: block !important; }\n  @media screen and (orientation: landscape) {\n    .show-for-landscape,\n    .hide-for-portrait {\n      display: block !important; } }\n  @media screen and (orientation: portrait) {\n    .show-for-landscape,\n    .hide-for-portrait {\n      display: none !important; } }\n\n.hide-for-landscape,\n.show-for-portrait {\n  display: none !important; }\n  @media screen and (orientation: landscape) {\n    .hide-for-landscape,\n    .show-for-portrait {\n      display: none !important; } }\n  @media screen and (orientation: portrait) {\n    .hide-for-landscape,\n    .show-for-portrait {\n      display: block !important; } }\n\n.float-left {\n  float: left !important; }\n\n.float-right {\n  float: right !important; }\n\n.float-center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.clearfix::before, .clearfix::after {\n  content: ' ';\n  display: table;\n  flex-basis: 0;\n  order: 1; }\n\n.clearfix::after {\n  clear: both; }\n", ""]);
	
	// exports


/***/ },
/* 291 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmpzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9+L25vZGUtdXVpZC91dWlkLmpzIiwid2VicGFjazovLy8uL34vYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYmFzZTY0LWpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaWVlZTc1NC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2J1ZmZlci9+L2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcnlwdG8tYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2NyeXB0by1icm93c2VyaWZ5L3JuZy5qcyIsIndlYnBhY2s6Ly8vY3J5cHRvIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi9+L2NyeXB0by1icm93c2VyaWZ5L2NyZWF0ZS1oYXNoLmpzIiwid2VicGFjazovLy8uL34vc2hhLmpzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc2hhLmpzL2hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaGEuanMvc2hhMS5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi91dGlsL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3NoYS5qcy9zaGEyNTYuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zaGEuanMvc2hhNTEyLmpzIiwid2VicGFjazovLy8uL34vY3J5cHRvLWJyb3dzZXJpZnkvbWQ1LmpzIiwid2VicGFjazovLy8uL34vY3J5cHRvLWJyb3dzZXJpZnkvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JpcGVtZDE2MC9saWIvcmlwZW1kMTYwLmpzIiwid2VicGFjazovLy8uL34vY3J5cHRvLWJyb3dzZXJpZnkvY3JlYXRlLWhtYWMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jcnlwdG8tYnJvd3NlcmlmeS9wYmtkZjIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wYmtkZjItY29tcGF0L3Bia2RmMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL2VuY3J5cHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL2Flcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL2NpcGhlckJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJlYW0tYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmhlcml0cy9pbmhlcml0c19icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9yZWFkYWJsZS1zdHJlYW0vcmVhZGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJlYW0tYnJvd3NlcmlmeS9+L3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV9yZWFkYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MtbmV4dGljay1hcmdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9pc2FycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYnVmZmVyLXNoaW1zL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vY29yZS11dGlsLWlzL2xpYi91dGlsLmpzIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL0J1ZmZlckxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJlYW0tYnJvd3NlcmlmeS9+L3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV9kdXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJlYW0tYnJvd3NlcmlmeS9+L3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV93cml0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vdXRpbC1kZXByZWNhdGUvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmluZ19kZWNvZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fdHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHJlYW0tYnJvd3NlcmlmeS9+L3JlYWRhYmxlLXN0cmVhbS93cml0YWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL2R1cGxleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL3RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL3Bhc3N0aHJvdWdoLmpzIiwid2VicGFjazovLy8uL34vYnJvd3NlcmlmeS1hZXMvbW9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9icm93c2VyaWZ5LWFlcy9FVlBfQnl0ZXNUb0tleS5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL3N0cmVhbUNpcGhlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL21vZGVzL2VjYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL21vZGVzL2NiYy5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL3hvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL21vZGVzL2NmYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL21vZGVzL29mYi5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL21vZGVzL2N0ci5qcyIsIndlYnBhY2s6Ly8vLi9+L2Jyb3dzZXJpZnktYWVzL2RlY3J5cHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvVG9kby5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvQWRkVG9kb0Zvcm0uanN4Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL1RvZG9TZWFyY2guanN4Iiwid2VicGFjazovLy8uL2FwcC9hcGkvVG9kb0FQSS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL3N0eWxlcy9hcHAuc2Nzcz9iMjlmIiwid2VicGFjazovLy8uL2FwcC9zdHlsZXMvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwiZm91bmRhdGlvbiIsInJlcXVpcmUiLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIlRvZG9BcHAiLCJjcmVhdGVDbGFzcyIsImdldEluaXRpYWxTdGF0ZSIsInRvZG9zIiwiZ2V0VG9kb3MiLCJzaG93Q29tcGxldGVkIiwic2VhcmNoVGV4dCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInNldFRvZG9zIiwic3RhdGUiLCJoYW5kbGVTZWFyY2giLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVBZGRUb2RvIiwic2V0U3RhdGUiLCJ0b0xvd2VyQ2FzZSIsIm5ld1RvZG9UZXh0IiwiaWQiLCJ0ZXh0IiwiY29tcGxldGVkIiwidG9kb0lkIiwidXBkYXRlZFRvZG9zIiwibWFwIiwidG9kbyIsIlRvZG9MaXN0IiwicHJvcHMiLCJyZW5kZXJUb2RvcyIsIm9uVG9nZ2xlIiwiVG9kbyIsIkFkZFRvZG9Gb3JtIiwicHJvcFR5cGVzIiwib25BZGRUb2RvIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWZzIiwibmV3dG9kbyIsInZhbHVlIiwibGVuZ3RoIiwiZm9jdXMiLCJUb2RvU2VhcmNoIiwiY2hlY2tlZCIsIm9uU2VhcmNoIiwiVG9kb0FQSSIsImlzQXJyYXkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInN0cmluZ1RvZG9zIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLEdBQUVDLFFBQUYsRUFBWUMsVUFBWjs7QUFFQSxvQkFBQUMsQ0FBUSxHQUFSOztBQUVBO0FBQ0E7QUFDQSxvQkFBU0MsTUFBVCxDQUNFLHNEQURGLEVBRUVILFNBQVNJLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRixFOzs7Ozs7O0FDZkEseUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsS0FBSUMsVUFBVSxnQkFBTUMsV0FBTixDQUFrQjtBQUFBOztBQUM5QkMsb0JBQWlCLDJCQUFXO0FBQzFCLFlBQVE7QUFDTkMsY0FBTyxrQkFBUUMsUUFBUixFQUREOztBQUdOQyxzQkFBZSxLQUhUO0FBSU5DLG1CQUFZO0FBSk4sTUFBUjtBQU1ELElBUjZCOztBQVU5QkMsdUJBQW9CLDhCQUFXO0FBQzdCLHVCQUFRQyxRQUFSLENBQWlCLEtBQUtDLEtBQUwsQ0FBV04sS0FBNUI7QUFDRCxJQVo2Qjs7QUFjOUJMLFdBQVEsa0JBQVc7QUFBQSxTQUNaSyxLQURZLEdBQ0gsS0FBS00sS0FERixDQUNaTixLQURZOzs7QUFHakIsWUFDRTtBQUFBO0FBQUE7QUFDRSw2REFBWSxVQUFVLEtBQUtPLFlBQTNCLEdBREY7QUFFRSxvRUFBVSxPQUFPUCxLQUFqQixJQUE0QixLQUFLTSxLQUFqQyxJQUF3QyxVQUFVLEtBQUtFLFlBQXZELElBRkY7QUFHRSw4REFBYSxXQUFXLEtBQUtDLGFBQTdCO0FBSEYsTUFERjtBQU9ELElBeEI2Qjs7QUEwQjlCRixpQkFBYyxzQkFBU0wsYUFBVCxFQUF3QkMsVUFBeEIsRUFBb0M7QUFDaEQsVUFBS08sUUFBTCxDQUFjO0FBQ1pSLHNCQUFlQSxhQURIO0FBRVpDLG1CQUFZQSxXQUFXUSxXQUFYO0FBRkEsTUFBZDtBQUlELElBL0I2Qjs7QUFpQzlCRixrQkFBZSx1QkFBU0csV0FBVCxFQUFzQjtBQUNuQyxVQUFLRixRQUFMLENBQWM7QUFDWlYsMkNBQ0ssS0FBS00sS0FBTCxDQUFXTixLQURoQixJQUVFO0FBQ0VhLGFBQUkseUJBRE47QUFFRUMsZUFBTUYsV0FGUjtBQUdFRyxvQkFBVztBQUhiLFFBRkY7QUFEWSxNQUFkO0FBVUQsSUE1QzZCOztBQThDOUJQLGlCQUFjLHNCQUFTUSxNQUFULEVBQWlCO0FBQzdCLFNBQUlDLGVBQWUsS0FBS1gsS0FBTCxDQUFXTixLQUFYLENBQWlCa0IsR0FBakIsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFVO0FBQ2hELFdBQUlBLEtBQUtOLEVBQUwsS0FBWUcsTUFBaEIsRUFBdUI7QUFDckJHLGNBQUtKLFNBQUwsR0FBaUIsQ0FBQ0ksS0FBS0osU0FBdkI7QUFDRDs7QUFFRCxjQUFPSSxJQUFQO0FBQ0QsTUFOa0IsQ0FBbkI7O0FBUUEsVUFBS1QsUUFBTCxDQUFjO0FBQ1pWLGNBQU9pQjtBQURLLE1BQWQ7QUFHRDtBQTFENkIsRUFBbEIsQ0FBZDs7bUJBNkRlcEIsTzs7Ozs7O21DQ3JFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMEIsUUFBUTtBQUNsQyxrQ0FBaUMsaUNBQWlDO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBNkM7QUFDN0M7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXNDLEVBQUU7QUFDeEMscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFxQztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxtREFBdUIsYUFBYTs7O0FBR3BDLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7Ozs7Ozs7O0FDL1FEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLG1EQUFtRDtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFVBQVU7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0QsRUFBRTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBaUIsU0FBUztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSx5QkFBd0IsUUFBUTtBQUNoQztBQUNBLHNCQUFxQixlQUFlO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXFCLFNBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdEQUF1RCxPQUFPO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQsT0FBTztBQUM5RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBa0I7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsUUFBUTtBQUM3QjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsZ0JBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZSxpQkFBaUI7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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Q0E7QUFDQTs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBa0IsUUFBUTtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNEMsS0FBSzs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLG9DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1gsVUFBUztBQUNUO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQSxZQUFXLFNBQVM7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ3prQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixRQUFRO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxPQUFPLE9BQU87QUFDM0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7OztBQ2xKQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixRQUFRO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7Ozs7QUNuUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFnQixjQUFjO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixRQUFRO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFxQixnQkFBZ0I7QUFDckM7O0FBRUEsd0JBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFtQyxtQ0FBbUM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQix5Q0FBeUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLHlDQUF5QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsbUNBQW1DO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBLHFCOzs7Ozs7O0FDbk1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FDOUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdCQUFlLFNBQVM7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUc7QUFDSCxxQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQzdTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0EscUNBQWtDO0FBQ2xDLElBQUc7QUFDSCxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUcsYUFBYTtBQUNoQjtBQUNBO0FBQ0EsRUFBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRFQUEyRSw2RUFBNkU7QUFDeEo7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSx1REFBc0Q7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQTZEO0FBQzdEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBMkQ7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0RBQStDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsU0FBUztBQUM1QjtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNEU7O0FBRTVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFtRDtBQUNuRDtBQUNBLG9EQUFtRCxpRUFBaUU7QUFDcEg7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkMsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkMsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFnQyxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUM1NkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7Ozs7Ozs7O0FDMUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBOzs7Ozs7O0FDSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxR0EsZ0I7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZTtBQUNmLCtDQUE4QztBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWdDLE9BQU87QUFDdkM7QUFDQTtBQUNBLEU7Ozs7OztBQzFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRyxhQUFhO0FBQ2hCO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0wsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBa0Q7O0FBRWxEOztBQUVBLDRDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFtRDtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscURBQW9EO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUN6aUJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCLGlCQUFpQjtBQUN0QztBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTBDLHNCQUFzQixFQUFFO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFVO0FBQ1Y7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOzs7Ozs7Ozs7QUN4TEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixZQUFXLE9BQU87QUFDbEIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUSxPQUFPO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLFlBQVk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUssRUFBRTtBQUNQLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxFOzs7Ozs7QUNyTEE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDekJBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUMxR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVSxnQkFBZ0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIQTs7OztBQUNBOzs7Ozs7QUFFQSxLQUFJdUIsV0FBVyxnQkFBTXRCLFdBQU4sQ0FBa0I7QUFBQTs7QUFDL0JILFdBQVEsa0JBQVc7QUFBQTs7QUFBQSxTQUNaSyxLQURZLEdBQ0gsS0FBS3FC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Q0E7QUFDQSIsImZpbGUiOiIuL3B1YmxpYy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcbmltcG9ydCB7Um91dGUsIFJvdXRlciwgSW5kZXhSb3V0ZSwgaGFzaEhpc3Rvcnl9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IFRvZG9BcHAgZnJvbSBcIlRvZG9BcHBcIjtcclxuXHJcbi8vbG9hZCBmb3VuZGF0aW9uLXNpdGVzXHJcbi8vc3R5bGUhIGluamVjdCBzdHlsZSBpbiBodG1sXHJcbi8vY3NzISBsb2FkIGNzcyBmaWxlXHJcbi8vcmVxdWlyZShcInN0eWxlIWNzcyFmb3VuZGF0aW9uLXNpdGVzL2Rpc3QvZm91bmRhdGlvbi5taW4uY3NzXCIpO1xyXG4kKGRvY3VtZW50KS5mb3VuZGF0aW9uKCk7XHJcblxyXG5yZXF1aXJlKFwic3R5bGUhY3NzIXNhc3MhYXBwbGljYXRpb25TdHlsZXNcIik7XHJcblxyXG4vL3VzaW5nIGNyZWF0ZUNsYXNzIG1ldGhvZCxcclxuLy90aGUgbWV0aG9kIGluIHRoZSBjb21wb25lbnQgYXJlIGF1dG9tYXRpY2FsbHkgYm91bmQgdG8gY29tcG9uZW50IGl0c2VsZlxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPFRvZG9BcHAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxyXG4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBwLmpzeCIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXVpZCBmcm9tIFwibm9kZS11dWlkXCI7XHJcblxyXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSBcIlRvZG9MaXN0XCI7XHJcbmltcG9ydCBBZGRUb2RvRm9ybSBmcm9tIFwiQWRkVG9kb0Zvcm1cIjtcclxuaW1wb3J0IFRvZG9TZWFyY2ggZnJvbSBcIlRvZG9TZWFyY2hcIjtcclxuaW1wb3J0IFRvZG9BUEkgZnJvbSBcIlRvZG9BUElcIjtcclxuXHJcbnZhciBUb2RvQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgdG9kb3M6IFRvZG9BUEkuZ2V0VG9kb3MoKSxcclxuXHJcbiAgICAgIHNob3dDb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICBzZWFyY2hUZXh0OiBcIlwiXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgVG9kb0FQSS5zZXRUb2Rvcyh0aGlzLnN0YXRlLnRvZG9zKTtcclxuICB9LFxyXG5cclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHt0b2Rvc30gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRvZG9TZWFyY2ggb25TZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofS8+XHJcbiAgICAgICAgPFRvZG9MaXN0IHRvZG9zPXt0b2Rvc30gey4uLnRoaXMuc3RhdGV9IG9uVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZX0vPlxyXG4gICAgICAgIDxBZGRUb2RvRm9ybSBvbkFkZFRvZG89e3RoaXMuaGFuZGxlQWRkVG9kb30vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSxcclxuXHJcbiAgaGFuZGxlU2VhcmNoOiBmdW5jdGlvbihzaG93Q29tcGxldGVkLCBzZWFyY2hUZXh0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2hvd0NvbXBsZXRlZDogc2hvd0NvbXBsZXRlZCxcclxuICAgICAgc2VhcmNoVGV4dDogc2VhcmNoVGV4dC50b0xvd2VyQ2FzZSgpXHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBoYW5kbGVBZGRUb2RvOiBmdW5jdGlvbihuZXdUb2RvVGV4dCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRvZG9zOiBbXHJcbiAgICAgICAgLi4udGhpcy5zdGF0ZS50b2RvcyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogdXVpZCgpLFxyXG4gICAgICAgICAgdGV4dDogbmV3VG9kb1RleHQsXHJcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9KVxyXG4gIH0sXHJcblxyXG4gIGhhbmRsZVRvZ2dsZTogZnVuY3Rpb24odG9kb0lkKSB7XHJcbiAgICB2YXIgdXBkYXRlZFRvZG9zID0gdGhpcy5zdGF0ZS50b2Rvcy5tYXAoKHRvZG8pID0+IHtcclxuICAgICAgaWYgKHRvZG8uaWQgPT09IHRvZG9JZCl7XHJcbiAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2RvO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHRvZG9zOiB1cGRhdGVkVG9kb3NcclxuICAgIH0pO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Ub2RvQXBwLmpzeCIsIi8vICAgICB1dWlkLmpzXG4vL1xuLy8gICAgIENvcHlyaWdodCAoYykgMjAxMC0yMDEyIFJvYmVydCBLaWVmZmVyXG4vLyAgICAgTUlUIExpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cbi8qZ2xvYmFsIHdpbmRvdywgcmVxdWlyZSwgZGVmaW5lICovXG4oZnVuY3Rpb24oX3dpbmRvdykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gIFdlIGZlYXR1cmVcbiAgLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcbiAgLy8gcmV0dXJucyAxMjgtYml0cyBvZiByYW5kb21uZXNzLCBzaW5jZSB0aGF0J3Mgd2hhdCdzIHVzdWFsbHkgcmVxdWlyZWRcbiAgdmFyIF9ybmcsIF9tYXRoUk5HLCBfbm9kZVJORywgX3doYXR3Z1JORywgX3ByZXZpb3VzUm9vdDtcblxuICBmdW5jdGlvbiBzZXR1cEJyb3dzZXIoKSB7XG4gICAgLy8gQWxsb3cgZm9yIE1TSUUxMSBtc0NyeXB0b1xuICAgIHZhciBfY3J5cHRvID0gX3dpbmRvdy5jcnlwdG8gfHwgX3dpbmRvdy5tc0NyeXB0bztcblxuICAgIGlmICghX3JuZyAmJiBfY3J5cHRvICYmIF9jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAvLyBXSEFUV0cgY3J5cHRvLWJhc2VkIFJORyAtIGh0dHA6Ly93aWtpLndoYXR3Zy5vcmcvd2lraS9DcnlwdG9cbiAgICAgIC8vXG4gICAgICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9ybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbiAgICAgICAgX3doYXR3Z1JORyA9IF9ybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgICAgICAgX2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoX3JuZHM4KTtcbiAgICAgICAgICByZXR1cm4gX3JuZHM4O1xuICAgICAgICB9O1xuICAgICAgICBfcm5nKCk7XG4gICAgICB9IGNhdGNoKGUpIHt9XG4gICAgfVxuXG4gICAgaWYgKCFfcm5nKSB7XG4gICAgICAvLyBNYXRoLnJhbmRvbSgpLWJhc2VkIChSTkcpXG4gICAgICAvL1xuICAgICAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgICAgIC8vIHF1YWxpdHkuXG4gICAgICB2YXIgIF9ybmRzID0gbmV3IEFycmF5KDE2KTtcbiAgICAgIF9tYXRoUk5HID0gX3JuZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgcjsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICBpZiAoKGkgJiAweDAzKSA9PT0gMCkgeyByID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwOyB9XG4gICAgICAgICAgX3JuZHNbaV0gPSByID4+PiAoKGkgJiAweDAzKSA8PCAzKSAmIDB4ZmY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JuZHM7XG4gICAgICB9O1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgY29uc29sZSAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiW1NFQ1VSSVRZXSBub2RlLXV1aWQ6IGNyeXB0byBub3QgdXNhYmxlLCBmYWxsaW5nIGJhY2sgdG8gaW5zZWN1cmUgTWF0aC5yYW5kb20oKVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXR1cE5vZGUoKSB7XG4gICAgLy8gTm9kZS5qcyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL25vZGVqcy5vcmcvZG9jcy92MC42LjIvYXBpL2NyeXB0by5odG1sXG4gICAgLy9cbiAgICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgcmVxdWlyZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF9yYiA9IHJlcXVpcmUoJ2NyeXB0bycpLnJhbmRvbUJ5dGVzO1xuICAgICAgICBfbm9kZVJORyA9IF9ybmcgPSBfcmIgJiYgZnVuY3Rpb24oKSB7cmV0dXJuIF9yYigxNik7fTtcbiAgICAgICAgX3JuZygpO1xuICAgICAgfSBjYXRjaChlKSB7fVxuICAgIH1cbiAgfVxuXG4gIGlmIChfd2luZG93KSB7XG4gICAgc2V0dXBCcm93c2VyKCk7XG4gIH0gZWxzZSB7XG4gICAgc2V0dXBOb2RlKCk7XG4gIH1cblxuICAvLyBCdWZmZXIgY2xhc3MgdG8gdXNlXG4gIHZhciBCdWZmZXJDbGFzcyA9ICgnZnVuY3Rpb24nID09PSB0eXBlb2YgQnVmZmVyKSA/IEJ1ZmZlciA6IEFycmF5O1xuXG4gIC8vIE1hcHMgZm9yIG51bWJlciA8LT4gaGV4IHN0cmluZyBjb252ZXJzaW9uXG4gIHZhciBfYnl0ZVRvSGV4ID0gW107XG4gIHZhciBfaGV4VG9CeXRlID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgICBfYnl0ZVRvSGV4W2ldID0gKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnN1YnN0cigxKTtcbiAgICBfaGV4VG9CeXRlW19ieXRlVG9IZXhbaV1dID0gaTtcbiAgfVxuXG4gIC8vICoqYHBhcnNlKClgIC0gUGFyc2UgYSBVVUlEIGludG8gaXQncyBjb21wb25lbnQgYnl0ZXMqKlxuICBmdW5jdGlvbiBwYXJzZShzLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gKGJ1ZiAmJiBvZmZzZXQpIHx8IDAsIGlpID0gMDtcblxuICAgIGJ1ZiA9IGJ1ZiB8fCBbXTtcbiAgICBzLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWzAtOWEtZl17Mn0vZywgZnVuY3Rpb24ob2N0KSB7XG4gICAgICBpZiAoaWkgPCAxNikgeyAvLyBEb24ndCBvdmVyZmxvdyFcbiAgICAgICAgYnVmW2kgKyBpaSsrXSA9IF9oZXhUb0J5dGVbb2N0XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFplcm8gb3V0IHJlbWFpbmluZyBieXRlcyBpZiBzdHJpbmcgd2FzIHNob3J0XG4gICAgd2hpbGUgKGlpIDwgMTYpIHtcbiAgICAgIGJ1ZltpICsgaWkrK10gPSAwO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICAvLyAqKmB1bnBhcnNlKClgIC0gQ29udmVydCBVVUlEIGJ5dGUgYXJyYXkgKGFsYSBwYXJzZSgpKSBpbnRvIGEgc3RyaW5nKipcbiAgZnVuY3Rpb24gdW5wYXJzZShidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gb2Zmc2V0IHx8IDAsIGJ0aCA9IF9ieXRlVG9IZXg7XG4gICAgcmV0dXJuICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXTtcbiAgfVxuXG4gIC8vICoqYHYxKClgIC0gR2VuZXJhdGUgdGltZS1iYXNlZCBVVUlEKipcbiAgLy9cbiAgLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbiAgLy8gYW5kIGh0dHA6Ly9kb2NzLnB5dGhvbi5vcmcvbGlicmFyeS91dWlkLmh0bWxcblxuICAvLyByYW5kb20gIydzIHdlIG5lZWQgdG8gaW5pdCBub2RlIGFuZCBjbG9ja3NlcVxuICB2YXIgX3NlZWRCeXRlcyA9IF9ybmcoKTtcblxuICAvLyBQZXIgNC41LCBjcmVhdGUgYW5kIDQ4LWJpdCBub2RlIGlkLCAoNDcgcmFuZG9tIGJpdHMgKyBtdWx0aWNhc3QgYml0ID0gMSlcbiAgdmFyIF9ub2RlSWQgPSBbXG4gICAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gICAgX3NlZWRCeXRlc1sxXSwgX3NlZWRCeXRlc1syXSwgX3NlZWRCeXRlc1szXSwgX3NlZWRCeXRlc1s0XSwgX3NlZWRCeXRlc1s1XVxuICBdO1xuXG4gIC8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG4gIHZhciBfY2xvY2tzZXEgPSAoX3NlZWRCeXRlc1s2XSA8PCA4IHwgX3NlZWRCeXRlc1s3XSkgJiAweDNmZmY7XG5cbiAgLy8gUHJldmlvdXMgdXVpZCBjcmVhdGlvbiB0aW1lXG4gIHZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9icm9vZmEvbm9kZS11dWlkIGZvciBBUEkgZGV0YWlsc1xuICBmdW5jdGlvbiB2MShvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICAgIHZhciBiID0gYnVmIHx8IFtdO1xuXG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICB2YXIgY2xvY2tzZXEgPSAob3B0aW9ucy5jbG9ja3NlcSAhPSBudWxsKSA/IG9wdGlvbnMuY2xvY2tzZXEgOiBfY2xvY2tzZXE7XG5cbiAgICAvLyBVVUlEIHRpbWVzdGFtcHMgYXJlIDEwMCBuYW5vLXNlY29uZCB1bml0cyBzaW5jZSB0aGUgR3JlZ29yaWFuIGVwb2NoLFxuICAgIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gICAgLy8gdGltZSBpcyBoYW5kbGVkIGludGVybmFsbHkgYXMgJ21zZWNzJyAoaW50ZWdlciBtaWxsaXNlY29uZHMpIGFuZCAnbnNlY3MnXG4gICAgLy8gKDEwMC1uYW5vc2Vjb25kcyBvZmZzZXQgZnJvbSBtc2Vjcykgc2luY2UgdW5peCBlcG9jaCwgMTk3MC0wMS0wMSAwMDowMC5cbiAgICB2YXIgbXNlY3MgPSAob3B0aW9ucy5tc2VjcyAhPSBudWxsKSA/IG9wdGlvbnMubXNlY3MgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIC8vIFBlciA0LjIuMS4yLCB1c2UgY291bnQgb2YgdXVpZCdzIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGN1cnJlbnQgY2xvY2tcbiAgICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICAgIHZhciBuc2VjcyA9IChvcHRpb25zLm5zZWNzICE9IG51bGwpID8gb3B0aW9ucy5uc2VjcyA6IF9sYXN0TlNlY3MgKyAxO1xuXG4gICAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICAgIHZhciBkdCA9IChtc2VjcyAtIF9sYXN0TVNlY3MpICsgKG5zZWNzIC0gX2xhc3ROU2VjcykvMTAwMDA7XG5cbiAgICAvLyBQZXIgNC4yLjEuMiwgQnVtcCBjbG9ja3NlcSBvbiBjbG9jayByZWdyZXNzaW9uXG4gICAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09IG51bGwpIHtcbiAgICAgIGNsb2Nrc2VxID0gY2xvY2tzZXEgKyAxICYgMHgzZmZmO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gICAgLy8gdGltZSBpbnRlcnZhbFxuICAgIGlmICgoZHQgPCAwIHx8IG1zZWNzID4gX2xhc3RNU2VjcykgJiYgb3B0aW9ucy5uc2VjcyA9PSBudWxsKSB7XG4gICAgICBuc2VjcyA9IDA7XG4gICAgfVxuXG4gICAgLy8gUGVyIDQuMi4xLjIgVGhyb3cgZXJyb3IgaWYgdG9vIG1hbnkgdXVpZHMgYXJlIHJlcXVlc3RlZFxuICAgIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd1dWlkLnYxKCk6IENhblxcJ3QgY3JlYXRlIG1vcmUgdGhhbiAxME0gdXVpZHMvc2VjJyk7XG4gICAgfVxuXG4gICAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICAgIF9sYXN0TlNlY3MgPSBuc2VjcztcbiAgICBfY2xvY2tzZXEgPSBjbG9ja3NlcTtcblxuICAgIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICAgIG1zZWNzICs9IDEyMjE5MjkyODAwMDAwO1xuXG4gICAgLy8gYHRpbWVfbG93YFxuICAgIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgICBiW2krK10gPSB0bCA+Pj4gMjQgJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsID4+PiAxNiAmIDB4ZmY7XG4gICAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICAgIGJbaSsrXSA9IHRsICYgMHhmZjtcblxuICAgIC8vIGB0aW1lX21pZGBcbiAgICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gICAgYltpKytdID0gdG1oID4+PiA4ICYgMHhmZjtcbiAgICBiW2krK10gPSB0bWggJiAweGZmO1xuXG4gICAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgICBiW2krK10gPSB0bWggPj4+IDI0ICYgMHhmIHwgMHgxMDsgLy8gaW5jbHVkZSB2ZXJzaW9uXG4gICAgYltpKytdID0gdG1oID4+PiAxNiAmIDB4ZmY7XG5cbiAgICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgICBiW2krK10gPSBjbG9ja3NlcSA+Pj4gOCB8IDB4ODA7XG5cbiAgICAvLyBgY2xvY2tfc2VxX2xvd2BcbiAgICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgICAvLyBgbm9kZWBcbiAgICB2YXIgbm9kZSA9IG9wdGlvbnMubm9kZSB8fCBfbm9kZUlkO1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgbisrKSB7XG4gICAgICBiW2kgKyBuXSA9IG5vZGVbbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IHVucGFyc2UoYik7XG4gIH1cblxuICAvLyAqKmB2NCgpYCAtIEdlbmVyYXRlIHJhbmRvbSBVVUlEKipcblxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG4gIGZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgLy8gRGVwcmVjYXRlZCAtICdmb3JtYXQnIGFyZ3VtZW50LCBhcyBzdXBwb3J0ZWQgaW4gdjEuMlxuICAgIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gICAgaWYgKHR5cGVvZihvcHRpb25zKSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGJ1ZiA9IChvcHRpb25zID09PSAnYmluYXJ5JykgPyBuZXcgQnVmZmVyQ2xhc3MoMTYpIDogbnVsbDtcbiAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IF9ybmcpKCk7XG5cbiAgICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gICAgcm5kc1s2XSA9IChybmRzWzZdICYgMHgwZikgfCAweDQwO1xuICAgIHJuZHNbOF0gPSAocm5kc1s4XSAmIDB4M2YpIHwgMHg4MDtcblxuICAgIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICAgIGlmIChidWYpIHtcbiAgICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCAxNjsgaWkrKykge1xuICAgICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBidWYgfHwgdW5wYXJzZShybmRzKTtcbiAgfVxuXG4gIC8vIEV4cG9ydCBwdWJsaWMgQVBJXG4gIHZhciB1dWlkID0gdjQ7XG4gIHV1aWQudjEgPSB2MTtcbiAgdXVpZC52NCA9IHY0O1xuICB1dWlkLnBhcnNlID0gcGFyc2U7XG4gIHV1aWQudW5wYXJzZSA9IHVucGFyc2U7XG4gIHV1aWQuQnVmZmVyQ2xhc3MgPSBCdWZmZXJDbGFzcztcbiAgdXVpZC5fcm5nID0gX3JuZztcbiAgdXVpZC5fbWF0aFJORyA9IF9tYXRoUk5HO1xuICB1dWlkLl9ub2RlUk5HID0gX25vZGVSTkc7XG4gIHV1aWQuX3doYXR3Z1JORyA9IF93aGF0d2dSTkc7XG5cbiAgaWYgKCgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBQdWJsaXNoIGFzIG5vZGUuanMgbW9kdWxlXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB1dWlkO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIFB1Ymxpc2ggYXMgQU1EIG1vZHVsZVxuICAgIGRlZmluZShmdW5jdGlvbigpIHtyZXR1cm4gdXVpZDt9KTtcblxuXG4gIH0gZWxzZSB7XG4gICAgLy8gUHVibGlzaCBhcyBnbG9iYWwgKGluIGJyb3dzZXJzKVxuICAgIF9wcmV2aW91c1Jvb3QgPSBfd2luZG93LnV1aWQ7XG5cbiAgICAvLyAqKmBub0NvbmZsaWN0KClgIC0gKGJyb3dzZXIgb25seSkgdG8gcmVzZXQgZ2xvYmFsICd1dWlkJyB2YXIqKlxuICAgIHV1aWQubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgX3dpbmRvdy51dWlkID0gX3ByZXZpb3VzUm9vdDtcbiAgICAgIHJldHVybiB1dWlkO1xuICAgIH07XG5cbiAgICBfd2luZG93LnV1aWQgPSB1dWlkO1xuICB9XG59KSgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHdpbmRvdyA/IHdpbmRvdyA6IG51bGwpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L25vZGUtdXVpZC91dWlkLmpzXG4vLyBtb2R1bGUgaWQgPSAyMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBUaGUgYnVmZmVyIG1vZHVsZSBmcm9tIG5vZGUuanMsIGZvciB0aGUgYnJvd3Nlci5cbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8ZmVyb3NzQGZlcm9zcy5vcmc+IDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2J1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIHBsYWNlSG9sZGVyc0NvdW50IChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG4gIC8vIGlmIHRoZXJlIGFyZSB0d28gcGxhY2Vob2xkZXJzLCB0aGFuIHRoZSB0d28gY2hhcmFjdGVycyBiZWZvcmUgaXRcbiAgLy8gcmVwcmVzZW50IG9uZSBieXRlXG4gIC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuICAvLyB0aGlzIGlzIGp1c3QgYSBjaGVhcCBoYWNrIHRvIG5vdCBkbyBpbmRleE9mIHR3aWNlXG4gIHJldHVybiBiNjRbbGVuIC0gMl0gPT09ICc9JyA/IDIgOiBiNjRbbGVuIC0gMV0gPT09ICc9JyA/IDEgOiAwXG59XG5cbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICAvLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbiAgcmV0dXJuIGI2NC5sZW5ndGggKiAzIC8gNCAtIHBsYWNlSG9sZGVyc0NvdW50KGI2NClcbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgaSwgaiwgbCwgdG1wLCBwbGFjZUhvbGRlcnMsIGFyclxuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuICBwbGFjZUhvbGRlcnMgPSBwbGFjZUhvbGRlcnNDb3VudChiNjQpXG5cbiAgYXJyID0gbmV3IEFycihsZW4gKiAzIC8gNCAtIHBsYWNlSG9sZGVycylcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIGwgPSBwbGFjZUhvbGRlcnMgPiAwID8gbGVuIC0gNCA6IGxlblxuXG4gIHZhciBMID0gMFxuXG4gIGZvciAoaSA9IDAsIGogPSAwOyBpIDwgbDsgaSArPSA0LCBqICs9IDMpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfCAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHwgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHwgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbTCsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnMgPT09IDIpIHtcbiAgICB0bXAgPSAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltMKytdID0gdG1wICYgMHhGRlxuICB9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuICAgIHRtcCA9IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8IChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltMKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbTCsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICsgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgKHVpbnQ4W2kgKyAyXSlcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIG91dHB1dCA9ICcnXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsodWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKSkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBvdXRwdXQgKz0gbG9va3VwW3RtcCA+PiAyXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9ICc9PSdcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgKHVpbnQ4W2xlbiAtIDFdKVxuICAgIG91dHB1dCArPSBsb29rdXBbdG1wID4+IDEwXVxuICAgIG91dHB1dCArPSBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdXG4gICAgb3V0cHV0ICs9IGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl1cbiAgICBvdXRwdXQgKz0gJz0nXG4gIH1cblxuICBwYXJ0cy5wdXNoKG91dHB1dClcblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iYXNlNjQtanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIG5CaXRzID0gLTdcbiAgdmFyIGkgPSBpc0xFID8gKG5CeXRlcyAtIDEpIDogMFxuICB2YXIgZCA9IGlzTEUgPyAtMSA6IDFcbiAgdmFyIHMgPSBidWZmZXJbb2Zmc2V0ICsgaV1cblxuICBpICs9IGRcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKVxuICBzID4+PSAoLW5CaXRzKVxuICBuQml0cyArPSBlTGVuXG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gbSAqIDI1NiArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBydCA9IChtTGVuID09PSAyMyA/IE1hdGgucG93KDIsIC0yNCkgLSBNYXRoLnBvdygyLCAtNzcpIDogMClcbiAgdmFyIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKVxuICB2YXIgZCA9IGlzTEUgPyAxIDogLTFcbiAgdmFyIHMgPSB2YWx1ZSA8IDAgfHwgKHZhbHVlID09PSAwICYmIDEgLyB2YWx1ZSA8IDApID8gMSA6IDBcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKVxuXG4gIGlmIChpc05hTih2YWx1ZSkgfHwgdmFsdWUgPT09IEluZmluaXR5KSB7XG4gICAgbSA9IGlzTmFOKHZhbHVlKSA/IDEgOiAwXG4gICAgZSA9IGVNYXhcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMilcbiAgICBpZiAodmFsdWUgKiAoYyA9IE1hdGgucG93KDIsIC1lKSkgPCAxKSB7XG4gICAgICBlLS1cbiAgICAgIGMgKj0gMlxuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gY1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSArPSBydCAqIE1hdGgucG93KDIsIDEgLSBlQmlhcylcbiAgICB9XG4gICAgaWYgKHZhbHVlICogYyA+PSAyKSB7XG4gICAgICBlKytcbiAgICAgIGMgLz0gMlxuICAgIH1cblxuICAgIGlmIChlICsgZUJpYXMgPj0gZU1heCkge1xuICAgICAgbSA9IDBcbiAgICAgIGUgPSBlTWF4XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pZWVlNzU0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVmZmVyL34vaXNhcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBybmcgPSByZXF1aXJlKCcuL3JuZycpXG5cbmZ1bmN0aW9uIGVycm9yICgpIHtcbiAgdmFyIG0gPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuam9pbignICcpXG4gIHRocm93IG5ldyBFcnJvcihbXG4gICAgbSxcbiAgICAnd2UgYWNjZXB0IHB1bGwgcmVxdWVzdHMnLFxuICAgICdodHRwOi8vZ2l0aHViLmNvbS9kb21pbmljdGFyci9jcnlwdG8tYnJvd3NlcmlmeSdcbiAgICBdLmpvaW4oJ1xcbicpKVxufVxuXG5leHBvcnRzLmNyZWF0ZUhhc2ggPSByZXF1aXJlKCcuL2NyZWF0ZS1oYXNoJylcblxuZXhwb3J0cy5jcmVhdGVIbWFjID0gcmVxdWlyZSgnLi9jcmVhdGUtaG1hYycpXG5cbmV4cG9ydHMucmFuZG9tQnl0ZXMgPSBmdW5jdGlvbihzaXplLCBjYWxsYmFjaykge1xuICBpZiAoY2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbCkge1xuICAgIHRyeSB7XG4gICAgICBjYWxsYmFjay5jYWxsKHRoaXMsIHVuZGVmaW5lZCwgbmV3IEJ1ZmZlcihybmcoc2l6ZSkpKVxuICAgIH0gY2F0Y2ggKGVycikgeyBjYWxsYmFjayhlcnIpIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihybmcoc2l6ZSkpXG4gIH1cbn1cblxuZnVuY3Rpb24gZWFjaChhLCBmKSB7XG4gIGZvcih2YXIgaSBpbiBhKVxuICAgIGYoYVtpXSwgaSlcbn1cblxuZXhwb3J0cy5nZXRIYXNoZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbJ3NoYTEnLCAnc2hhMjU2JywgJ3NoYTUxMicsICdtZDUnLCAncm1kMTYwJ11cbn1cblxudmFyIHAgPSByZXF1aXJlKCcuL3Bia2RmMicpKGV4cG9ydHMpXG5leHBvcnRzLnBia2RmMiA9IHAucGJrZGYyXG5leHBvcnRzLnBia2RmMlN5bmMgPSBwLnBia2RmMlN5bmNcbnJlcXVpcmUoJ2Jyb3dzZXJpZnktYWVzL2luamVjdCcpKGV4cG9ydHMsIG1vZHVsZS5leHBvcnRzKTtcblxuLy8gdGhlIGxlYXN0IEkgY2FuIGRvIGlzIG1ha2UgZXJyb3IgbWVzc2FnZXMgZm9yIHRoZSByZXN0IG9mIHRoZSBub2RlLmpzL2NyeXB0byBhcGkuXG5lYWNoKFsnY3JlYXRlQ3JlZGVudGlhbHMnXG4sICdjcmVhdGVTaWduJ1xuLCAnY3JlYXRlVmVyaWZ5J1xuLCAnY3JlYXRlRGlmZmllSGVsbG1hbidcbl0sIGZ1bmN0aW9uIChuYW1lKSB7XG4gIGV4cG9ydHNbbmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgZXJyb3IoJ3NvcnJ5LCcsIG5hbWUsICdpcyBub3QgaW1wbGVtZW50ZWQgeWV0JylcbiAgfVxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jcnlwdG8tYnJvd3NlcmlmeS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGcgPSAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB3aW5kb3cgPyBnbG9iYWwgOiB3aW5kb3cpIHx8IHt9XG4gIF9jcnlwdG8gPSAoXG4gICAgZy5jcnlwdG8gfHwgZy5tc0NyeXB0byB8fCByZXF1aXJlKCdjcnlwdG8nKVxuICApXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2l6ZSkge1xuICAgIC8vIE1vZGVybiBCcm93c2Vyc1xuICAgIGlmKF9jcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB2YXIgYnl0ZXMgPSBuZXcgQnVmZmVyKHNpemUpOyAvL2luIGJyb3dzZXJpZnksIHRoaXMgaXMgYW4gZXh0ZW5kZWQgVWludDhBcnJheVxuICAgICAgLyogVGhpcyB3aWxsIG5vdCB3b3JrIGluIG9sZGVyIGJyb3dzZXJzLlxuICAgICAgICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS93aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlc1xuICAgICAgICovXG4gICAgXG4gICAgICBfY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhieXRlcyk7XG4gICAgICByZXR1cm4gYnl0ZXM7XG4gICAgfVxuICAgIGVsc2UgaWYgKF9jcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICAgIHJldHVybiBfY3J5cHRvLnJhbmRvbUJ5dGVzKHNpemUpXG4gICAgfVxuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3NlY3VyZSByYW5kb20gbnVtYmVyIGdlbmVyYXRpb24gbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXJcXG4nK1xuICAgICAgICAndXNlIGNocm9tZSwgRmlyZUZveCBvciBJbnRlcm5ldCBFeHBsb3JlciAxMSdcbiAgICAgIClcbiAgfVxufSgpKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NyeXB0by1icm93c2VyaWZ5L3JuZy5qc1xuLy8gbW9kdWxlIGlkID0gMjMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGNyeXB0byAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDIzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3JlYXRlSGFzaCA9IHJlcXVpcmUoJ3NoYS5qcycpXG5cbnZhciBtZDUgPSB0b0NvbnN0cnVjdG9yKHJlcXVpcmUoJy4vbWQ1JykpXG52YXIgcm1kMTYwID0gdG9Db25zdHJ1Y3RvcihyZXF1aXJlKCdyaXBlbWQxNjAnKSlcblxuZnVuY3Rpb24gdG9Db25zdHJ1Y3RvciAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYnVmZmVycyA9IFtdXG4gICAgdmFyIG09IHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gKGRhdGEsIGVuYykge1xuICAgICAgICBpZighQnVmZmVyLmlzQnVmZmVyKGRhdGEpKSBkYXRhID0gbmV3IEJ1ZmZlcihkYXRhLCBlbmMpXG4gICAgICAgIGJ1ZmZlcnMucHVzaChkYXRhKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgfSxcbiAgICAgIGRpZ2VzdDogZnVuY3Rpb24gKGVuYykge1xuICAgICAgICB2YXIgYnVmID0gQnVmZmVyLmNvbmNhdChidWZmZXJzKVxuICAgICAgICB2YXIgciA9IGZuKGJ1ZilcbiAgICAgICAgYnVmZmVycyA9IG51bGxcbiAgICAgICAgcmV0dXJuIGVuYyA/IHIudG9TdHJpbmcoZW5jKSA6IHJcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhbGcpIHtcbiAgaWYoJ21kNScgPT09IGFsZykgcmV0dXJuIG5ldyBtZDUoKVxuICBpZigncm1kMTYwJyA9PT0gYWxnKSByZXR1cm4gbmV3IHJtZDE2MCgpXG4gIHJldHVybiBjcmVhdGVIYXNoKGFsZylcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jcnlwdG8tYnJvd3NlcmlmeS9jcmVhdGUtaGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMjMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWxnKSB7XG4gIHZhciBBbGcgPSBleHBvcnRzW2FsZ11cbiAgaWYoIUFsZykgdGhyb3cgbmV3IEVycm9yKGFsZyArICcgaXMgbm90IHN1cHBvcnRlZCAod2UgYWNjZXB0IHB1bGwgcmVxdWVzdHMpJylcbiAgcmV0dXJuIG5ldyBBbGcoKVxufVxuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyXG52YXIgSGFzaCAgID0gcmVxdWlyZSgnLi9oYXNoJykoQnVmZmVyKVxuXG5leHBvcnRzLnNoYTEgPSByZXF1aXJlKCcuL3NoYTEnKShCdWZmZXIsIEhhc2gpXG5leHBvcnRzLnNoYTI1NiA9IHJlcXVpcmUoJy4vc2hhMjU2JykoQnVmZmVyLCBIYXNoKVxuZXhwb3J0cy5zaGE1MTIgPSByZXF1aXJlKCcuL3NoYTUxMicpKEJ1ZmZlciwgSGFzaClcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaGEuanMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCdWZmZXIpIHtcblxuICAvL3Byb3RvdHlwZSBjbGFzcyBmb3IgaGFzaCBmdW5jdGlvbnNcbiAgZnVuY3Rpb24gSGFzaCAoYmxvY2tTaXplLCBmaW5hbFNpemUpIHtcbiAgICB0aGlzLl9ibG9jayA9IG5ldyBCdWZmZXIoYmxvY2tTaXplKSAvL25ldyBVaW50MzJBcnJheShibG9ja1NpemUvNClcbiAgICB0aGlzLl9maW5hbFNpemUgPSBmaW5hbFNpemVcbiAgICB0aGlzLl9ibG9ja1NpemUgPSBibG9ja1NpemVcbiAgICB0aGlzLl9sZW4gPSAwXG4gICAgdGhpcy5fcyA9IDBcbiAgfVxuXG4gIEhhc2gucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fcyA9IDBcbiAgICB0aGlzLl9sZW4gPSAwXG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSwgZW5jKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT09IHR5cGVvZiBkYXRhKSB7XG4gICAgICBlbmMgPSBlbmMgfHwgXCJ1dGY4XCJcbiAgICAgIGRhdGEgPSBuZXcgQnVmZmVyKGRhdGEsIGVuYylcbiAgICB9XG5cbiAgICB2YXIgbCA9IHRoaXMuX2xlbiArPSBkYXRhLmxlbmd0aFxuICAgIHZhciBzID0gdGhpcy5fcyA9ICh0aGlzLl9zIHx8IDApXG4gICAgdmFyIGYgPSAwXG4gICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2Jsb2NrXG5cbiAgICB3aGlsZSAocyA8IGwpIHtcbiAgICAgIHZhciB0ID0gTWF0aC5taW4oZGF0YS5sZW5ndGgsIGYgKyB0aGlzLl9ibG9ja1NpemUgLSAocyAlIHRoaXMuX2Jsb2NrU2l6ZSkpXG4gICAgICB2YXIgY2ggPSAodCAtIGYpXG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2g7IGkrKykge1xuICAgICAgICBidWZmZXJbKHMgJSB0aGlzLl9ibG9ja1NpemUpICsgaV0gPSBkYXRhW2kgKyBmXVxuICAgICAgfVxuXG4gICAgICBzICs9IGNoXG4gICAgICBmICs9IGNoXG5cbiAgICAgIGlmICgocyAlIHRoaXMuX2Jsb2NrU2l6ZSkgPT09IDApIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlKGJ1ZmZlcilcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fcyA9IHNcblxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoZW5jKSB7XG4gICAgLy8gU3VwcG9zZSB0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlIE0sIGluIGJpdHMsIGlzIGxcbiAgICB2YXIgbCA9IHRoaXMuX2xlbiAqIDhcblxuICAgIC8vIEFwcGVuZCB0aGUgYml0IDEgdG8gdGhlIGVuZCBvZiB0aGUgbWVzc2FnZVxuICAgIHRoaXMuX2Jsb2NrW3RoaXMuX2xlbiAlIHRoaXMuX2Jsb2NrU2l6ZV0gPSAweDgwXG5cbiAgICAvLyBhbmQgdGhlbiBrIHplcm8gYml0cywgd2hlcmUgayBpcyB0aGUgc21hbGxlc3Qgbm9uLW5lZ2F0aXZlIHNvbHV0aW9uIHRvIHRoZSBlcXVhdGlvbiAobCArIDEgKyBrKSA9PT0gZmluYWxTaXplIG1vZCBibG9ja1NpemVcbiAgICB0aGlzLl9ibG9jay5maWxsKDAsIHRoaXMuX2xlbiAlIHRoaXMuX2Jsb2NrU2l6ZSArIDEpXG5cbiAgICBpZiAobCAlICh0aGlzLl9ibG9ja1NpemUgKiA4KSA+PSB0aGlzLl9maW5hbFNpemUgKiA4KSB7XG4gICAgICB0aGlzLl91cGRhdGUodGhpcy5fYmxvY2spXG4gICAgICB0aGlzLl9ibG9jay5maWxsKDApXG4gICAgfVxuXG4gICAgLy8gdG8gdGhpcyBhcHBlbmQgdGhlIGJsb2NrIHdoaWNoIGlzIGVxdWFsIHRvIHRoZSBudW1iZXIgbCB3cml0dGVuIGluIGJpbmFyeVxuICAgIC8vIFRPRE86IGhhbmRsZSBjYXNlIHdoZXJlIGwgaXMgPiBNYXRoLnBvdygyLCAyOSlcbiAgICB0aGlzLl9ibG9jay53cml0ZUludDMyQkUobCwgdGhpcy5fYmxvY2tTaXplIC0gNClcblxuICAgIHZhciBoYXNoID0gdGhpcy5fdXBkYXRlKHRoaXMuX2Jsb2NrKSB8fCB0aGlzLl9oYXNoKClcblxuICAgIHJldHVybiBlbmMgPyBoYXNoLnRvU3RyaW5nKGVuYykgOiBoYXNoXG4gIH1cblxuICBIYXNoLnByb3RvdHlwZS5fdXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignX3VwZGF0ZSBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IHN1YmNsYXNzJylcbiAgfVxuXG4gIHJldHVybiBIYXNoXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hhLmpzL2hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuICogQSBKYXZhU2NyaXB0IGltcGxlbWVudGF0aW9uIG9mIHRoZSBTZWN1cmUgSGFzaCBBbGdvcml0aG0sIFNIQS0xLCBhcyBkZWZpbmVkXG4gKiBpbiBGSVBTIFBVQiAxODAtMVxuICogVmVyc2lvbiAyLjFhIENvcHlyaWdodCBQYXVsIEpvaG5zdG9uIDIwMDAgLSAyMDAyLlxuICogT3RoZXIgY29udHJpYnV0b3JzOiBHcmVnIEhvbHQsIEFuZHJldyBLZXBlcnQsIFlkbmFyLCBMb3N0aW5ldFxuICogRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIEJTRCBMaWNlbnNlXG4gKiBTZWUgaHR0cDovL3BhamhvbWUub3JnLnVrL2NyeXB0L21kNSBmb3IgZGV0YWlscy5cbiAqL1xuXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCd1dGlsJykuaW5oZXJpdHNcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQnVmZmVyLCBIYXNoKSB7XG5cbiAgdmFyIEEgPSAwfDBcbiAgdmFyIEIgPSA0fDBcbiAgdmFyIEMgPSA4fDBcbiAgdmFyIEQgPSAxMnwwXG4gIHZhciBFID0gMTZ8MFxuXG4gIHZhciBXID0gbmV3ICh0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyBBcnJheSA6IEludDMyQXJyYXkpKDgwKVxuXG4gIHZhciBQT09MID0gW11cblxuICBmdW5jdGlvbiBTaGExICgpIHtcbiAgICBpZihQT09MLmxlbmd0aClcbiAgICAgIHJldHVybiBQT09MLnBvcCgpLmluaXQoKVxuXG4gICAgaWYoISh0aGlzIGluc3RhbmNlb2YgU2hhMSkpIHJldHVybiBuZXcgU2hhMSgpXG4gICAgdGhpcy5fdyA9IFdcbiAgICBIYXNoLmNhbGwodGhpcywgMTYqNCwgMTQqNClcblxuICAgIHRoaXMuX2ggPSBudWxsXG4gICAgdGhpcy5pbml0KClcbiAgfVxuXG4gIGluaGVyaXRzKFNoYTEsIEhhc2gpXG5cbiAgU2hhMS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9hID0gMHg2NzQ1MjMwMVxuICAgIHRoaXMuX2IgPSAweGVmY2RhYjg5XG4gICAgdGhpcy5fYyA9IDB4OThiYWRjZmVcbiAgICB0aGlzLl9kID0gMHgxMDMyNTQ3NlxuICAgIHRoaXMuX2UgPSAweGMzZDJlMWYwXG5cbiAgICBIYXNoLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcylcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgU2hhMS5wcm90b3R5cGUuX1BPT0wgPSBQT09MXG4gIFNoYTEucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbiAoWCkge1xuXG4gICAgdmFyIGEsIGIsIGMsIGQsIGUsIF9hLCBfYiwgX2MsIF9kLCBfZVxuXG4gICAgYSA9IF9hID0gdGhpcy5fYVxuICAgIGIgPSBfYiA9IHRoaXMuX2JcbiAgICBjID0gX2MgPSB0aGlzLl9jXG4gICAgZCA9IF9kID0gdGhpcy5fZFxuICAgIGUgPSBfZSA9IHRoaXMuX2VcblxuICAgIHZhciB3ID0gdGhpcy5fd1xuXG4gICAgZm9yKHZhciBqID0gMDsgaiA8IDgwOyBqKyspIHtcbiAgICAgIHZhciBXID0gd1tqXSA9IGogPCAxNiA/IFgucmVhZEludDMyQkUoaio0KVxuICAgICAgICA6IHJvbCh3W2ogLSAzXSBeIHdbaiAtICA4XSBeIHdbaiAtIDE0XSBeIHdbaiAtIDE2XSwgMSlcblxuICAgICAgdmFyIHQgPSBhZGQoXG4gICAgICAgIGFkZChyb2woYSwgNSksIHNoYTFfZnQoaiwgYiwgYywgZCkpLFxuICAgICAgICBhZGQoYWRkKGUsIFcpLCBzaGExX2t0KGopKVxuICAgICAgKVxuXG4gICAgICBlID0gZFxuICAgICAgZCA9IGNcbiAgICAgIGMgPSByb2woYiwgMzApXG4gICAgICBiID0gYVxuICAgICAgYSA9IHRcbiAgICB9XG5cbiAgICB0aGlzLl9hID0gYWRkKGEsIF9hKVxuICAgIHRoaXMuX2IgPSBhZGQoYiwgX2IpXG4gICAgdGhpcy5fYyA9IGFkZChjLCBfYylcbiAgICB0aGlzLl9kID0gYWRkKGQsIF9kKVxuICAgIHRoaXMuX2UgPSBhZGQoZSwgX2UpXG4gIH1cblxuICBTaGExLnByb3RvdHlwZS5faGFzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihQT09MLmxlbmd0aCA8IDEwMCkgUE9PTC5wdXNoKHRoaXMpXG4gICAgdmFyIEggPSBuZXcgQnVmZmVyKDIwKVxuICAgIC8vY29uc29sZS5sb2codGhpcy5fYXwwLCB0aGlzLl9ifDAsIHRoaXMuX2N8MCwgdGhpcy5fZHwwLCB0aGlzLl9lfDApXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYXwwLCBBKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2J8MCwgQilcbiAgICBILndyaXRlSW50MzJCRSh0aGlzLl9jfDAsIEMpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZHwwLCBEKVxuICAgIEgud3JpdGVJbnQzMkJFKHRoaXMuX2V8MCwgRSlcbiAgICByZXR1cm4gSFxuICB9XG5cbiAgLypcbiAgICogUGVyZm9ybSB0aGUgYXBwcm9wcmlhdGUgdHJpcGxldCBjb21iaW5hdGlvbiBmdW5jdGlvbiBmb3IgdGhlIGN1cnJlbnRcbiAgICogaXRlcmF0aW9uXG4gICAqL1xuICBmdW5jdGlvbiBzaGExX2Z0KHQsIGIsIGMsIGQpIHtcbiAgICBpZih0IDwgMjApIHJldHVybiAoYiAmIGMpIHwgKCh+YikgJiBkKTtcbiAgICBpZih0IDwgNDApIHJldHVybiBiIF4gYyBeIGQ7XG4gICAgaWYodCA8IDYwKSByZXR1cm4gKGIgJiBjKSB8IChiICYgZCkgfCAoYyAmIGQpO1xuICAgIHJldHVybiBiIF4gYyBeIGQ7XG4gIH1cblxuICAvKlxuICAgKiBEZXRlcm1pbmUgdGhlIGFwcHJvcHJpYXRlIGFkZGl0aXZlIGNvbnN0YW50IGZvciB0aGUgY3VycmVudCBpdGVyYXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHNoYTFfa3QodCkge1xuICAgIHJldHVybiAodCA8IDIwKSA/ICAxNTE4NTAwMjQ5IDogKHQgPCA0MCkgPyAgMTg1OTc3NTM5MyA6XG4gICAgICAgICAgICh0IDwgNjApID8gLTE4OTQwMDc1ODggOiAtODk5NDk3NTE0O1xuICB9XG5cbiAgLypcbiAgICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICAgKiB0byB3b3JrIGFyb3VuZCBidWdzIGluIHNvbWUgSlMgaW50ZXJwcmV0ZXJzLlxuICAgKiAvL2RvbWluaWN0YXJyOiB0aGlzIGlzIDEwIHllYXJzIG9sZCwgc28gbWF5YmUgdGhpcyBjYW4gYmUgZHJvcHBlZD8pXG4gICAqXG4gICAqL1xuICBmdW5jdGlvbiBhZGQoeCwgeSkge1xuICAgIHJldHVybiAoeCArIHkgKSB8IDBcbiAgLy9sZXRzIHNlZSBob3cgdGhpcyBnb2VzIG9uIHRlc3RsaW5nLlxuICAvLyAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKTtcbiAgLy8gIHZhciBtc3cgPSAoeCA+PiAxNikgKyAoeSA+PiAxNikgKyAobHN3ID4+IDE2KTtcbiAgLy8gIHJldHVybiAobXN3IDw8IDE2KSB8IChsc3cgJiAweEZGRkYpO1xuICB9XG5cbiAgLypcbiAgICogQml0d2lzZSByb3RhdGUgYSAzMi1iaXQgbnVtYmVyIHRvIHRoZSBsZWZ0LlxuICAgKi9cbiAgZnVuY3Rpb24gcm9sKG51bSwgY250KSB7XG4gICAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xuICB9XG5cbiAgcmV0dXJuIFNoYTFcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaGEuanMvc2hhMS5qc1xuLy8gbW9kdWxlIGlkID0gMjM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG52YXIgZm9ybWF0UmVnRXhwID0gLyVbc2RqJV0vZztcbmV4cG9ydHMuZm9ybWF0ID0gZnVuY3Rpb24oZikge1xuICBpZiAoIWlzU3RyaW5nKGYpKSB7XG4gICAgdmFyIG9iamVjdHMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgb2JqZWN0cy5wdXNoKGluc3BlY3QoYXJndW1lbnRzW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3RzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIHZhciBpID0gMTtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgdmFyIHN0ciA9IFN0cmluZyhmKS5yZXBsYWNlKGZvcm1hdFJlZ0V4cCwgZnVuY3Rpb24oeCkge1xuICAgIGlmICh4ID09PSAnJSUnKSByZXR1cm4gJyUnO1xuICAgIGlmIChpID49IGxlbikgcmV0dXJuIHg7XG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICclcyc6IHJldHVybiBTdHJpbmcoYXJnc1tpKytdKTtcbiAgICAgIGNhc2UgJyVkJzogcmV0dXJuIE51bWJlcihhcmdzW2krK10pO1xuICAgICAgY2FzZSAnJWonOlxuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShhcmdzW2krK10pO1xuICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgcmV0dXJuICdbQ2lyY3VsYXJdJztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICB9KTtcbiAgZm9yICh2YXIgeCA9IGFyZ3NbaV07IGkgPCBsZW47IHggPSBhcmdzWysraV0pIHtcbiAgICBpZiAoaXNOdWxsKHgpIHx8ICFpc09iamVjdCh4KSkge1xuICAgICAgc3RyICs9ICcgJyArIHg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciArPSAnICcgKyBpbnNwZWN0KHgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RyO1xufTtcblxuXG4vLyBNYXJrIHRoYXQgYSBtZXRob2Qgc2hvdWxkIG5vdCBiZSB1c2VkLlxuLy8gUmV0dXJucyBhIG1vZGlmaWVkIGZ1bmN0aW9uIHdoaWNoIHdhcm5zIG9uY2UgYnkgZGVmYXVsdC5cbi8vIElmIC0tbm8tZGVwcmVjYXRpb24gaXMgc2V0LCB0aGVuIGl0IGlzIGEgbm8tb3AuXG5leHBvcnRzLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKGZuLCBtc2cpIHtcbiAgLy8gQWxsb3cgZm9yIGRlcHJlY2F0aW5nIHRoaW5ncyBpbiB0aGUgcHJvY2VzcyBvZiBzdGFydGluZyB1cC5cbiAgaWYgKGlzVW5kZWZpbmVkKGdsb2JhbC5wcm9jZXNzKSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlcHJlY2F0ZShmbiwgbXNnKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBpZiAocHJvY2Vzcy5ub0RlcHJlY2F0aW9uID09PSB0cnVlKSB7XG4gICAgcmV0dXJuIGZuO1xuICB9XG5cbiAgdmFyIHdhcm5lZCA9IGZhbHNlO1xuICBmdW5jdGlvbiBkZXByZWNhdGVkKCkge1xuICAgIGlmICghd2FybmVkKSB7XG4gICAgICBpZiAocHJvY2Vzcy50aHJvd0RlcHJlY2F0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgICAgfVxuICAgICAgd2FybmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICByZXR1cm4gZGVwcmVjYXRlZDtcbn07XG5cblxudmFyIGRlYnVncyA9IHt9O1xudmFyIGRlYnVnRW52aXJvbjtcbmV4cG9ydHMuZGVidWdsb2cgPSBmdW5jdGlvbihzZXQpIHtcbiAgaWYgKGlzVW5kZWZpbmVkKGRlYnVnRW52aXJvbikpXG4gICAgZGVidWdFbnZpcm9uID0gcHJvY2Vzcy5lbnYuTk9ERV9ERUJVRyB8fCAnJztcbiAgc2V0ID0gc2V0LnRvVXBwZXJDYXNlKCk7XG4gIGlmICghZGVidWdzW3NldF0pIHtcbiAgICBpZiAobmV3IFJlZ0V4cCgnXFxcXGInICsgc2V0ICsgJ1xcXFxiJywgJ2knKS50ZXN0KGRlYnVnRW52aXJvbikpIHtcbiAgICAgIHZhciBwaWQgPSBwcm9jZXNzLnBpZDtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBtc2cgPSBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCclcyAlZDogJXMnLCBzZXQsIHBpZCwgbXNnKTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnc1tzZXRdID0gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlYnVnc1tzZXRdO1xufTtcblxuXG4vKipcbiAqIEVjaG9zIHRoZSB2YWx1ZSBvZiBhIHZhbHVlLiBUcnlzIHRvIHByaW50IHRoZSB2YWx1ZSBvdXRcbiAqIGluIHRoZSBiZXN0IHdheSBwb3NzaWJsZSBnaXZlbiB0aGUgZGlmZmVyZW50IHR5cGVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBwcmludCBvdXQuXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25hbCBvcHRpb25zIG9iamVjdCB0aGF0IGFsdGVycyB0aGUgb3V0cHV0LlxuICovXG4vKiBsZWdhY3k6IG9iaiwgc2hvd0hpZGRlbiwgZGVwdGgsIGNvbG9ycyovXG5mdW5jdGlvbiBpbnNwZWN0KG9iaiwgb3B0cykge1xuICAvLyBkZWZhdWx0IG9wdGlvbnNcbiAgdmFyIGN0eCA9IHtcbiAgICBzZWVuOiBbXSxcbiAgICBzdHlsaXplOiBzdHlsaXplTm9Db2xvclxuICB9O1xuICAvLyBsZWdhY3kuLi5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMykgY3R4LmRlcHRoID0gYXJndW1lbnRzWzJdO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSA0KSBjdHguY29sb3JzID0gYXJndW1lbnRzWzNdO1xuICBpZiAoaXNCb29sZWFuKG9wdHMpKSB7XG4gICAgLy8gbGVnYWN5Li4uXG4gICAgY3R4LnNob3dIaWRkZW4gPSBvcHRzO1xuICB9IGVsc2UgaWYgKG9wdHMpIHtcbiAgICAvLyBnb3QgYW4gXCJvcHRpb25zXCIgb2JqZWN0XG4gICAgZXhwb3J0cy5fZXh0ZW5kKGN0eCwgb3B0cyk7XG4gIH1cbiAgLy8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LnNob3dIaWRkZW4pKSBjdHguc2hvd0hpZGRlbiA9IGZhbHNlO1xuICBpZiAoaXNVbmRlZmluZWQoY3R4LmRlcHRoKSkgY3R4LmRlcHRoID0gMjtcbiAgaWYgKGlzVW5kZWZpbmVkKGN0eC5jb2xvcnMpKSBjdHguY29sb3JzID0gZmFsc2U7XG4gIGlmIChpc1VuZGVmaW5lZChjdHguY3VzdG9tSW5zcGVjdCkpIGN0eC5jdXN0b21JbnNwZWN0ID0gdHJ1ZTtcbiAgaWYgKGN0eC5jb2xvcnMpIGN0eC5zdHlsaXplID0gc3R5bGl6ZVdpdGhDb2xvcjtcbiAgcmV0dXJuIGZvcm1hdFZhbHVlKGN0eCwgb2JqLCBjdHguZGVwdGgpO1xufVxuZXhwb3J0cy5pbnNwZWN0ID0gaW5zcGVjdDtcblxuXG4vLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0FOU0lfZXNjYXBlX2NvZGUjZ3JhcGhpY3Ncbmluc3BlY3QuY29sb3JzID0ge1xuICAnYm9sZCcgOiBbMSwgMjJdLFxuICAnaXRhbGljJyA6IFszLCAyM10sXG4gICd1bmRlcmxpbmUnIDogWzQsIDI0XSxcbiAgJ2ludmVyc2UnIDogWzcsIDI3XSxcbiAgJ3doaXRlJyA6IFszNywgMzldLFxuICAnZ3JleScgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyA6IFszMCwgMzldLFxuICAnYmx1ZScgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nIDogWzM2LCAzOV0sXG4gICdncmVlbicgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnIDogWzM1LCAzOV0sXG4gICdyZWQnIDogWzMxLCAzOV0sXG4gICd5ZWxsb3cnIDogWzMzLCAzOV1cbn07XG5cbi8vIERvbid0IHVzZSAnYmx1ZScgbm90IHZpc2libGUgb24gY21kLmV4ZVxuaW5zcGVjdC5zdHlsZXMgPSB7XG4gICdzcGVjaWFsJzogJ2N5YW4nLFxuICAnbnVtYmVyJzogJ3llbGxvdycsXG4gICdib29sZWFuJzogJ3llbGxvdycsXG4gICd1bmRlZmluZWQnOiAnZ3JleScsXG4gICdudWxsJzogJ2JvbGQnLFxuICAnc3RyaW5nJzogJ2dyZWVuJyxcbiAgJ2RhdGUnOiAnbWFnZW50YScsXG4gIC8vIFwibmFtZVwiOiBpbnRlbnRpb25hbGx5IG5vdCBzdHlsaW5nXG4gICdyZWdleHAnOiAncmVkJ1xufTtcblxuXG5mdW5jdGlvbiBzdHlsaXplV2l0aENvbG9yKHN0ciwgc3R5bGVUeXBlKSB7XG4gIHZhciBzdHlsZSA9IGluc3BlY3Quc3R5bGVzW3N0eWxlVHlwZV07XG5cbiAgaWYgKHN0eWxlKSB7XG4gICAgcmV0dXJuICdcXHUwMDFiWycgKyBpbnNwZWN0LmNvbG9yc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgICAnXFx1MDAxYlsnICsgaW5zcGVjdC5jb2xvcnNbc3R5bGVdWzFdICsgJ20nO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5mdW5jdGlvbiBzdHlsaXplTm9Db2xvcihzdHIsIHN0eWxlVHlwZSkge1xuICByZXR1cm4gc3RyO1xufVxuXG5cbmZ1bmN0aW9uIGFycmF5VG9IYXNoKGFycmF5KSB7XG4gIHZhciBoYXNoID0ge307XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbih2YWwsIGlkeCkge1xuICAgIGhhc2hbdmFsXSA9IHRydWU7XG4gIH0pO1xuXG4gIHJldHVybiBoYXNoO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdFZhbHVlKGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcykge1xuICAvLyBQcm92aWRlIGEgaG9vayBmb3IgdXNlci1zcGVjaWZpZWQgaW5zcGVjdCBmdW5jdGlvbnMuXG4gIC8vIENoZWNrIHRoYXQgdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggYW4gaW5zcGVjdCBmdW5jdGlvbiBvbiBpdFxuICBpZiAoY3R4LmN1c3RvbUluc3BlY3QgJiZcbiAgICAgIHZhbHVlICYmXG4gICAgICBpc0Z1bmN0aW9uKHZhbHVlLmluc3BlY3QpICYmXG4gICAgICAvLyBGaWx0ZXIgb3V0IHRoZSB1dGlsIG1vZHVsZSwgaXQncyBpbnNwZWN0IGZ1bmN0aW9uIGlzIHNwZWNpYWxcbiAgICAgIHZhbHVlLmluc3BlY3QgIT09IGV4cG9ydHMuaW5zcGVjdCAmJlxuICAgICAgLy8gQWxzbyBmaWx0ZXIgb3V0IGFueSBwcm90b3R5cGUgb2JqZWN0cyB1c2luZyB0aGUgY2lyY3VsYXIgY2hlY2suXG4gICAgICAhKHZhbHVlLmNvbnN0cnVjdG9yICYmIHZhbHVlLmNvbnN0cnVjdG9yLnByb3RvdHlwZSA9PT0gdmFsdWUpKSB7XG4gICAgdmFyIHJldCA9IHZhbHVlLmluc3BlY3QocmVjdXJzZVRpbWVzLCBjdHgpO1xuICAgIGlmICghaXNTdHJpbmcocmV0KSkge1xuICAgICAgcmV0ID0gZm9ybWF0VmFsdWUoY3R4LCByZXQsIHJlY3Vyc2VUaW1lcyk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvLyBQcmltaXRpdmUgdHlwZXMgY2Fubm90IGhhdmUgcHJvcGVydGllc1xuICB2YXIgcHJpbWl0aXZlID0gZm9ybWF0UHJpbWl0aXZlKGN0eCwgdmFsdWUpO1xuICBpZiAocHJpbWl0aXZlKSB7XG4gICAgcmV0dXJuIHByaW1pdGl2ZTtcbiAgfVxuXG4gIC8vIExvb2sgdXAgdGhlIGtleXMgb2YgdGhlIG9iamVjdC5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG4gIHZhciB2aXNpYmxlS2V5cyA9IGFycmF5VG9IYXNoKGtleXMpO1xuXG4gIGlmIChjdHguc2hvd0hpZGRlbikge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh2YWx1ZSk7XG4gIH1cblxuICAvLyBJRSBkb2Vzbid0IG1ha2UgZXJyb3IgZmllbGRzIG5vbi1lbnVtZXJhYmxlXG4gIC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9kd3c1MnNidCh2PXZzLjk0KS5hc3B4XG4gIGlmIChpc0Vycm9yKHZhbHVlKVxuICAgICAgJiYgKGtleXMuaW5kZXhPZignbWVzc2FnZScpID49IDAgfHwga2V5cy5pbmRleE9mKCdkZXNjcmlwdGlvbicpID49IDApKSB7XG4gICAgcmV0dXJuIGZvcm1hdEVycm9yKHZhbHVlKTtcbiAgfVxuXG4gIC8vIFNvbWUgdHlwZSBvZiBvYmplY3Qgd2l0aG91dCBwcm9wZXJ0aWVzIGNhbiBiZSBzaG9ydGN1dHRlZC5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB2YXIgbmFtZSA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKCdbRnVuY3Rpb24nICsgbmFtZSArICddJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gICAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGN0eC5zdHlsaXplKFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSksICdyZWdleHAnKTtcbiAgICB9XG4gICAgaWYgKGlzRGF0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSwgJ2RhdGUnKTtcbiAgICB9XG4gICAgaWYgKGlzRXJyb3IodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZm9ybWF0RXJyb3IodmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlID0gJycsIGFycmF5ID0gZmFsc2UsIGJyYWNlcyA9IFsneycsICd9J107XG5cbiAgLy8gTWFrZSBBcnJheSBzYXkgdGhhdCB0aGV5IGFyZSBBcnJheVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBhcnJheSA9IHRydWU7XG4gICAgYnJhY2VzID0gWydbJywgJ10nXTtcbiAgfVxuXG4gIC8vIE1ha2UgZnVuY3Rpb25zIHNheSB0aGF0IHRoZXkgYXJlIGZ1bmN0aW9uc1xuICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICB2YXIgbiA9IHZhbHVlLm5hbWUgPyAnOiAnICsgdmFsdWUubmFtZSA6ICcnO1xuICAgIGJhc2UgPSAnIFtGdW5jdGlvbicgKyBuICsgJ10nO1xuICB9XG5cbiAgLy8gTWFrZSBSZWdFeHBzIHNheSB0aGF0IHRoZXkgYXJlIFJlZ0V4cHNcbiAgaWYgKGlzUmVnRXhwKHZhbHVlKSkge1xuICAgIGJhc2UgPSAnICcgKyBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBkYXRlcyB3aXRoIHByb3BlcnRpZXMgZmlyc3Qgc2F5IHRoZSBkYXRlXG4gIGlmIChpc0RhdGUodmFsdWUpKSB7XG4gICAgYmFzZSA9ICcgJyArIERhdGUucHJvdG90eXBlLnRvVVRDU3RyaW5nLmNhbGwodmFsdWUpO1xuICB9XG5cbiAgLy8gTWFrZSBlcnJvciB3aXRoIG1lc3NhZ2UgZmlyc3Qgc2F5IHRoZSBlcnJvclxuICBpZiAoaXNFcnJvcih2YWx1ZSkpIHtcbiAgICBiYXNlID0gJyAnICsgZm9ybWF0RXJyb3IodmFsdWUpO1xuICB9XG5cbiAgaWYgKGtleXMubGVuZ3RoID09PSAwICYmICghYXJyYXkgfHwgdmFsdWUubGVuZ3RoID09IDApKSB7XG4gICAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyBicmFjZXNbMV07XG4gIH1cblxuICBpZiAocmVjdXJzZVRpbWVzIDwgMCkge1xuICAgIGlmIChpc1JlZ0V4cCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZShSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLCAncmVnZXhwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjdHguc3R5bGl6ZSgnW09iamVjdF0nLCAnc3BlY2lhbCcpO1xuICAgIH1cbiAgfVxuXG4gIGN0eC5zZWVuLnB1c2godmFsdWUpO1xuXG4gIHZhciBvdXRwdXQ7XG4gIGlmIChhcnJheSkge1xuICAgIG91dHB1dCA9IGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpO1xuICB9IGVsc2Uge1xuICAgIG91dHB1dCA9IGtleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZvcm1hdFByb3BlcnR5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleSwgYXJyYXkpO1xuICAgIH0pO1xuICB9XG5cbiAgY3R4LnNlZW4ucG9wKCk7XG5cbiAgcmV0dXJuIHJlZHVjZVRvU2luZ2xlU3RyaW5nKG91dHB1dCwgYmFzZSwgYnJhY2VzKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRQcmltaXRpdmUoY3R4LCB2YWx1ZSkge1xuICBpZiAoaXNVbmRlZmluZWQodmFsdWUpKVxuICAgIHJldHVybiBjdHguc3R5bGl6ZSgndW5kZWZpbmVkJywgJ3VuZGVmaW5lZCcpO1xuICBpZiAoaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgdmFyIHNpbXBsZSA9ICdcXCcnICsgSlNPTi5zdHJpbmdpZnkodmFsdWUpLnJlcGxhY2UoL15cInxcIiQvZywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXFwiL2csICdcIicpICsgJ1xcJyc7XG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKHNpbXBsZSwgJ3N0cmluZycpO1xuICB9XG4gIGlmIChpc051bWJlcih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdudW1iZXInKTtcbiAgaWYgKGlzQm9vbGVhbih2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCcnICsgdmFsdWUsICdib29sZWFuJyk7XG4gIC8vIEZvciBzb21lIHJlYXNvbiB0eXBlb2YgbnVsbCBpcyBcIm9iamVjdFwiLCBzbyBzcGVjaWFsIGNhc2UgaGVyZS5cbiAgaWYgKGlzTnVsbCh2YWx1ZSkpXG4gICAgcmV0dXJuIGN0eC5zdHlsaXplKCdudWxsJywgJ251bGwnKTtcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRFcnJvcih2YWx1ZSkge1xuICByZXR1cm4gJ1snICsgRXJyb3IucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICsgJ10nO1xufVxuXG5cbmZ1bmN0aW9uIGZvcm1hdEFycmF5KGN0eCwgdmFsdWUsIHJlY3Vyc2VUaW1lcywgdmlzaWJsZUtleXMsIGtleXMpIHtcbiAgdmFyIG91dHB1dCA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7ICsraSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSh2YWx1ZSwgU3RyaW5nKGkpKSkge1xuICAgICAgb3V0cHV0LnB1c2goZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cyxcbiAgICAgICAgICBTdHJpbmcoaSksIHRydWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0cHV0LnB1c2goJycpO1xuICAgIH1cbiAgfVxuICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKCFrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICBvdXRwdXQucHVzaChmb3JtYXRQcm9wZXJ0eShjdHgsIHZhbHVlLCByZWN1cnNlVGltZXMsIHZpc2libGVLZXlzLFxuICAgICAgICAgIGtleSwgdHJ1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cblxuZnVuY3Rpb24gZm9ybWF0UHJvcGVydHkoY3R4LCB2YWx1ZSwgcmVjdXJzZVRpbWVzLCB2aXNpYmxlS2V5cywga2V5LCBhcnJheSkge1xuICB2YXIgbmFtZSwgc3RyLCBkZXNjO1xuICBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih2YWx1ZSwga2V5KSB8fCB7IHZhbHVlOiB2YWx1ZVtrZXldIH07XG4gIGlmIChkZXNjLmdldCkge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tHZXR0ZXIvU2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9IGN0eC5zdHlsaXplKCdbR2V0dGVyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChkZXNjLnNldCkge1xuICAgICAgc3RyID0gY3R4LnN0eWxpemUoJ1tTZXR0ZXJdJywgJ3NwZWNpYWwnKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFoYXNPd25Qcm9wZXJ0eSh2aXNpYmxlS2V5cywga2V5KSkge1xuICAgIG5hbWUgPSAnWycgKyBrZXkgKyAnXSc7XG4gIH1cbiAgaWYgKCFzdHIpIHtcbiAgICBpZiAoY3R4LnNlZW4uaW5kZXhPZihkZXNjLnZhbHVlKSA8IDApIHtcbiAgICAgIGlmIChpc051bGwocmVjdXJzZVRpbWVzKSkge1xuICAgICAgICBzdHIgPSBmb3JtYXRWYWx1ZShjdHgsIGRlc2MudmFsdWUsIG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RyID0gZm9ybWF0VmFsdWUoY3R4LCBkZXNjLnZhbHVlLCByZWN1cnNlVGltZXMgLSAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHIuaW5kZXhPZignXFxuJykgPiAtMSkge1xuICAgICAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgICBzdHIgPSBzdHIuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAgJyArIGxpbmU7XG4gICAgICAgICAgfSkuam9pbignXFxuJykuc3Vic3RyKDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0ciA9ICdcXG4nICsgc3RyLnNwbGl0KCdcXG4nKS5tYXAoZnVuY3Rpb24obGluZSkge1xuICAgICAgICAgICAgcmV0dXJuICcgICAnICsgbGluZTtcbiAgICAgICAgICB9KS5qb2luKCdcXG4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHIgPSBjdHguc3R5bGl6ZSgnW0NpcmN1bGFyXScsICdzcGVjaWFsJyk7XG4gICAgfVxuICB9XG4gIGlmIChpc1VuZGVmaW5lZChuYW1lKSkge1xuICAgIGlmIChhcnJheSAmJiBrZXkubWF0Y2goL15cXGQrJC8pKSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBuYW1lID0gSlNPTi5zdHJpbmdpZnkoJycgKyBrZXkpO1xuICAgIGlmIChuYW1lLm1hdGNoKC9eXCIoW2EtekEtWl9dW2EtekEtWl8wLTldKilcIiQvKSkge1xuICAgICAgbmFtZSA9IG5hbWUuc3Vic3RyKDEsIG5hbWUubGVuZ3RoIC0gMik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ25hbWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvJy9nLCBcIlxcXFwnXCIpXG4gICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJylcbiAgICAgICAgICAgICAgICAgLnJlcGxhY2UoLyheXCJ8XCIkKS9nLCBcIidcIik7XG4gICAgICBuYW1lID0gY3R4LnN0eWxpemUobmFtZSwgJ3N0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJzogJyArIHN0cjtcbn1cblxuXG5mdW5jdGlvbiByZWR1Y2VUb1NpbmdsZVN0cmluZyhvdXRwdXQsIGJhc2UsIGJyYWNlcykge1xuICB2YXIgbnVtTGluZXNFc3QgPSAwO1xuICB2YXIgbGVuZ3RoID0gb3V0cHV0LnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICBudW1MaW5lc0VzdCsrO1xuICAgIGlmIChjdXIuaW5kZXhPZignXFxuJykgPj0gMCkgbnVtTGluZXNFc3QrKztcbiAgICByZXR1cm4gcHJldiArIGN1ci5yZXBsYWNlKC9cXHUwMDFiXFxbXFxkXFxkP20vZywgJycpLmxlbmd0aCArIDE7XG4gIH0sIDApO1xuXG4gIGlmIChsZW5ndGggPiA2MCkge1xuICAgIHJldHVybiBicmFjZXNbMF0gK1xuICAgICAgICAgICAoYmFzZSA9PT0gJycgPyAnJyA6IGJhc2UgKyAnXFxuICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgb3V0cHV0LmpvaW4oJyxcXG4gICcpICtcbiAgICAgICAgICAgJyAnICtcbiAgICAgICAgICAgYnJhY2VzWzFdO1xuICB9XG5cbiAgcmV0dXJuIGJyYWNlc1swXSArIGJhc2UgKyAnICcgKyBvdXRwdXQuam9pbignLCAnKSArICcgJyArIGJyYWNlc1sxXTtcbn1cblxuXG4vLyBOT1RFOiBUaGVzZSB0eXBlIGNoZWNraW5nIGZ1bmN0aW9ucyBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBgaW5zdGFuY2VvZmBcbi8vIGJlY2F1c2UgaXQgaXMgZnJhZ2lsZSBhbmQgY2FuIGJlIGVhc2lseSBmYWtlZCB3aXRoIGBPYmplY3QuY3JlYXRlKClgLlxuZnVuY3Rpb24gaXNBcnJheShhcikge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShhcik7XG59XG5leHBvcnRzLmlzQXJyYXkgPSBpc0FycmF5O1xuXG5mdW5jdGlvbiBpc0Jvb2xlYW4oYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnYm9vbGVhbic7XG59XG5leHBvcnRzLmlzQm9vbGVhbiA9IGlzQm9vbGVhbjtcblxuZnVuY3Rpb24gaXNOdWxsKGFyZykge1xuICByZXR1cm4gYXJnID09PSBudWxsO1xufVxuZXhwb3J0cy5pc051bGwgPSBpc051bGw7XG5cbmZ1bmN0aW9uIGlzTnVsbE9yVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbE9yVW5kZWZpbmVkID0gaXNOdWxsT3JVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ251bWJlcic7XG59XG5leHBvcnRzLmlzTnVtYmVyID0gaXNOdW1iZXI7XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N0cmluZyc7XG59XG5leHBvcnRzLmlzU3RyaW5nID0gaXNTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzU3ltYm9sKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ3N5bWJvbCc7XG59XG5leHBvcnRzLmlzU3ltYm9sID0gaXNTeW1ib2w7XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5leHBvcnRzLmlzVW5kZWZpbmVkID0gaXNVbmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHJlKSB7XG4gIHJldHVybiBpc09iamVjdChyZSkgJiYgb2JqZWN0VG9TdHJpbmcocmUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cbmV4cG9ydHMuaXNSZWdFeHAgPSBpc1JlZ0V4cDtcblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5leHBvcnRzLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIGlzRGF0ZShkKSB7XG4gIHJldHVybiBpc09iamVjdChkKSAmJiBvYmplY3RUb1N0cmluZyhkKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuZXhwb3J0cy5pc0RhdGUgPSBpc0RhdGU7XG5cbmZ1bmN0aW9uIGlzRXJyb3IoZSkge1xuICByZXR1cm4gaXNPYmplY3QoZSkgJiZcbiAgICAgIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IHJlcXVpcmUoJy4vc3VwcG9ydC9pc0J1ZmZlcicpO1xuXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyhvKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobyk7XG59XG5cblxuZnVuY3Rpb24gcGFkKG4pIHtcbiAgcmV0dXJuIG4gPCAxMCA/ICcwJyArIG4udG9TdHJpbmcoMTApIDogbi50b1N0cmluZygxMCk7XG59XG5cblxudmFyIG1vbnRocyA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLFxuICAgICAgICAgICAgICAnT2N0JywgJ05vdicsICdEZWMnXTtcblxuLy8gMjYgRmViIDE2OjE5OjM0XG5mdW5jdGlvbiB0aW1lc3RhbXAoKSB7XG4gIHZhciBkID0gbmV3IERhdGUoKTtcbiAgdmFyIHRpbWUgPSBbcGFkKGQuZ2V0SG91cnMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldE1pbnV0ZXMoKSksXG4gICAgICAgICAgICAgIHBhZChkLmdldFNlY29uZHMoKSldLmpvaW4oJzonKTtcbiAgcmV0dXJuIFtkLmdldERhdGUoKSwgbW9udGhzW2QuZ2V0TW9udGgoKV0sIHRpbWVdLmpvaW4oJyAnKTtcbn1cblxuXG4vLyBsb2cgaXMganVzdCBhIHRoaW4gd3JhcHBlciB0byBjb25zb2xlLmxvZyB0aGF0IHByZXBlbmRzIGEgdGltZXN0YW1wXG5leHBvcnRzLmxvZyA9IGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZygnJXMgLSAlcycsIHRpbWVzdGFtcCgpLCBleHBvcnRzLmZvcm1hdC5hcHBseShleHBvcnRzLCBhcmd1bWVudHMpKTtcbn07XG5cblxuLyoqXG4gKiBJbmhlcml0IHRoZSBwcm90b3R5cGUgbWV0aG9kcyBmcm9tIG9uZSBjb25zdHJ1Y3RvciBpbnRvIGFub3RoZXIuXG4gKlxuICogVGhlIEZ1bmN0aW9uLnByb3RvdHlwZS5pbmhlcml0cyBmcm9tIGxhbmcuanMgcmV3cml0dGVuIGFzIGEgc3RhbmRhbG9uZVxuICogZnVuY3Rpb24gKG5vdCBvbiBGdW5jdGlvbi5wcm90b3R5cGUpLiBOT1RFOiBJZiB0aGlzIGZpbGUgaXMgdG8gYmUgbG9hZGVkXG4gKiBkdXJpbmcgYm9vdHN0cmFwcGluZyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJld3JpdHRlbiB1c2luZyBzb21lIG5hdGl2ZVxuICogZnVuY3Rpb25zIGFzIHByb3RvdHlwZSBzZXR1cCB1c2luZyBub3JtYWwgSmF2YVNjcmlwdCBkb2VzIG5vdCB3b3JrIGFzXG4gKiBleHBlY3RlZCBkdXJpbmcgYm9vdHN0cmFwcGluZyAoc2VlIG1pcnJvci5qcyBpbiByMTE0OTAzKS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHdoaWNoIG5lZWRzIHRvIGluaGVyaXQgdGhlXG4gKiAgICAgcHJvdG90eXBlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gc3VwZXJDdG9yIENvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIGluaGVyaXQgcHJvdG90eXBlIGZyb20uXG4gKi9cbmV4cG9ydHMuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5leHBvcnRzLl9leHRlbmQgPSBmdW5jdGlvbihvcmlnaW4sIGFkZCkge1xuICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBhZGQgaXNuJ3QgYW4gb2JqZWN0XG4gIGlmICghYWRkIHx8ICFpc09iamVjdChhZGQpKSByZXR1cm4gb3JpZ2luO1xuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWRkKTtcbiAgdmFyIGkgPSBrZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIG9yaWdpbltrZXlzW2ldXSA9IGFkZFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91dGlsL3V0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyKGFyZykge1xuICByZXR1cm4gYXJnICYmIHR5cGVvZiBhcmcgPT09ICdvYmplY3QnXG4gICAgJiYgdHlwZW9mIGFyZy5jb3B5ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5maWxsID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIGFyZy5yZWFkVUludDggPT09ICdmdW5jdGlvbic7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3V0aWwvc3VwcG9ydC9pc0J1ZmZlckJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDIzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi91dGlsL34vaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBBIEphdmFTY3JpcHQgaW1wbGVtZW50YXRpb24gb2YgdGhlIFNlY3VyZSBIYXNoIEFsZ29yaXRobSwgU0hBLTI1NiwgYXMgZGVmaW5lZFxuICogaW4gRklQUyAxODAtMlxuICogVmVyc2lvbiAyLjItYmV0YSBDb3B5cmlnaHQgQW5nZWwgTWFyaW4sIFBhdWwgSm9obnN0b24gMjAwMCAtIDIwMDkuXG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKlxuICovXG5cbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ3V0aWwnKS5pbmhlcml0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCdWZmZXIsIEhhc2gpIHtcblxuICB2YXIgSyA9IFtcbiAgICAgIDB4NDI4QTJGOTgsIDB4NzEzNzQ0OTEsIDB4QjVDMEZCQ0YsIDB4RTlCNURCQTUsXG4gICAgICAweDM5NTZDMjVCLCAweDU5RjExMUYxLCAweDkyM0Y4MkE0LCAweEFCMUM1RUQ1LFxuICAgICAgMHhEODA3QUE5OCwgMHgxMjgzNUIwMSwgMHgyNDMxODVCRSwgMHg1NTBDN0RDMyxcbiAgICAgIDB4NzJCRTVENzQsIDB4ODBERUIxRkUsIDB4OUJEQzA2QTcsIDB4QzE5QkYxNzQsXG4gICAgICAweEU0OUI2OUMxLCAweEVGQkU0Nzg2LCAweDBGQzE5REM2LCAweDI0MENBMUNDLFxuICAgICAgMHgyREU5MkM2RiwgMHg0QTc0ODRBQSwgMHg1Q0IwQTlEQywgMHg3NkY5ODhEQSxcbiAgICAgIDB4OTgzRTUxNTIsIDB4QTgzMUM2NkQsIDB4QjAwMzI3QzgsIDB4QkY1OTdGQzcsXG4gICAgICAweEM2RTAwQkYzLCAweEQ1QTc5MTQ3LCAweDA2Q0E2MzUxLCAweDE0MjkyOTY3LFxuICAgICAgMHgyN0I3MEE4NSwgMHgyRTFCMjEzOCwgMHg0RDJDNkRGQywgMHg1MzM4MEQxMyxcbiAgICAgIDB4NjUwQTczNTQsIDB4NzY2QTBBQkIsIDB4ODFDMkM5MkUsIDB4OTI3MjJDODUsXG4gICAgICAweEEyQkZFOEExLCAweEE4MUE2NjRCLCAweEMyNEI4QjcwLCAweEM3NkM1MUEzLFxuICAgICAgMHhEMTkyRTgxOSwgMHhENjk5MDYyNCwgMHhGNDBFMzU4NSwgMHgxMDZBQTA3MCxcbiAgICAgIDB4MTlBNEMxMTYsIDB4MUUzNzZDMDgsIDB4Mjc0ODc3NEMsIDB4MzRCMEJDQjUsXG4gICAgICAweDM5MUMwQ0IzLCAweDRFRDhBQTRBLCAweDVCOUNDQTRGLCAweDY4MkU2RkYzLFxuICAgICAgMHg3NDhGODJFRSwgMHg3OEE1NjM2RiwgMHg4NEM4NzgxNCwgMHg4Q0M3MDIwOCxcbiAgICAgIDB4OTBCRUZGRkEsIDB4QTQ1MDZDRUIsIDB4QkVGOUEzRjcsIDB4QzY3MTc4RjJcbiAgICBdXG5cbiAgdmFyIFcgPSBuZXcgQXJyYXkoNjQpXG5cbiAgZnVuY3Rpb24gU2hhMjU2KCkge1xuICAgIHRoaXMuaW5pdCgpXG5cbiAgICB0aGlzLl93ID0gVyAvL25ldyBBcnJheSg2NClcblxuICAgIEhhc2guY2FsbCh0aGlzLCAxNio0LCAxNCo0KVxuICB9XG5cbiAgaW5oZXJpdHMoU2hhMjU2LCBIYXNoKVxuXG4gIFNoYTI1Ni5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHRoaXMuX2EgPSAweDZhMDllNjY3fDBcbiAgICB0aGlzLl9iID0gMHhiYjY3YWU4NXwwXG4gICAgdGhpcy5fYyA9IDB4M2M2ZWYzNzJ8MFxuICAgIHRoaXMuX2QgPSAweGE1NGZmNTNhfDBcbiAgICB0aGlzLl9lID0gMHg1MTBlNTI3ZnwwXG4gICAgdGhpcy5fZiA9IDB4OWIwNTY4OGN8MFxuICAgIHRoaXMuX2cgPSAweDFmODNkOWFifDBcbiAgICB0aGlzLl9oID0gMHg1YmUwY2QxOXwwXG5cbiAgICB0aGlzLl9sZW4gPSB0aGlzLl9zID0gMFxuXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIGZ1bmN0aW9uIFMgKFgsIG4pIHtcbiAgICByZXR1cm4gKFggPj4+IG4pIHwgKFggPDwgKDMyIC0gbikpO1xuICB9XG5cbiAgZnVuY3Rpb24gUiAoWCwgbikge1xuICAgIHJldHVybiAoWCA+Pj4gbik7XG4gIH1cblxuICBmdW5jdGlvbiBDaCAoeCwgeSwgeikge1xuICAgIHJldHVybiAoKHggJiB5KSBeICgofngpICYgeikpO1xuICB9XG5cbiAgZnVuY3Rpb24gTWFqICh4LCB5LCB6KSB7XG4gICAgcmV0dXJuICgoeCAmIHkpIF4gKHggJiB6KSBeICh5ICYgeikpO1xuICB9XG5cbiAgZnVuY3Rpb24gU2lnbWEwMjU2ICh4KSB7XG4gICAgcmV0dXJuIChTKHgsIDIpIF4gUyh4LCAxMykgXiBTKHgsIDIyKSk7XG4gIH1cblxuICBmdW5jdGlvbiBTaWdtYTEyNTYgKHgpIHtcbiAgICByZXR1cm4gKFMoeCwgNikgXiBTKHgsIDExKSBeIFMoeCwgMjUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEdhbW1hMDI1NiAoeCkge1xuICAgIHJldHVybiAoUyh4LCA3KSBeIFMoeCwgMTgpIF4gUih4LCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBHYW1tYTEyNTYgKHgpIHtcbiAgICByZXR1cm4gKFMoeCwgMTcpIF4gUyh4LCAxOSkgXiBSKHgsIDEwKSk7XG4gIH1cblxuICBTaGEyNTYucHJvdG90eXBlLl91cGRhdGUgPSBmdW5jdGlvbihNKSB7XG5cbiAgICB2YXIgVyA9IHRoaXMuX3dcbiAgICB2YXIgYSwgYiwgYywgZCwgZSwgZiwgZywgaFxuICAgIHZhciBUMSwgVDJcblxuICAgIGEgPSB0aGlzLl9hIHwgMFxuICAgIGIgPSB0aGlzLl9iIHwgMFxuICAgIGMgPSB0aGlzLl9jIHwgMFxuICAgIGQgPSB0aGlzLl9kIHwgMFxuICAgIGUgPSB0aGlzLl9lIHwgMFxuICAgIGYgPSB0aGlzLl9mIHwgMFxuICAgIGcgPSB0aGlzLl9nIHwgMFxuICAgIGggPSB0aGlzLl9oIHwgMFxuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCA2NDsgaisrKSB7XG4gICAgICB2YXIgdyA9IFdbal0gPSBqIDwgMTZcbiAgICAgICAgPyBNLnJlYWRJbnQzMkJFKGogKiA0KVxuICAgICAgICA6IEdhbW1hMTI1NihXW2ogLSAyXSkgKyBXW2ogLSA3XSArIEdhbW1hMDI1NihXW2ogLSAxNV0pICsgV1tqIC0gMTZdXG5cbiAgICAgIFQxID0gaCArIFNpZ21hMTI1NihlKSArIENoKGUsIGYsIGcpICsgS1tqXSArIHdcblxuICAgICAgVDIgPSBTaWdtYTAyNTYoYSkgKyBNYWooYSwgYiwgYyk7XG4gICAgICBoID0gZzsgZyA9IGY7IGYgPSBlOyBlID0gZCArIFQxOyBkID0gYzsgYyA9IGI7IGIgPSBhOyBhID0gVDEgKyBUMjtcbiAgICB9XG5cbiAgICB0aGlzLl9hID0gKGEgKyB0aGlzLl9hKSB8IDBcbiAgICB0aGlzLl9iID0gKGIgKyB0aGlzLl9iKSB8IDBcbiAgICB0aGlzLl9jID0gKGMgKyB0aGlzLl9jKSB8IDBcbiAgICB0aGlzLl9kID0gKGQgKyB0aGlzLl9kKSB8IDBcbiAgICB0aGlzLl9lID0gKGUgKyB0aGlzLl9lKSB8IDBcbiAgICB0aGlzLl9mID0gKGYgKyB0aGlzLl9mKSB8IDBcbiAgICB0aGlzLl9nID0gKGcgKyB0aGlzLl9nKSB8IDBcbiAgICB0aGlzLl9oID0gKGggKyB0aGlzLl9oKSB8IDBcblxuICB9O1xuXG4gIFNoYTI1Ni5wcm90b3R5cGUuX2hhc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEggPSBuZXcgQnVmZmVyKDMyKVxuXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYSwgIDApXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYiwgIDQpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fYywgIDgpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZCwgMTIpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZSwgMTYpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZiwgMjApXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5fZywgMjQpXG4gICAgSC53cml0ZUludDMyQkUodGhpcy5faCwgMjgpXG5cbiAgICByZXR1cm4gSFxuICB9XG5cbiAgcmV0dXJuIFNoYTI1NlxuXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc2hhLmpzL3NoYTI1Ni5qc1xuLy8gbW9kdWxlIGlkID0gMjM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ3V0aWwnKS5pbmhlcml0c1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCdWZmZXIsIEhhc2gpIHtcbiAgdmFyIEsgPSBbXG4gICAgMHg0MjhhMmY5OCwgMHhkNzI4YWUyMiwgMHg3MTM3NDQ5MSwgMHgyM2VmNjVjZCxcbiAgICAweGI1YzBmYmNmLCAweGVjNGQzYjJmLCAweGU5YjVkYmE1LCAweDgxODlkYmJjLFxuICAgIDB4Mzk1NmMyNWIsIDB4ZjM0OGI1MzgsIDB4NTlmMTExZjEsIDB4YjYwNWQwMTksXG4gICAgMHg5MjNmODJhNCwgMHhhZjE5NGY5YiwgMHhhYjFjNWVkNSwgMHhkYTZkODExOCxcbiAgICAweGQ4MDdhYTk4LCAweGEzMDMwMjQyLCAweDEyODM1YjAxLCAweDQ1NzA2ZmJlLFxuICAgIDB4MjQzMTg1YmUsIDB4NGVlNGIyOGMsIDB4NTUwYzdkYzMsIDB4ZDVmZmI0ZTIsXG4gICAgMHg3MmJlNWQ3NCwgMHhmMjdiODk2ZiwgMHg4MGRlYjFmZSwgMHgzYjE2OTZiMSxcbiAgICAweDliZGMwNmE3LCAweDI1YzcxMjM1LCAweGMxOWJmMTc0LCAweGNmNjkyNjk0LFxuICAgIDB4ZTQ5YjY5YzEsIDB4OWVmMTRhZDIsIDB4ZWZiZTQ3ODYsIDB4Mzg0ZjI1ZTMsXG4gICAgMHgwZmMxOWRjNiwgMHg4YjhjZDViNSwgMHgyNDBjYTFjYywgMHg3N2FjOWM2NSxcbiAgICAweDJkZTkyYzZmLCAweDU5MmIwMjc1LCAweDRhNzQ4NGFhLCAweDZlYTZlNDgzLFxuICAgIDB4NWNiMGE5ZGMsIDB4YmQ0MWZiZDQsIDB4NzZmOTg4ZGEsIDB4ODMxMTUzYjUsXG4gICAgMHg5ODNlNTE1MiwgMHhlZTY2ZGZhYiwgMHhhODMxYzY2ZCwgMHgyZGI0MzIxMCxcbiAgICAweGIwMDMyN2M4LCAweDk4ZmIyMTNmLCAweGJmNTk3ZmM3LCAweGJlZWYwZWU0LFxuICAgIDB4YzZlMDBiZjMsIDB4M2RhODhmYzIsIDB4ZDVhNzkxNDcsIDB4OTMwYWE3MjUsXG4gICAgMHgwNmNhNjM1MSwgMHhlMDAzODI2ZiwgMHgxNDI5Mjk2NywgMHgwYTBlNmU3MCxcbiAgICAweDI3YjcwYTg1LCAweDQ2ZDIyZmZjLCAweDJlMWIyMTM4LCAweDVjMjZjOTI2LFxuICAgIDB4NGQyYzZkZmMsIDB4NWFjNDJhZWQsIDB4NTMzODBkMTMsIDB4OWQ5NWIzZGYsXG4gICAgMHg2NTBhNzM1NCwgMHg4YmFmNjNkZSwgMHg3NjZhMGFiYiwgMHgzYzc3YjJhOCxcbiAgICAweDgxYzJjOTJlLCAweDQ3ZWRhZWU2LCAweDkyNzIyYzg1LCAweDE0ODIzNTNiLFxuICAgIDB4YTJiZmU4YTEsIDB4NGNmMTAzNjQsIDB4YTgxYTY2NGIsIDB4YmM0MjMwMDEsXG4gICAgMHhjMjRiOGI3MCwgMHhkMGY4OTc5MSwgMHhjNzZjNTFhMywgMHgwNjU0YmUzMCxcbiAgICAweGQxOTJlODE5LCAweGQ2ZWY1MjE4LCAweGQ2OTkwNjI0LCAweDU1NjVhOTEwLFxuICAgIDB4ZjQwZTM1ODUsIDB4NTc3MTIwMmEsIDB4MTA2YWEwNzAsIDB4MzJiYmQxYjgsXG4gICAgMHgxOWE0YzExNiwgMHhiOGQyZDBjOCwgMHgxZTM3NmMwOCwgMHg1MTQxYWI1MyxcbiAgICAweDI3NDg3NzRjLCAweGRmOGVlYjk5LCAweDM0YjBiY2I1LCAweGUxOWI0OGE4LFxuICAgIDB4MzkxYzBjYjMsIDB4YzVjOTVhNjMsIDB4NGVkOGFhNGEsIDB4ZTM0MThhY2IsXG4gICAgMHg1YjljY2E0ZiwgMHg3NzYzZTM3MywgMHg2ODJlNmZmMywgMHhkNmIyYjhhMyxcbiAgICAweDc0OGY4MmVlLCAweDVkZWZiMmZjLCAweDc4YTU2MzZmLCAweDQzMTcyZjYwLFxuICAgIDB4ODRjODc4MTQsIDB4YTFmMGFiNzIsIDB4OGNjNzAyMDgsIDB4MWE2NDM5ZWMsXG4gICAgMHg5MGJlZmZmYSwgMHgyMzYzMWUyOCwgMHhhNDUwNmNlYiwgMHhkZTgyYmRlOSxcbiAgICAweGJlZjlhM2Y3LCAweGIyYzY3OTE1LCAweGM2NzE3OGYyLCAweGUzNzI1MzJiLFxuICAgIDB4Y2EyNzNlY2UsIDB4ZWEyNjYxOWMsIDB4ZDE4NmI4YzcsIDB4MjFjMGMyMDcsXG4gICAgMHhlYWRhN2RkNiwgMHhjZGUwZWIxZSwgMHhmNTdkNGY3ZiwgMHhlZTZlZDE3OCxcbiAgICAweDA2ZjA2N2FhLCAweDcyMTc2ZmJhLCAweDBhNjM3ZGM1LCAweGEyYzg5OGE2LFxuICAgIDB4MTEzZjk4MDQsIDB4YmVmOTBkYWUsIDB4MWI3MTBiMzUsIDB4MTMxYzQ3MWIsXG4gICAgMHgyOGRiNzdmNSwgMHgyMzA0N2Q4NCwgMHgzMmNhYWI3YiwgMHg0MGM3MjQ5MyxcbiAgICAweDNjOWViZTBhLCAweDE1YzliZWJjLCAweDQzMWQ2N2M0LCAweDljMTAwZDRjLFxuICAgIDB4NGNjNWQ0YmUsIDB4Y2IzZTQyYjYsIDB4NTk3ZjI5OWMsIDB4ZmM2NTdlMmEsXG4gICAgMHg1ZmNiNmZhYiwgMHgzYWQ2ZmFlYywgMHg2YzQ0MTk4YywgMHg0YTQ3NTgxN1xuICBdXG5cbiAgdmFyIFcgPSBuZXcgQXJyYXkoMTYwKVxuXG4gIGZ1bmN0aW9uIFNoYTUxMigpIHtcbiAgICB0aGlzLmluaXQoKVxuICAgIHRoaXMuX3cgPSBXXG5cbiAgICBIYXNoLmNhbGwodGhpcywgMTI4LCAxMTIpXG4gIH1cblxuICBpbmhlcml0cyhTaGE1MTIsIEhhc2gpXG5cbiAgU2hhNTEyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgdGhpcy5fYSA9IDB4NmEwOWU2Njd8MFxuICAgIHRoaXMuX2IgPSAweGJiNjdhZTg1fDBcbiAgICB0aGlzLl9jID0gMHgzYzZlZjM3MnwwXG4gICAgdGhpcy5fZCA9IDB4YTU0ZmY1M2F8MFxuICAgIHRoaXMuX2UgPSAweDUxMGU1MjdmfDBcbiAgICB0aGlzLl9mID0gMHg5YjA1Njg4Y3wwXG4gICAgdGhpcy5fZyA9IDB4MWY4M2Q5YWJ8MFxuICAgIHRoaXMuX2ggPSAweDViZTBjZDE5fDBcblxuICAgIHRoaXMuX2FsID0gMHhmM2JjYzkwOHwwXG4gICAgdGhpcy5fYmwgPSAweDg0Y2FhNzNifDBcbiAgICB0aGlzLl9jbCA9IDB4ZmU5NGY4MmJ8MFxuICAgIHRoaXMuX2RsID0gMHg1ZjFkMzZmMXwwXG4gICAgdGhpcy5fZWwgPSAweGFkZTY4MmQxfDBcbiAgICB0aGlzLl9mbCA9IDB4MmIzZTZjMWZ8MFxuICAgIHRoaXMuX2dsID0gMHhmYjQxYmQ2YnwwXG4gICAgdGhpcy5faGwgPSAweDEzN2UyMTc5fDBcblxuICAgIHRoaXMuX2xlbiA9IHRoaXMuX3MgPSAwXG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgZnVuY3Rpb24gUyAoWCwgWGwsIG4pIHtcbiAgICByZXR1cm4gKFggPj4+IG4pIHwgKFhsIDw8ICgzMiAtIG4pKVxuICB9XG5cbiAgZnVuY3Rpb24gQ2ggKHgsIHksIHopIHtcbiAgICByZXR1cm4gKCh4ICYgeSkgXiAoKH54KSAmIHopKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1haiAoeCwgeSwgeikge1xuICAgIHJldHVybiAoKHggJiB5KSBeICh4ICYgeikgXiAoeSAmIHopKTtcbiAgfVxuXG4gIFNoYTUxMi5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uKE0pIHtcblxuICAgIHZhciBXID0gdGhpcy5fd1xuICAgIHZhciBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoXG4gICAgdmFyIGFsLCBibCwgY2wsIGRsLCBlbCwgZmwsIGdsLCBobFxuXG4gICAgYSA9IHRoaXMuX2EgfCAwXG4gICAgYiA9IHRoaXMuX2IgfCAwXG4gICAgYyA9IHRoaXMuX2MgfCAwXG4gICAgZCA9IHRoaXMuX2QgfCAwXG4gICAgZSA9IHRoaXMuX2UgfCAwXG4gICAgZiA9IHRoaXMuX2YgfCAwXG4gICAgZyA9IHRoaXMuX2cgfCAwXG4gICAgaCA9IHRoaXMuX2ggfCAwXG5cbiAgICBhbCA9IHRoaXMuX2FsIHwgMFxuICAgIGJsID0gdGhpcy5fYmwgfCAwXG4gICAgY2wgPSB0aGlzLl9jbCB8IDBcbiAgICBkbCA9IHRoaXMuX2RsIHwgMFxuICAgIGVsID0gdGhpcy5fZWwgfCAwXG4gICAgZmwgPSB0aGlzLl9mbCB8IDBcbiAgICBnbCA9IHRoaXMuX2dsIHwgMFxuICAgIGhsID0gdGhpcy5faGwgfCAwXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIHZhciBqID0gaSAqIDJcblxuICAgICAgdmFyIFdpLCBXaWxcblxuICAgICAgaWYgKGkgPCAxNikge1xuICAgICAgICBXaSA9IFdbal0gPSBNLnJlYWRJbnQzMkJFKGogKiA0KVxuICAgICAgICBXaWwgPSBXW2ogKyAxXSA9IE0ucmVhZEludDMyQkUoaiAqIDQgKyA0KVxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgeCAgPSBXW2ogLSAxNSoyXVxuICAgICAgICB2YXIgeGwgPSBXW2ogLSAxNSoyICsgMV1cbiAgICAgICAgdmFyIGdhbW1hMCAgPSBTKHgsIHhsLCAxKSBeIFMoeCwgeGwsIDgpIF4gKHggPj4+IDcpXG4gICAgICAgIHZhciBnYW1tYTBsID0gUyh4bCwgeCwgMSkgXiBTKHhsLCB4LCA4KSBeIFMoeGwsIHgsIDcpXG5cbiAgICAgICAgeCAgPSBXW2ogLSAyKjJdXG4gICAgICAgIHhsID0gV1tqIC0gMioyICsgMV1cbiAgICAgICAgdmFyIGdhbW1hMSAgPSBTKHgsIHhsLCAxOSkgXiBTKHhsLCB4LCAyOSkgXiAoeCA+Pj4gNilcbiAgICAgICAgdmFyIGdhbW1hMWwgPSBTKHhsLCB4LCAxOSkgXiBTKHgsIHhsLCAyOSkgXiBTKHhsLCB4LCA2KVxuXG4gICAgICAgIC8vIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XVxuICAgICAgICB2YXIgV2k3ICA9IFdbaiAtIDcqMl1cbiAgICAgICAgdmFyIFdpN2wgPSBXW2ogLSA3KjIgKyAxXVxuXG4gICAgICAgIHZhciBXaTE2ICA9IFdbaiAtIDE2KjJdXG4gICAgICAgIHZhciBXaTE2bCA9IFdbaiAtIDE2KjIgKyAxXVxuXG4gICAgICAgIFdpbCA9IGdhbW1hMGwgKyBXaTdsXG4gICAgICAgIFdpICA9IGdhbW1hMCAgKyBXaTcgKyAoKFdpbCA+Pj4gMCkgPCAoZ2FtbWEwbCA+Pj4gMCkgPyAxIDogMClcbiAgICAgICAgV2lsID0gV2lsICsgZ2FtbWExbFxuICAgICAgICBXaSAgPSBXaSAgKyBnYW1tYTEgICsgKChXaWwgPj4+IDApIDwgKGdhbW1hMWwgPj4+IDApID8gMSA6IDApXG4gICAgICAgIFdpbCA9IFdpbCArIFdpMTZsXG4gICAgICAgIFdpICA9IFdpICArIFdpMTYgKyAoKFdpbCA+Pj4gMCkgPCAoV2kxNmwgPj4+IDApID8gMSA6IDApXG5cbiAgICAgICAgV1tqXSA9IFdpXG4gICAgICAgIFdbaiArIDFdID0gV2lsXG4gICAgICB9XG5cbiAgICAgIHZhciBtYWogPSBNYWooYSwgYiwgYylcbiAgICAgIHZhciBtYWpsID0gTWFqKGFsLCBibCwgY2wpXG5cbiAgICAgIHZhciBzaWdtYTBoID0gUyhhLCBhbCwgMjgpIF4gUyhhbCwgYSwgMikgXiBTKGFsLCBhLCA3KVxuICAgICAgdmFyIHNpZ21hMGwgPSBTKGFsLCBhLCAyOCkgXiBTKGEsIGFsLCAyKSBeIFMoYSwgYWwsIDcpXG4gICAgICB2YXIgc2lnbWExaCA9IFMoZSwgZWwsIDE0KSBeIFMoZSwgZWwsIDE4KSBeIFMoZWwsIGUsIDkpXG4gICAgICB2YXIgc2lnbWExbCA9IFMoZWwsIGUsIDE0KSBeIFMoZWwsIGUsIDE4KSBeIFMoZSwgZWwsIDkpXG5cbiAgICAgIC8vIHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV1cbiAgICAgIHZhciBLaSA9IEtbal1cbiAgICAgIHZhciBLaWwgPSBLW2ogKyAxXVxuXG4gICAgICB2YXIgY2ggPSBDaChlLCBmLCBnKVxuICAgICAgdmFyIGNobCA9IENoKGVsLCBmbCwgZ2wpXG5cbiAgICAgIHZhciB0MWwgPSBobCArIHNpZ21hMWxcbiAgICAgIHZhciB0MSA9IGggKyBzaWdtYTFoICsgKCh0MWwgPj4+IDApIDwgKGhsID4+PiAwKSA/IDEgOiAwKVxuICAgICAgdDFsID0gdDFsICsgY2hsXG4gICAgICB0MSA9IHQxICsgY2ggKyAoKHQxbCA+Pj4gMCkgPCAoY2hsID4+PiAwKSA/IDEgOiAwKVxuICAgICAgdDFsID0gdDFsICsgS2lsXG4gICAgICB0MSA9IHQxICsgS2kgKyAoKHQxbCA+Pj4gMCkgPCAoS2lsID4+PiAwKSA/IDEgOiAwKVxuICAgICAgdDFsID0gdDFsICsgV2lsXG4gICAgICB0MSA9IHQxICsgV2kgKyAoKHQxbCA+Pj4gMCkgPCAoV2lsID4+PiAwKSA/IDEgOiAwKVxuXG4gICAgICAvLyB0MiA9IHNpZ21hMCArIG1halxuICAgICAgdmFyIHQybCA9IHNpZ21hMGwgKyBtYWpsXG4gICAgICB2YXIgdDIgPSBzaWdtYTBoICsgbWFqICsgKCh0MmwgPj4+IDApIDwgKHNpZ21hMGwgPj4+IDApID8gMSA6IDApXG5cbiAgICAgIGggID0gZ1xuICAgICAgaGwgPSBnbFxuICAgICAgZyAgPSBmXG4gICAgICBnbCA9IGZsXG4gICAgICBmICA9IGVcbiAgICAgIGZsID0gZWxcbiAgICAgIGVsID0gKGRsICsgdDFsKSB8IDBcbiAgICAgIGUgID0gKGQgKyB0MSArICgoZWwgPj4+IDApIDwgKGRsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgICBkICA9IGNcbiAgICAgIGRsID0gY2xcbiAgICAgIGMgID0gYlxuICAgICAgY2wgPSBibFxuICAgICAgYiAgPSBhXG4gICAgICBibCA9IGFsXG4gICAgICBhbCA9ICh0MWwgKyB0MmwpIHwgMFxuICAgICAgYSAgPSAodDEgKyB0MiArICgoYWwgPj4+IDApIDwgKHQxbCA+Pj4gMCkgPyAxIDogMCkpIHwgMFxuICAgIH1cblxuICAgIHRoaXMuX2FsID0gKHRoaXMuX2FsICsgYWwpIHwgMFxuICAgIHRoaXMuX2JsID0gKHRoaXMuX2JsICsgYmwpIHwgMFxuICAgIHRoaXMuX2NsID0gKHRoaXMuX2NsICsgY2wpIHwgMFxuICAgIHRoaXMuX2RsID0gKHRoaXMuX2RsICsgZGwpIHwgMFxuICAgIHRoaXMuX2VsID0gKHRoaXMuX2VsICsgZWwpIHwgMFxuICAgIHRoaXMuX2ZsID0gKHRoaXMuX2ZsICsgZmwpIHwgMFxuICAgIHRoaXMuX2dsID0gKHRoaXMuX2dsICsgZ2wpIHwgMFxuICAgIHRoaXMuX2hsID0gKHRoaXMuX2hsICsgaGwpIHwgMFxuXG4gICAgdGhpcy5fYSA9ICh0aGlzLl9hICsgYSArICgodGhpcy5fYWwgPj4+IDApIDwgKGFsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgdGhpcy5fYiA9ICh0aGlzLl9iICsgYiArICgodGhpcy5fYmwgPj4+IDApIDwgKGJsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgdGhpcy5fYyA9ICh0aGlzLl9jICsgYyArICgodGhpcy5fY2wgPj4+IDApIDwgKGNsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgdGhpcy5fZCA9ICh0aGlzLl9kICsgZCArICgodGhpcy5fZGwgPj4+IDApIDwgKGRsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgdGhpcy5fZSA9ICh0aGlzLl9lICsgZSArICgodGhpcy5fZWwgPj4+IDApIDwgKGVsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgdGhpcy5fZiA9ICh0aGlzLl9mICsgZiArICgodGhpcy5fZmwgPj4+IDApIDwgKGZsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgdGhpcy5fZyA9ICh0aGlzLl9nICsgZyArICgodGhpcy5fZ2wgPj4+IDApIDwgKGdsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gICAgdGhpcy5faCA9ICh0aGlzLl9oICsgaCArICgodGhpcy5faGwgPj4+IDApIDwgKGhsID4+PiAwKSA/IDEgOiAwKSkgfCAwXG4gIH1cblxuICBTaGE1MTIucHJvdG90eXBlLl9oYXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBIID0gbmV3IEJ1ZmZlcig2NClcblxuICAgIGZ1bmN0aW9uIHdyaXRlSW50NjRCRShoLCBsLCBvZmZzZXQpIHtcbiAgICAgIEgud3JpdGVJbnQzMkJFKGgsIG9mZnNldClcbiAgICAgIEgud3JpdGVJbnQzMkJFKGwsIG9mZnNldCArIDQpXG4gICAgfVxuXG4gICAgd3JpdGVJbnQ2NEJFKHRoaXMuX2EsIHRoaXMuX2FsLCAwKVxuICAgIHdyaXRlSW50NjRCRSh0aGlzLl9iLCB0aGlzLl9ibCwgOClcbiAgICB3cml0ZUludDY0QkUodGhpcy5fYywgdGhpcy5fY2wsIDE2KVxuICAgIHdyaXRlSW50NjRCRSh0aGlzLl9kLCB0aGlzLl9kbCwgMjQpXG4gICAgd3JpdGVJbnQ2NEJFKHRoaXMuX2UsIHRoaXMuX2VsLCAzMilcbiAgICB3cml0ZUludDY0QkUodGhpcy5fZiwgdGhpcy5fZmwsIDQwKVxuICAgIHdyaXRlSW50NjRCRSh0aGlzLl9nLCB0aGlzLl9nbCwgNDgpXG4gICAgd3JpdGVJbnQ2NEJFKHRoaXMuX2gsIHRoaXMuX2hsLCA1NilcblxuICAgIHJldHVybiBIXG4gIH1cblxuICByZXR1cm4gU2hhNTEyXG5cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zaGEuanMvc2hhNTEyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbiAqIEEgSmF2YVNjcmlwdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgUlNBIERhdGEgU2VjdXJpdHksIEluYy4gTUQ1IE1lc3NhZ2VcbiAqIERpZ2VzdCBBbGdvcml0aG0sIGFzIGRlZmluZWQgaW4gUkZDIDEzMjEuXG4gKiBWZXJzaW9uIDIuMSBDb3B5cmlnaHQgKEMpIFBhdWwgSm9obnN0b24gMTk5OSAtIDIwMDIuXG4gKiBPdGhlciBjb250cmlidXRvcnM6IEdyZWcgSG9sdCwgQW5kcmV3IEtlcGVydCwgWWRuYXIsIExvc3RpbmV0XG4gKiBEaXN0cmlidXRlZCB1bmRlciB0aGUgQlNEIExpY2Vuc2VcbiAqIFNlZSBodHRwOi8vcGFqaG9tZS5vcmcudWsvY3J5cHQvbWQ1IGZvciBtb3JlIGluZm8uXG4gKi9cblxudmFyIGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcblxuLypcbiAqIENhbGN1bGF0ZSB0aGUgTUQ1IG9mIGFuIGFycmF5IG9mIGxpdHRsZS1lbmRpYW4gd29yZHMsIGFuZCBhIGJpdCBsZW5ndGhcbiAqL1xuZnVuY3Rpb24gY29yZV9tZDUoeCwgbGVuKVxue1xuICAvKiBhcHBlbmQgcGFkZGluZyAqL1xuICB4W2xlbiA+PiA1XSB8PSAweDgwIDw8ICgobGVuKSAlIDMyKTtcbiAgeFsoKChsZW4gKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gbGVuO1xuXG4gIHZhciBhID0gIDE3MzI1ODQxOTM7XG4gIHZhciBiID0gLTI3MTczMzg3OTtcbiAgdmFyIGMgPSAtMTczMjU4NDE5NDtcbiAgdmFyIGQgPSAgMjcxNzMzODc4O1xuXG4gIGZvcih2YXIgaSA9IDA7IGkgPCB4Lmxlbmd0aDsgaSArPSAxNilcbiAge1xuICAgIHZhciBvbGRhID0gYTtcbiAgICB2YXIgb2xkYiA9IGI7XG4gICAgdmFyIG9sZGMgPSBjO1xuICAgIHZhciBvbGRkID0gZDtcblxuICAgIGEgPSBtZDVfZmYoYSwgYiwgYywgZCwgeFtpKyAwXSwgNyAsIC02ODA4NzY5MzYpO1xuICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpKyAxXSwgMTIsIC0zODk1NjQ1ODYpO1xuICAgIGMgPSBtZDVfZmYoYywgZCwgYSwgYiwgeFtpKyAyXSwgMTcsICA2MDYxMDU4MTkpO1xuICAgIGIgPSBtZDVfZmYoYiwgYywgZCwgYSwgeFtpKyAzXSwgMjIsIC0xMDQ0NTI1MzMwKTtcbiAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsgNF0sIDcgLCAtMTc2NDE4ODk3KTtcbiAgICBkID0gbWQ1X2ZmKGQsIGEsIGIsIGMsIHhbaSsgNV0sIDEyLCAgMTIwMDA4MDQyNik7XG4gICAgYyA9IG1kNV9mZihjLCBkLCBhLCBiLCB4W2krIDZdLCAxNywgLTE0NzMyMzEzNDEpO1xuICAgIGIgPSBtZDVfZmYoYiwgYywgZCwgYSwgeFtpKyA3XSwgMjIsIC00NTcwNTk4Myk7XG4gICAgYSA9IG1kNV9mZihhLCBiLCBjLCBkLCB4W2krIDhdLCA3ICwgIDE3NzAwMzU0MTYpO1xuICAgIGQgPSBtZDVfZmYoZCwgYSwgYiwgYywgeFtpKyA5XSwgMTIsIC0xOTU4NDE0NDE3KTtcbiAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsxMF0sIDE3LCAtNDIwNjMpO1xuICAgIGIgPSBtZDVfZmYoYiwgYywgZCwgYSwgeFtpKzExXSwgMjIsIC0xOTkwNDA0MTYyKTtcbiAgICBhID0gbWQ1X2ZmKGEsIGIsIGMsIGQsIHhbaSsxMl0sIDcgLCAgMTgwNDYwMzY4Mik7XG4gICAgZCA9IG1kNV9mZihkLCBhLCBiLCBjLCB4W2krMTNdLCAxMiwgLTQwMzQxMTAxKTtcbiAgICBjID0gbWQ1X2ZmKGMsIGQsIGEsIGIsIHhbaSsxNF0sIDE3LCAtMTUwMjAwMjI5MCk7XG4gICAgYiA9IG1kNV9mZihiLCBjLCBkLCBhLCB4W2krMTVdLCAyMiwgIDEyMzY1MzUzMjkpO1xuXG4gICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2krIDFdLCA1ICwgLTE2NTc5NjUxMCk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krIDZdLCA5ICwgLTEwNjk1MDE2MzIpO1xuICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpKzExXSwgMTQsICA2NDM3MTc3MTMpO1xuICAgIGIgPSBtZDVfZ2coYiwgYywgZCwgYSwgeFtpKyAwXSwgMjAsIC0zNzM4OTczMDIpO1xuICAgIGEgPSBtZDVfZ2coYSwgYiwgYywgZCwgeFtpKyA1XSwgNSAsIC03MDE1NTg2OTEpO1xuICAgIGQgPSBtZDVfZ2coZCwgYSwgYiwgYywgeFtpKzEwXSwgOSAsICAzODAxNjA4Myk7XG4gICAgYyA9IG1kNV9nZyhjLCBkLCBhLCBiLCB4W2krMTVdLCAxNCwgLTY2MDQ3ODMzNSk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krIDRdLCAyMCwgLTQwNTUzNzg0OCk7XG4gICAgYSA9IG1kNV9nZyhhLCBiLCBjLCBkLCB4W2krIDldLCA1ICwgIDU2ODQ0NjQzOCk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krMTRdLCA5ICwgLTEwMTk4MDM2OTApO1xuICAgIGMgPSBtZDVfZ2coYywgZCwgYSwgYiwgeFtpKyAzXSwgMTQsIC0xODczNjM5NjEpO1xuICAgIGIgPSBtZDVfZ2coYiwgYywgZCwgYSwgeFtpKyA4XSwgMjAsICAxMTYzNTMxNTAxKTtcbiAgICBhID0gbWQ1X2dnKGEsIGIsIGMsIGQsIHhbaSsxM10sIDUgLCAtMTQ0NDY4MTQ2Nyk7XG4gICAgZCA9IG1kNV9nZyhkLCBhLCBiLCBjLCB4W2krIDJdLCA5ICwgLTUxNDAzNzg0KTtcbiAgICBjID0gbWQ1X2dnKGMsIGQsIGEsIGIsIHhbaSsgN10sIDE0LCAgMTczNTMyODQ3Myk7XG4gICAgYiA9IG1kNV9nZyhiLCBjLCBkLCBhLCB4W2krMTJdLCAyMCwgLTE5MjY2MDc3MzQpO1xuXG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krIDVdLCA0ICwgLTM3ODU1OCk7XG4gICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2krIDhdLCAxMSwgLTIwMjI1NzQ0NjMpO1xuICAgIGMgPSBtZDVfaGgoYywgZCwgYSwgYiwgeFtpKzExXSwgMTYsICAxODM5MDMwNTYyKTtcbiAgICBiID0gbWQ1X2hoKGIsIGMsIGQsIGEsIHhbaSsxNF0sIDIzLCAtMzUzMDk1NTYpO1xuICAgIGEgPSBtZDVfaGgoYSwgYiwgYywgZCwgeFtpKyAxXSwgNCAsIC0xNTMwOTkyMDYwKTtcbiAgICBkID0gbWQ1X2hoKGQsIGEsIGIsIGMsIHhbaSsgNF0sIDExLCAgMTI3Mjg5MzM1Myk7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krIDddLCAxNiwgLTE1NTQ5NzYzMik7XG4gICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2krMTBdLCAyMywgLTEwOTQ3MzA2NDApO1xuICAgIGEgPSBtZDVfaGgoYSwgYiwgYywgZCwgeFtpKzEzXSwgNCAsICA2ODEyNzkxNzQpO1xuICAgIGQgPSBtZDVfaGgoZCwgYSwgYiwgYywgeFtpKyAwXSwgMTEsIC0zNTg1MzcyMjIpO1xuICAgIGMgPSBtZDVfaGgoYywgZCwgYSwgYiwgeFtpKyAzXSwgMTYsIC03MjI1MjE5NzkpO1xuICAgIGIgPSBtZDVfaGgoYiwgYywgZCwgYSwgeFtpKyA2XSwgMjMsICA3NjAyOTE4OSk7XG4gICAgYSA9IG1kNV9oaChhLCBiLCBjLCBkLCB4W2krIDldLCA0ICwgLTY0MDM2NDQ4Nyk7XG4gICAgZCA9IG1kNV9oaChkLCBhLCBiLCBjLCB4W2krMTJdLCAxMSwgLTQyMTgxNTgzNSk7XG4gICAgYyA9IG1kNV9oaChjLCBkLCBhLCBiLCB4W2krMTVdLCAxNiwgIDUzMDc0MjUyMCk7XG4gICAgYiA9IG1kNV9oaChiLCBjLCBkLCBhLCB4W2krIDJdLCAyMywgLTk5NTMzODY1MSk7XG5cbiAgICBhID0gbWQ1X2lpKGEsIGIsIGMsIGQsIHhbaSsgMF0sIDYgLCAtMTk4NjMwODQ0KTtcbiAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsgN10sIDEwLCAgMTEyNjg5MTQxNSk7XG4gICAgYyA9IG1kNV9paShjLCBkLCBhLCBiLCB4W2krMTRdLCAxNSwgLTE0MTYzNTQ5MDUpO1xuICAgIGIgPSBtZDVfaWkoYiwgYywgZCwgYSwgeFtpKyA1XSwgMjEsIC01NzQzNDA1NSk7XG4gICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2krMTJdLCA2ICwgIDE3MDA0ODU1NzEpO1xuICAgIGQgPSBtZDVfaWkoZCwgYSwgYiwgYywgeFtpKyAzXSwgMTAsIC0xODk0OTg2NjA2KTtcbiAgICBjID0gbWQ1X2lpKGMsIGQsIGEsIGIsIHhbaSsxMF0sIDE1LCAtMTA1MTUyMyk7XG4gICAgYiA9IG1kNV9paShiLCBjLCBkLCBhLCB4W2krIDFdLCAyMSwgLTIwNTQ5MjI3OTkpO1xuICAgIGEgPSBtZDVfaWkoYSwgYiwgYywgZCwgeFtpKyA4XSwgNiAsICAxODczMzEzMzU5KTtcbiAgICBkID0gbWQ1X2lpKGQsIGEsIGIsIGMsIHhbaSsxNV0sIDEwLCAtMzA2MTE3NDQpO1xuICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpKyA2XSwgMTUsIC0xNTYwMTk4MzgwKTtcbiAgICBiID0gbWQ1X2lpKGIsIGMsIGQsIGEsIHhbaSsxM10sIDIxLCAgMTMwOTE1MTY0OSk7XG4gICAgYSA9IG1kNV9paShhLCBiLCBjLCBkLCB4W2krIDRdLCA2ICwgLTE0NTUyMzA3MCk7XG4gICAgZCA9IG1kNV9paShkLCBhLCBiLCBjLCB4W2krMTFdLCAxMCwgLTExMjAyMTAzNzkpO1xuICAgIGMgPSBtZDVfaWkoYywgZCwgYSwgYiwgeFtpKyAyXSwgMTUsICA3MTg3ODcyNTkpO1xuICAgIGIgPSBtZDVfaWkoYiwgYywgZCwgYSwgeFtpKyA5XSwgMjEsIC0zNDM0ODU1NTEpO1xuXG4gICAgYSA9IHNhZmVfYWRkKGEsIG9sZGEpO1xuICAgIGIgPSBzYWZlX2FkZChiLCBvbGRiKTtcbiAgICBjID0gc2FmZV9hZGQoYywgb2xkYyk7XG4gICAgZCA9IHNhZmVfYWRkKGQsIG9sZGQpO1xuICB9XG4gIHJldHVybiBBcnJheShhLCBiLCBjLCBkKTtcblxufVxuXG4vKlxuICogVGhlc2UgZnVuY3Rpb25zIGltcGxlbWVudCB0aGUgZm91ciBiYXNpYyBvcGVyYXRpb25zIHRoZSBhbGdvcml0aG0gdXNlcy5cbiAqL1xuZnVuY3Rpb24gbWQ1X2NtbihxLCBhLCBiLCB4LCBzLCB0KVxue1xuICByZXR1cm4gc2FmZV9hZGQoYml0X3JvbChzYWZlX2FkZChzYWZlX2FkZChhLCBxKSwgc2FmZV9hZGQoeCwgdCkpLCBzKSxiKTtcbn1cbmZ1bmN0aW9uIG1kNV9mZihhLCBiLCBjLCBkLCB4LCBzLCB0KVxue1xuICByZXR1cm4gbWQ1X2NtbigoYiAmIGMpIHwgKCh+YikgJiBkKSwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVfZ2coYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgcmV0dXJuIG1kNV9jbW4oKGIgJiBkKSB8IChjICYgKH5kKSksIGEsIGIsIHgsIHMsIHQpO1xufVxuZnVuY3Rpb24gbWQ1X2hoKGEsIGIsIGMsIGQsIHgsIHMsIHQpXG57XG4gIHJldHVybiBtZDVfY21uKGIgXiBjIF4gZCwgYSwgYiwgeCwgcywgdCk7XG59XG5mdW5jdGlvbiBtZDVfaWkoYSwgYiwgYywgZCwgeCwgcywgdClcbntcbiAgcmV0dXJuIG1kNV9jbW4oYyBeIChiIHwgKH5kKSksIGEsIGIsIHgsIHMsIHQpO1xufVxuXG4vKlxuICogQWRkIGludGVnZXJzLCB3cmFwcGluZyBhdCAyXjMyLiBUaGlzIHVzZXMgMTYtYml0IG9wZXJhdGlvbnMgaW50ZXJuYWxseVxuICogdG8gd29yayBhcm91bmQgYnVncyBpbiBzb21lIEpTIGludGVycHJldGVycy5cbiAqL1xuZnVuY3Rpb24gc2FmZV9hZGQoeCwgeSlcbntcbiAgdmFyIGxzdyA9ICh4ICYgMHhGRkZGKSArICh5ICYgMHhGRkZGKTtcbiAgdmFyIG1zdyA9ICh4ID4+IDE2KSArICh5ID4+IDE2KSArIChsc3cgPj4gMTYpO1xuICByZXR1cm4gKG1zdyA8PCAxNikgfCAobHN3ICYgMHhGRkZGKTtcbn1cblxuLypcbiAqIEJpdHdpc2Ugcm90YXRlIGEgMzItYml0IG51bWJlciB0byB0aGUgbGVmdC5cbiAqL1xuZnVuY3Rpb24gYml0X3JvbChudW0sIGNudClcbntcbiAgcmV0dXJuIChudW0gPDwgY250KSB8IChudW0gPj4+ICgzMiAtIGNudCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1kNShidWYpIHtcbiAgcmV0dXJuIGhlbHBlcnMuaGFzaChidWYsIGNvcmVfbWQ1LCAxNik7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NyeXB0by1icm93c2VyaWZ5L21kNS5qc1xuLy8gbW9kdWxlIGlkID0gMjQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpbnRTaXplID0gNDtcbnZhciB6ZXJvQnVmZmVyID0gbmV3IEJ1ZmZlcihpbnRTaXplKTsgemVyb0J1ZmZlci5maWxsKDApO1xudmFyIGNocnN6ID0gODtcblxuZnVuY3Rpb24gdG9BcnJheShidWYsIGJpZ0VuZGlhbikge1xuICBpZiAoKGJ1Zi5sZW5ndGggJSBpbnRTaXplKSAhPT0gMCkge1xuICAgIHZhciBsZW4gPSBidWYubGVuZ3RoICsgKGludFNpemUgLSAoYnVmLmxlbmd0aCAlIGludFNpemUpKTtcbiAgICBidWYgPSBCdWZmZXIuY29uY2F0KFtidWYsIHplcm9CdWZmZXJdLCBsZW4pO1xuICB9XG5cbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgZm4gPSBiaWdFbmRpYW4gPyBidWYucmVhZEludDMyQkUgOiBidWYucmVhZEludDMyTEU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnVmLmxlbmd0aDsgaSArPSBpbnRTaXplKSB7XG4gICAgYXJyLnB1c2goZm4uY2FsbChidWYsIGkpKTtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiB0b0J1ZmZlcihhcnIsIHNpemUsIGJpZ0VuZGlhbikge1xuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcihzaXplKTtcbiAgdmFyIGZuID0gYmlnRW5kaWFuID8gYnVmLndyaXRlSW50MzJCRSA6IGJ1Zi53cml0ZUludDMyTEU7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgZm4uY2FsbChidWYsIGFycltpXSwgaSAqIDQsIHRydWUpO1xuICB9XG4gIHJldHVybiBidWY7XG59XG5cbmZ1bmN0aW9uIGhhc2goYnVmLCBmbiwgaGFzaFNpemUsIGJpZ0VuZGlhbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSBidWYgPSBuZXcgQnVmZmVyKGJ1Zik7XG4gIHZhciBhcnIgPSBmbih0b0FycmF5KGJ1ZiwgYmlnRW5kaWFuKSwgYnVmLmxlbmd0aCAqIGNocnN6KTtcbiAgcmV0dXJuIHRvQnVmZmVyKGFyciwgaGFzaFNpemUsIGJpZ0VuZGlhbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBoYXNoOiBoYXNoIH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3J5cHRvLWJyb3dzZXJpZnkvaGVscGVycy5qc1xuLy8gbW9kdWxlIGlkID0gMjQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxubW9kdWxlLmV4cG9ydHMgPSByaXBlbWQxNjBcblxuXG5cbi8qXG5DcnlwdG9KUyB2My4xLjJcbmNvZGUuZ29vZ2xlLmNvbS9wL2NyeXB0by1qc1xuKGMpIDIwMDktMjAxMyBieSBKZWZmIE1vdHQuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5jb2RlLmdvb2dsZS5jb20vcC9jcnlwdG8tanMvd2lraS9MaWNlbnNlXG4qL1xuLyoqIEBwcmVzZXJ2ZVxuKGMpIDIwMTIgYnkgQ8OpZHJpYyBNZXNuaWwuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5cblJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcblxuICAgIC0gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICAgIC0gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuXG5USElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vLyBDb25zdGFudHMgdGFibGVcbnZhciB6bCA9IFtcbiAgICAwLCAgMSwgIDIsICAzLCAgNCwgIDUsICA2LCAgNywgIDgsICA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxuICAgIDcsICA0LCAxMywgIDEsIDEwLCAgNiwgMTUsICAzLCAxMiwgIDAsICA5LCAgNSwgIDIsIDE0LCAxMSwgIDgsXG4gICAgMywgMTAsIDE0LCAgNCwgIDksIDE1LCAgOCwgIDEsICAyLCAgNywgIDAsICA2LCAxMywgMTEsICA1LCAxMixcbiAgICAxLCAgOSwgMTEsIDEwLCAgMCwgIDgsIDEyLCAgNCwgMTMsICAzLCAgNywgMTUsIDE0LCAgNSwgIDYsICAyLFxuICAgIDQsICAwLCAgNSwgIDksICA3LCAxMiwgIDIsIDEwLCAxNCwgIDEsICAzLCAgOCwgMTEsICA2LCAxNSwgMTNdO1xudmFyIHpyID0gW1xuICAgIDUsIDE0LCAgNywgIDAsICA5LCAgMiwgMTEsICA0LCAxMywgIDYsIDE1LCAgOCwgIDEsIDEwLCAgMywgMTIsXG4gICAgNiwgMTEsICAzLCAgNywgIDAsIDEzLCAgNSwgMTAsIDE0LCAxNSwgIDgsIDEyLCAgNCwgIDksICAxLCAgMixcbiAgICAxNSwgIDUsICAxLCAgMywgIDcsIDE0LCAgNiwgIDksIDExLCAgOCwgMTIsICAyLCAxMCwgIDAsICA0LCAxMyxcbiAgICA4LCAgNiwgIDQsICAxLCAgMywgMTEsIDE1LCAgMCwgIDUsIDEyLCAgMiwgMTMsICA5LCAgNywgMTAsIDE0LFxuICAgIDEyLCAxNSwgMTAsICA0LCAgMSwgIDUsICA4LCAgNywgIDYsICAyLCAxMywgMTQsICAwLCAgMywgIDksIDExXTtcbnZhciBzbCA9IFtcbiAgICAgMTEsIDE0LCAxNSwgMTIsICA1LCAgOCwgIDcsICA5LCAxMSwgMTMsIDE0LCAxNSwgIDYsICA3LCAgOSwgIDgsXG4gICAgNywgNiwgICA4LCAxMywgMTEsICA5LCAgNywgMTUsICA3LCAxMiwgMTUsICA5LCAxMSwgIDcsIDEzLCAxMixcbiAgICAxMSwgMTMsICA2LCAgNywgMTQsICA5LCAxMywgMTUsIDE0LCAgOCwgMTMsICA2LCAgNSwgMTIsICA3LCAgNSxcbiAgICAgIDExLCAxMiwgMTQsIDE1LCAxNCwgMTUsICA5LCAgOCwgIDksIDE0LCAgNSwgIDYsICA4LCAgNiwgIDUsIDEyLFxuICAgIDksIDE1LCAgNSwgMTEsICA2LCAgOCwgMTMsIDEyLCAgNSwgMTIsIDEzLCAxNCwgMTEsICA4LCAgNSwgIDYgXTtcbnZhciBzciA9IFtcbiAgICA4LCAgOSwgIDksIDExLCAxMywgMTUsIDE1LCAgNSwgIDcsICA3LCAgOCwgMTEsIDE0LCAxNCwgMTIsICA2LFxuICAgIDksIDEzLCAxNSwgIDcsIDEyLCAgOCwgIDksIDExLCAgNywgIDcsIDEyLCAgNywgIDYsIDE1LCAxMywgMTEsXG4gICAgOSwgIDcsIDE1LCAxMSwgIDgsICA2LCAgNiwgMTQsIDEyLCAxMywgIDUsIDE0LCAxMywgMTMsICA3LCAgNSxcbiAgICAxNSwgIDUsICA4LCAxMSwgMTQsIDE0LCAgNiwgMTQsICA2LCAgOSwgMTIsICA5LCAxMiwgIDUsIDE1LCAgOCxcbiAgICA4LCAgNSwgMTIsICA5LCAxMiwgIDUsIDE0LCAgNiwgIDgsIDEzLCAgNiwgIDUsIDE1LCAxMywgMTEsIDExIF07XG5cbnZhciBobCA9ICBbIDB4MDAwMDAwMDAsIDB4NUE4Mjc5OTksIDB4NkVEOUVCQTEsIDB4OEYxQkJDREMsIDB4QTk1M0ZENEVdO1xudmFyIGhyID0gIFsgMHg1MEEyOEJFNiwgMHg1QzRERDEyNCwgMHg2RDcwM0VGMywgMHg3QTZENzZFOSwgMHgwMDAwMDAwMF07XG5cbnZhciBieXRlc1RvV29yZHMgPSBmdW5jdGlvbiAoYnl0ZXMpIHtcbiAgdmFyIHdvcmRzID0gW107XG4gIGZvciAodmFyIGkgPSAwLCBiID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSsrLCBiICs9IDgpIHtcbiAgICB3b3Jkc1tiID4+PiA1XSB8PSBieXRlc1tpXSA8PCAoMjQgLSBiICUgMzIpO1xuICB9XG4gIHJldHVybiB3b3Jkcztcbn07XG5cbnZhciB3b3Jkc1RvQnl0ZXMgPSBmdW5jdGlvbiAod29yZHMpIHtcbiAgdmFyIGJ5dGVzID0gW107XG4gIGZvciAodmFyIGIgPSAwOyBiIDwgd29yZHMubGVuZ3RoICogMzI7IGIgKz0gOCkge1xuICAgIGJ5dGVzLnB1c2goKHdvcmRzW2IgPj4+IDVdID4+PiAoMjQgLSBiICUgMzIpKSAmIDB4RkYpO1xuICB9XG4gIHJldHVybiBieXRlcztcbn07XG5cbnZhciBwcm9jZXNzQmxvY2sgPSBmdW5jdGlvbiAoSCwgTSwgb2Zmc2V0KSB7XG5cbiAgLy8gU3dhcCBlbmRpYW5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgdmFyIG9mZnNldF9pID0gb2Zmc2V0ICsgaTtcbiAgICB2YXIgTV9vZmZzZXRfaSA9IE1bb2Zmc2V0X2ldO1xuXG4gICAgLy8gU3dhcFxuICAgIE1bb2Zmc2V0X2ldID0gKFxuICAgICAgICAoKChNX29mZnNldF9pIDw8IDgpICB8IChNX29mZnNldF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuICAgICAgICAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMClcbiAgICApO1xuICB9XG5cbiAgLy8gV29ya2luZyB2YXJpYWJsZXNcbiAgdmFyIGFsLCBibCwgY2wsIGRsLCBlbDtcbiAgdmFyIGFyLCBiciwgY3IsIGRyLCBlcjtcblxuICBhciA9IGFsID0gSFswXTtcbiAgYnIgPSBibCA9IEhbMV07XG4gIGNyID0gY2wgPSBIWzJdO1xuICBkciA9IGRsID0gSFszXTtcbiAgZXIgPSBlbCA9IEhbNF07XG4gIC8vIENvbXB1dGF0aW9uXG4gIHZhciB0O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpICs9IDEpIHtcbiAgICB0ID0gKGFsICsgIE1bb2Zmc2V0K3psW2ldXSl8MDtcbiAgICBpZiAoaTwxNil7XG4gICAgICAgIHQgKz0gIGYxKGJsLGNsLGRsKSArIGhsWzBdO1xuICAgIH0gZWxzZSBpZiAoaTwzMikge1xuICAgICAgICB0ICs9ICBmMihibCxjbCxkbCkgKyBobFsxXTtcbiAgICB9IGVsc2UgaWYgKGk8NDgpIHtcbiAgICAgICAgdCArPSAgZjMoYmwsY2wsZGwpICsgaGxbMl07XG4gICAgfSBlbHNlIGlmIChpPDY0KSB7XG4gICAgICAgIHQgKz0gIGY0KGJsLGNsLGRsKSArIGhsWzNdO1xuICAgIH0gZWxzZSB7Ly8gaWYgKGk8ODApIHtcbiAgICAgICAgdCArPSAgZjUoYmwsY2wsZGwpICsgaGxbNF07XG4gICAgfVxuICAgIHQgPSB0fDA7XG4gICAgdCA9ICByb3RsKHQsc2xbaV0pO1xuICAgIHQgPSAodCtlbCl8MDtcbiAgICBhbCA9IGVsO1xuICAgIGVsID0gZGw7XG4gICAgZGwgPSByb3RsKGNsLCAxMCk7XG4gICAgY2wgPSBibDtcbiAgICBibCA9IHQ7XG5cbiAgICB0ID0gKGFyICsgTVtvZmZzZXQrenJbaV1dKXwwO1xuICAgIGlmIChpPDE2KXtcbiAgICAgICAgdCArPSAgZjUoYnIsY3IsZHIpICsgaHJbMF07XG4gICAgfSBlbHNlIGlmIChpPDMyKSB7XG4gICAgICAgIHQgKz0gIGY0KGJyLGNyLGRyKSArIGhyWzFdO1xuICAgIH0gZWxzZSBpZiAoaTw0OCkge1xuICAgICAgICB0ICs9ICBmMyhicixjcixkcikgKyBoclsyXTtcbiAgICB9IGVsc2UgaWYgKGk8NjQpIHtcbiAgICAgICAgdCArPSAgZjIoYnIsY3IsZHIpICsgaHJbM107XG4gICAgfSBlbHNlIHsvLyBpZiAoaTw4MCkge1xuICAgICAgICB0ICs9ICBmMShicixjcixkcikgKyBocls0XTtcbiAgICB9XG4gICAgdCA9IHR8MDtcbiAgICB0ID0gIHJvdGwodCxzcltpXSkgO1xuICAgIHQgPSAodCtlcil8MDtcbiAgICBhciA9IGVyO1xuICAgIGVyID0gZHI7XG4gICAgZHIgPSByb3RsKGNyLCAxMCk7XG4gICAgY3IgPSBicjtcbiAgICBiciA9IHQ7XG4gIH1cbiAgLy8gSW50ZXJtZWRpYXRlIGhhc2ggdmFsdWVcbiAgdCAgICA9IChIWzFdICsgY2wgKyBkcil8MDtcbiAgSFsxXSA9IChIWzJdICsgZGwgKyBlcil8MDtcbiAgSFsyXSA9IChIWzNdICsgZWwgKyBhcil8MDtcbiAgSFszXSA9IChIWzRdICsgYWwgKyBicil8MDtcbiAgSFs0XSA9IChIWzBdICsgYmwgKyBjcil8MDtcbiAgSFswXSA9ICB0O1xufTtcblxuZnVuY3Rpb24gZjEoeCwgeSwgeikge1xuICByZXR1cm4gKCh4KSBeICh5KSBeICh6KSk7XG59XG5cbmZ1bmN0aW9uIGYyKHgsIHksIHopIHtcbiAgcmV0dXJuICgoKHgpJih5KSkgfCAoKH54KSYoeikpKTtcbn1cblxuZnVuY3Rpb24gZjMoeCwgeSwgeikge1xuICByZXR1cm4gKCgoeCkgfCAofih5KSkpIF4gKHopKTtcbn1cblxuZnVuY3Rpb24gZjQoeCwgeSwgeikge1xuICByZXR1cm4gKCgoeCkgJiAoeikpIHwgKCh5KSYofih6KSkpKTtcbn1cblxuZnVuY3Rpb24gZjUoeCwgeSwgeikge1xuICByZXR1cm4gKCh4KSBeICgoeSkgfCh+KHopKSkpO1xufVxuXG5mdW5jdGlvbiByb3RsKHgsbikge1xuICByZXR1cm4gKHg8PG4pIHwgKHg+Pj4oMzItbikpO1xufVxuXG5mdW5jdGlvbiByaXBlbWQxNjAobWVzc2FnZSkge1xuICB2YXIgSCA9IFsweDY3NDUyMzAxLCAweEVGQ0RBQjg5LCAweDk4QkFEQ0ZFLCAweDEwMzI1NDc2LCAweEMzRDJFMUYwXTtcblxuICBpZiAodHlwZW9mIG1lc3NhZ2UgPT0gJ3N0cmluZycpXG4gICAgbWVzc2FnZSA9IG5ldyBCdWZmZXIobWVzc2FnZSwgJ3V0ZjgnKTtcblxuICB2YXIgbSA9IGJ5dGVzVG9Xb3JkcyhtZXNzYWdlKTtcblxuICB2YXIgbkJpdHNMZWZ0ID0gbWVzc2FnZS5sZW5ndGggKiA4O1xuICB2YXIgbkJpdHNUb3RhbCA9IG1lc3NhZ2UubGVuZ3RoICogODtcblxuICAvLyBBZGQgcGFkZGluZ1xuICBtW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XG4gIG1bKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcbiAgICAgICgoKG5CaXRzVG90YWwgPDwgOCkgIHwgKG5CaXRzVG90YWwgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XG4gICAgICAoKChuQml0c1RvdGFsIDw8IDI0KSB8IChuQml0c1RvdGFsID4+PiA4KSkgICYgMHhmZjAwZmYwMClcbiAgKTtcblxuICBmb3IgKHZhciBpPTAgOyBpPG0ubGVuZ3RoOyBpICs9IDE2KSB7XG4gICAgcHJvY2Vzc0Jsb2NrKEgsIG0sIGkpO1xuICB9XG5cbiAgLy8gU3dhcCBlbmRpYW5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIC8vIFNob3J0Y3V0XG4gICAgdmFyIEhfaSA9IEhbaV07XG5cbiAgICAvLyBTd2FwXG4gICAgSFtpXSA9ICgoKEhfaSA8PCA4KSAgfCAoSF9pID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxuICAgICAgICAgICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XG4gIH1cblxuICB2YXIgZGlnZXN0Ynl0ZXMgPSB3b3Jkc1RvQnl0ZXMoSCk7XG4gIHJldHVybiBuZXcgQnVmZmVyKGRpZ2VzdGJ5dGVzKTtcbn1cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmlwZW1kMTYwL2xpYi9yaXBlbWQxNjAuanNcbi8vIG1vZHVsZSBpZCA9IDI0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY3JlYXRlSGFzaCA9IHJlcXVpcmUoJy4vY3JlYXRlLWhhc2gnKVxuXG52YXIgemVyb0J1ZmZlciA9IG5ldyBCdWZmZXIoMTI4KVxuemVyb0J1ZmZlci5maWxsKDApXG5cbm1vZHVsZS5leHBvcnRzID0gSG1hY1xuXG5mdW5jdGlvbiBIbWFjIChhbGcsIGtleSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBIbWFjKSkgcmV0dXJuIG5ldyBIbWFjKGFsZywga2V5KVxuICB0aGlzLl9vcGFkID0gb3BhZFxuICB0aGlzLl9hbGcgPSBhbGdcblxuICB2YXIgYmxvY2tzaXplID0gKGFsZyA9PT0gJ3NoYTUxMicpID8gMTI4IDogNjRcblxuICBrZXkgPSB0aGlzLl9rZXkgPSAhQnVmZmVyLmlzQnVmZmVyKGtleSkgPyBuZXcgQnVmZmVyKGtleSkgOiBrZXlcblxuICBpZihrZXkubGVuZ3RoID4gYmxvY2tzaXplKSB7XG4gICAga2V5ID0gY3JlYXRlSGFzaChhbGcpLnVwZGF0ZShrZXkpLmRpZ2VzdCgpXG4gIH0gZWxzZSBpZihrZXkubGVuZ3RoIDwgYmxvY2tzaXplKSB7XG4gICAga2V5ID0gQnVmZmVyLmNvbmNhdChba2V5LCB6ZXJvQnVmZmVyXSwgYmxvY2tzaXplKVxuICB9XG5cbiAgdmFyIGlwYWQgPSB0aGlzLl9pcGFkID0gbmV3IEJ1ZmZlcihibG9ja3NpemUpXG4gIHZhciBvcGFkID0gdGhpcy5fb3BhZCA9IG5ldyBCdWZmZXIoYmxvY2tzaXplKVxuXG4gIGZvcih2YXIgaSA9IDA7IGkgPCBibG9ja3NpemU7IGkrKykge1xuICAgIGlwYWRbaV0gPSBrZXlbaV0gXiAweDM2XG4gICAgb3BhZFtpXSA9IGtleVtpXSBeIDB4NUNcbiAgfVxuXG4gIHRoaXMuX2hhc2ggPSBjcmVhdGVIYXNoKGFsZykudXBkYXRlKGlwYWQpXG59XG5cbkhtYWMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhLCBlbmMpIHtcbiAgdGhpcy5faGFzaC51cGRhdGUoZGF0YSwgZW5jKVxuICByZXR1cm4gdGhpc1xufVxuXG5IbWFjLnByb3RvdHlwZS5kaWdlc3QgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIHZhciBoID0gdGhpcy5faGFzaC5kaWdlc3QoKVxuICByZXR1cm4gY3JlYXRlSGFzaCh0aGlzLl9hbGcpLnVwZGF0ZSh0aGlzLl9vcGFkKS51cGRhdGUoaCkuZGlnZXN0KGVuYylcbn1cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NyeXB0by1icm93c2VyaWZ5L2NyZWF0ZS1obWFjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHBia2RmMkV4cG9ydCA9IHJlcXVpcmUoJ3Bia2RmMi1jb21wYXQvcGJrZGYyJylcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3J5cHRvLCBleHBvcnRzKSB7XG4gIGV4cG9ydHMgPSBleHBvcnRzIHx8IHt9XG5cbiAgdmFyIGV4cG9ydGVkID0gcGJrZGYyRXhwb3J0KGNyeXB0bylcblxuICBleHBvcnRzLnBia2RmMiA9IGV4cG9ydGVkLnBia2RmMlxuICBleHBvcnRzLnBia2RmMlN5bmMgPSBleHBvcnRlZC5wYmtkZjJTeW5jXG5cbiAgcmV0dXJuIGV4cG9ydHNcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jcnlwdG8tYnJvd3NlcmlmeS9wYmtkZjIuanNcbi8vIG1vZHVsZSBpZCA9IDI0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNyeXB0bykge1xuICBmdW5jdGlvbiBwYmtkZjIocGFzc3dvcmQsIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbiwgZGlnZXN0LCBjYWxsYmFjaykge1xuICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZGlnZXN0KSB7XG4gICAgICBjYWxsYmFjayA9IGRpZ2VzdFxuICAgICAgZGlnZXN0ID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgaWYgKCdmdW5jdGlvbicgIT09IHR5cGVvZiBjYWxsYmFjaylcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2FsbGJhY2sgcHJvdmlkZWQgdG8gcGJrZGYyJylcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVzdWx0XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IHBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbiwgZGlnZXN0KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZSlcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCByZXN1bHQpXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHBia2RmMlN5bmMocGFzc3dvcmQsIHNhbHQsIGl0ZXJhdGlvbnMsIGtleWxlbiwgZGlnZXN0KSB7XG4gICAgaWYgKCdudW1iZXInICE9PSB0eXBlb2YgaXRlcmF0aW9ucylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0l0ZXJhdGlvbnMgbm90IGEgbnVtYmVyJylcblxuICAgIGlmIChpdGVyYXRpb25zIDwgMClcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JhZCBpdGVyYXRpb25zJylcblxuICAgIGlmICgnbnVtYmVyJyAhPT0gdHlwZW9mIGtleWxlbilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0tleSBsZW5ndGggbm90IGEgbnVtYmVyJylcblxuICAgIGlmIChrZXlsZW4gPCAwKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQmFkIGtleSBsZW5ndGgnKVxuXG4gICAgZGlnZXN0ID0gZGlnZXN0IHx8ICdzaGExJ1xuXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIocGFzc3dvcmQpKSBwYXNzd29yZCA9IG5ldyBCdWZmZXIocGFzc3dvcmQpXG4gICAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoc2FsdCkpIHNhbHQgPSBuZXcgQnVmZmVyKHNhbHQpXG5cbiAgICB2YXIgaExlbiwgbCA9IDEsIHIsIFRcbiAgICB2YXIgREsgPSBuZXcgQnVmZmVyKGtleWxlbilcbiAgICB2YXIgYmxvY2sxID0gbmV3IEJ1ZmZlcihzYWx0Lmxlbmd0aCArIDQpXG4gICAgc2FsdC5jb3B5KGJsb2NrMSwgMCwgMCwgc2FsdC5sZW5ndGgpXG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBsOyBpKyspIHtcbiAgICAgIGJsb2NrMS53cml0ZVVJbnQzMkJFKGksIHNhbHQubGVuZ3RoKVxuXG4gICAgICB2YXIgVSA9IGNyeXB0by5jcmVhdGVIbWFjKGRpZ2VzdCwgcGFzc3dvcmQpLnVwZGF0ZShibG9jazEpLmRpZ2VzdCgpXG5cbiAgICAgIGlmICghaExlbikge1xuICAgICAgICBoTGVuID0gVS5sZW5ndGhcbiAgICAgICAgVCA9IG5ldyBCdWZmZXIoaExlbilcbiAgICAgICAgbCA9IE1hdGguY2VpbChrZXlsZW4gLyBoTGVuKVxuICAgICAgICByID0ga2V5bGVuIC0gKGwgLSAxKSAqIGhMZW5cblxuICAgICAgICBpZiAoa2V5bGVuID4gKE1hdGgucG93KDIsIDMyKSAtIDEpICogaExlbilcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdrZXlsZW4gZXhjZWVkcyBtYXhpbXVtIGxlbmd0aCcpXG4gICAgICB9XG5cbiAgICAgIFUuY29weShULCAwLCAwLCBoTGVuKVxuXG4gICAgICBmb3IgKHZhciBqID0gMTsgaiA8IGl0ZXJhdGlvbnM7IGorKykge1xuICAgICAgICBVID0gY3J5cHRvLmNyZWF0ZUhtYWMoZGlnZXN0LCBwYXNzd29yZCkudXBkYXRlKFUpLmRpZ2VzdCgpXG5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBoTGVuOyBrKyspIHtcbiAgICAgICAgICBUW2tdIF49IFVba11cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZGVzdFBvcyA9IChpIC0gMSkgKiBoTGVuXG4gICAgICB2YXIgbGVuID0gKGkgPT0gbCA/IHIgOiBoTGVuKVxuICAgICAgVC5jb3B5KERLLCBkZXN0UG9zLCAwLCBsZW4pXG4gICAgfVxuXG4gICAgcmV0dXJuIERLXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBia2RmMjogcGJrZGYyLFxuICAgIHBia2RmMlN5bmM6IHBia2RmMlN5bmNcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Bia2RmMi1jb21wYXQvcGJrZGYyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3J5cHRvLCBleHBvcnRzKSB7XG4gIGV4cG9ydHMgPSBleHBvcnRzIHx8IHt9O1xuICB2YXIgY2lwaGVycyA9IHJlcXVpcmUoJy4vZW5jcnlwdGVyJykoY3J5cHRvKTtcbiAgZXhwb3J0cy5jcmVhdGVDaXBoZXIgPSBjaXBoZXJzLmNyZWF0ZUNpcGhlcjtcbiAgZXhwb3J0cy5jcmVhdGVDaXBoZXJpdiA9IGNpcGhlcnMuY3JlYXRlQ2lwaGVyaXY7XG4gIHZhciBkZWNpcGhlcnMgPSByZXF1aXJlKCcuL2RlY3J5cHRlcicpKGNyeXB0byk7XG4gIGV4cG9ydHMuY3JlYXRlRGVjaXBoZXIgPSBkZWNpcGhlcnMuY3JlYXRlRGVjaXBoZXI7XG4gIGV4cG9ydHMuY3JlYXRlRGVjaXBoZXJpdiA9IGRlY2lwaGVycy5jcmVhdGVEZWNpcGhlcml2O1xuICB2YXIgbW9kZXMgPSByZXF1aXJlKCcuL21vZGVzJyk7XG4gIGZ1bmN0aW9uIGxpc3RDaXBoZXJzICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobW9kZXMpO1xuICB9XG4gIGV4cG9ydHMubGlzdENpcGhlcnMgPSBsaXN0Q2lwaGVycztcbn07XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyaWZ5LWFlcy9pbmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYWVzID0gcmVxdWlyZSgnLi9hZXMnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2NpcGhlckJhc2UnKTtcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG52YXIgbW9kZXMgPSByZXF1aXJlKCcuL21vZGVzJyk7XG52YXIgZWJ0ayA9IHJlcXVpcmUoJy4vRVZQX0J5dGVzVG9LZXknKTtcbnZhciBTdHJlYW1DaXBoZXIgPSByZXF1aXJlKCcuL3N0cmVhbUNpcGhlcicpO1xuaW5oZXJpdHMoQ2lwaGVyLCBUcmFuc2Zvcm0pO1xuZnVuY3Rpb24gQ2lwaGVyKG1vZGUsIGtleSwgaXYpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENpcGhlcikpIHtcbiAgICByZXR1cm4gbmV3IENpcGhlcihtb2RlLCBrZXksIGl2KTtcbiAgfVxuICBUcmFuc2Zvcm0uY2FsbCh0aGlzKTtcbiAgdGhpcy5fY2FjaGUgPSBuZXcgU3BsaXR0ZXIoKTtcbiAgdGhpcy5fY2lwaGVyID0gbmV3IGFlcy5BRVMoa2V5KTtcbiAgdGhpcy5fcHJldiA9IG5ldyBCdWZmZXIoaXYubGVuZ3RoKTtcbiAgaXYuY29weSh0aGlzLl9wcmV2KTtcbiAgdGhpcy5fbW9kZSA9IG1vZGU7XG59XG5DaXBoZXIucHJvdG90eXBlLl90cmFuc2Zvcm0gPSBmdW5jdGlvbiAoZGF0YSwgXywgbmV4dCkge1xuICB0aGlzLl9jYWNoZS5hZGQoZGF0YSk7XG4gIHZhciBjaHVuaztcbiAgdmFyIHRoaW5nO1xuICB3aGlsZSAoKGNodW5rID0gdGhpcy5fY2FjaGUuZ2V0KCkpKSB7XG4gICAgdGhpbmcgPSB0aGlzLl9tb2RlLmVuY3J5cHQodGhpcywgY2h1bmspO1xuICAgIHRoaXMucHVzaCh0aGluZyk7XG4gIH1cbiAgbmV4dCgpO1xufTtcbkNpcGhlci5wcm90b3R5cGUuX2ZsdXNoID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgdmFyIGNodW5rID0gdGhpcy5fY2FjaGUuZmx1c2goKTtcbiAgdGhpcy5wdXNoKHRoaXMuX21vZGUuZW5jcnlwdCh0aGlzLCBjaHVuaykpO1xuICB0aGlzLl9jaXBoZXIuc2NydWIoKTtcbiAgbmV4dCgpO1xufTtcblxuXG5mdW5jdGlvbiBTcGxpdHRlcigpIHtcbiAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTcGxpdHRlcikpIHtcbiAgICByZXR1cm4gbmV3IFNwbGl0dGVyKCk7XG4gIH1cbiAgdGhpcy5jYWNoZSA9IG5ldyBCdWZmZXIoJycpO1xufVxuU3BsaXR0ZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuY2FjaGUgPSBCdWZmZXIuY29uY2F0KFt0aGlzLmNhY2hlLCBkYXRhXSk7XG59O1xuXG5TcGxpdHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jYWNoZS5sZW5ndGggPiAxNSkge1xuICAgIHZhciBvdXQgPSB0aGlzLmNhY2hlLnNsaWNlKDAsIDE2KTtcbiAgICB0aGlzLmNhY2hlID0gdGhpcy5jYWNoZS5zbGljZSgxNik7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5TcGxpdHRlci5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBsZW4gPSAxNiAtIHRoaXMuY2FjaGUubGVuZ3RoO1xuICB2YXIgcGFkQnVmZiA9IG5ldyBCdWZmZXIobGVuKTtcblxuICB2YXIgaSA9IC0xO1xuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgcGFkQnVmZi53cml0ZVVJbnQ4KGxlbiwgaSk7XG4gIH1cbiAgdmFyIG91dCA9IEJ1ZmZlci5jb25jYXQoW3RoaXMuY2FjaGUsIHBhZEJ1ZmZdKTtcbiAgcmV0dXJuIG91dDtcbn07XG52YXIgbW9kZWxpc3QgPSB7XG4gIEVDQjogcmVxdWlyZSgnLi9tb2Rlcy9lY2InKSxcbiAgQ0JDOiByZXF1aXJlKCcuL21vZGVzL2NiYycpLFxuICBDRkI6IHJlcXVpcmUoJy4vbW9kZXMvY2ZiJyksXG4gIE9GQjogcmVxdWlyZSgnLi9tb2Rlcy9vZmInKSxcbiAgQ1RSOiByZXF1aXJlKCcuL21vZGVzL2N0cicpXG59O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3J5cHRvKSB7XG4gIGZ1bmN0aW9uIGNyZWF0ZUNpcGhlcml2KHN1aXRlLCBwYXNzd29yZCwgaXYpIHtcbiAgICB2YXIgY29uZmlnID0gbW9kZXNbc3VpdGVdO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHN1aXRlIHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpdiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl2ID0gbmV3IEJ1ZmZlcihpdik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFzc3dvcmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXNzd29yZCA9IG5ldyBCdWZmZXIocGFzc3dvcmQpO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoICE9PSBjb25maWcua2V5LzgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQga2V5IGxlbmd0aCAnICsgcGFzc3dvcmQubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKGl2Lmxlbmd0aCAhPT0gY29uZmlnLml2KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIGl2IGxlbmd0aCAnICsgaXYubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnc3RyZWFtJykge1xuICAgICAgcmV0dXJuIG5ldyBTdHJlYW1DaXBoZXIobW9kZWxpc3RbY29uZmlnLm1vZGVdLCBwYXNzd29yZCwgaXYpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IENpcGhlcihtb2RlbGlzdFtjb25maWcubW9kZV0sIHBhc3N3b3JkLCBpdik7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlQ2lwaGVyIChzdWl0ZSwgcGFzc3dvcmQpIHtcbiAgICB2YXIgY29uZmlnID0gbW9kZXNbc3VpdGVdO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHN1aXRlIHR5cGUnKTtcbiAgICB9XG4gICAgdmFyIGtleXMgPSBlYnRrKGNyeXB0bywgcGFzc3dvcmQsIGNvbmZpZy5rZXksIGNvbmZpZy5pdik7XG4gICAgcmV0dXJuIGNyZWF0ZUNpcGhlcml2KHN1aXRlLCBrZXlzLmtleSwga2V5cy5pdik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVDaXBoZXI6IGNyZWF0ZUNpcGhlcixcbiAgICBjcmVhdGVDaXBoZXJpdjogY3JlYXRlQ2lwaGVyaXZcbiAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3NlcmlmeS1hZXMvZW5jcnlwdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHVpbnRfbWF4ID0gTWF0aC5wb3coMiwgMzIpO1xuZnVuY3Rpb24gZml4dXBfdWludDMyKHgpIHtcbiAgICB2YXIgcmV0LCB4X3BvcztcbiAgICByZXQgPSB4ID4gdWludF9tYXggfHwgeCA8IDAgPyAoeF9wb3MgPSBNYXRoLmFicyh4KSAlIHVpbnRfbWF4LCB4IDwgMCA/IHVpbnRfbWF4IC0geF9wb3MgOiB4X3BvcykgOiB4O1xuICAgIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBzY3J1Yl92ZWModikge1xuICB2YXIgaSwgX2ksIF9yZWY7XG4gIGZvciAoaSA9IF9pID0gMCwgX3JlZiA9IHYubGVuZ3RoOyAwIDw9IF9yZWYgPyBfaSA8IF9yZWYgOiBfaSA+IF9yZWY7IGkgPSAwIDw9IF9yZWYgPyArK19pIDogLS1faSkge1xuICAgIHZbaV0gPSAwO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gR2xvYmFsKCkge1xuICB2YXIgaTtcbiAgdGhpcy5TQk9YID0gW107XG4gIHRoaXMuSU5WX1NCT1ggPSBbXTtcbiAgdGhpcy5TVUJfTUlYID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfaSwgX3Jlc3VsdHM7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBfaSA9IDA7IF9pIDwgNDsgaSA9ICsrX2kpIHtcbiAgICAgIF9yZXN1bHRzLnB1c2goW10pO1xuICAgIH1cbiAgICByZXR1cm4gX3Jlc3VsdHM7XG4gIH0pKCk7XG4gIHRoaXMuSU5WX1NVQl9NSVggPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9pLCBfcmVzdWx0cztcbiAgICBfcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IF9pID0gMDsgX2kgPCA0OyBpID0gKytfaSkge1xuICAgICAgX3Jlc3VsdHMucHVzaChbXSk7XG4gICAgfVxuICAgIHJldHVybiBfcmVzdWx0cztcbiAgfSkoKTtcbiAgdGhpcy5pbml0KCk7XG4gIHRoaXMuUkNPTiA9IFsweDAwLCAweDAxLCAweDAyLCAweDA0LCAweDA4LCAweDEwLCAweDIwLCAweDQwLCAweDgwLCAweDFiLCAweDM2XTtcbn1cblxuR2xvYmFsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBkLCBpLCBzeCwgdCwgeCwgeDIsIHg0LCB4OCwgeGksIF9pO1xuICBkID0gKGZ1bmN0aW9uKCkge1xuICAgIHZhciBfaSwgX3Jlc3VsdHM7XG4gICAgX3Jlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBfaSA9IDA7IF9pIDwgMjU2OyBpID0gKytfaSkge1xuICAgICAgaWYgKGkgPCAxMjgpIHtcbiAgICAgICAgX3Jlc3VsdHMucHVzaChpIDw8IDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3Jlc3VsdHMucHVzaCgoaSA8PCAxKSBeIDB4MTFiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9yZXN1bHRzO1xuICB9KSgpO1xuICB4ID0gMDtcbiAgeGkgPSAwO1xuICBmb3IgKGkgPSBfaSA9IDA7IF9pIDwgMjU2OyBpID0gKytfaSkge1xuICAgIHN4ID0geGkgXiAoeGkgPDwgMSkgXiAoeGkgPDwgMikgXiAoeGkgPDwgMykgXiAoeGkgPDwgNCk7XG4gICAgc3ggPSAoc3ggPj4+IDgpIF4gKHN4ICYgMHhmZikgXiAweDYzO1xuICAgIHRoaXMuU0JPWFt4XSA9IHN4O1xuICAgIHRoaXMuSU5WX1NCT1hbc3hdID0geDtcbiAgICB4MiA9IGRbeF07XG4gICAgeDQgPSBkW3gyXTtcbiAgICB4OCA9IGRbeDRdO1xuICAgIHQgPSAoZFtzeF0gKiAweDEwMSkgXiAoc3ggKiAweDEwMTAxMDApO1xuICAgIHRoaXMuU1VCX01JWFswXVt4XSA9ICh0IDw8IDI0KSB8ICh0ID4+PiA4KTtcbiAgICB0aGlzLlNVQl9NSVhbMV1beF0gPSAodCA8PCAxNikgfCAodCA+Pj4gMTYpO1xuICAgIHRoaXMuU1VCX01JWFsyXVt4XSA9ICh0IDw8IDgpIHwgKHQgPj4+IDI0KTtcbiAgICB0aGlzLlNVQl9NSVhbM11beF0gPSB0O1xuICAgIHQgPSAoeDggKiAweDEwMTAxMDEpIF4gKHg0ICogMHgxMDAwMSkgXiAoeDIgKiAweDEwMSkgXiAoeCAqIDB4MTAxMDEwMCk7XG4gICAgdGhpcy5JTlZfU1VCX01JWFswXVtzeF0gPSAodCA8PCAyNCkgfCAodCA+Pj4gOCk7XG4gICAgdGhpcy5JTlZfU1VCX01JWFsxXVtzeF0gPSAodCA8PCAxNikgfCAodCA+Pj4gMTYpO1xuICAgIHRoaXMuSU5WX1NVQl9NSVhbMl1bc3hdID0gKHQgPDwgOCkgfCAodCA+Pj4gMjQpO1xuICAgIHRoaXMuSU5WX1NVQl9NSVhbM11bc3hdID0gdDtcbiAgICBpZiAoeCA9PT0gMCkge1xuICAgICAgeCA9IHhpID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IHgyIF4gZFtkW2RbeDggXiB4Ml1dXTtcbiAgICAgIHhpIF49IGRbZFt4aV1dO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBHID0gbmV3IEdsb2JhbCgpO1xuXG5cbkFFUy5ibG9ja1NpemUgPSA0ICogNDtcblxuQUVTLnByb3RvdHlwZS5ibG9ja1NpemUgPSBBRVMuYmxvY2tTaXplO1xuXG5BRVMua2V5U2l6ZSA9IDI1NiAvIDg7XG5cbkFFUy5wcm90b3R5cGUua2V5U2l6ZSA9IEFFUy5rZXlTaXplO1xuXG5BRVMuaXZTaXplID0gQUVTLmJsb2NrU2l6ZTtcblxuQUVTLnByb3RvdHlwZS5pdlNpemUgPSBBRVMuaXZTaXplO1xuXG4gZnVuY3Rpb24gYnVmZmVyVG9BcnJheShidWYpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGgvNDtcbiAgdmFyIG91dCA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgaSA9IC0xO1xuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgb3V0W2ldID0gYnVmLnJlYWRVSW50MzJCRShpICogNCk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbiB9XG5mdW5jdGlvbiBBRVMoa2V5KSB7XG4gIHRoaXMuX2tleSA9IGJ1ZmZlclRvQXJyYXkoa2V5KTtcbiAgdGhpcy5fZG9SZXNldCgpO1xufVxuXG5BRVMucHJvdG90eXBlLl9kb1Jlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBpbnZLc1Jvdywga2V5U2l6ZSwga2V5V29yZHMsIGtzUm93LCBrc1Jvd3MsIHQsIF9pLCBfajtcbiAga2V5V29yZHMgPSB0aGlzLl9rZXk7XG4gIGtleVNpemUgPSBrZXlXb3Jkcy5sZW5ndGg7XG4gIHRoaXMuX25Sb3VuZHMgPSBrZXlTaXplICsgNjtcbiAga3NSb3dzID0gKHRoaXMuX25Sb3VuZHMgKyAxKSAqIDQ7XG4gIHRoaXMuX2tleVNjaGVkdWxlID0gW107XG4gIGZvciAoa3NSb3cgPSBfaSA9IDA7IDAgPD0ga3NSb3dzID8gX2kgPCBrc1Jvd3MgOiBfaSA+IGtzUm93czsga3NSb3cgPSAwIDw9IGtzUm93cyA/ICsrX2kgOiAtLV9pKSB7XG4gICAgdGhpcy5fa2V5U2NoZWR1bGVba3NSb3ddID0ga3NSb3cgPCBrZXlTaXplID8ga2V5V29yZHNba3NSb3ddIDogKHQgPSB0aGlzLl9rZXlTY2hlZHVsZVtrc1JvdyAtIDFdLCAoa3NSb3cgJSBrZXlTaXplKSA9PT0gMCA/ICh0ID0gKHQgPDwgOCkgfCAodCA+Pj4gMjQpLCB0ID0gKEcuU0JPWFt0ID4+PiAyNF0gPDwgMjQpIHwgKEcuU0JPWFsodCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKEcuU0JPWFsodCA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IEcuU0JPWFt0ICYgMHhmZl0sIHQgXj0gRy5SQ09OWyhrc1JvdyAvIGtleVNpemUpIHwgMF0gPDwgMjQpIDoga2V5U2l6ZSA+IDYgJiYga3NSb3cgJSBrZXlTaXplID09PSA0ID8gdCA9IChHLlNCT1hbdCA+Pj4gMjRdIDw8IDI0KSB8IChHLlNCT1hbKHQgPj4+IDE2KSAmIDB4ZmZdIDw8IDE2KSB8IChHLlNCT1hbKHQgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBHLlNCT1hbdCAmIDB4ZmZdIDogdm9pZCAwLCB0aGlzLl9rZXlTY2hlZHVsZVtrc1JvdyAtIGtleVNpemVdIF4gdCk7XG4gIH1cbiAgdGhpcy5faW52S2V5U2NoZWR1bGUgPSBbXTtcbiAgZm9yIChpbnZLc1JvdyA9IF9qID0gMDsgMCA8PSBrc1Jvd3MgPyBfaiA8IGtzUm93cyA6IF9qID4ga3NSb3dzOyBpbnZLc1JvdyA9IDAgPD0ga3NSb3dzID8gKytfaiA6IC0tX2opIHtcbiAgICBrc1JvdyA9IGtzUm93cyAtIGludktzUm93O1xuICAgIHQgPSB0aGlzLl9rZXlTY2hlZHVsZVtrc1JvdyAtIChpbnZLc1JvdyAlIDQgPyAwIDogNCldO1xuICAgIHRoaXMuX2ludktleVNjaGVkdWxlW2ludktzUm93XSA9IGludktzUm93IDwgNCB8fCBrc1JvdyA8PSA0ID8gdCA6IEcuSU5WX1NVQl9NSVhbMF1bRy5TQk9YW3QgPj4+IDI0XV0gXiBHLklOVl9TVUJfTUlYWzFdW0cuU0JPWFsodCA+Pj4gMTYpICYgMHhmZl1dIF4gRy5JTlZfU1VCX01JWFsyXVtHLlNCT1hbKHQgPj4+IDgpICYgMHhmZl1dIF4gRy5JTlZfU1VCX01JWFszXVtHLlNCT1hbdCAmIDB4ZmZdXTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkFFUy5wcm90b3R5cGUuZW5jcnlwdEJsb2NrID0gZnVuY3Rpb24oTSkge1xuICBNID0gYnVmZmVyVG9BcnJheShuZXcgQnVmZmVyKE0pKTtcbiAgdmFyIG91dCA9IHRoaXMuX2RvQ3J5cHRCbG9jayhNLCB0aGlzLl9rZXlTY2hlZHVsZSwgRy5TVUJfTUlYLCBHLlNCT1gpO1xuICB2YXIgYnVmID0gbmV3IEJ1ZmZlcigxNik7XG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFswXSwgMCk7XG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFsxXSwgNCk7XG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFsyXSwgOCk7XG4gIGJ1Zi53cml0ZVVJbnQzMkJFKG91dFszXSwgMTIpO1xuICByZXR1cm4gYnVmO1xufTtcblxuQUVTLnByb3RvdHlwZS5kZWNyeXB0QmxvY2sgPSBmdW5jdGlvbihNKSB7XG4gIE0gPSBidWZmZXJUb0FycmF5KG5ldyBCdWZmZXIoTSkpO1xuICB2YXIgdGVtcCA9IFtNWzNdLCBNWzFdXTtcbiAgTVsxXSA9IHRlbXBbMF07XG4gIE1bM10gPSB0ZW1wWzFdO1xuICB2YXIgb3V0ID0gdGhpcy5fZG9DcnlwdEJsb2NrKE0sIHRoaXMuX2ludktleVNjaGVkdWxlLCBHLklOVl9TVUJfTUlYLCBHLklOVl9TQk9YKTtcbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIoMTYpO1xuICBidWYud3JpdGVVSW50MzJCRShvdXRbMF0sIDApO1xuICBidWYud3JpdGVVSW50MzJCRShvdXRbM10sIDQpO1xuICBidWYud3JpdGVVSW50MzJCRShvdXRbMl0sIDgpO1xuICBidWYud3JpdGVVSW50MzJCRShvdXRbMV0sIDEyKTtcbiAgcmV0dXJuIGJ1Zjtcbn07XG5cbkFFUy5wcm90b3R5cGUuc2NydWIgPSBmdW5jdGlvbigpIHtcbiAgc2NydWJfdmVjKHRoaXMuX2tleVNjaGVkdWxlKTtcbiAgc2NydWJfdmVjKHRoaXMuX2ludktleVNjaGVkdWxlKTtcbiAgc2NydWJfdmVjKHRoaXMuX2tleSk7XG59O1xuXG5BRVMucHJvdG90eXBlLl9kb0NyeXB0QmxvY2sgPSBmdW5jdGlvbihNLCBrZXlTY2hlZHVsZSwgU1VCX01JWCwgU0JPWCkge1xuICB2YXIga3NSb3csIHJvdW5kLCBzMCwgczEsIHMyLCBzMywgdDAsIHQxLCB0MiwgdDMsIF9pLCBfcmVmO1xuXG4gIHMwID0gTVswXSBeIGtleVNjaGVkdWxlWzBdO1xuICBzMSA9IE1bMV0gXiBrZXlTY2hlZHVsZVsxXTtcbiAgczIgPSBNWzJdIF4ga2V5U2NoZWR1bGVbMl07XG4gIHMzID0gTVszXSBeIGtleVNjaGVkdWxlWzNdO1xuICBrc1JvdyA9IDQ7XG4gIGZvciAocm91bmQgPSBfaSA9IDEsIF9yZWYgPSB0aGlzLl9uUm91bmRzOyAxIDw9IF9yZWYgPyBfaSA8IF9yZWYgOiBfaSA+IF9yZWY7IHJvdW5kID0gMSA8PSBfcmVmID8gKytfaSA6IC0tX2kpIHtcbiAgICB0MCA9IFNVQl9NSVhbMF1bczAgPj4+IDI0XSBeIFNVQl9NSVhbMV1bKHMxID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVhbMl1bKHMyID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWFszXVtzMyAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG4gICAgdDEgPSBTVUJfTUlYWzBdW3MxID4+PiAyNF0gXiBTVUJfTUlYWzFdWyhzMiA+Pj4gMTYpICYgMHhmZl0gXiBTVUJfTUlYWzJdWyhzMyA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVhbM11bczAgJiAweGZmXSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuICAgIHQyID0gU1VCX01JWFswXVtzMiA+Pj4gMjRdIF4gU1VCX01JWFsxXVsoczMgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWFsyXVsoczAgPj4+IDgpICYgMHhmZl0gXiBTVUJfTUlYWzNdW3MxICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcbiAgICB0MyA9IFNVQl9NSVhbMF1bczMgPj4+IDI0XSBeIFNVQl9NSVhbMV1bKHMwID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVhbMl1bKHMxID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWFszXVtzMiAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XG4gICAgczAgPSB0MDtcbiAgICBzMSA9IHQxO1xuICAgIHMyID0gdDI7XG4gICAgczMgPSB0MztcbiAgfVxuICB0MCA9ICgoU0JPWFtzMCA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMSA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMyID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMyAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuICB0MSA9ICgoU0JPWFtzMSA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMiA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMzID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMCAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuICB0MiA9ICgoU0JPWFtzMiA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMyA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMwID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMSAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuICB0MyA9ICgoU0JPWFtzMyA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMxID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMiAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xuICByZXR1cm4gW1xuICAgIGZpeHVwX3VpbnQzMih0MCksXG4gICAgZml4dXBfdWludDMyKHQxKSxcbiAgICBmaXh1cF91aW50MzIodDIpLFxuICAgIGZpeHVwX3VpbnQzMih0MylcbiAgXTtcblxufTtcblxuXG5cblxuICBleHBvcnRzLkFFUyA9IEFFUztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3NlcmlmeS1hZXMvYWVzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJ3N0cmVhbScpLlRyYW5zZm9ybTtcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2lwaGVyQmFzZTtcbmluaGVyaXRzKENpcGhlckJhc2UsIFRyYW5zZm9ybSk7XG5mdW5jdGlvbiBDaXBoZXJCYXNlKCkge1xuICBUcmFuc2Zvcm0uY2FsbCh0aGlzKTtcbn1cbkNpcGhlckJhc2UucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhLCBpbnB1dEVuZCwgb3V0cHV0RW5jKSB7XG4gIHRoaXMud3JpdGUoZGF0YSwgaW5wdXRFbmQpO1xuICB2YXIgb3V0RGF0YSA9IG5ldyBCdWZmZXIoJycpO1xuICB2YXIgY2h1bms7XG4gIHdoaWxlICgoY2h1bmsgPSB0aGlzLnJlYWQoKSkpIHtcbiAgICBvdXREYXRhID0gQnVmZmVyLmNvbmNhdChbb3V0RGF0YSwgY2h1bmtdKTtcbiAgfVxuICBpZiAob3V0cHV0RW5jKSB7XG4gICAgb3V0RGF0YSA9IG91dERhdGEudG9TdHJpbmcob3V0cHV0RW5jKTtcbiAgfVxuICByZXR1cm4gb3V0RGF0YTtcbn07XG5DaXBoZXJCYXNlLnByb3RvdHlwZS5maW5hbCA9IGZ1bmN0aW9uIChvdXRwdXRFbmMpIHtcbiAgdGhpcy5lbmQoKTtcbiAgdmFyIG91dERhdGEgPSBuZXcgQnVmZmVyKCcnKTtcbiAgdmFyIGNodW5rO1xuICB3aGlsZSAoKGNodW5rID0gdGhpcy5yZWFkKCkpKSB7XG4gICAgb3V0RGF0YSA9IEJ1ZmZlci5jb25jYXQoW291dERhdGEsIGNodW5rXSk7XG4gIH1cbiAgaWYgKG91dHB1dEVuYykge1xuICAgIG91dERhdGEgPSBvdXREYXRhLnRvU3RyaW5nKG91dHB1dEVuYyk7XG4gIH1cbiAgcmV0dXJuIG91dERhdGE7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyaWZ5LWFlcy9jaXBoZXJCYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbm1vZHVsZS5leHBvcnRzID0gU3RyZWFtO1xuXG52YXIgRUUgPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuXG5pbmhlcml0cyhTdHJlYW0sIEVFKTtcblN0cmVhbS5SZWFkYWJsZSA9IHJlcXVpcmUoJ3JlYWRhYmxlLXN0cmVhbS9yZWFkYWJsZS5qcycpO1xuU3RyZWFtLldyaXRhYmxlID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtL3dyaXRhYmxlLmpzJyk7XG5TdHJlYW0uRHVwbGV4ID0gcmVxdWlyZSgncmVhZGFibGUtc3RyZWFtL2R1cGxleC5qcycpO1xuU3RyZWFtLlRyYW5zZm9ybSA9IHJlcXVpcmUoJ3JlYWRhYmxlLXN0cmVhbS90cmFuc2Zvcm0uanMnKTtcblN0cmVhbS5QYXNzVGhyb3VnaCA9IHJlcXVpcmUoJ3JlYWRhYmxlLXN0cmVhbS9wYXNzdGhyb3VnaC5qcycpO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjQueFxuU3RyZWFtLlN0cmVhbSA9IFN0cmVhbTtcblxuXG5cbi8vIG9sZC1zdHlsZSBzdHJlYW1zLiAgTm90ZSB0aGF0IHRoZSBwaXBlIG1ldGhvZCAodGhlIG9ubHkgcmVsZXZhbnRcbi8vIHBhcnQgb2YgdGhpcyBjbGFzcykgaXMgb3ZlcnJpZGRlbiBpbiB0aGUgUmVhZGFibGUgY2xhc3MuXG5cbmZ1bmN0aW9uIFN0cmVhbSgpIHtcbiAgRUUuY2FsbCh0aGlzKTtcbn1cblxuU3RyZWFtLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24oZGVzdCwgb3B0aW9ucykge1xuICB2YXIgc291cmNlID0gdGhpcztcblxuICBmdW5jdGlvbiBvbmRhdGEoY2h1bmspIHtcbiAgICBpZiAoZGVzdC53cml0YWJsZSkge1xuICAgICAgaWYgKGZhbHNlID09PSBkZXN0LndyaXRlKGNodW5rKSAmJiBzb3VyY2UucGF1c2UpIHtcbiAgICAgICAgc291cmNlLnBhdXNlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc291cmNlLm9uKCdkYXRhJywgb25kYXRhKTtcblxuICBmdW5jdGlvbiBvbmRyYWluKCkge1xuICAgIGlmIChzb3VyY2UucmVhZGFibGUgJiYgc291cmNlLnJlc3VtZSkge1xuICAgICAgc291cmNlLnJlc3VtZSgpO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Qub24oJ2RyYWluJywgb25kcmFpbik7XG5cbiAgLy8gSWYgdGhlICdlbmQnIG9wdGlvbiBpcyBub3Qgc3VwcGxpZWQsIGRlc3QuZW5kKCkgd2lsbCBiZSBjYWxsZWQgd2hlblxuICAvLyBzb3VyY2UgZ2V0cyB0aGUgJ2VuZCcgb3IgJ2Nsb3NlJyBldmVudHMuICBPbmx5IGRlc3QuZW5kKCkgb25jZS5cbiAgaWYgKCFkZXN0Ll9pc1N0ZGlvICYmICghb3B0aW9ucyB8fCBvcHRpb25zLmVuZCAhPT0gZmFsc2UpKSB7XG4gICAgc291cmNlLm9uKCdlbmQnLCBvbmVuZCk7XG4gICAgc291cmNlLm9uKCdjbG9zZScsIG9uY2xvc2UpO1xuICB9XG5cbiAgdmFyIGRpZE9uRW5kID0gZmFsc2U7XG4gIGZ1bmN0aW9uIG9uZW5kKCkge1xuICAgIGlmIChkaWRPbkVuZCkgcmV0dXJuO1xuICAgIGRpZE9uRW5kID0gdHJ1ZTtcblxuICAgIGRlc3QuZW5kKCk7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgaWYgKGRpZE9uRW5kKSByZXR1cm47XG4gICAgZGlkT25FbmQgPSB0cnVlO1xuXG4gICAgaWYgKHR5cGVvZiBkZXN0LmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIGRlc3QuZGVzdHJveSgpO1xuICB9XG5cbiAgLy8gZG9uJ3QgbGVhdmUgZGFuZ2xpbmcgcGlwZXMgd2hlbiB0aGVyZSBhcmUgZXJyb3JzLlxuICBmdW5jdGlvbiBvbmVycm9yKGVyKSB7XG4gICAgY2xlYW51cCgpO1xuICAgIGlmIChFRS5saXN0ZW5lckNvdW50KHRoaXMsICdlcnJvcicpID09PSAwKSB7XG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkIHN0cmVhbSBlcnJvciBpbiBwaXBlLlxuICAgIH1cbiAgfVxuXG4gIHNvdXJjZS5vbignZXJyb3InLCBvbmVycm9yKTtcbiAgZGVzdC5vbignZXJyb3InLCBvbmVycm9yKTtcblxuICAvLyByZW1vdmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnMgdGhhdCB3ZXJlIGFkZGVkLlxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHNvdXJjZS5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uZGF0YSk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZHJhaW4nLCBvbmRyYWluKTtcblxuICAgIHNvdXJjZS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpO1xuICAgIHNvdXJjZS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcblxuICAgIHNvdXJjZS5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuXG4gICAgc291cmNlLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBjbGVhbnVwKTtcbiAgICBzb3VyY2UucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgY2xlYW51cCk7XG5cbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIGNsZWFudXApO1xuICB9XG5cbiAgc291cmNlLm9uKCdlbmQnLCBjbGVhbnVwKTtcbiAgc291cmNlLm9uKCdjbG9zZScsIGNsZWFudXApO1xuXG4gIGRlc3Qub24oJ2Nsb3NlJywgY2xlYW51cCk7XG5cbiAgZGVzdC5lbWl0KCdwaXBlJywgc291cmNlKTtcblxuICAvLyBBbGxvdyBmb3IgdW5peC1saWtlIHVzYWdlOiBBLnBpcGUoQikucGlwZShDKVxuICByZXR1cm4gZGVzdDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RyZWFtLWJyb3dzZXJpZnkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICB0aGlzLl9ldmVudHMgPSB0aGlzLl9ldmVudHMgfHwge307XG4gIHRoaXMuX21heExpc3RlbmVycyA9IHRoaXMuX21heExpc3RlbmVycyB8fCB1bmRlZmluZWQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbkV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uKG4pIHtcbiAgaWYgKCFpc051bWJlcihuKSB8fCBuIDwgMCB8fCBpc05hTihuKSlcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ24gbXVzdCBiZSBhIHBvc2l0aXZlIG51bWJlcicpO1xuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdmFyIGVyLCBoYW5kbGVyLCBsZW4sIGFyZ3MsIGksIGxpc3RlbmVycztcblxuICBpZiAoIXRoaXMuX2V2ZW50cylcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcblxuICAvLyBJZiB0aGVyZSBpcyBubyAnZXJyb3InIGV2ZW50IGxpc3RlbmVyIHRoZW4gdGhyb3cuXG4gIGlmICh0eXBlID09PSAnZXJyb3InKSB7XG4gICAgaWYgKCF0aGlzLl9ldmVudHMuZXJyb3IgfHxcbiAgICAgICAgKGlzT2JqZWN0KHRoaXMuX2V2ZW50cy5lcnJvcikgJiYgIXRoaXMuX2V2ZW50cy5lcnJvci5sZW5ndGgpKSB7XG4gICAgICBlciA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHRocm93IGVyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmNhdWdodCwgdW5zcGVjaWZpZWQgXCJlcnJvclwiIGV2ZW50LiAoJyArIGVyICsgJyknKTtcbiAgICAgICAgZXJyLmNvbnRleHQgPSBlcjtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZXIgPSB0aGlzLl9ldmVudHNbdHlwZV07XG5cbiAgaWYgKGlzVW5kZWZpbmVkKGhhbmRsZXIpKVxuICAgIHJldHVybiBmYWxzZTtcblxuICBpZiAoaXNGdW5jdGlvbihoYW5kbGVyKSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgLy8gZmFzdCBjYXNlc1xuICAgICAgY2FzZSAxOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgYXJndW1lbnRzWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gc2xvd2VyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaGFuZGxlcikpIHtcbiAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICBsaXN0ZW5lcnMgPSBoYW5kbGVyLnNsaWNlKCk7XG4gICAgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspXG4gICAgICBsaXN0ZW5lcnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgbTtcblxuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgdGhpcy5fZXZlbnRzID0ge307XG5cbiAgLy8gVG8gYXZvaWQgcmVjdXJzaW9uIGluIHRoZSBjYXNlIHRoYXQgdHlwZSA9PT0gXCJuZXdMaXN0ZW5lclwiISBCZWZvcmVcbiAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICBpZiAodGhpcy5fZXZlbnRzLm5ld0xpc3RlbmVyKVxuICAgIHRoaXMuZW1pdCgnbmV3TGlzdGVuZXInLCB0eXBlLFxuICAgICAgICAgICAgICBpc0Z1bmN0aW9uKGxpc3RlbmVyLmxpc3RlbmVyKSA/XG4gICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIHRoaXMuX2V2ZW50c1t0eXBlXSA9IGxpc3RlbmVyO1xuICBlbHNlIGlmIChpc09iamVjdCh0aGlzLl9ldmVudHNbdHlwZV0pKVxuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2VcbiAgICAvLyBBZGRpbmcgdGhlIHNlY29uZCBlbGVtZW50LCBuZWVkIHRvIGNoYW5nZSB0byBhcnJheS5cbiAgICB0aGlzLl9ldmVudHNbdHlwZV0gPSBbdGhpcy5fZXZlbnRzW3R5cGVdLCBsaXN0ZW5lcl07XG5cbiAgLy8gQ2hlY2sgZm9yIGxpc3RlbmVyIGxlYWtcbiAgaWYgKGlzT2JqZWN0KHRoaXMuX2V2ZW50c1t0eXBlXSkgJiYgIXRoaXMuX2V2ZW50c1t0eXBlXS53YXJuZWQpIHtcbiAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuX21heExpc3RlbmVycykpIHtcbiAgICAgIG0gPSB0aGlzLl9tYXhMaXN0ZW5lcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSBFdmVudEVtaXR0ZXIuZGVmYXVsdE1heExpc3RlbmVycztcbiAgICB9XG5cbiAgICBpZiAobSAmJiBtID4gMCAmJiB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoID4gbSkge1xuICAgICAgdGhpcy5fZXZlbnRzW3R5cGVdLndhcm5lZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmVycm9yKCcobm9kZSkgd2FybmluZzogcG9zc2libGUgRXZlbnRFbWl0dGVyIG1lbW9yeSAnICtcbiAgICAgICAgICAgICAgICAgICAgJ2xlYWsgZGV0ZWN0ZWQuICVkIGxpc3RlbmVycyBhZGRlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICdVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byBpbmNyZWFzZSBsaW1pdC4nLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ldmVudHNbdHlwZV0ubGVuZ3RoKTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZS50cmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub3Qgc3VwcG9ydGVkIGluIElFIDEwXG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAoIWlzRnVuY3Rpb24obGlzdGVuZXIpKVxuICAgIHRocm93IFR5cGVFcnJvcignbGlzdGVuZXIgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cbiAgdmFyIGZpcmVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gZygpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGcpO1xuXG4gICAgaWYgKCFmaXJlZCkge1xuICAgICAgZmlyZWQgPSB0cnVlO1xuICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cblxuICBnLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHRoaXMub24odHlwZSwgZyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBlbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWZmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZFxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBsaXN0LCBwb3NpdGlvbiwgbGVuZ3RoLCBpO1xuXG4gIGlmICghaXNGdW5jdGlvbihsaXN0ZW5lcikpXG4gICAgdGhyb3cgVHlwZUVycm9yKCdsaXN0ZW5lciBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblxuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldHVybiB0aGlzO1xuXG4gIGxpc3QgPSB0aGlzLl9ldmVudHNbdHlwZV07XG4gIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICBwb3NpdGlvbiA9IC0xO1xuXG4gIGlmIChsaXN0ID09PSBsaXN0ZW5lciB8fFxuICAgICAgKGlzRnVuY3Rpb24obGlzdC5saXN0ZW5lcikgJiYgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICBpZiAodGhpcy5fZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3RlbmVyKTtcblxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGxpc3QpKSB7XG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gPiAwOykge1xuICAgICAgaWYgKGxpc3RbaV0gPT09IGxpc3RlbmVyIHx8XG4gICAgICAgICAgKGxpc3RbaV0ubGlzdGVuZXIgJiYgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICBsaXN0Lmxlbmd0aCA9IDA7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRzW3R5cGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0LnNwbGljZShwb3NpdGlvbiwgMSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIga2V5LCBsaXN0ZW5lcnM7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHMpXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICBpZiAoIXRoaXMuX2V2ZW50cy5yZW1vdmVMaXN0ZW5lcikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgdGhpcy5fZXZlbnRzID0ge307XG4gICAgZWxzZSBpZiAodGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgICAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIGVtaXQgcmVtb3ZlTGlzdGVuZXIgZm9yIGFsbCBsaXN0ZW5lcnMgb24gYWxsIGV2ZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIGZvciAoa2V5IGluIHRoaXMuX2V2ZW50cykge1xuICAgICAgaWYgKGtleSA9PT0gJ3JlbW92ZUxpc3RlbmVyJykgY29udGludWU7XG4gICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgIH1cbiAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycygncmVtb3ZlTGlzdGVuZXInKTtcbiAgICB0aGlzLl9ldmVudHMgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICBpZiAoaXNGdW5jdGlvbihsaXN0ZW5lcnMpKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICB9IGVsc2UgaWYgKGxpc3RlbmVycykge1xuICAgIC8vIExJRk8gb3JkZXJcbiAgICB3aGlsZSAobGlzdGVuZXJzLmxlbmd0aClcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXSk7XG4gIH1cbiAgZGVsZXRlIHRoaXMuX2V2ZW50c1t0eXBlXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24odHlwZSkge1xuICB2YXIgcmV0O1xuICBpZiAoIXRoaXMuX2V2ZW50cyB8fCAhdGhpcy5fZXZlbnRzW3R5cGVdKVxuICAgIHJldCA9IFtdO1xuICBlbHNlIGlmIChpc0Z1bmN0aW9uKHRoaXMuX2V2ZW50c1t0eXBlXSkpXG4gICAgcmV0ID0gW3RoaXMuX2V2ZW50c1t0eXBlXV07XG4gIGVsc2VcbiAgICByZXQgPSB0aGlzLl9ldmVudHNbdHlwZV0uc2xpY2UoKTtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgaWYgKHRoaXMuX2V2ZW50cykge1xuICAgIHZhciBldmxpc3RlbmVyID0gdGhpcy5fZXZlbnRzW3R5cGVdO1xuXG4gICAgaWYgKGlzRnVuY3Rpb24oZXZsaXN0ZW5lcikpXG4gICAgICByZXR1cm4gMTtcbiAgICBlbHNlIGlmIChldmxpc3RlbmVyKVxuICAgICAgcmV0dXJuIGV2bGlzdGVuZXIubGVuZ3RoO1xuICB9XG4gIHJldHVybiAwO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVyQ291bnQodHlwZSk7XG59O1xuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKGFyZykge1xuICByZXR1cm4gYXJnID09PSB2b2lkIDA7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXZlbnRzL2V2ZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gMjUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RyZWFtID0gKGZ1bmN0aW9uICgpe1xuICB0cnkge1xuICAgIHJldHVybiByZXF1aXJlKCdzdCcgKyAncmVhbScpOyAvLyBoYWNrIHRvIGZpeCBhIGNpcmN1bGFyIGRlcGVuZGVuY3kgaXNzdWUgd2hlbiB1c2VkIHdpdGggYnJvd3NlcmlmeVxuICB9IGNhdGNoKF8pe31cbn0oKSk7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzJyk7XG5leHBvcnRzLlN0cmVhbSA9IFN0cmVhbSB8fCBleHBvcnRzO1xuZXhwb3J0cy5SZWFkYWJsZSA9IGV4cG9ydHM7XG5leHBvcnRzLldyaXRhYmxlID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV93cml0YWJsZS5qcycpO1xuZXhwb3J0cy5EdXBsZXggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX2R1cGxleC5qcycpO1xuZXhwb3J0cy5UcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcycpO1xuZXhwb3J0cy5QYXNzVGhyb3VnaCA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMnKTtcblxuaWYgKCFwcm9jZXNzLmJyb3dzZXIgJiYgcHJvY2Vzcy5lbnYuUkVBREFCTEVfU1RSRUFNID09PSAnZGlzYWJsZScgJiYgU3RyZWFtKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gU3RyZWFtO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL3JlYWRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWRhYmxlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHByb2Nlc3NOZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MtbmV4dGljay1hcmdzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRHVwbGV4O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cblJlYWRhYmxlLlJlYWRhYmxlU3RhdGUgPSBSZWFkYWJsZVN0YXRlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIEVFID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG52YXIgRUVsaXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gKGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJzKHR5cGUpLmxlbmd0aDtcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBTdHJlYW07XG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIFN0cmVhbSA9IHJlcXVpcmUoJ3N0JyArICdyZWFtJyk7XG4gIH0gY2F0Y2ggKF8pIHt9IGZpbmFsbHkge1xuICAgIGlmICghU3RyZWFtKSBTdHJlYW0gPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG4gIH1cbn0pKCk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYnVmZmVyU2hpbSA9IHJlcXVpcmUoJ2J1ZmZlci1zaGltcycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgdXRpbCA9IHJlcXVpcmUoJ2NvcmUtdXRpbC1pcycpO1xudXRpbC5pbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBkZWJ1Z1V0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG52YXIgZGVidWcgPSB2b2lkIDA7XG5pZiAoZGVidWdVdGlsICYmIGRlYnVnVXRpbC5kZWJ1Z2xvZykge1xuICBkZWJ1ZyA9IGRlYnVnVXRpbC5kZWJ1Z2xvZygnc3RyZWFtJyk7XG59IGVsc2Uge1xuICBkZWJ1ZyA9IGZ1bmN0aW9uICgpIHt9O1xufVxuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBCdWZmZXJMaXN0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL0J1ZmZlckxpc3QnKTtcbnZhciBTdHJpbmdEZWNvZGVyO1xuXG51dGlsLmluaGVyaXRzKFJlYWRhYmxlLCBTdHJlYW0pO1xuXG5mdW5jdGlvbiBwcmVwZW5kTGlzdGVuZXIoZW1pdHRlciwgZXZlbnQsIGZuKSB7XG4gIC8vIFNhZGx5IHRoaXMgaXMgbm90IGNhY2hlYWJsZSBhcyBzb21lIGxpYnJhcmllcyBidW5kbGUgdGhlaXIgb3duXG4gIC8vIGV2ZW50IGVtaXR0ZXIgaW1wbGVtZW50YXRpb24gd2l0aCB0aGVtLlxuICBpZiAodHlwZW9mIGVtaXR0ZXIucHJlcGVuZExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIucHJlcGVuZExpc3RlbmVyKGV2ZW50LCBmbik7XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhpcyBpcyBhIGhhY2sgdG8gbWFrZSBzdXJlIHRoYXQgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIGFueVxuICAgIC8vIHVzZXJsYW5kIG9uZXMuICBORVZFUiBETyBUSElTLiBUaGlzIGlzIGhlcmUgb25seSBiZWNhdXNlIHRoaXMgY29kZSBuZWVkc1xuICAgIC8vIHRvIGNvbnRpbnVlIHRvIHdvcmsgd2l0aCBvbGRlciB2ZXJzaW9ucyBvZiBOb2RlLmpzIHRoYXQgZG8gbm90IGluY2x1ZGVcbiAgICAvLyB0aGUgcHJlcGVuZExpc3RlbmVyKCkgbWV0aG9kLiBUaGUgZ29hbCBpcyB0byBldmVudHVhbGx5IHJlbW92ZSB0aGlzIGhhY2suXG4gICAgaWYgKCFlbWl0dGVyLl9ldmVudHMgfHwgIWVtaXR0ZXIuX2V2ZW50c1tldmVudF0pIGVtaXR0ZXIub24oZXZlbnQsIGZuKTtlbHNlIGlmIChpc0FycmF5KGVtaXR0ZXIuX2V2ZW50c1tldmVudF0pKSBlbWl0dGVyLl9ldmVudHNbZXZlbnRdLnVuc2hpZnQoZm4pO2Vsc2UgZW1pdHRlci5fZXZlbnRzW2V2ZW50XSA9IFtmbiwgZW1pdHRlci5fZXZlbnRzW2V2ZW50XV07XG4gIH1cbn1cblxuZnVuY3Rpb24gUmVhZGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcuIFVzZWQgdG8gbWFrZSByZWFkKG4pIGlnbm9yZSBuIGFuZCB0b1xuICAvLyBtYWtlIGFsbCB0aGUgYnVmZmVyIG1lcmdpbmcgYW5kIGxlbmd0aCBjaGVja3MgZ28gYXdheVxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoc3RyZWFtIGluc3RhbmNlb2YgRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLnJlYWRhYmxlT2JqZWN0TW9kZTtcblxuICAvLyB0aGUgcG9pbnQgYXQgd2hpY2ggaXQgc3RvcHMgY2FsbGluZyBfcmVhZCgpIHRvIGZpbGwgdGhlIGJ1ZmZlclxuICAvLyBOb3RlOiAwIGlzIGEgdmFsaWQgdmFsdWUsIG1lYW5zIFwiZG9uJ3QgY2FsbCBfcmVhZCBwcmVlbXB0aXZlbHkgZXZlclwiXG4gIHZhciBod20gPSBvcHRpb25zLmhpZ2hXYXRlck1hcms7XG4gIHZhciBkZWZhdWx0SHdtID0gdGhpcy5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IGh3bSB8fCBod20gPT09IDAgPyBod20gOiBkZWZhdWx0SHdtO1xuXG4gIC8vIGNhc3QgdG8gaW50cy5cbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gfiB+dGhpcy5oaWdoV2F0ZXJNYXJrO1xuXG4gIC8vIEEgbGlua2VkIGxpc3QgaXMgdXNlZCB0byBzdG9yZSBkYXRhIGNodW5rcyBpbnN0ZWFkIG9mIGFuIGFycmF5IGJlY2F1c2UgdGhlXG4gIC8vIGxpbmtlZCBsaXN0IGNhbiByZW1vdmUgZWxlbWVudHMgZnJvbSB0aGUgYmVnaW5uaW5nIGZhc3RlciB0aGFuXG4gIC8vIGFycmF5LnNoaWZ0KClcbiAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyTGlzdCgpO1xuICB0aGlzLmxlbmd0aCA9IDA7XG4gIHRoaXMucGlwZXMgPSBudWxsO1xuICB0aGlzLnBpcGVzQ291bnQgPSAwO1xuICB0aGlzLmZsb3dpbmcgPSBudWxsO1xuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIHRoaXMuZW5kRW1pdHRlZCA9IGZhbHNlO1xuICB0aGlzLnJlYWRpbmcgPSBmYWxzZTtcblxuICAvLyBhIGZsYWcgdG8gYmUgYWJsZSB0byB0ZWxsIGlmIHRoZSBvbndyaXRlIGNiIGlzIGNhbGxlZCBpbW1lZGlhdGVseSxcbiAgLy8gb3Igb24gYSBsYXRlciB0aWNrLiAgV2Ugc2V0IHRoaXMgdG8gdHJ1ZSBhdCBmaXJzdCwgYmVjYXVzZSBhbnlcbiAgLy8gYWN0aW9ucyB0aGF0IHNob3VsZG4ndCBoYXBwZW4gdW50aWwgXCJsYXRlclwiIHNob3VsZCBnZW5lcmFsbHkgYWxzb1xuICAvLyBub3QgaGFwcGVuIGJlZm9yZSB0aGUgZmlyc3Qgd3JpdGUgY2FsbC5cbiAgdGhpcy5zeW5jID0gdHJ1ZTtcblxuICAvLyB3aGVuZXZlciB3ZSByZXR1cm4gbnVsbCwgdGhlbiB3ZSBzZXQgYSBmbGFnIHRvIHNheVxuICAvLyB0aGF0IHdlJ3JlIGF3YWl0aW5nIGEgJ3JlYWRhYmxlJyBldmVudCBlbWlzc2lvbi5cbiAgdGhpcy5uZWVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZUxpc3RlbmluZyA9IGZhbHNlO1xuICB0aGlzLnJlc3VtZVNjaGVkdWxlZCA9IGZhbHNlO1xuXG4gIC8vIENyeXB0byBpcyBraW5kIG9mIG9sZCBhbmQgY3J1c3R5LiAgSGlzdG9yaWNhbGx5LCBpdHMgZGVmYXVsdCBzdHJpbmdcbiAgLy8gZW5jb2RpbmcgaXMgJ2JpbmFyeScgc28gd2UgaGF2ZSB0byBtYWtlIHRoaXMgY29uZmlndXJhYmxlLlxuICAvLyBFdmVyeXRoaW5nIGVsc2UgaW4gdGhlIHVuaXZlcnNlIHVzZXMgJ3V0ZjgnLCB0aG91Z2guXG4gIHRoaXMuZGVmYXVsdEVuY29kaW5nID0gb3B0aW9ucy5kZWZhdWx0RW5jb2RpbmcgfHwgJ3V0ZjgnO1xuXG4gIC8vIHdoZW4gcGlwaW5nLCB3ZSBvbmx5IGNhcmUgYWJvdXQgJ3JlYWRhYmxlJyBldmVudHMgdGhhdCBoYXBwZW5cbiAgLy8gYWZ0ZXIgcmVhZCgpaW5nIGFsbCB0aGUgYnl0ZXMgYW5kIG5vdCBnZXR0aW5nIGFueSBwdXNoYmFjay5cbiAgdGhpcy5yYW5PdXQgPSBmYWxzZTtcblxuICAvLyB0aGUgbnVtYmVyIG9mIHdyaXRlcnMgdGhhdCBhcmUgYXdhaXRpbmcgYSBkcmFpbiBldmVudCBpbiAucGlwZSgpc1xuICB0aGlzLmF3YWl0RHJhaW4gPSAwO1xuXG4gIC8vIGlmIHRydWUsIGEgbWF5YmVSZWFkTW9yZSBoYXMgYmVlbiBzY2hlZHVsZWRcbiAgdGhpcy5yZWFkaW5nTW9yZSA9IGZhbHNlO1xuXG4gIHRoaXMuZGVjb2RlciA9IG51bGw7XG4gIHRoaXMuZW5jb2RpbmcgPSBudWxsO1xuICBpZiAob3B0aW9ucy5lbmNvZGluZykge1xuICAgIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gICAgdGhpcy5kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgdGhpcy5lbmNvZGluZyA9IG9wdGlvbnMuZW5jb2Rpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gUmVhZGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSZWFkYWJsZSkpIHJldHVybiBuZXcgUmVhZGFibGUob3B0aW9ucyk7XG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZSA9IG5ldyBSZWFkYWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMpO1xuXG4gIC8vIGxlZ2FjeVxuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5yZWFkID09PSAnZnVuY3Rpb24nKSB0aGlzLl9yZWFkID0gb3B0aW9ucy5yZWFkO1xuXG4gIFN0cmVhbS5jYWxsKHRoaXMpO1xufVxuXG4vLyBNYW51YWxseSBzaG92ZSBzb21ldGhpbmcgaW50byB0aGUgcmVhZCgpIGJ1ZmZlci5cbi8vIFRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBoaWdoV2F0ZXJNYXJrIGhhcyBub3QgYmVlbiBoaXQgeWV0LFxuLy8gc2ltaWxhciB0byBob3cgV3JpdGFibGUud3JpdGUoKSByZXR1cm5zIHRydWUgaWYgeW91IHNob3VsZFxuLy8gd3JpdGUoKSBzb21lIG1vcmUuXG5SZWFkYWJsZS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gZW5jb2RpbmcgfHwgc3RhdGUuZGVmYXVsdEVuY29kaW5nO1xuICAgIGlmIChlbmNvZGluZyAhPT0gc3RhdGUuZW5jb2RpbmcpIHtcbiAgICAgIGNodW5rID0gYnVmZmVyU2hpbS5mcm9tKGNodW5rLCBlbmNvZGluZyk7XG4gICAgICBlbmNvZGluZyA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgZW5jb2RpbmcsIGZhbHNlKTtcbn07XG5cbi8vIFVuc2hpZnQgc2hvdWxkICphbHdheXMqIGJlIHNvbWV0aGluZyBkaXJlY3RseSBvdXQgb2YgcmVhZCgpXG5SZWFkYWJsZS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uIChjaHVuaykge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICByZXR1cm4gcmVhZGFibGVBZGRDaHVuayh0aGlzLCBzdGF0ZSwgY2h1bmssICcnLCB0cnVlKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5pc1BhdXNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9PT0gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiByZWFkYWJsZUFkZENodW5rKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBlbmNvZGluZywgYWRkVG9Gcm9udCkge1xuICB2YXIgZXIgPSBjaHVua0ludmFsaWQoc3RhdGUsIGNodW5rKTtcbiAgaWYgKGVyKSB7XG4gICAgc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICB9IGVsc2UgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSk7XG4gIH0gZWxzZSBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuayAmJiBjaHVuay5sZW5ndGggPiAwKSB7XG4gICAgaWYgKHN0YXRlLmVuZGVkICYmICFhZGRUb0Zyb250KSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcignc3RyZWFtLnB1c2goKSBhZnRlciBFT0YnKTtcbiAgICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGUpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUuZW5kRW1pdHRlZCAmJiBhZGRUb0Zyb250KSB7XG4gICAgICB2YXIgX2UgPSBuZXcgRXJyb3IoJ3N0cmVhbS51bnNoaWZ0KCkgYWZ0ZXIgZW5kIGV2ZW50Jyk7XG4gICAgICBzdHJlYW0uZW1pdCgnZXJyb3InLCBfZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBza2lwQWRkO1xuICAgICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIWFkZFRvRnJvbnQgJiYgIWVuY29kaW5nKSB7XG4gICAgICAgIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7XG4gICAgICAgIHNraXBBZGQgPSAhc3RhdGUub2JqZWN0TW9kZSAmJiBjaHVuay5sZW5ndGggPT09IDA7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWRkVG9Gcm9udCkgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuXG4gICAgICAvLyBEb24ndCBhZGQgdG8gdGhlIGJ1ZmZlciBpZiB3ZSd2ZSBkZWNvZGVkIHRvIGFuIGVtcHR5IHN0cmluZyBjaHVuayBhbmRcbiAgICAgIC8vIHdlJ3JlIG5vdCBpbiBvYmplY3QgbW9kZVxuICAgICAgaWYgKCFza2lwQWRkKSB7XG4gICAgICAgIC8vIGlmIHdlIHdhbnQgdGhlIGRhdGEgbm93LCBqdXN0IGVtaXQgaXQuXG4gICAgICAgIGlmIChzdGF0ZS5mbG93aW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiAhc3RhdGUuc3luYykge1xuICAgICAgICAgIHN0cmVhbS5lbWl0KCdkYXRhJywgY2h1bmspO1xuICAgICAgICAgIHN0cmVhbS5yZWFkKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYnVmZmVyIGluZm8uXG4gICAgICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgICAgICAgIGlmIChhZGRUb0Zyb250KSBzdGF0ZS5idWZmZXIudW5zaGlmdChjaHVuayk7ZWxzZSBzdGF0ZS5idWZmZXIucHVzaChjaHVuayk7XG5cbiAgICAgICAgICBpZiAoc3RhdGUubmVlZFJlYWRhYmxlKSBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXliZVJlYWRNb3JlKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghYWRkVG9Gcm9udCkge1xuICAgIHN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBuZWVkTW9yZURhdGEoc3RhdGUpO1xufVxuXG4vLyBpZiBpdCdzIHBhc3QgdGhlIGhpZ2ggd2F0ZXIgbWFyaywgd2UgY2FuIHB1c2ggaW4gc29tZSBtb3JlLlxuLy8gQWxzbywgaWYgd2UgaGF2ZSBubyBkYXRhIHlldCwgd2UgY2FuIHN0YW5kIHNvbWVcbi8vIG1vcmUgYnl0ZXMuICBUaGlzIGlzIHRvIHdvcmsgYXJvdW5kIGNhc2VzIHdoZXJlIGh3bT0wLFxuLy8gc3VjaCBhcyB0aGUgcmVwbC4gIEFsc28sIGlmIHRoZSBwdXNoKCkgdHJpZ2dlcmVkIGFcbi8vIHJlYWRhYmxlIGV2ZW50LCBhbmQgdGhlIHVzZXIgY2FsbGVkIHJlYWQobGFyZ2VOdW1iZXIpIHN1Y2ggdGhhdFxuLy8gbmVlZFJlYWRhYmxlIHdhcyBzZXQsIHRoZW4gd2Ugb3VnaHQgdG8gcHVzaCBtb3JlLCBzbyB0aGF0IGFub3RoZXJcbi8vICdyZWFkYWJsZScgZXZlbnQgd2lsbCBiZSB0cmlnZ2VyZWQuXG5mdW5jdGlvbiBuZWVkTW9yZURhdGEoc3RhdGUpIHtcbiAgcmV0dXJuICFzdGF0ZS5lbmRlZCAmJiAoc3RhdGUubmVlZFJlYWRhYmxlIHx8IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUubGVuZ3RoID09PSAwKTtcbn1cblxuLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5SZWFkYWJsZS5wcm90b3R5cGUuc2V0RW5jb2RpbmcgPSBmdW5jdGlvbiAoZW5jKSB7XG4gIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuYyk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZW5jb2RpbmcgPSBlbmM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy8gRG9uJ3QgcmFpc2UgdGhlIGh3bSA+IDhNQlxudmFyIE1BWF9IV00gPSAweDgwMDAwMDtcbmZ1bmN0aW9uIGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pIHtcbiAgaWYgKG4gPj0gTUFYX0hXTSkge1xuICAgIG4gPSBNQVhfSFdNO1xuICB9IGVsc2Uge1xuICAgIC8vIEdldCB0aGUgbmV4dCBoaWdoZXN0IHBvd2VyIG9mIDIgdG8gcHJldmVudCBpbmNyZWFzaW5nIGh3bSBleGNlc3NpdmVseSBpblxuICAgIC8vIHRpbnkgYW1vdW50c1xuICAgIG4tLTtcbiAgICBuIHw9IG4gPj4+IDE7XG4gICAgbiB8PSBuID4+PiAyO1xuICAgIG4gfD0gbiA+Pj4gNDtcbiAgICBuIHw9IG4gPj4+IDg7XG4gICAgbiB8PSBuID4+PiAxNjtcbiAgICBuKys7XG4gIH1cbiAgcmV0dXJuIG47XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuZnVuY3Rpb24gaG93TXVjaFRvUmVhZChuLCBzdGF0ZSkge1xuICBpZiAobiA8PSAwIHx8IHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5lbmRlZCkgcmV0dXJuIDA7XG4gIGlmIChzdGF0ZS5vYmplY3RNb2RlKSByZXR1cm4gMTtcbiAgaWYgKG4gIT09IG4pIHtcbiAgICAvLyBPbmx5IGZsb3cgb25lIGJ1ZmZlciBhdCBhIHRpbWVcbiAgICBpZiAoc3RhdGUuZmxvd2luZyAmJiBzdGF0ZS5sZW5ndGgpIHJldHVybiBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhLmxlbmd0aDtlbHNlIHJldHVybiBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgLy8gSWYgd2UncmUgYXNraW5nIGZvciBtb3JlIHRoYW4gdGhlIGN1cnJlbnQgaHdtLCB0aGVuIHJhaXNlIHRoZSBod20uXG4gIGlmIChuID4gc3RhdGUuaGlnaFdhdGVyTWFyaykgc3RhdGUuaGlnaFdhdGVyTWFyayA9IGNvbXB1dGVOZXdIaWdoV2F0ZXJNYXJrKG4pO1xuICBpZiAobiA8PSBzdGF0ZS5sZW5ndGgpIHJldHVybiBuO1xuICAvLyBEb24ndCBoYXZlIGVub3VnaFxuICBpZiAoIXN0YXRlLmVuZGVkKSB7XG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICByZXR1cm4gMDtcbiAgfVxuICByZXR1cm4gc3RhdGUubGVuZ3RoO1xufVxuXG4vLyB5b3UgY2FuIG92ZXJyaWRlIGVpdGhlciB0aGlzIG1ldGhvZCwgb3IgdGhlIGFzeW5jIF9yZWFkKG4pIGJlbG93LlxuUmVhZGFibGUucHJvdG90eXBlLnJlYWQgPSBmdW5jdGlvbiAobikge1xuICBkZWJ1ZygncmVhZCcsIG4pO1xuICBuID0gcGFyc2VJbnQobiwgMTApO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICB2YXIgbk9yaWcgPSBuO1xuXG4gIGlmIChuICE9PSAwKSBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcblxuICAvLyBpZiB3ZSdyZSBkb2luZyByZWFkKDApIHRvIHRyaWdnZXIgYSByZWFkYWJsZSBldmVudCwgYnV0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlciwgdGhlbiBqdXN0IHRyaWdnZXJcbiAgLy8gdGhlICdyZWFkYWJsZScgZXZlbnQgYW5kIG1vdmUgb24uXG4gIGlmIChuID09PSAwICYmIHN0YXRlLm5lZWRSZWFkYWJsZSAmJiAoc3RhdGUubGVuZ3RoID49IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUuZW5kZWQpKSB7XG4gICAgZGVidWcoJ3JlYWQ6IGVtaXRSZWFkYWJsZScsIHN0YXRlLmxlbmd0aCwgc3RhdGUuZW5kZWQpO1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO2Vsc2UgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbiA9IGhvd011Y2hUb1JlYWQobiwgc3RhdGUpO1xuXG4gIC8vIGlmIHdlJ3ZlIGVuZGVkLCBhbmQgd2UncmUgbm93IGNsZWFyLCB0aGVuIGZpbmlzaCBpdCB1cC5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUuZW5kZWQpIHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEFsbCB0aGUgYWN0dWFsIGNodW5rIGdlbmVyYXRpb24gbG9naWMgbmVlZHMgdG8gYmVcbiAgLy8gKmJlbG93KiB0aGUgY2FsbCB0byBfcmVhZC4gIFRoZSByZWFzb24gaXMgdGhhdCBpbiBjZXJ0YWluXG4gIC8vIHN5bnRoZXRpYyBzdHJlYW0gY2FzZXMsIHN1Y2ggYXMgcGFzc3Rocm91Z2ggc3RyZWFtcywgX3JlYWRcbiAgLy8gbWF5IGJlIGEgY29tcGxldGVseSBzeW5jaHJvbm91cyBvcGVyYXRpb24gd2hpY2ggbWF5IGNoYW5nZVxuICAvLyB0aGUgc3RhdGUgb2YgdGhlIHJlYWQgYnVmZmVyLCBwcm92aWRpbmcgZW5vdWdoIGRhdGEgd2hlblxuICAvLyBiZWZvcmUgdGhlcmUgd2FzICpub3QqIGVub3VnaC5cbiAgLy9cbiAgLy8gU28sIHRoZSBzdGVwcyBhcmU6XG4gIC8vIDEuIEZpZ3VyZSBvdXQgd2hhdCB0aGUgc3RhdGUgb2YgdGhpbmdzIHdpbGwgYmUgYWZ0ZXIgd2UgZG9cbiAgLy8gYSByZWFkIGZyb20gdGhlIGJ1ZmZlci5cbiAgLy9cbiAgLy8gMi4gSWYgdGhhdCByZXN1bHRpbmcgc3RhdGUgd2lsbCB0cmlnZ2VyIGEgX3JlYWQsIHRoZW4gY2FsbCBfcmVhZC5cbiAgLy8gTm90ZSB0aGF0IHRoaXMgbWF5IGJlIGFzeW5jaHJvbm91cywgb3Igc3luY2hyb25vdXMuICBZZXMsIGl0IGlzXG4gIC8vIGRlZXBseSB1Z2x5IHRvIHdyaXRlIEFQSXMgdGhpcyB3YXksIGJ1dCB0aGF0IHN0aWxsIGRvZXNuJ3QgbWVhblxuICAvLyB0aGF0IHRoZSBSZWFkYWJsZSBjbGFzcyBzaG91bGQgYmVoYXZlIGltcHJvcGVybHksIGFzIHN0cmVhbXMgYXJlXG4gIC8vIGRlc2lnbmVkIHRvIGJlIHN5bmMvYXN5bmMgYWdub3N0aWMuXG4gIC8vIFRha2Ugbm90ZSBpZiB0aGUgX3JlYWQgY2FsbCBpcyBzeW5jIG9yIGFzeW5jIChpZSwgaWYgdGhlIHJlYWQgY2FsbFxuICAvLyBoYXMgcmV0dXJuZWQgeWV0KSwgc28gdGhhdCB3ZSBrbm93IHdoZXRoZXIgb3Igbm90IGl0J3Mgc2FmZSB0byBlbWl0XG4gIC8vICdyZWFkYWJsZScgZXRjLlxuICAvL1xuICAvLyAzLiBBY3R1YWxseSBwdWxsIHRoZSByZXF1ZXN0ZWQgY2h1bmtzIG91dCBvZiB0aGUgYnVmZmVyIGFuZCByZXR1cm4uXG5cbiAgLy8gaWYgd2UgbmVlZCBhIHJlYWRhYmxlIGV2ZW50LCB0aGVuIHdlIG5lZWQgdG8gZG8gc29tZSByZWFkaW5nLlxuICB2YXIgZG9SZWFkID0gc3RhdGUubmVlZFJlYWRhYmxlO1xuICBkZWJ1ZygnbmVlZCByZWFkYWJsZScsIGRvUmVhZCk7XG5cbiAgLy8gaWYgd2UgY3VycmVudGx5IGhhdmUgbGVzcyB0aGFuIHRoZSBoaWdoV2F0ZXJNYXJrLCB0aGVuIGFsc28gcmVhZCBzb21lXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgfHwgc3RhdGUubGVuZ3RoIC0gbiA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkb1JlYWQgPSB0cnVlO1xuICAgIGRlYnVnKCdsZW5ndGggbGVzcyB0aGFuIHdhdGVybWFyaycsIGRvUmVhZCk7XG4gIH1cblxuICAvLyBob3dldmVyLCBpZiB3ZSd2ZSBlbmRlZCwgdGhlbiB0aGVyZSdzIG5vIHBvaW50LCBhbmQgaWYgd2UncmUgYWxyZWFkeVxuICAvLyByZWFkaW5nLCB0aGVuIGl0J3MgdW5uZWNlc3NhcnkuXG4gIGlmIChzdGF0ZS5lbmRlZCB8fCBzdGF0ZS5yZWFkaW5nKSB7XG4gICAgZG9SZWFkID0gZmFsc2U7XG4gICAgZGVidWcoJ3JlYWRpbmcgb3IgZW5kZWQnLCBkb1JlYWQpO1xuICB9IGVsc2UgaWYgKGRvUmVhZCkge1xuICAgIGRlYnVnKCdkbyByZWFkJyk7XG4gICAgc3RhdGUucmVhZGluZyA9IHRydWU7XG4gICAgc3RhdGUuc3luYyA9IHRydWU7XG4gICAgLy8gaWYgdGhlIGxlbmd0aCBpcyBjdXJyZW50bHkgemVybywgdGhlbiB3ZSAqbmVlZCogYSByZWFkYWJsZSBldmVudC5cbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgIC8vIGNhbGwgaW50ZXJuYWwgcmVhZCBtZXRob2RcbiAgICB0aGlzLl9yZWFkKHN0YXRlLmhpZ2hXYXRlck1hcmspO1xuICAgIHN0YXRlLnN5bmMgPSBmYWxzZTtcbiAgICAvLyBJZiBfcmVhZCBwdXNoZWQgZGF0YSBzeW5jaHJvbm91c2x5LCB0aGVuIGByZWFkaW5nYCB3aWxsIGJlIGZhbHNlLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHJlLWV2YWx1YXRlIGhvdyBtdWNoIGRhdGEgd2UgY2FuIHJldHVybiB0byB0aGUgdXNlci5cbiAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIG4gPSBob3dNdWNoVG9SZWFkKG5PcmlnLCBzdGF0ZSk7XG4gIH1cblxuICB2YXIgcmV0O1xuICBpZiAobiA+IDApIHJldCA9IGZyb21MaXN0KG4sIHN0YXRlKTtlbHNlIHJldCA9IG51bGw7XG5cbiAgaWYgKHJldCA9PT0gbnVsbCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgbiA9IDA7XG4gIH0gZWxzZSB7XG4gICAgc3RhdGUubGVuZ3RoIC09IG47XG4gIH1cblxuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBub3RoaW5nIGluIHRoZSBidWZmZXIsIHRoZW4gd2Ugd2FudCB0byBrbm93XG4gICAgLy8gYXMgc29vbiBhcyB3ZSAqZG8qIGdldCBzb21ldGhpbmcgaW50byB0aGUgYnVmZmVyLlxuICAgIGlmICghc3RhdGUuZW5kZWQpIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG5cbiAgICAvLyBJZiB3ZSB0cmllZCB0byByZWFkKCkgcGFzdCB0aGUgRU9GLCB0aGVuIGVtaXQgZW5kIG9uIHRoZSBuZXh0IHRpY2suXG4gICAgaWYgKG5PcmlnICE9PSBuICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgfVxuXG4gIGlmIChyZXQgIT09IG51bGwpIHRoaXMuZW1pdCgnZGF0YScsIHJldCk7XG5cbiAgcmV0dXJuIHJldDtcbn07XG5cbmZ1bmN0aW9uIGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspIHtcbiAgdmFyIGVyID0gbnVsbDtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoY2h1bmspICYmIHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IG51bGwgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIHJldHVybiBlcjtcbn1cblxuZnVuY3Rpb24gb25Fb2ZDaHVuayhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5lbmRlZCkgcmV0dXJuO1xuICBpZiAoc3RhdGUuZGVjb2Rlcikge1xuICAgIHZhciBjaHVuayA9IHN0YXRlLmRlY29kZXIuZW5kKCk7XG4gICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkge1xuICAgICAgc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG5cbiAgLy8gZW1pdCAncmVhZGFibGUnIG5vdyB0byBtYWtlIHN1cmUgaXQgZ2V0cyBwaWNrZWQgdXAuXG4gIGVtaXRSZWFkYWJsZShzdHJlYW0pO1xufVxuXG4vLyBEb24ndCBlbWl0IHJlYWRhYmxlIHJpZ2h0IGF3YXkgaW4gc3luYyBtb2RlLCBiZWNhdXNlIHRoaXMgY2FuIHRyaWdnZXJcbi8vIGFub3RoZXIgcmVhZCgpIGNhbGwgPT4gc3RhY2sgb3ZlcmZsb3cuICBUaGlzIHdheSwgaXQgbWlnaHQgdHJpZ2dlclxuLy8gYSBuZXh0VGljayByZWN1cnNpb24gd2FybmluZywgYnV0IHRoYXQncyBub3Qgc28gYmFkLlxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlKHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIHN0YXRlLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICBpZiAoIXN0YXRlLmVtaXR0ZWRSZWFkYWJsZSkge1xuICAgIGRlYnVnKCdlbWl0UmVhZGFibGUnLCBzdGF0ZS5mbG93aW5nKTtcbiAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSB0cnVlO1xuICAgIGlmIChzdGF0ZS5zeW5jKSBwcm9jZXNzTmV4dFRpY2soZW1pdFJlYWRhYmxlXywgc3RyZWFtKTtlbHNlIGVtaXRSZWFkYWJsZV8oc3RyZWFtKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0UmVhZGFibGVfKHN0cmVhbSkge1xuICBkZWJ1ZygnZW1pdCByZWFkYWJsZScpO1xuICBzdHJlYW0uZW1pdCgncmVhZGFibGUnKTtcbiAgZmxvdyhzdHJlYW0pO1xufVxuXG4vLyBhdCB0aGlzIHBvaW50LCB0aGUgdXNlciBoYXMgcHJlc3VtYWJseSBzZWVuIHRoZSAncmVhZGFibGUnIGV2ZW50LFxuLy8gYW5kIGNhbGxlZCByZWFkKCkgdG8gY29uc3VtZSBzb21lIGRhdGEuICB0aGF0IG1heSBoYXZlIHRyaWdnZXJlZFxuLy8gaW4gdHVybiBhbm90aGVyIF9yZWFkKG4pIGNhbGwsIGluIHdoaWNoIGNhc2UgcmVhZGluZyA9IHRydWUgaWZcbi8vIGl0J3MgaW4gcHJvZ3Jlc3MuXG4vLyBIb3dldmVyLCBpZiB3ZSdyZSBub3QgZW5kZWQsIG9yIHJlYWRpbmcsIGFuZCB0aGUgbGVuZ3RoIDwgaHdtLFxuLy8gdGhlbiBnbyBhaGVhZCBhbmQgdHJ5IHRvIHJlYWQgc29tZSBtb3JlIHByZWVtcHRpdmVseS5cbmZ1bmN0aW9uIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnJlYWRpbmdNb3JlKSB7XG4gICAgc3RhdGUucmVhZGluZ01vcmUgPSB0cnVlO1xuICAgIHByb2Nlc3NOZXh0VGljayhtYXliZVJlYWRNb3JlXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZV8oc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbGVuID0gc3RhdGUubGVuZ3RoO1xuICB3aGlsZSAoIXN0YXRlLnJlYWRpbmcgJiYgIXN0YXRlLmZsb3dpbmcgJiYgIXN0YXRlLmVuZGVkICYmIHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkZWJ1ZygnbWF5YmVSZWFkTW9yZSByZWFkIDAnKTtcbiAgICBzdHJlYW0ucmVhZCgwKTtcbiAgICBpZiAobGVuID09PSBzdGF0ZS5sZW5ndGgpXG4gICAgICAvLyBkaWRuJ3QgZ2V0IGFueSBkYXRhLCBzdG9wIHNwaW5uaW5nLlxuICAgICAgYnJlYWs7ZWxzZSBsZW4gPSBzdGF0ZS5sZW5ndGg7XG4gIH1cbiAgc3RhdGUucmVhZGluZ01vcmUgPSBmYWxzZTtcbn1cblxuLy8gYWJzdHJhY3QgbWV0aG9kLiAgdG8gYmUgb3ZlcnJpZGRlbiBpbiBzcGVjaWZpYyBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gY2FsbCBjYihlciwgZGF0YSkgd2hlcmUgZGF0YSBpcyA8PSBuIGluIGxlbmd0aC5cbi8vIGZvciB2aXJ0dWFsIChub24tc3RyaW5nLCBub24tYnVmZmVyKSBzdHJlYW1zLCBcImxlbmd0aFwiIGlzIHNvbWV3aGF0XG4vLyBhcmJpdHJhcnksIGFuZCBwZXJoYXBzIG5vdCB2ZXJ5IG1lYW5pbmdmdWwuXG5SZWFkYWJsZS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdfcmVhZCgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpKTtcbn07XG5cblJlYWRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKGRlc3QsIHBpcGVPcHRzKSB7XG4gIHZhciBzcmMgPSB0aGlzO1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIHN3aXRjaCAoc3RhdGUucGlwZXNDb3VudCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHN0YXRlLnBpcGVzID0gZGVzdDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMTpcbiAgICAgIHN0YXRlLnBpcGVzID0gW3N0YXRlLnBpcGVzLCBkZXN0XTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBzdGF0ZS5waXBlcy5wdXNoKGRlc3QpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgc3RhdGUucGlwZXNDb3VudCArPSAxO1xuICBkZWJ1ZygncGlwZSBjb3VudD0lZCBvcHRzPSVqJywgc3RhdGUucGlwZXNDb3VudCwgcGlwZU9wdHMpO1xuXG4gIHZhciBkb0VuZCA9ICghcGlwZU9wdHMgfHwgcGlwZU9wdHMuZW5kICE9PSBmYWxzZSkgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRvdXQgJiYgZGVzdCAhPT0gcHJvY2Vzcy5zdGRlcnI7XG5cbiAgdmFyIGVuZEZuID0gZG9FbmQgPyBvbmVuZCA6IGNsZWFudXA7XG4gIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBwcm9jZXNzTmV4dFRpY2soZW5kRm4pO2Vsc2Ugc3JjLm9uY2UoJ2VuZCcsIGVuZEZuKTtcblxuICBkZXN0Lm9uKCd1bnBpcGUnLCBvbnVucGlwZSk7XG4gIGZ1bmN0aW9uIG9udW5waXBlKHJlYWRhYmxlKSB7XG4gICAgZGVidWcoJ29udW5waXBlJyk7XG4gICAgaWYgKHJlYWRhYmxlID09PSBzcmMpIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbmVuZCgpIHtcbiAgICBkZWJ1Zygnb25lbmQnKTtcbiAgICBkZXN0LmVuZCgpO1xuICB9XG5cbiAgLy8gd2hlbiB0aGUgZGVzdCBkcmFpbnMsIGl0IHJlZHVjZXMgdGhlIGF3YWl0RHJhaW4gY291bnRlclxuICAvLyBvbiB0aGUgc291cmNlLiAgVGhpcyB3b3VsZCBiZSBtb3JlIGVsZWdhbnQgd2l0aCBhIC5vbmNlKClcbiAgLy8gaGFuZGxlciBpbiBmbG93KCksIGJ1dCBhZGRpbmcgYW5kIHJlbW92aW5nIHJlcGVhdGVkbHkgaXNcbiAgLy8gdG9vIHNsb3cuXG4gIHZhciBvbmRyYWluID0gcGlwZU9uRHJhaW4oc3JjKTtcbiAgZGVzdC5vbignZHJhaW4nLCBvbmRyYWluKTtcblxuICB2YXIgY2xlYW5lZFVwID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgZGVidWcoJ2NsZWFudXAnKTtcbiAgICAvLyBjbGVhbnVwIGV2ZW50IGhhbmRsZXJzIG9uY2UgdGhlIHBpcGUgaXMgYnJva2VuXG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZHJhaW4nLCBvbmRyYWluKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ3VucGlwZScsIG9udW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIGNsZWFudXApO1xuICAgIHNyYy5yZW1vdmVMaXN0ZW5lcignZGF0YScsIG9uZGF0YSk7XG5cbiAgICBjbGVhbmVkVXAgPSB0cnVlO1xuXG4gICAgLy8gaWYgdGhlIHJlYWRlciBpcyB3YWl0aW5nIGZvciBhIGRyYWluIGV2ZW50IGZyb20gdGhpc1xuICAgIC8vIHNwZWNpZmljIHdyaXRlciwgdGhlbiBpdCB3b3VsZCBjYXVzZSBpdCB0byBuZXZlciBzdGFydFxuICAgIC8vIGZsb3dpbmcgYWdhaW4uXG4gICAgLy8gU28sIGlmIHRoaXMgaXMgYXdhaXRpbmcgYSBkcmFpbiwgdGhlbiB3ZSBqdXN0IGNhbGwgaXQgbm93LlxuICAgIC8vIElmIHdlIGRvbid0IGtub3csIHRoZW4gYXNzdW1lIHRoYXQgd2UgYXJlIHdhaXRpbmcgZm9yIG9uZS5cbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiAmJiAoIWRlc3QuX3dyaXRhYmxlU3RhdGUgfHwgZGVzdC5fd3JpdGFibGVTdGF0ZS5uZWVkRHJhaW4pKSBvbmRyYWluKCk7XG4gIH1cblxuICAvLyBJZiB0aGUgdXNlciBwdXNoZXMgbW9yZSBkYXRhIHdoaWxlIHdlJ3JlIHdyaXRpbmcgdG8gZGVzdCB0aGVuIHdlJ2xsIGVuZCB1cFxuICAvLyBpbiBvbmRhdGEgYWdhaW4uIEhvd2V2ZXIsIHdlIG9ubHkgd2FudCB0byBpbmNyZWFzZSBhd2FpdERyYWluIG9uY2UgYmVjYXVzZVxuICAvLyBkZXN0IHdpbGwgb25seSBlbWl0IG9uZSAnZHJhaW4nIGV2ZW50IGZvciB0aGUgbXVsdGlwbGUgd3JpdGVzLlxuICAvLyA9PiBJbnRyb2R1Y2UgYSBndWFyZCBvbiBpbmNyZWFzaW5nIGF3YWl0RHJhaW4uXG4gIHZhciBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gIHNyYy5vbignZGF0YScsIG9uZGF0YSk7XG4gIGZ1bmN0aW9uIG9uZGF0YShjaHVuaykge1xuICAgIGRlYnVnKCdvbmRhdGEnKTtcbiAgICBpbmNyZWFzZWRBd2FpdERyYWluID0gZmFsc2U7XG4gICAgdmFyIHJldCA9IGRlc3Qud3JpdGUoY2h1bmspO1xuICAgIGlmIChmYWxzZSA9PT0gcmV0ICYmICFpbmNyZWFzZWRBd2FpdERyYWluKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB1bnBpcGVkIGR1cmluZyBgZGVzdC53cml0ZSgpYCwgaXQgaXMgcG9zc2libGVcbiAgICAgIC8vIHRvIGdldCBzdHVjayBpbiBhIHBlcm1hbmVudGx5IHBhdXNlZCBzdGF0ZSBpZiB0aGF0IHdyaXRlXG4gICAgICAvLyBhbHNvIHJldHVybmVkIGZhbHNlLlxuICAgICAgLy8gPT4gQ2hlY2sgd2hldGhlciBgZGVzdGAgaXMgc3RpbGwgYSBwaXBpbmcgZGVzdGluYXRpb24uXG4gICAgICBpZiAoKHN0YXRlLnBpcGVzQ291bnQgPT09IDEgJiYgc3RhdGUucGlwZXMgPT09IGRlc3QgfHwgc3RhdGUucGlwZXNDb3VudCA+IDEgJiYgaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCkgIT09IC0xKSAmJiAhY2xlYW5lZFVwKSB7XG4gICAgICAgIGRlYnVnKCdmYWxzZSB3cml0ZSByZXNwb25zZSwgcGF1c2UnLCBzcmMuX3JlYWRhYmxlU3RhdGUuYXdhaXREcmFpbik7XG4gICAgICAgIHNyYy5fcmVhZGFibGVTdGF0ZS5hd2FpdERyYWluKys7XG4gICAgICAgIGluY3JlYXNlZEF3YWl0RHJhaW4gPSB0cnVlO1xuICAgICAgfVxuICAgICAgc3JjLnBhdXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIGRlc3QgaGFzIGFuIGVycm9yLCB0aGVuIHN0b3AgcGlwaW5nIGludG8gaXQuXG4gIC8vIGhvd2V2ZXIsIGRvbid0IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvciBmb3IgdGhpcy5cbiAgZnVuY3Rpb24gb25lcnJvcihlcikge1xuICAgIGRlYnVnKCdvbmVycm9yJywgZXIpO1xuICAgIHVucGlwZSgpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG4gICAgaWYgKEVFbGlzdGVuZXJDb3VudChkZXN0LCAnZXJyb3InKSA9PT0gMCkgZGVzdC5lbWl0KCdlcnJvcicsIGVyKTtcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSBvdXIgZXJyb3IgaGFuZGxlciBpcyBhdHRhY2hlZCBiZWZvcmUgdXNlcmxhbmQgb25lcy5cbiAgcHJlcGVuZExpc3RlbmVyKGRlc3QsICdlcnJvcicsIG9uZXJyb3IpO1xuXG4gIC8vIEJvdGggY2xvc2UgYW5kIGZpbmlzaCBzaG91bGQgdHJpZ2dlciB1bnBpcGUsIGJ1dCBvbmx5IG9uY2UuXG4gIGZ1bmN0aW9uIG9uY2xvc2UoKSB7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIHVucGlwZSgpO1xuICB9XG4gIGRlc3Qub25jZSgnY2xvc2UnLCBvbmNsb3NlKTtcbiAgZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgZGVidWcoJ29uZmluaXNoJyk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuICBkZXN0Lm9uY2UoJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblxuICBmdW5jdGlvbiB1bnBpcGUoKSB7XG4gICAgZGVidWcoJ3VucGlwZScpO1xuICAgIHNyYy51bnBpcGUoZGVzdCk7XG4gIH1cblxuICAvLyB0ZWxsIHRoZSBkZXN0IHRoYXQgaXQncyBiZWluZyBwaXBlZCB0b1xuICBkZXN0LmVtaXQoJ3BpcGUnLCBzcmMpO1xuXG4gIC8vIHN0YXJ0IHRoZSBmbG93IGlmIGl0IGhhc24ndCBiZWVuIHN0YXJ0ZWQgYWxyZWFkeS5cbiAgaWYgKCFzdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BpcGUgcmVzdW1lJyk7XG4gICAgc3JjLnJlc3VtZSgpO1xuICB9XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5mdW5jdGlvbiBwaXBlT25EcmFpbihzcmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdGUgPSBzcmMuX3JlYWRhYmxlU3RhdGU7XG4gICAgZGVidWcoJ3BpcGVPbkRyYWluJywgc3RhdGUuYXdhaXREcmFpbik7XG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4pIHN0YXRlLmF3YWl0RHJhaW4tLTtcbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbiA9PT0gMCAmJiBFRWxpc3RlbmVyQ291bnQoc3JjLCAnZGF0YScpKSB7XG4gICAgICBzdGF0ZS5mbG93aW5nID0gdHJ1ZTtcbiAgICAgIGZsb3coc3JjKTtcbiAgICB9XG4gIH07XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS51bnBpcGUgPSBmdW5jdGlvbiAoZGVzdCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuXG4gIC8vIGlmIHdlJ3JlIG5vdCBwaXBpbmcgYW55d2hlcmUsIHRoZW4gZG8gbm90aGluZy5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDApIHJldHVybiB0aGlzO1xuXG4gIC8vIGp1c3Qgb25lIGRlc3RpbmF0aW9uLiAgbW9zdCBjb21tb24gY2FzZS5cbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHtcbiAgICAvLyBwYXNzZWQgaW4gb25lLCBidXQgaXQncyBub3QgdGhlIHJpZ2h0IG9uZS5cbiAgICBpZiAoZGVzdCAmJiBkZXN0ICE9PSBzdGF0ZS5waXBlcykgcmV0dXJuIHRoaXM7XG5cbiAgICBpZiAoIWRlc3QpIGRlc3QgPSBzdGF0ZS5waXBlcztcblxuICAgIC8vIGdvdCBhIG1hdGNoLlxuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgaWYgKGRlc3QpIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzbG93IGNhc2UuIG11bHRpcGxlIHBpcGUgZGVzdGluYXRpb25zLlxuXG4gIGlmICghZGVzdCkge1xuICAgIC8vIHJlbW92ZSBhbGwuXG4gICAgdmFyIGRlc3RzID0gc3RhdGUucGlwZXM7XG4gICAgdmFyIGxlbiA9IHN0YXRlLnBpcGVzQ291bnQ7XG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RzW2ldLmVtaXQoJ3VucGlwZScsIHRoaXMpO1xuICAgIH1yZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHRyeSB0byBmaW5kIHRoZSByaWdodCBvbmUuXG4gIHZhciBpbmRleCA9IGluZGV4T2Yoc3RhdGUucGlwZXMsIGRlc3QpO1xuICBpZiAoaW5kZXggPT09IC0xKSByZXR1cm4gdGhpcztcblxuICBzdGF0ZS5waXBlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICBzdGF0ZS5waXBlc0NvdW50IC09IDE7XG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSBzdGF0ZS5waXBlcyA9IHN0YXRlLnBpcGVzWzBdO1xuXG4gIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBzZXQgdXAgZGF0YSBldmVudHMgaWYgdGhleSBhcmUgYXNrZWQgZm9yXG4vLyBFbnN1cmUgcmVhZGFibGUgbGlzdGVuZXJzIGV2ZW50dWFsbHkgZ2V0IHNvbWV0aGluZ1xuUmVhZGFibGUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2LCBmbikge1xuICB2YXIgcmVzID0gU3RyZWFtLnByb3RvdHlwZS5vbi5jYWxsKHRoaXMsIGV2LCBmbik7XG5cbiAgaWYgKGV2ID09PSAnZGF0YScpIHtcbiAgICAvLyBTdGFydCBmbG93aW5nIG9uIG5leHQgdGljayBpZiBzdHJlYW0gaXNuJ3QgZXhwbGljaXRseSBwYXVzZWRcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nICE9PSBmYWxzZSkgdGhpcy5yZXN1bWUoKTtcbiAgfSBlbHNlIGlmIChldiA9PT0gJ3JlYWRhYmxlJykge1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gICAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmICFzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZykge1xuICAgICAgc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcgPSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICAgICAgcHJvY2Vzc05leHRUaWNrKG5SZWFkaW5nTmV4dFRpY2ssIHRoaXMpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgZW1pdFJlYWRhYmxlKHRoaXMsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblJlYWRhYmxlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IFJlYWRhYmxlLnByb3RvdHlwZS5vbjtcblxuZnVuY3Rpb24gblJlYWRpbmdOZXh0VGljayhzZWxmKSB7XG4gIGRlYnVnKCdyZWFkYWJsZSBuZXh0dGljayByZWFkIDAnKTtcbiAgc2VsZi5yZWFkKDApO1xufVxuXG4vLyBwYXVzZSgpIGFuZCByZXN1bWUoKSBhcmUgcmVtbmFudHMgb2YgdGhlIGxlZ2FjeSByZWFkYWJsZSBzdHJlYW0gQVBJXG4vLyBJZiB0aGUgdXNlciB1c2VzIHRoZW0sIHRoZW4gc3dpdGNoIGludG8gb2xkIG1vZGUuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICBpZiAoIXN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lJyk7XG4gICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgcmVzdW1lKHRoaXMsIHN0YXRlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVzdW1lU2NoZWR1bGVkKSB7XG4gICAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzTmV4dFRpY2socmVzdW1lXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzdW1lXyhzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVhZGluZykge1xuICAgIGRlYnVnKCdyZXN1bWUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgc3RhdGUuYXdhaXREcmFpbiA9IDA7XG4gIHN0cmVhbS5lbWl0KCdyZXN1bWUnKTtcbiAgZmxvdyhzdHJlYW0pO1xuICBpZiAoc3RhdGUuZmxvd2luZyAmJiAhc3RhdGUucmVhZGluZykgc3RyZWFtLnJlYWQoMCk7XG59XG5cblJlYWRhYmxlLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2NhbGwgcGF1c2UgZmxvd2luZz0laicsIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyk7XG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nKSB7XG4gICAgZGVidWcoJ3BhdXNlJyk7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KCdwYXVzZScpO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gZmxvdyhzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBkZWJ1ZygnZmxvdycsIHN0YXRlLmZsb3dpbmcpO1xuICB3aGlsZSAoc3RhdGUuZmxvd2luZyAmJiBzdHJlYW0ucmVhZCgpICE9PSBudWxsKSB7fVxufVxuXG4vLyB3cmFwIGFuIG9sZC1zdHlsZSBzdHJlYW0gYXMgdGhlIGFzeW5jIGRhdGEgc291cmNlLlxuLy8gVGhpcyBpcyAqbm90KiBwYXJ0IG9mIHRoZSByZWFkYWJsZSBzdHJlYW0gaW50ZXJmYWNlLlxuLy8gSXQgaXMgYW4gdWdseSB1bmZvcnR1bmF0ZSBtZXNzIG9mIGhpc3RvcnkuXG5SZWFkYWJsZS5wcm90b3R5cGUud3JhcCA9IGZ1bmN0aW9uIChzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgc3RyZWFtLm9uKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgZW5kJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIgJiYgIXN0YXRlLmVuZGVkKSB7XG4gICAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuICAgICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkgc2VsZi5wdXNoKGNodW5rKTtcbiAgICB9XG5cbiAgICBzZWxmLnB1c2gobnVsbCk7XG4gIH0pO1xuXG4gIHN0cmVhbS5vbignZGF0YScsIGZ1bmN0aW9uIChjaHVuaykge1xuICAgIGRlYnVnKCd3cmFwcGVkIGRhdGEnKTtcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLndyaXRlKGNodW5rKTtcblxuICAgIC8vIGRvbid0IHNraXAgb3ZlciBmYWxzeSB2YWx1ZXMgaW4gb2JqZWN0TW9kZVxuICAgIGlmIChzdGF0ZS5vYmplY3RNb2RlICYmIChjaHVuayA9PT0gbnVsbCB8fCBjaHVuayA9PT0gdW5kZWZpbmVkKSkgcmV0dXJuO2Vsc2UgaWYgKCFzdGF0ZS5vYmplY3RNb2RlICYmICghY2h1bmsgfHwgIWNodW5rLmxlbmd0aCkpIHJldHVybjtcblxuICAgIHZhciByZXQgPSBzZWxmLnB1c2goY2h1bmspO1xuICAgIGlmICghcmV0KSB7XG4gICAgICBwYXVzZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLnBhdXNlKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBwcm94eSBhbGwgdGhlIG90aGVyIG1ldGhvZHMuXG4gIC8vIGltcG9ydGFudCB3aGVuIHdyYXBwaW5nIGZpbHRlcnMgYW5kIGR1cGxleGVzLlxuICBmb3IgKHZhciBpIGluIHN0cmVhbSkge1xuICAgIGlmICh0aGlzW2ldID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIHN0cmVhbVtpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpc1tpXSA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gc3RyZWFtW21ldGhvZF0uYXBwbHkoc3RyZWFtLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfShpKTtcbiAgICB9XG4gIH1cblxuICAvLyBwcm94eSBjZXJ0YWluIGltcG9ydGFudCBldmVudHMuXG4gIHZhciBldmVudHMgPSBbJ2Vycm9yJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knLCAncGF1c2UnLCAncmVzdW1lJ107XG4gIGZvckVhY2goZXZlbnRzLCBmdW5jdGlvbiAoZXYpIHtcbiAgICBzdHJlYW0ub24oZXYsIHNlbGYuZW1pdC5iaW5kKHNlbGYsIGV2KSk7XG4gIH0pO1xuXG4gIC8vIHdoZW4gd2UgdHJ5IHRvIGNvbnN1bWUgc29tZSBtb3JlIGJ5dGVzLCBzaW1wbHkgdW5wYXVzZSB0aGVcbiAgLy8gdW5kZXJseWluZyBzdHJlYW0uXG4gIHNlbGYuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICAgIGRlYnVnKCd3cmFwcGVkIF9yZWFkJywgbik7XG4gICAgaWYgKHBhdXNlZCkge1xuICAgICAgcGF1c2VkID0gZmFsc2U7XG4gICAgICBzdHJlYW0ucmVzdW1lKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBzZWxmO1xufTtcblxuLy8gZXhwb3NlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuUmVhZGFibGUuX2Zyb21MaXN0ID0gZnJvbUxpc3Q7XG5cbi8vIFBsdWNrIG9mZiBuIGJ5dGVzIGZyb20gYW4gYXJyYXkgb2YgYnVmZmVycy5cbi8vIExlbmd0aCBpcyB0aGUgY29tYmluZWQgbGVuZ3RocyBvZiBhbGwgdGhlIGJ1ZmZlcnMgaW4gdGhlIGxpc3QuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0KG4sIHN0YXRlKSB7XG4gIC8vIG5vdGhpbmcgYnVmZmVyZWRcbiAgaWYgKHN0YXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgdmFyIHJldDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldCA9IHN0YXRlLmJ1ZmZlci5zaGlmdCgpO2Vsc2UgaWYgKCFuIHx8IG4gPj0gc3RhdGUubGVuZ3RoKSB7XG4gICAgLy8gcmVhZCBpdCBhbGwsIHRydW5jYXRlIHRoZSBsaXN0XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIHJldCA9IHN0YXRlLmJ1ZmZlci5qb2luKCcnKTtlbHNlIGlmIChzdGF0ZS5idWZmZXIubGVuZ3RoID09PSAxKSByZXQgPSBzdGF0ZS5idWZmZXIuaGVhZC5kYXRhO2Vsc2UgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbmNhdChzdGF0ZS5sZW5ndGgpO1xuICAgIHN0YXRlLmJ1ZmZlci5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlYWQgcGFydCBvZiBsaXN0XG4gICAgcmV0ID0gZnJvbUxpc3RQYXJ0aWFsKG4sIHN0YXRlLmJ1ZmZlciwgc3RhdGUuZGVjb2Rlcik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBFeHRyYWN0cyBvbmx5IGVub3VnaCBidWZmZXJlZCBkYXRhIHRvIHNhdGlzZnkgdGhlIGFtb3VudCByZXF1ZXN0ZWQuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGZyb21MaXN0UGFydGlhbChuLCBsaXN0LCBoYXNTdHJpbmdzKSB7XG4gIHZhciByZXQ7XG4gIGlmIChuIDwgbGlzdC5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgLy8gc2xpY2UgaXMgdGhlIHNhbWUgZm9yIGJ1ZmZlcnMgYW5kIHN0cmluZ3NcbiAgICByZXQgPSBsaXN0LmhlYWQuZGF0YS5zbGljZSgwLCBuKTtcbiAgICBsaXN0LmhlYWQuZGF0YSA9IGxpc3QuaGVhZC5kYXRhLnNsaWNlKG4pO1xuICB9IGVsc2UgaWYgKG4gPT09IGxpc3QuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgIC8vIGZpcnN0IGNodW5rIGlzIGEgcGVyZmVjdCBtYXRjaFxuICAgIHJldCA9IGxpc3Quc2hpZnQoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyByZXN1bHQgc3BhbnMgbW9yZSB0aGFuIG9uZSBidWZmZXJcbiAgICByZXQgPSBoYXNTdHJpbmdzID8gY29weUZyb21CdWZmZXJTdHJpbmcobiwgbGlzdCkgOiBjb3B5RnJvbUJ1ZmZlcihuLCBsaXN0KTtcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGNoYXJhY3RlcnMgZnJvbSB0aGUgbGlzdCBvZiBidWZmZXJlZCBkYXRhXG4vLyBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyU3RyaW5nKG4sIGxpc3QpIHtcbiAgdmFyIHAgPSBsaXN0LmhlYWQ7XG4gIHZhciBjID0gMTtcbiAgdmFyIHJldCA9IHAuZGF0YTtcbiAgbiAtPSByZXQubGVuZ3RoO1xuICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgIHZhciBzdHIgPSBwLmRhdGE7XG4gICAgdmFyIG5iID0gbiA+IHN0ci5sZW5ndGggPyBzdHIubGVuZ3RoIDogbjtcbiAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHJldCArPSBzdHI7ZWxzZSByZXQgKz0gc3RyLnNsaWNlKDAsIG4pO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gc3RyLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBzdHIuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG4vLyBDb3BpZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGJ5dGVzIGZyb20gdGhlIGxpc3Qgb2YgYnVmZmVyZWQgZGF0YSBjaHVua3MuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cbmZ1bmN0aW9uIGNvcHlGcm9tQnVmZmVyKG4sIGxpc3QpIHtcbiAgdmFyIHJldCA9IGJ1ZmZlclNoaW0uYWxsb2NVbnNhZmUobik7XG4gIHZhciBwID0gbGlzdC5oZWFkO1xuICB2YXIgYyA9IDE7XG4gIHAuZGF0YS5jb3B5KHJldCk7XG4gIG4gLT0gcC5kYXRhLmxlbmd0aDtcbiAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICB2YXIgYnVmID0gcC5kYXRhO1xuICAgIHZhciBuYiA9IG4gPiBidWYubGVuZ3RoID8gYnVmLmxlbmd0aCA6IG47XG4gICAgYnVmLmNvcHkocmV0LCByZXQubGVuZ3RoIC0gbiwgMCwgbmIpO1xuICAgIG4gLT0gbmI7XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIGlmIChuYiA9PT0gYnVmLmxlbmd0aCkge1xuICAgICAgICArK2M7XG4gICAgICAgIGlmIChwLm5leHQpIGxpc3QuaGVhZCA9IHAubmV4dDtlbHNlIGxpc3QuaGVhZCA9IGxpc3QudGFpbCA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaXN0LmhlYWQgPSBwO1xuICAgICAgICBwLmRhdGEgPSBidWYuc2xpY2UobmIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgfVxuICAgICsrYztcbiAgfVxuICBsaXN0Lmxlbmd0aCAtPSBjO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBlbmRSZWFkYWJsZShzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuXG4gIC8vIElmIHdlIGdldCBoZXJlIGJlZm9yZSBjb25zdW1pbmcgYWxsIHRoZSBieXRlcywgdGhlbiB0aGF0IGlzIGFcbiAgLy8gYnVnIGluIG5vZGUuICBTaG91bGQgbmV2ZXIgaGFwcGVuLlxuICBpZiAoc3RhdGUubGVuZ3RoID4gMCkgdGhyb3cgbmV3IEVycm9yKCdcImVuZFJlYWRhYmxlKClcIiBjYWxsZWQgb24gbm9uLWVtcHR5IHN0cmVhbScpO1xuXG4gIGlmICghc3RhdGUuZW5kRW1pdHRlZCkge1xuICAgIHN0YXRlLmVuZGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzTmV4dFRpY2soZW5kUmVhZGFibGVOVCwgc3RhdGUsIHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGVOVChzdGF0ZSwgc3RyZWFtKSB7XG4gIC8vIENoZWNrIHRoYXQgd2UgZGlkbid0IGdldCBvbmUgbGFzdCB1bnNoaWZ0LlxuICBpZiAoIXN0YXRlLmVuZEVtaXR0ZWQgJiYgc3RhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgc3RhdGUuZW5kRW1pdHRlZCA9IHRydWU7XG4gICAgc3RyZWFtLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2VuZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmKHhzW2ldLCBpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmRleE9mKHhzLCB4KSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0geHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgaWYgKHhzW2ldID09PSB4KSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAoIXByb2Nlc3MudmVyc2lvbiB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MC4nKSA9PT0gMCB8fFxuICAgIHByb2Nlc3MudmVyc2lvbi5pbmRleE9mKCd2MS4nKSA9PT0gMCAmJiBwcm9jZXNzLnZlcnNpb24uaW5kZXhPZigndjEuOC4nKSAhPT0gMCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IG5leHRUaWNrO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBwcm9jZXNzLm5leHRUaWNrO1xufVxuXG5mdW5jdGlvbiBuZXh0VGljayhmbiwgYXJnMSwgYXJnMiwgYXJnMykge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJjYWxsYmFja1wiIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG4gIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgYXJncywgaTtcbiAgc3dpdGNoIChsZW4pIHtcbiAgY2FzZSAwOlxuICBjYXNlIDE6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZm4pO1xuICBjYXNlIDI6XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gYWZ0ZXJUaWNrT25lKCkge1xuICAgICAgZm4uY2FsbChudWxsLCBhcmcxKTtcbiAgICB9KTtcbiAgY2FzZSAzOlxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGlja1R3bygpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSwgYXJnMik7XG4gICAgfSk7XG4gIGNhc2UgNDpcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiBhZnRlclRpY2tUaHJlZSgpIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgYXJnMSwgYXJnMiwgYXJnMyk7XG4gICAgfSk7XG4gIGRlZmF1bHQ6XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gLSAxKTtcbiAgICBpID0gMDtcbiAgICB3aGlsZSAoaSA8IGFyZ3MubGVuZ3RoKSB7XG4gICAgICBhcmdzW2krK10gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uIGFmdGVyVGljaygpIHtcbiAgICAgIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy1uZXh0aWNrLWFyZ3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHJlYW0tYnJvd3NlcmlmeS9+L2lzYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbnZhciBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKTtcbnZhciBCdWZmZXIgPSBidWZmZXIuQnVmZmVyO1xudmFyIFNsb3dCdWZmZXIgPSBidWZmZXIuU2xvd0J1ZmZlcjtcbnZhciBNQVhfTEVOID0gYnVmZmVyLmtNYXhMZW5ndGggfHwgMjE0NzQ4MzY0NztcbmV4cG9ydHMuYWxsb2MgPSBmdW5jdGlvbiBhbGxvYyhzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIEJ1ZmZlci5hbGxvYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2Moc2l6ZSwgZmlsbCwgZW5jb2RpbmcpO1xuICB9XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBub3QgYmUgbnVtYmVyJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmIChzaXplID4gTUFYX0xFTikge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdzaXplIGlzIHRvbyBsYXJnZScpO1xuICB9XG4gIHZhciBlbmMgPSBlbmNvZGluZztcbiAgdmFyIF9maWxsID0gZmlsbDtcbiAgaWYgKF9maWxsID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmMgPSB1bmRlZmluZWQ7XG4gICAgX2ZpbGwgPSAwO1xuICB9XG4gIHZhciBidWYgPSBuZXcgQnVmZmVyKHNpemUpO1xuICBpZiAodHlwZW9mIF9maWxsID09PSAnc3RyaW5nJykge1xuICAgIHZhciBmaWxsQnVmID0gbmV3IEJ1ZmZlcihfZmlsbCwgZW5jKTtcbiAgICB2YXIgZmxlbiA9IGZpbGxCdWYubGVuZ3RoO1xuICAgIHZhciBpID0gLTE7XG4gICAgd2hpbGUgKCsraSA8IHNpemUpIHtcbiAgICAgIGJ1ZltpXSA9IGZpbGxCdWZbaSAlIGZsZW5dO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBidWYuZmlsbChfZmlsbCk7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn1cbmV4cG9ydHMuYWxsb2NVbnNhZmUgPSBmdW5jdGlvbiBhbGxvY1Vuc2FmZShzaXplKSB7XG4gIGlmICh0eXBlb2YgQnVmZmVyLmFsbG9jVW5zYWZlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvY1Vuc2FmZShzaXplKTtcbiAgfVxuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignc2l6ZSBtdXN0IGJlIGEgbnVtYmVyJyk7XG4gIH1cbiAgaWYgKHNpemUgPiBNQVhfTEVOKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NpemUgaXMgdG9vIGxhcmdlJyk7XG4gIH1cbiAgcmV0dXJuIG5ldyBCdWZmZXIoc2l6ZSk7XG59XG5leHBvcnRzLmZyb20gPSBmdW5jdGlvbiBmcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBCdWZmZXIuZnJvbSA9PT0gJ2Z1bmN0aW9uJyAmJiAoIWdsb2JhbC5VaW50OEFycmF5IHx8IFVpbnQ4QXJyYXkuZnJvbSAhPT0gQnVmZmVyLmZyb20pKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5mcm9tKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHZhciBvZmZzZXQgPSBlbmNvZGluZ09yT2Zmc2V0O1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb2Zmc2V0ID0gMDtcbiAgICB9XG4gICAgdmFyIGxlbiA9IGxlbmd0aDtcbiAgICBpZiAodHlwZW9mIGxlbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxlbiA9IHZhbHVlLmJ5dGVMZW5ndGggLSBvZmZzZXQ7XG4gICAgfVxuICAgIGlmIChvZmZzZXQgPj0gdmFsdWUuYnl0ZUxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ29mZnNldFxcJyBpcyBvdXQgb2YgYm91bmRzJyk7XG4gICAgfVxuICAgIGlmIChsZW4gPiB2YWx1ZS5ieXRlTGVuZ3RoIC0gb2Zmc2V0KSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnbGVuZ3RoXFwnIGlzIG91dCBvZiBib3VuZHMnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCdWZmZXIodmFsdWUuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBsZW4pKTtcbiAgfVxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbHVlKSkge1xuICAgIHZhciBvdXQgPSBuZXcgQnVmZmVyKHZhbHVlLmxlbmd0aCk7XG4gICAgdmFsdWUuY29weShvdXQsIDAsIDAsIHZhbHVlLmxlbmd0aCk7XG4gICAgcmV0dXJuIG91dDtcbiAgfVxuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh2YWx1ZS50eXBlID09PSAnQnVmZmVyJyAmJiBBcnJheS5pc0FycmF5KHZhbHVlLmRhdGEpKSB7XG4gICAgICByZXR1cm4gbmV3IEJ1ZmZlcih2YWx1ZS5kYXRhKTtcbiAgICB9XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLCBCdWZmZXIsICcgKyAnQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKTtcbn1cbmV4cG9ydHMuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gYWxsb2NVbnNhZmVTbG93KHNpemUpIHtcbiAgaWYgKHR5cGVvZiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3coc2l6ZSk7XG4gIH1cbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3NpemUgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG4gIGlmIChzaXplID49IE1BWF9MRU4pIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignc2l6ZSBpcyB0b28gbGFyZ2UnKTtcbiAgfVxuICByZXR1cm4gbmV3IFNsb3dCdWZmZXIoc2l6ZSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnVmZmVyLXNoaW1zL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIE5PVEU6IFRoZXNlIHR5cGUgY2hlY2tpbmcgZnVuY3Rpb25zIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIGBpbnN0YW5jZW9mYFxuLy8gYmVjYXVzZSBpdCBpcyBmcmFnaWxlIGFuZCBjYW4gYmUgZWFzaWx5IGZha2VkIHdpdGggYE9iamVjdC5jcmVhdGUoKWAuXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKTtcbiAgfVxuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cbmV4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJztcbn1cbmV4cG9ydHMuaXNCb29sZWFuID0gaXNCb29sZWFuO1xuXG5mdW5jdGlvbiBpc051bGwoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IG51bGw7XG59XG5leHBvcnRzLmlzTnVsbCA9IGlzTnVsbDtcblxuZnVuY3Rpb24gaXNOdWxsT3JVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT0gbnVsbDtcbn1cbmV4cG9ydHMuaXNOdWxsT3JVbmRlZmluZWQgPSBpc051bGxPclVuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNOdW1iZXIoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcblxuZnVuY3Rpb24gaXNTdHJpbmcoYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3RyaW5nJztcbn1cbmV4cG9ydHMuaXNTdHJpbmcgPSBpc1N0cmluZztcblxuZnVuY3Rpb24gaXNTeW1ib2woYXJnKSB7XG4gIHJldHVybiB0eXBlb2YgYXJnID09PSAnc3ltYm9sJztcbn1cbmV4cG9ydHMuaXNTeW1ib2wgPSBpc1N5bWJvbDtcblxuZnVuY3Rpb24gaXNVbmRlZmluZWQoYXJnKSB7XG4gIHJldHVybiBhcmcgPT09IHZvaWQgMDtcbn1cbmV4cG9ydHMuaXNVbmRlZmluZWQgPSBpc1VuZGVmaW5lZDtcblxuZnVuY3Rpb24gaXNSZWdFeHAocmUpIHtcbiAgcmV0dXJuIG9iamVjdFRvU3RyaW5nKHJlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5leHBvcnRzLmlzUmVnRXhwID0gaXNSZWdFeHA7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgYXJnICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc09iamVjdCA9IGlzT2JqZWN0O1xuXG5mdW5jdGlvbiBpc0RhdGUoZCkge1xuICByZXR1cm4gb2JqZWN0VG9TdHJpbmcoZCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cbmV4cG9ydHMuaXNEYXRlID0gaXNEYXRlO1xuXG5mdW5jdGlvbiBpc0Vycm9yKGUpIHtcbiAgcmV0dXJuIChvYmplY3RUb1N0cmluZyhlKSA9PT0gJ1tvYmplY3QgRXJyb3JdJyB8fCBlIGluc3RhbmNlb2YgRXJyb3IpO1xufVxuZXhwb3J0cy5pc0Vycm9yID0gaXNFcnJvcjtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuXG5mdW5jdGlvbiBpc1ByaW1pdGl2ZShhcmcpIHtcbiAgcmV0dXJuIGFyZyA9PT0gbnVsbCB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgICB0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fFxuICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdzeW1ib2wnIHx8ICAvLyBFUzYgc3ltYm9sXG4gICAgICAgICB0eXBlb2YgYXJnID09PSAndW5kZWZpbmVkJztcbn1cbmV4cG9ydHMuaXNQcmltaXRpdmUgPSBpc1ByaW1pdGl2ZTtcblxuZXhwb3J0cy5pc0J1ZmZlciA9IEJ1ZmZlci5pc0J1ZmZlcjtcblxuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcobykge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2NvcmUtdXRpbC1pcy9saWIvdXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMjU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIChpZ25vcmVkKSAqL1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIHV0aWwgKGlnbm9yZWQpXG4vLyBtb2R1bGUgaWQgPSAyNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnYnVmZmVyJykuQnVmZmVyO1xuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBidWZmZXJTaGltID0gcmVxdWlyZSgnYnVmZmVyLXNoaW1zJyk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxubW9kdWxlLmV4cG9ydHMgPSBCdWZmZXJMaXN0O1xuXG5mdW5jdGlvbiBCdWZmZXJMaXN0KCkge1xuICB0aGlzLmhlYWQgPSBudWxsO1xuICB0aGlzLnRhaWwgPSBudWxsO1xuICB0aGlzLmxlbmd0aCA9IDA7XG59XG5cbkJ1ZmZlckxpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAodikge1xuICB2YXIgZW50cnkgPSB7IGRhdGE6IHYsIG5leHQ6IG51bGwgfTtcbiAgaWYgKHRoaXMubGVuZ3RoID4gMCkgdGhpcy50YWlsLm5leHQgPSBlbnRyeTtlbHNlIHRoaXMuaGVhZCA9IGVudHJ5O1xuICB0aGlzLnRhaWwgPSBlbnRyeTtcbiAgKyt0aGlzLmxlbmd0aDtcbn07XG5cbkJ1ZmZlckxpc3QucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAodikge1xuICB2YXIgZW50cnkgPSB7IGRhdGE6IHYsIG5leHQ6IHRoaXMuaGVhZCB9O1xuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHRoaXMudGFpbCA9IGVudHJ5O1xuICB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgKyt0aGlzLmxlbmd0aDtcbn07XG5cbkJ1ZmZlckxpc3QucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgdmFyIHJldCA9IHRoaXMuaGVhZC5kYXRhO1xuICBpZiAodGhpcy5sZW5ndGggPT09IDEpIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7ZWxzZSB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dDtcbiAgLS10aGlzLmxlbmd0aDtcbiAgcmV0dXJuIHJldDtcbn07XG5cbkJ1ZmZlckxpc3QucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuICB0aGlzLmxlbmd0aCA9IDA7XG59O1xuXG5CdWZmZXJMaXN0LnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24gKHMpIHtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gIHZhciBwID0gdGhpcy5oZWFkO1xuICB2YXIgcmV0ID0gJycgKyBwLmRhdGE7XG4gIHdoaWxlIChwID0gcC5uZXh0KSB7XG4gICAgcmV0ICs9IHMgKyBwLmRhdGE7XG4gIH1yZXR1cm4gcmV0O1xufTtcblxuQnVmZmVyTGlzdC5wcm90b3R5cGUuY29uY2F0ID0gZnVuY3Rpb24gKG4pIHtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gYnVmZmVyU2hpbS5hbGxvYygwKTtcbiAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSByZXR1cm4gdGhpcy5oZWFkLmRhdGE7XG4gIHZhciByZXQgPSBidWZmZXJTaGltLmFsbG9jVW5zYWZlKG4gPj4+IDApO1xuICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgdmFyIGkgPSAwO1xuICB3aGlsZSAocCkge1xuICAgIHAuZGF0YS5jb3B5KHJldCwgaSk7XG4gICAgaSArPSBwLmRhdGEubGVuZ3RoO1xuICAgIHAgPSBwLm5leHQ7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL0J1ZmZlckxpc3QuanNcbi8vIG1vZHVsZSBpZCA9IDI2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBhIGR1cGxleCBzdHJlYW0gaXMganVzdCBhIHN0cmVhbSB0aGF0IGlzIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLlxuLy8gU2luY2UgSlMgZG9lc24ndCBoYXZlIG11bHRpcGxlIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UsIHRoaXMgY2xhc3Ncbi8vIHByb3RvdHlwYWxseSBpbmhlcml0cyBmcm9tIFJlYWRhYmxlLCBhbmQgdGhlbiBwYXJhc2l0aWNhbGx5IGZyb21cbi8vIFdyaXRhYmxlLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBvYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAga2V5cy5wdXNoKGtleSk7XG4gIH1yZXR1cm4ga2V5cztcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxubW9kdWxlLmV4cG9ydHMgPSBEdXBsZXg7XG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgcHJvY2Vzc05leHRUaWNrID0gcmVxdWlyZSgncHJvY2Vzcy1uZXh0aWNrLWFyZ3MnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnZhciBSZWFkYWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV9yZWFkYWJsZScpO1xudmFyIFdyaXRhYmxlID0gcmVxdWlyZSgnLi9fc3RyZWFtX3dyaXRhYmxlJyk7XG5cbnV0aWwuaW5oZXJpdHMoRHVwbGV4LCBSZWFkYWJsZSk7XG5cbnZhciBrZXlzID0gb2JqZWN0S2V5cyhXcml0YWJsZS5wcm90b3R5cGUpO1xuZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gIHZhciBtZXRob2QgPSBrZXlzW3ZdO1xuICBpZiAoIUR1cGxleC5wcm90b3R5cGVbbWV0aG9kXSkgRHVwbGV4LnByb3RvdHlwZVttZXRob2RdID0gV3JpdGFibGUucHJvdG90eXBlW21ldGhvZF07XG59XG5cbmZ1bmN0aW9uIER1cGxleChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSByZXR1cm4gbmV3IER1cGxleChvcHRpb25zKTtcblxuICBSZWFkYWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICBXcml0YWJsZS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMucmVhZGFibGUgPT09IGZhbHNlKSB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53cml0YWJsZSA9PT0gZmFsc2UpIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICB0aGlzLmFsbG93SGFsZk9wZW4gPSB0cnVlO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFsbG93SGFsZk9wZW4gPT09IGZhbHNlKSB0aGlzLmFsbG93SGFsZk9wZW4gPSBmYWxzZTtcblxuICB0aGlzLm9uY2UoJ2VuZCcsIG9uZW5kKTtcbn1cblxuLy8gdGhlIG5vLWhhbGYtb3BlbiBlbmZvcmNlclxuZnVuY3Rpb24gb25lbmQoKSB7XG4gIC8vIGlmIHdlIGFsbG93IGhhbGYtb3BlbiBzdGF0ZSwgb3IgaWYgdGhlIHdyaXRhYmxlIHNpZGUgZW5kZWQsXG4gIC8vIHRoZW4gd2UncmUgb2suXG4gIGlmICh0aGlzLmFsbG93SGFsZk9wZW4gfHwgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRlZCkgcmV0dXJuO1xuXG4gIC8vIG5vIG1vcmUgZGF0YSBjYW4gYmUgd3JpdHRlbi5cbiAgLy8gQnV0IGFsbG93IG1vcmUgd3JpdGVzIHRvIGhhcHBlbiBpbiB0aGlzIHRpY2suXG4gIHByb2Nlc3NOZXh0VGljayhvbkVuZE5ULCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gb25FbmROVChzZWxmKSB7XG4gIHNlbGYuZW5kKCk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmKHhzW2ldLCBpKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHJlYW0tYnJvd3NlcmlmeS9+L3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV9kdXBsZXguanNcbi8vIG1vZHVsZSBpZCA9IDI2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBBIGJpdCBzaW1wbGVyIHRoYW4gcmVhZGFibGUgc3RyZWFtcy5cbi8vIEltcGxlbWVudCBhbiBhc3luYyAuX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2IpLCBhbmQgaXQnbGwgaGFuZGxlIGFsbFxuLy8gdGhlIGRyYWluIGV2ZW50IGVtaXNzaW9uIGFuZCBidWZmZXJpbmcuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBXcml0YWJsZTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBwcm9jZXNzTmV4dFRpY2sgPSByZXF1aXJlKCdwcm9jZXNzLW5leHRpY2stYXJncycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYXN5bmNXcml0ZSA9ICFwcm9jZXNzLmJyb3dzZXIgJiYgWyd2MC4xMCcsICd2MC45LiddLmluZGV4T2YocHJvY2Vzcy52ZXJzaW9uLnNsaWNlKDAsIDUpKSA+IC0xID8gc2V0SW1tZWRpYXRlIDogcHJvY2Vzc05leHRUaWNrO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgRHVwbGV4O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbldyaXRhYmxlLldyaXRhYmxlU3RhdGUgPSBXcml0YWJsZVN0YXRlO1xuXG4vKjxyZXBsYWNlbWVudD4qL1xudmFyIHV0aWwgPSByZXF1aXJlKCdjb3JlLXV0aWwtaXMnKTtcbnV0aWwuaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbi8qPHJlcGxhY2VtZW50PiovXG52YXIgaW50ZXJuYWxVdGlsID0ge1xuICBkZXByZWNhdGU6IHJlcXVpcmUoJ3V0aWwtZGVwcmVjYXRlJylcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciBTdHJlYW07XG4oZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIFN0cmVhbSA9IHJlcXVpcmUoJ3N0JyArICdyZWFtJyk7XG4gIH0gY2F0Y2ggKF8pIHt9IGZpbmFsbHkge1xuICAgIGlmICghU3RyZWFtKSBTdHJlYW0gPSByZXF1aXJlKCdldmVudHMnKS5FdmVudEVtaXR0ZXI7XG4gIH1cbn0pKCk7XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcbi8qPHJlcGxhY2VtZW50PiovXG52YXIgYnVmZmVyU2hpbSA9IHJlcXVpcmUoJ2J1ZmZlci1zaGltcycpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cbnV0aWwuaW5oZXJpdHMoV3JpdGFibGUsIFN0cmVhbSk7XG5cbmZ1bmN0aW9uIG5vcCgpIHt9XG5cbmZ1bmN0aW9uIFdyaXRlUmVxKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdGhpcy5jaHVuayA9IGNodW5rO1xuICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHRoaXMuY2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5uZXh0ID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gV3JpdGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0pIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvLyBvYmplY3Qgc3RyZWFtIGZsYWcgdG8gaW5kaWNhdGUgd2hldGhlciBvciBub3QgdGhpcyBzdHJlYW1cbiAgLy8gY29udGFpbnMgYnVmZmVycyBvciBvYmplY3RzLlxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcblxuICBpZiAoc3RyZWFtIGluc3RhbmNlb2YgRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLndyaXRhYmxlT2JqZWN0TW9kZTtcblxuICAvLyB0aGUgcG9pbnQgYXQgd2hpY2ggd3JpdGUoKSBzdGFydHMgcmV0dXJuaW5nIGZhbHNlXG4gIC8vIE5vdGU6IDAgaXMgYSB2YWxpZCB2YWx1ZSwgbWVhbnMgdGhhdCB3ZSBhbHdheXMgcmV0dXJuIGZhbHNlIGlmXG4gIC8vIHRoZSBlbnRpcmUgYnVmZmVyIGlzIG5vdCBmbHVzaGVkIGltbWVkaWF0ZWx5IG9uIHdyaXRlKClcbiAgdmFyIGh3bSA9IG9wdGlvbnMuaGlnaFdhdGVyTWFyaztcbiAgdmFyIGRlZmF1bHRId20gPSB0aGlzLm9iamVjdE1vZGUgPyAxNiA6IDE2ICogMTAyNDtcbiAgdGhpcy5oaWdoV2F0ZXJNYXJrID0gaHdtIHx8IGh3bSA9PT0gMCA/IGh3bSA6IGRlZmF1bHRId207XG5cbiAgLy8gY2FzdCB0byBpbnRzLlxuICB0aGlzLmhpZ2hXYXRlck1hcmsgPSB+IH50aGlzLmhpZ2hXYXRlck1hcms7XG5cbiAgLy8gZHJhaW4gZXZlbnQgZmxhZy5cbiAgdGhpcy5uZWVkRHJhaW4gPSBmYWxzZTtcbiAgLy8gYXQgdGhlIHN0YXJ0IG9mIGNhbGxpbmcgZW5kKClcbiAgdGhpcy5lbmRpbmcgPSBmYWxzZTtcbiAgLy8gd2hlbiBlbmQoKSBoYXMgYmVlbiBjYWxsZWQsIGFuZCByZXR1cm5lZFxuICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gIC8vIHdoZW4gJ2ZpbmlzaCcgaXMgZW1pdHRlZFxuICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG5cbiAgLy8gc2hvdWxkIHdlIGRlY29kZSBzdHJpbmdzIGludG8gYnVmZmVycyBiZWZvcmUgcGFzc2luZyB0byBfd3JpdGU/XG4gIC8vIHRoaXMgaXMgaGVyZSBzbyB0aGF0IHNvbWUgbm9kZS1jb3JlIHN0cmVhbXMgY2FuIG9wdGltaXplIHN0cmluZ1xuICAvLyBoYW5kbGluZyBhdCBhIGxvd2VyIGxldmVsLlxuICB2YXIgbm9EZWNvZGUgPSBvcHRpb25zLmRlY29kZVN0cmluZ3MgPT09IGZhbHNlO1xuICB0aGlzLmRlY29kZVN0cmluZ3MgPSAhbm9EZWNvZGU7XG5cbiAgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cbiAgdGhpcy5kZWZhdWx0RW5jb2RpbmcgPSBvcHRpb25zLmRlZmF1bHRFbmNvZGluZyB8fCAndXRmOCc7XG5cbiAgLy8gbm90IGFuIGFjdHVhbCBidWZmZXIgd2Uga2VlcCB0cmFjayBvZiwgYnV0IGEgbWVhc3VyZW1lbnRcbiAgLy8gb2YgaG93IG11Y2ggd2UncmUgd2FpdGluZyB0byBnZXQgcHVzaGVkIHRvIHNvbWUgdW5kZXJseWluZ1xuICAvLyBzb2NrZXQgb3IgZmlsZS5cbiAgdGhpcy5sZW5ndGggPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBzZWUgd2hlbiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd3JpdGUuXG4gIHRoaXMud3JpdGluZyA9IGZhbHNlO1xuXG4gIC8vIHdoZW4gdHJ1ZSBhbGwgd3JpdGVzIHdpbGwgYmUgYnVmZmVyZWQgdW50aWwgLnVuY29yaygpIGNhbGxcbiAgdGhpcy5jb3JrZWQgPSAwO1xuXG4gIC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIG9ud3JpdGUgY2IgaXMgY2FsbGVkIGltbWVkaWF0ZWx5LFxuICAvLyBvciBvbiBhIGxhdGVyIHRpY2suICBXZSBzZXQgdGhpcyB0byB0cnVlIGF0IGZpcnN0LCBiZWNhdXNlIGFueVxuICAvLyBhY3Rpb25zIHRoYXQgc2hvdWxkbid0IGhhcHBlbiB1bnRpbCBcImxhdGVyXCIgc2hvdWxkIGdlbmVyYWxseSBhbHNvXG4gIC8vIG5vdCBoYXBwZW4gYmVmb3JlIHRoZSBmaXJzdCB3cml0ZSBjYWxsLlxuICB0aGlzLnN5bmMgPSB0cnVlO1xuXG4gIC8vIGEgZmxhZyB0byBrbm93IGlmIHdlJ3JlIHByb2Nlc3NpbmcgcHJldmlvdXNseSBidWZmZXJlZCBpdGVtcywgd2hpY2hcbiAgLy8gbWF5IGNhbGwgdGhlIF93cml0ZSgpIGNhbGxiYWNrIGluIHRoZSBzYW1lIHRpY2ssIHNvIHRoYXQgd2UgZG9uJ3RcbiAgLy8gZW5kIHVwIGluIGFuIG92ZXJsYXBwZWQgb253cml0ZSBzaXR1YXRpb24uXG4gIHRoaXMuYnVmZmVyUHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gIC8vIHRoZSBjYWxsYmFjayB0aGF0J3MgcGFzc2VkIHRvIF93cml0ZShjaHVuayxjYilcbiAgdGhpcy5vbndyaXRlID0gZnVuY3Rpb24gKGVyKSB7XG4gICAgb253cml0ZShzdHJlYW0sIGVyKTtcbiAgfTtcblxuICAvLyB0aGUgY2FsbGJhY2sgdGhhdCB0aGUgdXNlciBzdXBwbGllcyB0byB3cml0ZShjaHVuayxlbmNvZGluZyxjYilcbiAgdGhpcy53cml0ZWNiID0gbnVsbDtcblxuICAvLyB0aGUgYW1vdW50IHRoYXQgaXMgYmVpbmcgd3JpdHRlbiB3aGVuIF93cml0ZSBpcyBjYWxsZWQuXG4gIHRoaXMud3JpdGVsZW4gPSAwO1xuXG4gIHRoaXMuYnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgdGhpcy5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcblxuICAvLyBudW1iZXIgb2YgcGVuZGluZyB1c2VyLXN1cHBsaWVkIHdyaXRlIGNhbGxiYWNrc1xuICAvLyB0aGlzIG11c3QgYmUgMCBiZWZvcmUgJ2ZpbmlzaCcgY2FuIGJlIGVtaXR0ZWRcbiAgdGhpcy5wZW5kaW5nY2IgPSAwO1xuXG4gIC8vIGVtaXQgcHJlZmluaXNoIGlmIHRoZSBvbmx5IHRoaW5nIHdlJ3JlIHdhaXRpbmcgZm9yIGlzIF93cml0ZSBjYnNcbiAgLy8gVGhpcyBpcyByZWxldmFudCBmb3Igc3luY2hyb25vdXMgVHJhbnNmb3JtIHN0cmVhbXNcbiAgdGhpcy5wcmVmaW5pc2hlZCA9IGZhbHNlO1xuXG4gIC8vIFRydWUgaWYgdGhlIGVycm9yIHdhcyBhbHJlYWR5IGVtaXR0ZWQgYW5kIHNob3VsZCBub3QgYmUgdGhyb3duIGFnYWluXG4gIHRoaXMuZXJyb3JFbWl0dGVkID0gZmFsc2U7XG5cbiAgLy8gY291bnQgYnVmZmVyZWQgcmVxdWVzdHNcbiAgdGhpcy5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG5cbiAgLy8gYWxsb2NhdGUgdGhlIGZpcnN0IENvcmtlZFJlcXVlc3QsIHRoZXJlIGlzIGFsd2F5c1xuICAvLyBvbmUgYWxsb2NhdGVkIGFuZCBmcmVlIHRvIHVzZSwgYW5kIHdlIG1haW50YWluIGF0IG1vc3QgdHdvXG4gIHRoaXMuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3QodGhpcyk7XG59XG5cbldyaXRhYmxlU3RhdGUucHJvdG90eXBlLmdldEJ1ZmZlciA9IGZ1bmN0aW9uIGdldEJ1ZmZlcigpIHtcbiAgdmFyIGN1cnJlbnQgPSB0aGlzLmJ1ZmZlcmVkUmVxdWVzdDtcbiAgdmFyIG91dCA9IFtdO1xuICB3aGlsZSAoY3VycmVudCkge1xuICAgIG91dC5wdXNoKGN1cnJlbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn07XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RhdGUucHJvdG90eXBlLCAnYnVmZmVyJywge1xuICAgICAgZ2V0OiBpbnRlcm5hbFV0aWwuZGVwcmVjYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnVmZmVyKCk7XG4gICAgICB9LCAnX3dyaXRhYmxlU3RhdGUuYnVmZmVyIGlzIGRlcHJlY2F0ZWQuIFVzZSBfd3JpdGFibGVTdGF0ZS5nZXRCdWZmZXIgJyArICdpbnN0ZWFkLicpXG4gICAgfSk7XG4gIH0gY2F0Y2ggKF8pIHt9XG59KSgpO1xuXG4vLyBUZXN0IF93cml0YWJsZVN0YXRlIGZvciBpbmhlcml0YW5jZSB0byBhY2NvdW50IGZvciBEdXBsZXggc3RyZWFtcyxcbi8vIHdob3NlIHByb3RvdHlwZSBjaGFpbiBvbmx5IHBvaW50cyB0byBSZWFkYWJsZS5cbnZhciByZWFsSGFzSW5zdGFuY2U7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaGFzSW5zdGFuY2UgJiYgdHlwZW9mIEZ1bmN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaGFzSW5zdGFuY2VdID09PSAnZnVuY3Rpb24nKSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IEZ1bmN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaGFzSW5zdGFuY2VdO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGUsIFN5bWJvbC5oYXNJbnN0YW5jZSwge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAocmVhbEhhc0luc3RhbmNlLmNhbGwodGhpcywgb2JqZWN0KSkgcmV0dXJuIHRydWU7XG5cbiAgICAgIHJldHVybiBvYmplY3QgJiYgb2JqZWN0Ll93cml0YWJsZVN0YXRlIGluc3RhbmNlb2YgV3JpdGFibGVTdGF0ZTtcbiAgICB9XG4gIH0pO1xufSBlbHNlIHtcbiAgcmVhbEhhc0luc3RhbmNlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiB0aGlzO1xuICB9O1xufVxuXG5mdW5jdGlvbiBXcml0YWJsZShvcHRpb25zKSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG5cbiAgLy8gV3JpdGFibGUgY3RvciBpcyBhcHBsaWVkIHRvIER1cGxleGVzLCB0b28uXG4gIC8vIGByZWFsSGFzSW5zdGFuY2VgIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHVzaW5nIHBsYWluIGBpbnN0YW5jZW9mYFxuICAvLyB3b3VsZCByZXR1cm4gZmFsc2UsIGFzIG5vIGBfd3JpdGFibGVTdGF0ZWAgcHJvcGVydHkgaXMgYXR0YWNoZWQuXG5cbiAgLy8gVHJ5aW5nIHRvIHVzZSB0aGUgY3VzdG9tIGBpbnN0YW5jZW9mYCBmb3IgV3JpdGFibGUgaGVyZSB3aWxsIGFsc28gYnJlYWsgdGhlXG4gIC8vIE5vZGUuanMgTGF6eVRyYW5zZm9ybSBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaGFzIGEgbm9uLXRyaXZpYWwgZ2V0dGVyIGZvclxuICAvLyBgX3dyaXRhYmxlU3RhdGVgIHRoYXQgd291bGQgbGVhZCB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gIGlmICghcmVhbEhhc0luc3RhbmNlLmNhbGwoV3JpdGFibGUsIHRoaXMpICYmICEodGhpcyBpbnN0YW5jZW9mIER1cGxleCkpIHtcbiAgICByZXR1cm4gbmV3IFdyaXRhYmxlKG9wdGlvbnMpO1xuICB9XG5cbiAgdGhpcy5fd3JpdGFibGVTdGF0ZSA9IG5ldyBXcml0YWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMpO1xuXG4gIC8vIGxlZ2FjeS5cbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMud3JpdGUgPT09ICdmdW5jdGlvbicpIHRoaXMuX3dyaXRlID0gb3B0aW9ucy53cml0ZTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy53cml0ZXYgPT09ICdmdW5jdGlvbicpIHRoaXMuX3dyaXRldiA9IG9wdGlvbnMud3JpdGV2O1xuICB9XG5cbiAgU3RyZWFtLmNhbGwodGhpcyk7XG59XG5cbi8vIE90aGVyd2lzZSBwZW9wbGUgY2FuIHBpcGUgV3JpdGFibGUgc3RyZWFtcywgd2hpY2ggaXMganVzdCB3cm9uZy5cbldyaXRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdDYW5ub3QgcGlwZSwgbm90IHJlYWRhYmxlJykpO1xufTtcblxuZnVuY3Rpb24gd3JpdGVBZnRlckVuZChzdHJlYW0sIGNiKSB7XG4gIHZhciBlciA9IG5ldyBFcnJvcignd3JpdGUgYWZ0ZXIgZW5kJyk7XG4gIC8vIFRPRE86IGRlZmVyIGVycm9yIGV2ZW50cyBjb25zaXN0ZW50bHkgZXZlcnl3aGVyZSwgbm90IGp1c3QgdGhlIGNiXG4gIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgcHJvY2Vzc05leHRUaWNrKGNiLCBlcik7XG59XG5cbi8vIElmIHdlIGdldCBzb21ldGhpbmcgdGhhdCBpcyBub3QgYSBidWZmZXIsIHN0cmluZywgbnVsbCwgb3IgdW5kZWZpbmVkLFxuLy8gYW5kIHdlJ3JlIG5vdCBpbiBvYmplY3RNb2RlLCB0aGVuIHRoYXQncyBhbiBlcnJvci5cbi8vIE90aGVyd2lzZSBzdHJlYW0gY2h1bmtzIGFyZSBhbGwgY29uc2lkZXJlZCB0byBiZSBvZiBsZW5ndGg9MSwgYW5kIHRoZVxuLy8gd2F0ZXJtYXJrcyBkZXRlcm1pbmUgaG93IG1hbnkgb2JqZWN0cyB0byBrZWVwIGluIHRoZSBidWZmZXIsIHJhdGhlciB0aGFuXG4vLyBob3cgbWFueSBieXRlcyBvciBjaGFyYWN0ZXJzLlxuZnVuY3Rpb24gdmFsaWRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgY2IpIHtcbiAgdmFyIHZhbGlkID0gdHJ1ZTtcbiAgdmFyIGVyID0gZmFsc2U7XG4gIC8vIEFsd2F5cyB0aHJvdyBlcnJvciBpZiBhIG51bGwgaXMgd3JpdHRlblxuICAvLyBpZiB3ZSBhcmUgbm90IGluIG9iamVjdCBtb2RlIHRoZW4gdGhyb3dcbiAgLy8gaWYgaXQgaXMgbm90IGEgYnVmZmVyLCBzdHJpbmcsIG9yIHVuZGVmaW5lZC5cbiAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgZXIgPSBuZXcgVHlwZUVycm9yKCdNYXkgbm90IHdyaXRlIG51bGwgdmFsdWVzIHRvIHN0cmVhbScpO1xuICB9IGVsc2UgaWYgKCFCdWZmZXIuaXNCdWZmZXIoY2h1bmspICYmIHR5cGVvZiBjaHVuayAhPT0gJ3N0cmluZycgJiYgY2h1bmsgIT09IHVuZGVmaW5lZCAmJiAhc3RhdGUub2JqZWN0TW9kZSkge1xuICAgIGVyID0gbmV3IFR5cGVFcnJvcignSW52YWxpZCBub24tc3RyaW5nL2J1ZmZlciBjaHVuaycpO1xuICB9XG4gIGlmIChlcikge1xuICAgIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbiAgICBwcm9jZXNzTmV4dFRpY2soY2IsIGVyKTtcbiAgICB2YWxpZCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiB2YWxpZDtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHJldCA9IGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoY2h1bmspKSBlbmNvZGluZyA9ICdidWZmZXInO2Vsc2UgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgY2IgPSBub3A7XG5cbiAgaWYgKHN0YXRlLmVuZGVkKSB3cml0ZUFmdGVyRW5kKHRoaXMsIGNiKTtlbHNlIGlmICh2YWxpZENodW5rKHRoaXMsIHN0YXRlLCBjaHVuaywgY2IpKSB7XG4gICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgcmV0ID0gd3JpdGVPckJ1ZmZlcih0aGlzLCBzdGF0ZSwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLmNvcmsgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG5cbiAgc3RhdGUuY29ya2VkKys7XG59O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUudW5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3RhdGUgPSB0aGlzLl93cml0YWJsZVN0YXRlO1xuXG4gIGlmIChzdGF0ZS5jb3JrZWQpIHtcbiAgICBzdGF0ZS5jb3JrZWQtLTtcblxuICAgIGlmICghc3RhdGUud3JpdGluZyAmJiAhc3RhdGUuY29ya2VkICYmICFzdGF0ZS5maW5pc2hlZCAmJiAhc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QpIGNsZWFyQnVmZmVyKHRoaXMsIHN0YXRlKTtcbiAgfVxufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnNldERlZmF1bHRFbmNvZGluZyA9IGZ1bmN0aW9uIHNldERlZmF1bHRFbmNvZGluZyhlbmNvZGluZykge1xuICAvLyBub2RlOjpQYXJzZUVuY29kaW5nKCkgcmVxdWlyZXMgbG93ZXIgY2FzZS5cbiAgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZycpIGVuY29kaW5nID0gZW5jb2RpbmcudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCEoWydoZXgnLCAndXRmOCcsICd1dGYtOCcsICdhc2NpaScsICdiaW5hcnknLCAnYmFzZTY0JywgJ3VjczInLCAndWNzLTInLCAndXRmMTZsZScsICd1dGYtMTZsZScsICdyYXcnXS5pbmRleE9mKChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpKSA+IC0xKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKTtcbiAgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZWZhdWx0RW5jb2RpbmcgPSBlbmNvZGluZztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBkZWNvZGVDaHVuayhzdGF0ZSwgY2h1bmssIGVuY29kaW5nKSB7XG4gIGlmICghc3RhdGUub2JqZWN0TW9kZSAmJiBzdGF0ZS5kZWNvZGVTdHJpbmdzICE9PSBmYWxzZSAmJiB0eXBlb2YgY2h1bmsgPT09ICdzdHJpbmcnKSB7XG4gICAgY2h1bmsgPSBidWZmZXJTaGltLmZyb20oY2h1bmssIGVuY29kaW5nKTtcbiAgfVxuICByZXR1cm4gY2h1bms7XG59XG5cbi8vIGlmIHdlJ3JlIGFscmVhZHkgd3JpdGluZyBzb21ldGhpbmcsIHRoZW4ganVzdCBwdXQgdGhpc1xuLy8gaW4gdGhlIHF1ZXVlLCBhbmQgd2FpdCBvdXIgdHVybi4gIE90aGVyd2lzZSwgY2FsbCBfd3JpdGVcbi8vIElmIHdlIHJldHVybiBmYWxzZSwgdGhlbiB3ZSBuZWVkIGEgZHJhaW4gZXZlbnQsIHNvIHNldCB0aGF0IGZsYWcuXG5mdW5jdGlvbiB3cml0ZU9yQnVmZmVyKHN0cmVhbSwgc3RhdGUsIGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2h1bmsgPSBkZWNvZGVDaHVuayhzdGF0ZSwgY2h1bmssIGVuY29kaW5nKTtcblxuICBpZiAoQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkgZW5jb2RpbmcgPSAnYnVmZmVyJztcbiAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gIHN0YXRlLmxlbmd0aCArPSBsZW47XG5cbiAgdmFyIHJldCA9IHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIC8vIHdlIG11c3QgZW5zdXJlIHRoYXQgcHJldmlvdXMgbmVlZERyYWluIHdpbGwgbm90IGJlIHJlc2V0IHRvIGZhbHNlLlxuICBpZiAoIXJldCkgc3RhdGUubmVlZERyYWluID0gdHJ1ZTtcblxuICBpZiAoc3RhdGUud3JpdGluZyB8fCBzdGF0ZS5jb3JrZWQpIHtcbiAgICB2YXIgbGFzdCA9IHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3Q7XG4gICAgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG5ldyBXcml0ZVJlcShjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgICBpZiAobGFzdCkge1xuICAgICAgbGFzdC5uZXh0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0ID0gc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdDtcbiAgICB9XG4gICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQgKz0gMTtcbiAgfSBlbHNlIHtcbiAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCB3cml0ZXYsIGxlbiwgY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBzdGF0ZS53cml0ZWxlbiA9IGxlbjtcbiAgc3RhdGUud3JpdGVjYiA9IGNiO1xuICBzdGF0ZS53cml0aW5nID0gdHJ1ZTtcbiAgc3RhdGUuc3luYyA9IHRydWU7XG4gIGlmICh3cml0ZXYpIHN0cmVhbS5fd3JpdGV2KGNodW5rLCBzdGF0ZS5vbndyaXRlKTtlbHNlIHN0cmVhbS5fd3JpdGUoY2h1bmssIGVuY29kaW5nLCBzdGF0ZS5vbndyaXRlKTtcbiAgc3RhdGUuc3luYyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlRXJyb3Ioc3RyZWFtLCBzdGF0ZSwgc3luYywgZXIsIGNiKSB7XG4gIC0tc3RhdGUucGVuZGluZ2NiO1xuICBpZiAoc3luYykgcHJvY2Vzc05leHRUaWNrKGNiLCBlcik7ZWxzZSBjYihlcik7XG5cbiAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcbn1cblxuZnVuY3Rpb24gb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKSB7XG4gIHN0YXRlLndyaXRpbmcgPSBmYWxzZTtcbiAgc3RhdGUud3JpdGVjYiA9IG51bGw7XG4gIHN0YXRlLmxlbmd0aCAtPSBzdGF0ZS53cml0ZWxlbjtcbiAgc3RhdGUud3JpdGVsZW4gPSAwO1xufVxuXG5mdW5jdGlvbiBvbndyaXRlKHN0cmVhbSwgZXIpIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl93cml0YWJsZVN0YXRlO1xuICB2YXIgc3luYyA9IHN0YXRlLnN5bmM7XG4gIHZhciBjYiA9IHN0YXRlLndyaXRlY2I7XG5cbiAgb253cml0ZVN0YXRlVXBkYXRlKHN0YXRlKTtcblxuICBpZiAoZXIpIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpO2Vsc2Uge1xuICAgIC8vIENoZWNrIGlmIHdlJ3JlIGFjdHVhbGx5IHJlYWR5IHRvIGZpbmlzaCwgYnV0IGRvbid0IGVtaXQgeWV0XG4gICAgdmFyIGZpbmlzaGVkID0gbmVlZEZpbmlzaChzdGF0ZSk7XG5cbiAgICBpZiAoIWZpbmlzaGVkICYmICFzdGF0ZS5jb3JrZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSB7XG4gICAgICBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoc3luYykge1xuICAgICAgLyo8cmVwbGFjZW1lbnQ+Ki9cbiAgICAgIGFzeW5jV3JpdGUoYWZ0ZXJXcml0ZSwgc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICAgIC8qPC9yZXBsYWNlbWVudD4qL1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFmdGVyV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhZnRlcldyaXRlKHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYikge1xuICBpZiAoIWZpbmlzaGVkKSBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSk7XG4gIHN0YXRlLnBlbmRpbmdjYi0tO1xuICBjYigpO1xuICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbn1cblxuLy8gTXVzdCBmb3JjZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgb24gbmV4dFRpY2ssIHNvIHRoYXQgd2UgZG9uJ3Rcbi8vIGVtaXQgJ2RyYWluJyBiZWZvcmUgdGhlIHdyaXRlKCkgY29uc3VtZXIgZ2V0cyB0aGUgJ2ZhbHNlJyByZXR1cm5cbi8vIHZhbHVlLCBhbmQgaGFzIGEgY2hhbmNlIHRvIGF0dGFjaCBhICdkcmFpbicgbGlzdGVuZXIuXG5mdW5jdGlvbiBvbndyaXRlRHJhaW4oc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLm5lZWREcmFpbikge1xuICAgIHN0YXRlLm5lZWREcmFpbiA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdkcmFpbicpO1xuICB9XG59XG5cbi8vIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHRoZSBidWZmZXIgd2FpdGluZywgdGhlbiBwcm9jZXNzIGl0XG5mdW5jdGlvbiBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKSB7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSB0cnVlO1xuICB2YXIgZW50cnkgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3Q7XG5cbiAgaWYgKHN0cmVhbS5fd3JpdGV2ICYmIGVudHJ5ICYmIGVudHJ5Lm5leHQpIHtcbiAgICAvLyBGYXN0IGNhc2UsIHdyaXRlIGV2ZXJ5dGhpbmcgdXNpbmcgX3dyaXRldigpXG4gICAgdmFyIGwgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudDtcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5KGwpO1xuICAgIHZhciBob2xkZXIgPSBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWU7XG4gICAgaG9sZGVyLmVudHJ5ID0gZW50cnk7XG5cbiAgICB2YXIgY291bnQgPSAwO1xuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgYnVmZmVyW2NvdW50XSA9IGVudHJ5O1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG5cbiAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIHRydWUsIHN0YXRlLmxlbmd0aCwgYnVmZmVyLCAnJywgaG9sZGVyLmZpbmlzaCk7XG5cbiAgICAvLyBkb1dyaXRlIGlzIGFsbW9zdCBhbHdheXMgYXN5bmMsIGRlZmVyIHRoZXNlIHRvIHNhdmUgYSBiaXQgb2YgdGltZVxuICAgIC8vIGFzIHRoZSBob3QgcGF0aCBlbmRzIHdpdGggZG9Xcml0ZVxuICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICAgIGlmIChob2xkZXIubmV4dCkge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gaG9sZGVyLm5leHQ7XG4gICAgICBob2xkZXIubmV4dCA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLmNvcmtlZFJlcXVlc3RzRnJlZSA9IG5ldyBDb3JrZWRSZXF1ZXN0KHN0YXRlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gU2xvdyBjYXNlLCB3cml0ZSBjaHVua3Mgb25lLWJ5LW9uZVxuICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgdmFyIGNodW5rID0gZW50cnkuY2h1bms7XG4gICAgICB2YXIgZW5jb2RpbmcgPSBlbnRyeS5lbmNvZGluZztcbiAgICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgICAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuXG4gICAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgLy8gaWYgd2UgZGlkbid0IGNhbGwgdGhlIG9ud3JpdGUgaW1tZWRpYXRlbHksIHRoZW5cbiAgICAgIC8vIGl0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byB3YWl0IHVudGlsIGl0IGRvZXMuXG4gICAgICAvLyBhbHNvLCB0aGF0IG1lYW5zIHRoYXQgdGhlIGNodW5rIGFuZCBjYiBhcmUgY3VycmVudGx5XG4gICAgICAvLyBiZWluZyBwcm9jZXNzZWQsIHNvIG1vdmUgdGhlIGJ1ZmZlciBjb3VudGVyIHBhc3QgdGhlbS5cbiAgICAgIGlmIChzdGF0ZS53cml0aW5nKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbnRyeSA9PT0gbnVsbCkgc3RhdGUubGFzdEJ1ZmZlcmVkUmVxdWVzdCA9IG51bGw7XG4gIH1cblxuICBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudCA9IDA7XG4gIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9IGVudHJ5O1xuICBzdGF0ZS5idWZmZXJQcm9jZXNzaW5nID0gZmFsc2U7XG59XG5cbldyaXRhYmxlLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBjYihuZXcgRXJyb3IoJ193cml0ZSgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpKTtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5fd3JpdGV2ID0gbnVsbDtcblxuV3JpdGFibGUucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3dyaXRhYmxlU3RhdGU7XG5cbiAgaWYgKHR5cGVvZiBjaHVuayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gY2h1bms7XG4gICAgY2h1bmsgPSBudWxsO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYiA9IGVuY29kaW5nO1xuICAgIGVuY29kaW5nID0gbnVsbDtcbiAgfVxuXG4gIGlmIChjaHVuayAhPT0gbnVsbCAmJiBjaHVuayAhPT0gdW5kZWZpbmVkKSB0aGlzLndyaXRlKGNodW5rLCBlbmNvZGluZyk7XG5cbiAgLy8gLmVuZCgpIGZ1bGx5IHVuY29ya3NcbiAgaWYgKHN0YXRlLmNvcmtlZCkge1xuICAgIHN0YXRlLmNvcmtlZCA9IDE7XG4gICAgdGhpcy51bmNvcmsoKTtcbiAgfVxuXG4gIC8vIGlnbm9yZSB1bm5lY2Vzc2FyeSBlbmQoKSBjYWxscy5cbiAgaWYgKCFzdGF0ZS5lbmRpbmcgJiYgIXN0YXRlLmZpbmlzaGVkKSBlbmRXcml0YWJsZSh0aGlzLCBzdGF0ZSwgY2IpO1xufTtcblxuZnVuY3Rpb24gbmVlZEZpbmlzaChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuZW5kaW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPT09IG51bGwgJiYgIXN0YXRlLmZpbmlzaGVkICYmICFzdGF0ZS53cml0aW5nO1xufVxuXG5mdW5jdGlvbiBwcmVmaW5pc2goc3RyZWFtLCBzdGF0ZSkge1xuICBpZiAoIXN0YXRlLnByZWZpbmlzaGVkKSB7XG4gICAgc3RhdGUucHJlZmluaXNoZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5lbWl0KCdwcmVmaW5pc2gnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKSB7XG4gIHZhciBuZWVkID0gbmVlZEZpbmlzaChzdGF0ZSk7XG4gIGlmIChuZWVkKSB7XG4gICAgaWYgKHN0YXRlLnBlbmRpbmdjYiA9PT0gMCkge1xuICAgICAgcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgc3RhdGUuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLmVtaXQoJ2ZpbmlzaCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmVmaW5pc2goc3RyZWFtLCBzdGF0ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZWVkO1xufVxuXG5mdW5jdGlvbiBlbmRXcml0YWJsZShzdHJlYW0sIHN0YXRlLCBjYikge1xuICBzdGF0ZS5lbmRpbmcgPSB0cnVlO1xuICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbiAgaWYgKGNiKSB7XG4gICAgaWYgKHN0YXRlLmZpbmlzaGVkKSBwcm9jZXNzTmV4dFRpY2soY2IpO2Vsc2Ugc3RyZWFtLm9uY2UoJ2ZpbmlzaCcsIGNiKTtcbiAgfVxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG4gIHN0cmVhbS53cml0YWJsZSA9IGZhbHNlO1xufVxuXG4vLyBJdCBzZWVtcyBhIGxpbmtlZCBsaXN0IGJ1dCBpdCBpcyBub3Rcbi8vIHRoZXJlIHdpbGwgYmUgb25seSAyIG9mIHRoZXNlIGZvciBlYWNoIHN0cmVhbVxuZnVuY3Rpb24gQ29ya2VkUmVxdWVzdChzdGF0ZSkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHRoaXMubmV4dCA9IG51bGw7XG4gIHRoaXMuZW50cnkgPSBudWxsO1xuXG4gIHRoaXMuZmluaXNoID0gZnVuY3Rpb24gKGVycikge1xuICAgIHZhciBlbnRyeSA9IF90aGlzLmVudHJ5O1xuICAgIF90aGlzLmVudHJ5ID0gbnVsbDtcbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgICAgc3RhdGUucGVuZGluZ2NiLS07XG4gICAgICBjYihlcnIpO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgIH1cbiAgICBpZiAoc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlKSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUubmV4dCA9IF90aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBfdGhpcztcbiAgICB9XG4gIH07XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xuXG4vLyBET00gQVBJcywgZm9yIGNvbXBsZXRlbmVzc1xuXG5leHBvcnRzLnNldFRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0VGltZW91dCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHdpbmRvdywgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBzZXRpbW1lZGlhdGUgYXR0YWNoZXMgaXRzZWxmIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5yZXF1aXJlKFwic2V0aW1tZWRpYXRlXCIpO1xuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG5leHBvcnRzLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gMjY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIihmdW5jdGlvbiAoZ2xvYmFsLCB1bmRlZmluZWQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGlmIChnbG9iYWwuc2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEhhbmRsZSA9IDE7IC8vIFNwZWMgc2F5cyBncmVhdGVyIHRoYW4gemVyb1xuICAgIHZhciB0YXNrc0J5SGFuZGxlID0ge307XG4gICAgdmFyIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gICAgdmFyIHJlZ2lzdGVySW1tZWRpYXRlO1xuXG4gICAgZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4gICAgICAvLyBDYWxsYmFjayBjYW4gZWl0aGVyIGJlIGEgZnVuY3Rpb24gb3IgYSBzdHJpbmdcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihcIlwiICsgY2FsbGJhY2spO1xuICAgICAgfVxuICAgICAgLy8gQ29weSBmdW5jdGlvbiBhcmd1bWVudHNcbiAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaSArIDFdO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHJlZ2lzdGVyIHRoZSB0YXNrXG4gICAgICB2YXIgdGFzayA9IHsgY2FsbGJhY2s6IGNhbGxiYWNrLCBhcmdzOiBhcmdzIH07XG4gICAgICB0YXNrc0J5SGFuZGxlW25leHRIYW5kbGVdID0gdGFzaztcbiAgICAgIHJlZ2lzdGVySW1tZWRpYXRlKG5leHRIYW5kbGUpO1xuICAgICAgcmV0dXJuIG5leHRIYW5kbGUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShoYW5kbGUpIHtcbiAgICAgICAgZGVsZXRlIHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW4odGFzaykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0YXNrLmNhbGxiYWNrO1xuICAgICAgICB2YXIgYXJncyA9IHRhc2suYXJncztcbiAgICAgICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIGNhbGxiYWNrKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBydW5JZlByZXNlbnQoaGFuZGxlKSB7XG4gICAgICAgIC8vIEZyb20gdGhlIHNwZWM6IFwiV2FpdCB1bnRpbCBhbnkgaW52b2NhdGlvbnMgb2YgdGhpcyBhbGdvcml0aG0gc3RhcnRlZCBiZWZvcmUgdGhpcyBvbmUgaGF2ZSBjb21wbGV0ZWQuXCJcbiAgICAgICAgLy8gU28gaWYgd2UncmUgY3VycmVudGx5IHJ1bm5pbmcgYSB0YXNrLCB3ZSdsbCBuZWVkIHRvIGRlbGF5IHRoaXMgaW52b2NhdGlvbi5cbiAgICAgICAgaWYgKGN1cnJlbnRseVJ1bm5pbmdBVGFzaykge1xuICAgICAgICAgICAgLy8gRGVsYXkgYnkgZG9pbmcgYSBzZXRUaW1lb3V0LiBzZXRJbW1lZGlhdGUgd2FzIHRyaWVkIGluc3RlYWQsIGJ1dCBpbiBGaXJlZm94IDcgaXQgZ2VuZXJhdGVkIGFcbiAgICAgICAgICAgIC8vIFwidG9vIG11Y2ggcmVjdXJzaW9uXCIgZXJyb3IuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB0YXNrID0gdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bih0YXNrKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckltbWVkaWF0ZShoYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24gKCkgeyBydW5JZlByZXNlbnQoaGFuZGxlKTsgfSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuVXNlUG9zdE1lc3NhZ2UoKSB7XG4gICAgICAgIC8vIFRoZSB0ZXN0IGFnYWluc3QgYGltcG9ydFNjcmlwdHNgIHByZXZlbnRzIHRoaXMgaW1wbGVtZW50YXRpb24gZnJvbSBiZWluZyBpbnN0YWxsZWQgaW5zaWRlIGEgd2ViIHdvcmtlcixcbiAgICAgICAgLy8gd2hlcmUgYGdsb2JhbC5wb3N0TWVzc2FnZWAgbWVhbnMgc29tZXRoaW5nIGNvbXBsZXRlbHkgZGlmZmVyZW50IGFuZCBjYW4ndCBiZSB1c2VkIGZvciB0aGlzIHB1cnBvc2UuXG4gICAgICAgIGlmIChnbG9iYWwucG9zdE1lc3NhZ2UgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgICAgICAgICB2YXIgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IHRydWU7XG4gICAgICAgICAgICB2YXIgb2xkT25NZXNzYWdlID0gZ2xvYmFsLm9ubWVzc2FnZTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKFwiXCIsIFwiKlwiKTtcbiAgICAgICAgICAgIGdsb2JhbC5vbm1lc3NhZ2UgPSBvbGRPbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICAvLyBJbnN0YWxscyBhbiBldmVudCBoYW5kbGVyIG9uIGBnbG9iYWxgIGZvciB0aGUgYG1lc3NhZ2VgIGV2ZW50OiBzZWVcbiAgICAgICAgLy8gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LnBvc3RNZXNzYWdlXG4gICAgICAgIC8vICogaHR0cDovL3d3dy53aGF0d2cub3JnL3NwZWNzL3dlYi1hcHBzL2N1cnJlbnQtd29yay9tdWx0aXBhZ2UvY29tbXMuaHRtbCNjcm9zc0RvY3VtZW50TWVzc2FnZXNcblxuICAgICAgICB2YXIgbWVzc2FnZVByZWZpeCA9IFwic2V0SW1tZWRpYXRlJFwiICsgTWF0aC5yYW5kb20oKSArIFwiJFwiO1xuICAgICAgICB2YXIgb25HbG9iYWxNZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5zb3VyY2UgPT09IGdsb2JhbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBldmVudC5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleE9mKG1lc3NhZ2VQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KCtldmVudC5kYXRhLnNsaWNlKG1lc3NhZ2VQcmVmaXgubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXR0YWNoRXZlbnQoXCJvbm1lc3NhZ2VcIiwgb25HbG9iYWxNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UobWVzc2FnZVByZWZpeCArIGhhbmRsZSwgXCIqXCIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlID0gZXZlbnQuZGF0YTtcbiAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGh0bWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gbnVsbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBodG1sLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIElmIHN1cHBvcnRlZCwgd2Ugc2hvdWxkIGF0dGFjaCB0byB0aGUgcHJvdG90eXBlIG9mIGdsb2JhbCwgc2luY2UgdGhhdCBpcyB3aGVyZSBzZXRUaW1lb3V0IGV0IGFsLiBsaXZlLlxuICAgIHZhciBhdHRhY2hUbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZ2xvYmFsKTtcbiAgICBhdHRhY2hUbyA9IGF0dGFjaFRvICYmIGF0dGFjaFRvLnNldFRpbWVvdXQgPyBhdHRhY2hUbyA6IGdsb2JhbDtcblxuICAgIC8vIERvbid0IGdldCBmb29sZWQgYnkgZS5nLiBicm93c2VyaWZ5IGVudmlyb25tZW50cy5cbiAgICBpZiAoe30udG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09IFwiW29iamVjdCBwcm9jZXNzXVwiKSB7XG4gICAgICAgIC8vIEZvciBOb2RlLmpzIGJlZm9yZSAwLjlcbiAgICAgICAgaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoY2FuVXNlUG9zdE1lc3NhZ2UoKSkge1xuICAgICAgICAvLyBGb3Igbm9uLUlFMTAgbW9kZXJuIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAvLyBGb3Igd2ViIHdvcmtlcnMsIHdoZXJlIHN1cHBvcnRlZFxuICAgICAgICBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChkb2MgJiYgXCJvbnJlYWR5c3RhdGVjaGFuZ2VcIiBpbiBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSkge1xuICAgICAgICAvLyBGb3IgSUUgNuKAkzhcbiAgICAgICAgaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gRm9yIG9sZGVyIGJyb3dzZXJzXG4gICAgICAgIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKTtcbiAgICB9XG5cbiAgICBhdHRhY2hUby5zZXRJbW1lZGlhdGUgPSBzZXRJbW1lZGlhdGU7XG4gICAgYXR0YWNoVG8uY2xlYXJJbW1lZGlhdGUgPSBjbGVhckltbWVkaWF0ZTtcbn0odHlwZW9mIHNlbGYgPT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgZ2xvYmFsID09PSBcInVuZGVmaW5lZFwiID8gdGhpcyA6IGdsb2JhbCA6IHNlbGYpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zZXRpbW1lZGlhdGUvc2V0SW1tZWRpYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZGVwcmVjYXRlO1xuXG4vKipcbiAqIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4gKiBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuICpcbiAqIElmIGBsb2NhbFN0b3JhZ2Uubm9EZXByZWNhdGlvbiA9IHRydWVgIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuICpcbiAqIElmIGBsb2NhbFN0b3JhZ2UudGhyb3dEZXByZWNhdGlvbiA9IHRydWVgIGlzIHNldCwgdGhlbiBkZXByZWNhdGVkIGZ1bmN0aW9uc1xuICogd2lsbCB0aHJvdyBhbiBFcnJvciB3aGVuIGludm9rZWQuXG4gKlxuICogSWYgYGxvY2FsU3RvcmFnZS50cmFjZURlcHJlY2F0aW9uID0gdHJ1ZWAgaXMgc2V0LCB0aGVuIGRlcHJlY2F0ZWQgZnVuY3Rpb25zXG4gKiB3aWxsIGludm9rZSBgY29uc29sZS50cmFjZSgpYCBpbnN0ZWFkIG9mIGBjb25zb2xlLmVycm9yKClgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGRlcHJlY2F0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyAtIHRoZSBzdHJpbmcgdG8gcHJpbnQgdG8gdGhlIGNvbnNvbGUgd2hlbiBgZm5gIGlzIGludm9rZWRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYSBuZXcgXCJkZXByZWNhdGVkXCIgdmVyc2lvbiBvZiBgZm5gXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZSAoZm4sIG1zZykge1xuICBpZiAoY29uZmlnKCdub0RlcHJlY2F0aW9uJykpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChjb25maWcoJ3Rocm93RGVwcmVjYXRpb24nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAoY29uZmlnKCd0cmFjZURlcHJlY2F0aW9uJykpIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBgbG9jYWxTdG9yYWdlYCBmb3IgYm9vbGVhbiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29uZmlnIChuYW1lKSB7XG4gIC8vIGFjY2Vzc2luZyBnbG9iYWwubG9jYWxTdG9yYWdlIGNhbiB0cmlnZ2VyIGEgRE9NRXhjZXB0aW9uIGluIHNhbmRib3hlZCBpZnJhbWVzXG4gIHRyeSB7XG4gICAgaWYgKCFnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm4gZmFsc2U7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHZhbCA9IGdsb2JhbC5sb2NhbFN0b3JhZ2VbbmFtZV07XG4gIGlmIChudWxsID09IHZhbCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gU3RyaW5nKHZhbCkudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3V0aWwtZGVwcmVjYXRlL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcblxudmFyIGlzQnVmZmVyRW5jb2RpbmcgPSBCdWZmZXIuaXNFbmNvZGluZ1xuICB8fCBmdW5jdGlvbihlbmNvZGluZykge1xuICAgICAgIHN3aXRjaCAoZW5jb2RpbmcgJiYgZW5jb2RpbmcudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgY2FzZSAnaGV4JzogY2FzZSAndXRmOCc6IGNhc2UgJ3V0Zi04JzogY2FzZSAnYXNjaWknOiBjYXNlICdiaW5hcnknOiBjYXNlICdiYXNlNjQnOiBjYXNlICd1Y3MyJzogY2FzZSAndWNzLTInOiBjYXNlICd1dGYxNmxlJzogY2FzZSAndXRmLTE2bGUnOiBjYXNlICdyYXcnOiByZXR1cm4gdHJ1ZTtcbiAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcbiAgICAgICB9XG4gICAgIH1cblxuXG5mdW5jdGlvbiBhc3NlcnRFbmNvZGluZyhlbmNvZGluZykge1xuICBpZiAoZW5jb2RpbmcgJiYgIWlzQnVmZmVyRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpO1xuICB9XG59XG5cbi8vIFN0cmluZ0RlY29kZXIgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciBlZmZpY2llbnRseSBzcGxpdHRpbmcgYSBzZXJpZXMgb2Zcbi8vIGJ1ZmZlcnMgaW50byBhIHNlcmllcyBvZiBKUyBzdHJpbmdzIHdpdGhvdXQgYnJlYWtpbmcgYXBhcnQgbXVsdGktYnl0ZVxuLy8gY2hhcmFjdGVycy4gQ0VTVS04IGlzIGhhbmRsZWQgYXMgcGFydCBvZiB0aGUgVVRGLTggZW5jb2RpbmcuXG4vL1xuLy8gQFRPRE8gSGFuZGxpbmcgYWxsIGVuY29kaW5ncyBpbnNpZGUgYSBzaW5nbGUgb2JqZWN0IG1ha2VzIGl0IHZlcnkgZGlmZmljdWx0XG4vLyB0byByZWFzb24gYWJvdXQgdGhpcyBjb2RlLCBzbyBpdCBzaG91bGQgYmUgc3BsaXQgdXAgaW4gdGhlIGZ1dHVyZS5cbi8vIEBUT0RPIFRoZXJlIHNob3VsZCBiZSBhIHV0Zjgtc3RyaWN0IGVuY29kaW5nIHRoYXQgcmVqZWN0cyBpbnZhbGlkIFVURi04IGNvZGVcbi8vIHBvaW50cyBhcyB1c2VkIGJ5IENFU1UtOC5cbnZhciBTdHJpbmdEZWNvZGVyID0gZXhwb3J0cy5TdHJpbmdEZWNvZGVyID0gZnVuY3Rpb24oZW5jb2RpbmcpIHtcbiAgdGhpcy5lbmNvZGluZyA9IChlbmNvZGluZyB8fCAndXRmOCcpLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvWy1fXS8sICcnKTtcbiAgYXNzZXJ0RW5jb2RpbmcoZW5jb2RpbmcpO1xuICBzd2l0Y2ggKHRoaXMuZW5jb2RpbmcpIHtcbiAgICBjYXNlICd1dGY4JzpcbiAgICAgIC8vIENFU1UtOCByZXByZXNlbnRzIGVhY2ggb2YgU3Vycm9nYXRlIFBhaXIgYnkgMy1ieXRlc1xuICAgICAgdGhpcy5zdXJyb2dhdGVTaXplID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgLy8gVVRGLTE2IHJlcHJlc2VudHMgZWFjaCBvZiBTdXJyb2dhdGUgUGFpciBieSAyLWJ5dGVzXG4gICAgICB0aGlzLnN1cnJvZ2F0ZVNpemUgPSAyO1xuICAgICAgdGhpcy5kZXRlY3RJbmNvbXBsZXRlQ2hhciA9IHV0ZjE2RGV0ZWN0SW5jb21wbGV0ZUNoYXI7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgLy8gQmFzZS02NCBzdG9yZXMgMyBieXRlcyBpbiA0IGNoYXJzLCBhbmQgcGFkcyB0aGUgcmVtYWluZGVyLlxuICAgICAgdGhpcy5zdXJyb2dhdGVTaXplID0gMztcbiAgICAgIHRoaXMuZGV0ZWN0SW5jb21wbGV0ZUNoYXIgPSBiYXNlNjREZXRlY3RJbmNvbXBsZXRlQ2hhcjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aGlzLndyaXRlID0gcGFzc1Rocm91Z2hXcml0ZTtcbiAgICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEVub3VnaCBzcGFjZSB0byBzdG9yZSBhbGwgYnl0ZXMgb2YgYSBzaW5nbGUgY2hhcmFjdGVyLiBVVEYtOCBuZWVkcyA0XG4gIC8vIGJ5dGVzLCBidXQgQ0VTVS04IG1heSByZXF1aXJlIHVwIHRvIDYgKDMgYnl0ZXMgcGVyIHN1cnJvZ2F0ZSkuXG4gIHRoaXMuY2hhckJ1ZmZlciA9IG5ldyBCdWZmZXIoNik7XG4gIC8vIE51bWJlciBvZiBieXRlcyByZWNlaXZlZCBmb3IgdGhlIGN1cnJlbnQgaW5jb21wbGV0ZSBtdWx0aS1ieXRlIGNoYXJhY3Rlci5cbiAgdGhpcy5jaGFyUmVjZWl2ZWQgPSAwO1xuICAvLyBOdW1iZXIgb2YgYnl0ZXMgZXhwZWN0ZWQgZm9yIHRoZSBjdXJyZW50IGluY29tcGxldGUgbXVsdGktYnl0ZSBjaGFyYWN0ZXIuXG4gIHRoaXMuY2hhckxlbmd0aCA9IDA7XG59O1xuXG5cbi8vIHdyaXRlIGRlY29kZXMgdGhlIGdpdmVuIGJ1ZmZlciBhbmQgcmV0dXJucyBpdCBhcyBKUyBzdHJpbmcgdGhhdCBpc1xuLy8gZ3VhcmFudGVlZCB0byBub3QgY29udGFpbiBhbnkgcGFydGlhbCBtdWx0aS1ieXRlIGNoYXJhY3RlcnMuIEFueSBwYXJ0aWFsXG4vLyBjaGFyYWN0ZXIgZm91bmQgYXQgdGhlIGVuZCBvZiB0aGUgYnVmZmVyIGlzIGJ1ZmZlcmVkIHVwLCBhbmQgd2lsbCBiZVxuLy8gcmV0dXJuZWQgd2hlbiBjYWxsaW5nIHdyaXRlIGFnYWluIHdpdGggdGhlIHJlbWFpbmluZyBieXRlcy5cbi8vXG4vLyBOb3RlOiBDb252ZXJ0aW5nIGEgQnVmZmVyIGNvbnRhaW5pbmcgYW4gb3JwaGFuIHN1cnJvZ2F0ZSB0byBhIFN0cmluZ1xuLy8gY3VycmVudGx5IHdvcmtzLCBidXQgY29udmVydGluZyBhIFN0cmluZyB0byBhIEJ1ZmZlciAodmlhIGBuZXcgQnVmZmVyYCwgb3Jcbi8vIEJ1ZmZlciN3cml0ZSkgd2lsbCByZXBsYWNlIGluY29tcGxldGUgc3Vycm9nYXRlcyB3aXRoIHRoZSB1bmljb2RlXG4vLyByZXBsYWNlbWVudCBjaGFyYWN0ZXIuIFNlZSBodHRwczovL2NvZGVyZXZpZXcuY2hyb21pdW0ub3JnLzEyMTE3MzAwOS8gLlxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgdmFyIGNoYXJTdHIgPSAnJztcbiAgLy8gaWYgb3VyIGxhc3Qgd3JpdGUgZW5kZWQgd2l0aCBhbiBpbmNvbXBsZXRlIG11bHRpYnl0ZSBjaGFyYWN0ZXJcbiAgd2hpbGUgKHRoaXMuY2hhckxlbmd0aCkge1xuICAgIC8vIGRldGVybWluZSBob3cgbWFueSByZW1haW5pbmcgYnl0ZXMgdGhpcyBidWZmZXIgaGFzIHRvIG9mZmVyIGZvciB0aGlzIGNoYXJcbiAgICB2YXIgYXZhaWxhYmxlID0gKGJ1ZmZlci5sZW5ndGggPj0gdGhpcy5jaGFyTGVuZ3RoIC0gdGhpcy5jaGFyUmVjZWl2ZWQpID9cbiAgICAgICAgdGhpcy5jaGFyTGVuZ3RoIC0gdGhpcy5jaGFyUmVjZWl2ZWQgOlxuICAgICAgICBidWZmZXIubGVuZ3RoO1xuXG4gICAgLy8gYWRkIHRoZSBuZXcgYnl0ZXMgdG8gdGhlIGNoYXIgYnVmZmVyXG4gICAgYnVmZmVyLmNvcHkodGhpcy5jaGFyQnVmZmVyLCB0aGlzLmNoYXJSZWNlaXZlZCwgMCwgYXZhaWxhYmxlKTtcbiAgICB0aGlzLmNoYXJSZWNlaXZlZCArPSBhdmFpbGFibGU7XG5cbiAgICBpZiAodGhpcy5jaGFyUmVjZWl2ZWQgPCB0aGlzLmNoYXJMZW5ndGgpIHtcbiAgICAgIC8vIHN0aWxsIG5vdCBlbm91Z2ggY2hhcnMgaW4gdGhpcyBidWZmZXI/IHdhaXQgZm9yIG1vcmUgLi4uXG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGJ5dGVzIGJlbG9uZ2luZyB0byB0aGUgY3VycmVudCBjaGFyYWN0ZXIgZnJvbSB0aGUgYnVmZmVyXG4gICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKGF2YWlsYWJsZSwgYnVmZmVyLmxlbmd0aCk7XG5cbiAgICAvLyBnZXQgdGhlIGNoYXJhY3RlciB0aGF0IHdhcyBzcGxpdFxuICAgIGNoYXJTdHIgPSB0aGlzLmNoYXJCdWZmZXIuc2xpY2UoMCwgdGhpcy5jaGFyTGVuZ3RoKS50b1N0cmluZyh0aGlzLmVuY29kaW5nKTtcblxuICAgIC8vIENFU1UtODogbGVhZCBzdXJyb2dhdGUgKEQ4MDAtREJGRikgaXMgYWxzbyB0aGUgaW5jb21wbGV0ZSBjaGFyYWN0ZXJcbiAgICB2YXIgY2hhckNvZGUgPSBjaGFyU3RyLmNoYXJDb2RlQXQoY2hhclN0ci5sZW5ndGggLSAxKTtcbiAgICBpZiAoY2hhckNvZGUgPj0gMHhEODAwICYmIGNoYXJDb2RlIDw9IDB4REJGRikge1xuICAgICAgdGhpcy5jaGFyTGVuZ3RoICs9IHRoaXMuc3Vycm9nYXRlU2l6ZTtcbiAgICAgIGNoYXJTdHIgPSAnJztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB0aGlzLmNoYXJSZWNlaXZlZCA9IHRoaXMuY2hhckxlbmd0aCA9IDA7XG5cbiAgICAvLyBpZiB0aGVyZSBhcmUgbm8gbW9yZSBieXRlcyBpbiB0aGlzIGJ1ZmZlciwganVzdCBlbWl0IG91ciBjaGFyXG4gICAgaWYgKGJ1ZmZlci5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBjaGFyU3RyO1xuICAgIH1cbiAgICBicmVhaztcbiAgfVxuXG4gIC8vIGRldGVybWluZSBhbmQgc2V0IGNoYXJMZW5ndGggLyBjaGFyUmVjZWl2ZWRcbiAgdGhpcy5kZXRlY3RJbmNvbXBsZXRlQ2hhcihidWZmZXIpO1xuXG4gIHZhciBlbmQgPSBidWZmZXIubGVuZ3RoO1xuICBpZiAodGhpcy5jaGFyTGVuZ3RoKSB7XG4gICAgLy8gYnVmZmVyIHRoZSBpbmNvbXBsZXRlIGNoYXJhY3RlciBieXRlcyB3ZSBnb3RcbiAgICBidWZmZXIuY29weSh0aGlzLmNoYXJCdWZmZXIsIDAsIGJ1ZmZlci5sZW5ndGggLSB0aGlzLmNoYXJSZWNlaXZlZCwgZW5kKTtcbiAgICBlbmQgLT0gdGhpcy5jaGFyUmVjZWl2ZWQ7XG4gIH1cblxuICBjaGFyU3RyICs9IGJ1ZmZlci50b1N0cmluZyh0aGlzLmVuY29kaW5nLCAwLCBlbmQpO1xuXG4gIHZhciBlbmQgPSBjaGFyU3RyLmxlbmd0aCAtIDE7XG4gIHZhciBjaGFyQ29kZSA9IGNoYXJTdHIuY2hhckNvZGVBdChlbmQpO1xuICAvLyBDRVNVLTg6IGxlYWQgc3Vycm9nYXRlIChEODAwLURCRkYpIGlzIGFsc28gdGhlIGluY29tcGxldGUgY2hhcmFjdGVyXG4gIGlmIChjaGFyQ29kZSA+PSAweEQ4MDAgJiYgY2hhckNvZGUgPD0gMHhEQkZGKSB7XG4gICAgdmFyIHNpemUgPSB0aGlzLnN1cnJvZ2F0ZVNpemU7XG4gICAgdGhpcy5jaGFyTGVuZ3RoICs9IHNpemU7XG4gICAgdGhpcy5jaGFyUmVjZWl2ZWQgKz0gc2l6ZTtcbiAgICB0aGlzLmNoYXJCdWZmZXIuY29weSh0aGlzLmNoYXJCdWZmZXIsIHNpemUsIDAsIHNpemUpO1xuICAgIGJ1ZmZlci5jb3B5KHRoaXMuY2hhckJ1ZmZlciwgMCwgMCwgc2l6ZSk7XG4gICAgcmV0dXJuIGNoYXJTdHIuc3Vic3RyaW5nKDAsIGVuZCk7XG4gIH1cblxuICAvLyBvciBqdXN0IGVtaXQgdGhlIGNoYXJTdHJcbiAgcmV0dXJuIGNoYXJTdHI7XG59O1xuXG4vLyBkZXRlY3RJbmNvbXBsZXRlQ2hhciBkZXRlcm1pbmVzIGlmIHRoZXJlIGlzIGFuIGluY29tcGxldGUgVVRGLTggY2hhcmFjdGVyIGF0XG4vLyB0aGUgZW5kIG9mIHRoZSBnaXZlbiBidWZmZXIuIElmIHNvLCBpdCBzZXRzIHRoaXMuY2hhckxlbmd0aCB0byB0aGUgYnl0ZVxuLy8gbGVuZ3RoIHRoYXQgY2hhcmFjdGVyLCBhbmQgc2V0cyB0aGlzLmNoYXJSZWNlaXZlZCB0byB0aGUgbnVtYmVyIG9mIGJ5dGVzXG4vLyB0aGF0IGFyZSBhdmFpbGFibGUgZm9yIHRoaXMgY2hhcmFjdGVyLlxuU3RyaW5nRGVjb2Rlci5wcm90b3R5cGUuZGV0ZWN0SW5jb21wbGV0ZUNoYXIgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgLy8gZGV0ZXJtaW5lIGhvdyBtYW55IGJ5dGVzIHdlIGhhdmUgdG8gY2hlY2sgYXQgdGhlIGVuZCBvZiB0aGlzIGJ1ZmZlclxuICB2YXIgaSA9IChidWZmZXIubGVuZ3RoID49IDMpID8gMyA6IGJ1ZmZlci5sZW5ndGg7XG5cbiAgLy8gRmlndXJlIG91dCBpZiBvbmUgb2YgdGhlIGxhc3QgaSBieXRlcyBvZiBvdXIgYnVmZmVyIGFubm91bmNlcyBhblxuICAvLyBpbmNvbXBsZXRlIGNoYXIuXG4gIGZvciAoOyBpID4gMDsgaS0tKSB7XG4gICAgdmFyIGMgPSBidWZmZXJbYnVmZmVyLmxlbmd0aCAtIGldO1xuXG4gICAgLy8gU2VlIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVVRGLTgjRGVzY3JpcHRpb25cblxuICAgIC8vIDExMFhYWFhYXG4gICAgaWYgKGkgPT0gMSAmJiBjID4+IDUgPT0gMHgwNikge1xuICAgICAgdGhpcy5jaGFyTGVuZ3RoID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIDExMTBYWFhYXG4gICAgaWYgKGkgPD0gMiAmJiBjID4+IDQgPT0gMHgwRSkge1xuICAgICAgdGhpcy5jaGFyTGVuZ3RoID0gMztcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIDExMTEwWFhYXG4gICAgaWYgKGkgPD0gMyAmJiBjID4+IDMgPT0gMHgxRSkge1xuICAgICAgdGhpcy5jaGFyTGVuZ3RoID0gNDtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICB0aGlzLmNoYXJSZWNlaXZlZCA9IGk7XG59O1xuXG5TdHJpbmdEZWNvZGVyLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbihidWZmZXIpIHtcbiAgdmFyIHJlcyA9ICcnO1xuICBpZiAoYnVmZmVyICYmIGJ1ZmZlci5sZW5ndGgpXG4gICAgcmVzID0gdGhpcy53cml0ZShidWZmZXIpO1xuXG4gIGlmICh0aGlzLmNoYXJSZWNlaXZlZCkge1xuICAgIHZhciBjciA9IHRoaXMuY2hhclJlY2VpdmVkO1xuICAgIHZhciBidWYgPSB0aGlzLmNoYXJCdWZmZXI7XG4gICAgdmFyIGVuYyA9IHRoaXMuZW5jb2Rpbmc7XG4gICAgcmVzICs9IGJ1Zi5zbGljZSgwLCBjcikudG9TdHJpbmcoZW5jKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiBwYXNzVGhyb3VnaFdyaXRlKGJ1ZmZlcikge1xuICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKHRoaXMuZW5jb2RpbmcpO1xufVxuXG5mdW5jdGlvbiB1dGYxNkRldGVjdEluY29tcGxldGVDaGFyKGJ1ZmZlcikge1xuICB0aGlzLmNoYXJSZWNlaXZlZCA9IGJ1ZmZlci5sZW5ndGggJSAyO1xuICB0aGlzLmNoYXJMZW5ndGggPSB0aGlzLmNoYXJSZWNlaXZlZCA/IDIgOiAwO1xufVxuXG5mdW5jdGlvbiBiYXNlNjREZXRlY3RJbmNvbXBsZXRlQ2hhcihidWZmZXIpIHtcbiAgdGhpcy5jaGFyUmVjZWl2ZWQgPSBidWZmZXIubGVuZ3RoICUgMztcbiAgdGhpcy5jaGFyTGVuZ3RoID0gdGhpcy5jaGFyUmVjZWl2ZWQgPyAzIDogMDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHJpbmdfZGVjb2Rlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGEgdHJhbnNmb3JtIHN0cmVhbSBpcyBhIHJlYWRhYmxlL3dyaXRhYmxlIHN0cmVhbSB3aGVyZSB5b3UgZG9cbi8vIHNvbWV0aGluZyB3aXRoIHRoZSBkYXRhLiAgU29tZXRpbWVzIGl0J3MgY2FsbGVkIGEgXCJmaWx0ZXJcIixcbi8vIGJ1dCB0aGF0J3Mgbm90IGEgZ3JlYXQgbmFtZSBmb3IgaXQsIHNpbmNlIHRoYXQgaW1wbGllcyBhIHRoaW5nIHdoZXJlXG4vLyBzb21lIGJpdHMgcGFzcyB0aHJvdWdoLCBhbmQgb3RoZXJzIGFyZSBzaW1wbHkgaWdub3JlZC4gIChUaGF0IHdvdWxkXG4vLyBiZSBhIHZhbGlkIGV4YW1wbGUgb2YgYSB0cmFuc2Zvcm0sIG9mIGNvdXJzZS4pXG4vL1xuLy8gV2hpbGUgdGhlIG91dHB1dCBpcyBjYXVzYWxseSByZWxhdGVkIHRvIHRoZSBpbnB1dCwgaXQncyBub3QgYVxuLy8gbmVjZXNzYXJpbHkgc3ltbWV0cmljIG9yIHN5bmNocm9ub3VzIHRyYW5zZm9ybWF0aW9uLiAgRm9yIGV4YW1wbGUsXG4vLyBhIHpsaWIgc3RyZWFtIG1pZ2h0IHRha2UgbXVsdGlwbGUgcGxhaW4tdGV4dCB3cml0ZXMoKSwgYW5kIHRoZW5cbi8vIGVtaXQgYSBzaW5nbGUgY29tcHJlc3NlZCBjaHVuayBzb21lIHRpbWUgaW4gdGhlIGZ1dHVyZS5cbi8vXG4vLyBIZXJlJ3MgaG93IHRoaXMgd29ya3M6XG4vL1xuLy8gVGhlIFRyYW5zZm9ybSBzdHJlYW0gaGFzIGFsbCB0aGUgYXNwZWN0cyBvZiB0aGUgcmVhZGFibGUgYW5kIHdyaXRhYmxlXG4vLyBzdHJlYW0gY2xhc3Nlcy4gIFdoZW4geW91IHdyaXRlKGNodW5rKSwgdGhhdCBjYWxscyBfd3JpdGUoY2h1bmssY2IpXG4vLyBpbnRlcm5hbGx5LCBhbmQgcmV0dXJucyBmYWxzZSBpZiB0aGVyZSdzIGEgbG90IG9mIHBlbmRpbmcgd3JpdGVzXG4vLyBidWZmZXJlZCB1cC4gIFdoZW4geW91IGNhbGwgcmVhZCgpLCB0aGF0IGNhbGxzIF9yZWFkKG4pIHVudGlsXG4vLyB0aGVyZSdzIGVub3VnaCBwZW5kaW5nIHJlYWRhYmxlIGRhdGEgYnVmZmVyZWQgdXAuXG4vL1xuLy8gSW4gYSB0cmFuc2Zvcm0gc3RyZWFtLCB0aGUgd3JpdHRlbiBkYXRhIGlzIHBsYWNlZCBpbiBhIGJ1ZmZlci4gIFdoZW5cbi8vIF9yZWFkKG4pIGlzIGNhbGxlZCwgaXQgdHJhbnNmb3JtcyB0aGUgcXVldWVkIHVwIGRhdGEsIGNhbGxpbmcgdGhlXG4vLyBidWZmZXJlZCBfd3JpdGUgY2IncyBhcyBpdCBjb25zdW1lcyBjaHVua3MuICBJZiBjb25zdW1pbmcgYSBzaW5nbGVcbi8vIHdyaXR0ZW4gY2h1bmsgd291bGQgcmVzdWx0IGluIG11bHRpcGxlIG91dHB1dCBjaHVua3MsIHRoZW4gdGhlIGZpcnN0XG4vLyBvdXRwdXR0ZWQgYml0IGNhbGxzIHRoZSByZWFkY2IsIGFuZCBzdWJzZXF1ZW50IGNodW5rcyBqdXN0IGdvIGludG9cbi8vIHRoZSByZWFkIGJ1ZmZlciwgYW5kIHdpbGwgY2F1c2UgaXQgdG8gZW1pdCAncmVhZGFibGUnIGlmIG5lY2Vzc2FyeS5cbi8vXG4vLyBUaGlzIHdheSwgYmFjay1wcmVzc3VyZSBpcyBhY3R1YWxseSBkZXRlcm1pbmVkIGJ5IHRoZSByZWFkaW5nIHNpZGUsXG4vLyBzaW5jZSBfcmVhZCBoYXMgdG8gYmUgY2FsbGVkIHRvIHN0YXJ0IHByb2Nlc3NpbmcgYSBuZXcgY2h1bmsuICBIb3dldmVyLFxuLy8gYSBwYXRob2xvZ2ljYWwgaW5mbGF0ZSB0eXBlIG9mIHRyYW5zZm9ybSBjYW4gY2F1c2UgZXhjZXNzaXZlIGJ1ZmZlcmluZ1xuLy8gaGVyZS4gIEZvciBleGFtcGxlLCBpbWFnaW5lIGEgc3RyZWFtIHdoZXJlIGV2ZXJ5IGJ5dGUgb2YgaW5wdXQgaXNcbi8vIGludGVycHJldGVkIGFzIGFuIGludGVnZXIgZnJvbSAwLTI1NSwgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGF0IG1hbnlcbi8vIGJ5dGVzIG9mIG91dHB1dC4gIFdyaXRpbmcgdGhlIDQgYnl0ZXMge2ZmLGZmLGZmLGZmfSB3b3VsZCByZXN1bHQgaW5cbi8vIDFrYiBvZiBkYXRhIGJlaW5nIG91dHB1dC4gIEluIHRoaXMgY2FzZSwgeW91IGNvdWxkIHdyaXRlIGEgdmVyeSBzbWFsbFxuLy8gYW1vdW50IG9mIGlucHV0LCBhbmQgZW5kIHVwIHdpdGggYSB2ZXJ5IGxhcmdlIGFtb3VudCBvZiBvdXRwdXQuICBJblxuLy8gc3VjaCBhIHBhdGhvbG9naWNhbCBpbmZsYXRpbmcgbWVjaGFuaXNtLCB0aGVyZSdkIGJlIG5vIHdheSB0byB0ZWxsXG4vLyB0aGUgc3lzdGVtIHRvIHN0b3AgZG9pbmcgdGhlIHRyYW5zZm9ybS4gIEEgc2luZ2xlIDRNQiB3cml0ZSBjb3VsZFxuLy8gY2F1c2UgdGhlIHN5c3RlbSB0byBydW4gb3V0IG9mIG1lbW9yeS5cbi8vXG4vLyBIb3dldmVyLCBldmVuIGluIHN1Y2ggYSBwYXRob2xvZ2ljYWwgY2FzZSwgb25seSBhIHNpbmdsZSB3cml0dGVuIGNodW5rXG4vLyB3b3VsZCBiZSBjb25zdW1lZCwgYW5kIHRoZW4gdGhlIHJlc3Qgd291bGQgd2FpdCAodW4tdHJhbnNmb3JtZWQpIHVudGlsXG4vLyB0aGUgcmVzdWx0cyBvZiB0aGUgcHJldmlvdXMgdHJhbnNmb3JtZWQgY2h1bmsgd2VyZSBjb25zdW1lZC5cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcblxudmFyIER1cGxleCA9IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gcmVxdWlyZSgnY29yZS11dGlsLWlzJyk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFRyYW5zZm9ybSwgRHVwbGV4KTtcblxuZnVuY3Rpb24gVHJhbnNmb3JtU3RhdGUoc3RyZWFtKSB7XG4gIHRoaXMuYWZ0ZXJUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoZXIsIGRhdGEpIHtcbiAgICByZXR1cm4gYWZ0ZXJUcmFuc2Zvcm0oc3RyZWFtLCBlciwgZGF0YSk7XG4gIH07XG5cbiAgdGhpcy5uZWVkVHJhbnNmb3JtID0gZmFsc2U7XG4gIHRoaXMudHJhbnNmb3JtaW5nID0gZmFsc2U7XG4gIHRoaXMud3JpdGVjYiA9IG51bGw7XG4gIHRoaXMud3JpdGVjaHVuayA9IG51bGw7XG4gIHRoaXMud3JpdGVlbmNvZGluZyA9IG51bGw7XG59XG5cbmZ1bmN0aW9uIGFmdGVyVHJhbnNmb3JtKHN0cmVhbSwgZXIsIGRhdGEpIHtcbiAgdmFyIHRzID0gc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZTtcbiAgdHMudHJhbnNmb3JtaW5nID0gZmFsc2U7XG5cbiAgdmFyIGNiID0gdHMud3JpdGVjYjtcblxuICBpZiAoIWNiKSByZXR1cm4gc3RyZWFtLmVtaXQoJ2Vycm9yJywgbmV3IEVycm9yKCdubyB3cml0ZWNiIGluIFRyYW5zZm9ybSBjbGFzcycpKTtcblxuICB0cy53cml0ZWNodW5rID0gbnVsbDtcbiAgdHMud3JpdGVjYiA9IG51bGw7XG5cbiAgaWYgKGRhdGEgIT09IG51bGwgJiYgZGF0YSAhPT0gdW5kZWZpbmVkKSBzdHJlYW0ucHVzaChkYXRhKTtcblxuICBjYihlcik7XG5cbiAgdmFyIHJzID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBycy5yZWFkaW5nID0gZmFsc2U7XG4gIGlmIChycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykge1xuICAgIHN0cmVhbS5fcmVhZChycy5oaWdoV2F0ZXJNYXJrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBUcmFuc2Zvcm0ob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHJhbnNmb3JtKSkgcmV0dXJuIG5ldyBUcmFuc2Zvcm0ob3B0aW9ucyk7XG5cbiAgRHVwbGV4LmNhbGwodGhpcywgb3B0aW9ucyk7XG5cbiAgdGhpcy5fdHJhbnNmb3JtU3RhdGUgPSBuZXcgVHJhbnNmb3JtU3RhdGUodGhpcyk7XG5cbiAgdmFyIHN0cmVhbSA9IHRoaXM7XG5cbiAgLy8gc3RhcnQgb3V0IGFza2luZyBmb3IgYSByZWFkYWJsZSBldmVudCBvbmNlIGRhdGEgaXMgdHJhbnNmb3JtZWQuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTtcblxuICAvLyB3ZSBoYXZlIGltcGxlbWVudGVkIHRoZSBfcmVhZCBtZXRob2QsIGFuZCBkb25lIHRoZSBvdGhlciB0aGluZ3NcbiAgLy8gdGhhdCBSZWFkYWJsZSB3YW50cyBiZWZvcmUgdGhlIGZpcnN0IF9yZWFkIGNhbGwsIHNvIHVuc2V0IHRoZVxuICAvLyBzeW5jIGd1YXJkIGZsYWcuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuc3luYyA9IGZhbHNlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fdHJhbnNmb3JtID0gb3B0aW9ucy50cmFuc2Zvcm07XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmx1c2ggPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZsdXNoID0gb3B0aW9ucy5mbHVzaDtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHdyaXRhYmxlIHNpZGUgZmluaXNoZXMsIHRoZW4gZmx1c2ggb3V0IGFueXRoaW5nIHJlbWFpbmluZy5cbiAgdGhpcy5vbmNlKCdwcmVmaW5pc2gnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLl9mbHVzaCA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fZmx1c2goZnVuY3Rpb24gKGVyLCBkYXRhKSB7XG4gICAgICBkb25lKHN0cmVhbSwgZXIsIGRhdGEpO1xuICAgIH0pO2Vsc2UgZG9uZShzdHJlYW0pO1xuICB9KTtcbn1cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZykge1xuICB0aGlzLl90cmFuc2Zvcm1TdGF0ZS5uZWVkVHJhbnNmb3JtID0gZmFsc2U7XG4gIHJldHVybiBEdXBsZXgucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCBjaHVuaywgZW5jb2RpbmcpO1xufTtcblxuLy8gVGhpcyBpcyB0aGUgcGFydCB3aGVyZSB5b3UgZG8gc3R1ZmYhXG4vLyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uIGluIGltcGxlbWVudGF0aW9uIGNsYXNzZXMuXG4vLyAnY2h1bmsnIGlzIGFuIGlucHV0IGNodW5rLlxuLy9cbi8vIENhbGwgYHB1c2gobmV3Q2h1bmspYCB0byBwYXNzIGFsb25nIHRyYW5zZm9ybWVkIG91dHB1dFxuLy8gdG8gdGhlIHJlYWRhYmxlIHNpZGUuICBZb3UgbWF5IGNhbGwgJ3B1c2gnIHplcm8gb3IgbW9yZSB0aW1lcy5cbi8vXG4vLyBDYWxsIGBjYihlcnIpYCB3aGVuIHlvdSBhcmUgZG9uZSB3aXRoIHRoaXMgY2h1bmsuICBJZiB5b3UgcGFzc1xuLy8gYW4gZXJyb3IsIHRoZW4gdGhhdCdsbCBwdXQgdGhlIGh1cnQgb24gdGhlIHdob2xlIG9wZXJhdGlvbi4gIElmIHlvdVxuLy8gbmV2ZXIgY2FsbCBjYigpLCB0aGVuIHlvdSdsbCBuZXZlciBnZXQgYW5vdGhlciBjaHVuay5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHRocm93IG5ldyBFcnJvcignX3RyYW5zZm9ybSgpIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xufTtcblxuVHJhbnNmb3JtLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcbiAgdHMud3JpdGVjYiA9IGNiO1xuICB0cy53cml0ZWNodW5rID0gY2h1bms7XG4gIHRzLndyaXRlZW5jb2RpbmcgPSBlbmNvZGluZztcbiAgaWYgKCF0cy50cmFuc2Zvcm1pbmcpIHtcbiAgICB2YXIgcnMgPSB0aGlzLl9yZWFkYWJsZVN0YXRlO1xuICAgIGlmICh0cy5uZWVkVHJhbnNmb3JtIHx8IHJzLm5lZWRSZWFkYWJsZSB8fCBycy5sZW5ndGggPCBycy5oaWdoV2F0ZXJNYXJrKSB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59O1xuXG4vLyBEb2Vzbid0IG1hdHRlciB3aGF0IHRoZSBhcmdzIGFyZSBoZXJlLlxuLy8gX3RyYW5zZm9ybSBkb2VzIGFsbCB0aGUgd29yay5cbi8vIFRoYXQgd2UgZ290IGhlcmUgbWVhbnMgdGhhdCB0aGUgcmVhZGFibGUgc2lkZSB3YW50cyBtb3JlIGRhdGEuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl9yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG5cbiAgaWYgKHRzLndyaXRlY2h1bmsgIT09IG51bGwgJiYgdHMud3JpdGVjYiAmJiAhdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdHMudHJhbnNmb3JtaW5nID0gdHJ1ZTtcbiAgICB0aGlzLl90cmFuc2Zvcm0odHMud3JpdGVjaHVuaywgdHMud3JpdGVlbmNvZGluZywgdHMuYWZ0ZXJUcmFuc2Zvcm0pO1xuICB9IGVsc2Uge1xuICAgIC8vIG1hcmsgdGhhdCB3ZSBuZWVkIGEgdHJhbnNmb3JtLCBzbyB0aGF0IGFueSBkYXRhIHRoYXQgY29tZXMgaW5cbiAgICAvLyB3aWxsIGdldCBwcm9jZXNzZWQsIG5vdyB0aGF0IHdlJ3ZlIGFza2VkIGZvciBpdC5cbiAgICB0cy5uZWVkVHJhbnNmb3JtID0gdHJ1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZG9uZShzdHJlYW0sIGVyLCBkYXRhKSB7XG4gIGlmIChlcikgcmV0dXJuIHN0cmVhbS5lbWl0KCdlcnJvcicsIGVyKTtcblxuICBpZiAoZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB1bmRlZmluZWQpIHN0cmVhbS5wdXNoKGRhdGEpO1xuXG4gIC8vIGlmIHRoZXJlJ3Mgbm90aGluZyBpbiB0aGUgd3JpdGUgYnVmZmVyLCB0aGVuIHRoYXQgbWVhbnNcbiAgLy8gdGhhdCBub3RoaW5nIG1vcmUgd2lsbCBldmVyIGJlIHByb3ZpZGVkXG4gIHZhciB3cyA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHRzID0gc3RyZWFtLl90cmFuc2Zvcm1TdGF0ZTtcblxuICBpZiAod3MubGVuZ3RoKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxpbmcgdHJhbnNmb3JtIGRvbmUgd2hlbiB3cy5sZW5ndGggIT0gMCcpO1xuXG4gIGlmICh0cy50cmFuc2Zvcm1pbmcpIHRocm93IG5ldyBFcnJvcignQ2FsbGluZyB0cmFuc2Zvcm0gZG9uZSB3aGVuIHN0aWxsIHRyYW5zZm9ybWluZycpO1xuXG4gIHJldHVybiBzdHJlYW0ucHVzaChudWxsKTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fdHJhbnNmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gYSBwYXNzdGhyb3VnaCBzdHJlYW0uXG4vLyBiYXNpY2FsbHkganVzdCB0aGUgbW9zdCBtaW5pbWFsIHNvcnQgb2YgVHJhbnNmb3JtIHN0cmVhbS5cbi8vIEV2ZXJ5IHdyaXR0ZW4gY2h1bmsgZ2V0cyBvdXRwdXQgYXMtaXMuXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzVGhyb3VnaDtcblxudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vX3N0cmVhbV90cmFuc2Zvcm0nKTtcblxuLyo8cmVwbGFjZW1lbnQ+Ki9cbnZhciB1dGlsID0gcmVxdWlyZSgnY29yZS11dGlsLWlzJyk7XG51dGlsLmluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG51dGlsLmluaGVyaXRzKFBhc3NUaHJvdWdoLCBUcmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBQYXNzVGhyb3VnaChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQYXNzVGhyb3VnaCkpIHJldHVybiBuZXcgUGFzc1Rocm91Z2gob3B0aW9ucyk7XG5cbiAgVHJhbnNmb3JtLmNhbGwodGhpcywgb3B0aW9ucyk7XG59XG5cblBhc3NUaHJvdWdoLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobnVsbCwgY2h1bmspO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanNcbi8vIG1vZHVsZSBpZCA9IDI2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzXCIpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9yZWFkYWJsZS1zdHJlYW0vd3JpdGFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDI3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2xpYi9fc3RyZWFtX2R1cGxleC5qc1wiKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL2R1cGxleC5qc1xuLy8gbW9kdWxlIGlkID0gMjcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbGliL19zdHJlYW1fdHJhbnNmb3JtLmpzXCIpXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3RyZWFtLWJyb3dzZXJpZnkvfi9yZWFkYWJsZS1zdHJlYW0vdHJhbnNmb3JtLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9saWIvX3N0cmVhbV9wYXNzdGhyb3VnaC5qc1wiKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0cmVhbS1icm93c2VyaWZ5L34vcmVhZGFibGUtc3RyZWFtL3Bhc3N0aHJvdWdoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0c1snYWVzLTEyOC1lY2InXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxMjgsXG4gIGl2OiAwLFxuICBtb2RlOiAnRUNCJyxcbiAgdHlwZTogJ2Jsb2NrJ1xufTtcbmV4cG9ydHNbJ2Flcy0xOTItZWNiJ10gPSB7XG4gIGNpcGhlcjogJ0FFUycsXG4gIGtleTogMTkyLFxuICBpdjogMCxcbiAgbW9kZTogJ0VDQicsXG4gIHR5cGU6ICdibG9jaydcbn07XG5leHBvcnRzWydhZXMtMjU2LWVjYiddID0ge1xuICBjaXBoZXI6ICdBRVMnLFxuICBrZXk6IDI1NixcbiAgaXY6IDAsXG4gIG1vZGU6ICdFQ0InLFxuICB0eXBlOiAnYmxvY2snXG59O1xuZXhwb3J0c1snYWVzLTEyOC1jYmMnXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxMjgsXG4gIGl2OiAxNixcbiAgbW9kZTogJ0NCQycsXG4gIHR5cGU6ICdibG9jaydcbn07XG5leHBvcnRzWydhZXMtMTkyLWNiYyddID0ge1xuICBjaXBoZXI6ICdBRVMnLFxuICBrZXk6IDE5MixcbiAgaXY6IDE2LFxuICBtb2RlOiAnQ0JDJyxcbiAgdHlwZTogJ2Jsb2NrJ1xufTtcbmV4cG9ydHNbJ2Flcy0yNTYtY2JjJ10gPSB7XG4gIGNpcGhlcjogJ0FFUycsXG4gIGtleTogMjU2LFxuICBpdjogMTYsXG4gIG1vZGU6ICdDQkMnLFxuICB0eXBlOiAnYmxvY2snXG59O1xuZXhwb3J0c1snYWVzMTI4J10gPSBleHBvcnRzWydhZXMtMTI4LWNiYyddO1xuZXhwb3J0c1snYWVzMTkyJ10gPSBleHBvcnRzWydhZXMtMTkyLWNiYyddO1xuZXhwb3J0c1snYWVzMjU2J10gPSBleHBvcnRzWydhZXMtMjU2LWNiYyddO1xuZXhwb3J0c1snYWVzLTEyOC1jZmInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxMjgsXG4gIGl2OiAxNixcbiAgbW9kZTogJ0NGQicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTE5Mi1jZmInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxOTIsXG4gIGl2OiAxNixcbiAgbW9kZTogJ0NGQicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTI1Ni1jZmInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAyNTYsXG4gIGl2OiAxNixcbiAgbW9kZTogJ0NGQicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTEyOC1vZmInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxMjgsXG4gIGl2OiAxNixcbiAgbW9kZTogJ09GQicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTE5Mi1vZmInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxOTIsXG4gIGl2OiAxNixcbiAgbW9kZTogJ09GQicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTI1Ni1vZmInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAyNTYsXG4gIGl2OiAxNixcbiAgbW9kZTogJ09GQicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTEyOC1jdHInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxMjgsXG4gIGl2OiAxNixcbiAgbW9kZTogJ0NUUicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTE5Mi1jdHInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAxOTIsXG4gIGl2OiAxNixcbiAgbW9kZTogJ0NUUicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuZXhwb3J0c1snYWVzLTI1Ni1jdHInXSA9IHtcbiAgY2lwaGVyOiAnQUVTJyxcbiAga2V5OiAyNTYsXG4gIGl2OiAxNixcbiAgbW9kZTogJ0NUUicsXG4gIHR5cGU6ICdzdHJlYW0nXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyaWZ5LWFlcy9tb2Rlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3J5cHRvLCBwYXNzd29yZCwga2V5TGVuLCBpdkxlbikge1xuICBrZXlMZW4gPSBrZXlMZW4vODtcbiAgaXZMZW4gPSBpdkxlbiB8fCAwO1xuICB2YXIga2kgPSAwO1xuICB2YXIgaWkgPSAwO1xuICB2YXIga2V5ID0gbmV3IEJ1ZmZlcihrZXlMZW4pO1xuICB2YXIgaXYgPSBuZXcgQnVmZmVyKGl2TGVuKTtcbiAgdmFyIGFkZG1kID0gMDtcbiAgdmFyIG1kLCBtZF9idWY7XG4gIHZhciBpO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIG1kID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpO1xuICAgIGlmKGFkZG1kKysgPiAwKSB7XG4gICAgICAgbWQudXBkYXRlKG1kX2J1Zik7XG4gICAgfVxuICAgIG1kLnVwZGF0ZShwYXNzd29yZCk7XG4gICAgbWRfYnVmID0gbWQuZGlnZXN0KCk7XG4gICAgaSA9IDA7XG4gICAgaWYoa2V5TGVuID4gMCkge1xuICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICBpZihrZXlMZW4gPT09IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZihpID09PSBtZF9idWYubGVuZ3RoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAga2V5W2tpKytdID0gbWRfYnVmW2ldO1xuICAgICAgICBrZXlMZW4tLTtcbiAgICAgICAgaSsrO1xuICAgICAgIH1cbiAgICB9XG4gICAgaWYoaXZMZW4gPiAwICYmIGkgIT09IG1kX2J1Zi5sZW5ndGgpIHtcbiAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgaWYoaXZMZW4gPT09IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZihpID09PSBtZF9idWYubGVuZ3RoKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICBpdltpaSsrXSA9IG1kX2J1ZltpXTtcbiAgICAgICBpdkxlbi0tO1xuICAgICAgIGkrKztcbiAgICAgfVxuICAgfVxuICAgaWYoa2V5TGVuID09PSAwICYmIGl2TGVuID09PSAwKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZm9yKGk9MDtpPG1kX2J1Zi5sZW5ndGg7aSsrKSB7XG4gICAgbWRfYnVmW2ldID0gMDtcbiAgfVxuICByZXR1cm4ge1xuICAgIGtleToga2V5LFxuICAgIGl2OiBpdlxuICB9O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3NlcmlmeS1hZXMvRVZQX0J5dGVzVG9LZXkuanNcbi8vIG1vZHVsZSBpZCA9IDI3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYWVzID0gcmVxdWlyZSgnLi9hZXMnKTtcbnZhciBUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2NpcGhlckJhc2UnKTtcbnZhciBpbmhlcml0cyA9IHJlcXVpcmUoJ2luaGVyaXRzJyk7XG5cbmluaGVyaXRzKFN0cmVhbUNpcGhlciwgVHJhbnNmb3JtKTtcbm1vZHVsZS5leHBvcnRzID0gU3RyZWFtQ2lwaGVyO1xuZnVuY3Rpb24gU3RyZWFtQ2lwaGVyKG1vZGUsIGtleSwgaXYsIGRlY3J5cHQpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFN0cmVhbUNpcGhlcikpIHtcbiAgICByZXR1cm4gbmV3IFN0cmVhbUNpcGhlcihtb2RlLCBrZXksIGl2KTtcbiAgfVxuICBUcmFuc2Zvcm0uY2FsbCh0aGlzKTtcbiAgdGhpcy5fY2lwaGVyID0gbmV3IGFlcy5BRVMoa2V5KTtcbiAgdGhpcy5fcHJldiA9IG5ldyBCdWZmZXIoaXYubGVuZ3RoKTtcbiAgdGhpcy5fY2FjaGUgPSBuZXcgQnVmZmVyKCcnKTtcbiAgdGhpcy5fc2VjQ2FjaGUgPSBuZXcgQnVmZmVyKCcnKTtcbiAgdGhpcy5fZGVjcnlwdCA9IGRlY3J5cHQ7XG4gIGl2LmNvcHkodGhpcy5fcHJldik7XG4gIHRoaXMuX21vZGUgPSBtb2RlO1xufVxuU3RyZWFtQ2lwaGVyLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBfLCBuZXh0KSB7XG4gIG5leHQobnVsbCwgdGhpcy5fbW9kZS5lbmNyeXB0KHRoaXMsIGNodW5rLCB0aGlzLl9kZWNyeXB0KSk7XG59O1xuU3RyZWFtQ2lwaGVyLnByb3RvdHlwZS5fZmx1c2ggPSBmdW5jdGlvbiAobmV4dCkge1xuICB0aGlzLl9jaXBoZXIuc2NydWIoKTtcbiAgbmV4dCgpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3NlcmlmeS1hZXMvc3RyZWFtQ2lwaGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5lbmNyeXB0ID0gZnVuY3Rpb24gKHNlbGYsIGJsb2NrKSB7XG4gIHJldHVybiBzZWxmLl9jaXBoZXIuZW5jcnlwdEJsb2NrKGJsb2NrKTtcbn07XG5leHBvcnRzLmRlY3J5cHQgPSBmdW5jdGlvbiAoc2VsZiwgYmxvY2spIHtcbiAgcmV0dXJuIHNlbGYuX2NpcGhlci5kZWNyeXB0QmxvY2soYmxvY2spO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3NlcmlmeS1hZXMvbW9kZXMvZWNiLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHhvciA9IHJlcXVpcmUoJy4uL3hvcicpO1xuZXhwb3J0cy5lbmNyeXB0ID0gZnVuY3Rpb24gKHNlbGYsIGJsb2NrKSB7XG4gIHZhciBkYXRhID0geG9yKGJsb2NrLCBzZWxmLl9wcmV2KTtcbiAgc2VsZi5fcHJldiA9IHNlbGYuX2NpcGhlci5lbmNyeXB0QmxvY2soZGF0YSk7XG4gIHJldHVybiBzZWxmLl9wcmV2O1xufTtcbmV4cG9ydHMuZGVjcnlwdCA9IGZ1bmN0aW9uIChzZWxmLCBibG9jaykge1xuICB2YXIgcGFkID0gc2VsZi5fcHJldjtcbiAgc2VsZi5fcHJldiA9IGJsb2NrO1xuICB2YXIgb3V0ID0gc2VsZi5fY2lwaGVyLmRlY3J5cHRCbG9jayhibG9jayk7XG4gIHJldHVybiB4b3Iob3V0LCBwYWQpO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3NlcmlmeS1hZXMvbW9kZXMvY2JjLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB4b3I7XG5mdW5jdGlvbiB4b3IoYSwgYikge1xuICB2YXIgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgdmFyIG91dCA9IG5ldyBCdWZmZXIobGVuKTtcbiAgdmFyIGkgPSAtMTtcbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIG91dC53cml0ZVVJbnQ4KGFbaV0gXiBiW2ldLCBpKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9icm93c2VyaWZ5LWFlcy94b3IuanNcbi8vIG1vZHVsZSBpZCA9IDI3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgeG9yID0gcmVxdWlyZSgnLi4veG9yJyk7XG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbiAoc2VsZiwgZGF0YSwgZGVjcnlwdCkge1xuICB2YXIgb3V0ID0gbmV3IEJ1ZmZlcignJyk7XG4gIHZhciBsZW47XG4gIHdoaWxlIChkYXRhLmxlbmd0aCkge1xuICAgIGlmIChzZWxmLl9jYWNoZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHNlbGYuX2NhY2hlID0gc2VsZi5fY2lwaGVyLmVuY3J5cHRCbG9jayhzZWxmLl9wcmV2KTtcbiAgICAgIHNlbGYuX3ByZXYgPSBuZXcgQnVmZmVyKCcnKTtcbiAgICB9XG4gICAgaWYgKHNlbGYuX2NhY2hlLmxlbmd0aCA8PSBkYXRhLmxlbmd0aCkge1xuICAgICAgbGVuID0gc2VsZi5fY2FjaGUubGVuZ3RoO1xuICAgICAgb3V0ID0gQnVmZmVyLmNvbmNhdChbb3V0LCBlbmNyeXB0U3RhcnQoc2VsZiwgZGF0YS5zbGljZSgwLCBsZW4pLCBkZWNyeXB0KV0pO1xuICAgICAgZGF0YSA9IGRhdGEuc2xpY2UobGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0ID0gQnVmZmVyLmNvbmNhdChbb3V0LCBlbmNyeXB0U3RhcnQoc2VsZiwgZGF0YSwgZGVjcnlwdCldKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufTtcbmZ1bmN0aW9uIGVuY3J5cHRTdGFydChzZWxmLCBkYXRhLCBkZWNyeXB0KSB7XG4gIHZhciBsZW4gPSBkYXRhLmxlbmd0aDtcbiAgdmFyIG91dCA9IHhvcihkYXRhLCBzZWxmLl9jYWNoZSk7XG4gIHNlbGYuX2NhY2hlID0gc2VsZi5fY2FjaGUuc2xpY2UobGVuKTtcbiAgc2VsZi5fcHJldiA9IEJ1ZmZlci5jb25jYXQoW3NlbGYuX3ByZXYsIGRlY3J5cHQ/ZGF0YTpvdXRdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYnJvd3NlcmlmeS1hZXMvbW9kZXMvY2ZiLmpzXG4vLyBtb2R1bGUgaWQgPSAyODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHhvciA9IHJlcXVpcmUoJy4uL3hvcicpO1xuZnVuY3Rpb24gZ2V0QmxvY2soc2VsZikge1xuICBzZWxmLl9wcmV2ID0gc2VsZi5fY2lwaGVyLmVuY3J5cHRCbG9jayhzZWxmLl9wcmV2KTtcbiAgcmV0dXJuIHNlbGYuX3ByZXY7XG59XG5leHBvcnRzLmVuY3J5cHQgPSBmdW5jdGlvbiAoc2VsZiwgY2h1bmspIHtcbiAgd2hpbGUgKHNlbGYuX2NhY2hlLmxlbmd0aCA8IGNodW5rLmxlbmd0aCkge1xuICAgIHNlbGYuX2NhY2hlID0gQnVmZmVyLmNvbmNhdChbc2VsZi5fY2FjaGUsIGdldEJsb2NrKHNlbGYpXSk7XG4gIH1cbiAgdmFyIHBhZCA9IHNlbGYuX2NhY2hlLnNsaWNlKDAsIGNodW5rLmxlbmd0aCk7XG4gIHNlbGYuX2NhY2hlID0gc2VsZi5fY2FjaGUuc2xpY2UoY2h1bmsubGVuZ3RoKTtcbiAgcmV0dXJuIHhvcihjaHVuaywgcGFkKTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXJpZnktYWVzL21vZGVzL29mYi5qc1xuLy8gbW9kdWxlIGlkID0gMjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciB4b3IgPSByZXF1aXJlKCcuLi94b3InKTtcbmZ1bmN0aW9uIGdldEJsb2NrKHNlbGYpIHtcbiAgdmFyIG91dCA9IHNlbGYuX2NpcGhlci5lbmNyeXB0QmxvY2soc2VsZi5fcHJldik7XG4gIGluY3IzMihzZWxmLl9wcmV2KTtcbiAgcmV0dXJuIG91dDtcbn1cbmV4cG9ydHMuZW5jcnlwdCA9IGZ1bmN0aW9uIChzZWxmLCBjaHVuaykge1xuICB3aGlsZSAoc2VsZi5fY2FjaGUubGVuZ3RoIDwgY2h1bmsubGVuZ3RoKSB7XG4gICAgc2VsZi5fY2FjaGUgPSBCdWZmZXIuY29uY2F0KFtzZWxmLl9jYWNoZSwgZ2V0QmxvY2soc2VsZildKTtcbiAgfVxuICB2YXIgcGFkID0gc2VsZi5fY2FjaGUuc2xpY2UoMCwgY2h1bmsubGVuZ3RoKTtcbiAgc2VsZi5fY2FjaGUgPSBzZWxmLl9jYWNoZS5zbGljZShjaHVuay5sZW5ndGgpO1xuICByZXR1cm4geG9yKGNodW5rLCBwYWQpO1xufTtcbmZ1bmN0aW9uIGluY3IzMihpdikge1xuICB2YXIgbGVuID0gaXYubGVuZ3RoO1xuICB2YXIgaXRlbTtcbiAgd2hpbGUgKGxlbi0tKSB7XG4gICAgaXRlbSA9IGl2LnJlYWRVSW50OChsZW4pO1xuICAgIGlmIChpdGVtID09PSAyNTUpIHtcbiAgICAgIGl2LndyaXRlVUludDgoMCwgbGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbSsrO1xuICAgICAgaXYud3JpdGVVSW50OChpdGVtLCBsZW4pO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXJpZnktYWVzL21vZGVzL2N0ci5qc1xuLy8gbW9kdWxlIGlkID0gMjgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhZXMgPSByZXF1aXJlKCcuL2FlcycpO1xudmFyIFRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vY2lwaGVyQmFzZScpO1xudmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKTtcbnZhciBtb2RlcyA9IHJlcXVpcmUoJy4vbW9kZXMnKTtcbnZhciBTdHJlYW1DaXBoZXIgPSByZXF1aXJlKCcuL3N0cmVhbUNpcGhlcicpO1xudmFyIGVidGsgPSByZXF1aXJlKCcuL0VWUF9CeXRlc1RvS2V5Jyk7XG5cbmluaGVyaXRzKERlY2lwaGVyLCBUcmFuc2Zvcm0pO1xuZnVuY3Rpb24gRGVjaXBoZXIobW9kZSwga2V5LCBpdikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgRGVjaXBoZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBEZWNpcGhlcihtb2RlLCBrZXksIGl2KTtcbiAgfVxuICBUcmFuc2Zvcm0uY2FsbCh0aGlzKTtcbiAgdGhpcy5fY2FjaGUgPSBuZXcgU3BsaXR0ZXIoKTtcbiAgdGhpcy5fbGFzdCA9IHZvaWQgMDtcbiAgdGhpcy5fY2lwaGVyID0gbmV3IGFlcy5BRVMoa2V5KTtcbiAgdGhpcy5fcHJldiA9IG5ldyBCdWZmZXIoaXYubGVuZ3RoKTtcbiAgaXYuY29weSh0aGlzLl9wcmV2KTtcbiAgdGhpcy5fbW9kZSA9IG1vZGU7XG59XG5EZWNpcGhlci5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChkYXRhLCBfLCBuZXh0KSB7XG4gIHRoaXMuX2NhY2hlLmFkZChkYXRhKTtcbiAgdmFyIGNodW5rO1xuICB2YXIgdGhpbmc7XG4gIHdoaWxlICgoY2h1bmsgPSB0aGlzLl9jYWNoZS5nZXQoKSkpIHtcbiAgICB0aGluZyA9IHRoaXMuX21vZGUuZGVjcnlwdCh0aGlzLCBjaHVuayk7XG4gICAgdGhpcy5wdXNoKHRoaW5nKTtcbiAgfVxuICBuZXh0KCk7XG59O1xuRGVjaXBoZXIucHJvdG90eXBlLl9mbHVzaCA9IGZ1bmN0aW9uIChuZXh0KSB7XG4gIHZhciBjaHVuayA9IHRoaXMuX2NhY2hlLmZsdXNoKCk7XG4gIGlmICghY2h1bmspIHtcbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gIHRoaXMucHVzaCh1bnBhZCh0aGlzLl9tb2RlLmRlY3J5cHQodGhpcywgY2h1bmspKSk7XG5cbiAgbmV4dCgpO1xufTtcblxuZnVuY3Rpb24gU3BsaXR0ZXIoKSB7XG4gICBpZiAoISh0aGlzIGluc3RhbmNlb2YgU3BsaXR0ZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBTcGxpdHRlcigpO1xuICB9XG4gIHRoaXMuY2FjaGUgPSBuZXcgQnVmZmVyKCcnKTtcbn1cblNwbGl0dGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmNhY2hlID0gQnVmZmVyLmNvbmNhdChbdGhpcy5jYWNoZSwgZGF0YV0pO1xufTtcblxuU3BsaXR0ZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY2FjaGUubGVuZ3RoID4gMTYpIHtcbiAgICB2YXIgb3V0ID0gdGhpcy5jYWNoZS5zbGljZSgwLCAxNik7XG4gICAgdGhpcy5jYWNoZSA9IHRoaXMuY2FjaGUuc2xpY2UoMTYpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuU3BsaXR0ZXIucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jYWNoZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZTtcbiAgfVxufTtcbmZ1bmN0aW9uIHVucGFkKGxhc3QpIHtcbiAgdmFyIHBhZGRlZCA9IGxhc3RbMTVdO1xuICBpZiAocGFkZGVkID09PSAxNikge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gbGFzdC5zbGljZSgwLCAxNiAtIHBhZGRlZCk7XG59XG5cbnZhciBtb2RlbGlzdCA9IHtcbiAgRUNCOiByZXF1aXJlKCcuL21vZGVzL2VjYicpLFxuICBDQkM6IHJlcXVpcmUoJy4vbW9kZXMvY2JjJyksXG4gIENGQjogcmVxdWlyZSgnLi9tb2Rlcy9jZmInKSxcbiAgT0ZCOiByZXF1aXJlKCcuL21vZGVzL29mYicpLFxuICBDVFI6IHJlcXVpcmUoJy4vbW9kZXMvY3RyJylcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNyeXB0bykge1xuICBmdW5jdGlvbiBjcmVhdGVEZWNpcGhlcml2KHN1aXRlLCBwYXNzd29yZCwgaXYpIHtcbiAgICB2YXIgY29uZmlnID0gbW9kZXNbc3VpdGVdO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHN1aXRlIHR5cGUnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBpdiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGl2ID0gbmV3IEJ1ZmZlcihpdik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcGFzc3dvcmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBwYXNzd29yZCA9IG5ldyBCdWZmZXIocGFzc3dvcmQpO1xuICAgIH1cbiAgICBpZiAocGFzc3dvcmQubGVuZ3RoICE9PSBjb25maWcua2V5LzgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQga2V5IGxlbmd0aCAnICsgcGFzc3dvcmQubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKGl2Lmxlbmd0aCAhPT0gY29uZmlnLml2KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIGl2IGxlbmd0aCAnICsgaXYubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZy50eXBlID09PSAnc3RyZWFtJykge1xuICAgICAgcmV0dXJuIG5ldyBTdHJlYW1DaXBoZXIobW9kZWxpc3RbY29uZmlnLm1vZGVdLCBwYXNzd29yZCwgaXYsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERlY2lwaGVyKG1vZGVsaXN0W2NvbmZpZy5tb2RlXSwgcGFzc3dvcmQsIGl2KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZURlY2lwaGVyIChzdWl0ZSwgcGFzc3dvcmQpIHtcbiAgICB2YXIgY29uZmlnID0gbW9kZXNbc3VpdGVdO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHN1aXRlIHR5cGUnKTtcbiAgICB9XG4gICAgdmFyIGtleXMgPSBlYnRrKGNyeXB0bywgcGFzc3dvcmQsIGNvbmZpZy5rZXksIGNvbmZpZy5pdik7XG4gICAgcmV0dXJuIGNyZWF0ZURlY2lwaGVyaXYoc3VpdGUsIGtleXMua2V5LCBrZXlzLml2KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGNyZWF0ZURlY2lwaGVyOiBjcmVhdGVEZWNpcGhlcixcbiAgICBjcmVhdGVEZWNpcGhlcml2OiBjcmVhdGVEZWNpcGhlcml2XG4gIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Jyb3dzZXJpZnktYWVzL2RlY3J5cHRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFRvZG8gZnJvbSBcIlRvZG9cIjtcclxuXHJcbnZhciBUb2RvTGlzdCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHt0b2Rvc30gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHZhciByZW5kZXJUb2RvcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIHRvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgIHJldHVybiA8VG9kbyBrZXk9e3RvZG8uaWR9IHsuLi50b2RvfSBvblRvZ2dsZT17dGhpcy5wcm9wcy5vblRvZ2dsZX0vPlxyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7cmVuZGVyVG9kb3MoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Ub2RvTGlzdC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG52YXIgVG9kbyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHtpZCwgdGV4dCwgY29tcGxldGVkfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRvZ2dsZShpZCk7XHJcbiAgICAgIH19PlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkZWZhdWx0Q2hlY2tlZD17Y29tcGxldGVkfS8+XHJcbiAgICAgICAge3RleHR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Ub2RvLmpzeCIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnZhciBBZGRUb2RvRm9ybSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBwcm9wVHlwZXM6IGZ1bmN0aW9uKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIHtcclxuICAgICAgICBvbkFkZFRvZG86IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuICAgICAgfVxyXG4gICAgKVxyXG4gIH0sXHJcblxyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dCByZWY9XCJuZXd0b2RvXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIldoYXQgZG8geW91IG5lZWQgdG8gZG9cIi8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBleHBhbmRlZFwiPkFkZCBUb2RvPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9LFxyXG5cclxuICBoYW5kbGVTdWJtaXQ6IGZ1bmN0aW9uKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgbmV3VG9kb1RleHQgPSB0aGlzLnJlZnMubmV3dG9kby52YWx1ZTtcclxuICAgIGlmICh0eXBlb2YgbmV3VG9kb1RleHQgPT09IFwic3RyaW5nXCIgJiYgbmV3VG9kb1RleHQubGVuZ3RoID4gMCl7XHJcbiAgICAgIHRoaXMucmVmcy5uZXd0b2RvLnZhbHVlID0gXCJcIjtcclxuICAgICAgdGhpcy5wcm9wcy5vbkFkZFRvZG8obmV3VG9kb1RleHQpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMucmVmcy5uZXd0b2RvLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFRvZG9Gb3JtO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9BZGRUb2RvRm9ybS5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG52YXIgVG9kb1NlYXJjaCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIiByZWY9XCJzZWFyY2hUZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggdG9kb3NcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgcmVmPVwic2hvd0NvbXBsZXRlZFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH0vPlxyXG4gICAgICAgICAgICBTaG93IGNvbXBsZXRlZCB0b2Rvc1xyXG4gICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0sXHJcblxyXG4gIGhhbmRsZVNlYXJjaDogZnVuY3Rpb24oZSkge1xyXG4gICAgdmFyIHNob3dDb21wbGV0ZWQgPSB0aGlzLnJlZnMuc2hvd0NvbXBsZXRlZC5jaGVja2VkO1xyXG4gICAgdmFyIHNlYXJjaFRleHQgPSB0aGlzLnJlZnMuc2VhcmNoVGV4dC52YWx1ZTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm9uU2VhcmNoKHNob3dDb21wbGV0ZWQsIHNlYXJjaFRleHQpO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvU2VhcmNoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9Ub2RvU2VhcmNoLmpzeCIsImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuXHJcbnZhciBUb2RvQVBJID0ge1xyXG4gIHNldFRvZG9zOiBmdW5jdGlvbih0b2Rvcykge1xyXG4gICAgaWYgKCQuaXNBcnJheSh0b2Rvcykpe1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbiAgICAgIHJldHVybiB0b2RvcztcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBnZXRUb2RvczogZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc3RyaW5nVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpO1xyXG4gICAgdmFyIHRvZG9zID0gdW5kZWZpbmVkO1xyXG5cclxuICAgIHRyeXtcclxuICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKHN0cmluZ1RvZG9zKTtcclxuICAgIH1jYXRjaChlKXtcclxuICAgICAgdG9kb3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKCQuaXNBcnJheSh0b2RvcykgPyB0b2RvcyA6IFtdKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQVBJO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYXBpL1RvZG9BUEkuanN4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvaW5kZXguanMhLi9hcHAuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5zY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyIS4vfi9zYXNzLWxvYWRlciEuL2FwcC9zdHlsZXMvYXBwLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLyoqXFxuICogRm91bmRhdGlvbiBmb3IgU2l0ZXMgYnkgWlVSQlxcbiAqIFZlcnNpb24gNi4yLjBcXG4gKiBmb3VuZGF0aW9uLnp1cmIuY29tXFxuICogTGljZW5zZWQgdW5kZXIgTUlUIE9wZW4gU291cmNlXFxuICovXFxuLyohIG5vcm1hbGl6ZS5jc3MgdjMuMC4zIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcbi8qKlxcbiAgICogMS4gU2V0IGRlZmF1bHQgZm9udCBmYW1pbHkgdG8gc2Fucy1zZXJpZi5cXG4gICAqIDIuIFByZXZlbnQgaU9TIGFuZCBJRSB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIGRldmljZSBvcmllbnRhdGlvbiBjaGFuZ2UsXFxuICAgKiAgICB3aXRob3V0IGRpc2FibGluZyB1c2VyIHpvb20uXFxuICAgKi9cXG5odG1sIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLyogMSAqL1xcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXG4gICAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gICAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBhbnkgSFRNTDUgZWxlbWVudCBpbiBJRSA4LzkuXFxuICAgKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxcbiAgICogYW5kIEZpcmVmb3guXFxuICAgKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYG1haW5gIGluIElFIDExLlxcbiAgICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1haW4sXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbixcXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcbiAgICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAgICovXFxuYXVkaW8sXFxuY2FudmFzLFxcbnByb2dyZXNzLFxcbnZpZGVvIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAgICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXG4gICAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXFxuICAgKi9cXG5hdWRpbzpub3QoW2NvbnRyb2xzXSkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMDsgfVxcblxcbi8qKlxcbiAgICogQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxcbiAgICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcbiAgICovXFxuW2hpZGRlbl0sXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qIExpbmtzXFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICAgKi9cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLyoqXFxuICAgKiBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIGZvY3VzZWQgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBhbHNvIGluIGFuXFxuICAgKiBhY3RpdmUvaG92ZXIgc3RhdGUuXFxuICAgKi9cXG5hOmFjdGl2ZSxcXG5hOmhvdmVyIHtcXG4gIG91dGxpbmU6IDA7IH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gICAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gICAqL1xcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7IH1cXG5cXG4vKipcXG4gICAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gICAqL1xcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLyoqXFxuICAgKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICAgKi9cXG5kZm4ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLyoqXFxuICAgKiBBZGRyZXNzIHZhcmlhYmxlIGBoMWAgZm9udC1zaXplIGFuZCBtYXJnaW4gd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgXFxuICAgKiBjb250ZXh0cyBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxuICAgKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKipcXG4gICAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxuICAgKi9cXG5tYXJrIHtcXG4gIGJhY2tncm91bmQ6ICNmZjA7XFxuICBjb2xvcjogIzAwMDsgfVxcblxcbi8qKlxcbiAgICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTsgfVxcblxcbi8qKlxcbiAgICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxcbiAgICovXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtOyB9XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTsgfVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICAgKiBSZW1vdmUgYm9yZGVyIHdoZW4gaW5zaWRlIGBhYCBlbGVtZW50IGluIElFIDgvOS8xMC5cXG4gICAqL1xcbmltZyB7XFxuICBib3JkZXI6IDA7IH1cXG5cXG4vKipcXG4gICAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcbiAgICovXFxuc3ZnOm5vdCg6cm9vdCkge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICAgKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cXG4gICAqL1xcbmZpZ3VyZSB7XFxuICBtYXJnaW46IDFlbSA0MHB4OyB9XFxuXFxuLyoqXFxuICAgKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxuICAgKi9cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogMDsgfVxcblxcbi8qKlxcbiAgICogQ29udGFpbiBvdmVyZmxvdyBpbiBhbGwgYnJvd3NlcnMuXFxuICAgKi9cXG5wcmUge1xcbiAgb3ZlcmZsb3c6IGF1dG87IH1cXG5cXG4vKipcXG4gICAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cXG4gICAqL1xcbmNvZGUsXFxua2JkLFxcbnByZSxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXFxuLyogRm9ybXNcXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICAgKiBLbm93biBsaW1pdGF0aW9uOiBieSBkZWZhdWx0LCBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYIGFsbG93IHZlcnkgbGltaXRlZFxcbiAgICogc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxcbiAgICovXFxuLyoqXFxuICAgKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICAgKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cXG4gICAqIDIuIENvcnJlY3QgZm9udCBwcm9wZXJ0aWVzIG5vdCBiZWluZyBpbmhlcml0ZWQuXFxuICAgKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXG4gICAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqL1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogMyAqLyB9XFxuXFxuLyoqXFxuICAgKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cXG4gICAqL1xcbmJ1dHRvbiB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi8qKlxcbiAgICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxcbiAgICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cXG4gICAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXFxuICAgKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXFxuICAgKi9cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XFxuXFxuLyoqXFxuICAgKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxcbiAgICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxuICAgKiAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXFxuICAgKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxcbiAgICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcbiAgICovXFxuYnV0dG9uLFxcbmh0bWwgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIC8qIDIgKi9cXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC8qIDMgKi8gfVxcblxcbi8qKlxcbiAgICogUmUtc2V0IGRlZmF1bHQgY3Vyc29yIGZvciBkaXNhYmxlZCBlbGVtZW50cy5cXG4gICAqL1xcbmJ1dHRvbltkaXNhYmxlZF0sXFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuLyoqXFxuICAgKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgYm9yZGVyIGluIEZpcmVmb3ggNCsuXFxuICAgKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbi8qKlxcbiAgICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcbiAgICogdGhlIFVBIHN0eWxlc2hlZXQuXFxuICAgKi9cXG5pbnB1dCB7XFxuICBsaW5lLWhlaWdodDogbm9ybWFsOyB9XFxuXFxuLyoqXFxuICAgKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXFxuICAgKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxcbiAgICpcXG4gICAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXFxuICAgKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcbiAgICovXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICAgKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxcbiAgICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXG4gICAqIGRlY3JlbWVudCBidXR0b24gdG8gY2hhbmdlIGZyb20gYGRlZmF1bHRgIHRvIGB0ZXh0YC5cXG4gICAqL1xcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbmlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbi8qKlxcbiAgICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxuICAgKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxcbiAgICovXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxuICAvKiAxICovXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAgICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXFxuICAgKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXFxuICAgKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXFxuICAgKi9cXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cXG5cXG4vKipcXG4gICAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXG4gICAqIFtOT1RFXSBXZSBkb24ndCBlbmFibGUgdGhpcyBydWxlc2V0IGluIEZvdW5kYXRpb24sIGJlY2F1c2Ugd2Ugd2FudCB0aGUgPGZpZWxkc2V0PiBlbGVtZW50IHRvIGhhdmUgcGxhaW4gc3R5bGluZy5cXG4gICAqL1xcbi8qIGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcXG4gICAgbWFyZ2luOiAwIDJweDtcXG4gICAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xcbiAgfSAqL1xcbi8qKlxcbiAgICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxcbiAgICogMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxcbiAgICovXFxubGVnZW5kIHtcXG4gIGJvcmRlcjogMDtcXG4gIC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gICAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxuICAgKi9cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bzsgfVxcblxcbi8qKlxcbiAgICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxcbiAgICogTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXFxuICAgKi9cXG5vcHRncm91cCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi8qIFRhYmxlc1xcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gICAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cXG4gICAqL1xcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbnRkLFxcbnRoIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4uZm91bmRhdGlvbi1tcSB7XFxuICBmb250LWZhbWlseTogXFxcInNtYWxsPTBlbSZtZWRpdW09NDBlbSZsYXJnZT02NGVtJnhsYXJnZT03NWVtJnh4bGFyZ2U9OTBlbVxcXCI7IH1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDsgfVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsgfVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICAtbXMtaW50ZXJwb2xhdGlvbi1tb2RlOiBiaWN1YmljO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbnRleHRhcmVhIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbiNtYXBfY2FudmFzIGltZyxcXG4jbWFwX2NhbnZhcyBlbWJlZCxcXG4jbWFwX2NhbnZhcyBvYmplY3QsXFxuLm1hcF9jYW52YXMgaW1nLFxcbi5tYXBfY2FudmFzIGVtYmVkLFxcbi5tYXBfY2FudmFzIG9iamVjdCxcXG4ubXFhLWRpc3BsYXkgaW1nLFxcbi5tcWEtZGlzcGxheSBlbWJlZCxcXG4ubXFhLWRpc3BsYXkgb2JqZWN0IHtcXG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50OyB9XFxuXFxuYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbi5pcy12aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH1cXG5cXG4uaXMtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5yb3cge1xcbiAgbWF4LXdpZHRoOiA3NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICAucm93OjpiZWZvcmUsIC5yb3c6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgb3JkZXI6IDE7IH1cXG4gIC5yb3c6OmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7IH1cXG4gIC5yb3cuY29sbGFwc2UgPiAuY29sdW1uLCAucm93LmNvbGxhcHNlID4gLmNvbHVtbnMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7IH1cXG4gIC5yb3cgLnJvdyB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMC42MjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogLTAuNjI1cmVtOyB9XFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgICAucm93IC5yb3cge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjkzNzVyZW07XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjkzNzVyZW07IH0gfVxcbiAgICAucm93IC5yb3cuY29sbGFwc2Uge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgLnJvdy5leHBhbmRlZCB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgICAucm93LmV4cGFuZGVkIC5yb3cge1xcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcblxcbi5jb2x1bW4sIC5jb2x1bW5zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNjI1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC42MjVyZW07IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLmNvbHVtbiwgLmNvbHVtbnMge1xcbiAgICAgIHBhZGRpbmctbGVmdDogMC45Mzc1cmVtO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuOTM3NXJlbTsgfSB9XFxuICAuY29sdW1uOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCksIC5jb2x1bW5zOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgICBmbG9hdDogcmlnaHQ7IH1cXG4gIC5jb2x1bW4uZW5kOmxhc3QtY2hpbGQ6bGFzdC1jaGlsZCwgLmVuZC5jb2x1bW5zOmxhc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLmNvbHVtbi5yb3cucm93LCAucm93LnJvdy5jb2x1bW5zIHtcXG4gIGZsb2F0OiBub25lOyB9XFxuICAucm93IC5jb2x1bW4ucm93LnJvdywgLnJvdyAucm93LnJvdy5jb2x1bW5zIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuXFxuLnNtYWxsLTEge1xcbiAgd2lkdGg6IDguMzMzMzMlOyB9XFxuXFxuLnNtYWxsLXB1c2gtMSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA4LjMzMzMzJTsgfVxcblxcbi5zbWFsbC1wdWxsLTEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTguMzMzMzMlOyB9XFxuXFxuLnNtYWxsLW9mZnNldC0wIHtcXG4gIG1hcmdpbi1sZWZ0OiAwJTsgfVxcblxcbi5zbWFsbC0yIHtcXG4gIHdpZHRoOiAxNi42NjY2NyU7IH1cXG5cXG4uc21hbGwtcHVzaC0yIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDE2LjY2NjY3JTsgfVxcblxcbi5zbWFsbC1wdWxsLTIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTE2LjY2NjY3JTsgfVxcblxcbi5zbWFsbC1vZmZzZXQtMSB7XFxuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7IH1cXG5cXG4uc21hbGwtMyB7XFxuICB3aWR0aDogMjUlOyB9XFxuXFxuLnNtYWxsLXB1c2gtMyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAyNSU7IH1cXG5cXG4uc21hbGwtcHVsbC0zIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC0yNSU7IH1cXG5cXG4uc21hbGwtb2Zmc2V0LTIge1xcbiAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxcblxcbi5zbWFsbC00IHtcXG4gIHdpZHRoOiAzMy4zMzMzMyU7IH1cXG5cXG4uc21hbGwtcHVzaC00IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDMzLjMzMzMzJTsgfVxcblxcbi5zbWFsbC1wdWxsLTQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTMzLjMzMzMzJTsgfVxcblxcbi5zbWFsbC1vZmZzZXQtMyB7XFxuICBtYXJnaW4tbGVmdDogMjUlOyB9XFxuXFxuLnNtYWxsLTUge1xcbiAgd2lkdGg6IDQxLjY2NjY3JTsgfVxcblxcbi5zbWFsbC1wdXNoLTUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNDEuNjY2NjclOyB9XFxuXFxuLnNtYWxsLXB1bGwtNSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNDEuNjY2NjclOyB9XFxuXFxuLnNtYWxsLW9mZnNldC00IHtcXG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7IH1cXG5cXG4uc21hbGwtNiB7XFxuICB3aWR0aDogNTAlOyB9XFxuXFxuLnNtYWxsLXB1c2gtNiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA1MCU7IH1cXG5cXG4uc21hbGwtcHVsbC02IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC01MCU7IH1cXG5cXG4uc21hbGwtb2Zmc2V0LTUge1xcbiAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxcblxcbi5zbWFsbC03IHtcXG4gIHdpZHRoOiA1OC4zMzMzMyU7IH1cXG5cXG4uc21hbGwtcHVzaC03IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDU4LjMzMzMzJTsgfVxcblxcbi5zbWFsbC1wdWxsLTcge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTU4LjMzMzMzJTsgfVxcblxcbi5zbWFsbC1vZmZzZXQtNiB7XFxuICBtYXJnaW4tbGVmdDogNTAlOyB9XFxuXFxuLnNtYWxsLTgge1xcbiAgd2lkdGg6IDY2LjY2NjY3JTsgfVxcblxcbi5zbWFsbC1wdXNoLTgge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNjYuNjY2NjclOyB9XFxuXFxuLnNtYWxsLXB1bGwtOCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNjYuNjY2NjclOyB9XFxuXFxuLnNtYWxsLW9mZnNldC03IHtcXG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7IH1cXG5cXG4uc21hbGwtOSB7XFxuICB3aWR0aDogNzUlOyB9XFxuXFxuLnNtYWxsLXB1c2gtOSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA3NSU7IH1cXG5cXG4uc21hbGwtcHVsbC05IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC03NSU7IH1cXG5cXG4uc21hbGwtb2Zmc2V0LTgge1xcbiAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxcblxcbi5zbWFsbC0xMCB7XFxuICB3aWR0aDogODMuMzMzMzMlOyB9XFxuXFxuLnNtYWxsLXB1c2gtMTAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogODMuMzMzMzMlOyB9XFxuXFxuLnNtYWxsLXB1bGwtMTAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTgzLjMzMzMzJTsgfVxcblxcbi5zbWFsbC1vZmZzZXQtOSB7XFxuICBtYXJnaW4tbGVmdDogNzUlOyB9XFxuXFxuLnNtYWxsLTExIHtcXG4gIHdpZHRoOiA5MS42NjY2NyU7IH1cXG5cXG4uc21hbGwtcHVzaC0xMSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA5MS42NjY2NyU7IH1cXG5cXG4uc21hbGwtcHVsbC0xMSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtOTEuNjY2NjclOyB9XFxuXFxuLnNtYWxsLW9mZnNldC0xMCB7XFxuICBtYXJnaW4tbGVmdDogODMuMzMzMzMlOyB9XFxuXFxuLnNtYWxsLTEyIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNtYWxsLW9mZnNldC0xMSB7XFxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjclOyB9XFxuXFxuLnNtYWxsLXVwLTEgPiAuY29sdW1uLCAuc21hbGwtdXAtMSA+IC5jb2x1bW5zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5zbWFsbC11cC0xID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5zbWFsbC11cC0xID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgY2xlYXI6IG5vbmU7IH1cXG4gIC5zbWFsbC11cC0xID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbisxKSwgLnNtYWxsLXVwLTEgPiAuY29sdW1uczpudGgtb2YtdHlwZSgxbisxKSB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAuc21hbGwtdXAtMSA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLnNtYWxsLXVwLTEgPiAuY29sdW1uczpsYXN0LWNoaWxkIHtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uc21hbGwtdXAtMiA+IC5jb2x1bW4sIC5zbWFsbC11cC0yID4gLmNvbHVtbnMge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuICAuc21hbGwtdXAtMiA+IC5jb2x1bW46bnRoLW9mLXR5cGUoMW4pLCAuc21hbGwtdXAtMiA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgIGNsZWFyOiBub25lOyB9XFxuICAuc21hbGwtdXAtMiA+IC5jb2x1bW46bnRoLW9mLXR5cGUoMm4rMSksIC5zbWFsbC11cC0yID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMm4rMSkge1xcbiAgICBjbGVhcjogYm90aDsgfVxcbiAgLnNtYWxsLXVwLTIgPiAuY29sdW1uOmxhc3QtY2hpbGQsIC5zbWFsbC11cC0yID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLnNtYWxsLXVwLTMgPiAuY29sdW1uLCAuc21hbGwtdXAtMyA+IC5jb2x1bW5zIHtcXG4gIHdpZHRoOiAzMy4zMzMzMyU7XFxuICBmbG9hdDogbGVmdDsgfVxcbiAgLnNtYWxsLXVwLTMgPiAuY29sdW1uOm50aC1vZi10eXBlKDFuKSwgLnNtYWxsLXVwLTMgPiAuY29sdW1uczpudGgtb2YtdHlwZSgxbikge1xcbiAgICBjbGVhcjogbm9uZTsgfVxcbiAgLnNtYWxsLXVwLTMgPiAuY29sdW1uOm50aC1vZi10eXBlKDNuKzEpLCAuc21hbGwtdXAtMyA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDNuKzEpIHtcXG4gICAgY2xlYXI6IGJvdGg7IH1cXG4gIC5zbWFsbC11cC0zID4gLmNvbHVtbjpsYXN0LWNoaWxkLCAuc21hbGwtdXAtMyA+IC5jb2x1bW5zOmxhc3QtY2hpbGQge1xcbiAgICBmbG9hdDogbGVmdDsgfVxcblxcbi5zbWFsbC11cC00ID4gLmNvbHVtbiwgLnNtYWxsLXVwLTQgPiAuY29sdW1ucyB7XFxuICB3aWR0aDogMjUlO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5zbWFsbC11cC00ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5zbWFsbC11cC00ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgY2xlYXI6IG5vbmU7IH1cXG4gIC5zbWFsbC11cC00ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg0bisxKSwgLnNtYWxsLXVwLTQgPiAuY29sdW1uczpudGgtb2YtdHlwZSg0bisxKSB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAuc21hbGwtdXAtNCA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLnNtYWxsLXVwLTQgPiAuY29sdW1uczpsYXN0LWNoaWxkIHtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uc21hbGwtdXAtNSA+IC5jb2x1bW4sIC5zbWFsbC11cC01ID4gLmNvbHVtbnMge1xcbiAgd2lkdGg6IDIwJTtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuICAuc21hbGwtdXAtNSA+IC5jb2x1bW46bnRoLW9mLXR5cGUoMW4pLCAuc21hbGwtdXAtNSA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgIGNsZWFyOiBub25lOyB9XFxuICAuc21hbGwtdXAtNSA+IC5jb2x1bW46bnRoLW9mLXR5cGUoNW4rMSksIC5zbWFsbC11cC01ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoNW4rMSkge1xcbiAgICBjbGVhcjogYm90aDsgfVxcbiAgLnNtYWxsLXVwLTUgPiAuY29sdW1uOmxhc3QtY2hpbGQsIC5zbWFsbC11cC01ID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuXFxuLnNtYWxsLXVwLTYgPiAuY29sdW1uLCAuc21hbGwtdXAtNiA+IC5jb2x1bW5zIHtcXG4gIHdpZHRoOiAxNi42NjY2NyU7XFxuICBmbG9hdDogbGVmdDsgfVxcbiAgLnNtYWxsLXVwLTYgPiAuY29sdW1uOm50aC1vZi10eXBlKDFuKSwgLnNtYWxsLXVwLTYgPiAuY29sdW1uczpudGgtb2YtdHlwZSgxbikge1xcbiAgICBjbGVhcjogbm9uZTsgfVxcbiAgLnNtYWxsLXVwLTYgPiAuY29sdW1uOm50aC1vZi10eXBlKDZuKzEpLCAuc21hbGwtdXAtNiA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDZuKzEpIHtcXG4gICAgY2xlYXI6IGJvdGg7IH1cXG4gIC5zbWFsbC11cC02ID4gLmNvbHVtbjpsYXN0LWNoaWxkLCAuc21hbGwtdXAtNiA+IC5jb2x1bW5zOmxhc3QtY2hpbGQge1xcbiAgICBmbG9hdDogbGVmdDsgfVxcblxcbi5zbWFsbC11cC03ID4gLmNvbHVtbiwgLnNtYWxsLXVwLTcgPiAuY29sdW1ucyB7XFxuICB3aWR0aDogMTQuMjg1NzElO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5zbWFsbC11cC03ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5zbWFsbC11cC03ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgY2xlYXI6IG5vbmU7IH1cXG4gIC5zbWFsbC11cC03ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg3bisxKSwgLnNtYWxsLXVwLTcgPiAuY29sdW1uczpudGgtb2YtdHlwZSg3bisxKSB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAuc21hbGwtdXAtNyA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLnNtYWxsLXVwLTcgPiAuY29sdW1uczpsYXN0LWNoaWxkIHtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uc21hbGwtdXAtOCA+IC5jb2x1bW4sIC5zbWFsbC11cC04ID4gLmNvbHVtbnMge1xcbiAgd2lkdGg6IDEyLjUlO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5zbWFsbC11cC04ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5zbWFsbC11cC04ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgY2xlYXI6IG5vbmU7IH1cXG4gIC5zbWFsbC11cC04ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg4bisxKSwgLnNtYWxsLXVwLTggPiAuY29sdW1uczpudGgtb2YtdHlwZSg4bisxKSB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAuc21hbGwtdXAtOCA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLnNtYWxsLXVwLTggPiAuY29sdW1uczpsYXN0LWNoaWxkIHtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4uc21hbGwtY29sbGFwc2UgPiAuY29sdW1uLCAuc21hbGwtY29sbGFwc2UgPiAuY29sdW1ucyB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwOyB9XFxuXFxuLnNtYWxsLWNvbGxhcHNlIC5yb3cge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4uc21hbGwtdW5jb2xsYXBzZSA+IC5jb2x1bW4sIC5zbWFsbC11bmNvbGxhcHNlID4gLmNvbHVtbnMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjYyNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNjI1cmVtOyB9XFxuXFxuLnNtYWxsLWNlbnRlcmVkIHtcXG4gIGZsb2F0OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG5cXG4uc21hbGwtdW5jZW50ZXJlZCxcXG4uc21hbGwtcHVzaC0wLFxcbi5zbWFsbC1wdWxsLTAge1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAubWVkaXVtLTEge1xcbiAgICB3aWR0aDogOC4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tcHVzaC0xIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA4LjMzMzMzJTsgfVxcbiAgLm1lZGl1bS1wdWxsLTEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC04LjMzMzMzJTsgfVxcbiAgLm1lZGl1bS1vZmZzZXQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwJTsgfVxcbiAgLm1lZGl1bS0yIHtcXG4gICAgd2lkdGg6IDE2LjY2NjY3JTsgfVxcbiAgLm1lZGl1bS1wdXNoLTIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDE2LjY2NjY3JTsgfVxcbiAgLm1lZGl1bS1wdWxsLTIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xNi42NjY2NyU7IH1cXG4gIC5tZWRpdW0tb2Zmc2V0LTEge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tMyB7XFxuICAgIHdpZHRoOiAyNSU7IH1cXG4gIC5tZWRpdW0tcHVzaC0zIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAyNSU7IH1cXG4gIC5tZWRpdW0tcHVsbC0zIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMjUlOyB9XFxuICAubWVkaXVtLW9mZnNldC0yIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE2LjY2NjY3JTsgfVxcbiAgLm1lZGl1bS00IHtcXG4gICAgd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLm1lZGl1bS1wdXNoLTQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDMzLjMzMzMzJTsgfVxcbiAgLm1lZGl1bS1wdWxsLTQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0zMy4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XFxuICAubWVkaXVtLTUge1xcbiAgICB3aWR0aDogNDEuNjY2NjclOyB9XFxuICAubWVkaXVtLXB1c2gtNSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNDEuNjY2NjclOyB9XFxuICAubWVkaXVtLXB1bGwtNSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTQxLjY2NjY3JTsgfVxcbiAgLm1lZGl1bS1vZmZzZXQtNCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tNiB7XFxuICAgIHdpZHRoOiA1MCU7IH1cXG4gIC5tZWRpdW0tcHVzaC02IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1MCU7IH1cXG4gIC5tZWRpdW0tcHVsbC02IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtNTAlOyB9XFxuICAubWVkaXVtLW9mZnNldC01IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQxLjY2NjY3JTsgfVxcbiAgLm1lZGl1bS03IHtcXG4gICAgd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLm1lZGl1bS1wdXNoLTcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDU4LjMzMzMzJTsgfVxcbiAgLm1lZGl1bS1wdWxsLTcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC01OC4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlOyB9XFxuICAubWVkaXVtLTgge1xcbiAgICB3aWR0aDogNjYuNjY2NjclOyB9XFxuICAubWVkaXVtLXB1c2gtOCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNjYuNjY2NjclOyB9XFxuICAubWVkaXVtLXB1bGwtOCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTY2LjY2NjY3JTsgfVxcbiAgLm1lZGl1bS1vZmZzZXQtNyB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tOSB7XFxuICAgIHdpZHRoOiA3NSU7IH1cXG4gIC5tZWRpdW0tcHVzaC05IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA3NSU7IH1cXG4gIC5tZWRpdW0tcHVsbC05IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtNzUlOyB9XFxuICAubWVkaXVtLW9mZnNldC04IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY3JTsgfVxcbiAgLm1lZGl1bS0xMCB7XFxuICAgIHdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tcHVzaC0xMCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogODMuMzMzMzMlOyB9XFxuICAubWVkaXVtLXB1bGwtMTAge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC04My4zMzMzMyU7IH1cXG4gIC5tZWRpdW0tb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XFxuICAubWVkaXVtLTExIHtcXG4gICAgd2lkdGg6IDkxLjY2NjY3JTsgfVxcbiAgLm1lZGl1bS1wdXNoLTExIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA5MS42NjY2NyU7IH1cXG4gIC5tZWRpdW0tcHVsbC0xMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTkxLjY2NjY3JTsgfVxcbiAgLm1lZGl1bS1vZmZzZXQtMTAge1xcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlOyB9XFxuICAubWVkaXVtLTEyIHtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5tZWRpdW0tb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTsgfVxcbiAgLm1lZGl1bS11cC0xID4gLmNvbHVtbiwgLm1lZGl1bS11cC0xID4gLmNvbHVtbnMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLm1lZGl1bS11cC0xID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5tZWRpdW0tdXAtMSA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLm1lZGl1bS11cC0xID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbisxKSwgLm1lZGl1bS11cC0xID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5tZWRpdW0tdXAtMSA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLm1lZGl1bS11cC0xID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5tZWRpdW0tdXAtMiA+IC5jb2x1bW4sIC5tZWRpdW0tdXAtMiA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLm1lZGl1bS11cC0yID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5tZWRpdW0tdXAtMiA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLm1lZGl1bS11cC0yID4gLmNvbHVtbjpudGgtb2YtdHlwZSgybisxKSwgLm1lZGl1bS11cC0yID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMm4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5tZWRpdW0tdXAtMiA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLm1lZGl1bS11cC0yID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5tZWRpdW0tdXAtMyA+IC5jb2x1bW4sIC5tZWRpdW0tdXAtMyA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLm1lZGl1bS11cC0zID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5tZWRpdW0tdXAtMyA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLm1lZGl1bS11cC0zID4gLmNvbHVtbjpudGgtb2YtdHlwZSgzbisxKSwgLm1lZGl1bS11cC0zID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoM24rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5tZWRpdW0tdXAtMyA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLm1lZGl1bS11cC0zID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5tZWRpdW0tdXAtNCA+IC5jb2x1bW4sIC5tZWRpdW0tdXAtNCA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLm1lZGl1bS11cC00ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5tZWRpdW0tdXAtNCA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLm1lZGl1bS11cC00ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg0bisxKSwgLm1lZGl1bS11cC00ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoNG4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5tZWRpdW0tdXAtNCA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLm1lZGl1bS11cC00ID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5tZWRpdW0tdXAtNSA+IC5jb2x1bW4sIC5tZWRpdW0tdXAtNSA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLm1lZGl1bS11cC01ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5tZWRpdW0tdXAtNSA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLm1lZGl1bS11cC01ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg1bisxKSwgLm1lZGl1bS11cC01ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoNW4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5tZWRpdW0tdXAtNSA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLm1lZGl1bS11cC01ID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5tZWRpdW0tdXAtNiA+IC5jb2x1bW4sIC5tZWRpdW0tdXAtNiA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDE2LjY2NjY3JTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLm1lZGl1bS11cC02ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5tZWRpdW0tdXAtNiA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLm1lZGl1bS11cC02ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg2bisxKSwgLm1lZGl1bS11cC02ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoNm4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5tZWRpdW0tdXAtNiA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLm1lZGl1bS11cC02ID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5tZWRpdW0tdXAtNyA+IC5jb2x1bW4sIC5tZWRpdW0tdXAtNyA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDE0LjI4NTcxJTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLm1lZGl1bS11cC03ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5tZWRpdW0tdXAtNyA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLm1lZGl1bS11cC03ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg3bisxKSwgLm1lZGl1bS11cC03ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoN24rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5tZWRpdW0tdXAtNyA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLm1lZGl1bS11cC03ID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5tZWRpdW0tdXAtOCA+IC5jb2x1bW4sIC5tZWRpdW0tdXAtOCA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDEyLjUlO1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgICAubWVkaXVtLXVwLTggPiAuY29sdW1uOm50aC1vZi10eXBlKDFuKSwgLm1lZGl1bS11cC04ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgICBjbGVhcjogbm9uZTsgfVxcbiAgICAubWVkaXVtLXVwLTggPiAuY29sdW1uOm50aC1vZi10eXBlKDhuKzEpLCAubWVkaXVtLXVwLTggPiAuY29sdW1uczpudGgtb2YtdHlwZSg4bisxKSB7XFxuICAgICAgY2xlYXI6IGJvdGg7IH1cXG4gICAgLm1lZGl1bS11cC04ID4gLmNvbHVtbjpsYXN0LWNoaWxkLCAubWVkaXVtLXVwLTggPiAuY29sdW1uczpsYXN0LWNoaWxkIHtcXG4gICAgICBmbG9hdDogbGVmdDsgfVxcbiAgLm1lZGl1bS1jb2xsYXBzZSA+IC5jb2x1bW4sIC5tZWRpdW0tY29sbGFwc2UgPiAuY29sdW1ucyB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxcbiAgLm1lZGl1bS1jb2xsYXBzZSAucm93IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgLm1lZGl1bS11bmNvbGxhcHNlID4gLmNvbHVtbiwgLm1lZGl1bS11bmNvbGxhcHNlID4gLmNvbHVtbnMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOTM3NXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC45Mzc1cmVtOyB9XFxuICAubWVkaXVtLWNlbnRlcmVkIHtcXG4gICAgZmxvYXQ6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG4gIC5tZWRpdW0tdW5jZW50ZXJlZCxcXG4gIC5tZWRpdW0tcHVzaC0wLFxcbiAgLm1lZGl1bS1wdWxsLTAge1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBmbG9hdDogbGVmdDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLmxhcmdlLTEge1xcbiAgICB3aWR0aDogOC4zMzMzMyU7IH1cXG4gIC5sYXJnZS1wdXNoLTEge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDguMzMzMzMlOyB9XFxuICAubGFyZ2UtcHVsbC0xIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtOC4zMzMzMyU7IH1cXG4gIC5sYXJnZS1vZmZzZXQtMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwJTsgfVxcbiAgLmxhcmdlLTIge1xcbiAgICB3aWR0aDogMTYuNjY2NjclOyB9XFxuICAubGFyZ2UtcHVzaC0yIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAxNi42NjY2NyU7IH1cXG4gIC5sYXJnZS1wdWxsLTIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0xNi42NjY2NyU7IH1cXG4gIC5sYXJnZS1vZmZzZXQtMSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTsgfVxcbiAgLmxhcmdlLTMge1xcbiAgICB3aWR0aDogMjUlOyB9XFxuICAubGFyZ2UtcHVzaC0zIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAyNSU7IH1cXG4gIC5sYXJnZS1wdWxsLTMge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC0yNSU7IH1cXG4gIC5sYXJnZS1vZmZzZXQtMiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7IH1cXG4gIC5sYXJnZS00IHtcXG4gICAgd2lkdGg6IDMzLjMzMzMzJTsgfVxcbiAgLmxhcmdlLXB1c2gtNCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogMzMuMzMzMzMlOyB9XFxuICAubGFyZ2UtcHVsbC00IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtMzMuMzMzMzMlOyB9XFxuICAubGFyZ2Utb2Zmc2V0LTMge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlOyB9XFxuICAubGFyZ2UtNSB7XFxuICAgIHdpZHRoOiA0MS42NjY2NyU7IH1cXG4gIC5sYXJnZS1wdXNoLTUge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDQxLjY2NjY3JTsgfVxcbiAgLmxhcmdlLXB1bGwtNSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTQxLjY2NjY3JTsgfVxcbiAgLmxhcmdlLW9mZnNldC00IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTsgfVxcbiAgLmxhcmdlLTYge1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAubGFyZ2UtcHVzaC02IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA1MCU7IH1cXG4gIC5sYXJnZS1wdWxsLTYge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC01MCU7IH1cXG4gIC5sYXJnZS1vZmZzZXQtNSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7IH1cXG4gIC5sYXJnZS03IHtcXG4gICAgd2lkdGg6IDU4LjMzMzMzJTsgfVxcbiAgLmxhcmdlLXB1c2gtNyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogNTguMzMzMzMlOyB9XFxuICAubGFyZ2UtcHVsbC03IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtNTguMzMzMzMlOyB9XFxuICAubGFyZ2Utb2Zmc2V0LTYge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlOyB9XFxuICAubGFyZ2UtOCB7XFxuICAgIHdpZHRoOiA2Ni42NjY2NyU7IH1cXG4gIC5sYXJnZS1wdXNoLTgge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IDY2LjY2NjY3JTsgfVxcbiAgLmxhcmdlLXB1bGwtOCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTY2LjY2NjY3JTsgfVxcbiAgLmxhcmdlLW9mZnNldC03IHtcXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTsgfVxcbiAgLmxhcmdlLTkge1xcbiAgICB3aWR0aDogNzUlOyB9XFxuICAubGFyZ2UtcHVzaC05IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA3NSU7IH1cXG4gIC5sYXJnZS1wdWxsLTkge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxlZnQ6IC03NSU7IH1cXG4gIC5sYXJnZS1vZmZzZXQtOCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7IH1cXG4gIC5sYXJnZS0xMCB7XFxuICAgIHdpZHRoOiA4My4zMzMzMyU7IH1cXG4gIC5sYXJnZS1wdXNoLTEwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiA4My4zMzMzMyU7IH1cXG4gIC5sYXJnZS1wdWxsLTEwIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsZWZ0OiAtODMuMzMzMzMlOyB9XFxuICAubGFyZ2Utb2Zmc2V0LTkge1xcbiAgICBtYXJnaW4tbGVmdDogNzUlOyB9XFxuICAubGFyZ2UtMTEge1xcbiAgICB3aWR0aDogOTEuNjY2NjclOyB9XFxuICAubGFyZ2UtcHVzaC0xMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogOTEuNjY2NjclOyB9XFxuICAubGFyZ2UtcHVsbC0xMSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbGVmdDogLTkxLjY2NjY3JTsgfVxcbiAgLmxhcmdlLW9mZnNldC0xMCB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7IH1cXG4gIC5sYXJnZS0xMiB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubGFyZ2Utb2Zmc2V0LTExIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTsgfVxcbiAgLmxhcmdlLXVwLTEgPiAuY29sdW1uLCAubGFyZ2UtdXAtMSA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAgIC5sYXJnZS11cC0xID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5sYXJnZS11cC0xID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgICBjbGVhcjogbm9uZTsgfVxcbiAgICAubGFyZ2UtdXAtMSA+IC5jb2x1bW46bnRoLW9mLXR5cGUoMW4rMSksIC5sYXJnZS11cC0xID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5sYXJnZS11cC0xID4gLmNvbHVtbjpsYXN0LWNoaWxkLCAubGFyZ2UtdXAtMSA+IC5jb2x1bW5zOmxhc3QtY2hpbGQge1xcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAubGFyZ2UtdXAtMiA+IC5jb2x1bW4sIC5sYXJnZS11cC0yID4gLmNvbHVtbnMge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgICAubGFyZ2UtdXAtMiA+IC5jb2x1bW46bnRoLW9mLXR5cGUoMW4pLCAubGFyZ2UtdXAtMiA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLmxhcmdlLXVwLTIgPiAuY29sdW1uOm50aC1vZi10eXBlKDJuKzEpLCAubGFyZ2UtdXAtMiA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDJuKzEpIHtcXG4gICAgICBjbGVhcjogYm90aDsgfVxcbiAgICAubGFyZ2UtdXAtMiA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLmxhcmdlLXVwLTIgPiAuY29sdW1uczpsYXN0LWNoaWxkIHtcXG4gICAgICBmbG9hdDogbGVmdDsgfVxcbiAgLmxhcmdlLXVwLTMgPiAuY29sdW1uLCAubGFyZ2UtdXAtMyA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLmxhcmdlLXVwLTMgPiAuY29sdW1uOm50aC1vZi10eXBlKDFuKSwgLmxhcmdlLXVwLTMgPiAuY29sdW1uczpudGgtb2YtdHlwZSgxbikge1xcbiAgICAgIGNsZWFyOiBub25lOyB9XFxuICAgIC5sYXJnZS11cC0zID4gLmNvbHVtbjpudGgtb2YtdHlwZSgzbisxKSwgLmxhcmdlLXVwLTMgPiAuY29sdW1uczpudGgtb2YtdHlwZSgzbisxKSB7XFxuICAgICAgY2xlYXI6IGJvdGg7IH1cXG4gICAgLmxhcmdlLXVwLTMgPiAuY29sdW1uOmxhc3QtY2hpbGQsIC5sYXJnZS11cC0zID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5sYXJnZS11cC00ID4gLmNvbHVtbiwgLmxhcmdlLXVwLTQgPiAuY29sdW1ucyB7XFxuICAgIHdpZHRoOiAyNSU7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAgIC5sYXJnZS11cC00ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5sYXJnZS11cC00ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgICBjbGVhcjogbm9uZTsgfVxcbiAgICAubGFyZ2UtdXAtNCA+IC5jb2x1bW46bnRoLW9mLXR5cGUoNG4rMSksIC5sYXJnZS11cC00ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoNG4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5sYXJnZS11cC00ID4gLmNvbHVtbjpsYXN0LWNoaWxkLCAubGFyZ2UtdXAtNCA+IC5jb2x1bW5zOmxhc3QtY2hpbGQge1xcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAubGFyZ2UtdXAtNSA+IC5jb2x1bW4sIC5sYXJnZS11cC01ID4gLmNvbHVtbnMge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgICAubGFyZ2UtdXAtNSA+IC5jb2x1bW46bnRoLW9mLXR5cGUoMW4pLCAubGFyZ2UtdXAtNSA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDFuKSB7XFxuICAgICAgY2xlYXI6IG5vbmU7IH1cXG4gICAgLmxhcmdlLXVwLTUgPiAuY29sdW1uOm50aC1vZi10eXBlKDVuKzEpLCAubGFyZ2UtdXAtNSA+IC5jb2x1bW5zOm50aC1vZi10eXBlKDVuKzEpIHtcXG4gICAgICBjbGVhcjogYm90aDsgfVxcbiAgICAubGFyZ2UtdXAtNSA+IC5jb2x1bW46bGFzdC1jaGlsZCwgLmxhcmdlLXVwLTUgPiAuY29sdW1uczpsYXN0LWNoaWxkIHtcXG4gICAgICBmbG9hdDogbGVmdDsgfVxcbiAgLmxhcmdlLXVwLTYgPiAuY29sdW1uLCAubGFyZ2UtdXAtNiA+IC5jb2x1bW5zIHtcXG4gICAgd2lkdGg6IDE2LjY2NjY3JTtcXG4gICAgZmxvYXQ6IGxlZnQ7IH1cXG4gICAgLmxhcmdlLXVwLTYgPiAuY29sdW1uOm50aC1vZi10eXBlKDFuKSwgLmxhcmdlLXVwLTYgPiAuY29sdW1uczpudGgtb2YtdHlwZSgxbikge1xcbiAgICAgIGNsZWFyOiBub25lOyB9XFxuICAgIC5sYXJnZS11cC02ID4gLmNvbHVtbjpudGgtb2YtdHlwZSg2bisxKSwgLmxhcmdlLXVwLTYgPiAuY29sdW1uczpudGgtb2YtdHlwZSg2bisxKSB7XFxuICAgICAgY2xlYXI6IGJvdGg7IH1cXG4gICAgLmxhcmdlLXVwLTYgPiAuY29sdW1uOmxhc3QtY2hpbGQsIC5sYXJnZS11cC02ID4gLmNvbHVtbnM6bGFzdC1jaGlsZCB7XFxuICAgICAgZmxvYXQ6IGxlZnQ7IH1cXG4gIC5sYXJnZS11cC03ID4gLmNvbHVtbiwgLmxhcmdlLXVwLTcgPiAuY29sdW1ucyB7XFxuICAgIHdpZHRoOiAxNC4yODU3MSU7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAgIC5sYXJnZS11cC03ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5sYXJnZS11cC03ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgICBjbGVhcjogbm9uZTsgfVxcbiAgICAubGFyZ2UtdXAtNyA+IC5jb2x1bW46bnRoLW9mLXR5cGUoN24rMSksIC5sYXJnZS11cC03ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoN24rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5sYXJnZS11cC03ID4gLmNvbHVtbjpsYXN0LWNoaWxkLCAubGFyZ2UtdXAtNyA+IC5jb2x1bW5zOmxhc3QtY2hpbGQge1xcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAubGFyZ2UtdXAtOCA+IC5jb2x1bW4sIC5sYXJnZS11cC04ID4gLmNvbHVtbnMge1xcbiAgICB3aWR0aDogMTIuNSU7XFxuICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAgIC5sYXJnZS11cC04ID4gLmNvbHVtbjpudGgtb2YtdHlwZSgxbiksIC5sYXJnZS11cC04ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoMW4pIHtcXG4gICAgICBjbGVhcjogbm9uZTsgfVxcbiAgICAubGFyZ2UtdXAtOCA+IC5jb2x1bW46bnRoLW9mLXR5cGUoOG4rMSksIC5sYXJnZS11cC04ID4gLmNvbHVtbnM6bnRoLW9mLXR5cGUoOG4rMSkge1xcbiAgICAgIGNsZWFyOiBib3RoOyB9XFxuICAgIC5sYXJnZS11cC04ID4gLmNvbHVtbjpsYXN0LWNoaWxkLCAubGFyZ2UtdXAtOCA+IC5jb2x1bW5zOmxhc3QtY2hpbGQge1xcbiAgICAgIGZsb2F0OiBsZWZ0OyB9XFxuICAubGFyZ2UtY29sbGFwc2UgPiAuY29sdW1uLCAubGFyZ2UtY29sbGFwc2UgPiAuY29sdW1ucyB7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG4gICAgcGFkZGluZy1yaWdodDogMDsgfVxcbiAgLmxhcmdlLWNvbGxhcHNlIC5yb3cge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAubGFyZ2UtdW5jb2xsYXBzZSA+IC5jb2x1bW4sIC5sYXJnZS11bmNvbGxhcHNlID4gLmNvbHVtbnMge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuOTM3NXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMC45Mzc1cmVtOyB9XFxuICAubGFyZ2UtY2VudGVyZWQge1xcbiAgICBmbG9hdDogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcbiAgLmxhcmdlLXVuY2VudGVyZWQsXFxuICAubGFyZ2UtcHVzaC0wLFxcbiAgLmxhcmdlLXB1bGwtMCB7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGZsb2F0OiBsZWZ0OyB9IH1cXG5cXG5kaXYsXFxuZGwsXFxuZHQsXFxuZGQsXFxudWwsXFxub2wsXFxubGksXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucHJlLFxcbmZvcm0sXFxucCxcXG5ibG9ja3F1b3RlLFxcbnRoLFxcbnRkIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5wIHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTsgfVxcblxcbmVtLFxcbmkge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IH1cXG5cXG5zdHJvbmcsXFxuYiB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyB9XFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgfVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7IH1cXG4gIGgxIHNtYWxsLFxcbiAgaDIgc21hbGwsXFxuICBoMyBzbWFsbCxcXG4gIGg0IHNtYWxsLFxcbiAgaDUgc21hbGwsXFxuICBoNiBzbWFsbCB7XFxuICAgIGNvbG9yOiAjY2FjYWNhO1xcbiAgICBsaW5lLWhlaWdodDogMDsgfVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtOyB9XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtOyB9XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjE4NzVyZW07IH1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtOyB9XFxuXFxuaDUge1xcbiAgZm9udC1zaXplOiAxLjA2MjVyZW07IH1cXG5cXG5oNiB7XFxuICBmb250LXNpemU6IDFyZW07IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTsgfVxcbiAgaDIge1xcbiAgICBmb250LXNpemU6IDIuNXJlbTsgfVxcbiAgaDMge1xcbiAgICBmb250LXNpemU6IDEuOTM3NXJlbTsgfVxcbiAgaDQge1xcbiAgICBmb250LXNpemU6IDEuNTYyNXJlbTsgfVxcbiAgaDUge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07IH1cXG4gIGg2IHtcXG4gICAgZm9udC1zaXplOiAxcmVtOyB9IH1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMjE5OWU4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIGE6aG92ZXIsIGE6Zm9jdXMge1xcbiAgICBjb2xvcjogIzE1ODVjZjsgfVxcbiAgYSBpbWcge1xcbiAgICBib3JkZXI6IDA7IH1cXG5cXG5ociB7XFxuICBtYXgtd2lkdGg6IDc1cmVtO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBtYXJnaW46IDEuMjVyZW0gYXV0bztcXG4gIGNsZWFyOiBib3RoOyB9XFxuXFxudWwsXFxub2wsXFxuZGwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBvdXRzaWRlOyB9XFxuXFxubGkge1xcbiAgZm9udC1zaXplOiBpbmhlcml0OyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBkaXNjO1xcbiAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07IH1cXG5cXG5vbCB7XFxuICBtYXJnaW4tbGVmdDogMS4yNXJlbTsgfVxcblxcbnVsIHVsLCBvbCB1bCwgdWwgb2wsIG9sIG9sIHtcXG4gIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbmRsIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIGRsIGR0IHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbmJsb2NrcXVvdGUge1xcbiAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gIHBhZGRpbmc6IDAuNTYyNXJlbSAxLjI1cmVtIDAgMS4xODc1cmVtO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2FjYWNhOyB9XFxuICBibG9ja3F1b3RlLCBibG9ja3F1b3RlIHAge1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBjb2xvcjogIzhhOGE4YTsgfVxcblxcbmNpdGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDAuODEyNXJlbTtcXG4gIGNvbG9yOiAjOGE4YThhOyB9XFxuICBjaXRlOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjAxNCAgICAnOyB9XFxuXFxuYWJiciB7XFxuICBjb2xvcjogIzBhMGEwYTtcXG4gIGN1cnNvcjogaGVscDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzBhMGEwYTsgfVxcblxcbmNvZGUge1xcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgQ291cmllciwgbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XFxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjMxMjVyZW0gMC4wNjI1cmVtOyB9XFxuXFxua2JkIHtcXG4gIHBhZGRpbmc6IDAuMTI1cmVtIDAuMjVyZW0gMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICBjb2xvcjogIzBhMGEwYTtcXG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIENvdXJpZXIsIG1vbm9zcGFjZTsgfVxcblxcbi5zdWJoZWFkZXIge1xcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxuICBjb2xvcjogIzhhOGE4YTsgfVxcblxcbi5sZWFkIHtcXG4gIGZvbnQtc2l6ZTogMTI1JTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7IH1cXG5cXG4uc3RhdCB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuICBwICsgLnN0YXQge1xcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTsgfVxcblxcbi5uby1idWxsZXQge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuLnRleHQtbGVmdCB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuXFxuLnRleHQtcmlnaHQge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnRleHQtanVzdGlmeSB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgLm1lZGl1bS10ZXh0LWxlZnQge1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAubWVkaXVtLXRleHQtcmlnaHQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgLm1lZGl1bS10ZXh0LWNlbnRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLm1lZGl1bS10ZXh0LWp1c3RpZnkge1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAubGFyZ2UtdGV4dC1sZWZ0IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgLmxhcmdlLXRleHQtcmlnaHQge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgLmxhcmdlLXRleHQtY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAubGFyZ2UtdGV4dC1qdXN0aWZ5IHtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTsgfSB9XFxuXFxuLnNob3ctZm9yLXByaW50IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbkBtZWRpYSBwcmludCB7XFxuICAqIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgLnNob3ctZm9yLXByaW50IHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxcbiAgLmhpZGUtZm9yLXByaW50IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuICB0YWJsZS5zaG93LWZvci1wcmludCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlICFpbXBvcnRhbnQ7IH1cXG4gIHRoZWFkLnNob3ctZm9yLXByaW50IHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwICFpbXBvcnRhbnQ7IH1cXG4gIHRib2R5LnNob3ctZm9yLXByaW50IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwICFpbXBvcnRhbnQ7IH1cXG4gIHRyLnNob3ctZm9yLXByaW50IHtcXG4gICAgZGlzcGxheTogdGFibGUtcm93ICFpbXBvcnRhbnQ7IH1cXG4gIHRkLnNob3ctZm9yLXByaW50IHtcXG4gICAgZGlzcGxheTogdGFibGUtY2VsbCAhaW1wb3J0YW50OyB9XFxuICB0aC5zaG93LWZvci1wcmludCB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDsgfVxcbiAgYSxcXG4gIGE6dmlzaXRlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICBhW2hyZWZdOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiAoXFxcIiBhdHRyKGhyZWYpIFxcXCIpXFxcIjsgfVxcbiAgLmlyIGE6YWZ0ZXIsXFxuICBhW2hyZWZePSdqYXZhc2NyaXB0OiddOmFmdGVyLFxcbiAgYVtocmVmXj0nIyddOmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7IH1cXG4gIGFiYnJbdGl0bGVdOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIiAoXFxcIiBhdHRyKHRpdGxlKSBcXFwiKVxcXCI7IH1cXG4gIHByZSxcXG4gIGJsb2NrcXVvdGUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGE4YThhO1xcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7IH1cXG4gIHRoZWFkIHtcXG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwOyB9XFxuICB0cixcXG4gIGltZyB7XFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfVxcbiAgaW1nIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cXG4gIEBwYWdlIHtcXG4gICAgbWFyZ2luOiAwLjVjbTsgfVxcbiAgcCxcXG4gIGgyLFxcbiAgaDMge1xcbiAgICBvcnBoYW5zOiAzO1xcbiAgICB3aWRvd3M6IDM7IH1cXG4gIGgyLFxcbiAgaDMge1xcbiAgICBwYWdlLWJyZWFrLWFmdGVyOiBhdm9pZDsgfSB9XFxuXFxuW3R5cGU9J3RleHQnXSwgW3R5cGU9J3Bhc3N3b3JkJ10sIFt0eXBlPSdkYXRlJ10sIFt0eXBlPSdkYXRldGltZSddLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXSwgW3R5cGU9J21vbnRoJ10sIFt0eXBlPSd3ZWVrJ10sIFt0eXBlPSdlbWFpbCddLCBbdHlwZT0nbnVtYmVyJ10sIFt0eXBlPSdzZWFyY2gnXSwgW3R5cGU9J3RlbCddLCBbdHlwZT0ndGltZSddLCBbdHlwZT0ndXJsJ10sIFt0eXBlPSdjb2xvciddLFxcbnRleHRhcmVhIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyLjQzNzVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICMwYTBhMGE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMTAsIDEwLCAxMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMsIGJvcmRlci1jb2xvciAwLjI1cyBlYXNlLWluLW91dDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTsgfVxcbiAgW3R5cGU9J3RleHQnXTpmb2N1cywgW3R5cGU9J3Bhc3N3b3JkJ106Zm9jdXMsIFt0eXBlPSdkYXRlJ106Zm9jdXMsIFt0eXBlPSdkYXRldGltZSddOmZvY3VzLCBbdHlwZT0nZGF0ZXRpbWUtbG9jYWwnXTpmb2N1cywgW3R5cGU9J21vbnRoJ106Zm9jdXMsIFt0eXBlPSd3ZWVrJ106Zm9jdXMsIFt0eXBlPSdlbWFpbCddOmZvY3VzLCBbdHlwZT0nbnVtYmVyJ106Zm9jdXMsIFt0eXBlPSdzZWFyY2gnXTpmb2N1cywgW3R5cGU9J3RlbCddOmZvY3VzLCBbdHlwZT0ndGltZSddOmZvY3VzLCBbdHlwZT0ndXJsJ106Zm9jdXMsIFt0eXBlPSdjb2xvciddOmZvY3VzLFxcbiAgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGE4YThhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjYWNhY2E7XFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cywgYm9yZGVyLWNvbG9yIDAuMjVzIGVhc2UtaW4tb3V0OyB9XFxuXFxudGV4dGFyZWEge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuICB0ZXh0YXJlYVtyb3dzXSB7XFxuICAgIGhlaWdodDogYXV0bzsgfVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNjYWNhY2E7IH1cXG5cXG5pbnB1dDpkaXNhYmxlZCwgaW5wdXRbcmVhZG9ubHldLFxcbnRleHRhcmVhOmRpc2FibGVkLFxcbnRleHRhcmVhW3JlYWRvbmx5XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuXFxuW3R5cGU9J3N1Ym1pdCddLFxcblt0eXBlPSdidXR0b24nXSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lOyB9XFxuXFxuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcblt0eXBlPSdmaWxlJ10sXFxuW3R5cGU9J2NoZWNrYm94J10sXFxuW3R5cGU9J3JhZGlvJ10ge1xcbiAgbWFyZ2luOiAwIDAgMXJlbTsgfVxcblxcblt0eXBlPSdjaGVja2JveCddICsgbGFiZWwsXFxuW3R5cGU9J3JhZGlvJ10gKyBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbmxhYmVsID4gW3R5cGU9J2NoZWNrYm94J10sXFxubGFiZWwgPiBbdHlwZT0ncmFkaW8nXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxcblxcblt0eXBlPSdmaWxlJ10ge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG4gIGNvbG9yOiAjMGEwYTBhOyB9XFxuICBsYWJlbC5taWRkbGUge1xcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjU2MjVyZW0gMDsgfVxcblxcbi5oZWxwLXRleHQge1xcbiAgbWFyZ2luLXRvcDogLTAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICMwYTBhMGE7IH1cXG5cXG4uaW5wdXQtZ3JvdXAge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07IH1cXG4gIC5pbnB1dC1ncm91cCA+IDpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7IH1cXG4gIC5pbnB1dC1ncm91cCA+IDpsYXN0LWNoaWxkID4gKiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDA7IH1cXG5cXG4uaW5wdXQtZ3JvdXAtbGFiZWwsIC5pbnB1dC1ncm91cC1maWVsZCwgLmlucHV0LWdyb3VwLWJ1dHRvbiB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcblxcbi5pbnB1dC1ncm91cC1sYWJlbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDFyZW07XFxuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xcbiAgY29sb3I6ICMwYTBhMGE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiAxJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgLmlucHV0LWdyb3VwLWxhYmVsOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwOyB9XFxuICAuaW5wdXQtZ3JvdXAtbGFiZWw6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1sZWZ0OiAwOyB9XFxuXFxuLmlucHV0LWdyb3VwLWZpZWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBoZWlnaHQ6IDIuNXJlbTsgfVxcblxcbi5pbnB1dC1ncm91cC1idXR0b24ge1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxJTsgfVxcbiAgLmlucHV0LWdyb3VwLWJ1dHRvbiBhLFxcbiAgLmlucHV0LWdyb3VwLWJ1dHRvbiBpbnB1dCxcXG4gIC5pbnB1dC1ncm91cC1idXR0b24gYnV0dG9uIHtcXG4gICAgbWFyZ2luOiAwOyB9XFxuXFxuLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1idXR0b24ge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDsgfVxcblxcbmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5sZWdlbmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuLmZpZWxkc2V0IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbiAgbWFyZ2luOiAxLjEyNXJlbSAwOyB9XFxuICAuZmllbGRzZXQgbGVnZW5kIHtcXG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gICAgcGFkZGluZzogMCAwLjE4NzVyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjE4NzVyZW07IH1cXG5cXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiAyLjQzNzVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgbWFyZ2luOiAwIDAgMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2ZXJzaW9uPVxcXCIxLjFcXFwiIHdpZHRoPVxcXCIzMlxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDMyIDI0XFxcIj48cG9seWdvbiBwb2ludHM9XFxcIjAsMCAzMiwwIDE2LDI0XFxcIiBzdHlsZT1cXFwiZmlsbDogcmdiJTI4MTM4LCAxMzgsIDEzOCUyOVxcXCI+PC9wb2x5Z29uPjwvc3ZnPicpO1xcbiAgYmFja2dyb3VuZC1zaXplOiA5cHggNnB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMFxcXFwwKSB7XFxuICAgIHNlbGVjdCB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQVlDQVlBQUFDYlUvODBBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQUlwSlJFRlVlTnJFa2NrTmdEQU1CQmZSa0V0ME9iUkJCZHNHWFVEZ21RZks0WGhIMm04Y3pRQUF5MjdSM3RzdzRRZmUyeDh1T082b1lMYjZHbE9vcjNHRitzd1VSQU9tVUorUnd0RUpzOVd2VEdFWXhCWHFJMU1RQVpoQ2ZVUUtSekRNVmorVHdyQUlWNmp2U1VFa1lBcjFMU2tjeVRCYi9WK0tZZlg3eEFldXNxM3NMRHRHSDNrRUdBQ1BXSWZsTlpmaFJRQUFBQUJKUlU1RXJrSmdnZz09XFxcIik7IH0gfVxcbiAgc2VsZWN0OmRpc2FibGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICBzZWxlY3Q6Oi1tcy1leHBhbmQge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICBzZWxlY3RbbXVsdGlwbGVdIHtcXG4gICAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLmlzLWludmFsaWQtaW5wdXQ6bm90KDpmb2N1cykge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDg4LCA2NCwgMC4xKTtcXG4gIGJvcmRlci1jb2xvcjogI2VjNTg0MDsgfVxcblxcbi5pcy1pbnZhbGlkLWxhYmVsIHtcXG4gIGNvbG9yOiAjZWM1ODQwOyB9XFxuXFxuLmZvcm0tZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IC0wLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2VjNTg0MDsgfVxcbiAgLmZvcm0tZXJyb3IuaXMtdmlzaWJsZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmJ1dHRvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZS1vdXQsIGNvbG9yIDAuMjVzIGVhc2Utb3V0O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBhZGRpbmc6IDAuODVlbSAxZW07XFxuICBtYXJnaW46IDAgMCAxcmVtIDA7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk5ZTg7XFxuICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgW2RhdGEtd2hhdGlucHV0PSdtb3VzZSddIC5idXR0b24ge1xcbiAgICBvdXRsaW5lOiAwOyB9XFxuICAuYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1ODNjYztcXG4gICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gIC5idXR0b24udGlueSB7XFxuICAgIGZvbnQtc2l6ZTogMC42cmVtOyB9XFxuICAuYnV0dG9uLnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtOyB9XFxuICAuYnV0dG9uLmxhcmdlIHtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtOyB9XFxuICAuYnV0dG9uLmV4cGFuZGVkIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAuYnV0dG9uLnByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5OWU4O1xcbiAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgICAuYnV0dG9uLnByaW1hcnk6aG92ZXIsIC5idXR0b24ucHJpbWFyeTpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE0N2NjMDtcXG4gICAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgLmJ1dHRvbi5zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xcbiAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgICAuYnV0dG9uLnNlY29uZGFyeTpob3ZlciwgLmJ1dHRvbi5zZWNvbmRhcnk6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVmNWY7XFxuICAgICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gIC5idXR0b24uc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYWRiNzY7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAgIC5idXR0b24uc3VjY2Vzczpob3ZlciwgLmJ1dHRvbi5zdWNjZXNzOmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjJiYjViO1xcbiAgICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAuYnV0dG9uLndhcm5pbmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZTAwO1xcbiAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgICAuYnV0dG9uLndhcm5pbmc6aG92ZXIsIC5idXR0b24ud2FybmluZzpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjOGIwMDtcXG4gICAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgLmJ1dHRvbi5hbGVydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzU4NDA7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAgIC5idXR0b24uYWxlcnQ6aG92ZXIsIC5idXR0b24uYWxlcnQ6Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYTMxMTY7XFxuICAgICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gIC5idXR0b24uaG9sbG93IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTllODtcXG4gICAgY29sb3I6ICMyMTk5ZTg7IH1cXG4gICAgLmJ1dHRvbi5ob2xsb3csIC5idXR0b24uaG9sbG93OmhvdmVyLCAuYnV0dG9uLmhvbGxvdzpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG4gICAgLmJ1dHRvbi5ob2xsb3c6aG92ZXIsIC5idXR0b24uaG9sbG93OmZvY3VzIHtcXG4gICAgICBib3JkZXItY29sb3I6ICMwYzRkNzg7XFxuICAgICAgY29sb3I6ICMwYzRkNzg7IH1cXG4gICAgLmJ1dHRvbi5ob2xsb3cucHJpbWFyeSB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTllODtcXG4gICAgICBjb2xvcjogIzIxOTllODsgfVxcbiAgICAgIC5idXR0b24uaG9sbG93LnByaW1hcnk6aG92ZXIsIC5idXR0b24uaG9sbG93LnByaW1hcnk6Zm9jdXMge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMGM0ZDc4O1xcbiAgICAgICAgY29sb3I6ICMwYzRkNzg7IH1cXG4gICAgLmJ1dHRvbi5ob2xsb3cuc2Vjb25kYXJ5IHtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzc3O1xcbiAgICAgIGNvbG9yOiAjNzc3OyB9XFxuICAgICAgLmJ1dHRvbi5ob2xsb3cuc2Vjb25kYXJ5OmhvdmVyLCAuYnV0dG9uLmhvbGxvdy5zZWNvbmRhcnk6Zm9jdXMge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjM2MzYzNjO1xcbiAgICAgICAgY29sb3I6ICMzYzNjM2M7IH1cXG4gICAgLmJ1dHRvbi5ob2xsb3cuc3VjY2VzcyB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNhZGI3NjtcXG4gICAgICBjb2xvcjogIzNhZGI3NjsgfVxcbiAgICAgIC5idXR0b24uaG9sbG93LnN1Y2Nlc3M6aG92ZXIsIC5idXR0b24uaG9sbG93LnN1Y2Nlc3M6Zm9jdXMge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMTU3NTM5O1xcbiAgICAgICAgY29sb3I6ICMxNTc1Mzk7IH1cXG4gICAgLmJ1dHRvbi5ob2xsb3cud2FybmluZyB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWUwMDtcXG4gICAgICBjb2xvcjogI2ZmYWUwMDsgfVxcbiAgICAgIC5idXR0b24uaG9sbG93Lndhcm5pbmc6aG92ZXIsIC5idXR0b24uaG9sbG93Lndhcm5pbmc6Zm9jdXMge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODA1NzAwO1xcbiAgICAgICAgY29sb3I6ICM4MDU3MDA7IH1cXG4gICAgLmJ1dHRvbi5ob2xsb3cuYWxlcnQge1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYzU4NDA7XFxuICAgICAgY29sb3I6ICNlYzU4NDA7IH1cXG4gICAgICAuYnV0dG9uLmhvbGxvdy5hbGVydDpob3ZlciwgLmJ1dHRvbi5ob2xsb3cuYWxlcnQ6Zm9jdXMge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODgxZjBlO1xcbiAgICAgICAgY29sb3I6ICM4ODFmMGU7IH1cXG4gIC5idXR0b24uZGlzYWJsZWQsIC5idXR0b25bZGlzYWJsZWRdIHtcXG4gICAgb3BhY2l0eTogMC4yNTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cXG4gIC5idXR0b24uZHJvcGRvd246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXI6IGluc2V0IDAuNGVtO1xcbiAgICBib3JkZXItY29sb3I6ICNmZWZlZmUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMC40ZW07XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XFxuICAuYnV0dG9uLmFycm93LW9ubHk6OmFmdGVyIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGZsb2F0OiBub25lO1xcbiAgICB0b3A6IC0wLjFlbTsgfVxcblxcbi5hY2NvcmRpb24ge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIG1hcmdpbi1sZWZ0OiAwOyB9XFxuXFxuLmFjY29yZGlvbi10aXRsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDEuMjVyZW0gMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgY29sb3I6ICMyMTk5ZTg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZTZlNjsgfVxcbiAgLmFjY29yZGlvbi10aXRsZTpob3ZlciwgLmFjY29yZGlvbi10aXRsZTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7IH1cXG4gIC5hY2NvcmRpb24tdGl0bGU6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcrJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMXJlbTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IC0wLjVyZW07IH1cXG4gIC5pcy1hY3RpdmUgPiAuYWNjb3JkaW9uLXRpdGxlOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnXFxcXDIwMTMnOyB9XFxuXFxuLmFjY29yZGlvbi1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmU2ZTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlOyB9XFxuXFxuLmlzLWFjY29yZGlvbi1zdWJtZW51LXBhcmVudCA+IGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaXMtYWNjb3JkaW9uLXN1Ym1lbnUtcGFyZW50ID4gYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlcjogaW5zZXQgNnB4O1xcbiAgICBib3JkZXItY29sb3I6ICMyMTk5ZTggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xcbiAgICByaWdodDogMXJlbTsgfVxcblxcbi5pcy1hY2NvcmRpb24tc3VibWVudS1wYXJlbnRbYXJpYS1leHBhbmRlZD0ndHJ1ZSddID4gYTo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGVZKC0xKTsgfVxcblxcbi5iYWRnZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjNlbTtcXG4gIG1pbi13aWR0aDogMi4xZW07XFxuICBmb250LXNpemU6IDAuNnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyMTk5ZTg7XFxuICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgLmJhZGdlLnNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAuYmFkZ2Uuc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQ6ICMzYWRiNzY7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAuYmFkZ2Uud2FybmluZyB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmFlMDA7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAuYmFkZ2UuYWxlcnQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWM1ODQwO1xcbiAgICBjb2xvcjogI2ZlZmVmZTsgfVxcblxcbi5icmVhZGNydW1icyB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwIDAgMXJlbSAwOyB9XFxuICAuYnJlYWRjcnVtYnM6OmJlZm9yZSwgLmJyZWFkY3J1bWJzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG9yZGVyOiAxOyB9XFxuICAuYnJlYWRjcnVtYnM6OmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7IH1cXG4gIC5icmVhZGNydW1icyBsaSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBjb2xvcjogIzBhMGEwYTtcXG4gICAgZm9udC1zaXplOiAwLjY4NzVyZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcbiAgICAuYnJlYWRjcnVtYnMgbGk6bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXIge1xcbiAgICAgIGNvbG9yOiAjY2FjYWNhO1xcbiAgICAgIGNvbnRlbnQ6IFxcXCIvXFxcIjtcXG4gICAgICBtYXJnaW46IDAgMC43NXJlbTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAxcHg7XFxuICAgICAgb3BhY2l0eTogMTsgfVxcbiAgLmJyZWFkY3J1bWJzIGEge1xcbiAgICBjb2xvcjogIzIxOTllODsgfVxcbiAgICAuYnJlYWRjcnVtYnMgYTpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cXG4gIC5icmVhZGNydW1icyAuZGlzYWJsZWQge1xcbiAgICBjb2xvcjogI2NhY2FjYTsgfVxcblxcbi5idXR0b24tZ3JvdXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMDsgfVxcbiAgLmJ1dHRvbi1ncm91cDo6YmVmb3JlLCAuYnV0dG9uLWdyb3VwOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG9yZGVyOiAxOyB9XFxuICAuYnV0dG9uLWdyb3VwOjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAuYnV0dG9uLWdyb3VwIC5idXR0b24ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmbG9hdDogbGVmdDsgfVxcbiAgICAuYnV0dG9uLWdyb3VwIC5idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZlZmVmZTsgfVxcbiAgLmJ1dHRvbi1ncm91cC50aW55IC5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDAuNnJlbTsgfVxcbiAgLmJ1dHRvbi1ncm91cC5zbWFsbCAuYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAwLjc1cmVtOyB9XFxuICAuYnV0dG9uLWdyb3VwLmxhcmdlIC5idXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07IH1cXG4gIC5idXR0b24tZ3JvdXAuZXhwYW5kZWQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcHg7IH1cXG4gICAgLmJ1dHRvbi1ncm91cC5leHBhbmRlZDo6YmVmb3JlLCAuYnV0dG9uLWdyb3VwLmV4cGFuZGVkOjphZnRlciB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAuYnV0dG9uLWdyb3VwLmV4cGFuZGVkIC5idXR0b246Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoMiksIC5idXR0b24tZ3JvdXAuZXhwYW5kZWQgLmJ1dHRvbjpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCgyKTpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCgyKSB+IC5idXR0b24ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAxcHgpO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXB4OyB9XFxuICAgIC5idXR0b24tZ3JvdXAuZXhwYW5kZWQgLmJ1dHRvbjpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCgzKSwgLmJ1dHRvbi1ncm91cC5leHBhbmRlZCAuYnV0dG9uOmZpcnN0LWNoaWxkOm50aC1sYXN0LWNoaWxkKDMpOmZpcnN0LWNoaWxkOm50aC1sYXN0LWNoaWxkKDMpIH4gLmJ1dHRvbiB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzJSAtIDFweCk7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7IH1cXG4gICAgLmJ1dHRvbi1ncm91cC5leHBhbmRlZCAuYnV0dG9uOmZpcnN0LWNoaWxkOm50aC1sYXN0LWNoaWxkKDQpLCAuYnV0dG9uLWdyb3VwLmV4cGFuZGVkIC5idXR0b246Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoNCk6Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoNCkgfiAuYnV0dG9uIHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gMXB4KTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFweDsgfVxcbiAgICAuYnV0dG9uLWdyb3VwLmV4cGFuZGVkIC5idXR0b246Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoNSksIC5idXR0b24tZ3JvdXAuZXhwYW5kZWQgLmJ1dHRvbjpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCg1KTpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCg1KSB+IC5idXR0b24ge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICB3aWR0aDogY2FsYygyMCUgLSAxcHgpO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXB4OyB9XFxuICAgIC5idXR0b24tZ3JvdXAuZXhwYW5kZWQgLmJ1dHRvbjpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCg2KSwgLmJ1dHRvbi1ncm91cC5leHBhbmRlZCAuYnV0dG9uOmZpcnN0LWNoaWxkOm50aC1sYXN0LWNoaWxkKDYpOmZpcnN0LWNoaWxkOm50aC1sYXN0LWNoaWxkKDYpIH4gLmJ1dHRvbiB7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIHdpZHRoOiBjYWxjKDE2LjY2NjY3JSAtIDFweCk7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7IH1cXG4gIC5idXR0b24tZ3JvdXAucHJpbWFyeSAuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTllODtcXG4gICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gICAgLmJ1dHRvbi1ncm91cC5wcmltYXJ5IC5idXR0b246aG92ZXIsIC5idXR0b24tZ3JvdXAucHJpbWFyeSAuYnV0dG9uOmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTQ3Y2MwO1xcbiAgICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAuYnV0dG9uLWdyb3VwLnNlY29uZGFyeSAuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcXG4gICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gICAgLmJ1dHRvbi1ncm91cC5zZWNvbmRhcnkgLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi1ncm91cC5zZWNvbmRhcnkgLmJ1dHRvbjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWY1ZjtcXG4gICAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgLmJ1dHRvbi1ncm91cC5zdWNjZXNzIC5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FkYjc2O1xcbiAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgICAuYnV0dG9uLWdyb3VwLnN1Y2Nlc3MgLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbi1ncm91cC5zdWNjZXNzIC5idXR0b246Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMmJiNWI7XFxuICAgICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gIC5idXR0b24tZ3JvdXAud2FybmluZyAuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWUwMDtcXG4gICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gICAgLmJ1dHRvbi1ncm91cC53YXJuaW5nIC5idXR0b246aG92ZXIsIC5idXR0b24tZ3JvdXAud2FybmluZyAuYnV0dG9uOmZvY3VzIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M4YjAwO1xcbiAgICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAuYnV0dG9uLWdyb3VwLmFsZXJ0IC5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM1ODQwO1xcbiAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgICAuYnV0dG9uLWdyb3VwLmFsZXJ0IC5idXR0b246aG92ZXIsIC5idXR0b24tZ3JvdXAuYWxlcnQgLmJ1dHRvbjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhMzExNjtcXG4gICAgICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgLmJ1dHRvbi1ncm91cC5zdGFja2VkIC5idXR0b24sIC5idXR0b24tZ3JvdXAuc3RhY2tlZC1mb3Itc21hbGwgLmJ1dHRvbiwgLmJ1dHRvbi1ncm91cC5zdGFja2VkLWZvci1tZWRpdW0gLmJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgIC5idXR0b24tZ3JvdXAuc3RhY2tlZCAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCksIC5idXR0b24tZ3JvdXAuc3RhY2tlZC1mb3Itc21hbGwgLmJ1dHRvbjpub3QoOmxhc3QtY2hpbGQpLCAuYnV0dG9uLWdyb3VwLnN0YWNrZWQtZm9yLW1lZGl1bSAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgICAuYnV0dG9uLWdyb3VwLnN0YWNrZWQtZm9yLXNtYWxsIC5idXR0b24ge1xcbiAgICAgIHdpZHRoOiBhdXRvOyB9XFxuICAgICAgLmJ1dHRvbi1ncm91cC5zdGFja2VkLWZvci1zbWFsbCAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcHg7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgICAuYnV0dG9uLWdyb3VwLnN0YWNrZWQtZm9yLW1lZGl1bSAuYnV0dG9uIHtcXG4gICAgICB3aWR0aDogYXV0bzsgfVxcbiAgICAgIC5idXR0b24tZ3JvdXAuc3RhY2tlZC1mb3ItbWVkaXVtIC5idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFweDsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcXG4gICAgLmJ1dHRvbi1ncm91cC5zdGFja2VkLWZvci1zbWFsbC5leHBhbmRlZCB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgICAuYnV0dG9uLWdyb3VwLnN0YWNrZWQtZm9yLXNtYWxsLmV4cGFuZGVkIC5idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH0gfVxcblxcbi5jYWxsb3V0IHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEwLCAxMCwgMTAsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjMGEwYTBhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gIC5jYWxsb3V0ID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgLmNhbGxvdXQgPiA6bGFzdC1jaGlsZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gIC5jYWxsb3V0LnByaW1hcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVmMGZjOyB9XFxuICAuY2FsbG91dC5zZWNvbmRhcnkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViOyB9XFxuICAuY2FsbG91dC5zdWNjZXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UxZmFlYTsgfVxcbiAgLmNhbGxvdXQud2FybmluZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZDk7IH1cXG4gIC5jYWxsb3V0LmFsZXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZTZlMjsgfVxcbiAgLmNhbGxvdXQuc21hbGwge1xcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMC41cmVtOyB9XFxuICAuY2FsbG91dC5sYXJnZSB7XFxuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtOyB9XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb2xvcjogIzhhOGE4YTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgdG9wOiAwLjVyZW07XFxuICBmb250LXNpemU6IDJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICBbZGF0YS13aGF0aW5wdXQ9J21vdXNlJ10gLmNsb3NlLWJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG4gIC5jbG9zZS1idXR0b246aG92ZXIsIC5jbG9zZS1idXR0b246Zm9jdXMge1xcbiAgICBjb2xvcjogIzBhMGEwYTsgfVxcblxcbi5tZW51IHtcXG4gIG1hcmdpbjogMDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgfVxcbiAgLm1lbnUgPiBsaSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG4gICAgW2RhdGEtd2hhdGlucHV0PSdtb3VzZSddIC5tZW51ID4gbGkge1xcbiAgICAgIG91dGxpbmU6IDA7IH1cXG4gIC5tZW51ID4gbGkgPiBhIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTsgfVxcbiAgLm1lbnUgaW5wdXQsXFxuICAubWVudSBhLFxcbiAgLm1lbnUgYnV0dG9uIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgLm1lbnUgPiBsaSA+IGEgaW1nLFxcbiAgLm1lbnUgPiBsaSA+IGEgaSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG4gIC5tZW51ID4gbGkgPiBhIGkgKyBzcGFuLFxcbiAgLm1lbnUgPiBsaSA+IGEgaW1nICsgc3BhbiB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cXG4gIC5tZW51ID4gbGkgPiBhIGltZyxcXG4gIC5tZW51ID4gbGkgPiBhIGkge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgLm1lbnUgPiBsaSB7XFxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7IH1cXG4gIC5tZW51LnZlcnRpY2FsID4gbGkge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgICAubWVudS5tZWRpdW0taG9yaXpvbnRhbCA+IGxpIHtcXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsOyB9XFxuICAgIC5tZW51Lm1lZGl1bS12ZXJ0aWNhbCA+IGxpIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAgIC5tZW51LmxhcmdlLWhvcml6b250YWwgPiBsaSB7XFxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDsgfVxcbiAgICAubWVudS5sYXJnZS12ZXJ0aWNhbCA+IGxpIHtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfSB9XFxuICAubWVudS5zaW1wbGUgbGkge1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cXG4gIC5tZW51LnNpbXBsZSBhIHtcXG4gICAgcGFkZGluZzogMDsgfVxcbiAgLm1lbnUuYWxpZ24tcmlnaHQ6OmJlZm9yZSwgLm1lbnUuYWxpZ24tcmlnaHQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgZmxleC1iYXNpczogMDtcXG4gICAgb3JkZXI6IDE7IH1cXG4gIC5tZW51LmFsaWduLXJpZ2h0OjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAubWVudS5hbGlnbi1yaWdodCA+IGxpIHtcXG4gICAgZmxvYXQ6IHJpZ2h0OyB9XFxuICAubWVudS5leHBhbmRlZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiB0YWJsZTtcXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDsgfVxcbiAgICAubWVudS5leHBhbmRlZCA+IGxpOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQge1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAubWVudS5pY29uLXRvcCA+IGxpID4gYSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAubWVudS5pY29uLXRvcCA+IGxpID4gYSBpbWcsXFxuICAgIC5tZW51Lmljb24tdG9wID4gbGkgPiBhIGkge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvIDAuMjVyZW07IH1cXG4gIC5tZW51Lm5lc3RlZCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtOyB9XFxuICAubWVudSAuYWN0aXZlID4gYSB7XFxuICAgIGNvbG9yOiAjZmVmZWZlO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5OWU4OyB9XFxuXFxuLm1lbnUtdGV4dCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgcGFkZGluZzogMC43cmVtIDFyZW07IH1cXG5cXG4ubWVudS1jZW50ZXJlZCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5tZW51LWNlbnRlcmVkID4gLm1lbnUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ubm8tanMgW2RhdGEtcmVzcG9uc2l2ZS1tZW51XSB1bCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLm1lbnUtaWNvbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDE2cHg7IH1cXG4gIC5tZW51LWljb246OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3gtc2hhZG93OiAwIDdweCAwICNmZWZlZmUsIDAgMTRweCAwICNmZWZlZmU7IH1cXG4gIC5tZW51LWljb246aG92ZXI6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogMCA3cHggMCAjY2FjYWNhLCAwIDE0cHggMCAjY2FjYWNhOyB9XFxuXFxuLm1lbnUtaWNvbi5kYXJrIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTZweDsgfVxcbiAgLm1lbnUtaWNvbi5kYXJrOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6ICMwYTBhMGE7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgYm94LXNoYWRvdzogMCA3cHggMCAjMGEwYTBhLCAwIDE0cHggMCAjMGEwYTBhOyB9XFxuICAubWVudS1pY29uLmRhcms6aG92ZXI6OmFmdGVyIHtcXG4gICAgYmFja2dyb3VuZDogIzhhOGE4YTtcXG4gICAgYm94LXNoYWRvdzogMCA3cHggMCAjOGE4YThhLCAwIDE0cHggMCAjOGE4YThhOyB9XFxuXFxuLmlzLWRyaWxsZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAuaXMtZHJpbGxkb3duIGxpIHtcXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxcblxcbi5pcy1kcmlsbGRvd24tc3VibWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbiAgei1pbmRleDogLTE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNmZWZlZmU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgbGluZWFyOyB9XFxuICAuaXMtZHJpbGxkb3duLXN1Ym1lbnUuaXMtYWN0aXZlIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7IH1cXG4gIC5pcy1kcmlsbGRvd24tc3VibWVudS5pcy1jbG9zaW5nIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyB9XFxuXFxuLmlzLWRyaWxsZG93bi1zdWJtZW51LXBhcmVudCA+IGEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuaXMtZHJpbGxkb3duLXN1Ym1lbnUtcGFyZW50ID4gYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlcjogaW5zZXQgNnB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyMTk5ZTg7XFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xcbiAgICByaWdodDogMXJlbTsgfVxcblxcbi5qcy1kcmlsbGRvd24tYmFjayA+IGE6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXI6IGluc2V0IDZweDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzIxOTllOCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItbGVmdC13aWR0aDogMDtcXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogMC43NXJlbTsgfVxcblxcbi5kcm9wZG93bi1wYW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHotaW5kZXg6IDEwOyB9XFxuICAuZHJvcGRvd24tcGFuZS5pcy1vcGVuIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxcblxcbi5kcm9wZG93bi1wYW5lLnRpbnkge1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuXFxuLmRyb3Bkb3duLXBhbmUuc21hbGwge1xcbiAgd2lkdGg6IDIwMHB4OyB9XFxuXFxuLmRyb3Bkb3duLXBhbmUubGFyZ2Uge1xcbiAgd2lkdGg6IDQwMHB4OyB9XFxuXFxuLmRyb3Bkb3duLm1lbnUgPiBsaS5vcGVucy1sZWZ0ID4gLmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAxMDAlOyB9XFxuXFxuLmRyb3Bkb3duLm1lbnUgPiBsaS5vcGVucy1yaWdodCA+IC5pcy1kcm9wZG93bi1zdWJtZW51IHtcXG4gIHJpZ2h0OiBhdXRvO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMTAwJTsgfVxcblxcbi5kcm9wZG93bi5tZW51ID4gbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQgPiBhIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5kcm9wZG93bi5tZW51ID4gbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQgPiBhOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXI6IGluc2V0IDVweDtcXG4gIGJvcmRlci1jb2xvcjogIzIxOTllOCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBtYXJnaW4tdG9wOiAtMnB4OyB9XFxuXFxuW2RhdGEtd2hhdGlucHV0PSdtb3VzZSddIC5kcm9wZG93bi5tZW51IGEge1xcbiAgb3V0bGluZTogMDsgfVxcblxcbi5uby1qcyAuZHJvcGRvd24ubWVudSB1bCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRyb3Bkb3duLm1lbnUudmVydGljYWwgPiBsaSAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICB0b3A6IDA7IH1cXG5cXG4uZHJvcGRvd24ubWVudS52ZXJ0aWNhbCA+IGxpLm9wZW5zLWxlZnQgLmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAxMDAlOyB9XFxuXFxuLmRyb3Bkb3duLm1lbnUudmVydGljYWwgPiBsaS5vcGVucy1yaWdodCAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICByaWdodDogYXV0bztcXG4gIGxlZnQ6IDEwMCU7IH1cXG5cXG4uZHJvcGRvd24ubWVudS52ZXJ0aWNhbCA+IGxpID4gYTo6YWZ0ZXIge1xcbiAgcmlnaHQ6IDE0cHg7XFxuICBtYXJnaW4tdG9wOiAtM3B4OyB9XFxuXFxuLmRyb3Bkb3duLm1lbnUudmVydGljYWwgPiBsaS5vcGVucy1sZWZ0ID4gYTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyOiBpbnNldCA1cHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMyMTk5ZTggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7IH1cXG5cXG4uZHJvcGRvd24ubWVudS52ZXJ0aWNhbCA+IGxpLm9wZW5zLXJpZ2h0ID4gYTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyOiBpbnNldCA1cHg7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyMTk5ZTg7XFxuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAuZHJvcGRvd24ubWVudS5tZWRpdW0taG9yaXpvbnRhbCA+IGxpLm9wZW5zLWxlZnQgPiAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICAgIGxlZnQ6IGF1dG87XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDEwMCU7IH1cXG4gIC5kcm9wZG93bi5tZW51Lm1lZGl1bS1ob3Jpem9udGFsID4gbGkub3BlbnMtcmlnaHQgPiAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDEwMCU7IH1cXG4gIC5kcm9wZG93bi5tZW51Lm1lZGl1bS1ob3Jpem9udGFsID4gbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQgPiBhIHtcXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5kcm9wZG93bi5tZW51Lm1lZGl1bS1ob3Jpem9udGFsID4gbGkuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQgPiBhOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyOiBpbnNldCA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogIzIxOTllOCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7IH1cXG4gIC5kcm9wZG93bi5tZW51Lm1lZGl1bS12ZXJ0aWNhbCA+IGxpIC5pcy1kcm9wZG93bi1zdWJtZW51IHtcXG4gICAgdG9wOiAwOyB9XFxuICAuZHJvcGRvd24ubWVudS5tZWRpdW0tdmVydGljYWwgPiBsaS5vcGVucy1sZWZ0IC5pcy1kcm9wZG93bi1zdWJtZW51IHtcXG4gICAgbGVmdDogYXV0bztcXG4gICAgcmlnaHQ6IDEwMCU7IH1cXG4gIC5kcm9wZG93bi5tZW51Lm1lZGl1bS12ZXJ0aWNhbCA+IGxpLm9wZW5zLXJpZ2h0IC5pcy1kcm9wZG93bi1zdWJtZW51IHtcXG4gICAgcmlnaHQ6IGF1dG87XFxuICAgIGxlZnQ6IDEwMCU7IH1cXG4gIC5kcm9wZG93bi5tZW51Lm1lZGl1bS12ZXJ0aWNhbCA+IGxpID4gYTo6YWZ0ZXIge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogLTNweDsgfVxcbiAgLmRyb3Bkb3duLm1lbnUubWVkaXVtLXZlcnRpY2FsID4gbGkub3BlbnMtbGVmdCA+IGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXI6IGluc2V0IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjE5OWU4IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDsgfVxcbiAgLmRyb3Bkb3duLm1lbnUubWVkaXVtLXZlcnRpY2FsID4gbGkub3BlbnMtcmlnaHQgPiBhOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyOiBpbnNldCA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzIxOTllODtcXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0ZW0pIHtcXG4gIC5kcm9wZG93bi5tZW51LmxhcmdlLWhvcml6b250YWwgPiBsaS5vcGVucy1sZWZ0ID4gLmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlOyB9XFxuICAuZHJvcGRvd24ubWVudS5sYXJnZS1ob3Jpem9udGFsID4gbGkub3BlbnMtcmlnaHQgPiAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDEwMCU7IH1cXG4gIC5kcm9wZG93bi5tZW51LmxhcmdlLWhvcml6b250YWwgPiBsaS5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCA+IGEge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmRyb3Bkb3duLm1lbnUubGFyZ2UtaG9yaXpvbnRhbCA+IGxpLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50ID4gYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlcjogaW5zZXQgNXB4O1xcbiAgICBib3JkZXItY29sb3I6ICMyMTk5ZTggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbiAgICByaWdodDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4OyB9XFxuICAuZHJvcGRvd24ubWVudS5sYXJnZS12ZXJ0aWNhbCA+IGxpIC5pcy1kcm9wZG93bi1zdWJtZW51IHtcXG4gICAgdG9wOiAwOyB9XFxuICAuZHJvcGRvd24ubWVudS5sYXJnZS12ZXJ0aWNhbCA+IGxpLm9wZW5zLWxlZnQgLmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMTAwJTsgfVxcbiAgLmRyb3Bkb3duLm1lbnUubGFyZ2UtdmVydGljYWwgPiBsaS5vcGVucy1yaWdodCAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICAgIHJpZ2h0OiBhdXRvO1xcbiAgICBsZWZ0OiAxMDAlOyB9XFxuICAuZHJvcGRvd24ubWVudS5sYXJnZS12ZXJ0aWNhbCA+IGxpID4gYTo6YWZ0ZXIge1xcbiAgICByaWdodDogMTRweDtcXG4gICAgbWFyZ2luLXRvcDogLTNweDsgfVxcbiAgLmRyb3Bkb3duLm1lbnUubGFyZ2UtdmVydGljYWwgPiBsaS5vcGVucy1sZWZ0ID4gYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlcjogaW5zZXQgNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICMyMTk5ZTggdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwOyB9XFxuICAuZHJvcGRvd24ubWVudS5sYXJnZS12ZXJ0aWNhbCA+IGxpLm9wZW5zLXJpZ2h0ID4gYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlcjogaW5zZXQgNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyMTk5ZTg7XFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwOyB9IH1cXG5cXG4uZHJvcGRvd24ubWVudS5hbGlnbi1yaWdodCAuaXMtZHJvcGRvd24tc3VibWVudS5maXJzdC1zdWIge1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAwOyB9XFxuXFxuLmlzLWRyb3Bkb3duLW1lbnUudmVydGljYWwge1xcbiAgd2lkdGg6IDEwMHB4OyB9XFxuICAuaXMtZHJvcGRvd24tbWVudS52ZXJ0aWNhbC5hbGlnbi1yaWdodCB7XFxuICAgIGZsb2F0OiByaWdodDsgfVxcblxcbi5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gIC5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudCBhOjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHJpZ2h0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7IH1cXG4gIC5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudC5vcGVucy1pbm5lciAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICAgIHRvcDogMTAwJTsgfVxcbiAgLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50Lm9wZW5zLWxlZnQgLmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xcbiAgICBsZWZ0OiBhdXRvO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAxMDAlOyB9XFxuXFxuLmlzLWRyb3Bkb3duLXN1Ym1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDEwMCU7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQ6ICNmZWZlZmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhOyB9XFxuICAuaXMtZHJvcGRvd24tc3VibWVudSAuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQgPiBhOjphZnRlciB7XFxuICAgIHJpZ2h0OiAxNHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtM3B4OyB9XFxuICAuaXMtZHJvcGRvd24tc3VibWVudSAuaXMtZHJvcGRvd24tc3VibWVudS1wYXJlbnQub3BlbnMtbGVmdCA+IGE6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXI6IGluc2V0IDVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjMjE5OWU4IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItbGVmdC13aWR0aDogMDsgfVxcbiAgLmlzLWRyb3Bkb3duLXN1Ym1lbnUgLmlzLWRyb3Bkb3duLXN1Ym1lbnUtcGFyZW50Lm9wZW5zLXJpZ2h0ID4gYTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlcjogaW5zZXQgNXB4O1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMyMTk5ZTg7XFxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwOyB9XFxuICAuaXMtZHJvcGRvd24tc3VibWVudSAuaXMtZHJvcGRvd24tc3VibWVudSB7XFxuICAgIG1hcmdpbi10b3A6IC0xcHg7IH1cXG4gIC5pcy1kcm9wZG93bi1zdWJtZW51ID4gbGkge1xcbiAgICB3aWR0aDogMTAwJTsgfVxcbiAgLmlzLWRyb3Bkb3duLXN1Ym1lbnU6bm90KC5qcy1kcm9wZG93bi1ub2hvdmVyKSA+IC5pcy1kcm9wZG93bi1zdWJtZW51LXBhcmVudDpob3ZlciA+IC5pcy1kcm9wZG93bi1zdWJtZW51LCAuaXMtZHJvcGRvd24tc3VibWVudS5qcy1kcm9wZG93bi1hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5mbGV4LXZpZGVvIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiA3NSU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgLmZsZXgtdmlkZW8gaWZyYW1lLFxcbiAgLmZsZXgtdmlkZW8gb2JqZWN0LFxcbiAgLmZsZXgtdmlkZW8gZW1iZWQsXFxuICAuZmxleC12aWRlbyB2aWRlbyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAuZmxleC12aWRlby53aWRlc2NyZWVuIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgfVxcbiAgLmZsZXgtdmlkZW8udmltZW8ge1xcbiAgICBwYWRkaW5nLXRvcDogMDsgfVxcblxcbi5sYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwLjMzMzMzcmVtIDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJhY2tncm91bmQ6ICMyMTk5ZTg7XFxuICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgLmxhYmVsLnNlY29uZGFyeSB7XFxuICAgIGJhY2tncm91bmQ6ICM3Nzc7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAubGFiZWwuc3VjY2VzcyB7XFxuICAgIGJhY2tncm91bmQ6ICMzYWRiNzY7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAubGFiZWwud2FybmluZyB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmFlMDA7XFxuICAgIGNvbG9yOiAjZmVmZWZlOyB9XFxuICAubGFiZWwuYWxlcnQge1xcbiAgICBiYWNrZ3JvdW5kOiAjZWM1ODQwO1xcbiAgICBjb2xvcjogI2ZlZmVmZTsgfVxcblxcbi5tZWRpYS1vYmplY3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuICAubWVkaWEtb2JqZWN0IGltZyB7XFxuICAgIG1heC13aWR0aDogbm9uZTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5tZWRpYS1vYmplY3Quc3RhY2stZm9yLXNtYWxsIC5tZWRpYS1vYmplY3Qtc2VjdGlvbiB7XFxuICAgICAgcGFkZGluZzogMDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgIC5tZWRpYS1vYmplY3Quc3RhY2stZm9yLXNtYWxsIC5tZWRpYS1vYmplY3Qtc2VjdGlvbiBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbi5tZWRpYS1vYmplY3Qtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDsgfVxcbiAgLm1lZGlhLW9iamVjdC1zZWN0aW9uOmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1yaWdodDogMXJlbTsgfVxcbiAgLm1lZGlhLW9iamVjdC1zZWN0aW9uOmxhc3QtY2hpbGQ6bm90KDpudGgtY2hpbGQoMikpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtOyB9XFxuICAubWVkaWEtb2JqZWN0LXNlY3Rpb24ubWlkZGxlIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxcbiAgLm1lZGlhLW9iamVjdC1zZWN0aW9uLmJvdHRvbSB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207IH1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLm9mZi1jYW52YXMtd3JhcHBlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvOyB9XFxuXFxuLm9mZi1jYW52YXMtd3JhcHBlci1pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7IH1cXG4gIC5vZmYtY2FudmFzLXdyYXBwZXItaW5uZXI6OmJlZm9yZSwgLm9mZi1jYW52YXMtd3JhcHBlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBvcmRlcjogMTsgfVxcbiAgLm9mZi1jYW52YXMtd3JhcHBlci1pbm5lcjo6YWZ0ZXIge1xcbiAgICBjbGVhcjogYm90aDsgfVxcblxcbi5vZmYtY2FudmFzLWNvbnRlbnQsXFxuLm9mZi1jYW52YXMtY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy1ib3R0b206IDAuMXB4O1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgxMCwgMTAsIDEwLCAwLjUpOyB9XFxuXFxuLmpzLW9mZi1jYW52YXMtZXhpdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTQsIDI1NCwgMjU0LCAwLjI1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlOyB9XFxuXFxuLm9mZi1jYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcXG4gIHotaW5kZXg6IC0xO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIFtkYXRhLXdoYXRpbnB1dD0nbW91c2UnXSAub2ZmLWNhbnZhcyB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG4gIC5vZmYtY2FudmFzLnBvc2l0aW9uLWxlZnQge1xcbiAgICBsZWZ0OiAtMjUwcHg7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDI1MHB4OyB9XFxuICAgIC5pcy1vcGVuLWxlZnQge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNTBweCk7IH1cXG4gIC5vZmYtY2FudmFzLnBvc2l0aW9uLXJpZ2h0IHtcXG4gICAgcmlnaHQ6IC0yNTBweDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMjUwcHg7IH1cXG4gICAgLmlzLW9wZW4tcmlnaHQge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUwcHgpOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgLnBvc2l0aW9uLWxlZnQucmV2ZWFsLWZvci1tZWRpdW0ge1xcbiAgICBsZWZ0OiAwO1xcbiAgICB6LWluZGV4OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gICAgLnBvc2l0aW9uLWxlZnQucmV2ZWFsLWZvci1tZWRpdW0gfiAub2ZmLWNhbnZhcy1jb250ZW50IHtcXG4gICAgICBtYXJnaW4tbGVmdDogMjUwcHg7IH1cXG4gIC5wb3NpdGlvbi1yaWdodC5yZXZlYWwtZm9yLW1lZGl1bSB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gICAgLnBvc2l0aW9uLXJpZ2h0LnJldmVhbC1mb3ItbWVkaXVtIH4gLm9mZi1jYW52YXMtY29udGVudCB7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiAyNTBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLnBvc2l0aW9uLWxlZnQucmV2ZWFsLWZvci1sYXJnZSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IGF1dG87XFxuICAgIHBvc2l0aW9uOiBmaXhlZDsgfVxcbiAgICAucG9zaXRpb24tbGVmdC5yZXZlYWwtZm9yLWxhcmdlIH4gLm9mZi1jYW52YXMtY29udGVudCB7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDI1MHB4OyB9XFxuICAucG9zaXRpb24tcmlnaHQucmV2ZWFsLWZvci1sYXJnZSB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB6LWluZGV4OiBhdXRvO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG4gICAgLnBvc2l0aW9uLXJpZ2h0LnJldmVhbC1mb3ItbGFyZ2UgfiAub2ZmLWNhbnZhcy1jb250ZW50IHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDI1MHB4OyB9IH1cXG5cXG4ub3JiaXQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLm9yYml0LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5vcmJpdC1zbGlkZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cXG4gIC5vcmJpdC1zbGlkZS5uby1tb3Rpb251aS5pcy1hY3RpdmUge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7IH1cXG5cXG4ub3JiaXQtZmlndXJlIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5vcmJpdC1pbWFnZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTsgfVxcblxcbi5vcmJpdC1jYXB0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBjb2xvcjogI2ZlZmVmZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAsIDEwLCAxMCwgMC41KTsgfVxcblxcbi5vcmJpdC1wcmV2aW91cywgLm9yYml0LW5leHQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB6LWluZGV4OiAxMDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBjb2xvcjogI2ZlZmVmZTsgfVxcbiAgW2RhdGEtd2hhdGlucHV0PSdtb3VzZSddIC5vcmJpdC1wcmV2aW91cywgW2RhdGEtd2hhdGlucHV0PSdtb3VzZSddIC5vcmJpdC1uZXh0IHtcXG4gICAgb3V0bGluZTogMDsgfVxcbiAgLm9yYml0LXByZXZpb3VzOmhvdmVyLCAub3JiaXQtbmV4dDpob3ZlciwgLm9yYml0LXByZXZpb3VzOmFjdGl2ZSwgLm9yYml0LW5leHQ6YWN0aXZlLCAub3JiaXQtcHJldmlvdXM6Zm9jdXMsIC5vcmJpdC1uZXh0OmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwgMTAsIDEwLCAwLjUpOyB9XFxuXFxuLm9yYml0LXByZXZpb3VzIHtcXG4gIGxlZnQ6IDA7IH1cXG5cXG4ub3JiaXQtbmV4dCB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IDA7IH1cXG5cXG4ub3JiaXQtYnVsbGV0cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tdG9wOiAwLjhyZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjhyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIFtkYXRhLXdoYXRpbnB1dD0nbW91c2UnXSAub3JiaXQtYnVsbGV0cyB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG4gIC5vcmJpdC1idWxsZXRzIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICBtYXJnaW46IDAuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICAgIC5vcmJpdC1idWxsZXRzIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhhOGE4YTsgfVxcbiAgICAub3JiaXQtYnVsbGV0cyBidXR0b24uaXMtYWN0aXZlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGE4YThhOyB9XFxuXFxuLnBhZ2luYXRpb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAucGFnaW5hdGlvbjo6YmVmb3JlLCAucGFnaW5hdGlvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbiAgICBmbGV4LWJhc2lzOiAwO1xcbiAgICBvcmRlcjogMTsgfVxcbiAgLnBhZ2luYXRpb246OmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7IH1cXG4gIC5wYWdpbmF0aW9uIGxpIHtcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjA2MjVyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgLnBhZ2luYXRpb24gbGk6bGFzdC1jaGlsZCwgLnBhZ2luYXRpb24gbGk6Zmlyc3QtY2hpbGQge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAgICAgLnBhZ2luYXRpb24gbGkge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9IH1cXG4gIC5wYWdpbmF0aW9uIGEsXFxuICAucGFnaW5hdGlvbiBidXR0b24ge1xcbiAgICBjb2xvcjogIzBhMGEwYTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAucGFnaW5hdGlvbiBhOmhvdmVyLFxcbiAgICAucGFnaW5hdGlvbiBidXR0b246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7IH1cXG4gIC5wYWdpbmF0aW9uIC5jdXJyZW50IHtcXG4gICAgcGFkZGluZzogMC4xODc1cmVtIDAuNjI1cmVtO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjE5OWU4O1xcbiAgICBjb2xvcjogI2ZlZmVmZTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0OyB9XFxuICAucGFnaW5hdGlvbiAuZGlzYWJsZWQge1xcbiAgICBwYWRkaW5nOiAwLjE4NzVyZW0gMC42MjVyZW07XFxuICAgIGNvbG9yOiAjY2FjYWNhO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7IH1cXG4gICAgLnBhZ2luYXRpb24gLmRpc2FibGVkOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgLnBhZ2luYXRpb24gLmVsbGlwc2lzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICdcXFxcMjAyNic7XFxuICAgIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjYyNXJlbTtcXG4gICAgY29sb3I6ICMwYTBhMGE7IH1cXG5cXG4ucGFnaW5hdGlvbi1wcmV2aW91cyBhOjpiZWZvcmUsXFxuLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXEFCJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtOyB9XFxuXFxuLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlcixcXG4ucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOjphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXEJCJztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07IH1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2FjYTtcXG4gIGhlaWdodDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAucHJvZ3Jlc3MucHJpbWFyeSAucHJvZ3Jlc3MtbWV0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5OWU4OyB9XFxuICAucHJvZ3Jlc3Muc2Vjb25kYXJ5IC5wcm9ncmVzcy1tZXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7IH1cXG4gIC5wcm9ncmVzcy5zdWNjZXNzIC5wcm9ncmVzcy1tZXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYWRiNzY7IH1cXG4gIC5wcm9ncmVzcy53YXJuaW5nIC5wcm9ncmVzcy1tZXRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmFlMDA7IH1cXG4gIC5wcm9ncmVzcy5hbGVydCAucHJvZ3Jlc3MtbWV0ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM1ODQwOyB9XFxuXFxuLnByb2dyZXNzLW1ldGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTllODsgfVxcblxcbi5wcm9ncmVzcy1tZXRlci10ZXh0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmVmZWZlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMi4yNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRvdWNoLWFjdGlvbjogbm9uZTsgfVxcblxcbi5zbGlkZXItZmlsbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYWNhO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7IH1cXG4gIC5zbGlkZXItZmlsbC5pcy1kcmFnZ2luZyB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwcyBsaW5lYXI7IH1cXG5cXG4uc2xpZGVyLWhhbmRsZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEuNHJlbTtcXG4gIGhlaWdodDogMS40cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTllODtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICBbZGF0YS13aGF0aW5wdXQ9J21vdXNlJ10gLnNsaWRlci1oYW5kbGUge1xcbiAgICBvdXRsaW5lOiAwOyB9XFxuICAuc2xpZGVyLWhhbmRsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTgzY2M7IH1cXG4gIC5zbGlkZXItaGFuZGxlLmlzLWRyYWdnaW5nIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDBzIGxpbmVhcjsgfVxcblxcbi5zbGlkZXIuZGlzYWJsZWQsXFxuLnNsaWRlcltkaXNhYmxlZF0ge1xcbiAgb3BhY2l0eTogMC4yNTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG5cXG4uc2xpZGVyLnZlcnRpY2FsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAwLjVyZW07XFxuICBoZWlnaHQ6IDEyLjVyZW07XFxuICBtYXJnaW46IDAgMS4yNXJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgLTEpOyB9XFxuICAuc2xpZGVyLnZlcnRpY2FsIC5zbGlkZXItZmlsbCB7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDAuNXJlbTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTsgfVxcbiAgLnNsaWRlci52ZXJ0aWNhbCAuc2xpZGVyLWhhbmRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHdpZHRoOiAxLjRyZW07XFxuICAgIGhlaWdodDogMS40cmVtO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG5cXG4uc3RpY2t5LWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4uc3RpY2t5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XFxuXFxuLnN0aWNreS5pcy1zdHVjayB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA1OyB9XFxuICAuc3RpY2t5LmlzLXN0dWNrLmlzLWF0LXRvcCB7XFxuICAgIHRvcDogMDsgfVxcbiAgLnN0aWNreS5pcy1zdHVjay5pcy1hdC1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG5cXG4uc3RpY2t5LmlzLWFuY2hvcmVkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogYXV0bzsgfVxcbiAgLnN0aWNreS5pcy1hbmNob3JlZC5pcy1hdC1ib3R0b20ge1xcbiAgICBib3R0b206IDA7IH1cXG5cXG5ib2R5LmlzLXJldmVhbC1vcGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG5cXG4ucmV2ZWFsLW92ZXJsYXkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDEwMDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLCAxMCwgMTAsIDAuNDUpO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuXFxuLnJldmVhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTAwNjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdy15OiBhdXRvOyB9XFxuICBbZGF0YS13aGF0aW5wdXQ9J21vdXNlJ10gLnJldmVhbCB7XFxuICAgIG91dGxpbmU6IDA7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLnJldmVhbCB7XFxuICAgICAgbWluLWhlaWdodDogMDsgfSB9XFxuICAucmV2ZWFsIC5jb2x1bW4sIC5yZXZlYWwgLmNvbHVtbnMsXFxuICAucmV2ZWFsIC5jb2x1bW5zIHtcXG4gICAgbWluLXdpZHRoOiAwOyB9XFxuICAucmV2ZWFsID4gOmxhc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAgIC5yZXZlYWwge1xcbiAgICAgIHdpZHRoOiA2MDBweDtcXG4gICAgICBtYXgtd2lkdGg6IDc1cmVtOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLnJldmVhbCAucmV2ZWFsIHtcXG4gICAgICBsZWZ0OiBhdXRvO1xcbiAgICAgIHJpZ2h0OiBhdXRvO1xcbiAgICAgIG1hcmdpbjogMCBhdXRvOyB9IH1cXG4gIC5yZXZlYWwuY29sbGFwc2Uge1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAgIC5yZXZlYWwudGlueSB7XFxuICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICBtYXgtd2lkdGg6IDc1cmVtOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLnJldmVhbC5zbWFsbCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBtYXgtd2lkdGg6IDc1cmVtOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIHtcXG4gICAgLnJldmVhbC5sYXJnZSB7XFxuICAgICAgd2lkdGg6IDkwJTtcXG4gICAgICBtYXgtd2lkdGg6IDc1cmVtOyB9IH1cXG4gIC5yZXZlYWwuZnVsbCB7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGJvcmRlcjogMDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAgIC5yZXZlYWwge1xcbiAgICAgIHRvcDogMDtcXG4gICAgICBsZWZ0OiAwO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICAgIG1heC13aWR0aDogbm9uZTtcXG4gICAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgICBib3JkZXI6IDA7IH0gfVxcbiAgLnJldmVhbC53aXRob3V0LW92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IH1cXG5cXG4uc3dpdGNoIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBvdXRsaW5lOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBjb2xvcjogI2ZlZmVmZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxcblxcbi5zd2l0Y2gtaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi5zd2l0Y2gtcGFkZGxlIHtcXG4gIGJhY2tncm91bmQ6ICNjYWNhY2E7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2Utb3V0O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7IH1cXG4gIGlucHV0ICsgLnN3aXRjaC1wYWRkbGUge1xcbiAgICBtYXJnaW46IDA7IH1cXG4gIC5zd2l0Y2gtcGFkZGxlOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZWZlZmU7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBoZWlnaHQ6IDEuNXJlbTtcXG4gICAgbGVmdDogMC4yNXJlbTtcXG4gICAgdG9wOiAwLjI1cmVtO1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1vdXQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIGlucHV0OmNoZWNrZWQgfiAuc3dpdGNoLXBhZGRsZSB7XFxuICAgIGJhY2tncm91bmQ6ICMyMTk5ZTg7IH1cXG4gICAgaW5wdXQ6Y2hlY2tlZCB+IC5zd2l0Y2gtcGFkZGxlOjphZnRlciB7XFxuICAgICAgbGVmdDogMi4yNXJlbTsgfVxcbiAgW2RhdGEtd2hhdGlucHV0PSdtb3VzZSddIGlucHV0OmZvY3VzIH4gLnN3aXRjaC1wYWRkbGUge1xcbiAgICBvdXRsaW5lOiAwOyB9XFxuXFxuLnN3aXRjaC1hY3RpdmUsIC5zd2l0Y2gtaW5hY3RpdmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG5cXG4uc3dpdGNoLWFjdGl2ZSB7XFxuICBsZWZ0OiA4JTtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbCA+IC5zd2l0Y2gtYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uc3dpdGNoLWluYWN0aXZlIHtcXG4gIHJpZ2h0OiAxNSU7IH1cXG4gIGlucHV0OmNoZWNrZWQgKyBsYWJlbCA+IC5zd2l0Y2gtaW5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnN3aXRjaC50aW55IC5zd2l0Y2gtcGFkZGxlIHtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICBmb250LXNpemU6IDAuNjI1cmVtOyB9XFxuXFxuLnN3aXRjaC50aW55IC5zd2l0Y2gtcGFkZGxlOjphZnRlciB7XFxuICB3aWR0aDogMXJlbTtcXG4gIGhlaWdodDogMXJlbTsgfVxcblxcbi5zd2l0Y2gudGlueSBpbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1wYWRkbGU6YWZ0ZXIge1xcbiAgbGVmdDogMS43NXJlbTsgfVxcblxcbi5zd2l0Y2guc21hbGwgLnN3aXRjaC1wYWRkbGUge1xcbiAgd2lkdGg6IDMuNXJlbTtcXG4gIGhlaWdodDogMS43NXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTsgfVxcblxcbi5zd2l0Y2guc21hbGwgLnN3aXRjaC1wYWRkbGU6OmFmdGVyIHtcXG4gIHdpZHRoOiAxLjI1cmVtO1xcbiAgaGVpZ2h0OiAxLjI1cmVtOyB9XFxuXFxuLnN3aXRjaC5zbWFsbCBpbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1wYWRkbGU6YWZ0ZXIge1xcbiAgbGVmdDogMnJlbTsgfVxcblxcbi5zd2l0Y2gubGFyZ2UgLnN3aXRjaC1wYWRkbGUge1xcbiAgd2lkdGg6IDVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxcblxcbi5zd2l0Y2gubGFyZ2UgLnN3aXRjaC1wYWRkbGU6OmFmdGVyIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtOyB9XFxuXFxuLnN3aXRjaC5sYXJnZSBpbnB1dDpjaGVja2VkIH4gLnN3aXRjaC1wYWRkbGU6YWZ0ZXIge1xcbiAgbGVmdDogMi43NXJlbTsgfVxcblxcbnRhYmxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gIHRhYmxlIHRoZWFkLFxcbiAgdGFibGUgdGJvZHksXFxuICB0YWJsZSB0Zm9vdCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7IH1cXG4gIHRhYmxlIGNhcHRpb24ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgcGFkZGluZzogMC41cmVtIDAuNjI1cmVtIDAuNjI1cmVtOyB9XFxuICB0YWJsZSB0aGVhZCxcXG4gIHRhYmxlIHRmb290IHtcXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcXG4gICAgY29sb3I6ICMwYTBhMGE7IH1cXG4gICAgdGFibGUgdGhlYWQgdHIsXFxuICAgIHRhYmxlIHRmb290IHRyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxcbiAgICB0YWJsZSB0aGVhZCB0aCxcXG4gICAgdGFibGUgdGhlYWQgdGQsXFxuICAgIHRhYmxlIHRmb290IHRoLFxcbiAgICB0YWJsZSB0Zm9vdCB0ZCB7XFxuICAgICAgcGFkZGluZzogMC41cmVtIDAuNjI1cmVtIDAuNjI1cmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gIHRhYmxlIHRib2R5IHRyOm50aC1jaGlsZChldmVuKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7IH1cXG4gIHRhYmxlIHRib2R5IHRoLFxcbiAgdGFibGUgdGJvZHkgdGQge1xcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC42MjVyZW0gMC42MjVyZW07IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1ZW0pIHtcXG4gIHRhYmxlLnN0YWNrIHRoZWFkIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgdGFibGUuc3RhY2sgdGZvb3Qge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICB0YWJsZS5zdGFjayB0cixcXG4gIHRhYmxlLnN0YWNrIHRoLFxcbiAgdGFibGUuc3RhY2sgdGQge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgdGFibGUuc3RhY2sgdGQge1xcbiAgICBib3JkZXItdG9wOiAwOyB9IH1cXG5cXG50YWJsZS5zY3JvbGwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93LXg6IGF1dG87IH1cXG5cXG50YWJsZS5ob3ZlciB0cjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5OyB9XFxuXFxudGFibGUuaG92ZXIgdHI6bnRoLW9mLXR5cGUoZXZlbik6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYzsgfVxcblxcbi50YWJsZS1zY3JvbGwge1xcbiAgb3ZlcmZsb3cteDogYXV0bzsgfVxcbiAgLnRhYmxlLXNjcm9sbCB0YWJsZSB7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuXFxuLnRhYnMge1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7IH1cXG4gIC50YWJzOjpiZWZvcmUsIC50YWJzOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG9yZGVyOiAxOyB9XFxuICAudGFiczo6YWZ0ZXIge1xcbiAgICBjbGVhcjogYm90aDsgfVxcblxcbi50YWJzLnZlcnRpY2FsID4gbGkge1xcbiAgd2lkdGg6IGF1dG87XFxuICBmbG9hdDogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRhYnMuc2ltcGxlID4gbGkgPiBhIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG4gIC50YWJzLnNpbXBsZSA+IGxpID4gYTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XFxuXFxuLnRhYnMucHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kOiAjMjE5OWU4OyB9XFxuICAudGFicy5wcmltYXJ5ID4gbGkgPiBhIHtcXG4gICAgY29sb3I6ICNmZWZlZmU7IH1cXG4gICAgLnRhYnMucHJpbWFyeSA+IGxpID4gYTpob3ZlciwgLnRhYnMucHJpbWFyeSA+IGxpID4gYTpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZDogIzE4OTNlNDsgfVxcblxcbi50YWJzLXRpdGxlIHtcXG4gIGZsb2F0OiBsZWZ0OyB9XFxuICAudGFicy10aXRsZSA+IGEge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbiAgICBmb250LXNpemU6IDAuNzVyZW07IH1cXG4gICAgLnRhYnMtdGl0bGUgPiBhOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlOyB9XFxuICAgIC50YWJzLXRpdGxlID4gYTpmb2N1cywgLnRhYnMtdGl0bGUgPiBhW2FyaWEtc2VsZWN0ZWQ9J3RydWUnXSB7XFxuICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjsgfVxcblxcbi50YWJzLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcbiAgYm9yZGVyLXRvcDogMDsgfVxcblxcbi50YWJzLWNvbnRlbnQudmVydGljYWwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXG4gIGJvcmRlci1sZWZ0OiAwOyB9XFxuXFxuLnRhYnMtcGFuZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDFyZW07IH1cXG4gIC50YWJzLXBhbmVsLmlzLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLnRodW1ibmFpbCB7XFxuICBib3JkZXI6IHNvbGlkIDRweCAjZmVmZWZlO1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHJnYmEoMTAsIDEwLCAxMCwgMC4yKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBlYXNlLW91dDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyB9XFxuICAudGh1bWJuYWlsOmhvdmVyLCAudGh1bWJuYWlsOmZvY3VzIHtcXG4gICAgYm94LXNoYWRvdzogMCAwIDZweCAxcHggcmdiYSgzMywgMTUzLCAyMzIsIDAuNSk7IH1cXG5cXG4udGl0bGUtYmFyIHtcXG4gIGJhY2tncm91bmQ6ICMwYTBhMGE7XFxuICBjb2xvcjogI2ZlZmVmZTtcXG4gIHBhZGRpbmc6IDAuNXJlbTsgfVxcbiAgLnRpdGxlLWJhcjo6YmVmb3JlLCAudGl0bGUtYmFyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG9yZGVyOiAxOyB9XFxuICAudGl0bGUtYmFyOjphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoOyB9XFxuICAudGl0bGUtYmFyIC5tZW51LWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cXG5cXG4udGl0bGUtYmFyLWxlZnQge1xcbiAgZmxvYXQ6IGxlZnQ7IH1cXG5cXG4udGl0bGUtYmFyLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRpdGxlLWJhci10aXRsZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4ubWVudS1pY29uLmRhcmsge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNnB4OyB9XFxuICAubWVudS1pY29uLmRhcms6OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZDogIzBhMGEwYTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3gtc2hhZG93OiAwIDdweCAwICMwYTBhMGEsIDAgMTRweCAwICMwYTBhMGE7IH1cXG4gIC5tZW51LWljb24uZGFyazpob3Zlcjo6YWZ0ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjOGE4YThhO1xcbiAgICBib3gtc2hhZG93OiAwIDdweCAwICM4YThhOGEsIDAgMTRweCAwICM4YThhOGE7IH1cXG5cXG4uaGFzLXRpcCB7XFxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4ICM4YThhOGE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGN1cnNvcjogaGVscDsgfVxcblxcbi50b29sdGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7XFxuICBjb2xvcjogI2ZlZmVmZTtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyAwLjY0OTVyZW0pO1xcbiAgbWF4LXdpZHRoOiAxMHJlbSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgLnRvb2x0aXA6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgYm9yZGVyOiBpbnNldCAwLjc1cmVtO1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMwYTBhMGE7XFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xcbiAgICBib3R0b206IDEwMCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cXG4gIC50b29sdGlwLnRvcDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXI6IGluc2V0IDAuNzVyZW07XFxuICAgIGJvcmRlci1jb2xvcjogIzBhMGEwYSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgYm90dG9tOiBhdXRvOyB9XFxuICAudG9vbHRpcC5sZWZ0OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIGJvcmRlcjogaW5zZXQgMC43NXJlbTtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMGEwYTBhO1xcbiAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1yaWdodC13aWR0aDogMDtcXG4gICAgYm90dG9tOiBhdXRvO1xcbiAgICBsZWZ0OiAxMDAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICAudG9vbHRpcC5yaWdodDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBib3JkZXI6IGluc2V0IDAuNzVyZW07XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzBhMGEwYSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XFxuICAgIGJvdHRvbTogYXV0bztcXG4gICAgbGVmdDogYXV0bztcXG4gICAgcmlnaHQ6IDEwMCU7XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG5cXG4udG9wLWJhciB7XFxuICBwYWRkaW5nOiAwLjVyZW07IH1cXG4gIC50b3AtYmFyOjpiZWZvcmUsIC50b3AtYmFyOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgZGlzcGxheTogdGFibGU7XFxuICAgIGZsZXgtYmFzaXM6IDA7XFxuICAgIG9yZGVyOiAxOyB9XFxuICAudG9wLWJhcjo6YWZ0ZXIge1xcbiAgICBjbGVhcjogYm90aDsgfVxcbiAgLnRvcC1iYXIsXFxuICAudG9wLWJhciB1bCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7IH1cXG4gIC50b3AtYmFyIGlucHV0IHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07IH1cXG4gIC50b3AtYmFyIC5pbnB1dC1ncm91cC1maWVsZCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gIC50b3AtYmFyIGlucHV0LmJ1dHRvbiB7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAuc3RhY2tlZC1mb3Itc21hbGwgLnRvcC1iYXItbGVmdCxcXG4gIC5zdGFja2VkLWZvci1zbWFsbCAudG9wLWJhci1yaWdodCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1ZW0pIHtcXG4gIC5zdGFja2VkLWZvci1tZWRpdW0gLnRvcC1iYXItbGVmdCxcXG4gIC5zdGFja2VkLWZvci1tZWRpdW0gLnRvcC1iYXItcmlnaHQge1xcbiAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQuOTM3NWVtKSB7XFxuICAuc3RhY2tlZC1mb3ItbGFyZ2UgLnRvcC1iYXItbGVmdCxcXG4gIC5zdGFja2VkLWZvci1sYXJnZSAudG9wLWJhci1yaWdodCB7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG4udG9wLWJhci1sZWZ0LFxcbi50b3AtYmFyLXJpZ2h0IHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgLnRvcC1iYXItbGVmdCxcXG4gIC50b3AtYmFyLXJpZ2h0IHtcXG4gICAgd2lkdGg6IGF1dG87IH0gfVxcblxcbi50b3AtYmFyLXRpdGxlIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtOyB9XFxuXFxuLnRvcC1iYXItbGVmdCB7XFxuICBmbG9hdDogbGVmdDsgfVxcblxcbi50b3AtYmFyLXJpZ2h0IHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAuaGlkZS1mb3Itc21hbGwtb25seSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMGVtKSwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSB7XFxuICAuc2hvdy1mb3Itc21hbGwtb25seSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkge1xcbiAgLmhpZGUtZm9yLW1lZGl1bSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XFxuICAuc2hvdy1mb3ItbWVkaXVtIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7XFxuICAuaGlkZS1mb3ItbWVkaXVtLW9ubHkge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSksIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xcbiAgLnNob3ctZm9yLW1lZGl1bS1vbmx5IHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSB7XFxuICAuaGlkZS1mb3ItbGFyZ2Uge1xcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVlbSkge1xcbiAgLnNob3ctZm9yLWxhcmdlIHtcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NGVtKSBhbmQgKG1heC13aWR0aDogNzQuOTM3NWVtKSB7XFxuICAuaGlkZS1mb3ItbGFyZ2Utb25seSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSwgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NWVtKSB7XFxuICAuc2hvdy1mb3ItbGFyZ2Utb25seSB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XFxuXFxuLnNob3ctZm9yLXNyLFxcbi5zaG93LW9uLWZvY3VzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7IH1cXG5cXG4uc2hvdy1vbi1mb2N1czphY3RpdmUsIC5zaG93LW9uLWZvY3VzOmZvY3VzIHtcXG4gIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBjbGlwOiBhdXRvOyB9XFxuXFxuLnNob3ctZm9yLWxhbmRzY2FwZSxcXG4uaGlkZS1mb3ItcG9ydHJhaXQge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gICAgLnNob3ctZm9yLWxhbmRzY2FwZSxcXG4gICAgLmhpZGUtZm9yLXBvcnRyYWl0IHtcXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcXG4gICAgLnNob3ctZm9yLWxhbmRzY2FwZSxcXG4gICAgLmhpZGUtZm9yLXBvcnRyYWl0IHtcXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxcblxcbi5oaWRlLWZvci1sYW5kc2NhcGUsXFxuLnNob3ctZm9yLXBvcnRyYWl0IHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcXG4gICAgLmhpZGUtZm9yLWxhbmRzY2FwZSxcXG4gICAgLnNob3ctZm9yLXBvcnRyYWl0IHtcXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xcbiAgICAuaGlkZS1mb3ItbGFuZHNjYXBlLFxcbiAgICAuc2hvdy1mb3ItcG9ydHJhaXQge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH0gfVxcblxcbi5mbG9hdC1sZWZ0IHtcXG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7IH1cXG5cXG4uZmxvYXQtcmlnaHQge1xcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7IH1cXG5cXG4uZmxvYXQtY2VudGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG5cXG4uY2xlYXJmaXg6OmJlZm9yZSwgLmNsZWFyZml4OjphZnRlciB7XFxuICBjb250ZW50OiAnICc7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGZsZXgtYmFzaXM6IDA7XFxuICBvcmRlcjogMTsgfVxcblxcbi5jbGVhcmZpeDo6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vc2Fzcy1sb2FkZXIhLi9hcHAvc3R5bGVzL2FwcC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gMjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxyXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xyXG5cdFx0dmFyIG1lbW87XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdH07XHJcblx0fSxcclxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcclxuXHR9KSxcclxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xyXG5cdH0pLFxyXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxyXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxyXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW107XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcclxuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcclxuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xyXG5cdH1cclxuXHJcblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XHJcblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xyXG5cclxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgPGhlYWQ+LlxyXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XHJcblxyXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XHJcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcclxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xyXG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XHJcblx0XHR9XHJcblx0XHRpZihuZXdMaXN0KSB7XHJcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XHJcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XHJcblx0XHR9XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcclxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xyXG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcclxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XHJcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xyXG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XHJcblx0XHRpZihkb21TdHlsZSkge1xyXG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XHJcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xyXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcclxuXHR2YXIgc3R5bGVzID0gW107XHJcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xyXG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XHJcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xyXG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XHJcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xyXG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XHJcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XHJcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcclxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xyXG5cdH1cclxuXHRyZXR1cm4gc3R5bGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XHJcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xyXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xyXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XHJcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcclxuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XHJcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fVxyXG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xyXG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XHJcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcclxuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xyXG5cdGlmKGlkeCA+PSAwKSB7XHJcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcclxuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcclxuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XHJcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcblx0bGlua0VsZW1lbnQucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcclxuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xyXG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xyXG5cclxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcclxuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xyXG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XHJcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XHJcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcclxuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxyXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXHJcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcclxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcclxuXHRcdH07XHJcblx0fSBlbHNlIHtcclxuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcclxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xyXG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZShvYmopO1xyXG5cclxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XHJcblx0XHRpZihuZXdPYmopIHtcclxuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZW1vdmUoKTtcclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xyXG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcclxuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcclxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XHJcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xyXG5cclxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xyXG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2RlcztcclxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xyXG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcclxuXHR2YXIgY3NzID0gb2JqLmNzcztcclxuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XHJcblxyXG5cdGlmKG1lZGlhKSB7XHJcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXHJcblx0fVxyXG5cclxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xyXG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcclxuXHR9IGVsc2Uge1xyXG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xyXG5cdHZhciBjc3MgPSBvYmouY3NzO1xyXG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xyXG5cclxuXHRpZihzb3VyY2VNYXApIHtcclxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XHJcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XHJcblx0fVxyXG5cclxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcclxuXHJcblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XHJcblxyXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG5cclxuXHRpZihvbGRTcmMpXHJcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9