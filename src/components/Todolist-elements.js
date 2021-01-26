import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { typeScale } from '../utils/typography';
import { defaultTheme } from '../utils/theme';
import { TextInputMain, Checkbox, Item } from './Inputs';

export const TodoElement = ({ title, done, onUpdate, loading, ...props }) => {
	const [todoTitle, setTodoTitle] = useState('');

	useEffect(() => {
		setTodoTitle(title);
	}, [title]);

	const handleDone = () => {
		if (onUpdate) {
			onUpdate({ done: !done });
		}
	};
	const handleChangeTitle = (event) => {
		setTodoTitle(event.target.value);
	};

	return (
		<Item done={done}>
			<TextInputMain
				type='text'
				value={todoTitle}
				onChange={handleChangeTitle}
				done={done}
			/>
			<Checkbox onClick={handleDone} checked={done} onChange={handleDone} />
		</Item>
	);
};
