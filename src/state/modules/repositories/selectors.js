// data
export const getRepositories = (state) => state.getIn(['repositories', 'data']);
export const hasRepositories = (state) => getRepositories(state).size > 0;

// status
export const isFetching = (state) => state.getIn(['repositories', 'status', 'fetching']);
export const getError = (state) => state.getIn(['repositories', 'status', 'error']);
export const hasError = (state) => getError(state) !== undefined;
