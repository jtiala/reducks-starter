# 🦆 Reducks Starter

[![Build Status][build-status-badge]][build-status]
[![Dependencies Status][dependencies-status-badge]][dependencies-status]
[![Dev Dependencies Status][devdependencies-status-badge]][devdependencies-status]
[![PRs Welcome][prs-badge]][contributing]
[![License][license-badge]](license)

> Reducks Starter is a highly opinionated React/Redux boilerplate based on the [re-ducks approach][re-ducks]. Live example [here][example].

## Table of Contents

1. [Why](#why)
2. [Why Not](#why-not)
3. [What](#what)
4. [How](#how)
5. [Changelog](#changelog)
6. [Contributing](#contributing)
7. [License](#license)

## Why

The primary goal of Reducks Starter is to be a boilerplate [I myself][jtiala] like to use while also giving lots of examples to be easily adoptable for others.

After evaluating other boilerplates and starter projects, I didn't find any that I would be happy to use as the foundation for my own projects. I really like the [ducks approach][ducks] by [erikras][erikras]. The [re-ducks][re-ducks] extension by [alexnm][alexnm] makes it even better. I also like to have my Redux store to be based on [Immutable.js][immutable] records. Not many boilerplates have these features and as most of them are multiple versions out of the date, it's difficult to add them in. So, clearly there is room for yet another boilerplate, right?

## Why not

While this boilerplate is easy way to start a new project quickly without messing around with packages and configs, it might be too much for some projects. Every project might not need everything included in Reducks Starter. You might prefer [styled-components][styled-components] over [CSS Modules][css-modules]. Someone might think [Immutable.js][immutable] is unnecessary and only adds to the weight. Sometimes removing stuff can take more time than just starting from the beginning, so you should consider your options before using any boilerplate.

Like stated before, this is boilerplate with the features and structure I like the best. Creating your own boilerplate is lot of fun and really good learning experience so I highly encourage you to start from a blank page, if you have the time.

## What

- [React v16][react] with [React Router v4][react-router]
- [Redux v4][redux] with [Immutable.js v4][immutable] based store tree
- [Re-ducks][re-ducks] inspired modules
- Custom REST API middleware completed with mocking and transforming functionalities
- [CSS Modules][css-modules] with [Sass][sass]
- Tests with [Jest][jest] and [Enzyme][enzyme]
- Next generation JavaScript with [Babel v7][babel]
- Bundling with [Webpack v4][webpack]
- Formatting and linting with [Prettier][prettier], [ESLint][eslint] and [Stylelint][stylelint]
- [Storybook][storybook], [Redux DevTools][redux-dev-tools] and [Webpack DevServer][webpack-dev-server] with hot module replacement (HMR) for pleasant developer experience
- **Examples for everything included!**

### Project structure

<!--
To generate this, use
tree --dirsfirst -I 'node_modules|coverage|LICENSE|README.md|*config.js|package.json|yarn.lock|*.png|*.ico'
-->

```
.
└── src
    ├── state
    │   ├── apis
    │   │   └── github
    │   │       ├── index.js
    │   │       ├── mocks.js
    │   │       ├── requests.js
    │   │       └── transformers.js
    │   ├── middleware
    │   │   └── rest.js
    │   ├── modules
    │   │   ├── counter
    │   │   │   ├── actions.js
    │   │   │   ├── index.js
    │   │   │   ├── records.js
    │   │   │   ├── reducers.js
    │   │   │   ├── selectors.js
    │   │   │   ├── test.js
    │   │   │   ├── thunks.js
    │   │   │   └── types.js
    │   │   ├── repositories
    │   │   │   ├── actions.js
    │   │   │   ├── index.js
    │   │   │   ├── records.js
    │   │   │   ├── reducers.js
    │   │   │   ├── selectors.js
    │   │   │   ├── test.js
    │   │   │   └── types.js
    │   │   ├── router
    │   │   │   ├── index.js
    │   │   │   └── test.js
    │   │   └── index.js
    │   ├── utils
    │   │   └── actions.js
    │   └── store.js
    ├── static
    │   ├── icons
    │   ├── manifest.json
    │   └── sw.js
    ├── views
    │   ├── components
    │   │   ├── Button
    │   │   │   ├── Button.jsx
    │   │   │   ├── Button.scss
    │   │   │   ├── Button.stories.jsx
    │   │   │   ├── Button.test.jsx
    │   │   │   └── index.js
    │   │   ├── Header
    │   │   │   ├── Header.jsx
    │   │   │   ├── Header.stories.jsx
    │   │   │   ├── Header.test.jsx
    │   │   │   └── index.js
    │   │   ├── Navigation
    │   │   │   ├── Navigation.jsx
    │   │   │   ├── Navigation.scss
    │   │   │   ├── Navigation.stories.jsx
    │   │   │   ├── Navigation.test.jsx
    │   │   │   └── index.js
    │   │   └── RepositoryList
    │   │       ├── RepositoryList.jsx
    │   │       ├── RepositoryList.scss
    │   │       ├── RepositoryList.stories.jsx
    │   │       ├── RepositoryList.test.jsx
    │   │       └── index.js
    │   ├── containers
    │   │   ├── App
    │   │   │   ├── App.jsx
    │   │   │   ├── App.scss
    │   │   │   ├── App.stories.jsx
    │   │   │   ├── App.test.jsx
    │   │   │   └── index.js
    │   │   ├── Counter
    │   │   │   ├── Counter.jsx
    │   │   │   ├── Counter.scss
    │   │   │   ├── Counter.stories.jsx
    │   │   │   ├── Counter.test.jsx
    │   │   │   └── index.js
    │   │   ├── Home
    │   │   │   ├── Home.jsx
    │   │   │   ├── Home.scss
    │   │   │   ├── Home.stories.jsx
    │   │   │   ├── Home.test.jsx
    │   │   │   └── index.js
    │   │   └── Repositories
    │   │       ├── Repositories.jsx
    │   │       ├── Repositories.stories.jsx
    │   │       ├── Repositories.test.jsx
    │   │       └── index.js
    │   └── styles
    │       ├── _breakpoints.scss
    │       ├── _colors.scss
    │       ├── _globals.scss
    │       └── _mixins.scss
    ├── index.html
    ├── index.jsx
    ├── index.scss
    └── setupTests.js
```

## How

### Requirements

- [Git][git]
- [Node][node]
- [Yarn][yarn]

### Usage

Clone this repository and edit `package.json` to make it your own.

```bash
$ git clone https://github.com/jtiala/reducks-starter.git <my-project-name>
$ cd <my-project-name>
```

Install dependencies

```bash
$ yarn
```

Build for production

```bash
$ yarn build
```

Run development server

```bash
$ yarn start
```

Run tests

```bash
$ yarn test
```

Or run tests automatically every time a file changes

```bash
$ yarn test:watch
```

Generate test coverage report

```bash
$ yarn test:coverage
```

Run linters. For more linting scripts, take a look at `package.json`.

```bash
$ yarn lint
```

Build and start Storybook

```bash
$ yarn storybook
```

## Changelog

### 1.0.0 (xxxx-xx-xx)

- Initial release 🎉

## Contributing

While this project's main focus is to be my idea of a perfect boilerplate, I'm also happy to hear your ideas! If you would like to contribute to Reducks Starter, please discuss the changes you want to make in the [project's issues][issues] first!

## License

This project is open source software licensed under the MIT license. For more information see [LICENSE][license].

[build-status]: https://travis-ci.com/jtiala/reducks-starter
[build-status-badge]: https://travis-ci.com/jtiala/reducks-starter.svg?branch=master
[dependencies-status]: https://david-dm.org/jtiala/reducks-starter
[dependencies-status-badge]: https://img.shields.io/david/jtiala/reducks-starter.svg
[devdependencies-status]: https://david-dm.org/jtiala/reducks-starter?type=dev
[devdependencies-status-badge]: https://img.shields.io/david/dev/jtiala/reducks-starter.svg
[contributing]: #contributing
[prs-badge]: https://img.shields.io/badge/prs-welcome-blue.svg
[license]: https://github.com/jtiala/reducks-starter/blob/master/LICENSE
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[example]: https://jtiala.github.io/reducks-starter/
[ducks]: https://github.com/erikras/ducks-modular-redux
[erikras]: https://github.com/erikras
[re-ducks]: https://github.com/alexnm/re-ducks
[alexnm]: https://github.com/alexnm
[jtiala]: https://github.com/jtiala
[react]: https://reactjs.org/
[redux]: https://redux.js.org/
[immutable]: https://facebook.github.io/immutable-js/
[react-router]: https://github.com/ReactTraining/react-router
[css-modules]: https://github.com/css-modules/css-modules
[sass]: https://sass-lang.com/
[jest]: https://jestjs.io/
[enzyme]: https://github.com/airbnb/enzyme
[babel]: https://babeljs.io/
[webpack]: https://webpack.js.org/
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[stylelint]: https://stylelint.io/
[storybook]: https://storybook.js.org/
[redux-dev-tools]: http://extension.remotedev.io/
[webpack-dev-server]: https://webpack.js.org/configuration/dev-server/
[styled-components]: https://www.styled-components.com/
[git]: https://git-scm.com/
[node]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[issues]: https://github.com/jtiala/reducks-starter/issues
