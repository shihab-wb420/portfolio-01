import "./style.css"
import { Link } from "react-router-dom"

const SideNav = ()=>{
   
  //Open SideNav when click the humburger menue
  
  const OpenSideNav = ()=>{
  let sideNavEl = document.querySelector(".sidenav")
    sideNavEl.classList.add("active")
  }
  //Close sideNav when click the closeIcon
  const CloseSideNav = ()=>{
    let sideNavEl = document.querySelector(".sidenav")
    sideNavEl.classList.remove("active")
  }
  //Close sideNav when click the closeIcon 
  const handleLink = ()=>{
   let sideNavLink = document.querySelector(".sidenav")
   sideNavLink.classList.remove("active")
  }
  
  return(
    <>
       <div onClick={OpenSideNav} className="menu-icon"> 
          Menu-> 
       </div>
       <div className="sideNavWrapper sidenav">
          <div onClick={CloseSideNav} className="sidenav__close-icon"> X </div>
          
          <div className="sidenav__list">
              <Link onClick={handleLink} className="sidenav__list-item" to="/admin/dashboard"> Dashboard </Link>
              <Link onClick={handleLink} className="sidenav__list-item" to="add_project"> New Project </Link>
              <Link onClick={handleLink} className="sidenav__list-item" to="add_post"> New Post </Link>
          </div>
       </div>
     </> 
    )
}

export default SideNav