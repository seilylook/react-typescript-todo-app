import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { TodosContextProvider } from './contexts/TodosContext';

const App = () => {
  return (
    <TodoTemplate>
      <TodosContextProvider>
        <TodoInsert />
        <TodoList />
      </TodosContextProvider>
    </TodoTemplate>
  );
};

export default App;
