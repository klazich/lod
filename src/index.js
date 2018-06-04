// @flow

import request from 'request'
import FeedParser from 'feedparser'

import * as config from './config.js'

const req = request(config.FEED_NEWS.href)
const feedparser = new FeedParser()

const handleError = (e: Error): void => console.error(e)

req.on('error', done)
req.on('response', function(res): void {
  const stream = this

  res.statusCode !== 200
    ? this.emit('error', new Error(`Bad status code ${res.statusCode}`))
    : res.pipe(feedparser)
})

feedparser.on('error', done)
feedparser.on('end', done)
feedparser.on('readable', function(): void {
  const stream = this
  let item

  while ((item = stream.read())) {
    // console.log(Object.keys(item.meta));
    // console.dir(item);
    console.log(item.title)
  }
})

function done(err) {
  if (err) {
    console.error(err, err.stack)
    return process.exit(1)
  }
  process.exit()
}
