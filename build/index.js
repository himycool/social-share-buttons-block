(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
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
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
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

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * WordPress dependencies
 */

var withSelect = wp.data.withSelect; // import { withSelect } from '@wordpress/data'

var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    RadioControl = _wp$components.RadioControl,
    Placeholder = _wp$components.Placeholder,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices; // import { IconButton, PanelBody, RangeControl, ToggleControl, Toolbar, withNotices } from '@wordpress/components';

var Fragment = wp.element.Fragment; // import { Fragment } from '@wordpress/element';

var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    MediaUpload = _wp$blockEditor.MediaUpload,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar; // Import * from @wordpress/blockEditor 

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      className = _ref.className,
      noticeOperations = _ref.noticeOperations,
      noticeUI = _ref.noticeUI;
  var url = attributes.url,
      title = attributes.title,
      align = attributes.align,
      width = attributes.width,
      height = attributes.height,
      contentAlign = attributes.contentAlign,
      id = attributes.id,
      currentPagePermalink = attributes.currentPagePermalink,
      selectedSocialMediaChannels = attributes.selectedSocialMediaChannels,
      showButtonIcon = attributes.showButtonIcon,
      showButtonText = attributes.showButtonText,
      socialMediaChannels = attributes.socialMediaChannels;

  var getCurrentPagePermalink = function getCurrentPagePermalink() {
    return setAttributes({
      currentPagePermalink: wp.data.select('core/editor').getPermalink()
    });
  };

  getCurrentPagePermalink();

  var updateContentAlign = function updateContentAlign(nextAlign) {
    return setAttributes({
      contentAlign: nextAlign
    });
  };

  var capitalizeFirstLetter = function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  };

  var updateSelectedSocialMediaChannels = function updateSelectedSocialMediaChannels(selectedSocialMediaChannel) {
    // if selectedChannel exists in selectedSocialMediaChannels remove it, otherwise add it
    var selectedSocialMediaChannelText = selectedSocialMediaChannel[0];
    var addSelectedChannelToArray = selectedSocialMediaChannels.concat(selectedSocialMediaChannelText); // Avoided using .push because it mutates original 'selectedSocialMediaChannels' .NB: Also avoid .pop

    var showButton = {};
    showButton[selectedSocialMediaChannelText] = true;
    showButton['selectedSocialMediaChannels'] = addSelectedChannelToArray;
    var hideButton = {};
    hideButton[selectedSocialMediaChannelText] = false;
    hideButton['selectedSocialMediaChannels'] = selectedSocialMediaChannels;

    if (selectedSocialMediaChannels.includes(selectedSocialMediaChannelText)) {
      // Check whether selected social media channel exists in selectedSocialMediaChannels
      selectedSocialMediaChannels.splice(selectedSocialMediaChannels.indexOf(selectedSocialMediaChannelText), 1); // Remove selected social media channel from selectedSocialMediaChannels

      setAttributes(hideButton); // Update attributes to hide button
    } else {
      // Add selected social media channel to selectedSocialMediaChannels using 'addSelectedChannelToArray' within 'showButton'
      setAttributes(showButton); // Update attributes to show button
    }
  };

  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('bttn-primary', 'hms-social-share-buttons-settings');

  var SocialShareButtons = function SocialShareButtons(_ref2) {
    var socialMediaChannels = _ref2.socialMediaChannels;
    return (// loop through 'socialMediaChannels' and return selected 'SocialShareButtons'. <button> 'key' attribute is important!
      Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, socialMediaChannels.map(function (socialMediaChannel) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, attributes[socialMediaChannel.name.toLowerCase()] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          className: classes + ' hms-social-share-buttons-' + socialMediaChannel.name.toLowerCase(),
          key: socialMediaChannel.name.toLowerCase(),
          onClick: function onClick() {
            socialMediaChannel.name === 'Print' ? socialMediaChannel.link : window.open(socialMediaChannel.link.replace("urlToShare", currentPagePermalink), "_blank");
          }
        }, showButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
          className: socialMediaChannel.icon
        }), showButtonText && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("\xA0 \xA0" + socialMediaChannel.name)));
      }))
    );
  };

  var controls = // Set Block and Inspector Controls
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(AlignmentToolbar, {
    value: contentAlign,
    onChange: updateContentAlign
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(PanelBody, {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Social Share Channels')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SelectControl, {
    multiple: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Select Social Media Channels'),
    value: selectedSocialMediaChannels,
    onChange: updateSelectedSocialMediaChannels,
    options: socialMediaChannels.map(function (socialMediaChannel) {
      var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])(socialMediaChannels.indexOf(socialMediaChannel) + 1 + '. ' + socialMediaChannel.name);

      var value = socialMediaChannel.name.toLowerCase();
      return {
        label: label,
        value: value
      };
    })
  }))));

  if (!selectedSocialMediaChannels.length) {
    // Show placeholder if no selected Social Media Channels
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, controls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Placeholder, {
      icon: "share",
      label: "Please use the Block Inspector section to Select the Share Buttons you want to add here."
    }));
  }

  return (// Return Social Share Butons with selected block inspector settings and block controls. 
    Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, controls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        'text-align': contentAlign
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SocialShareButtons, {
      socialMediaChannels: socialMediaChannels
    })))
  );
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */



/**
 * WordPress dependencies
 */

var withSelect = wp.data.withSelect; // import { withSelect } from '@wordpress/data'

var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    RadioControl = _wp$components.RadioControl,
    Placeholder = _wp$components.Placeholder,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices; // import { IconButton, PanelBody, RangeControl, ToggleControl, Toolbar, withNotices } from '@wordpress/components';

var Fragment = wp.element.Fragment; // import { Fragment } from '@wordpress/element';

var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    MediaUpload = _wp$blockEditor.MediaUpload,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar; // Import * from @wordpress/blockEditor 

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



var blockAttributes = {
  title: {
    type: 'array',
    source: 'children',
    selector: 'p'
  },
  url: {
    type: 'string'
  },
  align: {
    type: 'string'
  },
  width: {
    type: 'number'
  },
  height: {
    type: 'number'
  },
  contentAlign: {
    type: 'string',
    default: 'center'
  },
  id: {
    type: 'number'
  },
  currentPagePermalink: {
    type: 'string'
  },
  selectedSocialMediaChannels: {
    type: 'array',
    default: []
  },
  showButtonIcon: {
    type: 'boolean',
    default: true
  },
  showButtonText: {
    type: 'boolean',
    default: true
  },
  facebook: {
    type: 'boolean',
    default: false
  },
  twitter: {
    type: 'boolean',
    default: false
  },
  messenger: {
    type: 'boolean',
    default: false
  },
  linkedin: {
    type: 'boolean',
    default: false
  },
  pinterest: {
    type: 'boolean',
    default: false
  },
  reddit: {
    type: 'boolean',
    default: false
  },
  email: {
    type: 'boolean',
    default: false
  },
  gmail: {
    type: 'boolean',
    default: false
  },
  yahoo: {
    type: 'boolean',
    default: false
  },
  print: {
    type: 'boolean',
    default: false
  },
  blogger: {
    type: 'boolean',
    default: false
  },
  flipboard: {
    type: 'boolean',
    default: false
  },
  whatsapp: {
    type: 'boolean',
    default: false
  },
  telegram: {
    type: 'boolean',
    default: false
  },
  wechat: {
    type: 'boolean',
    default: false
  },
  socialMediaChannels: {
    type: 'array',
    default: [{
      name: 'Facebook',
      link: 'https://www.facebook.com/sharer.php?u=urlToShare',
      icon: 'fab fa-facebook-f'
    }, {
      name: 'Twitter',
      link: 'https://twitter.com/intent/tweet?url=urlToShare',
      icon: 'fab fa-twitter'
    }, {
      name: 'Messenger',
      link: 'https://www.facebook.com/dialog/send?link=urlToShare&app_id=408838532975140&redirect_uri=urlToShare',
      icon: 'fab fa-facebook-messenger'
    }, {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/shareArticle?url=urlToShare',
      icon: 'fab fa-linkedin-in'
    }, {
      name: 'Pinterest',
      link: 'http://pinterest.com/pin/create/button/?url=urlToShare',
      icon: 'fab fa-pinterest-p'
    }, {
      name: 'Reddit',
      link: 'https://reddit.com/submit?url=urlToShare',
      icon: 'fab fa-reddit-alien'
    }, {
      name: 'Email',
      link: 'mailto:?body=urlToShare',
      icon: 'fas fa-envelope'
    }, {
      name: 'Gmail',
      link: 'https://mail.google.com/mail/?view=cm&body=urlToShare',
      icon: 'fas fa-envelope-square'
    }, {
      name: 'Yahoo',
      link: 'http://compose.mail.yahoo.com/?body=urlToShare',
      icon: 'fab fa-yahoo'
    }, {
      name: 'Print',
      link: 'window.print()',
      icon: 'fas fa-print'
    }, {
      name: 'Blogger',
      link: 'https://www.blogger.com/blog-this.g?u=urlToShare',
      icon: 'fab fa-blogger-b'
    }, {
      name: 'Flipboard',
      link: 'https://share.flipboard.com/bookmarklet/popout?v=2&url=urlToShare',
      icon: 'fab fa-flipboard'
    }, {
      name: 'WhatsApp',
      link: 'https://web.whatsapp.com/send?text=urlToShare',
      icon: 'fab fa-whatsapp'
    }, {
      name: 'Telegram',
      link: 'https://t.me/share/url?url=urlToShare',
      icon: 'fab fa-telegram'
    }, {
      name: 'WeChat',
      link: 'https://chart.apis.google.com/chart?cht=qr&chs=154x154&chld=Q%7C0&chl=urlToShare',
      icon: 'fab fa-weixin'
    }]
  }
};
/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/social-share-buttons', {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Social Share Buttons', 'social-share-buttons'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Social share button for article detail page – build step required.', 'social-share-buttons'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'share',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },
  example: {
    attributes: {
      facebook: true,
      twitter: true,
      linkedin: true,
      pinterest: true,
      reddit: true,
      gmail: true,
      yahoo: true,
      whatsapp: true,
      telegram: true,
      selectedSocialMediaChannels: ["facebook", "twitter", "linkedin", "pinterest", "reddit", "gmail", "yahoo", "whatsapp", "telegram"]
    }
  },
  attributes: blockAttributes,
  // Block attributes for editing in the block inspector.

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * WordPress dependencies
 */

var withSelect = wp.data.withSelect; // import { withSelect } from '@wordpress/data'

var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Panel = _wp$components.Panel,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    CheckboxControl = _wp$components.CheckboxControl,
    RadioControl = _wp$components.RadioControl,
    Placeholder = _wp$components.Placeholder,
    Toolbar = _wp$components.Toolbar,
    withNotices = _wp$components.withNotices; // import { IconButton, PanelBody, RangeControl, ToggleControl, Toolbar, withNotices } from '@wordpress/components';

var Fragment = wp.element.Fragment; // import { Fragment } from '@wordpress/element';

var _wp$blockEditor = wp.blockEditor,
    BlockControls = _wp$blockEditor.BlockControls,
    InspectorControls = _wp$blockEditor.InspectorControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    MediaUpload = _wp$blockEditor.MediaUpload,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar; // Import * from @wordpress/blockEditor 

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  var url = attributes.url,
      title = attributes.title,
      align = attributes.align,
      width = attributes.width,
      height = attributes.height,
      contentAlign = attributes.contentAlign,
      id = attributes.id,
      currentPagePermalink = attributes.currentPagePermalink,
      selectedSocialMediaChannels = attributes.selectedSocialMediaChannels,
      showButtonIcon = attributes.showButtonIcon,
      showButtonText = attributes.showButtonText,
      socialMediaChannels = attributes.socialMediaChannels;
  var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()('bttn-primary', 'hms-social-share-buttons-settings');

  var SocialShareButtons = function SocialShareButtons(_ref2) {
    var socialMediaChannels = _ref2.socialMediaChannels;
    return (// loop through 'socialMediaChannels' and return selected 'SocialShareButtons'. <button> 'key' attribute is important!
      Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, socialMediaChannels.map(function (socialMediaChannel) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, attributes[socialMediaChannel.name.toLowerCase()] && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          className: classes + ' hms-social-share-buttons-' + socialMediaChannel.name.toLowerCase(),
          key: socialMediaChannel.name.toLowerCase(),
          onClick: socialMediaChannel.name === 'Print' ? socialMediaChannel.link : "window.open('" + socialMediaChannel.link.replace('urlToShare', currentPagePermalink) + "', '_blank')"
        }, showButtonIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("i", {
          className: socialMediaChannel.icon
        }), showButtonText && Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("\xA0 \xA0" + socialMediaChannel.name)));
      }))
    );
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    style: {
      'text-align': contentAlign
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SocialShareButtons, {
    socialMediaChannels: socialMediaChannels
  }));
}

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map