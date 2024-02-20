import './style.css'
import Main from './components/main/main'
import MoreProjects from './components/moreProjects/moreProjects'
import Projects from './components/sectionProjects/projects';
import Skills from './components/sectionSkills/sectionSkills';
import About from './components/sectionAbout/about';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
          <Router>      
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/moreprojects' element={<MoreProjects />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
            </Routes>
        </Router>
  );
}

export default App;
