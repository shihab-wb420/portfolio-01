import {Nav,Navbar, Container } from "react-bootstrap"
import {Link } from "react-router-dom"
import "./navBar.css"

const TopBar = ()=>{
  
  return(
  <>
  <Navbar fixed="top" 
  collapseOnSelect
  expand="lg" 
  className="navBar"
  variant="dark">
  <Container>
  <Navbar.Brand href="/">
    <img id="logo" src="./images/SR-Logo.png" alt="logo"/> 
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"
     className="toggle-button" 
    />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto links-wrapper">
       <Link className="link" to="/"> Home</Link>
       <Link className="link" to="/blog"> Blog </Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
 </Navbar>
 </>
    )
}

export default TopBar