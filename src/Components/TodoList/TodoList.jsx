import React from 'react';
// material ui
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

// Component
import Todo from '../Todo/Todo';

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );

  return null;
}
