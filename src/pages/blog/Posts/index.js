import "./posts.css"
import Post from "./Post"
import BlogPosts from "../../../utils/BlogPosts"
import { StyledButton } from "../../../components/Button"

const Posts = ()=>{
  
  return(
        <div className="postsWrapper">
         <h4> Recent Posts </h4>
         <div className="postContainer">
          { 
            BlogPosts.map((data)=>(
             <Post data={data} key={data.id}/>
            ))
           }
          </div>
           <StyledButton
           variant="outlined"
           className="loadMorePost">
             Load More
           </StyledButton>
        </div>
    )
}

export default Posts