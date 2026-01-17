import React from 'react';

import MaterialIcon from '../components/MaterialIcon.jsx';
import { LINKS } from '../config/links.js';

const activeMembers = [
  {
    src: 'https://i.imgur.com/oQ5KK9n.jpeg'
  },
  {
    src: 'https://i.pinimg.com/736x/01/61/2f/01612f5d5dc7d4938d406184fb69b4a0.jpg'
  },
  {
    src: 'https://i.pinimg.com/736x/01/61/2f/01612f5d5dc7d4938d406184fb69b4a0.jpg'
  }
];

const benefits = [
  {
    icon: 'diversity_3',
    title: 'Conexões Reais',
    description:
      'Networking de alto nível com desenvolvedores.',
    accent: 'primary'
  },
  {
    icon: 'psychology',
    title: 'Mentorias Técnicas',
    description:
      'Sessões semanais de Code Review, arquitetura e carreira com profissionais experientes.',
    accent: 'accent-blue'
  },
  {
    icon: 'account_tree',
    title: 'Projetos Open Source',
    description:
      'Colabore em projetos reais da comunidade e construa um portfólio que impressiona recrutadores.',
    accent: 'primary'
  }
];

export default function Comunidade() {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-6 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">Coming Soon</span>
        <h1 className="text-primary text-glow-yellow tracking-tight text-6xl md:text-8xl font-bold leading-tight pb-4">
          Comunidade
        </h1>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
          Onde o código encontra a colaboração. Junte-se à elite dos desenvolvedores brasileiros em um ecossistema focado em alta performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
        <div className="md:col-span-8 bg-card-dark glow-border-blue rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <MaterialIcon name="hub" className="text-[120px] text-accent-blue" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-accent-blue font-bold tracking-widest text-xs uppercase">Server Status</span>
            </div>

            <h3 className="text-3xl font-bold mb-2">Discord Live Feed</h3>
            <p className="text-white/50 text-sm mb-8">Nossa base de operações para troca de conhecimento.</p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-1">
              <p className="text-white/40 text-xs font-medium uppercase tracking-tighter">Membros Total</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold tracking-tight">105+</p>
                <p className="text-green-400 text-sm font-bold">+0.1%</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-white/40 text-xs font-medium uppercase tracking-tighter">Online Agora</p>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold tracking-tight text-accent-blue">19</p>
                <p className="text-accent-blue text-sm font-bold">LIVE</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 bg-card-dark glow-border-yellow rounded-xl p-8 flex flex-col items-center text-center">
          <h3 className="text-xl font-bold mb-6">Membros Ativos</h3>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {activeMembers.map((m) => (
              <div key={m.src} className="size-14 rounded-full border-2 border-primary/40 p-0.5">
                <img alt="Membro da comunidade" className="w-full h-full rounded-full bg-zinc-800" src={m.src} />
              </div>
            ))}

            <div className="size-14 rounded-full border-2 border-primary/40 p-0.5 flex items-center justify-center bg-zinc-800 text-primary font-bold text-xs">
              +1.2k
            </div>
          </div>

          <p className="text-white/60 text-sm mb-6">Os melhores talentos de tech do Brasil já estão aqui.</p>

          <button className="w-full border border-primary/30 hover:bg-primary/10 text-primary py-3 rounded-lg font-bold transition-all text-sm" type="button">
            Ver Todos
          </button>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10 px-4">
          <h2 className="text-2xl font-bold">Benefícios</h2>
          <div className="h-[1px] flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`bg-card-dark border border-white/5 p-8 rounded-xl transition-all group ${
                b.accent === 'accent-blue' ? 'hover:border-accent-blue/50' : 'hover:border-primary/50'
              }`}
            >
              <div
                className={`size-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                  b.accent === 'accent-blue'
                    ? 'bg-accent-blue/10 text-accent-blue'
                    : 'bg-primary/10 text-primary'
                }`}
              >
                <MaterialIcon name={b.icon} />
              </div>
              <h4 className="text-xl font-bold mb-3">{b.title}</h4>
              <p className="text-white/50 text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/20 to-accent-blue/20 rounded-2xl p-1 w-full max-w-4xl mx-auto overflow-hidden">
        <div className="bg-background-dark rounded-[14px] p-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para elevar seu nível?</h2>
          <p className="text-white/60 mb-8 max-w-lg">
            Não perca a chance de fazer parte da primeira leva de membros oficiais da Stylo Community.
          </p>

          <a
            href={LINKS.discord}
            className="bg-primary text-black px-10 py-4 rounded-xl font-black text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(244,207,62,0.4)] transition-all flex items-center gap-3"
          >
            ENTRAR NO DISCORD AGORA
            <MaterialIcon name="trending_flat" />
          </a>
        </div>
      </div>
    </div>
  );
}
