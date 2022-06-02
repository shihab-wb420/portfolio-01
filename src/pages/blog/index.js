
import "./styles.css"
import Posts from "./Posts"
import TopBar from "../../components/NavBar"
//import Banner from "./Banner"
//import Filter from "../../components/Filter"

const Blog = ()=>{
  
  return(
    <>
        <TopBar/>
        <div className="blogWrapper">
         {/* <Banner />*/}
          <Posts />
       </div>
    </>
    )
}

export default Blog