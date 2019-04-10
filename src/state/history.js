import { createBrowserHistory } from 'history';

export default createBrowserHistory({
  basename: process.env.PUBLIC_PATH,
});
