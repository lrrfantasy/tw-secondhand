import * as React from 'react';
import { shallow } from 'enzyme';
import InputField from './InputField';

const placeholderText = "InputField"
it('InputField shallow renders text for placeholder', () => {
  const wrapper = shallow(<InputField placeholder={placeholderText}/>);

  expect(wrapper.find('input').props().placeholder).toBe(placeholderText);
});

it('InputField shallow renders input field of password type when the props isPasswordField is true', () => {
  const wrapper = shallow(<InputField placeholder={placeholderText} isPasswordField/>);

  expect(wrapper.find('input').props().type).toBe('password');
});

it('InputField shallow renders input field of text type when the props isPasswordField is not present', () => {
  const wrapper = shallow(<InputField placeholder={placeholderText} />);

  expect(wrapper.find('input').props().type).toBe('text');
});
