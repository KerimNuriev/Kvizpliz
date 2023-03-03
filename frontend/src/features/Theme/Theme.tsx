import React from 'react';
import type ThemeType from './type/ThemeType';
import './Theme.scss';

export default function Theme({ theme }: { theme: ThemeType }): JSX.Element {
  return (
    <div className="themeCard">
      <p className="themeName neon-shadow">{theme.name}</p>
    </div>
  );
}
