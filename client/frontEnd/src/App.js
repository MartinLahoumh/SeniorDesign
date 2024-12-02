import logo from './images/logo-img.png';
import flag from './images/flag.png';
import Intro from './components/Intro';
import Translate from './components/Translate';
import Result from './components/Result';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {

  return (
    <div className='app-body'>
      <div className='app-content'>
        <header className="app-header">
          <div className='header-content'>
            <div className='logo'>
              <h1 className='logo-name'>American Dream</h1>
              <img className='logo-img'src={logo}/>
            </div>
            <p >Log In</p>
          </div>
        </header>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/translate" element={<Translate />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
