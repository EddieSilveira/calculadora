import React, { useState, useEffect } from 'react';
import Maiusculo from './components/Maiusculo';
import MaiusculoChildren from './components/MaiusculoChildren';
import Soma from './components/Soma';

function App() {
  const [contador, setContador] = useState(4);
  const [num1, setnum1] = useState('');
  const [num2, setnum2] = useState('');
  const [resultado, setResultado] = useState('');
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);

  useEffect(() => {
    document.title = 'Calculadora React';
  }, []); //quando o array está vazio, é executado uma unica vez

  useEffect(() => {
    if (parseFloat(num1.trim()) && parseFloat(num2.trim())) {
      setResultado(Soma(num1, num2));
    } else {
      setResultado('');
    }
  }, [num1, num2]);

  // function adicionarContador() {
  //   setContador(contador + 1);
  //   console.log(`O valor ${contador} foi adicionado!`);
  // }

  // function removerContador() {
  //   setContador(contador - 1);
  //   console.log(`O valor ${contador} foi removido!`);
  // }

  return (
    <>
      {/*
      <Maiusculo texto="boa tarde, oi 2"/>
      <Maiusculo texto="fatec itu" cor="#"/>
      <MaiusculoChildren>conteudo do teste</MaiusculoChildren>
    */}
      {/* <div>
        Contador: {contador} <br></br>
        <button onClick={adicionarContador}>Adicionar</button>
        <button onClick={removerContador} style={{ marginLeft: 10 }}>
          Remover
        </button>
     </div>*/}
      <div style={{ marginTop: 30 }}>
        <label>Número 1</label>
        <input type="number" required />
        <br></br>
        <label>Número 2</label>
        <input type="number" required />

        <br></br>
        <button disabled={botaoDesabilitado}>Somar</button>
      </div>
    </>
  );
}

export default App;
