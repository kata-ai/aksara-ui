import * as React from 'react';
import { ToasterHandler, ToasterSettings } from './types';
import styled from 'styled-components';

import Toaster from './components/Toaster';
import { TOASTER_WIDTH } from './constants';
import { TransitionGroup } from 'react-transition-group';

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

  public render() {
    return (
      <ToasterWrapper>
        <TransitionGroup>
          {this.state.toasts.map(({ id, ...props }) => {
            return <Toaster key={id} id={id} onRemove={() => this.removeToaster(id)} {...props} />;
          })}
        </TransitionGroup>
      </ToasterWrapper>
    );
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

  private createToastInstance = (settings: ToasterSettings): ToasterSettings => {
    const { id, ...rest } = settings;

    // tslint:disable-next-line
    const uniqueId = ++NotificationManager.currentCount;
    const generatedId = `${settings.id || 'toaster'}-${uniqueId}`;

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
