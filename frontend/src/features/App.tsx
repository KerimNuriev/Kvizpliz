import React, { useState, useReducer, useEffect } from 'react';
import Tasks from './Tasks/Tasks';
import type Todo from './Tasks/type/Todo';
import * as api from './Tasks/api';

import reducer, { initialState } from './Tasks/reducer';

function App(): JSX.Element {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const array = state.tasksList;
  console.log(array);

  useEffect(() => {
    api.loadTodos().then((loadedTodos) => {
      dispatch({ type: 'tasks/loadTask', payload: loadedTodos });
    });
  }, []);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ): void => {
    setText(event.target.value);
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    api.createTodo(text).then((newTodo) => {
      dispatch({ type: 'tasks/addTask', payload: newTodo });
    });
    setText('');
  };

  const handleRemove = (id: number): void => {
    api
      .delTodo(id)
      .then((num) => dispatch({ type: 'tasks/removeTask', payload: num }));
  };

  const HandlerChangeStatus = (id: number): void => {
    const obj = array.find((el) => el.id === id);
    api
      .updateTodo(id, obj!.name, !obj!.status)
      .then((data) => dispatch({ type: 'tasks/updateTask', payload: data }));
  };

  const handlerChangeText = ({
    id,
    name,
  }: {
    id: number;
    name: string;
  }): void => {
    const obj = array.find((el) => el.id === id);

    console.log(name, id, obj?.status);

    api
      .updateTodo(id, name, obj!.status)
      .then((data) => dispatch({ type: 'tasks/editTask', payload: data }));
  };

  return (
    <div>
      <input value={text} onChange={handleChange} />
      <button type="button" onClick={handleClick}>
        Send
      </button>
      <Tasks
        tasks={array}
        onRemove={handleRemove}
        onChange={HandlerChangeStatus}
        onEdit={handlerChangeText}
      />
    </div>
  );
}

export default App;
