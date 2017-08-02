import * as React from 'react';
import * as sinon from 'sinon';
import { shallow } from 'enzyme';
import IconButton from './IconButton';

const spyOnClick = sinon.spy();

const setup = (active = false) => {
  const props = {
    active,
    onClick: spyOnClick,
    children: <p>hello</p>,
  };
  return shallow(<IconButton {...props} />);
};

it('should render the button with iconButtonNormal class when not active', () => {
  const wrapper = setup(false);
  expect(wrapper.find('a.iconButtonNormal').exists()).toBeTruthy();
});

it('should render the button with iconButtonActive class when active', () => {
  const wrapper = setup(true);
  expect(wrapper.find('a.iconButtonActive').exists()).toBeTruthy();
});

it('should render button with prop children', () => {
  const wrapper = setup();
  expect(wrapper.containsMatchingElement(<p>hello</p>)).toBeTruthy();
});

it('should call onClick prop method when being clicked', () => {
  const wrapper = setup();
  wrapper.find('a').simulate('click');
  sinon.assert.calledOnce(spyOnClick);
});





