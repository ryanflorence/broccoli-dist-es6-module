"use strict";
var foo = require("./foo")["default"];

var bar = function($el) {
  foo($el);
};

exports["default"] = bar;