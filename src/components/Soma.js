/**
 * Efetua a soma de dois números
 * @author Eddie Silveira
 * @version 1.0
 * @param float {num1} Primeiro número a ser adicionado
 * @param float {num2} Segundo número a ser adicionado
 * @return {soma} float Retorna a soma de dois números
 */

function soma(num1, num2) {
  return (parseFloat(num1) + parseFloat(num2)).toFixed(2);
}

module.exports = soma;
