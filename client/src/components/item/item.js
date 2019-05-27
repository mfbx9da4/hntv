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
  }

  constructor() {
    super()
    this.state = { showPlayer: false, imageIndex: 0 }
  }

  componentDidMount() {
    if (this.props.showPlayer) this.setState({ showPlayer: true })
  }

  onImageError = (e) => this.props.onError()

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
          {this.state.showPlayer ? (
            <Youtube
              id={`player${item.objectID}`}
              className={style.iframe}
              videoId={item.youtubeId}
              onReady={this.props.onReady}
              onError={this.props.onError}
              playerVars={{}}
            />
          ) : (
            <div
              className={style.iframe}
              onClick={() => this.setState({ showPlayer: true })}
            >
              <YoutubeThumbnail
                youtubeId={item.youtubeId}
                index={0}
                onError={this.onImageError}
                style={{ objectFit: 'cover', width: '100%' }}
              />
            </div>
          )}
        </div>
        <div>
          <div>{item.points} points</div>
          <div>{item.title}</div>
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
