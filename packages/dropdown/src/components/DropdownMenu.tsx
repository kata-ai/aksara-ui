import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from 'styled-components';
import { variables } from '@kata-kit/theme';

import { DropdownDirection } from '../types';

interface DropdownMenuProps {
  isOpen?: boolean;
  floatRight?: boolean;
  className?: string;

  // Private
  dropDirection?: DropdownDirection;
  disabled?: boolean;
  onSelect?(value?: string | number | boolean): void;
}

class DropdownMenu extends React.Component<DropdownMenuProps> {
  static defaultProps = {
    floatRight: false
  };

  static displayName = 'DropdownMenu';

  render() {
    const {
      isOpen,
      floatRight,
      dropDirection,
      className,
      onSelect,
      disabled
    } = this.props;
    const classes = classNames(className, isOpen ? 'show' : false);

    return (
      <Wrapper
        className={classes}
        dropDirection={dropDirection}
        floatRight={floatRight}
      >
        {React.Children.map(
          this.props.children,
          (Item: React.ReactElement<any>) =>
            Item
              ? React.cloneElement(Item, {
                  onSelect,
                  disabled
                })
              : Item
        )}
      </Wrapper>
    );
  }
}

const floatRightMenu = css`
  right: 0;
  left: auto;
`;

const directionUp = css`
  top: unset !important;
  bottom: 100%;
  margin: 0 0 2px;
`;

const directionRight = css`
  left: 100% !important;
  top: 0 !important;
  margin: 0 0 0 2px;
`;

const directionLeft = css`
  top: 0 !important;
  /*
   * We need to use transform for dropleft because the dropdown menu
   * can't goes over the parent container
   */
  transform: translate3d(calc(-100% - 0.125rem), 0, 0);
`;

const Wrapper = styled('div')<DropdownMenuProps>`
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
  border-radius: ${variables.borderRadiuses.borderRadiusSmall};
  box-shadow: ${variables.layerShadows.layer200Shadow};
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

  ${props =>
    props.floatRight &&
    props.dropDirection !== 'right' &&
    props.dropDirection !== 'left' &&
    floatRightMenu}
  ${props => props.dropDirection === 'up' && directionUp}
  ${props => props.dropDirection === 'right' && directionRight}
  ${props => props.dropDirection === 'left' && directionLeft}
`;

export default DropdownMenu;
