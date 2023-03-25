import React from 'react';

export default function AddTodoForm() {
     return (
      <form>
        <label htmlFor='todoList'>"Title</label>
        <input type='text' id='todoTitle'></input>
        <button type='button'>Add</button>

      </form>
    );

}