import { 
  CardContainer, 
  ThumbnailWrapper, ProjectTitle,
  TechnologyTitle , TechnologyWrapper,
  TechnologyItem, DescriptionWrapper  } from "./ProjectCard.styles.js"

export const StyledCardContainer = ({children})=>{
 return(
     <CardContainer>
       {children}
     </CardContainer>
   )
}


export const StyledThumbnailWrapper = ({children})=>{
 return(
     <ThumbnailWrapper>
       {children}
     </ThumbnailWrapper>
   )
}


export const StyledProjectTitle = ({children})=>{
 return(
     <ProjectTitle>
       {children}
     </ProjectTitle>
   )
}


export const StyledTechnologyTitle = ({children})=>{
 return(
     <TechnologyTitle>
       {children}
     </TechnologyTitle>
   )
}


export const StyledTechnologyWrapper = ({children})=>{
 return(
     <TechnologyWrapper>
       {children}
     </TechnologyWrapper>
   )
}


export const StyledTechnologyItem = ({children})=>{
 return(
     <TechnologyItem>
       {children}
     </TechnologyItem>
   )
}


export const StyledDescriptionWrapper = ({children})=>{
 return(
     <DescriptionWrapper>
       {children}
     </DescriptionWrapper>
   )
}
