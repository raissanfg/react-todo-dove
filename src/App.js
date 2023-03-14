import React from 'react';

const list = [
  {
    id: 22,
    title: 'Complete assignment'
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
        <ul>
          {list.map(function(item){
          return <li>{item.id}</li>
        })}
          {list.map(function(item){
          return <li>{item.title}</li>
        })}
        </ul>
    </div>
  );
}

export default App;
