import React from 'react';
import { OrderedSet } from 'immutable';
import { storiesOf } from '@storybook/react';
import { mocks, transformers } from '../../state/apis/github';
import RepositoryList from './RepositoryList';

const props = {
  hasRepositories: true,
  isFetching: false,
  repositories: transformers.getRepositories(mocks.getRepositoriesSuccess),
};

storiesOf('RepositoryList', module)
  .add('default', () => <RepositoryList {...props} />)
  .add('is fetching', () => <RepositoryList {...props} isFetching />)
  .add('no repositories', () => (
    <RepositoryList {...props} hasRepositories={false} repositories={OrderedSet()} />
  ));
