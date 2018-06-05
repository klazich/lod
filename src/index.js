// @flow

import Parser from 'rss-parser'
import request from 'request'
const rp = require('request-promise')

import * as config from './config.js'

const parser = new Parser()

const dropKeys = (object: Object, ...keys: string[]): dropKeys | Object => {
  const [key, ...remaining] = keys
  const { [key]: deletedKey, ...otherKeys } = object
  return remaining.length > 0 ? dropKeys(otherKeys, ...remaining) : otherKeys
}

// parser
//   .parseString(config.JSON_WAZE_TRAFFIC.href)
//   .then(feed => console.log(feed))
//   // .then(keys => console.log(keys))
//   // .then(items =>
//   //   items.map(item => dropKeys(item, 'dc:creator', 'contentSnippet'))
//   // )
//   // .then(items => items.forEach(item => console.log(item)))
//   .catch((err: Error) => console.error(err))

request(
  {
    url: config.JSON_WAZE_TRAFFIC.href,
    json: true,
    headers: {
      Connection: 'keep-alive',
    },
  },
  (error, response, body) => {
    error
      ? console.error(error)
      : response.statusCode !== 200
        ? console.log('Wrong status code')
        : console.log(body)
  }
)

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
