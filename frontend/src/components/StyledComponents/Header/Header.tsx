'use client';
import './Header.css';
import { useState } from 'react';
import SettingsIcon from '../Icons/SettingsIcon';

export default function Header({
  title,
  menu,
}: {
  title: string;
  menu?: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <header className="ta-c">
      <h1>{title}</h1>
      {menu && (
        <div
          className="header-menu f fd-c ai-fe"
          // onMouseLeave={() => setIsMenuOpen(false)}
        >
          <button onMouseEnter={() => setIsMenuOpen(true)}>
            <SettingsIcon />
          </button>
          {isMenuOpen && menu}
        </div>
      )}
    </header>
  );
}
