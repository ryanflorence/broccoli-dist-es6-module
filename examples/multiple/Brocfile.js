var makeModules = require('../../index');

module.exports = function(broccoli) {
  return makeModules(broccoli.makeTree('lib'), {
    main: 'main',
    packageName: 'arithmetic',
    global: 'Arithmetic',
    shim: {
      'jquery': 'jQuery'
    }
  });
};

