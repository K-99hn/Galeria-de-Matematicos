import React from "react";

export default function Matematico({ nombre, nacimiento, fallecimiento, pais, aportes, imagen, frase }) {
  return (
    <div className="border rounded-xl shadow-2xl p-20 w-full max-w-2xl mx-auto my-8 bg-amber-50">
  {/* Contenedor de imagen centrada */}
  <div className="flex justify-center -mt-10 mb-4"> {/* -mt-20 para levantar la imagen */}
    <img 
      src={imagen} 
      alt={nombre} 
      className="w-50 h-50 object-cover rounded-full border-4 border-black shadow-lg"
    />
  </div>

  {/* Contenido del matemático */}
  <div className="text-center mt-6"> {/* mt-6 para compensar el -mt-20 */}
    <h2 className="text-2xl font-bold text-gray-800">{nombre}</h2>
    
    <div className="grid grid-cols-2 gap-4 mt-6 text-left">
      <p><strong className="text-gray-600">Nacimiento:</strong> <span className="text-gray-800">{nacimiento}</span></p>
      <p><strong className="text-gray-600">Fallecimiento:</strong> <span className="text-gray-800">{fallecimiento}</span></p>
      <p className="col-span-2"><strong className="text-gray-600">País:</strong> <span className="text-gray-800">{pais}</span></p>
    </div>

    <div className="mt-6">
      <h3 className="font-semibold text-lg text-gray-700">Aportes:</h3>
      <ul className="list-disc list-inside text-left mt-2 mx-auto max-w-md">
        {aportes.map((aporte, index) => (
          <li key={index} className="text-gray-700 py-1">{aporte}</li>
        ))}
      </ul>
    </div>

    {frase && (
      <blockquote className="mt-8 p-4 bg-gray-100 rounded-lg italic text-gray-600 border-l-4 border-gray-400">
        "{frase}"
      </blockquote>
    )}
  </div>
</div>
  );
}