/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _PokePage = __webpack_require__(1);

	var _PokePage2 = _interopRequireDefault(_PokePage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _PokePage2.default({
	    id: 'app',
	    page: 0
	}).render(); //import Helpers from './utilites/helpers';

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _PokeList = __webpack_require__(2);

	var _PokeList2 = _interopRequireDefault(_PokeList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PokePage = function () {
	    function PokePage(params) {
	        _classCallCheck(this, PokePage);

	        this.params = params;
	        this.pokeList = new _PokeList2.default({ page: this.params.page });
	    }

	    _createClass(PokePage, [{
	        key: 'render',
	        value: function render() {
	            var _this = this;

	            document.getElementById(this.params.id).innerHTML = this.tmpl();

	            document.getElementById('more-poke').addEventListener('click', function (event) {
	                document.getElementById('more-poke').disabled = true;
	                _this.params.page++;
	                _this.pokeList.render({ page: _this.params.page });
	            });
	        }
	    }, {
	        key: 'tmpl',
	        value: function tmpl() {
	            return '\n            <div class=\'filter\' id=\'filter\'></div> \n            <div class=\'poke-wr\'>\n                <div class=\'poke-list\' id=\'poke-list\'>\n                    ' + this.pokeList.render() + '\n                </div>\n                <div class=\'poke-detail\' id=\'poke-detail\'></div>\n            </div>\n            <button class=\'more\' id=\'more-poke\' disabled>Load More</button>\n        ';
	        }
	    }]);

	    return PokePage;
	}();

	exports.default = PokePage;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ajax = __webpack_require__(3);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _TypeList = __webpack_require__(7);

	var _TypeList2 = _interopRequireDefault(_TypeList);

	var _PokeDetail = __webpack_require__(8);

	var _PokeDetail2 = _interopRequireDefault(_PokeDetail);

	var _loader = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PokeList = function (_PokeApi) {
	    _inherits(PokeList, _PokeApi);

	    function PokeList(params) {
	        _classCallCheck(this, PokeList);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PokeList).call(this));

	        _this.params = params;
	        _this.limit = 12;
	        _this.url = 'http://pokeapi.co/api/v1/pokemon/?limit=' + _this.limit + '&';
	        _this.pokeList = [];
	        _this.pokeTypeForFilter = null;
	        return _this;
	    }

	    _createClass(PokeList, [{
	        key: 'getData',
	        value: function getData() {
	            var _this2 = this;

	            if (this.params.page > 0) {
	                document.getElementById('more-poke').insertAdjacentHTML('beforeend', _loader.loader);
	            }
	            _get(Object.getPrototypeOf(PokeList.prototype), 'getList', this).call(this, this.url + '&offset=' + this.params.page * this.limit).then(function (val) {
	                _this2.pokeList = _this2.pokeList.concat(val.objects);
	                _this2.dataLoad(val);
	            }, function (val) {
	                console.log('ERROR!', val);
	            });
	        }
	    }, {
	        key: 'addEventShowDetail',
	        value: function addEventShowDetail() {
	            var p = Array.prototype.slice.call(document.getElementsByClassName("poke-list__item"));
	            p.map(function (el) {
	                el.addEventListener('click', function (event) {
	                    event.preventDefault();
	                    new _PokeDetail2.default({
	                        id: event.currentTarget.getAttribute('data-id'),
	                        count: event.currentTarget.getAttribute('data-key')
	                    }).render();
	                });
	            });
	        }
	    }, {
	        key: 'filterPoke',
	        value: function filterPoke(pokeTypeForFilter) {
	            var _this3 = this;

	            console.log(pokeTypeForFilter);
	            this.pokeTypeForFilter = pokeTypeForFilter;
	            var filteredPokeList = this.pokeList.filter(function (el) {
	                for (var i = 0; i < el.types.length; i++) {
	                    if (el.types[i].name == _this3.pokeTypeForFilter) {
	                        return true;
	                    }
	                }
	                return false;
	            });

	            return filteredPokeList;
	        }
	    }, {
	        key: 'addEventShowTypes',
	        value: function addEventShowTypes() {
	            var _this4 = this;

	            var types = Array.prototype.slice.call(document.querySelectorAll(".type-list__item"));

	            types.map(function (type) {
	                type.addEventListener('click', function (event) {

	                    event.stopImmediatePropagation();
	                    var pokeTypeForFilter = event.currentTarget.getAttribute('data-type');
	                    var filteredPokeList = _this4.filterPoke(pokeTypeForFilter);
	                    console.log(filteredPokeList);

	                    document.getElementById('poke-list').innerHTML = _this4.tmpl(filteredPokeList);
	                    var filterEl = document.getElementById('filter');
	                    filterEl.innerHTML = pokeTypeForFilter;
	                    filterEl.style.display = 'inline-block';
	                    _this4.addEventShowDetail();
	                    filterEl.addEventListener('click', function (el) {
	                        _this4.pokeTypeForFilter = null;
	                        document.getElementById('poke-list').innerHTML = _this4.tmpl(_this4.pokeList);
	                        el.target.style.display = 'none';
	                        _this4.addEventShowDetail();
	                        _this4.addEventShowTypes();
	                    });
	                });
	            });
	        }
	    }, {
	        key: 'dataLoad',
	        value: function dataLoad(val) {
	            if (this.pokeTypeForFilter != null) {
	                val.objects = this.filterPoke(this.pokeTypeForFilter);
	                document.getElementById('poke-list').innerHTML = this.tmpl(val.objects);
	                document.getElementById('more-poke').removeChild(document.getElementById('svg'));
	            } else {
	                if (this.params.page == 0) {
	                    document.getElementById('poke-list').innerHTML = this.tmpl(val.objects);
	                } else {
	                    document.getElementById('poke-list').insertAdjacentHTML('beforeend', this.tmpl(val.objects));
	                    document.getElementById('more-poke').removeChild(document.getElementById('svg'));
	                }
	            }
	            document.getElementById('more-poke').disabled = false;
	            this.addEventShowDetail();
	            this.addEventShowTypes();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var params = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	            this.params.page = params ? params.page : 0;
	            this.getData();
	            return _loader.loader;
	        }
	    }, {
	        key: 'tmpl',
	        value: function tmpl(data) {
	            var _this5 = this;

	            return '\n            ' + data.map(function (el, key) {
	                return '\n                <div class=\'poke-list__item\' data-key=\'' + (_this5.params.page * _this5.limit + key + 1) + '\' data-id=\'' + el.pkdx_id + '\'>\n                    <div class=\'poke-list__item__img\'>\n                        <img src=\'http://pokeapi.co/media/img/' + el.pkdx_id + '.png\' />\n                    </div>\n                    <h3 class=\'poke-list__item__title\'>' + el.name + '</h3>\n                    ' + new _TypeList2.default(el.types).render() + '\n                </div>\n            ';
	            }).join('') + '\n        ';
	        }
	    }]);

	    return PokeList;
	}(_ajax2.default);

	exports.default = PokeList;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _promisePolyfill = __webpack_require__(4);

	var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PokeApi = function () {
	    function PokeApi(params) {
	        _classCallCheck(this, PokeApi);

	        console.log('[PokeApi] Constructor');
	    }

	    _createClass(PokeApi, [{
	        key: 'getList',
	        value: function getList(url) {
	            console.log(url);
	            return new _promisePolyfill2.default(function (resolve, reject) {

	                var request = new XMLHttpRequest();
	                request.open('GET', url, true);
	                request.send();
	                request.onload = function () {
	                    if (this.status >= 200 && this.status < 400) {
	                        resolve(JSON.parse(this.response));
	                    } else {
	                        reject(this.status);
	                    }
	                };
	            });
	        }
	    }]);

	    return PokeApi;
	}();

	exports.default = PokeApi;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

	  // Store setTimeout reference so promise-polyfill will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var setTimeoutFunc = setTimeout;

	  function noop() {
	  }

	  // Use polyfill for setImmediate for performance gains
	  var asap = (typeof setImmediate === 'function' && setImmediate) ||
	    function (fn) {
	      setTimeoutFunc(fn, 1);
	    };

	  var onUnhandledRejection = function onUnhandledRejection(err) {
	    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	  };

	  // Polyfill for Function.prototype.bind
	  function bind(fn, thisArg) {
	    return function () {
	      fn.apply(thisArg, arguments);
	    };
	  }

	  var isArray = Array.isArray || function (value) {
	    return Object.prototype.toString.call(value) === '[object Array]';
	  };

	  function Promise(fn) {
	    if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
	    if (typeof fn !== 'function') throw new TypeError('not a function');
	    this._state = 0;
	    this._handled = false;
	    this._value = undefined;
	    this._deferreds = [];

	    doResolve(fn, this);
	  }

	  function handle(self, deferred) {
	    while (self._state === 3) {
	      self = self._value;
	    }
	    if (self._state === 0) {
	      self._deferreds.push(deferred);
	      return;
	    }
	    self._handled = true;
	    asap(function () {
	      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	      if (cb === null) {
	        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	        return;
	      }
	      var ret;
	      try {
	        ret = cb(self._value);
	      } catch (e) {
	        reject(deferred.promise, e);
	        return;
	      }
	      resolve(deferred.promise, ret);
	    });
	  }

	  function resolve(self, newValue) {
	    try {
	      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
	      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
	        var then = newValue.then;
	        if (newValue instanceof Promise) {
	          self._state = 3;
	          self._value = newValue;
	          finale(self);
	          return;
	        } else if (typeof then === 'function') {
	          doResolve(bind(then, newValue), self);
	          return;
	        }
	      }
	      self._state = 1;
	      self._value = newValue;
	      finale(self);
	    } catch (e) {
	      reject(self, e);
	    }
	  }

	  function reject(self, newValue) {
	    self._state = 2;
	    self._value = newValue;
	    finale(self);
	  }

	  function finale(self) {
	    if (self._state === 2 && self._deferreds.length === 0) {
	      setTimeout(function() {
	        if (!self._handled) {
	          onUnhandledRejection(self._value);
	        }
	      }, 1);
	    }
	    
	    for (var i = 0, len = self._deferreds.length; i < len; i++) {
	      handle(self, self._deferreds[i]);
	    }
	    self._deferreds = null;
	  }

	  function Handler(onFulfilled, onRejected, promise) {
	    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	    this.promise = promise;
	  }

	  /**
	   * Take a potentially misbehaving resolver function and make sure
	   * onFulfilled and onRejected are only called once.
	   *
	   * Makes no guarantees about asynchrony.
	   */
	  function doResolve(fn, self) {
	    var done = false;
	    try {
	      fn(function (value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      }, function (reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      });
	    } catch (ex) {
	      if (done) return;
	      done = true;
	      reject(self, ex);
	    }
	  }

	  Promise.prototype['catch'] = function (onRejected) {
	    return this.then(null, onRejected);
	  };

	  Promise.prototype.then = function (onFulfilled, onRejected) {
	    var prom = new Promise(noop);
	    handle(this, new Handler(onFulfilled, onRejected, prom));
	    return prom;
	  };

	  Promise.all = function () {
	    var args = Array.prototype.slice.call(arguments.length === 1 && isArray(arguments[0]) ? arguments[0] : arguments);

	    return new Promise(function (resolve, reject) {
	      if (args.length === 0) return resolve([]);
	      var remaining = args.length;

	      function res(i, val) {
	        try {
	          if (val && (typeof val === 'object' || typeof val === 'function')) {
	            var then = val.then;
	            if (typeof then === 'function') {
	              then.call(val, function (val) {
	                res(i, val);
	              }, reject);
	              return;
	            }
	          }
	          args[i] = val;
	          if (--remaining === 0) {
	            resolve(args);
	          }
	        } catch (ex) {
	          reject(ex);
	        }
	      }

	      for (var i = 0; i < args.length; i++) {
	        res(i, args[i]);
	      }
	    });
	  };

	  Promise.resolve = function (value) {
	    if (value && typeof value === 'object' && value.constructor === Promise) {
	      return value;
	    }

	    return new Promise(function (resolve) {
	      resolve(value);
	    });
	  };

	  Promise.reject = function (value) {
	    return new Promise(function (resolve, reject) {
	      reject(value);
	    });
	  };

	  Promise.race = function (values) {
	    return new Promise(function (resolve, reject) {
	      for (var i = 0, len = values.length; i < len; i++) {
	        values[i].then(resolve, reject);
	      }
	    });
	  };

	  /**
	   * Set the immediate function to execute callbacks
	   * @param fn {function} Function to execute
	   * @private
	   */
	  Promise._setImmediateFn = function _setImmediateFn(fn) {
	    asap = fn;
	  };
	  
	  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
	    onUnhandledRejection = fn;
	  };

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Promise;
	  } else if (!root.Promise) {
	    root.Promise = Promise;
	  }

	})(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).setImmediate))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(6).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };

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

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5).setImmediate, __webpack_require__(5).clearImmediate))

/***/ },
/* 6 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TypeList = function () {
	    function TypeList(params) {
	        _classCallCheck(this, TypeList);

	        this.types = params;
	    }

	    _createClass(TypeList, [{
	        key: 'render',
	        value: function render() {
	            return '\n            <div class=\'poke-list__item__types type-list\'>\n                ' + this.types.map(function (type) {
	                return '\n                    <span class=\'type-list__item\' data-type=\'' + type.name + '\'>' + type.name + '</span>\n                ';
	            }).join('') + '\n            </div>\n        ';
	        }
	    }]);

	    return TypeList;
	}();

	exports.default = TypeList;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ajax = __webpack_require__(3);

	var _ajax2 = _interopRequireDefault(_ajax);

	var _loader = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PokeDetail = function (_PokeApi) {
	    _inherits(PokeDetail, _PokeApi);

	    function PokeDetail(params) {
	        _classCallCheck(this, PokeDetail);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PokeDetail).call(this, params));

	        _this.params = params;
	        _this.url = 'http://pokeapi.co/api/v1/pokemon';
	        return _this;
	    }

	    _createClass(PokeDetail, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            document.getElementById('poke-detail').innerHTML = this.tmpl_loader();
	            _get(Object.getPrototypeOf(PokeDetail.prototype), 'getList', this).call(this, this.url + '/' + this.params.id + '/').then(function (val) {
	                document.getElementById('poke-detail').innerHTML = _this2.tmpl(val);
	                document.getElementById('close').addEventListener('click', _this2.clearDetail);
	            }, function (val) {
	                console.log('ERROR!', val);
	            });
	        }
	    }, {
	        key: 'clearDetail',
	        value: function clearDetail(event) {
	            document.getElementById('poke-detail').innerHTML = '';
	        }
	    }, {
	        key: 'type_list_tmpl',
	        value: function type_list_tmpl(types) {
	            return '\n            ' + types.map(function (type) {
	                return '\n                ' + type.name + '\n            ';
	            }) + '\n        ';
	        }
	    }, {
	        key: 'format_count',
	        value: function format_count(val) {
	            var count = val.toString();

	            switch (count.length) {
	                case 1:
	                    return '#00' + count;
	                case 2:
	                    return '#0' + count;
	                default:
	                    return '#' + count;
	            };
	        }
	    }, {
	        key: 'tmpl_loader',
	        value: function tmpl_loader() {
	            return '\n            <div class="poke-detail__item">\n                <div class=\'bg-cover-fix\'></div>\n                    <div class="poke-detail__item -fix">\n                    ' + _loader.loader + '\n                </div>\n            </div>\n        ';
	        }
	    }, {
	        key: 'tmpl',
	        value: function tmpl(poke) {
	            return '\n            <div class="poke-detail__item">\n                <div class=\'bg-cover-fix\'></div>\n\n                <div class="poke-detail__item -fix">\n                    <span class=\'close\' id=\'close\'>X</span>\n                    <div class="poke-detail__item__img">\n                        <img src="http://pokeapi.co/media/img/' + poke.pkdx_id + '.png" />\n                    </div>\n                    <h2 class="poke-detail__item__title">' + poke.name + ' ' + this.format_count(this.params.count) + '</h2>\n                    <div class="poke-detail__item__abilities abilities">\n                        <div class="abilities__type">Type:</div> <div class="abilities__value">' + this.type_list_tmpl(poke.types) + '</div>\n                        <div class="abilities__type">Attack:</div> <div class="abilities__value">' + poke.attack + '</div>\n                        <div class="abilities__type">Defence:</div> <div class="abilities__value">' + poke.defence + '</div>\n                        <div class="abilities__type">HP:</div> <div class="abilities__value">' + poke.hp + '</div>\n                        <div class="abilities__type">SP Attack:</div> <div class="abilities__value">' + poke.sp_atk + '</div>\n                        <div class="abilities__type">SP Defence:</div> <div class="abilities__value">' + poke.sp_def + '</div>\n                        <div class="abilities__type">Speed:</div> <div class="abilities__value">' + poke.speed + '</div>\n                        <div class="abilities__type">Weight:</div> <div class="abilities__value">' + poke.weight + '</div>\n                        <div class="abilities__type">Total moves:</div> <div class="abilities__value">' + poke.moves.length + '</div>\n                    </div>\n                </div>\n            </div>\n        ';
	        }
	    }]);

	    return PokeDetail;
	}(_ajax2.default);

	exports.default = PokeDetail;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var loader = exports.loader = "<svg id=\"svg\"  width='120px' height='120px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring-alt\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#fff\" fill=\"none\" stroke-width=\"10\" stroke-linecap=\"round\"></circle><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"#1a94d1\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"round\"><animate attributeName=\"stroke-dashoffset\" dur=\"2s\" repeatCount=\"indefinite\" from=\"0\" to=\"502\"></animate><animate attributeName=\"stroke-dasharray\" dur=\"2s\" repeatCount=\"indefinite\" values=\"150.6 100.4;1 250;150.6 100.4\"></animate></circle></svg>";

/***/ }
/******/ ]);