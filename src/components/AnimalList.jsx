import React from 'react';
import AnimalCard from './AnimalCard';

const AnimalList = ({ animals, onAnimalClick }) => {
  if (animals.length === 0) {
    return (
      <div className="empty-state">
        <p>Пока нет животных в коллекции</p>
      </div>
    );
  }

  return (
    <div className="animal-list">
      {animals.map(animal => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onAnimalClick={onAnimalClick}
        />
      ))}
    </div>
  );
};

export default AnimalList;