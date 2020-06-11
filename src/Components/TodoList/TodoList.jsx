import React, { useContext } from 'react';
// material ui
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

// Component
import Todo from '../Todo/Todo';
// context
import { TodosContext } from '../../context/todos.context';

export default function TodoList() {
  const { todos } = useContext(TodosContext);
  if (todos)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );

  return null;
}
