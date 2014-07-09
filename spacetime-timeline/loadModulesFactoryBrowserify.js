/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  console.log('timeline: loadModulesFactoryBrowserify :', msg);
};


var loadModulesFactoryBrowserify = function(objTemplate)
{
  log('loading');

  objTemplate['compute'] =
    require('./node_modules/spacetime-timeline-compute/compute');
  log('compute loaded');
  objTemplate['interval'] =
    require('./node_modules/spacetime-timeline-interval/interval');
  log('interval loaded');
  objTemplate['map'] =
    require('./node_modules/spacetime-timeline-map/map');
  log('map loaded');
  objTemplate['put'] =
    require('./node_modules/spacetime-timeline-put/put');
  log('put loaded');
  objTemplate['take'] =
    require('./node_modules/spacetime-timeline-take/take');
  log('take loaded');

  log('loaded');

  return objTemplate;
};

module.exports = loadModulesFactoryBrowserify;
