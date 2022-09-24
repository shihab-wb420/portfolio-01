import "./styles.css"
import Datas from "../../../utils/ProjectDatas"
import {useParams} from "react-router-dom"
  

const SingleProject = ()=>{
  const {projectID} = useParams();

  const projectData = Datas.find((item)=> item.id === projectID ) 
  
  return(
      <div class="projectDetails_Container">
        <h3> Project Details </h3>
        <div className="projectDetails_content">
          <div className="project_thubmnail">
            <img src={`${projectData.img}`} alt="thumbnail"/>
          </div>
          <h3>{projectData.title}</h3>
          <p> projectID: {projectID}</p>
          <p className="project_description">
            {projectData.description}
          </p>
        </div>
      </div>
    ) 
}

export default SingleProject
