import * as React from 'react';
import styled from 'styled-components';

import ThemedComponent from '@kata-kit/theme';

import themes from '../theme';

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
      <ThemedComponent themes={themes.button}>
        {themeAttributes => (
          <Root
            className="kata-toggle-button"
            onClick={this.handleToggle}
            {...themeAttributes}
          >
            {this.renderState()}
          </Root>
        )}
      </ThemedComponent>
    );
  }

  private renderState() {
    if (this.state.active) {
      return this.props.renderActive();
    }

    return this.props.renderInactive();
  }
}

const Root = styled('div')``;

export default ToggleButton;
