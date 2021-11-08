import * as React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import { OptionListItemBox } from '../../../button';
import { SxProps } from '../../../../system';

const RadioGroupRoot: React.FC<RadixRadioGroup.RadioGroupProps> = ({ children, ...rest }) => {
  return (
    <RadixRadioGroup.Root asChild {...rest}>
      {children}
    </RadixRadioGroup.Root>
  );
};
export interface RadioGroupItemProps extends RadixRadioGroup.RadioGroupItemProps, SxProps {
  variant?: 'default' | 'bordered';
}

const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  children,
  value,
  disabled,
  variant = 'default',
  sx,
  ...rest
}) => {
  return (
    <RadixRadioGroup.Item asChild value={value}>
      <OptionListItemBox disabled={disabled} variant={variant} sx={sx} {...rest}>
        {children}
      </OptionListItemBox>
    </RadixRadioGroup.Item>
  );
};
const RadioGroupIndicator: React.FC<RadixRadioGroup.RadioGroupIndicatorProps> = ({ children, ...rest }) => {
  return (
    <RadixRadioGroup.Indicator asChild {...rest}>
      {children}
    </RadixRadioGroup.Indicator>
  );
};
export { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator };
