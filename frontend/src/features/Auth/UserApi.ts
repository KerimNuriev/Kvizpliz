import type { Res, State, User } from "./Types/types";


export const registr = async (newUser: User): Promise<User> => {
    const res = await fetch('/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: newUser.name,
        password: newUser.password,
      }),
    });
    return res.json();
  };

  export const login = async (item: User): Promise<User> => {
    const res = await fetch('/sign-in', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(item),
    });
    return res.json();
  };

  export const logout = async (): Promise<User> => {
    const res = await fetch('/logout', {
      credentials: 'include',
    });
    return res.json();
  };

  export const checkUser = async (): Promise<State> => {
    const res = await fetch('/sign-in', {
      credentials: 'include',
    });
    const data = await res.json();
    return data;
  };


  