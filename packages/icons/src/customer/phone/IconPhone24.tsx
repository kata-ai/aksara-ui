import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconPhone24: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.288 15.526l-3.99-1.608a1.076 1.076 0 00-1.148.24l-1.107 1.109a1.057 1.057 0 01-1.327.15 14.973 14.973 0 01-4.15-4.156 1.06 1.06 0 01.15-1.329l1.207-1.208a1.09 1.09 0 00.29-.94L9.513 3.88A1.06 1.06 0 008.516 3H5.135A2.142 2.142 0 003.07 4.529 2.15 2.15 0 003 5.437a18.15 18.15 0 005.142 10.394 18.106 18.106 0 0010.38 5.15 2.144 2.144 0 002.434-2.138v-2.048c0-.72-.27-1.109-.668-1.269z"
      fill={fill}
    />
    <path
      d="M13.135 10.732h2.833a.359.359 0 00.4-.41v-.33a.36.36 0 00-.4-.4h-1.855c.07-.668 2.175-.998 2.175-2.616a1.631 1.631 0 00-1.115-1.523 1.624 1.624 0 00-.661-.076 1.993 1.993 0 00-1.626.79c-.16.19-.1.38.1.539l.279.22c.2.16.389.09.578-.08a.739.739 0 01.55-.26.509.509 0 01.558.52c0 .749-2.255 1.098-2.255 2.996v.16a.4.4 0 00.44.47zM20.557 8.404h-.22V5.907a.36.36 0 00-.398-.4h-.848a.508.508 0 00-.48.26l-1.705 2.697a.79.79 0 00-.14.5v.1a.36.36 0 00.4.399h1.905v.859a.37.37 0 00.409.41h.479a.359.359 0 00.399-.41v-.859h.309c.2 0 .309-.14.309-.4v-.25a.36.36 0 00-.419-.409zm-1.486 0h-.998l.788-1.199c.14-.22.22-.24.22 0l-.01 1.2z"
      fill={fill}
    />
  </svg>
);

IconPhone24.defaultProps = {
  ...iconDefaultProps,
};

export default IconPhone24;