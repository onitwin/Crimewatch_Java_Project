import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
     <img
       src='/images.png'
       width="30"
       height="30"
      className="d-inline-block align-top"
       alt=" "></img> {' '}
       Crime Aware
     </Navbar.Brand>
   <Nav className =  "navbar-nav mx-auto ">
     <Nav.Link href="/home">Home</Nav.Link>
     <Nav.Link href="/crimes">Crime Table</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
     <Nav.Link href="/safetyTips">Safety Tips</Nav.Link>
   </Nav>
 </Navbar>

  )
}


export default NavBar;
