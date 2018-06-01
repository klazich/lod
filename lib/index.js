'use strict';

var _url = require('url');

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _feedparser = require('feedparser');

var _feedparser2 = _interopRequireDefault(_feedparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FEED = 'https://louisvilleky.gov/government/all/news/feed';

var lod = new _url.URL('/package_show', 'http://data.louisvilleky.gov/api/3/action');

// ---

var req = (0, _request2.default)(FEED);
var feedparser = new _feedparser2.default();

req.on('error', function (error) {
  console.log(error);
});

req.on('response', function (res) {
  var stream = this; // `this` is `req`, which is a stream

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  } else {
    stream.pipe(feedparser);
  }
});

feedparser.on('error', function (error) {
  console.log(error);
});

feedparser.on('readable', function () {
  // This is where the action is!
  var stream = this; // `this` is `feedparser`, which is a stream
  var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  var item = void 0;

  while (item = stream.read()) {
    console.log(item.meta['atom:link']);
    console.log();
  }
});