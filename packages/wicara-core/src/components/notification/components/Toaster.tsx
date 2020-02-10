import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Transition } from 'react-transition-group';

import { Text, Card, Heading, Box } from '../../../foundations';
import { ToasterSettings, NotificationStatus } from '../utils/types';
import { ANIMATION_DURATION, TOASTER_WIDTH } from '../utils/constants';
import toasterVariants from './variants';

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
  color: ${props => themeGet(props.status === 'default' ? 'colors.grey09' : 'colors.grey01')(props)};
`;

const Title = styled(Heading)<WithStatusProps>`
  color: ${props => themeGet(props.status === 'default' ? 'colors.grey09' : 'colors.grey01')(props)};
`;

const MessageText = styled(Text)<WithStatusProps>`
  color: ${props => themeGet(props.status === 'default' ? 'colors.grey08' : 'colors.grey01')(props)};
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

const Inner = styled(Card)<WithStatusProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  padding: 16px;
  border: none;
  ${variant({
    prop: 'status',
    variants: toasterVariants,
  })}
  cursor: pointer;
`;

interface ToasterState {
  isOpen?: boolean;
}

export default class Toaster extends React.PureComponent<ToasterSettings, ToasterState> {
  private closeTimer: number | null = null;

  static defaultProps: Partial<ToasterSettings> = {
    status: 'default',
    position: 'br',
    dismissible: false,
    dismissAfter: 5000,
  };

  constructor(props: ToasterSettings) {
    super(props);

    this.state = {
      isOpen: true,
    };
  }

  public componentDidMount() {
    this.startCloseTimer();
  }

  public componentWillUnmount() {
    this.clearCloseTimer();
  }

  private renderInnerToaster = () => {
    const { title, message, status, allowHTML } = this.props;

    return (
      <Inner status={status} elevation={5}>
        {status !== 'default' ? <Box mr="md">{status ? this.renderToasterIcon(status) : null}</Box> : null}

        <Box flex="1 1 auto">
          {this.renderToasterTitle(title, status)}
          {allowHTML && message ? (
            <Box dangerouslySetInnerHTML={{ __html: message }} />
          ) : (
            <Box>
              <MessageText display="block" scale={200} status={status}>
                {message}
              </MessageText>
            </Box>
          )}
        </Box>
      </Inner>
    );
  };

  private renderToasterTitle = (title?: string, status?: ToasterSettings['status']) => {
    return title ? (
      <Title as="h4" mt={0} mb="xs" scale={200} status={status}>
        {title}
      </Title>
    ) : null;
  };

  private renderToasterIcon = (status: ToasterSettings['status']) => {
    if (status === 'default') {
      return null;
    }

    return <Icon className={`icon-${status}`} status={status} />;
  };

  private startCloseTimer = () => {
    const { dismissAfter } = this.props;
    this.closeTimer = setTimeout(() => {
      this.close();
    }, dismissAfter);
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
      isOpen: false,
    });
  };

  public render() {
    const { id, onRemove } = this.props;
    const { isOpen } = this.state;

    return (
      <Transition
        appear
        in={isOpen}
        timeout={{
          enter: ANIMATION_DURATION + 100,
          exit: ANIMATION_DURATION + 400,
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
}
