import * as React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

it('Title shallow renders text for title', () => {
  const titleText = "title"
  const wrapper = shallow(<Title title={titleText}/>);

  expect(wrapper.find('div').text()).toBe(titleText);
});

it('Title shallow renders back icon when the props hasBackButton is true', () => {
  const titleText = "title"
  const wrapper = shallow(<Title title={titleText} hasBackButton/>);

  expect(wrapper.find('i').text()).toBe('arrow_back');
});

it('Title shallow renders close icon when the props hasCloseButton is true', () => {
  const titleText = "title"
  const wrapper = shallow(<Title title={titleText} hasCloseButton/>);

  expect(wrapper.find('i').text()).toBe('close');
});

it('Title shallow does not renders any icon when the props hasCloseButton or hasBackButton is not present', () => {
  const titleText = "title"
  const wrapper = shallow(<Title title={titleText}/>);

  expect(wrapper.find('i').text()).toBe('');
});
