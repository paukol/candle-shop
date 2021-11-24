import React from 'react';
import { shallow } from 'enzyme';
import { LogoBarComponent } from './LogoBar';

describe('Component LogoBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<LogoBarComponent />);
    expect(component).toBeTruthy();
  });
});