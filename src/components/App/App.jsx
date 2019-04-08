import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.scss';
import Header from '../Header';
import Home from '../Home';
import { ConnectedCounter } from '../Counter';
import { ConnectedRepositories } from '../Repositories';

export const App = () => (
  <div className={styles.root}>
    <Header />
    <main>
      <Switch>
        <Route exact path="/counter" component={ConnectedCounter} />
        <Route exact path="/repositories" component={ConnectedRepositories} />
        <Route component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
