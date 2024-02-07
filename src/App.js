import './style.css'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Element } from 'react-scroll';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Navbar/>
     

     <main className='main'>
        <div className='conteiner'>
          <div className='previousText'>
            <p className='whois'>
           #Who is Bruno?
            </p>
         
            <p>
            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised
            </p>
            
          </div>
              <div className='buttons'>
                  <button>Linkedin <RiLinkedinBoxFill /></button>
                  <button>Github <TbBrandGithubFilled /></button>
                  <button>
                    <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Learn more <IoIosArrowDown />
                    </Link>
                  </button> 
              </div>
        </div>
        
     </main>
     <Element name="about" className="">
        <section className="sectionAbout">      
          <div className='textAlignLeft'>
              <h2 className=''>
                My Projects
              </h2>
            </div> 
            <div className='cards ' >
                <div className='card'>
                  <img src='https://helpz.tech/assets/img/companys/Blackhawks%20Artes%20Marcias.jpg' alt='test img'></img>
                    <p className='tittleCard'>
                    lorem lorem lorem 
                    </p>
                    <p className='descriptionCard'>
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                    </p>
                    <div className='stacks'>
                        <span className='stack'>
                          HTML
                        </span>
                        <span className='stack'>
                          CSS
                        </span>
                        <span className='stack'>
                        JAVASCRIPT
                        </span>
                    </div> 
                </div>
                <div className='card'>
                  <img src='https://helpz.tech/assets/img/companys/Blackhawks%20Artes%20Marcias.jpg' alt='test img'></img>
                    <p className='tittleCard'>
                    lorem lorem lorem 
                    </p>
                    <p className='descriptionCard'>
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                    </p>
                    <div className='stacks'>
                        <span className='stack'>
                          HTML
                        </span>
                        <span className='stack'>
                          CSS
                        </span>
                        <span className='stack'>
                        JAVASCRIPT
                        </span>
                    </div> 
                </div>
                <div className='card'>
                  <img src='https://helpz.tech/assets/img/companys/Blackhawks%20Artes%20Marcias.jpg' alt='test img'></img>
                    <p className='tittleCard'>
                    lorem lorem lorem 
                    </p>
                    <p className='descriptionCard'>
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                    </p>
                    <div className='stacks'>
                        <span className='stack'>
                          HTML
                        </span>
                        <span className='stack'>
                          CSS
                        </span>
                        <span className='stack'>
                        JAVASCRIPT
                        </span>
                    </div> 
                </div>
            </div>
            <div className='cards dNone'>
                <div className='card'>
                  <img src='https://helpz.tech/assets/img/companys/Blackhawks%20Artes%20Marcias.jpg' alt='test img'></img>
                    <p className='tittleCard'>
                    lorem lorem lorem 
                    </p>
                    <p className='descriptionCard'>
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                    </p>
                    <div className='stacks'>
                        <span className='stack'>
                          HTML
                        </span>
                        <span className='stack'>
                          CSS
                        </span>
                        <span className='stack'>
                        JAVASCRIPT
                        </span>
                    </div> 
                </div>
                <div className='card'>
                  <img src='https://helpz.tech/assets/img/companys/Blackhawks%20Artes%20Marcias.jpg' alt='test img'></img>
                    <p className='tittleCard'>
                    lorem lorem lorem 
                    </p>
                    <p className='descriptionCard'>
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                    </p>
                    <div className='stacks'>
                        <span className='stack'>
                          HTML
                        </span>
                        <span className='stack'>
                          CSS
                        </span>
                        <span className='stack'>
                        JAVASCRIPT
                        </span>
                    </div> 
                </div>
                <div className='card'>
                  <img src='https://helpz.tech/assets/img/companys/Blackhawks%20Artes%20Marcias.jpg' alt='test img'></img>
                    <p className='tittleCard'>
                    lorem lorem lorem 
                    </p>
                    <p className='descriptionCard'>
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                      lorem lorem lorem lorem 
                    </p>
                    <div className='stacks'>
                        <span className='stack'>
                          HTML
                        </span>
                        <span className='stack'>
                          CSS
                        </span>
                        <span className='stack'>
                        JAVASCRIPT
                        </span>
                    </div> 
                </div>
            </div> 
            <div className='allprojects'>
              <button className='allprojectsButton'>
                See more 
              </button>
            </div> 
        </section>
      </Element>
    </div>
  );
}

export default App;
