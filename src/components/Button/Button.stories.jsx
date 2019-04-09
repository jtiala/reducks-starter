import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Reducks Starter</Button>)
  .add('with emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="Reducks Starter">
        🦆 👌
      </span>
    </Button>
  ))
  .add('with multiple children', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="Reducks Starter">
        🦆
      </span>
      <span> | </span>
      Reducks Starter
    </Button>
  ));
