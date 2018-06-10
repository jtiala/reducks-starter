export const getCount = state => state.getIn(['counter', 'count']);
export const isCountNegative = state => state.getIn(['counter', 'count']) < 0;
export const isCountPositive = state => state.getIn(['counter', 'count']) > 0;
