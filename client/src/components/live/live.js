import { h, Component } from 'preact'
import style from './style'
import Chat from '../chat'
import Item from '../item'
import { getLiveVideo } from '../../services/api'
import getUrlQueryParameters from '../../utils/getUrlQueryParameters'
import { serverTime } from '../../loadFirebase'

export default class Live extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    const res = await getLiveVideo()
    let item = await res.json()
    console.log('item', item)
    item.objectID = item.id
    item.youtubeId = getUrlQueryParameters(item.url).v
    const now = await serverTime()
    const offset = Math.max(now - item.startTime, 0)
    this.setState({ item, offset })
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
