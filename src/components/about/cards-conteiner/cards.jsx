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
