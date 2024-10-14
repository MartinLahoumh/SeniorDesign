import '../styles/App.css';
import '../styles/Intro.css'
import { useLocation } from 'react-router-dom';
function Translate() {
  const location = useLocation();
  const { imgPath } = location.state || {};
  return (
    <div className='app-body-comp'>
          <p className='intro-title step-title'>Your Image</p>
          <img className='step-img step-img-2' src={`http://localhost:5000${imgPath}`} />
        <div className='intro-container translate-container'>
            <h1 className='intro-title'>Translate From English To:</h1>
            <input className='input-box' type='text' />
            <button className='btn'>Translate</button>
        </div>
    </div>
  );
}

export default Translate;
