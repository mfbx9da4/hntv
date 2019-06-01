import { h, Component } from 'preact'
import style from './style'

export default class Info extends Component {
  render({ message, details }) {
    if (!message) {
      return null
    }
    return (
      <div className={style.info}>
        <div>{message}</div>
        {details && (
          <div>
            <details>
              <summary>More Info</summary>
              <code>{details}</code>
            </details>
          </div>
        )}
      </div>
    )
  }
}
