import { h, Component } from 'preact'
import style from './style'
import loadFirebase, { signin, ChatSubscription } from '../../loadFirebase'

export default class Login extends Component {
  async componentDidMount() {
    await loadFirebase()
    this.fireBaseListener = window.firebase
      .auth()
      .onAuthStateChanged((user) => {
        if (user) {
          console.log('user changed..', user)
          this.setState({
            user: {
              displayName: user.displayName,
              email: user.email,
            },
          })
        }
      })
  }

  onSignin = async () => {
    await signin()
  }

  onLogout = async () => {
    try {
      await window.firebase.auth().signOut()
    } finally {
      this.setState({ user: null })
    }
  }

  componentWillUnmount() {
    this.fireBaseListener && this.fireBaseListener()
    this.authListener = undefined
  }

  render() {
    return (
      <div className={style.login}>
        {this.state.user ? (
          <div onClick={this.onLogout}>{this.state.user.email} - Logout</div>
        ) : (
          <div onClick={this.onSignin}>Login with Google</div>
        )}
      </div>
    )
  }
}
