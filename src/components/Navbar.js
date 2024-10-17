import React, { useState } from 'react';

const Header = () => {

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <header id="header" className="header navmenu d-flex sticky-top">
      <div className="container-fluid position-relative d-flex align-items-center">
        <a href="/" className="logo d-flex align-items-center me-auto">
          <img src="/assets/logo10.png" alt="Logo" style={{height : "120px"}}/>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="/" className="active">Home<br /></a></li>
          </ul>
       
        </nav>
       
  <div>
            <a className="btn-getstarted" href="/login" onClick={handleLogout}>Logout</a>
          </div>


      </div>
    </header>

    
  );
};

export default Header;
