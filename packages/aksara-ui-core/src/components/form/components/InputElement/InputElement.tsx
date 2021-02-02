import * as React from 'react';
import { Box } from '../../../../foundations';
import { theme } from '../../../../theme';
import { InputSizes } from '../../types';

export interface InputElementBaseProps {
  /**
   * The size of the adornment is inherited from the `InputGroup` via `cloneElement`.
   */
  inputSize?: InputSizes;
  /**
   * The position this adornment should appear relative to the `Input`.
   * We added `InputLeftElement` and `InputRightElement` so you might not need to pass this
   */
  placement?: 'left' | 'right';
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: React.ReactNode;
}

const InputElement = React.forwardRef<HTMLDivElement, InputElementBaseProps>(
  ({ inputSize, children, placement = 'left', ...props }, ref) => {
    const placementProp = { [placement]: '0' };
    const validChildren = React.Children.toArray(children).filter(React.isValidElement);

    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        height={inputSize}
        width={inputSize}
        top="0"
        zIndex={2}
        ref={ref}
        {...placementProp}
        {...props}
      >
        {validChildren.map(child => {
          // Automatically switch fill color of icons.
          // Currently hardcoded so that only components that start with `Icon` works.
          if (typeof child.type === 'function' && child.type.name.startsWith('Icon')) {
            return React.cloneElement(child, {
              fill: theme.colors.grey06,
            } as React.SVGProps<SVGSVGElement>);
          }

          return React.cloneElement(child);
        })}
      </Box>
    );
  }
);

InputElement.displayName = 'InputElement';

InputElement.defaultProps = {
  inputSize: 40,
};

export default InputElement;
