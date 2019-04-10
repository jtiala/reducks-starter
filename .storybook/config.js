import { configure, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-react-router';
import '../src/styles/index.scss';
import './storybook.scss';

// Use StoryRouter in all stories
addDecorator(
  StoryRouter({
    '/': linkTo('App', 'default'),
    '/counter': linkTo('Counter', 'default'),
    '/repositories': linkTo('Repositories', 'default'),
  }),
);

// Automatically import all files ending in *.stories.jsx
const req = require.context('../src/components/', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
