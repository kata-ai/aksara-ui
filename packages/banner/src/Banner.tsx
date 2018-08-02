import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

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
      <Root className={classnames(state, className)}>
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
    );
  }
}

export default Banner;

const Root = styled('div')`
  display: flex;
  align-items: center;
  min-height: 32px;
  border-radius: 4px;
  line-height: 1;
  background-color: #24282d /* $gray-80 */;
  color: #fff /* $white */;

  &.error {
    background-color: #e53935 /* $red */;
  }

  &.warning {
    background-color: #ffc400 /* $yellow */;
  }

  &.info {
    background-color: #006fe6 /* $kata-blue */;
  }

  &.success {
    background-color: #00c853 /* $green */;
  }
`;

const Icon = styled('div')`
  margin: 10px 16px;

  i {
    font-size: 17px;
    vertical-align: middle;
  }
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
  color: #fff /* $white */;
  cursor: pointer;
`;
