var broccoli = require('broccoli');
var filterES6Modules = require('broccoli-es6-module-filter');
var pickFiles = require('broccoli-static-compiler');
var broconcat = require('broccoli-concat');
var extend = require('extend');
var globalize = require('./lib/global-transform');

module.exports = function (tree, options) {
  validateOptions(options);
  return mergeTrees([
    makeDist('cjs')(transpileCJS(tree)),
    makeDist('amd')(transpileAMD(tree)),
    makeConcatDist('named-amd')(transpileNamedAMD(tree, options)),
    makeDist('globals')(transpileGlobals(tree, options))
  ]);
};

function mergeTrees(trees) {
  return new broccoli.MergedTree(trees);
}

function validateOptions(options) {
  if (!options.main) throw new Error('You must provide a `main` option so I know which file is your entry script.');
  if (!options.global) throw new Error('You must provide a `global` option so I know what to attach your main script to on the window.');
}

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
    packageName: options.packageName,
    main: options.main
  });
}

function transpileGlobals(tree, options) {
  return globalize(transpileCJS(tree), options);
}

function concat(distDir) {
  return function(tree) {
    return broconcat(tree, {
      inputFiles: ['**/*.js'],
      outputFile: '/'+distDir+'/main.js'
    });
  };
}



