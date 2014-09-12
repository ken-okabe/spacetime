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

var _ = require('./spacetime').lazy();
var __ = require('./spacetime').timeline();

log('test start');

var _e = _([2, 7, 1, 8, 2, 8]);

_e.take(5).compute(function(x)
{
  log(x);
});
//wrap a recursive function to memoize
// must be at the definition in the same scope
var fib = _(function(n)
{
  if (n <= 1)
    return 1; // as the Fib definition in Math
  else
    return fib(n - 2) + fib(n - 1); // as the Fib definition in Math
});

//var _fib = _().generator(fib); //fib inginite sequence, won't actually calc
var _fib = _(fib);

var fib10 = _fib
  .take(10)
  .compute(function(x)
  {
    log(x);
  });


var increment = function(x)
{
  return x + 1;
};


var add = function(a, b)
{
  return a + b;
};


var multiply = function(a, b)
{
  return a * b;
};


var _d = _([1, 2, 3, 4])
  .map(increment)
  .take(3)
  .reduce(add);

_d
  .compute(function(x)
  {
    log(x);
  });


//===========================




//--------------------------

var _pi = _([3, 1, 4, 1, 5, 9, 2]);
//-----------------------------------

//var it = _pi.it();


var _x = _(
{});

_x.appear(100, 'test3333333333333');
_x.appear(101, 'tes4444443333333');
var x = _x.computeOn(101);

log(x);



var __customTL = __();

var natural = _(function(n)
{
  return n;
});

var _natural = _(natural);
var it = _natural.it();

var interval = setInterval(function()
{
  __customTL.appear(it.next());

}, 1000);

__customTL
  .compute(function(x)
  {
    log(x);
  });


var __customTL2 = __customTL.map(function(x)
{
  return x * 2;
});

__customTL2
  .compute(function(x)
  {
    log(x);
  });


/*

var __b = __().interval(1000)
  .map(function()
  {
    return it.next();
  });
// .take(2);

__b
  .compute(function(x)
  {
    log(x);
  });



var __a =
  __(customTL)
  .map(function()
  {
    return 0;
  })
  .take(5);

__a
  .compute(function(x)
  {
    log(x);
  });
  */