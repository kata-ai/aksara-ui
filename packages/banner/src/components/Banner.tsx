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
              <CloseButton onClick={this.props.onClose} {...themeAttributes}>
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

const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  font-size: 16px;
  width: 16px;
  height: 16px;
`;

const Message = styled('div')`
  flex: 1;
  margin-right: 16px;
`;

const CloseButton = styled<ThemeAttributes, 'button'>('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.textColor};
  font-size: 13px;
  width: 16px;
  height: 16px;

  &:focus {
    outline: none;

    i {
      outline: 2px solid ${props => props.textColor};
      outline-offset: 2px;
    }
  }
`;

const Root = styled<ThemeAttributes, 'div'>('div')`
  ${BannerBase} background-color: ${props => props.backgroundColor};
  color: ${props => props.textColor};

  ${Icon} {
    i {
      display: inline-block;
      color: ${props => props.textColor};
      height: 16px;
    }
  }

  ${CloseButton} {
    i {
      display: inline-block;
      color: ${props => props.textColor};
      height: 13px;
    }
  }
`;
