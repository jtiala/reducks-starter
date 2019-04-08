import React from 'react';
import { OrderedSet } from 'immutable';
import { storiesOf } from '@storybook/react';
import { mocks, transformers } from '../../../state/apis/github';
import RepositoryList from './RepositoryList';

const repositories = transformers.getRepositories(mocks.getRepositoriesSuccess);

storiesOf('components/RepositoryList', module)
  .add('has repositories', () => (
    <RepositoryList hasRepositories isFetching={false} repositories={repositories} />
  ))
  .add('is fetching', () => (
    <RepositoryList hasRepositories={false} isFetching={true} repositories={OrderedSet()} />
  ))
  .add('no repositories', () => (
    <RepositoryList hasRepositories={false} isFetching={false} repositories={OrderedSet()} />
  ));
