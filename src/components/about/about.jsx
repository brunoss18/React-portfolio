import React from 'react';
import { Link, Element } from 'react-scroll';
import Cards  from './cards-conteiner/cards';
import './about.css'
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
              <button className='allprojectsButton'>
                See more 
              </button>
            </div> 
        </section>
      </Element>
  );
}

export default Main;