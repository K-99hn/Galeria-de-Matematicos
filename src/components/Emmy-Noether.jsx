import Matematico from './Matematico';
import EmmyImg from '/images/Noether.jpg';

export default function Emmy() {
  return (
    <Matematico
      nombre="Emmy Noether"
      nacimiento="23 de marzo de 1882"  
      fallecimiento="14 de abril de 1935"
      pais="Alemania"
      aportes={[
          "Teorema de Noether",
          "Álgebra abstracta moderna",
          "Teoría de invariantes"
      ]}
      frase="Si uno quiere hacer matemáticas, lo mejor es hacerlo con pasión."
      imagen={EmmyImg}
    />
  );
}