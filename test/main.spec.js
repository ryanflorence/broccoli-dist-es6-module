var assert = require('assert');
require('shelljs/global');

describe('broccoli-dist-es6-module', function() {
  it('is tested like a sledgehammer', function() {
    cd('examples/multiple');
    rm('-rf', 'dist');
    exec('../../node_modules/.bin/broccoli build dist');
    cd('dist');
    var actual = {
      amd: cat('amd/bar.js', 'amd/foo.js', 'amd/main.js'),
      cjs: cat('cjs/bar.js', 'cjs/foo.js', 'cjs/main.js'),
      globals: cat('globals/main.js'),
      namedAmd: cat('named-amd/main.js')
    };
    cd('../../../test/expected');
    var expected = {
      amd: cat('amd/bar.js', 'amd/foo.js', 'amd/main.js'),
      cjs: cat('cjs/bar.js', 'cjs/foo.js', 'cjs/main.js'),
      globals: cat('globals/main.js'),
      namedAmd: cat('named-amd/main.js')
    };
    assert.ok(actual.amd.match(/define/)); // sanity test
    assert.deepEqual(actual, expected);
  });
});

