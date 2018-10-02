import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OrderedSet } from 'immutable';
import {
  selectors as repositoriesSelectors,
  actions as repositoriesActions,
} from '../../../state/modules/repositories';
import RepositoryList from '../../components/RepositoryList';

export const Repositories = ({ fetchRepositories, hasRepositories, repositories }) => (
  <section>
    <RepositoryList
      fetchRepositories={fetchRepositories}
      hasRepositories={hasRepositories}
      repositories={repositories}
    />
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
