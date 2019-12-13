import * as React from 'react';
import createFocusTrap, { FocusTrap as FocusTrapInstance } from 'focus-trap';

interface FocusTrapProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether or not the focus lock is active */
  active: boolean;
}

export default class FocusTrap extends React.Component<FocusTrapProps> {
  private rootRef = React.createRef<HTMLDivElement>();

  private trap?: FocusTrapInstance;

  componentDidMount() {
    const rootElement = this.rootRef.current;

    if (rootElement) {
      const trap = createFocusTrap(rootElement, {
        escapeDeactivates: false,
        fallbackFocus: rootElement
      });

      if (this.props.active) {
        trap.activate();
      }

      this.trap = trap;
    }
  }

  componentWillUnmount() {
    if (this.trap) {
      this.trap.deactivate();
    }
  }

  componentDidUpdate(prevProps: FocusTrapProps) {
    if (this.trap && prevProps.active !== this.props.active) {
      this.props.active ? this.trap.activate() : this.trap.deactivate();
    }
  }

  render() {
    const { active, ...restProps } = this.props;

    return <div ref={this.rootRef} tabIndex={-1} {...restProps} />;
  }
}
