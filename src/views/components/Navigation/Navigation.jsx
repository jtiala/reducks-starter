import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.scss';

const Navigation = () => (
  <nav className={styles.root}>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/counter">Counter</NavLink></li>
      <li><NavLink to="/repositories">Repositories</NavLink></li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/jtiala/reducks-starter"
        >
          GitHub
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
