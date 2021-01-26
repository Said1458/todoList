import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils/typography';
import { defaultTheme } from '../utils/theme';
import useInputState from '../hooks/useInput';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;
const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;

export const Item = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	border: none;
	border-radius: 40px;
	padding: 20px;
	box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
	background-color: ${(props) => {
		return props.done ? 'grey' : '';
	}};
`;

const StyledCheckbox = styled.div`
	cursor: pointer;
	display: inline-block;
	width: 23px;
	height: 23px;
	background: ${(props) =>
		props.checked ? defaultTheme.secondaryColor : defaultTheme.white};
	border-radius: 50%;
	transition: all 150ms;
	box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
	${Icon} {
		visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
	}
`;

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const TextInput = styled.input.attrs({ type: 'text' })`
	width: 90%;
	color: grey;
	border: none;
	border-radius: 40px;
	padding: 10px;
	box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.12);
`;

export const TextInputMain = ({
	initialValue = '',
	editable = true,
	inputRef,
	...props
}) => {
	const [userInput, setUserInput] = useInputState(initialValue);
	// console.log(inputRef);
	return !editable ? (
		<p style={{ width: '90%', cursor: 'pointer' }}>{userInput}</p>
	) : (
		<TextInput
			ref={inputRef}
			value={userInput}
			onChange={setUserInput}
			{...props}
		></TextInput>
	);
};

export const Checkbox = ({ className, checked, onCheck, ...props }) => {
	const [isChecked, setChecked] = useState(false);

	return (
		<label>
			<CheckboxContainer className={className}>
				<HiddenCheckbox
					// checked={isChecked}
					{...props}
					// onChange={handleCheckboxChange}
				/>
				<StyledCheckbox checked={checked}>
					<Icon viewBox='0 0 24 24'>
						<polyline points='20 6 9 17 4 12' />
					</Icon>
				</StyledCheckbox>
			</CheckboxContainer>
		</label>
	);
};
