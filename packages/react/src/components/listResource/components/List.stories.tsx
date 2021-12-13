import * as React from 'react';
import { Box } from '../../../layout';
import { Text } from '../../../typography';
import List from './List';

export default {
  title: 'Core/Components/List',
  component: List,
};
interface Item {
  id: string;
  name: string;
  status: string;
  role: string;
}
export const Example = () => {
  const items: { selected: boolean; data: Item }[] = [
    {
      selected: true,
      data: {
        id: '1',
        name: 'Name Dummy 1',
        status: 'approved',
        role: 'Manager',
      },
    },
    {
      selected: false,
      data: {
        id: '2',
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

// TODO
/**
 * create stories for case header with selected item
 *
 * HOW
 * create state to handle state selection
 * item list raw (all data)
 * selected item
 * item list with select value (using map) -> need to add isActive behavior -> time complexity O(n)
 * untuk create data list + selected -> complexity 0 n log n
 * ubah semua selectedItem ke maphash
 * get value selected dari maphashnya
 *
 */

export const WithSelectedItem = () => {
  const listItem = [
    {
      id: '1',
      name: 'Name Dummy 1',
      status: 'approved',
      role: 'Manager',
    },
    {
      id: '2',
      name: 'Name Dummy 2',
      status: 'Pending',
      role: 'Techinal Support',
    },
  ];
  const [selectedItem, setSelectedItem] = React.useState<Record<string, boolean>>({});
  // n
  const listItemTable = () => {
    return listItem.map(item => {
      return {
        selected: selectedItem ? selectedItem[item.id] : false,
        data: item,
      };
    });
  };
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
        items={listItemTable()}
        keyExtractor={(data, index) => `${data.name}-${index}`}
        header={renderHeader()}
        renderItem={renderListItem}
        onSelectItem={data =>
          setSelectedItem(prev => ({
            ...prev,
            [data.id]: prev[data.id] ? !prev[data.id] : true,
          }))
        }
      />
    </Box>
  );
};
