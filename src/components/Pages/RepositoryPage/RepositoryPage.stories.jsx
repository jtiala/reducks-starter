import React from 'react';
import { OrderedSet } from 'immutable';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mocks, transformers } from '../../../state/apis/github';
import RepositoryPage from './RepositoryPage';

const props = {
  fetchRepositories: action('fetchRepositories'),
  hasRepositories: true,
  isFetching: false,
  repositories: transformers.getRepositories(mocks.getRepositoriesSuccess),
};

storiesOf('Pages/RepositoryPage', module)
  .add('default', () => <RepositoryPage {...props} />)
  .add('is fetching', () => <RepositoryPage {...props} isFetching />)
  .add('no repositories', () => (
    <RepositoryPage {...props} hasRepository={false} repositories={OrderedSet()} />
  ));
