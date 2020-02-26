import * as React from 'react';
import { toClipboard } from 'copee';

import { SystemWrapper, SystemBlock, SystemSubheading, aksaraIconMaps } from '../utils/storybook';
import { Box, Card, Tooltip, UnstyledButton, notification } from '..';

const readme = require('../../../aksara-icons/README.md');

export default {
  title: 'Icons|Aksara Icons',
  decorators: [SystemWrapper],
  parameters: {
    notes: { markdown: readme },
    jsx: { skip: 2 },
  },
};

const IconGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="lg"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 12 - 24px), 1fr))"
      gridGap="24px"
    >
      {children}
    </Box>
  );
};

const copyText = (text: string) => {
  const success = toClipboard(text);

  if (success) {
    notification.toaster({
      status: 'success',
      message: `Successfully copied \`${text}\` to clipboard.`,
      dismissible: true,
      dismissAfter: 5000,
    });
  }
};

// TODO: Maybe use Suspense + lazy load these icons by path?
const IconDetail: React.FC<{ name: string }> = ({ name, children }) => {
  return (
    <Tooltip style={{ display: 'flex', flexDirection: 'column' }} content={name}>
      <UnstyledButton onClick={() => copyText(name)}>
        <Card elevation={1} width="100%">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height={71}
            p="sm"
          >
            <Box width={24} height={24}>
              {children}
            </Box>
          </Box>
        </Card>
      </UnstyledButton>
    </Tooltip>
  );
};

export const IconLibrary = () => (
  <SystemBlock
    title="Icons"
    subtitle="Iconography uses symbols to represent meaning visually. They communicate a message and should be distinct and informative. Icons should be simple, yet clear enough to grab attention."
    noBackground
  >
    <SystemSubheading>Basic Icons</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.basic.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Document</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.doc.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Menu</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.menu.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Bubbles</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.bubble.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Atoms</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.atoms.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Chart</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.chart.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>AI</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.ai.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>User</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.user.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Media</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.media.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Social</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.social.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
    <SystemSubheading>Panel</SystemSubheading>
    <IconGrid>
      {aksaraIconMaps.panel.map(({ name, children }) => (
        <IconDetail key={name} name={name}>
          {children}
        </IconDetail>
      ))}
    </IconGrid>
  </SystemBlock>
);
