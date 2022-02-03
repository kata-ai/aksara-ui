import { IconGrid } from '@aksara-ui/icons';
import { render, act, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { DisclosureNavItem, DisclosureNavTrigger, DisclosureNavContent } from './DisclosureNavItem';
import { Stack, Box } from '../../../layout';
import { SecondaryNavItem } from '..';

describe('Components/Navigation', () => {
  describe('DisclosureNavItem', () => {
    test('renders correctly', () => {
      const { getByRole } = render(
        <DisclosureNavItem>
          <DisclosureNavTrigger title="Parent Nav" icon={IconGrid} />
          <DisclosureNavContent>
            <Stack spacing={'xxs'}>
              <Box px="md">
                <SecondaryNavItem
                  title="Child Nav1"
                  icon={IconGrid}
                  href="https://www.youtube.com/watch?v=QjGYHf0jTRA"
                  target="_blank"
                  rel="noopener noreferrer"
                  labelText="Label"
                />
              </Box>
              <Box px="md">
                <SecondaryNavItem
                  title="Child Nav2"
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
      const parent = getByRole('button', { name: /Parent Nav/i });
      act(() => {
        fireEvent.click(parent);
      });
      const link = getByRole('link', { name: /Child Nav1/i });
      expect(link).toBeVisible();
    });
  });
});
