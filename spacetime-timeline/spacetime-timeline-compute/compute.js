/* jshint node: true */
/* jshint jquery: true */
/* jshint sub: true */
/* global window,document, $,alert,history */
'use strict';

var log = function(msg)
{
  //console.log('compute:', msg);
};

var compute = function(f)
{
  log('--compute--');
  var W = this.W;

  var preObj = this;

  W.watch(preObj, 'beacon', function()
  {

    var moment = require('moment');

    var utc = moment().utc();

    var YY = utc.year() - 2000 + '';
    var MM = utc.month() + 1 + '';
    var DD = utc.date() + '';
    var HH = utc.hour() + '';
    var mm = utc.minute() + '';
    var ss = utc.second() + '';
    var msc = utc.millisecond() + '';

    log(YY);
    log(MM);
    log(DD);
    log(HH);
    log(mm);
    log(ss);
    log(msc);

    if (!preObj[YY])
    {
      preObj[YY] = {};
    }

    if (!preObj[YY][MM])
    {
      preObj[YY][MM] = {};
    }

    if (!preObj[YY][MM][DD])
    {
      preObj[YY][MM][DD] = {};
    }

    if (!preObj[YY][MM][DD][HH])
    {
      preObj[YY][MM][DD][HH] = {};
    }

    if (!preObj[YY][MM][DD][HH][mm])
    {
      preObj[YY][MM][DD][HH][mm] = {};
    }

    if (!preObj[YY][MM][DD][HH][mm][ss])
    {
      preObj[YY][MM][DD][HH][mm][ss] = {};
    }

    preObj[YY][MM][DD][HH][mm][ss][msc] = preObj.val;


    // log(preObj[YY][MM][DD][HH][mm][ss][msc]);

    //-------------

    f(preObj.val); //calc f on change
    //---------------
  });

  return true; //seq;

};

module.exports = compute;
