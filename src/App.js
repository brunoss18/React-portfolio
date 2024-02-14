import './style.css'
import Main from './components/main/main'
// import Navbar from './components/navbar/Navbar';
// import About from './components/about/about';
import MoreProjects from './components/moreProjects/moreProjects'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
          <Router>      
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/moreprojects' element={<MoreProjects />} />
            </Routes>
        </Router>
  );
}

export default App;
