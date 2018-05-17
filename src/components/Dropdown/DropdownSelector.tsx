import React from 'react';

import Dropdown from './Dropdown';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

import { Circle } from 'components/Loading';

import './DropdownSelector.scss';

interface Props {
  value?: string | number | boolean;
  placeholder?: string;
  block?: boolean;
  loading?: boolean;
  children?: any;
  className?: string;
  onSelect?(value: string): void;
}

interface States {}

class DropdownSelector extends React.PureComponent<Props, States> {
  static defaultProps = {
    placeholder: 'Select...',
    loading: false,
    block: false
  };

  state: States = {};

  render() {
    const {
      value,
      className,
      placeholder,
      loading,
      block,
      children,
      onSelect
    } = this.props;

    if (loading) {
      return (
        <div className={`kata-dropdown-selector__button ${className}`}>
          Loading...
          <Circle size={25} className="kata-dropdown-selector__loading" />
        </div>
      );
    }
    return (
      <Dropdown block={block} onSelect={onSelect} className={className}>
        <DropdownToggle
          className={`kata-dropdown-selector__button ${
            value ? 'kata-dropdown-selector__button--filled' : ''
          }`}
        >
          {(value ? value : placeholder) as string}
        </DropdownToggle>
        <DropdownMenu className="kata-dropdown-selector__menu">
          {children}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownSelector;
