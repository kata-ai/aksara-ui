import { IconChevronDown } from '@aksara-ui/icons';
import * as React from 'react';
import Box from '../../../layout/box/components/Box';
import { Text } from '../../../typography';
import { Button } from '../../button';
import ActionList from '../../dropdown/components/DropdownMenuItem/ActionList';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover';

export interface PaginationFilterProps<T> {
  /** Total limit of pages. */
  limit?: number;
  /** Label in front of select input */
  label?: string;
  /** Label items. */
  items: T[];
  /** Selected item. */
  selectedItem?: T | null;
  /** The change handler for the select. */
  onChange: (changes: T) => void;
}

const PaginationFilter = ({
  limit,
  label = 'Show rows',
  items,
  selectedItem = limit,
  onChange,
  ...rest
}: PaginationFilterProps<number>) => {
  return (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Text scale={300} mr={10} {...rest}>
        {label}
      </Text>
      <Popover>
        <PopoverTrigger>
          <Button type="button" size="md" icon={IconChevronDown} iconPosition="right">
            {selectedItem}
          </Button>
        </PopoverTrigger>
        <PopoverContent placement="top">
          <Box width="100%" maxWidth={300} padding="md">
            {items.map(item => {
              return (
                <ActionList
                  key={item}
                  onClick={() => {
                    console.log('item', item);
                    onChange(item);
                  }}
                  isActive={item === selectedItem}
                >
                  {item}
                </ActionList>
              );
            })}
          </Box>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default PaginationFilter;
