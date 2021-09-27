import * as React from 'react';
import { ModalFooter, DialogFooterProps } from '../../dialog';

export type SideSheetFooterProps = DialogFooterProps;

const SideSheetFooter: React.FC<SideSheetFooterProps> = ModalFooter;

SideSheetFooter.displayName = 'SideSheetFooter';

export default SideSheetFooter;
