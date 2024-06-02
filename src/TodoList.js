import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, completeTodo, removeTodo}) => {
  return (
    <div>
        {todos.map((todo, index) => (
            <Todo 
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
        ))}
    </div>
  )
}

export default TodoList