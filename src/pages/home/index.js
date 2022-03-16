import Banner from "./features/Banner"
import ProjectsSection from "./features/ProjectsSection"
import Skills from "./features/Skills"
import Reviews from "./features/Reviews"
import About from "./features/About"

const Home = ()=>{
  
  return(
      <div  className="homePageWrapper">
         <Banner />
         <div className="body-half-width">
             <About />
             <Skills />
             <ProjectsSection />
             <Reviews /> 
         </div>
      </div>
    )
}

export default Home