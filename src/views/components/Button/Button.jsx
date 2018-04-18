import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = props => (
  <button
    className={styles.root}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Button.defaultProps = {
  onClick: undefined,
  children: undefined,
};

export default Button;
