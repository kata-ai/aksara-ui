import * as React from 'react';
import { Meta } from '@storybook/react';
import { IconChevronRight } from '@aksara-ui/icons';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

export default {
  title: 'Core/Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

export const Example = () => {
  return (
    <Breadcrumb
      items={[
        <BreadcrumbItem href="/">Home</BreadcrumbItem>,
        <BreadcrumbItem href="/item-1">Item 1</BreadcrumbItem>,
        <BreadcrumbItem href="/item-2" active>
          Item 2
        </BreadcrumbItem>,
      ]}
      separator={IconChevronRight}
    />
  );
};

export const Overflow = () => {
  return (
    <Breadcrumb
      items={[
        <BreadcrumbItem href="/">Home</BreadcrumbItem>,
        <BreadcrumbItem href="/item-1">Item 1</BreadcrumbItem>,
        <BreadcrumbItem href="/item-2">Item 2</BreadcrumbItem>,
        <BreadcrumbItem href="/item-3">Item 3</BreadcrumbItem>,
        <BreadcrumbItem href="/item-4" active>
          Item 4
        </BreadcrumbItem>,
      ]}
      separator={IconChevronRight}
    />
  );
};
