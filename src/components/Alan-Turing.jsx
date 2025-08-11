import Matematico from './Matematico';
import AlanImg from '/public/turing.jpg';

export default function Alan() {
  return (
    <Matematico
      nombre="Alan Mathison Turing"
      nacimiento="23 de junio de 1912"  
      fallecimiento="7 de junio de 1954"
      pais="Reino Unido"
      aportes={[
          "Máquina de Turing",
          "Descifrado de Enigma",
          "Prueba de Turing"
      ]}
      frase="Solo podemos ver poco del futuro, pero lo suficiente para darnos cuenta de que hay mucho que hacer."
      imagen={AlanImg}
    />
  );
}