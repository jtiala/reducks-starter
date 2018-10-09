import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Header from './Header';

storiesOf('components/Header', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Header />);
