import React from 'react';
import './footer.css';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
function Footer() {

  return (
   
         <footer>
          <p>Made with &nbsp;<FaHeart />&nbsp; by Bruno Soares © 2024</p>
          <a target='_blank' href='https://www.linkedin.com/in/brunoss18/'><RiLinkedinBoxFill/> </a>
          <a target='_blank' href='https://github.com/brunoss18'> <TbBrandGithubFilled/></a>
         </footer>
        
                
   
        
       
  );
}

export default Footer;