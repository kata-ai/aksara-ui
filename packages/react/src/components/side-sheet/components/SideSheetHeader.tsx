import * as React from 'react';
import { ModalHeader, ModalHeaderProps } from '../../modal';

export type SideSheetHeaderProps = ModalHeaderProps;

const SideSheetHeader: React.FC<SideSheetHeaderProps> = ModalHeader;

SideSheetHeader.displayName = 'SideSheetHeader';

export default SideSheetHeader;
