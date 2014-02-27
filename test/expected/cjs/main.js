"use strict";
var sum = require("./sum")["default"] || require("./sum");
var product = require("./product")["default"] || require("./product");
exports.sum = sum;
exports.product = product;