import type Todo from './Todo';

type Action =
  | { type: 'tasks/loadTask'; payload: Todo[] }
  | { type: 'tasks/addTask'; payload: Todo }
  | { type: 'tasks/removeTask'; payload: string }
  | { type: 'tasks/updateTask'; payload: Todo }
  | { type: 'tasks/editTask'; payload: Todo };

export default Action;
