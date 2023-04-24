import React from 'react';
import TodoListItem from './TodoListItem';



const todoList = [
    {
      id: 1,
      title: 'Complete the assignment!'
    },
    {
      id: 2,
      title: 'Assignment in progress!'
    },
    {
      id: 3,
      title: 'Assignment complete!'
    }
  ];

 export default function TodoList() {
    return (
      <div>
         <ul>
         {todoList.map((item) =>
         <TodoListItem todo={item} key={item.id} />
         )}
         </ul>
      </div>
    );
} 

