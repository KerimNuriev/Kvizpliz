import type { User } from "./Types/types";


export const registr = async (newUser: User): Promise<User> => {
    const res = await fetch('http://localhost:4000/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }),
    });
    return res.json();
  };

  export const login = async (item: User): Promise<User> => {
    const res = await fetch('http://localhost:4000/api/auth/sign-in', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(item),
    });
    return res.json();
  };

  export const logout = async (): Promise<User> => {
    const res = await fetch('http://localhost:4000/api/auth/logout', {
      credentials: 'include',
    });
    return res.json();
  };
  