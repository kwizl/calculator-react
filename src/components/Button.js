/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, onClick, wide, color,
}) => (
  <>
    <button onClick={() => onClick(name)} type="button" id={`btn_${name}`} className={`square ${color} ${wide}`}>
      {name}
    </button>
  </>
);

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  wide: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'grey',
  wide: 'large',
};

export default Button;
