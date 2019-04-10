import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CounterPage from './CounterPage';

const props = {
  count: 0,
  decrement: action('decrement'),
  increment: action('increment'),
  isNegative: false,
  isPositive: false,
  resetAndGotoHome: action('resetAndGotoHome'),
};

storiesOf('Pages/CounterPage', module)
  .add('default', () => <CounterPage {...props} />)
  .add('isNegative', () => <CounterPage {...props} count={-1} isNegative />)
  .add('isPositive', () => <CounterPage {...props} count={1} isPositive />);
