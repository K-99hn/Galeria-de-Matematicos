import React, { useState } from 'react';
import Laplace from './Laplace';
import Riemann from './Riemann';

const Galeria = () => {
  const [matematicoActual, setMatematicoActual] = useState('Laplace');

  const renderMatematico = () => {
    switch (matematicoActual) {
      case 'Laplace':
        return <Laplace />;
      case 'Riemann':
        return <Riemann />;
      default:
        return <div>Matemático no encontrado</div>;
    }
  };

  return (
    <div className="galeria-container">
      <h1>Galería de Matemáticos</h1>
      <nav className="nav-botones">
        <button
          onClick={() => setMatematicoActual('Laplace')}
          className={matematicoActual === 'Laplace' ? 'activo' : ''}
        >
          Laplace
        </button>
        <button
          onClick={() => setMatematicoActual('Riemann')}
          className={matematicoActual === 'Riemann' ? 'activo' : ''}
        >
          Riemann
        </button>
      </nav>
      <div className="matematico-display">{renderMatematico()}</div>
    </div>
  );
};

export default Galeria;
