/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <>
    <button onClick={() => onClick(name)} type="button" className="square">
      {name}
    </button>
  </>
);

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
