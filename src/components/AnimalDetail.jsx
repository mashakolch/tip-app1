import React from 'react';

const AnimalDetail = ({ animal, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="animal-detail-overlay" onClick={handleBackdropClick}>
      <div className="animal-detail">
        <button className="close-button" onClick={onClose}>×</button>
        
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="detail-image" 
        />
        
        <div className="detail-content">
          <h2 className="detail-name">{animal.name}</h2>
          <p className="detail-description">{animal.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetail;