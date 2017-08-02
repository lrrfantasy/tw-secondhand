import * as React from 'react';
import {mount} from 'enzyme';
import MenuBar from './MenuBar';

const setup = () => {
  return mount(<MenuBar />);
};

it('should render three buttons', () => {
  const wrapper = setup();
  expect(wrapper.find('Button').length).toBe(3);
});

it('should set right state when first rendered', () => {
  const wrapper = setup();
  expect(wrapper.state('homeActive')).toBe(true);
  expect(wrapper.state('menuActive')).toBe(false);
  expect(wrapper.state('userActive')).toBe(false);
});

it('should set right state when clicking home button', () => {
  const wrapper = setup();
  wrapper.find('a.homeButton').simulate('click');
  expect(wrapper.state('homeActive')).toBe(true);
  expect(wrapper.state('menuActive')).toBe(false);
  expect(wrapper.state('userActive')).toBe(false);
});

it('should set right state when clicking menu button', () => {
  const wrapper = setup();
  wrapper.find('a.menuButton').simulate('click');
  expect(wrapper.state('homeActive')).toBe(false);
  expect(wrapper.state('menuActive')).toBe(true);
  expect(wrapper.state('userActive')).toBe(false);
});

it('should set right state when clicking user button', () => {
  const wrapper = setup();
  wrapper.find('a.userButton').simulate('click');
  expect(wrapper.state('homeActive')).toBe(false);
  expect(wrapper.state('menuActive')).toBe(false);
  expect(wrapper.state('userActive')).toBe(true);
});
