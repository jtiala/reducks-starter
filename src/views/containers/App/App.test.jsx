import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it('has right classes', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.hasClass('root')).toBe(true);
  });
});
