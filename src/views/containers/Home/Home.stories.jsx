import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Home } from './Home';

storiesOf('containers/Home', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Home />);
