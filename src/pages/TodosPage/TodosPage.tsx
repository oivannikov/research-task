import React,  { useState, useEffect } from "react";

import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodoList } from "../../components/TodoList/TodoList";

import { ITodo } from "../../interfaces";

declare var confirm: (qustion: string) => boolean;

export const TodosPage: React.FC  = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addHandler(title: string) {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }

    setTodos(prev => [newTodo, ...prev]);
  }

  const handleToggle = (id: number) => {    
    setTodos(prev => 
      prev.map(todo =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo,
      ));    
  }

  function handleRemove(id: number) {
    const shoudRemove = confirm('Вы уверены что хотите удалить элемент?');

    if (shoudRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  }
  
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </>
  );
}
