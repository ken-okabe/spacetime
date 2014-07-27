/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('compute:', msg);
};

var compute = function(f)
{
  log('--compute--');
  var W = this.W;

  var preObj = this;

  W.watch(preObj, 'beacon', function()
  {
    f(preObj.val);
  });

  return true; //seq;

};

module.exports = compute;
