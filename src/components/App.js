/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const handleClick = buttonName => {
    setState(state => calculate(state, buttonName));
  };

  return (
    <div>
      <div className="title">
        <h1>React Calculator</h1>
      </div>
      <Display result={state.next} />
      <ButtonPanel onClick={handleClick} />
    </div>
  );
};

export default App;
