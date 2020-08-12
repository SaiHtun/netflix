import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  let [showNav, setShowNav] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
        setShowNav(true);
      }else {
        setShowNav(false);
      }
    })
    // window.removeEventListener('scroll');
  },[])


  return (  
    <div className={`navbar ${showNav && "darkNav"}`}>
      <img className="navbar-netflix" src={`https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg`} alt="netflix"/>
      <img className="navbar-avater" src="https://www.w3schools.com/howto/img_avatar.png" alt="avater"/>
    </div>
  );
}
 
export default Navbar;