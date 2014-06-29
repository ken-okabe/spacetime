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

var type = function(obj)
{
  return Object
    .prototype
    .toString
    .call(obj)
    .slice(8, -1);
};

//----------
var g = global;
g.F = {};
var F = g.F;

g.type = type;

var fs = require('fs');

var spacetime = function()
{
  log('=== spacetime initialization ===');

  var objTemplate = {};

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

      F[moduleName] = objTemplate[moduleName];

      log(moduleName + ' loaded');
    });

  //=======================
  var f = function(src)
  {
    var newObj = require('clone')(objTemplate);
    log('f called');

    newObj.src = function() //first src as a closure for lazyEval
    {
      var seq = src;
      log(seq);
      var cursor = 0;

      var it = {
        next: function()
        {
          cursor++;
          return seq[cursor - 1];
        },
        hasNext: function()
        {
          return cursor < seq.length;
        }
      };

      return it;

    };
    log('return newly created obj');
    return newObj;
  };

  return f;

};

module.exports = spacetime;