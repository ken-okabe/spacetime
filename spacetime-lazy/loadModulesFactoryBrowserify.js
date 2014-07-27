/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('lazy: loadModulesFactoryBrowserify :', msg);
};

var loadModulesFactoryBrowserify = function(objTemplate)
{
  log('loading');
  objTemplate['appear'] =
    require('./spacetime-lazy-appear/appear');
  log('appear loaded');
  objTemplate['compute'] =
    require('./spacetime-lazy-compute/compute');
  log('compute loaded');
  objTemplate['generator'] =
    require('./spacetime-lazy-generator/generator');
  log('generator loaded');
  objTemplate['get'] =
    require('./spacetime-lazy-get/get');
  log('get loaded');
  objTemplate['map'] =
    require('./spacetime-lazy-map/map');
  log('map loaded');
  objTemplate['reduce'] =
    require('./spacetime-lazy-reduce/reduce');
  log('reduce loaded');
  objTemplate['take'] =
    require('./spacetime-lazy-take/take');
  log('take loaded');

  log('loaded');

  return objTemplate;
};


module.exports = loadModulesFactoryBrowserify;
