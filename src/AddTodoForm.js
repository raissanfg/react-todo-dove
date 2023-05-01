import React from 'react';
import InputWithLabel from './InputWithLabel';



 export default function AddTodoForm( {onAddTodo}) {
  const [todoTitle, setTodoTitle] = React.useState('');

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault()
    onAddTodo({ 
       title: todoTitle,
       id: Date.now()
      });
    setTodoTitle("")
  }
     return (
      <div>
         <form onSubmit={handleAddTodo}>
           <InputWithLabel id="todoTitle" value={todoTitle} onInputChange={handleTitleChange}>
             Title
           </InputWithLabel>
           <button>Add</button>
         </form>
      </div>
    );

  
}

