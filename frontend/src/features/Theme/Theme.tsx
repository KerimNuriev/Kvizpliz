import React from 'react';

export default function Theme(): JSX.Element {
  const theme = { name: 'classic' };
  return (
    <div className="themeCard">
      <p className="themeName">{theme.name}</p>
    </div>
  );
}
