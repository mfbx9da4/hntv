import { h, Component } from 'preact'
import style from './style'
import TimeAgo from 'react-timeago'
import day from 'dayjs'
import Youtube from '../Youtube'

export default class Item extends Component {
  static defaultProps = {
    onError: () => {},
    onReady: () => {},
  }

  constructor() {
    super()
    this.state = { showPlayer: false, imageIndex: 0 }
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
          {this.state.showPlayer ? (
            <Youtube
              id={`player${item.objectID}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              className={style.iframe}
              videoId={item.youtubeId}
              onReady={this.props.onReady}
              onError={this.props.onError}
              playerVars={{}}
            />
          ) : (
            <div onClick={() => this.setState({ showPlayer: true })}>
              <img
                // width={400}
                // height={400 * (3 / 4)}
                style={{ objectFit: 'cover' }}
                src={`https://img.youtube.com/vi/${item.youtubeId}/${
                  this.state.imageIndex
                }.jpg`}
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
