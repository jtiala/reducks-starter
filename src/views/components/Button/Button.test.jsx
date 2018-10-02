import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.exists()).toBe(true);
  });

  it('has right classes', () => {
    const wrapper = shallow(<Button />);

    expect(wrapper.hasClass('root')).toBe(true);
  });

  it('calls onClick handler', () => {
    const mockOnClick = jest.fn();
    const wrapper = shallow(<Button onClick={mockOnClick} />);

    wrapper.simulate('click');

    expect(mockOnClick.mock.calls.length).toEqual(1);
  });

  it('renders children when passed in', () => {
    const child = <div className="child" />;
    const wrapper = shallow(<Button>{child}</Button>);

    expect(wrapper.contains(child)).toBe(true);
  });
});
