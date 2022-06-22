
import React from "react"
import { 
  StyledCardContainer, StyledThumbnailWrapper,
  StyledProjectTitle, StyledTechnologyTitle,
  StyledTechnologyWrapper, StyledTechnologyItem, 

  } from "../../components/ProjectCard"

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
         {/* <StyledDescriptionWrapper>
            {projectItem.p}
          </StyledDescriptionWrapper>  */}
      </StyledCardContainer>
    )
}

export default ProjectCard
