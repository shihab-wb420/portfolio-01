import React from "react"
import "./styles/showProjects.css"
import ProjectCard from "./ProjectCard"
//const url = "http://localhost:4000/api"


const ShowProjects = ()=>{
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
  
  
  return(
        <>
            <div className="projects-wrapper">
            
            {
            datas.map((projectItem)=>{
              return(
                <ProjectCard projectItem={projectItem} />
               ) 
             })
             
            }
            </div>
        </>
    )
}

export default ShowProjects 
