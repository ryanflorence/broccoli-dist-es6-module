var makeModules = require('../../index');

module.exports = makeModules('lib', {
  main: 'main',
  packageName: 'arithmetic',
  global: 'Arithmetic',
  shim: {
    'jquery': 'jQuery'
  }
});

