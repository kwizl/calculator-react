import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ onClick }) => {
  const handleClick = buttonName => {
    onClick.clickHandler(buttonName);
  };

  return (
    <div className="button-container">
      <div className="div-buttons">
        <Button name="AC" clickHandler={handleClick} onClick={onClick} />
        <Button name="+/-" clickHandler={handleClick} onClick={onClick} />
        <Button name="%" clickHandler={handleClick} onClick={onClick} />
        <Button color="orange" name="÷" clickHandler={handleClick} onClick={onClick} />
      </div>
      <div className="div-buttons">
        <Button name="7" clickHandler={handleClick} onClick={onClick} />
        <Button name="8" clickHandler={handleClick} onClick={onClick} />
        <Button name="9" clickHandler={handleClick} onClick={onClick} />
        <Button color="orange" name="x" clickHandler={handleClick} onClick={onClick} />
      </div>
      <div className="div-buttons">
        <Button name="4" clickHandler={handleClick} onClick={onClick} />
        <Button name="5" clickHandler={handleClick} onClick={onClick} />
        <Button name="6" clickHandler={handleClick} onClick={onClick} />
        <Button color="orange" name="-" clickHandler={handleClick} onClick={onClick} />
      </div>
      <div className="div-buttons">
        <Button name="1" clickHandler={handleClick} onClick={onClick} />
        <Button name="2" clickHandler={handleClick} onClick={onClick} />
        <Button name="3" clickHandler={handleClick} onClick={onClick} />
        <Button color="orange" name="+" clickHandler={handleClick} onClick={onClick} />
      </div>
      <div className="div-buttons">
        <Button wide="zero" name="0" clickHandler={handleClick} onClick={onClick} />
        <Button name="." clickHandler={handleClick} onClick={onClick} />
        <Button color="orange" name="=" clickHandler={handleClick} onClick={onClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
