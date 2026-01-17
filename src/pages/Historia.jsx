import React from 'react';

import MaterialIcon from '../components/MaterialIcon.jsx';
import { LINKS } from '../config/links.js';

const values = [
  {
    icon: 'groups',
    title: 'Colaboração',
    description:
      'Crescemos juntos através do suporte mútuo e revisão por pares em projetos abertos.',
  },
  {
    icon: 'menu_book',
    title: 'Conhecimento',
    description: 'Acesso democrático a documentações e ferramentas de nível industrial.',
  },
  {
    icon: 'lightbulb',
    title: 'Inovação',
    description:
      'Transformando ideias teóricas em realidade técnica através de ferramentas ágeis.',
  }
];

const originImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDMDLo4929n5mcmq0wbkR_6DkOIwsVZuWgw__CBvOPMnfUv5PLfSCb0-LM3Iobstguz0a91HD1tcIZw6LvlJgh87_1_n8dqrMVOC9fg3At04fLAAjNgijKn5oYmm_OxpPWL0_njJqfNDzKXo38czOVip-VXVrjGvqNu-gFCNGHWk5ecclU3b6iiofWD84P7QrBH0hi2cMBcDjSu2TUA0dkgsy8G2qXqGjqQoM2d9Tii7l3cCzwZVPYubqtdU2cFJinFXyrqP2-qzQg';

export default function Historia() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-20">
      <div className="w-full text-center mb-16">
        <h1 className="text-primary text-5xl md:text-7xl font-bold tracking-tighter font-display mb-4 uppercase italic">
          Nossa História
        </h1>
        <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full items-start">
        <div className="md:col-span-7 group">
          <div className="bg-slate-100 dark:bg-card-dark p-8 md:p-12 rounded-xl border border-slate-200 dark:border-white/5 ambient-glow transition-all duration-500 hover:border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <MaterialIcon name="sports_esports" className="text-8xl" />
            </div>

            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" /> A Origem
            </h3>

            <h2 className="text-3xl font-bold mb-6 font-display leading-tight">Do Jogo à Comunidade</h2>

            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-light">
              <p>
                A Stylo Community surgiu a partir de um projeto de jogo que foi descontinuado. A partir disso, um dos fundadores decidiu criar a Stylo com o objetivo de ajudar desenvolvedores que enfrentam dificuldades em seus próprios projetos, além de disponibilizar todo tipo de conteúdo em open-source.
              </p>
              <p>
                Basicamente, o fundador passou por muitos desafios ao tentar manter um projeto sozinho e, por isso, decidiu apoiar outros desenvolvedores que também precisam de uma base para começar, além de incentivar o crescimento da comunidade de desenvolvimento.
              </p>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
              <div
                className="w-full h-48 bg-center bg-cover"
                style={{ backgroundImage: `url('${originImage}')` }}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-5 asymmetric-right group">
          <div className="bg-primary/5 dark:bg-primary/5 p-8 md:p-10 rounded-xl border border-primary/20 ambient-glow transition-all duration-500 hover:bg-primary/10 relative">
            <div className="absolute bottom-0 left-0 p-6 opacity-20 text-primary">
              <MaterialIcon name="code_blocks" className="text-6xl" />
            </div>

            <h3 className="text-primary text-sm font-bold tracking-widest uppercase mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" /> Nossa Missão
            </h3>

            <h2 className="text-3xl font-bold mb-6 font-display leading-tight">Empoderando Criadores</h2>

            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
              Transformamos o encerramento de um ciclo no nascimento de um ecossistema. Hoje, a Stylo Community
              existe para democratizar o acesso a ferramentas de ponta.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MaterialIcon name="check_circle" className="text-primary" />
                <span className="text-sm font-medium">Fomento à inovação técnica descentralizada.</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon name="check_circle" className="text-primary" />
                <span className="text-sm font-medium">Compartilhamento radical de conhecimento.</span>
              </li>
              <li className="flex items-start gap-3">
                <MaterialIcon name="check_circle" className="text-primary" />
                <span className="text-sm font-medium">Suporte mútuo entre desenvolvedores independentes.</span>
              </li>
            </ul>

            <a
              href={LINKS.discord}
              className="mt-10 w-full bg-primary text-background-dark font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            >
              Juntar-se à Missão <MaterialIcon name="arrow_forward" />
            </a>
          </div>
        </div>
      </div>

      <section className="mt-40 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <h2 className="text-4xl font-bold font-display max-w-md">O que nos move todos os dias.</h2>
          <p className="text-slate-500 max-w-xs text-sm uppercase tracking-widest leading-loose">
            Valores fundamentais que guiam nossa evolução técnica e humana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="flex flex-col gap-4 p-8 rounded-xl bg-slate-100 dark:bg-card-dark border border-transparent hover:border-primary/20 transition-all group"
            >
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-colors">
                <MaterialIcon name={v.icon} />
              </div>
              <h4 className="text-xl font-bold font-display mt-2">{v.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
