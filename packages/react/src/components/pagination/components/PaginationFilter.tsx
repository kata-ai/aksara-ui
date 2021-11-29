import { IconChevronDown } from '@aksara-ui/icons';
import * as React from 'react';
import Box from '../../../layout/box/components/Box';
import { Text } from '../../../typography';
import { Button } from '../../button';
import ActionList from '../../dropdown/components/DropdownMenuItem/ActionList';
import { InputSelectProps } from '../../form';
import { Popover, PopoverContent, PopoverTrigger } from '../../popover';

export interface PaginationFilterProps extends InputSelectProps<number> {
  /** Total limit of pages. */
  limit?: number;
  /** Label in front of select input */
  label?: string;
}

const PaginationFilter: React.FC<PaginationFilterProps> = ({
  limit,
  label = 'Show rows',
  items,
  placeholder,
  selectedItem = limit,
  width = 100,
  handleSelectedItemChange,
  ...rest
}) => {
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
            {items.map(item => (
              <ActionList isActive={item === selectedItem}>{item}</ActionList>
            ))}
          </Box>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default PaginationFilter;
