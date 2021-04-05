import React from 'react';

const Maiusculo = (texto) => {
  const textoDigitado = texto.children;
  const textoMaiusculo = textoDigitado.toUpperCase();
  return { textoMaiusculo };
};

export default Maiusculo;
