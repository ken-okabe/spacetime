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
var clone = require('clone');

var W = require("watchjs");

var spacetime_timeline = function()
{
  log('=== spacetime-timeline initialization ===');

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
        if (dirName.indexOf('spacetime-timeline-') === 0)
        {

          log(dirName);

          var moduleName = dirName
            .split('spacetime-timeline-')[1]
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
    log('loading timeline browserify-mode');
    objTemplate = require('./loadModulesFactoryBrowserify')(objTemplate);
  }



  //=======================
  var core = function(seq)
  {
    log('======core called=======');
    var newObj = clone(objTemplate);

    newObj.W = W;
    /*  log('--seq--');
    log(seq);
    log('------');*/

    if (!seq) //emply call,_()
    {
      newObj.type = 'null';

      log('seq type is ...');
      log(newObj.type);
      //
      //

      newObj.tl = function()
      {

        log('--null Sq--');
        //   var preTl = pre_tl();

        var newTl = {
          beacon: false,
          next: function()
          {
            return (this.beacon = !this.beacon);
          },
          stop: function() {}
        };


        return newTl;
      };

      return newObj;
    }

    else if (type(seq) === 'Array')
    {


    }

    else if (type(seq) === 'Function')
    {
      log('timeline custom Function, so will return timeline');
      // return newObj.generator(seq); //exteranl function generator

      var tlSeed = seq;
      newObj.tl = function() //first src as a closure for lazyEval
      {
        log('the first tl called default');

        //  log(tlSeed);
        //--
        var custom = function()
        {
          var newTl = {
            beacon: false,
            next: function()
            {
              return (this.beacon = !this.beacon);
            }
          };

          tlSeed(newTl);

          return newTl;
        };

        //--
        var newTl = custom();

        return newTl;


      };

      return newObj;


    }

  };

  return core;

};

module.exports = spacetime_timeline;
