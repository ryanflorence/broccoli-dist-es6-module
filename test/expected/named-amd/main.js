define("fake-lib/bar",
  ["./foo","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var foo = __dependency1__["default"] || __dependency1__;

    var bar = function($el) {
      foo($el);
    };

    __exports__["default"] = bar;
  });define("fake-lib/foo",
  ["jquery","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var jQuery = __dependency1__["default"] || __dependency1__;

    var foo = function($el) {
      $el.hide();
    };

    __exports__["default"] = foo;
  });define("fake-lib",
  ["exports"],
  function(__exports__) {
    "use strict";
    var lol = 'lol';
    __exports__.lol = lol;
  });