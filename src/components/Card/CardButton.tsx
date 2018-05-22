import React from 'react';
import classNames from 'classnames';

interface Props {
  label: string;
  icon?: string;
  className?: string;
  onClick?: Function;
}

export default class CardButton extends React.Component<Props> {
  triggerOnClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const classes = classNames('kata-card__button', this.props.className);

    return (
      <div className={classes} onClick={this.triggerOnClick}>
        <div className="kata-card__button-icon">
          <i className={`icon-${this.props.icon}`} />
        </div>
        <div className="kata-card__button-label">{this.props.label}</div>
      </div>
    );
  }
}
