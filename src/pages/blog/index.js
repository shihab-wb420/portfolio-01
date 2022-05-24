//import {StyledButton } from "../../components/Button"
import Banner from "./Banner"
import Posts from "./Posts"
import TopBar from "../../components/NavBar"
//import Filter from "../../components/Filter"

const Blog = ()=>{
  
  return(
        <div className="blogWrapper">
          <TopBar/>
          <Banner />
          <hr/>
          <Posts />
       </div>
    )
}

export default Blog