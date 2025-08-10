import React from "react";
import pascalImg from "../images/pascal.jpg";

const datosPascal = {
  nombre: "Blaise Pascal",
  nacimiento: "19 de junio de 1623",
  fallecimiento: "19 de agosto de 1662",
  pais: "Francia",
  aportes: [
    "Desarrollo del triángulo de Pascal",
    "Contribuciones a la teoría de la probabilidad",
    "Invención de la primera calculadora mecánica (Pascalina)"
  ],
  cita: "“El corazón tiene razones que la razón ignora.”"
};

function Pascal() {
  return (
    <div className="card" aria-label={`Información sobre ${datosPascal.nombre}`}>
      <img 
        src={pascalImg} 
        alt={datosPascal.nombre} 
        className="foto"
        loading="lazy"
        width="350"
        height="400"
      />
      <h2>{datosPascal.nombre}</h2>
      <p><strong>Nacimiento:</strong> {datosPascal.nacimiento}</p>
      <p><strong>Fallecimiento:</strong> {datosPascal.fallecimiento}</p>
      <p><strong>País:</strong> {datosPascal.pais}</p>
      
      <h3>Principales aportes:</h3>
      <ul role="list">
        {datosPascal.aportes.map((aporte, index) => (
          <li key={index}>{aporte}</li>
        ))}
      </ul>
      
      <blockquote aria-label="Cita famosa">
        {datosPascal.cita}
      </blockquote>
    </div>
  );
}

export default Pascal;