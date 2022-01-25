import * as React from 'react';
import * as CheckboxBase from '@radix-ui/react-checkbox';
import { CheckboxContainer, CheckboxIndeterminate, CheckboxIndicator } from './components';

export interface CheckboxProps extends CheckboxBase.CheckboxProps {
  indeterminate?: boolean;
  errors?: boolean;
}

export const InputCheckbox: React.FC<CheckboxProps> = ({ indeterminate, errors, disabled, ...rest }) => {
  return (
    <CheckboxBase.Root asChild {...rest} disabled={disabled}>
      <CheckboxContainer errors={errors} disabled={disabled}>
        <CheckboxBase.Indicator asChild>
          {indeterminate ? (
            <CheckboxIndeterminate errors={errors} disabled={disabled} />
          ) : (
            <CheckboxIndicator errors={errors} disabled={disabled} />
          )}
        </CheckboxBase.Indicator>
      </CheckboxContainer>
    </CheckboxBase.Root>
  );
};
