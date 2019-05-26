import { h, Component } from 'preact'

function loadYTIframeAPI() {
  var tag = document.createElement('script')
  tag.src = '//www.youtube.com/iframe_api'
  // document.body.appendChild(tag)
  var firstScriptTag = document.getElementsByTagName('script')[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

export default class Feed extends Component {
  constructor() {
    super()
    let results = []
    this.state = {
      results,
    }
  }

  async componentDidMount() {
    setTimeout(() => {
      console.log('got data')
      this.setState(
        {
          results: [
            {
              youtubeId: 'AmtOraYA4p0',
              objectID: 512347,
            },
          ],
        },
        () => this.initPlayer(0, this.state.results[0].objectID)
      )
    }, 1000)

    if (!window.YT) {
      window.onYouTubeIframeAPIReady = () => console.log('YT ready')
      loadYTIframeAPI()
    }
  }

  iframeLoaded = (index, id) => () => {
    // this.initPlayer(index, id)
  }

  initPlayer = (index, id) => {
    console.log(index, id)
    if (!index && !id) {
      return
    }
    console.log(`player${id}`)
    // https://jsbin.com/gegewebaja/1/edit?html,console
    const player = new window.YT.Player(`player${id}`, {
      events: {
        onReady: (e) => {
          console.log('onready', e.data, e.target.a.id, index)
          if (index === 0) {
            console.log('play')
            e.target.playVideo()
          }
        },
        onError: (e) => {
          console.log('onError', e, id, this.state.results[index].title)
        },
      },
    })
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.results.map((x, i) => (
          <iframe
            id={`player${x.objectID}`}
            src={`https://www.youtube.com/embed/${
              x.youtubeId
            }?enablejsapi=1&origin=${window.location.protocol}//${
              window.location.host
            }&autoplay=${i === 0 ? 1 : 0}`}
            frameBorder='0'
          />
        ))}
      </div>
    )
  }
}
