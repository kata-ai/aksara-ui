import React, { SyntheticEvent } from 'react';
import classNames from 'classnames';

interface Props {
  value?: string | number | boolean;
  children?: any;
  className?: string;
  header?: boolean;
  divider?: boolean;
  active?: boolean;
  disabled?: boolean;
  onClick?(event: SyntheticEvent<any>): void;

  // private
  onSelect?(value?: string | number | boolean): void;
}

class DropdownItem extends React.Component<Props> {
  static defaultProps = {
    active: false,
    disabled: false
  };

  onClick = (event: SyntheticEvent<any>) => {
    const { value, onClick, onSelect } = this.props;
    if (onClick) {
      onClick(event);
    }
    if (onSelect) {
      onSelect(value);
    }
  };

  render() {
    const {
      value,
      children,
      className,
      header,
      divider,
      active,
      disabled,
      onSelect,
      ...props
    } = this.props;
    const classes = classNames(
      'dropdown-item',
      'kata-dropdown__item',
      {
        active,
        disabled
      },
      className
    );

    if (header) {
      return (
        <div className="dropdown-header kata-dropdown__header">{children}</div>
      );
    }

    if (divider) {
      return <div className="dropdown-divider" />;
    }

    if (React.isValidElement(children)) {
      return React.cloneElement(children as any, {
        ...props,
        className: classes,
        onClick: this.onClick
      });
    }

    return (
      <a {...props} onClick={this.onClick} className={classes}>
        {this.props.children}
      </a>
    );
  }
}

export default DropdownItem;
