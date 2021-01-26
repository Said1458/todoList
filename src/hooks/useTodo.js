import { useState, useEffect } from 'react';
import useAsyncError from './useAsyncError';

const API_URL = process.env.REACT_APP_API_URL;

export default function useTodo() {
	const [error, setError] = useState('');
	const [todolists, setTodolists] = useState([]);
	const throwError = useAsyncError();
	useEffect(() => {
		fetchApi('/todolist')
			.then((todolists) => {
				setTodolists(todolists);
			})
			.catch((err) => {
				throwError(err);
			});
	}, []);
	const fetchApi = (path, method, body) => {
		return fetch(`${API_URL}${path}`, {
			method,
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(body),
		}).then((resp) => {
			// resp.status(404)
			// {message:"Page not Found"}
			if (!resp.ok) {
				return resp.json().then((json) => {
					console.log(resp.status);
					const error = new Error(json.message);
					error.status = resp.status;
					throw error;
				});
			}
			return resp.json();
		});
	};
	const handleAddTodo = () => {
		fetchApi(`/todolist`, 'POST', { title: 'New Todolist' })
			.then((todolist) => {
				setTodolists([...todolists, todolist]);
			})
			.catch((err) => setError(err.message));
	};
	const handleDeleteTodo = (todolistId) => {
		fetchApi(`/todolist/${todolistId}`, 'DELETE')
			.then((deletedTodolist) => {
				setTodolists((todolists) =>
					todolists.filter((todolist) => deletedTodolist.id !== todolist.id)
				);
			})
			.catch((err) => setError(err.message));
	};
	const handleUpdate = (todolistId, newData) => {
		console.log(newData);
		fetchApi(`/todolist/${todolistId}`, 'PUT', { title: newData })
			.then((updatedTodolist) => {
				setTodolists((todolists) =>
					todolists.map((todolist) => {
						if (todolist.id === updatedTodolist.id) {
							return updatedTodolist;
						}
						return todolist;
					})
				);
			})
			.catch((err) => setError(err.message));
	};

	return {
		error,
		todolists,
		onAdd: handleAddTodo,
		onDelete: (todolistId) => handleDeleteTodo(todolistId),
		onUpdate: (todolistId, newData) => handleUpdate(todolistId, newData),
	};
}
