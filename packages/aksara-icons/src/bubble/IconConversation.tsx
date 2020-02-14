import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconConversation: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.487 12.237a1.75 1.75 0 01-1.237.513H7.5a1.752 1.752 0 00-1.264.54l-.58.606a1.492 1.492 0 01-1.088.479A1.589 1.589 0 013 12.75H3v-8A1.75 1.75 0 014.75 3h10.5A1.75 1.75 0 0117 4.75V11c0 .464-.184.91-.513 1.237zM19 11v-1a2 2 0 012 2v7.428h-.001a1.553 1.553 0 01-2.654 1.108l-1.097-1.108H9a2 2 0 01-2-2v-2.063c.015-.014.03-.027.047-.04a.495.495 0 00.053-.046l.507-.53h7.643A3.754 3.754 0 0019 11z"
      fill={fill}
    />
  </svg>
);

IconConversation.defaultProps = {
  ...iconDefaultProps,
};

export default IconConversation;
