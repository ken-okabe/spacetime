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
    log('mapF called');

    var preIt = pre_it();

    var newIt = {
      next: function()
      {
        return f(preIt.next());
      },
      hasNext: function()
      {
        return preIt.hasNext();
      }
    };
    return newIt;
  };

  return newObj;
};

module.exports = map;
