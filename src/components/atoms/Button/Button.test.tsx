import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from './Button';

const spyOnClick = sinon.spy();

const setup = (name = 'hello') => {
  const props = {
    onClick: spyOnClick,
    name,
  };
  return shallow(<Button {...props} />);
};

it('should render the button with button class', () => {
  const wrapper = setup();
  expect(wrapper.find('a.button').exists()).toBeTruthy();
});

it('should render button with right name', () => {
  const wrapper = setup('button');
  expect(wrapper.text()).toBe('button');
});

it('should call onClick prop method when being clicked', () => {
  const wrapper = setup();
  wrapper.find('a.button').simulate('click');
  sinon.assert.calledOnce(spyOnClick);
});





