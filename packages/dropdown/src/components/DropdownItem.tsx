import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { variables } from '@kata-kit/theme';

interface DropdownItemProps {
  value?: string | number | boolean;
  children?: any;
  className?: string;
  header?: boolean;
  divider?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?(event: React.SyntheticEvent<any>): void;

  // private
  onSelect?(value?: string | number | boolean): void;
}

class DropdownItem extends React.Component<DropdownItemProps> {
  static defaultProps = {
    active: false,
    disabled: false
  };

  constructor(props: DropdownItemProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event: React.SyntheticEvent<any>) {
    const { value, onClick, onSelect } = this.props;

    if (onClick) {
      onClick(event);
    }

    if (onSelect) {
      onSelect(value);
    }
  }

  render() {
    const {
      value,
      children,
      className,
      header,
      divider,
      active,
      disabled,
      onSelect,
      ...props
    } = this.props;
    const classes = classNames(
      active && 'active',
      disabled && 'disabled',
      className
    );

    if (header) {
      return <DropdownHeader>{children}</DropdownHeader>;
    }

    if (divider) {
      return <DropdownDivider />;
    }

    if (React.isValidElement(children)) {
      return React.cloneElement(children as any, {
        ...props,
        className: classes,
        onClick: this.onClick
      });
    }

    return (
      <Wrapper {...props} onClick={this.onClick} className={classes}>
        {this.props.children}
      </Wrapper>
    );
  }
}

const DropdownDivider = styled('div')`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

const DropdownHeader = styled('div')`
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
`;

const Wrapper = styled('a')`
  display: block;
  width: 100%;
  padding: 10px 16px;
  font-weight: 500;
  clear: both;
  color: ${variables.colors.gray70};
  background-color: transparent;
  border: 0;
  text-align: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &.selected {
    color: ${variables.colors.kataBlue};
  }

  &:not(.disabled) {
    cursor: pointer;

    &:hover {
      background: ${variables.colors.gray10};
      text-decoration: none;
    }

    &:focus,
    &:active {
      background: ${variables.colors.gray10};
      color: ${variables.colors.kataBlue} !important;
      text-decoration: none;
    }
  }

  &.disabled,
  &:disabled {
    color: ${variables.colors.gray50} !important;
    background-color: transparent;
  }
`;

export default DropdownItem;
