import "./styles/skills.css"

const Skills = ()=>{
  
  return(
       <div  className="skillsWrapper">
        <p className="common-green-title">
           <div>  Technologies that i use </div>
            <hr/> 
         </p>
         <h3>  </h3>
         <div className="skillsContainer">
              <div className="skillBox">
                  <ul>
                     <li> Html5, css3, sass</li>
                     <li> Javascript, ES6 </li>
                     <li>React-bootstrap, Material-ui</li>
                  </ul>
              </div>
               <div className="skillBox">
                  <ul>
                     <li>Reactjs</li>
                     <li>Anguler</li>
                     <li>ExpressJS</li>
                     <li>MongoDb, MySql </li>
                  </ul>
              </div>
               <div className="skillBox">
                   <ul>
                     <li> GraphQl, Apollo Client </li>
                     <li>Git,Github</li>
                     <li>Firebase, Heroku, Vercel </li>
                     <li> Figma </li>
                  </ul>                   
              </div>
              
          </div>
       </div>
    )
}

export default Skills