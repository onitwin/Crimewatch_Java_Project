import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand>
     <img
       src='/images.png'
       width="100"
       height="100"
      className="d-inline-block align-top"
       alt=" "></img> {' '}
        Crime Aware
     </Navbar.Brand>
   <Nav >
     <Nav.Link href="/home">Home     </Nav.Link>
     <Nav.Link href="/crimes">   Scots</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
     <Nav.Link href="/safetyTips">Tips</Nav.Link>
   </Nav>
 </Navbar>

  )
}


export default NavBar;
