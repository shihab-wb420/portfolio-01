import "./styles/projectsSection.css"
import {Link } from "react-router-dom"

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
    
   
  return(
       <div  className="projectsWrapper">
         <p className="common-green-title">
           <div>  My projects </div>
            <hr/> 
         </p>
         <h3> Recent Projects </h3>
          <div className="projectsContainer">
            {
              datas.map((data,i)=>{
               return(
                   <div className="projectBox" key={i}>
                      <div className="projectBox__thumbnail"> 
                         <img src={`.${data.img}`} alt="Thumbnail"/>
                      </div>
                      <h4 className="projectBox__title"> 
                        {data.title} 
                      </h4>
                      <div className="projectBox__status"> 
                        {data.status}
                      </div>
                  </div>
                )
              })
            }
          </div>
          
          <div className="more_projects">
             <Link to="/projects"> More Projects -> </Link>
          </div>
       </div>
    )
}

export default Projects