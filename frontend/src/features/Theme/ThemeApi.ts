/* eslint-disable import/prefer-default-export */
import type ThemeType from './type/ThemeType';

export default async function loadThemes(): Promise<ThemeType[]> {
  const res = await fetch('/api/themes');
  return res.json();
}
