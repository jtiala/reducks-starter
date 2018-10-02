import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  selectors as counterSelectors,
  actions as counterActions,
  thunks as counterThunks,
} from '../../../state/modules/counter';
import Button from '../../components/Button';
import styles from './Counter.scss';

export const Counter = ({
  count,
  decrement,
  increment,
  isNegative,
  isPositive,
  resetAndGotoHome,
}) => {
  const counterStyles = classNames(styles.number, {
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
      <span className={counterStyles}>{count}</span>
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

const mapStateToProps = (state) => ({
  count: counterSelectors.getCount(state),
  isNegative: counterSelectors.isCountNegative(state),
  isPositive: counterSelectors.isCountPositive(state),
});

const mapDispatchToProps = {
  decrement: counterActions.decrement,
  increment: counterActions.increment,
  resetAndGotoHome: counterThunks.resetAndGotoHome,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
