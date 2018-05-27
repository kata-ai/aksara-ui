import React from 'react';
import Enzyme from 'enzyme';

const EnzymeAdapter = require('enzyme-adapter-react-16');

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { Card } from 'components/Card';

const { shallow } = Enzyme;

describe('Card component', () => {
  it('should render <Card /> component with default props', () => {
    const ele = shallow(<Card>Card</Card>);

    expect(
      ele.containsMatchingElement(<div className="kata-card__body">Card</div>)
    ).toBeTruthy();
    expect(ele.find('.kata-card').exists()).toBeTruthy();
    expect(ele.find('.kata-card--disabled').exists()).toBeFalsy();
  });
});
