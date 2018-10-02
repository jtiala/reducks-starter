import React from 'react';
import PropTypes from 'prop-types';
import { OrderedSet } from 'immutable';
import Button from '../Button';
import styles from './RepositoryList.scss';

const RepositoryList = ({ fetchRepositories, hasRepositories, repositories }) => (
  <div className={styles.root}>
    {hasRepositories ? (
      <ul>
        {repositories.map((repository) => (
          <li key={`repo-${repository.id}`}>{repository.name}</li>
        ))}
      </ul>
    ) : (
      <Button onClick={fetchRepositories}>Fetch public repositories from GitHub</Button>
    )}
  </div>
);

RepositoryList.propTypes = {
  fetchRepositories: PropTypes.func.isRequired,
  hasRepositories: PropTypes.bool.isRequired,
  repositories: PropTypes.instanceOf(OrderedSet).isRequired,
};

export default RepositoryList;
