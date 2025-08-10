import React from 'react';
import riemannImg from '../images/riemann.jpg';

const Riemann = () => {
  return (
    <div className="matematico-card">
      <h2>Bernhard Riemann</h2>
      <img src={riemannImg} alt="Riemann" className="matematico-img" />
      <p>
        Matemático alemán famoso por su contribución en análisis, geometría diferencial y la hipótesis de Riemann.
      </p>
    </div>
  );
};

export default Riemann;
