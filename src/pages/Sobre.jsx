import React from 'react';
import { Link } from 'react-router-dom';

import MaterialIcon from '../components/MaterialIcon.jsx';
import { LINKS } from '../config/links.js';

const cards = [
  {
    icon: 'code_blocks',
    title: 'Projetos Open-Source',
    description:
      'Desenvolvemos ferramentas, bibliotecas e reunimos uma variedade de projetos de código aberto, convidando todos os desenvolvedores a participar, aprender e praticar suas habilidades.',
    cta: 'Ver Repositórios'
  },
  {
    icon: 'school',
    title: 'Curadoria de Cursos',
    description:
      'Selecionamos os melhores caminhos de aprendizado, incluindo opções gratuitas e pagas, todos escolhidos para enriquecer o aprendizado dos nossos membros.',
    cta: 'Acessar Trilhas'
  },
  {
    icon: 'article',
    title: 'Blog Colaborativo',
    description:
      'Um espaço para compartilhar conhecimento técnico e experiências reais da comunidade para a comunidade. Artigos escritos por quem vive o código.',
    cta: 'Ler Últimos Posts'
  }
];

export default function Sobre() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-10">
      <section className="pt-16 pb-12 text-center">
        <div className="inline-block rounded-full border border-primary/30 px-4 py-1.5 mb-6 bg-primary/5">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Nossa Missão</span>
        </div>

        <h1 className="text-5xl font-black tracking-tighter text-primary lg:text-7xl glow-text mb-6">
          Sobre Nós
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          A Stylo é um ecossistema digital focado em capacitar a próxima geração de talentos tech através de
          colaboração radical e aprendizado prático.
        </p>
      </section>

      <section className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="glass-card group flex flex-col rounded-2xl p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-background-dark">
                <MaterialIcon name={card.icon} className="text-3xl" />
              </div>

              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{card.description}</p>

              <div className="mt-8 flex items-center text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {card.cta} <MaterialIcon name="arrow_forward" className="ml-2 text-sm" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center text-background-dark">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <h2 className="relative z-10 text-3xl font-black md:text-5xl">Pronto para transformar sua carreira?</h2>
          <p className="relative z-10 mt-4 text-lg font-medium opacity-90">
            Junte-se a centenas de desenvolvedores na Stylo Community.
          </p>

          <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/projetos"
              className="flex h-12 min-w-[180px] items-center justify-center rounded-xl bg-background-dark px-8 text-base font-bold text-primary transition-transform hover:scale-105 active:scale-95"
            >
              Explorar Projetos
            </Link>
            <a
              href={LINKS.discord}
              className="flex h-12 min-w-[180px] items-center justify-center rounded-xl border-2 border-background-dark bg-transparent px-8 text-base font-bold text-background-dark transition-colors hover:bg-background-dark/5"
            >
              Entrar no Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
