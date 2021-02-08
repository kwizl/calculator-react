import PropTypes from 'prop-types';
import React from 'react';
import Button from './Button';

const ButtonPanel = ({ onClick }) => (
  <div className="button-container">
    <div className="div-buttons">
      <Button name="AC" onClick={onClick} />
      <Button name="+/-" onClick={onClick} />
      <Button name="%" onClick={onClick} />
      <Button color="orange" name="÷" onClick={onClick} />
    </div>
    <div className="div-buttons">
      <Button name="7" onClick={onClick} />
      <Button name="8" onClick={onClick} />
      <Button name="9" onClick={onClick} />
      <Button color="orange" name="x" onClick={onClick} />
    </div>
    <div className="div-buttons">
      <Button name="4" onClick={onClick} />
      <Button name="5" onClick={onClick} />
      <Button name="6" onClick={onClick} />
      <Button color="orange" name="-" onClick={onClick} />
    </div>
    <div className="div-buttons">
      <Button name="1" onClick={onClick} />
      <Button name="2" onClick={onClick} />
      <Button name="3" onClick={onClick} />
      <Button color="orange" name="+" onClick={onClick} />
    </div>
    <div className="div-buttons">
      <Button wide="zero" name="0" onClick={onClick} />
      <Button name="." onClick={onClick} />
      <Button color="orange" name="=" onClick={onClick} />
    </div>
  </div>
);

ButtonPanel.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
