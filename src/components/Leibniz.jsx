import React from "react";
import leibnizImg from "../images/leibniz.jpg";

const datosLeibniz = {
  nombre: "Gottfried Wilhelm Leibniz",
  nacimiento: "1 de julio de 1646",
  fallecimiento: "14 de noviembre de 1716",
  pais: "Alemania",
  aportes: [
    "Desarrollo del cálculo infinitesimal",
    "Invención de la máquina calculadora mecánica",
    "Aportes a la lógica matemática y notación binaria"
  ],
  cita: "“La música es el placer que experimenta la mente humana al contar sin darse cuenta que está contando.”"
};

function Leibniz() {
  return (
    <div className="card" aria-label={`Información sobre ${datosLeibniz.nombre}`}>
      <img 
        src={leibnizImg} 
        alt={datosLeibniz.nombre} 
        className="foto"
        loading="lazy"
        width="350"
        height="400"
      />
      <h2>{datosLeibniz.nombre}</h2>
      <p><strong>Nacimiento:</strong> {datosLeibniz.nacimiento}</p>
      <p><strong>Fallecimiento:</strong> {datosLeibniz.fallecimiento}</p>
      <p><strong>País:</strong> {datosLeibniz.pais}</p>
      
      <h3>Principales aportes:</h3>
      <ul role="list">
        {datosLeibniz.aportes.map((aporte, index) => (
          <li key={index}>{aporte}</li>
        ))}
      </ul>
      
      <blockquote aria-label="Cita famosa">
        {datosLeibniz.cita}
      </blockquote>
    </div>
  );
}

export default Leibniz;