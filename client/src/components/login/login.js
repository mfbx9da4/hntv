import { h, Component } from 'preact'
import style from './style'
import loadFirebase, { signin, ChatSubscription } from '../../loadFirebase'

export default class Login extends Component {
  async componentDidMount() {
    await loadFirebase()
  }

  onSignin = async () => {
    await signin()
  }

  render() {
    return (
      <div className={style.login}>
        <div onClick={this.onSignin}>with Google</div>
      </div>
    )
  }
}
