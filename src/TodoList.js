import React from 'react';

const list = [
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
        {list.map(function(item){
        return <li key={item.id}>{item.title}</li>
      })}
      </ul>
      </div>
     );
 }

