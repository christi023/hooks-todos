import React, { useContext } from 'react';
// hook import
import useToggleState from '../../Hooks/useToggleState';
// material ui
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//Component
import EditTodoForm from '../EditTodoForm/EditTodoForm';
// context
import { DispatchContext } from '../../context/todos.context';

export default function Todo({ id, task, completed }) {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: 'TOGGLE', id: id })}
          />

          <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatch({ type: 'REMOVE', id: id })}>
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={toggle}>
              <EditIcon aria-label="Edit" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
