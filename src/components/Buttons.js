import React from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils/typography';
import { defaultTheme } from '../utils/theme';

export const Button = styled.button`
	background-color: ${defaultTheme.primaryColor};
	border: none;
	color: ${defaultTheme.white};
	font-family: ${defaultTheme.primaryFont};
`;
export const RoundButton = styled(Button)`
	border-radius: 50%;
	width: 72px;
	height: 72px;
	font-size: ${defaultTheme.fontScale.h2};
	font-weight: 100;
`;

export const AddButton = ({ ...props }) => (
	<RoundButton {...props}>+</RoundButton>
);
