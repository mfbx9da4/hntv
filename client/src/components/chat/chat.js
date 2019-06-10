import { h, Component } from 'preact'
import style from './style'
import loadFirebase, { signin, ChatSubscription } from '../../loadFirebase'
import day from 'dayjs'

class ChatMessage extends Component {
  render({ message }) {
    return (
      <div
        onClick={() => this.setState({ showDate: true })}
        className={style.ChatMessage}
      >
        <div className={style.avatarContainer}>
          <img className={style.avatar} src={message.authorAvatar} />
        </div>
        <div className={style.messageContainer}>
          <div className={style.meta}>
            <div className={style.authorName}>{message.authorName}</div>
            <div className={style.date}>
              {day(message.timestamp).format('HH:MM D MMM YYYY')}
            </div>
          </div>
          <div className={style.message}>{message.message}</div>
        </div>
      </div>
    )
  }
}

export default class Chat extends Component {
  constructor() {
    super()
    this.state = { messages: [], inputText: '' }
  }

  onMessage = (message) => {
    this.setState(
      { messages: [...this.state.messages, message] },
      this.scrollToBottom
    )
  }

  async componentDidMount() {
    await loadFirebase()
    this.chat = new ChatSubscription('chats/live', this.onMessage)
  }

  componentWillUnmount() {
    this.chat.destroy()
  }

  writeMessage = (event) => {
    const message = {
      message: event.target.value,
    }
    this.chat.write(message)
    this.setState({ inputText: '' })
  }

  onKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) this.writeMessage(event)
  }

  onChange = (event) => {
    this.setState({ inputText: event.target.value })
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' })
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  render() {
    return (
      <div className={style.Chat}>
        <div className={style.chatMessagesContainer}>
          {this.state.messages.map((x) => (
            <ChatMessage message={x} />
          ))}
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => {
              this.messagesEnd = el
            }}
          />
        </div>
        <div className={style.inputContainer}>
          <input
            className={style.inputArea}
            type='text'
            onKeyPress={this.onKeyPress}
            autofocus
            onChange={this.onChange}
            value={this.state.inputText}
          />
        </div>
      </div>
    )
  }
}
