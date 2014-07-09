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
  var W = this.W;

  var preObj = this;
  var pre_tl = preObj.tl;

  var newObj = require('clone')(preObj);

  newObj.tl = function()
  {

    log('--map--');
    var preTl = pre_tl();

    var newTl = {
      beacon: false,
      next: function()
      {
        return (this.beacon = !this.beacon);
      },
      stop: preTl.stop
    };

    W.watch(preTl, 'beacon', function()
    {
      newTl.val = f(preTl.val);

      newTl.next();
    });

    return newTl;
  };

  return newObj;
};


module.exports = map;
