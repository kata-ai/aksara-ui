import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Box } from '../../../layout';
import { Text } from '../../../typography';
import List from './List';

interface Item {
  name: string;
  status: string;
  role: string;
}
const handleSelect = jest.fn(x => x.name);
describe('components/List', () => {
  describe('<List />', () => {
    test('renders correctly', () => {
      const items: { selected: boolean; data: Item }[] = [
        {
          selected: true,
          data: {
            name: 'Name Dummy 1',
            status: 'approved',
            role: 'Manager',
          },
        },
        {
          selected: false,
          data: {
            name: 'Name Dummy 2',
            status: 'Pending',
            role: 'Techinal Support',
          },
        },
      ];
      const renderListItem = (data: Item) => (
        <Box display="flex" width="100%">
          <Box flex="1">
            <Text>{data.name}</Text>
          </Box>
          <Box width="200px">
            <Text>{data.role}</Text>
          </Box>
          <Box width="200px">
            <Text>{data.status}</Text>
          </Box>
        </Box>
      );
      const renderHeader = () => {
        return (
          <Box display="flex" width="100%">
            <Box flex="1">
              <Text fontWeight="700" fontSize="12px" lineHeight="16px">
                Name
              </Text>
            </Box>
            <Box width="200px" fontWeight="700" fontSize="12px" lineHeight="16px">
              <Text>Role</Text>
            </Box>
            <Box width="200px" fontWeight="700" fontSize="12px" lineHeight="16px">
              <Text>Status</Text>
            </Box>
          </Box>
        );
      };

      const { container, getAllByTestId } = render(
        <Box>
          <List
            items={items}
            keyExtractor={(data, index) => `${data.name}-${index}`}
            header={renderHeader()}
            renderItem={renderListItem}
            onSelectItem={handleSelect}
          />
        </Box>
      );

      expect(container.firstChild).toBeInTheDocument();
      const listItem = getAllByTestId('list-item');

      fireEvent.click(listItem[0]);

      expect(handleSelect).toBeCalledTimes(1);
      expect(handleSelect).toReturnWith('Name Dummy 1');
    });
  });
});
