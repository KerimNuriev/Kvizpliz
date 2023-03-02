import React, { useState } from 'react';
import type Todo from './type/Todo';

type TaskProps = {
  task: Todo;
  // тип - функция
  // коллбэк, событие
  onRemove: (id: number) => void;
  onChange: (id: number) => void;
  onEdit: ({ id, name }: { id: number; name: string }) => void;
};

function Task({ task, onRemove, onChange, onEdit }: TaskProps): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState(task.name);

  const handlerSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    onRemove(task.id);
  };

  const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange(task.id);
  };

  const handlerChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setText(e.target.value);
  };

  const handlerEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
    setEdit(!edit);
    onEdit({ id: task.id, name: text });
  };

  console.log(task.id);
  return (
    <form onSubmit={handlerSubmit}>
      <input type="checkbox" checked={task.status} onChange={handlerChange} />{' '}
      <div style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
        {task.name}
      </div>
      <button type="submit">Удалить</button>
      <button type="button" onClick={handlerEdit}>
        Изменить
      </button>
      {edit && (
        <div>
          <input type="text" value={text} onChange={handlerChangeInput} />
        </div>
      )}
    </form>
  );
}

export default Task;
