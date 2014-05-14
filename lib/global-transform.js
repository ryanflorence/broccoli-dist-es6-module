var fs = require('fs');
var path = require('path');
var Transform = require('broccoli-transform');
var browserify = require('browserify');
var Promise = require('rsvp').Promise;
var through = require('through');

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
  var main = this.options.main;
  var entry = path.resolve(path.join(srcDir, main+'.js'));
  var shims = this.options.shim;
  var b = browserify(entry);
  b.transform(function (file) {
    var data = '';
    return through(write, end);
    function write (buf) { data += buf }
    function end () {
      var newData = data;
      // TODO: this is a hack, but it works, so I'm shipping it...
      for (var key in shims) {
        var needle = new RegExp('require\\("'+key+'"\\)', 'g');
        var replacement = 'window.'+shims[key];
        newData = newData.replace(needle, replacement);
      }
      this.queue(newData);
      this.queue(null);
    }
  });

  return new Promise(function(resolve) {
    b.bundle({
      standalone: global
    }, function(err, src) {
      if (err) throw new Error(err);
      fs.writeFileSync(path.join(destDir, main + '.js'), src);
      resolve();
    });
  });
};


