import { h, Component } from 'preact'
import style from './style'

export default class Loader extends Component {
  render({ message }) {
    if (!message) return null
    return <div className={style.loader}>🐎 {message}</div>
  }
}
