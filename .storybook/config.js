import { configure } from '@storybook/react';

// Automatically import all files ending in *.stories.jsx
const req = require.context('../src/views/', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
