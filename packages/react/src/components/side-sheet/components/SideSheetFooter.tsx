import * as React from 'react';
import { DialogFooter, DialogFooterProps } from '../../dialog';

export type SideSheetFooterProps = DialogFooterProps;

const SideSheetFooter: React.FC<SideSheetFooterProps> = DialogFooter;

SideSheetFooter.displayName = 'SideSheetFooter';

export default SideSheetFooter;
