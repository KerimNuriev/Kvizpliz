import type ThemeType from './ThemeType';

type ThemeAction = { type: 'themes/loadThemes'; payload: ThemeType[] };

export default ThemeAction;
