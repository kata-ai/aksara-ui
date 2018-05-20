import React from 'react';
import Enzyme from 'enzyme';

const EnzymeAdapter = require('enzyme-adapter-react-16');

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { SupportButton } from 'components/Button';

const { shallow } = Enzyme;

describe('SupportButton component', () => {
  it('should render <SupportButton /> with default props', () => {
    const ele = shallow(<SupportButton>Action</SupportButton>);

    expect(ele.containsMatchingElement(<button>Action</button>)).toBeTruthy();
    expect(ele.find('.kata-btn__support').exists()).toBeTruthy();
    expect(ele.find('.btn-lg').exists()).toBeFalsy();
    expect(ele.find('.btn-block').exists()).toBeFalsy();
    expect(ele.find('.active').exists()).toBeFalsy();
    expect(ele.find('.kata-btn-icon').exists()).toBeFalsy();
  });
});
