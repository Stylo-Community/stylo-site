import React from 'react';

import MaterialIcon from './MaterialIcon.jsx';
import { LINKS } from '../config/links.js';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <MaterialIcon name="terminal" className="text-primary" />
            <span className="font-bold text-lg">Stylo Community</span>
          </div>
          <p className="text-slate-500 text-sm">
            Construindo o futuro do desenvolvimento, um commit de cada vez.
          </p>
        </div>

        <div className="flex gap-8">
          <a className="text-slate-400 hover:text-white transition-colors" href={LINKS.github} aria-label="GitHub">
            <MaterialIcon name="account_tree" className="text-[24px]" />
          </a>
          <a className="text-slate-400 hover:text-white transition-colors" href={LINKS.twitter} aria-label="X">
            <MaterialIcon name="alternate_email" className="text-[24px]" />
          </a>
          <a className="text-slate-400 hover:text-white transition-colors" href={LINKS.discord} aria-label="Discord">
            <MaterialIcon name="hub" className="text-[24px]" />
          </a>
        </div>

        <div className="text-slate-500 text-sm text-center md:text-right">
          <div className="flex gap-4 justify-center md:justify-end mb-2">
            <a className="hover:text-white transition-colors" href="#">Termos</a>
            <a className="hover:text-white transition-colors" href="#">Privacidade</a>
          </div>
          <p>© 2024 Stylo Community. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
