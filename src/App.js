import React, { useState } from 'react' // Importing React and the useState hook
import './App.css';      // Importing the css file for styling
import TodoForm from './TodoForm'; //Importing the TodoForm component
import TodoList from './TodoList'; //Importing the TodoList component

function App() {
  // Initializing state with some default to-do items
  const [todos, setTodos] = useState([
    {text: "Learn about React", isCompleted: false },
    {text: "Make new friends", isCompleted: false },
    {text: "Build a really cool to-do app", isCompleted: false }
  ])

  // Function to add a new to-do item
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos); // Updating the state with the new to-do list 
  };

  // Function to toggle the completion status of a to-do item
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);  // Updating the state with the modified to-do list 
  };
  
  // Function to remove a to-do item
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos)  // Updating the state with the modified to-do list 
  }
  return (
    // The main app structure
    <div className="App">
      <div className='todo-list'>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;  // What this does is the export the whole app as a component that can be used by another component
