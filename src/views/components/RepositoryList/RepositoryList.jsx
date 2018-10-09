import React from 'react';
import PropTypes from 'prop-types';
import { OrderedSet } from 'immutable';
import styles from './RepositoryList.scss';

const RepositoryList = ({ hasRepositories, repositories }) => (
  <div className={styles.root}>
    {hasRepositories ? (
      <ul>
        {repositories.map((repository) => (
          <li key={`repo-${repository.id}`}>
            <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
              {repository.name}
            </a>
          </li>
        ))}
      </ul>
    ) : (
      <p>No repositories.</p>
    )}
  </div>
);

RepositoryList.propTypes = {
  hasRepositories: PropTypes.bool.isRequired,
  repositories: PropTypes.instanceOf(OrderedSet).isRequired,
};

export default RepositoryList;
