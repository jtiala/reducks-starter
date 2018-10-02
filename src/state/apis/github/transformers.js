import { OrderedSet } from 'immutable';
import { Repository, Owner } from '../../modules/repositories/records';

// Helpers
export const transformOwner = (owner) =>
  Owner({
    ...owner,
    id: parseInt(owner.id, 10),
  });

export const transformRepository = (repository) =>
  Repository({
    ...repository,
    id: parseInt(repository.id, 10),
    owner: transformOwner(repository.owner),
  });

// Requests
export const getRepositories = (payload) =>
  Array.isArray(payload) ? OrderedSet(payload.slice(0, 5).map(transformRepository)) : OrderedSet();
