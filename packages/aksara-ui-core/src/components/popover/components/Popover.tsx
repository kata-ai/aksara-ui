import * as React from 'react';
import clsx from 'clsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Placement } from '@popperjs/core';
import { Manager, Reference, Popper } from 'react-popper';
import { Details, Summary, Menu } from '../styles';

export interface PopoverProps {
  className?: string;
  style?: React.CSSProperties;
  summaryClassName?: string;
  summaryStyle?: React.CSSProperties;
  trigger: React.ReactElement;
  children: React.ReactElement;
  placement?: Placement;
}

const Popover: React.FC<PopoverProps> = ({
  className,
  style,
  summaryClassName,
  summaryStyle,
  trigger,
  children,
  placement,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleSummaryClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent clicking to exit inside the dialog
    if (e.target !== e.currentTarget) {
      return;
    }

    setIsVisible(false);
  };

  return (
    <Details className={className} style={style}>
      <Manager>
        <Summary className={summaryClassName} style={summaryStyle} onClick={handleSummaryClick} isVisible={isVisible}>
          <Reference>
            {({ ref }) => {
              const innerClassName = clsx(trigger.props.className, isVisible && 'active');
              return React.cloneElement(trigger, {
                className: innerClassName,
                ref,
                role: 'button',
                onClick: () => setIsVisible(!isVisible),
              });
            }}
          </Reference>
        </Summary>
        <Menu role="menu">
          {isVisible && (
            <Popper placement={placement}>
              {({ ref, style: menuStyle, placement: innerPlacement }) => {
                const innerStyle = { ...children.props.style, ...menuStyle };
                return React.cloneElement(children, { ref, style: innerStyle, 'data-placement': innerPlacement });
              }}
            </Popper>
          )}
        </Menu>
      </Manager>
    </Details>
  );
};

Popover.defaultProps = {
  placement: 'bottom-start',
};

Popover.displayName = 'Popover';

export default Popover;
