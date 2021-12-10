import * as React from 'react';
import { Box } from '../../../layout';
import { Text } from '../../../typography';
import List from './List';

export default {
  title: 'Core/Components/List',
  component: List,
};
interface Item {
  name: string;
  status: string;
  role: string;
}
export const Example = () => {
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
  return (
    <Box>
      <List
        items={items}
        keyExtractor={(data, index) => `${data.name}-${index}`}
        header={renderHeader()}
        renderItem={renderListItem}
        onSelectItem={data => console.log('onSelectItem', data)}
      />
    </Box>
  );
};
