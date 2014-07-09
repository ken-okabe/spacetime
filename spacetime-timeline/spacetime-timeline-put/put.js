/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('put:', msg);
};

//----------

var put = function(val)
{
  var W = this.W;

  var preObj = this;
  var pre_tl = preObj.tl;

  var newObj = preObj;

  newObj.tl = function()
  {

    log('--put--');
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
      newTl.val = preTl.val;

      newTl.next();
    });

    preTl.val = val;
    preTl.next();

    return newTl;
  };

  return newObj;
};


module.exports = put;
