import Matematico from './Matematico';
import pascalImg from '/images/pascal.jpg';

export default function Fibonacci() {
  return (
    <Matematico
      nombre="Blaise Pascal"
      nacimiento="C. 19 de junio de 1623"  
      fallecimiento="C. 19 de agosto de 1662"
      pais="Francia"
      aportes={[
        "Desarrollo del triángulo de Pascal",
    "Contribuciones a la teoría de la probabilidad",
    "Invención de la primera calculadora mecánica (Pascalina)"

      ]}
      frase="El corazón tiene razones que la razón ignora.”"
      imagen={pascalImg}
    />
  );
}