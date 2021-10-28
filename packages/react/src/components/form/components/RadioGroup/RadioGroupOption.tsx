/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Box, BoxProps } from '../../../../layout';
import { RadioGroupItemProps } from './RadioGroupItem';
import { RadioGroupContextType } from './type';

export interface RadioGroupOptionProps
  extends Omit<BoxProps, 'height' | 'width' | 'size'>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'> {
  children?: React.ReactNode;
  onChangeSelected: (value: string) => void;
  value?: string;
}

export const RadioGroupContext = React.createContext<RadioGroupContextType>({} as RadioGroupContextType);

// TODO keyboard navigation
const RadioGroupOption = ({
  className,
  value,
  children,
  disabled,
  onChangeSelected,
  ...rest
}: RadioGroupOptionProps) => {
  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  const [radioValue, setRadioValue] = React.useState<string | undefined>(value);
  React.useEffect(() => {
    if (radioValue) {
      onChangeSelected(radioValue);
    }
  }, [radioValue]);
  return (
    <Box role="radiogroup" className={className} {...rest}>
      <RadioGroupContext.Provider value={{ onSelect: setRadioValue, selectedValue: radioValue }}>
        {validChildren.map(child => {
          return React.cloneElement(child, {
            disabled,
          } as RadioGroupItemProps);
        })}
      </RadioGroupContext.Provider>
    </Box>
  );
};

RadioGroupOption.displayName = 'RadioGroupOption';

export default RadioGroupOption;
