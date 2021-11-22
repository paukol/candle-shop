import React from 'react';
import { shallow } from 'enzyme';
import { OrderSummaryComponent } from './OrderSummary';

const mockProps = {
  className: 'className',
  cart: [],
  addNewOrder: () => {
    console.log('function');
  },
};

describe('Component OrderSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSummaryComponent {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});