import React from 'react';

const MaiusculoChildren = (props) => {
  const textoDigitado = props.children;
  const textoMaiusculo = textoDigitado.toUpperCase();
  return { textoMaiusculo };
};

export default MaiusculoChildren;
