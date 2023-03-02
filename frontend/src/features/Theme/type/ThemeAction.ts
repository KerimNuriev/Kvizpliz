import type Theme from './Theme';

type ThemeAction =
  | { type: 'themes/loadThemes'; payload: Theme[] }

export default ThemeAction;
