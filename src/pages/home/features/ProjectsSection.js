import "./styles/projectsSection.css"
import {Grid } from "@mui/material"

const Projects = ()=>{
  
  const datas =[
    {
      img:"Project image",
      title:"Youtube Clone",
      p:"About projects...",
    },
     {
      img:"Project image",
      title:"Spotify Clone",
      p:"About projects..."
    },
    {
      img:"Project image",
      title:"Facebook Clone",
      p:"About projects..."
    },
    
      {
      img:"Project image",
      title:"Youtube Clone",
      p:"About projects...",
    },
     {
      img:"Project image",
      title:"Spotify Clone",
      p:"About projects..."
    },
    {
      img:"Project image",
      title:"Facebook Clone",
      p:"About projects..."
    },
    
   ]
   
   
  return(
       <div  className="projectsWrapper">
         <h3> Recent Projects </h3>
          <div className="projectsContainer">
            {
              datas.map((data,i)=>{
               return(
                   <div className="projectBox" key={i}>
                      <div className="projectImg"> 
                        {data.img}
                      </div>
                      <h4> {data.title} </h4>
                  </div>
                )
              })
            }
          </div>
       </div>
    )
}

export default Projects