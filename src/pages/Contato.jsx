import React from 'react';

import MaterialIcon from '../components/MaterialIcon.jsx';
import { LINKS } from '../config/links.js';

const socialLinks = [
  {
    labelSmall: 'Comunidade',
    labelMain: 'Entrar no Discord',
    href: LINKS.discord,
    tint: 'blue',
    icon: 'chat',
    iconBg: 'bg-[#5865F2]/20',
    iconText: 'text-[#5865F2]'
  },
  {
    labelSmall: 'Notícias',
    labelMain: 'Seguir no X',
    href: LINKS.twitter,
    tint: 'yellow',
    icon: 'alternate_email',
    iconBg: 'bg-primary/20',
    iconText: 'text-primary'
  },
  {
    labelSmall: 'Conteúdo',
    labelMain: 'Inscrever-se',
    href: LINKS.youtube,
    tint: 'yellow',
    icon: 'play_circle',
    iconBg: 'bg-[#FF0000]/20',
    iconText: 'text-[#FF0000]'
  },
  {
    labelSmall: 'Código',
    labelMain: 'Contribuir',
    href: LINKS.github,
    tint: 'blue',
    icon: 'code',
    iconBg: 'bg-white/20',
    iconText: 'text-white'
  }
];

const quickActions = [
  { label: 'E-mail', icon: 'mail', accent: 'primary' },
  { label: 'Localização', icon: 'location_on', accent: 'accent-blue' },
  { label: 'Suporte', icon: 'support_agent', accent: 'primary' }
];

export default function Contato() {
  return (
    <div className="relative flex items-center justify-center px-4 py-20">
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[800px] w-full text-center space-y-12 relative z-10">
        <div className="space-y-4">
          <h1 className="text-primary text-6xl md:text-8xl font-bold tracking-tighter uppercase">CONTATO</h1>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-[600px] mx-auto leading-relaxed">
            Conecte-se com a <span className="text-white font-medium">Stylo Community</span> através das nossas redes
            oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {socialLinks.map((item) => (
            <a
              key={item.labelMain}
              className={`group flex items-center justify-between gap-4 p-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 ${
                item.tint === 'blue' ? 'bloom-blue' : 'bloom-yellow'
              }`}
              href={item.href}
            >
              <div className="flex items-center gap-5">
                <div className={`${item.iconBg} p-3 rounded-full ${item.iconText}`}>
                  <MaterialIcon name={item.icon} className="!text-3xl" />
                </div>

                <div className="text-left">
                  <span className="block text-xs uppercase tracking-widest text-white/40 font-bold">
                    {item.labelSmall}
                  </span>
                  <span
                    className={`block text-xl font-bold text-white transition-colors ${
                      item.tint === 'blue' ? 'group-hover:text-accent-blue' : 'group-hover:text-primary'
                    }`}
                  >
                    {item.labelMain}
                  </span>
                </div>
              </div>

              <MaterialIcon
                name="arrow_outward"
                className={`text-white/20 transition-colors ${
                  item.tint === 'blue' ? 'group-hover:text-accent-blue' : 'group-hover:text-primary'
                }`}
              />
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-12 pt-10">
          {quickActions.map((a) => (
            <div key={a.label} className="flex flex-col items-center gap-2 group cursor-pointer">
              <div
                className={`rounded-full bg-white/5 border border-white/10 p-4 transition-all ${
                  a.accent === 'accent-blue'
                    ? 'group-hover:border-accent-blue/50 group-hover:bg-accent-blue/5'
                    : 'group-hover:border-primary/50 group-hover:bg-primary/5'
                }`}
              >
                <MaterialIcon
                  name={a.icon}
                  className={`text-white/60 transition-colors ${
                    a.accent === 'accent-blue' ? 'group-hover:text-accent-blue' : 'group-hover:text-primary'
                  }`}
                />
              </div>
              <p className="text-xs uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-colors">
                {a.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
