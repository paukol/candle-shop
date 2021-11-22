import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

const mockProps = {
  className: 'className',
  cart: [],
};

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});