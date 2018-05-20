import React from 'react';
import Enzyme from 'enzyme';

const EnzymeAdapter = require('enzyme-adapter-react-16');

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { FloatingButton } from 'components/Button';

const { shallow } = Enzyme;

describe('FloatingButton component', () => {
  it('should render <FloatingButton /> with default props', () => {
    const ele = shallow(<FloatingButton icon="add" />);

    expect(
      ele.containsMatchingElement(
        <button>
          <i className="icon-add" />
        </button>
      )
    ).toBeTruthy();
    expect(ele.find('.kata-btn-float').exists()).toBeTruthy();
    expect(ele.find('.kata-btn-float__primary').exists()).toBeTruthy();
    expect(ele.find('.active').exists()).toBeFalsy();
  });
});
