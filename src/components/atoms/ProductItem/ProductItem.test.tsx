import * as React from 'react';
import {mount} from 'enzyme';

import ProductItem from './ProductItem';

const setup = (owner = '', status = '', inactive = false) => {
  const props = {
    img: '../../../assets/logo.png',
    name: 'iphone',
    price: '2000',
    owner,
    status,
    inactive,
  };
 return mount(<ProductItem {...props} />);
};

it('should render product image', () => {
  const wrapper = setup();
  expect(wrapper.find('.product-img').exists()).toBeTruthy();
});

it('should render product with right name', () => {
  const wrapper = setup();
  expect(wrapper.find('.product-name').text()).toBe('iphone');
});

it('should render product with right price', () => {
  const wrapper = setup();
  expect(wrapper.find('.product-price').text()).toBe('¥ 2000');
});

it('should not render product owner when no product owner property', () => {
 const wrapper = setup();
 expect(wrapper.find('.product-owner').exists()).toBeFalsy();
});

it('should render product owner when there is product owner property', () => {
  const wrapper = setup('guiling');
  expect(wrapper.find('.product-owner').exists()).toBeTruthy();
  expect(wrapper.find('.product-owner').text()).toBe('guiling');

});

it('should not render product status when there is no product status property', () => {
  const wrapper = setup();
  expect(wrapper.find('.product-status').exists()).toBeFalsy();
});

it('should render product status when there is product status property', () => {
  const wrapper = setup('guiling', 'sold');
  expect(wrapper.find('.product-status').exists()).toBeTruthy();
  expect(wrapper.find('.product-status').text()).toBe('sold');
});

it('should render product item with inactive class if property inactive is true', () => {
 const wrapper = setup('', '', true);
 expect(wrapper.find('.inactive').exists()).toBeTruthy();
});

it('should render product item without inactive class if property inactive is false', () => {
  const wrapper = setup('', '', false);
  expect(wrapper.find('.inactive').exists()).toBeFalsy();
});
