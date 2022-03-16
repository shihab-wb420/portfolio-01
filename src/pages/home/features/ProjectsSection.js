import "./styles/projectsSection.css"

const Projects = ()=>{
  
  const datas =[
    {
      img:"thumb.png",
      title:"Youtube Clone",
      p:"About projects...",
    },
     {
      img:"thumb.png",
      title:"Spotify Clone",
      p:"About projects..."
    },
    {
      img:"thumb.png",
      title:"Facebook Clone",
      p:"About projects..."
    },
    
      {
      img:"thumb.png",
      title:"Youtube Clone",
      p:"About projects...",
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
                      <div className="projectImg"> 
                         <img src={`./images/${data.img}`}alt="thumb"/>
                      </div>
                      <h4 className="title"> {data.title} </h4>
                  </div>
                )
              })
            }
          </div>
       </div>
    )
}

export default Projects