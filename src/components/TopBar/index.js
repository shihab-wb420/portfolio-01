import "./topBar.css"
import React,{useState  } from "react"
import {Link } from "react-router-dom"

const TopBar = ()=>{
  const [isOpen,setIsOpen] = useState(false)
  
  //---Open sideBar------------
  const OpenSideBar = ()=>{
   let sideHideWrapper = document.querySelector(".sideBar-wrapper");
    sideHideWrapper.classList.add("toggleSideWrapper")
    setIsOpen(true)
  }
  //---Close SideBar---------
  const CloseSideBar = ()=>{
   let sideHideWrapper = document.querySelector(".sideBar-wrapper");
   sideHideWrapper.classList.remove("toggleSideWrapper")
   setIsOpen(false)
  }
  


  //-----focus nav item----
  /*const linkItem = useRef();
  useEffect(()=>{
    linkItem.current.focus()
  },[])
  */

  
  return(
       <div className="topBar-container">
         <div className="logoWrapper"> 
           <img src="/images/html_tag_icon.png" alt="Port.io"/>
         </div>
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
             <Link 
              className="link-item" 
              onClick={CloseSideBar}
              to="/">
                Home 
             </Link>
             <Link 
              className="link-item"
              onClick={CloseSideBar}
              to="/projects"> 
               Projects 
             </Link>             
             <Link 
               className="link-item"
               onClick={CloseSideBar}
               to="/blog"> 
                Blog 
              </Link>
           </div>
         </div>
       </div>
    )
}

export default TopBar