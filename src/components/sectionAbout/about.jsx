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
                    I began my professional journey at the age of 14, providing technical support services to local companies, covering both software and hardware issues. A few months after turning 18, I was offered a position to teach Computer Science. In this role, I was responsible for instructing students and staff at the educational institution, as well as teaching computer science at the 'Tiro de Guerra de Suzano'. With a student base of over 400 enrolled individuals, I facilitated learning experiences encompassing various topics including consumer education, environmentalism, entrepreneurship, motivation, and leadership.

Following this phase, I joined as a junior front-end developer at an educational company. There, I worked on creating infographics using JavaScript, HTML, and CSS, correcting codes for digital books of PNLD23, and developing digital elements to facilitate the design team's work using Bootstrap. Additionally, I reviewed and restructured HTML codes for the linearizer team.

Later, I worked as a web developer at a dental industry company, specifically in the marketing department. During this period, I focused on developing and improving institutional websites and landing pages, including integrating Google conversion tags and Meta for performance analysis. I used HTML, CSS, JavaScript, JQuery, Bootstrap, and GitHub for version control and efficient collaboration in code development.

I actively contributed to the development of interfaces dedicated to web-based control panel systems, enhancing the way data is presented and interacted with.
                    </p>
                    <div className='alignButton'>
                    <a href="https://wa.me/5511996940393" target="_blank" className='aboutButton'>
                    Shall we have a coffee?<PiCoffeeFill />
                    </a >
                   
                 </div>
                  </div> 

            </div>     
                
                  
                 
            
        </section>
        
                
   
        
       
  );
}

export default About;