var makeES6Module = require('../../index');

module.exports = function(broccoli) {
  return makeES6Module(broccoli.makeTree('lib'), {
    main: 'main',
    packageName: 'lib',
    namespace: 'lib',
    imports: {
      'jquery': 'jQuery',
      './foo': 'lib.foo'
    }
  });
};

