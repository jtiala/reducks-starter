import { connect } from 'react-redux';
import { selectors, actions } from '../../../state/modules/repositories';
import RepositoryPage from './RepositoryPage';

const mapStateToProps = (state) => ({
  hasRepositories: selectors.hasRepositories(state),
  isFetching: selectors.isFetching(state),
  repositories: selectors.getRepositories(state),
});

const mapDispatchToProps = {
  fetchRepositories: actions.fetchRepositories,
};

const ConnectedRepositoryPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RepositoryPage);

export default RepositoryPage;
export { ConnectedRepositoryPage };
