import useLocalStorageState from '../Hooks/useLocalStorageState';
// uuid
import uuid from 'uuid/dist/v4';

export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState('todos', initialTodos);
  // define our own function

  return {
    todos,
    // add todo
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    // remove todo
    removeTodo: (todoId) => {
      //filter out remove todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      // call setTodos with new todos array
      setTodos(updatedTodos);
    },
    // toggle todo
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      );
      setTodos(updatedTodos);
    },
    // edit todo
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo,
      );
      setTodos(updatedTodos);
    },
  };
};
