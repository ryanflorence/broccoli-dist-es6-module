var makeES6Module = require('broccoli-dist-es6-module');

module.exports = function(broccoli) {
  return makeES6Module(broccoli.makeTree('lib'), {
    global: 'myNamespace',
    packageName: 'fake-lib',
    imports: {
      'jquery': 'jQuery',
      './foo': 'myNamespace.foo'
    }
  });
};

