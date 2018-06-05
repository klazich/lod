'use strict';

var _rssParser = require('rss-parser');

var _rssParser2 = _interopRequireDefault(_rssParser);

var _config = require('./config.js');

var config = _interopRequireWildcard(_config);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var parser = new _rssParser2.default();
// const handleError = (e: Error): void => console.error(e)

// rss-parser scratchings

// parser.parseURL(config.FEED_NEWS.href, function(err, feed) {
//   err ? console.error(err) : console.dir(Object.keys(feed.items[0]))
// })

var objectWithoutKey = function objectWithoutKey(object) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var _keys = _toArray(keys),
      key = _keys[0],
      remaining = _keys.slice(1);

  var deletedKey = object[key],
      otherKeys = _objectWithoutProperties(object, [key]);

  return remaining.length > 0 ? objectWithoutKey.apply(undefined, [otherKeys].concat(_toConsumableArray(remaining))) : otherKeys;
};

parser.parseURL(config.FEED_NEWS.href).then(function (feed) {
  return feed.items;
}).then(function (items) {
  return items.map(function (item) {
    return objectWithoutKey(item, 'dc:creator', 'contentSnippet');
  });
}).then(function (items) {
  return items.forEach(function (item) {
    return console.log(item);
  });
}).catch(function (err) {
  return console.error(err);
});