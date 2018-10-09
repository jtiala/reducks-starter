import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { App } from './App';

storiesOf('containers/App', module)
  .addDecorator(StoryRouter())
  .add('default', () => <App />);
