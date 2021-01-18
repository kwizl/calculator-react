import React from 'react';
import PropTypes from 'prop-types';
import ButtonPanel from './ButtonPanel';

const Display = (props) => (
  <div>
    <ButtonPanel />
  </div>
);

Display.propTypes = {
  value: PropTypes.string
};

Display.defaultProps = {
  value: 0
};

export default Display;
