
export type User = {
  id?: number;
  name?: string;
  email: string;
  password: string;
  score?: number;
};
export type State = {
  user: undefined | User;
  message: '' | string;
  users: User[];
};
  