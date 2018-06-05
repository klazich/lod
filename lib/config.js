'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JSON_WAZE_TRAFFIC = exports.JSON_AIR_QUALITY = exports.FEED_LEN_NOTIFICATION = exports.FEED_LEN_ALERT = exports.FEED_EVENTS = exports.FEED_NEWS = undefined;

var _url = require('url');

// louisvilleky.gov - News
var FEED_NEWS = exports.FEED_NEWS = new _url.URL('https://louisvilleky.gov/government/all/news/feed');

// louisvilleky.gov - Events


var FEED_EVENTS = exports.FEED_EVENTS = new _url.URL('https://louisvilleky.gov/government/all/events/feed');

// Louisville Emergency Network - Alerts
var FEED_LEN_ALERT = exports.FEED_LEN_ALERT = new _url.URL('http://content.getrave.com/rss/kymsjefferson/channel1');

// Louisville Emergency Network - Notifications
var FEED_LEN_NOTIFICATION = exports.FEED_LEN_NOTIFICATION = new _url.URL('http://content.getrave.com/rss/kymsjefferson/channel2');

// Air Quality API
var JSON_AIR_QUALITY = exports.JSON_AIR_QUALITY = new _url.URL('https://aaws.louisvilleky.gov/api/v1/Monitor/CityAQI');

// Waze Traffic Feed
var JSON_WAZE_TRAFFIC = exports.JSON_WAZE_TRAFFIC = new _url.URL('https://www.waze.com/rtserver/broadcast/BroadcastRSS?bid=86&format=JSON');