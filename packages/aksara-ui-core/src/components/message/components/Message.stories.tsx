import * as React from 'react';

import { ComponentBlock, SystemWrapper, SystemBlock } from '../../../utils/storybook';
import Message from './Message';
import { Stack, Box } from '../../../foundations';

const readme = require('../README.md');

export default {
  title: 'Core|Components/Message',
  component: Message,
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
  },
};

export const BasicExample = () => (
  <SystemBlock
    title="Message"
    subtitle="Message blocks are used to convey important information to users."
    noBackground
  >
    <ComponentBlock title="Usage">
      <Stack spacing="sm">
        <Message message="Trying to tell short and helpful information just in 1 sentence." />
        <Message message="Trying to tell short and helpful information just in 1 sentence." state="info" />
        <Message message="Trying to tell short and helpful information just in 1 sentence." state="success" />
        <Message message="Trying to tell short and helpful information just in 1 sentence." state="error" />
        <Message message="Trying to tell short and helpful information just in 1 sentence." state="warning" />
      </Stack>
    </ComponentBlock>
  </SystemBlock>
);

export const SectionLevel = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <SystemBlock
      title="Message"
      subtitle="Message blocks are used to convey important information to users."
      noBackground
    >
      <ComponentBlock title="Usage">
        <Stack spacing="sm">
          {isOpen ? (
            <Message
              title="Check out our Natural Language documentation"
              message="You can learn how to improve your Natural Language by reading our documentation."
              onClose={() => setIsOpen(false)}
            />
          ) : (
            <Box>
              <button type="button" onClick={() => setIsOpen(true)}>
                Toggle banner
              </button>
            </Box>
          )}
          <Message
            title="Prediction results will show up here after you submit a sentence"
            message="Before train your prediction sentence, please learn how to use prediction in order to train your natural language."
            state="info"
          />
          <Message
            title="Your project is ready to deploy"
            message="This project has been completed and ready to live. Latest changes on Saturday, 21 March 2020 by Adri Muhammad."
            state="success"
          />
          <Message
            title="Risk action of updating training data"
            message="You intent to delete several training data, please learn how to utilize data set to improve your project performance."
            state="error"
          />
          <Message
            title="Rollback to previous version"
            message="This action will rollback all of your configurations into version 3.0.1, please learn how deployment version works."
            state="warning"
          />
        </Stack>
      </ComponentBlock>
    </SystemBlock>
  );
};

export const Closable = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <SystemBlock title="Message" subtitle="Add an 'onClose' prop to add a close button handler">
      <ComponentBlock title="Usage">
        {isOpen ? (
          <Message
            message="Hey, no peeking! Close this banner by clicking that X button."
            state="warning"
            onClose={() => setIsOpen(false)}
          />
        ) : (
          <button type="button" onClick={() => setIsOpen(true)}>
            Toggle banner
          </button>
        )}
      </ComponentBlock>
    </SystemBlock>
  );
};
