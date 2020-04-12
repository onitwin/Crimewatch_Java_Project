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
       <bold> Crime Aware </bold>
     </Navbar.Brand>
   <Nav >
     <Nav.Link href="/home">Home     </Nav.Link>
     <Nav.Link href="/crimes">   Crime Table</Nav.Link>
        <Nav.Link href="/news">News</Nav.Link>
     <Nav.Link href="/safetyTips">Safety Tips</Nav.Link>
   </Nav>
 </Navbar>

  )
}


export default NavBar;
