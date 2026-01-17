import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo.jsx';
import MaterialIcon from './MaterialIcon.jsx';
import { LINKS } from '../config/links.js';

const navItems = [
  { to: '/', label: 'Início' },
  { to: '/sobre', label: 'Sobre Nós' },
  { to: '/historia', label: 'Nossa História' },
  { to: '/comunidade', label: 'Comunidade' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/contato', label: 'Contato' }
];

function navLinkClass({ isActive }) {
  const base = 'text-sm font-medium transition-colors';
  if (isActive) {
    return `${base} text-primary relative`;
  }
  return `${base} text-slate-500 dark:text-slate-400 hover:text-primary`;
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 nav-blur border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-xl font-bold tracking-tight">
            Stylo<span className="text-primary">.</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={LINKS.discord}
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-black font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20"
          >
            <MaterialIcon name="chat" className="text-[20px]" />
            Entrar no Discord
          </a>

          <button
            type="button"
            className="lg:hidden text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <MaterialIcon name="menu" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-white/10 bg-background-dark/95">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-white/70 hover:text-primary transition-colors'
                }
                end={item.to === '/'}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={LINKS.discord}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-black font-bold text-sm"
            >
              <MaterialIcon name="chat" className="text-[20px]" />
              Entrar no Discord
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
