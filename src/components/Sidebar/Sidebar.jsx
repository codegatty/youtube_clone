import './Sidebar.css'
import home from '../../assets/home.png'
import game from '../../assets/game_icon.png'
import automobile from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import  tom  from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt=""/><p>Home</p>
        </div>
        <div className="side-link">
          <img src={game} alt=""/><p>Gaming</p>
        </div>
        <div className="side-link">
          <img src={automobile} alt=""/><p>Automobiles</p>
        </div>
        <div className="side-link">
          <img src={sports} alt=""/><p>Sports</p>
        </div>
        <div className="side-link">
          <img src={tech} alt=""/><p>Technology</p>
        </div>
        <div className="side-link">
          <img src={music} alt=""/><p>Music</p>
        </div>
        <div className="side-link">
          <img src={blogs} alt=""/><p>Blogs</p>
        </div>
        <div className="side-link">
          <img src={news} alt=""/><p>News</p>
        </div>
      
      </div>
      <hr/>
      <div className="sub-list">
        <h3>Subscribers</h3>
      <div className="side-link">
          <img src={jack} alt=""/><p>jack</p>
        </div>
        <div className="side-link">
          <img src={simon} alt=""/><p>simon</p>
        </div>
        <div className="side-link">
          <img src={tom} alt=""/><p>tom</p>
        </div>
        <div className="side-link">
          <img src={megan} alt=""/><p>megan</p>
        </div>
        <div className="side-link">
          <img src={cameron} alt=""/><p>cameron</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
