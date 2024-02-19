import React from 'react';
import './about.css';
import { PiCoffeeFill } from "react-icons/pi";
function About() {

  return (
   
          <section className="sectionAbout" id='sectionAbout'> 

          <div>
              <div className='aboutAlign'>
                    <h2 className=''>
                      About me
                    </h2>
              </div> 
      
                  <div className='textAlign'>
                    <p className=''>
                    Since a young age, I have been drawn to the world of technology, having my first
                    encounter at the age of 13. Since then, my passion for this subject has only grown,
                    and today, I can proudly say that I am a Web Developer. With a broad range of skills in
                    technologies such as JavaScript, ReactJS, NodeJS, ExpressJS, HTML5, CSS3, Bootstrap,
                    MongoDB, SQLite, PHP Laravel.
                    </p>
                    <div className='alignButton'>
                    <a className='aboutButton'>
                    Shall we have a coffee?<PiCoffeeFill />
                    </a >
                 </div>
                  </div> 

            </div>     
                
                  
                 
            
        </section>
        
                
   
        
       
  );
}

export default About;