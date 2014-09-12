broccoli-dist-es6-module
========================

[![Build Status](https://travis-ci.org/rpflorence/broccoli-dist-es6-module.png)](https://travis-ci.org/rpflorence/broccoli-dist-es6-module)

![demo](http://recordit.co/D0rmdYb2Vp/gif)

Author your library in ES6 modules and distribute in everything under
the sun:

- cjs
- amd
- amd, named & concatenated
- globals, concatenated

Installation
------------

```sh
$ npm install broccoli-dist-es6-module
```

Usage: Sample `Brocfile.js`
---------------------------

```js
var dist = require('broccoli-dist-es6-module');

module.exports = dist('lib', {

  // the entry script, and module that becomes the global
  main: 'main',

  // will become window.ic.ajax with the exports from `main`
  global: 'ic.ajax',

  // the prefix for named-amd modules
  packageName: 'ic-ajax',

  // global output only: naive shimming, when the id 'ember' is imported,
  // substitute with `window.Ember` instead
  shim: {
    'ember': 'Ember'
  }
});
```

And then run broccoli:

```sh
$ broccoli build dist
```

Open up `dist` to see the results.

Options
-------

- `main` - the entry script to your package, determines which module
  exports to your global namespace, also the package that is returned in
  AMD with `require(['your-package-name'])`

- `targets` - which module systems to build for _(defaults to all)_

- `packageName` - _named-amd_, the name of your package
  `require(['your-package-name'])`;

- `global` - _globals_: the global to attach your `main` module to

- `shim` - _globals_: map import string ids to objects on `window`, see
  usage above or the examples

Notes
-----

- This uses the `compatFix` option of the es6-module-transpiler which is
  not necessarily future proof (but without it we couldn't `import
  jQuery from 'jquery'`).

- The shimming is really hacky, but its working.

