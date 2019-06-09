import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'

// Code-splitting is automated for routes
import Home from '../routes/home'
import DetailsPage from '../routes/DetailsPage'
import LivePage from '../routes/LivePage'

export default class App extends Component {
  /** Gets fired when the route changes.
   *  @param {Object} event       "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url   The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div id='app'>
        <Header />
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
