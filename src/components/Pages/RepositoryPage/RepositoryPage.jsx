import React from 'react';
import PropTypes from 'prop-types';
import { OrderedSet } from 'immutable';
import { mocks } from '../../../state/apis/github';
import Button from '../../Common/Button';
import RepositoryList from './RepositoryList';

const RepositoryPage = ({ fetchRepositories, hasRepositories, isFetching, repositories }) => (
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

RepositoryPage.propTypes = {
  fetchRepositories: PropTypes.func.isRequired,
  hasRepositories: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  repositories: PropTypes.instanceOf(OrderedSet).isRequired,
};

export default RepositoryPage;
