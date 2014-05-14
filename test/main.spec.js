//var assert = require('assert');
var assert = require('chai').assert;
require('shelljs/global');

var baseDir = pwd();

describe('broccoli-dist-es6-module', function() {

  beforeEach(function(done){
    cd(baseDir);
    done();
  });

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

  it('is renames all the builds properly', function() {
    cd('examples/renamed');
    rm('-rf', 'dist');
    exec('../../node_modules/.bin/broccoli build dist');
    cd('dist');
    var actual = {
      amd: cat('amd/renamed.js', 'amd/product.js', 'amd/sum.js'),
      cjs: cat('cjs/renamed.js', 'cjs/product.js', 'cjs/sum.js'),
      globals: cat('globals/renamed.js'),
      namedAmd: cat('named-amd/renamed.js').trim()
    };
    cd('../../../test/renamed');
    var expected = {
      amd: cat('amd/renamed.js', 'amd/product.js', 'amd/sum.js'),
      cjs: cat('cjs/renamed.js', 'cjs/product.js', 'cjs/sum.js'),
      globals: cat('globals/renamed.js'),
      namedAmd: cat('named-amd/renamed.js').trim()
    };
    // sanity assertion, make sure all files aren't empty
    assert.ok(actual.amd.match(/define/));
    assert.equal(actual.amd, expected.amd);
    assert.equal(actual.cjs, expected.cjs);
    assert.equal(actual.globals, expected.globals);
    assert.equal(actual.namedAmd, expected.namedAmd);
  });
});

