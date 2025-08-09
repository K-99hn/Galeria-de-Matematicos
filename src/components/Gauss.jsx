import React from 'react';

const Gauss = () => {
  return (
    <div className="card">
      <img src="/images/gauss.jpg" alt="Carl Friedrich Gauss" />
      <h2>Carl Friedrich Gauss</h2>
      <p>1777 - 1855</p>
      <p><em>Alemania</em></p>
      <h3>Aportes principales:</h3>
      <ul>
        <li>Teoría de números (Ley de reciprocidad cuadrática)</li>
        <li>Distribución normal (Campana de Gauss)</li>
        <li>Geometría diferencial y electromagnetismo</li>
        <li>Métodos de mínimos cuadrados</li>
      </ul>
      <blockquote>“Las matemáticas son la reina de las ciencias.”</blockquote>
    </div>
  );
};

export default Gauss;
