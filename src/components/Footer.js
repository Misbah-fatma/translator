// Footer.js

import React from 'react';
import {Helmet} from "react-helmet";

const Footer = () => {
  return (

    <>
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
        content="Use Advisions' OCR tool to convert images, PDFs, and scanned documents to text in seconds. Perfect for businesses, students, and developers looking for a reliable OCR solution." />
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
 
<footer class="footer">


  <section class="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
    <div class="container overflow-hidden">
      <div class="row gy-4 gy-lg-0 justify-content-xl-between">
        <div class="col-12 col-md-4 col-lg-3 col-xl-2">
          <div class="widget">
            <a href="#!">
              <img src="/assets/logo10.png" alt="BootstrapBrain Logo" width="175" height="100" />
            </a>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 col-xl-2">
          <div class="widget">
            <h4 class="widget-title mb-4">Get in Touch</h4>
            <address class="mb-4">27, STPI, Botanical Garden,

Noida, Indias</address>
            <p class="mb-1">
              <a class="link-secondary text-decoration-none" href="tel:+15057922430">+91 8810316395,<br/> +91 7078054645</a>
            </p>
            <p class="mb-0">
              <a class="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">info@advisionslab.com</a>
            </p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 col-xl-2">
          <div class="widget">
            <h4 class="widget-title mb-4">Learn More</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">About</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Contact</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Services</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Terms of Service</a>
              </li>
              <li class="mb-0">
                <a href="#!" class="link-secondary text-decoration-none">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-lg-3 col-xl-4">
          <div class="widget">
            <h4 class="widget-title mb-4">Our Newsletter</h4>
            <p class="mb-4">Subscribe to our newsletter to get our news & discounts delivered to you.</p>
            <form action="#!">
              <div class="row gy-4">
                <div class="col-12">
                  <div class="input-group">
                    <span class="input-group-text" id="email-newsletter-addon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input type="email" class="form-control" id="email-newsletter" value="" placeholder="Email Address" aria-label="email-newsletter" aria-describedby="email-newsletter-addon" required />
                  </div>
                </div>
                <div class="col-12">
                  <div class="d-grid">
                  <button
  className="btn btn-primary"
  type="submit"
  style={{ backgroundColor: '#2487ce', borderColor: '#2487ce' }} // Custom color and border color
>
  Subscribe
</button>

                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="container-fluid copyright text-center text-white mt-4">
          <p className='text-white'>© <span>Copyright</span> <strong class="px-1 sitename">2022 Advisions Research and Development Pvt Ltd.</strong> <span>All Rights Reserved</span></p>
        </div>

</footer>
      </>
  );
};


export default Footer;