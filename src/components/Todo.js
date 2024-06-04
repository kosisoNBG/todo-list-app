import React from 'react' // Importing React 

const Todo = ({todo, index, completeTodo, removeTodo}) => {
  return (
    // Main structure of a single to-do item
    <div style={{textDecoration: todo.isCompleted ? "line-through" : ""}} className='todo'>
    {todo.text}  {/* Displaying the to-do text */}
    <div>
      {/* Button to mark the to-do as complete */}
        <button onClick={() => completeTodo(index)}>Complete</button>
        {/* Button to remove the to-do item */}
        <button onClick={() => removeTodo(index)}>Delete</button>
    </div>
    </div>
  )
}

export default Todo // Exporting the Todo component as the default export