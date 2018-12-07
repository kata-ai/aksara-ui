import * as React from 'react';
import omit from 'lodash-es/omit';
import classNames from 'classnames';

import { ButtonColors, ButtonSizes } from '@kata-kit/button';
import { DropdownToggleIcon, DropdownToggleButton } from './styles';

type DropdownDirection = 'up' | 'down' | 'left' | 'right';

export interface DropdownToggleProps {
  tag?: any;
  caret?: boolean;
  className?: string;
  color?: ButtonColors;
  size?: ButtonSizes;

  // Private properties, should not be used publicly
  block?: boolean;
  isOpen?: boolean;
  direction?: DropdownDirection;
  toggle?: (e: React.SyntheticEvent<any>) => void;
}

const Caret = () => (
  <DropdownToggleIcon className="kata-drop-toggle icon-arrow" />
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
    const { tag, children, caret, className, block, isOpen, ...props } = omit(
      this.props,
      ['direction', 'toggle']
    );

    if (!React.isValidElement(children)) {
      return (
        <DropdownToggleButton
          {...props}
          block
          isOpen={isOpen}
          className={classNames(isOpen && 'is-open', className)}
          color={this.props.color}
          onClick={this.onClick}
        >
          {this.renderChildren()}
        </DropdownToggleButton>
      );
    }

    return (
      <div {...props} className={className} onClick={this.onClick}>
        {this.renderChildren()}
      </div>
    );
  }

  private renderChildren() {
    const { caret, direction, children } = this.props;
    if (!caret) {
      return children;
    }

    if (direction === 'left') {
      return (
        <>
          <Caret /> {children}
        </>
      );
    }

    return (
      <>
        {children}
        <Caret />
      </>
    );
  }
}

export default DropdownToggle;
