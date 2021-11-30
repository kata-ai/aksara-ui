import * as React from 'react';
import { IconGrid } from '@aksara-ui/icons';
import SecondaryNavItem from './SecondaryNavItem';

export default {
  title: 'Core/Components/Navigation/SecondaryNavItem',
  component: SecondaryNavItem,
};

export const Example = () => {
  return <SecondaryNavItem title="Profile" icon={IconGrid} />;
};

export const IsActive = () => {
  return (
    <SecondaryNavItem
      title="Flow"
      icon={IconGrid}
      href="https://www.youtube.com/watch?v=QjGYHf0jTRA"
      target="_blank"
      rel="noopener noreferrer"
      labelText="Label"
      isActive
    />
  );
};

export const Disclosure = () => {
  return (
    <SecondaryNavItem
      title="Flow"
      icon={IconGrid}
      href="https://www.youtube.com/watch?v=QjGYHf0jTRA"
      target="_blank"
      rel="noopener noreferrer"
      variant="disclosure"
    />
  );
};

export const Disabled = () => {
  return <SecondaryNavItem title="Flow" icon={IconGrid} labelText="Label" disabled />;
};
