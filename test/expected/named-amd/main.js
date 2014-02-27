define("arithmetic",
  ["./sum","./product","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var sum = __dependency1__["default"] || __dependency1__;
    var product = __dependency2__["default"] || __dependency2__;
    __exports__.sum = sum;
    __exports__.product = product;
  });define("arithmetic/product",
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function(x, y) {
      return x * y;
    };
  });define("arithmetic/sum",
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function(x, y) {
      return x + y;
    };
  });