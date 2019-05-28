import { h, Component } from 'preact'

export default class YoutubeThumbnail extends Component {
  static defaultProps = {
    onError: () => {},
    onLoad: () => {},
  }

  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  getSrc = () => {
    const { youtubeId, index } = this.props
    return `https://img.youtube.com/vi/${youtubeId}/${index}.jpg`
  }

  componentDidMount() {
    const { index } = this.props
    const src = this.getSrc()
    const img = new Image(src)
    img.src = src
    img.onload = (e) => {
      this.setState({ loading: false })
      // Hack to save round trip https://stackoverflow.com/a/21812607/1376627
      if (img.naturalWidth === 120 && index === 0) {
        return this.props.onError(e)
      }
      this.props.onLoad(e)
    }
    img.onerror = (e) => {
      this.props.onError(e)
      this.setState({ loading: false })
    }
  }

  render() {
    const { onLoad, onError, ...rest } = this.props
    const src = this.getSrc()
    return <img src={src} {...rest} />
  }
}
