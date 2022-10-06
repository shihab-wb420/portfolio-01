import "./styles/index.css"
import React from "react"
import ShowProjects from "./ShowProjects"

const Projects = ()=>{
  
  return(
        <div className="projects-container"> 
            <h2 className="head-title muted">  Recent Projects </h2>
            <ShowProjects />
        </div>
    )
}

export default Projects 
