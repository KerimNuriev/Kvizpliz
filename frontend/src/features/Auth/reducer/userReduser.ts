import type Action from '../Types/Action';
import type { State } from '../Types/types';

const initState = {
  user: {},
  message: '',
  users: [],
};

// eslint-disable-next-line import/prefer-default-export, @typescript-eslint/default-param-last
export const userReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'INIT_USERS':
      return {
        ...state,
        users: [...action.payload],
      };
    case 'REG_USER':
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case 'LOG_USER':
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: '',
      };

    default:
      return state;
  }
};
