import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { Transition } from 'react-transition-group';
import { ToasterSettings, NotificationStatus } from '../utils/types';
import { ANIMATION_DURATION, TOASTER_WIDTH } from '../utils/constants';
import { boxShadow } from '../../../utils/index';
import determineToasterColor from '../utils/determineToasterColor';

interface WithStatusProps {
  status?: NotificationStatus;
}

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

const Icon = styled('i')<WithStatusProps>`
  vertical-align: middle;
  color: ${props => determineToasterColor(props.status)};
`;

const Title = styled('h4')<WithStatusProps>`
  color: ${props => determineToasterColor(props.status)};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Message = styled('p')`
  &:last-child {
    margin-bottom: 0;
  }
`;

const Right = styled('div')`
  flex: 1 1 auto;

  &:not(:first-child) {
    margin-left: 12px;
  }
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
    status: 'default',
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
    const { title, message, status, allowHTML } = this.props;

    return (
      <Inner>
        {status !== 'default' ? <div>{status ? this.renderToasterIcon(status) : null}</div> : null}

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
    return title ? <Title status={status}>{title}</Title> : null;
  };

  private renderToasterIcon = (status: ToasterSettings['status']) => {
    if (status === 'default') {
      return null;
    }

    return <Icon className={`icon-${status}`} status={status} />;
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
