import React from "react"
import { 
  StyledCardContainer, StyledThumbnailWrapper,
  StyledProjectTitle, StyledTechnologyTitle,
  StyledTechnologyWrapper, StyledTechnologyItem, 

  } from "../../components/ProjectCard"
 import {Link} from "react-router-dom"


const ProjectCard = ({projectItem})=>{
  
  const techStacks = [
   { tech:"React" },
    { tech:"Express" },
   { tech: "MongoDb" },
    {tech:"Bootstrap" },
    {tech: "Vercel"},
]
   
  return(
      <StyledCardContainer>
          <StyledThumbnailWrapper>
             <img src={`${projectItem.img}`} alt="Thumbnail"/>
          </StyledThumbnailWrapper>
          <StyledProjectTitle>
            {projectItem.title} 
          </StyledProjectTitle>
          <StyledTechnologyTitle>
            Technology Used :
          </StyledTechnologyTitle>
          <StyledTechnologyWrapper> 
            {
              techStacks.map((item)=>{
                return(
                   <StyledTechnologyItem> 
                      {item.tech}
                   </StyledTechnologyItem>
                )
              })
            }
          </StyledTechnologyWrapper>

          <div className="mt-4">
            <Link to={`/project/${projectItem.id}`}>
              <button className="ms-3"> 
                Details 
              </button>
            </Link>
            <Link to={`#liveDemo`}>
               <button className="mx-2"> 
                 Live Demo 
               </button>
            </Link>
          </div>
      </StyledCardContainer>
    )
}

export default ProjectCard
