import { h } from 'preact'
import Feed from '../../components/feed'
import style from './style'

const Home = (props) => (
  <div className={style.home}>
    <Feed {...props} />
  </div>
)

export default Home
