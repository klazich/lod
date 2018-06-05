'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FEED_LEN_NOTIFICATION = exports.FEED_LEN_ALERT = exports.FEED_EVENTS = exports.FEED_NEWS = undefined;

var _url = require('url');

var FEED_NEWS = exports.FEED_NEWS = new _url.URL('https://louisvilleky.gov/government/all/news/feed');

var FEED_EVENTS = exports.FEED_EVENTS = new _url.URL('https://louisvilleky.gov/government/all/events/feed');
var FEED_LEN_ALERT = exports.FEED_LEN_ALERT = new _url.URL('http://content.getrave.com/rss/kymsjefferson/channel1');
var FEED_LEN_NOTIFICATION = exports.FEED_LEN_NOTIFICATION = new _url.URL('http://content.getrave.com/rss/kymsjefferson/channel2');