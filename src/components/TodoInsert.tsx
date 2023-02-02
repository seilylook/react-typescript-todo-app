import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useTodosDispatch } from '../contexts/TodosContext';

function TodoInsert() {
  const [value, setValue] = useState('');
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      text: value,
    });
    setValue('');
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="할 일을 입력하세요."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
