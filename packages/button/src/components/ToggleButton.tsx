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

class ToggleButton extends React.Component<
  ToggleButtonProps,
  ToggleButtonStates
> {
  state = {
    active: this.props.active || false
  };

  constructor(props: ToggleButtonProps) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.renderState = this.renderState.bind(this);
  }

  handleToggle() {
    this.setState(
      state => ({
        active: !state.active
      }),
      () => {
        if (this.props.onToggle) {
          this.props.onToggle(this.state.active);
        }
      }
    );
  }

  render() {
    return (
      <div className="kata-toggle-button" onClick={this.handleToggle}>
        {this.renderState()}
      </div>
    );
  }

  private renderState() {
    if (this.state.active) {
      return this.props.renderActive();
    }

    return this.props.renderInactive();
  }
}

export default ToggleButton;
