import React from 'react';
import { useEffect } from "react";
import Header from './Header';
import Footer from './Footer';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Helmet} from "react-helmet";

const Homepage = () => {

  const faqs = [
    {
      question: "What is a translation tool and how does it work?",
      answer: "A translation tool converts text from one language to another, enabling seamless communication between speakers of different languages. It uses advanced algorithms to accurately translate words, sentences, and entire documents."
    },
    {
      question: "What types of documents can be translated?",
      answer: "Our translation tool can handle a variety of document types including PDFs, Word files, text documents, and even web content."
    },
    {
      question: "How accurate is the translation technology?",
      answer: "Our translation technology provides high accuracy, ensuring that the meaning and context of the original text are preserved while translating across languages."
    },
    {
      question: "Can the translation tool handle regional dialects?",
      answer: "Yes, the tool supports regional dialects and variations, providing localized translations that take into account specific linguistic nuances."
    },
    {
      question: "Is the translation tool suitable for all languages?",
      answer: "Our translation tool supports 86 languages and is equipped to handle both widely spoken and lesser-known languages. It can be customized to meet specific language requirements."
    }
  ];
  

  useEffect(() => {
    if (window.PureCounter) {
      new window.PureCounter();
    }
  }, []);
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
      <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section">
    <img src="/assets/img/hero-bg-abstract.jpg" alt="Translator Background" className="hero-bg" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-7 col-lg-9 text-center">
          <h1>Advanced Translator Solution for Multilingual Communication</h1>
          <p>Translate your documents into 86 different languages with our fast and accurate translation technology.</p>
        </div>
      </div>
      <div className="text-center">
        <a href="#upload" className="btn-get-started">Upload Document</a>
      </div>

      <div className="row gy-4 mt-5">
        <div className="col-md-6 col-lg-3">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-easel"></i></div>
            <h4 className="title"><a href="#features">Fast Processing</a></h4>
            <p className="description">Quickly translate your documents into multiple languages in seconds.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-gem"></i></div>
            <h4 className="title"><a href="#features">High Accuracy</a></h4>
            <p className="description">Our translation engine delivers top-tier accuracy for reliable text translation.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-geo-alt"></i></div>
            <h4 className="title"><a href="#features">Multiple Languages</a></h4>
            <p className="description">Supports translations in 86 languages, making global communication easier.</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-command"></i></div>
            <h4 className="title"><a href="#features">Secure & Private</a></h4>
            <p className="description">We ensure that your data is secure and private, with automatic deletions.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* About Translator Section */}
  <section id="about" className="about section">
    <div className="container section-title">
      <h2>About Our Translation Tool</h2>
      <p>Our translation solution helps you convert documents and text into 86 languages quickly, efficiently, and with high accuracy.<br />Designed for businesses, students, and professionals alike, it supports multiple languages and formats.</p>
    </div>

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 content">
          <p>
            Whether you need to translate official documents or quickly communicate across different languages, our translation tool is the perfect solution. It's designed for:
          </p>
          <ul>
            <li><i className="bi bi-check2-circle"></i> <span>Translating text from various document formats including PDFs, images, and more.</span></li>
            <li><i className="bi bi-check2-circle"></i> <span>Quickly converting content into multiple languages with ease.</span></li>
            <li><i className="bi bi-check2-circle"></i> <span>Ensuring high accuracy for reliable translations, even in complex documents.</span></li>
          </ul>
        </div>

        <div className="col-lg-6">
          <p>
            Our solution utilizes advanced language processing techniques to understand and translate text accurately across different languages. This ensures precise translation even for nuanced content.
          </p>
          <a href="#features" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>

  {/* Statistics Section */}
  <section id="stats" className="stats section light-background">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="5000" data-purecounter-duration="1" className="purecounter"></span>
            <p>Documents Translated</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="86" data-purecounter-duration="1" className="purecounter"></span>
            <p>Languages Supported</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="4000" data-purecounter-duration="1" className="purecounter"></span>
            <p>Hours of Translation</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stats-item text-center w-100 h-100">
            <span data-purecounter-start="0" data-purecounter-end="50" data-purecounter-duration="1" className="purecounter"></span>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* About Alternate Section */}
  <section id="about-alt" className="about-alt section">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6 position-relative align-self-start">
          <img src="assets/img/about.jpg" className="img-fluid" alt="Translation Technology" />
          <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
        </div>
        <div className="col-lg-6 content">
          <h3>Leading the Future of Multilingual Communication with Translation Technology</h3>
          <p className="fst-italic">
            Our cutting-edge translation technology transforms the way you handle and process multilingual content, making communication more efficient than ever.
          </p>
          <ul>
            <li><i className="bi bi-check2-all"></i> <span>Accurate translation of documents and text in 86 languages.</span></li>
            <li><i className="bi bi-check2-all"></i> <span>Seamless integration with existing workflows and platforms.</span></li>
            <li><i className="bi bi-check2-all"></i> <span>Customizable solutions tailored to your specific translation needs.</span></li>
          </ul>
          <p>
            Our translation services offer unparalleled accuracy and efficiency in converting content into multiple languages, enhancing your global reach and communication.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Services Section */}
  <section id="services" className="services section light-background">
    <div className="container section-title">
      <h2>Our Translation Services</h2>
      <p>Advanced translation solutions for various multilingual communication needs.</p>
    </div>

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6">
          <div className="service-item item-cyan position-relative">
            <div className="icon">
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
              </svg>
              <i className="bi bi-file-earmark-text"></i>
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Document Translation</h3>
            </a>
            <p>Transform your documents into multiple languages using our advanced translation technology.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="service-item item-orange position-relative">
            <div className="icon">
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
              </svg>
              <i className="bi bi-globe"></i>
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Website Localization</h3>
            </a>
            <p>Adapt your website content to 86 languages, enhancing global reach and user experience.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="service-item item-teal position-relative">
            <div className="icon">
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,93.79494320519305,170.9812938413882,68.22124773605442,241.22729351922606C46.12530521934004,306.1660932609787,36.08464902681731,376.2260668241059,83.59693611441391,447.89088561323764C121.67557243516138,510.73719177478707,216.48988328973698,500.0667486601039,300,503.46388370962813"></path>
              </svg>
              <i className="bi bi-chat-dots"></i>
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Real-Time Translation</h3>
            </a>
            <p>Provide instant translation services for live communications, enhancing real-time interactions across languages.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="service-item item-red position-relative">
            <div className="icon">
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,68.22124773605442,241.22729351922606C46.12530521934004,324.1422228464449,4.028349539224508,412.4771664052897,62.853773440249655,477.84997241180766C121.79478019984626,543.3292660707521,216.66914022012456,519.7323130625457,300,516.6596991927625"></path>
              </svg>
              <i className="bi bi-translate"></i>
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>API Integration</h3>
            </a>
            <p>Integrate our translation services seamlessly into your applications and workflows using our robust API.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="service-item item-indigo position-relative">
            <div className="icon">
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
              </svg>
              <i className="bi bi-code-slash"></i>
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Custom Translation Models</h3>
            </a>
            <p>Create and deploy custom translation models tailored to your specific industry and terminology needs.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="service-item item-pink position-relative">
            <div className="icon">
              <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,516.6596991927625C374.64420223319665,514.0701557843845,461.3980331533809,523.1217637022519,512.4138483560137,466.7498268557809C562.1052761561384,412.1544010115675,518.1220917096378,332.6041988282161,496.477220193513,260.6732162512228C477.5554328326838,195.3154886597468,479.04907435435235,118.4662029052747,420.90282487631294,76.62092879201392C356.6007605472287,31.071969756612846,273.3040318158427,57.527715760679275,203.21327326570382,88.4412660731777C136.14527270955142,117.39820172180385,88.16811662917145,181.74369426624912,66.39297833998146,251.3856582171493C43.316776574599324,324.1422228464449,4.028349539224508,412.4771664052897,62.853773440249655,477.84997241180766C121.79478019984626,543.3292660707521,216.66914022012456,519.7323130625457,300,516.6596991927625"></path>
              </svg>
              <i className="bi bi-person-badge"></i>
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Multilingual SEO</h3>
            </a>
            <p>Enhance your website's SEO by translating content into multiple languages, increasing visibility in global markets.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Call to Action Section */}
  <section id="call-to-action" className="call-to-action section accent-background">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="text-center">
            <h3>Optimize Your Multilingual Communication Workflow</h3>
            <p>Leverage advanced translation technology to streamline your multilingual content processing and transform your communication workflows into a global powerhouse. Improve accuracy, expand your reach, and enhance user engagement.</p>
            <a className="cta-btn" href="#">Start Translation Integration</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FAQ Section */}
  <section id="faq" className="faq section light-background">
    <div className="container section-title">
      <h2>Frequently Asked Questions</h2>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <Accordion key={index} className="faq-item">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    alignItems: 'center'
                  }}
                >
                  <Typography className="faq-question">{faq.question}</Typography>
                </AccordionSummary>

                <AccordionDetails className="faq-details">
                  <Typography>{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

      <Footer />
    </div>
  );
};

export default Homepage;
