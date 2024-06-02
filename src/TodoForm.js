import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            className='input'
            value={value}
            onChange={e => setValue(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm