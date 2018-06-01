// @flow

import { URL } from 'url';
import fetch from 'node-fetch';
import request from 'request';
import FeedParser from 'feedparser';

const FEED = 'https://louisvilleky.gov/government/all/news/feed';

const lod = new URL(
  '/package_show',
  'http://data.louisvilleky.gov/api/3/action'
);

// ---

const req = request(FEED);
const feedparser = new FeedParser();

req.on('error', (error: Error): void => {
  console.log(error);
});

req.on('response', function(res) {
  const stream = this; // `this` is `req`, which is a stream

  if (res.statusCode !== 200) {
    this.emit('error', new Error('Bad status code'));
  } else {
    stream.pipe(feedparser);
  }
});

feedparser.on('error', (error: Error): void => {
  console.log(error);
});

feedparser.on('readable', function() {
  // This is where the action is!
  const stream = this; // `this` is `feedparser`, which is a stream
  const meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
  let item;

  while ((item = stream.read())) {
    console.log(item.meta['atom:link']);
    console.log()
  }
});
