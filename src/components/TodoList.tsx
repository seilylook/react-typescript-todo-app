import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { useTodosState } from '../contexts/TodosContext';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    checked: boolean;
  };
};

const TodoList = () => {
  const todos = useTodosState();

  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
