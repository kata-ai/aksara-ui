import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPrintNota: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.5 3.38h-15c-.398 0-.78.161-1.06.449-.282.287-.44.677-.44 1.083v3.82c0 .406.158.796.44 1.083.28.287.662.449 1.06.449H6v10.09c0 .173.043.344.125.496.082.152.2.28.345.372a.984.984 0 001 0l1.21-.582 1.28.592a.983.983 0 00.84 0l1.2-.541 1.24.592a.984.984 0 00.85 0l1.24-.592 1.25.592a.983.983 0 00.96-.071 1.038 1.038 0 00.46-.858v-10.09h1.5c.398 0 .78-.162 1.06-.45.282-.287.44-.676.44-1.082v-3.82c0-.406-.158-.796-.44-1.083a1.484 1.484 0 00-1.06-.449zM16 18.75l-.24-.112a.984.984 0 00-.85 0l-1.24.592-1.25-.592a.982.982 0 00-.84 0l-1.25.592-1.28-.602a1.042 1.042 0 00-.42-.092.924.924 0 00-.43.102l-.2.102V8.098h8V18.75z"
      fill={fill}
    />
    <path
      d="M10.5 12.184h3a.99.99 0 00.707-.3 1.033 1.033 0 000-1.444.99.99 0 00-.707-.3h-3a.99.99 0 00-.707.3 1.032 1.032 0 000 1.444.99.99 0 00.707.3zM10.5 16.269h3a.99.99 0 00.707-.3 1.033 1.033 0 000-1.444.99.99 0 00-.707-.299h-3a.99.99 0 00-.707.3 1.032 1.032 0 000 1.444.99.99 0 00.707.299z"
      fill={fill}
    />
  </svg>
);

IconPrintNota.defaultProps = {
  ...iconDefaultProps,
};

export default IconPrintNota;
