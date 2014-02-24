broccoli-dist-es6-module
===================

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

  // if your source files live in `lib`
  var tree = broccoli.makeTree('lib');

  return makeES6Module(tree, {

    // the global you want your modules attached to in the globals build
    global: 'ic',

    // maps es6 import ids to the global variables for globals build
    // if they are identical, you don't need to configure anything
    imports: {
      'ember': 'Ember',
      'jquery': 'jQuery',
      'ic-ajax': 'ic.ajax',
      // relative paths must be shimmed (I would like to script this)
      './foo': 'ic.foo'
    }
  });

};
```

And then run broccoli:

```sh
$ broccoli build output
```

Open up output to see the results.

Options
-------

- `global` - the global to attach your modules to.
- `imports` - object map of module ids to global variable names.

Notes
-----

- This depends this open pull request, https://github.com/square/es6-module-transpiler/pull/98

- This uses the controversial `compatFix` option of the
  es6-module-transpiler which is not necessarily future proof (but
  without it we couldn't `import jQuery from 'jquery'`).

- Relative file path imports have to all be named in the `imports`
  option for the globals build to work until I (or you) write script to
  do it for us.

TODO:
-----

- Tests, ofc.
- Companion `release` script that publishes the cjs build to npm, and
  the other three to bower.

