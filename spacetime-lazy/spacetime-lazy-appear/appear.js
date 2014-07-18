/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('appear:', msg);
};



var appear = function(a, b)
{
  var preObj = this;
  var pre_it = preObj.it;

  var newObj = preObj;
  var preIt = pre_it();

  if (preIt.type === 'array')
  {
    //  log('Array');
    preIt.seq[preIt.seq.length] = a;
  }
  else if (preIt.type === 'object')
  {
    //log('Object');
    //  log('pre---seq!!!!!!!!!!!!');
    //  log(preIt.seq);
    
    preIt.seq[a] = b;
    log(preIt.seq);
  }
  else
  {
    log('arguments not correct');
  }




  return newObj;
};

module.exports = appear;
