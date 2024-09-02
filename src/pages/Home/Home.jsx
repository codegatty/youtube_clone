import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Feed from "../../components/Feed/Feed"
function Home({sidebar}) {

  return (
    <div>
      <Sidebar sidebar={sidebar}/>
      <div className={`container ${sidebar?"":"large-container"}`}>
        <Feed/>
      </div>
    
    </div>
  )
}

export default Home
