/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('computeOn:', msg);
};



var computeOn = function(a)
{
  var preObj = this;

  log('--computeOn--');

  var preIt = preObj.it();
log(preIt);
log(preIt.seq[a] );
 return preIt.seq[a];
};



module.exports = computeOn;
