/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('reduce:', msg);
};


var reduce = function(f)
{
  var preObj = this;
  var pre_it = preObj.it;

  var newObj = preObj;
  newObj.it = function()
  {
    log('--reduce--');

    var preIt = pre_it();

    var seq = [];

    var a = preIt.next();
    var b;

    while (preIt.hasNext())
    {
      b = preIt.next();
      a = f(a, b);
    }

    seq[0] = a;

    var cursor = 0;
    var newIt = {
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

    return newIt;
  };

  return newObj;
};

module.exports = reduce;
