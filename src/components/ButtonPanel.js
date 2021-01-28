import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ onClick }) => {
  const groups = {
    'group-1': ['A/C', '+/-', '%', '÷'],
    'group-2': ['7', '8', '9', 'x'],
    'group-3': ['4', '5', '6', '-'],
    'group-4': ['1', '2', '3', '+'],
    'group-5': ['0', '.', '='],
  };

  const handleClick = buttonName => {
    onClick.clickHandler(buttonName);
  };

  const panelCalculator = [];

  Object.keys(groups).forEach(key => {
    panelCalculator.push(
      <div className={key}>
        {groups[key].map(btn => (
          <Button
            clickHandler={handleClick}
            key={btn.toString()}
            name={btn}
            onClick={onClick}
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

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
