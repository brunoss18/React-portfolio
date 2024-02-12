import React from 'react';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Element } from 'react-scroll';
import './main.css'
function Main() {
  return (
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
     </main>
  );
}

export default Main;