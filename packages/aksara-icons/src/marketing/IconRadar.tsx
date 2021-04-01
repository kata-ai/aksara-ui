import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconRadar: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm1.72 11c-.17.3-.42.55-.72.72V13h.72zM13 11v-.72c.3.17.55.42.72.72H13zm2.86 2h1A5 5 0 0113 16.9v-1a4 4 0 002.86-2.9zm0-2A4 4 0 0013 8.14v-1A5 5 0 0116.9 11h-1.04zm-5.58 0c.17-.3.42-.55.72-.72V11h-.72zm.72 2v.72c-.3-.17-.55-.42-.72-.72H11zm-2.86-2h-1A5 5 0 0111 7.1v1A4 4 0 008.14 11zm0 2A4 4 0 0011 15.86v1A5 5 0 017.1 13h1.04zM11 4.07v1A7 7 0 005.08 11h-1A8 8 0 0111 4.07zM4.07 13h1A7 7 0 0011 18.92v1A8 8 0 014.07 13zM13 19.93v-1A7 7 0 0018.92 13h1A8 8 0 0113 19.93zM18.92 11A7 7 0 0013 5.08v-1A8 8 0 0119.93 11h-1.01z"
      fill={fill}
    />
  </svg>
);

IconRadar.defaultProps = {
  ...iconDefaultProps,
};

export default IconRadar;
