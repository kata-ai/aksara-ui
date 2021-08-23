import * as React from 'react';
import { Box } from '../../layout';
import { useComponentStyles } from '../../system';

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

  return (
    <Box as="nav" aria-label="Breadcrumb" sx={breadcrumbStyles}>
      <Box as="ol" sx={breadcrumbListStyles}>
        {items.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Box as="li" sx={breadcrumbListItemStyles} key={`breadcrumb_${i}`}>
            {i !== 0 && (
              <Box aria-hidden color="greymed01">
                {separator ?? <span>/</span>}
              </Box>
            )}
            <Box>{item}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Breadcrumb;
