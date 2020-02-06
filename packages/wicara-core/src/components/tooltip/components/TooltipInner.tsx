import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';

import { colors, space } from '../../../utils';
import { Text, Paragraph } from '../../../foundations';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipSize = 'sm' | 'md' | 'lg';

export interface TooltipInnerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  content: string | React.ReactNode;
  placement?: TooltipPlacement;
  size?: TooltipSize;
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

const Root = styled('div')<Omit<TooltipInnerProps, 'content'>>`
  ${variant({
    prop: 'size',
    variants: {
      sm: {
        py: 'xxs',
        px: 'md',
        maxWidth: 200,
      },
      md: {
        p: 'md',
        maxWidth: 200,
      },
      lg: {
        p: 'md',
        maxWidth: 200,
      },
    },
  })}
  text-align: left;
  vertical-align: middle;
  border-radius: 4px;

  color: ${themeGet('colors.text-inverse', colors['text-inverse'])};
  background-color: ${themeGet('colors.grey09', colors.grey09)};

  ${props => determineMargins(props.placement)}
`;

const TooltipInner: React.FC<TooltipInnerProps> = ({ className, style, content, size, placement, ...rest }) => {
  const renderContent = () => {
    if (typeof content === 'string') {
      if (size === 'sm') {
        return <Text scale={300}>{content}</Text>;
      }

      return (
        <Paragraph scale={300} m={0}>
          {content}
        </Paragraph>
      );
    }

    return content;
  };

  return (
    <Root className={className} style={style} placement={placement} size={size} {...rest}>
      {renderContent()}
    </Root>
  );
};

TooltipInner.displayName = 'TooltipInner';

export default TooltipInner;
