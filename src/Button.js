/* eslint-disable react/jsx-fragments */
import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Componets {
  render() {
    return (
      <div>
        <button className="square">
          {props.value}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  value: PropTypes.string,
};

export default Button;
