import "./styles.css"
import BlogPosts from "../../../utils/BlogPosts"
import {useParams} from "react-router-dom"

const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSpuPovVCtmzwwjefeKsq5Z4e9LowNC-DgyQ&usqp=CAU";

const SingleBlogPost = ()=>{
  const {postID} = useParams();

  const postData = BlogPosts.find((item)=> parseInt(item.id) === parseInt(postID) ) 
  
  return(
      <div class="blogPost_Container">
        <h3>  Blog post </h3>
        <div className="blogPost_content">
          <div className="blogPost_thubmnail">
            <img src={`${postData?.img ? postData.img : defaultImg}`} alt="thumbnail"/>
          </div>
          <h3>{postData.title}</h3>
          <p> postID: {postID}</p>
          <p className="blogPost_description">
            {postData.description}
          </p>
        </div>
      </div>
    ) 
}

export default SingleBlogPost
