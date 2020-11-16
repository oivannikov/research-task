import React from 'react';

import { TodoListProps } from '../../interfaces';

import './TodoList.css';

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {  
  if (todos.length === 0) {
    return (
      <h1 className="center">Please add todo: </h1>
    )
  }

  function removeHandle(e: React.MouseEvent, id: number) {
    e.preventDefault();
    onRemove(id);
  }

  return (
    <ul>
      { todos.map(todo => {
        const classes = ['todo'];

        if (todo.completed) {
          classes.push('completed');
        }
        
        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandle(e, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  ); 
}

