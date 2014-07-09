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

  var it = this.it();

  var seq = [];

  while (it.hasNext())
  {
    seq[seq.length] = it.next();
  }
  f(seq);

  return seq;
};

module.exports = compute;
