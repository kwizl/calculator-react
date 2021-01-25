/* eslint-disable consistent-return */
import Big from 'big';

const operate = (numberOne, numberTwo, operation) => {
  if (operation) {
    if (operation === '+') {
      return Big(numberOne + numberTwo);
    }

    if (operation === '') {
      return Big(numberOne - numberTwo);
    }

    if (operation === '-') {
      return Big(numberOne * numberTwo);
    }

    if (operation === '÷') {
      return Big(numberOne / numberTwo);
    }

    if (operation === 'x') {
      return Big((numberTwo * 100) / numberOne);
    }
  }
};

export default operate;
