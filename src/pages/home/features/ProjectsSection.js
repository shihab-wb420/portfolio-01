import "./styles/projectsSection.css"
import {Link } from "react-router-dom"
import { 
  StyledCardContainer, StyledThumbnailWrapper,
  StyledProjectTitle, 
  } from "../../../components/ProjectCard"
import Datas from "../../../utils/ProjectDatas"


const Projects = ()=>{
 
   
  return(
       <div  className="projectsWrapper">
         <p className="common-sub-heading">
           <div>  My projects </div>
            <hr/> 
         </p>
         <h3> Featured Projects </h3>
          <div className="projectsContainer">
            {
              Datas.slice(0,4).map((item,i)=>{
               return(
                
                   <StyledCardContainer>
                      <StyledThumbnailWrapper>
                         <img src={`${item.img}`} alt="Thumbnail"/>
                      </StyledThumbnailWrapper>
                      <StyledProjectTitle>
                        {item.title} 
                      </StyledProjectTitle>
                     <div className="mt-4">
                        <Link to={`/project/${item.id}`}>
                          <button className="ms-3"> Details </button>
                        </Link>
                        <button className="mx-2"> Live Demo </button>
                     </div>
                  </StyledCardContainer>
                )
              })
            }
          </div>
          
          <div className="more_projects">
             <Link to="/projects">
              <span> More Projects </span>
                <i class="fa-solid fa-circle-arrow-right"></i>
             </Link>
          </div>
       </div>
    )
}

export default Projects