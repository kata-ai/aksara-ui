import * as React from 'react';
import styled from 'styled-components';
import { ButtonBaseProps } from '../styles';

interface ButtonProps extends ButtonBaseProps {}

const Root = styled('button')``;

export const Button: React.FC<ButtonProps> = () => <Root />;
