import * as React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as popper from 'popper.js';

import { colors, space } from '../../../utils';
import { Text, Paragraph } from '../../../foundations';

export type TooltipPlacement = popper.Placement;
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
        padding-bottom: ${space.xxs}px;
      `;
    }
    case 'right': {
      return css`
        padding-left: ${space.xxs}px;
      `;
    }
    case 'bottom': {
      return css`
        padding-top: ${space.xxs}px;
      `;
    }
    case 'left': {
      return css`
        padding-right: ${space.xxs}px;
      `;
    }
    default: {
      return css`
        padding-bottom: ${space.xxs}px;
      `;
    }
  }
}

const Root = styled('div')<Pick<TooltipInnerProps, 'placement'>>`
  ${props => determineMargins(props.placement)}
`;

const Inner = styled('div')<Omit<TooltipInnerProps, 'placement' | 'content'>>`
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
`;

const TooltipInner: React.RefForwardingComponent<HTMLDivElement, TooltipInnerProps> = (
  { className, style, content, size, placement, ...rest },
  ref
) => {
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
    <Root className={className} style={style} ref={ref} placement={placement} {...rest}>
      <Inner size={size}>{renderContent()}</Inner>
    </Root>
  );
};

TooltipInner.displayName = 'TooltipInner';

export default React.forwardRef(TooltipInner);
