/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('core:', msg);
};


Object.defineProperty(Object.prototype, 'Omap',
{
  value: function(f, ctx)
  {
    ctx = ctx || this;
    var self = this,
      result = {};
    Object.keys(self).forEach(function(v)
    {
      result[v] = f.call(ctx, self[v], v, self);
    });
    return result;
  }
});

//----------
var fs = require('fs');

var spacetime = function()
{
  log('spacetime initialization');

  var objTemplate = {

    compute: function()
    {


      log('--compute--');
      log(this.src());


      return this;
    }
  };

  var functionsDir = fs.readdirSync('./functions');

  log('functions loading');
  log(functionsDir);

  functionsDir
    .map(function(dirName)
    {
      log(dirName);

      var moduleName = dirName
        .split('spacetime-function-')[1]
        .split('.js')[0];

      objTemplate[moduleName] =
        require('./functions/' + dirName + '/' + moduleName);

      log(moduleName + ' loaded');
    });

  //=======================
  var f = function(src)
  {
    var obj = objTemplate;
    obj.src = function() //first src as a closure for lazyEval
    {
      return src;
    };
    return obj;
  };

  return f;




};

module.exports = spacetime;