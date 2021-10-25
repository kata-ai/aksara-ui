import * as React from 'react';
import { Story } from '@storybook/react';

import { Stack, Box } from '../../../layout';
import { Anchor, Paragraph } from '../../../typography';
import { Button } from '../../button';
import Message, { MessageProps } from './Message';

export default {
  title: 'Core/Components/Message',
  component: Message,
  argTypes: {
    variant: {
      options: ['default', 'info', 'critical', 'success', 'warning'],
    },
  },
};

interface VisibleProps {
  render?: (onClose: () => void) => React.ReactNode;
  children?: (onClose: () => void) => React.ReactNode;
}

const Visible: React.FC<VisibleProps> = ({ render, children, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const renderInner = () => {
    if (render) {
      return (
        <Box {...rest}>
          {isOpen ? (
            render(handleClose)
          ) : (
            <button type="button" onClick={() => setIsOpen(true)}>
              Toggle message
            </button>
          )}
        </Box>
      );
    }

    if (children) {
      return (
        <Box {...rest}>
          {isOpen ? (
            children(handleClose)
          ) : (
            <button type="button" onClick={() => setIsOpen(true)}>
              Toggle message
            </button>
          )}
        </Box>
      );
    }

    return <>No inner component defined.</>;
  };

  return renderInner();
};

export const InSection: Story<MessageProps> = ({ message, variant }) => {
  return (
    <Stack spacing="md">
      <Message message={message} variant={variant} />
      <Message
        message={
          <Paragraph display="inline-block" scale={200}>
            {message}{' '}
            <Anchor href="https://www.youtube.com/watch?v=P_mQpbCSQOo" target="_blank" rel="noopener noreferrer">
              Random link
            </Anchor>
          </Paragraph>
        }
        variant={variant}
      />
      <Message
        message={
          <Stack spacing="xs">
            <Paragraph scale={200}>{message}</Paragraph>
            <Box>
              <Button>Label</Button>
            </Box>
          </Stack>
        }
        variant={variant}
      />
    </Stack>
  );
};

InSection.args = {
  message: 'Trying to tell short and helpful information just in 1 sentence.',
  variant: 'default',
};

export const Page: Story<MessageProps> = ({ title, message, variant }) => {
  return (
    <Stack spacing="md">
      <Message title={title} message={message} variant={variant} />
      <Message
        title={title}
        message={
          <Paragraph display="inline-block" scale={200}>
            {message}{' '}
            <Anchor href="https://www.youtube.com/watch?v=P_mQpbCSQOo" target="_blank" rel="noopener noreferrer">
              Random link
            </Anchor>
          </Paragraph>
        }
        variant={variant}
      />
      <Message
        title={title}
        message={
          <Stack spacing="xs">
            <Paragraph scale={200}>{message}</Paragraph>
            <Box>
              <Button>Label</Button>
            </Box>
          </Stack>
        }
        variant={variant}
      />
    </Stack>
  );
};

Page.args = {
  ...InSection.args,
  title: 'Message Title',
};

export const Closable: Story<MessageProps> = ({ message, title, variant }) => {
  return (
    <Stack spacing="md">
      <Visible render={handleClose => <Message message={message} variant={variant} onClose={handleClose} />} />
      <Visible
        render={handleClose => (
          <Message
            message={
              <Paragraph display="inline-block" scale={200}>
                {message}{' '}
                <Anchor href="https://www.youtube.com/watch?v=P_mQpbCSQOo" target="_blank" rel="noopener noreferrer">
                  Random link
                </Anchor>
              </Paragraph>
            }
            variant={variant}
            onClose={handleClose}
          />
        )}
      />
      <Visible
        render={handleClose => (
          <Message
            message={
              <Stack spacing="xs">
                <Paragraph scale={200}>{message}</Paragraph>
                <Box>
                  <Button>Label</Button>
                </Box>
              </Stack>
            }
            variant={variant}
            onClose={handleClose}
          />
        )}
      />
      <Visible
        render={handleClose => <Message title={title} message={message} variant={variant} onClose={handleClose} />}
      />
      <Visible
        render={handleClose => (
          <Message
            title={title}
            message={
              <Paragraph display="inline-block" scale={200}>
                {message}{' '}
                <Anchor href="https://www.youtube.com/watch?v=P_mQpbCSQOo" target="_blank" rel="noopener noreferrer">
                  Random link
                </Anchor>
              </Paragraph>
            }
            variant={variant}
            onClose={handleClose}
          />
        )}
      />
      <Visible
        render={handleClose => (
          <Message
            title={title}
            message={
              <Stack spacing="xs">
                <Paragraph scale={200}>{message}</Paragraph>
                <Box>
                  <Button>Label</Button>
                </Box>
              </Stack>
            }
            variant={variant}
            onClose={handleClose}
          />
        )}
      />
    </Stack>
  );
};

Closable.args = {
  message: 'Trying to tell short and helpful information just in 1 sentence.',
  title: 'Message title',
  variant: 'default',
};
