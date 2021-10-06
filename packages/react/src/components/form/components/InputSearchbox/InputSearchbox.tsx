import * as React from 'react';
import { IconCloseRounded, IconSearch } from '@aksara-ui/icons';

import { InputGroup } from '../InputGroup';
import { InputIcon, InputIconButton } from '../InputIcon';
import { InputText, InputTextProps } from '../InputText';

export interface InputSearchboxProps extends InputTextProps, React.ComponentPropsWithoutRef<'input'> {
  groupId?: string;
  groupClassName?: string;
  groupStyle?: React.CSSProperties;
  onClear?: () => void;
}

const InputSearchbox = React.forwardRef<HTMLInputElement, InputSearchboxProps>(
  ({ id, className, groupId, groupClassName, groupStyle, errors, disabled, onClear, ...rest }, ref) => {
    const handleClearButtonClick = React.useCallback(() => {
      if (onClear) {
        onClear();
      }
    }, [onClear]);

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
          {...rest}
        />
        <InputIconButton
          type="button"
          icon={IconCloseRounded}
          iconPosition="right"
          iconText="Clear"
          disabled={disabled}
          onClick={handleClearButtonClick}
        />
      </InputGroup>
    );
  }
);

InputSearchbox.displayName = 'InputSearchbox';

export default InputSearchbox;
