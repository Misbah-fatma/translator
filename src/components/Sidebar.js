// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="wrapper">
      {/* <h3>Sidebar Content</h3>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/lens" >Advision Lens</Link></li>
        
        <li><Link to="/logout">Logout</Link></li> */}
<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* Home */}
<li className="nav-item active">
  <Link className="nav-link" to="/translation">
    <i className="fas fa-home"></i>
    <span>Home</span>
  </Link>
</li>


{/* Upload */}
<li className="nav-item active">
  <Link className="nav-link" to="/upload">
    <i className="fas fa-upload"></i>
    <span>OCR Tool</span>
  </Link>
</li>

{/* Advision Lens */}
<li className="nav-item active">
  <Link className="nav-link" to="/lens">
    <i className="fas fa-camera-retro"></i>
    <span>Advision Lens</span>
  </Link>
</li>



</ul>

  
    </div>
  );
};

export default Sidebar;
