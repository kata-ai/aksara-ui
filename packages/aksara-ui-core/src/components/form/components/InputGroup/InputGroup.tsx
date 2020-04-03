import * as React from 'react';
import styled from 'styled-components';
import { InputText, InputTextProps } from '../InputText';
import { InputLeftElement, InputRightElement } from '../InputElement';
import { InputSizes } from '../../types';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Input size */
  inputSize?: InputSizes;
}

const Div = styled('div')<InputGroupProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
  border-collapse: collapse;
  height: ${props => props.inputSize}px;
`;

const InputGroup: React.SFC<InputGroupProps> = ({ className, children, inputSize, ...rest }) => {
  const validChildrenArray = React.Children.toArray(children).filter(React.isValidElement);
  let pl: number | undefined;
  let pr: number | undefined;

  return (
    <Div className={className} inputSize={inputSize} {...rest}>
      {validChildrenArray.map(child => {
        if (child.type === InputLeftElement) {
          pl = inputSize;
        }
        if (child.type === InputRightElement) {
          pr = inputSize;
        }
        if (child.type === InputText) {
          return React.cloneElement(child, {
            pl,
            pr,
          } as Partial<InputTextProps>);
        }
        return React.cloneElement(child);
      })}
    </Div>
  );
};

InputGroup.defaultProps = {
  inputSize: 40,
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;
