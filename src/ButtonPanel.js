import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const renderButton = i => <Button name={i}>{ i }</Button>;

  return (
    <div>
      <div className="group-1">
        {renderButton('A/C')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷')}
      </div>
      <div className="group-2">
        {renderButton(7)}
        {renderButton(8)}
        {renderButton(9)}
        {renderButton('x')}
      </div>
      <div className="group-3">
        {renderButton(4)}
        {renderButton(5)}
        {renderButton(6)}
        {renderButton('-')}
      </div>
      <div className="group-4">
        {renderButton(1)}
        {renderButton(2)}
        {renderButton(3)}
        {renderButton('+')}
      </div>
      <div className="group-5">
        {renderButton(0)}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
};

export default ButtonPanel;
