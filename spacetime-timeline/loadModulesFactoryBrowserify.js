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
    require('./spacetime-timeline-compute/compute');
  log('compute loaded');
  objTemplate['interval'] =
    require('./spacetime-timeline-interval/interval');
  log('interval loaded');
  objTemplate['map'] =
    require('./spacetime-timeline-map/map');
  log('map loaded');
  objTemplate['put'] =
    require('./spacetime-timeline-put/put');
  log('put loaded');
  objTemplate['take'] =
    require('./spacetime-timeline-take/take');
  log('take loaded');

  log('loaded');

  return objTemplate;
};

module.exports = loadModulesFactoryBrowserify;
