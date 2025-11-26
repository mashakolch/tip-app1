import React, { useState, useEffect } from 'react';
import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';
import { initialAnimals } from './data/animalsData';

function App() {
  const [animals, setAnimals] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);


  useEffect(() => {
    setAnimals(initialAnimals);
  }, []);

  const handleAnimalClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseDetail = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Карточки животных</h1>
        {/* <p>Нажмите на карточку, чтобы узнать больше о животном</p> */}
      </header>

      <main className="app-main">
        <div className="container">
          <AnimalList
            animals={animals}
            onAnimalClick={handleAnimalClick}
          />
        </div>
      </main>

      {selectedAnimal && (
        <AnimalDetail
          animal={selectedAnimal}
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}

export default App;