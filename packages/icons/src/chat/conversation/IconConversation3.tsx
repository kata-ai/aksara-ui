import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconConversation3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.113 5.35a2.297 2.297 0 00-1.375-2.156A2.304 2.304 0 0013.86 3H5.713A2.304 2.304 0 003.45 5.35c-.01.113-.01.227 0 .34.125.72.038 1.46-.25 2.13l-.2.46a.15.15 0 00.23.17l1.692-.91c.25.104.52.158.79.16h8.149a2.313 2.313 0 002.252-2.35zM20.537 18.21c.01-.113.01-.227 0-.34a2.297 2.297 0 00-1.382-2.159 2.305 2.305 0 00-.88-.191h-9.27a2.305 2.305 0 00-2.104 1.464c-.11.282-.164.583-.157.886a2.298 2.298 0 002.262 2.35h9.269c.271-.002.54-.056.79-.16l1.692.91a.15.15 0 00.225-.071.15.15 0 00.006-.089l-.23-.47a3.767 3.767 0 01-.22-2.13zM18.305 9.26H13.93a2.261 2.261 0 00-2.262 2.26v.18a2.261 2.261 0 002.262 2.26h4.374a2.261 2.261 0 002.262-2.26v-.18a2.261 2.261 0 00-2.262-2.26z"
      fill={fill}
    />
  </svg>
);

IconConversation3.defaultProps = {
  ...iconDefaultProps,
};

export default IconConversation3;
