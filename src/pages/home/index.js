import Banner from "./features/Banner"
import ProjectsSection from "./features/ProjectsSection"
import Skills from "./features/Skills"
import Reviews from "./features/Reviews"
import About from "./features/About"
import Footer from "../../components/Footer"
import TopBar from "../../components/NavBar"

const Home = ()=>{
  
  return(
    <>
      <TopBar/>
      <div  className="homePageWrapper">
         <Banner />
         <div className="body-half-width">
             <About />
             <Skills />
             <ProjectsSection />
             <Reviews /> 
         </div>
      </div>
      <Footer/>
    </>
    )
}

export default Home