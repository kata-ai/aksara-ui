import * as React from 'react';
import { select, text } from '@storybook/addon-knobs';

import { SystemWrapper } from '../../../utils/storybook';
import { Stack, Box } from '../../../foundations';
import { messageVariants } from '../variants';
import Message, { MessageStates } from './Message';

export default {
  title: 'Core|Components/Message',
  component: Message,
  decorators: [SystemWrapper],
};

const messageVariantOptions: Record<string, string> = {};
Object.keys(messageVariants).forEach((variant: string) => {
  messageVariantOptions[variant] = variant;
});

export const BasicExample = () => (
  <Message
    message={text('Message', 'Trying to tell short and helpful information just in 1 sentence.')}
    state={select<MessageStates>('State', messageVariantOptions, 'general')}
  />
);

export const SectionLevel = () => {
  return (
    <Message
      title={text('Title', 'Check out our Natural Language documentation')}
      message={text('Message', 'You can learn how to improve your Natural Language by reading our documentation.')}
      state={select<MessageStates>('State', messageVariantOptions, 'general')}
    />
  );
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
              Toggle banner
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
              Toggle banner
            </button>
          )}
        </Box>
      );
    }

    return <>No inner component defined.</>;
  };

  return renderInner();
};

export const Closable = () => {
  return (
    <Stack spacing="md">
      <Visible
        render={handleClose => (
          <Message
            title="Check out our Natural Language documentation"
            message="You can learn how to improve your Natural Language by reading our documentation."
            onClose={handleClose}
          />
        )}
      />
      <Visible
        render={handleClose => (
          <Message
            title="Prediction results will show up here after you submit a sentence"
            message="Before train your prediction sentence, please learn how to use prediction in order to train your natural language."
            state="info"
            onClose={handleClose}
          />
        )}
      />
      <Visible
        render={handleClose => (
          <Message
            title="Your project is ready to deploy"
            message="This project has been completed and ready to live. Latest changes on Saturday, 21 March 2020 by Adri Muhammad."
            state="success"
            onClose={handleClose}
          />
        )}
      />
      <Visible
        render={handleClose => (
          <Message
            title="Risk action of updating training data"
            message="You intent to delete several training data, please learn how to utilize data set to improve your project performance."
            state="error"
            onClose={handleClose}
          />
        )}
      />
      <Visible
        render={handleClose => (
          <Message
            title="Rollback to previous version"
            message="This action will rollback all of your configurations into version 3.0.1, please learn how deployment version works."
            state="warning"
            onClose={handleClose}
          />
        )}
      />
    </Stack>
  );
};
