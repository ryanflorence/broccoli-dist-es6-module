"use strict";
var foo = require("./foo")["default"] || require("./foo");

var bar = function($el) {
  foo($el);
};

exports["default"] = bar;