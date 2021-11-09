/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { toClipboard } from 'copee';

import { Box, Card, Tooltip, UnstyledButton, notification } from '../..';

export const IconGrid: React.FC = ({ children }) => {
  return (
    <Box
      mt="lg"
      mb="xl"
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(calc(1116px / 12 - 24px), 1fr))"
      gridGap="24px"
      p="xxl"
      backgroundColor="grey02"
    >
      {children}
    </Box>
  );
};

export const copyText = (text: string) => {
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
export const IconDetail: React.FC<{ name: string }> = ({ name, children }) => {
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
