var filterES6Modules = require('broccoli-es6-module-filter');
var pickFiles = require('broccoli-static-compiler');
var broconcat = require('broccoli-concat');
var extend = require('extend');

var defaults = {
  global: 'window'
};

module.exports = function (tree, userOptions) {
  var options = extend({}, defaults, userOptions);
  return [
    makeDist('cjs')(transpileCJS(tree)),
    makeDist('amd')(transpileAMD(tree)),
    makeConcatDist('named-amd')(transpileNamedAMD(tree, options)),
    makeConcatDist('globals')(transpileGlobals(tree, options))
  ];
};

function makeConcatDist(dir) {
  return function(tree) {
    return concat(dir)(makeDist(dir)(tree));
  }
}

function makeDist(dir) {
  return function(tree) {
    return pickFiles(tree, {
      srcDir: '/',
      destDir: dir
    });
  };
}

function transpileCJS(tree) {
  return filterES6Modules(tree, {
    moduleType: 'cjs',
    compatFix: true
  });
}

function transpileAMD(tree) {
  return filterES6Modules(tree, {
    moduleType: 'amd',
    compatFix: true
  });
}

function transpileNamedAMD(tree, options) {
  return filterES6Modules(tree, {
    moduleType: 'amd',
    anonymous: false,
    compatFix: true,
    packageName: options.packageName
  });
}

function transpileGlobals(tree, options) {
  return filterES6Modules(tree, extend({}, options, {
    moduleType: 'globals',
    anonymous: false,
  }));
}

function concat(distDir) {
  return function(tree) {
    return broconcat(tree, {
      inputFiles: ['**/*.js'],
      outputFile: '/'+distDir+'/main.js'
    });
  };
}
