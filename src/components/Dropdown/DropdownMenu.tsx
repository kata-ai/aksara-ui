import React, { ReactElement } from 'react';
import classNames from 'classnames';

export interface Props {
  isOpen?: boolean;
  right?: boolean;
  className?: string;

  // Private
  direction?: 'up' | 'down' | 'left' | 'right';
  onSelect?(value?: string | number | boolean): void;
}

class DropdownMenu extends React.Component<Props> {
  static defaultProps = {
    right: false
  };

  static displayName = 'DropdownMenu';

  getDirectionClass = direction => {
    if (direction === 'up') {
      return 'dropup-menu';
    }

    return '';
  };

  render() {
    const { isOpen, right, direction, className, onSelect } = this.props;

    return (
      <div
        className={classNames(
          'dropdown-menu',
          className,
          right ? 'dropdown-menu-right' : false,
          `kata-drop${direction}__menu`,
          right ? `kata-drop${direction}__menu--right` : false,
          isOpen ? 'show' : false
        )}
      >
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
