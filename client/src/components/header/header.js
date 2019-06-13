import { h, Component, cloneElement } from 'preact'
import style from './style'
import { Link } from 'preact-router'
import Login from '../login'

class DropdownMenu extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', this.handleClick, false)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('mousedown', this.handleClick, false)
    }
  }

  handleClick = (e) => {
    if (this.containerRef.contains(e.target)) {
      return
    }
    this.setState({ isOpen: false })
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    console.log('this.props.children', this.props.children)
    let activeChildIndex = 0
    for (let i = 0; i < this.props.children.length; i++) {
      let child = this.props.children[i]
      if (child.attributes && child.attributes.active) {
        activeChildIndex = i
        break
      }
    }
    const activeChild = cloneElement(this.props.children[activeChildIndex], {
      top: true,
    })
    console.log(activeChild)
    return (
      <div
        class={style.DropDownMenuContainer}
        ref={(ref) => (this.containerRef = ref)}
      >
        <div
          style={{
            background: activeChild.attributes.active
              ? 'var(--background-active)'
              : 'transparent',
          }}
          class={style.DropDownMenuTopContainer}
          onClick={this.toggle}
        >
          {activeChild}
        </div>
        <div
          ref={(ref) => (this.itemsRef = ref)}
          onClick={() => {
            console.log('this.called')
          }}
          class={style.DropdownMenuItemsContainer}
          style={{ display: this.state.isOpen ? 'flex' : 'none' }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}

class DropdownItem extends Component {
  render() {
    return (
      <div
        className={`${
          this.props.top ? style.DropDownMenuTop : style.DropDownMenuItem
        } ${this.props.active && 'active'}`}
      >
        {this.props.children}
        {this.props.top && (
          <div
            style={{
              padding: '0px 12px',
              fontSize: '30px',
              height: '12px',
              marginTop: '-8px',
              cursor: 'pointer',
            }}
          >
            {'⌄'}
          </div>
        )}
      </div>
    )
  }
}

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
        <div className={style.brand}>
          <h1>
            <a href='#' onClick={this.reload}>
              <span style={{ color: '#ff6600' }}>HN</span>
              TV
            </a>{' '}
          </h1>
          <div
            style={{
              display: 'flex',
              fontSize: '11px',
              alignItems: 'flex-end',
              height: '21px',
            }}
          >
            by{' '}
            <img
              style={{ marginLeft: '8px' }}
              width={16}
              height={16}
              src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNzUiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwIDAgMzc1IDM3NSI+CiAgPGcgZmlsbD0iIzRCNDBFQiI+CiAgICA8cGF0aCBkPSJNMTY3LjEwNTc2LDIxMCBDMTYwLjc3MTkyOCwyMTUuODQyMTA1IDE1My4yMTE3NTgsMjE4Ljc1IDE0Mi44NDg1MywyMTguNzUgQzEyOC43NzkzMzYsMjE4Ljc1IDEyMS4zOTQzNTcsMjEzLjI1IDExNS41ODYwOTgsMjA2LjU1MjYzMiBDMTA1LjU1OTc3NiwxOTQuODgxNTc5IDEwNi4yNjA1NCwxNzIuOTA3ODk1IDEwNi4yNjA1NCwxNTYuNDIxMDUzIEMxMDYuMjYwNTQsMTM5LjkzNDIxMSAxMDUuNTU5Nzc2LDExNy42MTg0MjEgMTE1LjU4NjA5OCwxMDUuOTQ3MzY4IEMxMjEuMzgwODgxLDk5LjI1IDEyOC43NjU4Niw5My43NSAxNDIuODM1MDU0LDkzLjc1IEMxNTMuMjExNzU4LDkzLjc1IDE2MC43NzE5MjgsOTYuNjcxMDUyNiAxNjcuMDkyMjg0LDEwMi41IEMxNzMuNDEyNjQsMTA4LjMyODk0NyAxNzcuNjU3NjU2LDExOC4wOTIxMDUgMTc4LjIzNzEzNCwxMjkuODAyNjMyIEwxNTMuMjExNzU4LDEyOS44MDI2MzIgQzE1My4wMzY1NjcsMTI2LjM2ODQyMSAxNTIuNjMyMjc5LDEyMi45MzQyMTEgMTUxLjI4NDY1NiwxMjAuMzU1MjYzIEMxNDkuOTM3MDMyLDExNy40MzQyMTEgMTQ3LjQxNjk3NSwxMTUuNzIzNjg0IDE0Mi44NDg1MywxMTUuNzIzNjg0IEMxMzkuMzMwOTQxLDExNS40NTQzNDkgMTM2LjAyMTI2NSwxMTcuMzc4NDg0IDEzNC41ODc1OTUsMTIwLjUyNjMxNiBDMTMxLjU4MjM5NCwxMjYuMTk3MzY4IDEzMS4yMzIwMTIsMTQxLjQ4Njg0MiAxMzEuMjMyMDEyLDE1Ni4yNSBDMTMxLjIzMjAxMiwxNzEuMDEzMTU4IDEzMS41ODIzOTQsMTg2LjMwMjYzMiAxMzQuNTc0MTE5LDE5MS45NjA1MjYgQzEzNi4wMTA5NDcsMTk1LjEwNTYxOCAxMzkuMzE4NDI3LDE5Ny4wMjg0NzYgMTQyLjgzNTA1NCwxOTYuNzYzMTU4IEMxNDcuNDAzNDk5LDE5Ni43NjMxNTggMTUwLjA0NDg0MiwxOTQuODgxNTc5IDE1MS40NTk4NDcsMTkxLjk2MDUyNiBDMTUyLjgwNzQ3MSwxODkuMzI4OTQ3IDE1My4yMTE3NTgsMTg1Ljk0NzM2OCAxNTMuNDAwNDI1LDE4Mi41MTMxNTggTDE3OC4zNTg0MiwxODIuNTEzMTU4IEMxNzcuODMyODQ3LDE5NC4xOTczNjggMTczLjYxNDc4NCwyMDMuOTg2ODQyIDE2Ny4xMDU3NiwyMTAgWiIvPgogICAgPHBvbHlnb24gcG9pbnRzPSIyMzcuNDcxIDE3OC4yMzcgMjM3LjQ3MSAyMDUuODY4IDI2NS42MSAyMDUuODY4IDI2NS42MSAyMjcuOTA4IDIzNy40NzEgMjI3LjkwOCAyMzcuNDcxIDI3OC41MTMgMjEyLjUgMjc4LjUxMyAyMTIuNSAxNTYuMjUgMjcwLjE3OCAxNTYuMjUgMjcwLjE3OCAxNzguMjI0IDIzNy40NzEgMTc4LjIyNCIvPgogICAgPHBhdGggZD0iTTE4Ljc1LDE4Ljc1IEwxOC43NSwzNTYuMjUgTDM1Ni4yNSwzNTYuMjUgTDM1Ni4yNSwxOC43NSBMMTguNzUsMTguNzUgWiBNMCwwIEwzNzUsMCBMMzc1LDM3NSBMMCwzNzUgTDAsMCBaIi8+CiAgPC9nPgo8L3N2Zz4K'
              alt='Crowdform'
            />{' '}
          </div>
        </div>
        <div className={style.linksContainer}>
          <DropdownMenu className={style.headerLinkContainer}>
            <DropdownItem active={this.props.currentUrl === '/week'}>
              <Link href={'/week'}>TOP THIS WEEK</Link>
            </DropdownItem>
            <DropdownItem active={this.props.currentUrl === '/fortnight'}>
              <Link href={'/fortnight'}>TOP THIS FORTNIGHT</Link>
            </DropdownItem>
            <DropdownItem active={this.props.currentUrl === '/month'}>
              <Link href={'/month'}>TOP THIS MONTH</Link>
            </DropdownItem>
            <DropdownItem active={this.props.currentUrl === '/alltime'}>
              <Link href={'/alltime'}>ALL TIME</Link>
            </DropdownItem>
          </DropdownMenu>
          <div className={style.headerLinkContainer}>
            <div className={style.headerLink}>
              <Link
                onClick={this.onRandom}
                href={'#'}
                className={
                  this.props.currentUrl &&
                  this.props.currentUrl.indexOf('/random') > -1
                    ? style.linkActive
                    : ''
                }
              >
                RANDOM WEEK
              </Link>
            </div>
          </div>
          <div className={style.headerLinkContainer}>
            <div className={style.liveLink}>
              <Link
                className={
                  this.props.currentUrl === '/live' ? style.liveLinkActive : ''
                }
                href='/live'
              >
                {'●'} LIVE
              </Link>
            </div>
          </div>
          <Login />
        </div>
      </header>
    )
  }
}
