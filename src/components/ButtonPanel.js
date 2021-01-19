import React from 'react';
import Button from './Button';

const ButtonPanel = () => {
  const buttons = {
    'group-1': ['A/C', '+/-', '%', '÷'],
    'group-2': ['7', '8', '9', 'x'],
    'group-3': ['4', '5', '6', '-'],
    'group-4': ['1', '2', '3', '+'],
    'group-5': ['0', '.', '='],
  };

  const panelCalculator = [];

  Object.keys(buttons).forEach(key => {
    panelCalculator.push(
      <div className={key}>
        {buttons[key].map(btn => (
          <Button
            key={`btn_${btn}`}
            name={btn}
          />
        ))}
      </div>,
    );
  });

  return (
    <>
      <div>
        {panelCalculator}
      </div>
    </>
  );
};

export default ButtonPanel;
