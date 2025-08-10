import Matematico from './Matematico';
import fibonacciImg from '/images/fibonacci.jpg';

export default function Fibonacci() {
  return (
    <Matematico
      nombre="Leonardo Fibonacci"
      nacimiento="C. 1170"  
      fallecimiento="C. 1250"
      pais="Italia"
      aportes={[
        "Introdujo la secuencia de Fibonacci en Europa",
        "Difundió el sistema de numeración indo-arábigo",
        "Autor del libro Liber Abaci"
      ]}
      frase="La naturaleza está escrita en el lenguaje de las matemáticas."
      imagen={fibonacciImg}
    />
  );
}
