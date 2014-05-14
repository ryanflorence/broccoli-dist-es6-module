!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Arithmetic=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
exports["default"] = function(x, y) {
  return x * y;
};
},{}],2:[function(_dereq_,module,exports){
"use strict";
var jQuery = window.jQuery["default"] || window.jQuery;
var sum = _dereq_("./sum")["default"] || _dereq_("./sum");
var product = _dereq_("./product")["default"] || _dereq_("./product");
exports.sum = sum;
exports.product = product;
},{"./product":1,"./sum":3}],3:[function(_dereq_,module,exports){
"use strict";
exports["default"] = function(x, y) {
  return x + y;
};
},{}]},{},[2])
(2)
});