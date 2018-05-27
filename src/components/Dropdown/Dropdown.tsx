import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import omit from 'lodash-es/omit';

export interface Props {
  children: any;
  isOpen?: boolean;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right';

  onSelect?(value?: string | number | boolean): void;
}

class Dropdown extends React.Component<Props> {
  static defaultProps = {
    isOpen: false,
    block: false,
    direction: 'down'
  };

  state = {
    isOpen: false
  };
  handleClickOutside = e => {
    try {
      if (ReactDOM.findDOMNode(this)!.contains(e.target)) {
        // if click event on this element then do nothing
        return;
      }
      this.setState({ isOpen: false });
    } catch (error) {
      // do nothing
    }
  };
  toggle = e => {
    if (this.props.disabled) {
      return;
    }
    const { isOpen } = this.state;
    if (!isOpen) {
      // if dropdown will open then add event listener handleClickOutside
      document.addEventListener('click', this.handleClickOutside, false);
    } else {
      // if dropdown will close then remove event listener handleClickOutside
      document.removeEventListener('click', this.handleClickOutside, false);
    }
    this.setState({ isOpen: !this.state.isOpen });
  };
  onSelect = (value?: string | number | boolean) => {
    if (this.props.onSelect && value) {
      this.props.onSelect(value);
    }
    this.setState({ isOpen: false });
  };

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps) {
      this.setState({
        ...this.state,
        isOpen: nextProps.isOpen
      });
    }
  }

  render() {
    const { className, children, block, direction, disabled, ...props } = omit(
      this.props,
      ['isOpen']
    );

    const classes = classNames(
      `kata-drop${direction}`,
      `drop${direction}`,
      'position-relative',
      block ? 'd-block' : 'd-inline-block',
      disabled ? 'disabled' : '',
      className
    );

    return (
      <div className={classes} {...props}>
        {React.Children.map(children, (Item: ReactElement<any>) => {
          return Item &&
            Item.type &&
            ['DropdownMenu', 'DropdownToggle'].some(
              type => type === (Item.type as any).displayName
            )
            ? React.cloneElement(Item, {
                ...props,
                isOpen: this.state.isOpen,
                toggle: this.toggle,
                direction,
                onSelect: this.onSelect
              })
            : Item;
        })}
      </div>
    );
  }
}

export default Dropdown;
