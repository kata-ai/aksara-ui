import * as React from 'react';
import { Box } from '../../layout';
import { useComponentStyles } from '../../system';
import { Popover } from '../popover';
import BreadcrumbOverflow from './BreadcrumbOverflow';

export interface BreadcrumbProps {
  /** An array of `BreadcrumbItem` components. */
  items: React.ReactNodeArray;
  /** Modify the separator element for the breadcrumb. */
  separator?: React.ComponentType<any>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, separator }) => {
  const breadcrumbStyles = useComponentStyles('breadcrumbBase');
  const breadcrumbListStyles = useComponentStyles('breadcrumbList');
  const breadcrumbListItemStyles = useComponentStyles('breadcrumbListItem');

  const [first, rest, last] = React.useMemo(() => {
    const [first, ...rest] = items;
    const popped = rest.splice(-2, 2);

    return [first, rest, popped];
  }, [items]);

  return (
    <Box as="nav" aria-label="Breadcrumb" sx={breadcrumbStyles}>
      <Box as="ol" sx={breadcrumbListStyles}>
        <Box as="li" sx={breadcrumbListItemStyles}>
          <Box>{first}</Box>
        </Box>
        {rest.length > 0 && (
          <Box as="li" sx={breadcrumbListItemStyles}>
            <Box aria-hidden color="greymed01">
              {separator ? (
                React.createElement(separator, { fill: 'currentColor', width: 8, height: 8 })
              ) : (
                <span>/</span>
              )}
            </Box>
            <Box>
              <Popover placement="bottom" trigger={<BreadcrumbOverflow>...</BreadcrumbOverflow>}>
                <Box p="xs" width="160px">
                  {rest
                    .map((item, i) => {
                      if (React.isValidElement(item)) {
                        return (
                          <Box key={`breadcrumb_overflow_${i}`}>
                            {React.cloneElement(item, { isOverflowItem: true })}
                          </Box>
                        );
                      }

                      return undefined;
                    })
                    .filter(Boolean)}
                </Box>
              </Popover>
            </Box>
          </Box>
        )}
        {last.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box as="li" sx={breadcrumbListItemStyles} key={`breadcrumb_${i}`}>
            <Box aria-hidden color="greymed01">
              {separator ? (
                React.createElement(separator, { fill: 'currentColor', width: 8, height: 8 })
              ) : (
                <span>/</span>
              )}
            </Box>
            <Box>{item}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Breadcrumb;
