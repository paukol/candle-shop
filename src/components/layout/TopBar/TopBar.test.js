import React from 'react';
import { shallow } from 'enzyme';
import { TopBarComponent } from './TopBar';

const mockProps = {
  className: 'className',
  cart: [],
};

describe('Component TopBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<TopBarComponent {...mockProps}/>);
    expect(component).toBeTruthy();
  });
});