import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
function Feed() {
    const thumbs=[thumbnail1,thumbnail2,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail7,thumbnail8,thumbnail1,thumbnail2,thumbnail3,thumbnail4,thumbnail5,thumbnail6,thumbnail7,thumbnail8]
  return (
    <div className='feed'>

    {
        thumbs.map((element)=>{
            return <Card thumbnail={element} title="hello world programme" views={15} days={2} channel={"hello name"}/>
        })
    }
    </div>

  )
}

const Card=({thumbnail,title,channel,views,days})=>{
    return(
        <Link className='card' to={`video/20/4215`}>
        <img src={thumbnail} alt=''/>
        <h2>{title}</h2>
        <h3>{channel}</h3>
        <p>{views} views &bull; {days} days ago</p>
        </Link>
    )
}

export default Feed
