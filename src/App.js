import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import Homepage from './components/Homepage';
import Translation from './components/Translation';
import Upload from './components/Upload';
import Lens from './components/Lens';
import { Contact } from './components/Contact';
import { Team } from './components/Team';


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to set the user as logged in
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Function to set the user as logged out
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        {/* Use Route with element prop for conditional rendering */}
        <Route
          path="/translation"
          // element={isLoggedIn ? <Translation /> : <Navigate to="/" />}
          element={<Translation/>}
        />
        <Route
          path="/upload"
          element={isLoggedIn ? <Upload /> : <Navigate to="/" />}
          // element={<Upload/>}
        />

        <Route
          path="/lens"
          // element={isLoggedIn ? <Lens /> : <Navigate to="/" />}
          element={<Lens/>}
        />


        <Route
          path="/logout"
          element={<Logout onLogout={handleLogout} />}
        />

        {/* Public routes accessible regardless of authentication state */}
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
          <Route
          path="/contact"
          element={<Contact />}
        />
          <Route
          path="/team"
          element={<Team />}
        />
      </Routes>
    </Router>
  );
};

export default App;
