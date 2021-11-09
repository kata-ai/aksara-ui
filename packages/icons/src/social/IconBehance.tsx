import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconBehance: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.63672 3H18.3281C19.7819 3 21 4.18295 21 5.63672V18.3633C21 19.817 19.7819 21 18.3281 21H5.63672C4.18295 21 3 19.817 3 18.3633V5.63672C3 4.18295 4.18295 3 5.63672 3ZM17.2734 8.30859H13.0547V9.36328H17.2734V8.30859ZM9.36328 15.6914C10.5266 15.6914 11.4727 14.7453 11.4727 13.582C11.4727 12.9489 11.1867 12.3869 10.7439 12C11.1867 11.6131 11.4727 11.0511 11.4727 10.418C11.4727 9.25465 10.5266 8.30859 9.36328 8.30859H6.19922V15.6914H9.36328ZM13.6721 13.582H17.8008V13.0547C17.8008 11.6009 16.6178 10.418 15.1641 10.418C13.7103 10.418 12.5273 11.6009 12.5273 13.0547C12.5273 14.5085 13.7103 15.6914 15.1641 15.6914C16.1023 15.6914 16.9774 15.1862 17.4474 14.3736L16.5349 13.8452C16.2523 14.3334 15.727 14.6367 15.1641 14.6367C14.4766 14.6367 13.8899 14.1959 13.6721 13.582ZM7.25391 9.36328H9.36328C9.94473 9.36328 10.418 9.83652 10.418 10.418C10.418 10.9994 9.94473 11.4727 9.36328 11.4727H7.25391V9.36328ZM7.25391 12.5273H9.36328C9.94473 12.5273 10.418 13.0006 10.418 13.582C10.418 14.1635 9.94473 14.6367 9.36328 14.6367H7.25391V12.5273ZM15.1641 11.4727C14.4766 11.4727 13.8901 11.9135 13.6721 12.5273H16.656C16.4381 11.9135 15.8515 11.4727 15.1641 11.4727Z"
      fill={fill}
    />
  </svg>
);

IconBehance.defaultProps = {
  ...iconDefaultProps,
};

export default IconBehance;
