//var assert = require('assert');
var assert = require('chai').assert;
var ES6Module = require('../index');

require('shelljs/global');

describe('broccoli-dist-es6-module', function() {
  it('is tested like a sledgehammer', function() {
    cd('examples/multiple');
    rm('-rf', 'dist');
    exec('../../node_modules/.bin/broccoli build dist');
    cd('dist');
    var actual = {
      amd: cat('amd/main.js', 'amd/product.js', 'amd/sum.js'),
      cjs: cat('cjs/main.js', 'cjs/product.js', 'cjs/sum.js'),
      globals: cat('globals/main.js'),
      namedAmd: cat('named-amd/main.js').trim()
    };
    cd('../../../test/expected');
    var expected = {
      amd: cat('amd/main.js', 'amd/product.js', 'amd/sum.js'),
      cjs: cat('cjs/main.js', 'cjs/product.js', 'cjs/sum.js'),
      globals: cat('globals/main.js'),
      namedAmd: cat('named-amd/main.js').trim()
    };
    // sanity assertion, make sure all files aren't empty
    assert.ok(actual.amd.match(/define/));
    assert.equal(actual.amd, expected.amd);
    assert.equal(actual.cjs, expected.cjs);
    assert.equal(actual.globals, expected.globals);
    assert.equal(actual.namedAmd, expected.namedAmd);
  });
  it('only builds for targets specified', function() {
    var output = ES6Module('.', {
      global: 'Test.Package',
      packageName: 'test-package',
      main: 'index',
      targets: [ 'amd', 'cjs' ]
    });

    assert.equal(output.inputTrees.length, 2);
    assert.deepEqual(output.inputTrees.map(function(tree) { return tree.options.destDir; }), [ 'cjs', 'amd']);
  });
  it('will build all targets when none are specified', function() {
    var output = ES6Module('.', {
      global: 'Test.Package',
      packageName: 'test-package',
      main: 'index',
    });

    assert.equal(output.inputTrees.length, 4);
  });
});

