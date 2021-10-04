import * as React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import * as CSS from 'csstype';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Placement } from '@popperjs/core';
import { Manager, Reference, Popper } from 'react-popper';
import { Box } from '../../../layout';
import { Portal } from '../../../helpers';
import { Details, Summary, Menu } from '../styles';

export interface PopoverProps {
  className?: string;
  style?: React.CSSProperties;
  summaryClassName?: string;
  summaryStyle?: React.CSSProperties;
  maxWidth?: CSS.Property.MaxHeight;
  maxHeight?: CSS.Property.MaxWidth;
  trigger: React.ReactElement;
  children: React.ReactElement;
  placement?: Placement;
}

const Arrow = styled(Box)`
  height: 20px;
  position: absolute;
  width: 20px;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent;
  }
`;

// TODO: Clicking outside popover should also hide it
// TODO: Rewrite into `react-popper` hooks API
// https://popper.js.org/react-popper/v2/hook/
const Popover: React.FC<PopoverProps> = ({
  className,
  style,
  trigger,
  children,
  maxWidth = 320,
  maxHeight,
  placement = 'bottom',
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <Manager>
      <Reference>
        {({ ref }) => {
          const innerClassName = clsx(trigger.props.className, isVisible && 'active');

          return React.cloneElement(trigger, {
            className: innerClassName,
            ref,
            role: 'button',
            onClick: () => {
              setIsVisible(!isVisible);
            },
          });
        }}
      </Reference>
      <Portal>
        {isVisible && (
          <Popper placement={placement}>
            {({ ref, style: menuStyle, placement: innerPlacement, arrowProps }) => {
              const innerStyle = { ...children.props.style, ...menuStyle };
              return (
                <Box
                  className={className}
                  style={{ ...innerStyle, ...style }}
                  sx={{
                    backgroundColor: 'greylight01',
                    borderRadius: 12,
                    boxShadow: 4,
                    maxWidth,
                    maxHeight,
                    zIndex: 1000,
                    '&[data-placement*="bottom"]': {
                      marginTop: 'md',
                    },
                    '&[data-placement*="top"]': {
                      marginBottom: 'md',
                    },
                    '&[data-placement*="right"]': {
                      marginLeft: 'md',
                    },
                    '&[data-placement*="left"]': {
                      marginRight: 'md',
                    },
                  }}
                  ref={ref}
                  data-placement={innerPlacement}
                >
                  {children}
                  <Arrow
                    data-placement={innerPlacement}
                    sx={{
                      '&[data-placement*="bottom"]': {
                        top: 0,
                        marginTop: -18,
                        '&::after': {
                          borderBottomColor: 'greylight01',
                        },
                      },
                      '&[data-placement*="top"]': {
                        bottom: 0,
                        marginBottom: -18,
                        '&::after': {
                          borderTopColor: 'greylight01',
                        },
                      },
                      '&[data-placement*="right"]': {
                        left: 0,
                        marginLeft: -18,
                        '&::after': {
                          borderRightColor: 'greylight01',
                        },
                      },
                      '&[data-placement*="left"]': {
                        right: 0,
                        marginRight: -18,
                        '&::after': {
                          borderLeftColor: 'greylight01',
                        },
                      },
                    }}
                    {...arrowProps}
                  />
                </Box>
              );
            }}
          </Popper>
        )}
      </Portal>
    </Manager>
  );
};

Popover.displayName = 'Popover';

export default Popover;
