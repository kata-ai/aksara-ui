import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';
import { Transition } from 'react-transition-group';
import { IconTickSingle, IconWarningTriangle, IconCloseRounded } from '@aksara-ui/icons';

import { Card } from '../../card';
import { Box } from '../../../layout';
import { Text, Heading } from '../../../typography';
import { ToasterSettings, NotificationStatus } from '../utils/types';
import { ANIMATION_DURATION, TOASTER_WIDTH } from '../utils/constants';
import { toasterVariants, toasterTextVariants } from './variants';

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

const Title = styled(Heading)<WithStatusProps>`
  ${variant({
    prop: 'status',
    variants: toasterTextVariants,
  })}
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
  opacity: 0;

  &[data-toaster-state='entering'],
  &[data-toaster-state='entered'] {
    animation-fill-mode: forwards;
    animation-name: ${ToastEnter};
    animation-duration: ${ANIMATION_DURATION}ms;
  }

  &[data-toaster-state='exiting'] {
    animation-fill-mode: forwards;
    animation-name: ${ToastExit};
    animation-duration: ${ANIMATION_DURATION * 2}ms;
  }

  &[data-toaster-state='entered'] {
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
  private closeTimer: NodeJS.Timeout | null = null;

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

  private renderToasterIcon = () => {
    const { status } = this.props;

    switch (status) {
      case 'default': {
        return null;
      }
      case 'success': {
        return <IconTickSingle fill="currentColor" />;
      }
      case 'warning': {
        return <IconWarningTriangle fill="currentColor" />;
      }
      case 'error': {
        return <IconCloseRounded fill="currentColor" />;
      }
      default: {
        return null;
      }
    }
  };

  private renderInnerToaster = () => {
    const { title, message, status, allowHTML } = this.props;

    return (
      <Inner status={status} elevation={5}>
        {status && status !== 'default' ? this.renderToasterIcon() : null}

        <Right>
          {this.renderToasterTitle(title, status)}
          {allowHTML && message ? (
            <Box dangerouslySetInnerHTML={{ __html: message }} />
          ) : (
            <Box>
              <Text display="block" scale={200}>
                {message}
              </Text>
            </Box>
          )}
        </Right>
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
          <Root data-toaster-state={state} id={id} onClick={() => this.close()}>
            {this.renderInnerToaster()}
          </Root>
        )}
      </Transition>
    );
  }
}
