export default function Matematico({
  nombre,
  nacimiento,
  fallecimiento,
  pais,
  aportes,
  curiosidad,
  frase,
  imagen
}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4">
      <img src={imagen} alt={nombre} className="w-full h-100" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{nombre}</h2>
        <p className="text-gray-600">
          {nacimiento} - {fallecimiento || "Vivo"}
        </p>
        <p className="text-gray-700 font-medium">País: {pais}</p>

        <h3 className="mt-3 font-semibold">Aportes principales:</h3>
        <ul className="list-disc list-inside">
          {aportes.map((aporte, index) => (
            <li key={index}>{aporte}</li>
          ))}
        </ul>

        {curiosidad && (
          <div>
            <h3 className="mt-3 font-semibold">Curiosidad:</h3>  
            <p className="text-gray-700 font-medium">
                {curiosidad}
            </p>
          </div>
          
        )}

        {frase && (
          <blockquote className="mt-4 italic text-gray-500">
            “{frase}”
          </blockquote>
        )}
      </div>
    </div>
  );
}