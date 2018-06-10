import { Record, OrderedSet } from 'immutable';

export const Owner = Record({
  login: undefined,
  id: undefined,
  avatar_url: undefined,
  html_url: undefined,
});

export const Repository = Record({
  id: undefined,
  name: undefined,
  description: undefined,
  html_url: undefined,
  owner: Owner(),
});

export const Repositories = Record({
  data: OrderedSet(),
});
