import React from 'react';

const Seidel = () => {
  return (
    <div className="card">
      <img src="/images/seidel.jpg" alt="Philipp Ludwig von Seidel" />
      <h2>Philipp Ludwig von Seidel</h2>
      <div className="p-container">
        <p>Año de nacimiento: 1821</p>
        <p>Año de fallecimiento: 1896</p>
      </div>
      <p><em>Alemania</em></p>
      <h3>Aportes principales:</h3>
      <ul>
        <li>Descomposición de funciones (Descomposición de Seidel)</li>
        <li>Estudio de la óptica geométrica y aberraciones ópticas</li>
        <li>Método de Gauss-Seidel para resolver sistemas lineales</li>
      </ul>
    </div>
  );
};

export default Seidel;
