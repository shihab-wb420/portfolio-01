import './Global.css';
import {BrowserRouter as Router, 
Routes, Route } from "react-router-dom"
import Home from "./pages/home"

function App() {
  return (
  <Router>
    <div className="App text-center">
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
