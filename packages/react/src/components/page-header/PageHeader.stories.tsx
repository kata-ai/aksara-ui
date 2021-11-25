import { IconArrowLeft, IconChevronDown } from '@aksara-ui/icons';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { theme } from '../../theme';
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
          <Button type="button" icon={IconChevronDown} iconPosition="right" onClick={action('click')}>
            Label
          </Button>
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
          <Button type="button" icon={IconChevronDown} iconPosition="right" onClick={action('click')}>
            Label
          </Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
      backButton={
        <IconButton variant="plain" aria-label="Back" size="lg">
          <IconArrowLeft aria-hidden fill={theme.colors.greydark02} />
        </IconButton>
      }
    />
  );
};

export const WithChildren = () => {
  return (
    <PageHeader
      title="Title"
      actions={
        <ButtonGroup size="md">
          <Button type="button" icon={IconChevronDown} iconPosition="right" onClick={action('click')}>
            Label
          </Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
      backButton={
        <IconButton variant="plain" aria-label="Back" size="lg">
          <IconArrowLeft aria-hidden fill="currentColor" />
        </IconButton>
      }
    >
      Filter Section
    </PageHeader>
  );
};
