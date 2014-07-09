/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('generator:', msg);
};
//----------

var memoize = require('memoizee');

var generator = function(f)
{
  var cursor = 0;
  var seq = [];



  var preObj = this;
  // var pre_it = preObj.it;

  var newObj = preObj;
  newObj.it = function()
  {
    //log('generatorF called');

    var it = {
      next: function()
      {
        cursor++;

        seq[cursor - 1] = f(cursor - 1);

        return seq[cursor - 1];
      },
      hasNext: function()
      {
        return cursor < seq.length;
      }
    };
    /*,
      getSeq: function(n)
      {
        return seq[n];
      },
      getCursor: function()
      {
        return cursor;
      }*/

    return it;
  };

  return newObj;
};

module.exports = generator;
