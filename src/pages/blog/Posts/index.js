import "./posts.css"
import Post from "./Post"
import Datas from "./DummyData"
import { StyledButton } from "../../../components/Button"

const Posts = ()=>{
  
  return(
        <div className="postsWrapper">
         <h4> Recent Posts </h4>
         <div className="postContainer">
          { 
            Datas.map((data)=>(
             <Post data={data} key={data.id}/>
            ))
           }
          </div>
           <StyledButton
           variant="outlined"
           className="loadMorePost">
              Load More Post
           </StyledButton>
        </div>
    )
}

export default Posts