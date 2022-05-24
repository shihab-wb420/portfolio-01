import './Global.css';
import {BrowserRouter as Router, 
Routes, Route } from "react-router-dom"
import {ThemeProvider} from "styled-components"
import theme from "./utils/theme"

import Home from "./pages/home"
import Blog from "./pages/blog"
import NotFound from "./pages/404"
//import Testing from "./pages/Testing"

import Dashboard from "./Dashboard"
import HomeD from "./Dashboard/display/HomeD"
import AddPost from "./Dashboard/display/AddPost"
import AddProject from "./Dashboard/display/AddProject"


function App() {
  return (
 <ThemeProvider theme={theme}>
  <Router>
    <div className="App text-center">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<HomeD />}/>
          <Route path="add_project" element={<AddProject />}/>
          <Route path="add_post" element={<AddPost />}/>
        </Route>
      </Routes>
    </div>
  </Router>
</ThemeProvider>
  );
}

export default App;
