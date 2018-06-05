// @flow

import { URL } from 'url'

// louisvilleky.gov - News
export const FEED_NEWS = new URL(
  'https://louisvilleky.gov/government/all/news/feed'
)

// louisvilleky.gov - Events
export const FEED_EVENTS = new URL(
  'https://louisvilleky.gov/government/all/events/feed'
)

// Louisville Emergency Network - Alerts
export const FEED_LEN_ALERT = new URL(
  'http://content.getrave.com/rss/kymsjefferson/channel1'
)

// Louisville Emergency Network - Notifications
export const FEED_LEN_NOTIFICATION = new URL(
  'http://content.getrave.com/rss/kymsjefferson/channel2'
)

// Air Quality API
export const JSON_AIR_QUALITY = new URL(
  'https://aaws.louisvilleky.gov/api/v1/Monitor/CityAQI'
)

// Waze Traffic Feed
export const JSON_WAZE_TRAFFIC = new URL(
  'https://www.waze.com/rtserver/broadcast/BroadcastRSS?bid=86&format=JSON'
)
