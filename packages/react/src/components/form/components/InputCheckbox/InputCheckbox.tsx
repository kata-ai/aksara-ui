import * as React from 'react';
import * as CheckboxBase from '@radix-ui/react-checkbox';
import { CheckboxContainer, CheckboxIndeterminate, CheckboxIndicator } from './components';

export interface CheckboxProps extends CheckboxBase.CheckboxProps {
  errors?: boolean;
}

export const InputCheckbox: React.FC<CheckboxProps> = ({ errors, disabled, checked, ...rest }) => {
  return (
    <CheckboxBase.Root asChild checked={checked} {...rest} disabled={disabled}>
      <CheckboxContainer errors={errors} disabled={disabled}>
        <CheckboxBase.Indicator asChild>
          {checked === 'indeterminate' ? (
            <CheckboxIndeterminate errors={errors} disabled={disabled} />
          ) : (
            <CheckboxIndicator errors={errors} disabled={disabled} />
          )}
        </CheckboxBase.Indicator>
      </CheckboxContainer>
    </CheckboxBase.Root>
  );
};
