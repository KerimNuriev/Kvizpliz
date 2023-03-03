import type { State, User } from './types';

type Action =
  | { type: 'REG_USER'; payload: State }
  | { type: 'LOG_USER'; payload: State }
  | { type: 'INIT_USERS'; payload: User[] }
  | { type: 'LOGOUT' }


export default Action;
