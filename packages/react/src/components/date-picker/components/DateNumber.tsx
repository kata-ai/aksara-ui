import * as React from 'react';
import { UnstyledButton } from '../../button';
import { useComponentStyles } from '../../../system';
import { Box } from '../../../layout';

export type DateNumberVariants = 'currentDate' | 'start' | 'end' | 'selected' | 'default' | 'road';

export interface DateNumberProps extends React.ComponentPropsWithoutRef<'button'> {
  /** Variant of DateNumber button */
  variant?: DateNumberVariants;
}

const DateNumberButton = React.forwardRef<HTMLButtonElement, DateNumberProps>(
  ({ children, variant = 'default', ...rest }, ref) => {
    const dateNumberButtonStyles = useComponentStyles('dateNumber', { variant });
    const dateNumberBoxStyles = useComponentStyles('dateNumberBox', { variant });

    return (
      <Box sx={dateNumberBoxStyles}>
        <UnstyledButton
          ref={ref}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          sx={dateNumberButtonStyles}
          {...rest}
        >
          {children}
        </UnstyledButton>
      </Box>
    );
  }
);

DateNumberButton.displayName = 'DateNumberButton';

export default DateNumberButton;
