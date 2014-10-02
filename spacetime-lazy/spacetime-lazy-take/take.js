/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('take:', msg);
};



var take = function(n)
{
  var preObj = this;
  var pre_it = preObj.it;

  var newObj = preObj;
  newObj.it = function()
  {
    log('--take--');

    var preIt = pre_it();

    var seq = [];

    for (var i = 0; i < n; i++)
    {
      seq[i] = preIt.next();
      //log(seq[i]);
    }

    var cursor = 0;
    var newIt = {
      type: preIt.type,
      seq: seq,
      next: function()
      {
        cursor++;
        return seq[cursor - 1];
      },
      hasNext: function()
      {
        return cursor < seq.length;
      },
      reset: function()
      {
        return preIt.reset();
      }
    };

    return newIt;
  };

  return newObj;
};

module.exports = take;
