// @flow

import Parser from 'rss-parser'

import * as config from './config.js'

const parser = new Parser()
// const handleError = (e: Error): void => console.error(e)

// rss-parser scratchings

// parser.parseURL(config.FEED_NEWS.href, function(err, feed) {
//   err ? console.error(err) : console.dir(Object.keys(feed.items[0]))
// })

const dropKeys = (object: Object, ...keys: string[]): dropKeys | Object => {
  const [key, ...remaining] = keys
  const { [key]: deletedKey, ...otherKeys } = object
  return remaining.length > 0 ? dropKeys(otherKeys, ...remaining) : otherKeys
}

parser
  .parseURL(config.FEED_NEWS.href)
  .then(feed => feed.items)
  .then(items =>
    items.map(item => dropKeys(item, 'dc:creator', 'contentSnippet'))
  )
  .then(items => items.forEach(item => console.log(item)))
  .catch((err: Error) => console.error(err))
