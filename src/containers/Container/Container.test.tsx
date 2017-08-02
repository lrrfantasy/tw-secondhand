import * as React from 'react';
import { mount } from 'enzyme';
import Container from './Container';

const setup = () => {
  const props = {
    titleProps: {
      title: 'title',
    },
    children: <p>hello</p>,
  };

  return mount(<Container {...props}/>);
};

it('should render Title correctly', () => {
  const wrapper = setup();
  expect(wrapper.find('div.title').text()).toBe('title');
});

it('should render content with right children', () => {
  const wrapper = setup();
  expect(wrapper.find('div.content').containsMatchingElement(<p>hello</p>)).toBe(true);
});

it('should render menu bar', () => {
  const wrapper = setup();
  expect(wrapper.find('MenuBar').exists()).toBeTruthy();
});

