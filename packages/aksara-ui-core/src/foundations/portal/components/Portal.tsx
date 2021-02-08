import * as React from 'react';
import * as ReactDOM from 'react-dom';

const supportsPortal = typeof ReactDOM.createPortal === 'function';

class Portal extends React.Component {
  container: HTMLDivElement | undefined;

  constructor(props: Record<string, never>) {
    super(props);

    if (typeof window !== 'undefined') {
      this.container = document.createElement('div');
      this.container.setAttribute('data-aksara-portal', '');
    }
  }

  public componentDidMount() {
    if (this.container) {
      document.body.appendChild(this.container);
    }
  }

  public componentWillUnmount() {
    if (this.container) {
      document.body.removeChild(this.container);
    }
  }

  public render(): React.ReactPortal | null {
    const { children } = this.props;

    if (supportsPortal && this.container) {
      return ReactDOM.createPortal(children, this.container);
    }

    return null;
  }
}

export default Portal;
