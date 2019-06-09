// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions')
const moment = require('moment')
const axios = require('axios')
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin')
var serviceAccount = require('./serviceAccountKey.json')

let config = undefined
if (!functions.config().env.production) {
  config = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://hacker-news-tv.firebaseio.com',
  }
}
admin.initializeApp(config)

const GOOGLE_API_KEY =
  process.env.GOOGLE_API_KEY || functions.config().google_api.key
console.log('GOOGLE_API_KEY', GOOGLE_API_KEY)

function videoHasFinished(video) {
  const duration = moment.duration(video.duration)
  const end = moment(video.startTime).add(duration)
  console.log('Video ends at', end)
  return moment() >= end
}

async function getCurrentVideo() {
  const video = await new Promise(async (resolve) => {
    await admin
      .database()
      .ref('/live/current')
      .once('value', function(data) {
        resolve(data.val())
      })
  })
  if (!videoHasFinished(video)) {
    return video
  }
  return null
}

async function setCurrentVideo(item) {
  await admin
    .database()
    .ref('/live/current')
    .set(item)
}

function randomPeriod() {
  const random = Math.random()
  const FIRST_HN_POST_DATE = '2006-10-09T18:21:51.000Z'
  const totalDaysHNActive = moment().diff(moment(FIRST_HN_POST_DATE), 'day')
  const size = 7
  const daysAgo = Math.floor(random * (totalDaysHNActive / size)) * size
  var beginNextMonth = moment()
    .add(1, 'month')
    .date(1)
  var start = moment(beginNextMonth)
    .subtract(daysAgo + size, 'day')
    .unix()
  var end = moment(beginNextMonth)
    .subtract(daysAgo, 'day')
    .unix()
  return { start, end }
}

async function getVideos(start, end, page) {
  const query = 'youtube.com/watch'
  let timeWindow = ''
  if (start && end) {
    timeWindow = `&numericFilters=created_at_i>${start},created_at_i<${end}`
  }
  const url = `https://hn.algolia.com/api/v1/search?query=${query}&restrictSearchableAttributes=url${timeWindow}&hitsPerPage=10&page=${page}`
  console.log('url', url)
  const res = await axios(url)
  return res.data.hits
}

async function getVideoInfo(id) {
  console.log('getVideoInfo')
  const base = `https://www.googleapis.com/youtube/v3/videos?id=${id}`
  const content = '&part=contentDetails'
  const key = `&key=${GOOGLE_API_KEY}`
  const url = `${base}${content}${key}`
  let res
  try {
    res = axios(url)
  } catch (e) {
    console.log('e', e)
  }
  return res
}

function videoIsValid() {
  // TODO: implement
  return true
}

async function getRandomVideos() {
  let { start, end } = randomPeriod()
  let videos = await getVideos(start, end, 0)
  return videos
}

async function getGoodVideo() {
  let item = null
  while (item === null) {
    console.log('getrndomvideo')
    let videos = await getRandomVideos()
    videos = videos.filter((x) => x.points > 10)
    console.log('videos', videos.length)
    if (!videos.length > 0) continue
    const map = {}
    videos.map((x) => (map[new URL(x.url).searchParams.get('v')] = x))
    const videoInfo = await getVideoInfo(Object.keys(map).join(','))
    console.log('videoInfo', JSON.stringify(videoInfo.data.items.length))
    videos = videoInfo.data.items.map((x) => ({
      ...map[x.id],
      duration: x.contentDetails.duration,
    }))
    while (videos.length > 0) {
      const index = Math.floor(Math.random() * videos.length)
      const video = videos.splice(index, 1)[0]
      if (videoIsValid(video, videoInfo)) {
        item = video
      }
    }
  }
  return item
}

exports.live = functions.https.onRequest(async (req, res) => {
  let item = await getCurrentVideo()
  if (!item) {
    item = await getGoodVideo()
    item.startTime = moment()
      .add(1, 'second')
      .toISOString()
    setCurrentVideo(item)
  }

  res.json({ item })
})
