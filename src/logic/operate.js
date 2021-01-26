/* eslint-disable consistent-return */
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  if (operation) {
    if (operation === '+') {
      return Big(numberOne + numberTwo);
    }

    if (operation === '-') {
      return Big(numberOne - numberTwo);
    }

    if (operation === 'x') {
      return Big(numberOne * numberTwo);
    }

    if (operation === '÷') {
      return Big(numberOne / numberTwo);
    }

    if (operation === '%') {
      return Big((numberOne / 100));
    }
  }
};

export default operate;
