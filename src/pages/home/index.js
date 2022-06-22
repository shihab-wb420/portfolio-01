import React, { Suspense, lazy } from 'react';
import Banner from "./features/Banner"

const About = lazy(()=> import("./features/About"))
const Skills = lazy(()=> import("./features/Skills"))
const ProjectsSection = lazy(()=> import("./features/ProjectsSection"))
const Reviews = lazy(()=> import("./features/Reviews"))


const Home = ()=>{

  return(
    <>
      <div  className="homePageWrapper">
         <Banner />
         <div className="body-half-width">
            <Suspense fallback={<h2> Loading...</h2>}>
               <About />
               <Skills />
               <ProjectsSection />
               <Reviews /> 
            </Suspense>
         </div>
      </div>
    </>
    )
}

export default Home