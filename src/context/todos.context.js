import React, { createContext } from 'react';
//Hooks reducer
import useLocalStorageReducer from '../Hooks/useLocalStorageReducer';
// reducers
import todoReducer from '../reducers/todo.reducer';

const defaultTodos = [
  { id: 1, task: 'Learn Web Development', completed: false },
  { id: 2, task: 'Relax with the family', completed: true },
];
// create context and splitting contexts
export const TodosContext = createContext();
export const DispatchContext = createContext();

// make todos provider
export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, todoReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}> {props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
