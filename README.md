broccoli-dist-es6-module
========================

[![Build Status](https://travis-ci.org/rpflorence/broccoli-dist-es6-module.png)](https://travis-ci.org/rpflorence/broccoli-dist-es6-module)

![demo](http://recordit.co/JYRVed4heS.gif)

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

Usage
-----

```js
// give it a tree and two options:
makeModules('broccoli-dist-es6-module')(tree, {
  main: 'index',
  global: 'MyLib',
  packageName: 'my-lib'
});
```

Sample `Brocfile.js`:

```js
var makeModules = require('../../index');

module.exports = function(broccoli) {

  // make a tree from your source files
  var src = broccoli.makeTree('lib');

  return makeModules(tree, {
    main: 'index',
    global: 'MyLib',
    packageName: 'my-lib'
  });

};
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

- `packageName` - for named-amd, the name of your package
  `require(['your-package-name'])`;

- `global` - the global to attach your `main` module to


Notes
-----

- This uses the `compatFix` option of the es6-module-transpiler which is
  not necessarily future proof (but without it we couldn't `import
  jQuery from 'jquery'`).

