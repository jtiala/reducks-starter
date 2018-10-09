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

export const Repositories = ({ fetchRepositories, hasRepositories, repositories }) => (
  <section>
    <Button onClick={() => fetchRepositories()}>Fetch public repositories from GitHub</Button>
    <Button onClick={() => fetchRepositories(mocks.getRepositoriesSuccess)}>
      Fetch public repositories from GitHub (using a mock)
    </Button>
    <RepositoryList hasRepositories={hasRepositories} repositories={repositories} />
  </section>
);

Repositories.propTypes = {
  fetchRepositories: PropTypes.func.isRequired,
  hasRepositories: PropTypes.bool.isRequired,
  repositories: PropTypes.instanceOf(OrderedSet).isRequired,
};

const mapStateToProps = (state) => ({
  hasRepositories: repositoriesSelectors.hasRepositories(state),
  repositories: repositoriesSelectors.getRepositories(state),
});

const mapDispatchToProps = {
  fetchRepositories: repositoriesActions.fetchRepositories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories);
