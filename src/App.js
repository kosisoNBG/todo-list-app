import React, { useState } from 'react'
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    {text: "Learn about React", isCompleted: false },
    {text: "Make new friends", isCompleted: false },
    {text: "Build a really cool to-do app", isCompleted: false }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
  
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)
  }
  return (
    <div className="App">
      <div className='todo-list'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
