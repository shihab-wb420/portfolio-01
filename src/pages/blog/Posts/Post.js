import "./post.css"
import {Link} from "react-router-dom"
//import {StyledButton} from "../../../components/Button"

const Post = ({data})=>{
  const {id,title,description,category, } = data;
  
  return(
           <Link to={`/post/${id}`} className="postBox">
              <div className="postTitle">{title}</div>
              <p className="category"> {category} </p>
              <p>{description}..</p>
             {/* <StyledButton  mg="1.8em 0em 0em 0em"  pd="0.6em 1em"      br="1em" variant="outlined" >  
                Read More
              </StyledButton>*/}
          </Link>
    )
}

export default Post