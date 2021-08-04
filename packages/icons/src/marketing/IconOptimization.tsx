import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconOptimization: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19 8.958a3.015 3.015 0 00-1.727.55 2.982 2.982 0 00-1.093 1.437h-1.36a3.033 3.033 0 00-.55-.934L15 8.83c.178.038.358.061.54.07.263-.004.525-.037.78-.1a3.002 3.002 0 001.47-.925 2.97 2.97 0 00.41-3.284A2.988 2.988 0 0017 3.337a3.014 3.014 0 00-4.1 1.093 2.962 2.962 0 00-.3 2.254c.121.427.332.823.62 1.162l-.67 1.172c-.18-.04-.365-.06-.55-.06a3.332 3.332 0 00-.55.05l-.67-1.162a3.11 3.11 0 00.62-1.162 2.96 2.96 0 00-.094-1.82 2.983 2.983 0 00-1.145-1.426 3.016 3.016 0 00-3.493.123c-.497.38-.86.905-1.04 1.502a2.96 2.96 0 00.035 1.822c.203.59.587 1.1 1.098 1.461.51.362 1.122.555 1.749.553.165-.011.329-.035.49-.07l.69 1.182a3.035 3.035 0 00-.55.934H7.82a2.984 2.984 0 00-1.31-1.577 3.018 3.018 0 00-3.812.65 2.967 2.967 0 000 3.84 3.018 3.018 0 003.812.65 2.984 2.984 0 001.31-1.577h1.36c.126.341.312.657.55.933L9 15.036a3.018 3.018 0 00-1.991.38c-.6.353-1.056.902-1.293 1.552a2.96 2.96 0 00-.003 2.014c.234.652.69 1.202 1.287 1.556.455.264.973.401 1.5.398a3.018 3.018 0 002.378-1.163 2.97 2.97 0 00.522-2.582 3.11 3.11 0 00-.62-1.162l.67-1.171c.362.079.738.079 1.1 0l.67 1.171c-.288.34-.499.736-.62 1.162a2.962 2.962 0 001.072 3.13 3.01 3.01 0 002.219.591 3.014 3.014 0 002.304-1.636 2.962 2.962 0 00-.434-3.286 3.003 3.003 0 00-1.481-.914 3.121 3.121 0 00-1.32 0l-.69-1.172c.238-.276.424-.592.55-.933h1.36c.19.51.517.959.946 1.298a3.01 3.01 0 003.083.393c.5-.22.931-.573 1.245-1.019a2.965 2.965 0 00-.9-4.25A3.016 3.016 0 0019 8.957zM5 12.931a1.005 1.005 0 01-.924-.613.987.987 0 01.217-1.082A1.002 1.002 0 016 11.938a.99.99 0 01-.293.702c-.187.186-.442.29-.707.29zm9.63-7.508a.996.996 0 01.798-.5 1.006 1.006 0 01.862.383.99.99 0 01-.53 1.567 1.007 1.007 0 01-.76-.1.987.987 0 01-.37-1.35zM9 6.773a1.005 1.005 0 01-1.341-.25.99.99 0 01.606-1.561c.164-.034.335-.025.495.024a1.003 1.003 0 01.61.467.987.987 0 01-.37 1.32zm.37 11.68a.995.995 0 01-.61.466 1.006 1.006 0 01-1.155-.52.987.987 0 01.286-1.226 1.005 1.005 0 011.268.038.992.992 0 01.211 1.242zM15 17.102c.151-.09.324-.137.5-.14a.788.788 0 01.26 0 .988.988 0 01.47 1.638 1.003 1.003 0 01-1.676-.359.987.987 0 01.446-1.179v.04zm4-4.171a1.005 1.005 0 01-.924-.613.987.987 0 01.217-1.082 1.002 1.002 0 011.707.702.99.99 0 01-.293.702c-.187.186-.442.29-.707.29z"
      fill={fill}
    />
  </svg>
);

IconOptimization.defaultProps = {
  ...iconDefaultProps,
};

export default IconOptimization;