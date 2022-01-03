import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Box } from '../../../layout';
import { useComponentStyles } from '../../../system';

export interface ScrollAreaProps extends ScrollAreaPrimitive.ScrollAreaProps {
  children: React.ReactNode;
  scroll: 'horizontal' | 'vertical' | 'all';
  cornerStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  width?: number | string;
  height?: number | string;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({
  children,
  height,
  width,
  scroll,
  cornerStyle,
  style,
  ...rest
}) => {
  const scrollBarStyle = useComponentStyles('scrollBar');
  const scrollBarThumbsStyle = useComponentStyles('scrollBarThumbs');
  const renderScrollBar = () => {
    if (scroll === 'all') {
      return (
        <>
          <ScrollAreaPrimitive.Scrollbar asChild orientation="horizontal">
            <Box sx={scrollBarStyle}>
              <ScrollAreaPrimitive.ScrollAreaThumb asChild>
                <Box sx={scrollBarThumbsStyle} />
              </ScrollAreaPrimitive.ScrollAreaThumb>
            </Box>
          </ScrollAreaPrimitive.Scrollbar>
          <ScrollAreaPrimitive.Scrollbar asChild orientation="vertical">
            <Box sx={scrollBarStyle}>
              <ScrollAreaPrimitive.ScrollAreaThumb asChild>
                <Box sx={scrollBarThumbsStyle} />
              </ScrollAreaPrimitive.ScrollAreaThumb>
            </Box>
          </ScrollAreaPrimitive.Scrollbar>
        </>
      );
    }
    return (
      <ScrollAreaPrimitive.Scrollbar asChild orientation={scroll}>
        <Box sx={scrollBarStyle}>
          <ScrollAreaPrimitive.ScrollAreaThumb asChild>
            <Box sx={scrollBarThumbsStyle} />
          </ScrollAreaPrimitive.ScrollAreaThumb>
        </Box>
      </ScrollAreaPrimitive.Scrollbar>
    );
  };
  return (
    <ScrollAreaPrimitive.Root asChild {...rest}>
      <Box style={style} height={height} width={width} overflow={'hidden'}>
        <ScrollAreaPrimitive.Viewport>
          <Box width={width} height={height} data-testid="scroll-content">
            {children}
          </Box>
        </ScrollAreaPrimitive.Viewport>
        {renderScrollBar()}
        {cornerStyle && <ScrollAreaPrimitive.ScrollAreaCorner style={cornerStyle} />}
      </Box>
    </ScrollAreaPrimitive.Root>
  );
};
