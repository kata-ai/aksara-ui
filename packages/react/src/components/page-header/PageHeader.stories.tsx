import * as React from 'react';
import { IconArrowLeft } from '@aksara-ui/icons';
import { Button, IconButton } from '../button';
import { ButtonGroup } from '../button-group';

import PageHeader from './PageHeader';

export default {
  title: 'Core/Components/Page Header',
  component: PageHeader,
};

export const Example = () => {
  return <PageHeader title="Title" />;
};

export const WithActions = () => {
  return (
    <PageHeader
      title="Title"
      actions={
        <ButtonGroup size="md">
          <Button>Label</Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
    />
  );
};

export const WithBackButton = () => {
  return (
    <PageHeader
      title="Title"
      actions={
        <ButtonGroup size="md">
          <Button>Label</Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
      backButton={
        <IconButton variant="plain" aria-label="Back">
          <IconArrowLeft aria-hidden fill="currentColor" />
        </IconButton>
      }
    />
  );
};
