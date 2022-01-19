import { IconChevronDown } from '@aksara-ui/icons';
import * as React from 'react';
import Box from '../../../layout/box/components/Box';
import { Text } from '../../../typography';
import { Button } from '../../button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../dropdown';

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
      <DropdownMenu maxWidth={300}>
        <DropdownMenuTrigger>
          <Button type="button" size="md" icon={IconChevronDown} iconPosition="right">
            {selectedItem}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side={'bottom'}>
          {items.map(item => {
            return (
              <Box key={item} px={'md'}>
                <DropdownMenuItem
                  containerStyle={{
                    minWidth: 64,
                  }}
                  onSelect={() => {
                    onChange(item);
                  }}
                  isActive={item === selectedItem}
                >
                  {item}
                </DropdownMenuItem>
              </Box>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default PaginationFilter;
