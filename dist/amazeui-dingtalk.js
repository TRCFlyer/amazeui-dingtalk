/** Amaze UI DingTalk v1.0.0-rc.1 | by Amaze UI Team
  * (c) 2016 AllMobilize, Inc., Licensed under MIT
  * 2016-11-19T20:57:34+0800
  */
  (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("react-addons-css-transition-group"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "react-addons-css-transition-group"], factory);
	else if(typeof exports === 'object')
		exports["AMUIDingTalk"] = factory(require("react"), require("react-dom"), require("react-addons-css-transition-group"));
	else
		root["AMUIDingTalk"] = factory(root["React"], root["ReactDOM"], root["React"]["addons"]["CSSTransitionGroup"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
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

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fallback = exports.SearchBar = exports.Gallery = exports.Checkbox = exports.Breadcrumb = exports.Avatar = exports.View = exports.Touchable = exports.Tabs = exports.TabBar = exports.Switch = exports.Carousel = exports.Notification = exports.NavBar = exports.Modal = exports.List = exports.Field = exports.Icon = exports.Card = exports.ButtonToolbar = exports.ButtonGroup = exports.Button = exports.Badge = exports.Group = exports.Col = exports.Grid = exports.Container = exports.VERSION = undefined;

	var _mixins = __webpack_require__(1);

	Object.keys(_mixins).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _mixins[key];
	    }
	  });
	});

	var _Container2 = __webpack_require__(14);

	var _Container3 = _interopRequireDefault(_Container2);

	var _Grid2 = __webpack_require__(16);

	var _Grid3 = _interopRequireDefault(_Grid2);

	var _Col2 = __webpack_require__(17);

	var _Col3 = _interopRequireDefault(_Col2);

	var _Group2 = __webpack_require__(18);

	var _Group3 = _interopRequireDefault(_Group2);

	var _Badge2 = __webpack_require__(19);

	var _Badge3 = _interopRequireDefault(_Badge2);

	var _Button2 = __webpack_require__(20);

	var _Button3 = _interopRequireDefault(_Button2);

	var _ButtonGroup2 = __webpack_require__(21);

	var _ButtonGroup3 = _interopRequireDefault(_ButtonGroup2);

	var _ButtonToolbar2 = __webpack_require__(22);

	var _ButtonToolbar3 = _interopRequireDefault(_ButtonToolbar2);

	var _Card2 = __webpack_require__(23);

	var _Card3 = _interopRequireDefault(_Card2);

	var _Icon2 = __webpack_require__(24);

	var _Icon3 = _interopRequireDefault(_Icon2);

	var _Field2 = __webpack_require__(25);

	var _Field3 = _interopRequireDefault(_Field2);

	var _List2 = __webpack_require__(26);

	var _List3 = _interopRequireDefault(_List2);

	var _Modal2 = __webpack_require__(29);

	var _Modal3 = _interopRequireDefault(_Modal2);

	var _NavBar2 = __webpack_require__(34);

	var _NavBar3 = _interopRequireDefault(_NavBar2);

	var _Notification2 = __webpack_require__(35);

	var _Notification3 = _interopRequireDefault(_Notification2);

	var _Carousel2 = __webpack_require__(36);

	var _Carousel3 = _interopRequireDefault(_Carousel2);

	var _Switch2 = __webpack_require__(27);

	var _Switch3 = _interopRequireDefault(_Switch2);

	var _TabBar2 = __webpack_require__(41);

	var _TabBar3 = _interopRequireDefault(_TabBar2);

	var _Tabs2 = __webpack_require__(42);

	var _Tabs3 = _interopRequireDefault(_Tabs2);

	var _Touchable2 = __webpack_require__(37);

	var _Touchable3 = _interopRequireDefault(_Touchable2);

	var _View2 = __webpack_require__(43);

	var _View3 = _interopRequireDefault(_View2);

	var _Avatar2 = __webpack_require__(44);

	var _Avatar3 = _interopRequireDefault(_Avatar2);

	var _Breadcrumb2 = __webpack_require__(46);

	var _Breadcrumb3 = _interopRequireDefault(_Breadcrumb2);

	var _Checkbox2 = __webpack_require__(28);

	var _Checkbox3 = _interopRequireDefault(_Checkbox2);

	var _Gallery2 = __webpack_require__(47);

	var _Gallery3 = _interopRequireDefault(_Gallery2);

	var _SearchBar2 = __webpack_require__(48);

	var _SearchBar3 = _interopRequireDefault(_SearchBar2);

	var _fallback2 = __webpack_require__(49);

	var _fallback3 = _interopRequireDefault(_fallback2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// @see http://jamesknelson.com/re-exporting-es6-modules/
	// @see http://exploringjs.com/es6/ch_modules.html#sec_all-exporting-styles

	var VERSION = exports.VERSION = '1.0.0-rc.1';

	// Layout
	exports.Container = _Container3.default;
	exports.Grid = _Grid3.default;
	exports.Col = _Col3.default;
	exports.Group = _Group3.default;

	// Components
	// export Accordion from './Accordion';

	exports.Badge = _Badge3.default;
	exports.Button = _Button3.default;
	exports.ButtonGroup = _ButtonGroup3.default;
	exports.ButtonToolbar = _ButtonToolbar3.default;
	exports.Card = _Card3.default;
	exports.Icon = _Icon3.default;
	exports.Field = _Field3.default;
	exports.List = _List3.default;
	// export Loader from './Loader';

	exports.Modal = _Modal3.default;
	exports.NavBar = _NavBar3.default;
	exports.Notification = _Notification3.default;
	// export OffCanvas from './OffCanvas';
	// export OffCanvasTrigger from './OffCanvasTrigger';
	// export Popover from './Popover';
	// export PopoverTrigger from './PopoverTrigger';

	exports.Carousel = _Carousel3.default;
	exports.Switch = _Switch3.default;
	exports.TabBar = _TabBar3.default;
	exports.Tabs = _Tabs3.default;
	exports.Touchable = _Touchable3.default;
	exports.View = _View3.default;
	exports.Avatar = _Avatar3.default;
	exports.Breadcrumb = _Breadcrumb3.default;
	exports.Checkbox = _Checkbox3.default;
	exports.Gallery = _Gallery3.default;
	exports.SearchBar = _SearchBar3.default;

	// Mixins


	// Compatibility fallback

	exports.fallback = _fallback3.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TouchableMixin = exports.OverlayMixin = exports.CollapseMixin = exports.ClassNameMixin = exports.BackdropMixin = undefined;

	var _BackdropMixin2 = __webpack_require__(2);

	var _BackdropMixin3 = _interopRequireDefault(_BackdropMixin2);

	var _ClassNameMixin2 = __webpack_require__(5);

	var _ClassNameMixin3 = _interopRequireDefault(_ClassNameMixin2);

	var _CollapseMixin2 = __webpack_require__(7);

	var _CollapseMixin3 = _interopRequireDefault(_CollapseMixin2);

	var _OverlayMixin2 = __webpack_require__(11);

	var _OverlayMixin3 = _interopRequireDefault(_OverlayMixin2);

	var _TouchableMixin2 = __webpack_require__(13);

	var _TouchableMixin3 = _interopRequireDefault(_TouchableMixin2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BackdropMixin = _BackdropMixin3.default;
	exports.ClassNameMixin = _ClassNameMixin3.default;
	exports.CollapseMixin = _CollapseMixin3.default;
	exports.OverlayMixin = _OverlayMixin3.default;
	exports.TouchableMixin = _TouchableMixin3.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	exports.default = {
	  renderBackdrop: function renderBackdrop(children) {
	    var _classSet;

	    var onClick = this.handleBackdropClick || null;
	    var classSet = (_classSet = {}, _defineProperty(_classSet, this.setClassNS('modal-backdrop'), true), _defineProperty(_classSet, this.setClassNS('modal-backdrop-out'), this.props.isClosing), _classSet);

	    return _react2.default.createElement(
	      'span',
	      null,
	      children,
	      _react2.default.createElement('div', {
	        onClick: onClick,
	        ref: 'backdrop',
	        className: (0, _classnames2.default)(classSet)
	      })
	    );
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(6);

	var namespace = _config.NAMESPACE ? _config.NAMESPACE + '-' : '';

	var ClassNameMixin = {
	  setClassNS: function setClassNS(classPrefix) {
	    var prefix = classPrefix || this.props.classPrefix || '';

	    return namespace + prefix;
	  },
	  getClassSet: function getClassSet(ignorePrefix) {
	    var classNames = {};
	    var _props = this.props,
	        amSize = _props.amSize,
	        amStyle = _props.amStyle,
	        hollow = _props.hollow,
	        radius = _props.radius,
	        rounded = _props.rounded,
	        active = _props.active,
	        selected = _props.selected,
	        disabled = _props.disabled,
	        inset = _props.inset;

	    // uses `.am-` as prefix if `classPrefix` is not defined

	    var prefix = namespace;

	    if (this.props.classPrefix) {
	      var classPrefix = this.setClassNS();

	      prefix = classPrefix + '-';

	      // don't return prefix if ignore flag set
	      !ignorePrefix && (classNames[classPrefix] = true);
	    }

	    if (amSize) {
	      classNames[prefix + amSize] = true;
	    }

	    if (amStyle) {
	      classNames[prefix + amStyle] = true;
	    }

	    if (hollow) {
	      classNames[prefix + 'hollow'] = true;
	    }

	    classNames[this.prefixClass('radius')] = radius;
	    classNames[this.prefixClass('rounded')] = rounded;

	    classNames[this.prefixClass('inset')] = inset;

	    // state className
	    // `selected` is an alias of active
	    classNames[_config.CLASSNAMES['active']] = active || selected;
	    classNames[_config.CLASSNAMES['disabled']] = disabled;

	    // shape
	    // classNames[constants.CLASSES.radius] = radius;
	    // classNames[constants.CLASSES.rounded] = rounded;

	    return classNames;
	  },
	  prefixClass: function prefixClass(subClass) {
	    return this.setClassNS() + '-' + subClass;
	  }
	};

	exports.default = ClassNameMixin;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAMESPACE = exports.NAMESPACE = null; // 'am'
	var CLASSNAMES = exports.CLASSNAMES = {
	  disabled: 'disabled',
	  active: 'active'
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
	 */

	var CollapseMixin = {
	  propTypes: {
	    defaultExpanded: _react2.default.PropTypes.bool,
	    expanded: _react2.default.PropTypes.bool
	  },

	  getInitialState: function getInitialState() {
	    var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;

	    return {
	      expanded: defaultExpanded,
	      collapsing: false
	    };
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

	    if (willExpanded === this.isExpanded()) {
	      return;
	    }

	    // if the expanded state is being toggled, ensure node has a dimension value
	    // this is needed for the animation to work and needs to be set before
	    // the collapsing class is applied (after collapsing is applied the in class
	    // is removed and the node's dimension will be wrong)

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = '0';

	    if (!willExpanded) {
	      // get height
	      value = this.getCollapsibleDimensionValue();
	    }

	    node.style[dimension] = value + 'px';

	    this._afterWillUpdate();
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // check if expanded is being toggled; if so, set collapsing
	    this._checkToggleCollapsing(prevProps, prevState);

	    // check if collapsing was turned on; if so, start animation
	    this._checkStartAnimation();
	  },


	  // helps enable test stubs
	  _afterWillUpdate: function _afterWillUpdate() {},
	  _checkStartAnimation: function _checkStartAnimation() {
	    if (!this.state.collapsing) {
	      return;
	    }

	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();
	    var value = this.getCollapsibleDimensionValue();

	    // setting the dimension here starts the transition animation
	    var result;

	    if (this.isExpanded()) {
	      result = value + 'px';
	    } else {
	      result = '0px';
	    }
	    node.style[dimension] = result;
	  },
	  _checkToggleCollapsing: function _checkToggleCollapsing(prevProps, prevState) {
	    var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
	    var isExpanded = this.isExpanded();

	    if (wasExpanded !== isExpanded) {
	      if (wasExpanded) {
	        this._handleCollapse();
	      } else {
	        this._handleExpand();
	      }
	    }
	  },
	  _handleExpand: function _handleExpand() {
	    var node = this.getCollapsibleDOMNode();
	    var dimension = this.dimension();

	    var complete = function () {
	      this._removeEndEventListener(node, complete);
	      // remove dimension value - this ensures the collapsible item can grow
	      // in dimension after initial display (such as an image loading)
	      node.style[dimension] = '';
	      this.setState({
	        collapsing: false
	      });
	    }.bind(this);

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },
	  _handleCollapse: function _handleCollapse() {
	    var node = this.getCollapsibleDOMNode();
	    var _this = this;
	    var complete = function complete() {
	      _this._removeEndEventListener(node, complete);
	      _this.setState({
	        collapsing: false
	      });
	    };

	    this._addEndEventListener(node, complete);

	    this.setState({
	      collapsing: true
	    });
	  },


	  // helps enable test stubs
	  _addEndEventListener: function _addEndEventListener(node, complete) {
	    _TransitionEvents2.default.on(node, complete);
	  },


	  // helps enable test stubs
	  _removeEndEventListener: function _removeEndEventListener(node, complete) {
	    _TransitionEvents2.default.off(node, complete);
	  },
	  dimension: function dimension() {
	    return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
	  },
	  isExpanded: function isExpanded() {
	    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
	  },
	  getCollapsibleClassSet: function getCollapsibleClassSet(className) {
	    var classSet = {};

	    if (typeof className === 'string') {
	      className.split(' ').forEach(function (subClass) {
	        if (subClass) {
	          classSet[subClass] = true;
	        }
	      });
	    }

	    classSet[this.setClassNS('collapsing')] = this.state.collapsing;
	    classSet[this.setClassNS('collapse')] = !this.state.collapsing;
	    classSet[this.setClassNS('in')] = this.isExpanded() && !this.state.collapsing;

	    return classSet;
	  }
	};

	exports.default = CollapseMixin;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CSSCore = __webpack_require__(9);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _exenv = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * EVENT_NAME_MAP is used to determine which event fired when a
	 * transition/animation ends, based on the style property used to
	 * define that event.
	 */
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * modified version of:
	 * https://github.com/facebook/react/blob/0.13-stable/src/addons/transitions/ReactTransitionEvents.js
	 */

	var EVENT_NAME_MAP = {
	  transitionend: {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'mozTransitionEnd',
	    'OTransition': 'oTransitionEnd',
	    'msTransition': 'MSTransitionEnd'
	  },

	  animationend: {
	    'animation': 'animationend',
	    'WebkitAnimation': 'webkitAnimationEnd',
	    'MozAnimation': 'mozAnimationEnd',
	    'OAnimation': 'oAnimationEnd',
	    'msAnimation': 'MSAnimationEnd'
	  }
	};

	var endEvents = [];
	var support = {};

	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;

	  // On some platforms, in particular some releases of Android 4.x,
	  // the un-prefixed "animation" and "transition" properties are defined on the
	  // style object but the events that fire will still be prefixed, so we need
	  // to check if the un-prefixed events are useable, and if not remove them
	  // from the map
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }

	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }

	  for (var baseEventName in EVENT_NAME_MAP) {
	    var baseEvents = EVENT_NAME_MAP[baseEventName];
	    support[baseEventName] = false;

	    for (var styleName in baseEvents) {
	      if (styleName in style) {
	        support[baseEventName] = baseEvents[styleName];
	        endEvents.push(baseEvents[styleName]);
	        break;
	      }
	    }
	  }
	}

	if (_exenv.canUseDOM) {
	  detectEvents();
	}

	if (support.animationend) {
	  _CSSCore2.default.addClass(document.documentElement, 'cssanimations');
	}

	// We use the raw {add|remove}EventListener() call because EventListener
	// does not know how to remove event listeners and we really should
	// clean up. Also, these events are not triggered in older browsers
	// so we should be A-OK here.

	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}

	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}

	var TransitionEvents = {
	  on: function on(node, eventListener) {
	    if (endEvents.length === 0) {
	      // If CSS transitions are not supported, trigger an "end animation"
	      // event immediately.
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	  off: function off(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  },


	  support: support
	};

	exports.default = TransitionEvents;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @via https://github.com/facebook/react/blob/master/src/vendor/core/CSSCore.js
	 */

	var CSSCore = {

	  /**
	   * Adds the class passed in to the element if it doesn't already have it.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   * @see http://caniuse.com/#feat=classlist
	   */
	  addClass: function addClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.add(className);
	      } else if (!CSSCore.hasClass(element, className)) {
	        element.className = element.className + ' ' + className;
	      }
	    }
	    return element;
	  },


	  /**
	   * Removes the class passed in from the element
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {DOMElement} the element passed in
	   */
	  removeClass: function removeClass(element, className) {
	    if (className) {
	      if (element.classList) {
	        element.classList.remove(className);
	      } else if (CSSCore.hasClass(element, className)) {
	        element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ') // multiple spaces to one
	        .replace(/^\s*|\s*$/g, ''); // trim the ends
	      }
	    }
	    return element;
	  },


	  /**
	   * Helper to add or remove a class from an element based on a condition.
	   *
	   * @param {DOMElement} element the element to set the class on
	   * @param {string} className the CSS className
	   * @param {*} bool condition to whether to add or remove the class
	   * @return {DOMElement} the element passed in
	   */
	  conditionClass: function conditionClass(element, className, bool) {
	    return (bool ? CSSCore.addClass : CSSCore.removeClass)(element, className);
	  },


	  /**
	   * Tests whether the element has the class specified.
	   *
	   * @param {DOMNode|DOMWindow} element the element to set the class on
	   * @param {string} className the CSS className
	   * @return {boolean} true if the element has the class, false if not
	   */
	  hasClass: function hasClass(element, className) {
	    if (element.classList) {
	      return !!className && element.classList.contains(className);
	    }
	    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
	  },
	  toggleClass: function toggleClass(element, className) {
	    return CSSCore.hasClass(element, className) ? CSSCore.removeClass(element, className) : CSSCore.addClass(element, className);
	  }
	};

	exports.default = CSSCore;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @licence https://github.com/JedWatson/exenv
	 */

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	var ExecutionEnvironment = {
	  canUseDOM: canUseDOM,
	  canUseWorkers: typeof Worker !== 'undefined',
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	  canUseViewport: canUseDOM && !!window.screen
	};

	exports.default = ExecutionEnvironment;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Overlay Mixin
	 *
	 * @desc `overlay` is something like Popover, OffCavans, etc.
	 */

	exports.default = {
	  propTypes: {
	    container: _react2.default.PropTypes.node
	  },

	  componentDidMount: function componentDidMount() {
	    this._renderOverlay();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this._renderOverlay();
	  },


	  // Remove Overlay related DOM node
	  componentWillUnmount: function componentWillUnmount() {
	    this._unmountOverlay();

	    if (this._node) {
	      this.getContainerDOMNode().removeChild(this._node);
	      this._node = null;
	    }
	  },


	  // Create Overlay wrapper
	  _createPortal: function _createPortal() {
	    this._node = document.createElement('div');
	    this._node.className = '__overlay-portal';
	    this.getContainerDOMNode().appendChild(this._node);
	  },


	  // Render Overlay to wrapper
	  _renderOverlay: function _renderOverlay() {
	    if (!this._node) {
	      this._createPortal();
	    }

	    var overlay = this.renderOverlay();

	    if (overlay !== null) {
	      this._overlayInstance = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, overlay, this._node);
	    } else {
	      // Unmount if the component is null for transitions to null
	      this._unmountOverlay();
	    }
	  },


	  // Remove a mounted Overlay from wrapper
	  _unmountOverlay: function _unmountOverlay() {
	    (0, _reactDom.unmountComponentAtNode)(this._node);
	    this._overlayInstance = null;
	  },
	  getOverlayDOMNode: function getOverlayDOMNode() {
	    if (!this.isMounted()) {
	      throw new Error('getOverlayDOMNode(): A component must be mounted to\n        have a DOM node.');
	    }

	    if (this._overlayInstance) {
	      // 包含 backdrop 时通过 refer 返回 overlay DOM 节点
	      return (0, _reactDom.findDOMNode)(this._overlayInstance.refs && this._overlayInstance.refs.overlay || this._overlayInstance);
	    }

	    return null;
	  },
	  getContainerDOMNode: function getContainerDOMNode() {
	    return (0, _reactDom.findDOMNode)(this.props.container) || document.body;
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TouchableMixin = {
	  propTypes: {
	    moveThreshold: _react.PropTypes.number,
	    tapDelay: _react.PropTypes.number,
	    pressDelay: _react.PropTypes.number,
	    preventDefault: _react.PropTypes.bool,
	    stopPropagation: _react.PropTypes.bool,

	    onSwipe: _react.PropTypes.func,
	    onSwipeLeft: _react.PropTypes.func,
	    onSwipeUp: _react.PropTypes.func,
	    onSwipeRight: _react.PropTypes.func,
	    onSwipeDown: _react.PropTypes.func,
	    onTap: _react.PropTypes.func,
	    onSingleTap: _react.PropTypes.func,
	    onDoubleTap: _react.PropTypes.func,
	    onPress: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      moveThreshold: 30,
	      tapDelay: 250,
	      pressDelay: 750,
	      preventDefault: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      startTouch: null,
	      endTouch: null,
	      touch: {},
	      deltaX: 0,
	      deltaY: 0
	    };
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    this._cancelAll();
	  },
	  handleTouchStart: function handleTouchStart(e) {
	    // console.log('handle touchstart');
	    this.processEvent(e);

	    if (!e.touches) {
	      return;
	    }

	    var touch = this.state.touch;
	    var startTouch = e.touches[0];

	    if (e.touches.length === 1 && touch.x2) {
	      // Clear out touch movement data if we have it sticking around
	      // This can occur if touchcancel doesn't fire due to preventDefault, etc.
	      touch.x2 = undefined;
	      touch.y2 = undefined;
	    }

	    var now = Date.now();
	    var delta = now - (touch.last || now);

	    this._touchTimeout && clearTimeout(this._touchTimeout);

	    touch.x1 = startTouch.pageX;
	    touch.y1 = startTouch.pageY;

	    // if touchstart interval less than 250, handle as doubleTap
	    if (delta > 0 && delta <= this.props.tapDelay) {
	      touch.isDoubleTap = true;
	    }

	    // record last touch start time
	    touch.last = now;

	    // handle as `press` after 750ms
	    this._pressTimeout = setTimeout(this._handlePress, this.props.pressDelay);

	    this.setState({
	      startTouch: startTouch,
	      touch: touch
	    });
	  },
	  handleTouchMove: function handleTouchMove(e) {
	    // console.log('touch move');
	    this.processEvent(e);

	    var endTouch = e.touches[0];
	    var _state = this.state,
	        touch = _state.touch,
	        deltaX = _state.deltaX,
	        deltaY = _state.deltaY;


	    this._cancelPress();

	    touch.x2 = endTouch.pageX;
	    touch.y2 = endTouch.pageY;

	    // finger moving distance
	    deltaX += Math.abs(touch.x1 - touch.x2);
	    deltaY += Math.abs(touch.y1 - touch.y2);

	    this.setState({
	      deltaX: deltaX,
	      deltaY: deltaY,
	      touch: touch,
	      endTouch: endTouch
	    });
	  },
	  handleTouchEnd: function handleTouchEnd(e) {
	    var _this = this;

	    // console.log('touch end..');
	    this.processEvent(e);

	    this._cancelPress();

	    var _props = this.props,
	        tapDelay = _props.tapDelay,
	        moveThreshold = _props.moveThreshold;
	    var _state2 = this.state,
	        touch = _state2.touch,
	        startTouch = _state2.startTouch,
	        endTouch = _state2.endTouch,
	        deltaX = _state2.deltaX,
	        deltaY = _state2.deltaY;

	    var event = {
	      touch: touch,
	      startTouch: startTouch,
	      endTouch: endTouch,
	      preventDefault: function preventDefault() {}
	    };

	    // handle as swipe event
	    if (touch.x2 && Math.abs(touch.x1 - touch.x2) > moveThreshold || touch.y2 && Math.abs(touch.y1 - touch.y2) > moveThreshold) {

	      event.type = 'swipe';

	      this._swipeTimeout = setTimeout(function () {
	        _this._handleEvent(event);

	        event.type += _this._getSwipeDirection();
	        _this._handleEvent(event);
	        _this._resetTouch();
	      }, 0);
	    }
	    // normal tap
	    else if ('last' in touch) {
	        // don't fire tap when delta position changed by more than 30 pixels,
	        // for instance when moving to a point and back to origin
	        if (deltaX < moveThreshold && deltaY < moveThreshold) {
	          // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	          // ('tap' fires before 'scroll')
	          this._tapTimeout = setTimeout(function () {
	            // trigger universal 'tap' with the option to cancelTouch()
	            // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	            event.type = 'tap';
	            // event.cancelTouch = cancelAll;
	            _this._handleEvent(event);

	            // trigger double tap immediately
	            if (touch.isDoubleTap) {
	              event.type = 'doubleTap';
	              _this._handleEvent(event);
	              _this._resetTouch();
	            }
	            // trigger single tap after 250ms of inactivity
	            else {
	                _this._touchTimeout = setTimeout(function () {
	                  _this._touchTimeout = null;
	                  event.type = 'singleTap';
	                  _this._handleEvent(event);
	                  _this._resetTouch();
	                }, tapDelay);
	              }
	          }, 0);
	        } else {
	          this._resetTouch();
	        }
	      }
	  },
	  handleTouchCancel: function handleTouchCancel() {
	    this._cancelAll();
	  },
	  processEvent: function processEvent(e) {
	    this.props.preventDefault && e.preventDefault();
	    this.props.stopPropagation && e.stopPropagation();
	  },
	  _handlePress: function _handlePress() {
	    this._pressTimeout = null;
	    if (this.state.touch.last) {
	      this.props.onPress && this.props.onPress();
	      this._resetTouch();
	    }
	  },
	  _cancelPress: function _cancelPress() {
	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._pressTimeout = null;
	  },
	  _cancelAll: function _cancelAll() {
	    if (this._touchTimeout) {
	      clearTimeout(this._touchTimeout);
	    }

	    if (this._tapTimeout) {
	      clearTimeout(this._tapTimeout);
	    }

	    if (this._swipeTimeout) {
	      clearTimeout(this._swipeTimeout);
	    }

	    if (this._pressTimeout) {
	      clearTimeout(this._pressTimeout);
	    }

	    this._touchTimeout = this._tapTimeout = this._swipeTimeout = this._pressTimeout = null;
	    this._resetTouch();
	  },
	  _getSwipeDirection: function _getSwipeDirection() {
	    var _state$touch = this.state.touch,
	        x1 = _state$touch.x1,
	        x2 = _state$touch.x2,
	        y1 = _state$touch.y1,
	        y2 = _state$touch.y2;

	    // 水平方向：水平距离大于等于垂直距离
	    // 垂直方向：

	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
	  },
	  _resetTouch: function _resetTouch() {
	    this.setState(this.getInitialState());
	  },
	  _getEventMethodName: function _getEventMethodName(type) {
	    return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
	  },
	  _handleEvent: function _handleEvent(event) {
	    var method = this._getEventMethodName(event.type);
	    this.props[method] && this.props[method](event);
	  },
	  getTouchHandlers: function getTouchHandlers() {
	    return {
	      onTouchStart: this.handleTouchStart,
	      onTouchEnd: this.handleTouchEnd,
	      onTouchCancel: this.handleTouchCancel,
	      onTouchMove: this.handleTouchMove
	    };
	  }
	};

	exports.default = TouchableMixin;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(15);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // @see https://github.com/JedWatson/react-container
	// @license MIT Copyright (c) 2015 Jed Watson

	function hasChildrenWithVerticalFill(children) {
	  var result = false;

	  _react2.default.Children.forEach(children, function (child) {
	    if (result) {
	      return; // early-exit
	    }

	    if (!child) {
	      return;
	    }

	    if (!child.type) {
	      return;
	    }

	    result = !!child.type.shouldFillVerticalSpace;
	  });

	  return result;
	}

	function initScrollable(defaultPos) {
	  if (!defaultPos) {
	    defaultPos = {};
	  }

	  var pos = void 0;
	  var scrollable = {
	    reset: function reset() {
	      pos = { left: defaultPos.left || 0, top: defaultPos.top || 0 };
	    },
	    getPos: function getPos() {
	      return { left: pos.left, top: pos.top };
	    },
	    mount: function mount(element) {
	      var node = _react2.default.findDOMNode(element);
	      node.scrollLeft = pos.left;
	      node.scrollTop = pos.top;
	    },
	    unmount: function unmount(element) {
	      var node = _react2.default.findDOMNode(element);
	      pos.left = node.scrollLeft;
	      pos.top = node.scrollTop;
	    }
	  };

	  scrollable.reset();

	  return scrollable;
	}

	var TRANSITION_TIMEOUT = 500;

	var Container = _react2.default.createClass({
	  displayName: 'Container',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.node,
	    align: _react.PropTypes.oneOf(['end', 'center', 'start']),
	    direction: _react.PropTypes.oneOf(['column', 'row']),
	    fill: _react.PropTypes.bool,
	    grow: _react.PropTypes.bool,
	    justify: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['end', 'center', 'start'])]),
	    scrollable: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
	    transition: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'container',
	      component: 'div'
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.scrollable && this.props.scrollable.mount) {
	      this.props.scrollable.mount(this);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.props.scrollable && this.props.scrollable.unmount) {
	      this.props.scrollable.unmount(this);
	    }
	  },
	  render: function render() {
	    var _cx;

	    var _props = this.props,
	        className = _props.className,
	        Component = _props.component,
	        children = _props.children,
	        direction = _props.direction,
	        fill = _props.fill,
	        align = _props.align,
	        justify = _props.justify,
	        scrollable = _props.scrollable,
	        transition = _props.transition,
	        props = _objectWithoutProperties(_props, ['className', 'component', 'children', 'direction', 'fill', 'align', 'justify', 'scrollable', 'transition']);

	    var classSet = this.getClassSet();

	    delete props.classPrefix;

	    // As view transition container
	    if (transition) {
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        _extends({
	          component: 'div',
	          className: (0, _classnames2.default)(this.setClassNS('views'), className),
	          transitionName: this.setClassNS('view-transition-' + transition),
	          transitionEnterTimeout: TRANSITION_TIMEOUT,
	          transitionLeaveTimeout: TRANSITION_TIMEOUT
	        }, props),
	        children
	      );
	    }

	    if (!direction) {
	      if (hasChildrenWithVerticalFill(children)) {
	        direction = 'column';
	      }
	    }

	    if (direction === 'column' || scrollable) {
	      fill = true;
	    }

	    if (direction === 'column' && align === 'top') {
	      align = 'start';
	    }

	    if (direction === 'column' && align === 'bottom') {
	      align = 'end';
	    }

	    if (direction === 'row' && align === 'left') {
	      align = 'start';
	    }

	    if (direction === 'row' && align === 'right') {
	      align = 'end';
	    }

	    var classes = (0, _classnames2.default)(classSet, className, (_cx = {}, _defineProperty(_cx, this.prefixClass('fill'), fill), _defineProperty(_cx, this.prefixClass('column'), direction === 'column'), _defineProperty(_cx, this.prefixClass('row'), direction === 'row'), _defineProperty(_cx, this.prefixClass('align-center'), align === 'center'), _defineProperty(_cx, this.prefixClass('align-start'), align === 'start'), _defineProperty(_cx, this.prefixClass('align-end'), align === 'end'), _defineProperty(_cx, this.prefixClass('justify-center'), justify === 'center'), _defineProperty(_cx, this.prefixClass('justify-start'), justify === 'start'), _defineProperty(_cx, this.prefixClass('justify-end'), justify === 'end'), _defineProperty(_cx, this.prefixClass('justified'), justify === true), _defineProperty(_cx, this.prefixClass('scrollable'), scrollable), _cx));

	    return _react2.default.createElement(
	      Component,
	      _extends({
	        className: classes
	      }, props),
	      children
	    );
	  }
	});

	Container.initScrollable = initScrollable;

	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Grid = _react2.default.createClass({
	  displayName: 'Grid',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    collapse: _react.PropTypes.bool,
	    avg: _react.PropTypes.number,
	    smAvg: _react.PropTypes.number,
	    mdAvg: _react.PropTypes.number,
	    lgAvg: _react.PropTypes.number,
	    align: _react.PropTypes.oneOf(['right', 'center', 'between', 'around']),
	    wrap: _react.PropTypes.oneOf(['wrap', 'wrap-reverse']),
	    bordered: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'g',
	      component: 'div'
	    };
	  },


	  render: function render() {
	    var _this = this;

	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        collapse = _props.collapse,
	        bordered = _props.bordered,
	        avg = _props.avg,
	        align = _props.align,
	        wrap = _props.wrap,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'collapse', 'bordered', 'avg', 'align', 'wrap']);

	    delete props.classPrefix;

	    // .g-collapse
	    classSet[this.prefixClass('collapse')] = collapse;

	    // .g-bordered
	    classSet[this.prefixClass('bordered')] = bordered;

	    // .g-wrap
	    classSet[this.prefixClass(wrap)] = wrap;

	    if (avg) {
	      classSet[this.prefixClass('avg-' + avg)] = true;
	    }

	    ['sm', 'md', 'lg'].forEach(function (bp) {
	      var bpAvg = props[bp + 'Avg'];

	      if (bpAvg) {
	        classSet[_this.prefixClass('avg-' + bp + '-' + bpAvg)] = true;
	      }

	      delete props[bp + 'Avg'];
	    });

	    if (align) {
	      classSet[this.prefixClass(align)] = true;
	    }

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Grid;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Col = _react2.default.createClass({
	  displayName: 'Col',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    cols: _react.PropTypes.number,
	    smCols: _react.PropTypes.number,
	    mdCols: _react.PropTypes.number,
	    lgCols: _react.PropTypes.number,
	    offset: _react.PropTypes.number,
	    smOffset: _react.PropTypes.number,
	    mdOffset: _react.PropTypes.number,
	    lgOffset: _react.PropTypes.number,
	    shrink: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'col',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var _this = this;

	    var _props = this.props,
	        Component = _props.component,
	        cols = _props.cols,
	        offset = _props.offset,
	        shrink = _props.shrink,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['component', 'cols', 'offset', 'shrink', 'className']);

	    var classSet = this.getClassSet();

	    delete props.classPrefix;

	    if (cols) {
	      classSet[this.prefixClass(cols)] = true;
	    }

	    if (offset) {
	      classSet[this.prefixClass('offset-' + offset)] = true;
	    }

	    // responsive classNames
	    ['sm', 'md', 'lg'].forEach(function (bp) {
	      var colsProp = bp + 'Cols';
	      var offsetProp = bp + 'Offset';
	      var bpCols = props[colsProp];
	      var bpOffset = props[offsetProp];

	      if (bpCols) {
	        classSet[_this.prefixClass(bp + '-' + bpCols)] = true;
	      }

	      if (bpOffset) {
	        classSet[_this.prefixClass(bp + '-offset-' + bpOffset)] = true;
	      }

	      delete props[colsProp];
	      delete props[offsetProp];
	    });

	    classSet[this.prefixClass('shrink')] = shrink;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Col;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Group = _react2.default.createClass({
	  displayName: 'Group',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    header: _react.PropTypes.node,
	    footer: _react.PropTypes.node,
	    noPadded: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'group',
	      component: 'div'
	    };
	  },
	  renderAddon: function renderAddon(role) {
	    role = role || 'header';
	    return this.props[role] ? _react2.default.createElement(role, {
	      className: this.prefixClass(role)
	    }, this.props[role]) : null;
	  },
	  render: function render() {
	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        noPadded = _props.noPadded,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'noPadded']);

	    var classSet = this.getClassSet();

	    delete props.classPrefix;
	    delete props.header;
	    delete props.footer;

	    classSet[this.prefixClass('no-padded')] = noPadded;

	    var bodyClasses = _defineProperty({}, this.prefixClass('body'), true);

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      this.renderAddon('header'),
	      _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)(bodyClasses) },
	        this.props.children
	      ),
	      this.renderAddon('footer')
	    );
	  }
	});

	exports.default = Group;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Badge = _react2.default.createClass({
	  displayName: 'Badge',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    href: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    // radius: PropTypes.bool,
	    rounded: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'badge',
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        href = _props.href,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'href']);

	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.rounded;

	    Component = href ? 'a' : Component;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Badge;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Button = _react2.default.createClass({
	  displayName: 'Button',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node,
	    href: _react.PropTypes.string,
	    target: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    amSize: _react.PropTypes.string,
	    hollow: _react.PropTypes.bool,
	    // no horizontal borders, only working if `hollow` set
	    noHb: _react.PropTypes.bool,
	    block: _react.PropTypes.bool,
	    radius: _react.PropTypes.bool,
	    rounded: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn'
	    };
	  },
	  removeUnknownProp: function removeUnknownProp(props) {
	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.amSize;
	    delete props.hollow;
	    delete props.block;
	    delete props.active;
	    delete props.radius;
	    delete props.rounded;
	    delete props.noHb;

	    return props;
	  },
	  renderAnchor: function renderAnchor(classes) {
	    var _props = this.props,
	        href = _props.href,
	        Component = _props.component,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['href', 'component', 'children']);

	    Component = Component || 'a';

	    href = href || '#';

	    return _react2.default.createElement(
	      Component,
	      _extends({}, this.removeUnknownProp(props), {
	        href: href,
	        className: classes,
	        role: 'button'
	      }),
	      children
	    );
	  },
	  renderButton: function renderButton(classes) {
	    var _props2 = this.props,
	        Component = _props2.component,
	        children = _props2.children,
	        props = _objectWithoutProperties(_props2, ['component', 'children']);

	    Component = Component || 'button';

	    return _react2.default.createElement(
	      Component,
	      _extends({}, this.removeUnknownProp(props), {
	        className: classes
	      }),
	      children
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();
	    var _props3 = this.props,
	        href = _props3.href,
	        target = _props3.target,
	        block = _props3.block,
	        hollow = _props3.hollow,
	        noHb = _props3.noHb,
	        className = _props3.className;

	    var renderType = href || target ? 'renderAnchor' : 'renderButton';

	    // block button
	    classSet[this.prefixClass('block')] = block;

	    if (hollow && noHb) {
	      classSet[this.prefixClass('no-hb')] = true;
	    }

	    return this[renderType]((0, _classnames2.default)(classSet, className));
	  }
	});

	exports.default = Button;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ButtonGroup = _react2.default.createClass({
	  displayName: 'ButtonGroup',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    amStyle: _react.PropTypes.string,
	    amSize: _react.PropTypes.string,
	    hollow: _react.PropTypes.bool,
	    justify: _react.PropTypes.bool,
	    stacked: _react.PropTypes.bool,
	    radius: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-group'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        amStyle = _props.amStyle,
	        amSize = _props.amSize,
	        hollow = _props.hollow,
	        stacked = _props.stacked,
	        justify = _props.justify,
	        props = _objectWithoutProperties(_props, ['className', 'amStyle', 'amSize', 'hollow', 'stacked', 'justify']);

	    delete props.classPrefix;
	    delete props.radius;

	    classSet[this.prefixClass('stacked')] = stacked;
	    classSet[this.prefixClass('justify')] = justify;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      _react2.default.Children.map(this.props.children, function (child, i) {
	        return (0, _react.cloneElement)(child, _extends({
	          amStyle: amStyle,
	          amSize: amSize,
	          hollow: hollow
	        }, child.props));
	      })
	    );
	  }
	});

	exports.default = ButtonGroup;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var ButtonToolbar = _react2.default.createClass({
	  displayName: 'ButtonToolbar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'btn-toolbar'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['className', 'children']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      children
	    );
	  }
	});

	exports.default = ButtonToolbar;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Card = _react2.default.createClass({
	  displayName: 'Card',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string,
	    header: _react.PropTypes.node,
	    footer: _react.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card'
	    };
	  },
	  renderItem: function renderItem(element, role) {
	    if (!element) {
	      return null;
	    }

	    return element.type && element.type === Card.Child ? element : _react2.default.createElement(
	      Card.Child,
	      { role: role },
	      element
	    );
	  },
	  renderTitle: function renderTitle(title) {
	    return _react2.default.createElement(
	      'h2',
	      { className: this.prefixClass('title') },
	      title
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        title = _props.title,
	        header = _props.header,
	        footer = _props.footer,
	        props = _objectWithoutProperties(_props, ['children', 'className', 'title', 'header', 'footer']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      title ? this.renderItem(this.renderTitle(title)) : this.renderItem(header),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('body') },
	        children
	      ),
	      this.renderItem(footer, 'footer')
	    );
	  }
	});

	var CardChild = _react2.default.createClass({
	  displayName: 'CardChild',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    role: _react.PropTypes.oneOf(['header', 'footer']),
	    cover: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'card',
	      role: 'header'
	    };
	  },
	  render: function render() {
	    var _classSet;

	    var _props2 = this.props,
	        role = _props2.role,
	        className = _props2.className,
	        cover = _props2.cover,
	        props = _objectWithoutProperties(_props2, ['role', 'className', 'cover']);

	    var classSet = (_classSet = {}, _defineProperty(_classSet, this.prefixClass(role), true), _defineProperty(_classSet, this.prefixClass('cover'), cover), _classSet);
	    var style = null;

	    if (cover) {
	      style = {
	        backgroundImage: 'url(' + cover + ')'
	      };
	    }

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet),
	        role: 'card-' + role,
	        style: style
	      }),
	      this.props.children
	    );
	  }
	});

	Card.Child = CardChild;

	exports.default = Card;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Icon = _react2.default.createClass({
	  displayName: 'Icon',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    name: _react.PropTypes.string.isRequired,
	    href: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'icon',
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        name = _props.name,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'name']);

	    delete props.classPrefix;

	    Component = props.href ? 'a' : Component;

	    // icon-[iconName]
	    classSet[this.prefixClass(name)] = true;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = Icon;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Button = __webpack_require__(20);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Field = _react2.default.createClass({
	  displayName: 'Field',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    type: _react.PropTypes.string,
	    label: _react.PropTypes.node,
	    btnBefore: _react.PropTypes.node,
	    btnAfter: _react.PropTypes.node,
	    labelBefore: _react.PropTypes.node,
	    labelAfter: _react.PropTypes.node,
	    containerClassName: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'field',
	      type: 'text'
	    };
	  },
	  getFieldDOMNode: function getFieldDOMNode() {
	    return this.refs.field;
	  },
	  getValue: function getValue() {
	    if (this.props.type === 'select' && this.props.multiple) {
	      return this.getSelectedOptions();
	    } else {
	      return this.getFieldDOMNode().value;
	    }
	  },
	  getChecked: function getChecked() {
	    return this.getFieldDOMNode().checked;
	  },
	  getSelectedOptions: function getSelectedOptions() {
	    var values = [];
	    // see http://www.w3schools.com/jsref/coll_select_options.asp
	    var options = this.getFieldDOMNode().options;

	    [].slice.call(options).forEach(function (option) {
	      if (option.selected) {
	        var value = option.getAttribute('value') || option.innerHtml;

	        values.push(value);
	      }
	    });

	    return values;
	  },
	  isCheckboxOrRadio: function isCheckboxOrRadio() {
	    return this.props.type === 'radio' || this.props.type === 'checkbox';
	  },
	  isFile: function isFile() {
	    return this.props.type === 'file';
	  },


	  // convert `value`/`defaultValue` to `checked`/`defaultChecked` when `type` is `radio`/checkbox``
	  convertValueToChecked: function convertValueToChecked() {
	    var _this = this;

	    var checkedProps = {};

	    if (this.isCheckboxOrRadio()) {
	      (function () {
	        var propsMap = {
	          checked: 'value',
	          defaultChecked: 'defaultValue'
	        };

	        Object.keys(propsMap).forEach(function (checked) {
	          var value = propsMap[checked];

	          if (!_this.props[checked] && _this.props[value]) {
	            checkedProps[checked] = value;
	          }
	        });
	      })();
	    }

	    return checkedProps;
	  },
	  renderField: function renderField() {
	    var field = null;
	    var fieldClassName = this.isCheckboxOrRadio() || this.isFile() ? '' : this.getClassSet();
	    var classes = (0, _classnames2.default)(this.props.className, fieldClassName);
	    var commonProps = {
	      ref: 'field',
	      key: 'formField',
	      className: classes
	    };
	    var assignedProps = _extends({}, this.props, commonProps);

	    delete assignedProps.classPrefix;
	    delete assignedProps.containerClassName;
	    delete assignedProps.label;
	    delete assignedProps.btnBefore;
	    delete assignedProps.btnAfter;
	    delete assignedProps.labelBefore;
	    delete assignedProps.labelAfter;

	    switch (this.props.type) {
	      case 'select':
	        field = _react2.default.createElement(
	          'select',
	          assignedProps,
	          this.props.children
	        );
	        break;
	      case 'textarea':
	        field = _react2.default.createElement('textarea', assignedProps);
	        break;
	      case 'submit':
	      case 'reset':
	        var _props = this.props,
	            classPrefix = _props.classPrefix,
	            others = _objectWithoutProperties(_props, ['classPrefix']);

	        field = _react2.default.createElement(_Button2.default, _extends({}, commonProps, {
	          className: null
	        }, others, {
	          component: 'input'
	        }));
	        break;
	      default:
	        field = _react2.default.createElement('input', _extends({}, assignedProps, this.convertValueToChecked()));
	    }

	    return field;
	  },
	  renderContainer: function renderContainer(children) {
	    var _props2 = this.props,
	        id = _props2.id,
	        label = _props2.label,
	        containerClassName = _props2.containerClassName;

	    return label ? _react2.default.createElement(
	      'label',
	      {
	        htmlFor: id,
	        className: (0, _classnames2.default)(this.prefixClass('container'), containerClassName),
	        key: 'label'
	      },
	      _react2.default.createElement(
	        'span',
	        { className: this.prefixClass('label') },
	        label
	      ),
	      children,
	      this.isCheckboxOrRadio() ? _react2.default.createElement(_Icon2.default, {
	        className: this.prefixClass('icon'),
	        name: 'check'
	      }) : null
	    ) : children;
	  },
	  renderFieldGroup: function renderFieldGroup(children) {
	    var _this2 = this;

	    var groupPrefix = this.setClassNS('field-group');
	    var labelClassName = groupPrefix + '-label';
	    var _props3 = this.props,
	        labelBefore = _props3.labelBefore,
	        labelAfter = _props3.labelAfter,
	        btnBefore = _props3.btnBefore,
	        btnAfter = _props3.btnAfter,
	        containerClassName = _props3.containerClassName;

	    var renderFiledLabel = function renderFiledLabel(type) {
	      return _this2.props[type] ? _react2.default.createElement(
	        'span',
	        {
	          className: labelClassName,
	          key: type
	        },
	        _this2.props[type]
	      ) : null;
	    };

	    return labelBefore || labelAfter || btnBefore || btnAfter ? _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(groupPrefix, containerClassName),
	        key: 'fieldGroup'
	      },
	      renderFiledLabel('labelBefore'),
	      btnBefore,
	      children,
	      renderFiledLabel('labelAfter'),
	      btnAfter
	    ) : children;
	  },
	  render: function render() {
	    var field = this.renderField();

	    if (this.props.label) {
	      return this.renderContainer(field);
	    }

	    return this.renderFieldGroup(field);
	  }
	});

	exports.default = Field;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Field = __webpack_require__(25);

	var _Field2 = _interopRequireDefault(_Field);

	var _Switch = __webpack_require__(27);

	var _Switch2 = _interopRequireDefault(_Switch);

	var _Checkbox = __webpack_require__(28);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var nestedFields = ['input', 'radio', 'checkbox', 'switch', 'select', 'textarea'];

	var List = _react2.default.createClass({
	  displayName: 'List',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    inset: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'list'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        inset = _props.inset,
	        props = _objectWithoutProperties(_props, ['className', 'inset']);

	    delete props.classPrefix;

	    classSet[this.prefixClass('inset')] = inset;

	    // TODO: 使用 ul 可能不是太好的选择，在一些需要定义 component 的场合缺乏灵活性
	    return _react2.default.createElement('ul', _extends({}, props, {
	      className: (0, _classnames2.default)(classSet, className)
	    }));
	  }
	});

	var ListItem = _react2.default.createClass({
	  displayName: 'ListItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    role: _react.PropTypes.oneOf(['header', 'item']),
	    title: _react.PropTypes.node,
	    subTitle: _react.PropTypes.node,
	    href: _react.PropTypes.string,
	    linked: _react.PropTypes.bool, // linked flag for custom href like route Link
	    linkComponent: _react.PropTypes.any,
	    linkProps: _react.PropTypes.object,
	    media: _react.PropTypes.node,
	    after: _react.PropTypes.node,
	    desc: _react.PropTypes.node,
	    nested: _react.PropTypes.oneOf(nestedFields), // nested field
	    nestedProps: _react.PropTypes.object,
	    amStyle: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'item',
	      role: 'item'
	    };
	  },
	  getContentClassName: function getContentClassName() {
	    return this.prefixClass('content');
	  },
	  isNestedField: function isNestedField() {
	    var nested = this.props.nested;

	    return nestedFields.indexOf(nested) > -1 ? nested : false;
	  },
	  renderField: function renderField() {
	    var nested = this.isNestedField();
	    var nestedProps = this.props.nestedProps;

	    var field = null;

	    if (nested) {
	      switch (nested) {
	        case 'checkbox':
	          field = _react2.default.createElement(_Checkbox2.default, _extends({
	            containerClassName: this.prefixClass(nested)
	          }, nestedProps));
	          break;
	        default:
	          var Component = nested === 'switch' ? _Switch2.default : _Field2.default;
	          field = _react2.default.createElement(
	            'div',
	            {
	              className: this.prefixClass(nested)
	            },
	            _react2.default.createElement(Component, _extends({
	              type: nested
	            }, nestedProps)),
	            nested === 'radio' && _react2.default.createElement(_Icon2.default, { name: 'check' })
	          );
	      }
	    }

	    return field;
	  },
	  renderTitleRow: function renderTitleRow() {
	    var _props2 = this.props,
	        title = _props2.title,
	        subTitle = _props2.subTitle,
	        href = _props2.href,
	        linkComponent = _props2.linkComponent;


	    var itemTitle = title ? _react2.default.createElement(
	      'h3',
	      {
	        key: 'itemTitle',
	        className: this.prefixClass('title')
	      },
	      title
	    ) : null;

	    var titleChildren = [itemTitle, this.renderAddon('after'), href || linkComponent ? _react2.default.createElement(_Icon2.default, {
	      className: this.prefixClass('icon'),
	      name: 'right-nav',
	      key: 'itemChevron'
	    }) : null];

	    return subTitle ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('title-row'),
	        key: 'itemTitleRow'
	      },
	      titleChildren
	    ) : titleChildren;
	  },
	  renderMain: function renderMain() {
	    return _react2.default.createElement(
	      'div',
	      {
	        key: 'itemMain',
	        className: this.prefixClass('main')
	      },
	      this.renderTitleRow(),
	      this.renderAddon('subTitle'),
	      this.renderAddon('desc'),
	      this.renderField(),
	      this.props.children
	    );
	  },
	  wrapLink: function wrapLink(children) {
	    var _props3 = this.props,
	        linkComponent = _props3.linkComponent,
	        linkProps = _props3.linkProps,
	        href = _props3.href,
	        target = _props3.target;

	    var contentClassName = this.getContentClassName();

	    return linkComponent ? _react2.default.createElement(linkComponent, _extends({}, linkProps, {
	      className: (0, _classnames2.default)(contentClassName, linkProps && linkProps.className)
	    }), children) : _react2.default.createElement(
	      'a',
	      {
	        href: href,
	        target: target,
	        className: contentClassName
	      },
	      children
	    );
	  },
	  wrapContent: function wrapContent(children) {
	    var nested = this.props.nested;

	    var Component = nested === 'checkbox' || nested === 'radio' ? 'label' : 'div';

	    return _react2.default.createElement(
	      Component,
	      { className: this.getContentClassName() },
	      children
	    );
	  },
	  renderAddon: function renderAddon(type) {
	    return this.props[type] ? _react2.default.createElement(
	      'div',
	      {
	        key: 'item-' + type,
	        className: this.prefixClass(type.toLowerCase())
	      },
	      this.props[type]
	    ) : null;
	  },
	  render: function render() {
	    var _props4 = this.props,
	        className = _props4.className,
	        role = _props4.role,
	        subTitle = _props4.subTitle,
	        desc = _props4.desc,
	        href = _props4.href,
	        media = _props4.media,
	        children = _props4.children,
	        linkComponent = _props4.linkComponent,
	        linked = _props4.linked,
	        nested = _props4.nested,
	        props = _objectWithoutProperties(_props4, ['className', 'role', 'subTitle', 'desc', 'href', 'media', 'children', 'linkComponent', 'linked', 'nested']);

	    delete props.classPrefix;
	    delete props.title;
	    delete props.after;
	    delete props.linkProps;
	    delete props.nestedProps;
	    delete props.amStyle;

	    var itemChildren = [this.renderAddon('media'), this.renderMain()];
	    var classSet = this.getClassSet();

	    classSet[this.prefixClass('nested-' + nested)] = nested;
	    if (nested === 'select' || nested === 'textarea') {
	      classSet[this.prefixClass('nested-input')] = true;
	    }
	    classSet[this.prefixClass('header')] = role === 'header';
	    classSet[this.prefixClass('linked')] = href || linkComponent || linked;
	    (subTitle || desc) && (classSet[this.prefixClass('mixed')] = true);

	    return _react2.default.createElement(
	      'li',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      role === 'header' ? children : href || linkComponent ? this.wrapLink(itemChildren) : this.wrapContent(itemChildren)
	    );
	  }
	});

	List.Item = ListItem;

	exports.default = List;

	/**
	 * TODO:
	 * - 可选择列表（嵌套 radio/checkbox）图文混排的列表，
	 *   考虑的创建可选择列表时根据 nested 属性自动生产 input，而不用再去嵌套 Field，
	 *   以便图文混排选择实现。
	 */

	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Switch = _react2.default.createClass({
	  displayName: 'Switch',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    name: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    disabled: _react.PropTypes.bool,
	    value: _react.PropTypes.bool,
	    onValueChange: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'switch',
	      onValueChange: function onValueChange() {}
	    };
	  },
	  getValue: function getValue() {
	    return this.refs.field.checked;
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        name = _props.name,
	        className = _props.className,
	        onValueChange = _props.onValueChange,
	        value = _props.value,
	        disabled = _props.disabled,
	        props = _objectWithoutProperties(_props, ['name', 'className', 'onValueChange', 'value', 'disabled']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      'label',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement('input', {
	        onChange: onValueChange.bind(this),
	        name: name,
	        type: 'checkbox',
	        ref: 'field',
	        defaultChecked: value,
	        disabled: disabled
	      }),
	      _react2.default.createElement('span', { className: this.prefixClass('label') })
	    );
	  }
	});

	exports.default = Switch;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Field = __webpack_require__(25);

	var _Field2 = _interopRequireDefault(_Field);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Checkbox = _react2.default.createClass({
	  displayName: 'Checkbox',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    container: _react.PropTypes.node.isRequired,
	    containerClassName: _react.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'checkbox',
	      container: 'div'
	    };
	  },
	  getChecked: function getChecked() {
	    return this.refs.field.getChecked();
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Container = _props.container,
	        containerClassName = _props.containerClassName,
	        props = _objectWithoutProperties(_props, ['container', 'containerClassName']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      Container,
	      {
	        className: (0, _classnames2.default)(classSet, containerClassName)
	      },
	      _react2.default.createElement(_Field2.default, _extends({}, props, {
	        type: 'checkbox',
	        ref: 'field'
	      })),
	      _react2.default.createElement(_Icon2.default, {
	        name: 'check',
	        className: this.prefixClass('icon')
	      })
	    );
	  }
	});

	exports.default = Checkbox;
	module.exports = exports['default'];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _ModalPortal = __webpack_require__(30);

	var _ModalPortal2 = _interopRequireDefault(_ModalPortal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ModalPortal2.default;
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _CSSCore = __webpack_require__(9);

	var _CSSCore2 = _interopRequireDefault(_CSSCore);

	var _exenv = __webpack_require__(10);

	var _bodyElement = __webpack_require__(31);

	var _bodyElement2 = _interopRequireDefault(_bodyElement);

	var _Modal = __webpack_require__(32);

	var _Modal2 = _interopRequireDefault(_Modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var bodyClassName = 'has-modal-open';

	var ModalPortal = (0, _react.createClass)({
	  propTypes: {
	    isOpen: _react.PropTypes.bool.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      isOpen: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    this.node = document.createElement('div');
	    this.node.className = '__modal-portal';
	    _bodyElement2.default.appendChild(this.node);
	    this.renderModal(this.props);
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    this.renderModal(nextProps);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    (0, _reactDom.unmountComponentAtNode)(this.node);
	    _bodyElement2.default.removeChild(this.node);
	    _CSSCore2.default.removeClass(_bodyElement2.default, bodyClassName);
	  },
	  renderModal: function renderModal(props) {
	    _CSSCore2.default[(props.isOpen ? 'add' : 'remove') + 'Class'](_bodyElement2.default, bodyClassName);
	    this.portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react2.default.createElement(_Modal2.default, props), this.node);
	  },
	  render: function render() {
	    return null;
	  }
	});

	exports.default = ModalPortal;
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _exenv = __webpack_require__(10);

	var bodyElement = _exenv.canUseDOM ? document.body : {
	  appendChild: function appendChild() {}
	};

	exports.default = bodyElement;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsCssTransitionGroup = __webpack_require__(15);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _Button = __webpack_require__(20);

	var _Button2 = _interopRequireDefault(_Button);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Loader = __webpack_require__(33);

	var _Loader2 = _interopRequireDefault(_Loader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * @see https://github.com/yuanyan/boron
	                                                                                                                                                                                                                              */

	// MUST be equal to $modal-duration in _modal.scss
	var TRANSITION_TIMEOUT = 300;

	function noop() {}

	var Modal = (0, _react.createClass)({
	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    role: _react.PropTypes.oneOf(['alert', 'confirm', 'prompt', 'loading', 'actions', 'popup']),
	    title: _react.PropTypes.node,
	    confirmText: _react.PropTypes.string,
	    cancelText: _react.PropTypes.string,
	    closeBtn: _react.PropTypes.bool,
	    closeViaBackdrop: _react.PropTypes.bool,
	    onAction: _react.PropTypes.func,
	    onOpen: _react.PropTypes.func,
	    onClosed: _react.PropTypes.func,
	    onDismiss: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'modal',
	      confirmText: '确定',
	      cancelText: '取消',
	      closeBtn: true,
	      onAction: noop,
	      onOpen: noop,
	      onClosed: noop,
	      onDismiss: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      closed: true,
	      isClosing: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (this.props.isOpen) {
	      this.open();
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var isOpen = this.props.isOpen;

	    if (!isOpen && nextProps.isOpen) {
	      this.open();
	    } else if (isOpen && !nextProps.isOpen) {
	      this.close();
	    }
	  },
	  isClosed: function isClosed() {
	    return this.state.closed;
	  },
	  isPopup: function isPopup() {
	    return this.props.role === 'popup';
	  },
	  isActions: function isActions() {
	    return this.props.role === 'actions';
	  },


	  // Get input data for prompt modal
	  getFieldData: function getFieldData() {
	    var data = [];
	    var inputs = _reactDom2.default.findDOMNode(this).querySelectorAll('input[type=text]');

	    if (inputs) {
	      for (var i = 0; i < inputs.length; i++) {
	        data.push(inputs[i].value);
	      }
	    }

	    return data.length === 0 ? null : data.length === 1 ? data[0] : data;
	  },


	  // data === null: prompt -> canceled
	  // data === true: confirm -> confirmed
	  // data === false: confirm -> canceled
	  handleAction: function handleAction(data, e) {
	    var _props = this.props,
	        role = _props.role,
	        onAction = _props.onAction;

	    var willClose = true;

	    if (role === 'prompt' && data) {
	      data = this.getFieldData();

	      willClose = onAction.call(this, data, e);
	    } else {
	      onAction.call(this, data, e);
	    }

	    willClose && this.requestClose(e);
	  },
	  handleBackdropClick: function handleBackdropClick(e) {
	    if (e.target !== e.currentTarget || !this.props.closeViaBackdrop) {
	      return;
	    }

	    this.requestClose(e);
	  },
	  open: function open() {
	    if (this.isClosed()) {
	      this.setState({
	        isClosing: false,
	        closed: false
	      });

	      this.props.onOpen();
	    }
	  },


	  // Only for instance self calling
	  close: function close() {
	    if (this.isClosed() || this.state.isClosing) {
	      return;
	    }

	    this.setState({
	      isClosing: true
	    });
	  },


	  // for user actions
	  requestClose: function requestClose(e) {
	    this.props.onDismiss(e);
	  },
	  handleClosed: function handleClosed() {
	    this.setState({
	      closed: true,
	      isClosing: false
	    });
	    this.props.onClosed();
	  },
	  removeUnknownProp: function removeUnknownProp(props) {
	    delete props.isOpen;
	    delete props.onDismiss;
	    delete props.onOpen;
	    delete props.onClosed;
	    delete props.onAction;
	    delete props.classPrefix;
	    delete props.confirmText;
	    delete props.cancelText;
	    delete props.closeBtn;

	    return props;
	  },
	  renderActions: function renderActions(classSet) {
	    classSet[this.props.classPrefix] = false;

	    return _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(this.props.className, classSet),
	        key: 'modalActions',
	        ref: 'modal'
	      },
	      this.props.children,
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('actions-group') },
	        _react2.default.createElement(
	          _Button2.default,
	          {
	            onClick: this.requestClose,
	            block: true,
	            amStyle: this.props.btnStyle || 'secondary'
	          },
	          this.props.cancelText
	        )
	      )
	    );
	  },
	  renderPopup: function renderPopup(classSet) {
	    classSet[this.props.classPrefix] = false;

	    var _props2 = this.props,
	        className = _props2.className,
	        title = _props2.title,
	        children = _props2.children,
	        props = _objectWithoutProperties(_props2, ['className', 'title', 'children']);

	    return _react2.default.createElement(
	      'div',
	      _extends({}, this.removeUnknownProp(props), {
	        className: (0, _classnames2.default)(className, classSet, this.setClassNS('popup')),
	        key: 'modalPopup',
	        ref: 'modal'
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.setClassNS('popup-inner') },
	        _react2.default.createElement(
	          'div',
	          { className: this.setClassNS('popup-header') },
	          title ? _react2.default.createElement(
	            'h4',
	            { className: this.setClassNS('popup-title') },
	            title
	          ) : null,
	          _react2.default.createElement(_Icon2.default, {
	            name: 'close',
	            className: this.setClassNS('popup-icon'),
	            onClick: this.requestClose
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: this.setClassNS('popup-body') },
	          children
	        )
	      )
	    );
	  },
	  renderHeader: function renderHeader() {
	    var _props3 = this.props,
	        title = _props3.title,
	        closeBtn = _props3.closeBtn,
	        role = _props3.role;

	    var closeIcon = closeBtn && !role ? _react2.default.createElement(_Icon2.default, {
	      name: 'close',
	      className: this.prefixClass('icon'),
	      onClick: this.requestClose
	    }) : null;

	    return title || closeIcon ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('header'),
	        key: 'modalHeader'
	      },
	      title ? _react2.default.createElement(
	        'h4',
	        {
	          className: this.prefixClass('title')
	        },
	        title
	      ) : null,
	      closeIcon
	    ) : null;
	  },


	  // Render alert/confirm/prompt buttons
	  renderFooter: function renderFooter() {
	    var _this = this;

	    var buttons = void 0;
	    var btnClass = this.prefixClass('btn');
	    var _props4 = this.props,
	        role = _props4.role,
	        confirmText = _props4.confirmText,
	        cancelText = _props4.cancelText;

	    (function () {

	      switch (role) {
	        case 'alert':
	          buttons = _react2.default.createElement(
	            'span',
	            {
	              key: 'modalBtn',
	              onClick: _this.handleAction.bind(_this, null),
	              className: btnClass
	            },
	            confirmText
	          );
	          break;
	        case 'confirm':
	        case 'prompt':
	          var cancel = role === 'prompt' ? null : false;
	          buttons = [cancelText, confirmText].map(function (text, i) {
	            return _react2.default.createElement(
	              'span',
	              {
	                key: 'modalBtn' + i,
	                onClick: _this.handleAction.bind(_this, i === 0 ? cancel : true),
	                className: btnClass
	              },
	              text
	            );
	          });
	          break;
	        default:
	          buttons = null;
	      }
	    })();

	    return buttons ? _react2.default.createElement(
	      'div',
	      { className: this.prefixClass('footer') },
	      buttons
	    ) : null;
	  },


	  // Using transition appear to fix animation issue on iOS Safari
	  // @see https://github.com/amazeui/amazeui-touch/issues/11
	  renderTransition: function renderTransition(children) {
	    return _react2.default.createElement(
	      _reactAddonsCssTransitionGroup2.default,
	      {
	        transitionName: this.prefixClass('transition'),
	        transitionAppear: true,
	        transitionAppearTimeout: TRANSITION_TIMEOUT,
	        transitionEnterTimeout: TRANSITION_TIMEOUT,
	        transitionLeaveTimeout: TRANSITION_TIMEOUT
	      },
	      children
	    );
	  },
	  renderBackdrop: function renderBackdrop(children) {
	    var onClick = this.handleBackdropClick || null;
	    var preventDefault = function preventDefault(e) {
	      // prevent window scroll when touch backdrop
	      e.preventDefault();
	    };

	    var classSet = {};

	    classSet[this.prefixClass('backdrop')] = true;
	    classSet[this.setClassNS('active')] = true;
	    classSet[this.prefixClass('backdrop-out')] = this.state.isClosing;

	    return _react2.default.createElement(
	      'span',
	      null,
	      children,
	      _react2.default.createElement('div', {
	        className: (0, _classnames2.default)(classSet),
	        style: { height: window.innerHeight },
	        ref: 'backdrop',
	        onClick: onClick,
	        onTouchMove: preventDefault
	      })
	    );
	  },
	  render: function render() {
	    var _this2 = this;

	    var _state = this.state,
	        closed = _state.closed,
	        isClosing = _state.isClosing;


	    if (closed) {
	      return null;
	    }

	    // listen out animation end envent
	    if (isClosing) {
	      (function () {
	        var node = _this2.refs.modal;

	        if (node) {
	          (function () {
	            var closedHandler = function closedHandler(e) {
	              if (e && e.target !== node) {
	                return;
	              }

	              _TransitionEvents2.default.off(node, closedHandler);
	              _this2.handleClosed();
	            };

	            _TransitionEvents2.default.on(node, closedHandler);
	          })();
	        }
	      })();
	    }

	    var classSet = this.getClassSet();

	    var _props5 = this.props,
	        role = _props5.role,
	        className = _props5.className,
	        title = _props5.title,
	        children = _props5.children,
	        modalWidth = _props5.modalWidth,
	        modalHeight = _props5.modalHeight,
	        props = _objectWithoutProperties(_props5, ['role', 'className', 'title', 'children', 'modalWidth', 'modalHeight']);

	    var modal = void 0;

	    classSet[this.prefixClass('out')] = isClosing;
	    role && (classSet[this.prefixClass(role)] = true);

	    if (this.isActions()) {
	      modal = this.renderTransition(this.renderActions(classSet));
	    } else if (this.isPopup()) {
	      modal = this.renderTransition(this.renderPopup(classSet));
	    } else {
	      var style = {
	        width: modalWidth,
	        height: modalHeight
	      };

	      modal = _react2.default.createElement(
	        'div',
	        _extends({}, this.removeUnknownProp(props), {
	          style: style,
	          ref: 'modalContainer',
	          className: (0, _classnames2.default)(classSet, className)
	        }),
	        _react2.default.createElement(
	          'div',
	          {
	            className: 'modal-inner',
	            ref: 'modal'
	          },
	          _react2.default.createElement(
	            'div',
	            {
	              className: this.prefixClass('dialog')
	            },
	            this.renderHeader(),
	            _react2.default.createElement(
	              'div',
	              {
	                className: this.prefixClass('body'),
	                ref: 'modalBody'
	              },
	              role === 'loading' ? children ? children : _react2.default.createElement(_Loader2.default, null) : children
	            ),
	            this.renderFooter()
	          )
	        )
	      );
	    }

	    return this.renderBackdrop(modal);
	  }
	});

	exports.default = Modal;
	module.exports = exports['default'];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Loader = _react2.default.createClass({
	  displayName: 'Loader',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.node,
	    amStyle: _react.PropTypes.string,
	    rounded: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'loader',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        Component = _props.component,
	        props = _objectWithoutProperties(_props, ['className', 'component']);

	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.rounded;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce1') }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce2') }),
	      _react2.default.createElement('div', { className: this.prefixClass('bounce3') })
	    );
	  }
	});

	exports.default = Loader;
	module.exports = exports['default'];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var NavBar = _react2.default.createClass({
	  displayName: 'NavBar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    amStyle: _react.PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'alert', 'dark']),
	    title: _react.PropTypes.node,
	    leftNav: _react.PropTypes.array,
	    rightNav: _react.PropTypes.array,
	    titleOnLeft: _react.PropTypes.bool,
	    onAction: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'navbar',
	      onAction: function onAction() {}
	    };
	  },
	  renderTitle: function renderTitle() {
	    var _props = this.props,
	        titleOnLeft = _props.titleOnLeft,
	        title = _props.title;

	    var titlePosition = this.prefixClass(titleOnLeft ? 'left' : 'center');

	    return title ? _react2.default.createElement(
	      'h2',
	      {
	        className: (0, _classnames2.default)(this.prefixClass('title'), titlePosition)
	      },
	      title
	    ) : this.props.children;
	  },
	  renderNav: function renderNav(position) {
	    var nav = this.props[position + 'Nav'];
	    this._navPosition = position;

	    return nav && Array.isArray(nav) ? _react2.default.createElement(
	      'div',
	      {
	        className: (0, _classnames2.default)(this.prefixClass('nav'), this.prefixClass(position))
	      },
	      nav.map(this.renderNavItem)
	    ) : null;
	  },
	  renderNavItem: function renderNavItem(item, index) {
	    var _iconClassName;

	    var Component = item.component,
	        title = item.title,
	        customIcon = item.customIcon,
	        icon = item.icon,
	        isClone = item.isClone,
	        className = item.className,
	        otherProps = _objectWithoutProperties(item, ['component', 'title', 'customIcon', 'icon', 'isClone', 'className']);

	    var children = [];
	    var itemClassName = (0, _classnames2.default)(this.prefixClass('nav-item'), className);
	    var itemProps = _extends({
	      key: 'navbarNavItem' + index,
	      onClick: this.props.onAction.bind(this, item)
	    }, otherProps, {
	      className: itemClassName
	    });

	    Component = Component || 'a';

	    title && children.push(_react2.default.createElement(
	      'span',
	      {
	        className: this.prefixClass('nav-title'),
	        key: 'title'
	      },
	      title
	    ));

	    var navIconKey = 'icon';
	    var iconClassName = (_iconClassName = {}, _defineProperty(_iconClassName, this.prefixClass('icon'), true), _defineProperty(_iconClassName, this.prefixClass('icon-sibling-of-title'), !!title), _iconClassName);
	    var navIcon = customIcon ? _react2.default.createElement('img', {
	      src: customIcon,
	      className: (0, _classnames2.default)(iconClassName),
	      alt: title || null,
	      key: navIconKey
	    }) : icon ? _react2.default.createElement(_Icon2.default, {
	      className: (0, _classnames2.default)(iconClassName),
	      name: icon,
	      key: navIconKey
	    }) : null;

	    // adjust title and icon order for Android UC
	    // @see ../scss/helper/_mixins.scss `navbar-item-android-uc-fallback` mixin
	    if (navIcon) {
	      var action = this._navPosition === 'left' ? 'unshift' : 'push';
	      Array.prototype[action].call(children, navIcon);
	    }
	    // navIcon && children.push(navIcon);

	    var renderChildren = function renderChildren() {
	      // #40
	      // if `Component` is a clone type like OffCanvasTrigger,
	      // this should return a element with the className.
	      // TBC: should other props be transferred to the span element?
	      return isClone ? _react2.default.createElement(
	        'span',
	        {
	          className: itemClassName
	        },
	        children
	      ) : children;
	    };

	    return _react2.default.createElement(
	      Component,
	      itemProps,
	      renderChildren()
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props2 = this.props,
	        className = _props2.className,
	        props = _objectWithoutProperties(_props2, ['className']);

	    delete props.title;
	    delete props.classPrefix;
	    delete props.leftNav;
	    delete props.rightNav;
	    delete props.amStyle;
	    delete props.onAction;
	    delete props.titleOnLeft;

	    return _react2.default.createElement(
	      'header',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.renderTitle(),
	      this.renderNav('left'),
	      this.renderNav('right')
	    );
	  }
	});

	exports.default = NavBar;
	module.exports = exports['default'];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsCssTransitionGroup = __webpack_require__(15);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _exenv = __webpack_require__(10);

	var _bodyElement = __webpack_require__(31);

	var _bodyElement2 = _interopRequireDefault(_bodyElement);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// @see https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html
	// To improve reliability, CSSTransitionGroup will no longer listen to
	// transition events. Instead, you should specify transition durations
	// manually using props such as `transitionEnterTimeout={500}`.
	// NOTE: It should less than CSS animation duration, if not, the animation
	// be not smooth. It maybe a bug of React.
	var TRANSITION_TIMEOUT = 250;

	var Notification = _react2.default.createClass({
	  displayName: 'Notification',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    title: _react.PropTypes.string,
	    amStyle: _react.PropTypes.string,
	    closeBtn: _react.PropTypes.bool,
	    animated: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    onDismiss: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'notification',
	      closeBtn: true,
	      onDismiss: function onDismiss() {}
	    };
	  },
	  renderCloseBtn: function renderCloseBtn() {
	    return this.props.closeBtn ? _react2.default.createElement(_Icon2.default, {
	      className: this.prefixClass('icon'),
	      name: 'close',
	      onClick: this.props.onDismiss
	    }) : null;
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        title = _props.title,
	        className = _props.className,
	        animated = _props.animated,
	        visible = _props.visible,
	        props = _objectWithoutProperties(_props, ['title', 'className', 'animated', 'visible']);

	    delete props.classPrefix;
	    delete props.amStyle;
	    delete props.static;
	    delete props.closeBtn;
	    delete props.onDismiss;

	    classSet[this.prefixClass('animated')] = animated;

	    var notificationBar = visible ? _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className),
	        key: 'notification'
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('content') },
	        title ? _react2.default.createElement(
	          'h3',
	          { className: this.prefixClass('title') },
	          title
	        ) : null,
	        this.props.children
	      ),
	      this.renderCloseBtn()
	    ) : null;

	    return animated ? _react2.default.createElement(
	      _reactAddonsCssTransitionGroup2.default,
	      {
	        component: 'div',
	        transitionName: 'notification',
	        transitionEnterTimeout: TRANSITION_TIMEOUT,
	        transitionLeaveTimeout: TRANSITION_TIMEOUT
	      },
	      notificationBar
	    ) : notificationBar;
	  }
	});

	var NotificationPortal = _react2.default.createClass({
	  displayName: 'NotificationPortal',

	  propTypes: {
	    visible: _react.PropTypes.bool.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      visible: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (!this.isStatic()) {
	      this.node = document.createElement('div');
	      this.node.className = '__notification-portal';
	      _bodyElement2.default.appendChild(this.node);
	      this.renderNotification(this.props);
	    }
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!this.isStatic()) {
	      this.renderNotification(nextProps);
	    }
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (!this.isStatic()) {
	      (0, _reactDom.unmountComponentAtNode)(this.node);
	      _bodyElement2.default.removeChild(this.node);
	    }
	  },
	  isStatic: function isStatic() {
	    return this.props.static;
	  },
	  renderNotification: function renderNotification(props) {
	    this.portal = (0, _reactDom.unstable_renderSubtreeIntoContainer)(this, _react2.default.createElement(Notification, props), this.node);
	  },
	  render: function render() {
	    return this.isStatic() ? _react2.default.createElement(Notification, this.props) : null;
	  }
	});

	exports.default = NotificationPortal;
	module.exports = exports['default'];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(12);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _TransitionEvents = __webpack_require__(8);

	var _TransitionEvents2 = _interopRequireDefault(_TransitionEvents);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Touchable = __webpack_require__(37);

	var _Touchable2 = _interopRequireDefault(_Touchable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Carousel = _react2.default.createClass({
	  displayName: 'Carousel',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,

	    controls: _react.PropTypes.bool, // prev/next icon
	    pager: _react.PropTypes.bool, // indicators or thumbs

	    slide: _react.PropTypes.bool, // what is this?
	    interval: _react.PropTypes.number, // interval
	    autoPlay: _react.PropTypes.bool,
	    loop: _react.PropTypes.bool, // loop slide

	    pauseOnHover: _react.PropTypes.bool,
	    // touch: PropTypes.bool,

	    onAction: _react.PropTypes.func,
	    onSlideEnd: _react.PropTypes.func,
	    activeIndex: _react.PropTypes.number,
	    defaultActiveIndex: _react.PropTypes.number,
	    direction: _react.PropTypes.oneOf(['prev', 'next']),
	    prevIcon: _react.PropTypes.node,
	    nextIcon: _react.PropTypes.node
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'carousel',
	      controls: true,
	      pager: true,
	      slide: true,
	      interval: 5000,
	      autoPlay: true,
	      loop: true,
	      pauseOnHover: true,
	      prevIcon: _react2.default.createElement(_Icon2.default, { name: 'left-nav' }),
	      nextIcon: _react2.default.createElement(_Icon2.default, { name: 'right-nav' })
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeIndex: this.props.defaultActiveIndex == null ? 0 : this.props.defaultActiveIndex,
	      previousActiveIndex: null,
	      direction: null
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var activeIndex = this.getActiveIndex();

	    if (nextProps.activeIndex != null && nextProps.activeIndex !== activeIndex) {
	      clearTimeout(this.timeout);
	      this.setState({
	        previousActiveIndex: activeIndex,
	        direction: nextProps.direction != null ? nextProps.direction : this.getDirection(activeIndex, nextProps.activeIndex)
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	    this.props.autoPlay && this.waitForNext();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    clearTimeout(this.timeout);
	  },
	  getDirection: function getDirection(prevIndex, index) {
	    if (prevIndex === index) {
	      return null;
	    }

	    return prevIndex > index ? 'prev' : 'next';
	  },
	  next: function next(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() + 1;
	    var count = _react2.default.Children.count(this.props.children);

	    if (index > count - 1) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = 0;
	    }

	    this.handleSelect(index, 'next');
	  },
	  prev: function prev(e) {
	    e && e.preventDefault();

	    var index = this.getActiveIndex() - 1;

	    if (index < 0) {
	      if (!this.props.loop) {
	        return;
	      }
	      index = _react2.default.Children.count(this.props.children) - 1;
	    }

	    this.handleSelect(index, 'prev');
	  },
	  pause: function pause() {
	    this.isPaused = true;
	    clearTimeout(this.timeout);
	  },
	  play: function play() {
	    this.isPaused = false;
	    this.waitForNext();
	  },
	  waitForNext: function waitForNext() {
	    if (!this.isPaused && this.props.slide && this.props.interval && this.props.activeIndex == null) {
	      this.timeout = setTimeout(this.next, this.props.interval);
	    }
	  },
	  handleMouseOver: function handleMouseOver() {
	    if (this.props.pauseOnHover) {
	      this.pause();
	    }
	  },
	  handleMouseOut: function handleMouseOut() {
	    if (this.isPaused) {
	      this.play();
	    }
	  },
	  handleSwipeLeft: function handleSwipeLeft(e) {
	    // console.log('swipe left');
	    this.next();
	  },
	  handleSwipeRight: function handleSwipeRight(e) {
	    // console.log('swipe right....');
	    this.prev();
	  },
	  getActiveIndex: function getActiveIndex() {
	    return this.props.activeIndex != null ? this.props.activeIndex : this.state.activeIndex;
	  },
	  handleItemAnimateOutEnd: function handleItemAnimateOutEnd() {
	    this.setState({
	      previousActiveIndex: null,
	      direction: null
	    }, function () {
	      this.waitForNext();

	      if (this.props.onSlideEnd) {
	        this.props.onSlideEnd();
	      }
	    });
	  },
	  handleSelect: function handleSelect(index, direction, e) {
	    e && e.preventDefault();
	    clearTimeout(this.timeout);

	    var previousActiveIndex = this.getActiveIndex();

	    direction = direction || this.getDirection(previousActiveIndex, index);

	    if (this.props.onAction) {
	      this.props.onAction(index, direction);
	    }

	    if (this.props.activeIndex == null && index !== previousActiveIndex) {
	      if (this.state.previousActiveIndex != null) {
	        // If currently animating don't activate the new index.
	        // TODO: look into queuing this canceled call and
	        // animating after the current animation has ended.
	        return;
	      }

	      this.setState({
	        activeIndex: index,
	        previousActiveIndex: previousActiveIndex,
	        direction: direction
	      });
	    }
	  },
	  renderControls: function renderControls() {
	    return this.props.controls ? _react2.default.createElement(
	      'div',
	      { className: this.prefixClass('control') },
	      _react2.default.createElement(
	        _Touchable2.default,
	        {
	          className: this.prefixClass('control-prev'),
	          onTap: this.prev,
	          stopPropagation: true
	        },
	        this.props.prevIcon
	      ),
	      _react2.default.createElement(
	        _Touchable2.default,
	        {
	          className: this.prefixClass('control-next'),
	          onTap: this.next,
	          stopPropagation: true
	        },
	        this.props.nextIcon
	      )
	    ) : null;
	  },
	  renderPager: function renderPager() {
	    var _this = this;

	    if (this.props.pager) {
	      var _ret = function () {
	        var isThumbnailNav = false;

	        var children = _react2.default.Children.map(_this.props.children, function (child, i) {
	          var className = i === _this.getActiveIndex() ? _this.setClassNS('active') : null;
	          var thumb = child.props.thumbnail;

	          if (!isThumbnailNav) {
	            isThumbnailNav = !!thumb;
	          }

	          return _react2.default.createElement(
	            _Touchable2.default,
	            {
	              component: 'li',
	              className: className,
	              key: i,
	              onTap: _this.handleSelect.bind(_this, i, null)
	            },
	            thumb ? _react2.default.createElement('img', { src: thumb }) : null
	          );
	        });
	        var pagerClassName = _this.prefixClass(isThumbnailNav ? 'thumbs' : 'indicators');

	        return {
	          v: _react2.default.createElement(
	            'ol',
	            {
	              className: (0, _classnames2.default)(_this.prefixClass('pager'), pagerClassName)
	            },
	            children
	          )
	        };
	      }();

	      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	    }

	    return null;
	  },
	  renderItem: function renderItem(child, index) {
	    var activeIndex = this.getActiveIndex();
	    var isActive = index === activeIndex;
	    var isPreviousActive = this.state.previousActiveIndex != null && this.state.previousActiveIndex === index && this.props.slide;
	    var props = {
	      active: isActive,
	      ref: child.ref,
	      key: child.key ? child.key : index,
	      index: index,
	      animateOut: isPreviousActive,
	      animateIn: isActive && this.state.previousActiveIndex != null && this.props.slide,
	      direction: this.state.direction,
	      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
	    };

	    return _react2.default.cloneElement(child, props);
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['className', 'children']);

	    delete props.classPrefix;
	    delete props.onAction;
	    delete props.pager;
	    delete props.controls;
	    delete props.slide;
	    delete props.interval;
	    delete props.pauseOnHover;
	    delete props.prevIcon;
	    delete props.nextIcon;

	    // TODO: 优化 swipe，左右方向阻止默认事件，垂直方向不阻止
	    return _react2.default.createElement(
	      _Touchable2.default,
	      _extends({}, props, {
	        component: 'div',
	        className: (0, _classnames2.default)(classSet, className),
	        onMouseOver: this.handleMouseOver,
	        onMouseOut: this.handleMouseOut,
	        onSwipeLeft: this.handleSwipeLeft,
	        onSwipeRight: this.handleSwipeRight,
	        preventDefault: false,
	        stopPropagation: true
	      }),
	      _react2.default.createElement(
	        'ul',
	        { className: this.prefixClass('slides') },
	        _react2.default.Children.map(children, this.renderItem)
	      ),
	      this.renderControls(),
	      this.renderPager()
	    );
	  }
	});

	var SliderItem = _react2.default.createClass({
	  displayName: 'SliderItem',

	  propTypes: {
	    direction: _react.PropTypes.oneOf(['prev', 'next']),
	    onAnimateOutEnd: _react.PropTypes.func,
	    active: _react.PropTypes.bool,
	    animateIn: _react.PropTypes.bool,
	    animateOut: _react.PropTypes.bool,
	    caption: _react.PropTypes.node,
	    index: _react.PropTypes.number,
	    thumbnail: _react.PropTypes.string
	  },

	  getInitialState: function getInitialState() {
	    return {
	      direction: null
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: true
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (this.props.active !== nextProps.active) {
	      this.setState({
	        direction: null
	      });
	    }
	  },
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (!this.props.active && prevProps.active) {
	      _TransitionEvents2.default.on(_reactDom2.default.findDOMNode(this), this.handleAnimateOutEnd);
	    }

	    if (this.props.active !== prevProps.active) {
	      setTimeout(this.startAnimation, 20);
	    }
	  },
	  handleAnimateOutEnd: function handleAnimateOutEnd() {
	    if (this.props.onAnimateOutEnd && this.isMounted()) {
	      this.props.onAnimateOutEnd(this.props.index);
	    }
	  },
	  startAnimation: function startAnimation() {
	    if (!this.isMounted()) {
	      return;
	    }

	    this.setState({
	      direction: this.props.direction === 'prev' ? 'right' : 'left'
	    });
	  },
	  render: function render() {
	    var _props2 = this.props,
	        className = _props2.className,
	        active = _props2.active,
	        animateIn = _props2.animateIn,
	        animateOut = _props2.animateOut,
	        direction = _props2.direction;

	    var classSet = {
	      active: active && !animateIn || animateOut,
	      next: active && animateIn && direction === 'next',
	      prev: active && animateIn && direction === 'prev'
	    };

	    if (this.state.direction && (animateIn || animateOut)) {
	      classSet[this.state.direction] = true;
	    }

	    return _react2.default.createElement(
	      'li',
	      {
	        className: (0, _classnames2.default)(className, classSet)
	      },
	      this.props.children
	    );
	  }
	});

	Carousel.Item = SliderItem;

	exports.default = Carousel;
	module.exports = exports['default'];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Mixin = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _TouchableMixin = __webpack_require__(13);

	var _TouchableMixin2 = _interopRequireDefault(_TouchableMixin);

	var _createChainedFunction = __webpack_require__(38);

	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

	var _isTouchSupported = __webpack_require__(39);

	var _isTouchSupported2 = _interopRequireDefault(_isTouchSupported);

	__webpack_require__(40);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
	                                                                                                                                                                                                                              * React port of Zepto touch.
	                                                                                                                                                                                                                              *
	                                                                                                                                                                                                                              * @see https://github.com/joakimbeng/react-swiper
	                                                                                                                                                                                                                              * @see https://github.com/dogfessional/react-swipeable
	                                                                                                                                                                                                                              * @see https://github.com/damusnet/react-swipe-views
	                                                                                                                                                                                                                              * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
	                                                                                                                                                                                                                              * @see https://github.com/JedWatson/react-tappable
	                                                                                                                                                                                                                              * @see https://github.com/madrobby/zepto/blob/master/src/touch.js
	                                                                                                                                                                                                                              */

	var Touchable = _react2.default.createClass({
	  displayName: 'Touchable',

	  mixins: [_TouchableMixin2.default],

	  propTypes: {
	    component: _react.PropTypes.any
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'span'
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        Component = _props.component,
	        onTap = _props.onTap,
	        props = _objectWithoutProperties(_props, ['component', 'onTap']);

	    if (_isTouchSupported2.default) {
	      _extends(props, this.getTouchHandlers());
	    } else {
	      // handle `tap` as `click` on non-touch devices
	      props.onClick = (0, _createChainedFunction2.default)(props.onClick, onTap);
	    }

	    delete props.moveThreshold;
	    delete props.tapDelay;
	    delete props.pressDelay;
	    delete props.preventDefault;
	    delete props.stopPropagation;
	    delete props.onSwipe;
	    delete props.onSwipeLeft;
	    delete props.onSwipeUp;
	    delete props.onSwipeRight;
	    delete props.onSwipeDown;
	    delete props.onTap;
	    delete props.onSingleTap;
	    delete props.onDoubleTap;
	    delete props.onPress;

	    return _react2.default.createElement(
	      Component,
	      props,
	      this.props.children
	    );
	  }
	});

	exports.default = Touchable;
	exports.Mixin = _TouchableMixin2.default;

	// TODO: Mixin 里似乎没必要使用 state 记录事件相关信息
	// TODO: 添加 touch active className

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * modified version of:
	 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/utils/createChainedFunction.js
	 */

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} one
	 * @param {function} two
	 * @returns {function|null}
	 */

	function createChainedFunction(one, two) {
	  var hasOne = typeof one === 'function';
	  var hasTwo = typeof two === 'function';

	  if (!hasOne && !hasTwo) {
	    return null;
	  }

	  if (!hasOne) {
	    return two;
	  }

	  if (!hasTwo) {
	    return one;
	  }

	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}

	exports.default = createChainedFunction;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var supportTouch = !!('ontouchstart' in global || global.DocumentTouch && document instanceof DocumentTouch);

	exports.default = supportTouch;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 40 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// UC browser UI controller

	var controller = global.navigator && global.navigator.control || {};

	/**
	 * ucUIControl
	 * @param {string} feature - 'gesture' or 'longpressMenu'
	 * @param {boolean} state
	 * @returns {boolean}
	 */
	function ucUIControl(feature, state) {
	  return controller[feature] && controller[feature](state);
	}

	// disable gesture
	ucUIControl('gesture', false);

	exports.default = ucUIControl;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Badge = __webpack_require__(19);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	// TODO: 默认的选中处理
	var TabBar = _react2.default.createClass({
	  displayName: 'TabBar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.node,
	    amStyle: _react.PropTypes.string,
	    onAction: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'nav',
	      onAction: function onAction() {}
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        children = _props.children,
	        onAction = _props.onAction,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'children', 'onAction']);

	    delete props.classPrefix;
	    delete props.amStyle;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.Children.map(children, function (child, index) {
	        var _child$props = child.props,
	            eventKey = _child$props.eventKey,
	            onClick = _child$props.onClick,
	            props = _objectWithoutProperties(_child$props, ['eventKey', 'onClick']);

	        var clickHandler = onClick || onAction;
	        var key = eventKey || index;
	        eventKey = eventKey || key;

	        return _react2.default.createElement(TabBar.Item, _extends({}, props, {
	          onClick: clickHandler.bind(null, eventKey),
	          key: key,
	          eventKey: eventKey
	        }));
	      })
	    );
	  }
	});

	// TODO:
	//   Icon 应该支持用户自定义：
	//   React-native 采用 require('path/to/icon') 的形式，
	//   这里可能需要再添加一个属性
	var TabBarItem = _react2.default.createClass({
	  displayName: 'TabBarItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.any,
	    icon: _react.PropTypes.string, // icon name
	    title: _react.PropTypes.string,
	    href: _react.PropTypes.string,
	    eventKey: _react.PropTypes.any,
	    badge: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	    badgeStyle: _react.PropTypes.string,
	    active: _react.PropTypes.bool, // using `selected`
	    selected: _react.PropTypes.bool, // alias of `active`
	    selectedIcon: _react.PropTypes.node, // not supported now
	    onAction: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabbar',
	      component: 'span',
	      onAction: function onAction() {}
	    };
	  },
	  renderBadge: function renderBadge() {
	    var _props2 = this.props,
	        badge = _props2.badge,
	        badgeStyle = _props2.badgeStyle;


	    return badge ? _react2.default.createElement(
	      _Badge2.default,
	      {
	        amStyle: badgeStyle || 'alert',
	        rounded: true
	      },
	      badge
	    ) : null;
	  },
	  renderIcon: function renderIcon() {
	    var icon = this.props.icon;


	    return icon ? _react2.default.createElement(
	      _Icon2.default,
	      { name: icon, key: 'tabbarIcon' },
	      this.renderBadge()
	    ) : null;
	  },
	  renderTitle: function renderTitle() {
	    var labelClassName = this.prefixClass('label');
	    var title = this.props.title;


	    return title ? _react2.default.createElement(
	      'span',
	      {
	        className: labelClassName,
	        key: 'tabbarTitle'
	      },
	      title
	    ) : null;
	  },
	  render: function render() {
	    var classSet = this.getClassSet(true);

	    var _props3 = this.props,
	        Component = _props3.component,
	        className = _props3.className,
	        props = _objectWithoutProperties(_props3, ['component', 'className']);

	    delete props.classPrefix;
	    delete props.badge;
	    delete props.badgeStyle;
	    delete props.eventKey;
	    delete props.onAction;
	    delete props.active;

	    Component = this.props.href ? 'a' : Component;

	    // TODO: how to display badge when icon not set?

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className, this.prefixClass('item'))
	      }),
	      [this.renderIcon(), this.renderTitle()]
	    );
	  }
	});

	TabBar.Item = TabBarItem;

	exports.default = TabBar;
	module.exports = exports['default'];

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Tabs = _react2.default.createClass({
	  displayName: 'Tabs',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    activeKey: _react.PropTypes.any,
	    defaultActiveKey: _react.PropTypes.any,
	    onAction: _react.PropTypes.func,
	    inset: _react.PropTypes.bool,
	    radius: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tabs'
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      activeKey: this.getDefaultActiveKey(),
	      previousActiveKey: null
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var nextActiveKey = nextProps.activeKey;

	    // update controlled Tabs' state
	    if (nextActiveKey != null && nextActiveKey !== this.props.activeKey) {
	      this.setState({
	        activeKey: nextActiveKey,
	        previousActiveKey: this.props.activeKey
	      });
	    }
	  },
	  getDefaultActiveKey: function getDefaultActiveKey(children) {
	    var defaultActiveKey = this.props.defaultActiveKey;

	    if (defaultActiveKey != null) {
	      return defaultActiveKey;
	    }

	    _react2.default.Children.forEach(children, function (child) {
	      if (defaultActiveKey == null) {
	        defaultActiveKey = child.props.eventKey;
	      }
	    });

	    return defaultActiveKey != null ? defaultActiveKey : 0;
	  },
	  getActiveKey: function getActiveKey() {
	    return this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;
	  },
	  handleClick: function handleClick(key, disabled, e) {
	    e.preventDefault();
	    var activeKey = this.state.activeKey;

	    if (disabled) {
	      return;
	    }

	    if (this.props.onAction) {
	      this.props.onAction(key);
	    }

	    // uncontrolled
	    if (this.props.activeKey == null && activeKey !== key) {
	      this.setState({
	        activeKey: key,
	        previousActiveKey: activeKey
	      });
	    }
	  },
	  renderNav: function renderNav() {
	    var _this = this;

	    var activeKey = this.getActiveKey();

	    var navs = _react2.default.Children.map(this.props.children, function (child, index) {
	      var _child$props = child.props,
	          eventKey = _child$props.eventKey,
	          disabled = _child$props.disabled,
	          href = _child$props.href;

	      var key = index;

	      eventKey = eventKey !== undefined ? eventKey : index;
	      var active = eventKey === activeKey;

	      return _react2.default.createElement(
	        'a',
	        {
	          href: href || 'javascript: void(0);',
	          ref: 'tabNav' + key,
	          key: key,
	          onClick: _this.handleClick.bind(_this, key, disabled),
	          disabled: disabled,
	          className: active ? 'active' : null
	        },
	        child.props.title
	      );
	    });

	    return _react2.default.createElement(
	      'nav',
	      {
	        className: this.prefixClass('nav')
	      },
	      navs
	    );
	  },
	  renderTabPanels: function renderTabPanels() {
	    var activeKey = this.getActiveKey();
	    var panels = _react2.default.Children.map(this.props.children, function (child, index) {
	      var _child$props2 = child.props,
	          eventKey = _child$props2.eventKey,
	          children = _child$props2.children,
	          props = _objectWithoutProperties(_child$props2, ['eventKey', 'children']);

	      if (eventKey === undefined) {
	        eventKey = index;
	      }

	      return _react2.default.createElement(
	        Tabs.Item,
	        _extends({
	          active: eventKey === activeKey,
	          eventKey: eventKey,
	          key: 'tabPanel' + index
	        }, props),
	        children
	      );
	    });

	    return _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('body')
	      },
	      panels
	    );
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['className']);

	    delete props.classPrefix;
	    delete props.activeKey;
	    delete props.defaultActiveKey;
	    delete props.inset;
	    delete props.radius;
	    delete props.onAction;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.renderNav(),
	      this.renderTabPanels()
	    );
	  }
	});

	var TabsItem = _react2.default.createClass({
	  displayName: 'TabsItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    title: _react.PropTypes.node,
	    eventKey: _react.PropTypes.any,
	    disabled: _react.PropTypes.bool,
	    active: _react.PropTypes.bool,
	    noPadded: _react.PropTypes.bool
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'tab'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet(true);

	    var _props2 = this.props,
	        className = _props2.className,
	        children = _props2.children,
	        noPadded = _props2.noPadded,
	        props = _objectWithoutProperties(_props2, ['className', 'children', 'noPadded']);

	    var elementName = 'panel';

	    delete props.classPrefix;
	    delete props.eventKey;
	    delete props.active;
	    delete props.noPadded;
	    delete props.navSize;
	    delete props.navStyle;

	    classSet[this.prefixClass(elementName)] = true;
	    classSet[this.prefixClass(elementName + '-no-padded')] = noPadded;

	    return _react2.default.createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      children
	    );
	  }
	});

	Tabs.Item = TabsItem;

	exports.default = Tabs;

	// TODO: Nav 的可定制性，如允许传入 Router 的 Link 组件

	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var View = _react2.default.createClass({
	  displayName: 'View',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'view',
	      component: 'div'
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        component = _props.component,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['component', 'className']);

	    delete props.classPrefix;

	    return _react2.default.createElement(component, _extends({}, props, {
	      className: (0, _classnames2.default)(className, this.getClassSet())
	    }));
	  }
	});

	exports.default = View;
	module.exports = exports['default'];

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _AvatarService = __webpack_require__(45);

	var _AvatarService2 = _interopRequireDefault(_AvatarService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var defaultAvatar = 'https://img.alicdn.com/tps/TB1.IgIKpXXXXbgXpXXXXXXXXXX-116-116.png';

	// DingTalk UI guide sizes
	var sizes = [88, 70, 60, 50, 40, 36, 28, 24, 20];

	var Avatar = _react2.default.createClass({
	  displayName: 'Avatar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    name: _react.PropTypes.string,
	    href: _react.PropTypes.string,
	    src: _react.PropTypes.string,
	    size: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'avatar',
	      component: 'div',
	      size: 40
	    };
	  },
	  renderImage: function renderImage(src) {
	    return _react2.default.createElement('img', { src: src, alt: 'User avatar' });
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        name = _props.name,
	        src = _props.src,
	        style = _props.style,
	        size = _props.size,
	        defaultSrc = _props.defaultSrc,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'name', 'src', 'style', 'size', 'defaultSrc']);

	    var children = this.renderImage(defaultSrc || defaultAvatar);
	    var backgroundColor = null;
	    var sizeStyle = void 0;

	    delete props.classPrefix;

	    Component = props.href ? 'a' : Component;

	    // avatar-[size]
	    classSet[this.prefixClass(size)] = size;

	    if (sizes.indexOf(Number(size)) === -1) {
	      sizeStyle = {
	        width: size + 'px',
	        height: size + 'px',
	        lineHeight: size + 'px',
	        fontSize: Math.floor(Number(size) / 3)
	      };
	    }

	    if (src) {
	      children = this.renderImage(src);
	    } else if (name) {
	      var _AvatarService$getAva = _AvatarService2.default.getAvatar(name),
	          color = _AvatarService$getAva.color,
	          newName = _AvatarService$getAva.name;

	      backgroundColor = color;
	      children = newName;
	    }

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        style: _extends({ backgroundColor: backgroundColor }, sizeStyle, style),
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      children
	    );
	  }
	});

	exports.default = Avatar;
	module.exports = exports['default'];

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// @via https://github.com/noonnightstorm/dd-avatar/blob/master/src/index.js

	function _isEnglish(name) {
	  return name.match(/^([a-zA-Z]|\s|,|\.)+$/) !== null;
	}

	var colors = ['#78c06e', '#f65e8d', '#f6bf26', '#f65e5e', '#5e97f6', '#9a89b9', '#a1887f', '#ff943e', '#5ec9f6', '#3bc2b5', '#5c6bc0', '#bd84cd', '#6bb5ce', '#c5cb63', '#ff8e6b', '#78919d'];
	var colorsLength = colors.length;

	var AvatarService = {
	  getAvatar: function getAvatar(nick, name) {
	    name = this._getShowName(nick || name);
	    var color = this._getColor(name);

	    return {
	      name: name,
	      color: color
	    };
	  },
	  _getShowName: function _getShowName(name) {
	    var showName = name || '',
	        arr = [];

	    if (_isEnglish(showName)) {
	      // 将“,.”转为空格，如果导致出现连续空格（如原字符为", "，则转换后会为"  "），
	      // 则将连续空格转换为单个空格
	      showName = showName.replace(/,|\./g, ' ').replace(/\s+/g, ' ');

	      arr = showName.split(' ');

	      if (arr.length === 1) {
	        return showName.slice(0, 2);
	      }

	      return arr[0].slice(0, 1) + arr[1].slice(0, 1);
	    }

	    return showName.replace(/,|\.|\s+/g, '').slice(-2);
	  },


	  _getColor: function _getColor(name) {
	    var total = 0;
	    var char = void 0;

	    for (char in name) {
	      total += name.charCodeAt(char);
	    }

	    return colors[total % colorsLength];
	  }
	};

	exports.default = AvatarService;
	module.exports = exports['default'];

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Breadcrumb = _react2.default.createClass({
	  displayName: 'Breadcrumb',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    separator: _react.PropTypes.oneOf(['slash', 'angle', 'chevron'])
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'breadcrumb',
	      component: 'ol',
	      separator: 'chevron'
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        separator = _props.separator,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'separator']);

	    delete props.classPrefix;

	    // separator modifier
	    classSet[this.prefixClass(separator)] = true;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      this.props.children
	    );
	  }
	});

	var BreadcrumbItem = _react2.default.createClass({
	  displayName: 'BreadcrumbItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string,
	    component: _react.PropTypes.any,
	    title: _react.PropTypes.node,
	    href: _react.PropTypes.string,
	    target: _react.PropTypes.string,
	    active: _react.PropTypes.bool,
	    linkComponent: _react.PropTypes.any,
	    linkProps: _react.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      component: 'li',
	      classPrefix: 'breadcrumb-item'
	    };
	  },
	  renderAnchor: function renderAnchor(classNames) {
	    var _props2 = this.props,
	        Component = _props2.component,
	        href = _props2.href,
	        title = _props2.title,
	        target = _props2.target,
	        linkComponent = _props2.linkComponent,
	        linkProps = _props2.linkProps,
	        children = _props2.children,
	        props = _objectWithoutProperties(_props2, ['component', 'href', 'title', 'target', 'linkComponent', 'linkProps', 'children']);

	    linkComponent = linkComponent || 'a';

	    delete props.classPrefix;
	    delete props.active;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames
	      }),
	      _react2.default.createElement(linkComponent, _extends({
	        href: href,
	        title: title,
	        target: target
	      }, linkProps), children)
	    );
	  },
	  render: function render() {
	    var _props3 = this.props,
	        className = _props3.className,
	        href = _props3.href,
	        linkComponent = _props3.linkComponent,
	        Component = _props3.component,
	        children = _props3.children,
	        props = _objectWithoutProperties(_props3, ['className', 'href', 'linkComponent', 'component', 'children']);

	    var classNames = (0, _classnames2.default)(this.getClassSet(), className);

	    delete props.classPrefix;
	    delete props.active;

	    if (href || linkComponent) {
	      return this.renderAnchor(classNames);
	    }

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: classNames
	      }),
	      children
	    );
	  }
	});

	Breadcrumb.Item = BreadcrumbItem;

	exports.default = Breadcrumb;
	module.exports = exports['default'];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Grid = __webpack_require__(16);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _Col = __webpack_require__(17);

	var _Col2 = _interopRequireDefault(_Col);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Gallery = _react2.default.createClass({
	  displayName: 'Gallery',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    avg: _react.PropTypes.number,
	    smAvg: _react.PropTypes.number,
	    mdAvg: _react.PropTypes.number,
	    lgAvg: _react.PropTypes.number
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'gallery',
	      avg: 2
	    };
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        className = _props.className,
	        children = _props.children,
	        props = _objectWithoutProperties(_props, ['className', 'children']);

	    delete props.classPrefix;

	    return _react2.default.createElement(
	      _Grid2.default,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, classSet)
	      }),
	      children
	    );
	  }
	});

	var GalleryItem = _react2.default.createClass({
	  displayName: 'GalleryItem',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    src: _react.PropTypes.string,
	    title: _react.PropTypes.node,
	    meta: _react.PropTypes.node,
	    href: _react.PropTypes.string,
	    linkComponent: _react.PropTypes.any,
	    linkProps: _react.PropTypes.object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'gallery'
	    };
	  },
	  renderImg: function renderImg(src) {
	    var title = this.props.title;


	    return src ? _react2.default.createElement('img', { src: src, alt: title, key: 'galleryImg' }) : null;
	  },
	  renderTitle: function renderTitle(title) {
	    return title ? _react2.default.createElement(
	      'h3',
	      {
	        className: this.prefixClass('title'),
	        key: 'galleryTitle'
	      },
	      title
	    ) : null;
	  },
	  renderMeta: function renderMeta(meta) {
	    return meta ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('meta'),
	        key: 'galleryMeta'
	      },
	      meta
	    ) : null;
	  },
	  renderChildren: function renderChildren(children) {
	    return children ? _react2.default.createElement(
	      'div',
	      {
	        className: this.prefixClass('body'),
	        key: 'galleryBody'
	      },
	      children
	    ) : null;
	  },
	  renderAnchor: function renderAnchor(children) {
	    var _props2 = this.props,
	        linkComponent = _props2.linkComponent,
	        linkProps = _props2.linkProps,
	        href = _props2.href;


	    var Component = linkComponent || (href ? 'a' : null);

	    return Component ? _react2.default.createElement(
	      Component,
	      _extends({
	        href: href
	      }, linkProps),
	      children
	    ) : children;
	  },
	  render: function render() {
	    var _props3 = this.props,
	        className = _props3.className,
	        meta = _props3.meta,
	        title = _props3.title,
	        src = _props3.src,
	        children = _props3.children,
	        props = _objectWithoutProperties(_props3, ['className', 'meta', 'title', 'src', 'children']);

	    var main = [this.renderImg(src), this.renderTitle(title), this.renderMeta(meta), this.renderMeta(children)];

	    delete props.classPrefix;
	    delete props.href;
	    delete props.linkComponent;
	    delete props.linkProps;

	    return _react2.default.createElement(
	      _Col2.default,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(className, this.prefixClass('item'))
	      }),
	      this.renderAnchor(main)
	    );
	  }
	});

	Gallery.Item = GalleryItem;

	exports.default = Gallery;
	module.exports = exports['default'];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _ClassNameMixin = __webpack_require__(5);

	var _ClassNameMixin2 = _interopRequireDefault(_ClassNameMixin);

	var _Icon = __webpack_require__(24);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var noop = function noop() {};

	var SearchBar = _react2.default.createClass({
	  displayName: 'SearchBar',

	  mixins: [_ClassNameMixin2.default],

	  propTypes: {
	    classPrefix: _react.PropTypes.string.isRequired,
	    component: _react.PropTypes.node.isRequired,
	    placeholder: _react.PropTypes.string,
	    cancelText: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    onReset: _react.PropTypes.func,
	    onClear: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      classPrefix: 'searchbar',
	      component: 'form',
	      cancelText: 'Cancel',
	      placeholder: 'Search',
	      onChange: noop,
	      onClear: noop,
	      onReset: noop
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      active: false,
	      value: ''
	    };
	  },
	  handleFocus: function handleFocus() {
	    this.setState({ active: true });
	  },
	  handleBlur: function handleBlur() {
	    if (!this.state.value) {
	      this.setState({ active: false });
	    }
	  },
	  handleChange: function handleChange(e) {
	    this.setState({ value: e.target.value });

	    this.props.onChange(e);
	  },
	  clearValue: function clearValue() {
	    var _this = this;

	    this.setState({ value: '' }, function () {
	      _this.refs.keyword.focus();
	    });

	    this.props.onClear();
	  },
	  reset: function reset() {
	    this.setState(this.getInitialState());
	    this.props.onReset();
	  },
	  render: function render() {
	    var classSet = this.getClassSet();

	    var _props = this.props,
	        Component = _props.component,
	        className = _props.className,
	        cancelText = _props.cancelText,
	        placeholder = _props.placeholder,
	        props = _objectWithoutProperties(_props, ['component', 'className', 'cancelText', 'placeholder']);

	    var _state = this.state,
	        value = _state.value,
	        active = _state.active;


	    delete props.classPrefix;
	    delete props.onClear;
	    delete props.onChange;
	    delete props.onReset;

	    classSet[this.prefixClass('active')] = active;

	    return _react2.default.createElement(
	      Component,
	      _extends({}, props, {
	        className: (0, _classnames2.default)(classSet, className)
	      }),
	      _react2.default.createElement(
	        'div',
	        { className: this.prefixClass('input') },
	        _react2.default.createElement('input', {
	          ref: 'keyword',
	          type: 'search',
	          placeholder: placeholder,
	          onFocus: this.handleFocus,
	          onBlur: this.handleBlur,
	          onChange: this.handleChange,
	          value: value
	        }),
	        _react2.default.createElement(_Icon2.default, { name: 'search', className: this.prefixClass('icon-search') }),
	        _react2.default.createElement(
	          'span',
	          { className: this.prefixClass('placeholder') },
	          placeholder
	        ),
	        _react2.default.createElement(_Icon2.default, {
	          name: 'close',
	          className: (0, _classnames2.default)(this.prefixClass('icon-clear'), value && 'has-value'),
	          onClick: this.clearValue
	        })
	      ),
	      _react2.default.createElement(
	        'button',
	        {
	          type: 'reset',
	          className: this.prefixClass('reset'),
	          onClick: this.reset
	        },
	        cancelText
	      )
	    );
	  }
	});

	exports.default = SearchBar;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var fallback = {
	  detectionRegex: {
	    uc: /ucbrowser/i,
	    zuoku: /zuoku build/i,
	    coolpad: /coolpad/i
	  },

	  addHook: function addHook() {
	    // Android browsers legacy flexbox fallback
	    try {
	      (function () {
	        var ua = navigator.userAgent.toLowerCase();
	        var fbNeeded = false;

	        // TODO: - add version detecting when UC supports flexbox
	        if (/android/i.test(ua)) {
	          Object.keys(fallback.detectionRegex).forEach(function (key) {
	            !fbNeeded && (fbNeeded = fallback.detectionRegex[key].test(ua));
	          });

	          fbNeeded && (document.documentElement.className += ' fb-legacy-flexbox');
	        }
	      })();
	    } catch (e) {}
	  }
	};

	fallback.addHook();

	exports.default = fallback;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;