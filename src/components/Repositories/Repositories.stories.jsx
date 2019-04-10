import React from 'react';
import { OrderedSet } from 'immutable';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { mocks, transformers } from '../../state/apis/github';
import Repositories from './Repositories';

const props = {
  fetchRepositories: action('fetchRepositories'),
  hasRepositories: true,
  isFetching: false,
  repositories: transformers.getRepositories(mocks.getRepositoriesSuccess),
};

storiesOf('Repositories', module)
  .add('default', () => <Repositories {...props} />)
  .add('is fetching', () => <Repositories {...props} isFetching />)
  .add('no repositories', () => (
    <Repositories {...props} hasRepositories={false} repositories={OrderedSet()} />
  ));
