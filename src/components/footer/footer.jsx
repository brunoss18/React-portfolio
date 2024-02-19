import React from 'react';
import './footer.css';
import { RiLinkedinBoxFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
function Footer() {

  return (
   
         <footer>
          <p>Made with &nbsp;<FaHeart />&nbsp; by Bruno Soares © 2024</p>
          <p><RiLinkedinBoxFill/> </p>
          <p> <TbBrandGithubFilled/></p>
         </footer>
        
                
   
        
       
  );
}

export default Footer;