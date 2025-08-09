import React from "react";

export default function Matematico({ nombre, nacimiento, fallecimiento, pais, aportes, imagen, frase }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg max-w-sm">
      <img src={imagen} alt={nombre} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{nombre}</h2>
      <p><strong>Nacimiento:</strong> {nacimiento}</p>
      <p><strong>Fallecimiento:</strong> {fallecimiento}</p>
      <p><strong>País:</strong> {pais}</p>
      <h3 className="font-semibold mt-2">Aportes:</h3>
      <ul className="list-disc ml-5">
        {aportes.map((aporte, index) => (
          <li key={index}>{aporte}</li>
        ))}
      </ul>
      {frase && <blockquote className="italic mt-2">"{frase}"</blockquote>}
    </div>
  );
}
