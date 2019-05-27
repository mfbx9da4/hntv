import { h, Component } from 'preact'
import { getVideos } from '../../services/api'
import Loader from '../Loader'
import Info from '../Info'
import style from './style'
import day from 'dayjs'
import Item from '../item'

function sumoEmail() {
  if (window.location.href.indexOf('localhost') > -1) return
  ;(function(s, u, m, o, j, v) {
    j = u.createElement(m)
    v = u.getElementsByTagName(m)[0]
    j.async = 1
    j.src = o
    j.dataset.sumoSiteId =
      'bfde1ff840e98cd64e99636c66731caa78e184c7d4638180c1ff6e406d6ca105'
    v.parentNode.insertBefore(j, v)
  })(window, document, 'script', '//load.sumo.com/')
}

function endOfToday() {
  return day()
    .add(1, 'day')
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
}

export default class Feed extends Component {
  constructor() {
    super()
    let initialData = (typeof window !== 'undefined' && window.__DATA__) || {}
    let videoOrder = initialData.videoOrder || []
    let videos = initialData.videos || {}
    this.state = {
      videoOrder,
      loading: null,
      page: 0,
      lastEndPage: 0,
      error: { message: null, details: null },
      videos,
      brokenVideos: {},
      youtubeIdSet: {},
      imageIndex: 0,
    }
    this.currentPlayer = { pauseVideo: () => {} }
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    await this.loadPage()
    sumoEmail()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if (this.lastVideoContainerRef) {
      const isLastVideoInViewport =
        this.lastVideoContainerRef.getBoundingClientRect().y <
        window.innerHeight
      if (isLastVideoInViewport && !this.state.reachedEndOfPages) {
        this.setState(
          {
            page: this.state.page + 1,
            prevScrollElementId: this.lastVideoContainerRef.id,
          },
          this.loadPage
        )
      }
    }
  }

  onReady = (index, id) => (e) => {
    this.currentPlayer.pauseVideo()
    this.currentPlayer = e.target.playVideo()
    return this.setState({ firstVideoLoaded: true })
  }

  onError = (index, id) => (e) => {
    const brokenVideos = { ...this.state.brokenVideos, [id]: true }
    const videoOrder = this.state.videoOrder.filter(
      (x) => !(x.objectID in brokenVideos)
    )
    this.setState({ brokenVideos, videoOrder })
  }

  resetAndLoadFirstPage = () => {
    this.currentPlayer = { pauseVideo: () => {} }
    this.setState(
      {
        page: 0,
        youtubeIdSet: {},
        videoOrder: [],
        lastVideoContainerRef: null,
      },
      this.loadPage
    )
  }

  async componentDidUpdate(prev) {
    if (this.props.url !== prev.url) {
      this.resetAndLoadFirstPage()
    }
  }

  async loadPage() {
    if (this.props.path === '/week') {
      await this.week()
    } else if (this.props.path === '/fortnight') {
      await this.fortnight()
    } else if (this.props.path === '/month') {
      await this.month()
    } else if (this.props.path === '/random') {
      await this.randomFortnight(parseFloat(this.props.matches.r))
    } else {
      await this.week()
    }
  }

  async week() {
    const endOfDay = endOfToday()
    return this.doLoadPage(
      day(endOfDay).subtract(1, 'week'),
      day(endOfDay),
      this.state.page
    )
  }

  async fortnight() {
    const endOfDay = endOfToday()
    return this.doLoadPage(
      day(endOfDay).subtract(2, 'week'),
      day(endOfDay),
      this.state.page
    )
  }

  async month() {
    const endOfDay = endOfToday()
    return this.doLoadPage(
      day(endOfDay).subtract(1, 'month'),
      day(endOfDay),
      this.state.page
    )
  }

  async randomFortnight(random) {
    random = random || Math.random()
    const FIRST_HN_POST_DATE = '2006-10-09T18:21:51.000Z'
    const totalDaysHNActive = day().diff(day(FIRST_HN_POST_DATE), 'day')
    const daysAgo = Math.floor(random * (totalDaysHNActive / 15)) * 15
    var beginNextMonth = day()
      .add(1, 'month')
      .date(1)
    var start = day(beginNextMonth).subtract(daysAgo + 15, 'day')
    var end = day(beginNextMonth).subtract(daysAgo, 'day')
    return this.doLoadPage(start, end, this.state.page)
  }

  doLoadPage = async (start, end, page) => {
    let newState = {
      loading: 'Fetching hacker news feed',
      start: start.format('DD MMM YYYY'),
      end: end.format('DD MMM YYYY'),
    }
    if (page === 0) {
      newState.videoOrder = []
      newState.videos = {}
    }
    this.setState(newState, async () => {
      let res
      try {
        res = await getVideos(start.unix(), end.unix(), page)
      } catch (e) {
        return this.setState({
          loading: null,
          error: {
            message: 'Network error fetching HN feed',
            details: e.toString(),
          },
        })
      }

      let data = await res.json()
      if (!res.ok) {
        return this.setState({
          loading: null,
          error: {
            message: 'Error fetching Hacker News TV Feed',
            details: JSON.stringify(data, null, 2),
          },
        })
      }

      const _videoOrder = []
      const youtubeIdSet = {}
      const videos = {}
      for (let item of data.hits) {
        let youtubeId = item.url.split('v=')[1].split('&')[0]
        item.youtubeId = youtubeId
        if (
          !(youtubeId in this.state.youtubeIdSet) &&
          !(youtubeId in youtubeIdSet)
        ) {
          _videoOrder.push(item.objectID)
          videos[item.objectID] = item
          youtubeIdSet[youtubeId] = true
        }
      }

      const videoOrder =
        page < 1 ? _videoOrder : this.state.videoOrder.concat(_videoOrder)
      this.setState(
        {
          loading: null,
          videoOrder,
          videos: { ...this.state.videos, ...videos },
          youtubeIdSet: { ...this.state.youtubeIdSet, ...youtubeIdSet },
          reachedEndOfPages: !data.hits.length,
        },
        this.onPageLoaded
      )
    })
  }

  render() {
    return (
      <div>
        <div className={style.infoContainer}>
          <Loader message={this.state.loading} />
          <Info
            message={this.state.error.message}
            details={this.state.error.details}
          />
          {!this.state.videoOrder.length && !this.state.loading && (
            <Info message={'No Videos for this period'} />
          )}
          <div style='text-align: center; padding-top: 10px;'>
            From {this.state.start && this.state.start} to{' '}
            {this.state.end && this.state.end}
          </div>
        </div>
        <div className={style.searchContainer}>
          {this.state.videoOrder.map((objectID, i) => {
            const x = this.state.videos[objectID]
            return x.objectID in this.state.brokenVideos ? null : (
              <div key={x.objectID} style={{ marginBottom: '40px' }}>
                <Item
                  showPlayer={i === 0}
                  item={x}
                  onError={this.onError(i, x.objectID)}
                  onReady={this.onReady(i, x.objectID)}
                />
              </div>
            )
          })}
        </div>
        <div
          style='margin-top: 300px'
          ref={(ref) => {
            if (ref && ref !== this.lastVideoContainerRef) {
              this.lastVideoContainerRef = ref
            }
          }}
        />
      </div>
    )
  }
}
