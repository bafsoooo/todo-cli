#!/usr/bin/env node
//this file is the entry point of the application
const _ = require('lodash');
const yargs = require('yargs');
const todo = require('./todo');

//command line arguments
const argv = yargs
	.command('addTodo', 'Add a new todo', {
		title: {
			describe: 'Title of todo',
			demandOption: true,
			type: 'string'
		}
	})
	.command('deleteTodo', 'Delete a todo', {
        title: {
            describe: 'Title of todo',
            demandOption: true,
            type: 'string'
        }
    })
	.command('updateTodo', 'Update a todo', {
        id: {
            describe: 'ID of todo',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'New title of todo',
            demandOption: true,
            type: 'string'
        }
    })
	.command('readTodo', 'Read a todo', {
        id: {
            describe: 'ID of todo',
            demandOption: true,
            type: 'string'
        }
    })
	.command('listTodos', 'List all todos')
	.command('listTodosDone', 'List all todos done')
	.command('listTodosInProgress', 'List all todos In Progress')
	.command('listTodosNotDone', 'List all todos Not done')
	.command('mark-in-progress', ' Marking a task as in progress',{
		id: {
            describe: 'ID of todo',
            demandOption: true,
            type: 'string'
        }
	})
	.command('mark-done', 'Mark a todo as done', {
        id: {
            describe: 'ID of todo',
            demandOption: true,
            type: 'string'
        }
    })
	.help()
	.argv;

const command = argv._[0];

console.log('Running Command is :', command);

//handling commands
if (command === 'addTodo') { //addTodo
	todo.addTodo(argv.title);
} 
else if (command === 'deleteTodo') { //deleteTodo
    let todoDeleted = todo.deleteTodoByTitle(argv.title);
    let message = todoDeleted ?
        'Todo was deleted' : 'Todo cannot be found';
    console.log(message);
}
else if (command === 'readTodo') {	//readTodo
	let task = todo.readTodo(argv.id);
	if (task) {
		console.log('yahoo! The todo was found.');
		todo.logTodo(task);
	} else {
		console.log('Oops! The todo was not found.');
	}
} 
else if (command === 'updateTodo') { //updateTodo
    let task = todo.updateTodo(argv.id, argv.title);
    if (task) {
        console.log('The todo was updated.');
        todo.logTodo(task);
    } else {
        console.log('Oops! The todo was not found.');
    }
}
else if (command === 'mark-in-progress') { //mark-in-progress
	let task = todo.markInProgress(argv.id);
	if (task) {
		console.log(`${task} was marked as in progress.`);
		todo.logTodo(task);
	} else {
		console.log('Oops! The todo was not found.');
	}
}
else if (command === 'mark-done') { //mark-done
	let task = todo.markDone(argv.id);
	if (task) {
		console.log(`${task} was marked as done.`);
	} else {
		console.log('Oops! The todo was not found.');
	}
}  
else if (command === 'listTodos') { //listTodos
    let allTodos = todo.listTodos();
    console.log(`${allTodos.length} tasks available`);
    allTodos.forEach((task) => todo.logTodo(task)); // Corrected line
}  
else if (command === 'listTodosDone') { //listTodosDone
	let allTodosDone = todo.listTodosDone();
	console.log(`${allTodosDone.length} tasks available`);
	allTodosDone.forEach((task) => todo.logTodo(task));
}
else if (command === 'listTodosInProgress') { //listTodosInProgress
	let allTodosInProgress = todo.listTodosInProgress();
	console.log(`${allTodosInProgress.length} tasks available`);
	allTodosInProgress.forEach((task) => todo.logTodo(task));
}
else if (command === 'listTodosNotDone') { //listTodosNotDone
	let allTodosNotDone = todo.listTodosNotDone();
	console.log(`${allTodosNotDone.length} tasks available`);
	allTodosNotDone.forEach((task) => todo.logTodo(task));
}
else {
	console.log('It is a Invalid command.');
}


