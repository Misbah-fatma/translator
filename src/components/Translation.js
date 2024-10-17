// OCRWelcome.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path accordingly
import Sidebar from './Sidebar';

const OCRWelcome = () => {
  return (

    <div>

      <Navbar />

      <div id="wrapper">
        <Sidebar/>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid mt-4">

             <div className="row">

  <div className="col-lg-6 mb-4">

    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Translation Process</h6>
      </div>
      <div className="card-body">
        <h4 className="small font-weight-bold">Text Input <span className="float-right">30%</span></h4>
        <div className="progress mb-4">
          <div className="progress-bar bg-danger" role="progressbar" style={{width: '30%'}}
            aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4 className="small font-weight-bold">Language Detection <span className="float-right">50%</span></h4>
        <div className="progress mb-4">
          <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}}
            aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4 className="small font-weight-bold">Translation <span className="float-right">75%</span></h4>
        <div className="progress mb-4">
          <div className="progress-bar" role="progressbar" style={{width: '75%'}}
            aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <h4 className="small font-weight-bold">Final Output <span className="float-right">Complete!</span></h4>
        <div className="progress">
          <div className="progress-bar bg-success" role="progressbar" style={{width: '100%'}}
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="card bg-primary text-white shadow">
          <div className="card-body">
            Text-to-Translation
            <div className="text-white-50 small">Convert any text into a chosen language</div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card bg-success text-white shadow">
          <div className="card-body">
            Multi-Language Support
            <div className="text-white-50 small">Translate into 86 different languages</div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
          <div className="card-body">
            Batch Processing
            <div className="text-white-50 small">Translate multiple documents in one go</div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card bg-warning text-white shadow">
          <div className="card-body">
            High Accuracy
            <div className="text-white-50 small">Ensures precise translation for better context</div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card bg-danger text-white shadow">
          <div className="card-body">
            Secure Data Handling
            <div className="text-white-50 small">Translate your data securely without compromise</div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card bg-secondary text-white shadow">
          <div className="card-body">
            Cloud Storage Integration
            <div className="text-white-50 small">Save translated documents to Google Drive or Dropbox</div>
          </div>
        </div>
      </div>

      {/* New cards added below */}

      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">
            Export Formats
            <div className="text-white-50 small">Export translations in formats like PDF, DOCX, and more</div>
          </div>
        </div>
      </div>

      <div className="col-lg-6 mb-4">
        <div className="card bg-light text-black shadow">
          <div className="card-body">
            User-Friendly Interface
            <div className="text-black-50 small">Simple and intuitive interface for easy translation</div>
          </div>
        </div>
      </div>

    </div>

  </div>

  <div className="col-lg-6 mb-4">

    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Translation Illustration</h6>
      </div>
      <div className="card-body">
        <div className="text-center">
          <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '50rem', height : "19rem"}}
            src="/assets/translation.png" alt="Translation Illustration"/>
        </div>
        <p>Welcome to the Translator tool. Upload text, choose a language, and get the translation instantly. Utilize advanced language recognition technology to streamline your work.</p>
        <Link target="_blank" rel="nofollow" to="/features">Explore Translation Features &rarr;</Link>
      </div>
    </div>

    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Translation Implementation Approach</h6>
      </div>
      <div className="card-body">
        <p>This tool leverages machine learning to provide accurate translations across 86 languages. Our approach ensures fast processing and contextual accuracy.</p>
        <p className="mb-0">To get the best results, ensure your text is clear and well-formatted. You can start with learning more about how to optimize text for translation.</p>
      </div>
    </div>

  </div>
</div>


            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright &copy; OCR Tool 2024</span>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default OCRWelcome;
