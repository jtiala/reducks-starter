import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import styles from './Counter.scss';

const Counter = ({ count, decrement, increment, isNegative, isPositive, resetAndGotoHome }) => {
  const counterClasses = classNames(styles.number, {
    [styles.positive]: isPositive,
    [styles.negative]: isNegative,
  });

  return (
    <section>
      <Button onClick={decrement}>
        <span role="img" aria-label="minus">
          ➖
        </span>
      </Button>
      <span className={counterClasses}>{count}</span>
      <Button onClick={increment}>
        <span role="img" aria-label="plus">
          ➕
        </span>
      </Button>
      <br />
      <br />
      <Button onClick={resetAndGotoHome}>Reset counter and go to home</Button>
    </section>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired,
  isNegative: PropTypes.bool.isRequired,
  isPositive: PropTypes.bool.isRequired,
  resetAndGotoHome: PropTypes.func.isRequired,
};

export default Counter;
