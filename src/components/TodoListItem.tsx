import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

const TodoListItem = ({ todo }: TodoItemProps) => {
  const { text, done } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { done })}>
        {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
