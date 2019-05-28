import { h, Component } from 'preact'
import style from './style'
import TimeAgo from 'react-timeago'
import day from 'dayjs'
import Youtube from '../Youtube'
import YoutubeThumbnail from '../YoutubeThumbnail'

export default class Item extends Component {
  static defaultProps = {
    onError: () => {},
    onReady: () => {},
    onStateChange: () => {},
  }

  constructor() {
    super()
    this.state = {
      showPlayer: false,
      imageIndex: 0,
      thumbnailLoadedSuccessfully: false,
    }
  }

  onImageLoad = () => {
    this.setState({ thumbnailLoadedSuccessfully: true })
  }

  componentDidMount() {
    if (this.props.showPlayer) this.setState({ showPlayer: true })
  }

  componentWillReceiveProps(props) {
    if (
      props.showPlayer !== this.props.showPlayer &&
      props.showPlayer !== this.state.showPlayer
    ) {
      this.setState({ showPlayer: props.showPlayer })
    }
  }

  onImageError = (e) => this.props.onError()

  formatDuration = (duration) => {
    if (!duration) return ''
    let out = duration.toString()
    return out.replace('PT', '').toLowerCase()
  }

  render({ item }) {
    return (
      <div>
        <div
          id={`video-container${item.objectID}`}
          className='video'
          style={{
            position: 'relative',
            paddingBottom: '56.25%' /* 16:9 */,
            paddingTop: 25,
            height: 0,
            background: '#333',
          }}
        >
          {this.state.showPlayer && this.state.thumbnailLoadedSuccessfully ? (
            <Youtube
              id={`player${item.objectID}`}
              className={style.iframe}
              videoId={item.youtubeId}
              onReady={this.props.onReady}
              onStateChange={this.props.onStateChange}
              onError={this.props.onError}
              playerVars={{}}
            />
          ) : (
            <div
              className={style.iframe}
              style={{
                display: this.state.showPlayer ? 'none' : 'inline-flex',
              }}
              onClick={() => this.setState({ showPlayer: true })}
            >
              <YoutubeThumbnail
                youtubeId={item.youtubeId}
                index={0}
                onLoad={this.onImageLoad}
                onError={this.onImageError}
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </div>
          )}
        </div>
        <div>
          <div>{item.points} points</div>
          <div>{item.title}</div>
          {item.contentDetails && (
            <div>{this.formatDuration(item.contentDetails.duration)}</div>
          )}
          <a target='_blank' href={item.url}>
            Youtube
          </a>{' '}
          <a
            target='_blank'
            href={`https://news.ycombinator.com/item?id=${item.objectID}`}
          >
            HN
          </a>
        </div>
        <TimeAgo date={item.created_at} />
        <div>{day(item.created_at).format('ddd DD MMM YYYY')}</div>
        {/* <div>{JSON.stringify(x, null, 2)}</div> */}
      </div>
    )
  }
}
