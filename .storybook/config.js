import { configure } from '@storybook/react';
import '../src/styles/index.scss';

// Automatically import all files ending in *.stories.jsx
const req = require.context('../src/components/', true, /.stories.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
