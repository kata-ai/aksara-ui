import * as React from 'react';
import { IconCloseRounded, IconSearch } from '@aksara-ui/icons';

import { InputGroup } from '../InputGroup';
import { InputIcon, InputIconButton } from '../InputIcon';
import { InputText, InputTextProps } from '../InputText';

export interface InputSearchboxProps extends InputTextProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'value'> {
  groupId?: string;
  groupClassName?: string;
  groupStyle?: React.CSSProperties;
}

const InputSearchbox = React.forwardRef<HTMLInputElement, InputSearchboxProps>(
  ({ id, className, groupId, groupClassName, groupStyle, errors, disabled, onChange, ...rest }, ref) => {
    const [value, setValue] = React.useState<string>('');

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (onChange) {
          onChange(e);
        }
      },
      [onChange]
    );

    const handleClearButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setValue('');
    };

    return (
      <InputGroup id={groupId} className={groupClassName} style={groupStyle} width="100%" maxWidth={360}>
        <InputIcon icon={IconSearch} iconPosition="left" iconText="Username" disabled={disabled} />
        <InputText
          ref={ref}
          id={id}
          className={className}
          errors={errors}
          disabled={disabled}
          rounded
          width="100%"
          pl={36}
          pr={36}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {value.length > 0 && (
          <InputIconButton
            type="button"
            icon={IconCloseRounded}
            iconPosition="right"
            iconText="Clear"
            disabled={disabled}
            onClick={handleClearButtonClick}
          />
        )}
      </InputGroup>
    );
  }
);

InputSearchbox.displayName = 'InputSearchbox';

export default InputSearchbox;
