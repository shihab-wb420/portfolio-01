import "./topBar.css"
import React,{useState } from "react"
import {Link } from "react-router-dom"

const TopBar = ()=>{
  const [isOpen,setIsOpen] = useState(false)
  
  //---Open sideBar------------
  const OpenSideBar = ()=>{
    let sideBar = document.querySelector(".sideBar-wrapper");
    sideBar.classList.add("active")
    setIsOpen(true)
  }
  //---Close SideBar---------
  const CloseSideBar = ()=>{
   let sideBar = document.querySelector(".sideBar-wrapper");
    sideBar.classList.remove("active")
    setIsOpen(false)
  }
  
  
  return(
       <div className="topBar-container">
         <div className="logoWrapper"> Dev.io </div>
         <div className="toggle-icons">
          {
         !isOpen ?
          (<i onClick={OpenSideBar} className="fa-solid fa-burger"> </i>) 
           :
           (<div onClick={CloseSideBar} 
            className="close-icon">
              X 
            </div>)
          }
         </div>
         <div className="sideBar-wrapper">
           <div className="links-wrapper">
             <Link className="link-item" to="#home"> Home </Link>
             <Link className="link-item" to="#blog"> Blog </Link>
           </div>
         </div>
       </div>
    )
}

export default TopBar