import React from 'react' // Importing React
import Todo from './Todo' // Importing the Todo component

const TodoList = ({todos, completeTodo, removeTodo}) => {
  return (
    <div>
      {/* looping through the todos and rendering a Todo component for each item */}
        {todos.map((todo, index) => (
            <Todo 
            key={index} // Unique key for each item 
            index={index} // Index of the current item 
            todo={todo}  // The current to-do item 
            completeTodo={completeTodo} // Function to toggle completion
            removeTodo={removeTodo} // Function to remove the item 
            />
        ))}
    </div>
  )
}

export default TodoList  //Exporting the TodoList component as the default export