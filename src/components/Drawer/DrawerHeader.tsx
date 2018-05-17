import React from 'react';
import { Button } from 'components/Button';

import DrawerContext from './DrawerContext';

interface Props {
  title: string;
  className?: string;
}

export default (props: Props) => (
  <DrawerContext.Consumer>
    {api => (
      <div
        className={`kata-drawer__heading ${
          api.overflow ? 'kata-drawer__heading--overflow' : ''
        } ${props.className || ''}`}
      >
        <div className="kata-drawer__heading--wrapper">
          <h2 className="heading2 kata-drawer__title text-capitalize">
            {props.title}
          </h2>
          <Button isIcon onClick={api.onClose}>
            <i className="icon-close kata-panel__icon" />
          </Button>
        </div>
      </div>
    )}
  </DrawerContext.Consumer>
);
