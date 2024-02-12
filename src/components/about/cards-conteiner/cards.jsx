import React, { useState } from 'react';
import './cards.css'

const Cards = () => {
  const [cards, setCards] = useState([
    { id: 1, name: 'project name', desc: '', date: new Date('2003-02-10'), image: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'  },
    { id: 2, name: 'project name', desc: '', date: new Date('2001-12-15'), image: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'},
    { id: 3, name: 'project name', desc: '', date: new Date('2010-09-20'), image: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'},
    { id: 4, name: 'project name', desc: '', date: new Date('2010-09-20'), image: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'},
    { id: 5, name: 'project name', desc: '', date: new Date('2010-09-20'), image: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'},
    { id: 6, name: 'project name', desc: '', date: new Date('2010-09-20'), image: 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'}
  ])

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
      <div class="ButtonsAlignLeft">
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
              <span className='stack'>HTML</span>
              <span className='stack'>CSS</span>
              <span className='stack'>JAVASCRIPT</span>
            </div>
            {/* Aqui, deixamos a data visível apenas no código */}
            <span style={{display: 'none'}}>{card.date.toLocaleDateString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
