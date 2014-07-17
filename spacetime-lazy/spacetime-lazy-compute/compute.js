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


  var preObj = this;
  var pre_it = preObj.it;

  var preIt = pre_it();

  var seq;
  log('type==');
  log(preIt.type);
  if (preIt.type === 'array')
  {
    log('compute Array');
    seq = [];

    while (preIt.hasNext())
    {
      seq[seq.length] = preIt.next();
    }
  }
  else if (preIt.type === 'object')
  {
    log('compute Object');
    seq = {};

    while (preIt.hasNext())
    {
      log('next while==========');
      preIt.next();
    }

  }
  else if (preIt.type === 'atom')
  {
    log('compute atom');
    seq = preIt.seq;
  }
  else
  {
    log('compute Else');
    seq = preIt.seq;
  }



  var type = function(obj)
  {

    return Object
      .prototype
      .toString
      .call(obj)
      .slice(8, -1);
  };

  log('make sure f is Function');
  log(type(f));
  if (type(f) === 'Function')
  {
    f(seq);
  }

  return seq;
};

module.exports = compute;