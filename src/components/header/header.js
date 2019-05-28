import { h, Component } from 'preact'
import style from './style'
import { Link } from 'preact-router'

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
              Hacker News TV
            </a>{' '}
          </h1>
        </div>
        <div className={style.linksContainer}>
          <div className={style.headerLink}>
            <Link href='/week'>Week</Link>
          </div>
          <div className={style.headerLink}>
            <Link href='/fortnight'>Fortnight</Link>
          </div>
          <div className={style.headerLink}>
            <Link href='/month'>Month</Link>
          </div>
          <div className={style.headerLink}>
            <Link onClick={this.onRandom} href={'#'}>
              I'm feeling lucky
            </Link>
          </div>
        </div>
      </header>
    )
  }
}
