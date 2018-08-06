import React from 'react';
import styled from 'styled-components';
import BannerBase from '../styles';
import themes from '../theme';
import ThemedComponent, { ThemeAttributes } from '@kata-kit/theme';

export type BannerState = 'error' | 'success' | 'warning' | 'info';

export interface BannerProps {
  state: BannerState;
  message: any;
  className?: string;
  onClose?(e: any): void;
}

class Banner extends React.Component<BannerProps> {
  static defaultProps = {
    state: 'error'
  };

  render() {
    const { state, className } = this.props;

    return (
      <ThemedComponent color={state} themes={themes}>
        {themeAttributes => (
          <Root className={className} {...themeAttributes}>
            <Icon>
              <i className={`icon-${state}`} />
            </Icon>
            <Message>{this.props.message}</Message>
            {this.props.onClose && (
              <CloseButton onClick={this.props.onClose}>
                <i className="icon-close" />
              </CloseButton>
            )}
          </Root>
        )}
      </ThemedComponent>
    );
  }
}

export default Banner;

const Root = styled<ThemeAttributes, 'div'>('div')`
  ${BannerBase} background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};

  i {
    display: inline-block;
    color: ${props => props.textColor};
    font-size: 16px;
  }
`;

const Icon = styled('div')`
  margin: 10px 16px;
`;

const Message = styled('div')`
  flex: 1;
  margin-right: 16px;
`;

const CloseButton = styled('button')`
  margin: 10px 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
