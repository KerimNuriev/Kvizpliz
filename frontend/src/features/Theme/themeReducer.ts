/* eslint-disable @typescript-eslint/default-param-last */
import type ThemeAction from './type/ThemeAction';
import type ThemeState from './type/ThemeState';

export const initialState: ThemeState = {
  themeList: [],
};

export default function themeReducer(
  state: ThemeState = initialState,
  action: ThemeAction,
): ThemeState {
  switch (action.type) {
    case 'themes/loadThemes':
      return { ...state, themeList: action.payload };
    default:
      return state;
  }
}
