import React from 'react';
import { shallow } from 'enzyme';
import { CartItemComponent } from './CartItem';

const mockProps = {
  className: 'className',
  item: {},
  remove: () => {
    console.log('function');
  },
  addToCart: () => {
    console.log('function');
  },
  adjustItemRequest: () => {
    console.log('function');
  },
};

describe('Component CartItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartItemComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});