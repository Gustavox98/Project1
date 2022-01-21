import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink as Link, BrowserRouter } from 'react-router-dom';
import Aboutus from './components/Aboutus.js';
import Home from './components/home.js';
import Projects from './components/projects.js';




export default function App() {
  return (
   
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
        <Link to="Aboutus">Aboutus</Link>
        </li>
        <li>
        <Link to="contact">contact</Link>
        </li>
        <li>
        <Link to="projects">projects</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Aboutus" element={<Aboutus />} />
      <Route path="contact" element={<contact />} />
      <Route path="projects" element={<projects />} />
    </Routes>

  </div>
)
}

