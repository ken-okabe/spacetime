/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('core:', msg);
};


var type = function(obj)
{

  return Object
    .prototype
    .toString
    .call(obj)
    .slice(8, -1);
};

//----------


var fs = require('fs');

var spacetime_lazy = function()
{
  log('=== spacetime-lazy initialization ===');

  var objTemplate = {};


  log('functions loading');
  //log(functionsDir);

  if (typeof window === 'undefined')
  {
    log('loading node-mode');
    var functionsDir = require('fs')
      .readdirSync(__dirname);

    functionsDir
      .map(function(dirName)
      {
        if (dirName.indexOf('spacetime-lazy-') === 0)
        {

          log(dirName);

          var moduleName = dirName
            .split('spacetime-lazy-')[1]
            .split('.js')[0];
          //  log(moduleName);
          objTemplate[moduleName] =
            require(__dirname + '/' + dirName + '/' + moduleName);


          log(moduleName + ' loaded');

        }

      });
  }
  else
  {
    log('loading lazy browserify-mode');
    objTemplate = require('./loadModulesFactoryBrowserify')(objTemplate);
  }


  //=======================
  var core = function(seq)
  {
    log('======core called=======');
    var newObj = require('clone')(objTemplate);

    /*  log('--seq--');
    log(seq);
    log('------');*/

    newObj.seq = seq;

    if (!seq) //emply call,_()
    {
      newObj.type = 'null';

      log('seq type');
      log(newObj.type);



      return newObj;
    }

    else if (type(newObj.seq) === 'Array')
    {
      log(newObj.type);
      newObj.it = function() //first src as a closure for lazyEval
      {
        log('the first it called');

        log(newObj.seq);
        var cursor = 0;

        var it = {
          type: 'array',
          seq: newObj.seq,
          next: function()
          {
            cursor++;
            return seq[cursor - 1];
          },
          hasNext: function()
          {
            return cursor < seq.length;
          }
        };

        return it;

      };

      log('return newly created Array type obj');
      return newObj;
    }
    else if (type(newObj.seq) === 'Object')
    {
      /*
      newObj.type = 'object';
      log('seq type');
      log(newObj.type);
      */
      newObj.it = function() //first src as a closure for lazyEval
      {
        //      log('the object first it called');

        //    log(newObj.seq);
        var cursor = 0;
        var it = {
          type: 'object',
          seq: newObj.seq,
          next: function()
          {
            //    log('next-----------------');
            cursor++;

            var key = Object.keys(newObj.seq)[cursor - 1];
            return key;
          },
          hasNext: function()
          {
            //log('hasNext-------');

            //    log(newObj.seq);
            //  log(keys);
            //  log(Object.keys(newObj.seq));
            return cursor < Object.keys(newObj.seq).length;
          }
        };

        return it;

      };

      log('return newly created Object type obj');
      return newObj;
    }

    else if (type(newObj.seq) === 'Function')
    {
      if (newObj.seq.class === 'memo')
      {
        log('memoized Function, so will return generator');
        return newObj.generator(newObj.seq); //exteranl function generator
      }
      else
      {
        log('return memoized = closure wrapped funcion');

        var memoizedF = require('memoizee')(seq);
        memoizedF.class = 'memo';
        return memoizedF;
      }
    }


  };

  return core;

};

module.exports = spacetime_lazy;
