import "./styles/projectsSection.css"
import {Link } from "react-router-dom"
import { 
  StyledCardContainer, StyledThumbnailWrapper,
  StyledProjectTitle, StyledTechnologyTitle,
  StyledTechnologyWrapper, StyledTechnologyItem, 
  } from "../../../components/ProjectCard"
  
const Projects = ()=>{
  
  const datas =[
    {
      img:"./images/projects-thumbnail/youtube-clone.jpg",
      title:"Youtube Clone",
      p:"About projects...",
      status:"Cooming Soon..."
    },
     {
      img:"./images/projects-thumbnail/spotify-clone.jpg",
      title:"Spotify Clone",
      p:"About projects...",
      status:"Cooming Soon..."
    },
    {
      img:"./images/projects-thumbnail/facebook-clone.jpg",
      title:"Facebook Clone",
      p:"About projects...",
      status:"Cooming Soon..."
    },
    
      {
      img:"./images/projects-thumbnail/chatting-aap-clone.jpg",
      title:"Real-time Messageing Web-App",
      p:"About projects...",
      status:"Cooming Soon..."
    },
      {
      img:"./images/projects-thumbnail/twitter-clone.jpg",
      title:"Twitter Clone",
      p:"About projects...",
      status:"Cooming Soon..."
    },
    {
      img:"./images/projects-thumbnail/food-delivery-app-clone.jpg",
      title:"Food delivery web-app",
      p:"About projects...",
      status:"Cooming Soon..."
    },
   ]
  
  //--- technology used_---
  const techStacks = [
   { tech:"React" },
    { tech:"Express" },
   { tech: "MongoDb" },
    {tech:"Bootstrap" },
    {tech: "Vercel"},
];

   
  return(
       <div  className="projectsWrapper">
         <p className="common-green-title">
           <div>  My projects </div>
            <hr/> 
         </p>
         <h3> Recent Projects </h3>
          <div className="projectsContainer">
            {
              datas.map((item,i)=>{
               return(
                
                   <StyledCardContainer>
                      <StyledThumbnailWrapper>
                         <img src={`${item.img}`} alt="Thumbnail"/>
                      </StyledThumbnailWrapper>
                      <StyledProjectTitle>
                        {item.title} 
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