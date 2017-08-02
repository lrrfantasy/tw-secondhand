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

it('should set 0 as the active index when first rendered', () => {
  const wrapper = setup();
  expect(wrapper.state('activeIdx')).toBe(0);
});

it('should set the index of clicked button as active index', () => {
  const wrapper = setup();
  wrapper.find('a').at(0).simulate('click');
  expect(wrapper.state('activeIdx')).toBe(0);
});
