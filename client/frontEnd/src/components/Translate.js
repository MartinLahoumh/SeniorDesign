import '../styles/App.css';
import '../styles/Intro.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from 'react-router-dom';

function Translate() {
  const navigate = useNavigate();
  const location = useLocation();
  const { imgPath } = location.state || {};
  const [targetLang, setTargetLang] = useState('');
  const [translations, setTranslations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [processedImage, setProcessedImage] = useState(null);

  const handleTranslate = async () => {
    if (!imgPath || !targetLang) {
      alert('Please provide a target language.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imgPath, targetLang }),
      });

      const data = await response.json();

      if (response.ok) {
        setTranslations(data.translations);
        setProcessedImage(`http://localhost:5000${data.imageUrl}`); 
        navigate('/result', { state: { imgPath: imgPath, translations: data.translations, 
        processedImage: `http://localhost:5000${data.imageUrl}`, targetLang: targetLang } });
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error translating image:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-body-comp">
      <p className="intro-title step-title">Your Image</p>
      <img className="step-img step-img-2" src={`http://localhost:5000${imgPath}`} alt="Uploaded" />

      <div className="intro-container translate-container">
        <h1 className="intro-title">Translate To</h1>
        <input
          className="input-box"
          type="text"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        />
        <button className="btn" onClick={handleTranslate}>
          Translate
        </button>
        
      </div>
      {loading && <ClipLoader color="#000" loading={loading} size={50} />}

      {processedImage && (
        <div>
          <h2>Image with Bounding Boxes</h2>
          <img className="processed-img step-img step-img-2" src={processedImage} alt="Processed with bounding boxes" />
        </div>
      )}

      {translations && (
        <div className="translations-container">
          <h2>Translated Results</h2>
          <div>
            {translations.map((item, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                <p>
                  <strong>Original:</strong> {item.text}
                </p>
                <p>
                  <strong>Translated:</strong> {item.translatedText}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Translate;
