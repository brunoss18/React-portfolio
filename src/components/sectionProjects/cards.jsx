import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import './cards.css';

import reactPort from '../imagesProjects/reactportifolio.jpg';
import pdfContract from '../imagesProjects/pdfcontractgenerator.jpg';
import cepFinder from '../imagesProjects/cepfinder.png';
import beSirius from '../imagesProjects/besiriusidiomas.jpg';
import organicSmile from '../imagesProjects/organicsmile.jpg';
import helpzTech from '../imagesProjects/helpztech.jpg';


const Cards = () => {
  const [showEyeIcon, setShowEyeIcon] = useState(false);

  const [cards, setCards] = useState([
    
{
    id: 1,
    name: 'React Portfolio',
    desc: '',
    date: new Date('2024-02-02'),
    image: reactPort,
    stacks: ['React','JavaSscript','HTML', 'CSS', ],
    link: 'https://brunoss.netlify.app/' 
 },
 {
   id: 2,
   name: 'PDF Contract Generator',
   desc: '',
   date: new Date('2024-01-29'),
   image: pdfContract,
   stacks: ['JavaSscript','HTML', 'CSS', ],
   link: 'https://contractgeneratorbesirius.netlify.app/' 
},
{
   id: 3,
   name: 'Cep Finder',
   desc: '',
   date: new Date('2024-01-25'),
   image: cepFinder,
   stacks: ['API', 'REACT', 'JavaScript', 'HTML', 'CSS', ],
   link: 'cepfinderbr.netlify.appr' 
},
{
   id: 4,
   name: 'Besirius Idiomas',
   desc: '',
   date: new Date('2023-08-01'),
   image: beSirius,
   stacks: ['JavaScript','Bootstrap', 'HTML', 'CSS', ],
   link: 'https://besirius.com.br' 
},
{
   id: 5,
   name: 'OrganicSmile',
   desc: '',
   date: new Date('2023-06-01'),
   image: organicSmile,
   stacks: ['JavaScript', 'Jquery', 'Bootstrap', 'HTML', 'CSS',],
   link: 'https://www.organicsmile.com.br/site/' 
},
{
   id: 6,
   name: 'Helpz Tech',
   desc: '',
   date: new Date('2023-05-02'),
   image: helpzTech,
   stacks: ['JavaScript','Bootstrap', 'HTML', 'CSS', ],
   link: 'https://helpz.tech' 
},


    
  ]);

  const handleSortByNewest = () => {
    const sortedCards = [...cards].sort((a, b) => b.date - a.date);
    setCards(sortedCards);
  };

  const handleSortByOldest = () => {
    const sortedCards = [...cards].sort((a, b) => a.date - b.date);
    setCards(sortedCards);
  };

  const handleMouseEnter = (id) => {
    setCards(prevCards => prevCards.map(card => {
      if (card.id === id) {
        return { ...card, showEyeIcon: true };
      }
      return card;
    }));
  };

  const handleMouseLeave = (id) => {
    setCards(prevCards => prevCards.map(card => {
      if (card.id === id) {
        return { ...card, showEyeIcon: false };
      }
      return card;
    }));
  };

  const handleImageClick = (link) => {
    window.open(link, '_blank'); // Abre o link em uma nova aba
  };

  return (
    <div>
      <div className='filter'>
        <h2 className=''>
           Projects
        </h2>
        <div className="ButtonsAlignLeft padding-1">
          <button onClick={handleSortByNewest}>Latest</button>
          <button onClick={handleSortByOldest}>Oldest</button>
        </div>
      </div>

      <div className="cards">
        {cards.map((card) => (
          <div
            key={card.id}
            id={`cardId${card.id}`}
            className="card"
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={() => handleMouseLeave(card.id)}
          >
            <div className='divImg'>
            <img
              src={card.image}
              alt={`Imagem do ${card.name}`}
              onClick={() => handleImageClick(card.link)}
              className="card-image"
            />
              {card.showEyeIcon && ( 
            <div  onClick={() => handleImageClick(card.link)} className='divEye'>
            <FaEye />
            </div>
             )}  
            </div>
            
            
        

            <p className="tittleCard">{card.name}</p>
            <p className="descriptionCard">{card.desc}</p>
            <div className="stacks">
              {card.stacks.map((stack, index) => (
                <span key={index} className="stack">
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;