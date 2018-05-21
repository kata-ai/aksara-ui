import React from 'react';

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
    return (
      <div
        className={`kata-card__button ${
          this.props.className ? this.props.className : ''
          }`}
        onClick={this.triggerOnClick}
      >
        <div className="kata-card__button-icon">
          <i className={'icon-' + this.props.icon}/>
        </div>
        <div className="kata-card__button-label">{this.props.label}</div>
      </div>
    );
  }
}
