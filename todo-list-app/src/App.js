import React, { useState } from 'react';
import TodoRow from './components/TodoRow';
import './App.css';

function App() {
  // State for managing todos and filter
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Event handler for adding a new todo
  const handleAddTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  // Event handler for deleting a todo
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // Event handler for completing/uncompleting a todo
  const handleCompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  // Event handler for applying a filter
  const handleFilter = (status) => {
    setFilter(status);
  };

  // Filter the todos based on the selected filter
  const filteredTodos = filter === 'all' ? todos : todos.filter(todo => todo.completed === (filter === 'completed'));

  // Render the App component
  return (
    <div className="container">
      <h1>Todo List</h1>
      <div>
        <input className='input'
          type="text"
          placeholder="Enter a new todo..."
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value !== '') {
              handleAddTodo(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button className='input'
          onClick={() => {
            const input = document.querySelector('input');
            if (input.value !== '') {
              handleAddTodo(input.value);
              input.value = '';
            }
          }}
        >
          Add Todo
        </button>
      </div>
      <div className='filter-button'>
        <button className='b1'
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        <button className='b2'
          onClick={() => handleFilter('active')}
        >
          Active
        </button>
        <button className='b3'
          onClick={() => handleFilter('completed')}
        >
          Completed
        </button>
      </div>
      <div className="container">
        <ul>
          {filteredTodos.map((todo, index) => (
            <TodoRow
              key={index}
              index={index}
              text={todo.text}
              completed={todo.completed}
              onDelete={handleDeleteTodo}
              onComplete={handleCompleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;