/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('map:', msg);
};

//----------

var map = function(f)
{
  var preObj = this;
  var pre_it = preObj.it;

  var newObj = preObj;
  newObj.it = function()
  {
    log('--map--');

    var preIt = pre_it();

    var newIt = {
      type: preIt.type,
      seq: preIt.seq,
      next: function()
      {
        return f(preIt.next());
      },
      hasNext: function()
      {
        return preIt.hasNext();
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

module.exports = map;
