import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Transition from 'react-transition-group/Transition';
import { ToasterSettings, NotificationStatus } from '../types';
import { ANIMATION_DURATION, TOASTER_WIDTH } from '../constants';
import { boxShadow } from '../../../utils/index';

const ToastEnter = keyframes`
  0% {
    right: -${TOASTER_WIDTH}px;
    opacity: 0;
  }

  100% {
    right: 0;
    opacity: 1;
  }
`;

const ToastExit = keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
    max-height: 200px;
    margin-bottom: 20px;
  }

  40% {
    margin-bottom: 20px;
    max-height: 200px;
  }

  50% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(100%);
    opacity: 0;
    max-height: 0;
    margin-bottom: 0;
  }
`;

const Icon = styled('i')`
  vertical-align: middle;
`;

const Title = styled('h4')`
  &:last-child {
    margin-bottom: 0;
  }
`;

const Message = styled('p')`
  &:last-child {
    margin-bottom: 0;
  }
`;

const Left = styled('div')`
  margin-right: 12px;
`;

const Right = styled('div')`
  flex: 1 1 auto;
`;

const Root = styled('div')`
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 20px;
  z-index: 999;
  opacity: 0;

  &[data-state='entering'],
  &[data-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ToastEnter};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ToastExit};
    animation-duration: ${ANIMATION_DURATION * 2}ms;
  }

  .entered {
    right: 0;
    opacity: 1;
  }
`;

const Inner = styled('div')`
  display: flex;
  min-height: 40px;
  padding: 16px;
  border: none;
  border-radius: 4px;
  box-shadow: ${boxShadow.layer400};
  background-color: #fff;
  cursor: pointer;
`;

interface ToasterState {
  isOpen?: boolean;
}

export default class Toaster extends React.PureComponent<ToasterSettings, ToasterState> {
  static defaultProps: Partial<ToasterSettings> = {
    status: NotificationStatus.DEFAULT,
    position: 'br',
    dismissible: false,
    dismissAfter: 5000
  };

  private closeTimer: number | null = null;

  constructor(props: ToasterSettings) {
    super(props);

    this.state = {
      isOpen: true
    };
  }

  public componentDidMount() {
    this.startCloseTimer();
  }

  public componentWillUnmount() {
    this.clearCloseTimer();
  }

  public render() {
    const { id, onRemove } = this.props;
    const { isOpen } = this.state;

    return (
      <Transition
        appear
        in={isOpen}
        timeout={{
          enter: ANIMATION_DURATION + 100,
          exit: ANIMATION_DURATION + 400
        }}
        unmountOnExit
        onExited={onRemove}
      >
        {state => (
          <Root data-state={state} id={id} onClick={() => this.close()}>
            {this.renderInnerToaster()}
          </Root>
        )}
      </Transition>
    );
  }

  private renderInnerToaster = () => {
    const { title, message, status, image, allowHTML } = this.props;

    return (
      <Inner>
        {status || image ? <Left>{status ? this.renderToasterIcon(status) : null}</Left> : null}

        <Right>
          {this.renderToasterTitle(title, status)}
          {allowHTML && message ? (
            <Message dangerouslySetInnerHTML={{ __html: message }} />
          ) : (
            <Message>{message}</Message>
          )}
        </Right>
      </Inner>
    );
  };

  private renderToasterTitle = (title?: string, status?: ToasterSettings['status']) => {
    switch (status) {
      case NotificationStatus.ERROR: {
        return <Title className={status ? `text-danger` : undefined}>{title}</Title>;
      }
      default: {
        return title ? (
          <Title className={status ? `text-${status}` : undefined}>{title}</Title>
        ) : null;
      }
    }
  };

  private renderToasterIcon = (status: ToasterSettings['status']) => {
    if (status === NotificationStatus.DEFAULT) {
      return null;
    }

    switch (status) {
      case NotificationStatus.ERROR: {
        return <Icon className="icon-error text-danger" />;
      }
      default: {
        return <Icon className={`icon-${status} text-${status}`} />;
      }
    }
  };

  private startCloseTimer = () => {
    this.closeTimer = setTimeout(() => {
      this.close();
    }, this.props.dismissAfter);
  };

  private clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  private close = () => {
    this.clearCloseTimer();
    this.setState({
      isOpen: false
    });
  };
}
