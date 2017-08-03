import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from './Button';

let spyOnClick;

const setup = (name, disabled = false) => {
  const props = {
    onClick: spyOnClick,
    name,
    disabled,
  };
  return shallow(<Button {...props} />);
};

beforeEach(() => {
  spyOnClick = sinon.spy();
});

it('should render the button with button class when not disabled', () => {
  const wrapper = setup('button');
  expect(wrapper.find('a.button').exists()).toBeTruthy();
});

it('should render the button with button and disabled class when disabled', () => {
  const wrapper = setup('button', true);
  expect(wrapper.find('a.button.disabled').exists()).toBeTruthy();
});

it('should render button with right name', () => {
  const wrapper = setup('button');
  expect(wrapper.text()).toBe('button');
});

it('should call onClick prop method when being clicked and not disabled', () => {
  const wrapper = setup('button');
  wrapper.find('a.button').simulate('click');
  sinon.assert.calledOnce(spyOnClick);
});

it('should not call onClick prop method when being clicked and disabled', () => {
  const wrapper = setup('button', true);
  wrapper.find('a.button').simulate('click');
  sinon.assert.notCalled(spyOnClick);
});





