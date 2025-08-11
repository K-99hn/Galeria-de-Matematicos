
import Matematico from './Matematico';
import leibnizImg from '/images/leibniz.jpg';

export default function Fibonacci() {
  return (
    <Matematico
      nombre="Gottfried Wilhelm Leibniz"
      nacimiento="C. 1 de julio de 1646"  
      fallecimiento="C. 14 de noviembre de 1716"
      pais="Alemania"
      aportes={[
        "Desarrollo del cálculo infinitesimal",
    "Invención de la máquina calculadora mecánica",
    "Aportes a la lógica matemática y notación binaria"

      ]}
      frase="La música es el placer que experimenta la mente humana al contar sin darse cuenta que está contando.”"
      imagen={leibnizImg}
    />
  );
}