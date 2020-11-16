import React, { useRef } from 'react';

import { TodoFormProps } from '../../interfaces';

import './TodoForm.css';

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  function keyPressHandlee(event: React.KeyboardEvent) {  
    if (event.key === 'Enter') {
      onAdd(ref.current!.value);
      ref.current!.value = '';
    }
  }

  return (
    <div className="input-field mt2">
      <input
        ref={ref}
        type="text"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandlee}
      />
      <label className="active" htmlFor="title">Введите название дела</label>
    </div>
  )
}

