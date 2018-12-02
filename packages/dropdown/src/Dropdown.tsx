import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import omit from 'lodash-es/omit';
import styled from 'styled-components';

import { Theme } from '@kata-kit/theme';

import { DropdownBase } from './styles';

interface DropdownProps {
  isOpen?: boolean;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';

  onSelect?(value?: string | number | boolean): void;
}

class Dropdown extends React.Component<DropdownProps> {
  static defaultProps = {
    isOpen: false,
    block: false,
    direction: 'down'
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
      document.removeEventListener(
        'click',
        this.handleClickOutside as any,
        false
      );
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
    const { className, children, block, direction, disabled, ...props } = omit(
      this.props,
      ['isOpen']
    );

    const classes = classNames(
      `kata-drop${direction}`,
      `drop${direction}`,
      className
    );

    // TODO: use new React context instead of cloneElement
    return (
      <Theme>
        {themeAttributes => (
          <DropdownWrapper className={classes} {...themeAttributes} {...props}>
            {React.Children.map(children, (Item: React.ReactElement<any>) => {
              return Item &&
                Item.type &&
                ['DropdownMenu', 'DropdownToggle'].some(
                  type => type === (Item.type as any).displayName
                )
                ? React.cloneElement(Item, {
                    ...props,
                    isOpen: this.state.isOpen,
                    toggle: this.toggle,
                    direction,
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

const DropdownWrapper = styled('div')`
  ${DropdownBase}
  display: ${(props: DropdownProps) =>
    props.block ? 'block' : 'inline-block'};
  position: relative;
`;
