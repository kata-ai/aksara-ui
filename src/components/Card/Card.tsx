import React, { CSSProperties } from 'react';
import classNames from 'classnames';

import './Card.scss';

export interface Props {
  title?: string;
  action?: any;
  asButton?: boolean;
  noWrap?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: any;
  style?: CSSProperties;
  avatar?: any;
}

export default class Card extends React.Component<Props> {
  render() {
    const classes = classNames(
      'kata-card',
      this.props.disabled && 'kata-card--disabled',
      this.props.className
    );

    const innerClasses = classNames({
      'kata-card__body': true,
      'kata-card__body--as-button': this.props.asButton
    });

    return this.props.noWrap ? (
      <div
        className={classes}
        onClick={this.props.onClick}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    ) : (
      <div
        className={classes}
        onClick={this.props.onClick}
        style={this.props.style}
      >
        {!this.props.asButton && this.props.title ? (
          <div className="kata-card__heading">
            <div className="kata-card__heading-title kata-card__heading--ellipsis heading2">
              {this.props.avatar && (
                <img
                  src={this.props.avatar}
                  className="kata-card__avatar mr-1"
                />
              )}
              {this.props.title}
            </div>
            {this.props.action && (
              <div
                className="kata-card__heading-action"
                onClick={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                {this.props.action}
              </div>
            )}
          </div>
        ) : null}
        <div className={innerClasses}>{this.props.children}</div>
      </div>
    );
  }
}
