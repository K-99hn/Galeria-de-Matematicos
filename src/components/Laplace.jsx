import React from 'react';
import laplaceImg from '../images/laplace.jpg';

const Laplace = () => {
  return (
    <div className="matematico-card">
      <h2>Pierre-Simon Laplace</h2>
      <img src={laplaceImg} alt="Laplace" className="matematico-img" />
      <p>
        Matemático y astrónomo francés, conocido por sus trabajos en probabilidad, física matemática y la transformada de Laplace.
      </p>
    </div>
  );
};

export default Laplace;
