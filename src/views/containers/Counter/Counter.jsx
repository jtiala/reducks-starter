import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import {
  selectors as counterSelectors,
  operations as counterOperations,
} from '../../../state/modules/counter';
import Button from '../../components/Button';
import styles from './Counter.scss';

export const Counter = (props) => {
  const counterStyles = classNames(styles.number, {
    [styles.positive]: props.isPositive,
    [styles.negative]: props.isNegative,
  });

  return (
    <section>
      <Button onClick={props.decrement}>
        <span role="img" aria-label="minus">➖</span>
      </Button>
      <span className={counterStyles}>{props.count}</span>
      <Button onClick={props.increment}>
        <span role="img" aria-label="plus">➕</span>
      </Button>
      <br /><br />
      <Button onClick={props.resetAndGotoHome}>
        Reset counter and go to home
      </Button>
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

const mapStateToProps = state => ({
  count: counterSelectors.getCount(state),
  isNegative: counterSelectors.isCountNegative(state),
  isPositive: counterSelectors.isCountPositive(state),
});

const mapDispatchToProps = {
  decrement: counterOperations.decrement,
  increment: counterOperations.increment,
  resetAndGotoHome: counterOperations.resetAndGotoHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
