import React, { Fragment } from 'react';

import { Banner } from '../src/index';

interface BannerState {
  state: string;
  message: string;
  open?: boolean;
}

class BannerExample1 extends React.Component<{}, BannerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      state: 'warning',
      message: 'Hey! Now close this banner by clicking that X button.',
      open: false
    };
  }

  toggleBanner = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { state, message, open } = this.state;

    return (
      <Fragment>
        <div>
          {open ? (
            <Banner
              state={state as any}
              message={message}
              onClose={() => this.toggleBanner()}
            />
          ) : (
            <button onClick={() => this.toggleBanner()}>Open banner</button>
          )}
        </div>
      </Fragment>
    );
  }
}

export default BannerExample1;
