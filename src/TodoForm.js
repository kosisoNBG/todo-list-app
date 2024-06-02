import React, { useState } from 'react' // Importing React and the useState hook

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState(""); // Initializing the state for the form input 

    const handleSubmit = e => {
        e.preventDefault(); // Preventing the default form submission behaviour
        if (!value) return; // If the input is empty, do nothing
        addTodo(value); // Calling the addTodo functiion passed as a prop
        setValue(""); // Clearing the input field
    };
  return (
    // Form structure for adding a new to-do item
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            className='input'
            value={value} // Binding the input field to the state value
            onChange={e => setValue(e.target.value)} // Updating the state on input change 
             />
            <button type='submit'>Add</button>  {/* Button to submit the form  */}
        </form>
    </div>
  )
}

export default TodoForm