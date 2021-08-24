import * as React from 'react';
import { IconGrid } from '@aksara-ui/icons';
import PrimaryNavItem from './PrimaryNavItem';

export default {
  title: 'Core/Components/Navigation/PrimaryNavItem',
  component: PrimaryNavItem,
};

export const Example = () => {
  return (
    <PrimaryNavItem
      icon={IconGrid}
      href="https://www.youtube.com/watch?v=QjGYHf0jTRA"
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export const IsActive = () => {
  return (
    <PrimaryNavItem
      icon={IconGrid}
      href="https://www.youtube.com/watch?v=QjGYHf0jTRA"
      target="_blank"
      rel="noopener noreferrer"
      isActive
    />
  );
};

export const Disabled = () => {
  return <PrimaryNavItem icon={IconGrid} disabled />;
};
