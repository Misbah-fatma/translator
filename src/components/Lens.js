import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Button, Container, Typography, Input, Paper, Box, CircularProgress, IconButton, Divider } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const styles = {
  overlay: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    margin: '0 auto',
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#1976d2',
    margin: '8px 0',
    fontWeight: 'bold',
    padding: '8px',
    backgroundColor: '#e3f2fd',
    borderRadius: '5px',
    display: 'inline-block'
  },
};


const Lens = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState(""); // Define uploadedFileUrl state
  const [outputImageUrl, setOutputImageUrl] = useState("");
  const [inputLang, setInputLang] = useState("ru"); // Default input language
  const [outputLang, setOutputLang] = useState("en"); // Default output language
  const [userToken, setUserToken] = useState(null);

  const languages = {
    "af": "Afrikaans",
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "hy": "Armenian",
    "az": "Azerbaijani",
    "eu": "Basque",
    "be": "Belarusian",
    "bn": "Bengali",
    "bs": "Bosnian",
    "bg": "Bulgarian",
    "ca": "Catalan",
    "zh": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)",
    "hr": "Croatian",
    "cs": "Czech",
    "da": "Danish",
    "nl": "Dutch",
    "en": "English",
    "et": "Estonian",
    "fi": "Finnish",
    "fr": "French",
    "gl": "Galician",
    "ka": "Georgian",
    "de": "German",
    "el": "Greek",
    "guw": "Gujarati",
    "ht": "Haitian Creole",
    "he": "Hebrew",
    "hi": "Hindi",
    "hu": "Hungarian",
    "is": "Icelandic",
    "id": "Indonesian",
    "ga": "Irish",
    "it": "Italian",
    "ja": "Japanese",
    "kn": "Kannada",
    "kk": "Kazakh",
    "ko": "Korean",
    "ku": "Kurdish",
    "ky": "Kyrgyz",
    "lo": "Lao",
    "lv": "Latvian",
    "lt": "Lithuanian",
    "lb": "Luxembourgish",
    "mk": "Macedonian",
    "mg": "Malagasy",
    "ms": "Malay",
    "ml": "Malayalam",
    "mt": "Maltese",
    "mr": "Marathi",
    "mn": "Mongolian",
    "my": "Myanmar (Burmese)",
    "ne": "Nepali",
    "no": "Norwegian",
    "or": "Odia",
    "ps": "Pashto",
    "fa": "Persian",
    "pl": "Polish",
    "pt": "Portuguese",
    "pa": "Punjabi",
    "ro": "Romanian",
    "ru": "Russian",
    "sr": "Serbian",
    "si": "Sinhala",
    "sk": "Slovak",
    "sl": "Slovenian",
    "so": "Somali",
    "es": "Spanish",
    "su": "Sundanese",
    "sw": "Swahili",
    "sv": "Swedish",
    "tl": "Tagalog",
    "tg": "Tajik",
    "ta": "Tamil",
    "te": "Telugu",
    "th": "Thai",
    "tr": "Turkish",
    "uk": "Ukrainian",
    "ur": "Urdu",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "yo": "Yoruba",
    "zu": "Zulu",
  };

  useEffect(() => {
    if (outputImageUrl) {
      fetchTranslatedFile();
    }
  }, [outputImageUrl]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);

    // Set the uploaded file URL for preview
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setUploadedFileUrl(fileUrl);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("input_lang", inputLang);
    formData.append("output_lang", outputLang);

    try {
      const response = await axios.post(
        "https://ocr.advisionslab.com/api/process",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userToken}`,
          },
          responseType: "blob", // Ensuring we handle the binary data response correctly
        }
      );

      if (response.status === 200) {
        const imageUrl = URL.createObjectURL(new Blob([response.data]));
        setOutputImageUrl(imageUrl);
        setUploadMessage("File uploaded and processed successfully.");
      } else {
        setUploadMessage("Error processing file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadMessage("Error uploading file");
    }
  };

  const fetchTranslatedFile = async () => {
    try {
      const response = await axios.get("https://ocr.advisionslab.com/api/list-jpg-file", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });
     

      if (response.status === 200) {
        const data = response.data;
        const jpgFiles = data.jpg_file;

        // Only interact with the DOM if these elements are rendered
        const imageContainer = document.getElementById("imageContainer");
        const downloadContainer = document.getElementById("downloadContainer");

        if (imageContainer && downloadContainer) {
          imageContainer.innerHTML = ""; // Clear previous images
          downloadContainer.innerHTML = ""; // Clear previous download links

          jpgFiles.forEach((file) => {
            const img = document.createElement("img");
            img.src = `https://ocr.advisionslab.com/api/download/${file}`;
            img.alt = file;
            img.style.maxWidth = "100%";
            img.style.borderRadius = "5px";
            imageContainer.appendChild(img);
            imageContainer.appendChild(document.createElement("br"));

            const downloadLink = document.createElement("a");
            downloadLink.href = `https://ocr.advisionslab.com/api/download/${file}`;
            downloadLink.download = file;
            downloadLink.textContent = file;
            downloadContainer.appendChild(downloadLink);
            downloadContainer.appendChild(document.createElement("br"));
          });
        } else {
          console.error("Image or download container not found.");
        }
      } else {
        console.error("Error fetching .jpg files:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching .jpg files:", error);
    }
  };

  return (
    <div>
      <Navbar />
      {/* <div className="sidebar">
        <a href="/">Home</a>
        <Link to="/upload">Upload</Link>
        <Link to="/lens" className="active">Advision Lens</Link>
        <a href="/logout">Logout</a>
        <a href="#about">About</a>
      </div> */}


<div id="wrapper">
        <Sidebar/>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid mt-4">

{/* 
      <div className="container-fluid text-center align-item-center mt-3">
        <h1>Welcome to Advisions Translation Tool</h1>

        <div className="input-group custom-file-button">
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control text-center align-item-center"
            id="inputGroupFile"
            style={{ marginBottom: "20px" }}
          />
        </div>

        <div className="form-group" style={{ marginLeft: '200px' }}>
          <label htmlFor="inputLang">Input Language:</label>
          <select
            id="inputLang"
            value={inputLang}
            onChange={(e) => setInputLang(e.target.value)}
            className="form-control"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group" style={{ marginLeft: '200px' }}>
          <label htmlFor="outputLang">Output Language:</label>
          <select
            id="outputLang"
            value={outputLang}
            onChange={(e) => setOutputLang(e.target.value)}
            className="form-control"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <button onClick={handleUpload} className="btn btn-primary">Upload</button>
        {uploadMessage && (
          <p style={{ color: "green", marginBottom: "20px" }}>
            {uploadMessage}
          </p>
        )}

        <div className="row mt-4" style={{ marginLeft: '200px' }}>
          <div className="col-md-6">
            <h3>Uploaded File</h3>
            {uploadedFileUrl && (
              <img src={uploadedFileUrl} alt="Uploaded File" style={{ maxWidth: "100%", borderRadius: "5px" }} />
            )}
          </div>
          <div className="col-md-6">
            <h3>Translated File</h3>
            {outputImageUrl && (
              <div id="imageContainer">
                <img src={outputImageUrl} alt="Translated Output" style={{ maxWidth: "100%", borderRadius: "5px" }} />
                <a href={outputImageUrl} download className="btn btn-success mt-3">Download Translated File</a>
              </div>
            )}
          </div>
        </div>

        <div id="downloadContainer" className="mt-4"></div>
      </div> */}

      <div className="container-fluid mt-4">
              <section className="section">
                <div className="container-fluid">
                  <div className="flex flex-col lg:flex-row">
                    <div className="mx-auto flex w-full flex-col space-y-8 text-center md:w-[520px] lg:items-start lg:text-left">
                      <div className="rich-wrapper--hero-horizontal flex-col space-y-4 lg:space-y-6 mt-4">
                        <h1 className="mt-4"> Welcome to Advisions Translation Tool.</h1>
                        <p>
                          Simply upload any file, and get the text you need in seconds. Your file converted with a single click.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-center img-wrapper">
                      <a>
                        <figure className="w-full">
                          <img
                            loading="lazy"
                            width="1400"
                            height="1238"
                            decoding="async"
                            className="w-full"
                            src="/assets/bg11.png"
                            style={{ color: 'transparent' }}
                            alt="AI transcribe mock"
                          />
                        </figure>
                        <div className="img-overlay" style={styles.overlay}>
                    

                        <div className="input-group custom-file-button">
          <input
            type="file"
            onChange={handleFileChange}
            className="form-control text-center align-item-center"
            id="inputGroupFile"
            style={{ marginBottom: "20px" }}
          />
        </div>

<div className="form-group" >
          <label htmlFor="inputLang">Input Language:</label>
          <select
            id="inputLang"
            value={inputLang}
            onChange={(e) => setInputLang(e.target.value)}
            className="form-control"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="outputLang">Output Language:</label>
          <select
            id="outputLang"
            value={outputLang}
            onChange={(e) => setOutputLang(e.target.value)}
            className="form-control"
          >
            {Object.entries(languages).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
        </div>


                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpload}
                            sx={{
                              mb: 2,
                              px: 4,
                              py: 1,
                              backgroundColor: '#1976d2',
                              textTransform: 'none',
                              borderRadius: '8px',
                            }}
                          >
                            Upload
                          </Button>
                       

                          {uploadMessage && (
                            <Typography
                              variant="body2"
                              color={uploadMessage.includes('Error') ? 'error.main' : 'success.main'}
                              sx={{ mt: 2, textAlign: 'center' }}
                            >
                              {uploadMessage}
                            </Typography>
                          )}
                        </div>
                      </a>
                    </div>
                  </div>
                  {uploadedFileUrl && (
                    
                    <Paper elevation={3} sx={{ p: 3, mt: 4, maxWidth: 1500, mx: "auto" }}>
                      <Box display="flex" flexDirection="column" alignItems="center">
                        <Box mt={4} textAlign="center" width="100%">
                          <Typography variant="h6" gutterBottom>
                            Uploaded File:
                          </Typography>

                          <Box display="flex" justifyContent="center" mt={2}>
                          {uploadedFileUrl && (
              <img src={uploadedFileUrl} alt="Uploaded File" style={{ maxWidth: "100%", borderRadius: "5px" }} />
            )}
                          </Box>

                          <Divider sx={{ my: 4 }} />

                          <Box>
                            <Typography variant="h6" gutterBottom>
                            Translated File :
                            </Typography>
                            {outputImageUrl && (
              <div id="imageContainer">
                <img src={outputImageUrl} alt="Translated Output" style={{ maxWidth: "100%", borderRadius: "5px" }} />
                <a href={outputImageUrl} download className="btn btn-success mt-3">Download Translated File</a>
              </div>
            )}
                          </Box>

                          <Box id="downloadContainer" mt={4} mb={2} display="flex" justifyContent="center">
                          <div id="downloadContainer" className="mt-4"></div>
                          </Box>
                        </Box>
                      </Box>
                      
                    </Paper>
                   
                  )}
                </div>
              </section>
              <div className="container py-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2 className="font-weight-bold text-primary">How ADVISIONS Translation Works</h2>
          <p className="text-muted">Follow these four steps to upload your file, select languages, and download the translated file.</p>
        </div>
      </div>

      <div className="row text-center d-flex align-items-stretch">
        {/* Step 1: Upload the File */}
        <div className="col-md-3 mb-4 d-flex">
          <div className="step-box flex-fill">
            <div className="step-number rounded-circle bg-primary text-white mb-3">1</div>
            <h5 className="font-weight-bold">Upload Your File</h5>
            <p className="text-muted">
              Select the file you want to translate. The OCR tool supports image and document formats like PNG, JPEG/JPG, PDF, and more.
            </p>
          </div>
        </div>

        {/* Step 2: Select the Language of the File */}
        <div className="col-md-3 mb-4 d-flex">
          <div className="step-box flex-fill">
            <div className="step-number rounded-circle bg-primary text-white mb-3">2</div>
            <h5 className="font-weight-bold">Select Original Language</h5>
            <p className="text-muted">
              Choose the language in which the content of your file is written (e.g., English, French, Spanish).
            </p>
          </div>
        </div>

        {/* Step 3: Select the Target Language */}
        <div className="col-md-3 mb-4 d-flex">
          <div className="step-box flex-fill">
            <div className="step-number rounded-circle bg-primary text-white mb-3">3</div>
            <h5 className="font-weight-bold">Select Target Language</h5>
            <p className="text-muted">
              Select the language you want to translate your file into (e.g., English, French, German, etc.).
            </p>
          </div>
        </div>

        {/* Step 4: Download the Translated File */}
        <div className="col-md-3 mb-4 d-flex">
          <div className="step-box flex-fill">
            <div className="step-number rounded-circle bg-primary text-white mb-3">4</div>
            <h5 className="font-weight-bold">Download Translated File</h5>
            <p className="text-muted">
              Once the translation is complete, download the translated text or document within seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
            </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Lens;