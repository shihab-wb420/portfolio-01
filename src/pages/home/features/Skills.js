import "./styles/skills.css"

const Skills = ()=>{
  
  return(
       <div  className="skillsWrapper">
          <h3> Skills </h3>
         <div className="skillsContainer">
            <div><strong>Frontend:</strong> Reactjs, Angular, Apollo Client</div>
            <div><strong>Backend:</strong> ExpressJs, Django, GraphQl</div>
            <div><strong>Database:</strong> MongoDB, MySql </div>
            <div><strong>Css Framework: </strong>
               React-Bootstrap,
               Material-UI,
               Tailwind-css, 
               Semantic-UI 
            </div>
          </div>
       </div>
    )
}

export default Skills