import React, { useState } from 'react';
import Gauss from './Gauss';
import Seidel from './Seidel';

const Galeria = () => {
  const [seleccionado, setSeleccionado] = useState('gauss');

  const renderMatematico = () => {
    switch (seleccionado) {
      case 'gauss':
        return <Gauss />;
      case 'seidel':
        return <Seidel />;
      default:
        return null;
    }
  };

  return (
    <div className="galeria-container">
      <h1>Galería de Matemáticos</h1>
      <div className="selector-container">
        <label htmlFor="matematico">Selecciona un matemático:</label>
        <select
          id="matematico"
          value={seleccionado}
          onChange={(e) => setSeleccionado(e.target.value)}
        >
          <option value="gauss">Carl Friedrich Gauss</option>
          <option value="seidel">Philipp Ludwig von Seidel</option>
        </select>
      </div>
      {renderMatematico()}
    </div>
  );
};

export default Galeria;
