// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="topnav">
      <div className="logo">Turf Booking System</div>
      <div className="details">
      <span> <Link to ="/Loginuser" style={ {color : 'black', textDecoration : 'none'}}>View Your Bookings</Link></span>
        <span> <Link to ="/" style={ {color : 'black', textDecoration : 'none'}}>Home</Link></span>
        <span> <Link to ="/About" style={ {color : 'black', textDecoration : 'none'}}>About Us</Link></span>
      </div>
    </nav>
  );
};

export default Navbar;

