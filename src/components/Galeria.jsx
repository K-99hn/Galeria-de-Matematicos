import React, { useState } from "react";
import Leibniz from "./Leibniz";
import Pascal from "./Pascal";
import "./Galeria.css";

function Galeria() {
  // Estado inicial: mostrar Leibniz por defecto
  const [matematicoSeleccionado, setMatematicoSeleccionado] = useState("leibniz");
  
  const matematicos = [
    { id: "leibniz", nombre: "Gottfried Leibniz" },
    { id: "pascal", nombre: "Blaise Pascal" }
  ];

  return (
    <div className="galeria">
      <div className="contenido-centrado">
        <h1>Galería de Matemáticos</h1>
        
        <div className="selector-container">
          <label htmlFor="matematico-select">Selecciona un matemático:</label>
          <select
            id="matematico-select"
            value={matematicoSeleccionado}
            onChange={(e) => setMatematicoSeleccionado(e.target.value)}
            className="selector"
          >
            {matematicos.map((mat) => (
              <option key={mat.id} value={mat.id}>
                {mat.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="contenedor">
          {matematicoSeleccionado === "leibniz" ? (
            <div className="card-wrapper">
              <Leibniz />
            </div>
          ) : (
            <div className="card-wrapper">
              <Pascal />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Galeria;