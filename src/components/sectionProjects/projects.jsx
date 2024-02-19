import React from 'react';
import Cards from './cards-conteiner/cards';
import { Link } from 'react-router-dom'; // Importe o Link
import './projects.css';

function Projects() {

  return (
   
        <section className="sectionProjects" id='sectionProjects'>      
          
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