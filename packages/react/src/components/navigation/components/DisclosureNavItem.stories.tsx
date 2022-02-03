import * as React from 'react';
import { IconGrid } from '@aksara-ui/icons';
import { DisclosureNavItem, DisclosureNavTrigger, DisclosureNavContent } from './DisclosureNavItem';
import { SecondaryNavItem } from '..';
import { Stack, Box } from '../../../layout';

export default {
  title: 'Core/Components/Navigation/DisclosureNavItem',
  component: DisclosureNavItem,
};

export const Example = () => {
  return (
    <DisclosureNavItem>
      <DisclosureNavTrigger title="Parent Nav" icon={IconGrid} />
      <DisclosureNavContent>
        <Stack spacing={'xxs'}>
          <Box px="md">
            <SecondaryNavItem
              title="Child Nav"
              icon={IconGrid}
              href="https://www.youtube.com/watch?v=QjGYHf0jTRA"
              target="_blank"
              rel="noopener noreferrer"
              labelText="Label"
            />
          </Box>
          <Box px="md">
            <SecondaryNavItem
              title="Child Nav"
              icon={IconGrid}
              href="https://www.youtube.com/watch?v=QjGYHf0jTRA"
              target="_blank"
              rel="noopener noreferrer"
              labelText="Label"
            />
          </Box>
        </Stack>
      </DisclosureNavContent>
    </DisclosureNavItem>
  );
};
