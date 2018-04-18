const name = 'counter';

export const getCount = state => state.getIn([name, 'count']);
export const isCountNegative = state => state.getIn([name, 'count']) < 0;
export const isCountPositive = state => state.getIn([name, 'count']) > 0;
