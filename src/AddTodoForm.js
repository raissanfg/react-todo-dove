import React from 'react';

 export default function AddTodoForm(props) {

  function handleAddTodo(event) {
    event.preventDefault()
    const todoTitle = event.target.elements.title.value
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    
  }
     return (
      <form onSubmit={handleAddTodo}>
        <label htmlFor='todoTitle'> Title  </label>
        <input id='todoTitle' type='text' name='title'></input>
        <button type="submit">Add</button>

      </form>
    );

  
}

