import React from 'react';
import { shallow } from 'enzyme';
import { OrderedSet } from 'immutable';
import RepositoryPage from './RepositoryPage';

describe('<RepositoryPage />', () => {
  const props = {
    fetchRepositories: jest.fn(),
    hasRepositories: false,
    isFetching: false,
    repositories: OrderedSet(),
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<RepositoryPage {...props} />);

    expect(wrapper.exists()).toBe(true);
  });
});
