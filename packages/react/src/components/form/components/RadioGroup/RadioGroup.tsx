import * as React from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

const RadioGroupRoot: React.FC<RadixRadioGroup.RadioGroupProps> = ({ children, ...rest }) => {
  return (
    <RadixRadioGroup.Root asChild {...rest}>
      {children}
    </RadixRadioGroup.Root>
  );
};
const RadioGroupItem: React.FC<RadixRadioGroup.RadioGroupItemProps> = ({ children, ...rest }) => {
  return (
    <RadixRadioGroup.Item asChild {...rest}>
      {children}
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
