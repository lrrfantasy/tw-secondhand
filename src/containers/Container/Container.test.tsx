import * as React from 'react';
import { mount } from 'enzyme';
import Container from './Container';

const setup = (showMenuBar = false) => {
  const props = {
    titleProps: {
      title: 'title',
    },
    children: <p>hello</p>,
    showMenuBar,
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

it('should render menu bar when property showMenuBar is true', () => {
  const wrapper = setup(true);
  expect(wrapper.find('MenuBar').exists()).toBeTruthy();
});

it('should not render menu bar when no property showMenuBar', () => {
  const wrapper = setup(false);
  expect(wrapper.find('MenuBar').exists()).toBeFalsy();
});

