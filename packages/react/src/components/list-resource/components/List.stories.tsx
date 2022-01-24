import * as React from 'react';
import { Box } from '../../../layout';
import { Text } from '../../../typography';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { InputCheckbox } from '../../form/components/InputCheckbox';
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
export const WithSelectedItem = () => {
  const headerCheckboxRef = React.useRef<HTMLInputElement>(null);
  const [selectedItem, setSelectedItem] = React.useState<Record<string, boolean>>({});
  React.useEffect(() => {
    const maxLength = listItem.length;
    const selectedItemLength = Object.keys(selectedItem).length;
    if (headerCheckboxRef.current) {
      if (selectedItemLength === maxLength) {
        headerCheckboxRef.current.readOnly = false;
        headerCheckboxRef.current.checked = true;
        headerCheckboxRef.current.indeterminate = false;
      } else if (selectedItemLength > 0 && selectedItemLength <= maxLength) {
        headerCheckboxRef.current.readOnly = true;
        headerCheckboxRef.current.checked = false;
        headerCheckboxRef.current.indeterminate = true;
      } else {
        headerCheckboxRef.current.readOnly = false;
        headerCheckboxRef.current.checked = false;
        headerCheckboxRef.current.indeterminate = false;
      }
    }
  }, [selectedItem, headerCheckboxRef]);

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
      <Box width="50px">
        <InputCheckbox
          checked={selectedItem[data.id]}
          onClick={() => {
            setSelectedItem(prev => {
              if (prev[data.id]) {
                const { [data.id]: removedValue, ...rest } = prev;
                return rest;
              }
              return {
                ...prev,
                [data.id]: prev[data.id] ? !prev[data.id] : true,
              };
            });
          }}
        />
      </Box>
      <Box flex="1">
        <Text scale={300}>{data.name}</Text>
      </Box>
      <Box width="200px">
        <Text scale={300}>{data.role}</Text>
      </Box>
      <Box width="200px">
        <Text scale={300}>{data.status}</Text>
      </Box>
    </Box>
  );

  const toggleSelectHeader = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked && !e.target.readOnly) {
      const selectAll: Record<string, boolean> = {};
      listItem.forEach(item => {
        selectAll[item.id] = true;
      });
      setSelectedItem(selectAll);
    } else {
      setSelectedItem({});
    }
  }, []);
  const renderHeader = () => {
    const hasSelectedItem = Object.keys(selectedItem).length;
    if (hasSelectedItem) {
      return (
        <Box display="flex" width="100%" alignItems="center">
          <Box width="50px">
            <InputCheckbox ref={headerCheckboxRef} onChange={toggleSelectHeader} />
          </Box>
          <Box flex="1">
            <Text scale={300}>{`${hasSelectedItem} selected`}</Text>
          </Box>
          <Box alignSelf="flex-end">
            <ButtonGroup size="sm">
              <Button variant="secondary">Action 1</Button>
              <Button variant="primary">Action 2</Button>
            </ButtonGroup>
          </Box>
        </Box>
      );
    }
    return (
      <Box display="flex" width="100%" alignItems="center">
        <Box width="50px">
          <InputCheckbox ref={headerCheckboxRef} onChange={toggleSelectHeader} />
        </Box>
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
      />
    </Box>
  );
};
