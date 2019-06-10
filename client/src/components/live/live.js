import { h, Component } from 'preact'
import style from './style'
import Chat from '../chat'
import Item from '../item'
import { getLiveVideo } from '../../services/api'
import getUrlQueryParameters from '../../utils/getUrlQueryParameters'
import loadFirebase, { serverTime } from '../../loadFirebase'
import day from 'dayjs'

export default class Live extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    await loadFirebase()
    const res = await getLiveVideo()
    console.log('res', res)
    if (res.ok) {
      let { item } = await res.json()
      item.objectID = item.id
      item.youtubeId = getUrlQueryParameters(item.url).v
      const now = await serverTime()
      item.start = Math.max(day(now).unix() - day(item.startTime).unix(), 0)
      console.log('item', item)
      this.setState({ item })
    }
  }

  render() {
    return (
      <div className={style.Live}>
        <div className={style.playerContainer}>
          <Item item={this.state.item} />
        </div>
        <div className={style.chatContainer}>
          <Chat />
        </div>
      </div>
    )
  }
}
