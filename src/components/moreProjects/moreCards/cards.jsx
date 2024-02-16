import React, { useState } from 'react';
import './cards.css';

const Cards = () => {
  
  const [cards, setCards] = useState([

    {
       id: 1,
       name: 'React Portfolio',
       desc: '',
       date: new Date('2024-02-02'),
       image: 'https://uploaddeimagens.com.br/images/004/739/314/full/reactportifolio.png?1707838538',
       stacks: ['React','JavaSscript','HTML', 'CSS', ] 
    },
    {
      id: 2,
      name: 'Pdf Contract Generator',
      desc: '',
      date: new Date('2024-01-29'),
      image: 'https://uploaddeimagens.com.br/images/004/739/312/original/pdfcontractgenerator.png?1707838484',
      stacks: ['JavaSscript','HTML', 'CSS', ] 
   },
   {
      id: 3,
      name: 'Cep Finder',
      desc: '',
      date: new Date('2024-01-25'),
      image: 'https://uploaddeimagens.com.br/images/004/739/590/full/cepfinder.png?1707871294',
      stacks: ['API', 'REACT', 'JavaScript', 'HTML', 'CSS', ] 
   },
   {
      id: 4,
      name: 'Besirius Idiomas',
      desc: '',
      date: new Date('2023-08-01'),
      image: 'https://uploaddeimagens.com.br/images/004/739/308/original/besiriusidiomas.png?1707838302',
      stacks: ['JavaScript','Bootstrap', 'HTML', 'CSS', ] 
   },
   {
      id: 5,
      name: 'OrganicSmile',
      desc: '',
      date: new Date('2023-06-01'),
      image: 'https://uploaddeimagens.com.br/images/004/739/311/full/organicsmile.png?1707838421',
      stacks: ['JavaScript', 'Jquery', 'Bootstrap', 'HTML', 'CSS',] 
   },
   {
      id: 6,
      name: 'Helpz Tech',
      desc: '',
      date: new Date('2023-05-02'),
      image: 'https://uploaddeimagens.com.br/images/004/739/309/full/helpztech.png?1707838380',
      stacks: ['JavaScript','Bootstrap', 'HTML', 'CSS', ] 
   },
   {
    id: 7,
    name: 'NFT Card Preview',
    desc: '',
    date: new Date('2022-12-18'),
    image: 'https://i.ibb.co/zH5WnGJ/nft.png',
    stacks: ['JavaSscript','HTML', 'CSS', ] 
 },
 {
  id: 8,
  name: 'MyShoes',
  desc: '',
  date: new Date('2022-12-12'),
  image: 'https://i.ibb.co/L5Qgwms/myshoes.png',
  stacks: ['JavaSscript','HTML', 'CSS', ] 
},
{
  id: 9,
  name: 'SpaceFlix v2 React',
  desc: '',
  date: new Date('2022-12-05'),
  image: 'https://i.ibb.co/xY0JYnx/spaceflixv2react.png',
  stacks: ['API','React','JavaSscript','HTML', 'CSS' ] 
},
{
  id: 10,
  name: 'Netflix Clone',
  desc: '',
  date: new Date('2022-11-25'),
  image: 'https://i.ibb.co/8B7LHpC/netflixclone.png',
  stacks: ['API','React','JavaSscript','HTML', 'CSS' ] 
},
{
  id: 11,
  name: 'Crud',
  desc: '',
  date: new Date('2022-10-16'),
  image: 'https://i.ibb.co/Hdgk3z0/crud.png',
  stacks: ['SQLITE','JavaScript','HTML', 'CSS', ] 
},
{
  id: 12,
  name: 'Mario Game',
  desc: '',
  date: new Date('2022-06-05'),
  image: 'https://i.ibb.co/Bcp0sp9/mariogame.png',
  stacks: ['JavaSscript','HTML', 'CSS', ] 
},
{
  id: 13,
  name: 'SpaceFlix v1',
  desc: '',
  date: new Date('2022-06-04'),
  image: 'https://i.ibb.co/cQQ3tq7/spaceflixv1.png',
  stacks: ['JavaSscript','HTML', 'CSS', ] 
},
{
  id: 14,
  name: 'Milky Way Snake Game',
  desc: '',
  date: new Date('2021-09-20'),
  image: 'https://i.ibb.co/H4HQXCH/snakegame.png',
  stacks: ['JavaSscript','HTML', 'CSS', ] 
},
{
  id: 15,
  name: 'Milky Way Memory Game',
  desc: '',
  date: new Date('2021-09-13'),
  image: 'https://i.ibb.co/kD9mNL0/memorygame.png',
  stacks: ['JavaSscript','HTML', 'CSS', ] 
},
{
  id: 16,
  name: 'Instagram Clone',
  desc: '',
  date: new Date('2021-09-12'),
  image: 'https://i.ibb.co/xG4067f/instagramclone.png',
  stacks: ['HTML', 'CSS' ] 
},
{
  id: 17,
  name: 'Strangers',
  desc: '',
  date: new Date('2021-07-23'),
  image: 'https://i.ibb.co/Pg3RShg/strangers.png',
  stacks: ['Node','Express', 'Sqlite','JavaSscript','HTML', 'CSS', ] 
},
{
  id: 18,
  name: 'Projeto Centurion',
  desc: '',
  date: new Date('2021-07-20'),
  image: 'https://i.ibb.co/MGzNHC8/projetocenturion.png',
  stacks: ['Bootstrap','HTML', 'CSS', ] 
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

  return (
    <div>
      <div className="ButtonsAlignLeft">
        <button onClick={handleSortByNewest}>Latest</button>
        <button onClick={handleSortByOldest}>Oldest</button>
      </div>
      <div className="cards">
        {cards.map(card => (
          <div key={card.id} className="card">
            <img src={card.image} alt={`Imagem do ${card.name}`} />
           
            <p className='tittleCard'>{card.name}</p>
            <p className='descriptionCard'>
              {card.desc}
            </p>
            <div className='stacks'>
              {card.stacks.map((stack, index) => (
                <span key={index} className='stack'>{stack}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
