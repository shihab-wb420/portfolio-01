import './Global.css';
import {BrowserRouter as Router, 
Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Footer from "./components/Footer"

function App() {
  return (
  <Router>
    <div className="App text-center">
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
      
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
