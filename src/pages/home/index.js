import Banner from "./features/Banner"
import ProjectsSection from "./features/ProjectsSection"
import Skills from "./features/Skills"
import Reviews from "./features/Reviews"
import About from "./features/About"

const Home = ()=>{
  
  return(
      <div  className="homePageWrapper">
         <Banner />
         <About />
         <Skills />
         <ProjectsSection />
         <Reviews /> 
      </div>
    )
}

export default Home