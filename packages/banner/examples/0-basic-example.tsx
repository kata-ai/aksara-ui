import React, { Fragment } from 'react';

import { Banner } from '../src/index';

const BannerExample0 = () => (
  <Fragment>
    <div style={{ marginBottom: '8px' }}>
      <Banner
        state="success"
        message="A banner! - You've succesfully read it."
      />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Banner
        state="info"
        message="This banner shows information that isn't critical, but worth knowing."
      />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Banner
        state="error"
        message="Uh oh, something's not right with this banner - try fixing some things?"
      />
    </div>
    <div style={{ marginBottom: '8px' }}>
      <Banner
        state="warning"
        message="Heads up - this banner isn't looking good, tread with caution."
      />
    </div>
  </Fragment>
);

export default BannerExample0;
