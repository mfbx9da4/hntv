const GOOGLE_API_KEY = 'AIzaSyDf6h_YZh_ltaj8u8H4TceEqet68CyCz6k'
const ALGOLIA_URL = 'https://hn.algolia.com/api/v1'

export async function getVideos(start, end, page) {
  const query = 'youtube.com/watch'
  let timeWindow = ''
  if (start && end) {
    timeWindow = `&numericFilters=created_at_i>${start},created_at_i<${end}`
  }
  const url = `${ALGOLIA_URL}/search?query=${query}&restrictSearchableAttributes=url${timeWindow}&hitsPerPage=10&page=${page}`
  return fetch(url)
}

export async function getVideo(item) {
  const url = `${ALGOLIA_URL}/items/${item}`
  return fetch(url)
}

export async function getLiveVideo() {
  // const url = `${ALGOLIA_URL}/items/${5453879}`
  // return fetch(url)
  const url = 'https://us-central1-hacker-news-tv.cloudfunctions.net/live'
  return fetch(url)
}

export async function getVideoInfo(id) {
  const base = `https://www.googleapis.com/youtube/v3/videos?id=${id}`
  const content = '&part=contentDetails'
  const key = `&key=${GOOGLE_API_KEY}`
  const url = `${base}${content}${key}`
  return fetch(url)
}
