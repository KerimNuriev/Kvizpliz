import type Todo from './type/Todo';

export async function loadTodos(): Promise<Todo[]> {
  const res = await fetch('/api/card');
  return res.json();
}

export default loadTodos;

export async function createTodo(name: string, status = false): Promise<Todo> {
  console.log(name, status);

  const res = await fetch('/api/card', {
    method: 'POST',
    body: JSON.stringify({ name, status }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function updateTodo(
  id: number,
  name: string,
  status: boolean,
): Promise<Todo> {
  console.log(id);

  const res = await fetch(`/api/card/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ name, status }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}

export async function delTodo(id: number): Promise<string> {
  console.log(id);

  const res = await fetch(`/api/card/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res.json();
}
