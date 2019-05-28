const GOOGLE_API_KEY = 'AIzaSyDf6h_YZh_ltaj8u8H4TceEqet68CyCz6k'
const ALGOLIA_URL = 'https://hn.algolia.com/api/v1/search'

export async function getVideos(start, end, page) {
  const query = 'youtube.com/watch'
  let timeWindow = ''
  if (start && end) {
    timeWindow = `&numericFilters=created_at_i>${start},created_at_i<${end}`
  }
  const url = `${ALGOLIA_URL}?query=${query}&restrictSearchableAttributes=url${timeWindow}&hitsPerPage=10&page=${page}`
  return fetch(url)
}

export async function getVideoInfo(id) {
  const base = `https://www.googleapis.com/youtube/v3/videos?id=${id}`
  const content = '&part=contentDetails'
  const key = `&key=${GOOGLE_API_KEY}`
  const url = `${base}${content}${key}`
  return fetch(url)
}
