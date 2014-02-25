"use strict";
var jQuery = require("jquery")["default"] || require("jquery");

var foo = function($el) {
  $el.hide();
};

exports["default"] = foo;