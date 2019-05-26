import { h, Component } from 'preact'
import { getVideos } from '../../services/api'
import Loader from '../Loader'
import Info from '../Info'
import style from './style'
import TimeAgo from 'react-timeago'
import day from 'dayjs'

function loadYTIframeAPI() {
  var tag = document.createElement('script')
  tag.src = '//www.youtube.com/iframe_api'
  // document.body.appendChild(tag)
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
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
    let results = initialData.results || []
    this.state = {
      results,
      loading: null,
      page: 0,
      lastEndPage: 0,
      error: { message: null, details: null },
      brokenVideos: {},
      youtubeIdSet: {},
    }
    this.players = []
  }

  async componentDidMount() {
    if (!window.YT) {
      window.onYouTubeIframeAPIReady = () => console.log('YT ready')
      loadYTIframeAPI()
    }
    window.addEventListener('scroll', this.onScroll)
    await this.loadPage()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    const isLastVideoInViewport =
      this.lastVideoContainerRef &&
      this.lastVideoContainerRef.getBoundingClientRect().y <
        window.innerHeight &&
      this.state.prevScrollElementId !== this.lastVideoContainerRef.id
    if (isLastVideoInViewport && !this.state.reachedEndOfPages) {
      console.log('Infinite Scroll Load Next')
      this.setState(
        {
          page: this.state.page + 1,
          prevScrollElementId: this.lastVideoContainerRef.id,
        },
        this.loadPage
      )
    }
  }

  iframeLoaded = (index, id) => () => {
    // this.onYouTubeIframeAPIReady(index, id)
  }

  onPageLoaded = () => {
    // this.state.results.map((item, i) => this.initPlayer(i, item.objectID))
    // this.initPlayer(0, this.state.results[0].objectID)
  }

  initPlayer = (index, id) => {
    console.log('initPlayer', index, id)
    if (!index && !id) {
      return
    }
    window.player = new window.YT.Player(`player${id}`, {
      events: {
        onReady: (e) => {
          console.log('onready', e.data, e.target.a.id, index)
          if (index === 0) {
            console.log('play')
            e.target.playVideo()
          }
          this.setState({ firstVideoLoaded: true })
        },
        onError: (e) => {
          console.log('onError', e, id, this.state.results[index].title)
          this.setState({
            brokenVideos: { ...this.state.brokenVideos, [id]: true },
          })
        },
      },
    })
    // https://jsbin.com/gegewebaja/1/edit?html,console
    // this.players.push(window.player)
    console.log(window.player)
  }

  async componentDidUpdate(prev) {
    if (this.props.url !== prev.url) {
      this.setState(
        { page: 0, youtubeIdSet: {}, results: [], lastVideoContainerRef: null },
        this.loadPage
      )
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

  async randomFortnight(random = Math.random()) {
    const FIRST_POST_DATE = '2006-10-09T18:21:51.000Z'
    const totalDaysHNActive = day().diff(day(FIRST_POST_DATE), 'day')
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
      newState.results = []
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

      const _results = []
      const youtubeIdSet = {}
      for (let item of data.hits) {
        let youtubeId = item.url.split('v=')[1].split('&')[0]
        item.youtubeId = youtubeId
        if (
          !(youtubeId in this.state.youtubeIdSet) &&
          !(youtubeId in youtubeIdSet)
        ) {
          _results.push(item)
          youtubeIdSet[youtubeId] = true
        }
      }

      console.log('gotdata', page, start.format('DD MMM'), end.format('DD MMM'))
      const results = page < 1 ? _results : this.state.results.concat(_results)
      this.setState(
        {
          loading: null,
          results,
          youtubeIdSet: { ...this.state.youtubeIdSet, ...youtubeIdSet },
          reachedEndOfPages: !data.hits.length,
        },
        this.onPageLoaded
      )
    })
  }

  render() {
    console.log('render', this.state.results.length)
    return (
      <div>
        <div className={style.infoContainer}>
          <Loader message={this.state.loading} />
          <Info
            message={this.state.error.message}
            details={this.state.error.details}
          />
          {!this.state.results.length && !this.state.loading && (
            <Info message={'No Videos for this period'} />
          )}
          <div style='text-align: center; padding-top: 10px;'>
            From {this.state.start && this.state.start} to{' '}
            {this.state.end && this.state.end}
          </div>
        </div>
        <div className={style.searchContainer}>
          {this.state.results.map((x, i) =>
            x.objectID in this.state.brokenVideos ? null : (
              <div style={{ marginBottom: '40px' }}>
                <div
                  id={`video-container${x.objectID}`}
                  ref={(ref) => {
                    if (i === this.state.results.length - 1) {
                      this.lastVideoContainerRef = ref
                    }
                  }}
                  className='video'
                  style={{
                    position: 'relative',
                    paddingBottom: '56.25%' /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                    background: '#333',
                  }}
                >
                  {/* {i === 0 || this.state.firstVideoLoaded ? ( */}
                  {i === 0 ? (
                    <iframe
                      id={`player${x.objectID}`}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                      src={`https://www.youtube.com/embed/${
                        x.youtubeId
                      }?enablejsapi=1&origin=${window.location.protocol}//${
                        window.location.host
                      }&autoplay=${i === 0 ? 1 : 0}`}
                      frameBorder='0'
                    />
                  ) : null}
                </div>
                <div>
                  <div>{x.points} points</div>
                  <div>{x.title}</div>
                  <a target='_blank' href={x.url}>
                    Youtube
                  </a>{' '}
                  <a
                    target='_blank'
                    href={`https://news.ycombinator.com/item?id=${x.objectID}`}
                  >
                    HN
                  </a>
                </div>
                <TimeAgo date={x.created_at} />
                <div>{day(x.created_at).format('ddd DD MMM YYYY')}</div>
                {/* <div>{JSON.stringify(x, null, 2)}</div> */}
              </div>
            )
          )}
        </div>
      </div>
    )
  }
}
