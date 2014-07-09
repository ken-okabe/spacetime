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

var __ = require('./spacetime-timeline.js')();

log('test start');

var customTL = function(tl)
{
  setInterval(function()
  {
    tl.next();
  }, 100);
};

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



var __b =
  __()
  .interval(1000)
  .map(function()
  {
    return true;
  })
  .take(10);

__b
  .compute(function(x)
  {
    log(x);
  });



/*
var __b = __()
  .interval(1000)
  .map(function(x)
  {
    return 2;
  })
  .take(10);

var __c =
  __b
  .map(function(x)
  {
    return x * 2;
  })
  .take(5);

__b
  .compute(function(x)
  {
    log(x);
  });

__c
  .compute(function(x)
  {
    log(x);
  });
*/
