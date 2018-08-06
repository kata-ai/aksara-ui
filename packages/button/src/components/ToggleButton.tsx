import React from 'react';

export interface ToggleButtonStates {
  active: boolean;
}

export interface ToggleButtonProps {
  active?: boolean;
  onToggle?(state: boolean);
  renderActive(): JSX.Element;
  renderInactive(): JSX.Element;
}

export default class ToggleButton extends React.Component<
  ToggleButtonProps,
  ToggleButtonStates
> {
  static defaultProps = {
    active: false
  };

  static getDerivedStateFromProps(props: ToggleButtonProps) {
    return {
      active: props.active
    };
  }

  handleToggle = () => {
    this.setState(
      {
        active: !this.state.active
      },
      () => {
        if (this.props.onToggle) {
          this.props.onToggle(this.state.active);
        }
      }
    );
  };

  render() {
    return (
      <div className="kata-toggle-button" onClick={this.handleToggle}>
        {this.renderState()}
      </div>
    );
  }

  renderState() {
    if (this.state.active) {
      return this.props.renderActive();
    }
    return this.props.renderInactive();
  }
}
