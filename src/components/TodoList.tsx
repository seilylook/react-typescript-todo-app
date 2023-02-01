import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

const TodoList = () => {
  const todos = [
    {
      id: 1,
      text: 'typescript',
      done: false,
    },
    {
      id: 2,
      text: 'nodejs',
      done: true,
    },
    {
      id: 3,
      text: 'algorithm',
      done: true,
    },
  ];

  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
