import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OrderedSet } from 'immutable';
import {
  selectors as repositoriesSelectors,
  actions as repositoriesActions,
} from '../../../state/modules/repositories';
import { mocks } from '../../../state/apis/github';
import Button from '../../components/Button';
import RepositoryList from '../../components/RepositoryList';

export const Repositories = ({ fetchRepositories, hasRepositories, isFetching, repositories }) => (
  <section>
    <Button onClick={() => fetchRepositories()}>Fetch public repositories from GitHub</Button>
    <Button onClick={() => fetchRepositories(mocks.getRepositoriesSuccess)}>
      Fetch public repositories from GitHub (using a mock)
    </Button>
    <RepositoryList
      hasRepositories={hasRepositories}
      isFetching={isFetching}
      repositories={repositories}
    />
  </section>
);

Repositories.propTypes = {
  fetchRepositories: PropTypes.func.isRequired,
  hasRepositories: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  repositories: PropTypes.instanceOf(OrderedSet).isRequired,
};

const mapStateToProps = (state) => ({
  hasRepositories: repositoriesSelectors.hasRepositories(state),
  isFetching: repositoriesSelectors.isFetching(state),
  repositories: repositoriesSelectors.getRepositories(state),
});

const mapDispatchToProps = {
  fetchRepositories: repositoriesActions.fetchRepositories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
