/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('get:', msg);
};



var get = function(a)
{
  var preObj = this;
  var pre_it = preObj.it;

  var newObj = preObj;
  newObj.it = function()
  {
    log('--get--');

    var preIt = pre_it();

    var seq;

    var type;

    if (preIt.type === 'array')
    {
      log('Array');
      seq = [];
      seq[0] = preIt.seq[a];

      type = 'array';
    }
    else if (preIt.type === 'object')
    {
      log('object to atom');
      seq = preIt.seq[a]; //atom
      log(seq);
      type = 'atom';
    }
    else
    {
      log('arguments not correct');
    }

    var newIt = {
      type: type,
      seq: seq,
      next: function()
      {
        return preIt.next();
      },
      hasNext: function()
      {
        return preIt.hasNext();
      }
    };
    return newIt;
  };

  return newObj;
};

module.exports = get;
