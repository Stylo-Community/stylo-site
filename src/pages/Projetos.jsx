import React from 'react';

import MaterialIcon from '../components/MaterialIcon.jsx';

const featuredImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuASr5xXBRWvfTAb-xNT944a3vo8YiRYcgGNX4Yiz_IhDNvASOiR8fhuIoRQPuwWPqMVqZO-qaEBxz_EeZtTGgTNh7bx3BwdtZkC9u8v6PVkbp7DiuENhKVZChK_-wmluHFG5fr-FQVq4G6uVlPZq76UlvZqhdy-18BLqv06n-avKEXMdd8_b1AsSEalZ9g-vAfNlr1tJPRSCNoyiitcgpQ5tNNEK1eIJz5xDmC1TjF5739u0GPsddCFDc03guUa3Px8yqGlynVejz0';

const projects = [
  {
    title: 'API Gateway Core',
    description:
      'Middleware robusto para orquestração de microserviços escaláveis com latência ultra-baixa.',
    tags: ['Node.js', 'Rust'],
    icon: 'hub',
    tint: 'accent-blue'
  },
  {
    title: 'Community Bot',
    description:
      'Automação inteligente para gestão de comunidades no Discord e Telegram com integração de IA.',
    tags: ['Python', 'FastAPI'],
    icon: 'smart_toy',
    tint: 'primary'
  },
  {
    title: 'Stylo Design System',
    description:
      'Guia completo de estilos, tokens e documentação para designers e engenheiros de front-end.',
    tags: ['Figma', 'Tokens'],
    icon: 'brush',
    tint: 'neutral'
  },
  {
    title: 'Stylo Mobile Go',
    description:
      'Boilerplate opinativo para aplicações mobile de alta performance com arquitetura limpa.',
    tags: ['Flutter', 'Go'],
    icon: 'phone_iphone',
    tint: 'accent-blue'
  }
];

const featured = {
  title: 'Stylo UI Kit',
  description:
    'Biblioteca de componentes premium focada em acessibilidade, performance e design minimalista. O kit definitivo para interfaces modernas de alta conversão.',
  tags: [
    { label: 'React', className: 'bg-primary/20 text-primary' },
    { label: 'TypeScript', className: 'bg-accent-blue/20 text-accent-blue' },
    { label: 'Tailwind', className: 'bg-white/10 text-white' }
  ]
};

export default function Projetos() {
  return (
    <div className="max-w-[1200px] mx-auto w-full px-6 py-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 tracking-tighter">Nossos Projetos</h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-2xl text-lg">
          Iniciativas open-source focadas em elevar o nível do desenvolvimento web e mobile. Construído pela comunidade,
          para a comunidade.
        </p>
      </div>

      <div className="mb-10 overflow-x-auto">
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-8 min-w-max">
          <button type="button" className="border-b-2 border-primary text-primary pb-3 px-1 text-sm font-bold tracking-wide">
            TODOS
          </button>
          <button
            type="button"
            className="border-b-2 border-transparent text-slate-500 hover:text-primary pb-3 px-1 text-sm font-bold tracking-wide transition-colors"
          >
            WEB &amp; UI
          </button>
          <button
            type="button"
            className="border-b-2 border-transparent text-slate-500 hover:text-primary pb-3 px-1 text-sm font-bold tracking-wide transition-colors"
          >
            BACKEND &amp; TOOLS
          </button>
          <button
            type="button"
            className="border-b-2 border-transparent text-slate-500 hover:text-primary pb-3 px-1 text-sm font-bold tracking-wide transition-colors"
          >
            MOBILE
          </button>
        </div>
      </div>

      <div className="bento-grid">
        <div className="featured-span group relative bg-surface-dark rounded-xl overflow-hidden flex flex-col md:flex-row border border-white/5 hover:border-primary/30 transition-all shadow-xl">
          <div
            className="w-full md:w-1/2 aspect-video md:aspect-auto bg-cover bg-center relative"
            style={{ backgroundImage: `url('${featuredImage}')` }}
          >
            <div className="absolute top-4 left-4 bg-primary text-background-dark text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
              Destaque
            </div>
          </div>

          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <div className="flex gap-2 mb-4">
                {featured.tags.map((t) => (
                  <span
                    key={t.label}
                    className={`${t.className} text-[10px] font-bold px-2 py-1 rounded uppercase`}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{featured.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{featured.description}</p>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex -space-x-2">
                <div className="size-8 rounded-full border-2 border-surface-dark bg-slate-700" />
                <div className="size-8 rounded-full border-2 border-surface-dark bg-slate-700" />
                <div className="size-8 rounded-full border-2 border-surface-dark bg-slate-700 flex items-center justify-center text-[10px] font-bold">
                  +12
                </div>
              </div>

              <button
                type="button"
                className="flex items-center gap-2 bg-primary text-background-dark px-4 py-2 rounded-lg text-sm font-bold group-hover:scale-105 transition-transform"
              >
                Ver no GitHub
                <MaterialIcon name="open_in_new" className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        {projects.map((p) => (
          <div
            key={p.title}
            className={`group bg-surface-dark rounded-xl p-6 border border-white/5 transition-all flex flex-col justify-between ${
              p.tint === 'accent-blue'
                ? 'hover:border-accent-blue/50'
                : p.tint === 'primary'
                  ? 'hover:border-primary/50'
                  : 'hover:border-white/20'
            }`}
          >
            <div>
              <div
                className={`w-full h-32 rounded-lg mb-6 flex items-center justify-center overflow-hidden ${
                  p.tint === 'accent-blue'
                    ? 'bg-accent-blue/10'
                    : p.tint === 'primary'
                      ? 'bg-primary/10'
                      : 'bg-white/5'
                }`}
              >
                <MaterialIcon
                  name={p.icon}
                  className={`text-4xl opacity-50 ${
                    p.tint === 'accent-blue'
                      ? 'text-accent-blue'
                      : p.tint === 'primary'
                        ? 'text-primary'
                        : 'text-white'
                  }`}
                />
              </div>

              <div className="flex gap-2 mb-3">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                      p.tint === 'accent-blue'
                        ? 'bg-accent-blue/20 text-accent-blue'
                        : p.tint === 'primary'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-white/10 text-white'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
            </div>

            <button
              type="button"
              className="mt-6 w-full py-2 border border-slate-700 hover:border-primary text-slate-300 hover:text-primary rounded-lg text-sm font-medium transition-all"
            >
              Explorar Repositório
            </button>
          </div>
        ))}

        <div className="group bg-primary/5 rounded-xl p-6 border border-primary/20 border-dashed flex flex-col items-center justify-center text-center">
          <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <MaterialIcon name="add_circle" className="text-primary text-3xl" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Seu Projeto Aqui?</h3>
          <p className="text-slate-500 text-sm mb-6">
            Temos suporte para novas iniciativas. Submeta sua ideia para a nossa comunidade.
          </p>
          <a className="text-primary font-bold text-sm underline underline-offset-4" href="https://discord.gg/xDjmK9ShuV" target="_blank">
            Saiba como contribuir
          </a>
        </div>
      </div>
    </div>
  );
}
