import React from 'react';

const NavBar = (props) => {
  return (
    <header>
     <ul>
       <li className = "navLink">
         <a href="/crimes"> Crime Table </a> </li>
          <li className = "navLink">
         <a href="/home"> Home </a>
         </li>
         <li className = "navLink">
          <a href="/news"> News </a>
           </li>
           <li className = "navLink">
            <a href="/safetyTips"> Safety Tips </a>
             </li>

     </ul>
    </header>
  )
}


export default NavBar;
