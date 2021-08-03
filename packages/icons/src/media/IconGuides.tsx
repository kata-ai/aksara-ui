import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconGuides: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.6563 5.2L20.551 6.7C21.0496 7.1 21.0496 7.9 20.551 8.3L18.6563 9.8C18.4568 9.9 18.1577 10 17.9582 10H7.98594C7.48732 10 6.98871 9.6 6.98871 9V6C6.98871 5.4 7.3876 5 7.98594 5H10.9776V4C10.9776 3.4 11.3765 3 11.9749 3C12.5732 3 12.9721 3.4 12.9721 4V5H18.058C18.2574 5 18.4568 5.1 18.6563 5.2ZM5.89174 12H15.864C16.4624 12 16.961 12.4 16.961 13V16C16.961 16.6 16.5621 17 15.9638 17H12.9721V20C12.9721 20.6 12.5732 21 11.9748 21C11.3765 21 10.9776 20.6 10.9776 20V17H5.89174C5.6923 17 5.39313 16.9 5.19368 16.7L3.29895 15.2C2.80033 14.8 2.80033 14.1 3.29895 13.7L5.19368 12.2C5.39313 12.1 5.6923 12 5.89174 12Z"
      fill={fill}
    />
  </svg>
);

IconGuides.defaultProps = {
  ...iconDefaultProps,
};

export default IconGuides;
