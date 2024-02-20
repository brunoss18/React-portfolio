import React from 'react';
// import { Element } from 'react-scroll';
import Cards from './cards.jsx';
import Navbar from '../navbar/Navbar.jsx';
import { Link } from 'react-router-dom'; // Importe o Link

function MoreProjects(){
    return (
      <div className='conteiner'>
        <Navbar />
        <section className="sectionProjects">      
        <div style={{ padding: '5rem 5rem 2rem 5rem' }} className='textAlignLeft'>
             
            </div> 
            <Cards/>

        
            <div className='allprojects'>
            
           
          <Link to="/" className='seelessButton'> {/* Use o Link */}
            See Less
          </Link>
            
            
            </div> 
        </section>
      </div>
     
        
     
    )
}

export default MoreProjects;