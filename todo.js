//this file contains the functions to add, delete, read, update, list, mark as in progress, mark as done and log a todo item.
const fs = require('fs');
const _ = require('lodash');

const todosFilePath = 'todos.json';

//Add a todo item
const addTodo = (title) => {
    const todos = fetchTodos();
    const id = _.uniqueId(); 
	const status = 'not done';
	const createdAt = new Date();
    todos.push({ id, title ,status, createdAt});
    saveTodos(todos);
    console.log('Todo added:', { id, title });
};

// Delete a todo item
const deleteTodoByTitle = (title) => {
    let todos = fetchTodos();
    let filteredTodos = todos.filter(
        (todo) => todo.title !== title
    );
    saveTodos(filteredTodos);

    return todos.length !== filteredTodos.length;
};


//Read a todo item
const readTodo = (id) => {
	let todos = fetchTodos();
	return todos.find((todo) => todo.id === id);
};

//Update a todo item
const updateTodo = (id, newTitle) => {
    let todos = fetchTodos();
    let todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.title = newTitle;
        todo.updatedAt = new Date().toISOString();
        saveTodos(todos);
        return todo;
    }
    return null;
};
//List all todo items
const listTodos = () => {
	return fetchTodos();
};

//List all Done task 
const listTodosDone = () => {
	let todos = fetchTodos();
	let doneTodos = todos.filter(
		(todo) => todo.status === 'done');
	return doneTodos;
};

//List all in progress task
const listTodosInProgress = () => {
	let todos = fetchTodos();
	let doneTodos = todos.filter(
		(todo) => todo.status === 'in progress');
	return doneTodos;
}; 

//List all Done task 
const listTodosNotDone = () => {
	let todos = fetchTodos();
	let doneTodos = todos.filter(
		(todo) => todo.status === 'not done');
	return doneTodos;
};

//Mark a todo item as in progress
const markInProgress = (id) => {
	let todos = fetchTodos();
    let todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.status = 'in proress';
        saveTodos(todos);
        return todo.title;
    }
    return null;
};

//Mark a todo item as done
const markDone = (id) => {
    let todos = fetchTodos();
    let todo = todos.find((todo) => todo.id === id);
    if (todo) {
        todo.status = 'done';
        saveTodos(todos);
        return todo.title;
    }
    return null;
};

//Utility functions

//Fetches todos from a file and returns them as an array.
//If the file does not exist or cannot be read, an empty array is returned. 
const fetchTodos = () => { //
	try {
        const dataBuffer = fs.readFileSync(todosFilePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

//Saves todos to a file.
const saveTodos = (todos) => {
    const dataJSON = JSON.stringify(todos);
    fs.writeFileSync(todosFilePath, dataJSON);
};

const logTodo = (todo) => {
	console.log('## ---## --- ##');
	console.log(`${todo.title}`);
};

// Exporting function
module.exports = {
	addTodo,
	deleteTodoByTitle,
	readTodo,
	updateTodo,
	listTodos,
	listTodosInProgress,
	listTodosDone,
	listTodosNotDone,
	markInProgress,
	markDone,
	logTodo
};
