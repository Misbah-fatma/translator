import React from 'react';
import {Helmet} from "react-helmet";
import Header from './Header';
import Footer from './Footer';
import "../App.css"

export const Contact = () => {


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
        
        {/* Open Graph for Social Media Preview */}
        <meta property="og:title" content="Best OCR Tool by Advisions | Convert Images to Text" />
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
            <section id="contact" class="contact section">
                <div class="container section-title" >
                    <h2>Contact</h2>
                    <p>If You Have Any Query, Please Contact Us</p>
                </div>

                <div class="container"  >

                    <div class="mb-4" >
                        <iframe style={{ border: 0, width: '100%', height: '270px' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.111444353639!2d77.33229852533306!3d28.566416025700956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b4fefb041f%3A0x7e95efc4ae03f8e9!2sSoftware%20Technology%20Parks%20of%20India!5e0!3m2!1sen!2sin!4v1724152017341!5m2!1sen!2sin" frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div class="row gy-4">

                        <div class="col-lg-4">
                            <div class="info-item d-flex" data-aos-delay="300">
                                <i class="bi bi-geo-alt flex-shrink-0"></i>
                                <div>
                                    <h3>Address</h3>
                                    <p>27, STPI, Botanical Garden, Noida, India</p>
                                </div>
                            </div>

                            <div class="info-item d-flex" data-aos-delay="400">
                                <i class="bi bi-telephone flex-shrink-0"></i>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>+91 8810316395, +91 7078054645</p>
                                </div>
                            </div>

                            <div class="info-item d-flex" data-aos-delay="500">
                                <i class="bi bi-envelope flex-shrink-0"></i>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>info@advisionslab.com</p>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-8">
                            <form action="forms/contact.php" method="post" class="php-email-form" >
                                <div class="row gy-4">

                                    <div class="col-md-6">
                                        <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />
                                    </div>

                                    <div class="col-md-6 ">
                                        <input type="email" class="form-control" name="email" placeholder="Your Email" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                                    </div>

                                    <div class="col-md-12">
                                        <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                                    </div>

                                    <div class="col-md-12 text-center">
                                        <div class="loading">Loading</div>
                                        <div class="error-message"></div>
                                        <div class="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>

                </div>

            </section>

       

            <Footer />
        </div>
    )
}
