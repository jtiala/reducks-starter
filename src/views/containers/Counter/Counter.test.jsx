import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

describe('<Counter />', () => {
  const props = {
    count: 0,
    decrement: jest.fn(),
    increment: jest.fn(),
    isNegative: false,
    isPositive: false,
    resetAndGotoHome: jest.fn(),
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<Counter {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('displays correct count', () => {
    const wrapper = shallow(<Counter {...props} />);

    expect(wrapper.find('.number').text()).toBe(String(props.count));
  });
});
