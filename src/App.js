//import 'bootstrap/dist/css/bootstrap.min.css'
import './Global.css';
import  React from "react"
import { Routes, Route, } from "react-router-dom"
 
import Home from "./pages/home"
import Blog from "./pages/blog"
import NotFound from "./pages/404"
//import Testing from "./pages/Testing"
//import {AdminState } from "./context/AdminProvider";

import AdminAuth from "./Dashboard/comps/AdminAuth"
import Dashboard from "./Dashboard"
import HomeD from "./Dashboard/display/HomeD"
import AddPost from "./Dashboard/display/AddPost"
import AddProject from "./Dashboard/display/AddProject"
 
 
function App() {
//  const {adminInfo} = AdminState();
//  console.log("home isAdmin: ",adminInfo?.token)
  
  return (
    <>
 
    <div className="App text-center">
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route  path="/blog" element={<Blog />}/>
        <Route path="*" element={<NotFound />}/>
        <Route path="/admin/auth" element={<AdminAuth />}/>
        <Route path="/admin/dashboard/*" element={<Dashboard />}>
          <Route index element={<HomeD />}/>
          <Route path="add_project" element={<AddProject />}/>
          <Route path="add_post" element={<AddPost />}/>
         </Route> 
      </Routes>
    </div>
 

</>
  );
}

export default App;
