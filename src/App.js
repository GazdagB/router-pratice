import './App.css';
import Logo from "./images/theCodeDesigner.png"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Api from './pages/Api';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faGhost, faPhone } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <header>
        <nav className='navbar'>
          <Link className='navbar__logo__container' to={"/"}>
          <img src={Logo} alt="" className="navbar__logo"  />
          </Link>

          <ul className='navbar__list'>
            <li><Link to={"/"} className='navbar__link'><FontAwesomeIcon icon={faHouse} /> Home</Link></li>
            <li><Link to={"/about"} className='navbar__link'><FontAwesomeIcon icon={faCircleInfo} /> About </Link></li>
            <li><Link to={"/api"} className='navbar__link'><FontAwesomeIcon icon={faGhost} /> API</Link></li>
            <li><Link to={"/contact"} className='navbar__link'><FontAwesomeIcon icon={faPhone} /> Contact</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/api' element={<Api/>} ></Route>
        <Route path='/contact' element={<Contact/>} ></Route>
        <Route path='*' element={<Page404/>} ></Route>
      </Routes>

    </Router>
  );
}

export default App;
