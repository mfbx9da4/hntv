const axios = require('axios')

async function get() {
  let res = await axios(
    `https://hacker-news.firebaseio.com/v0/maxitem.json?print=pretty`
  )
  console.log('res.data', res.data)
  let data = res.data
  let maxItem = parseInt(data)
  const ids = []
  for (let index = maxItem; index > maxItem - 10000; index--) {
    ids.push(index)
  }
  const start = Date.now()
  console.log('start')

  const errors = {}
  const failed = []
  await Promise.all(
    ids.map(async (index) => {
      try {
        res = await axios(
          `https://hacker-news.firebaseio.com/v0/item/${index}.json`
        )
        if (index % 1000 === 0) {
          console.log(index)
        }
      } catch (e) {
        failed.push(index)
        const message = (await e.toJSON()).message
        errors[message] = errors[message] ? errors[message] + 1 : 1
      }
    })
  )

  const end = Date.now()
  console.log('end - start', end - start)
  console.log(errors)
}

get()
