export type Res = { message: string; user: string };

export type User = {
  id?: number;
  name?: string;
  password: string;
  score?: number;
};
export type State = {
  user?: undefined | User;
  message: '' | string;

};
  