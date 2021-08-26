import { render } from '@testing-library/react';
import { IconArrowLeft } from '@aksara-ui/icons';
import * as React from 'react';
import { Button, IconButton } from '../button';
import PageHeader from './PageHeader';

describe('Components/Navigation', () => {
  describe('PrimaryNavItem', () => {
    test('renders title correctly', () => {
      const { getByRole } = render(<PageHeader title="Title" />);

      const title = getByRole('heading', {
        name: /title/i,
      });
      expect(title).toBeVisible();
    });

    test('renders action buttons correctly', () => {
      const { getByRole } = render(<PageHeader title="Title" actions={<Button>Label</Button>} />);

      const button = getByRole('button', {
        name: /label/i,
      });
      expect(button).toBeVisible();
    });

    test('renders back button correctly', () => {
      const { getByRole } = render(
        <PageHeader
          title="Title"
          actions={<Button variant="primary">Label</Button>}
          backButton={
            <IconButton variant="plain" aria-label="Back">
              <IconArrowLeft aria-hidden fill="currentColor" />
            </IconButton>
          }
        />
      );

      const backButton = getByRole('button', {
        name: /back/i,
      });
      expect(backButton).toBeVisible();
    });
  });
});
