import { useState } from "react";
import Matematico from "./Matematicos/template-matematico";
import { matematicos } from "./Matematicos/info-matematicos";

export default function Galeria() {
  const [seleccionado, setSeleccionado] = useState(matematicos[0].id);

  const actual = matematicos.find((m) => m.id === seleccionado);

  return (
    <div className="justify-items-center p-6">
      <h1 className="text-center text-3xl font-bold mb-4">Galería de Matemáticos</h1>

      <select
        className="place-self-center border rounded my-5 p-2 mb-15"
        value={seleccionado}
        onChange={(e) => setSeleccionado(e.target.value)}
      >
        {matematicos.map((m) => (
          <option key={m.id} value={m.id}>
            {m.nombre}
          </option>
        ))}
      </select>

      <Matematico {...actual} />
    </div>
  );
}