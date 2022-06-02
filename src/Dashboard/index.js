import "./dashboard.css"
//import AddPost from "./display/AddPost"
import SideNav from "./comps/SideBar"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router"
 import {AdminState } from "../context/AdminProvider";

const Dashboard = ()=>{
 const navigate = useNavigate()
 const {adminInfo} = AdminState()
 
if(!adminInfo) (navigate("/admin/auth"));
 
  return(
       <div className="dashboardWrapper">
       
         {/*----------------Header-------------------*/}
          <header className="header">
             <div className="header__search">Search...</div>
             <div className="header__avatar">Your face</div>
          </header>
         {/*-------------------------------------------*/}

         {/*----------------SideNav-------------------*/}
             <SideNav />
         {/*-------------------------------------------*/}
        
         {/*---------------Outlet----------------------*/}
           <Outlet/>
         {/*-------------------------------------------*/}


          
        {/*---------------Footer-----------------------*/}
         <footer className="footer">
            <div className="footer__copyright">
            &copy; 2021-{new Date().getFullYear() } SR</div>
            <div className="footer__signature">Made with love by SR.</div>
         </footer>
        {/*---------------Footer--------------------------*/}
      </div>
    )
}

export default Dashboard