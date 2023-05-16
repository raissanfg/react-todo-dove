import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []);
  
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])
  
  return [todoList, setTodoList];
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();
 
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id){
    const updatedTodoList = todoList.filter((todo) => todo.id !== id)
    setTodoList(updatedTodoList)
  }

  return (
    <>
    <div>
      <h1>Todo List</h1>
    </div>
      <hr />
      <AddTodoForm  onAddTodo={addTodo} />
      <p> {}</p>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      
     
    </>
  );
}



export default App;
