import * as React from 'react';
import { DialogContent, DialogContentProps } from '../../dialog';

export type SideSheetContentProps = DialogContentProps;

const SideSheetContent: React.FC<SideSheetContentProps> = DialogContent;

SideSheetContent.displayName = 'SideSheetContent';

export default SideSheetContent;
