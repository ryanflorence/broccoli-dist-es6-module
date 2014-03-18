var makeModules = require('../../index');

module.exports = function(broccoli) {
  var css = broccoli.makeTree('css');
  var lib = makeModules(broccoli.makeTree('lib'), {
    main: 'main',
    packageName: 'arithmetic',
    global: 'Arithmetic',
    shim: {
      'jquery': 'jQuery'
    }
  });
  return [lib, css];
};

