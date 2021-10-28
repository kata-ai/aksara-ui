/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { RadioGroupContext } from '.';
import { Box, BoxProps } from '../../../../layout';

export interface RadioGroupItemProps
  extends Omit<BoxProps, 'height' | 'width' | 'size'>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'onSelect' | 'value'> {
  value: string;
  children: (props: { selected: boolean }) => React.ReactNode;
}

const RadioGroupItem = ({ className, value, children, ...rest }: RadioGroupItemProps) => {
  const radioGroup = React.useContext(RadioGroupContext);
  const checked = radioGroup.selectedValue === value;
  return (
    <Box
      onClick={() => {
        radioGroup.onSelect(value);
      }}
      aria-checked={checked}
      role="radio"
      tabIndex={-1} // TODO handling tabIndex
      className={className}
      {...rest}
    >
      {children({ selected: checked })}
    </Box>
  );
};

RadioGroupItem.displayName = 'RadioGroupItem';

export default RadioGroupItem;
