import * as React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

import { ButtonColors, ButtonSizes } from '@kata-kit/button';
import { DropdownToggleButton } from '../styles';
import { DropdownDirection } from '../types';

export interface DropdownToggleProps {
  tag?: any;
  caret?: boolean;
  className?: string;
  color?: ButtonColors;
  size?: ButtonSizes;
  filled?: boolean;

  // Private properties, should not be used publicly
  block?: boolean;
  isOpen?: boolean;
  dropDirection?: DropdownDirection;
  disabled?: boolean;
  toggle?: (e: React.SyntheticEvent<any>) => void;
}

const directionUp = css`
  transform: rotate(180deg);
`;

const directionRight = css`
  transform: rotate(-90deg);
`;

const directionLeft = css`
  transform: rotate(90deg);
  margin-left: -5px;
  margin-right: 8px;
`;

export const DropdownToggleIcon = styled('i')`
  display: inline-block;
  position: absolute;
  right: 8px;
  top: 9px;
  margin-left: 8px;
  font-size: 20px;

  &::before {
    vertical-align: middle;
  }

  ${props => props.dropDirection === 'up' && directionUp}
  ${props => props.dropDirection === 'right' && directionRight}
  ${props => props.dropDirection === 'left' && directionLeft}
`;

const Caret = (props: { dropDirection?: DropdownDirection }) => (
  <DropdownToggleIcon
    className="icon-arrow"
    dropDirection={props.dropDirection}
  />
);

class DropdownToggle extends React.Component<DropdownToggleProps> {
  static defaultProps = {
    tag: 'button',
    caret: true
  };

  static displayName = 'DropdownToggle';

  constructor(props: DropdownToggleProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  onClick(e: React.SyntheticEvent) {
    e.stopPropagation();

    if (this.props.toggle) {
      this.props.toggle(e);
    }
  }

  render() {
    // Omit these properties from `this.props`
    const {
      dropDirection: _dropDirection,
      toggle: _toggle,
      ...props
    } = this.props;

    const {
      tag,
      children,
      caret,
      className,
      block,
      isOpen,
      filled,
      ...rest
    } = props;

    if (!React.isValidElement(children)) {
      return (
        <DropdownToggleButton
          {...rest}
          block
          isOpen={isOpen}
          className={classNames(
            isOpen && 'is-open',
            filled && 'is-filled',
            className
          )}
          color={this.props.color}
          onClick={this.onClick}
        >
          {this.renderChildren()}
        </DropdownToggleButton>
      );
    }

    return (
      <div {...rest} className={className} onClick={this.onClick}>
        {this.renderChildren()}
      </div>
    );
  }

  private renderChildren() {
    const { caret, dropDirection, children } = this.props;
    if (!caret) {
      return children;
    }

    if (dropDirection === 'left') {
      return (
        <>
          <Caret dropDirection={dropDirection} /> {children}
        </>
      );
    }

    return (
      <>
        {children}
        <Caret dropDirection={dropDirection} />
      </>
    );
  }
}

export default DropdownToggle;
