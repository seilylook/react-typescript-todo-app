import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';
import { useTodosDispatch, Todo } from '../contexts/TodosContext';

export type TodoItemProps = {
  todo: Todo;
};

const TodoListItem = ({ todo }: TodoItemProps) => {
  const { text, checked } = todo;
  const dispatch = useTodosDispatch();

  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: todo.id,
    });
  };

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: todo.id,
    });
  };

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle()}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove()}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
