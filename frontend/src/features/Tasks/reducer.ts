import type State from './type/State';
import type Action from './type/Action';
import type Todo from './type/Todo';

export const initialState: State = {
  tasksList: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'tasks/loadTask':
      return { ...state, tasksList: action.payload };

    case 'tasks/addTask': {
      return { ...state, tasksList: [...state.tasksList, action.payload] };
    }

    case 'tasks/removeTask':
      return {
        ...state,
        tasksList: state.tasksList.filter(
          (n) => n.id !== Number(action.payload),
        ),
      };
    case 'tasks/updateTask':
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          Number(task.id) === Number(action.payload.id)
            ? { ...task, status: action.payload.status }
            : { ...task },
        ),
      };
    case 'tasks/editTask':
      return {
        ...state,
        tasksList: state.tasksList.map((task) =>
          Number(task.id) === Number(action.payload.id)
            ? { ...action.payload }
            : { ...task },
        ),
      };

    default:
      return state;
  }
}

export default reducer;
