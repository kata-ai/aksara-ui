import React, { Component } from 'react';

import { Button } from 'components/Button';
import { Dropdown, DropdownToggle, DropdownMenu } from 'components/Dropdown';

type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'white';

interface Props {
  color: Color;
  size?: 'small' | 'normal';
  title: string;
  subtitle?: string;
  children: any;
  className?: string;
  menuClassName?: string;
  right?: boolean;
  onClick?(e: any): void;
}

export default class SplitButton extends Component<Props> {
  render() {
    return (
      <div
        className={`kata-splitbutton btn-group ${
          this.props.size === 'small' ? 'kata-splitbutton--small' : ''
        } ${this.props.className || ''} `}
      >
        <Button color={this.props.color} onClick={this.props.onClick}>
          {this.props.title}
        </Button>
        <Dropdown>
          <DropdownToggle
            color={this.props.color}
            className={`kata-splitbutton__toggle ${
              this.props.subtitle && this.props.subtitle !== ''
                ? 'kata-splitbutton__toggle--withtext'
                : ''
            }`}
          >
            {this.props.subtitle}
          </DropdownToggle>
          <DropdownMenu
            className={this.props.menuClassName}
            right={this.props.right}
          >
            {this.props.children}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
