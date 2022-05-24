import "./post.css"
import {StyledButton} from "../../../components/Button"

const Post = ({data})=>{
  const {title,description,category, } = data;
  
  return(
           <div className="postBox">
              <div className="postTitle">{title}</div>
              <p>{description}..</p>
              <p className="category"> {category} </p>
              <StyledButton  mg="1.8em 0em 0em 0em"  pd="0.6em 1em"      br="1em" variant="outlined" >  
                Read More
              </StyledButton>
          </div>
    )
}

export default Post