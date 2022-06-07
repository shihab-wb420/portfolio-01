import './Global.css';
import { Routes, Route, } from "react-router-dom"
import Home from "./pages/home"
import Blog from "./pages/blog"
import NotFound from "./pages/404"
import Projects from "./pages/projects"
import TopBar from "./components/TopBar"
import Footer from "./components/Footer"

function App() {
  
  return (
  <>
   <div className="App-parent">
     <TopBar/>
    <div className="App-child">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route  path="/projects" element={<Projects />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes> 
    </div> 
     <Footer/>
  </div> 
 </>
  );
}

export default App;
