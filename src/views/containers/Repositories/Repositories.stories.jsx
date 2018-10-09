import React from 'react';
import { OrderedSet } from 'immutable';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import { mocks, transformers } from '../../../state/apis/github';
import { Repositories } from './Repositories';

const repositories = transformers.getRepositories(mocks.getRepositoriesSuccess);

storiesOf('containers/Repositories', module)
  .addDecorator(StoryRouter())
  .add('has repositories', () => (
    <Repositories
      fetchRepositories={action('fetchRepositories')}
      hasRepositories
      repositories={repositories}
    />
  ))
  .add('no repositories', () => (
    <Repositories
      fetchRepositories={action('fetchRepositories')}
      hasRepositories
      repositories={OrderedSet()}
    />
  ));
