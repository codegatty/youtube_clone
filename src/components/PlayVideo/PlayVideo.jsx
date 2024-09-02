import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/user_profile.jpg'

function PlayVideo() {
  return (
    <div className='play-video'>
      <video src={video1} controls muted autoPlay/>
      <h3>Best channel to learn coding</h3>
      <div className='play-video-info'> 
        <p>1522 views &bull; 2 days ago</p>
        <div>
          <span><img src={like}/> 125</span>
          <span><img src={dislike}/> 125</span>
          <span><img src={share}/> Share</span>
          <span><img src={save}/> Save</span>

        </div>
      </div>
      <hr/>
      <div className="publisher">
        <img src={jack} alt=""/>
        <div>
          <p>Greatstake</p>
          <span>1M Subscribers</span>
        </div>
        <button>
          Subscribe
        </button>
      </div>
      <div className="vid-description">
        <p>Channel that makes learning easy</p>
        <p>Subscribe GrateStak to watch for more veioods</p>
        <hr/>
        <div className='comment'>
          <img src={jack}/>
          <div>
            <h3>Jack nicholson<span>1 day ago</span></h3>
            <p>good video</p>
            <div className='comment-action'>
            <span><img src={like}/> 125</span>
            <span><img src={dislike}/> 125</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayVideo
