import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import styled from 'styled-components';

import { Theme, ThemeAttributes } from '@kata-kit/theme';

import { DropdownDirection } from '../types';

interface DropdownProps {
  isOpen?: boolean;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  dropDirection?: DropdownDirection;

  onSelect?(value?: string | number | boolean): void;
}

class Dropdown extends React.Component<DropdownProps> {
  static defaultProps = {
    isOpen: false,
    block: false,
    dropDirection: 'down'
  };

  state = {
    isOpen: false
  };

  constructor(props: DropdownProps) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(e: React.SyntheticEvent) {
    try {
      // TODO: fix event types
      if (ReactDOM.findDOMNode(this)!.contains(e.target as any)) {
        // if click event on this element then do nothing
        return;
      }
      this.setState({ isOpen: false });
    } catch (error) {
      // do nothing
    }
  }

  toggle(e: React.SyntheticEvent) {
    if (this.props.disabled) {
      return;
    }

    const { isOpen } = this.state;

    if (!isOpen) {
      // if dropdown will open then add event listener handleClickOutside
      document.addEventListener('click', this.handleClickOutside as any, false);
    } else {
      // if dropdown will close then remove event listener handleClickOutside
      document.removeEventListener('click', this.handleClickOutside as any, false);
    }

    this.setState({ isOpen: !this.state.isOpen });
  }

  onSelect(value?: string | number | boolean) {
    if (this.props.onSelect && value) {
      this.props.onSelect(value);
    }

    this.setState({ isOpen: false });
  }

  componentWillReceiveProps(nextProps: DropdownProps) {
    if (nextProps) {
      this.setState({
        ...this.state,
        isOpen: nextProps.isOpen
      });
    }
  }

  render() {
    // Omit these properties from `this.props`
    const { isOpen: _, onSelect: _onSelect, ...props } = this.props;

    const { className, children, block, dropDirection, disabled, ...rest } = props;

    const classes = classNames(className);

    // TODO: use new React context instead of cloneElement
    return (
      <Theme>
        {themeAttributes => (
          <DropdownWrapper
            className={classes}
            block={block}
            dropDirection={dropDirection}
            disabled={disabled}
            {...themeAttributes}
            {...rest}
          >
            {React.Children.map(children, (Item: React.ReactElement<any>) => {
              return Item &&
                Item.type &&
                ['DropdownMenu', 'DropdownToggle'].some(type => type === (Item.type as any).displayName)
                ? React.cloneElement(Item, {
                    ...rest,
                    dropDirection,
                    isOpen: this.state.isOpen,
                    toggle: this.toggle,
                    onSelect: this.onSelect
                  })
                : Item;
            })}
          </DropdownWrapper>
        )}
      </Theme>
    );
  }
}

export default Dropdown;

const DropdownWrapper = styled('div')<DropdownProps & ThemeAttributes>`
  display: ${(props: DropdownProps) => (props.block ? 'block' : 'inline-block')};
  position: relative;
  ${(props: DropdownProps) => (props.block ? 'width: 100%' : '')};
`;
