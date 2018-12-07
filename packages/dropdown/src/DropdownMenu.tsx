import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

type DropdownDirection = 'up' | 'down' | 'left' | 'right';

interface DropdownMenuProps {
  isOpen?: boolean;
  right?: boolean;
  className?: string;

  // Private
  direction?: DropdownDirection;
  onSelect?(value?: string | number | boolean): void;
}

class DropdownMenu extends React.Component<DropdownMenuProps> {
  static defaultProps = {
    right: false
  };

  static displayName = 'DropdownMenu';

  render() {
    const { isOpen, right, direction, className, onSelect } = this.props;
    const classes = classNames(
      className,
      right ? 'dropdown-menu-right' : false,
      `kata-drop${direction}__menu`,
      right ? `kata-drop${direction}__menu--right` : false,
      isOpen ? 'show' : false
    );

    return (
      <Wrapper className={classes}>
        {React.Children.map(
          this.props.children,
          (Item: React.ReactElement<any>) =>
            Item
              ? React.cloneElement(Item, {
                  onSelect
                })
              : Item
        )}
      </Wrapper>
    );
  }
}

const Wrapper = styled('div')`
  display: none;
  position: absolute;
  float: left;
  top: 100%;
  left: 0;
  width: 100%;
  min-width: 10rem;
  padding: 0.5rem 0;
  margin: 2px 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: none;
  border-radius: 0.25rem;
  z-index: 1000;

  &.show {
    display: block;
  }
`;

export default DropdownMenu;
