import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Intro.css';

function Result() {
  const location = useLocation();
  const { imgPath, translations, processedImage, targetLang } = location.state || {};

  return (
    <div className="app-body-comp">
        <div className='result-image-container'>
            <div className='result-image'>
                <p className='intro-title'>Original Image</p>
                <img className="step-img step-img-2 step-img-3" src={`http://localhost:5000${imgPath}`}/>
            </div>
            <div className='result-image'>
                <p className='intro-title'>{targetLang}</p>
                <img className="step-img step-img-2 step-img-3" src={processedImage} alt="Processed with bounding boxes" />
            </div>
        </div>


      {translations && (
        <div>
          <h2>Translations</h2>
          {translations.map((item, index) => (
            <div key={index}>
              <p><strong>Original:</strong> {item.text}</p>
              <p><strong>Translated:</strong> {item.translatedText}</p>
              <p><strong>Number:</strong> {item.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Result;
