var makeModules = require('../../index');

module.exports = function(broccoli) {
  return makeModules('lib', {
    main: 'main',
    packageName: 'arithmetic',
    global: 'Arithmetic',
    shim: {
      'jquery': 'jQuery'
    }
  });
};

