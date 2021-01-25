import Big from 'big.js';
import operate from './operate';

const calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;
  const operations = ['+', '-', 'x', '÷', '%'];

  if (buttonName === 'A/C') {
    return {
      total: '',
      next: '',
      operation: '',
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
      next: '',
      operation: '',
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

  return {
    total,
    next,
    operation: buttonName,
  };
};

export default calculate;
