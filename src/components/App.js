import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

function App(prop) {
  const title = 'React Calculator';
  return (
    <>
      <div className="title">
        <h1>{ title }</h1>
      </div>
      <Display value={prop.value} />
      <ButtonPanel />
    </>
  );
}

export default App;
