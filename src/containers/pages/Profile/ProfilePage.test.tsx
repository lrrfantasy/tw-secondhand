import * as React from 'react';
import { mount } from 'enzyme';
import ProfilePage from './ProfilePage';

const setup = () => {
  const props = {
    name: 'name',
  };

  return mount(<ProfilePage {...props}/>);
};

it('should render Container component', () => {
  const wrapper = setup();
  expect(wrapper.find('Container').exists()).toBeTruthy();
});

it('should render User component', () => {
  const wrapper = setup();
  expect(wrapper.find('User').exists()).toBeTruthy();
});

it('should render three buttons', () => {
  const wrapper = setup();
  expect(wrapper.find('div.menu').length).toBe(3);
});

