import * as React from 'react';
import {mount} from 'enzyme';
import LoginPage from '../../../containers/pages/LoginPage/LoginPage';
import Logo from '../../../components/Logo/Logo';

const setup = () => {
  return mount(<LoginPage />);
};

it('should render Container component', () => {
  const wrapper = setup();
  expect(wrapper.find('Container').exists()).toBeTruthy();
});

it('should render Logo component 2', () => {
  const wrapper = setup();
  expect(wrapper.find(Logo).exists()).toBeTruthy();
});

it('should render username and password input filed', () => {
  const wrapper = setup();
  expect(wrapper.find('input[placeholder="用户名"]').exists()).toBeTruthy();
  expect(wrapper.find('input[placeholder="密码"]').exists()).toBeTruthy();
});

it('should render login and register button', () => {
  const wrapper = setup();
  expect(wrapper.find('Button').length).toBe(2);
  expect(wrapper.find('a.button').at(0).text()).toBe("登录");
  expect(wrapper.find('a.button').at(1).text()).toBe("免费注册");
});
