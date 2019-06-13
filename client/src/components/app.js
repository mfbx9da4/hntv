import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Header from './header'
import loadGoogleAnalytics from '../loadGoogleAnalytics'

// Code-splitting is automated for routes
import Home from '../routes/home'
import DetailsPage from '../routes/DetailsPage'
import LivePage from '../routes/LivePage'

loadGoogleAnalytics()

export default class App extends Component {
  constructor() {
    super()
    this.state = { currentUrl: null }
  }
  handleRoute = (e) => {
    this.setState({ currentUrl: e.url })
  }

  render() {
    return (
      <div id='app'>
        <Header currentUrl={this.state.currentUrl} />
        <Router onChange={this.handleRoute}>
          <Home path='/' />
          <Home path='/week' />
          <Home path='/fortnight' />
          <Home path='/month' />
          <Home path='/alltime' />
          <Home path='/random' />
          <LivePage path='/live' />
          <DetailsPage path='/item/:objectID' />
          <Home default />
        </Router>
      </div>
    )
  }
}
