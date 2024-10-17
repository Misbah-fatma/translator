import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header'; // Adjust the path accordingly
import Footer from './Footer'; 
import {Helmet} from "react-helmet";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const apiUrl = process.env.REACT_APP_API_URL;
  const axiosInstance = axios.create({ baseURL: apiUrl });

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post(`/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        onLogin();
        navigate('/Translation');
      }
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <div>
                   <Helmet>
                   <meta
          name="description"
          content="Advisions' free OCR tool allows you to convert images, PDFs, and scanned documents into editable text instantly. Supports multiple file formats and languages. Best OCR tool for converting images, PDFs, and scanned documents to text. Fast, accurate, and free OCR software for online text recognition."
        />
     <meta 
        name="keywords" 
        content="OCR Tool, Optical Character Recognition, Text Recognition Software, Image to Text Converter, OCR Software Online, Extract Text from Images, PDF to Text OCR, Document Scanning OCR, Convert Handwriting to Text, Free OCR Tool, Best OCR Tool, Real-time OCR Software, Cloud-based OCR Solutions, AI OCR Technology, Fast OCR Processing, Batch OCR Processing, Image Recognition Tool, Extract Text from PDF, Automatic Text Detection, Scanned Document OCR, How to Convert Image to Text with OCR, Free Online OCR Tool for PDFs, Best OCR Tool for Scanning Documents, Extract Text from Images Using AI OCR, OCR for Business Document Automation, Convert Handwritten Notes to Digital Text, Accurate OCR Software for Scanning Receipts, Fastest OCR for Extracting Text from Images, Free OCR Tool for Multiple Languages, Advanced OCR for Document Management"
      />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Advisions" />
      
        <meta
          property="og:description"
          content="Use Advisions' OCR tool to convert images, PDFs, and scanned documents to text in seconds. Perfect for businesses, students, and developers looking for a reliable OCR solution."
        />
        <meta property="og:image" content="https://ocr.advisionslab.com/" />
        <meta property="og:url" content="https://ocr.advisionslab.com/" />
        <meta property="og:type" content="website" />
        
        {/* Canonical Link */}
        <link rel="canonical" href="https://ocr.advisionslab.com/" />

        {/* Additional Meta Tags for Better SEO */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Schema Markup (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Advisions OCR Tool",
            "description": "Convert images, PDFs, and scanned documents into text with Advisions' free OCR tool.",
            "applicationCategory": "Utility",
            "operatingSystem": "All",
            "brand": {
              "@type": "Organization",
              "name": "Advisions"
            }
          }
          `}
        </script>
      </Helmet>
      <Header />
      {/* <div className="login-container">
        <h2>Login</h2>
        <div className="input-container">
          <label className="input-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="input-container">
          <label className="input-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="register-link">
          Don't have an account? <Link to="/register">Register here</Link>.
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


                  <div class="form-check d-flex justify-content mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg" onClick={handleLogin}>Login</button>
                  </div>
                  <p className="register-link text-center mt-2">
          Don't have an account? <Link to="/register">Register here</Link>.
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

export default Login;
