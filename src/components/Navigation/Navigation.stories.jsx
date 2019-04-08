import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Navigation from './Navigation';

storiesOf('Navigation', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Navigation />);
