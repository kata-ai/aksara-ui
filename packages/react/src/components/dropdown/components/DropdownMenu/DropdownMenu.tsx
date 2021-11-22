import * as React from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Box } from '../../../../layout';

export interface DropdownMenuProps extends RadixDropdownMenu.DropdownMenuProps {
  children?: React.ReactNode;
  width?: number;
}

// const MenuArrow: React.FC<Pick<DropdownMenuProps, 'tipOffset'>> = ({ tipOffset }) => {
//   return (
//     <Box
//       sx={{
//         display: 'block',
//         lineHeight: '11px',
//         zIndex: 1,
//         textAlign: 'center',
//         position: 'absolute',
//         top: '-1px',
//       }}
//       style={{ left: tipOffset, textAlign: 'left' }}
//     >
//       <svg width="24" height="12" viewBox="0 0 24 12">
//         <path fill="#fff" fillRule="evenodd" d="M20 12l-8-8-12 12" />
//       </svg>
//     </Box>
//   );
// };

const DropdownMenu: React.ForwardRefRenderFunction<HTMLDivElement, DropdownMenuProps> = ({ children, width }) => {
  return (
    <RadixDropdownMenu.Root>
      <Box width={width}>{children}</Box>
    </RadixDropdownMenu.Root>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

export default React.forwardRef(DropdownMenu);
