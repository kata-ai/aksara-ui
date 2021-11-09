import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconNeutral3: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8.456 5.931a1.499 1.499 0 00.826-2.173 1.5 1.5 0 00-2.715 1.243 1.51 1.51 0 001.889.93zM16.53 18.076a1.498 1.498 0 00-.865 2.146 1.5 1.5 0 002.754-1.146 1.511 1.511 0 00-1.89-1zM19.628 6.271a2.536 2.536 0 00-1.909-.15c-.38.126-.722.342-1 .63l-4.866-1.85a.999.999 0 00-1.289.58 1.002 1.002 0 00.57 1.29l4.287 1.631-7.994 2.48-.27-.26.77-2.47a1.002 1.002 0 00-.68-1.25.998.998 0 00-1.25.66l-.769 2.44c-.17.014-.337.047-.5.1a2.5 2.5 0 00-1.608 3.152 2.502 2.502 0 004.003 1.132 2.48 2.48 0 00.603-.772c.133-.254.224-.528.27-.81l7.575-2.351-4.747 5.692a2.495 2.495 0 00-3.081 1.402 2.504 2.504 0 001.143 3.19 2.468 2.468 0 003.13-.76 2.502 2.502 0 00.357-2.242c0-.08-.07-.15-.1-.23l4.716-5.692-.55 4.002a1.002 1.002 0 00.9 1.19h.13a.999.999 0 001-.86l.709-5.202h.09a2.475 2.475 0 001.459-1.25 2.503 2.503 0 00-1.09-3.362l-.01-.06zm-13.63 6.463a.53.53 0 01-.29.25.569.569 0 01-.39 0 .48.48 0 01-.24-.3.46.46 0 010-.38.46.46 0 01.27-.3h.15a.61.61 0 01.23.05.52.52 0 01.25.3.55.55 0 01.02.38zm4.496 6.002a.53.53 0 01-.29.25.569.569 0 01-.39 0 .53.53 0 01-.249-.29.571.571 0 010-.39.56.56 0 01.3-.25l.13-.05c.079.001.157.018.23.05a.52.52 0 01.25.3.55.55 0 01-.03.38h.05zM18.05 8.272a.462.462 0 01.29-.27h.15c.078.001.157.018.23.05a.52.52 0 01.25.3.55.55 0 010 .38.53.53 0 01-.29.25.559.559 0 01-.38 0 .48.48 0 01-.24-.3.462.462 0 01-.01-.41z"
      fill={fill}
    />
  </svg>
);

IconNeutral3.defaultProps = {
  ...iconDefaultProps,
};

export default IconNeutral3;
