import React from 'react';
import classNames from 'classnames';

export type State = 'error' | 'success' | 'warning' | 'info';

export interface Props {
  state: State;
  message: any;
  className?: string;
  onClose?(e: any): void;
}

class Banner extends React.Component<Props> {
  static defaultProps = {
    state: 'error'
  };

  render() {
    const classes = classNames(
      `kata-banner kata-banner--${this.props.state}`,
      this.props.onClose ? 'kata-banner--closable' : null,
      this.props.className
    );

    return (
      <div className={classes}>
        <div className="kata-banner__icon">
          <i className={`icon-${this.props.state}`} />
        </div>
        <div className="kata-banner__message">{this.props.message}</div>
        {this.props.onClose && (
          <div className="kata-banner__close" onClick={this.props.onClose}>
            <i className="icon-close" />
          </div>
        )}
      </div>
    );
  }
}

export default Banner;
