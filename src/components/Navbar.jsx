// import React, { useState } from "react";

import { BsJustify } from "react-icons/bs";
// const Navbar = () => {
// 	const [isClicked, setIsClicked] = useState(false);
// 	const handleClick = () => {
// 		!isClicked ? setIsClicked(true) : setIsClicked(false);
// 		console.log(isClicked);
// 	};
// 	return (
// 		<>
// 				<nav className={isClicked ? 'nav' : 'nav_cheack'}>
// 					<ul>
// 						<li>Home</li>
// 						<li>Blog</li>
// 						<li>Portfolio</li>
// 						<li>About</li>
// 						<li>Contact</li>
// 						<li>Signup</li>
// 					</ul>
// 				</nav>
// 			<div className='nav_cheack' onClick={handleClick}>
// 				<BsJustify />
// 			</div>
// 		</>
// 	);
// };
// export default Navbar;


import React, { useState } from "react";
import "../styles/navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            Shubham 
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
                Home
            </li>
            <li className="nav-item">
                About
            </li>
            <li className="nav-item">
                Blog
            </li>
            <li className="nav-item">
                Contact Us
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
						<BsJustify />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;