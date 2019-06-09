import { h, Component } from 'preact'
import style from './style'
import { Link } from 'preact-router'
import Login from '../login'

export default class Header extends Component {
  reload = () => {
    window.location.href = '/'
  }

  onRandom = () => {
    const href = `/random/?r=${Math.random()}`
    window.location = href
  }

  render() {
    return (
      <header className={style.header}>
        <div className='brand'>
          <h1>
            <a href='#' onClick={this.reload}>
              HNTV
            </a>{' '}
          </h1>
        </div>
        <div className={style.linksContainer}>
          <div className={style.headerLinkContainer} z>
            <div className={style.headerLink}>
              <Link href='/week'>WEEK</Link>
            </div>
          </div>
          <div className={style.headerLinkContainer} z>
            <div className={style.headerLink}>
              <Link href='/fortnight'>FORTNIGHT</Link>
            </div>
          </div>
          <div className={style.headerLinkContainer} z>
            <div className={style.headerLink}>
              <Link href='/month'>MONTH</Link>
            </div>
          </div>
          <div className={style.headerLinkContainer} z>
            <div className={style.headerLink}>
              <Link href='/alltime'>ALL TIME</Link>
            </div>
          </div>
          <div className={style.headerLinkContainer} z>
            <div className={style.headerLink}>
              <Link onClick={this.onRandom} href={'#'}>
                RANDOM WEEK
              </Link>
            </div>
          </div>
          <div>
            <Login />
          </div>
        </div>
      </header>
    )
  }
}
