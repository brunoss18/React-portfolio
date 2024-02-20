import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import './cards.css';

import reactPort from '../imagesProjects/reactportifolio.jpg';
import pdfContract from '../imagesProjects/pdfcontractgenerator.jpg';
import cepFinder from '../imagesProjects/cepfinder.png';
import beSirius from '../imagesProjects/besiriusidiomas.jpg';
import organicSmile from '../imagesProjects/organicsmile.jpg';
import helpzTech from '../imagesProjects/helpztech.jpg';
import nft from '../imagesProjects/nft.jpg';
import myShoes from '../imagesProjects/myshoes.jpg';
import spaceFlixv2 from '../imagesProjects/spaceflixv2react.jpg';
import spaceFlixv1 from '../imagesProjects/spaceflixv1.jpg';
import netflixClone from '../imagesProjects/netflixclone.jpg';
import crud from '../imagesProjects/crud.jpg';
import marioGame from '../imagesProjects/mariogame.jpg';
import snakeGame from '../imagesProjects/snakegame.jpg';
import memoryGame from '../imagesProjects/memorygame.jpg';
import instagramClone from '../imagesProjects/instagramclone.jpg';
import strangers from '../imagesProjects/strangers.jpg';
import projetoCenturion from '../imagesProjects/projetocenturion.jpg';

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
   {
    id: 7,
    name: 'NFT Card Preview',
    desc: '',
    date: new Date('2022-12-18'),
    image: nft,
    stacks: ['HTML', 'CSS', ],
    link: 'https://nft-card-preview-br.netlify.app/' 
 },
 {
  id: 8,
  name: 'MyShoes',
  desc: '',
  date: new Date('2022-12-12'),
  image: myShoes,
  stacks: ['JavaSscript','HTML', 'CSS', ],
  link: 'https://myshoes-brunoss18.netlify.app/' 
},
{
  id: 9,
  name: 'SpaceFlix v2 React',
  desc: '',
  date: new Date('2022-12-05'),
  image: spaceFlixv2,
  stacks: ['API','React','JavaSscript','HTML', 'CSS' ],
  link: 'https://simbio-x-teste-kuc1-8m2xuzps2-brunoss18.vercel.app/' 
},
{
  id: 10,
  name: 'Netflix Clone',
  desc: '',
  date: new Date('2022-11-25'),
  image: netflixClone,
  stacks: ['API','React','JavaSscript','HTML', 'CSS' ],
  link: 'https://netflix-clone-react-dwhe5f1sc-brunoss18.vercel.app/' 
},
{
  id: 11,
  name: 'Crud',
  desc: '',
  date: new Date('2022-10-16'),
  image: crud,
  stacks: ['SQLITE','JavaScript','HTML', 'CSS', ],
  link: 'https://crud-interview-br.netlify.app/' 
},
{
  id: 12,
  name: 'Mario Game',
  desc: '',
  date: new Date('2022-06-05'),
  image: marioGame,
  stacks: ['JavaSscript','HTML', 'CSS', ],
  link: 'https://super-mario-brunoss18.netlify.app/' 
},
{
  id: 13,
  name: 'SpaceFlix v1',
  desc: '',
  date: new Date('2022-06-04'),
  image: spaceFlixv1,
  stacks: ['JavaSscript','HTML', 'CSS', ],
  link: 'https://spaceflix.netlify.app/' 
},
{
  id: 14,
  name: 'Milky Way Snake Game',
  desc: '',
  date: new Date('2021-09-20'),
  image: snakeGame,
  stacks: ['JavaSscript','HTML', 'CSS', ],
  link: 'https://snake-game-milky-way.netlify.app/' 
},
{
  id: 15,
  name: 'Milky Way Memory Game',
  desc: '',
  date: new Date('2021-09-13'),
  image: memoryGame,
  stacks: ['JavaSscript','HTML', 'CSS', ],
  link: 'https://github.com/brunoss18/Milky-Way-Memory-Game' 
},
{
  id: 16,
  name: 'Instagram Clone',
  desc: '',
  date: new Date('2021-09-12'),
  image: instagramClone,
  stacks: ['HTML', 'CSS' ],
  link: 'https://instagramss18.netlify.app/' 
},
{
  id: 17,
  name: 'Strangers',
  desc: '',
  date: new Date('2021-07-23'),
  image: strangers,
  stacks: ['Node', 'Sqlite','JavaSscript','HTML', 'CSS', ],
  link: 'https://github.com/brunoss18/Strangers' 
},
{
  id: 18,
  name: 'Projeto Centurion',
  desc: '',
  date: new Date('2021-07-20'),
  image: projetoCenturion,
  stacks: ['Bootstrap','HTML', 'CSS', ],
  link: 'https://github.com/brunoss18/project-x' 
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
            
            
            {/* {card.showEyeIcon && (
              <div className="eye-icon">
                <FaEye />
              </div>
            )} */}

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