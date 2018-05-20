import React from 'react';
import Enzyme from 'enzyme';

const EnzymeAdapter = require('enzyme-adapter-react-16');

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { Button } from 'components/Button';

const { shallow } = Enzyme;

describe('Button component', () => {
  it('should render <Button /> with default props', () => {
    const ele = shallow(<Button>Confirm</Button>);

    expect(ele.containsMatchingElement(<button>Confirm</button>)).toBeTruthy();
    expect(ele.find('.kata-btn').exists()).toBeTruthy();
    expect(ele.find('.kata-btn__secondary').exists()).toBeTruthy();
    expect(ele.find('.btn-outline-secondary').exists()).toBeFalsy();
    expect(ele.find('.btn-lg').exists()).toBeFalsy();
    expect(ele.find('.btn-block').exists()).toBeFalsy();
    expect(ele.find('.active').exists()).toBeFalsy();
  });

  it('should render <Button /> with primary color', () => {
    const ele = shallow(<Button color="primary">Confirm</Button>);

    expect(ele.containsMatchingElement(<button>Confirm</button>)).toBeTruthy();
    expect(ele.find('.kata-btn').exists()).toBeTruthy();
    expect(ele.find('.kata-btn__primary').exists()).toBeTruthy();
  });

  it('should render <Button /> with success color', () => {
    const ele = shallow(<Button color="success">Confirm</Button>);

    expect(ele.containsMatchingElement(<button>Confirm</button>)).toBeTruthy();
    expect(ele.find('.kata-btn').exists()).toBeTruthy();
    expect(ele.find('.kata-btn__success').exists()).toBeTruthy();
  });

  it('should render <Button /> with danger color', () => {
    const ele = shallow(<Button color="danger">Confirm</Button>);

    expect(ele.containsMatchingElement(<button>Confirm</button>)).toBeTruthy();
    expect(ele.find('.kata-btn').exists()).toBeTruthy();
    expect(ele.find('.kata-btn__danger').exists()).toBeTruthy();
  });

  it('should render <Button /> with warning color', () => {
    const ele = shallow(<Button color="warning">Confirm</Button>);

    expect(ele.containsMatchingElement(<button>Confirm</button>)).toBeTruthy();
    expect(ele.find('.kata-btn').exists()).toBeTruthy();
    expect(ele.find('.kata-btn__warning').exists()).toBeTruthy();
  });

  it('should render <Button /> with info color', () => {
    const ele = shallow(<Button color="info">Confirm</Button>);

    expect(ele.containsMatchingElement(<button>Confirm</button>)).toBeTruthy();
    expect(ele.find('.kata-btn').exists()).toBeTruthy();
    expect(ele.find('.kata-btn__info').exists()).toBeTruthy();
  });

  it('should render <Button /> with white color', () => {
    const ele = shallow(<Button color="white">Confirm</Button>);

    expect(ele.containsMatchingElement(<button>Confirm</button>)).toBeTruthy();
    expect(ele.find('.kata-btn').exists()).toBeTruthy();
    expect(ele.find('.kata-btn__white').exists()).toBeTruthy();
  });
});
