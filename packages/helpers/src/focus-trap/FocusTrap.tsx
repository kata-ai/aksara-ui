import * as React from 'react';
import { createFocusTrap, FocusTrap as FocusTrapInstance } from 'focus-trap';

interface FocusTrapProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether or not the focus lock is active */
  active: boolean;
}

export default class FocusTrap extends React.Component<FocusTrapProps> {
  private rootRef = React.createRef<HTMLDivElement>();

  private trap?: FocusTrapInstance;

  componentDidMount() {
    const { active } = this.props;
    const rootElement = this.rootRef.current;

    if (rootElement) {
      const trap = createFocusTrap(rootElement, {
        escapeDeactivates: false,
        fallbackFocus: rootElement,
      });

      if (active) {
        trap.activate();
      }

      this.trap = trap;
    }
  }

  componentDidUpdate(prevProps: FocusTrapProps) {
    const { active } = this.props;

    if (this.trap && prevProps.active !== active) {
      if (active) {
        this.trap.activate();
      } else {
        this.trap.deactivate();
      }
    }
  }

  componentWillUnmount() {
    if (this.trap) {
      this.trap.deactivate();
    }
  }

  render() {
    const { active: _, ...restProps } = this.props;

    return <div ref={this.rootRef} tabIndex={-1} {...restProps} />;
  }
}
