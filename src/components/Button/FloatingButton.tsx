import React from 'react';
import classNames from 'classnames';
import Circle from '../Loading/Circle';

type Color = 'primary' | 'success' | 'danger' | 'warning';

interface Props {
  disabled?: boolean;
  color?: Color;
  icon: string;
  size?: 'lg' | 'sm' | '';
  className?: string;
  onClick?: any;
  type?: 'button' | 'submit';
  active?: boolean;
  isLoading?: boolean;
}

class FloatingButton extends React.Component<Props> {
  static defaultProps = {
    color: 'primary',
    type: 'button',
    active: false,
    disabled: false
  };

  onClick = e => {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  render() {
    const {
      className,
      icon,
      size,
      color,
      type,
      active,
      disabled,
      isLoading,
      ...props
    } = this.props;

    const classes = classNames(
      'btn',
      'kata-btn-float',
      `kata-btn-float__${color}`,
      {
        active
      },
      className
    );

    return (
      <button
        type={type}
        className={classes}
        onClick={this.onClick}
        disabled={disabled}
        {...props}
      >
        {isLoading ? (
          <React.Fragment>
            <Circle size={40} />
          </React.Fragment>
        ) : (
          <i className={`icon-${icon}`} />
        )}
      </button>
    );
  }
}

export default FloatingButton;
