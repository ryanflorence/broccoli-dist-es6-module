var makeES6Module = require('../../index');

module.exports = function(broccoli) {
  return makeES6Module(broccoli.makeTree('lib'), {
    global: 'myNamespace',
    main: 'main',
    packageName: 'fake-lib',
    imports: {
      'jquery': 'jQuery',
      './foo': 'myNamespace.foo'
    }
  });
};

