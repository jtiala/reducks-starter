import { connect } from 'react-redux';
import { selectors, actions, thunks } from '../../state/modules/counter';
import Counter from './Counter';

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

const ConnectedCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default Counter;
export { ConnectedCounter };
