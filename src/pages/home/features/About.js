import './styles/about.css'

const About = ()=>{
  
  return(
       <div  className="aboutWrapper">
         <h3> About me </h3>
         <div className="aboutContainer">
            <div className="aboutImg">
              <img src="./images/ceo.jpg" alt="about-pic"/>
            </div>
            <div className="aboutMe"> 
               <h4> Md Shihab Uddin </h4>
               <p> I'm a full-stack developer with a tendency to back-end. I prefer to stay up to date with the whole development process from database structure and server ...</p>
            </div>
          </div>
       </div>
    )
}

export default About