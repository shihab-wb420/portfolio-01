import './Global.css';
import { Routes, Route, } from "react-router-dom"
import Home from "./pages/home"
import Blog from "./pages/blog"
import NotFound from "./pages/404"
 
function App() {
  
  return (
   <>
 
    <div className="App text-center">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
     </div> 
  </>
  );
}

export default App;
