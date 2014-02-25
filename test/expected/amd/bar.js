define(
  ["./foo","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var foo = __dependency1__["default"];

    var bar = function($el) {
      foo($el);
    };

    __exports__["default"] = bar;
  });