import React from 'react';
import styled from 'styled-components';
import omit from 'lodash-es/omit';

export interface TooltipProps {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  show?: boolean;
  targetNodePosition?: any;
  style?: any;
}

export default class Tooltip extends React.Component<TooltipProps> {
  static defaultProps = {
    placement: 'right'
  };

  render() {
    const {
      placement,
      className,
      show,
      children,
      targetNodePosition,
      ...props
    } = omit(this.props, [
      'delay',
      'positionTop',
      'positionLeft',
      'arrowOffsetTop',
      'arrowOffsetLeft'
    ]);

    const arrowStyles: any = {};

    if (
      (placement === 'right' || placement === 'left') &&
      targetNodePosition.top
    ) {
      arrowStyles.top = `${Math.ceil(
        targetNodePosition.top - props.style.top
      )}px`;
    }

    if (
      (placement === 'top' || placement === 'bottom') &&
      targetNodePosition.left
    ) {
      arrowStyles.left = `${Math.ceil(
        targetNodePosition.left -
          props.style.left -
          targetNodePosition.width / 2
      )}px`;
    }

    return (
      <Root role="tooltip" show={show} {...props}>
        <Inner>{children}</Inner>
      </Root>
    );
  }
}

const Root = styled<TooltipProps, 'div'>('div')`
  position: absolute;
  z-index: 1070;
  display: block;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  letter-spacing: normal;
  word-break: normal;
  word-spacing: normal;
  white-space: normal;
  line-break: auto;
  font-size: 0.875rem;
  word-wrap: break-word;
  opacity: ${props => (props.show ? 1 : 0)};
`;

const Inner = styled('div')`
  max-width: 200px;
  padding: 8px;
  text-align: left;
  border-radius: 4px;
  font-size: 11px;
  letter-spacing: 0.2px;
  line-height: 1.33;

  color: #e2e6e8 /* $gray-30 */;
  background-color: #24282d /* $gray-80 */;
`;
