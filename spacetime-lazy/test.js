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

var _ = require('./spacetime-lazy.js')();

log('test start');




var fib = _(function(n)
  //wrap a recursive function to memoize, must be at the definition in the same scope
  {
    if (n <= 1)
      return 1; // as the Fib definition in Math
    else
      return fib(n - 2) + fib(n - 1); // as the Fib definition in Math
  });


//var _fib = _().generator(fib); //フィボナッチ数列（無限数列）（計算しない）

var _fib = _(fib);

var fib10 =
  _fib
  .take(10)
  .compute(function(x)
  {
    // console.log(x);
  });

//console.log(fib10);

var increment = function(x)
{
  return x + 1;
};

var natural = _(function(n)
{
  return n;
});
var _natural = _(natural);



var add = function(a, b)
{
  return a + b;
};


var multiply = function(a, b)
{
  return a * b;
};


var d = _([1, 2, 3, 4]).map(increment).take(3).reduce(add);

d.compute();
