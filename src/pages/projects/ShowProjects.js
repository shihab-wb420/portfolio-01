import React from "react"
import "./styles/showProjects.css" 
import ProjectCard from "./ProjectCard"
import Datas from "../../utils/ProjectDatas"
//const url = "http://localhost:4000/api"


const ShowProjects = ()=>{
  
  
  
  return(
        <>
            <div className="projects-wrapper">
            
            {
            Datas.map((projectItem)=>{
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
