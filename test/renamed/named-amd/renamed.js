define("arithmetic/product",
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function(x, y) {
      return x * y;
    };
  });
define("arithmetic",
  ["jquery","./sum","./product","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var jQuery = __dependency1__["default"] || __dependency1__;
    var sum = __dependency2__["default"] || __dependency2__;
    var product = __dependency3__["default"] || __dependency3__;
    __exports__.sum = sum;
    __exports__.product = product;
  });
define("arithmetic/sum",
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function(x, y) {
      return x + y;
    };
  });