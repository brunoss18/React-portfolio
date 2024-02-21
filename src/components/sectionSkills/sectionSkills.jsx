import React from 'react';
import './sectionSkills.css';
import { PiCoffeeFill } from "react-icons/pi";

import ProgressBar from "@ramonak/react-progress-bar";



function Skills() {

  return (
   
          <section className="sectionSkills" id='sectionSkills'> 

          <div>
              <div className='aboutAlign'>
                    <h2 className=''>
                      Skills
                    </h2>
              </div> 
    
             
                  <div className='progressbar'>
                  
                    <ProgressBar
                        completed={100}
                        className="wrapper"
                        barContainerClassName="container"
                       completedClassName="barCompletedHTML5"
                        labelClassName="label"
                        customLabel="HTML5" 
                      />
                  <ProgressBar
                        completed={100}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompletedCSS3"
                        labelClassName="label"
                        customLabel="CSS3" 
                      />
                      <ProgressBar
                        completed={100}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompletedBootstrap"
                        labelClassName="label"
                        customLabel="Bootstrap" 
                      />
                      <ProgressBar
                        completed={95}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompletedJavaScript"
                        labelClassName="label"
                        customLabel="JavaScript" 
                      />
                    
                      <ProgressBar
                        completed={60}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompletedReactJS"
                        labelClassName="label"
                        customLabel="ReactJS" 
                      />
                      <ProgressBar
                        completed={50}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompletedJquery"
                        labelClassName="label"
                        customLabel="Jquery" 
                      />
                      <ProgressBar
                        completed={50}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompletedWordPress"
                        labelClassName="label"
                        customLabel="WordPress" 
                      />
<ProgressBar
                        completed={50}
                        className="wrapper"
                        barContainerClassName="container"
                        completedClassName="barCompletedPHP"
                        labelClassName="label"
                        customLabel="PHP" 
                      />
                  
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

export default Skills;