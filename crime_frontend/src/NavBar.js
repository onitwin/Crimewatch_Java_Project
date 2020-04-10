import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand>
     <img
       src='/images.png'
       width="80px"
       height="80px"
       className="d-inline-block align-top"
       alt=" "></img>
     </Navbar.Brand>
   <Nav >
     <Nav.Link className="navbar-right" href="/home">Home</Nav.Link>
     <Nav.Link className="navbar-right" href="/crimes">Crime Table</Nav.Link>
        <Nav.Link className="navbar-right" href="/news">News</Nav.Link>
     <Nav.Link  className="navbar-right" href="/safetyTips">Safety Tips</Nav.Link>
   </Nav>
 </Navbar>

  )
}


export default NavBar;
