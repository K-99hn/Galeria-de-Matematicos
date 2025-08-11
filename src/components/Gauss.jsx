import React from 'react';
import Matematico from './Matematico';
import gaussImg from '/images/gauss.jpg';

export default function Gauss() {
  return (
    <Matematico
      nombre="Carl Friedrich Gauss"
      nacimiento="1777"
      fallecimiento ="1855"
      pais="Alemanía"
      aportes={[
        "Teoría de números (Ley de reciprocidad cuadrática)",
        "Distribución normal (Campana de Gauss)",
        "Métodos de mínimos cuadrados"
      ]}
      frase="Las matemáticas son la reina de las ciencias."
      imagen={gaussImg}
    />
  );
}