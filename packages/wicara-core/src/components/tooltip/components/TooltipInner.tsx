import styled, { css } from 'styled-components';
import { colors, space, typeScale } from '../../../utils';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipInnerProps {
  placement?: TooltipPlacement;
}

function determineMargins(placement?: TooltipPlacement) {
  switch (placement) {
    case 'top': {
      return css`
        margin-bottom: ${space.xxs}px;
      `;
    }
    case 'right': {
      return css`
        margin-left: ${space.xxs}px;
      `;
    }
    case 'bottom': {
      return css`
        margin-top: ${space.xxs}px;
      `;
    }
    case 'left': {
      return css`
        margin-right: ${space.xxs}px;
      `;
    }
    default: {
      return css`
        margin-bottom: ${space.xxs}px;
      `;
    }
  }
}

const TooltipInner = styled('div')<TooltipInnerProps>`
  max-width: 200px;
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  border-radius: 4px;
  font-size: ${typeScale.small.fontSize}px;
  line-height: ${typeScale.small.lineHeight}px;
  letter-spacing: 0.2px;

  color: ${colors.gray30};
  background-color: ${colors.gray80};

  ${props => determineMargins(props.placement)}
`;

TooltipInner.displayName = 'TooltipInner';

export default TooltipInner;
