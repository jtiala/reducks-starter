import React from 'react';
import { shallow } from 'enzyme';
import { OrderedSet } from 'immutable';
import Repositories from './Repositories';

describe('<Repositories />', () => {
  const props = {
    fetchRepositories: jest.fn(),
    hasRepositories: false,
    isFetching: false,
    repositories: OrderedSet(),
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Repositories {...props} />);

    expect(wrapper.exists()).toBe(true);
  });
});
