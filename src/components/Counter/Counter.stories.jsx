import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Counter from './Counter';

const props = {
  count: 0,
  decrement: action('decrement'),
  increment: action('increment'),
  isNegative: false,
  isPositive: false,
  resetAndGotoHome: action('resetAndGotoHome'),
};

storiesOf('Counter', module)
  .add('default', () => <Counter {...props} />)
  .add('isNegative', () => <Counter {...props} count={-1} isNegative />)
  .add('isPositive', () => <Counter {...props} count={1} isPositive />);
