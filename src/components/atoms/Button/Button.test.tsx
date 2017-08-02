import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import Button from './Button';

const spyOnClick = sinon.spy();
const setup = () => {
  const props = {
    classes: 'class',
    onClick: spyOnClick,
    children: <p>hello</p>,
  }
  return shallow(<Button {...props} />);
};

it('should render the button with right class name', () => {
  const wrapper = setup();
  expect(wrapper.find('a.class').exists()).toBeTruthy();
});

it('should call onClick prop method when being clicked', () => {
  const wrapper = setup();
  wrapper.find('a.class').simulate('click');
  sinon.assert.calledOnce(spyOnClick);
});

it('should render button with prop children', () => {
  const wrapper = setup();
  expect(wrapper.containsMatchingElement(<p>hello</p>)).toBeTruthy();
});

