export const getRepositories = state => state.getIn(['repositories', 'data']);
export const hasRepositories = state => getRepositories(state).size > 0;
