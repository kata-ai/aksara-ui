import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';

const EnzymeAdapter = require('enzyme-adapter-react-16');

// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

import { Banner } from 'components/Banner';

const { shallow, mount } = Enzyme;

describe('Banner component', () => {
  it('should render <Banner /> with success state', () => {
    const ele = shallow(<Banner state="success" message="Hello" />);
    expect(ele.find('.kata-banner--success').exists()).toEqual(true);
    expect(
      ele.contains(<div className="kata-banner__message">Hello</div>)
    ).toBeTruthy();
  });

  it('should render <Banner /> with error state', () => {
    const ele = shallow(<Banner state="error" message="Hello" />);
    expect(ele.find('.kata-banner--error').exists()).toEqual(true);
    expect(
      ele.contains(<div className="kata-banner__message">Hello</div>)
    ).toBeTruthy();
  });

  it('should render <Banner /> with warning state', () => {
    const ele = shallow(<Banner state="warning" message="Hello" />);
    expect(ele.find('.kata-banner--warning').exists()).toEqual(true);
    expect(
      ele.contains(<div className="kata-banner__message">Hello</div>)
    ).toBeTruthy();
  });

  it('should render <Banner /> with info state', () => {
    const ele = shallow(<Banner state="info" message="Hello" />);
    expect(ele.find('.kata-banner--info').exists()).toEqual(true);
    expect(
      ele.contains(<div className="kata-banner__message">Hello</div>)
    ).toBeTruthy();
  });

  it('should render <Banner /> with close button', () => {
    const onClose = sinon.spy();
    const ele = shallow(
      <Banner state="success" message="Hello World" onClose={onClose} />
    );
    expect(ele.find('.kata-banner--success').exists()).toEqual(true);
    expect(
      ele.contains(<div className="kata-banner__message">Hello World</div>)
    ).toBeTruthy();
    expect(ele.find('.kata-banner__close').exists()).toBeTruthy();
    expect(ele.find('.icon-close').exists()).toBeTruthy();
  });

  it('should click close icon once', () => {
    const onClose = sinon.spy();
    const ele = mount(
      <Banner state="success" message="Hello World" onClose={onClose} />
    );

    ele
      .find('.kata-banner__close')
      .first()
      .simulate('click');

    expect(onClose.calledOnce).toBeTruthy();
  });
});
