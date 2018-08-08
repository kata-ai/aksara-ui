import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
  ButtonColors,
  ButtonSizes,
  ButtonGroup
} from '@kata-kit/button';
import { Dropdown, DropdownToggle, DropdownMenu } from '@kata-kit/dropdown';
import { SplitButtonBase } from '../styles';

interface Props {
  color: ButtonColors;
  size?: ButtonSizes;
  title: string;
  subtitle?: string;
  className?: string;
  menuClassName?: string;
  right?: boolean;
  onClick?(e: any): void;
}

export default class SplitButton extends Component<Props> {
  render() {
    return (
      <Root
        className={`kata-splitbutton btn-group ${
          this.props.size === 'sm' ? 'kata-splitbutton--small' : ''
        } ${this.props.className || ''} `}
      >
        <Button
          color={this.props.color}
          onClick={this.props.onClick}
          size={this.props.size}
        >
          {this.props.title}
        </Button>
        <Dropdown>
          <DropdownToggle
            color={this.props.color}
            size={this.props.size}
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
      </Root>
    );
  }
}

const Root = styled(ButtonGroup)`
  ${SplitButtonBase};
`;
