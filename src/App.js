import React from 'react';

const list = [
  {
    id: 1,
    title: 'Complete assignment'
  },
  {
    id: 2,
    title: 'Assignment in progress'
  },
  {
    id: 3,
    title: 'Assignment complete'
  }
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
        <ul>
          {list.map(function(item){
          return <li key={item.id}>{item.title}</li>
        })}
        </ul>
    </div>
  );
}

export default App;
