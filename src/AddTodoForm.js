import React from 'react';



 export default function AddTodoForm( {onAddTodo}) {
  const [todoTitle, setTodoTitle] = React.useState('');

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault()
    onAddTodo({ title: todoTitle, id: Date.now()});
    console.log(todoTitle)
    setTodoTitle("")
   
  }
     return (
      <form onSubmit={handleAddTodo}>
        <label htmlFor='todoTitle'> Title  </label>
        <input id='todoTitle' type='text' name='title' value={todoTitle}  onChange={handleTitleChange} ></input>
        <button type="submit">Add</button>

      </form>
    );

  
}

