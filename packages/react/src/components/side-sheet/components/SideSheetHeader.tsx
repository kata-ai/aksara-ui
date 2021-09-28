import * as React from 'react';
import { ModalHeader, DialogHeaderProps } from '../../dialog';

export type SideSheetHeaderProps = DialogHeaderProps;

const SideSheetHeader: React.FC<SideSheetHeaderProps> = ModalHeader;

SideSheetHeader.displayName = 'SideSheetHeader';

export default SideSheetHeader;
