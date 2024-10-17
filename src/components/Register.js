import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header'; // Adjust the path accordingly
import Footer from './Footer';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  // Set your base URL correctly here
  const baseURL = process.env.REACT_APP_API_URL || 'https://ocr.thevidyalayam.com/api';

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const handleRegister = async () => {
    try {
      const response = await axiosInstance.post('/register', {
        name,
        username,
        password,
        confirm_password: confirmPassword,
      });
  
      console.log('Response:', response);
  
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Username already exists or invalid data');
    }
  };

  return (
    <div>
      <Header />
      {/* <div className="register-container">
        <h2>Register</h2>
        <div className="input-container">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div> */}

      <section>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: '25px'}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">
                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input 
                       type="text"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       class="form-control"
                       placeholder='Enter Name' />
                
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input type="text"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)} 
                       class="form-control"
                       placeholder='Enter User Name' />
                
                    </div>
                  </div>


                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input   type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            class="form-control"
            placeholder='Enter Password' />
            
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init class="form-outline flex-fill mb-0">
                      <input   type="password"
         value={confirmPassword}
         onChange={(e) => setConfirmPassword(e.target.value)}
            class="form-control"
            placeholder='Confirm Password' />
            
                    </div>
                  </div>


                  <div class="form-check d-flex justify-content mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" onClick={handleRegister}>Login</button>
                  </div>
                  <p className="register-link text-center mt-2">
                  Already have an account? <Link to="/login">Login here</Link>.
        </p>
                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default Register;
