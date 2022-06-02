import  React,{useState, } from "react"
import "./styles.css"
import axios from "axios"
import {useNavigate } from "react-router"
import {AdminState } from "../../../context/AdminProvider";

const url = "http://localhost:4000/api"
 
const AdminAuth = () =>{
  const [email, setEmail] = useState("")
  const [password, setPassword]  = useState("")
  const {adminInfo } = AdminState()
  
  const navigate = useNavigate()
 
  if(adminInfo) (navigate("/admin/dashboard"));
  
  const HandleLogin = async () =>{
    //----
    if(!email || !password ){
      alert("input fields can't be null or empty!")
      console.log("input fields can't be null or empty!")
      return
    }
    
     const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${url}/admin`,
        { email, password },
        config
      );
      console.log("resp", JSON.stringify(data))
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/admin/dashboard/")
      setEmail("")
      setPassword("")
  }
   
 
  return(
      <div className="AuthPageContainer">
        <div className="inputWrapper">
          <h3> Admin Login </h3>
          <input 
            type="text" 
            placeholder="Email.."
            value={email}
            onChange={e=> setEmail(e.target.value)}
           />
          <input 
            type="password" 
            placeholder="Password.."
            value={password}
            onChange={e=> setPassword(e.target.value)}
           />
           <button 
            className="loginButton"
            onClick={HandleLogin}> 
            Login 
           </button>
        </div>
      </div>
    )
}

export default AdminAuth