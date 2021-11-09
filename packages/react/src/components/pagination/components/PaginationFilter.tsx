import * as React from 'react';
import Box from '../../../layout/box/components/Box';
import { Text } from '../../../typography';
import { InputSelect, InputSelectProps } from '../../form';

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
      <InputSelect
        selectedItem={selectedItem}
        placeholder={placeholder}
        width={width}
        items={items}
        handleSelectedItemChange={handleSelectedItemChange}
      />
    </Box>
  );
};

export default PaginationFilter;
