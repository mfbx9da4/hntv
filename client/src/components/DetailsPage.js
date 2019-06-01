import { h, Component } from 'preact'
import { getVideo } from '../services/api'
import Loader from './Loader'
import Info from './Info'
import day from 'dayjs'
import Item from './item'
import getUrlQueryParameters from '../utils/getUrlQueryParameters'
import Chatkit from '@pusher/chatkit-client'

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
    const tokenProvider = new Chatkit.TokenProvider({
      url: 'https://us-central1-hacker-news-tv.cloudfunctions.net/identify',
      // 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a9652974-4f20-4616-a573-a0a67caa94e9/token',
    })

    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:a9652974-4f20-4616-a573-a0a67caa94e9',
      userId: 'mfbx',
      tokenProvider: tokenProvider,
    })

    chatManager
      .connect()
      .then((currentUser) => {
        currentUser.subscribeToRoomMultipart({
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: (message) => {
              console.log('message', message)
              const ul = document.getElementById('message-list')
              const li = document.createElement('li')
              li.appendChild(
                document.createTextNode(
                  `${message.senderId}: ${
                    // We know our message will have a single part with
                    // a plain text content because we used
                    // sendSimpleMessage. In general we'd have to check
                    // the partType here.
                    message.parts[0].payload.content
                  }`
                )
              )
              ul.appendChild(li)
            },
          },
        })

        const form = document.getElementById('message-form')
        form.addEventListener('submit', (e) => {
          e.preventDefault()
          const input = document.getElementById('message-text')
          currentUser.sendSimpleMessage({
            text: input.value,
            roomId: currentUser.rooms[0].id,
          })
          input.value = ''
        })
      })
      .catch((error) => {
        console.error('error:', error)
      })
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
