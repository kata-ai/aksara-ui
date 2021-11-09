import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconMoney: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 8.58H5c-.53 0-1.04.206-1.414.574A1.944 1.944 0 003 10.542v8.496c0 .52.21 1.02.586 1.387A2.02 2.02 0 005 21h14c.53 0 1.04-.207 1.414-.575.375-.368.586-.867.586-1.387v-8.496c0-.52-.21-1.02-.586-1.388A2.02 2.02 0 0019 8.58zm0 10.458V16.8a2.491 2.491 0 00-1.39.784 2.41 2.41 0 00-.61 1.453H7a2.41 2.41 0 00-.61-1.454A2.49 2.49 0 005 16.801v-3.973a2.492 2.492 0 001.39-.784A2.41 2.41 0 007 10.591h10a2.41 2.41 0 00.61 1.453c.363.405.851.68 1.39.784v6.21z"
      fill={fill}
    />
    <path
      d="M12 16.752c1.105 0 2-.879 2-1.962 0-1.084-.895-1.962-2-1.962s-2 .878-2 1.962c0 1.083.895 1.962 2 1.962zM19.42 6.941l-.89-2.1a2.99 2.99 0 00-.665-.971 3.056 3.056 0 00-.995-.647 3.054 3.054 0 00-2.29 0L6 6.94h13.42z"
      fill={fill}
    />
  </svg>
);

IconMoney.defaultProps = {
  ...iconDefaultProps,
};

export default IconMoney;
