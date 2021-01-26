import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { TextInputMain, Item } from '../components/Inputs';
import { TrashIcon } from '../components/Icons';
import useTodo from '../hooks/useTodo';

export default function Todolist() {
	const { error, onAdd, onDelete, onUpdate, todolists } = useTodo();
	return (
		<>
			<h1>Welcome to your todolist</h1>
			{error && <h1>{error}</h1>}
			{todolists.map((todolist) => {
				return (
					<Item key={todolist.id}>
						<TextInputMain
							style={{ border: 'none', boxShadow: 'none' }}
							initialValue={todolist.title}
							onBlur={(event) => {
								onUpdate(todolist.id, event.target.value);
							}}
						></TextInputMain>
						<TrashIcon
							onClick={() => {
								onDelete(todolist.id);
							}}
						/>
					</Item>
				);
			})}
			<Footer onClick={onAdd} />
		</>
	);
}
