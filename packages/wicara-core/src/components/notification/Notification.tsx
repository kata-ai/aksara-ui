/* eslint-disable consistent-return */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ToasterSettings, ToasterHandler } from './utils/types';
import NotificationManager from './NotificationManager';

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

/**
 * Base class for interacting with the notifications system.
 */
export default class Notification {
  private toasterHandler?: ToasterHandler = undefined;

  constructor() {
    if (!isBrowser) return;

    const container = document.createElement('div');
    container.setAttribute('data-wicara-notification-container', '');
    document.body.appendChild(container);

    ReactDOM.render(<NotificationManager bindToaster={this.bindToaster} />, container);
  }

  public toaster = (settings: ToasterSettings) => {
    if (!this.toasterHandler) {
      return;
    }

    return this.toasterHandler({ ...settings });
  };

  private bindToaster = (handler: ToasterHandler) => {
    this.toasterHandler = handler;
  };
}
