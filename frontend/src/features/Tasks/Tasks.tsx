import React from 'react';
import Task from './Task';
import type Todo from './type/Todo';

function Tasks({
  tasks,
  onRemove,
  onChange,
  onEdit,
}: {
  tasks: Todo[];
  onRemove: (id: number) => void;
  onChange: (id: number) => void;
  onEdit: ({ id, name }: { id: number; name: string }) => void;
}): JSX.Element {
  return (
    <div>
      {tasks?.map((el) => (
        <Task
          task={el}
          key={el.id}
          onRemove={onRemove}
          onChange={onChange}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default Tasks;
