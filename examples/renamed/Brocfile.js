var makeModules = require('../../index');

module.exports = makeModules('lib', {
  main: 'renamed',
  packageName: 'arithmetic',
  global: 'Arithmetic',
  shim: {
    'jquery': 'jQuery'
  }
});

