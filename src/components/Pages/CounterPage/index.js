import { connect } from 'react-redux';
import { selectors, actions, thunks } from '../../../state/modules/counter';
import CounterPage from './CounterPage';

const mapStateToProps = (state) => ({
  count: selectors.getCount(state),
  isNegative: selectors.isCountNegative(state),
  isPositive: selectors.isCountPositive(state),
});

const mapDispatchToProps = {
  decrement: actions.decrement,
  increment: actions.increment,
  resetAndGotoHome: thunks.resetAndGotoHome,
};

const ConnectedCounterPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterPage);

export default CounterPage;
export { ConnectedCounterPage };
