import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.scss';
import Header from './Header';
import HomePage from '../Pages/HomePage';
import { ConnectedCounterPage } from '../Pages/CounterPage';
import { ConnectedRepositoryPage } from '../Pages/RepositoryPage';

export const App = () => (
  <div className={styles.root}>
    <Header />
    <main>
      <Switch>
        <Route exact path="/counter">
          <ConnectedCounterPage />
        </Route>
        <Route exact path="/repositories">
          <ConnectedRepositoryPage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
