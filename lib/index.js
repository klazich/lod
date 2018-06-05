'use strict';

var _rssParser = require('rss-parser');

var _rssParser2 = _interopRequireDefault(_rssParser);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _config = require('./config.js');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var rp = require('request-promise');

var parser = new _rssParser2.default();

var dropKeys = function dropKeys(object) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var _keys = _toArray(keys),
      key = _keys[0],
      remaining = _keys.slice(1);

  var deletedKey = object[key],
      otherKeys = _objectWithoutProperties(object, [key]);

  return remaining.length > 0 ? dropKeys.apply(undefined, [otherKeys].concat(_toConsumableArray(remaining))) : otherKeys;
};

// parser
//   .parseString(config.JSON_WAZE_TRAFFIC.href)
//   .then(feed => console.log(feed))
//   // .then(keys => console.log(keys))
//   // .then(items =>
//   //   items.map(item => dropKeys(item, 'dc:creator', 'contentSnippet'))
//   // )
//   // .then(items => items.forEach(item => console.log(item)))
//   .catch((err: Error) => console.error(err))

(0, _request2.default)({
  url: config.JSON_WAZE_TRAFFIC.href,
  json: true,
  headers: {
    Connection: 'keep-alive'
  }
}, function (error, response, body) {
  error ? console.error(error) : response.statusCode !== 200 ? console.log('Wrong status code') : console.log(body);
});

// request
//   .get(config.JSON_AIR_QUALITY.href)
//   .on('error', error => console.error(error))
//   .on('response', res => {
//     console.log(res)
//   })
//   .end()

// const options = {
//   uri: config.JSON_AIR_QUALITY.href,
//   headers: { 'User-Agent': 'Request-Promise' },
//   json: true,
// }

// rp(options)
//   .then(resp => console.dir(resp))
//   .catch(error => console.error(error))