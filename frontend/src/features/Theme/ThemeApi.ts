/* eslint-disable import/prefer-default-export */
import type Theme from './type/Theme';

export async function loadThemes(): Promise<Theme[]> {
  const res = await fetch('/api/themes');
  return res.json();
}
