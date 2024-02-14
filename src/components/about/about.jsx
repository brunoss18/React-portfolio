import React from 'react';
import { Element } from 'react-scroll';
import Cards from './cards-conteiner/cards';
import { Link } from 'react-router-dom'; // Importe o Link
import './about.css';

function Main() {

  return (
    <Element name="about" className="">
        <section className="sectionAbout">      
          <div className='textAlignLeft'>
              <h2 className=''>
                My Projects
              </h2>
            </div> 
            <Cards/>

        
            <div className='allprojects'>
            
            <Link to="/moreprojects" className='allprojectsButton'> {/* Use o Link */}
            See more
          </Link>
            
            
            </div> 
        </section>
      </Element>
  );
}

export default Main;