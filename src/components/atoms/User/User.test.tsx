import * as React from 'react';
import { shallow } from 'enzyme';
import User from './User';

const setup = () => {
  const props = {
    name: 'user',
  };
  return shallow(<User {...props} />);
};

it('should render content correctly', () => {
  const wrapper = setup();
  expect(wrapper.find('div.logo').exists()).toBeTruthy();
  expect(wrapper.find('div.name').text()).toBe('user');
});

