import * as React from 'react';
import styled from 'styled-components';

import { Theme } from '@kata-kit/theme';

export interface TooltipProps {
  /** Placement of the tooltip. */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Is the tooltip visible? */
  show?: boolean;
  /** @todo Document this. */
  targetNodePosition?: any;
  /** Additional CSS Properties for the component. */
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
      ...rest
    } = this.props;

    const arrowStyles: any = {};

    if (
      (placement === 'right' || placement === 'left') &&
      targetNodePosition.top
    ) {
      arrowStyles.top = `${Math.ceil(
        targetNodePosition.top - rest.style.top
      )}px`;
    }

    if (
      (placement === 'top' || placement === 'bottom') &&
      targetNodePosition.left
    ) {
      arrowStyles.left = `${Math.ceil(
        targetNodePosition.left - rest.style.left - targetNodePosition.width / 2
      )}px`;
    }

    return (
      <Theme>
        {themeAttributes => (
          <Root role="tooltip" show={show} {...rest}>
            <Inner>{children}</Inner>
          </Root>
        )}
      </Theme>
    );
  }
}

const Root = styled('div')`
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
  opacity: ${(props: TooltipProps) => (props.show ? 1 : 0)};
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
