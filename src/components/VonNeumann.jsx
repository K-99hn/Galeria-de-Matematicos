import Matematico from './Matematico';
import vonNeumannImg from '/images/vonneumann.jpg';

export default function VonNeumann() {
  return (
    <Matematico
      nombre="John von Neumann"
      nacimiento="1903"
      fallecimiento ="1957"
      pais="Hungría / Estados Unidos"
      aportes={[
        "Fundador de la teoría de juegos",
        "Contribuyó al desarrollo de la computadora digital",
        "Desarrolló la arquitectura de von Neumann"
      ]}
      frase="En matemáticas no entiendes las cosas, te acostumbras a ellas."
      imagen={vonNeumannImg}
    />
  );
}
