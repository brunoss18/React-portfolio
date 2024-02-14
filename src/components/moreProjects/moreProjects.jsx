import React from 'react';
// import { Element } from 'react-scroll';
import Cards from './moreCards/cards.jsx';
import Navbar from '../navbar/Navbar.jsx';

function MoreProjects(){
    return (
      <div className='conteiner'>
        <Navbar />
        <section className="sectionAbout">      
        <div style={{ padding: '5rem 5rem 2rem 5rem' }} className='textAlignLeft'>
              <h2 className=''>
                My Projects
              </h2>
            </div> 
            <Cards/>

        
            <div className='allprojects'>
            
            {/* <button className='allprojectsButton'>
                See more 
              </button> */}
            
            
            </div> 
        </section>
      </div>
     
        
     
    )
}

export default MoreProjects;