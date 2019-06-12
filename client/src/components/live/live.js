import { h, Component } from 'preact'
import style from './style'
import Chat from '../chat'
import Item from '../item'
import { getLiveVideo } from '../../services/api'
import getUrlQueryParameters from '../../utils/getUrlQueryParameters'
import loadFirebase, { serverTime } from '../../loadFirebase'
import day from 'dayjs'
import Loader from '../loader'
import Info from '../info'

export default class Live extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      error: {},
    }
  }

  async componentDidMount() {
    await loadFirebase()
    this.setState({ loading: true })
    const res = await getLiveVideo()
    if (res.ok) {
      let { item } = await res.json()
      item.objectID = item.id
      item.youtubeId = getUrlQueryParameters(item.url).v
      item.start = this.calcStartOffset(item.startTime)
      this.setState({ item, showPlayer: true })
    }
    this.setState({ loading: false })
  }

  calcStartOffset = async (startTime) => {
    const now = await serverTime()
    return Math.max(day(now).unix() - day(startTime).unix(), 0)
  }

  onReady = (event) => {
    this.player = event.target
    this.player.playVideo()
    this.player.seekTo(this.state.item.start)
  }

  render() {
    return (
      <div className={style.Live}>
        <div className={style.infoContainer}>
          <Loader message={this.state.loading} />
          <Info
            message={this.state.error.message}
            details={this.state.error.details}
          />
        </div>
        <div className={style.playerContainer}>
          <Item
            onReady={this.onReady}
            showPlayer={this.state.showPlayer}
            playerVars={{ controls: 1, rel: 0, fs: 0, modestbranding: 1 }}
            item={this.state.item}
          />
        </div>
        <div className={style.chatContainer}>
          <Chat />
        </div>
      </div>
    )
  }
}
