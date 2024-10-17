import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import { Button, Container, Typography, Input, Paper, Box, CircularProgress, IconButton, Divider, Link } from "@mui/material";
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

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const [russianText, setRussianText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [userToken, setUserToken] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const axiosInstance = axios.create({ baseURL: apiUrl });
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    if (userToken) {
      fetchDocxFiles();
    }
  }, [userToken]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true); 
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axiosInstance.post(`/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.data && response.data.filename) {
        const fileUrl = `${apiUrl}/uploads/${response.data.filename}`;
        setUploadedFileUrl(fileUrl);
        setRussianText(response.data.russian_text);
        setTranslatedText(response.data.english_text);
      } else {
        setUploadMessage("Error: No file URL found in the response");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadMessage("Error uploading file");
    }
    finally {
      setLoading(false); // End loading
    }
  };

  const fetchDocxFiles = async () => {
    try {
      const response = await axiosInstance.get(`/list-docx-files`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        const docxFiles = data.docx_files;
        const downloadContainer = document.getElementById("downloadContainer");

        docxFiles.forEach((file) => {
          const downloadLink = document.createElement("a");
          downloadLink.href = `${apiUrl}/download/${file}`;
          downloadLink.download = file;
          downloadLink.textContent = file;

          downloadContainer.appendChild(downloadLink);
          downloadContainer.appendChild(document.createElement("br"));
        });
      } else {
        console.error("Error fetching .docx files:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching .docx files:", error);
    }
  };

  const renderFile = () => {
    if (typeof uploadedFileUrl !== 'string') {
      return <p>Invalid file URL</p>;
    }

    const lowerCaseUrl = uploadedFileUrl.toLowerCase();

    if (lowerCaseUrl.endsWith('.jpg') || lowerCaseUrl.endsWith('.jpeg') || lowerCaseUrl.endsWith('.gif') || lowerCaseUrl.endsWith('.bmp') || lowerCaseUrl.endsWith('.tiff') || lowerCaseUrl.endsWith('.raw') || lowerCaseUrl.endsWith('.tif')) {
      return (
        <img
          src={uploadedFileUrl}
          alt="Uploaded Image"
          style={{ width: "70%", height: "500px", borderRadius: "5px" }}
        />
      );
    } else if (lowerCaseUrl.endsWith(".pdf")) {
      return (
        <iframe
          src={uploadedFileUrl}
          title="Uploaded PDF"
          style={{ width: "70%", height: "500px", border: "1px solid #ccc" }}
        />
      );
    } else if (lowerCaseUrl.endsWith(".png")) {
      return (
        <img
          src={uploadedFileUrl}
          alt="Uploaded PNG"
          style={{ width: "70%", height: "500px", borderRadius: "5px" }}
        />
      );
    } else {
      return <p>File type not supported for preview</p>;
    }
  };

  return (

    
    <Box>
      <Navbar />
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <div className="container-fluid mt-4">
              <section className="section">
                <div className="container-fluid">
                  <div className="flex flex-col lg:flex-row">
                    <div className="mx-auto flex w-full flex-col space-y-8 text-center md:w-[520px] lg:items-start lg:text-left">
                      <div className="rich-wrapper--hero-horizontal flex-col space-y-4 lg:space-y-6 mt-4">
                        <h1 className="mt-4"> Upload image, scan document & extract text with ease.</h1>
                        <p>
                          Simply upload any file, and get the text you need in seconds. Your image converted with a single click.
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
                          <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                            Eager to Try Our OCR Tool? <br /> Upload the Image Here.
                          </Typography>

                          <Input
                            type="file"
                            onChange={handleFileChange}
                            sx={{ display: 'none' }}
                            inputProps={{ accept: ".jpg,.jpeg,.png,.gif,.pdf" }}
                            id="file-input"
                          />

                          <label htmlFor="file-input">
                            <Button
                              variant="outlined"
                              color="primary"
                              component="span"
                              sx={{
                                mb: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '8px',
                                borderColor: '#1976d2',
                                borderWidth: '2px',
                                padding: '10px 20px',
                                textTransform: 'none',
                              }}
                              startIcon={<PhotoCamera />}
                            >
                              Choose File
                            </Button>
                          </label>

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
                          {loading && (
                            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                              <CircularProgress sx={{ mt: 2 }} />
                            </div>
                          )}

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
                            {renderFile()}
                          </Box>

                          <Divider sx={{ my: 4 }} />

                          <Box>
                            <Typography variant="h6" gutterBottom>
                              OCR Text Generated:
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                p: 2,
                                border: "1px solid #ddd",
                                borderRadius: 2,
                                backgroundColor: "#fafafa",
                                maxHeight: 300,
                                overflowY: "auto",
                                whiteSpace: "pre-wrap",
                                wordWrap: "break-word",
                              }}
                            >
                              {translatedText}
                            </Typography>
                          </Box>

                          <div id="downloadContainer">
              <button
                onClick={fetchDocxFiles}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#61dafb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  outline: "none",
                  marginTop: "20px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#4fa3d1";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#61dafb";
                }}
              >
                Download OCR File
              </button>
            </div>
       
                        </Box>
                      </Box>

                    </Paper>

                  )}
                </div>
              </section>
              <div className="container py-5">
      <div className="row justify-content-center text-center mb-5">
        <div className="col-lg-8">
          <h2 className="font-weight-bold text-primary">How OCR Works</h2>
          <p className="text-muted">Follow these three simple steps to convert your images and PDFs into editable text.</p>
        </div>
      </div>

      {/* Make all columns the same height */}
      <div className="row text-center d-flex align-items-stretch">
        {/* Step 1 */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="step-box flex-fill">
            <div className="step-number rounded-circle bg-primary text-white mb-3">1</div>
            <h5 className="font-weight-bold">Upload Images or PDF Files</h5>
            <p className="text-muted">
              Select files from your computer, or just drag and drop them into the upload box. The OCR tool supports image and PDF formats like PNG, JPEG/JPG, PDF, TIF/TIFF, and more.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="step-box flex-fill">
            <div className="step-number rounded-circle bg-primary text-white mb-3">2</div>
            <h5 className="font-weight-bold">Convert to Text</h5>
            <p className="text-muted">
              Our online OCR tool automatically recognizes content in your files and converts it into editable text.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="col-md-4 mb-4 d-flex">
          <div className="step-box flex-fill">
            <div className="step-number rounded-circle bg-primary text-white mb-3">3</div>
            <h5 className="font-weight-bold">Download Text File</h5>
            <p className="text-muted">
              Download your converted text file within seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
              </div>
            </div>
          </div>
        </div>
    </Box>
  );
};

export default Upload;
