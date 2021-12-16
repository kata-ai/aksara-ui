import * as React from 'react';
import { ModalFooter, ModalFooterProps } from '../../modal';

export type SideSheetFooterProps = ModalFooterProps;

const SideSheetFooter: React.FC<SideSheetFooterProps> = ModalFooter;

SideSheetFooter.displayName = 'SideSheetFooter';

export default SideSheetFooter;
