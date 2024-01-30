//PoetryPage.jsx
import React from 'react';
import './Poetry.css'; 

const PoetryPage = () => {

  const poetryData = [
    { title: 'Carmesi', imageUrl: '/images/carmsei.jpeg' },
    { title: 'Dalima', imageUrl: '/images/dalima.jpeg' },
    { title: 'Viaje al final de la noche', imageUrl: '/images/viajefinal.jpeg' },
    { title: 'Palmful', imageUrl: '/images/palmful.jpeg' },
    { title: 'Poema de amor', imageUrl: '/images/amor.jpeg' },
    { title: 'Cansado', imageUrl: '/images/cansado.jpeg' },
    { title: 'Noche estrellada', imageUrl: '/images/estrellada.jpeg' },
    { title: 'Carmesi', imageUrl: '/images/carmsei.jpeg' },
    { title: 'Dalima', imageUrl: '/images/dalima.jpeg' },
    { title: 'Viaje al final de la noche', imageUrl: '/images/viajefinal.jpeg' },
    { title: 'Palmful', imageUrl: '/images/palmful.jpeg' },
    { title: 'Poema de amor', imageUrl: '/images/amor.jpeg' },
    { title: 'Cansado', imageUrl: '/images/cansado.jpeg' },
    { title: 'Noche estrellada', imageUrl: '/images/estrellada.jpeg' },
    
  ];

  return (
    <div className="poetry-container">
      {poetryData.map((poem, index) => (
        <div key={index} className="poem-circle">
          <img src={poem.imageUrl} alt={`Poem ${index + 1}`} />
         {/*<div className="poem-title">{poem.title}</div> */} 
        </div>
      ))}
    </div>
  );
}

export default PoetryPage;
