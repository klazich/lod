'use strict';

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _feedparser = require('feedparser');

var _feedparser2 = _interopRequireDefault(_feedparser);

var _config = require('./config.js');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var req = (0, _request2.default)(config.FEED_NEWS.href);

var feedparser = new _feedparser2.default();

var handleError = function handleError(e) {
  return console.error(e);
};

req.on('error', done);
req.on('response', function (res) {
  var stream = this;

  res.statusCode !== 200 ? this.emit('error', new Error('Bad status code ' + res.statusCode)) : res.pipe(feedparser);
});

feedparser.on('error', done);
feedparser.on('end', done);
feedparser.on('readable', function () {
  var stream = this;
  var item = void 0;

  while (item = stream.read()) {
    // console.log(Object.keys(item.meta));
    // console.dir(item);
    console.log(item.title);
  }
});

function done(err) {
  if (err) {
    console.error(err, err.stack);
    return process.exit(1);
  }
  process.exit();
}