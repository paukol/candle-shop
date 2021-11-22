import React from 'react';
import { shallow } from 'enzyme';
import { OrderItemComponent } from './OrderItem';

const mockProps = {
  className: 'className',
  item: {},
};

describe('Component OrderItem', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderItemComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});