import VisuallyHidden from '@reach/visually-hidden';
import * as React from 'react';
import { RangerOptions, useRanger } from 'react-ranger';
import { Box, BoxProps } from '../../layout';
import { useComponentStyles } from '../../system';
import { UnstyledButton } from '../button';

export interface SliderProps extends RangerOptions, BoxProps {}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({ values, onChange, min = 0, max = 100, stepSize = 5, sx, ...rest }, ref) => {
    const sliderTrackStyles = useComponentStyles('sliderTrack');
    const sliderHandleStyles = useComponentStyles('sliderHandle');
    const { getTrackProps, segments, handles } = useRanger({
      values,
      onChange,
      min,
      max,
      stepSize,
      ...rest,
    });

    return (
      <Box ref={ref} sx={{ ...sliderTrackStyles, ...sx }} {...getTrackProps()}>
        {segments.map(({ getSegmentProps }, i) => {
          return (
            <Box
              height="100%"
              backgroundColor={i === segments.length - 1 ? 'transparent' : 'blue06'}
              borderRadius={8}
              {...getSegmentProps()}
              index={i}
            />
          );
        })}
        {handles.map(({ value, getHandleProps }) => (
          <UnstyledButton sx={sliderHandleStyles} {...getHandleProps()}>
            <VisuallyHidden>{value}</VisuallyHidden>
          </UnstyledButton>
        ))}
      </Box>
    );
  }
);

Slider.displayName = 'InputSlider';

export default Slider;
