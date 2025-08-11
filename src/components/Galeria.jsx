import React, { useState } from "react";
import Alan from "./Alan-Turing";
import Emmy from "./Emmy-Noether";

const MATEMATICOS = [
  { id: "alan", label: "Alan Turing", Component: Alan },
  { id: "emmy", label: "Emmy Noether", Component: Emmy }
];

export default function Galeria() {
  const [selectedId, setSelectedId] = useState(MATEMATICOS[0].id);
  const ActiveComponent = MATEMATICOS.find(
    (m) => m.id === selectedId
  ).Component;

  return (
    <div className="p-6 text-black">
      <nav className="mb-6 flex gap-2 flex-wrap">
        {MATEMATICOS.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedId(m.id)}
            className={`px-3 py-1 rounded ${
              m.id === selectedId
                ? "bg-amber-800 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {m.label}
          </button>
        ))}
      </nav>

      <section className="flex justify-center">
        <ActiveComponent />
      </section>
    </div>
  );
}