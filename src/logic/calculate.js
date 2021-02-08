/* eslint-disable prefer-const */
import Big from 'big.js';
import operate from './operate';

const calculate = (dataObject, buttonName) => {
  let { total, next, operation } = dataObject;
  const operations = ['+', '-', 'x', '÷', '%', '='];
  const buttonNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (buttonName === 'A/C') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (buttonName === '+/-') {
    return {
      total: (Big(total * -1)).toString(),
      next: (Big(next * -1)).toString(),
      operation: '',
    };
  }

  if (buttonName === '=') {
    return {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (buttonName === '.') {
    if (next) {
      return {
        total,
        next: next.indexOf('.') === -1 ? `${next}.` : next,
        operation,
      };
    }

    if (total) {
      return {
        total: total.indexOf('.') === -1 ? `${total}.` : total,
        next,
        operation,
      };
    }

    return {
      total,
      next,
      operation,
    };
  }

  if (operations.includes(buttonName)) {
    if (next) {
      return {
        total: operate(total, next, operation),
        next: '',
        operation: buttonName,
      };
    }
  }

  if (buttonNumbers.includes(buttonName)) {
    if (next != null) {
      next += buttonName;
    } else {
      next = buttonName;
    }
  }

  return {
    total,
    next,
    operation: buttonName,
  };
};

export default calculate;
