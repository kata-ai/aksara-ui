import React from 'react';
import Tippy from '@tippy.js/react';
import styled from 'styled-components';

import TooltipInner, { TooltipPlacement } from './TooltipInner';

interface TooltipProps {
  className?: string;
  style?: React.CSSProperties;
  content: string | React.ReactNode;
  placement?: TooltipPlacement;
  children: React.ReactElement<any>;
}

const TooltipTarget = styled('span')`
  display: inline-flex;
  align-items: center;
`;

TooltipTarget.displayName = 'TooltipTarget';

const Tooltip: React.FC<TooltipProps> = ({
  className,
  style,
  placement,
  content,
  children,
  ...rest
}) => {
  return (
    <Tippy
      touch={false}
      hideOnClick={false}
      placement={placement}
      content={
        <TooltipInner style={style} placement={placement}>
          {content}
        </TooltipInner>
      }
      // https://github.com/FezVrasta/popper.js/issues/535
      popperOptions={{
        modifiers: {
          preventOverflow: {
            boundariesElement: 'window'
          }
        }
      }}
      {...rest}
    >
      <TooltipTarget>{children}</TooltipTarget>
    </Tippy>
  );
};

Tooltip.defaultProps = {
  className: undefined,
  style: undefined,
  placement: 'top'
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
