import React, { createContext, useContext, useEffect, useState } from "react";
//import { useNavigate } from "react-router";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
  const [adminInfo, setAdminInfo] = useState();
  //const [isAdmin, setIsAdmin] = useState(false);
  
 // const navigate = useNavigate()
  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setAdminInfo(userInfo);
  // if (!userInfo) navigate("/admin/auth");
  // eslint-disable-next-line
  }, []);
  
  return (
    <AdminContext.Provider
      value={{
        adminInfo, setAdminInfo,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const AdminState = () => {
  return useContext(AdminContext);
};

export default AdminProvider;
