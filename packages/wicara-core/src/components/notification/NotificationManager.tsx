/* eslint-disable react/sort-comp */

import * as React from 'react';
import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';

import Toaster from './components/Toaster';
import { TOASTER_WIDTH } from './utils/constants';
import { ToasterHandler, ToasterSettings } from './utils/types';

interface Props {
  bindToaster: (handler: ToasterHandler) => void;
}

interface State {
  toasts: ToasterSettings[];
}

const ToasterWrapper = styled('div')`
  position: fixed;
  bottom: 0;
  right: 0;
  width: ${TOASTER_WIDTH}px;
  margin-right: 20px;
  z-index: 999;
`;

export default class NotificationManager extends React.PureComponent<Props, State> {
  public static currentCount = 0;

  constructor(props: Props) {
    super(props);

    props.bindToaster(this.toaster);

    this.state = {
      toasts: []
    };
  }

  private toaster = (settings: ToasterSettings) => {
    const instance = this.createToastInstance(settings);

    this.setState(previousState => {
      return {
        toasts: [instance, ...previousState.toasts]
      };
    });

    return instance;
  };

  public render() {
    const { toasts } = this.state;
    return (
      <ToasterWrapper>
        <TransitionGroup>
          {toasts.map(({ id, ...props }) => {
            return <Toaster key={id} id={id} onRemove={() => this.removeToaster(id)} {...props} />;
          })}
        </TransitionGroup>
      </ToasterWrapper>
    );
  }

  private createToastInstance = (settings: ToasterSettings): ToasterSettings => {
    const { id, ...rest } = settings;

    // eslint-disable-next-line no-plusplus
    const uniqueId = ++NotificationManager.currentCount;
    const generatedId = `${id || 'toaster'}-${uniqueId}`;

    return {
      id: generatedId,
      ...rest
    };
  };

  private removeToaster = (id?: string | number) => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.filter(toast => toast.id !== id)
      };
    });
  };
}
