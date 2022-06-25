import "./topBar.css"
import React,{useState, useRef, useEffect } from "react"
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
  //-----Handle link----
  const handleLink = ()=>{
    let sideBar = document.querySelector(".sideBar-wrapper");
    sideBar.classList.remove("active")
    setIsOpen(false)
  }
  //-----focus nav iten----
  const linkItem = useRef()
  useEffect(()=>{
    linkItem.current.focus()
  },[])

  
  return(
       <div className="topBar-container">
         <div className="logoWrapper"> Port.io </div>
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
             <Link ref={linkItem} 
              className="link-item" 
              onClick={handleLink}
              to="/">
                Home 
             </Link>
             <Link 
              className="link-item"
              onClick={handleLink}
              to="/projects"> 
               Projects 
             </Link>             
             <Link 
               className="link-item"
               onClick={handleLink}
               to="/blog"> 
                Blog 
              </Link>
           </div>
         </div>
       </div>
    )
}

export default TopBar