/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('TEST:', msg);
};



//----------

var _ = require('./spacetime.js')();

log('test start');

var _a = _([0, 1, 2]);

var increment = function(x)
{
  return x * 2;
};

_a
  .map(increment)
  .map(increment)
  .compute();

/*
var _b = _('hello');

_b
  .map()
  .compute();
*/
