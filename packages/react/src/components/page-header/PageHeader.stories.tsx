import { IconArrowLeft, IconChevronDown } from '@aksara-ui/icons';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { Button, IconButton } from '../button';
import { ButtonGroup } from '../button-group';
import FilterPageHeader from './components/FilterPageHeader';
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
        <IconButton variant="plain" aria-label="Back">
          <IconArrowLeft aria-hidden fill="currentColor" />
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
        <IconButton variant="plain" aria-label="Back">
          <IconArrowLeft aria-hidden fill="currentColor" />
        </IconButton>
      }
    >
      Filter Section
    </PageHeader>
  );
};

export const WithFilterSection = () => {
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
        <IconButton variant="plain" aria-label="Back">
          <IconArrowLeft aria-hidden fill="currentColor" />
        </IconButton>
      }
    >
      <FilterPageHeader filterData={[{ label: 'tes_label', value: 'tes_value' }]} />
    </PageHeader>
  );
};
