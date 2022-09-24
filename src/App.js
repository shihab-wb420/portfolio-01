import './Global.css';
import { Routes, Route, } from "react-router-dom"
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"
import Home from "./pages/home"
import Blog from "./pages/blog"
import NotFound from "./pages/404"
import Projects from "./pages/projects"
import SingleProject from "./pages/SinglePage/SingleProject"
import SingleBlogPost from "./pages/SinglePage/SingleBlogPost"



function App() {
  
  return (
  <>
   <div className="App-parent">
     <TopBar/>
    <div className="App-child">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/projects" element={<Projects />}/>
        <Route  path="/blog" element={<Blog />}/>
        
        <Route  path="/project/:projectID" element={<SingleProject />}/>
        <Route  path="/post/:postID" element={<SingleBlogPost />}/>
        
        <Route path="*" element={<NotFound />}/>
      </Routes> 
    </div> 
     <Footer/>
  </div> 
 </>
  );
}

export default App;
