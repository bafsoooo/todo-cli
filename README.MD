# Todo CLI Application

This is a command-line application for managing a to-do list.

## Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/todo-cli.git
    ```
2. Navigate to the project directory:
    ```sh
    cd todo-cli
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

### Adding a To-Do

To add a to-do item, use the `addTodo` command followed by the title of the to-do item:
```sh
node index.js addTodo --title="Your todo title"
```

### Reading a To-Do

To read a to-do item, use the `readTodo` command followed by the id of the to-do item:
```sh
node index.js readTodo --id="Your todo id"
```

### Updating a To-Do

To update a to-do item, use the `updateTodo` command followed by the id and the new title of the to-do item  :
```sh
node index.js updateTodo --id="Your todo id" --title="Your new todo title"
```
### Deleting a To-Do

To delete a to-do item, use the `deleteTodo` command followed by the title of the to-do item:
```sh
node index.js deleteTodo --title="Your todo title"
```

### Mark a task as in progress or done 

To mark a to-do item as in progress or done, use the `mark-done` or `mark-in-progress` command followed by the id of the to-do item
```sh
node index.js mark-done --id="Your todo id"
```
```sh
node index.js mark-in-progress --id="Your todo id"
```

### List all tasks

To list all tasks , use the `listTodo` command:
```sh
node index.js listTodo
```

### List all tasks that are done

To list all tasks that are done , use the `listTodosDone` command:
```sh
node index.js listTodosDone
```

### List all tasks that are in progress

To list all tasks that are in progress , use the `listTodosInProgress` command:
```sh
node index.js listTodosInProgress
```

### List all tasks that are not done

To list all tasks that are not done , use the `listTodosNotDone` command:
```sh
node index.js listTodosNotDone
```
