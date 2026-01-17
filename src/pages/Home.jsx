import React from 'react';

import MaterialIcon from '../components/MaterialIcon.jsx';
import { LINKS } from '../config/links.js';

const features = [
  {
    icon: 'code_blocks',
    title: 'Open Source',
    description: 'Projetos reais onde você pode contribuir e deixar sua marca no mundo tech.',
    accent: 'accent-blue'
  },
  {
    icon: 'hub',
    title: 'Networking',
    description: 'Conecte-se com engenheiros de software e aprenda através da prática.',
    accent: 'primary'
  },
  {
    icon: 'school',
    title: 'Mentoria',
    description: 'Trilhas de aprendizado e mentorias exclusivas para membros ativos da comunidade.',
    accent: 'accent-blue'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="max-w-5xl w-full text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">Em desenvolvimento</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-8 leading-[0.9] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
          Stylo <br className="hidden md:block" /> Community
        </h1>

        <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed">
          A próxima fronteira da colaboração técnica. Uma iniciativa focada em{' '}
          <span className="text-accent-blue font-medium">desenvolvedores</span> e ecossistemas{' '}
          <span className="text-primary font-medium">open-source</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href={LINKS.discord}
            className="group relative flex items-center justify-center min-w-[240px] h-16 bg-primary text-black rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(244,207,62,0.2)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-3">
              <MaterialIcon name="rocket_launch" className="font-bold" />
              Entrar no Discord
            </span>
          </a>

          <a
            href="#"
            className="flex items-center justify-center min-w-[200px] h-16 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white font-medium text-lg gap-3"
          >
            Ver Roadmap
            <MaterialIcon name="arrow_forward" className="text-slate-500" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 w-full text-left">
          {features.map((f) => (
            <div
              key={f.title}
              className={`p-8 rounded-2xl bg-surface-dark/50 border border-white/5 transition-all group ${
                f.accent === 'primary' ? 'hover:border-primary/30' : 'hover:border-accent-blue/30'
              }`}
            >
              <div
                className={`size-12 rounded-xl flex items-center justify-center mb-6 transition-colors ${
                  f.accent === 'primary'
                    ? 'bg-primary/10 group-hover:bg-primary'
                    : 'bg-accent-blue/10 group-hover:bg-accent-blue'
                }`}
              >
                <MaterialIcon
                  name={f.icon}
                  className={
                    f.accent === 'primary'
                      ? 'text-primary group-hover:text-black'
                      : 'text-accent-blue group-hover:text-white'
                  }
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
