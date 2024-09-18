import React, { useState } from 'react';

const Contadoruwu = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador uwu: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Contadoruwu;