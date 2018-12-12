import * as React from 'react';

import Dropdown from './Dropdown';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

import { Circle } from '@kata-kit/loading';
import { DropdownDirection } from '../types';
import { DropdownToggleButton } from '../styles';

interface DropdownSelectorProps {
  value?: string | number | boolean;
  placeholder?: string;
  block?: boolean;
  loading?: boolean;
  children?: any;
  disabled?: boolean;
  className?: string;
  dropDirection?: DropdownDirection;
  onSelect?(value: string): void;
}

interface States {}

class DropdownSelector extends React.PureComponent<
  DropdownSelectorProps,
  States
> {
  static defaultProps = {
    placeholder: 'Select...',
    loading: false,
    block: false,
    direction: 'down'
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
      disabled,
      onSelect,
      dropDirection
    } = this.props;

    if (loading) {
      return (
        <DropdownToggleButton
          as="div"
          block={block}
          className={className}
          data-testid="dropdown-toggle-loading"
        >
          Loading...
          <Circle
            size={25}
            className="loading-icon"
            data-testid="dropdown-toggle-loading-icon"
          />
        </DropdownToggleButton>
      );
    }
    return (
      <Dropdown
        block={block}
        onSelect={onSelect}
        className={className}
        dropDirection={dropDirection}
        disabled={disabled}
      >
        <DropdownToggle filled={!!value} disabled={disabled}>
          {(value ? value : placeholder) as string}
        </DropdownToggle>
        <DropdownMenu dropDirection={dropDirection} disabled={disabled}>
          {children}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownSelector;
