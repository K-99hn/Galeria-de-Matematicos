import React from 'react';
import Matematico from './Matematico';
import seidelImg from '/images/seidel.jpg';

export default function Seidel() {
  return (
    <Matematico
      nombre="Philipp Ludwig von Seidel"
      nacimiento="1821"
      fallecimiento ="1896"
      pais="Alemania"
      aportes={[
        "Descomposición de funciones (Descomposición de Seidel)",
        "Estudio de la óptica geométrica y aberraciones ópticas",
        "Método de Gauss-Seidel para resolver sistemas lineales"
      ]}
      frase=""
      imagen={seidelImg}
    />
  );
}