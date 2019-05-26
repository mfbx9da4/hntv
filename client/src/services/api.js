const ALGOLIA_URL = 'https://hn.algolia.com/api/v1/search'

export async function getVideos(start, end, page) {
  const query = 'youtube.com/watch'
  let timeWindow = ''
  if (start && end) {
    timeWindow = `&numericFilters=created_at_i>${start},created_at_i<${end}`
  }
  const url = `${ALGOLIA_URL}?query=${query}&restrictSearchableAttributes=url${timeWindow}&hitsPerPage=10&page=${page}`
  console.log('url', url)
  let res = await fetch(url)
  return res
}
