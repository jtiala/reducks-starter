import React from 'react';
import { shallow, mount } from 'enzyme';
import Counter from './Counter';
import Button from '../Button';

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

  it('calls onClick handlers', () => {
    const wrapper = mount(<Counter {...props} />);
    const buttons = wrapper.find(Button);

    buttons.at(0).simulate('click');
    expect(props.decrement.mock.calls.length).toEqual(1);

    buttons.at(1).simulate('click');
    expect(props.increment.mock.calls.length).toEqual(1);
  });
});
