import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const mockProps = {
  className: 'className',
  one: {},
  loading: true,
  error: {},
  history: {},
  getProductDetails: ()=> {
    console.log('function');
  },
  addToCart: () => {
    console.log('function');
  },
};

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});