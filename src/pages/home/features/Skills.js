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
                     <li> HTML5, CSS3, SASS</li>
                     <li> Javascript/ES6, Typescript</li>
                     <li>React-bootstrap, Material-ui</li>
                  </ul>
              </div>
               <div className="skillBox">
                  <ul>
                     <li>Reactjs</li>
                     <li>ExpressJS</li>
                     <li>MongoDb, MySql </li>
                  </ul>
              </div>
               <div className="skillBox">
                   <ul>
                     <li>Git,Github</li>
                     <li> GraphQl, Apollo Client </li>
                     <li>Firebase, Heroku, Vercel </li>
                  </ul>                   
              </div>
              
          </div>
       </div>
    )
}

export default Skills