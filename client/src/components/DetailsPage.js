import { h, Component } from 'preact'
import { getVideo } from '../services/api'
import Loader from './Loader'
import Info from './Info'
import day from 'dayjs'
import Item from './item'
import getUrlQueryParameters from '../utils/getUrlQueryParameters'

export default class DetailsPage extends Component {
  constructor() {
    super()
    this.state = {
      item: {},
    }
    this.currentPlayer = { pauseVideo: () => {} }
  }

  async componentDidMount() {
    console.log(this.props.matches.objectID)
    this.loadVideo(this.props.matches.objectID)
  }

  loadVideo = async (objectID) => {
    let res = await getVideo(objectID)
    let data = await res.json()
    data.objectID = data.id
    data.youtubeId = getUrlQueryParameters(data.url).v
    this.setState({ item: data })
  }

  render() {
    return (
      <div>
        <Item item={this.state.item} />
      </div>
    )
  }
}
