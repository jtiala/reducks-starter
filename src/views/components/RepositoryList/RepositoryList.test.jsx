import React from 'react';
import { shallow } from 'enzyme';
import { OrderedSet } from 'immutable';
import RepositoryList from './RepositoryList';

describe('<RepositoryList />', () => {
  const props = {
    hasRepositories: false,
    repositories: OrderedSet(),
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<RepositoryList {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('has right classes', () => {
    const wrapper = shallow(<RepositoryList {...props} />);

    expect(wrapper.hasClass('root')).toBe(true);
  });
});
