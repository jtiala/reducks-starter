import React from 'react';
import PropTypes from 'prop-types';
import { OrderedSet } from 'immutable';
import { mocks } from '../../../state/apis/github';
import Button from '../Button';
import styles from './RepositoryList.scss';

const RepositoryList = ({ fetchRepositories, hasRepositories, repositories }) => (
  <div className={styles.root}>
    <Button onClick={() => fetchRepositories()}>Fetch public repositories from GitHub</Button>
    <Button onClick={() => fetchRepositories(mocks.getRepositoriesSuccess.body)}>
      Fetch public repositories from GitHub (using a mock)
    </Button>
    {hasRepositories && (
      <ul>
        {repositories.map((repository) => (
          <li key={`repo-${repository.id}`}>
            <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
              {repository.name}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);

RepositoryList.propTypes = {
  fetchRepositories: PropTypes.func.isRequired,
  hasRepositories: PropTypes.bool.isRequired,
  repositories: PropTypes.instanceOf(OrderedSet).isRequired,
};

export default RepositoryList;
