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


var n5 = _natural
  .map(increment)
  .take(10)

.map(increment)
  .take(5)
  .compute();

var fibF = function()
{
  var fibSeq = []; //build sequence array in this closure
  var f = function(n)
  {
    var fib;
    if (n <= 1)
    {
      fib = 1; // as the Fib definition in Math
    }
    else
    {
      fib = fibSeq[n - 2] + fibSeq[n - 1]; // as the Fib definition in Math
    }
    return (fibSeq[n] = fib);
  };
  return f;
}();

var Fib = _().generator(fibF); //フィボナッチ数列（無限数列）（計算しない）

Fib.take(10).compute();
