import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

describe('<Navigation />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navigation />);

    expect(wrapper.exists()).toBe(true);
  });

  it('has right classes', () => {
    const wrapper = shallow(<Navigation />);

    expect(wrapper.hasClass('root')).toBe(true);
  });
});
