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
    if (!item) return null
    return (
      <div style='background: var(--grey70); border: 1px solid var(--grey70)'>
        <div
          id={`video-container${item.objectID}`}
          className='video'
          style={{
            position: 'relative',
            paddingBottom: '56.25%' /* 16:9 */,
            paddingTop: 25,
            height: 0,
            background: '#000',
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
              playerVars={{
                modestbranding: 1,
                start: item.start,
                ...this.props.playerVars,
              }}
            />
          ) : (
            <div
              className={style.iframe}
              style={{
                display: this.state.showPlayer ? 'none' : 'inline-flex',
              }}
              onClick={() => {
                this.setState({ showPlayer: true })
              }}
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
        <div className={style.playerInfoContainer}>
          <div className={style.points}>{item.points} points</div>
          <div className={style.titleContainer}>
            <div className={style.title}>{item.title}</div>

            <div className={style.titleAside}>
              <div className={style.videoDetails}>
                {item.contentDetails && (
                  <div className={style.duration}>
                    {this.formatDuration(item.contentDetails.duration)}
                  </div>
                )}
                <div>
                  <TimeAgo date={item.created_at} />
                </div>
                <div>{day(item.created_at).format('DD MMM YYYY')}</div>
              </div>

              <div className={style.links}>
                <a
                  className={style.link}
                  target='_blank'
                  href={`https://news.ycombinator.com/item?id=${item.objectID}`}
                >
                  Original
                </a>{' '}
                <a
                  className={style.link}
                  target='_blank'
                  href={`/item/${item.objectID}`}
                >
                  Share
                </a>
              </div>
            </div>
          </div>
          {item.children &&
            item.children.length &&
            item.children.map((comment) => {
              return (
                <div style={{ padding: '10px', margin: '10px 0 0 10px' }}>
                  <div>{comment.author}</div>
                  <TimeAgo date={comment.created_at} />
                  <div
                    style={{ background: '#222', padding: '10px' }}
                    dangerouslySetInnerHTML={{ __html: comment.text }}
                  />
                </div>
              )
            })}
        </div>
      </div>
    )
  }
}
