import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../../containers/Home';
import Counter from '../../containers/Counter';
import Repositories from '../../containers/Repositories';
import styles from './App.scss';

export const App = () => (
  <div className={styles.root}>
    <Header />
    <main>
      <Switch>
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/repositories" component={Repositories} />
        <Route component={Home} />
      </Switch>
    </main>
  </div>
);

export default App;
