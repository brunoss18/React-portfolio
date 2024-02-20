import React from 'react';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-scroll';

import './main.css';
import Navbar from '../navbar/Navbar.jsx';
import Projects from '../sectionProjects/projects.jsx';
import About from '../sectionAbout/about.jsx';
import Footer from '../footer/footer.jsx';
import Skills from '../sectionSkills/sectionSkills.jsx';

function Main() {
  
  return (
    <div className='conteiner'>
      <Navbar />
    <main className='main'>
      
        <div className='conteiner'>
          <div className='previousText'>
            <p className='whois'>
           #Who is Bruno?
            </p>
         
            <p>
            The synergy of creativity, innovation, and technology.
            </p>
            
          </div>   
        </div>
        
        <div className='buttons'>
          
                  <a href="https://www.linkedin.com/in/brunoss18/" target="_blank" rel="noopener noreferrer" className="button">
                    Linkedin <RiLinkedinBoxFill />
                  </a>
                  <a href="https://github.com/brunoss18" target="_blank" rel="noopener noreferrer" className="button">
                  Github <TbBrandGithubFilled />
                  </a>
                 
                  <button className="button">
                    <Link
                    activeClass="active"
                    to="sectionProjects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Learn more <IoIosArrowDown />
                    </Link>
                  </button> 
              </div>
              
     </main>
   
    
     <Projects/>
     <Skills/>
    <About/>
  <Footer/>
     </div>
 
  );
}

export default Main;