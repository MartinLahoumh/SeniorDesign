import React, { useRef, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';
import '../styles/Intro.css';
import img1 from '../images/picture1.png';
import img2 from '../images/picture2.png';
import img3 from '../images/picture3.png';
import { useNavigate } from 'react-router-dom';
function Intro() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const captureRef = useRef(null);
  const canvasRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [webcam, setWebCam] = useState(false);

  // This will allow us to click the hidden input
  const handleContainerClick = () => {
    fileInputRef.current.click();
  };

  const webCamClick = async () =>{
    setWebCam(true);
    const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
    captureRef.current.srcObject = mediaStream;
  }

  const captureClick = () =>{
    const canvas = document.createElement('canvas');
    const context = canvas.getContext("2d");
    canvas.width = captureRef.current.videoWidth;
    canvas.height = captureRef.current.videoHeight;
    context.drawImage(captureRef.current, 0, 0, canvas.width, canvas.height);
    //base64 of image
    const image = canvas.toDataURL('image/jpeg');
    //Convert to Blob so we can send as a file to server
    const blob = base64ToBlob(image, "image/jpeg");
    const file = new File([blob], nameGenerator(), {type: 'image/jpeg'})
    uploadFile(file);
  }

  const nameGenerator = () => {
    const timestamp = Date.now();  // Current timestamp
    const randomString = Math.random().toString(36).substring(2, 8);  
    return `photo_${timestamp}_${randomString}.jpg`;
  };

  //Base64 to Blob function from GeeksforGeeks
  function base64ToBlob(base64, contentType = "",
    sliceSize = 512) {
    const byteCharacters = atob(base64.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length;
        offset += sliceSize) {
        const slice = byteCharacters.slice(
            offset, offset + sliceSize);

        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
  //uploading file function
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    uploadFile(file); // Upload the file when selected
  };

  // Function to upload file to backend (Flask API)
  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData,);
      console.log(response.data);
      //send user to /translate and send the imgPath with it so it can show up on next page
      navigate('/translate', { state: { imgPath: response.data.imgPath } });
    } catch (err) {
      console.error('Error uploading file:', err);
      alert('File upload failed');
    }
  };

  return (
    <div className='app-body-comp'>
      <div className='intro-container'>
        <h1 className='intro-title'>Getting Started</h1>
      </div>
      <div className='steps-container'>
        <div className='step-box' onClick={handleContainerClick} style={{ cursor: 'pointer' }}>
          <p className='intro-title step-title'>Upload Image</p>
          <img className='step-img' src={img2} alt="Upload" />
        </div>
        <h1 className='intro-title'>OR</h1>
        <div className='step-box' onClick={webCamClick} style={{ cursor: 'pointer' }}>
          <p className='intro-title step-title'>Take A Photo</p>
          <img className='step-img' src={img1} alt="Photo" />
        </div>
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      {/* Hidden file input For Photo*/}
      {webcam &&
        <div className='webcam-container'>
            <video className='webcam'ref={captureRef} autoPlay />  
            <button className='btn' onClick={captureClick}>Capture</button>
        </div> 
        }
    </div>
  );
}

export default Intro;
