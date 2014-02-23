var makeES6Module = require('broccoli-es6-module');

module.exports = function(broccoli) {
  return makeES6Module(broccoli.makeTree('lib'), {
    global: 'myNamespace',
    imports: {
      'jquery': 'jQuery',
      './foo': 'myNamespace.foo'
    }
  });
};

