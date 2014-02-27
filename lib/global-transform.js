var fs = require('fs');
var path = require('path');
var Transform = require('broccoli-transform');
var browserify = require('browserify');
var Promise = require('rsvp').Promise;

module.exports = GlobalTransform

GlobalTransform.prototype = Object.create(Transform.prototype);
GlobalTransform.prototype.constructor = GlobalTransform;
function GlobalTransform(inputTree, options) {
  if (!(this instanceof GlobalTransform)) {
    return new GlobalTransform(inputTree, options);
  }
  this.inputTree = inputTree
  this.options = options;
}

GlobalTransform.prototype.transform = function(srcDir, destDir) {
  var global = this.options.global;
  var entry = path.resolve(path.join(srcDir, this.options.main+'.js'))
  var b = browserify(entry);
  return new Promise(function(resolve) {
    b.bundle({
      standalone: global
    }, function(err, src) {
      fs.writeFileSync(path.join(destDir, 'main.js'), src);
      resolve();
    });
  });
};

