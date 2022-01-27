import { render } from '@testing-library/react';
import * as React from 'react';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import SaveBar from './SaveBar';

describe('Components/PageHeader', () => {
  describe('SaveBar', () => {
    test('renders title correctly', () => {
      const { getByText } = render(
        <SaveBar
          isShow
          containerStyle={{
            maxWidth: '800px',
            px: 'xxl',
          }}
          label="Unsaved Changes"
          actions={
            <ButtonGroup size="md">
              <Button type="button">Label</Button>
              <Button variant="primary">Label</Button>
            </ButtonGroup>
          }
        />
      );

      const title = getByText(/Unsaved Changes/i);
      expect(title).toBeVisible();
    });
    test('renders actions correctly', () => {
      const { getAllByRole } = render(
        <SaveBar
          isShow
          containerStyle={{
            maxWidth: '800px',
            px: 'xxl',
          }}
          label="Unsaved Changes"
          actions={
            <ButtonGroup size="md">
              <Button type="button">Label</Button>
              <Button variant="primary">Label</Button>
            </ButtonGroup>
          }
        />
      );

      const actions = getAllByRole('button');
      expect(actions).toHaveLength(2);
    });

    test('hide savebar', () => {
      const { queryByText } = render(
        <SaveBar
          isShow={false}
          containerStyle={{
            maxWidth: '800px',
            px: 'xxl',
          }}
          label="Unsaved Changes"
          actions={
            <ButtonGroup size="md">
              <Button type="button">Label</Button>
              <Button variant="primary">Label</Button>
            </ButtonGroup>
          }
        />
      );

      const title = queryByText(/Unsaved Changes/i);
      expect(title).toBeNull();
    });
  });
});
