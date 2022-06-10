import "./styles/projectCard.css"
import React from "react"


const ProjectCard = ({projectItem})=>{
  
  return(
        <div className="projectCard-container"> 
            <div className="project_thumbnail">
              <img src={`${projectItem.img}`} alt="Thumbnail"/>
            </div>
            <h2 className="project_title"> {projectItem.title} </h2>
            <p className="technology_used_title"> Technology Used: </p>
            <div className="project_technology_wrapper"> 
              <div className="technology_item"> ReactJS </div>
              <div className="technology_item"> ReactJS </div>
              <div className="technology_item"> ReactJS </div>
              <div className="technology_item"> ReactJS </div>
            </div>
          {/*  <div className="project_description">
              {projectItem.p}
            </div> */}
        </div>
    )
}

export default ProjectCard
