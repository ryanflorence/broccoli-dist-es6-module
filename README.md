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
// at its simplest form, just give it a tree
require('broccoli-dist-es6-module')(tree);
```

Sample `Brocfile.js`:

```js
var makeES6Module = require('broccoli-dist-es6-module');

module.exports = function(broccoli) {

  // lets say your source files live in `lib`
  var tree = broccoli.makeTree('lib');

  return makeES6Module(tree, {

    // for globals: which global to export your modules to
    global: 'myNamespace',

    // for named-amd: the prefix to all ids
    // ex. `define('fake-lib/foo', ...)
    packageName: 'fake-lib',

    // for named-amd: which module lives on the the packageName's id
    // ex. `define('fake-lib', ...)` instead of:
    //     `define('fake-lib/index', ...)
    main: 'index',

    // for globals: maps es6 import ids to the global variables
    imports: {
      'jquery': 'jQuery',
      // relative paths must be shimmed, too
      './foo': 'myNamespace.foo'
    }
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

- `packageName` - for named-amd, the name of your package
- `main` - for named-amd, the script to be returned with
  `require(['your-package-name'])`;
- `global` - the global to attach your modules to
- `imports` - object map of module ids to global variable names

Notes
-----

- This depends on this open pull request, https://github.com/square/es6-module-transpiler/pull/98

- This uses the `compatFix` option of the es6-module-transpiler which is
  not necessarily future proof (but without it we couldn't `import
  jQuery from 'jquery'`).

- Relative file path imports have to all be named in the `imports`
  option for the globals build to work until I (or you) write script to
  do it for us.

