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



var increment = function(x)
{
  return x + 1;
};


var natural = function(n)
{
  return n;
};
var _natural = _().generator(natural);



var _a = _([100, 101, 102])


.map(increment)

.map(increment)

.take(2)

.compute();




/*
var n5 = _natural
  .map(increment)
  .take(10)

.map(increment)
  .take(5)
  .compute();
*/
/*
var _b = _('hello');

_b
  .map()
  .compute();
*
*/
