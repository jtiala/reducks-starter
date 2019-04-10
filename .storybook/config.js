import { configure, addDecorator } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import StoryRouter from 'storybook-react-router';
import '../src/styles/index.scss';
import './storybook.scss';

// Use StoryRouter in all stories
addDecorator(
  StoryRouter({
    '/': linkTo('Pages/HomePage', 'default'),
    '/counter': linkTo('Pages/CounterPage', 'default'),
    '/repositories': linkTo('Pages/RepositoryPage', 'default'),
  }),
);

// Automatically import all files ending in *.stories.jsx
const req = require.context('../src/components/', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
