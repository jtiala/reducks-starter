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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: undefined,
  onClick: undefined,
};

export default Button;
