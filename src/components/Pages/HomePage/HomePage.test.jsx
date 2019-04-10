import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<HomePage />);

    expect(wrapper.exists()).toBe(true);
  });
});
