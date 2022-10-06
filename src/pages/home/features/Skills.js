import "./styles/skills.css"
import {Link } from "react-router-dom"

const Skills = ()=>{
  
  return(
       <div  className="skillsWrapper">
        <p className="common-sub-heading">
           <div>  Technologies that i use </div>
            <hr/> 
         </p>
         <h3>  </h3>
         <div className="skillsContainer">
             <ul className="skillBox">
                 <li> HTML5, CSS3, SASS</li>
                 <li> Javascript/ES6, Typescript</li>
                 <li>React-bootstrap, Tailwindcss, Material-UI</li>
              </ul>
              <ul className="skillBox">
                 <li>Reactjs</li>
                 <li>ExpressJS</li>
                 <li>MongoDb, MySql </li>
              </ul>
              <ul className="skillBox">
                <li>Git,Github</li>
                <li> GraphQl, Apollo Client </li>
                <li>Firebase, Heroku, Vercel </li>
              </ul>
          </div>
          
          <div className="skills_see-more">
            <Link to="#see-more-skills">
              <span> See more </span>
              <i className="mx-2 fa-solid fa-circle-arrow-right"></i>
            </Link>
          </div>
          
       </div>
    )
}

export default Skills