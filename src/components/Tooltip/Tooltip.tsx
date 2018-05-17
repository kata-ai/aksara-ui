import React from 'react';
import classNames from 'classnames';
import omit from 'lodash-es/omit';

interface Props {
  placement?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;

  /**
   * @private
   */
  show?: boolean;

  /**
   * @private
   */
  targetNodePosition?: any;

  /**
   * @private
   */
  style?: any;
}

export default class Tooltip extends React.Component<Props> {
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
    const classes = classNames(
      'tooltip',
      { show },
      `bs-tooltip-${placement}`,
      `kata-tooltip__${placement}`,
      className
    );

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
      <div role="tooltip" className={classes} {...props}>
        <div className="tooltip-inner kata-tooltip__inner">{children}</div>
      </div>
    );
  }
}
