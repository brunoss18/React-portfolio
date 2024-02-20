import React from 'react';
import Cards from './cards';
import { Link } from 'react-router-dom'; // Importe o Link
import './projects.css';
import Navbar from '../navbar/Navbar';

function Projects() {

  return (
   
        <section className="sectionProjects" id='projects' >
         
            <Navbar/>
          
            <Cards/>
             
        
            <div className='allprojects'>
            
            <Link to="/moreprojects" className='allprojectsButton'> {/* Use o Link */}
            See more
          </Link>
            
            
            </div> 
        </section>
       
  );
}

export default Projects;