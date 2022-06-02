import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ThemeProvider} from "styled-components"
import theme from "./utils/theme"
import AdminProvider from "./context/AdminProvider";
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <Router>
     <AdminProvider>
        <App />
      </AdminProvider> 
    </Router>
   </ThemeProvider>
  </React.StrictMode>
);
