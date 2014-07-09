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
  objTemplate['compute'] =
    require('./node_modules/spacetime-lazy-compute/compute');
  log('compute loaded');
  objTemplate['generator'] =
    require('./node_modules/spacetime-lazy-generator/generator');
  log('generator loaded');
  objTemplate['map'] =
    require('./node_modules/spacetime-lazy-map/map');
  log('map loaded');
  objTemplate['reduce'] =
    require('./node_modules/spacetime-lazy-reduce/reduce');
  log('reduce loaded');
  objTemplate['take'] =
    require('./node_modules/spacetime-lazy-take/take');
  log('take loaded');

  log('loaded');

  return objTemplate;
};


module.exports = loadModulesFactoryBrowserify;
