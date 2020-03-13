import * as React from 'react';
import { DialogHeader, DialogHeaderProps } from '../../dialog';

export type SideSheetHeaderProps = DialogHeaderProps;

const SideSheetHeader: React.FC<SideSheetHeaderProps> = DialogHeader;

SideSheetHeader.displayName = 'SideSheetHeader';

export default SideSheetHeader;
