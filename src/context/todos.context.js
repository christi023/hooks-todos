// todos
// all methods to interact with todos
import React, { createContext } from 'react';
// Hooks
import useTodoState from '../Hooks/useTodoState';

const defaultTodos = [
  { id: 1, task: 'Learn Web Development', completed: false },
  { id: 2, task: 'Relax with the family', completed: true },
];
// create context
export const TodosContext = createContext();
// make todos provider
export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);

  return <TodosContext.Provider value={todosStuff}>{props.children}</TodosContext.Provider>;
}
