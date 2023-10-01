// Todo.js
import React, { useState } from 'react';
import styled from 'styled-components';

const TodoContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <TodoContainer>
      <h1>Todo List</h1>
      <InputContainer>
        <Input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTodo}>Add</Button>
      </InputContainer>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button onClick={() => removeTodo(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </TodoContainer>
  );
};

export default App;
