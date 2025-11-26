import React from 'react';

const AnimalCard = ({ animal, onAnimalClick }) => {
  const handleClick = () => {
    onAnimalClick(animal);
  };

  return (
    <div className="animal-card" onClick={handleClick}>
      <img 
        src={animal.image} 
        alt={animal.name} 
        className="animal-image" 
      />
      <h3 className="animal-name">{animal.name}</h3>
      <p className="animal-description">{animal.description}</p>
     
    </div>
  );
};

export default AnimalCard;

