import Big from 'big.js';

const Calculate = (dataObject, buttonName) => {
  const { total, next, operation } = dataObject;

  if (buttonName === '+/-') {
    return {
      next: (Big(next * -1)).toString(),
      total: (Big(total * -1)).toString(),
      operation: null,
    };
  } else if (buttonName == 'A/C') {
    return {
      next: (0).toString(),
      total: (0).toString(),
      operation: '',
    };
  } else if () {

  } else {

  }
};

export default Calculate;
