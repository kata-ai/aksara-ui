import React, { ReactElement } from 'react';
import classNames from 'classnames';

type DropdownDirection = 'up' | 'down' | 'left' | 'right';

interface DropdownMenuProps {
  isOpen?: boolean;
  right?: boolean;
  className?: string;

  // Private
  direction?: DropdownDirection;
  onSelect?(value?: string | number | boolean): void;
}

class DropdownMenu extends React.Component<DropdownMenuProps> {
  static defaultProps = {
    right: false
  };

  static displayName = 'DropdownMenu';

  render() {
    const { isOpen, right, direction, className, onSelect } = this.props;
    const classes = classNames(
      'dropdown-menu',
      className,
      right ? 'dropdown-menu-right' : false,
      `kata-drop${direction}__menu`,
      right ? `kata-drop${direction}__menu--right` : false,
      isOpen ? 'show' : false
    );

    return (
      <div className={classes}>
        {React.Children.map(
          this.props.children,
          (Item: ReactElement<any>) =>
            Item
              ? React.cloneElement(Item, {
                  onSelect
                })
              : Item
        )}
      </div>
    );
  }
}

export default DropdownMenu;
