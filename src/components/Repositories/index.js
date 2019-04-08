import { connect } from 'react-redux';
import { selectors, actions } from '../../state/modules/repositories';
import Repositories from './Repositories';

const mapStateToProps = (state) => ({
  hasRepositories: selectors.hasRepositories(state),
  isFetching: selectors.isFetching(state),
  repositories: selectors.getRepositories(state),
});

const mapDispatchToProps = {
  fetchRepositories: actions.fetchRepositories,
};

const ConnectedRepositories = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);

export default Repositories;
export { ConnectedRepositories };
